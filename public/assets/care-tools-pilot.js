import {calendarDay, currentDay, computeCalculator, numericValue, readLog, changeLog, validateLogValues, measurementValue, formatGestationalAge} from './care-tools-core.js';
import {renderCycleCalendar, renderPregnancyTimeline, renderGrowthDashboard, renderAppointmentCalendar} from './care-tools-visuals.js';
import {calendarFile} from './care-organizers-core.js';

const node = (tag, className, text) => {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
};
const locale = () => document.documentElement.lang || 'en';
const number = value => new Intl.NumberFormat(locale(), {maximumFractionDigits: 3}).format(value);
const date = day => new Intl.DateTimeFormat(locale(), {dateStyle: 'medium', timeZone: 'UTC'}).format(new Date(day * 86400000));
const template = (text, values) => Object.entries(values).reduce((result, [key, value]) => result.replaceAll(`{${key}}`, value), text);
const formValues = form => Object.fromEntries(Array.from(new FormData(form), ([key, value]) => [key, String(value).trim()]));
const todayIso = () => new Date(currentDay() * 86400000).toISOString().slice(0, 10);
const button = (text, action, secondary = true) => {
  const element = node('button', `button${secondary ? ' secondary' : ''} pilot-button`, text);
  element.type = 'button';
  if (action) element.addEventListener('click', action);
  return element;
};

function createForm(config, ui, action, onSubmit) {
  const form = node('form', 'pilot-form');
  form.noValidate = true;
  const grid = node('div', 'pilot-fields');
  const controls = new Map();
  for (const field of config.fields) {
    const wrap = node('div', `pilot-field pilot-field-${field.name}`);
    const id = `pilot-${config.id}-${field.name}`;
    const label = node('label', '', field.label);
    label.htmlFor = id;
    let input;
    if (field.type === 'select') {
      input = node('select');
      for (const option of field.options) {
        const optionNode = node('option', '', option.label);
        optionNode.value = option.value;
        input.append(optionNode);
      }
    } else {
      input = node(field.name === 'note' ? 'textarea' : 'input');
      if (input.tagName === 'INPUT') input.type = field.type || 'text';
      else input.rows = 2;
    }
    input.id = id;
    input.name = field.name;
    if (field.defaultValue !== undefined) input.value = field.defaultValue;
    if (field.min !== undefined) input.min = field.min;
    if (field.max !== undefined) input.max = field.max;
    if (field.type === 'number') input.step = '1';
    if (field.name === 'lastPeriod' || (config.id === 'growth-log' && field.name === 'date')) input.max = todayIso();
    if (['weight', 'length'].includes(field.name)) { input.type = 'text'; input.inputMode = 'decimal'; }
    if (['note', 'symptom'].includes(field.name)) input.maxLength = 2000;
    const error = node('span', 'pilot-error');
    error.id = `${id}-error`;
    error.hidden = true;
    input.setAttribute('aria-describedby', error.id);
    wrap.append(label, input);
    if (['cycleLength', 'lutealLength'].includes(field.name)) {
      const hint = node('span', 'pilot-hint', `${number(Number(field.min))}–${number(Number(field.max))} ${ui.daysUnit}`);
      hint.id = `${id}-hint`;
      input.setAttribute('aria-describedby', `${hint.id} ${error.id}`);
      wrap.append(hint);
    }
    wrap.append(error);
    grid.append(wrap);
    controls.set(field.name, {input, error});
  }
  const actions = node('div', 'pilot-actions');
  const submit = button(action, null, false);
  submit.type = 'submit';
  actions.append(submit);
  const status = node('p', 'pilot-status');
  status.setAttribute('role', 'status');
  status.setAttribute('aria-live', 'polite');
  form.append(grid, actions, status);
  const showErrors = errors => {
    for (const [key, {input, error}] of controls) {
      const invalid = !!errors[key];
      error.textContent = invalid ? ui[errors[key]] || ui.required : '';
      error.hidden = !invalid;
      input.setAttribute('aria-invalid', String(invalid));
    }
    const first = Object.keys(errors).find(key => controls.has(key));
    if (first) { status.textContent = ui.errors; controls.get(first).input.focus(); }
    return !!first;
  };
  form.addEventListener('submit', event => {
    event.preventDefault();
    status.textContent = '';
    showErrors({});
    onSubmit(formValues(form), {showErrors, status, submit});
  });
  form.addEventListener('input', () => {
    status.textContent = '';
    showErrors({});
  });
  return {form, actions, status, submit, controls, showErrors};
}

function resultValue(row, ui) {
  if (row.date !== undefined) return date(row.date);
  if (row.from !== undefined) return `${date(row.from)} – ${date(row.to)}`;
  return formatGestationalAge(row.weeks,row.days,locale());
}

