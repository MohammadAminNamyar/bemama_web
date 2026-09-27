const languages = ['en', 'fa', 'ar', 'fr', 'tr', 'es', 'pt'];
const rows = {
  menu: 'Navigation menu|منوی راهبری|قائمة التنقل|Menu de navigation|Gezinme menüsü|Menú de navegación|Menu de navegação',
  home: 'BeMama home|خانهٔ BeMama|الصفحة الرئيسية لـ BeMama|Accueil BeMama|BeMama ana sayfa|Inicio de BeMama|Página inicial do BeMama',
  search: 'Search|جستجو|بحث|Rechercher|Ara|Buscar|Buscar',
  tools: 'Tools|ابزارها|الأدوات|Outils|Araçlar|Herramientas|Ferramentas',
  contents: 'On this page|در این صفحه|في هذه الصفحة|Sur cette page|Bu sayfada|En esta página|Nesta página',
  breadcrumb: 'You are here|مسیر صفحه|مسار الصفحة|Vous êtes ici|Bulunduğunuz yer|Estás aquí|Você está aqui',
  apps: 'BeMama mobile apps|برنامه‌های موبایل BeMama|تطبيقات BeMama للجوال|Applications mobiles BeMama|BeMama mobil uygulamaları|Aplicaciones móviles de BeMama|Aplicativos móveis BeMama',
  stages: 'Care stages|مراحل مراقبت|مراحل الرعاية|Étapes de soins|Bakım aşamaları|Etapas de cuidado|Etapas de cuidado',
  findStage: 'Find guidance for your stage|راهنمای مرحلهٔ خود را پیدا کنید|اعثري على إرشادات لمرحلتك|Des guides pour votre étape|Aşamanıza uygun rehberler|Guías para tu etapa|Guias para sua fase',
  heroTitle: 'A little more calm.|کمی آرامش بیشتر.|قليل من الهدوء.|Un peu plus de sérénité.|Biraz daha huzur.|Un poco más de calma.|Um pouco mais de calma.',
  heroTitleAccent: 'At every stage.|در هر مرحله.|في كل مرحلة.|À chaque étape.|Her aşamada.|En cada etapa.|Em cada fase.',
  heroIntro: 'From pregnancy’s first questions to your baby’s daily routines. Find guidance for your stage and keep feeding, sleep and care records together.|از اولین پرسش‌های بارداری تا کارهای روزمرهٔ نوزادتان. راهنمای مناسب مرحلهٔ خود را پیدا کنید و تغذیه، خواب و مراقبت را یک‌جا ثبت کنید.|من أسئلة الحمل الأولى إلى روتين طفلك اليومي. إرشادات تناسب مرحلتك وسجلات الرضاعة والنوم والرعاية في مكان واحد.|Des premières questions de grossesse aux routines de bébé. Des guides pour votre étape, avec les repas, le sommeil et les soins réunis.|Gebeliğin ilk sorularından bebeğinizin günlük rutinine. Aşamanıza uygun rehberleri keşfedin; beslenme, uyku ve bakım kayıtlarını bir arada tutun.|Desde las primeras dudas del embarazo hasta la rutina de tu bebé. Guías para tu etapa y registros de alimentación, sueño y cuidados en un solo lugar.|Das primeiras dúvidas da gravidez à rotina do bebê. Guias para sua fase e registros de alimentação, sono e cuidados em um só lugar.',
  heroInside: 'A little look inside BeMama|نگاهی به دنیای BeMama|نظرة داخل BeMama|Un aperçu de BeMama|BeMama’ya küçük bir bakış|Un vistazo a BeMama|Um olhar por dentro do BeMama',
  heroBenefit: 'Your week. Your rhythm.|هفتهٔ شما، ریتم زندگی شما.|أسبوعك. إيقاعك.|Votre semaine. Votre rythme.|Sizin haftanız. Sizin ritminiz.|Tu semana. Tu ritmo.|Sua semana. Seu ritmo.',
  heroBenefitText: 'Guidance that grows with you.|راهنمایی همراه با رشد خانوادهٔ شما.|إرشادات ترافق نمو عائلتك.|Des guides qui évoluent avec vous.|Sizinle birlikte gelişen rehberlik.|Guías que crecen contigo.|Guias que crescem com você.',
  stageHeading: 'Every chapter starts somewhere.|هر فصل، آغازی دارد.|لكل مرحلة بداية.|Chaque étape a son point de départ.|Her dönemin bir başlangıcı var.|Cada etapa tiene un comienzo.|Cada fase tem um começo.',
  stagePlanning: 'Understand your cycle and prepare for what’s next.|چرخهٔ خود را بشناسید و برای قدم بعد آماده شوید.|افهمي دورتك واستعدي للخطوة القادمة.|Comprendre votre cycle et préparer la suite.|Döngünüzü tanıyın, sonraki adıma hazırlanın.|Conoce tu ciclo y prepárate para lo que sigue.|Entenda seu ciclo e prepare o próximo passo.',
  stagePregnancy: 'A little guidance for each new week.|راهنمایی برای هر هفتهٔ تازه.|إرشادات لكل أسبوع جديد.|Des repères pour chaque nouvelle semaine.|Her yeni hafta için bir rehber.|Guías para cada nueva semana.|Orientações para cada nova semana.',
  stageBaby: 'Find your way through feeds, sleep and firsts.|همراه شما در تغذیه، خواب و اولین تجربه‌ها.|خطوات مع الرضاعة والنوم والتجارب الأولى.|Repas, sommeil et premières découvertes.|Beslenme, uyku ve ilk deneyimlerde yanınızda.|Apoyo para las tomas, el sueño y sus primeras veces.|Apoio para mamadas, sono e primeiras descobertas.',
  stageChild: 'Make room for play, learning and growing.|جایی برای بازی، یادگیری و رشد.|مساحة للعب والتعلّم والنمو.|Place au jeu, à l’apprentissage et à la croissance.|Oyuna, öğrenmeye ve büyümeye yer açın.|Espacio para jugar, aprender y crecer.|Espaço para brincar, aprender e crescer.',
  heroDaily: 'Your daily care|مراقبت روزانهٔ شما|رعايتك اليومية|Votre quotidien|Günlük bakımınız|Tu cuidado diario|Seu cuidado diário',
  heroHomeAlt: 'BeMama Home screen with the family journey, daily care plan and quick actions.|صفحهٔ اصلی BeMama با مسیر خانواده، برنامهٔ مراقبت روزانه و دسترسی‌های سریع.|شاشة BeMama الرئيسية مع رحلة العائلة وخطة الرعاية اليومية والإجراءات السريعة.|Accueil BeMama avec parcours familial, programme quotidien et accès rapides.|BeMama ana ekranı: aile yolculuğu, günlük bakım planı ve hızlı işlemler.|Inicio de BeMama con la etapa familiar, el plan de cuidado diario y accesos rápidos.|Início do BeMama com a jornada familiar, o plano de cuidados diário e ações rápidas.',
  heroReports: 'Care reports|گزارش‌های مراقبت|تقارير الرعاية|Rapports de suivi|Bakım raporları|Reportes de cuidados|Relatórios de cuidados',
  heroPreview: 'App preview · English · Sample data|پیش‌نمایش برنامه · انگلیسی · داده‌های نمونه|معاينة التطبيق · بالإنجليزية · بيانات تجريبية|Aperçu de l’application · Anglais · Données fictives|Uygulama önizlemesi · İngilizce · Örnek veriler|Vista previa · Inglés · Datos de ejemplo|Prévia do aplicativo · Inglês · Dados de exemplo',
  heroDailyAlt: 'BeMama Daily screen with the pregnancy week, saved guides, calendar and care articles.|صفحهٔ روزانهٔ BeMama با هفتهٔ بارداری، راهنماهای ذخیره‌شده، تقویم و مطالب مراقبت.|شاشة BeMama اليومية مع أسبوع الحمل والأدلة المحفوظة والتقويم ومقالات الرعاية.|Écran quotidien de BeMama avec semaine de grossesse, guides enregistrés, calendrier et articles.|BeMama Günlük ekranında gebelik haftası, kaydedilen rehberler, takvim ve bakım yazıları.|Pantalla diaria de BeMama con semana de embarazo, guías guardadas, calendario y artículos.|Tela diária do BeMama com semana de gestação, guias salvos, calendário e artigos de cuidados.',
  heroReportsAlt: 'BeMama weekly report displaying recorded bottle feeds using sample data.|گزارش هفتگی BeMama از شیر خوردن با شیشه، با داده‌های نمونه.|تقرير BeMama الأسبوعي لرضعات الزجاجة باستخدام بيانات تجريبية.|Rapport hebdomadaire BeMama sur les biberons avec des données fictives.|Örnek verilerle kaydedilen biberon öğünlerini gösteren BeMama haftalık raporu.|Reporte semanal de BeMama con tomas de biberón y datos de ejemplo.|Relatório semanal do BeMama com mamadeiras registradas e dados de exemplo.',
  videos: 'BeMama video previews|پیش‌نمایش‌های ویدیویی BeMama|معاينات فيديو BeMama|Aperçus vidéo BeMama|BeMama video önizlemeleri|Vistas previas de BeMama|Prévias de vídeo do BeMama',
  editorial: 'Author & editorial approach|نویسنده و روش تهیهٔ مطالب|الكاتب ونهج إعداد المحتوى|Auteur et démarche éditoriale|Yazar ve editoryal yaklaşım|Autor y enfoque editorial|Autor e abordagem editorial'
};
export function websiteUxCopy(lang) {
  const index = languages.indexOf(lang);
  return Object.fromEntries(Object.entries(rows).map(([key, row]) => {
    const values = row.split('|');
    if (values.length !== languages.length) throw new Error(`Missing website UX translation: ${key}`);
    return [key, values[index < 0 ? 0 : index]];
  }));
}
