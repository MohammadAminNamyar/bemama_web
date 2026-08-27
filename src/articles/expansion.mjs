// Original BeMama expansion content inspired by common pregnancy/parenting
// journeys and tool patterns. These are intentionally not copied or closely
// paraphrased from any single publisher.

import { upgradedExpansionSlugs } from './expansion-upgraded.mjs';

const langs = ['en', 'fa', 'ar', 'fr', 'tr', 'es', 'pt'];

const categorySlug = {
  ttc: 'trying-to-conceive',
  pregnancy: 'pregnancy',
  newborn: 'newborn',
  child: 'baby-and-child',
  tools: 'tools'
};

const stageLabel = {
  en: {
    ttc: 'trying to conceive',
    pregnancy: 'pregnancy',
    newborn: 'newborn care',
    child: 'baby and child growth',
    tools: 'care planning'
  },
  fa: {
    ttc: 'اقدام به بارداری',
    pregnancy: 'بارداری',
    newborn: 'مراقبت از نوزاد',
    child: 'رشد نوزاد و کودک',
    tools: 'برنامه‌ریزی مراقبت'
  },
  ar: {
    ttc: 'محاولة الحمل',
    pregnancy: 'الحمل',
    newborn: 'رعاية المولود',
    child: 'نمو الرضيع والطفل',
    tools: 'تخطيط الرعاية'
  },
  fr: {
    ttc: 'lorsque vous essayez de concevoir',
    pregnancy: 'la grossesse',
    newborn: 'les soins du nouveau-né',
    child: 'la croissance du bébé et de l’enfant',
    tools: 'l’organisation des soins'
  },
  tr: {
    ttc: 'gebelik planlama',
    pregnancy: 'hamilelik',
    newborn: 'yenidoğan bakımı',
    child: 'bebek ve çocuk gelişimi',
    tools: 'bakım planlama'
  },
  es: {
    ttc: 'la búsqueda del embarazo',
    pregnancy: 'el embarazo',
    newborn: 'el cuidado del recién nacido',
    child: 'el crecimiento del bebé y del niño',
    tools: 'la planificación del cuidado'
  },
  pt: {
    ttc: 'a tentativa de engravidar',
    pregnancy: 'a gravidez',
    newborn: 'os cuidados com o recém-nascido',
    child: 'o crescimento do bebê e da criança',
    tools: 'o planejamento de cuidados'
  }
};

