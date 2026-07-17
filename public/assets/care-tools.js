const toolRoots = Array.from(document.querySelectorAll('[data-care-tool]'));

const runtimeText = {
  en: {
    validDate: 'Add a valid date.',
    ovulation: 'Estimated ovulation',
    fertileWindow: 'Fertile window',
    nextPeriod: 'Next expected period',
    dueDate: 'Estimated due date',
    conception: 'Estimated conception window',
    notStarted: 'Pregnancy has not started by this due-date estimate yet.',
    pastWindow: 'This due date is past the usual pregnancy window; check your dates with your care team.',
    pregnancyAge: 'Estimated pregnancy age',
    week: 'week',
    day: 'day',
    ready: 'Ready.',
    started: 'Started',
    planner: {
      milestones: ['Watch steady progress over several weeks.', 'Practice with short, playful routines.', 'Bring persistent concerns to the next checkup.'],
      solids: ['Offer one calm meal practice at a time.', 'Keep textures safe and supervised.', 'Pause and ask for care advice if reactions worry you.'],
      activities: ['Choose a short activity and repeat it often.', 'Follow the child’s interest and stop before frustration builds.', 'Keep safety and connection more important than performance.'],
      ages: {
        '0-3': 'Keep sessions brief and close to the caregiver.',
        '4-6': 'Use floor time, talking, songs, and gentle reaching games.',
        '7-9': 'Try sitting play, safe exploration, and back-and-forth sounds.',
        '10-12': 'Offer cruising-safe spaces, simple words, and object games.',
        toddler: 'Use movement, pretend play, sorting, books, and simple choices.'
      }
    }
  },
  fa: {
    validDate: 'یک تاریخ معتبر وارد کنید.',
    ovulation: 'تخمک‌گذاری تخمینی',
    fertileWindow: 'پنجره باروری',
    nextPeriod: 'پریود بعدی تخمینی',
    dueDate: 'تاریخ زایمان تخمینی',
    conception: 'بازه احتمالی لقاح',
    notStarted: 'بر اساس این تاریخ زایمان، بارداری هنوز شروع نشده است.',
    pastWindow: 'این تاریخ از بازه معمول بارداری گذشته است؛ تاریخ‌ها را با تیم مراقبت بررسی کنید.',
    pregnancyAge: 'سن بارداری تخمینی',
    week: 'هفته',
    day: 'روز',
    ready: 'آماده است.',
    started: 'شروع شد',
    planner: {
      milestones: ['پیشرفت پایدار را در چند هفته ببینید.', 'با روتین‌های کوتاه و بازی‌گونه تمرین کنید.', 'نگرانی‌های مداوم را در ویزیت بعدی مطرح کنید.'],
      solids: ['هر بار یک تمرین غذای آرام پیشنهاد کنید.', 'بافت‌ها را ایمن و تحت نظارت نگه دارید.', 'اگر واکنش‌ها نگران‌کننده بود مکث کنید و مشورت بگیرید.'],
      activities: ['یک فعالیت کوتاه انتخاب کنید و تکرار کنید.', 'علاقه کودک را دنبال کنید و پیش از خستگی توقف کنید.', 'ایمنی و ارتباط را مهم‌تر از عملکرد بدانید.'],
      ages: { '0-3': 'جلسه‌ها را کوتاه و نزدیک مراقب نگه دارید.', '4-6': 'زمان روی زمین، حرف زدن، شعر و بازی‌های رسیدن را امتحان کنید.', '7-9': 'بازی نشستن، کشف ایمن و صداهای رفت‌وبرگشتی را امتحان کنید.', '10-12': 'فضای ایمن برای ایستادن، واژه‌های ساده و بازی با اشیا بدهید.', toddler: 'حرکت، بازی وانمودی، دسته‌بندی، کتاب و انتخاب‌های ساده را استفاده کنید.' }
    }
  },
  ar: {
    validDate: 'أدخلي تاريخاً صالحاً.',
    ovulation: 'الإباضة المقدرة',
    fertileWindow: 'نافذة الخصوبة',
    nextPeriod: 'الدورة التالية المتوقعة',
    dueDate: 'موعد الولادة المتوقع',
    conception: 'نافذة حدوث الحمل المقدرة',
    notStarted: 'حسب هذا الموعد المتوقع، لم يبدأ الحمل بعد.',
    pastWindow: 'هذا الموعد تجاوز نافذة الحمل المعتادة؛ راجعي التواريخ مع فريق الرعاية.',
    pregnancyAge: 'عمر الحمل المقدر',
    week: 'الأسبوع',
    day: 'اليوم',
    ready: 'جاهز.',
    started: 'بدأ',
    planner: {
      milestones: ['راقبي تقدماً ثابتاً على مدى أسابيع.', 'تدربي بروتين قصير ومرح.', 'خذي المخاوف المستمرة إلى الفحص القادم.'],
      solids: ['قدمي تجربة طعام هادئة واحدة في كل مرة.', 'اجعلي القوام آمناً وتحت المراقبة.', 'توقفي واطلبي نصيحة إذا أقلقتك ردود الفعل.'],
      activities: ['اختاري نشاطاً قصيراً وكرريه.', 'اتبعي اهتمام الطفل وتوقفي قبل الإحباط.', 'اجعلي السلامة والاتصال أهم من الأداء.'],
      ages: { '0-3': 'اجعلي الجلسات قصيرة وقريبة من مقدم الرعاية.', '4-6': 'استخدمي وقت الأرض والكلام والأغاني وألعاب الوصول.', '7-9': 'جربي الجلوس والاستكشاف الآمن وتبادل الأصوات.', '10-12': 'قدمي مساحات آمنة للحركة وكلمات بسيطة وألعاب أشياء.', toddler: 'استخدمي الحركة والتمثيل والفرز والكتب والاختيارات البسيطة.' }
    }
  },
  fr: {
    validDate: 'Ajoutez une date valide.',
    ovulation: 'Ovulation estimée',
    fertileWindow: 'Fenêtre fertile',
    nextPeriod: 'Prochaines règles estimées',
    dueDate: 'Date prévue estimée',
    conception: 'Fenêtre de conception estimée',
    notStarted: 'Selon cette estimation de terme, la grossesse n’a pas encore commencé.',
    pastWindow: 'Cette date dépasse la fenêtre habituelle de grossesse ; vérifiez les dates avec votre équipe de soins.',
    pregnancyAge: 'Âge de grossesse estimé',
    week: 'semaine',
    day: 'jour',
    ready: 'Prêt.',
    started: 'Démarré',
    planner: {
      milestones: ['Observez des progrès réguliers sur plusieurs semaines.', 'Pratiquez avec de courtes routines ludiques.', 'Apportez les inquiétudes persistantes au prochain contrôle.'],
      solids: ['Proposez un repas d’essai calme à la fois.', 'Gardez les textures sûres et surveillées.', 'Faites une pause et demandez conseil si une réaction inquiète.'],
      activities: ['Choisissez une activité courte et répétez-la.', 'Suivez l’intérêt de l’enfant et arrêtez avant la frustration.', 'Gardez sécurité et lien plus importants que la performance.'],
      ages: { '0-3': 'Gardez les séances courtes et proches du parent.', '4-6': 'Essayez le tapis, la parole, les chansons et les jeux d’atteinte.', '7-9': 'Essayez le jeu assis, l’exploration sûre et les sons en retour.', '10-12': 'Offrez des espaces sûrs, des mots simples et des jeux d’objets.', toddler: 'Utilisez mouvement, faire semblant, tri, livres et choix simples.' }
    }
  },
  tr: {
    validDate: 'Geçerli bir tarih ekleyin.',
    ovulation: 'Tahmini yumurtlama',
    fertileWindow: 'Verimli dönem',
    nextPeriod: 'Beklenen sonraki adet',
    dueDate: 'Tahmini doğum tarihi',
    conception: 'Tahmini gebelik oluşma aralığı',
    notStarted: 'Bu doğum tarihi tahminine göre gebelik henüz başlamamış görünüyor.',
    pastWindow: 'Bu tarih olağan gebelik penceresini geçmiş; tarihleri bakım ekibinizle kontrol edin.',
    pregnancyAge: 'Tahmini gebelik yaşı',
    week: 'hafta',
    day: 'gün',
    ready: 'Hazır.',
    started: 'Başladı',
    planner: {
      milestones: ['Birkaç hafta boyunca düzenli ilerlemeyi izleyin.', 'Kısa ve oyunlu rutinlerle pratik yapın.', 'Süren kaygıları sonraki kontrole götürün.'],
      solids: ['Her seferinde sakin bir öğün denemesi sunun.', 'Dokuları güvenli ve gözetimli tutun.', 'Tepkiler endişe verirse durup bakım tavsiyesi alın.'],
      activities: ['Kısa bir etkinlik seçip sık tekrarlayın.', 'Çocuğun ilgisini izleyin ve hayal kırıklığından önce durun.', 'Güvenlik ve bağ kurmayı performanstan önemli tutun.'],
      ages: { '0-3': 'Seansları kısa ve bakıcıya yakın tutun.', '4-6': 'Yer zamanı, konuşma, şarkılar ve uzanma oyunları kullanın.', '7-9': 'Oturma oyunu, güvenli keşif ve karşılıklı sesleri deneyin.', '10-12': 'Güvenli tutunma alanları, basit kelimeler ve nesne oyunları sunun.', toddler: 'Hareket, hayali oyun, sıralama, kitaplar ve basit seçimler kullanın.' }
    }
  },
  es: {
    validDate: 'Agrega una fecha válida.',
    ovulation: 'Ovulación estimada',
    fertileWindow: 'Ventana fértil',
    nextPeriod: 'Próximo periodo estimado',
    dueDate: 'Fecha probable estimada',
    conception: 'Ventana estimada de concepción',
    notStarted: 'Según esta fecha probable, el embarazo aún no habría comenzado.',
    pastWindow: 'Esta fecha supera la ventana habitual de embarazo; revisa las fechas con tu equipo de salud.',
    pregnancyAge: 'Edad gestacional estimada',
    week: 'semana',
    day: 'día',
    ready: 'Listo.',
    started: 'Iniciado',
    planner: {
      milestones: ['Observa progreso constante durante varias semanas.', 'Practica con rutinas cortas y lúdicas.', 'Lleva preocupaciones persistentes al próximo control.'],
      solids: ['Ofrece una práctica de comida tranquila a la vez.', 'Mantén texturas seguras y supervisadas.', 'Pausa y consulta si una reacción preocupa.'],
      activities: ['Elige una actividad corta y repítela.', 'Sigue el interés del niño y detente antes de la frustración.', 'Prioriza seguridad y conexión sobre desempeño.'],
      ages: { '0-3': 'Mantén sesiones breves y cerca del cuidador.', '4-6': 'Usa tiempo en el suelo, hablar, canciones y juegos de alcanzar.', '7-9': 'Prueba juego sentado, exploración segura y sonidos de ida y vuelta.', '10-12': 'Ofrece espacios seguros, palabras simples y juegos con objetos.', toddler: 'Usa movimiento, juego simbólico, clasificar, libros y elecciones simples.' }
    }
  },
  pt: {
    validDate: 'Adicione uma data válida.',
    ovulation: 'Ovulação estimada',
    fertileWindow: 'Janela fértil',
    nextPeriod: 'Próxima menstruação estimada',
    dueDate: 'Data provável estimada',
    conception: 'Janela estimada de concepção',
    notStarted: 'Por essa data provável, a gravidez ainda não teria começado.',
    pastWindow: 'Essa data passou da janela usual de gravidez; confira as datas com sua equipe de cuidado.',
    pregnancyAge: 'Idade gestacional estimada',
    week: 'semana',
    day: 'dia',
    ready: 'Pronto.',
    started: 'Iniciado',
    planner: {
      milestones: ['Observe progresso constante por várias semanas.', 'Pratique com rotinas curtas e brincalhonas.', 'Leve preocupações persistentes ao próximo check-up.'],
      solids: ['Ofereça uma prática tranquila de refeição por vez.', 'Mantenha texturas seguras e supervisionadas.', 'Pause e peça orientação se alguma reação preocupar.'],
      activities: ['Escolha uma atividade curta e repita.', 'Siga o interesse da criança e pare antes da frustração.', 'Priorize segurança e conexão acima de desempenho.'],
      ages: { '0-3': 'Mantenha sessões breves e perto do cuidador.', '4-6': 'Use chão, conversa, músicas e jogos de alcançar.', '7-9': 'Tente brincar sentado, exploração segura e sons de troca.', '10-12': 'Ofereça espaços seguros, palavras simples e jogos com objetos.', toddler: 'Use movimento, faz de conta, separação, livros e escolhas simples.' }
    }
  }
};

