export const site = {
  origin: 'https://bemamas.com',
  name: 'BeMama',
  supportEmail: 'support@bemamas.com',
  appUrl: 'https://app.bemamas.com/'
};

export const languages = [
  { code: 'en', label: 'English', dir: 'ltr' },
  { code: 'fa', label: 'فارسی', dir: 'rtl' },
  { code: 'ar', label: 'العربية', dir: 'rtl' },
  { code: 'fr', label: 'Français', dir: 'ltr' },
  { code: 'tr', label: 'Türkçe', dir: 'ltr' },
  { code: 'es', label: 'Español', dir: 'ltr' },
  { code: 'pt', label: 'Português', dir: 'ltr' }
];

export const pageSlugs = ['', 'about', 'privacy', 'terms', 'subscription-terms', 'ai-disclaimer', 'contact'];

const updated = 'May 30, 2026';

export const content = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      privacy: 'Privacy',
      terms: 'Terms',
      ai: 'AI safety',
      contact: 'Contact',
      support: 'Support',
      language: 'Language'
    },
    metaDescription:
      'BeMama is a companion for planning, pregnancy, baby care, and child growth with Daily Journey, Q&A, community, and clearly labeled AI-assisted support.',
    footer: 'General education and support only. Not a medical diagnosis tool.',
    officialNotice:
      'This localized page is provided for convenience. The English policy pages are the official public version until reviewed translations are available.',
    home: {
      eyebrow: 'Planning, pregnancy, baby, and child growth',
      title: 'BeMama',
      copy: 'A calm companion for care journeys, daily guidance, Q&A, community support, and clearly labeled AI-assisted help.',
      updates: 'Get launch updates',
      readPrivacy: 'Read privacy policy',
      phoneTitle: 'Daily Journey',
      phoneText: 'Support shaped around your current stage.',
      qnaTitle: 'Q&A and community',
      qnaText: 'Ask, learn, and connect with supportive spaces.',
      aiTitle: 'AI-assisted support',
      aiText: 'Clearly labeled and limited to general education.',
      journeys: ['Planning', 'Pregnancy', 'Baby care', 'Child growth'],
      whatTitle: 'What BeMama does',
      whatText: 'BeMama brings practical parenting support into one organized experience without pretending to replace clinical care.',
      features: [
        ['Daily Journey', 'Set up your current stage so daily care content and actions can be organized around where you are.'],
        ['Q&A and Community', 'Ask questions, find related discussions, and connect with supportive spaces built for parents and caregivers.'],
        ['Tools', 'Use practical calculators, trackers, and care utilities as they become available for each journey stage.']
      ],
      trustTitle: 'Privacy and trust',
      trustText:
        'BeMama is designed around sensitive motherhood and parenting data. Policy pages explain data use, retention basics, deletion/export request paths, and AI-assisted safety limits in plain language.',
      appTitle: 'Open BeMama',
      appText:
        'Use BeMama on the web today. Android and iOS app store links will be added when the public listings are live.',
      android: 'Android',
      ios: 'iOS',
      web: 'Web app',
      comingSoon: 'Coming soon',
      openWeb: 'Open web app',
      reviewSubscription: 'Review subscription terms'
    },
    pages: {
      about: policy('About BeMama', 'Learn what BeMama is, who it is for, and the limits of care and AI-assisted support.', [
        ['Who BeMama is', ['BeMama is a digital companion for people navigating planning, pregnancy, baby care, and child growth. It organizes routines, community support, Q&A, and helpful educational content in one calm place.']],
        ['Mission', ['Our mission is to make motherhood and parenting support feel more personal, less fragmented, and easier to access across different stages of family life.']],
        ['What BeMama is not', ['BeMama does not provide diagnosis, prescriptions, medication dosing, emergency care, or a replacement for professional medical judgment. For urgent symptoms or safety concerns, contact qualified local care or emergency services.']]
      ], 'BeMama is not a medical diagnosis tool and does not replace care from qualified clinicians, emergency services, or local health systems.'),
      privacy: policy('Privacy Policy', 'Plain-language overview of how BeMama collects, uses, retains, and protects account, care journey, Q&A, community, chat, device, and AI-assisted support data.', [
        ['Information we collect', ['Account and profile data, Daily Journey data, Q&A/community/chat/support content, device/session/push data, operational records, and AI-assisted support metadata when AI features are enabled.']],
        ['How we use information', ['We use information to provide your account, personalize care surfaces, operate Q&A/community/support, label AI-assisted content, protect accounts, troubleshoot, and respond to support or privacy requests.']],
        ['Message security', ['Messages are protected in transit and handled securely by BeMama.']],
        ['Retention basics', ['BeMama keeps account and care data while needed to provide the service and operate safely. Some audit and technical records may be retained for configured periods and redacted over time.']],
        ['Deletion and export requests', [`To request account deletion, data export, or privacy review, contact ${site.supportEmail}. Some audit or safety records may be retained where needed for platform integrity or legal/safety reasons.`]]
      ], 'This policy is not a claim of GDPR, PIPEDA, HIPAA, or other legal compliance.'),
      terms: policy('Terms of Use', 'Terms for using BeMama, including user responsibilities, community rules, AI-assisted content, and medical disclaimers.', [
        ['Using BeMama', ['You may use BeMama to access planning, pregnancy, baby care, child growth, Q&A, community, chat, and support features available to your account and region.']],
        ['Not medical advice', ['BeMama content is for general education and support. It is not medical advice, diagnosis, prescription, medication dosing, emergency care, or a replacement for qualified clinicians.']],
        ['Community rules', ['Be respectful. Do not harass, threaten, exploit, impersonate, post illegal or unsafe content, or share another person’s private information without permission.']],
        ['AI-assisted content', ['AI-assisted answers may be labeled when metadata is available. AI can be wrong or incomplete and must not be used for diagnosis, dosage, emergency decisions, or urgent safety concerns.']]
      ], 'These terms are a practical product draft and should be reviewed by qualified legal counsel before a paid or broad public launch.'),
      'subscription-terms': policy('Subscription Terms', 'Subscription terms for future paid BeMama plans, app store billing, cancellation, refunds, trials, and price changes.', [
        ['Free and premium access', ['BeMama may offer free features and optional premium features. Feature availability, price, trial, and billing provider may vary by platform, region, or promotion.']],
        ['Billing and cancellation', ['If subscriptions are offered through an app store or payment provider, billing, renewal, cancellation, and refunds are handled by that store or provider unless BeMama states otherwise.']],
        ['Trials and price changes', ['If BeMama offers a trial, founding plan, or promotional plan, offer terms should be shown before signup. Prices or features may change with required notice.']]
      ], 'BeMama may not offer paid plans yet. This page is prepared for future subscription review and must be finalized before paid launch.'),
      'ai-disclaimer': policy('AI Disclaimer and Safety', 'How BeMama uses AI-assisted content, what AI can and cannot do, and when to seek qualified care.', [
        ['How AI may be used', ['BeMama may use AI-assisted tools to draft or support Q&A answers and consultation-style messages when the feature is enabled. AI-assisted answers are labeled when metadata is available.']],
        ['What AI is for', ['General education, supportive explanation, and helping organize questions or next steps for a clinician or support team.']],
        ['What AI is not for', ['AI is not for diagnosis, prescriptions, medication dosage, treatment decisions, emergency care, urgent triage, or replacing qualified local care.']],
        ['Safety guidance', ['For severe pain, heavy bleeding, breathing difficulty, fainting, infection signs, self-harm thoughts, abuse, or any urgent symptom, seek qualified local care or emergency services immediately.']]
      ], 'AI-assisted content can be wrong, incomplete, or not appropriate for your situation.'),
      contact: policy('Contact and Support', 'Contact BeMama for support, privacy requests, deletion/export requests, and safety review.', [
        ['Support', [`Email ${site.supportEmail} for product support, account help, deletion/export requests, privacy questions, or review of AI-assisted content.`]],
        ['Privacy requests', ['For deletion, export, correction, or privacy review, include the email or account identifier associated with your BeMama account. Do not send urgent medical information by email.']],
        ['Urgent care', ['BeMama support is not emergency support. For urgent symptoms, medical concerns, self-harm concerns, or immediate safety issues, contact qualified local care or emergency services.']]
      ])
    }
  },
  fa: {
    nav: { home: 'خانه', about: 'درباره', privacy: 'حریم خصوصی', terms: 'شرایط', ai: 'ایمنی هوش مصنوعی', contact: 'تماس', support: 'پشتیبانی', language: 'زبان' },
    metaDescription: 'BeMama همراهی آرام برای برنامه‌ریزی، بارداری، مراقبت نوزاد و رشد کودک است.',
    footer: 'فقط آموزش و پشتیبانی عمومی. ابزار تشخیص پزشکی نیست.',
    officialNotice: 'این صفحه ترجمه‌ای برای راحتی شماست. نسخه انگلیسی سیاست‌ها تا زمان بازبینی حقوقی، نسخه رسمی عمومی است.',
    home: {
      eyebrow: 'برنامه‌ریزی، بارداری، نوزاد و رشد کودک',
      title: 'BeMama',
      copy: 'همراهی آرام برای مسیر مراقبت، راهنمایی روزانه، پرسش و پاسخ، جامعه و پشتیبانی هوش مصنوعی با برچسب روشن.',
      updates: 'دریافت خبرهای راه‌اندازی',
      readPrivacy: 'خواندن سیاست حریم خصوصی',
      phoneTitle: 'مسیر روزانه',
      phoneText: 'پشتیبانی متناسب با مرحله فعلی شما.',
      qnaTitle: 'پرسش و پاسخ و جامعه',
      qnaText: 'بپرسید، یاد بگیرید و به فضاهای حمایتی وصل شوید.',
      aiTitle: 'پشتیبانی با کمک هوش مصنوعی',
      aiText: 'با برچسب روشن و محدود به آموزش عمومی.',
      journeys: ['برنامه‌ریزی', 'بارداری', 'مراقبت نوزاد', 'رشد کودک'],
      whatTitle: 'BeMama چه کار می‌کند',
      whatText: 'BeMama پشتیبانی کاربردی والدین را در یک تجربه منظم گردآوری می‌کند، بدون اینکه جای مراقبت بالینی را بگیرد.',
      features: [['مسیر روزانه', 'مرحله خود را تنظیم کنید تا محتوا و اقدام‌های روزانه منظم شوند.'], ['پرسش و پاسخ و جامعه', 'سوال بپرسید و با فضاهای حمایتی والدین ارتباط بگیرید.'], ['ابزارها', 'از ابزارهای کاربردی مراقبت در هر مرحله استفاده کنید.']],
      trustTitle: 'حریم خصوصی و اعتماد',
      trustText: 'BeMama برای داده‌های حساس مادری و والدگری طراحی شده است. سیاست‌ها درباره استفاده از داده، نگهداری، حذف/دریافت خروجی و محدودیت‌های هوش مصنوعی توضیح می‌دهند.',
      appTitle: 'باز کردن BeMama',
      appText: 'امروز از نسخه وب BeMama استفاده کنید. لینک‌های اندروید و iOS پس از انتشار عمومی اضافه می‌شوند.',
      android: 'اندروید',
      ios: 'iOS',
      web: 'نسخه وب',
      comingSoon: 'به‌زودی',
      openWeb: 'باز کردن وب‌اپ',
      reviewSubscription: 'شرایط اشتراک'
    },
    pages: localizedPolicy('fa')
  },
  ar: {
    nav: { home: 'الرئيسية', about: 'حول', privacy: 'الخصوصية', terms: 'الشروط', ai: 'سلامة الذكاء الاصطناعي', contact: 'اتصال', support: 'الدعم', language: 'اللغة' },
    metaDescription: 'BeMama رفيق هادئ للتخطيط والحمل ورعاية الطفل ونموه.',
    footer: 'تعليم ودعم عام فقط. ليست أداة تشخيص طبي.',
    officialNotice: 'هذه الصفحة مترجمة للتسهيل. النسخة الإنجليزية هي النسخة الرسمية العامة إلى أن تتم مراجعة الترجمات قانونياً.',
    home: {
      eyebrow: 'التخطيط، الحمل، رعاية الطفل، ونمو الطفل',
      title: 'BeMama',
      copy: 'رفيق هادئ لمسارات الرعاية، الإرشاد اليومي، الأسئلة والمجتمع، ودعم الذكاء الاصطناعي المعرّف بوضوح.',
      updates: 'تلقي أخبار الإطلاق',
      readPrivacy: 'قراءة سياسة الخصوصية',
      phoneTitle: 'المسار اليومي',
      phoneText: 'دعم يناسب مرحلتك الحالية.',
      qnaTitle: 'الأسئلة والمجتمع',
      qnaText: 'اسألي وتعلمي وتواصلي مع مساحات داعمة.',
      aiTitle: 'دعم بمساعدة الذكاء الاصطناعي',
      aiText: 'موضح بوضوح ومحدود بالتعليم العام.',
      journeys: ['التخطيط', 'الحمل', 'رعاية الطفل', 'نمو الطفل'],
      whatTitle: 'ماذا تقدم BeMama',
      whatText: 'تجمع BeMama دعماً عملياً للوالدين في تجربة منظمة دون أن تدعي استبدال الرعاية الطبية.',
      features: [['المسار اليومي', 'حددي مرحلتك لتنظيم محتوى الرعاية اليومي والإجراءات.'], ['الأسئلة والمجتمع', 'اطرحي الأسئلة وتواصلي مع مساحات داعمة للوالدين.'], ['الأدوات', 'استخدمي أدوات عملية للرعاية حسب المرحلة.']],
      trustTitle: 'الخصوصية والثقة',
      trustText: 'صممت BeMama حول بيانات الأمومة والوالدية الحساسة. تشرح السياسات استخدام البيانات والاحتفاظ وطلبات الحذف/التصدير وحدود الذكاء الاصطناعي.',
      appTitle: 'افتحي BeMama',
      appText: 'استخدمي نسخة الويب اليوم. ستضاف روابط Android و iOS عند نشر المتاجر العامة.',
      android: 'Android',
      ios: 'iOS',
      web: 'تطبيق الويب',
      comingSoon: 'قريباً',
      openWeb: 'فتح تطبيق الويب',
      reviewSubscription: 'شروط الاشتراك'
    },
    pages: localizedPolicy('ar')
  },
  fr: {
    nav: { home: 'Accueil', about: 'À propos', privacy: 'Confidentialité', terms: 'Conditions', ai: 'Sécurité IA', contact: 'Contact', support: 'Support', language: 'Langue' },
    metaDescription: 'BeMama accompagne la planification, la grossesse, les soins du bébé et la croissance de l’enfant.',
    footer: 'Information et soutien général seulement. Ce n’est pas un outil de diagnostic médical.',
    officialNotice: 'Cette page localisée est fournie pour faciliter la lecture. Les pages anglaises restent la version officielle jusqu’à révision juridique des traductions.',
    home: {
      eyebrow: 'Planification, grossesse, bébé et croissance',
      title: 'BeMama',
      copy: 'Un compagnon calme pour les parcours de soins, le quotidien, les questions, la communauté et l’aide assistée par IA clairement indiquée.',
      updates: 'Recevoir les nouvelles',
      readPrivacy: 'Lire la confidentialité',
      phoneTitle: 'Parcours quotidien',
      phoneText: 'Un soutien adapté à votre étape actuelle.',
      qnaTitle: 'Q&R et communauté',
      qnaText: 'Posez des questions, apprenez et rejoignez des espaces de soutien.',
      aiTitle: 'Soutien assisté par IA',
      aiText: 'Clairement indiqué et limité à l’éducation générale.',
      journeys: ['Planification', 'Grossesse', 'Soins bébé', 'Croissance enfant'],
      whatTitle: 'Ce que fait BeMama',
      whatText: 'BeMama rassemble un soutien parental pratique dans une expérience organisée sans prétendre remplacer les soins cliniques.',
      features: [['Parcours quotidien', 'Configurez votre étape pour organiser le contenu et les actions du jour.'], ['Q&R et communauté', 'Posez des questions et rejoignez des espaces de soutien.'], ['Outils', 'Utilisez des outils pratiques selon votre étape.']],
      trustTitle: 'Confidentialité et confiance',
      trustText: 'BeMama est conçu autour de données sensibles de maternité et de parentalité. Les politiques expliquent l’usage des données, la conservation, les demandes de suppression/export et les limites de l’IA.',
      appTitle: 'Ouvrir BeMama',
      appText: 'Utilisez BeMama sur le web aujourd’hui. Les liens Android et iOS seront ajoutés lorsque les fiches publiques seront prêtes.',
      android: 'Android',
      ios: 'iOS',
      web: 'Application web',
      comingSoon: 'Bientôt',
      openWeb: 'Ouvrir l’app web',
      reviewSubscription: 'Conditions d’abonnement'
    },
    pages: localizedPolicy('fr')
  },
  tr: {
    nav: { home: 'Ana sayfa', about: 'Hakkında', privacy: 'Gizlilik', terms: 'Şartlar', ai: 'AI güvenliği', contact: 'İletişim', support: 'Destek', language: 'Dil' },
    metaDescription: 'BeMama planlama, hamilelik, bebek bakımı ve çocuk gelişimi için sakin bir yardımcıdır.',
    footer: 'Yalnızca genel eğitim ve destek. Tıbbi tanı aracı değildir.',
    officialNotice: 'Bu yerelleştirilmiş sayfa kolaylık için sunulur. Hukuki çeviriler incelenene kadar İngilizce sayfalar resmi sürümdür.',
    home: {
      eyebrow: 'Planlama, hamilelik, bebek ve çocuk gelişimi',
      title: 'BeMama',
      copy: 'Bakım yolculukları, günlük rehberlik, soru-cevap, topluluk ve açıkça etiketlenen AI destekli yardım için sakin bir yol arkadaşı.',
      updates: 'Lansman haberleri al',
      readPrivacy: 'Gizlilik politikasını oku',
      phoneTitle: 'Daily Journey',
      phoneText: 'Mevcut aşamana göre şekillenen destek.',
      qnaTitle: 'Soru-cevap ve topluluk',
      qnaText: 'Sor, öğren ve destekleyici alanlara bağlan.',
      aiTitle: 'AI destekli yardım',
      aiText: 'Açıkça etiketlenir ve genel eğitimle sınırlıdır.',
      journeys: ['Planlama', 'Hamilelik', 'Bebek bakımı', 'Çocuk gelişimi'],
      whatTitle: 'BeMama ne yapar',
      whatText: 'BeMama klinik bakımın yerine geçtiğini iddia etmeden pratik ebeveyn desteğini düzenli bir deneyimde toplar.',
      features: [['Daily Journey', 'Aşamanı ayarla, günlük içerik ve aksiyonlar düzenlensin.'], ['Soru-cevap ve topluluk', 'Sorular sor ve destekleyici ebeveyn alanlarına katıl.'], ['Araçlar', 'Aşamaya uygun pratik bakım araçlarını kullan.']],
      trustTitle: 'Gizlilik ve güven',
      trustText: 'BeMama hassas annelik ve ebeveynlik verileri düşünülerek tasarlanır. Politikalar veri kullanımı, saklama, silme/dışa aktarma talepleri ve AI sınırlarını açıklar.',
      appTitle: 'BeMama’yı aç',
      appText: 'BeMama’yı bugün webde kullan. Android ve iOS mağaza bağlantıları yayınlandığında eklenecek.',
      android: 'Android',
      ios: 'iOS',
      web: 'Web uygulaması',
      comingSoon: 'Yakında',
      openWeb: 'Web uygulamasını aç',
      reviewSubscription: 'Abonelik şartları'
    },
    pages: localizedPolicy('tr')
  },
  es: {
    nav: { home: 'Inicio', about: 'Acerca de', privacy: 'Privacidad', terms: 'Términos', ai: 'Seguridad IA', contact: 'Contacto', support: 'Soporte', language: 'Idioma' },
    metaDescription: 'BeMama acompaña la planificación, embarazo, cuidado del bebé y crecimiento infantil.',
    footer: 'Educación y apoyo general solamente. No es una herramienta de diagnóstico médico.',
    officialNotice: 'Esta página localizada se ofrece para facilitar la lectura. Las páginas en inglés son la versión oficial hasta que las traducciones sean revisadas legalmente.',
    home: {
      eyebrow: 'Planificación, embarazo, bebé y crecimiento infantil',
      title: 'BeMama',
      copy: 'Una compañía tranquila para etapas de cuidado, guía diaria, preguntas, comunidad y apoyo con IA claramente etiquetado.',
      updates: 'Recibir novedades',
      readPrivacy: 'Leer privacidad',
      phoneTitle: 'Viaje diario',
      phoneText: 'Apoyo según tu etapa actual.',
      qnaTitle: 'Preguntas y comunidad',
      qnaText: 'Pregunta, aprende y conéctate con espacios de apoyo.',
      aiTitle: 'Apoyo asistido por IA',
      aiText: 'Claramente etiquetado y limitado a educación general.',
      journeys: ['Planificación', 'Embarazo', 'Cuidado del bebé', 'Crecimiento infantil'],
      whatTitle: 'Qué hace BeMama',
      whatText: 'BeMama reúne apoyo práctico para madres, padres y cuidadores en una experiencia organizada sin reemplazar la atención clínica.',
      features: [['Viaje diario', 'Configura tu etapa para organizar contenido y acciones diarias.'], ['Preguntas y comunidad', 'Haz preguntas y únete a espacios de apoyo.'], ['Herramientas', 'Usa herramientas prácticas de cuidado por etapa.']],
      trustTitle: 'Privacidad y confianza',
      trustText: 'BeMama se diseña alrededor de datos sensibles de maternidad y crianza. Las políticas explican uso de datos, retención, solicitudes de eliminación/exportación y límites de IA.',
      appTitle: 'Abrir BeMama',
      appText: 'Usa BeMama en la web hoy. Los enlaces de Android e iOS se agregarán cuando estén listas las tiendas públicas.',
      android: 'Android',
      ios: 'iOS',
      web: 'App web',
      comingSoon: 'Próximamente',
      openWeb: 'Abrir app web',
      reviewSubscription: 'Términos de suscripción'
    },
    pages: localizedPolicy('es')
  },
  pt: {
    nav: { home: 'Início', about: 'Sobre', privacy: 'Privacidade', terms: 'Termos', ai: 'Segurança IA', contact: 'Contato', support: 'Suporte', language: 'Idioma' },
    metaDescription: 'BeMama acompanha planejamento, gravidez, cuidado do bebê e crescimento infantil.',
    footer: 'Educação e suporte geral apenas. Não é ferramenta de diagnóstico médico.',
    officialNotice: 'Esta página localizada é fornecida para conveniência. As páginas em inglês são a versão oficial até revisão jurídica das traduções.',
    home: {
      eyebrow: 'Planejamento, gravidez, bebê e crescimento infantil',
      title: 'BeMama',
      copy: 'Uma companhia tranquila para jornadas de cuidado, orientação diária, perguntas, comunidade e apoio com IA claramente identificado.',
      updates: 'Receber novidades',
      readPrivacy: 'Ler privacidade',
      phoneTitle: 'Jornada diária',
      phoneText: 'Suporte moldado pela sua etapa atual.',
      qnaTitle: 'Perguntas e comunidade',
      qnaText: 'Pergunte, aprenda e conecte-se a espaços de apoio.',
      aiTitle: 'Apoio assistido por IA',
      aiText: 'Claramente identificado e limitado à educação geral.',
      journeys: ['Planejamento', 'Gravidez', 'Cuidado do bebê', 'Crescimento infantil'],
      whatTitle: 'O que BeMama faz',
      whatText: 'BeMama reúne suporte prático para parentalidade em uma experiência organizada sem substituir cuidado clínico.',
      features: [['Jornada diária', 'Configure sua etapa para organizar conteúdo e ações diárias.'], ['Perguntas e comunidade', 'Faça perguntas e participe de espaços de apoio.'], ['Ferramentas', 'Use ferramentas práticas de cuidado por etapa.']],
      trustTitle: 'Privacidade e confiança',
      trustText: 'BeMama é projetado para dados sensíveis de maternidade e parentalidade. As políticas explicam uso de dados, retenção, pedidos de exclusão/exportação e limites de IA.',
      appTitle: 'Abrir BeMama',
      appText: 'Use BeMama na web hoje. Links Android e iOS serão adicionados quando as lojas públicas estiverem disponíveis.',
      android: 'Android',
      ios: 'iOS',
      web: 'App web',
      comingSoon: 'Em breve',
      openWeb: 'Abrir app web',
      reviewSubscription: 'Termos de assinatura'
    },
    pages: localizedPolicy('pt')
  }
};