const articleText = {
  en: {
    description: (title, stage) =>
      `${title}: an original BeMama guide for ${stage}, with practical steps, tracking ideas, and questions to bring to qualified care.`,
    intro: (title, stage) =>
      `${title} can feel simple in theory and surprisingly layered in daily life. This guide gives you a calm, original BeMama overview for ${stage}: what to notice, what to write down, what can usually wait, and what deserves a conversation with a qualified professional.`,
    headings: ['What this means', 'Simple steps that help', 'What to track', 'When to ask for help'],
    paragraphs: {
      ttc: [
        (title) =>
          `When you are planning a pregnancy, ${title.toLowerCase()} is best understood as one part of the larger picture: cycle patterns, timing, nutrition, sleep, stress, medications, and both partners' health all matter.`,
        'Use the topic as a way to make the next few weeks more organized, not as a pressure test. A simple note about dates, symptoms, questions, and habits is often more useful than trying to interpret every single sign.',
        'If cycles are very irregular, periods are absent, pain is severe, tests are confusing, or pregnancy has not happened after the usual window for your age group, bring the notes to a clinician so the next step is based on your situation.'
      ],
      pregnancy: [
        (title) =>
          `During pregnancy, ${title.toLowerCase()} is connected to your stage, your medical history, and your baby's growth. General guides are useful, but your care team is the place for individualized decisions.`,
        'Keep the rhythm practical: write down symptoms, questions, test dates, movement changes, and anything that feels new or persistent. That record makes prenatal visits clearer and helps you notice patterns without spiraling into late-night searching.',
        'Call your provider promptly for heavy bleeding, severe pain, fluid leaking, severe headache or vision changes, high fever, chest pain, breathing trouble, fainting, or a clear decrease in baby movement.'
      ],
      newborn: [
        (title) =>
          `In the newborn weeks, ${title.toLowerCase()} is about small patterns repeated many times: feeding, sleep, diapers, skin, temperature, soothing, and learning your baby's normal cues.`,
        'A written log can be reassuring during tired days. It does not need to be perfect; a few notes about feeds, wet diapers, stools, sleep stretches, and concerns can help you answer questions at checkups.',
        'Seek medical advice quickly for fever in a young baby, poor feeding, fewer wet diapers, breathing difficulty, unusual sleepiness, worsening jaundice, or a parent instinct that something is not right.'
      ],
      child: [
        (title) =>
          `As babies grow, ${title.toLowerCase()} is less about hitting a perfect date and more about watching steady progress, responsive care, safe environments, and your child's own temperament.`,
        'Look for trends across weeks rather than judging one difficult day. Sleep, feeding, play, language, movement, and behavior all change in spurts, and a calm routine helps children practice new skills.',
        'Ask your pediatric clinician if development seems to move backward, feeding or sleep problems are affecting growth or safety, behavior feels unmanageable, or you have a persistent concern.'
      ]
    },
    steps: {
      ttc: [
        'Choose one or two habits to steady first, such as a prenatal vitamin, consistent sleep, or cycle tracking.',
        'Discuss medications, supplements, chronic conditions, and previous pregnancy concerns before making major changes.'
      ],
      pregnancy: [
        'Keep prenatal appointments, bring questions, and ask how guidance changes for your trimester or health history.',
        'Use comfort measures, movement, food, hydration, and rest as supportive habits rather than strict rules.'
      ],
      newborn: [
        'Set up a simple daily rhythm around feeding, safe sleep, diaper changes, and parent recovery.',
        'Share care tasks where possible so one exhausted parent is not carrying every detail alone.'
      ],
      child: [
        'Build predictable routines, floor play, reading, outdoor time, and connection into ordinary days.',
        'Keep safety basics updated as mobility changes: sleep space, car seat, choking hazards, water, stairs, and medicines.'
      ]
    },
    takeaways: (title) => [
      `${title} is easier to use when you connect it to your own dates, symptoms, and questions.`,
      'Small notes can make conversations with qualified care more specific.',
      'General education supports decisions, but it does not replace medical care.',
      'Trust steady patterns more than one isolated day, and ask for help when something feels off.'
    ],
    faq: (title) => [
      {
        q: `Is ${title.toLowerCase()} the same for everyone?`,
        a: 'No. Age, health history, pregnancy stage, baby age, medications, family context, and local care guidance can all change what is best.'
      },
      {
        q: 'What should I do first?',
        a: 'Start with one small record: the date, what you noticed, what helped, and the question you want to ask at your next visit.'
      }
    ]
  },
  fa: {
    description: (title, stage) =>
      `${title}: راهنمای اصیل BeMama برای ${stage} با قدم‌های عملی، ایده‌های پیگیری و پرسش‌هایی برای مطرح کردن با مراقبت واجد شرایط.`,
    intro: (title, stage) =>
      `${title} روی کاغذ ساده به نظر می‌رسد، اما در زندگی روزمره لایه‌های زیادی دارد. این راهنما یک نگاه آرام و اصیل BeMama برای ${stage} می‌دهد: چه چیزهایی را ببینید، چه چیزهایی را یادداشت کنید، چه مواردی معمولاً می‌تواند صبر کند و چه زمانی باید با متخصص واجد شرایط صحبت کرد.`,
    headings: ['معنای این موضوع', 'قدم‌های ساده کمک‌کننده', 'چه چیزهایی را پیگیری کنید', 'چه زمانی کمک بگیرید'],
    paragraphs: {
      ttc: [
        (title) => `در زمان برنامه‌ریزی برای بارداری، ${title} فقط یک بخش از تصویر بزرگ‌تر است: الگوی چرخه، زمان‌بندی، تغذیه، خواب، استرس، داروها و سلامت هر دو شریک اهمیت دارند.`,
        'از این موضوع برای منظم‌تر کردن چند هفته آینده استفاده کنید، نه برای فشار آوردن به خودتان. یک یادداشت ساده از تاریخ‌ها، نشانه‌ها، پرسش‌ها و عادت‌ها معمولاً از تفسیر هر علامت کوچک مفیدتر است.',
        'اگر چرخه‌ها بسیار نامنظم هستند، پریود قطع شده، درد شدید است، نتیجه تست‌ها گیج‌کننده است یا بارداری در بازه معمول سن شما رخ نداده، یادداشت‌ها را با پزشک در میان بگذارید.'
      ],
      pregnancy: [
        (title) => `در بارداری، ${title} به مرحله بارداری، سابقه سلامت شما و رشد جنین وصل است. راهنماهای عمومی کمک می‌کنند، اما تصمیم‌های فردی باید با تیم مراقبت گرفته شود.`,
        'ریتم کار را عملی نگه دارید: نشانه‌ها، پرسش‌ها، تاریخ آزمایش‌ها، تغییر حرکت جنین و هر چیز تازه یا مداوم را یادداشت کنید.',
        'برای خونریزی زیاد، درد شدید، خروج مایع، سردرد شدید یا تغییر دید، تب بالا، درد قفسه سینه، مشکل تنفس، غش یا کاهش واضح حرکت جنین سریع با پزشک تماس بگیرید.'
      ],
      newborn: [
        (title) => `در هفته‌های نوزادی، ${title} یعنی دیدن الگوهای کوچک و تکرارشونده: تغذیه، خواب، پوشک، پوست، دما، آرام‌سازی و شناخت نشانه‌های معمول نوزاد.`,
        'یک ثبت ساده در روزهای خسته‌کننده آرامش‌بخش است. لازم نیست کامل باشد؛ چند یادداشت درباره تغذیه، پوشک خیس، مدفوع، خواب و نگرانی‌ها برای ویزیت‌ها کمک می‌کند.',
        'برای تب در نوزاد کوچک، تغذیه ضعیف، پوشک خیس کمتر، مشکل تنفس، خواب‌آلودگی غیرمعمول، زردی رو به بدتر شدن یا حس والدینی نگران‌کننده سریع مشورت پزشکی بگیرید.'
      ],
      child: [
        (title) => `با رشد کودک، ${title} بیشتر درباره پیشرفت پایدار، مراقبت پاسخ‌گو، محیط امن و خلق‌وخوی خود کودک است، نه رسیدن به یک تاریخ دقیق.`,
        'روندها را در طول چند هفته ببینید، نه یک روز سخت را. خواب، غذا، بازی، زبان، حرکت و رفتار همه جهشی تغییر می‌کنند.',
        'اگر رشد عقب‌گرد دارد، مشکلات خواب یا تغذیه روی رشد یا ایمنی اثر گذاشته، رفتار مدیریت‌ناپذیر شده یا نگرانی مداوم دارید، با پزشک کودک صحبت کنید.'
      ]
    },
    steps: {
      ttc: ['یک یا دو عادت را اول پایدار کنید؛ مثل ویتامین پیش از بارداری، خواب منظم یا ثبت چرخه.', 'داروها، مکمل‌ها، بیماری‌های مزمن و سابقه بارداری را پیش از تغییرات مهم با پزشک مرور کنید.'],
      pregnancy: ['ویزیت‌های بارداری را نگه دارید و بپرسید راهنمایی برای سه‌ماهه یا سابقه شما چگونه فرق می‌کند.', 'تغذیه، آب، حرکت، استراحت و روش‌های راحتی را به‌عنوان حمایت ببینید، نه قانون سخت.'],
      newborn: ['یک ریتم ساده روزانه برای تغذیه، خواب ایمن، تعویض پوشک و بهبود والد بسازید.', 'تا حد ممکن کارها را تقسیم کنید تا یک والد خسته همه جزئیات را تنها حمل نکند.'],
      child: ['روتین‌های قابل پیش‌بینی، بازی روی زمین، کتاب خواندن، بیرون رفتن و ارتباط را وارد روزهای عادی کنید.', 'با تغییر تحرک کودک، ایمنی خواب، صندلی خودرو، خطر خفگی، آب، پله و داروها را به‌روز کنید.']
    },
    takeaways: (title) => [`${title} وقتی با تاریخ‌ها، نشانه‌ها و پرسش‌های خودتان وصل شود کاربردی‌تر است.`, 'یادداشت‌های کوتاه گفت‌وگو با مراقبت واجد شرایط را دقیق‌تر می‌کند.', 'آموزش عمومی کمک‌کننده است، اما جایگزین مراقبت پزشکی نیست.', 'به الگوهای پایدار بیشتر از یک روز جدا اعتماد کنید و وقتی چیزی درست به نظر نمی‌رسد کمک بگیرید.'],
    faq: (title) => [
      { q: `آیا ${title} برای همه یکسان است؟`, a: 'خیر. سن، سابقه سلامت، مرحله بارداری، سن کودک، داروها، شرایط خانواده و راهنمایی محلی می‌تواند مسیر مناسب را تغییر دهد.' },
      { q: 'اولین قدم چیست؟', a: 'با یک ثبت کوچک شروع کنید: تاریخ، چیزی که دیدید، چیزی که کمک کرد و پرسشی که می‌خواهید در ویزیت بعدی بپرسید.' }
    ]
  },
  ar: {
    description: (title, stage) => `${title}: دليل BeMama أصلي لمرحلة ${stage} مع خطوات عملية وأفكار للتتبع وأسئلة تناقشينها مع رعاية مؤهلة.`,
    intro: (title, stage) => `${title} قد يبدو بسيطاً نظرياً، لكنه في الحياة اليومية يحمل تفاصيل كثيرة. يقدم هذا الدليل نظرة BeMama هادئة وأصلية لمرحلة ${stage}: ما تلاحظينه، ما تسجلينه، ما يمكن أن ينتظر، ومتى يلزم الحديث مع مختص مؤهل.`,
    headings: ['ماذا يعني هذا', 'خطوات بسيطة تساعد', 'ما الذي يجب تتبعه', 'متى تطلبين المساعدة'],
    paragraphs: {
      ttc: [(title) => `عند التخطيط للحمل، ${title} جزء واحد من الصورة: نمط الدورة، التوقيت، التغذية، النوم، التوتر، الأدوية وصحة الشريكين كلها مهمة.`, 'استخدمي الموضوع لتنظيم الأسابيع المقبلة لا للضغط على نفسك. ملاحظة بسيطة عن التواريخ والأعراض والأسئلة والعادات غالباً أفضل من تفسير كل علامة صغيرة.', 'إذا كانت الدورات غير منتظمة جداً، أو غابت الدورة، أو كان الألم شديداً، أو كانت الاختبارات محيرة، أو لم يحدث الحمل ضمن المدة المعتادة لفئتك العمرية، فخذي ملاحظاتك إلى الطبيب.'],
      pregnancy: [(title) => `خلال الحمل، ${title} يرتبط بمرحلتك وتاريخك الصحي ونمو طفلك. الأدلة العامة مفيدة، لكن فريق الرعاية هو المكان المناسب للقرارات الشخصية.`, 'اكتبي الأعراض والأسئلة ومواعيد الفحوص وتغيرات حركة الجنين وأي شيء جديد أو مستمر. هذا يجعل الزيارات أوضح.', 'اتصلي بمقدم الرعاية سريعاً عند نزيف غزير، ألم شديد، تسرب سوائل، صداع شديد أو تغير في الرؤية، حرارة عالية، ألم صدر، صعوبة تنفس، إغماء أو انخفاض واضح في حركة الجنين.'],
      newborn: [(title) => `في أسابيع المولود الأولى، ${title} يتعلق بأنماط صغيرة تتكرر: الرضاعة، النوم، الحفاضات، الجلد، الحرارة، التهدئة وفهم إشارات الطفل.`, 'التسجيل البسيط يطمئن في أيام التعب. لا يلزم أن يكون مثالياً؛ بضع ملاحظات عن الرضعات والحفاضات والنوم والمخاوف تكفي للمراجعات.', 'اطلبي المشورة بسرعة عند حمى المولود الصغير، ضعف الرضاعة، قلة الحفاضات المبللة، صعوبة التنفس، خمول غير معتاد، يرقان يزداد، أو إحساس والدِي بأن شيئاً ليس على ما يرام.'],
      child: [(title) => `مع نمو الطفل، ${title} لا يعني تاريخاً مثالياً بقدر ما يعني تقدماً ثابتاً ورعاية مستجيبة وبيئة آمنة ومزاج الطفل الخاص.`, 'راقبي الاتجاه عبر أسابيع لا يوماً صعباً واحداً. النوم، الطعام، اللعب، اللغة، الحركة والسلوك تتغير على دفعات.', 'راجعي طبيب الأطفال إذا حدث تراجع في المهارات، أو أثرت مشاكل النوم أو الطعام على النمو أو السلامة، أو كان السلوك مرهقاً جداً، أو بقي لديك قلق مستمر.']
    },
    steps: {
      ttc: ['ثبتي عادة أو عادتين أولاً، مثل فيتامين ما قبل الحمل أو نوم منتظم أو تتبع الدورة.', 'راجعي الأدوية والمكملات والحالات المزمنة وتاريخ الحمل قبل أي تغيير كبير.'],
      pregnancy: ['حافظي على زيارات الحمل واسألي كيف تختلف الإرشادات حسب الثلث أو تاريخك الصحي.', 'اجعلي الراحة والحركة والطعام والماء والنوم عادات داعمة لا قواعد قاسية.'],
      newborn: ['ابني إيقاعاً بسيطاً حول الرضاعة والنوم الآمن والحفاضات وتعافي الوالدين.', 'قسمي مهام الرعاية قدر الإمكان حتى لا يحمل والد متعب كل التفاصيل وحده.'],
      child: ['اجعلي الروتين واللعب على الأرض والقراءة والخروج والاتصال جزءاً من اليوم العادي.', 'حدثي أساسيات السلامة مع الحركة: النوم، مقعد السيارة، الاختناق، الماء، السلالم والأدوية.']
    },
    takeaways: (title) => [`يصبح ${title} أكثر فائدة عندما تربطينه بتواريخك وأعراضك وأسئلتك.`, 'الملاحظات الصغيرة تجعل الحوار مع الرعاية المؤهلة أكثر تحديداً.', 'التثقيف العام يدعم القرارات لكنه لا يستبدل الرعاية الطبية.', 'ثقي بالأنماط الثابتة أكثر من يوم واحد، واطلبي المساعدة عندما يبدو شيء غير طبيعي.'],
    faq: (title) => [{ q: `هل ${title} متشابه للجميع؟`, a: 'لا. العمر والتاريخ الصحي ومرحلة الحمل أو عمر الطفل والأدوية والسياق العائلي والإرشادات المحلية كلها قد تغير الأفضل.' }, { q: 'ما أول خطوة؟', a: 'ابدئي بسجل صغير: التاريخ، ما لاحظته، ما ساعد، والسؤال الذي تريدين طرحه في الزيارة القادمة.' }]
  },
  fr: {
    description: (title, stage) => `${title} : un guide BeMama original pour ${stage}, avec des gestes pratiques, des idées de suivi et des questions à poser à un professionnel qualifié.`,
    intro: (title, stage) => `${title} peut sembler simple en théorie et plus nuancé au quotidien. Ce guide propose une vue d’ensemble BeMama calme et originale pour ${stage} : quoi observer, quoi noter, ce qui peut attendre et ce qui mérite une discussion avec un professionnel qualifié.`,
    headings: ['Ce que cela signifie', 'Gestes simples utiles', 'Ce qu’il faut suivre', 'Quand demander de l’aide'],
    paragraphs: {
      ttc: [(title) => `Lorsque vous préparez une grossesse, ${title.toLowerCase()} n’est qu’une partie du tableau : cycles, timing, nutrition, sommeil, stress, médicaments et santé des deux partenaires comptent.`, 'Servez-vous de ce sujet pour organiser les prochaines semaines, pas pour vous mettre sous pression. Quelques notes sur les dates, symptômes, questions et habitudes valent souvent mieux que l’interprétation de chaque signe.', 'Si les cycles sont très irréguliers, absents, douloureux, si les tests prêtent à confusion ou si la grossesse tarde selon votre âge, apportez vos notes à un clinicien.'],
      pregnancy: [(title) => `Pendant la grossesse, ${title.toLowerCase()} dépend de votre stade, de vos antécédents et de la croissance du bébé. Les guides généraux aident, mais votre équipe de soins personnalise les décisions.`, 'Notez symptômes, questions, dates d’examens, mouvements et changements persistants. Ce carnet rend les visites plus claires.', 'Appelez rapidement en cas de saignement abondant, douleur sévère, perte de liquide, mal de tête intense ou troubles visuels, forte fièvre, douleur thoracique, gêne respiratoire, malaise ou baisse nette des mouvements.'],
      newborn: [(title) => `Les premières semaines, ${title.toLowerCase()} repose sur de petits schémas répétés : tétées, sommeil, couches, peau, température, apaisement et signaux du bébé.`, 'Un suivi simple rassure quand on est fatigué. Il suffit de noter quelques repères sur les repas, couches mouillées, selles, sommeil et inquiétudes.', 'Demandez rapidement un avis pour une fièvre chez un tout-petit bébé, des difficultés à manger, moins de couches mouillées, une respiration difficile, une somnolence inhabituelle, une jaunisse qui s’aggrave ou une intuition parentale inquiète.'],
      child: [(title) => `À mesure que l’enfant grandit, ${title.toLowerCase()} parle surtout de progrès réguliers, de soins réactifs, de sécurité et du tempérament propre à l’enfant.`, 'Observez les tendances sur plusieurs semaines plutôt qu’une journée difficile. Sommeil, alimentation, jeu, langage, mouvement et comportement évoluent par poussées.', 'Parlez au pédiatre si une compétence régresse, si le sommeil ou l’alimentation affecte la croissance ou la sécurité, si le comportement devient ingérable ou si une inquiétude persiste.']
    },
    steps: {
      ttc: ['Stabilisez une ou deux habitudes : vitamine prénatale, sommeil régulier ou suivi du cycle.', 'Passez en revue médicaments, compléments, maladies chroniques et antécédents avant les grands changements.'],
      pregnancy: ['Gardez vos rendez-vous prénataux et demandez ce qui change selon votre trimestre ou votre histoire médicale.', 'Utilisez confort, mouvement, alimentation, hydratation et repos comme soutiens, non comme règles rigides.'],
      newborn: ['Créez un rythme simple autour des repas, du sommeil sûr, des couches et de votre récupération.', 'Partagez les tâches quand c’est possible afin qu’un parent épuisé ne porte pas tout seul chaque détail.'],
      child: ['Installez routines, jeux au sol, lecture, sorties et moments de lien dans les journées ordinaires.', 'Mettez à jour la sécurité avec la mobilité : sommeil, siège auto, étouffement, eau, escaliers et médicaments.']
    },
    takeaways: (title) => [`${title} devient plus utile lorsqu’il est relié à vos dates, symptômes et questions.`, 'De petites notes rendent les échanges avec les soignants plus précis.', 'L’éducation générale soutient les décisions, sans remplacer les soins médicaux.', 'Fiez-vous aux tendances plutôt qu’à une seule journée, et demandez de l’aide si quelque chose vous inquiète.'],
    faq: (title) => [{ q: `${title} est-il identique pour tout le monde ?`, a: 'Non. L’âge, les antécédents, le stade, l’âge du bébé, les médicaments, le contexte familial et les recommandations locales peuvent changer la meilleure option.' }, { q: 'Par quoi commencer ?', a: 'Commencez par une note simple : la date, ce que vous avez observé, ce qui a aidé et la question à poser au prochain rendez-vous.' }]
  },
  tr: {
    description: (title, stage) => `${title}: ${stage} için özgün bir BeMama rehberi; pratik adımlar, takip fikirleri ve uzman bakıma götürülecek sorular.`,
    intro: (title, stage) => `${title} teoride basit, günlük hayatta ise katmanlı olabilir. Bu rehber ${stage} için sakin ve özgün bir BeMama özeti sunar: neyi fark etmeli, neyi not etmeli, ne bekleyebilir ve ne zaman nitelikli bir uzmanla konuşulmalı.`,
    headings: ['Bu ne anlama gelir', 'Yardımcı basit adımlar', 'Neyi takip etmeli', 'Ne zaman yardım istemeli'],
    paragraphs: {
      ttc: [(title) => `Gebelik planlarken ${title.toLowerCase()} daha büyük resmin bir parçasıdır: döngü düzeni, zamanlama, beslenme, uyku, stres, ilaçlar ve iki partnerin sağlığı önemlidir.`, 'Bu konuyu kendinize baskı yapmak için değil, önünüzdeki haftaları düzenlemek için kullanın. Tarihler, belirtiler, sorular ve alışkanlıklarla ilgili kısa notlar çoğu zaman her işareti yorumlamaktan daha yararlıdır.', 'Döngüler çok düzensizse, adet yoksa, ağrı şiddetliyse, testler kafa karıştırıyorsa veya yaş grubunuz için beklenen sürede gebelik oluşmadıysa notlarınızı hekime götürün.'],
      pregnancy: [(title) => `Hamilelikte ${title.toLowerCase()} bulunduğunuz dönem, sağlık öykünüz ve bebeğin büyümesiyle bağlantılıdır. Genel rehberler yararlıdır; kişisel kararlar bakım ekibinizle alınır.`, 'Belirtileri, soruları, test tarihlerini, hareket değişikliklerini ve kalıcı yenilikleri yazın. Bu kayıt ziyaretleri netleştirir.', 'Yoğun kanama, şiddetli ağrı, sıvı gelmesi, ciddi baş ağrısı veya görme değişikliği, yüksek ateş, göğüs ağrısı, nefes darlığı, bayılma ya da bebek hareketlerinde belirgin azalma olursa hemen arayın.'],
      newborn: [(title) => `Yenidoğan haftalarında ${title.toLowerCase()} tekrarlanan küçük örüntülerle ilgilidir: beslenme, uyku, bezler, cilt, ısı, sakinleşme ve bebeğinizin işaretleri.`, 'Basit bir kayıt yorgun günlerde rahatlatır. Mükemmel olması gerekmez; beslenme, ıslak bez, dışkı, uyku ve kaygılarla ilgili birkaç not yeterlidir.', 'Küçük bebekte ateş, kötü beslenme, az ıslak bez, solunum güçlüğü, olağan dışı uyku hali, artan sarılık veya ebeveyn sezgisiyle bir şeylerin ters olduğu hissi varsa hızlıca danışın.'],
      child: [(title) => `Bebek büyüdükçe ${title.toLowerCase()} kusursuz tarihlerden çok düzenli ilerleme, duyarlı bakım, güvenli çevre ve çocuğun mizacıyla ilgilidir.`, 'Tek zor güne değil, haftalar içindeki eğilime bakın. Uyku, beslenme, oyun, dil, hareket ve davranış sıçramalarla değişir.', 'Beceriler geriliyorsa, uyku veya beslenme büyüme ya da güvenliği etkiliyorsa, davranış yönetilemez geliyorsa ya da kalıcı kaygınız varsa çocuk doktoruyla konuşun.']
    },
    steps: {
      ttc: ['Önce bir iki alışkanlığı sabitleyin: prenatal vitamin, düzenli uyku veya döngü takibi.', 'İlaçları, takviyeleri, kronik durumları ve önceki gebelikleri büyük değişikliklerden önce gözden geçirin.'],
      pregnancy: ['Doğum öncesi randevularınızı sürdürün ve önerilerin trimesterinize veya öykünüze göre nasıl değiştiğini sorun.', 'Rahatlama, hareket, beslenme, su ve dinlenmeyi katı kural değil destekleyici alışkanlık olarak kullanın.'],
      newborn: ['Beslenme, güvenli uyku, bez değişimi ve ebeveyn toparlanması etrafında sade bir günlük ritim kurun.', 'Mümkünse bakım görevlerini paylaşın; yorgun bir ebeveyn her ayrıntıyı tek başına taşımasın.'],
      child: ['Öngörülebilir rutinler, yerde oyun, okuma, dışarı çıkma ve bağ kurmayı sıradan günlere yerleştirin.', 'Hareket arttıkça uyku, oto koltuğu, boğulma, su, merdiven ve ilaç güvenliğini güncelleyin.']
    },
    takeaways: (title) => [`${title}, kendi tarihleriniz, belirtileriniz ve sorularınızla bağlandığında daha kullanışlıdır.`, 'Kısa notlar uzman bakımla konuşmaları daha net yapar.', 'Genel eğitim kararları destekler ama tıbbi bakımın yerine geçmez.', 'Tek bir günden çok düzenli örüntülere güvenin ve içinize sinmeyen durumda yardım isteyin.'],
    faq: (title) => [{ q: `${title} herkes için aynı mı?`, a: 'Hayır. Yaş, sağlık öyküsü, gebelik dönemi, bebeğin yaşı, ilaçlar, aile koşulları ve yerel bakım rehberleri en iyi yolu değiştirebilir.' }, { q: 'İlk adım ne olmalı?', a: 'Küçük bir kayıtla başlayın: tarih, fark ettiğiniz şey, neyin yardımcı olduğu ve sonraki ziyarette soracağınız soru.' }]
  },
  es: {
    description: (title, stage) => `${title}: una guía original de BeMama para ${stage}, con pasos prácticos, ideas de seguimiento y preguntas para atención calificada.`,
    intro: (title, stage) => `${title} puede parecer simple en teoría y tener muchos matices en la vida diaria. Esta guía ofrece una mirada BeMama tranquila y original para ${stage}: qué observar, qué anotar, qué puede esperar y qué merece hablarse con un profesional calificado.`,
    headings: ['Qué significa', 'Pasos simples que ayudan', 'Qué seguir', 'Cuándo pedir ayuda'],
    paragraphs: {
      ttc: [(title) => `Cuando buscas embarazo, ${title.toLowerCase()} es solo una parte del panorama: ciclos, timing, nutrición, sueño, estrés, medicamentos y salud de ambos miembros de la pareja importan.`, 'Usa el tema para ordenar las próximas semanas, no para presionarte. Una nota simple sobre fechas, síntomas, preguntas y hábitos suele ayudar más que interpretar cada señal.', 'Si los ciclos son muy irregulares, no hay periodo, el dolor es fuerte, las pruebas confunden o el embarazo no llega dentro del tiempo habitual para tu edad, lleva tus notas a un profesional.'],
      pregnancy: [(title) => `Durante el embarazo, ${title.toLowerCase()} depende de tu etapa, tu historia médica y el crecimiento del bebé. Las guías generales ayudan, pero las decisiones personales van con tu equipo de salud.`, 'Anota síntomas, preguntas, fechas de pruebas, cambios en movimiento y cualquier cosa nueva o persistente. Ese registro aclara las visitas prenatales.', 'Llama pronto por sangrado abundante, dolor intenso, pérdida de líquido, dolor de cabeza fuerte o cambios visuales, fiebre alta, dolor de pecho, dificultad para respirar, desmayo o clara disminución de movimientos.'],
      newborn: [(title) => `En las primeras semanas, ${title.toLowerCase()} se trata de pequeños patrones repetidos: alimentación, sueño, pañales, piel, temperatura, consuelo y señales del bebé.`, 'Un registro simple tranquiliza en días cansados. No necesita ser perfecto; unas notas de tomas, pañales mojados, deposiciones, sueño y dudas ayudan en los controles.', 'Busca consejo rápido ante fiebre en un bebé pequeño, mala alimentación, menos pañales mojados, dificultad respiratoria, somnolencia inusual, ictericia que empeora o una intuición parental de que algo no está bien.'],
      child: [(title) => `A medida que el bebé crece, ${title.toLowerCase()} trata más de progreso constante, cuidado sensible, entorno seguro y temperamento propio que de una fecha perfecta.`, 'Mira tendencias durante semanas, no un solo día difícil. Sueño, comida, juego, lenguaje, movimiento y conducta cambian por etapas.', 'Consulta al pediatra si hay pérdida de habilidades, si sueño o alimentación afectan crecimiento o seguridad, si la conducta se vuelve inmanejable o si una preocupación persiste.']
    },
    steps: {
      ttc: ['Estabiliza una o dos costumbres primero: vitamina prenatal, sueño regular o seguimiento del ciclo.', 'Revisa medicamentos, suplementos, condiciones crónicas y antecedentes antes de cambios importantes.'],
      pregnancy: ['Mantén las visitas prenatales y pregunta cómo cambia la orientación según tu trimestre o historia médica.', 'Usa comodidad, movimiento, comida, agua y descanso como apoyos, no como reglas rígidas.'],
      newborn: ['Crea un ritmo diario simple alrededor de alimentación, sueño seguro, pañales y recuperación parental.', 'Comparte tareas cuando se pueda para que una sola persona agotada no cargue con todo.'],
      child: ['Incluye rutinas previsibles, juego en el suelo, lectura, aire libre y conexión en días ordinarios.', 'Actualiza la seguridad según la movilidad: sueño, silla de auto, atragantamiento, agua, escaleras y medicinas.']
    },
    takeaways: (title) => [`${title} es más útil cuando se conecta con tus fechas, síntomas y preguntas.`, 'Las notas pequeñas hacen más concreta la conversación con profesionales.', 'La educación general apoya decisiones, pero no reemplaza la atención médica.', 'Confía más en patrones constantes que en un día aislado, y pide ayuda si algo no cuadra.'],
    faq: (title) => [{ q: `¿${title} es igual para todas las personas?`, a: 'No. Edad, historia médica, etapa, edad del bebé, medicamentos, contexto familiar y guías locales pueden cambiar lo mejor.' }, { q: '¿Qué hago primero?', a: 'Empieza con una nota breve: fecha, qué observaste, qué ayudó y qué pregunta quieres llevar a la próxima visita.' }]
  },
  pt: {
    description: (title, stage) => `${title}: um guia original da BeMama para ${stage}, com passos práticos, ideias de acompanhamento e perguntas para levar a profissionais qualificados.`,
    intro: (title, stage) => `${title} pode parecer simples na teoria e cheio de detalhes no dia a dia. Este guia traz uma visão BeMama calma e original para ${stage}: o que observar, o que anotar, o que pode esperar e o que merece conversa com um profissional qualificado.`,
    headings: ['O que isso significa', 'Passos simples que ajudam', 'O que acompanhar', 'Quando pedir ajuda'],
    paragraphs: {
      ttc: [(title) => `Ao tentar engravidar, ${title.toLowerCase()} é uma parte do quadro: ciclos, timing, nutrição, sono, estresse, medicamentos e saúde dos dois parceiros importam.`, 'Use o tema para organizar as próximas semanas, não para se pressionar. Uma nota simples sobre datas, sintomas, perguntas e hábitos costuma ajudar mais do que interpretar cada sinal.', 'Se os ciclos são muito irregulares, a menstruação não vem, a dor é forte, os testes confundem ou a gravidez não acontece no prazo esperado para sua idade, leve as notas ao profissional.'],
      pregnancy: [(title) => `Na gravidez, ${title.toLowerCase()} depende da sua fase, histórico de saúde e crescimento do bebê. Guias gerais ajudam, mas decisões pessoais pertencem à sua equipe de cuidado.`, 'Anote sintomas, perguntas, datas de exames, mudanças nos movimentos e qualquer coisa nova ou persistente. Esse registro clareia as consultas.', 'Ligue rapidamente em caso de sangramento intenso, dor forte, perda de líquido, dor de cabeça intensa ou alterações visuais, febre alta, dor no peito, falta de ar, desmaio ou queda clara nos movimentos do bebê.'],
      newborn: [(title) => `Nas primeiras semanas, ${title.toLowerCase()} envolve pequenos padrões repetidos: alimentação, sono, fraldas, pele, temperatura, acalmar e entender os sinais do bebê.`, 'Um registro simples tranquiliza em dias cansativos. Não precisa ser perfeito; algumas notas sobre mamadas, fraldas molhadas, cocô, sono e dúvidas ajudam nas consultas.', 'Procure orientação rápida para febre em bebê pequeno, mamadas ruins, menos fraldas molhadas, dificuldade para respirar, sonolência incomum, icterícia piorando ou sensação parental de que algo não está bem.'],
      child: [(title) => `Conforme o bebê cresce, ${title.toLowerCase()} fala mais de progresso constante, cuidado responsivo, ambiente seguro e temperamento da criança do que de uma data perfeita.`, 'Observe tendências por semanas, não um único dia difícil. Sono, alimentação, brincadeira, linguagem, movimento e comportamento mudam em saltos.', 'Fale com o pediatra se habilidades regredirem, se sono ou alimentação afetarem crescimento ou segurança, se o comportamento parecer impossível de manejar ou se a preocupação persistir.']
    },
    steps: {
      ttc: ['Estabilize um ou dois hábitos primeiro: vitamina pré-natal, sono regular ou acompanhamento do ciclo.', 'Revise medicamentos, suplementos, condições crônicas e histórico antes de grandes mudanças.'],
      pregnancy: ['Mantenha consultas pré-natais e pergunte como a orientação muda para seu trimestre ou histórico.', 'Use conforto, movimento, comida, água e descanso como apoios, não como regras rígidas.'],
      newborn: ['Monte um ritmo simples com alimentação, sono seguro, fraldas e recuperação dos pais.', 'Divida tarefas quando possível para que uma pessoa exausta não carregue todos os detalhes sozinha.'],
      child: ['Inclua rotinas previsíveis, brincar no chão, leitura, ar livre e conexão nos dias comuns.', 'Atualize a segurança conforme a mobilidade: sono, cadeirinha, engasgo, água, escadas e remédios.']
    },
    takeaways: (title) => [`${title} fica mais útil quando ligado às suas datas, sintomas e perguntas.`, 'Pequenas notas tornam a conversa com profissionais mais específica.', 'Educação geral apoia decisões, mas não substitui cuidado médico.', 'Confie mais em padrões consistentes do que em um dia isolado e peça ajuda se algo parecer errado.'],
    faq: (title) => [{ q: `${title} é igual para todo mundo?`, a: 'Não. Idade, histórico de saúde, fase, idade do bebê, medicamentos, contexto familiar e orientações locais podem mudar o melhor caminho.' }, { q: 'Qual é o primeiro passo?', a: 'Comece com uma nota pequena: data, o que observou, o que ajudou e a pergunta para a próxima consulta.' }]
  }
};