function setupTool(root, runtime, config) {
  const labels = config.labels || {};
  const storageKey = `bemama.tool.${config.id}`;
  runtime.innerHTML = '';
  const shell = el('div', 'tool-shell');
  runtime.append(shell);

  if (config.type === 'calculator') {
    shell.append(renderForm(config, labels.action || 'Use tool', (values, output) => {
      output.replaceChildren(...calculate(config, values).map((line) => resultLine(line)));
    }));
    return;
  }

  if (config.type === 'checklist') {
    shell.append(renderChecklist(config, storageKey));
    return;
  }

  if (config.type === 'log') {
    shell.append(renderLog(config, storageKey));
    return;
  }

  if (config.type === 'nameFinder') {
    shell.append(renderNameFinder(config, storageKey));
    return;
  }

  if (config.type === 'list') {
    shell.append(renderSavedList(config, storageKey));
    return;
  }

  if (config.type === 'planner') {
    shell.append(renderPlanner(config));
  }
}

function renderForm(config, actionLabel, onSubmit) {
  const form = el('form', 'tool-form');
  form.noValidate = true;
  for (const field of config.fields || []) {
    form.append(renderField(field));
  }
  const submit = el('button', 'button tool-submit', actionLabel);
  submit.type = 'submit';
  const output = el('div', 'tool-result');
  output.setAttribute('aria-live', 'polite');
  form.append(submit, output);
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    onSubmit(formValues(form), output);
  });
  return form;
}

function renderField(field) {
  const wrap = el('label', 'tool-field');
  const text = el('span', '', field.label || field.name);
  let input;
  if (field.type === 'select') {
    input = document.createElement('select');
    for (const option of field.options || []) {
      const node = document.createElement('option');
      node.value = option.value;
      node.textContent = option.label;
      input.append(node);
    }
  } else if (field.type === 'textarea') {
    input = document.createElement('textarea');
    input.rows = 4;
  } else {
    input = document.createElement('input');
    input.type = field.type || 'text';
  }
  input.name = field.name;
  if (field.defaultValue) input.value = field.defaultValue;
  if (field.min) input.min = field.min;
  if (field.max) input.max = field.max;
  if (!['note', 'amount', 'length', 'weight', 'plan'].includes(field.name)) input.required = true;
  wrap.append(text, input);
  return wrap;
}

