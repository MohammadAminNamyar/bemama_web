// Date-only calculations use UTC day numbers, independent of daylight-saving time.
const DAY_MS = 86400000;

export function formatGestationalAge(weeks,days,locale='en') {
  const values=[['week',weeks],['day',days]].map(([unit,value])=>new Intl.NumberFormat(locale,{style:'unit',unit,unitDisplay:'long'}).format(value));
  return new Intl.ListFormat(locale,{style:'long',type:'conjunction'}).format(values);
}

export function calendarDay(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(String(value))) return undefined;
  const [year, month, day] = value.split('-').map(Number);
  if (year < 1000 || month < 1 || month > 12 || day < 1 || day > 31) return undefined;
  const date = new Date(Date.UTC(year, month - 1, day));
  if (date.getUTCFullYear() !== year || date.getUTCMonth() !== month - 1 || date.getUTCDate() !== day) return undefined;
  return date.valueOf() / DAY_MS;
}

export function currentDay(now = new Date()) {
  return Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()) / DAY_MS;
}

export function numericValue(value) {
  const text = String(value ?? '').trim().replace(/[۰-۹]/g, n => String('۰۱۲۳۴۵۶۷۸۹'.indexOf(n)))
    .replace(/[٠-٩]/g, n => String('٠١٢٣٤٥٦٧٨٩'.indexOf(n))).replace(/[،٫,]/g, '.');
  if (!/^\d+(?:\.\d+)?$/.test(text)) return undefined;
  const number = Number(text);
  return Number.isFinite(number) ? number : undefined;
}

export function computeCalculator(kind, values, today = currentDay()) {
  const errors = {};
  const field = kind === 'pregnancyWeek' ? 'dueDate' : 'lastPeriod';
  const inputDay = calendarDay(values[field]);
  if (inputDay === undefined) errors[field] = 'validDate';
  if (field === 'lastPeriod' && inputDay > today) errors[field] = 'pastDate';
  const cycle = numericValue(values.cycleLength);
  const luteal = numericValue(values.lutealLength);
  if (kind !== 'pregnancyWeek' && (!Number.isInteger(cycle) || cycle < 20 || cycle > 45)) errors.cycleLength = 'cycleRange';
  if (kind === 'ovulation' && (!Number.isInteger(luteal) || luteal < 10 || luteal > 18)) errors.lutealLength = 'lutealRange';
  if (Object.keys(errors).length) return {errors, rows: []};
  if (kind === 'ovulation') {
    const nextPeriod = inputDay + cycle;
    const ovulation = nextPeriod - luteal;
    return {errors, rows: [
      {label: 'ovulation', date: ovulation},
      {label: 'fertileWindow', from: ovulation - 5, to: ovulation},
      {label: 'nextPeriod', date: nextPeriod}
    ]};
  }
  const dueDate = kind === 'dueDate' ? inputDay + 280 + cycle - 28 : inputDay;
  const days = 280 - (dueDate - today);
  if (days < 0 || days > 294) return {errors: {[field]: days < 0 ? 'notStarted' : 'pastWindow'}, rows: []};
  return {errors, elapsedDays: days, rows: [
    {label: 'dueDate', date: dueDate},
    {label: 'pregnancyAge', weeks: Math.floor(days / 7), days: days % 7}
  ]};
}

function record(value) {
  return value && typeof value === 'object' && !Array.isArray(value);
}

export function readLog(storage, key) {
  let raw;
  try {
    raw = storage.getItem(key);
    const data = raw === null ? [] : JSON.parse(raw);
    const log = Array.isArray(data) ? {version: 2, entries: data, removed: []} : data;
    if (!record(log) || log.version !== 2 || !Array.isArray(log.entries) || !Array.isArray(log.removed)
      || !log.entries.every(record) || !log.removed.every(record)) return {ok: false, error: 'readFailed', raw};
    const used = new Set();
    const entries = log.entries.map((entry, index) => {
      let id = typeof entry.id === 'string' && entry.id ? entry.id : `legacy-${index}`;
      while (used.has(id)) id = `${id}-${index}`;
      used.add(id);
      return {...entry, id};
    });
    return {ok: true, raw, log: {...log, entries}};
  } catch { return {ok: false, error: 'readFailed', raw}; }
}

// Reject detected stale writes. localStorage has no atomic cross-tab transaction;
// this comparison catches changes already saved before this operation starts.
// Failed writes leave the old record untouched.
export function changeLog(storage, key, expectedRaw, change) {
  const state = readLog(storage, key);
  if (!state.ok) return state;
  if (state.raw !== expectedRaw) return {ok: false, error: 'conflict'};
  const next = {...state.log, entries: [...state.log.entries], removed: [...state.log.removed]};
  if (change.type === 'add') next.entries.unshift(change.entry);
  else if (change.type === 'edit') {
    const index = next.entries.findIndex(entry => entry.id === change.id);
    if (index < 0) return {ok: false, error: 'conflict'};
    next.entries[index] = {...next.entries[index], ...change.values, id: change.id};
  } else if (change.type === 'remove') {
    const entry = next.entries.find(entry => entry.id === change.id);
    if (!entry) return {ok: false, error: 'conflict'};
    next.entries = next.entries.filter(entry => entry.id !== change.id);
    next.removed.push(entry);
  } else if (change.type === 'undo') {
    const entry = next.removed.pop();
    if (!entry) return {ok: false, error: 'conflict'};
    next.entries.unshift(entry);
  } else return {ok: false, error: 'writeFailed'};
  try {
    const raw = JSON.stringify(next);
    storage.setItem(key, raw);
    return {ok: true, raw, log: next};
  } catch { return {ok: false, error: 'writeFailed'}; }
}

export function validateLogValues(values, growth, original, today = currentDay()) {
  const errors = {};
  const day = calendarDay(values.date);
  if (day === undefined) errors.date = 'validDate';
  else if (growth && day > today) errors.date = 'pastDate';
  if (!growth && !String(values.symptom || '').trim()) errors.symptom = 'required';
  if (growth) {
    if (!values.weight && !values.length) errors.weight = 'measurementRequired';
    for (const [field, units] of [['weight', ['kg', 'lb']], ['length', ['cm', 'in']]]) {
      if (!values[field]) continue;
      const number = numericValue(values[field]);
      if (number === undefined || number <= 0) errors[field] = 'positiveNumber';
      const key = `${field}Unit`;
      const unchangedUnknown = original && String(original[field] ?? '') === values[field] && !original[key] && !values[key];
      if (!units.includes(values[key]) && !unchangedUnknown) errors[key] = 'chooseUnit';
    }
  }
  return errors;
}

export function measurementValue(entry, field) {
  const number = numericValue(entry[field]);
  const unit = entry[`${field}Unit`];
  if (!number || !['kg', 'lb', 'cm', 'in'].includes(unit)) return undefined;
  if (field === 'weight') return unit === 'kg' ? number : unit === 'lb' ? number * 0.45359237 : undefined;
  return unit === 'cm' ? number : unit === 'in' ? number * 2.54 : undefined;
}