function topic(slug, titles) {
  return { slug, titles: Object.fromEntries(langs.map((lang, index) => [lang, titles[index]])) };
}

const topicsByCategory = {
  ttc: [
    topic('menstrual-cycle-basics', ['Menstrual Cycle Basics', 'اصول چرخه قاعدگی', 'أساسيات الدورة الشهرية', 'Bases du cycle menstruel', 'Adet Döngüsünün Temelleri', 'Conceptos básicos del ciclo menstrual', 'Noções básicas do ciclo menstrual']),
    topic('ovulation-signs', ['Ovulation Signs', 'نشانه‌های تخمک‌گذاری', 'علامات الإباضة', 'Signes de l’ovulation', 'Yumurtlama Belirtileri', 'Señales de ovulación', 'Sinais de ovulação']),
    topic('fertile-window-timing', ['Timing the Fertile Window', 'زمان‌بندی پنجره باروری', 'توقيت نافذة الخصوبة', 'Bien viser la fenêtre fertile', 'Verimli Dönemi Zamanlamak', 'Cómo calcular la ventana fértil', 'Como calcular a janela fértil']),
    topic('ovulation-tests', ['Using Ovulation Tests', 'استفاده از تست تخمک‌گذاری', 'استخدام اختبارات الإباضة', 'Utiliser les tests d’ovulation', 'Ovulasyon Testlerini Kullanmak', 'Uso de pruebas de ovulación', 'Uso de testes de ovulação']),
    topic('basal-body-temperature', ['Basal Body Temperature Tracking', 'پیگیری دمای پایه بدن', 'تتبع حرارة الجسم الأساسية', 'Suivi de la température basale', 'Bazal Vücut Isısı Takibi', 'Seguimiento de temperatura basal', 'Acompanhamento da temperatura basal']),
    topic('cervical-mucus', ['Cervical Mucus Changes', 'تغییرات ترشحات دهانه رحم', 'تغيرات مخاط عنق الرحم', 'Changements de glaire cervicale', 'Servikal Mukus Değişimleri', 'Cambios del moco cervical', 'Mudanças no muco cervical']),
    topic('prenatal-vitamins-before-pregnancy', ['Prenatal Vitamins Before Pregnancy', 'ویتامین‌های پیش از بارداری', 'فيتامينات ما قبل الحمل', 'Vitamines prénatales avant la grossesse', 'Gebelik Öncesi Prenatal Vitaminler', 'Vitaminas prenatales antes del embarazo', 'Vitaminas pré-natais antes da gravidez']),
    topic('folic-acid-basics', ['Folic Acid Basics', 'اصول اسید فولیک', 'أساسيات حمض الفوليك', 'Bases de l’acide folique', 'Folik Asit Temelleri', 'Conceptos básicos del ácido fólico', 'Noções básicas de ácido fólico']),
    topic('fertility-friendly-nutrition', ['Fertility-Friendly Nutrition', 'تغذیه مناسب باروری', 'تغذية داعمة للخصوبة', 'Nutrition favorable à la fertilité', 'Doğurganlığı Destekleyen Beslenme', 'Nutrición favorable para la fertilidad', 'Nutrição favorável à fertilidade']),
    topic('caffeine-alcohol-ttc', ['Caffeine and Alcohol While TTC', 'کافئین و الکل هنگام اقدام', 'الكافيين والكحول أثناء محاولة الحمل', 'Caféine et alcool pendant les essais', 'Gebelik Planlarken Kafein ve Alkol', 'Cafeína y alcohol al buscar embarazo', 'Cafeína e álcool ao tentar engravidar']),
    topic('partner-health-sperm', ['Partner Health and Sperm Quality', 'سلامت شریک و کیفیت اسپرم', 'صحة الشريك وجودة الحيوانات المنوية', 'Santé du partenaire et qualité du sperme', 'Partner Sağlığı ve Sperm Kalitesi', 'Salud de la pareja y calidad del esperma', 'Saúde do parceiro e qualidade do esperma']),
    topic('early-pregnancy-signs', ['Early Pregnancy Signs', 'نشانه‌های اولیه بارداری', 'علامات الحمل المبكرة', 'Premiers signes de grossesse', 'Erken Gebelik Belirtileri', 'Primeras señales de embarazo', 'Primeiros sinais de gravidez']),
    topic('pregnancy-test-timing', ['When to Take a Pregnancy Test', 'چه زمانی تست بارداری بدهیم', 'متى تجرين اختبار الحمل', 'Quand faire un test de grossesse', 'Gebelik Testi Ne Zaman Yapılır', 'Cuándo hacer una prueba de embarazo', 'Quando fazer um teste de gravidez']),
    topic('irregular-cycles-ttc', ['Trying With Irregular Cycles', 'اقدام با چرخه‌های نامنظم', 'محاولة الحمل مع دورات غير منتظمة', 'Essayer avec des cycles irréguliers', 'Düzensiz Döngülerle Gebelik Planlamak', 'Buscar embarazo con ciclos irregulares', 'Tentar engravidar com ciclos irregulares']),
    topic('when-to-seek-fertility-help', ['When to Seek Fertility Help', 'چه زمانی برای باروری کمک بگیریم', 'متى تطلبين مساعدة للخصوبة', 'Quand demander de l’aide en fertilité', 'Doğurganlık İçin Ne Zaman Yardım Almalı', 'Cuándo buscar ayuda de fertilidad', 'Quando procurar ajuda para fertilidade']),
    topic('preconception-appointment', ['Your Preconception Appointment', 'ویزیت پیش از بارداری', 'موعد ما قبل الحمل', 'Votre rendez-vous préconceptionnel', 'Gebelik Öncesi Randevunuz', 'Tu cita preconcepcional', 'Sua consulta pré-concepcional'])
  ],
  pregnancy: [
    topic('pregnancy-weeks-4-8', ['Weeks 4–8 of Pregnancy', 'هفته‌های ۴ تا ۸ بارداری', 'أسابيع الحمل 4 إلى 8', 'Semaines 4 à 8 de grossesse', 'Gebeliğin 4-8. Haftaları', 'Semanas 4 a 8 del embarazo', 'Semanas 4 a 8 da gravidez']),
    topic('pregnancy-weeks-9-12', ['Weeks 9–12 of Pregnancy', 'هفته‌های ۹ تا ۱۲ بارداری', 'أسابيع الحمل 9 إلى 12', 'Semaines 9 à 12 de grossesse', 'Gebeliğin 9-12. Haftaları', 'Semanas 9 a 12 del embarazo', 'Semanas 9 a 12 da gravidez']),
    topic('pregnancy-weeks-13-16', ['Weeks 13–16 of Pregnancy', 'هفته‌های ۱۳ تا ۱۶ بارداری', 'أسابيع الحمل 13 إلى 16', 'Semaines 13 à 16 de grossesse', 'Gebeliğin 13-16. Haftaları', 'Semanas 13 a 16 del embarazo', 'Semanas 13 a 16 da gravidez']),
    topic('pregnancy-weeks-17-20', ['Weeks 17–20 of Pregnancy', 'هفته‌های ۱۷ تا ۲۰ بارداری', 'أسابيع الحمل 17 إلى 20', 'Semaines 17 à 20 de grossesse', 'Gebeliğin 17-20. Haftaları', 'Semanas 17 a 20 del embarazo', 'Semanas 17 a 20 da gravidez']),
    topic('pregnancy-weeks-21-24', ['Weeks 21–24 of Pregnancy', 'هفته‌های ۲۱ تا ۲۴ بارداری', 'أسابيع الحمل 21 إلى 24', 'Semaines 21 à 24 de grossesse', 'Gebeliğin 21-24. Haftaları', 'Semanas 21 a 24 del embarazo', 'Semanas 21 a 24 da gravidez']),
    topic('pregnancy-weeks-25-28', ['Weeks 25–28 of Pregnancy', 'هفته‌های ۲۵ تا ۲۸ بارداری', 'أسابيع الحمل 25 إلى 28', 'Semaines 25 à 28 de grossesse', 'Gebeliğin 25-28. Haftaları', 'Semanas 25 a 28 del embarazo', 'Semanas 25 a 28 da gravidez']),
    topic('pregnancy-weeks-29-32', ['Weeks 29–32 of Pregnancy', 'هفته‌های ۲۹ تا ۳۲ بارداری', 'أسابيع الحمل 29 إلى 32', 'Semaines 29 à 32 de grossesse', 'Gebeliğin 29-32. Haftaları', 'Semanas 29 a 32 del embarazo', 'Semanas 29 a 32 da gravidez']),
    topic('pregnancy-weeks-33-36', ['Weeks 33–36 of Pregnancy', 'هفته‌های ۳۳ تا ۳۶ بارداری', 'أسابيع الحمل 33 إلى 36', 'Semaines 33 à 36 de grossesse', 'Gebeliğin 33-36. Haftaları', 'Semanas 33 a 36 del embarazo', 'Semanas 33 a 36 da gravidez']),
    topic('pregnancy-weeks-37-40', ['Weeks 37–40 of Pregnancy', 'هفته‌های ۳۷ تا ۴۰ بارداری', 'أسابيع الحمل 37 إلى 40', 'Semaines 37 à 40 de grossesse', 'Gebeliğin 37-40. Haftaları', 'Semanas 37 a 40 del embarazo', 'Semanas 37 a 40 da gravidez']),
    topic('nausea-remedies', ['Pregnancy Nausea Relief', 'کاهش تهوع بارداری', 'تخفيف غثيان الحمل', 'Soulager les nausées de grossesse', 'Hamilelik Bulantısını Hafifletmek', 'Alivio de las náuseas del embarazo', 'Alívio de náuseas na gravidez']),
    topic('heartburn-during-pregnancy', ['Heartburn During Pregnancy', 'سوزش معده در بارداری', 'حرقة المعدة أثناء الحمل', 'Brûlures d’estomac pendant la grossesse', 'Hamilelikte Mide Yanması', 'Acidez durante el embarazo', 'Azia durante a gravidez']),
    topic('constipation-during-pregnancy', ['Constipation During Pregnancy', 'یبوست در بارداری', 'الإمساك أثناء الحمل', 'Constipation pendant la grossesse', 'Hamilelikte Kabızlık', 'Estreñimiento durante el embarazo', 'Constipação durante a gravidez']),
    topic('pelvic-pain-round-ligament', ['Pelvic Pain and Round Ligaments', 'درد لگن و رباط گرد', 'ألم الحوض والأربطة المستديرة', 'Douleurs pelviennes et ligaments ronds', 'Pelvik Ağrı ve Yuvarlak Bağlar', 'Dolor pélvico y ligamentos redondos', 'Dor pélvica e ligamentos redondos']),
    topic('prenatal-visit-schedule', ['Prenatal Visit Schedule', 'برنامه ویزیت‌های بارداری', 'جدول زيارات الحمل', 'Calendrier des visites prénatales', 'Doğum Öncesi Randevu Takvimi', 'Calendario de visitas prenatales', 'Calendário de consultas pré-natais']),
    topic('blood-tests-screening', ['Pregnancy Blood Tests and Screening', 'آزمایش خون و غربالگری بارداری', 'تحاليل الدم والفحوص أثناء الحمل', 'Prises de sang et dépistages de grossesse', 'Gebelik Kan Testleri ve Taramalar', 'Análisis y pruebas de detección en embarazo', 'Exames de sangue e rastreios na gravidez']),
    topic('anatomy-scan-guide', ['The Anatomy Scan', 'سونوگرافی آناتومی', 'فحص التشريح بالسونار', 'L’échographie morphologique', 'Detaylı Ultrason Taraması', 'La ecografía anatómica', 'Ultrassom morfológico']),
    topic('glucose-test-guide', ['The Glucose Test', 'آزمایش قند بارداری', 'اختبار الجلوكوز', 'Le test du glucose', 'Glukoz Testi', 'La prueba de glucosa', 'O teste de glicose']),
    topic('blood-pressure-preeclampsia', ['Blood Pressure and Preeclampsia', 'فشار خون و پره‌اکلامپسی', 'ضغط الدم وما قبل تسمم الحمل', 'Tension artérielle et prééclampsie', 'Tansiyon ve Preeklampsi', 'Presión arterial y preeclampsia', 'Pressão arterial e pré-eclâmpsia']),
    topic('vaccines-during-pregnancy', ['Vaccines During Pregnancy', 'واکسن‌ها در بارداری', 'اللقاحات أثناء الحمل', 'Vaccins pendant la grossesse', 'Hamilelikte Aşılar', 'Vacunas durante el embarazo', 'Vacinas durante a gravidez']),
    topic('safe-medicines-pregnancy', ['Medication Safety in Pregnancy', 'ایمنی دارو در بارداری', 'سلامة الأدوية في الحمل', 'Sécurité des médicaments pendant la grossesse', 'Hamilelikte İlaç Güvenliği', 'Seguridad de medicamentos en embarazo', 'Segurança de medicamentos na gravidez']),
    topic('sleep-positions-pregnancy', ['Sleep Positions in Pregnancy', 'وضعیت خواب در بارداری', 'وضعيات النوم في الحمل', 'Positions de sommeil pendant la grossesse', 'Hamilelikte Uyku Pozisyonları', 'Posturas para dormir en embarazo', 'Posições para dormir na gravidez']),
    topic('travel-during-pregnancy', ['Travel During Pregnancy', 'سفر در بارداری', 'السفر أثناء الحمل', 'Voyager pendant la grossesse', 'Hamilelikte Seyahat', 'Viajar durante el embarazo', 'Viajar durante a gravidez']),
    topic('work-and-maternity-leave', ['Work and Maternity Leave Planning', 'کار و برنامه مرخصی زایمان', 'العمل وتخطيط إجازة الأمومة', 'Travail et congé maternité', 'İş ve Doğum İzni Planlama', 'Trabajo y licencia de maternidad', 'Trabalho e licença-maternidade']),
    topic('baby-movement-patterns', ['Baby Movement Patterns', 'الگوی حرکت جنین', 'أنماط حركة الجنين', 'Rythmes des mouvements du bébé', 'Bebek Hareket Örüntüleri', 'Patrones de movimiento del bebé', 'Padrões de movimento do bebê']),
    topic('preparing-for-labor', ['Preparing for Labor', 'آمادگی برای زایمان', 'الاستعداد للمخاض', 'Se préparer au travail', 'Doğuma Hazırlanmak', 'Prepararse para el parto', 'Preparação para o trabalho de parto']),
    topic('signs-of-labor', ['Signs Labor May Be Starting', 'نشانه‌های شروع زایمان', 'علامات بدء المخاض', 'Signes que le travail commence', 'Doğumun Başlama Belirtileri', 'Señales de que empieza el parto', 'Sinais de início do trabalho de parto']),
    topic('c-section-basics', ['C-Section Basics', 'اصول سزارین', 'أساسيات الولادة القيصرية', 'Bases de la césarienne', 'Sezaryen Temelleri', 'Conceptos básicos de cesárea', 'Noções básicas de cesárea']),
    topic('postpartum-plan', ['Planning for Postpartum', 'برنامه‌ریزی برای پس از زایمان', 'التخطيط لما بعد الولادة', 'Préparer le post-partum', 'Doğum Sonrasını Planlamak', 'Planificar el posparto', 'Planejamento para o pós-parto'])
  ],
  newborn: [
    topic('first-24-hours', ['The First 24 Hours With Baby', '۲۴ ساعت اول با نوزاد', 'أول 24 ساعة مع الطفل', 'Les premières 24 heures avec bébé', 'Bebekle İlk 24 Saat', 'Las primeras 24 horas con el bebé', 'As primeiras 24 horas com o bebê']),
    topic('feeding-cues', ['Newborn Feeding Cues', 'نشانه‌های گرسنگی نوزاد', 'إشارات الجوع لدى المولود', 'Signes de faim du nouveau-né', 'Yenidoğan Beslenme İşaretleri', 'Señales de hambre del recién nacido', 'Sinais de fome do recém-nascido']),
    topic('latch-basics', ['Latch Basics', 'اصول گرفتن سینه', 'أساسيات الالتقام', 'Bases de la prise du sein', 'Emzirme Kavrama Temelleri', 'Conceptos básicos del agarre', 'Noções de pega']),
    topic('pumping-storing-milk', ['Pumping and Storing Milk', 'دوشیدن و نگهداری شیر', 'شفط الحليب وتخزينه', 'Tirer et conserver le lait', 'Süt Sağma ve Saklama', 'Extraer y conservar leche', 'Ordenhar e armazenar leite']),
    topic('formula-prep-safety', ['Formula Preparation Safety', 'ایمنی آماده‌سازی شیر خشک', 'سلامة تحضير الحليب الصناعي', 'Préparation sûre du lait infantile', 'Mama Hazırlama Güvenliği', 'Preparación segura de fórmula', 'Preparo seguro de fórmula']),
    topic('diaper-output', ['Wet Diapers and Output', 'پوشک خیس و خروجی نوزاد', 'الحفاضات المبللة والإخراج', 'Couches mouillées et sorties', 'Islak Bezler ve Çıktılar', 'Pañales mojados y señales', 'Fraldas molhadas e sinais']),
    topic('newborn-poop', ['Newborn Poop Changes', 'تغییرات مدفوع نوزاد', 'تغيرات براز المولود', 'Changements des selles du nouveau-né', 'Yenidoğan Dışkı Değişimleri', 'Cambios en la caca del recién nacido', 'Mudanças no cocô do recém-nascido']),
    topic('jaundice-basics', ['Newborn Jaundice Basics', 'اصول زردی نوزاد', 'أساسيات يرقان المولود', 'Bases de la jaunisse du nouveau-né', 'Yenidoğan Sarılığı Temelleri', 'Conceptos básicos de ictericia neonatal', 'Noções de icterícia neonatal']),
    topic('newborn-fever', ['Fever in a Newborn', 'تب در نوزاد', 'الحمى عند المولود', 'Fièvre chez le nouveau-né', 'Yenidoğanda Ateş', 'Fiebre en un recién nacido', 'Febre em recém-nascido']),
    topic('safe-sleep-room-sharing', ['Safe Sleep and Room Sharing', 'خواب ایمن و هم‌اتاقی', 'النوم الآمن ومشاركة الغرفة', 'Sommeil sûr et partage de chambre', 'Güvenli Uyku ve Oda Paylaşımı', 'Sueño seguro y compartir habitación', 'Sono seguro e quarto compartilhado']),
    topic('swaddling-safety', ['Swaddling Safety', 'ایمنی قنداق کردن', 'سلامة التقميط', 'Emmaillotage en sécurité', 'Kundak Güvenliği', 'Seguridad al envolver al bebé', 'Segurança ao enrolar o bebê']),
    topic('crying-and-colic', ['Crying and Colic', 'گریه و کولیک', 'البكاء والمغص', 'Pleurs et coliques', 'Ağlama ve Kolik', 'Llanto y cólico', 'Choro e cólica']),
    topic('pacifier-basics', ['Pacifier Basics', 'اصول پستانک', 'أساسيات اللهاية', 'Bases de la sucette', 'Emzik Temelleri', 'Conceptos básicos del chupete', 'Noções de chupeta']),
    topic('newborn-skin-rashes', ['Newborn Skin and Rashes', 'پوست و جوش‌های نوزاد', 'جلد المولود والطفح', 'Peau et éruptions du nouveau-né', 'Yenidoğan Cildi ve Döküntüler', 'Piel y sarpullidos del recién nacido', 'Pele e erupções do recém-nascido']),
    topic('newborn-nail-care', ['Newborn Nail Care', 'مراقبت ناخن نوزاد', 'العناية بأظافر المولود', 'Soins des ongles du nouveau-né', 'Yenidoğan Tırnak Bakımı', 'Cuidado de uñas del recién nacido', 'Cuidados com unhas do recém-nascido']),
    topic('first-doctor-visit', ['The First Doctor Visit', 'اولین ویزیت پزشک', 'أول زيارة للطبيب', 'La première visite médicale', 'İlk Doktor Ziyareti', 'La primera visita al médico', 'A primeira consulta médica']),
    topic('tummy-time-newborn', ['Starting Tummy Time', 'شروع زمان روی شکم', 'بدء وقت الاستلقاء على البطن', 'Commencer le temps sur le ventre', 'Karın Üstü Zamanına Başlamak', 'Empezar el tiempo boca abajo', 'Começar o tempo de barriga para baixo']),
    topic('parent-rest-newborn', ['Parent Rest in the Newborn Weeks', 'استراحت والدین در هفته‌های نوزادی', 'راحة الوالدين في أسابيع المولود', 'Repos des parents les premières semaines', 'Yenidoğan Haftalarında Ebeveyn Dinlenmesi', 'Descanso parental en las primeras semanas', 'Descanso dos pais nas primeiras semanas'])
  ],
  child: [
    topic('two-month-milestones', ['2-Month Milestones', 'نقاط رشد دو ماهگی', 'مراحل عمر شهرين', 'Étapes à 2 mois', '2 Aylık Gelişim Basamakları', 'Hitos de los 2 meses', 'Marcos dos 2 meses']),
    topic('four-month-milestones', ['4-Month Milestones', 'نقاط رشد چهار ماهگی', 'مراحل عمر أربعة أشهر', 'Étapes à 4 mois', '4 Aylık Gelişim Basamakları', 'Hitos de los 4 meses', 'Marcos dos 4 meses']),
    topic('six-month-milestones', ['6-Month Milestones', 'نقاط رشد شش ماهگی', 'مراحل عمر ستة أشهر', 'Étapes à 6 mois', '6 Aylık Gelişim Basamakları', 'Hitos de los 6 meses', 'Marcos dos 6 meses']),
    topic('nine-month-milestones', ['9-Month Milestones', 'نقاط رشد نه ماهگی', 'مراحل عمر تسعة أشهر', 'Étapes à 9 mois', '9 Aylık Gelişim Basamakları', 'Hitos de los 9 meses', 'Marcos dos 9 meses']),
    topic('twelve-month-milestones', ['12-Month Milestones', 'نقاط رشد دوازده ماهگی', 'مراحل عمر 12 شهراً', 'Étapes à 12 mois', '12 Aylık Gelişim Basamakları', 'Hitos de los 12 meses', 'Marcos dos 12 meses']),
    topic('sleep-regressions', ['Sleep Regressions', 'پسرفت‌های خواب', 'انتكاسات النوم', 'Régressions du sommeil', 'Uyku Gerilemeleri', 'Regresiones del sueño', 'Regressões do sono']),
    topic('nap-transitions', ['Nap Transitions', 'تغییرات چرت روزانه', 'انتقالات القيلولة', 'Transitions des siestes', 'Gündüz Uykusu Geçişleri', 'Transiciones de siestas', 'Transições de sonecas']),
    topic('starting-solids-allergens', ['Starting Solids and Allergens', 'شروع غذای کمکی و آلرژن‌ها', 'بدء الأطعمة الصلبة ومسببات الحساسية', 'Début des solides et allergènes', 'Katı Gıdaya ve Alerjenlere Başlamak', 'Inicio de sólidos y alérgenos', 'Início dos sólidos e alérgenos']),
    topic('finger-foods', ['Finger Foods', 'غذاهای انگشتی', 'أطعمة تؤكل باليد', 'Aliments à manger avec les doigts', 'Parmak Yiyecekler', 'Comidas para comer con los dedos', 'Comidinhas de pegar com a mão']),
    topic('cup-and-water', ['Cup Practice and Water', 'تمرین لیوان و آب', 'التدرب على الكوب والماء', 'Apprendre le gobelet et l’eau', 'Bardak Alıştırması ve Su', 'Práctica con vaso y agua', 'Prática com copo e água']),
    topic('teething-comfort', ['Teething Comfort', 'آرامش هنگام دندان درآوردن', 'راحة التسنين', 'Soulager les poussées dentaires', 'Diş Çıkarma Rahatlığı', 'Alivio de la dentición', 'Conforto na dentição']),
    topic('babyproofing-basics', ['Babyproofing Basics', 'اصول ایمن‌سازی خانه', 'أساسيات تأمين المنزل للطفل', 'Bases de la sécurité à la maison', 'Ev Güvenliği Temelleri', 'Conceptos básicos de seguridad en casa', 'Noções de segurança em casa']),
    topic('car-seat-basics', ['Car Seat Basics', 'اصول صندلی خودرو', 'أساسيات مقعد السيارة', 'Bases du siège auto', 'Oto Koltuğu Temelleri', 'Conceptos básicos de silla de auto', 'Noções de cadeirinha']),
    topic('language-games', ['Language-Building Games', 'بازی‌های تقویت زبان', 'ألعاب تنمية اللغة', 'Jeux pour développer le langage', 'Dil Geliştiren Oyunlar', 'Juegos para desarrollar lenguaje', 'Brincadeiras para desenvolver linguagem']),
    topic('separation-anxiety', ['Separation Anxiety', 'اضطراب جدایی', 'قلق الانفصال', 'Anxiété de séparation', 'Ayrılık Kaygısı', 'Ansiedad por separación', 'Ansiedade de separação']),
    topic('toddler-tantrums', ['Toddler Tantrums', 'قشقرق کودک نوپا', 'نوبات غضب الطفل الدارج', 'Colères du tout-petit', 'Yürümeye Başlayan Çocuk Öfke Nöbetleri', 'Rabietas de niños pequeños', 'Birras de crianças pequenas']),
    topic('daycare-transition', ['Daycare Transition', 'انتقال به مهدکودک', 'الانتقال إلى الحضانة', 'Transition vers la crèche', 'Kreşe Geçiş', 'Transición a guardería', 'Transição para a creche']),
    topic('potty-readiness', ['Potty Readiness', 'آمادگی برای دستشویی', 'الاستعداد لاستخدام الحمام', 'Prêt pour le pot', 'Tuvalet Eğitimine Hazırlık', 'Preparación para dejar el pañal', 'Prontidão para o desfralde'])
  ]
};

