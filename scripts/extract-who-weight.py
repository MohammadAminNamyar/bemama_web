"""Rebuild the small browser dataset from retained WHO source workbooks."""
from pathlib import Path
import hashlib
import json
import openpyxl

root = Path(__file__).resolve().parent.parent
source = root / 'docs/tool-quality-revision-2026-09-12/data'
data = {}
manifest = {}
for sex in ['girls', 'boys']:
    path = source / f'who-weight-{sex}.xlsx'
    rows = list(openpyxl.load_workbook(path, data_only=True).active.values)
    headings = rows[0]
    indices = [headings.index(key) for key in ['Month', 'P3', 'P15', 'P50', 'P85', 'P97']]
    data[sex] = [[row[i] for i in indices] for row in rows[1:] if isinstance(row[0], (int, float)) and row[0] <= 24]
    assert len(data[sex]) == 25 and [row[0] for row in data[sex]] == list(range(25))
    manifest[sex] = {'sha256': hashlib.sha256(path.read_bytes()).hexdigest(), 'rows': 25, 'columns': ['Month', 'P3', 'P15', 'P50', 'P85', 'P97']}
(root / 'public/assets/who-weight-reference.js').write_text('// WHO weight-for-age percentile tables. Source workbooks and extraction script are retained in the repository.\nexport const whoWeight = ' + json.dumps(data, separators=(',', ':')) + ';\n', encoding='utf-8')
(source / 'manifest.json').write_text(json.dumps(manifest, indent=2) + '\n', encoding='utf-8')
