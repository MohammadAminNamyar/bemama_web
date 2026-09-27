// Keep stored/calculated dates as ISO Gregorian days; localize the controls and
// month boundaries together so a Persian label never sits on a Gregorian grid.
const DAY = 86400000;
const persianParts = new Intl.DateTimeFormat('en-u-ca-persian-nu-latn', {year:'numeric',month:'numeric',day:'numeric',timeZone:'UTC'});
export const calendarSystem = locale => locale.split('-')[0] === 'fa' ? 'persian' : 'gregory';
export const weekStart = locale => calendarSystem(locale) === 'persian' ? 6 : 0;
export function dateParts(day, calendar = 'persian') {
  const date = new Date(day * DAY);
  if (calendar === 'gregory') return {year:date.getUTCFullYear(),month:date.getUTCMonth()+1,day:date.getUTCDate()};
  return Object.fromEntries(persianParts.formatToParts(date).filter(part => ['year','month','day'].includes(part.type)).map(part => [part.type,Number(part.value)]));
}
export function persianDay(year, month, day) {
  if (![year,month,day].every(Number.isInteger) || year < 1000 || year > 2000 || month < 1 || month > 12 || day < 1 || day > 31) return undefined;
  const target = year * 10000 + month * 100 + day;
  let low = Date.UTC(year+621,0,1)/DAY, high = Date.UTC(year+622,11,31)/DAY;
  while (low <= high) {
    const mid = Math.floor((low+high)/2), parts = dateParts(mid);
    const value = parts.year*10000+parts.month*100+parts.day;
    if (value === target) return mid;
    if (value < target) low = mid+1; else high = mid-1;
  }
  return undefined;
}
export function localizedMonths(from, to, locale = 'en') {
  if (!Number.isInteger(from) || !Number.isInteger(to) || from > to) return [];
  const calendar = calendarSystem(locale), months = [];
  let start = from - dateParts(from,calendar).day + 1;
  while (start <= to) {
    let next = start + 28;
    while (dateParts(next,calendar).day !== 1) next++;
    months.push({start,offset:(new Date(start*DAY).getUTCDay()-weekStart(locale)+7)%7,days:next-start});
    start = next;
  }
  return months;
}

// Native selects support keyboard/touch and Persian month names consistently
// across browsers, unlike input[type=date], whose popup follows OS settings.
export function persianDateControl(input, label, {monthOnly = false} = {}) {
  const initialValue = input.value;
  const originalId = input.id;
  input.type = 'hidden';
  const group = document.createElement('div');
  group.className = 'persian-date-fields';
  group.setAttribute('role','group');
  group.setAttribute('aria-label',`${label} (هجری شمسی)`);
  const names = ['فروردین','اردیبهشت','خرداد','تیر','مرداد','شهریور','مهر','آبان','آذر','دی','بهمن','اسفند'];
  const digits = new Intl.NumberFormat('fa',{useGrouping:false});
  const today = dateParts(Math.floor(Date.now()/DAY));
  const selects = {};
  for (const [key,title] of (monthOnly ? [['month','ماه'],['year','سال']] : [['day','روز'],['month','ماه'],['year','سال']])) {
    const wrap = document.createElement('label'), text = document.createElement('span'), select = document.createElement('select');
    text.textContent = title;
    select.setAttribute('aria-label',`${label} — ${title} شمسی`);
    select.id = `${originalId || 'persian-date'}-${key}`;
    wrap.append(text,select); group.append(wrap); selects[key] = select;
    const values = key === 'month' ? Array.from({length:12},(_,i)=>i+1) : key === 'year' ? Array.from({length:131},(_,i)=>today.year+10-i) : [];
    if (key !== 'year') select.add(new Option(title,''));
    values.forEach(value => select.add(new Option(key === 'month' ? names[value-1] : digits.format(value),String(value))));
  }
  selects.year.value = String(today.year);
  const updateDays = () => {
    if (monthOnly) return;
    const selected = selects.day.value;
    selects.day.replaceChildren(new Option('روز',''));
    const year=Number(selects.year.value), month=Number(selects.month.value);
    for (let day=1;day<=31;day++) if (!month || persianDay(year,month,day)!==undefined) selects.day.add(new Option(digits.format(day),String(day)));
    selects.day.value = selected;
    if (selects.day.selectedIndex < 0) selects.day.value = '';
  };
  const sync = () => {
    const timestamp = /^\d{4}-\d{2}-\d{2}$/.test(input.value) ? Date.parse(`${input.value}T00:00:00Z`) : NaN;
    if (!Number.isFinite(timestamp)) {selects.month.value='';if(selects.day)selects.day.value='';return;}
    const parts=dateParts(timestamp/DAY);
    selects.year.value=String(parts.year); selects.month.value=String(parts.month);
    updateDays(); if(selects.day)selects.day.value=String(parts.day);
  };
  Object.entries(selects).forEach(([key,select]) => select.addEventListener('change', () => {
    if(key !== 'day')updateDays();
    const day=persianDay(Number(selects.year.value),Number(selects.month.value),monthOnly?1:Number(selects.day.value));
    input.value=day===undefined?'':new Date(day*DAY).toISOString().slice(0,10);
    input.dispatchEvent(new Event('input',{bubbles:true}));
    input.dispatchEvent(new Event('change',{bubbles:true}));
  }));
  updateDays();
  sync();
  return {element:group,focusTarget:selects.day||selects.month,inputs:Object.values(selects),sync,reset:()=>{input.value=initialValue;selects.year.value=String(today.year);sync();}};
}