function renderChecklist(config, storageKey) {
  const labels = config.labels || {};
  const saved = new Set(load(storageKey, []));
  const panel = el('div', 'tool-checklist');
  const list = el('div', 'tool-checklist-list');
  (config.items || []).forEach((item, index) => {
    const id = `${config.id}-${index}`;
    const label = el('label', 'tool-check');
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.checked = saved.has(index);
    input.setAttribute('aria-label', labels.check || item);
    input.addEventListener('change', () => {
      if (input.checked) saved.add(index);
      else saved.delete(index);
      save(storageKey, Array.from(saved));
      status.textContent = `${saved.size} / ${config.items.length}`;
    });
    const span = el('span', '', item);
    label.htmlFor = id;
    input.id = id;
    label.append(input, span);
    list.append(label);
  });
  const status = el('p', 'tool-muted', `${saved.size} / ${(config.items || []).length}`);
  const reset = el('button', 'button secondary tool-inline-button', labels.reset || 'Reset');
  reset.type = 'button';
  reset.addEventListener('click', () => {
    save(storageKey, []);
    panel.querySelectorAll('input[type="checkbox"]').forEach((input) => {
      input.checked = false;
    });
    status.textContent = `0 / ${(config.items || []).length}`;
  });
  panel.append(list, status, localNote(labels), reset);
  return panel;
}

function renderLog(config, storageKey) {
  const labels = config.labels || {};
  const panel = el('div', 'tool-log');
  const summary = el('div', 'tool-result');
  const list = el('div', 'tool-saved-list');
  const render = () => {
    const entries = load(storageKey, []);
    summary.replaceChildren(...summaryForEntries(config, entries, labels).map((line) => resultLine(line)));
    renderEntries(list, entries, labels, config.fields);
  };
  const form = renderForm(config, labels.add || 'Add', (values, output) => {
    const entries = load(storageKey, []);
    entries.unshift({ ...values, createdAt: new Date().toISOString() });
    save(storageKey, entries.slice(0, 50));
    output.replaceChildren(resultLine(labels.save || 'Saved'));
    render();
  });
  const clear = el('button', 'button secondary tool-inline-button', labels.clear || 'Clear');
  clear.type = 'button';
  clear.addEventListener('click', () => {
    save(storageKey, []);
    render();
  });
  panel.append(form, summary, localNote(labels), el('h2', 'tool-subhead', labels.saved || 'Saved entries'), list, clear);
  render();
  return panel;
}

function renderSavedList(config, storageKey) {
  const labels = config.labels || {};
  const panel = el('div', 'tool-list-tool');
  const summary = el('div', 'tool-result');
  const list = el('div', 'tool-saved-list');
  const render = () => {
    const entries = load(storageKey, []);
    summary.replaceChildren(...summaryForEntries(config, entries, labels).map((line) => resultLine(line)));
    renderEntries(list, entries, labels, config.fields);
  };
  const form = renderForm(config, labels.add || 'Add', (values, output) => {
    const entries = load(storageKey, []);
    entries.unshift({ ...values, createdAt: new Date().toISOString() });
    save(storageKey, entries.slice(0, 80));
    output.replaceChildren(resultLine(labels.save || 'Saved'));
    render();
  });
  const clear = el('button', 'button secondary tool-inline-button', labels.clear || 'Clear');
  clear.type = 'button';
  clear.addEventListener('click', () => {
    save(storageKey, []);
    render();
  });
  panel.append(form, summary, localNote(labels), list, clear);
  render();
  return panel;
}