function makeArticle(category, topicDef) {
  const slug = `${categorySlug[category]}/${topicDef.slug}`;
  const titleEn = topicDef.titles.en;
  return {
    slug,
    category,
    hero: heroForArticle(category, topicDef.slug),
    updated: 'July 16, 2026',
    i18n: Object.fromEntries(
      langs.map((lang) => {
        const text = articleText[lang];
        const title = topicDef.titles[lang] ?? titleEn;
        const stage = stageLabel[lang][category];
        const paragraphs = text.paragraphs[category];
        return [
          lang,
          {
            title,
            description: text.description(title, stage),
            intro: text.intro(title, stage),
            sections: [
              {
                heading: text.headings[0],
                paragraphs: [paragraphs[0](title), paragraphs[1]]
              },
              {
                heading: text.headings[1],
                paragraphs: text.steps[category]
              },
              {
                heading: text.headings[2],
                paragraphs: [
                  paragraphs[1],
                  lang === 'en'
                    ? 'Use BeMama tools or your own notes to keep the record light: dates, patterns, questions, and the action you want to take next.'
                    : text.steps[category][0]
                ]
              },
              {
                heading: text.headings[3],
                paragraphs: [paragraphs[2]]
              }
            ],
            takeaways: text.takeaways(title),
            faq: text.faq(title)
          }
        ];
      })
    )
  };
}