function policy(title, description, sections, notice = undefined) {
  return {
    title,
    description,
    updated,
    notice,
    sections: sections.map(([heading, paragraphs]) => ({
      heading,
      paragraphs: Array.isArray(paragraphs) ? paragraphs : [paragraphs]
    }))
  };
}

function localizedPolicy(locale) {
  const packs = {
    fa: {
      about: ['درباره BeMama', 'BeMama چیست و چه محدودیت‌هایی دارد.', 'BeMama ابزار تشخیص پزشکی نیست و جای پزشک یا خدمات اضطراری را نمی‌گیرد.'],
      privacy: ['سیاست حریم خصوصی', 'مروری ساده بر داده‌هایی که BeMama جمع‌آوری و استفاده می‌کند.', 'این سیاست ادعای رعایت GDPR، PIPEDA، HIPAA یا قوانین مشابه نیست.'],
      terms: ['شرایط استفاده', 'شرایط استفاده از BeMama، مسئولیت کاربر، جامعه و هوش مصنوعی.', 'این متن باید پیش از انتشار گسترده توسط مشاور حقوقی بازبینی شود.'],
      subscription: ['شرایط اشتراک', 'شرایط نسخه‌های رایگان و پریمیوم آینده.', 'ممکن است هنوز هیچ طرح پولی فعال نباشد.'],
      ai: ['توضیح ایمنی هوش مصنوعی', 'هوش مصنوعی چگونه استفاده می‌شود و چه محدودیت‌هایی دارد.', 'محتوای هوش مصنوعی ممکن است نادرست یا ناقص باشد.'],
      contact: ['تماس و پشتیبانی', 'راه‌های درخواست پشتیبانی، حذف یا دریافت خروجی داده.', undefined],
      sections: [['اطلاعات و استفاده', 'BeMama از داده حساب، مسیر روزانه، پرسش و پاسخ، جامعه، چت، دستگاه و داده‌های عملیاتی برای ارائه و ایمن نگه داشتن سرویس استفاده می‌کند.'], ['محدودیت پزشکی', 'محتوا فقط آموزشی و حمایتی است و برای تشخیص، نسخه، دوز دارو یا مراقبت اضطراری نیست.'], ['درخواست‌ها', `برای حذف حساب، خروجی داده یا بازبینی حریم خصوصی با ${site.supportEmail} تماس بگیرید.`]]
    },
    ar: {
      about: ['حول BeMama', 'ما هي BeMama وما حدودها.', 'BeMama ليست أداة تشخيص طبي ولا تستبدل الطبيب أو خدمات الطوارئ.'],
      privacy: ['سياسة الخصوصية', 'ملخص واضح للبيانات التي تجمعها BeMama وتستخدمها.', 'هذه السياسة لا تدعي الامتثال لـ GDPR أو PIPEDA أو HIPAA أو غيرها.'],
      terms: ['شروط الاستخدام', 'شروط استخدام BeMama ومسؤوليات المستخدم والمجتمع والذكاء الاصطناعي.', 'يجب مراجعة هذه الشروط قانونياً قبل إطلاق واسع أو مدفوع.'],
      subscription: ['شروط الاشتراك', 'شروط الإصدارات المجانية والمميزة المستقبلية.', 'قد لا تكون الخطط المدفوعة متاحة بعد.'],
      ai: ['تنبيه الذكاء الاصطناعي', 'كيف يمكن استخدام الذكاء الاصطناعي وما حدوده.', 'قد يكون محتوى الذكاء الاصطناعي خاطئاً أو ناقصاً.'],
      contact: ['اتصال ودعم', 'طرق طلب الدعم أو الحذف أو تصدير البيانات.', undefined],
      sections: [['البيانات والاستخدام', 'تستخدم BeMama بيانات الحساب والمسار اليومي والأسئلة والمجتمع والدردشة والجهاز والتشغيل لتقديم الخدمة بأمان.'], ['حدود طبية', 'المحتوى للتعليم والدعم العام فقط وليس للتشخيص أو الوصفات أو جرعات الدواء أو الطوارئ.'], ['الطلبات', `لطلب حذف الحساب أو تصدير البيانات أو مراجعة الخصوصية، راسلينا على ${site.supportEmail}.`]]
    },
    fr: {
      about: ['À propos de BeMama', 'Ce qu’est BeMama et ses limites.', 'BeMama n’est pas un outil de diagnostic médical et ne remplace pas les cliniciens ou les urgences.'],
      privacy: ['Politique de confidentialité', 'Résumé clair des données collectées et utilisées par BeMama.', 'Cette politique ne revendique aucune conformité GDPR, PIPEDA, HIPAA ou équivalente.'],
      terms: ['Conditions d’utilisation', 'Conditions d’usage, responsabilités, communauté et contenu assisté par IA.', 'Ces conditions doivent être revues juridiquement avant un lancement large ou payant.'],
      subscription: ['Conditions d’abonnement', 'Conditions pour de futures offres gratuites et premium.', 'Aucun abonnement payant n’est nécessairement actif pour le moment.'],
      ai: ['Avertissement IA et sécurité', 'Comment l’IA peut être utilisée et quelles sont ses limites.', 'Le contenu assisté par IA peut être faux ou incomplet.'],
      contact: ['Contact et support', 'Support, demandes de suppression ou d’export de données.', undefined],
      sections: [['Données et usage', 'BeMama utilise les données de compte, parcours quotidien, Q&R, communauté, chat, appareil et opérations pour fournir et sécuriser le service.'], ['Limite médicale', 'Le contenu est éducatif et de soutien seulement, sans diagnostic, ordonnance, dosage ou urgence.'], ['Demandes', `Pour une suppression, un export ou une question de confidentialité, contactez ${site.supportEmail}.`]]
    },
    tr: {
      about: ['BeMama hakkında', 'BeMama nedir ve sınırları nelerdir.', 'BeMama tıbbi tanı aracı değildir ve klinisyenlerin veya acil servislerin yerine geçmez.'],
      privacy: ['Gizlilik Politikası', 'BeMama’nın topladığı ve kullandığı verilerin sade özeti.', 'Bu politika GDPR, PIPEDA, HIPAA veya benzeri uyumluluk iddiası değildir.'],
      terms: ['Kullanım Şartları', 'Kullanım, kullanıcı sorumlulukları, topluluk ve AI destekli içerik şartları.', 'Bu şartlar geniş veya ücretli lansmandan önce hukuki olarak incelenmelidir.'],
      subscription: ['Abonelik Şartları', 'Gelecekteki ücretsiz ve premium planlar için şartlar.', 'Ücretli planlar henüz aktif olmayabilir.'],
      ai: ['AI Uyarısı ve Güvenlik', 'AI nasıl kullanılabilir ve sınırları nelerdir.', 'AI destekli içerik yanlış veya eksik olabilir.'],
      contact: ['İletişim ve destek', 'Destek, silme veya veri dışa aktarma talepleri.', undefined],
      sections: [['Veriler ve kullanım', 'BeMama hesabı, Daily Journey, soru-cevap, topluluk, sohbet, cihaz ve operasyon verilerini hizmeti sunmak ve güvenli tutmak için kullanır.'], ['Tıbbi sınır', 'İçerik yalnızca genel eğitim ve destektir; tanı, reçete, doz veya acil bakım değildir.'], ['Talepler', `Hesap silme, veri dışa aktarma veya gizlilik incelemesi için ${site.supportEmail} adresine yazın.`]]
    },
    es: {
      about: ['Acerca de BeMama', 'Qué es BeMama y cuáles son sus límites.', 'BeMama no es una herramienta de diagnóstico médico ni reemplaza a profesionales o emergencias.'],
      privacy: ['Política de privacidad', 'Resumen claro de los datos que BeMama recopila y usa.', 'Esta política no afirma cumplimiento de GDPR, PIPEDA, HIPAA u otra norma similar.'],
      terms: ['Términos de uso', 'Uso de BeMama, responsabilidades, comunidad y contenido asistido por IA.', 'Estos términos deben revisarse legalmente antes de un lanzamiento amplio o pago.'],
      subscription: ['Términos de suscripción', 'Términos para futuras opciones gratuitas y premium.', 'Puede que aún no existan planes pagos activos.'],
      ai: ['Aviso de IA y seguridad', 'Cómo puede usarse la IA y cuáles son sus límites.', 'El contenido asistido por IA puede ser incorrecto o incompleto.'],
      contact: ['Contacto y soporte', 'Soporte, eliminación o exportación de datos.', undefined],
      sections: [['Datos y uso', 'BeMama usa datos de cuenta, Viaje diario, Q&A, comunidad, chat, dispositivo y operación para ofrecer y proteger el servicio.'], ['Límite médico', 'El contenido es solo educación y apoyo general, no diagnóstico, receta, dosis ni urgencias.'], ['Solicitudes', `Para eliminar cuenta, exportar datos o revisar privacidad, escribe a ${site.supportEmail}.`]]
    },
    pt: {
      about: ['Sobre BeMama', 'O que é BeMama e quais são seus limites.', 'BeMama não é ferramenta de diagnóstico médico e não substitui profissionais ou emergência.'],
      privacy: ['Política de privacidade', 'Resumo claro dos dados que BeMama coleta e usa.', 'Esta política não afirma conformidade com GDPR, PIPEDA, HIPAA ou similar.'],
      terms: ['Termos de uso', 'Uso do BeMama, responsabilidades, comunidade e conteúdo assistido por IA.', 'Estes termos devem ser revisados juridicamente antes de lançamento amplo ou pago.'],
      subscription: ['Termos de assinatura', 'Termos para futuras opções gratuitas e premium.', 'Planos pagos podem ainda não estar ativos.'],
      ai: ['Aviso de IA e segurança', 'Como a IA pode ser usada e quais são seus limites.', 'Conteúdo assistido por IA pode estar errado ou incompleto.'],
      contact: ['Contato e suporte', 'Suporte, exclusão ou exportação de dados.', undefined],
      sections: [['Dados e uso', 'BeMama usa dados de conta, Jornada diária, Q&A, comunidade, chat, dispositivo e operação para oferecer e proteger o serviço.'], ['Limite médico', 'O conteúdo é apenas educação e suporte geral, não diagnóstico, prescrição, dosagem ou emergência.'], ['Solicitações', `Para excluir conta, exportar dados ou revisar privacidade, escreva para ${site.supportEmail}.`]]
    }
  };
  const pack = packs[locale];
  return {
    about: policy(pack.about[0], pack.about[1], pack.sections, pack.about[2]),
    privacy: policy(pack.privacy[0], pack.privacy[1], pack.sections, pack.privacy[2]),
    terms: policy(pack.terms[0], pack.terms[1], pack.sections, pack.terms[2]),
    'subscription-terms': policy(pack.subscription[0], pack.subscription[1], pack.sections, pack.subscription[2]),
    'ai-disclaimer': policy(pack.ai[0], pack.ai[1], pack.sections, pack.ai[2]),
    contact: policy(pack.contact[0], pack.contact[1], pack.sections, pack.contact[2])
  };
}