const nameFinderLabels = {
  en: {
    heading: 'Baby name ideas & inspiration',
    search: 'Search names or meanings',
    gender: 'Gender',
    origin: 'Origin',
    theme: 'Theme',
    length: 'Length',
    starts: 'Starts with',
    any: 'Any',
    allOrigins: 'All origins',
    allThemes: 'All themes',
    short: 'Short',
    medium: 'Medium',
    long: 'Long',
    boy: 'Boy',
    girl: 'Girl',
    unisex: 'Unisex',
    popular: 'Popular',
    classic: 'Classic',
    modern: 'Modern',
    nature: 'Nature',
    virtue: 'Virtue',
    spiritual: 'Faith and spirituality',
    results: (count) => `${count} name ideas`,
    empty: 'No names match yet. Try fewer filters.',
    add: 'Add',
    added: 'Added',
    shortlist: 'Your shortlist',
    shortlistEmpty: 'No names saved yet.',
    custom: 'Add your own name',
    nameLabel: 'Name',
    noteLabel: 'Why you like it',
    saveCustom: 'Save custom name',
    remove: 'Remove',
    clear: 'Clear shortlist',
    surprise: 'Surprise me',
    reset: 'Reset filters',
    meaning: 'Meaning',
    origins: 'Origins',
    themes: 'Themes'
  },
  fa: {
    heading: 'ایده‌ها و الهام برای نام نوزاد',
    search: 'جستجوی نام یا معنی',
    gender: 'جنسیت',
    origin: 'ریشه',
    theme: 'موضوع',
    length: 'طول',
    starts: 'شروع با',
    any: 'همه',
    allOrigins: 'همه ریشه‌ها',
    allThemes: 'همه موضوع‌ها',
    short: 'کوتاه',
    medium: 'متوسط',
    long: 'بلند',
    boy: 'پسر',
    girl: 'دختر',
    unisex: 'مشترک',
    popular: 'محبوب',
    classic: 'کلاسیک',
    modern: 'مدرن',
    nature: 'طبیعت',
    virtue: 'فضیلت',
    spiritual: 'ایمان و معنویت',
    results: (count) => `${count} ایده نام`,
    empty: 'هنوز نامی مطابق فیلترها نیست. فیلترها را کمتر کنید.',
    add: 'افزودن',
    added: 'افزوده شد',
    shortlist: 'فهرست کوتاه شما',
    shortlistEmpty: 'هنوز نامی ذخیره نشده است.',
    custom: 'نام دلخواه خود را اضافه کنید',
    nameLabel: 'نام',
    noteLabel: 'چرا دوستش دارید',
    saveCustom: 'ذخیره نام',
    remove: 'حذف',
    clear: 'پاک کردن فهرست',
    surprise: 'پیشنهاد تصادفی',
    reset: 'پاک کردن فیلترها',
    meaning: 'معنی',
    origins: 'ریشه‌ها',
    themes: 'موضوع‌ها'
  },
  ar: {
    heading: 'أفكار وإلهام لأسماء الأطفال',
    search: 'ابحثي عن اسم أو معنى',
    gender: 'الجنس',
    origin: 'الأصل',
    theme: 'الموضوع',
    length: 'الطول',
    starts: 'يبدأ بحرف',
    any: 'الكل',
    allOrigins: 'كل الأصول',
    allThemes: 'كل الموضوعات',
    short: 'قصير',
    medium: 'متوسط',
    long: 'طويل',
    boy: 'ولد',
    girl: 'بنت',
    unisex: 'مشترك',
    popular: 'رائج',
    classic: 'كلاسيكي',
    modern: 'حديث',
    nature: 'طبيعة',
    virtue: 'فضيلة',
    spiritual: 'إيمان وروحانية',
    results: (count) => `${count} فكرة اسم`,
    empty: 'لا توجد أسماء مطابقة بعد. جربي فلاتر أقل.',
    add: 'إضافة',
    added: 'تمت الإضافة',
    shortlist: 'قائمتك المختصرة',
    shortlistEmpty: 'لم يتم حفظ أسماء بعد.',
    custom: 'أضيفي اسماً خاصاً',
    nameLabel: 'الاسم',
    noteLabel: 'لماذا يعجبك',
    saveCustom: 'حفظ الاسم',
    remove: 'حذف',
    clear: 'مسح القائمة',
    surprise: 'فاجئيني',
    reset: 'إعادة الفلاتر',
    meaning: 'المعنى',
    origins: 'الأصول',
    themes: 'الموضوعات'
  },
  fr: {
    heading: 'Idées et inspiration de prénoms',
    search: 'Rechercher un prénom ou un sens',
    gender: 'Genre',
    origin: 'Origine',
    theme: 'Thème',
    length: 'Longueur',
    starts: 'Commence par',
    any: 'Tous',
    allOrigins: 'Toutes les origines',
    allThemes: 'Tous les thèmes',
    short: 'Court',
    medium: 'Moyen',
    long: 'Long',
    boy: 'Garçon',
    girl: 'Fille',
    unisex: 'Mixte',
    popular: 'Populaire',
    classic: 'Classique',
    modern: 'Moderne',
    nature: 'Nature',
    virtue: 'Vertu',
    spiritual: 'Foi et spiritualité',
    results: (count) => `${count} idées de prénom`,
    empty: 'Aucun prénom ne correspond. Essayez moins de filtres.',
    add: 'Ajouter',
    added: 'Ajouté',
    shortlist: 'Votre liste',
    shortlistEmpty: 'Aucun prénom enregistré.',
    custom: 'Ajouter votre prénom',
    nameLabel: 'Prénom',
    noteLabel: 'Pourquoi vous l’aimez',
    saveCustom: 'Enregistrer',
    remove: 'Retirer',
    clear: 'Effacer la liste',
    surprise: 'Surprenez-moi',
    reset: 'Réinitialiser',
    meaning: 'Sens',
    origins: 'Origines',
    themes: 'Thèmes'
  },
  tr: {
    heading: 'Bebek ismi fikirleri ve ilham',
    search: 'İsim veya anlam ara',
    gender: 'Cinsiyet',
    origin: 'Köken',
    theme: 'Tema',
    length: 'Uzunluk',
    starts: 'Şununla başlar',
    any: 'Tümü',
    allOrigins: 'Tüm kökenler',
    allThemes: 'Tüm temalar',
    short: 'Kısa',
    medium: 'Orta',
    long: 'Uzun',
    boy: 'Erkek',
    girl: 'Kız',
    unisex: 'Unisex',
    popular: 'Popüler',
    classic: 'Klasik',
    modern: 'Modern',
    nature: 'Doğa',
    virtue: 'Erdem',
    spiritual: 'İnanç ve maneviyat',
    results: (count) => `${count} isim fikri`,
    empty: 'Eşleşen isim yok. Daha az filtre deneyin.',
    add: 'Ekle',
    added: 'Eklendi',
    shortlist: 'Kısa listeniz',
    shortlistEmpty: 'Henüz isim kaydedilmedi.',
    custom: 'Kendi isminizi ekleyin',
    nameLabel: 'İsim',
    noteLabel: 'Neden beğendiniz',
    saveCustom: 'İsmi kaydet',
    remove: 'Sil',
    clear: 'Listeyi temizle',
    surprise: 'Sürpriz isim',
    reset: 'Filtreleri sıfırla',
    meaning: 'Anlam',
    origins: 'Kökenler',
    themes: 'Temalar'
  },
  es: {
    heading: 'Ideas e inspiración de nombres',
    search: 'Buscar nombres o significados',
    gender: 'Género',
    origin: 'Origen',
    theme: 'Tema',
    length: 'Longitud',
    starts: 'Empieza con',
    any: 'Todos',
    allOrigins: 'Todos los orígenes',
    allThemes: 'Todos los temas',
    short: 'Corto',
    medium: 'Medio',
    long: 'Largo',
    boy: 'Niño',
    girl: 'Niña',
    unisex: 'Unisex',
    popular: 'Popular',
    classic: 'Clásico',
    modern: 'Moderno',
    nature: 'Naturaleza',
    virtue: 'Virtud',
    spiritual: 'Fe y espiritualidad',
    results: (count) => `${count} ideas de nombres`,
    empty: 'No hay nombres que coincidan. Prueba menos filtros.',
    add: 'Agregar',
    added: 'Agregado',
    shortlist: 'Tu lista corta',
    shortlistEmpty: 'Aún no hay nombres guardados.',
    custom: 'Agrega tu propio nombre',
    nameLabel: 'Nombre',
    noteLabel: 'Por qué te gusta',
    saveCustom: 'Guardar nombre',
    remove: 'Quitar',
    clear: 'Borrar lista',
    surprise: 'Sorpréndeme',
    reset: 'Restablecer filtros',
    meaning: 'Significado',
    origins: 'Orígenes',
    themes: 'Temas'
  },
  pt: {
    heading: 'Ideias e inspiração de nomes',
    search: 'Buscar nomes ou significados',
    gender: 'Gênero',
    origin: 'Origem',
    theme: 'Tema',
    length: 'Tamanho',
    starts: 'Começa com',
    any: 'Todos',
    allOrigins: 'Todas as origens',
    allThemes: 'Todos os temas',
    short: 'Curto',
    medium: 'Médio',
    long: 'Longo',
    boy: 'Menino',
    girl: 'Menina',
    unisex: 'Unissex',
    popular: 'Popular',
    classic: 'Clássico',
    modern: 'Moderno',
    nature: 'Natureza',
    virtue: 'Virtude',
    spiritual: 'Fé e espiritualidade',
    results: (count) => `${count} ideias de nomes`,
    empty: 'Nenhum nome corresponde. Tente menos filtros.',
    add: 'Adicionar',
    added: 'Adicionado',
    shortlist: 'Sua lista curta',
    shortlistEmpty: 'Nenhum nome salvo ainda.',
    custom: 'Adicione seu próprio nome',
    nameLabel: 'Nome',
    noteLabel: 'Por que você gosta',
    saveCustom: 'Salvar nome',
    remove: 'Remover',
    clear: 'Limpar lista',
    surprise: 'Surpreenda-me',
    reset: 'Redefinir filtros',
    meaning: 'Significado',
    origins: 'Origens',
    themes: 'Temas'
  }
};