export function renderCalculatorPilot(config, runtimeLabels) {
  const ui = {...runtimeLabels, ...config.ui};
  if (config.combined && !config.chosenMethod) {
    const wrapper=node('div','combined-calculator'),label=node('label','pilot-field calculator-method'),select=node('select');
    select.setAttribute('aria-label',ui.pregnancyMethod);
    for(const [value,text] of [['dueDate',ui.lastPeriodMethod],['pregnancyWeek',ui.knownDueMethod]]) {const option=node('option','',text);option.value=value;select.append(option);}
    if(new URLSearchParams(location.search).get('method')==='due-date')select.value='pregnancyWeek';
    label.append(node('span','',ui.pregnancyMethod),select);const body=node('div');
    const render=()=>body.replaceChildren(renderCalculatorPilot({...config,chosenMethod:true,calculator:select.value,fields:select.value==='pregnancyWeek'?config.dueDateFields:config.fields},runtimeLabels));
    select.addEventListener('change',render);wrapper.append(label,body);render();return wrapper;
  }
  const layout = node('div', 'tool-pilot pilot-calculator');
  const inputs = node('section', 'pilot-card');
  inputs.append(node('h2', 'pilot-heading', ui.details));
  const result = node('section', 'pilot-card pilot-estimate');
  const visual = node('div', 'pilot-wide');
  result.setAttribute('aria-live', 'polite');
  const empty = () => {
    visual.replaceChildren();
    result.replaceChildren(node('p', 'pilot-eyebrow', ui.result), node('div', 'pilot-calendar-mark', '◷'), node('p', 'pilot-empty', ui.emptyResult));
    result.querySelector('.pilot-calendar-mark').setAttribute('aria-hidden', 'true');
  };
  empty();
  const form = createForm(config, ui, ui[`${config.calculator}Action`], (values, feedback) => {
    const calculated = computeCalculator(config.calculator, values);
    if (feedback.showErrors(calculated.errors)) { empty(); return; }
    result.replaceChildren(node('p', 'pilot-eyebrow', ui.result));
    calculated.rows.forEach((row, index) => {
      const item = node('div', `pilot-estimate-item${index === 0 ? ' pilot-estimate-main' : ''}`);
      item.append(node('h3', 'pilot-result-label', ui[row.label]), node('p', 'pilot-result-value', resultValue(row, ui)));
      result.append(item);
    });
    visual.replaceChildren(config.calculator === 'ovulation' ? renderCycleCalendar(calculated, values, ui) : renderPregnancyTimeline(calculated, ui));
    if (calculated.elapsedDays !== undefined) {
      const progress = node('div', 'pilot-progress');
      progress.setAttribute('role', 'progressbar');
      progress.setAttribute('aria-label', ui.completedWeeks);
      progress.setAttribute('aria-valuemin', '0');
      progress.setAttribute('aria-valuemax', '40');
      progress.setAttribute('aria-valuenow', String(Math.min(40, calculated.elapsedDays / 7)));
      progress.setAttribute('aria-valuetext', resultValue(calculated.rows[1], ui));
      const fill = node('span');
      fill.style.width = `${Math.min(100, calculated.elapsedDays / 280 * 100)}%`;
      progress.append(fill);
      const caption = node('div', 'pilot-progress-labels');
      caption.append(node('span', '', number(0)), node('span', '', `${ui.completedWeeks} · ${number(40)}`));
      result.append(progress, caption);
    }
  });
  form.form.addEventListener('input', empty);
  inputs.append(form.form);
  if (config.sources?.length) {
    const sources = node('div', 'pilot-sources');
    for (const source of config.sources) { const link = node('a', '', source.label); link.href = source.url; sources.append(link); }
    inputs.append(sources);
  }
  layout.append(inputs, result, visual);
  return layout;
}

function download(content, filename, type='application/json') {
  const resource = URL.createObjectURL(new Blob([content], {type}));
  const link = node('a');
  link.href = resource;
  link.download = filename;
  link.click();
  setTimeout(() => URL.revokeObjectURL(resource), 1000);
}

