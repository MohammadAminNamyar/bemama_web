const root = document.querySelector('[data-birth-preferences]');
if (root) {
  const {copy, fields} = JSON.parse(root.querySelector('[data-birth-config]').textContent);
  const key = 'bemama.birth-preferences.v1';
  const controls = fields.map(name => root.querySelector(`[name="${name}"]`));
  const status = root.querySelector('[data-birth-status]');
  const values = () => controls.map(control => control.value.trim());
  const show = index => { status.textContent = copy[index]; };
  try {
    const raw = localStorage.getItem(key);
    if (raw !== null) {
      const saved = JSON.parse(raw);
      if (saved.version !== 1 || !Array.isArray(saved.values) || saved.values.length !== fields.length || saved.values.some(v => typeof v !== 'string' || v.length > 2000)) throw new Error('Invalid preferences');
      saved.values.forEach((value, i) => { controls[i].value = value; });
    }
  } catch { show(14); }
  root.addEventListener('input', () => show(18));
  let printSheet;
  const preparePrint = () => {
    printSheet?.remove();
    printSheet = document.createElement('section');
    printSheet.className = 'birth-print-sheet';
    printSheet.dir = document.documentElement.dir || 'ltr';
    const add = (tag, text) => { const node = document.createElement(tag); node.textContent = text; printSheet.append(node); };
    add('h1', copy[0]); add('p', copy[1]);
    values().forEach((value, i) => { add('h2', copy[i+2]); add('p', value || '—'); });
    document.body.append(printSheet);
    document.body.classList.add('printing-birth-preferences');
  };
  window.addEventListener('afterprint', () => {
    document.body.classList.remove('printing-birth-preferences'); printSheet?.remove();
  });
  root.addEventListener('click', event => {
    const action = event.target.closest('[data-birth-action]')?.dataset.birthAction;
    if (action === 'save') {
      try { localStorage.setItem(key, JSON.stringify({version: 1, values: values()})); show(13); }
      catch { show(14); }
    } else if (action === 'clear' && window.confirm(copy[15])) {
      try { localStorage.removeItem(key); controls.forEach(control => { control.value = ''; }); show(16); }
      catch { show(14); }
    } else if (action === 'print') { preparePrint(); window.print(); }
    else if (action === 'download') {
      const text = [copy[0], copy[1], ...values().map((value, i) => `${copy[i+2]}\n${value || '—'}`)].join('\n\n');
      const url = URL.createObjectURL(new Blob(['\uFEFF', text], {type:'text/plain;charset=utf-8'}));
      const link = document.createElement('a'); link.href = url; link.download = 'bemama-birth-preferences.txt'; link.click();
      setTimeout(() => URL.revokeObjectURL(url), 1000); show(17);
    }
  });
}