const babyNameIdeas = [
  { name: 'Aaliyah', gender: 'girl', origins: ['Arabic'], themes: ['popular', 'spiritual'], meaning: 'Exalted, high' },
  { name: 'Adam', gender: 'boy', origins: ['Hebrew', 'Arabic'], themes: ['classic', 'spiritual'], meaning: 'Human, earth' },
  { name: 'Amara', gender: 'girl', origins: ['Igbo', 'Latin'], themes: ['modern', 'virtue'], meaning: 'Grace or lasting' },
  { name: 'Amir', gender: 'boy', origins: ['Arabic', 'Persian'], themes: ['classic', 'spiritual'], meaning: 'Prince, leader' },
  { name: 'Anaya', gender: 'girl', origins: ['Sanskrit', 'Arabic'], themes: ['modern', 'virtue'], meaning: 'Care, protection' },
  { name: 'Aria', gender: 'girl', origins: ['Italian', 'Persian'], themes: ['popular', 'modern'], meaning: 'Air, melody, noble' },
  { name: 'Ari', gender: 'unisex', origins: ['Hebrew', 'Nordic'], themes: ['short', 'modern'], meaning: 'Lion or eagle' },
  { name: 'Arman', gender: 'boy', origins: ['Persian'], themes: ['classic', 'virtue'], meaning: 'Wish, hope' },
  { name: 'Atlas', gender: 'boy', origins: ['Greek'], themes: ['modern', 'nature'], meaning: 'Enduring, bearer' },
  { name: 'Ava', gender: 'girl', origins: ['Latin', 'Germanic'], themes: ['popular', 'short'], meaning: 'Birdlike, life' },
  { name: 'Avery', gender: 'unisex', origins: ['English'], themes: ['popular', 'modern'], meaning: 'Ruler of elves' },
  { name: 'Ayla', gender: 'girl', origins: ['Turkish', 'Hebrew'], themes: ['nature', 'modern'], meaning: 'Moonlight or oak' },
  { name: 'Camila', gender: 'girl', origins: ['Latin', 'Spanish'], themes: ['popular', 'classic'], meaning: 'Ceremonial attendant' },
  { name: 'Clara', gender: 'girl', origins: ['Latin', 'French'], themes: ['classic', 'virtue'], meaning: 'Bright, clear' },
  { name: 'Daniel', gender: 'boy', origins: ['Hebrew'], themes: ['classic', 'spiritual'], meaning: 'God is my judge' },
  { name: 'David', gender: 'boy', origins: ['Hebrew'], themes: ['classic', 'spiritual'], meaning: 'Beloved' },
  { name: 'Deniz', gender: 'unisex', origins: ['Turkish'], themes: ['nature', 'modern'], meaning: 'Sea' },
  { name: 'Dylan', gender: 'unisex', origins: ['Welsh'], themes: ['nature', 'modern'], meaning: 'Great tide' },
  { name: 'Elif', gender: 'girl', origins: ['Turkish', 'Arabic'], themes: ['short', 'spiritual'], meaning: 'First letter, slender' },
  { name: 'Elias', gender: 'boy', origins: ['Greek', 'Hebrew'], themes: ['classic', 'spiritual'], meaning: 'The Lord is my God' },
  { name: 'Ella', gender: 'girl', origins: ['Germanic', 'English'], themes: ['popular', 'short'], meaning: 'Light, fairy maiden' },
  { name: 'Emma', gender: 'girl', origins: ['Germanic'], themes: ['popular', 'classic'], meaning: 'Whole, universal' },
  { name: 'Enzo', gender: 'boy', origins: ['Italian', 'Germanic'], themes: ['modern', 'short'], meaning: 'Home ruler' },
  { name: 'Ezra', gender: 'boy', origins: ['Hebrew'], themes: ['popular', 'spiritual'], meaning: 'Helper' },
  { name: 'Fatima', gender: 'girl', origins: ['Arabic'], themes: ['classic', 'spiritual'], meaning: 'One who abstains' },
  { name: 'Gabriel', gender: 'boy', origins: ['Hebrew'], themes: ['classic', 'spiritual'], meaning: 'God is my strength' },
  { name: 'Hana', gender: 'girl', origins: ['Arabic', 'Japanese'], themes: ['nature', 'short'], meaning: 'Happiness or flower' },
  { name: 'Hugo', gender: 'boy', origins: ['Germanic', 'Spanish'], themes: ['classic', 'short'], meaning: 'Mind, spirit' },
  { name: 'Ilyas', gender: 'boy', origins: ['Arabic', 'Turkish'], themes: ['classic', 'spiritual'], meaning: 'Prophetic name' },
  { name: 'Ines', gender: 'girl', origins: ['Spanish', 'Portuguese'], themes: ['classic', 'virtue'], meaning: 'Pure' },
  { name: 'Iris', gender: 'girl', origins: ['Greek'], themes: ['nature', 'classic'], meaning: 'Rainbow, flower' },
  { name: 'Isabella', gender: 'girl', origins: ['Hebrew', 'Italian'], themes: ['popular', 'classic'], meaning: 'Pledged to God' },
  { name: 'Jordan', gender: 'unisex', origins: ['Hebrew'], themes: ['classic', 'spiritual'], meaning: 'Flowing down' },
  { name: 'Kai', gender: 'unisex', origins: ['Hawaiian', 'Japanese'], themes: ['nature', 'short'], meaning: 'Sea or shell' },
  { name: 'Kian', gender: 'boy', origins: ['Persian', 'Irish'], themes: ['modern', 'short'], meaning: 'Kingly or ancient' },
  { name: 'Layla', gender: 'girl', origins: ['Arabic', 'Persian'], themes: ['popular', 'nature'], meaning: 'Night' },
  { name: 'Leo', gender: 'boy', origins: ['Latin'], themes: ['popular', 'short'], meaning: 'Lion' },
  { name: 'Leila', gender: 'girl', origins: ['Arabic', 'Persian'], themes: ['classic', 'nature'], meaning: 'Night beauty' },
  { name: 'Liam', gender: 'boy', origins: ['Irish'], themes: ['popular', 'short'], meaning: 'Resolute protector' },
  { name: 'Lina', gender: 'girl', origins: ['Arabic', 'Greek'], themes: ['short', 'modern'], meaning: 'Tender, light' },
  { name: 'Luca', gender: 'boy', origins: ['Italian', 'Latin'], themes: ['popular', 'modern'], meaning: 'From Lucania, light' },
  { name: 'Lucia', gender: 'girl', origins: ['Latin', 'Spanish'], themes: ['classic', 'virtue'], meaning: 'Light' },
  { name: 'Luna', gender: 'girl', origins: ['Latin', 'Italian'], themes: ['popular', 'nature'], meaning: 'Moon' },
  { name: 'Mateo', gender: 'boy', origins: ['Spanish', 'Hebrew'], themes: ['popular', 'spiritual'], meaning: 'Gift of God' },
  { name: 'Maya', gender: 'girl', origins: ['Sanskrit', 'Hebrew'], themes: ['popular', 'nature'], meaning: 'Water, illusion' },
  { name: 'Mila', gender: 'girl', origins: ['Slavic'], themes: ['popular', 'virtue'], meaning: 'Gracious, dear' },
  { name: 'Mira', gender: 'girl', origins: ['Latin', 'Sanskrit'], themes: ['short', 'virtue'], meaning: 'Wonderful, ocean' },
  { name: 'Musa', gender: 'boy', origins: ['Arabic', 'Hebrew'], themes: ['classic', 'spiritual'], meaning: 'Moses' },
  { name: 'Noah', gender: 'boy', origins: ['Hebrew'], themes: ['popular', 'spiritual'], meaning: 'Rest, comfort' },
  { name: 'Noor', gender: 'unisex', origins: ['Arabic', 'Persian'], themes: ['virtue', 'spiritual'], meaning: 'Light' },
  { name: 'Nora', gender: 'girl', origins: ['Arabic', 'Latin'], themes: ['popular', 'virtue'], meaning: 'Light, honor' },
  { name: 'Omar', gender: 'boy', origins: ['Arabic'], themes: ['classic', 'spiritual'], meaning: 'Flourishing, long-lived' },
  { name: 'Olivia', gender: 'girl', origins: ['Latin'], themes: ['popular', 'nature'], meaning: 'Olive tree' },
  { name: 'Oliver', gender: 'boy', origins: ['Latin', 'English'], themes: ['popular', 'nature'], meaning: 'Olive tree' },
  { name: 'Raphael', gender: 'boy', origins: ['Hebrew'], themes: ['classic', 'spiritual'], meaning: 'God has healed' },
  { name: 'Riley', gender: 'unisex', origins: ['Irish'], themes: ['popular', 'modern'], meaning: 'Courageous' },
  { name: 'River', gender: 'unisex', origins: ['English'], themes: ['nature', 'modern'], meaning: 'Flowing water' },
  { name: 'Robin', gender: 'unisex', origins: ['English', 'Germanic'], themes: ['nature', 'classic'], meaning: 'Bright fame, bird' },
  { name: 'Rowan', gender: 'unisex', origins: ['Irish', 'Scottish'], themes: ['nature', 'modern'], meaning: 'Rowan tree' },
  { name: 'Sage', gender: 'unisex', origins: ['Latin', 'English'], themes: ['nature', 'virtue'], meaning: 'Wise, herb' },
  { name: 'Sami', gender: 'boy', origins: ['Arabic', 'Nordic'], themes: ['short', 'virtue'], meaning: 'Elevated, listener' },
  { name: 'Sara', gender: 'girl', origins: ['Hebrew', 'Arabic'], themes: ['classic', 'spiritual'], meaning: 'Princess' },
  { name: 'Sofia', gender: 'girl', origins: ['Greek', 'Spanish'], themes: ['popular', 'virtue'], meaning: 'Wisdom' },
  { name: 'Taylor', gender: 'unisex', origins: ['English'], themes: ['modern', 'popular'], meaning: 'Tailor' },
  { name: 'Theo', gender: 'boy', origins: ['Greek'], themes: ['modern', 'spiritual'], meaning: 'Divine gift' },
  { name: 'Valentina', gender: 'girl', origins: ['Latin', 'Spanish'], themes: ['classic', 'virtue'], meaning: 'Strong, healthy' },
  { name: 'Yara', gender: 'girl', origins: ['Arabic', 'Brazilian'], themes: ['nature', 'modern'], meaning: 'Small butterfly or water lady' },
  { name: 'Yasmin', gender: 'girl', origins: ['Persian', 'Arabic'], themes: ['nature', 'classic'], meaning: 'Jasmine flower' },
  { name: 'Yusuf', gender: 'boy', origins: ['Arabic', 'Hebrew'], themes: ['classic', 'spiritual'], meaning: 'God increases' },
  { name: 'Zainab', gender: 'girl', origins: ['Arabic'], themes: ['classic', 'spiritual'], meaning: 'Fragrant flower' },
  { name: 'Zara', gender: 'girl', origins: ['Arabic', 'Hebrew'], themes: ['modern', 'virtue'], meaning: 'Blooming, princess' }
];

