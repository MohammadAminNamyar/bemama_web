// A fictional teaching dataset, never a recommended schedule or child record.
// Minutes are offsets from 07:00 to 07:00 the following day.
const example = [
  [0,120,'awake'], [120,195,'nap'], [195,315,'awake'],
  [315,390,'nap'], [390,525,'awake'], [525,570,'nap'],
  [570,750,'awake'], [750,1050,'night'], [1050,1080,'awake'],
  [1080,1260,'night'], [1260,1290,'awake'], [1290,1440,'night']
];
export function exampleSleepLog(incomplete = false) {
  const rows = example.filter(([start,end]) => !incomplete || end <= 390 || start >= 750)
    .map(([start,end,kind]) => ({start,end,kind}));
  if (incomplete) rows.push({start:390,end:750,kind:'unknown'});
  return rows.sort((a,b)=>a.start-b.start);
}
export function sleepLogTotals(rows) {
  let previous = 0;
  const totals = { nap:0, night:0, awake:0, unknown:0, sleep:0 };
  for (const row of rows) {
    if (!Number.isInteger(row.start) || !Number.isInteger(row.end)
      || row.start !== previous || row.end <= row.start || row.end > 1440
      || !['nap','night','awake','unknown'].includes(row.kind)) throw new Error('Invalid example timeline');
    totals[row.kind] += row.end-row.start;
    previous=row.end;
  }
  if(previous!==1440) throw new Error('The timeline must describe a full day, including unknown periods');
  totals.sleep=totals.nap+totals.night;
  return totals;
}
export function exampleClock(offset) {
  const minutes=(420+offset)%1440;
  return String(Math.floor(minutes/60)).padStart(2,'0')+':'+String(minutes%60).padStart(2,'0');
}
