import assert from 'node:assert/strict';
import {test} from 'node:test';
import {persianDay,dateParts,localizedMonths,weekStart} from '../public/assets/local-calendar.js';
import {calendarDay,computeCalculator} from '../public/assets/care-tools-core.js';
const iso=day=>new Date(day*86400000).toISOString().slice(0,10);

test('Persian date input converts known Nowruz and leap boundaries without normalization',()=>{
  assert.equal(iso(persianDay(1403,1,1)),'2024-03-20');
  assert.equal(iso(persianDay(1403,12,30)),'2025-03-20');
  assert.equal(iso(persianDay(1404,1,1)),'2025-03-21');
  assert.equal(persianDay(1404,12,30),undefined);
  for(const parts of [[1405,7,31],[1405,0,2],[1405,13,1],[1405,1,0],[1405,1,1.5]])assert.equal(persianDay(...parts),undefined);
});
test('Persian month grids have Solar Hijri boundaries and Saturday first',()=>{
  const months=localizedMonths(calendarDay('2026-09-16'),calendarDay('2026-10-14'),'fa');
  assert.equal(weekStart('fa'),6);
  assert.deepEqual(months.map(m=>dateParts(m.start)),[{year:1405,month:6,day:1},{year:1405,month:7,day:1}]);
  assert.deepEqual(months.map(m=>m.days),[31,30]);
  assert.equal(months[0].offset,(new Date(months[0].start*86400000).getUTCDay()+1)%7);
});
test('calendar conversion preserves ovulation estimates and crosses the Persian new year',()=>{
  const input={lastPeriod:iso(persianDay(1405,6,25)),cycleLength:'28',lutealLength:'14'};
  const result=computeCalculator('ovulation',input,calendarDay('2026-09-26'));
  assert.deepEqual(result.errors,{});
  assert.deepEqual(dateParts(result.rows[0].date),{year:1405,month:7,day:8});
  assert.deepEqual(dateParts(result.rows[2].date),{year:1405,month:7,day:22});
  const months=localizedMonths(persianDay(1403,12,28),persianDay(1404,1,2),'fa');
  assert.deepEqual(months.map(m=>m.days),[30,31]);
});
test('Gregorian months retain their leap-day and year transition behaviour',()=>{
  assert.deepEqual(localizedMonths(calendarDay('2024-02-10'),calendarDay('2024-03-02')).map(m=>m.days),[29,31]);
  assert.deepEqual(localizedMonths(calendarDay('2026-12-31'),calendarDay('2027-01-01')).map(m=>iso(m.start)),['2026-12-01','2027-01-01']);
});
test('every valid day around leap years round-trips through the Persian controls',()=>{
  for(let day=calendarDay('2023-03-01');day<=calendarDay('2027-04-01');day++) {
    const parts=dateParts(day);
    assert.equal(persianDay(parts.year,parts.month,parts.day),day);
  }
});