function renderNameFinder(config, storageKey) {
  const text = nameFinderLabels[document.documentElement.lang] || nameFinderLabels.en;
  const panel = el('div', 'name-finder');
  const heading = el('h2', 'tool-subhead', text.heading);
  const controls = el('form', 'name-controls');
  controls.noValidate = true;

  const query = nameInput('search', text.search, 'search');
  const gender = nameSelect('gender', text.gender, [
    ['', text.any],
    ['girl', text.girl],
    ['boy', text.boy],
    ['unisex', text.unisex]
  ]);
  const origins = uniqueSorted(babyNameIdeas.flatMap((item) => item.origins));
  const origin = nameSelect('origin', text.origin, [['', text.allOrigins], ...origins.map((item) => [item, item])]);
  const themes = ['popular', 'classic', 'modern', 'nature', 'virtue', 'spiritual'];
  const theme = nameSelect('theme', text.theme, [['', text.allThemes], ...themes.map((item) => [item, text[item] || item])]);
  const length = nameSelect('length', text.length, [
    ['', text.any],
    ['short', text.short],
    ['medium', text.medium],
    ['long', text.long]
  ]);
  const starts = nameInput('starts', text.starts, 'text');
  controls.append(query, gender, origin, theme, length, starts);

  const actions = el('div', 'tool-actions');
  const surprise = el('button', 'button secondary', text.surprise);
  const reset = el('button', 'button secondary', text.reset);
  surprise.type = 'button';
  reset.type = 'button';
  actions.append(surprise, reset);

  const status = el('div', 'tool-result');
  const results = el('div', 'name-results');
  const shortlistTitle = el('h2', 'tool-subhead', text.shortlist);
  const shortlist = el('div', 'tool-saved-list');
  const custom = renderCustomNameForm(config, storageKey, text, () => render());
  const clear = el('button', 'button secondary tool-inline-button', text.clear);
  clear.type = 'button';
  clear.addEventListener('click', () => {
    save(storageKey, []);
    render();
  });

  function values() {
    return formValues(controls);
  }

  function filtered() {
    const filters = values();
    return babyNameIdeas.filter((idea) => matchesNameIdea(idea, filters));
  }

  function render() {
    const saved = loadNameShortlist(storageKey);
    const savedNames = new Set(saved.map((entry) => entry.name.toLowerCase()));
    const matches = filtered();
    status.replaceChildren(resultLine(text.results(matches.length)));
    results.innerHTML = '';
    if (!matches.length) {
      results.append(el('p', 'tool-muted', text.empty));
    } else {
      matches.slice(0, 48).forEach((idea) => {
        results.append(renderNameCard(idea, text, savedNames.has(idea.name.toLowerCase()), () => {
          const entries = loadNameShortlist(storageKey);
          if (!entries.some((entry) => entry.name.toLowerCase() === idea.name.toLowerCase())) {
            entries.unshift({
              name: idea.name,
              note: idea.meaning,
              origin: idea.origins.join(', '),
              theme: idea.themes.map((item) => text[item] || item).join(', '),
              createdAt: new Date().toISOString()
            });
            save(storageKey, entries.slice(0, 80));
          }
          render();
        }));
      });
    }
    renderNameShortlist(shortlist, saved, text, storageKey, render);
  }

  controls.addEventListener('input', render);
  controls.addEventListener('change', render);
  controls.addEventListener('submit', (event) => event.preventDefault());
  surprise.addEventListener('click', () => {
    const matches = filtered();
    const pool = matches.length ? matches : babyNameIdeas;
    const pick = pool[Math.floor(Math.random() * pool.length)];
    controls.elements.search.value = pick.name;
    render();
  });
  reset.addEventListener('click', () => {
    controls.reset();
    render();
  });

  panel.append(heading, controls, actions, status, results, localNote(config.labels || {}), custom, shortlistTitle, shortlist, clear);
  render();
  return panel;
}

function renderNameCard(idea, text, saved, onAdd) {
  const card = el('article', 'name-card');
  const title = el('h3', '', idea.name);
  const badges = el('div', 'name-badges', [
    el('span', '', text[idea.gender] || idea.gender),
    ...idea.origins.slice(0, 2).map((origin) => el('span', '', origin)),
    ...idea.themes.slice(0, 2).map((theme) => el('span', '', text[theme] || theme))
  ]);
  const meaning = el('p', 'name-meaning', `${text.meaning}: ${idea.meaning}`);
  const add = el('button', saved ? 'button secondary' : 'button', saved ? text.added : text.add);
  add.type = 'button';
  add.disabled = saved;
  add.addEventListener('click', onAdd);
  card.append(title, badges, meaning, add);
  return card;
}