function drawTrend(entries, field, label, ui) {
  const points = entries.map(entry => ({day: calendarDay(entry.date), value: measurementValue(entry, field)}))
    .filter(point => point.day !== undefined && point.value !== undefined).sort((a, b) => a.day - b.day);
  const box = node('section', 'pilot-trend');
  box.append(node('h3', 'pilot-result-label', `${label} (${field === 'weight' ? 'kg' : 'cm'})`));
  if (points.length < 2 || points[0].day === points.at(-1).day) { box.append(node('p', 'pilot-hint', ui.trendEmpty)); return box; }
  const ns = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(ns, 'svg');
  svg.setAttribute('viewBox', '0 0 360 120');
  svg.setAttribute('role', 'img');
  const description = `${label}: ${date(points[0].day)} – ${date(points.at(-1).day)}. ${number(points[0].value)} – ${number(points.at(-1).value)} ${field === 'weight' ? 'kg' : 'cm'}`;
  svg.setAttribute('aria-label', description);
  const values = points.map(point => point.value);
  const min = Math.min(...values), max = Math.max(...values), spread = max - min || 1;
  const coords = points.map(point => [14 + (point.day - points[0].day) / (points.at(-1).day - points[0].day) * 332, 96 - (point.value - min) / spread * 72]);
  const line = document.createElementNS(ns, 'polyline');
  line.setAttribute('points', coords.map(point => point.join(',')).join(' '));
  svg.append(line);
  // The history supplies the exact values; the visual is a within-child trend only.
  for (const [x, y] of [coords[0], coords.at(-1)]) {
    const dot = document.createElementNS(ns, 'circle');
    dot.setAttribute('cx', x); dot.setAttribute('cy', y); dot.setAttribute('r', '4'); svg.append(dot);
  }
  const ends = node('div', 'pilot-progress-labels');
  ends.append(node('span', '', `${date(points[0].day)} · ${number(points[0].value)}`), node('span', '', `${date(points.at(-1).day)} · ${number(points.at(-1).value)}`));
  box.append(svg, ends);
  return box;
}