const generatedHeroByArticle = {
  'ttc/preconception-appointment': 'content/generated-ttc-preconception-appointment.jpg',
  'ttc/menstrual-cycle-basics': 'content/generated-ttc-menstrual-cycle-basics.jpg',
  'ttc/ovulation-signs': 'content/generated-ttc-ovulation-signs.jpg',
  'ttc/fertile-window-timing': 'content/generated-ttc-cycle-planning.png',
  'ttc/ovulation-tests': 'content/generated-ttc-pcos-tracking.png',
  'ttc/basal-body-temperature': 'content/ttc-journal.jpg',
  'ttc/cervical-mucus': 'content/ttc-writing-card.jpg',
  'ttc/prenatal-vitamins-before-pregnancy': 'content/ttc-folic-acid.jpg',
  'ttc/folic-acid-basics': 'content/generated-ttc-medication-review.png',
  'ttc/fertility-friendly-nutrition': 'content/generated-ttc-nourishing-dinner.png',
  'ttc/caffeine-alcohol-ttc': 'content/ttc-nutrition.jpg',
  'ttc/partner-health-sperm': 'content/ttc-male-fertility.jpg',
  'ttc/early-pregnancy-signs': 'content/ttc-writing-card.jpg',
  'ttc/pregnancy-test-timing': 'content/generated-ttc-negative-test.png',
  'ttc/irregular-cycles-ttc': 'content/generated-ttc-pcos-tracking.png',
  'ttc/when-to-seek-fertility-help': 'content/ttc-specialist.jpg',
  'pregnancy/pregnancy-weeks-4-8': 'content/preg-first-trimester.jpg',
  'pregnancy/pregnancy-weeks-9-12': 'content/generated-pregnancy-nausea-remedies.jpg',
  'pregnancy/pregnancy-weeks-13-16': 'content/preg-exercise.jpg',
  'pregnancy/pregnancy-weeks-17-20': 'content/preg-second-trimester.jpg',
  'pregnancy/pregnancy-weeks-21-24': 'content/preg-breathing.jpg',
  'pregnancy/pregnancy-weeks-25-28': 'content/generated-pregnancy-healthy-gain.png',
  'pregnancy/pregnancy-weeks-29-32': 'content/preg-third-trimester.jpg',
  'pregnancy/pregnancy-weeks-33-36': 'content/preg-hospital-bag.jpg',
  'pregnancy/pregnancy-weeks-37-40': 'content/preg-birth-plan.jpg',
  'pregnancy/nausea-remedies': 'content/generated-pregnancy-nausea-remedies.jpg',
  'pregnancy/heartburn-during-pregnancy': 'content/preg-symptoms.jpg',
  'pregnancy/constipation-during-pregnancy': 'content/preg-nutrition.jpg',
  'pregnancy/pelvic-pain-round-ligament': 'content/generated-pregnancy-pelvic-floor.png',
  'pregnancy/prenatal-visit-schedule': 'content/generated-pregnancy-appointment-folder.png',
  'pregnancy/blood-tests-screening': 'content/preg-prenatal-care.jpg',
  'pregnancy/anatomy-scan-guide': 'content/preg-second-trimester.jpg',
  'pregnancy/glucose-test-guide': 'content/generated-pregnancy-glucose-support.png',
  'pregnancy/blood-pressure-preeclampsia': 'content/generated-pregnancy-headache-warning.png',
  'pregnancy/vaccines-during-pregnancy': 'content/preg-warning-signs.jpg',
  'pregnancy/safe-medicines-pregnancy': 'content/generated-ttc-medication-review.png',
  'pregnancy/sleep-positions-pregnancy': 'content/preg-rest.jpg',
  'pregnancy/travel-during-pregnancy': 'content/preg-tote.jpg',
  'pregnancy/work-and-maternity-leave': 'content/preg-mental-health.jpg',
  'pregnancy/baby-movement-patterns': 'content/preg-exercise.jpg',
  'pregnancy/preparing-for-labor': 'content/preg-breathing.jpg',
  'pregnancy/signs-of-labor': 'content/preg-warning-signs.jpg',
  'pregnancy/c-section-basics': 'content/preg-birth-plan.jpg',
  'pregnancy/postpartum-plan': 'content/newborn-postpartum.jpg',
  'newborn/first-24-hours': 'content/newborn-basics.jpg',
  'newborn/feeding-cues': 'content/newborn-breastfeeding.jpg',
  'newborn/latch-basics': 'content/generated-newborn-shared-care.png',
  'newborn/pumping-storing-milk': 'content/generated-newborn-pumping.jpg',
  'newborn/formula-prep-safety': 'content/newborn-formula.jpg',
  'newborn/diaper-output': 'content/newborn-changing-table.jpg',
  'newborn/newborn-poop': 'content/generated-newborn-poop-changes.jpg',
  'newborn/jaundice-basics': 'content/newborn-cord-skin.jpg',
  'newborn/newborn-fever': 'content/generated-newborn-fever.jpg',
  'newborn/safe-sleep-room-sharing': 'content/generated-newborn-safe-sleep-room-sharing.jpg',
  'newborn/swaddling-safety': 'content/generated-newborn-swaddling.jpg',
  'newborn/crying-and-colic': 'content/newborn-soothing.jpg',
  'newborn/pacifier-basics': 'content/newborn-cradle.jpg',
  'newborn/newborn-skin-rashes': 'content/newborn-cord-skin.jpg',
  'newborn/newborn-nail-care': 'content/newborn-bathing.jpg',
  'newborn/first-doctor-visit': 'content/generated-newborn-first-doctor.jpg',
  'newborn/tummy-time-newborn': 'content/newborn-development.jpg',
  'newborn/parent-rest-newborn': 'content/newborn-postpartum.jpg',
  'child/two-month-milestones': 'content/child-milestones.jpg',
  'child/four-month-milestones': 'content/child-first-steps.jpg',
  'child/six-month-milestones': 'content/child-reaching-toy.jpg',
  'child/nine-month-milestones': 'content/generated-child-independent-play.png',
  'child/twelve-month-milestones': 'content/child-blocks-book.jpg',
  'child/sleep-regressions': 'content/child-sleep-training.jpg',
  'child/nap-transitions': 'content/generated-child-early-waking.png',
  'child/starting-solids-allergens': 'content/generated-child-starting-solids-allergens.jpg',
  'child/finger-foods': 'content/generated-child-finger-foods.jpg',
  'child/cup-and-water': 'content/generated-child-cup-practice.jpg',
  'child/teething-comfort': 'content/child-teething.jpg',
  'child/babyproofing-basics': 'content/child-reaching-toy.jpg',
  'child/car-seat-basics': 'content/generated-child-car-seat.jpg',
  'child/language-games': 'content/generated-child-language-games.jpg',
  'child/separation-anxiety': 'content/child-positive-parenting.jpg',
  'child/toddler-tantrums': 'content/generated-child-toddler-tantrums.jpg',
  'child/daycare-transition': 'content/child-blocks-book.jpg',
  'child/potty-readiness': 'content/child-potty-training.jpg'
};