function renderNameShortlist(container, entries, text, storageKey, render) {
  container.innerHTML = '';
  if (!entries.length) {
    container.append(el('p', 'tool-muted', text.shortlistEmpty));
    return;
  }
  entries.forEach((entry, index) => {
    const card = el('div', 'tool-entry name-shortlist-entry');
    card.append(
      el('strong', '', entry.name),
      ...(entry.note ? [el('span', '', `${text.meaning}: ${entry.note}`)] : []),
      ...(entry.origin ? [el('span', '', `${text.origins}: ${entry.origin}`)] : []),
      ...(entry.theme ? [el('span', '', `${text.themes}: ${entry.theme}`)] : [])
    );
    const remove = el('button', 'name-remove', text.remove);
    remove.type = 'button';
    remove.addEventListener('click', () => {
      const next = loadNameShortlist(storageKey);
      next.splice(index, 1);
      save(storageKey, next);
      render();
    });
    card.append(remove);
    container.append(card);
  });
}

function renderCustomNameForm(config, storageKey, text, onSave) {
  const form = el('form', 'name-custom-form');
  form.noValidate = true;
  form.append(el('h2', 'tool-subhead', text.custom));
  const name = nameInput('name', text.nameLabel, 'text');
  const note = nameInput('note', text.noteLabel, 'text');
  const button = el('button', 'button', text.saveCustom);
  const output = el('div', 'tool-result');
  button.type = 'submit';
  form.append(name, note, button, output);
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const values = formValues(form);
    if (!values.name) return;
    const entries = loadNameShortlist(storageKey);
    entries.unshift({ ...values, createdAt: new Date().toISOString() });
    save(storageKey, entries.slice(0, 80));
    form.reset();
    output.replaceChildren(resultLine(config.labels?.save || 'Saved'));
    onSave();
  });
  return form;
}

function loadNameShortlist(storageKey) {
  const raw = load(storageKey, []);
  const entries = Array.isArray(raw)
    ? raw.map(normalizeNameEntry).filter(Boolean)
    : [];
  if (!sameNameEntries(raw, entries)) save(storageKey, entries);
  return entries;
}

function normalizeNameEntry(entry) {
  if (!entry || typeof entry !== 'object') return undefined;
  const name = textValue(entry.name || entry.title || entry.babyName).trim();
  if (!name) return undefined;
  return {
    ...entry,
    name,
    note: textValue(entry.note || entry.meaning || entry.notes).trim(),
    origin: textValue(entry.origin).trim(),
    theme: textValue(entry.theme).trim(),
    createdAt: textValue(entry.createdAt).trim() || new Date().toISOString()
  };
}

function sameNameEntries(raw, normalized) {
  if (!Array.isArray(raw) || raw.length !== normalized.length) return false;
  return raw.every((entry, index) => entry && entry.name === normalized[index]?.name);
}

function textValue(value) {
  if (value === undefined || value === null) return '';
  return Array.isArray(value) ? value.filter(Boolean).join(', ') : String(value);
}

function matchesNameIdea(idea, filters) {
  const query = (filters.search || '').toLowerCase();
  const starts = (filters.starts || '').toLowerCase();
  if (query) {
    const haystack = [idea.name, idea.meaning, idea.gender, ...idea.origins, ...idea.themes].join(' ').toLowerCase();
    if (!haystack.includes(query)) return false;
  }
  if (filters.gender && idea.gender !== filters.gender) return false;
  if (filters.origin && !idea.origins.includes(filters.origin)) return false;
  if (filters.theme && !idea.themes.includes(filters.theme)) return false;
  if (starts && !idea.name.toLowerCase().startsWith(starts)) return false;
  if (filters.length) {
    const size = idea.name.length <= 4 ? 'short' : idea.name.length <= 6 ? 'medium' : 'long';
    if (size !== filters.length) return false;
  }
  return true;
}

function nameInput(name, label, type) {
  const wrap = el('label', 'tool-field');
  const input = document.createElement('input');
  input.type = type;
  input.name = name;
  wrap.append(el('span', '', label), input);
  return wrap;
}

function nameSelect(name, label, options) {
  const wrap = el('label', 'tool-field');
  const select = document.createElement('select');
  select.name = name;
  options.forEach(([value, optionLabel]) => {
    const option = document.createElement('option');
    option.value = value;
    option.textContent = optionLabel;
    select.append(option);
  });
  wrap.append(el('span', '', label), select);
  return wrap;
}

function uniqueSorted(items) {
  return Array.from(new Set(items)).sort((a, b) => a.localeCompare(b));
}

function renderPlanner(config) {
  const labels = config.labels || {};
  return renderForm(config, labels.action || 'Use tool', (values, output) => {
    const selected = (config.fields || [])
      .find((field) => field.name === 'ageGroup')
      ?.options?.find((option) => option.value === values.ageGroup)?.label;
    const suggestions = plannerSuggestions(config.planner, values.ageGroup);
    output.replaceChildren(resultLine(selected || labels.result || 'Result'), ...suggestions.map((item) => resultLine(item)));
  });
}

function calculate(config, values) {
  if (config.calculator === 'ovulation') {
    const start = parseDate(values.lastPeriod);
    const cycle = numberOr(values.cycleLength, 28);
    const luteal = numberOr(values.lutealLength, 14);
    if (!start) return [message('validDate')];
    const nextPeriod = addDays(start, cycle);
    const ovulation = addDays(nextPeriod, -luteal);
    return [
      `${message('ovulation')}: ${formatDate(ovulation)}`,
      `${message('fertileWindow')}: ${formatDate(addDays(ovulation, -5))} - ${formatDate(addDays(ovulation, 1))}`,
      `${message('nextPeriod')}: ${formatDate(nextPeriod)}`,
      `Earliest useful pregnancy test: ${formatDate(addDays(ovulation, 12))}`
    ];
  }
  if (config.calculator === 'dueDate') {
    const start = parseDate(values.lastPeriod);
    const cycle = numberOr(values.cycleLength, 28);
    if (!start) return [message('validDate')];
    const due = addDays(start, 280 + (cycle - 28));
    const today = startOfDay(new Date());
    const daysPregnant = Math.max(0, Math.min(294, daysBetween(start, today)));
    const week = Math.floor(daysPregnant / 7) + 1;
    const trimester = week < 14 ? 'First trimester' : week < 28 ? 'Second trimester' : 'Third trimester';
    return [
      `${message('dueDate')}: ${formatDate(due)}`,
      `${message('pregnancyAge')}: ${message('week')} ${week}`,
      trimester,
      `${message('conception')}: ${formatDate(addDays(start, 11))} - ${formatDate(addDays(start, 21))}`
    ];
  }
  if (config.calculator === 'pregnancyWeek') {
    const due = parseDate(values.dueDate);
    if (!due) return [message('validDate')];
    const today = startOfDay(new Date());
    const daysPregnant = 280 - Math.round((due - today) / 86400000);
    if (daysPregnant < 0) return [message('notStarted')];
    if (daysPregnant > 294) return [message('pastWindow')];
    const week = Math.floor(daysPregnant / 7) + 1;
    const day = daysPregnant % 7;
    return [`${message('pregnancyAge')}: ${message('week')} ${week}, ${message('day')} ${day}`, `${message('dueDate')}: ${formatDate(due)}`];
  }
  return [message('ready')];
}