export function renderLogPilot(config, runtimeLabels) {
  const ui = {...runtimeLabels, ...config.ui};
  const growth = config.id === 'growth-log';
  const key = `bemama.tool.${config.id}`;
  const storage = {getItem: name => window.localStorage.getItem(name), setItem: (name, value) => window.localStorage.setItem(name, value)};
  let state = readLog(storage, key);
  let editing;
  let visible = 10;
  const dashboardState = {};
  const layout = node('div', 'tool-pilot pilot-log');
  const inputCard = node('section', 'pilot-card');
  inputCard.append(node('h2', 'pilot-heading', ui.details));
  const outputCard = node('section', 'pilot-card pilot-history');
  const status = node('p', 'pilot-status');
  status.setAttribute('role', 'status');
  const controls = createForm(config, ui, ui.saveEntry, (values, feedback) => {
    if (feedback.showErrors(validateLogValues(values, growth, editing))) return;
    const entry = {...values, id: crypto.randomUUID(), createdAt: new Date().toISOString()};
    if (apply(editing ? {type: 'edit', id: editing.id, values} : {type: 'add', entry})) {
      resetForm();
      feedback.status.textContent = ui.saved;
    }
  });
  const cancel = button(ui.cancel, () => resetForm());
  cancel.hidden = true;
  controls.actions.append(cancel);
  inputCard.append(controls.form, node('p', 'pilot-hint', config.labels.local));
  const backup = button(ui.backup, () => {
    const fresh = readLog(storage, key);
    const content = fresh.ok ? JSON.stringify(fresh.log, null, 2) : fresh.raw;
    if (content !== undefined && content !== null) download(content, `bemama-${config.id}-${todayIso()}.json`);
    else status.textContent = ui.readFailed;
  });
  const undo = button(ui.undo, () => { if (apply({type: 'undo'})) status.textContent = ui.saved; });
  const historyHead = node('div', 'pilot-history-heading');
  historyHead.append(node('h2', 'pilot-heading', ui.history));
  const count = node('span', 'pilot-count');
  historyHead.append(count);
  const historyActions = node('div', 'pilot-actions');
  historyActions.append(backup, undo);
  const calendarExport = !growth ? button(ui.calendarExport,()=>download(calendarFile(state.log.entries),`bemama-appointments.ics`,'text/calendar;charset=utf-8')) : undefined;
  if(calendarExport) {historyActions.append(calendarExport);inputCard.append(node('p','pilot-hint',ui.calendarExportHelp));}
  const chart = node('div', 'pilot-charts');
  const list = node('div', 'pilot-entry-list');
  const more = button(ui.showMore, () => { visible += 10; render(); });
  outputCard.append(historyHead, status, historyActions, chart, list, more);
  const dashboard = node('div', 'pilot-wide');
  layout.append(inputCard, outputCard, dashboard);

  function resetForm() {
    controls.form.reset();
    editing = undefined;
    cancel.hidden = true;
    controls.submit.textContent = ui.saveEntry;
    controls.showErrors({});
    controls.status.textContent = '';
  }
  function apply(change) {
    if (!state.ok) { status.textContent = ui[state.error]; return false; }
    const next = changeLog(storage, key, state.raw, change);
    if (!next.ok) { controls.status.textContent = ui[next.error]; controls.status.classList.add('pilot-error-status'); return false; }
    state = next;
    controls.status.classList.remove('pilot-error-status');
    render();
    return true;
  }
  function edit(entry) {
    editing = entry;
    controls.showErrors({});
    for (const [name, {input}] of controls.controls) input.value = entry[name] ?? '';
    controls.submit.textContent = ui.updateEntry;
    controls.status.textContent = '';
    cancel.hidden = false;
    controls.controls.get('date').input.focus();
  }
  function render() {
    list.replaceChildren(); chart.replaceChildren(); dashboard.replaceChildren();
    if (!state.ok) {
      status.textContent = ui[state.error]; status.classList.add('pilot-error-status');
      controls.submit.disabled = true; undo.hidden = true; more.hidden = true;
      backup.disabled = !state.raw;
      return;
    }
    status.textContent = '';
    const entries = state.log.entries;
    count.textContent = template(ui.count, {count: number(entries.length)});
    undo.hidden = !state.log.removed.length;
    backup.disabled = !entries.length && !state.log.removed.length;
    if(calendarExport)calendarExport.disabled=!entries.some(e=>calendarDay(e.date)!==undefined&&e.symptom?.trim());
    if (!entries.length) list.append(node('p', 'pilot-empty', ui.emptyLog));
    if (growth && entries.length) {
      if (entries.some(entry => (entry.weight && !entry.weightUnit) || (entry.length && !entry.lengthUnit))) chart.append(node('p', 'pilot-unit-notice', ui.unknownHelp));
    }
    if (growth) dashboard.append(renderGrowthDashboard(entries, config.fields, ui, dashboardState));
    else dashboard.append(renderAppointmentCalendar(entries, ui, dashboardState));
    const ordered = [...entries].sort((a, b) => (calendarDay(b.date) ?? -Infinity) - (calendarDay(a.date) ?? -Infinity));
    for (const entry of ordered.slice(0, visible)) {
      const item = node('article', 'pilot-entry');
      const day = calendarDay(entry.date);
      item.append(node('h3', 'pilot-entry-date', day === undefined ? String(entry.date || ui.unknownUnit) : date(day)));
      const detail = node('dl', 'pilot-entry-details');
      for (const field of config.fields) {
        if (field.name === 'date' || field.name.endsWith('Unit') || !entry[field.name]) continue;
        let value = String(entry[field.name]);
        if (growth && ['weight', 'length'].includes(field.name)) {
          const numeric = numericValue(value);
          value = `${numeric === undefined ? value : number(numeric)} ${entry[`${field.name}Unit`] || ui.unknownUnit}`;
        }
        detail.append(node('dt', '', field.label), node('dd', '', value));
      }
      const actions = node('div', 'pilot-actions');
      const editButton = button(ui.edit, () => edit(entry));
      editButton.setAttribute('aria-label', `${ui.edit}: ${day === undefined ? entry.date || '' : date(day)}`);
      const removeButton = button(ui.remove, () => {
        if (apply({type: 'remove', id: entry.id})) {
          if (editing?.id === entry.id) resetForm();
          status.textContent = ui.removed;
          undo.focus();
        }
      });
      actions.append(editButton, removeButton); item.append(detail, actions); list.append(item);
    }
    more.hidden = entries.length <= visible;
  }
  render();
  return layout;
}

export function renderPlannerPilot(config, runtimeLabels) {
  const ui = {...runtimeLabels, ...config.ui};
  const card = node('div', 'tool-pilot pilot-planner');
  const result = node('section', 'pilot-card pilot-estimate');
  result.setAttribute('aria-live', 'polite');
  const form = createForm(config, ui, config.labels.action, (values, feedback) => {
    const suggestion = config.suggestions?.[values.ageGroup];
    if (!suggestion) { feedback.showErrors({ageGroup:'required'}); return; }
    const label = config.fields.find(field => field.name === 'ageGroup').options.find(option => option.value === values.ageGroup).label;
    result.replaceChildren(node('h2', 'pilot-heading', label), node('p', 'pilot-guidance', suggestion));
    if (config.sources?.length) {
      const links = node('div', 'pilot-sources');
      for (const source of config.sources) { const link=node('a','',source.label); link.href=source.url; links.append(link); }
      result.append(links);
    }
  });
  form.form.addEventListener('input', () => result.replaceChildren());
  result.hidden = true;
  form.form.addEventListener('submit', () => { result.hidden = !result.childNodes.length; });
  form.form.addEventListener('input', () => { result.hidden = true; });
  const inputs = node('section', 'pilot-card'); inputs.append(form.form);
  card.append(inputs,result);
  return card;
}