function heroForArticle(category, slug) {
  const generated = generatedHeroByArticle[`${category}/${slug}`];
  if (generated) return generated;

  const match = (items) => items.some((item) => slug.includes(item));
  if (category === 'ttc') {
    if (match(['ovulation', 'fertile', 'cervical', 'basal', 'cycle'])) return 'content/ttc-ovulation.jpg';
    if (match(['vitamin', 'folic'])) return 'content/ttc-folic-acid.jpg';
    if (match(['nutrition', 'caffeine', 'alcohol'])) return 'content/ttc-nutrition.jpg';
    if (match(['partner', 'sperm'])) return 'content/ttc-male-fertility.jpg';
    if (match(['test', 'early-pregnancy'])) return 'content/ttc-writing-card.jpg';
    if (match(['irregular', 'seek', 'specialist'])) return 'content/ttc-specialist.jpg';
    return 'content/ttc-preparing.jpg';
  }
  if (category === 'pregnancy') {
    if (match(['weeks-4', 'weeks-9', 'weeks-13'])) return 'content/preg-first-trimester.jpg';
    if (match(['weeks-17', 'weeks-21', 'weeks-25', 'anatomy', 'movement'])) return 'content/preg-second-trimester.jpg';
    if (match(['weeks-29', 'weeks-33', 'weeks-37', 'labor', 'birth', 'section'])) return 'content/preg-third-trimester.jpg';
    if (match(['nausea', 'heartburn', 'constipation', 'pelvic'])) return 'content/preg-symptoms.jpg';
    if (match(['blood-tests', 'scan', 'glucose', 'pressure', 'visit', 'vaccine', 'medicine'])) return 'content/preg-prenatal-care.jpg';
    if (match(['sleep', 'rest'])) return 'content/preg-rest.jpg';
    if (match(['travel', 'work'])) return 'content/preg-tote.jpg';
    if (match(['postpartum'])) return 'content/newborn-postpartum.jpg';
    return 'content/preg-nutrition.jpg';
  }
  if (category === 'newborn') {
    if (match(['feeding', 'latch', 'pumping', 'formula'])) return 'content/newborn-breastfeeding.jpg';
    if (match(['diaper', 'poop'])) return 'content/newborn-diaper-cart.jpg';
    if (match(['jaundice', 'fever', 'doctor'])) return 'content/newborn-call-doctor.jpg';
    if (match(['sleep', 'swaddling'])) return 'content/newborn-sleep.jpg';
    if (match(['crying', 'colic', 'pacifier'])) return 'content/newborn-soothing.jpg';
    if (match(['skin', 'nail', 'bath'])) return 'content/newborn-cord-skin.jpg';
    if (match(['tummy', 'development'])) return 'content/newborn-development.jpg';
    if (match(['parent-rest'])) return 'content/newborn-postpartum.jpg';
    return 'content/newborn-basics.jpg';
  }
  if (category === 'child') {
    if (match(['milestones'])) return 'content/child-milestones.jpg';
    if (match(['sleep', 'nap'])) return 'content/child-sleep-training.jpg';
    if (match(['solids', 'finger', 'cup'])) return 'content/child-solids.jpg';
    if (match(['teething'])) return 'content/child-teething.jpg';
    if (match(['babyproofing', 'car-seat'])) return 'content/child-reaching-toy.jpg';
    if (match(['language'])) return 'content/child-language.jpg';
    if (match(['separation', 'tantrums'])) return 'content/child-positive-parenting.jpg';
    if (match(['daycare'])) return 'content/child-blocks-book.jpg';
    if (match(['potty'])) return 'content/child-potty-training.jpg';
    return 'content/child-first-steps.jpg';
  }
  return 'content/app-tools.jpg';
}

// Articles rewritten with real editorial content live in expansion-upgraded.mjs;
// the template generator below only emits slugs that have not been upgraded yet.
export const expansionArticles = Object.entries(topicsByCategory)
  .flatMap(([category, topics]) => topics.map((item) => makeArticle(category, item)))
  .filter((article) => !upgradedExpansionSlugs.has(article.slug));

const toolLabels = {
  en: {
    action: 'Use tool',
    save: 'Save',
    clear: 'Clear',
    reset: 'Reset',
    add: 'Add',
    result: 'Result',
    saved: 'Saved entries',
    empty: 'Nothing saved yet.',
    local: 'Saved on this device only.',
    check: 'Mark complete'
  },
  fa: {
    action: 'استفاده از ابزار',
    save: 'ذخیره',
    clear: 'پاک کردن',
    reset: 'بازنشانی',
    add: 'افزودن',
    result: 'نتیجه',
    saved: 'موارد ذخیره‌شده',
    empty: 'هنوز چیزی ذخیره نشده است.',
    local: 'فقط روی همین دستگاه ذخیره می‌شود.',
    check: 'تکمیل شد'
  },
  ar: {
    action: 'استخدام الأداة',
    save: 'حفظ',
    clear: 'مسح',
    reset: 'إعادة ضبط',
    add: 'إضافة',
    result: 'النتيجة',
    saved: 'العناصر المحفوظة',
    empty: 'لا يوجد شيء محفوظ بعد.',
    local: 'محفوظ على هذا الجهاز فقط.',
    check: 'تم'
  },
  fr: {
    action: 'Utiliser l’outil',
    save: 'Enregistrer',
    clear: 'Effacer',
    reset: 'Réinitialiser',
    add: 'Ajouter',
    result: 'Résultat',
    saved: 'Entrées enregistrées',
    empty: 'Rien n’est encore enregistré.',
    local: 'Enregistré uniquement sur cet appareil.',
    check: 'Terminé'
  },
  tr: {
    action: 'Aracı kullan',
    save: 'Kaydet',
    clear: 'Temizle',
    reset: 'Sıfırla',
    add: 'Ekle',
    result: 'Sonuç',
    saved: 'Kayıtlı girişler',
    empty: 'Henüz kayıt yok.',
    local: 'Yalnızca bu cihazda saklanır.',
    check: 'Tamamlandı'
  },
  es: {
    action: 'Usar herramienta',
    save: 'Guardar',
    clear: 'Borrar',
    reset: 'Restablecer',
    add: 'Agregar',
    result: 'Resultado',
    saved: 'Entradas guardadas',
    empty: 'Aún no hay nada guardado.',
    local: 'Guardado solo en este dispositivo.',
    check: 'Completar'
  },
  pt: {
    action: 'Usar ferramenta',
    save: 'Salvar',
    clear: 'Limpar',
    reset: 'Redefinir',
    add: 'Adicionar',
    result: 'Resultado',
    saved: 'Entradas salvas',
    empty: 'Nada salvo ainda.',
    local: 'Salvo apenas neste dispositivo.',
    check: 'Concluir'
  }
};

const fieldLabels = {
  en: {
    lastPeriod: 'First day of last period',
    cycleLength: 'Average cycle length',
    lutealLength: 'Luteal phase length',
    dueDate: 'Due date',
    date: 'Date',
    time: 'Time',
    note: 'Note',
    symptom: 'Symptom or appointment',
    name: 'Name',
    weight: 'Weight',
    length: 'Length/height',
    ageGroup: 'Age group',
    plan: 'Preference or note'
  },
  fa: {
    lastPeriod: 'اولین روز آخرین پریود',
    cycleLength: 'طول متوسط چرخه',
    lutealLength: 'طول فاز لوتئال',
    dueDate: 'تاریخ زایمان',
    date: 'تاریخ',
    time: 'زمان',
    note: 'یادداشت',
    symptom: 'علامت یا قرار',
    name: 'نام',
    weight: 'وزن',
    length: 'قد/طول',
    ageGroup: 'گروه سنی',
    plan: 'ترجیح یا یادداشت'
  },
  ar: {
    lastPeriod: 'أول يوم من آخر دورة',
    cycleLength: 'متوسط طول الدورة',
    lutealLength: 'طول الطور الأصفري',
    dueDate: 'موعد الولادة المتوقع',
    date: 'التاريخ',
    time: 'الوقت',
    note: 'ملاحظة',
    symptom: 'عرض أو موعد',
    name: 'الاسم',
    weight: 'الوزن',
    length: 'الطول',
    ageGroup: 'الفئة العمرية',
    plan: 'تفضيل أو ملاحظة'
  },
  fr: {
    lastPeriod: 'Premier jour des dernières règles',
    cycleLength: 'Durée moyenne du cycle',
    lutealLength: 'Durée de la phase lutéale',
    dueDate: 'Date prévue d’accouchement',
    date: 'Date',
    time: 'Heure',
    note: 'Note',
    symptom: 'Symptôme ou rendez-vous',
    name: 'Prénom',
    weight: 'Poids',
    length: 'Taille',
    ageGroup: 'Âge',
    plan: 'Préférence ou note'
  },
  tr: {
    lastPeriod: 'Son adetin ilk günü',
    cycleLength: 'Ortalama döngü uzunluğu',
    lutealLength: 'Luteal faz uzunluğu',
    dueDate: 'Tahmini doğum tarihi',
    date: 'Tarih',
    time: 'Saat',
    note: 'Not',
    symptom: 'Belirti veya randevu',
    name: 'İsim',
    weight: 'Kilo',
    length: 'Boy',
    ageGroup: 'Yaş grubu',
    plan: 'Tercih veya not'
  },
  es: {
    lastPeriod: 'Primer día de la última regla',
    cycleLength: 'Duración media del ciclo',
    lutealLength: 'Duración de fase lútea',
    dueDate: 'Fecha probable de parto',
    date: 'Fecha',
    time: 'Hora',
    note: 'Nota',
    symptom: 'Síntoma o cita',
    name: 'Nombre',
    weight: 'Peso',
    length: 'Talla',
    ageGroup: 'Grupo de edad',
    plan: 'Preferencia o nota'
  },
  pt: {
    lastPeriod: 'Primeiro dia da última menstruação',
    cycleLength: 'Duração média do ciclo',
    lutealLength: 'Duração da fase lútea',
    dueDate: 'Data provável do parto',
    date: 'Data',
    time: 'Hora',
    note: 'Nota',
    symptom: 'Sintoma ou consulta',
    name: 'Nome',
    weight: 'Peso',
    length: 'Comprimento/altura',
    ageGroup: 'Faixa etária',
    plan: 'Preferência ou nota'
  }
};