function plannerSuggestions(kind, ageGroup) {
  const lang = document.documentElement.lang || 'en';
  if (lang === 'en') {
    const detailed = detailedPlannerSuggestions[kind]?.[ageGroup];
    if (detailed) return detailed;
  }
  const planner = localizedRuntime().planner;
  return [...(planner[kind] || planner.milestones), planner.ages[ageGroup]].filter(Boolean);
}

const detailedPlannerSuggestions = {
  milestones: {
    '0-3': ['Look for brief eye contact, calming to your voice, head turning, and early head lifting.', 'Try two or three tiny tummy-time sessions while baby is awake and supervised.', 'Ask for help if feeding, tone, alertness, or responsiveness worries you.'],
    '4-6': ['Watch for rolling attempts, reaching, laughing, and stronger head control.', 'Offer floor play, mirror time, songs, and safe objects to grasp.', 'Bring up persistent stiffness, floppiness, or not responding to sounds.'],
    '7-9': ['Look for sitting practice, babbling, transferring toys, and curiosity about people.', 'Use peekaboo, object games, reading, and safe exploration on the floor.', 'Ask if baby loses skills or seems very one-sided in movement.'],
    '10-12': ['Watch for pulling up, cruising attempts, gestures, simple sounds, and social games.', 'Practice naming objects, turn-taking, clapping, and supported movement.', 'Ask about no babbling, no gestures, or loss of skills.'],
    toddler: ['Track walking steadiness, words, pointing, imitation, pretend play, and simple instructions.', 'Use books, songs, naming routines, sorting, outdoor movement, and choices.', 'Ask if speech, hearing, movement, or behavior concerns persist.']
  },
  solids: {
    '0-3': ['Solids are not usually developmentally ready yet; focus on milk feeding and growth.', 'Watch for readiness later: sitting with support, good head control, and interest in food.', 'Ask your clinician before starting early.'],
    '4-6': ['Readiness matters more than the calendar: steady head control, sitting with support, and interest.', 'Start with soft textures and iron-rich foods when your clinician says baby is ready.', 'Introduce common allergens safely and one at a time if your care guidance supports it.'],
    '7-9': ['Offer soft finger foods, mashed textures, and water practice in an open or straw cup.', 'Keep meals supervised and avoid choking hazards such as whole grapes, nuts, hard chunks, and popcorn.', 'Expect mess; exposure and practice matter more than volume.'],
    '10-12': ['Build toward family foods with safe textures: soft strips, small pieces, and varied flavors.', 'Offer regular meal and snack rhythms while milk remains important.', 'Keep salt, added sugar, honey before 12 months, and choking hazards off the menu.'],
    toddler: ['Offer predictable meals and snacks with protein, fruit/veg, grains, and fat.', 'Let appetite vary day to day; look for patterns over a week.', 'Use neutral exposure rather than pressure when a food is refused.']
  },
  activities: {
    '0-3': ['Try face-to-face talking, songs, contrast cards, supervised tummy time, and gentle bicycle legs.', 'Keep sessions short; stop when baby looks away, fusses, or seems tired.', 'The goal is connection, not performance.'],
    '4-6': ['Try mirror play, reaching for soft toys, rolling practice, reading, and sound imitation.', 'Place toys just to the side to invite turning and reaching.', 'Use awake, supervised floor time every day.'],
    '7-9': ['Try container play, peekaboo, banging safe objects, crawling invitations, and naming body parts.', 'Offer safe spaces to explore instead of long stretches in seats.', 'Rotate a few simple toys rather than offering everything at once.'],
    '10-12': ['Try stacking cups, cruising along furniture, ball rolling, pointing games, and simple songs with actions.', 'Narrate daily routines with the same words often.', 'Let baby try, pause, and try again before helping.'],
    toddler: ['Try sorting socks, water painting, pretend cooking, obstacle courses, book hunts, and simple cleanup games.', 'Offer two acceptable choices to reduce power struggles.', 'Short, active, repeatable activities usually work better than elaborate crafts.']
  }
};

function renderEntries(container, entries, labels, fields = []) {
  container.innerHTML = '';
  if (!entries.length) {
    container.append(el('p', 'tool-muted', labels.empty || 'Nothing saved yet.'));
    return;
  }
  const names = fieldLabelMap(fields);
  for (const entry of entries) {
    const card = el('div', 'tool-entry');
    Object.entries(entry).forEach(([key, value]) => {
      if (!value || key === 'createdAt' || key === 'startMs') return;
      const label = names[key];
      card.append(el('span', '', label ? `${label}: ${value}` : String(value)));
    });
    container.append(card);
  }
}

function summaryForEntries(config, entries, labels) {
  if (!entries.length) return [labels.empty || 'Nothing saved yet.'];
  const lines = [`${entries.length} ${labels.saved || 'saved'}`];
  const last24 = entries.filter((entry) => withinHours(entry.createdAt, 24));
  if (last24.length) lines.push(`Last 24 hours: ${last24.length}`);
  return lines;
}

function fieldLabelMap(fields = []) {
  return Object.fromEntries(fields.map((field) => [field.name, field.label]));
}

function formValues(form) {
  const data = new FormData(form);
  return Object.fromEntries(Array.from(data.entries()).map(([key, value]) => [key, String(value).trim()]));
}

function resultLine(text) {
  return el('p', 'tool-result-line', text);
}

function localNote(labels) {
  return el('p', 'tool-muted', labels.local || 'Saved on this device only.');
}

function load(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function save(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Storage can be unavailable in private modes; the tool still works in memory.
  }
}

function parseDate(value) {
  if (!value) return undefined;
  const [year, month, day] = value.split('-').map(Number);
  if (!year || !month || !day) return undefined;
  return new Date(year, month - 1, day);
}

function startOfDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function addDays(date, days) {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

function daysBetween(start, end) {
  return Math.round((startOfDay(end) - startOfDay(start)) / 86400000);
}

function withinHours(value, hours) {
  if (!value) return false;
  return Date.now() - new Date(value).getTime() <= hours * 3600000;
}

function numberOr(value, fallback) {
  const number = Number(value);
  return Number.isFinite(number) ? number : fallback;
}

function formatDate(date) {
  return new Intl.DateTimeFormat(document.documentElement.lang || 'en', { dateStyle: 'medium' }).format(date);
}

function formatDateTime(value) {
  return new Intl.DateTimeFormat(document.documentElement.lang || 'en', { dateStyle: 'medium', timeStyle: 'short' }).format(new Date(value));
}

function message(key) {
  return localizedRuntime()[key] || runtimeText.en[key] || key;
}

function localizedRuntime() {
  return runtimeText[document.documentElement.lang] || runtimeText.en;
}

function el(tag, className, content) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (Array.isArray(content)) node.append(...content);
  else if (content !== undefined) node.textContent = content;
  return node;
}

toolRoots.forEach((root) => {
  const configNode = root.querySelector('[data-tool-config]');
  const runtime = root.querySelector('[data-tool-runtime]');
  if (!configNode || !runtime) return;

  let config;
  try {
    config = JSON.parse(configNode.textContent || '{}');
  } catch {
    return;
  }

  setupTool(root, runtime, config);
});
