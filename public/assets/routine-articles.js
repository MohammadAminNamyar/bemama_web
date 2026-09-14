// These article examples never send, persist or assess a child's data.
for (const demo of document.querySelectorAll('[data-sleep-demo]')) {
  demo.querySelector('.routine-switch').hidden=false;
  for (const button of demo.querySelectorAll('[data-sleep-mode]')) button.addEventListener('click',()=>{
    const mode=button.dataset.sleepMode;
    for(const tab of demo.querySelectorAll('[data-sleep-mode]')) tab.setAttribute('aria-pressed',String(tab===button));
    for(const panel of demo.querySelectorAll('[data-sleep-panel]')) panel.hidden=panel.dataset.sleepPanel!==mode;
  });
}
for (const sheet of document.querySelectorAll('[data-feeding-sheet]')) {
  sheet.querySelector('.routine-actions').hidden=false;
  const entries=sheet.querySelector('[data-feeding-entries]');
  sheet.querySelector('[data-add-feeding-row]').addEventListener('click',()=>{
    const fragment=sheet.querySelector('template').content.cloneNode(true);
    fragment.querySelector('[data-entry-number]').textContent=new Intl.NumberFormat(document.documentElement.lang).format(entries.children.length+1);
    entries.append(fragment);
    entries.lastElementChild.querySelector('input').focus();
  });
  const cleanup=()=>{
    document.body.classList.remove('print-feeding-sheet');
    sheet.classList.remove('routine-print-target');
    sheet.querySelectorAll('.routine-print-value').forEach(node=>node.remove());
  };
  window.addEventListener('afterprint',cleanup);
  sheet.querySelector('[data-print-feeding]').addEventListener('click',()=>{
    cleanup();
    // Text copies print without input clipping and preserve textarea newlines.
    for(const input of sheet.querySelectorAll('input,textarea')) {
      const value=document.createElement('span');
      value.className='routine-print-value'; value.textContent=input.value || '\u00a0';
      input.after(value);
    }
    sheet.classList.add('routine-print-target');
    document.body.classList.add('print-feeding-sheet');
    window.print();
  });
}