const optionLabels = {
  en: {
    '0-3': '0–3 months',
    '4-6': '4–6 months',
    '7-9': '7–9 months',
    '10-12': '10–12 months',
    toddler: 'Toddler'
  },
  fa: {
    '0-3': '۰ تا ۳ ماه',
    '4-6': '۴ تا ۶ ماه',
    '7-9': '۷ تا ۹ ماه',
    '10-12': '۱۰ تا ۱۲ ماه',
    toddler: 'نوپا'
  },
  ar: {
    '0-3': '0 إلى 3 أشهر',
    '4-6': '4 إلى 6 أشهر',
    '7-9': '7 إلى 9 أشهر',
    '10-12': '10 إلى 12 شهراً',
    toddler: 'طفل دارج'
  },
  fr: {
    '0-3': '0 à 3 mois',
    '4-6': '4 à 6 mois',
    '7-9': '7 à 9 mois',
    '10-12': '10 à 12 mois',
    toddler: 'Tout-petit'
  },
  tr: {
    '0-3': '0-3 ay',
    '4-6': '4-6 ay',
    '7-9': '7-9 ay',
    '10-12': '10-12 ay',
    toddler: 'Yürümeye başlayan'
  },
  es: {
    '0-3': '0 a 3 meses',
    '4-6': '4 a 6 meses',
    '7-9': '7 a 9 meses',
    '10-12': '10 a 12 meses',
    toddler: 'Niño pequeño'
  },
  pt: {
    '0-3': '0 a 3 meses',
    '4-6': '4 a 6 meses',
    '7-9': '7 a 9 meses',
    '10-12': '10 a 12 meses',
    toddler: 'Criança pequena'
  }
};

const toolCopy = {
  en: {
    description: (title) => `${title}: a browser-only BeMama tool for planning, tracking, or organizing care. Data stays on this device when saved.`,
    intro: (title) => `${title} helps turn one care task into a simple step you can use today. It is educational and organizational only, and it does not replace qualified medical care.`,
    headings: ['How to use it', 'Privacy note'],
    use: 'Enter the details you know, save only what is helpful, and bring important questions to your care team.',
    privacy: 'Saved items use this browser only. Clearing browser data can remove them.',
    tips: ['Use the result as a planning prompt, not a diagnosis.', 'Update entries when your dates or routines change.', 'Ask qualified care about urgent, severe, or persistent concerns.']
  },
  fa: {
    description: (title) => `${title}: ابزار مرورگر BeMama برای برنامه‌ریزی، پیگیری یا نظم دادن به مراقبت. داده‌های ذخیره‌شده روی همین دستگاه می‌ماند.`,
    intro: (title) => `${title} یک کار مراقبتی را به قدمی ساده برای امروز تبدیل می‌کند. این ابزار فقط آموزشی و سازمان‌دهی است و جایگزین مراقبت پزشکی نیست.`,
    headings: ['روش استفاده', 'یادداشت حریم خصوصی'],
    use: 'جزئیاتی را که می‌دانید وارد کنید، فقط موارد مفید را ذخیره کنید و پرسش‌های مهم را با تیم مراقبت مطرح کنید.',
    privacy: 'موارد ذخیره‌شده فقط در همین مرورگر می‌مانند. پاک کردن داده‌های مرورگر می‌تواند آن‌ها را حذف کند.',
    tips: ['از نتیجه برای برنامه‌ریزی استفاده کنید، نه تشخیص.', 'وقتی تاریخ‌ها یا روتین‌ها تغییر کرد، موردها را به‌روز کنید.', 'برای نگرانی‌های فوری، شدید یا مداوم از مراقبت واجد شرایط کمک بگیرید.']
  },
  ar: {
    description: (title) => `${title}: أداة BeMama داخل المتصفح للتخطيط أو التتبع أو تنظيم الرعاية. تبقى البيانات المحفوظة على هذا الجهاز.`,
    intro: (title) => `${title} يحول مهمة رعاية واحدة إلى خطوة بسيطة لليوم. الأداة تعليمية وتنظيمية فقط ولا تستبدل الرعاية الطبية المؤهلة.`,
    headings: ['طريقة الاستخدام', 'ملاحظة الخصوصية'],
    use: 'أدخلي التفاصيل التي تعرفينها، واحفظي فقط ما يفيد، وخذي الأسئلة المهمة إلى فريق الرعاية.',
    privacy: 'العناصر المحفوظة تبقى في هذا المتصفح فقط. قد يؤدي مسح بيانات المتصفح إلى حذفها.',
    tips: ['استخدمي النتيجة للتخطيط لا للتشخيص.', 'حدثي المدخلات عندما تتغير التواريخ أو الروتين.', 'اطلبي رعاية مؤهلة للمخاوف العاجلة أو الشديدة أو المستمرة.']
  },
  fr: {
    description: (title) => `${title} : un outil BeMama dans le navigateur pour planifier, suivre ou organiser les soins. Les données enregistrées restent sur cet appareil.`,
    intro: (title) => `${title} transforme une tâche de soin en étape simple à utiliser aujourd’hui. Il sert à l’éducation et à l’organisation, sans remplacer les soins qualifiés.`,
    headings: ['Comment l’utiliser', 'Note de confidentialité'],
    use: 'Saisissez ce que vous savez, enregistrez seulement ce qui aide et apportez les questions importantes à votre équipe de soins.',
    privacy: 'Les éléments enregistrés restent dans ce navigateur. Effacer les données du navigateur peut les supprimer.',
    tips: ['Utilisez le résultat pour planifier, pas pour diagnostiquer.', 'Mettez à jour les entrées lorsque les dates ou routines changent.', 'Demandez un avis qualifié pour tout souci urgent, sévère ou persistant.']
  },
  tr: {
    description: (title) => `${title}: planlama, takip veya bakım düzeni için tarayıcıda çalışan BeMama aracı. Kaydedilen veriler bu cihazda kalır.`,
    intro: (title) => `${title}, bir bakım görevini bugün kullanabileceğiniz basit bir adıma çevirir. Yalnızca eğitim ve düzenleme içindir; nitelikli bakımın yerini almaz.`,
    headings: ['Nasıl kullanılır', 'Gizlilik notu'],
    use: 'Bildiğiniz ayrıntıları girin, yalnızca işe yarayanları kaydedin ve önemli soruları bakım ekibinize götürün.',
    privacy: 'Kayıtlı öğeler yalnızca bu tarayıcıda kalır. Tarayıcı verilerini silmek bunları kaldırabilir.',
    tips: ['Sonucu tanı için değil planlama için kullanın.', 'Tarihler veya rutinler değiştiğinde girişleri güncelleyin.', 'Acil, şiddetli veya süren kaygılar için nitelikli bakıma danışın.']
  },
  es: {
    description: (title) => `${title}: herramienta BeMama en el navegador para planificar, seguir u organizar cuidados. Los datos guardados se quedan en este dispositivo.`,
    intro: (title) => `${title} convierte una tarea de cuidado en un paso simple para usar hoy. Es educativa y organizativa; no reemplaza atención médica calificada.`,
    headings: ['Cómo usarla', 'Nota de privacidad'],
    use: 'Ingresa los detalles que sepas, guarda solo lo útil y lleva preguntas importantes a tu equipo de salud.',
    privacy: 'Los elementos guardados quedan solo en este navegador. Borrar datos del navegador puede eliminarlos.',
    tips: ['Usa el resultado para planificar, no para diagnosticar.', 'Actualiza entradas cuando cambien fechas o rutinas.', 'Consulta atención calificada ante dudas urgentes, intensas o persistentes.']
  },
  pt: {
    description: (title) => `${title}: ferramenta BeMama no navegador para planejar, acompanhar ou organizar cuidados. Dados salvos ficam neste dispositivo.`,
    intro: (title) => `${title} transforma uma tarefa de cuidado em um passo simples para hoje. É educativo e organizacional; não substitui cuidado médico qualificado.`,
    headings: ['Como usar', 'Nota de privacidade'],
    use: 'Digite os detalhes que souber, salve apenas o que ajuda e leve perguntas importantes à equipe de cuidado.',
    privacy: 'Itens salvos ficam apenas neste navegador. Limpar dados do navegador pode removê-los.',
    tips: ['Use o resultado para planejar, não para diagnosticar.', 'Atualize entradas quando datas ou rotinas mudarem.', 'Procure cuidado qualificado para preocupações urgentes, intensas ou persistentes.']
  }
};

function tool(id, type, titles, fields = [], extra = {}) {
  return { id, type, titles: Object.fromEntries(langs.map((lang, index) => [lang, titles[index]])), fields, ...extra };
}

const toolDefs = [
  tool('ovulation-calculator', 'calculator', ['Ovulation Calculator', 'ماشین حساب تخمک‌گذاری', 'حاسبة الإباضة', 'Calculateur d’ovulation', 'Ovulasyon Hesaplayıcı', 'Calculadora de ovulación', 'Calculadora de ovulação'], ['lastPeriod', 'cycleLength', 'lutealLength'], { calculator: 'ovulation' }),
  tool('preconception-checklist', 'checklist', ['Preconception Checklist', 'چک‌لیست پیش از بارداری', 'قائمة ما قبل الحمل', 'Liste préconceptionnelle', 'Gebelik Öncesi Kontrol Listesi', 'Lista preconcepcional', 'Lista pré-concepcional'], [], { items: ['Book a preconception visit', 'Review medicines and supplements', 'Start a prenatal vitamin', 'Check vaccine records', 'Plan cycle tracking', 'Discuss chronic conditions'] }),
  tool('due-date-calculator', 'calculator', ['Due Date Calculator', 'ماشین حساب تاریخ زایمان', 'حاسبة موعد الولادة', 'Calculateur de terme', 'Doğum Tarihi Hesaplayıcı', 'Calculadora de fecha probable', 'Calculadora de data provável'], ['lastPeriod', 'cycleLength'], { calculator: 'dueDate' }),
  tool('pregnancy-week-lookup', 'calculator', ['Pregnancy Week Lookup', 'یافتن هفته بارداری', 'معرفة أسبوع الحمل', 'Recherche de semaine de grossesse', 'Gebelik Haftası Bulucu', 'Consulta de semana de embarazo', 'Consulta da semana de gravidez'], ['dueDate'], { calculator: 'pregnancyWeek' }),
  tool('appointment-symptom-calendar', 'log', ['Appointment and Symptom Calendar', 'تقویم قرار و علامت', 'تقويم المواعيد والأعراض', 'Calendrier rendez-vous et symptômes', 'Randevu ve Belirti Takvimi', 'Calendario de citas y síntomas', 'Calendário de consultas e sintomas'], ['date', 'symptom', 'note']),
  tool('hospital-bag-checklist', 'checklist', ['Hospital Bag Checklist', 'چک‌لیست کیف بیمارستان', 'قائمة حقيبة المستشفى', 'Liste du sac de maternité', 'Hastane Çantası Listesi', 'Lista de bolsa de hospital', 'Lista da mala da maternidade'], [], { items: ['ID and health documents', 'Comfortable clothes', 'Phone charger', 'Baby going-home outfit', 'Feeding items', 'Snacks and water bottle'] }),
  tool('baby-name-shortlist', 'nameFinder', ['Baby Name Ideas & Shortlist', 'ایده‌ها و فهرست کوتاه نام نوزاد', 'أفكار وقائمة أسماء الطفل', 'Idées et liste de prénoms', 'Bebek İsmi Fikirleri ve Kısa Liste', 'Ideas y lista corta de nombres', 'Ideias e lista curta de nomes'], ['name', 'note']),
  tool('registry-checklist', 'checklist', ['Registry Checklist', 'چک‌لیست خرید نوزاد', 'قائمة مستلزمات الطفل', 'Liste de naissance', 'Bebek İhtiyaç Listesi', 'Lista de registro del bebé', 'Lista de enxoval'], [], { items: ['Safe sleep space', 'Car seat', 'Diapers and wipes', 'Feeding basics', 'Thermometer', 'Simple clothing sizes'] }),
  tool('newborn-care-checklist', 'checklist', ['Newborn Care Checklist', 'چک‌لیست مراقبت نوزاد', 'قائمة رعاية المولود', 'Liste de soins du nouveau-né', 'Yenidoğan Bakım Listesi', 'Lista de cuidado del recién nacido', 'Lista de cuidados do recém-nascido'], [], { items: ['Feed responsively', 'Count wet diapers', 'Use safe sleep', 'Check temperature when concerned', 'Plan first visit', 'Protect parent rest'] }),
  tool('milestone-tracker', 'planner', ['Milestone Tracker', 'پیگیری نقاط رشد', 'متتبع مراحل النمو', 'Suivi des étapes', 'Gelişim Takipçisi', 'Seguimiento de hitos', 'Acompanhamento de marcos'], ['ageGroup'], { planner: 'milestones' }),
  tool('growth-log', 'log', ['Growth Log', 'ثبت رشد', 'سجل النمو', 'Journal de croissance', 'Büyüme Kaydı', 'Registro de crecimiento', 'Registro de crescimento'], ['date', 'weight', 'length', 'note']),
  tool('solids-planner', 'planner', ['Solids Planner', 'برنامه غذای کمکی', 'مخطط الأطعمة الصلبة', 'Planificateur des solides', 'Katı Gıda Planlayıcı', 'Planificador de sólidos', 'Planejador de sólidos'], ['ageGroup'], { planner: 'solids' }),
  tool('toddler-activity-picker', 'planner', ['Toddler Activity Picker', 'انتخابگر فعالیت کودک نوپا', 'منتقي أنشطة الطفل الدارج', 'Sélecteur d’activités pour tout-petit', 'Küçük Çocuk Aktivite Seçici', 'Selector de actividades para niños pequeños', 'Seletor de atividades para crianças pequenas'], ['ageGroup'], { planner: 'activities' })
];

function localizeField(key, lang) {
  const selectOptions = {
    ageGroup: ['0-3', '4-6', '7-9', '10-12', 'toddler']
  };
  const typeByKey = {
    lastPeriod: 'date',
    dueDate: 'date',
    date: 'date',
    time: 'time',
    cycleLength: 'number',
    lutealLength: 'number',
    weight: 'number',
    length: 'number',
    plan: 'textarea',
    note: 'text',
    symptom: 'text',
    name: 'text'
  };
  const field = {
    name: key,
    type: selectOptions[key] ? 'select' : typeByKey[key] || 'text',
    label: fieldLabels[lang][key] ?? fieldLabels.en[key] ?? key
  };
  if (key === 'cycleLength') field.defaultValue = '28';
  if (key === 'lutealLength') field.defaultValue = '14';
  if (['cycleLength', 'lutealLength'].includes(key)) {
    field.min = key === 'cycleLength' ? '20' : '10';
    field.max = key === 'cycleLength' ? '45' : '18';
  }
  if (selectOptions[key]) {
    field.options = selectOptions[key].map((value) => ({
      value,
      label: optionLabels[lang][value] ?? optionLabels.en[value]
    }));
  }
  return field;
}

