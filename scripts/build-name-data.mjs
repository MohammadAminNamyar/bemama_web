// Rebuild from the retained official SSA table, not inferred meanings or origins.
import {readFile,writeFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
const source=new URL('../docs/tools-completion-2026-09-12/data/ssa-2020-2025.json',import.meta.url);
const bytes=await readFile(source), data=JSON.parse(bytes);
if(data.rows.length!==200||data.rows.some((r,i)=>r[0]!==i+1||r.length!==5))throw Error('Invalid SSA source');
const names=data.rows.flatMap(([rank,boy,boys,girl,girls])=>[{name:boy,sex:'M',rank,count:boys},{name:girl,sex:'F',rank,count:girls}]);
await writeFile(new URL('../public/assets/baby-name-data.js',import.meta.url),`// SSA national US births, 2020–2025. Source SHA256: ${createHash('sha256').update(bytes).digest('hex')}\nexport const nameSource=${JSON.stringify({url:data.url,period:data.period,asOf:data.asOf})};\nexport const nameData=${JSON.stringify(names)};\n`);
console.log(`Built ${names.length} sourced name/sex records.`);