const itemTranslations = {
  fa: {
    'Book a preconception visit': 'ویزیت پیش از بارداری را رزرو کنید',
    'Review medicines and supplements': 'داروها و مکمل‌ها را مرور کنید',
    'Start a prenatal vitamin': 'ویتامین پیش از بارداری را شروع کنید',
    'Check vaccine records': 'سوابق واکسن را بررسی کنید',
    'Plan cycle tracking': 'برای پیگیری چرخه برنامه بگذارید',
    'Discuss chronic conditions': 'بیماری‌های مزمن را مطرح کنید',
    'Comfort preferences': 'ترجیحات راحتی',
    'Support people': 'افراد حمایت‌کننده',
    'Feeding wishes': 'ترجیحات تغذیه نوزاد',
    'Questions for changes in plan': 'پرسش‌ها برای تغییر برنامه',
    'ID and health documents': 'مدارک هویتی و سلامت',
    'Comfortable clothes': 'لباس راحت',
    'Phone charger': 'شارژر تلفن',
    'Baby going-home outfit': 'لباس برگشت نوزاد به خانه',
    'Feeding items': 'وسایل تغذیه',
    'Snacks and water bottle': 'میان‌وعده و بطری آب',
    'Safe sleep space': 'فضای خواب ایمن',
    'Car seat': 'صندلی خودرو',
    'Diapers and wipes': 'پوشک و دستمال',
    'Feeding basics': 'وسایل پایه تغذیه',
    'Thermometer': 'تب‌سنج',
    'Simple clothing sizes': 'چند سایز لباس ساده',
    'Feed responsively': 'بر اساس نشانه‌های نوزاد تغذیه کنید',
    'Count wet diapers': 'پوشک‌های خیس را بشمارید',
    'Use safe sleep': 'خواب ایمن را رعایت کنید',
    'Check temperature when concerned': 'در صورت نگرانی دما را بررسی کنید',
    'Plan first visit': 'اولین ویزیت را برنامه‌ریزی کنید',
    'Protect parent rest': 'استراحت والدین را حفظ کنید'
  },
  ar: {
    'Book a preconception visit': 'احجزي زيارة ما قبل الحمل',
    'Review medicines and supplements': 'راجعي الأدوية والمكملات',
    'Start a prenatal vitamin': 'ابدئي فيتامين ما قبل الحمل',
    'Check vaccine records': 'تحققي من سجل اللقاحات',
    'Plan cycle tracking': 'خططي لتتبع الدورة',
    'Discuss chronic conditions': 'ناقشي الحالات المزمنة',
    'Comfort preferences': 'تفضيلات الراحة',
    'Support people': 'أشخاص الدعم',
    'Feeding wishes': 'رغبات التغذية',
    'Questions for changes in plan': 'أسئلة عند تغير الخطة',
    'ID and health documents': 'الهوية والوثائق الصحية',
    'Comfortable clothes': 'ملابس مريحة',
    'Phone charger': 'شاحن الهاتف',
    'Baby going-home outfit': 'ملابس عودة الطفل للمنزل',
    'Feeding items': 'أدوات التغذية',
    'Snacks and water bottle': 'وجبات خفيفة وزجاجة ماء',
    'Safe sleep space': 'مساحة نوم آمنة',
    'Car seat': 'مقعد السيارة',
    'Diapers and wipes': 'حفاضات ومناديل',
    'Feeding basics': 'أساسيات التغذية',
    'Thermometer': 'ميزان حرارة',
    'Simple clothing sizes': 'مقاسات ملابس بسيطة',
    'Feed responsively': 'أطعمي حسب إشارات الطفل',
    'Count wet diapers': 'عدي الحفاضات المبللة',
    'Use safe sleep': 'استخدمي النوم الآمن',
    'Check temperature when concerned': 'افحصي الحرارة عند القلق',
    'Plan first visit': 'خططي للزيارة الأولى',
    'Protect parent rest': 'احمي راحة الوالدين'
  },
  fr: {
    'Book a preconception visit': 'Prendre un rendez-vous préconceptionnel',
    'Review medicines and supplements': 'Revoir médicaments et compléments',
    'Start a prenatal vitamin': 'Commencer une vitamine prénatale',
    'Check vaccine records': 'Vérifier les vaccins',
    'Plan cycle tracking': 'Prévoir le suivi du cycle',
    'Discuss chronic conditions': 'Parler des maladies chroniques',
    'Comfort preferences': 'Préférences de confort',
    'Support people': 'Personnes de soutien',
    'Feeding wishes': 'Souhaits d’alimentation',
    'Questions for changes in plan': 'Questions si le plan change',
    'ID and health documents': 'Pièce d’identité et documents médicaux',
    'Comfortable clothes': 'Vêtements confortables',
    'Phone charger': 'Chargeur de téléphone',
    'Baby going-home outfit': 'Tenue de sortie du bébé',
    'Feeding items': 'Articles d’alimentation',
    'Snacks and water bottle': 'Collations et bouteille d’eau',
    'Safe sleep space': 'Espace de sommeil sûr',
    'Car seat': 'Siège auto',
    'Diapers and wipes': 'Couches et lingettes',
    'Feeding basics': 'Essentiels d’alimentation',
    'Thermometer': 'Thermomètre',
    'Simple clothing sizes': 'Quelques tailles de vêtements',
    'Feed responsively': 'Nourrir selon les signaux',
    'Count wet diapers': 'Compter les couches mouillées',
    'Use safe sleep': 'Respecter le sommeil sûr',
    'Check temperature when concerned': 'Prendre la température en cas de doute',
    'Plan first visit': 'Prévoir la première visite',
    'Protect parent rest': 'Protéger le repos des parents'
  },
  tr: {
    'Book a preconception visit': 'Gebelik öncesi randevu alın',
    'Review medicines and supplements': 'İlaçları ve takviyeleri gözden geçirin',
    'Start a prenatal vitamin': 'Prenatal vitamine başlayın',
    'Check vaccine records': 'Aşı kayıtlarını kontrol edin',
    'Plan cycle tracking': 'Döngü takibini planlayın',
    'Discuss chronic conditions': 'Kronik durumları konuşun',
    'Comfort preferences': 'Rahatlık tercihleri',
    'Support people': 'Destek kişiler',
    'Feeding wishes': 'Beslenme istekleri',
    'Questions for changes in plan': 'Plan değişirse sorular',
    'ID and health documents': 'Kimlik ve sağlık belgeleri',
    'Comfortable clothes': 'Rahat kıyafetler',
    'Phone charger': 'Telefon şarjı',
    'Baby going-home outfit': 'Bebeğin eve dönüş kıyafeti',
    'Feeding items': 'Beslenme eşyaları',
    'Snacks and water bottle': 'Atıştırmalık ve su şişesi',
    'Safe sleep space': 'Güvenli uyku alanı',
    'Car seat': 'Oto koltuğu',
    'Diapers and wipes': 'Bez ve ıslak mendil',
    'Feeding basics': 'Beslenme temel eşyaları',
    'Thermometer': 'Termometre',
    'Simple clothing sizes': 'Basit kıyafet bedenleri',
    'Feed responsively': 'Bebeğin işaretlerine göre besleyin',
    'Count wet diapers': 'Islak bezleri sayın',
    'Use safe sleep': 'Güvenli uykuyu uygulayın',
    'Check temperature when concerned': 'Endişede ateşi kontrol edin',
    'Plan first visit': 'İlk ziyareti planlayın',
    'Protect parent rest': 'Ebeveyn dinlenmesini koruyun'
  },
  es: {
    'Book a preconception visit': 'Reserva una visita preconcepcional',
    'Review medicines and supplements': 'Revisa medicamentos y suplementos',
    'Start a prenatal vitamin': 'Empieza una vitamina prenatal',
    'Check vaccine records': 'Revisa el registro de vacunas',
    'Plan cycle tracking': 'Planifica el seguimiento del ciclo',
    'Discuss chronic conditions': 'Habla de condiciones crónicas',
    'Comfort preferences': 'Preferencias de comodidad',
    'Support people': 'Personas de apoyo',
    'Feeding wishes': 'Deseos de alimentación',
    'Questions for changes in plan': 'Preguntas si cambia el plan',
    'ID and health documents': 'Identificación y documentos médicos',
    'Comfortable clothes': 'Ropa cómoda',
    'Phone charger': 'Cargador del teléfono',
    'Baby going-home outfit': 'Ropa de salida del bebé',
    'Feeding items': 'Artículos de alimentación',
    'Snacks and water bottle': 'Snacks y botella de agua',
    'Safe sleep space': 'Espacio seguro para dormir',
    'Car seat': 'Silla de auto',
    'Diapers and wipes': 'Pañales y toallitas',
    'Feeding basics': 'Básicos de alimentación',
    'Thermometer': 'Termómetro',
    'Simple clothing sizes': 'Tallas simples de ropa',
    'Feed responsively': 'Alimenta según señales',
    'Count wet diapers': 'Cuenta pañales mojados',
    'Use safe sleep': 'Usa sueño seguro',
    'Check temperature when concerned': 'Toma temperatura si preocupa',
    'Plan first visit': 'Planifica la primera visita',
    'Protect parent rest': 'Protege el descanso parental'
  },
  pt: {
    'Book a preconception visit': 'Marcar consulta pré-concepcional',
    'Review medicines and supplements': 'Revisar remédios e suplementos',
    'Start a prenatal vitamin': 'Começar vitamina pré-natal',
    'Check vaccine records': 'Verificar vacinas',
    'Plan cycle tracking': 'Planejar acompanhamento do ciclo',
    'Discuss chronic conditions': 'Conversar sobre condições crônicas',
    'Comfort preferences': 'Preferências de conforto',
    'Support people': 'Pessoas de apoio',
    'Feeding wishes': 'Desejos de alimentação',
    'Questions for changes in plan': 'Perguntas se o plano mudar',
    'ID and health documents': 'Documento e informações de saúde',
    'Comfortable clothes': 'Roupas confortáveis',
    'Phone charger': 'Carregador do telefone',
    'Baby going-home outfit': 'Roupa de saída do bebê',
    'Feeding items': 'Itens de alimentação',
    'Snacks and water bottle': 'Lanches e garrafa de água',
    'Safe sleep space': 'Espaço de sono seguro',
    'Car seat': 'Cadeirinha',
    'Diapers and wipes': 'Fraldas e lenços',
    'Feeding basics': 'Básicos de alimentação',
    'Thermometer': 'Termômetro',
    'Simple clothing sizes': 'Tamanhos simples de roupa',
    'Feed responsively': 'Alimentar conforme sinais',
    'Count wet diapers': 'Contar fraldas molhadas',
    'Use safe sleep': 'Usar sono seguro',
    'Check temperature when concerned': 'Verificar temperatura se houver preocupação',
    'Plan first visit': 'Planejar primeira consulta',
    'Protect parent rest': 'Proteger o descanso dos pais'
  }
};

function localizeItems(items = [], lang) {
  if (!items.length) return [];
  if (lang === 'en') return items;
  return items.map((item) => itemTranslations[lang]?.[item] ?? item);
}

function makeTool(def) {
  const slug = `tools/${def.id}`;
  return {
    slug,
    category: 'tools',
    kind: 'tool',
    toolId: def.id,
    hero: heroForTool(def.id),
    updated: 'July 16, 2026',
    i18n: Object.fromEntries(
      langs.map((lang) => {
        const copy = toolCopy[lang];
        const title = def.titles[lang] ?? def.titles.en;
        return [
          lang,
          {
            title,
            description: copy.description(title),
            intro: copy.intro(title),
            sections: [
              { heading: copy.headings[0], paragraphs: [copy.use] },
              { heading: copy.headings[1], paragraphs: [copy.privacy] }
            ],
            takeaways: copy.tips,
            faq: [],
            tool: {
              id: def.id,
              type: def.type,
              calculator: def.calculator,
              counter: def.counter,
              timer: def.timer,
              planner: def.planner,
              fields: def.fields.map((field) => localizeField(field, lang)),
              items: localizeItems(def.items, lang),
              prompts: localizeItems(def.prompts, lang),
              labels: toolLabels[lang] ?? toolLabels.en
            }
          }
        ];
      })
    )
  };
}

function heroForTool(id) {
  if (id === 'ovulation-calculator') return 'content/tool-ovulation-planning.jpg';
  if (id === 'preconception-checklist') return 'content/ttc-preparing.jpg';
  if (id === 'due-date-calculator') return 'content/preg-first-trimester.jpg';
  if (id === 'pregnancy-week-lookup') return 'content/generated-pregnancy-appointment-folder.png';
  if (id === 'appointment-symptom-calendar') return 'content/preg-prenatal-care.jpg';
  if (id === 'hospital-bag-checklist') return 'content/preg-hospital-bag.jpg';
  if (id === 'baby-name-shortlist') return 'content/ttc-writing-card.jpg';
  if (id === 'registry-checklist') return 'content/newborn-nursery-cart.jpg';
  if (id === 'newborn-care-checklist') return 'content/newborn-basics.jpg';
  if (id === 'milestone-tracker') return 'content/child-milestones.jpg';
  if (id === 'growth-log') return 'content/newborn-development.jpg';
  if (id === 'solids-planner') return 'content/tool-solids-planner.jpg';
  if (id === 'toddler-activity-picker') return 'content/child-blocks-book.jpg';
  return 'content/app-tools.jpg';
}

export const careTools = toolDefs.map(makeTool);
