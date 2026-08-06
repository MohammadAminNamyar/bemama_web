// Hand-authored localized copy for the 30 new BeMama guides.
// The copy intentionally uses commas, periods, and colons instead of em dashes.

import { newArticles } from '../new-articles.mjs';

const kits = {
  fa: {
    description: (title) => `راهنمای BeMama درباره ${title}، با نکات عملی، پرسش‌های مناسب برای مراقبت حرفه‌ای و نشانه‌هایی که نیاز به پیگیری دارند.`,
    intro: (title) => `${title} می‌تواند پرسش‌های زیادی ایجاد کند. این راهنما اطلاعات عمومی را به قدم‌های کوچک و قابل اجرا تبدیل می‌کند تا بهتر بدانید چه چیزی را مشاهده کنید، چه چیزی را یادداشت کنید و چه زمانی با یک متخصص سلامت صحبت کنید.`,
    headings: ['موضوع را بهتر بشناسید', 'قدم‌های ساده و مفید', 'چه چیزهایی را دنبال کنید', 'چه زمانی کمک بگیرید', 'برای قدم بعدی آماده شوید'],
    generic: [
      'از الگوی واقعی زندگی خود شروع کنید. تاریخ‌ها، علائم، عادت‌ها و شرایطی را که روی موضوع اثر می‌گذارند کوتاه یادداشت کنید. یک الگوی چندروزه از یک نشانه جداگانه مفیدتر است.',
      'همه تغییرات را یک‌باره شروع نکنید. یک کار کوچک انتخاب کنید، چند روز ادامه دهید و ببینید آیا برای بدن و خانواده شما مناسب است. برنامه خوب باید در روزهای خسته‌کننده هم قابل انجام باشد.',
      'به جای تمرکز روی یک عدد یا یک روز، روند را در طول زمان ببینید. اگر چیزی مبهم است، پرسش خود را همراه با یادداشت‌ها به ویزیت بعدی ببرید.',
      'اگر علائم شدید، جدید یا رو به بدتر شدن هستند، برای ارزیابی با پزشک یا ماما تماس بگیرید. این متن جای تشخیص یا درمان شخصی را نمی‌گیرد.',
      'برای قدم بعدی یک تصمیم کوچک بنویسید، مانند تماس با درمانگر، آماده کردن یک فهرست یا تنظیم یک یادآوری. مراقبت از خود و درخواست کمک بخشی از برنامه است.'
    ],
    takeaways: (title) => [`${title} وقتی مفیدتر است که با شرایط واقعی شما هماهنگ شود.`, 'یادداشت‌های کوتاه، گفت‌وگو با متخصص را دقیق‌تر می‌کنند.', 'یک تغییر کوچک و پایدار بهتر از برنامه‌ای سخت و کوتاه‌مدت است.', 'نشانه‌های شدید یا غیرعادی را نادیده نگیرید.', 'مراقبت از سلامت جسم و آرامش روان هر دو مهم هستند.'],
    faq: (title) => [
      { q: `${title} برای همه یکسان است؟`, a: 'خیر. سن، سابقه سلامت، داروها، مرحله زندگی و شرایط خانواده می‌تواند بهترین قدم را تغییر دهد. از راهنمایی متناسب با وضعیت خود استفاده کنید.' },
      { q: 'اولین قدم عملی چیست؟', a: 'یک یادداشت کوتاه از تاریخ، نشانه، چیزی که کمک کرده و پرسش اصلی خود بنویسید. همین اطلاعات می‌تواند شروع خوبی برای گفت‌وگو باشد.' },
      { q: 'چه زمانی باید با متخصص صحبت کنم؟', a: 'اگر نشانه‌ها شدید، پایدار، جدید یا نگران‌کننده هستند، یا انجام کارهای روزمره را دشوار کرده‌اند، برای راهنمایی تماس بگیرید.' }
    ]
  },
  ar: {
    description: (title) => `دليل من BeMama حول ${title}، مع خطوات عملية وأسئلة مفيدة للرعاية المتخصصة وعلامات تستدعي المتابعة.`,
    intro: (title) => `قد يثير ${title} أسئلة كثيرة. يحول هذا الدليل المعلومات العامة إلى خطوات صغيرة قابلة للتطبيق، لتعرفي ما الذي تلاحظينه، وما الذي تسجلينه، ومتى تتحدثين مع مختص صحي.`,
    headings: ['فهم الموضوع', 'خطوات بسيطة مفيدة', 'ما الذي ينبغي متابعته', 'متى تطلبين المساعدة', 'الاستعداد للخطوة التالية'],
    generic: [
      'ابدئي بالنمط الحقيقي في حياتك. سجلي التواريخ والأعراض والعادات والظروف المؤثرة باختصار. ملاحظة نمط يستمر عدة أيام أفضل من تفسير علامة واحدة.',
      'لا تبدئي كل التغييرات في الوقت نفسه. اختاري خطوة صغيرة وامنحيها وقتا، ثم لاحظي هل تناسب جسمك وأسرتك. الخطة الجيدة يمكن تطبيقها حتى في الأيام المرهقة.',
      'انظري إلى الاتجاه مع مرور الوقت بدلا من التركيز على رقم واحد أو يوم واحد. خذي ملاحظاتك وأسئلتك إلى الزيارة التالية إذا بقي شيء غير واضح.',
      'اتصلي بالطبيب أو القابلة إذا كانت الأعراض شديدة أو جديدة أو تزداد. هذا النص تثقيف عام ولا يحل محل التشخيص أو العلاج الفردي.',
      'اكتبي خطوة تالية صغيرة، مثل الاتصال بمختص أو تجهيز قائمة أو وضع تذكير. طلب الدعم والعناية بنفسك جزء من الخطة.'
    ],
    takeaways: (title) => [`يصبح ${title} أكثر فائدة عندما يتناسب مع ظروفك الواقعية.`, 'الملاحظات القصيرة تجعل الحديث مع المختص أكثر دقة.', 'الخطوة الصغيرة المستمرة أفضل من خطة صعبة قصيرة.', 'لا تتجاهلي الأعراض الشديدة أو غير المعتادة.', 'العناية بالجسم والصحة النفسية مهمتان معا.'],
    faq: (title) => [
      { q: `هل ${title} متشابه للجميع؟`, a: 'لا. العمر والتاريخ الصحي والأدوية والمرحلة وظروف الأسرة قد تغير الخطوة الأنسب. اطلبي إرشادا يناسب حالتك.' },
      { q: 'ما أول خطوة عملية؟', a: 'اكتبي التاريخ والعلامة وما ساعد والسؤال الأهم في ملاحظة قصيرة. يمكن أن تكون هذه بداية مفيدة للحديث مع فريق الرعاية.' },
      { q: 'متى أتحدث مع مختص؟', a: 'إذا كانت الأعراض شديدة أو مستمرة أو جديدة أو تؤثر في الحياة اليومية، اتصلي للحصول على توجيه مناسب.' }
    ]
  },
  fr: {
    description: (title) => `Guide BeMama sur ${title}, avec des repères pratiques, des questions à poser et des signes qui justifient un avis professionnel.`,
    intro: (title) => `${title} peut soulever de nombreuses questions. Ce guide transforme des informations générales en étapes simples, pour vous aider à savoir quoi observer, quoi noter et quand parler avec un professionnel de santé.`,
    headings: ['Comprendre le sujet', 'Des gestes simples qui aident', 'Ce qu’il faut observer', 'Quand demander de l’aide', 'Préparer la suite'],
    generic: [
      'Commencez par votre situation réelle. Notez brièvement les dates, les symptômes, les habitudes et les circonstances qui peuvent jouer un rôle. Une tendance sur plusieurs jours est plus utile qu’un signe isolé.',
      'Ne changez pas tout à la fois. Choisissez une petite action, gardez-la quelques jours et vérifiez qu’elle convient à votre corps et à votre famille. Une bonne routine reste possible même lors des journées difficiles.',
      'Regardez l’évolution dans le temps plutôt qu’un seul chiffre ou une seule journée. Apportez vos notes et vos questions au prochain rendez-vous si quelque chose reste incertain.',
      'Contactez votre médecin ou votre sage-femme si les symptômes sont intenses, nouveaux ou s’aggravent. Ce texte apporte une information générale et ne remplace pas un avis personnalisé.',
      'Écrivez une prochaine étape simple, par exemple appeler un professionnel, préparer une liste ou programmer un rappel. Demander du soutien et prendre soin de vous font partie du plan.'
    ],
    takeaways: (title) => [`${title} est plus utile lorsqu’il est adapté à votre quotidien.`, 'Des notes courtes rendent la discussion avec un professionnel plus précise.', 'Une petite action durable vaut mieux qu’un programme difficile et bref.', 'Ne minimisez pas un symptôme intense ou inhabituel.', 'La santé physique et le bien-être émotionnel comptent tous les deux.'],
    faq: (title) => [
      { q: `${title} est-il identique pour tout le monde ?`, a: 'Non. L’âge, les antécédents, les médicaments, l’étape de vie et le contexte familial peuvent changer la meilleure démarche. Demandez un conseil adapté à votre situation.' },
      { q: 'Quelle est la première étape concrète ?', a: 'Notez la date, ce que vous avez observé, ce qui vous a aidé et votre question principale. Cette courte note suffit souvent pour commencer une discussion.' },
      { q: 'Quand faut-il demander un avis ?', a: 'Si les symptômes sont intenses, persistants, nouveaux ou gênent la vie quotidienne, contactez votre équipe de santé.' }
    ]
  },
  tr: {
    description: (title) => `${title} hakkında BeMama rehberi. Pratik adımlar, sağlık uzmanına sorulacak sorular ve takip edilmesi gereken işaretler içerir.`,
    intro: (title) => `${title} birçok soru doğurabilir. Bu rehber genel bilgileri küçük ve uygulanabilir adımlara dönüştürür. Böylece neyi gözlemleyeceğinizi, neyi not edeceğinizi ve ne zaman bir sağlık uzmanıyla konuşacağınızı daha kolay görebilirsiniz.`,
    headings: ['Konuyu anlamak', 'Yardımcı olan basit adımlar', 'Neleri takip etmeli', 'Ne zaman yardım alınmalı', 'Sonraki adıma hazırlanmak'],
    generic: [
      'Gerçek yaşamınızdaki örüntüyle başlayın. Tarihleri, belirtileri, alışkanlıkları ve etkili olabilecek koşulları kısa not edin. Birkaç günlük örüntü, tek bir işareti yorumlamaktan daha yararlıdır.',
      'Her şeyi aynı anda değiştirmeyin. Küçük bir adım seçin, birkaç gün uygulayın ve bedeninize ve ailenize uyup uymadığını değerlendirin. İyi bir plan zor günlerde de sürdürülebilir olmalıdır.',
      'Tek bir sayı veya gün yerine zaman içindeki değişime bakın. Belirsizlik varsa notlarınızı ve sorularınızı bir sonraki görüşmeye götürün.',
      'Belirtiler şiddetliyse, yeniyse veya kötüleşiyorsa doktorunuz ya da ebenizle iletişime geçin. Bu metin genel eğitim içindir ve kişisel tanı veya tedavinin yerini tutmaz.',
      'Bir sonraki küçük adımı yazın. Bir uzmana ulaşmak, liste hazırlamak veya hatırlatıcı kurmak yeterli olabilir. Destek istemek ve kendinize bakmak planın parçasıdır.'
    ],
    takeaways: (title) => [`${title}, günlük yaşamınıza uyarlandığında daha yararlı olur.`, 'Kısa notlar sağlık uzmanıyla konuşmayı daha net hale getirir.', 'Sürdürülebilen küçük bir adım, kısa ve zor bir plandan iyidir.', 'Şiddetli veya alışılmadık belirtileri göz ardı etmeyin.', 'Bedensel sağlık ve duygusal iyilik birlikte önemlidir.'],
    faq: (title) => [
      { q: `${title} herkes için aynı mıdır?`, a: 'Hayır. Yaş, sağlık geçmişi, ilaçlar, yaşam dönemi ve aile koşulları uygun adımı değiştirebilir. Durumunuza özel öneri isteyin.' },
      { q: 'İlk pratik adım nedir?', a: 'Tarihi, gözleminizi, neyin yardımcı olduğunu ve en önemli sorunuzu kısa bir not olarak yazın. Bu not görüşmeye başlamak için yeterlidir.' },
      { q: 'Ne zaman bir uzmana danışmalıyım?', a: 'Belirtiler şiddetliyse, sürüyorsa, yeniyse veya günlük yaşamı etkiliyorsa uygun yönlendirme için iletişime geçin.' }
    ]
  },
  es: {
    description: (title) => `Guía de BeMama sobre ${title}, con pasos prácticos, preguntas para la atención profesional y señales que conviene vigilar.`,
    intro: (title) => `${title} puede generar muchas preguntas. Esta guía convierte la información general en pasos pequeños y prácticos para ayudarte a saber qué observar, qué anotar y cuándo hablar con un profesional de salud.`,
    headings: ['Entender el tema', 'Pasos sencillos que ayudan', 'Qué conviene observar', 'Cuándo pedir ayuda', 'Preparar el siguiente paso'],
    generic: [
      'Empieza por el patrón real de tu vida. Anota brevemente fechas, síntomas, hábitos y circunstancias que puedan influir. Un patrón de varios días suele ser más útil que interpretar una sola señal.',
      'No cambies todo a la vez. Elige una acción pequeña, mantenla unos días y comprueba si encaja con tu cuerpo y tu familia. Una buena rutina también debe funcionar en los días difíciles.',
      'Observa la evolución con el tiempo en lugar de centrarte en un número o un día. Lleva tus notas y preguntas a la próxima consulta si algo sigue sin estar claro.',
      'Contacta con tu médico o matrona si los síntomas son intensos, nuevos o empeoran. Este texto ofrece educación general y no sustituye la valoración personalizada.',
      'Escribe un siguiente paso sencillo, como llamar a un profesional, preparar una lista o programar un recordatorio. Pedir apoyo y cuidarte también forma parte del plan.'
    ],
    takeaways: (title) => [`${title} es más útil cuando se adapta a tu vida diaria.`, 'Las notas breves hacen más clara la conversación con un profesional.', 'Un cambio pequeño y sostenible vale más que un plan difícil y corto.', 'No minimices los síntomas intensos o fuera de lo habitual.', 'La salud física y el bienestar emocional importan por igual.'],
    faq: (title) => [
      { q: `¿${title} es igual para todo el mundo?`, a: 'No. La edad, los antecedentes, los medicamentos, la etapa de vida y el contexto familiar pueden cambiar el mejor camino. Pide orientación adaptada a tu situación.' },
      { q: '¿Cuál es el primer paso práctico?', a: 'Anota la fecha, lo que observaste, lo que ayudó y tu pregunta principal. Esa nota breve suele ser suficiente para empezar una conversación.' },
      { q: '¿Cuándo debo hablar con un profesional?', a: 'Si los síntomas son intensos, persistentes, nuevos o dificultan tu vida diaria, contacta con tu equipo de salud.' }
    ]
  },
  pt: {
    description: (title) => `Guia da BeMama sobre ${title}, com passos práticos, perguntas para levar ao atendimento e sinais que merecem acompanhamento.`,
    intro: (title) => `${title} pode trazer muitas dúvidas. Este guia transforma informações gerais em passos pequenos e práticos para ajudar você a observar o que acontece, fazer anotações e saber quando conversar com um profissional de saúde.`,
    headings: ['Entender o tema', 'Passos simples que ajudam', 'O que observar', 'Quando pedir ajuda', 'Preparar o próximo passo'],
    generic: [
      'Comece pelo padrão real da sua vida. Anote brevemente datas, sintomas, hábitos e situações que podem influenciar. Um padrão de alguns dias é mais útil do que interpretar um sinal isolado.',
      'Não mude tudo de uma vez. Escolha uma ação pequena, mantenha-a por alguns dias e veja se ela combina com seu corpo e sua família. Uma boa rotina também precisa funcionar nos dias difíceis.',
      'Observe a evolução ao longo do tempo em vez de se concentrar em um número ou em um único dia. Leve anotações e perguntas à próxima consulta se algo continuar incerto.',
      'Fale com seu médico ou sua equipe de cuidado se os sintomas forem intensos, novos ou estiverem piorando. Este texto é educação geral e não substitui uma avaliação individual.',
      'Escreva um próximo passo simples, como ligar para um profissional, preparar uma lista ou criar um lembrete. Pedir apoio e cuidar de si também fazem parte do plano.'
    ],
    takeaways: (title) => [`${title} é mais útil quando se adapta à sua rotina real.`, 'Anotações curtas tornam a conversa com o profissional mais precisa.', 'Uma pequena mudança sustentável é melhor do que um plano difícil e breve.', 'Não ignore sintomas intensos ou fora do seu padrão.', 'A saúde física e o bem-estar emocional são igualmente importantes.'],
    faq: (title) => [
      { q: `${title} é igual para todas as pessoas?`, a: 'Não. Idade, histórico de saúde, medicamentos, fase da vida e contexto familiar podem mudar o melhor caminho. Peça orientação para a sua situação.' },
      { q: 'Qual é o primeiro passo prático?', a: 'Anote a data, o que observou, o que ajudou e sua principal dúvida. Essa nota curta costuma ser suficiente para iniciar uma conversa.' },
      { q: 'Quando devo falar com um profissional?', a: 'Se os sintomas forem intensos, persistentes, novos ou estiverem atrapalhando a vida diária, entre em contato com sua equipe de saúde.' }
    ]
  }
};

const topics = {
  'trying-to-conceive/preconception-medication-review': {
    fa: ['بررسی عملی دارو پیش از بارداری', 'فهرست کامل داروهای تجویزی، بدون نسخه، مکمل‌ها و محصولات گیاهی را آماده کنید.', 'در ویزیت پیش از بارداری درباره جایگزین‌ها، کاهش تدریجی و برنامه پس از مثبت شدن تست سؤال کنید.', 'مکمل‌ها را نیز مانند دارو جدی بگیرید و از مصرف هم‌زمان چند محصول بدون بررسی پرهیز کنید.'],
    ar: ['مراجعة الأدوية قبل الحمل بطريقة عملية', 'جهزي قائمة كاملة بالأدوية الموصوفة والتي لا تحتاج وصفة والمكملات والمنتجات العشبية.', 'ناقشي البدائل وخطة التخفيف التدريجي وما يجب فعله بعد ظهور اختبار حمل إيجابي.', 'عاملي المكملات مثل الأدوية وتجنبي جمع منتجات متعددة من دون مراجعة مختص.'],
    fr: ['Faire le point sur les médicaments avant la grossesse', 'Préparez la liste des traitements prescrits, des produits sans ordonnance, des compléments et des plantes.', 'Demandez quelles alternatives, réductions progressives et consignes suivre après un test positif.', 'Considérez les compléments comme de vrais produits de santé et évitez les doublons.'],
    tr: ['Gebelikten önce ilaçları pratik biçimde değerlendirmek', 'Reçeteli ve reçetesiz ilaçları, takviyeleri ve bitkisel ürünleri eksiksiz listeleyin.', 'Alternatifleri, kademeli bırakmayı ve pozitif test sonrası planı doktorunuzla konuşun.', 'Takviyeleri de ilaçlar kadar ciddiye alın ve birden fazla ürünü kontrol etmeden birleştirmeyin.'],
    es: ['Revisar los medicamentos antes del embarazo de forma práctica', 'Prepara una lista completa de medicamentos con y sin receta, suplementos y productos de hierbas.', 'Pregunta por alternativas, reducciones graduales y el plan después de un test positivo.', 'Trata los suplementos como medicamentos y evita duplicar ingredientes sin revisarlos.'],
    pt: ['Revisão prática dos medicamentos antes da gravidez', 'Prepare uma lista completa de remédios prescritos e sem receita, suplementos e produtos naturais.', 'Pergunte sobre alternativas, redução gradual e o que fazer depois de um teste positivo.', 'Trate suplementos como medicamentos e evite combinar produtos sem verificar os ingredientes.']
  },
  'trying-to-conceive/emotional-wellbeing-while-trying': {
    fa: ['حفظ سلامت عاطفی هنگام اقدام برای بارداری', 'احساس امید، نگرانی، خستگی یا حسادت در این مسیر می‌تواند هم‌زمان وجود داشته باشد.', 'برای خبرهای بارداری، شبکه‌های اجتماعی و گفت‌وگوهای خانوادگی مرزهای محترمانه تعیین کنید.', 'زمانی را برای ارتباط با همسر بدون صحبت درباره باروری و زمانی را برای کمک حرفه‌ای در نظر بگیرید.'],
    ar: ['حماية الرفاه النفسي أثناء محاولة الحمل', 'قد تجتمع مشاعر الأمل والقلق والتعب والغيرة في هذه المرحلة، وهذا لا يعني أنك تتعاملين معها بشكل سيئ.', 'ضعي حدودا لطيفة مع أخبار الحمل ووسائل التواصل والمحادثات العائلية.', 'خصصي وقتا للعلاقة بعيدا عن الخصوبة واطلبي دعما متخصصا إذا استمر الضيق.'],
    fr: ['Protéger son équilibre émotionnel pendant les essais', 'L’espoir, l’inquiétude, la fatigue ou la jalousie peuvent coexister et ne disent rien de votre valeur.', 'Fixez des limites bienveillantes autour des annonces de grossesse, des réseaux et des conversations familiales.', 'Gardez des moments de couple sans parler de fertilité et demandez de l’aide si la détresse dure.'],
    tr: ['Gebelik denemeleri sırasında duygusal iyiliği korumak', 'Umut, kaygı, yorgunluk ve kıskançlık aynı anda yaşanabilir; bu, süreci kötü yönettiğiniz anlamına gelmez.', 'Gebelik haberleri, sosyal medya ve aile konuşmaları için nazik sınırlar koyun.', 'Doğurganlık dışında çift olarak zaman ayırın ve sıkıntı sürerse profesyonel destek alın.'],
    es: ['Cuidar el bienestar emocional mientras buscas el embarazo', 'La esperanza, la preocupación, el cansancio y los celos pueden coexistir sin decir nada malo de ti.', 'Pon límites amables a las noticias de embarazos, las redes y las conversaciones familiares.', 'Reserva tiempo de pareja sin hablar de fertilidad y busca apoyo si el malestar persiste.'],
    pt: ['Cuidar do bem-estar emocional ao tentar engravidar', 'Esperança, preocupação, cansaço e ciúme podem aparecer juntos e não definem como você está lidando com o processo.', 'Estabeleça limites gentis para notícias de gravidez, redes sociais e conversas familiares.', 'Reserve momentos do casal sem falar de fertilidade e procure apoio se o sofrimento persistir.']
  },
  'trying-to-conceive/endometriosis-and-conception': {
    fa: ['اندومتریوز و بارداری، شروعی آگاهانه‌تر', 'الگوی درد، خونریزی، علائم گوارشی و سابقه درمان را برای گفت‌وگو با متخصص ثبت کنید.', 'زمان ارزیابی باروری به سن، علائم، جراحی‌های قبلی و عوامل مربوط به هر دو نفر بستگی دارد.', 'درد هنگام رابطه و علائم شدید نیز بخشی از مراقبت هستند و نباید نادیده گرفته شوند.'],
    ar: ['الانتباذ البطاني الرحمي والحمل، بداية أكثر معرفة', 'سجلي نمط الألم والنزيف والأعراض الهضمية أو البولية وتاريخ العلاجات لمناقشته مع المختص.', 'توقيت تقييم الخصوبة يعتمد على العمر والأعراض والجراحات السابقة وعوامل كلا الشريكين.', 'الألم أثناء العلاقة والأعراض الشديدة جزء من الرعاية ولا ينبغي تجاهلها.'],
    fr: ['Endométriose et conception, partir sur de meilleures bases', 'Notez les douleurs, les saignements, les symptômes digestifs ou urinaires et les traitements précédents.', 'Le moment d’une évaluation dépend de l’âge, des symptômes, des interventions et des facteurs des deux partenaires.', 'La douleur pendant les rapports et les poussées importantes méritent aussi une prise en charge.'],
    tr: ['Endometriozis ve gebelik, daha bilinçli bir başlangıç', 'Ağrı, kanama, sindirim veya idrar belirtilerini ve önceki tedavileri uzmanla paylaşmak için not edin.', 'Doğurganlık değerlendirmesinin zamanı yaşa, belirtilere, ameliyatlara ve iki partnerin durumuna bağlıdır.', 'İlişki sırasında ağrı ve şiddetli belirtiler de bakımın parçasıdır, görmezden gelinmemelidir.'],
    es: ['Endometriosis y concepción, un comienzo más informado', 'Anota el patrón de dolor, sangrado, síntomas digestivos o urinarios y tratamientos previos.', 'El momento de evaluar la fertilidad depende de la edad, los síntomas, las cirugías y los factores de ambas personas.', 'El dolor durante las relaciones y los brotes intensos también merecen atención.'],
    pt: ['Endometriose e concepção, um começo mais informado', 'Anote o padrão de dor, sangramento, sintomas intestinais ou urinários e tratamentos anteriores.', 'O momento de avaliar a fertilidade depende da idade, dos sintomas, de cirurgias e dos fatores dos dois parceiros.', 'Dor nas relações e crises importantes também fazem parte do cuidado e não devem ser ignoradas.']
  },
  'trying-to-conceive/fertility-friendly-meal-patterns': {
    fa: ['الگوی غذایی حمایت‌کننده از باروری بدون رژیم کامل', 'در بیشتر وعده‌ها پروتئین، کربوهیدرات پرفیبر، میوه یا سبزی و چربی مفید را کنار هم بگذارید.', 'درباره اسیدفولیک، آهن، ید، ویتامین دی و مکمل مناسب با متخصص صحبت کنید.', 'ایمنی غذا و عادت‌های قابل تکرار از حذف‌های سخت و فهرست‌های ترسناک مفیدتر هستند.'],
    ar: ['نمط غذائي داعم للخصوبة من دون حمية مثالية', 'اجمعي في الوجبات بين البروتين والكربوهيدرات الغنية بالألياف والخضار أو الفاكهة والدهون المفيدة.', 'ناقشي حمض الفوليك والحديد واليود وفيتامين د والمكمل المناسب مع المختص.', 'سلامة الطعام والعادات القابلة للاستمرار أهم من الحميات القاسية وقوائم المنع الطويلة.'],
    fr: ['Manger pour soutenir la fertilité sans régime parfait', 'Associez aux repas une source de protéines, des glucides riches en fibres, des végétaux et de bonnes graisses.', 'Parlez de l’acide folique, du fer, de l’iode, de la vitamine D et des compléments adaptés.', 'La sécurité alimentaire et les habitudes durables valent mieux que les restrictions rigides.'],
    tr: ['Mükemmel bir diyet olmadan doğurganlığı destekleyen beslenme', 'Öğünlerde protein, lifli karbonhidrat, sebze veya meyve ve sağlıklı yağı bir araya getirin.', 'Folik asit, demir, iyot, D vitamini ve uygun takviyeyi uzmanınızla konuşun.', 'Gıda güvenliği ve sürdürülebilir alışkanlıklar katı yasaklardan daha yararlıdır.'],
    es: ['Patrones de alimentación favorables a la fertilidad sin una dieta perfecta', 'Combina proteína, carbohidratos ricos en fibra, frutas o verduras y grasas saludables en las comidas.', 'Pregunta por ácido fólico, hierro, yodo, vitamina D y los suplementos adecuados.', 'La seguridad alimentaria y los hábitos sostenibles ayudan más que las restricciones rígidas.'],
    pt: ['Padrões alimentares favoráveis à fertilidade sem uma dieta perfeita', 'Combine proteína, carboidratos ricos em fibras, frutas ou verduras e gorduras boas nas refeições.', 'Converse sobre ácido fólico, ferro, iodo, vitamina D e suplementos adequados.', 'Segurança dos alimentos e hábitos sustentáveis são mais úteis do que restrições rígidas.']
  },
  'trying-to-conceive/pcos-and-ovulation-tracking': {
    fa: ['سندروم تخمدان پلی‌کیستیک و پیگیری تخمک‌گذاری', 'در کنار تاریخ پریود، علائم و تغییرات بدن را ثبت کنید و چرخه را به الگوی ۲۸ روزه مجبور نکنید.', 'تست‌های تخمک‌گذاری در PCOS ممکن است چند بار مثبت شوند و به تنهایی تخمک‌گذاری را ثابت نمی‌کنند.', 'اگر پریودها بسیار نامنظم یا قطع شده‌اند، برای ارزیابی زودتر کمک بگیرید.'],
    ar: ['متلازمة تكيس المبايض ومتابعة الإباضة', 'سجلي مواعيد الدورة والأعراض والتغيرات بدلا من إجبار دورتك على نموذج ثمانية وعشرين يوما.', 'قد تعطي اختبارات الإباضة عدة نتائج إيجابية مع تكيس المبايض ولا تثبت الإباضة وحدها.', 'اطلبي تقييما مبكرا إذا كانت الدورة متباعدة جدا أو منقطعة.'],
    fr: ['SOPK et suivi de l’ovulation', 'Notez les dates, les symptômes et les changements du cycle sans imposer un modèle de vingt-huit jours.', 'Avec un SOPK, les tests d’ovulation peuvent être positifs plusieurs fois et ne prouvent pas l’ovulation seuls.', 'Demandez une évaluation plus tôt si les règles sont très espacées ou absentes.'],
    tr: ['PCOS ve yumurtlama takibi', 'Döngüyü yirmi sekiz günlük bir kalıba zorlamak yerine adet tarihlerini ve belirtileri kaydedin.', 'PCOS ile yumurtlama testleri birden fazla kez pozitif olabilir ve tek başına yumurtlamayı kanıtlamaz.', 'Adetler çok düzensizse veya yoksa daha erken değerlendirme isteyin.'],
    es: ['SOP y seguimiento de la ovulación', 'Registra fechas, síntomas y cambios sin obligar a tu ciclo a encajar en un modelo de veintiocho días.', 'Con SOP, los test de ovulación pueden dar varios positivos y no confirman la ovulación por sí solos.', 'Pide una evaluación antes si tus reglas son muy espaciadas o han desaparecido.'],
    pt: ['SOP e acompanhamento da ovulação', 'Registre datas, sintomas e mudanças sem obrigar o ciclo a seguir um modelo de vinte e oito dias.', 'Com SOP, testes de ovulação podem dar vários resultados positivos e não confirmam a ovulação sozinhos.', 'Peça uma avaliação mais cedo se as menstruações forem muito espaçadas ou ausentes.']
  },
  'trying-to-conceive/fertility-after-birth-control': {
    fa: ['بازگشت باروری پس از روش‌های پیشگیری', 'بازگشت تخمک‌گذاری و منظم شدن پریود یک چیز نیستند و زمان آن به روش پیشگیری بستگی دارد.', 'پیش از قطع روش، داروها، ویتامین پیش از بارداری و برنامه ثبت پریود را مرور کنید.', 'در صورت درد شدید، خونریزی غیرعادی یا قطع طولانی پریود با متخصص تماس بگیرید.'],
    ar: ['ما المتوقع عند عودة الخصوبة بعد منع الحمل', 'عودة الإباضة وانتظام الدورة ليسا الشيء نفسه، ويختلف التوقيت حسب الوسيلة المستخدمة.', 'راجعي الأدوية وفيتامين ما قبل الحمل وطريقة تسجيل الدورة قبل الإيقاف.', 'اتصلي بالمختص عند الألم الشديد أو النزيف غير المعتاد أو غياب الدورة طويلا.'],
    fr: ['Le retour de la fertilité après une contraception', 'Le retour de l’ovulation et celui de cycles réguliers ne coïncident pas toujours, et dépendent de la méthode.', 'Avant l’arrêt, revoyez les médicaments, la vitamine prénatale et la façon de noter les règles.', 'Consultez en cas de douleur intense, de saignement inhabituel ou d’absence prolongée de règles.'],
    tr: ['Doğum kontrolü sonrası doğurganlığın geri dönmesi', 'Yumurtlamanın başlaması ve döngünün düzenlenmesi aynı şey değildir; süre kullanılan yönteme bağlıdır.', 'Bırakmadan önce ilaçları, gebelik öncesi vitamini ve adet takibini gözden geçirin.', 'Şiddetli ağrı, olağandışı kanama veya uzun süre adet olmaması durumunda görüşün.'],
    es: ['Qué esperar cuando vuelve la fertilidad tras la anticoncepción', 'El regreso de la ovulación y de los ciclos regulares no siempre ocurre a la vez y depende del método.', 'Antes de dejarlo, revisa medicamentos, vitamina prenatal y cómo registrar tus reglas.', 'Consulta si hay dolor intenso, sangrado inusual o ausencia prolongada de la menstruación.'],
    pt: ['O que esperar quando a fertilidade volta após o anticoncepcional', 'O retorno da ovulação e de ciclos regulares não é a mesma coisa e depende do método usado.', 'Antes de parar, revise medicamentos, vitamina pré-natal e como registrar as menstruações.', 'Converse com um profissional diante de dor forte, sangramento incomum ou ausência prolongada de menstruação.']
  },
  'trying-to-conceive/coping-with-negative-pregnancy-test': {
    fa: ['کنار آمدن با تست بارداری منفی', 'اگر تست زود انجام شده باشد، ممکن است برای نتیجه قطعی زود باشد و زمان تست اهمیت دارد.', 'ناراحتی پس از نتیجه منفی واقعی است و نشانه شکست شخصی یا تقصیر شما نیست.', 'یک قدم بعدی انتخاب کنید، مانند تکرار تست، انتظار برای پریود یا صحبت با متخصص.'],
    ar: ['التعامل مع اختبار الحمل السلبي', 'قد يكون الاختبار مبكرا وغير حاسم إذا أُجري قبل موعد الدورة، لذلك يهم توقيته.', 'الحزن بعد النتيجة حقيقي ولا يعني فشلا شخصيا أو خطأ منك.', 'اختاري خطوة تالية واحدة، مثل إعادة الاختبار أو انتظار الدورة أو التحدث مع مختص.'],
    fr: ['Faire face à un test de grossesse négatif', 'Un test réalisé trop tôt peut ne pas être concluant, surtout avant la date prévue des règles.', 'La déception est réelle et ne prouve ni un échec personnel ni une faute de votre part.', 'Choisissez une seule prochaine étape, retester, attendre les règles ou demander un avis.'],
    tr: ['Negatif gebelik testiyle baş etmek', 'Adet tarihinden önce yapılan test erken olabilir ve kesin sonuç vermeyebilir.', 'Sonuçtan duyulan üzüntü gerçektir ve kişisel bir başarısızlık ya da sizin hatanız değildir.', 'Tek bir sonraki adım seçin, testi tekrarlamak, adeti beklemek veya uzmanla konuşmak gibi.'],
    es: ['Cómo afrontar un test de embarazo negativo', 'Si el test se hizo demasiado pronto, puede no ser concluyente, sobre todo antes de la fecha esperada.', 'La decepción es real y no demuestra un fracaso personal ni que hayas hecho algo mal.', 'Elige un siguiente paso, repetir el test, esperar la regla o hablar con un profesional.'],
    pt: ['Como lidar com um teste de gravidez negativo', 'Um teste feito cedo demais pode não ser conclusivo, especialmente antes da data esperada da menstruação.', 'A decepção é real e não significa fracasso pessoal nem que você tenha feito algo errado.', 'Escolha um próximo passo, repetir o teste, esperar a menstruação ou conversar com um profissional.']
  },
  'trying-to-conceive/cycle-planning-week-by-week': {
    fa: ['برنامه‌ریزی کم‌استرس چرخه، هفته به هفته', 'روز اول خونریزی کامل را ثبت کنید و فقط چیزهایی را دنبال کنید که به تصمیم‌گیری کمک می‌کنند.', 'در میانه چرخه از نشانه‌ها و زمان‌بندی گسترده استفاده کنید، نه جست‌وجوی یک روز کامل.', 'برای تست و دوره انتظار از قبل برنامه حمایت عاطفی داشته باشید.'],
    ar: ['روتين بسيط لتخطيط الدورة أسبوعا بعد أسبوع', 'سجلي أول يوم للنزيف الكامل وتابعي فقط المعلومات التي تساعد على اتخاذ القرار.', 'خلال منتصف الدورة استخدمي توقيتا واسعا بدلا من مطاردة يوم مثالي واحد.', 'ضعي مسبقا خطة للدعم خلال الاختبار وفترة الانتظار.'],
    fr: ['Une routine de cycle simple, semaine après semaine', 'Notez le premier jour des règles véritables et ne suivez que les informations utiles à vos décisions.', 'Au milieu du cycle, privilégiez une période large plutôt que la recherche d’un seul jour parfait.', 'Prévoyez à l’avance du soutien pour le test et l’attente.'],
    tr: ['Döngüyü hafta hafta düşük stresle planlamak', 'Tam kanamanın ilk gününü kaydedin ve sadece karar vermenize yarayan bilgileri izleyin.', 'Döngünün ortasında tek bir mükemmel gün aramak yerine daha geniş bir zaman aralığı kullanın.', 'Test ve bekleme dönemi için duygusal desteği önceden planlayın.'],
    es: ['Una rutina sencilla para planificar el ciclo semana a semana', 'Marca el primer día de sangrado completo y sigue solo la información que ayude a decidir.', 'A mitad del ciclo usa una ventana amplia en lugar de perseguir un único día perfecto.', 'Planifica con antelación el apoyo emocional para el test y la espera.'],
    pt: ['Uma rotina simples para planejar o ciclo semana a semana', 'Marque o primeiro dia de sangramento completo e acompanhe apenas o que ajuda nas decisões.', 'No meio do ciclo, use uma janela mais ampla em vez de buscar um único dia perfeito.', 'Planeje antes o apoio emocional para o teste e o período de espera.']
  },

  'pregnancy/healthy-weight-gain': {
    fa: ['افزایش وزن سالم در بارداری با رویکردی فردی', 'محدوده مناسب افزایش وزن به سلامت پیش از بارداری، نوع بارداری و وضعیت فردی شما بستگی دارد.', 'روی وعده‌های منظم و مغذی تمرکز کنید، نه رژیم محدودکننده یا قضاوت درباره بدن.', 'برای حرکت ایمن، علائم هشدار و حمایت تغذیه‌ای از تیم بارداری کمک بگیرید.'],
    ar: ['زيادة الوزن الصحية في الحمل بطريقة فردية', 'النطاق المناسب يعتمد على الصحة قبل الحمل ونوع الحمل ووضعك الخاص.', 'ركزي على وجبات منتظمة ومغذية لا على حمية قاسية أو الحكم على الجسم.', 'اطلبي من فريق الحمل إرشادات الحركة الآمنة وعلامات الخطر والدعم الغذائي.'],
    fr: ['Une prise de poids adaptée pendant la grossesse', 'La fourchette dépend de la santé avant la grossesse, du type de grossesse et de votre situation.', 'Privilégiez des repas nourrissants et réguliers plutôt qu’une restriction ou un jugement du corps.', 'Demandez à l’équipe prénatale des conseils sur le mouvement et le soutien nutritionnel.'],
    tr: ['Gebelikte sağlıklı kilo alımına kişisel yaklaşım', 'Uygun aralık gebelik öncesi sağlığa, gebeliğin özelliklerine ve kişisel durumunuza bağlıdır.', 'Kısıtlayıcı diyet veya beden yargısı yerine düzenli ve besleyici öğünlere odaklanın.', 'Güvenli hareket, uyarı işaretleri ve beslenme desteğini gebelik ekibinizle konuşun.'],
    es: ['Aumento de peso saludable en el embarazo, un enfoque individual', 'El rango adecuado depende de tu salud antes del embarazo, el tipo de embarazo y tu situación.', 'Prioriza comidas regulares y nutritivas en lugar de restringir o juzgar el cuerpo.', 'Pregunta al equipo prenatal por movimiento seguro, señales de alarma y apoyo nutricional.'],
    pt: ['Ganho de peso saudável na gravidez, uma abordagem individual', 'A faixa adequada depende da saúde antes da gravidez, do tipo de gestação e da sua situação.', 'Priorize refeições regulares e nutritivas em vez de restrição ou julgamento do corpo.', 'Converse com a equipe sobre movimento seguro, sinais de alerta e apoio nutricional.']
  },
  'pregnancy/headaches-when-to-call': {
    fa: ['سردرد در بارداری و زمان تماس با پزشک', 'زمان شروع، شدت، محل درد و علائم همراه را ثبت کنید تا الگوی سردرد روشن شود.', 'آب، غذا، استراحت و محیط آرام ممکن است برای سردرد خفیف کمک‌کننده باشد.', 'سردرد شدید یا همراه با تغییر دید، ورم، درد بالای شکم یا فشارخون به بررسی سریع نیاز دارد.'],
    ar: ['الصداع في الحمل ومتى تتصلين', 'سجلي وقت البداية والشدة والمكان والأعراض المصاحبة لفهم نمط الصداع.', 'قد تساعد السوائل والطعام والراحة والغرفة الهادئة في الصداع الخفيف.', 'الصداع الشديد أو المصحوب بتغير الرؤية أو التورم أو ألم أعلى البطن أو ضغط مرتفع يحتاج تقييما سريعا.'],
    fr: ['Maux de tête pendant la grossesse, quand appeler', 'Notez le début, l’intensité, la zone douloureuse et les symptômes associés.', 'Boire, manger, se reposer et s’isoler au calme peuvent aider un mal de tête léger.', 'Un mal intense avec troubles visuels, gonflement, douleur abdominale haute ou tension élevée doit être évalué rapidement.'],
    tr: ['Gebelikte baş ağrısı ve ne zaman aranmalı', 'Başlangıç zamanını, şiddeti, yerini ve eşlik eden belirtileri kaydedin.', 'Hafif baş ağrısında sıvı, yemek, dinlenme ve sessiz bir oda yardımcı olabilir.', 'Görme değişikliği, şişme, üst karın ağrısı veya yüksek tansiyonla birlikte şiddetli ağrı hızlı değerlendirme gerektirir.'],
    es: ['Dolor de cabeza en el embarazo y cuándo llamar', 'Anota cuándo empieza, la intensidad, la zona y los síntomas que lo acompañan.', 'Para un dolor leve pueden ayudar líquidos, comida, descanso y una habitación tranquila.', 'Un dolor intenso con cambios visuales, hinchazón, dolor en la parte alta del abdomen o presión alta requiere valoración rápida.'],
    pt: ['Dor de cabeça na gravidez e quando ligar', 'Anote o início, a intensidade, o local e os sintomas que acompanham a dor.', 'Para uma dor leve, líquidos, comida, descanso e um ambiente tranquilo podem ajudar.', 'Dor forte com alteração da visão, inchaço, dor na parte alta da barriga ou pressão alta precisa de avaliação rápida.']
  },
  'pregnancy/swelling-and-edema': {
    fa: ['ورم و تجمع مایع در بارداری', 'ورم تدریجی هر دو پا شایع است، اما زمان، محل و علائم همراه اهمیت دارند.', 'تغییر وضعیت، بالا گذاشتن پاها، حرکت ملایم و کفش راحت می‌تواند آسایش را بیشتر کند.', 'ورم ناگهانی صورت یا دست، سردرد، تغییر دید یا ورم دردناک یک‌طرفه نیاز به تماس دارد.'],
    ar: ['التورم و احتباس السوائل في الحمل', 'التورم التدريجي في القدمين شائع، لكن الوقت والمكان والأعراض المصاحبة مهمة.', 'تغيير الوضعية ورفع الساقين والحركة اللطيفة والأحذية المريحة قد تزيد الراحة.', 'تورم الوجه أو اليدين المفاجئ أو الصداع أو تغير الرؤية أو تورم ساق مؤلم يحتاج اتصالا.'],
    fr: ['Gonflement et œdème pendant la grossesse', 'Un gonflement progressif des deux pieds est fréquent, mais le moment, la zone et les symptômes comptent.', 'Changer de position, surélever les jambes, bouger doucement et porter des chaussures confortables peut aider.', 'Un gonflement soudain du visage ou des mains, un mal de tête, des troubles visuels ou une jambe douloureuse nécessitent un appel.'],
    tr: ['Gebelikte şişme ve ödem', 'İki ayakta yavaş gelişen şişlik sık görülür, ancak zaman, yer ve eşlik eden belirtiler önemlidir.', 'Pozisyon değiştirmek, bacakları yükseltmek, hafif hareket ve rahat ayakkabı yardımcı olabilir.', 'Yüz veya ellerde ani şişme, baş ağrısı, görme değişikliği ya da tek taraflı ağrılı şişlik için arayın.'],
    es: ['Hinchazón y edema durante el embarazo', 'La hinchazón gradual en ambos pies es frecuente, pero importan el momento, la zona y los síntomas asociados.', 'Cambiar de posición, elevar las piernas, moverte suavemente y usar calzado cómodo puede aliviar.', 'La hinchazón repentina de cara o manos, el dolor de cabeza, los cambios visuales o una pierna dolorosa requieren una llamada.'],
    pt: ['Inchaço e edema na gravidez', 'Inchaço gradual nos dois pés é comum, mas o momento, o local e os sintomas associados importam.', 'Mudar de posição, elevar as pernas, fazer movimentos leves e usar calçados confortáveis pode ajudar.', 'Inchaço súbito no rosto ou nas mãos, dor de cabeça, alteração da visão ou uma perna dolorida exigem contato.']
  },
  'pregnancy/pelvic-floor-preparation': {
    fa: ['آماده‌سازی کف لگن در بارداری', 'کف لگن باید هم قدرت انقباض و هم توانایی رها شدن داشته باشد.', 'تنفس آرام و تمرین ملایم هماهنگی بهتر از فشار زیاد و تکرارهای سخت است.', 'درد، نشت ادرار، یبوست یا احساس فشار را با فیزیوتراپیست سلامت لگن مطرح کنید.'],
    ar: ['تحضير قاع الحوض أثناء الحمل', 'تحتاج عضلات قاع الحوض إلى القوة والقدرة على الاسترخاء معا.', 'التنفس الهادئ والتنسيق اللطيف أفضل من الشد القوي والتكرار المجهد.', 'اذكري الألم أو التسرب أو الإمساك أو الإحساس بالثقل لأخصائي صحة الحوض.'],
    fr: ['Préparer le plancher pelvien pendant la grossesse', 'Le plancher pelvien doit pouvoir se contracter mais aussi se relâcher.', 'La respiration et la coordination douces valent mieux que des contractions forcées.', 'Parlez des fuites, de la constipation, de la douleur ou d’une sensation de pesanteur.'],
    tr: ['Gebelikte pelvik tabanı hazırlamak', 'Pelvik taban kasları hem kasılabilmeli hem de gevşeyebilmelidir.', 'Sakin nefes ve nazik koordinasyon, güçlü ve zorlayıcı sıkmalardan daha yararlıdır.', 'Ağrı, kaçırma, kabızlık veya ağırlık hissini pelvik sağlık uzmanına anlatın.'],
    es: ['Preparar el suelo pélvico durante el embarazo', 'El suelo pélvico necesita fuerza y también capacidad para relajarse.', 'La respiración y la coordinación suave son mejores que apretar con fuerza y agotarse.', 'Habla de pérdidas, estreñimiento, dolor o sensación de peso con un profesional especializado.'],
    pt: ['Preparar o assoalho pélvico durante a gravidez', 'O assoalho pélvico precisa ter força e também conseguir relaxar.', 'Respiração e coordenação suaves são melhores do que contrações fortes e cansativas.', 'Converse sobre perda de urina, prisão de ventre, dor ou sensação de peso.']
  },
  'pregnancy/induction-of-labor-conversation': {
    fa: ['گفت‌وگوی روشن درباره القای زایمان', 'بپرسید چرا القا پیشنهاد شده، چقدر فوری است و اگر صبر کنید چه تغییر می‌کند.', 'مراحل آماده‌سازی دهانه رحم، پایش، کنترل درد و زمان احتمالی را روشن کنید.', 'ترجیحات و رضایت شما باید در طول تغییر برنامه همچنان بخشی از گفت‌وگو باشد.'],
    ar: ['حديث واضح عن تحفيز المخاض', 'اسألي لماذا يُقترح التحفيز ومدى الاستعجال وما الذي قد يتغير إذا انتظرت.', 'افهمي تهيئة عنق الرحم والمراقبة وتسكين الألم والمدة المحتملة.', 'يجب أن تبقى تفضيلاتك وموافقتك جزءا من الحوار عندما تتغير الخطة.'],
    fr: ['Parler clairement du déclenchement du travail', 'Demandez pourquoi il est proposé, dans quel délai et ce qui changerait en attendant.', 'Comprenez la maturation du col, la surveillance, l’analgésie et la durée possible.', 'Vos préférences et votre consentement doivent rester présents si le plan évolue.'],
    tr: ['Doğum indüksiyonu hakkında açık bir görüşme', 'Neden önerildiğini, ne kadar acil olduğunu ve beklerseniz ne değişeceğini sorun.', 'Rahim ağzı hazırlığı, izlem, ağrı kontrolü ve olası süreyi öğrenin.', 'Plan değişirken tercihleriniz ve onamınız görüşmenin parçası olmaya devam etmelidir.'],
    es: ['Cómo hablar claramente sobre la inducción del parto', 'Pregunta por qué se propone, con qué urgencia y qué cambiaría si esperas.', 'Entiende la maduración del cuello, la monitorización, el alivio del dolor y el tiempo posible.', 'Tus preferencias y tu consentimiento deben seguir presentes si cambia el plan.'],
    pt: ['Como conversar com clareza sobre a indução do parto', 'Pergunte por que foi recomendada, qual é a urgência e o que muda se você esperar.', 'Entenda o preparo do colo, a monitorização, o alívio da dor e o tempo possível.', 'Suas preferências e seu consentimento devem continuar na conversa se o plano mudar.']
  },
  'pregnancy/gestational-diabetes-support': {
    fa: ['حمایت عملی پس از تشخیص دیابت بارداری', 'دیابت بارداری نتیجه تغییرات بدن در بارداری است و نشانه تقصیر یا بی‌ارادگی شما نیست.', 'هدف پایش قند، وعده‌های متعادل، حرکت ایمن و دارو در صورت نیاز است.', 'درباره اهداف آزمایش، زمان تماس و پیگیری قند پس از زایمان سؤال کنید.'],
    ar: ['دعم عملي بعد تشخيص سكري الحمل', 'سكري الحمل مرتبط بتغيرات الجسم أثناء الحمل وليس دليلا على خطأ أو ضعف إرادة.', 'تركز الخطة على متابعة السكر والوجبات المتوازنة والحركة الآمنة والدواء عند الحاجة.', 'اسألي عن الأهداف ومتى تتصلين والمتابعة بعد الولادة.'],
    fr: ['Soutien pratique après un dépistage positif du diabète gestationnel', 'Le diabète gestationnel reflète des changements de la grossesse et ne résulte pas d’une faute.', 'La prise en charge associe suivi du glucose, repas équilibrés, mouvement adapté et traitement si nécessaire.', 'Demandez les objectifs, les situations qui nécessitent un appel et le suivi après l’accouchement.'],
    tr: ['Gebelik şekerinde pozitif sonuç sonrası pratik destek', 'Gebelik şekeri vücuttaki gebelik değişiklikleriyle ilgilidir, suç veya irade eksikliği değildir.', 'Plan kan şekeri takibi, dengeli öğünler, güvenli hareket ve gerekirse ilaçtan oluşur.', 'Hedefleri, ne zaman aranacağını ve doğum sonrası takibi sorun.'],
    es: ['Apoyo práctico tras un cribado positivo de diabetes gestacional', 'La diabetes gestacional refleja cambios del embarazo y no es culpa tuya ni falta de voluntad.', 'El plan combina control de glucosa, comidas equilibradas, movimiento seguro y medicación cuando hace falta.', 'Pregunta por los objetivos, cuándo llamar y el seguimiento de glucosa después del parto.'],
    pt: ['Apoio prático após um resultado positivo para diabetes gestacional', 'A diabetes gestacional está ligada às mudanças da gravidez e não é culpa sua nem falta de força de vontade.', 'O cuidado combina controle da glicose, refeições equilibradas, movimento seguro e remédio quando necessário.', 'Pergunte sobre metas, quando ligar e o acompanhamento depois do parto.']
  },
  'pregnancy/breathlessness-in-pregnancy': {
    fa: ['تنگی نفس در بارداری و زمان کمک گرفتن', 'تنگی نفس تدریجی با فعالیت ممکن است رخ دهد، اما زمان شروع و علائم همراه را ثبت کنید.', 'با سرعت آرام، وضعیت نشسته و استراحت‌های کوتاه فعالیت را قابل تحمل‌تر کنید.', 'تنگی نفس ناگهانی یا شدید، درد قفسه سینه، غش یا تغییر رنگ نیاز به کمک فوری دارد.'],
    ar: ['ضيق التنفس في الحمل ومتى تطلبين المساعدة', 'قد يحدث ضيق تدريجي مع الحركة، لكن سجلي وقت البداية والأعراض المصاحبة.', 'اجعلي النشاط أسهل بالسرعة الهادئة والجلوس والاستراحات القصيرة.', 'ضيق التنفس المفاجئ أو الشديد أو ألم الصدر أو الإغماء أو تغير اللون يحتاج مساعدة عاجلة.'],
    fr: ['Essoufflement pendant la grossesse, quand demander de l’aide', 'Un essoufflement progressif à l’effort peut survenir, mais notez le début et les signes associés.', 'Ralentissez, asseyez-vous et faites des pauses pour rendre les activités plus supportables.', 'Un essoufflement soudain ou intense, une douleur thoracique, un malaise ou une coloration anormale sont urgents.'],
    tr: ['Gebelikte nefes darlığı ve ne zaman yardım alınmalı', 'Eforla yavaş gelişen nefes darlığı olabilir, ancak başlangıç ve eşlik eden belirtileri kaydedin.', 'Yavaş tempo, oturmak ve kısa molalarla günlük işleri kolaylaştırın.', 'Ani veya şiddetli nefes darlığı, göğüs ağrısı, bayılma ya da renk değişikliği acildir.'],
    es: ['Falta de aire en el embarazo y cuándo pedir ayuda', 'Puede aparecer falta de aire gradual con el esfuerzo, pero anota el inicio y los síntomas asociados.', 'Baja el ritmo, siéntate y haz pausas para que las actividades sean más llevaderas.', 'La falta de aire repentina o intensa, el dolor de pecho, el desmayo o un cambio de color requieren ayuda urgente.'],
    pt: ['Falta de ar na gravidez e quando pedir ajuda', 'Pode ocorrer falta de ar gradual durante o esforço, mas anote o início e os sintomas associados.', 'Diminua o ritmo, sente-se e faça pausas para tornar as atividades mais fáceis.', 'Falta de ar súbita ou intensa, dor no peito, desmaio ou mudança de cor exigem ajuda urgente.']
  },
  'pregnancy/preparing-for-prenatal-appointments': {
    fa: ['آماده شدن برای ویزیت‌های بارداری', 'یک یادداشت جاری برای علائم، داروها، پرسش‌ها و تاریخ‌ها داشته باشید.', 'دو یا سه سؤال مهم را در اولویت بگذارید و معنی آزمایش و قدم بعدی را بپرسید.', 'با برنامه روشن برای ویزیت بعدی، علائم هشدار و شماره تماس از مطب خارج شوید.'],
    ar: ['الاستعداد لزيارات ما قبل الولادة', 'احتفظي بملاحظة واحدة للأعراض والأدوية والأسئلة والتواريخ.', 'رتبي سؤالين أو ثلاثة مهمين واسألي عن معنى الفحص والخطوة التالية.', 'غادري الزيارة وأنت تعرفين الموعد القادم وعلامات الخطر ورقم الاتصال.'],
    fr: ['Mieux préparer chaque rendez-vous prénatal', 'Gardez une seule note pour les symptômes, les médicaments, les questions et les dates.', 'Priorisez deux ou trois questions et demandez le sens d’un examen et la prochaine étape.', 'Sortez avec le prochain rendez-vous, les signes d’alerte et le bon numéro à appeler.'],
    tr: ['Doğum öncesi randevulara iyi hazırlanmak', 'Belirtiler, ilaçlar, sorular ve tarihler için tek bir not tutun.', 'İki veya üç önemli soruyu öne alın, testin anlamını ve sonraki adımı sorun.', 'Bir sonraki randevu, uyarı işaretleri ve aranacak numarayla ayrılın.'],
    es: ['Cómo aprovechar mejor cada cita prenatal', 'Ten una sola nota para síntomas, medicamentos, preguntas y fechas.', 'Prioriza dos o tres preguntas y pide que expliquen el resultado y el siguiente paso.', 'Sal de la cita con la próxima fecha, señales de alarma y el número adecuado para llamar.'],
    pt: ['Como aproveitar melhor cada consulta pré-natal', 'Mantenha uma única anotação para sintomas, remédios, dúvidas e datas.', 'Priorize duas ou três perguntas e peça o significado do exame e o próximo passo.', 'Saia sabendo a próxima consulta, os sinais de alerta e o número certo para ligar.']
  },

  'newborn/cluster-feeding-and-rest': {
    fa: ['تغذیه مکرر نوزاد و استراحت والدین', 'دوره‌های تغذیه مکرر ممکن است طبیعی باشد و بهتر است الگوی کلی نوزاد را ببینید.', 'همسر و خانواده می‌توانند آب، غذا، تعویض پوشک و زمان استراحت را فراهم کنند.', 'در خواب‌آلودگی شدید، تغذیه ضعیف، کاهش پوشک خیس یا مشکل تنفس کمک بگیرید.'],
    ar: ['الرضعات المتقاربة وراحة الوالدين', 'قد تكون فترات الرضاعة المتكررة طبيعية، والأهم هو نمط الطفل العام.', 'يمكن للشريك والأسرة توفير الماء والطعام وتغيير الحفاض وحماية وقت الراحة.', 'اطلبي المساعدة عند ضعف الرضاعة أو قلة الحفاضات المبللة أو النعاس الشديد أو صعوبة التنفس.'],
    fr: ['Tétées rapprochées et repos dans les premières semaines', 'Les périodes de tétées fréquentes peuvent être normales, il faut regarder l’ensemble du comportement du bébé.', 'Le partenaire et la famille peuvent apporter eau, repas, changes et temps de repos.', 'Demandez de l’aide si le bébé boit mal, mouille moins ses couches, est très somnolent ou respire difficilement.'],
    tr: ['Sık beslenme dönemleri ve dinlenme', 'Sık beslenme dönemleri normal olabilir; bebeğin genel durumuna ve örüntüsüne bakın.', 'Partner ve aile su, yemek, bez değiştirme ve dinlenme zamanı sağlayabilir.', 'Bebek kötü besleniyorsa, az ıslak bez varsa, çok uykuluysa veya nefesi zorlanıyorsa yardım alın.'],
    es: ['Tomas frecuentes y descanso durante las primeras semanas', 'Los periodos de tomas frecuentes pueden ser normales; observa el patrón general del bebé.', 'La pareja y la familia pueden aportar agua, comida, cambios y proteger un rato de descanso.', 'Pide ayuda si el bebé come mal, moja menos pañales, está muy adormilado o respira con dificultad.'],
    pt: ['Mamadas frequentes e descanso nas primeiras semanas', 'Períodos de mamadas frequentes podem ser normais; observe o padrão geral do bebê.', 'Parceiro e família podem oferecer água, comida, trocas e proteger um período de descanso.', 'Peça ajuda se o bebê mamar mal, molhar poucas fraldas, estiver muito sonolento ou respirar com dificuldade.']
  },
  'newborn/paced-bottle-feeding': {
    fa: ['تغذیه با شیشه به روش آهسته و پاسخ‌گو', 'نوزاد را نیمه‌نشسته نگه دارید و شیشه را تقریباً افقی بگیرید تا جریان سریع نباشد.', 'مکیدن، بلع، تنفس و نشانه‌های توقف را ببینید و برای مکث به نوزاد فرصت دهید.', 'هرگز شیشه را تکیه ندهید و برای سرفه مکرر یا تغذیه طولانی کمک بگیرید.'],
    ar: ['الرضاعة بالزجاجة بإيقاع يستجيب للطفل', 'احملي الطفل شبه جالس واجعلي الزجاجة شبه أفقية حتى لا يتدفق الحليب بسرعة.', 'راقبي المص والبلع والتنفس وعلامات التوقف وامنحي الطفل فواصل.', 'لا تسندي الزجاجة أبدا واطلبي المساعدة عند السعال المتكرر أو الرضعات الطويلة.'],
    fr: ['Donner le biberon avec un rythme respectueux', 'Tenez le bébé semi-assis et le biberon presque horizontal pour ralentir le débit.', 'Observez la succion, la déglutition, la respiration et les signes de pause.', 'Ne calez jamais le biberon et demandez un avis si les repas sont longs ou accompagnés de toux.'],
    tr: ['Biberonla bebeğin hızına uyarak beslemek', 'Bebeği yarı dik tutun ve akışın hızlanmaması için biberonu yataya yakın tutun.', 'Emme, yutma, nefes ve durma işaretlerini izleyip aralar verin.', 'Biberonu asla dayamayın; tekrarlayan öksürük veya uzun beslenmelerde destek alın.'],
    es: ['Dar el biberón respetando el ritmo del bebé', 'Sujeta al bebé semierguido y el biberón casi horizontal para que el flujo sea lento.', 'Observa succión, deglución, respiración y señales de pausa.', 'Nunca apoyes el biberón y pide ayuda si hay tos repetida o tomas muy largas.'],
    pt: ['Oferecer mamadeira respeitando o ritmo do bebê', 'Mantenha o bebê semi-erguido e a mamadeira quase horizontal para reduzir o fluxo.', 'Observe sucção, deglutição, respiração e sinais de pausa, oferecendo intervalos.', 'Nunca apoie a mamadeira e peça orientação se houver tosse repetida ou mamadas muito longas.']
  },
  'newborn/babywearing-safety': {
    fa: ['ایمنی استفاده از آغوشی نوزاد', 'آغوشی باید با سن، وزن و توانایی حرکتی نوزاد هماهنگ باشد.', 'صورت نوزاد باید دیده شود، راه تنفس باز باشد و چانه روی سینه نیفتد.', 'در گرما، آشپزی، فعالیت‌های پرخطر یا وقتی نوزاد خوابیده، آغوشی را جایگزین سطح خواب امن نکنید.'],
    ar: ['سلامة حمل الطفل في الحمالة', 'اختاري حمالة تناسب عمر الطفل ووزنه وقدرته على التحكم بالرأس والجذع.', 'يجب أن يكون الوجه واضحا ومجرى التنفس مفتوحا وألا يلامس الذقن الصدر.', 'لا تستخدمي الحمالة للنوم أو أثناء الطبخ أو الأنشطة التي تحمل خطر السقوط أو الحرارة.'],
    fr: ['Portage du nouveau-né en toute sécurité', 'Choisissez un porte-bébé adapté à l’âge, au poids et au contrôle de la tête.', 'Le visage doit rester visible, les voies respiratoires dégagées et le menton éloigné du torse.', 'N’utilisez pas le porte-bébé comme lieu de sommeil ni pour cuisiner ou pratiquer une activité à risque.'],
    tr: ['Bebek taşıma güvenliği', 'Bebeğin yaşı, kilosu ve baş kontrolüne uygun bir taşıyıcı seçin.', 'Yüz görünür, hava yolu açık olmalı ve çene göğse kapanmamalıdır.', 'Taşıyıcıyı uyku, yemek pişirme, aşırı sıcak veya düşme riski olan etkinliklerin yerine kullanmayın.'],
    es: ['Seguridad al llevar al bebé', 'Elige un portabebés adecuado para la edad, el peso y el control de la cabeza.', 'La cara debe estar visible, la vía respiratoria libre y la barbilla separada del pecho.', 'No uses el portabebés para dormir ni al cocinar o hacer actividades con riesgo de caída o calor.'],
    pt: ['Segurança ao carregar o recém-nascido', 'Escolha um carregador adequado à idade, ao peso e ao controle da cabeça.', 'O rosto deve ficar visível, a via aérea livre e o queixo longe do peito.', 'Não use o carregador como local de sono nem ao cozinhar ou fazer atividades com risco de queda ou calor.']
  },
  'newborn/newborn-temperature-and-dressing': {
    fa: ['دمای بدن و لباس پوشاندن به نوزاد', 'به جای سردی دست‌ها، سینه یا پشت گردن را لمس کنید و به رفتار نوزاد توجه داشته باشید.', 'لایه‌های سبک و قابل تنفس و سطح خواب خالی از پتو و وسایل آزاد انتخاب کنید.', 'برای تب، بی‌حالی، تغذیه ضعیف یا احساس گرما و سرمای غیرعادی با پزشک تماس بگیرید.'],
    ar: ['حرارة المولود و اختيار الملابس', 'افحصي الصدر أو مؤخرة الرقبة بدلا من الاعتماد على برودة اليدين، وراقبي سلوك الطفل.', 'اختاري طبقات خفيفة تسمح بالتنفس وسطح نوم خاليا من الأغطية والأشياء السائبة.', 'اتصلي بالطبيب عند الحمى أو الخمول أو ضعف الرضاعة أو الشعور بحرارة أو برودة غير معتادة.'],
    fr: ['Température du nouveau-né et choix des vêtements', 'Touchez le torse ou la nuque plutôt que de vous fier aux mains froides, et observez le comportement.', 'Choisissez des couches respirantes et un espace de sommeil sans couvertures ni objets libres.', 'Appelez en cas de fièvre, de somnolence, de mauvaise alimentation ou de température inhabituelle.'],
    tr: ['Yenidoğanın ısısı ve giydirilmesi', 'Ellerin soğuk olmasına güvenmek yerine göğsü veya enseyi kontrol edin ve davranışı izleyin.', 'Nefes alan hafif katmanlar ve gevşek örtü veya eşya olmayan bir uyku alanı kullanın.', 'Ateş, halsizlik, kötü beslenme veya alışılmadık sıcaklıkta arayın.'],
    es: ['Temperatura del recién nacido y cómo vestirlo', 'Toca el pecho o la nuca en lugar de guiarte por las manos frías y observa su comportamiento.', 'Usa capas transpirables y una superficie de sueño sin mantas ni objetos sueltos.', 'Llama ante fiebre, somnolencia, mala alimentación o una temperatura inusual.'],
    pt: ['Temperatura do recém-nascido e como vestir', 'Toque o peito ou a nuca em vez de confiar nas mãos frias e observe o comportamento.', 'Use camadas respiráveis e um espaço de sono sem cobertores ou objetos soltos.', 'Ligue em caso de febre, sonolência, dificuldade para mamar ou temperatura incomum.']
  },
  'newborn/postpartum-bleeding-basics': {
    fa: ['خونریزی پس از زایمان و زمان تماس', 'خونریزی معمولاً با گذشت روزها کمتر و رنگ آن روشن‌تر می‌شود، اما روند هر فرد متفاوت است.', 'استراحت، آب، غذا و کمک عملی را جدی بگیرید و دستور ترخیص را دنبال کنید.', 'خونریزی ناگهان شدید، لخته‌های بزرگ، تب، درد بیشتر یا سرگیجه نیاز به تماس سریع دارد.'],
    ar: ['أساسيات نزيف ما بعد الولادة ومتى تتصلين', 'يصبح النزيف عادة أخف مع الأيام ويتغير لونه، لكن النمط يختلف بين الأشخاص.', 'اهتمي بالراحة والماء والطعام والمساعدة العملية واتّبعي تعليمات الخروج.', 'النزيف الشديد المفاجئ أو الجلطات الكبيرة أو الحمى أو الألم المتزايد أو الدوخة يحتاج اتصالا سريعا.'],
    fr: ['Les saignements après l’accouchement et quand appeler', 'Les saignements diminuent souvent avec les jours et changent de couleur, mais le rythme varie.', 'Protégez le repos, l’hydratation, les repas et l’aide pratique, et suivez les consignes de sortie.', 'Des saignements soudainement abondants, de gros caillots, de la fièvre, une douleur croissante ou des vertiges nécessitent un appel.'],
    tr: ['Doğum sonrası kanama ve ne zaman aranmalı', 'Kanama genellikle günler içinde azalır ve rengi değişir, ancak süreç kişiden kişiye farklıdır.', 'Dinlenme, su, yemek ve pratik yardımı önemseyin, taburculuk talimatlarını izleyin.', 'Ani yoğun kanama, büyük pıhtılar, ateş, artan ağrı veya baş dönmesi için hızlıca arayın.'],
    es: ['Sangrado posparto y cuándo llamar', 'El sangrado suele disminuir con los días y cambiar de color, pero el ritmo varía.', 'Protege el descanso, la hidratación, la comida y la ayuda práctica, y sigue las instrucciones del alta.', 'El sangrado repentinamente abundante, los coágulos grandes, la fiebre, el dolor creciente o los mareos requieren una llamada rápida.'],
    pt: ['Sangramento pós-parto e quando ligar', 'O sangramento costuma diminuir ao longo dos dias e mudar de cor, mas o ritmo varia.', 'Proteja descanso, hidratação, alimentação e ajuda prática, seguindo as orientações da alta.', 'Sangramento súbito e intenso, coágulos grandes, febre, dor crescente ou tontura exigem contato rápido.']
  },
  'newborn/postpartum-mood-changes': {
    fa: ['تغییرات خلقی پس از زایمان و حمایت از والد', 'اشک، نگرانی، تحریک‌پذیری یا بی‌حسی عاطفی ممکن است در روزهای اول رخ دهد، اما رنج پایدار نیاز به حمایت دارد.', 'از شریک زندگی و خانواده بخواهید زمان خواب، غذا و کارهای عملی را محافظت کنند.', 'افکار آسیب به خود یا نوزاد، بی‌خوابی شدید یا دور شدن از واقعیت نیازمند کمک فوری است.'],
    ar: ['تغيرات المزاج بعد الولادة ودعم الوالد', 'قد تظهر الدموع والقلق والعصبية أو الخدر العاطفي في البداية، لكن الضيق المستمر يحتاج دعما.', 'اطلبي من الشريك والعائلة حماية وقت النوم والطعام والمهام العملية.', 'أفكار إيذاء النفس أو الطفل أو الأرق الشديد أو فقدان الاتصال بالواقع تحتاج مساعدة عاجلة.'],
    fr: ['Les changements d’humeur après l’accouchement', 'Les larmes, l’inquiétude, l’irritabilité ou l’engourdissement peuvent survenir au début, mais une souffrance durable mérite du soutien.', 'Demandez à l’entourage de protéger le sommeil, les repas et les tâches pratiques.', 'Des pensées de faire du mal, une insomnie extrême ou une perte de contact avec la réalité sont urgentes.'],
    tr: ['Doğum sonrası ruh hali değişiklikleri ve destek', 'İlk günlerde ağlama, kaygı, huzursuzluk veya duygusal donukluk olabilir, ancak süren sıkıntı destek gerektirir.', 'Partnerinizden ve ailenizden uyku, yemek ve pratik işleri korumalarını isteyin.', 'Kendine veya bebeğe zarar verme düşüncesi, ağır uykusuzluk veya gerçeklikten kopma acil yardım gerektirir.'],
    es: ['Cambios de ánimo posparto y apoyo para la madre o el padre', 'Al principio pueden aparecer llanto, preocupación, irritabilidad o sensación de vacío, pero el malestar persistente merece apoyo.', 'Pide a la pareja y la familia que protejan el sueño, la comida y las tareas prácticas.', 'Las ideas de hacer daño, el insomnio extremo o perder el contacto con la realidad requieren ayuda urgente.'],
    pt: ['Mudanças de humor pós-parto e apoio para quem cuida', 'Choro, preocupação, irritação ou sensação de vazio podem aparecer no início, mas sofrimento persistente precisa de apoio.', 'Peça à família e ao parceiro que protejam sono, alimentação e tarefas práticas.', 'Pensamentos de machucar a si ou ao bebê, insônia intensa ou perda de contato com a realidade exigem ajuda urgente.']
  },
  'newborn/umbilical-cord-healing': {
    fa: ['ترمیم بند ناف نوزاد', 'دست‌ها را بشویید، بند ناف را تمیز و خشک نگه دارید و پوشک را پایین‌تر ببندید.', 'بند ناف معمولاً خشک و تیره می‌شود و خودش جدا می‌شود؛ آن را نکشید.', 'قرمزی منتشر، گرمی، ترشح بدبو، خونریزی ادامه‌دار یا تب نیاز به تماس فوری دارد.'],
    ar: ['التئام الحبل السري عند المولود', 'اغسلي يديك وأبقي السرة نظيفة وجافة واطوي الحفاض إلى الأسفل.', 'يجف الحبل ويتحول إلى لون داكن ثم يسقط من تلقاء نفسه، فلا تسحبيه.', 'الاحمرار الممتد أو السخونة أو الإفرازات ذات الرائحة أو النزيف المستمر أو الحمى يحتاج اتصالا عاجلا.'],
    fr: ['La cicatrisation du cordon ombilical', 'Lavez vos mains, gardez le cordon propre et sec et rabattez la couche.', 'Le cordon sèche, fonce et tombe seul, il ne faut jamais tirer dessus.', 'Une rougeur qui s’étend, une chaleur, un écoulement malodorant, un saignement persistant ou de la fièvre nécessitent un appel.'],
    tr: ['Göbek bağının iyileşmesi', 'Ellerinizi yıkayın, bölgeyi temiz ve kuru tutun, bezi aşağı katlayın.', 'Göbek bağı kuruyup koyulaşır ve kendiliğinden düşer, çekmeyin.', 'Yayılan kızarıklık, sıcaklık, kötü kokulu akıntı, süren kanama veya ateş için acilen arayın.'],
    es: ['Cómo sana el cordón umbilical', 'Lávate las manos, mantén la zona limpia y seca y dobla el pañal hacia abajo.', 'El cordón se seca, se oscurece y cae solo, no debes tirar de él.', 'El enrojecimiento que se extiende, el calor, el mal olor, el sangrado persistente o la fiebre requieren una llamada urgente.'],
    pt: ['Cicatrização do cordão umbilical', 'Lave as mãos, mantenha a área limpa e seca e dobre a fralda para baixo.', 'O cordão seca, escurece e cai sozinho, portanto não puxe.', 'Vermelhidão que se espalha, calor, secreção com mau cheiro, sangramento persistente ou febre exigem contato urgente.']
  },

  'baby-and-child/early-morning-waking': {
    fa: ['بیدار شدن کودک در صبح زود', 'قبل از تغییر برنامه، زمان خواب، چرت، نور، صدا، گرسنگی و حال کودک را چند روز ثبت کنید.', 'اتاق تاریک، صدای کم و فعالیت آرام تا زمان شروع صبح می‌تواند کمک کند.', 'خرخر، قطع تنفس، درد، خارش یا خواب‌آلودگی روزانه را با پزشک مطرح کنید.'],
    ar: ['الاستيقاظ المبكر عند الطفل', 'سجلي النوم والقيلولة والضوء والضجيج والجوع ومزاج الطفل قبل تغيير الجدول.', 'قد تساعد غرفة مظلمة وصوت منخفض ونشاط هادئ حتى وقت بدء الصباح.', 'ناقشي الشخير أو توقف التنفس أو الألم أو الحكة أو النعاس النهاري مع الطبيب.'],
    fr: ['Les réveils très matinaux chez l’enfant', 'Avant de modifier l’horaire, notez le coucher, les siestes, la lumière, le bruit, la faim et l’humeur.', 'Une chambre sombre, peu de bruit et une activité calme jusqu’au matin peuvent aider.', 'Parlez des ronflements, pauses respiratoires, douleurs, démangeaisons ou somnolence diurne.'],
    tr: ['Çocuklarda sabah çok erken uyanma', 'Programı değiştirmeden önce uyku, gündüz uykusu, ışık, ses, açlık ve ruh halini birkaç gün not edin.', 'Karanlık oda, az ses ve sabah saatine kadar sakin etkinlik yardımcı olabilir.', 'Horlama, nefes durması, ağrı, kaşıntı veya gündüz uykululuğunu doktorla konuşun.'],
    es: ['Despertarse demasiado temprano', 'Antes de cambiar el horario, anota la hora de dormir, siestas, luz, ruido, hambre y estado de ánimo.', 'Una habitación oscura, poco ruido y una actividad tranquila hasta la hora de levantarse pueden ayudar.', 'Comenta con el pediatra ronquidos, pausas al respirar, dolor, picor o sueño diurno.'],
    pt: ['Acordar muito cedo', 'Antes de mudar o horário, anote sono, sonecas, luz, barulho, fome e humor por alguns dias.', 'Um quarto escuro, pouco ruído e uma atividade tranquila até o horário de levantar podem ajudar.', 'Converse sobre ronco, pausas na respiração, dor, coceira ou sonolência durante o dia.']
  },
  'baby-and-child/toddler-balanced-meals': {
    fa: ['وعده‌های متعادل برای نوپا بدون فشار', 'زمان منظم وعده‌ها، یک غذای آشنا کنار غذای جدید و آب بین وعده‌ها ارائه کنید.', 'والد انتخاب می‌کند چه چیزی، چه زمانی و کجا ارائه شود؛ کودک درباره خوردن و مقدار تصمیم می‌گیرد.', 'کودک را نشسته و زیر نظر غذا دهید و برای درد، خفگی، رشد یا محدودیت شدید کمک بگیرید.'],
    ar: ['وجبات متوازنة للطفل الصغير من دون ضغط', 'قدمي الطعام في أوقات متوقعة، مع طعام مألوف إلى جانب الجديد وماء بين الوجبات.', 'يحدد البالغ ماذا ومتى وأين يقدم الطعام، ويقرر الطفل هل يأكل وكم يأكل.', 'أطعمي الطفل جالسا وتحت المراقبة واطلبي المساعدة عند الألم أو الاختناق أو مشاكل النمو.'],
    fr: ['Des repas équilibrés pour les tout-petits sans pression', 'Proposez des repas réguliers, un aliment connu avec un nouvel aliment et de l’eau entre les repas.', 'L’adulte choisit quoi, quand et où proposer, l’enfant décide s’il mange et en quelle quantité.', 'Faites manger l’enfant assis et surveillé, et demandez de l’aide en cas de douleur, étouffement, croissance préoccupante ou restriction sévère.'],
    tr: ['Baskı olmadan dengeli yürümeye başlayan çocuk öğünleri', 'Düzenli öğünler sunun, yeni yiyeceğin yanında tanıdık bir yiyecek ve öğünler arasında su bulundurun.', 'Yetişkin neyin, ne zaman ve nerede sunulacağını seçer; çocuk yiyip yemeyeceğine ve miktara karar verir.', 'Çocuğu oturarak ve gözetim altında besleyin; ağrı, boğulma, büyüme veya ciddi kısıtlamada destek alın.'],
    es: ['Comidas equilibradas para niños pequeños sin presión', 'Ofrece comidas regulares, un alimento conocido junto a uno nuevo y agua entre comidas.', 'El adulto decide qué, cuándo y dónde se ofrece; el niño decide si come y cuánto.', 'Da de comer sentado y supervisado, y busca apoyo por dolor, atragantamiento, crecimiento o restricción intensa.'],
    pt: ['Refeições equilibradas para crianças pequenas sem pressão', 'Ofereça refeições em horários previsíveis, um alimento conhecido junto de um novo e água entre as refeições.', 'O adulto escolhe o que, quando e onde oferecer; a criança decide se come e quanto.', 'Alimente a criança sentada e supervisionada e procure ajuda diante de dor, engasgos, preocupação com crescimento ou restrição intensa.']
  },
  'baby-and-child/allergy-action-plan': {
    fa: ['ساختن برنامه اقدام برای آلرژی کودک', 'ماده حساسیت‌زا، نشانه‌ها، داروی اورژانسی و قدم‌های دقیق را با پزشک مشخص کنید.', 'برنامه و جای دارو را با مهد، مدرسه، خانواده و مراقبان به اشتراک بگذارید.', 'برنامه را تمرین و پس از تغییر وزن، دارو، مدرسه یا واکنش جدید به‌روز کنید.'],
    ar: ['إعداد خطة للتعامل مع حساسية الطفل', 'حددي المادة المحسسة والأعراض والدواء الطارئ والخطوات الدقيقة مع الطبيب.', 'شاركي الخطة ومكان الدواء مع الحضانة والمدرسة والعائلة ومقدمي الرعاية.', 'تدربي على الخطة وحدّثيها بعد تغير الوزن أو الدواء أو المدرسة أو حدوث تفاعل جديد.'],
    fr: ['Construire un plan d’action pour l’allergie', 'Déterminez avec le médecin l’allergène, les symptômes, le traitement d’urgence et les étapes précises.', 'Partagez le plan et le lieu du médicament avec la crèche, l’école et les proches.', 'Répétez les gestes et actualisez le plan après un changement de poids, de traitement, d’école ou une nouvelle réaction.'],
    tr: ['Çocuğun alerji eylem planını hazırlamak', 'Alerjeni, belirtileri, acil ilacı ve izlenecek adımları doktorla netleştirin.', 'Planı ve ilacın yerini kreş, okul, aile ve bakıcılarla paylaşın.', 'Planı uygulayın ve kilo, ilaç, okul değişikliğinden veya yeni reaksiyondan sonra güncelleyin.'],
    es: ['Crear un plan de acción para las alergias', 'Define con el médico el alérgeno, los síntomas, la medicación de emergencia y los pasos exactos.', 'Comparte el plan y el lugar del medicamento con la escuela, la familia y los cuidadores.', 'Practica los pasos y actualiza el plan tras cambios de peso, medicación, escuela o una reacción nueva.'],
    pt: ['Montar um plano de ação para alergias', 'Defina com o médico o alérgeno, os sintomas, o remédio de emergência e os passos exatos.', 'Compartilhe o plano e o local do medicamento com escola, família e cuidadores.', 'Pratique os passos e atualize o plano após mudanças de peso, remédio, escola ou uma nova reação.']
  },
  'baby-and-child/welcoming-new-sibling': {
    fa: ['پذیرش خواهر یا برادر جدید با فشار کمتر', 'با توضیح‌های ساده و واقعی، تغییرات خانه و چیزهایی را که ثابت می‌مانند برای کودک شرح دهید.', 'چند برنامه آشنا برای وقت اختصاصی با کودک بزرگ‌تر حفظ کنید.', 'حسادت یا ناراحتی را نام ببرید، حد ایمنی را نگه دارید و کودک را مسئول مراقبت نکنید.'],
    ar: ['استقبال من طفل جديد بضغط أقل', 'اشرحي التغييرات وما سيبقى ثابتا بكلمات بسيطة وصادقة.', 'حافظي على طقوس قصيرة تمنح الطفل الأكبر وقتا خاصا معك.', 'سمي الغيرة أو الحزن، ضعي حدود الأمان، ولا تحولي الطفل إلى مقدم رعاية.'],
    fr: ['Accueillir un nouveau bébé avec moins de pression', 'Expliquez avec des mots simples ce qui changera et ce qui restera stable.', 'Gardez quelques rituels courts qui offrent à l’aîné un moment privilégié.', 'Nommez la jalousie ou la tristesse, maintenez la limite de sécurité et ne faites pas de l’aîné un soignant.'],
    tr: ['Yeni kardeşi daha az baskıyla karşılamak', 'Nelerin değişeceğini ve nelerin aynı kalacağını basit ve gerçekçi sözlerle anlatın.', 'Büyük çocuğun sizinle özel zaman geçireceği birkaç kısa rutini koruyun.', 'Kıskançlığı veya üzüntüyü adlandırın, güvenlik sınırını koruyun ve çocuğu bakıcı yapmayın.'],
    es: ['Recibir a un nuevo hermano con menos presión', 'Explica con palabras sencillas qué cambiará y qué seguirá igual.', 'Mantén algunos rituales cortos que den al mayor un rato especial contigo.', 'Nombra los celos o la tristeza, mantén los límites de seguridad y no conviertas al mayor en cuidador.'],
    pt: ['Receber um novo irmão com menos pressão', 'Explique com palavras simples o que vai mudar e o que continuará igual.', 'Mantenha alguns rituais curtos que deem à criança mais velha um tempo especial com você.', 'Nomeie ciúme ou tristeza, mantenha limites de segurança e não transforme a criança em cuidadora.']
  },
  'baby-and-child/independent-play': {
    fa: ['بازی مستقل و ساختن تمرکز کودک', 'محیطی امن با چند وسیله باز و خلاقانه آماده کنید و ابتدا نزدیک کودک بمانید.', 'از چند دقیقه شروع کنید و زمان را به‌تدریج زیاد کنید، بدون اینکه کودک را تنها بگذارید.', 'حضور داشته باشید اما اجازه دهید کودک مشکلات ساده را خودش امتحان کند.'],
    ar: ['اللعب المستقل وبناء التركيز والثقة', 'جهزي مساحة آمنة بعدد قليل من المواد المفتوحة وابدئي بالقرب من الطفل.', 'ابدئي بدقائق قليلة وزيدي الوقت تدريجيا مع استمرار الإشراف.', 'كوني متاحة، لكن اتركي الطفل يجرب حل المشكلات البسيطة بنفسه.'],
    fr: ['Le jeu autonome pour développer l’attention', 'Préparez un espace sûr avec quelques objets ouverts et restez proche au début.', 'Commencez par quelques minutes et augmentez progressivement sans laisser l’enfant sans surveillance.', 'Restez disponible tout en le laissant résoudre de petits problèmes seul.'],
    tr: ['Bağımsız oyunla dikkat ve özgüven geliştirmek', 'Az sayıda açık uçlu malzemeyle güvenli bir alan hazırlayın ve başlangıçta yakın durun.', 'Birkaç dakikayla başlayın, gözetimi koruyarak süreyi yavaşça artırın.', 'Hazır olun ama çocuğun basit sorunları kendi denemesine izin verin.'],
    es: ['Juego independiente para desarrollar atención y confianza', 'Prepara un espacio seguro con pocos materiales abiertos y quédate cerca al principio.', 'Empieza con unos minutos y aumenta poco a poco sin dejar al niño sin supervisión.', 'Mantente disponible, pero permite que resuelva pequeños problemas por sí mismo.'],
    pt: ['Brincadeira independente para desenvolver atenção e confiança', 'Prepare um espaço seguro com poucos materiais abertos e fique perto no começo.', 'Comece com alguns minutos e aumente aos poucos mantendo a supervisão.', 'Esteja disponível, mas deixe a criança tentar resolver pequenos problemas sozinha.']
  },
  'baby-and-child/toddler-biting': {
    fa: ['گاز گرفتن کودک نوپا و حدهای آرام', 'کودکان ممکن است به دلیل خستگی، اختلاف، هیجان یا زبان محدود گاز بگیرند.', 'کودکان را جدا کنید، به کودک آسیب‌دیده رسیدگی کنید و با جمله‌ای کوتاه حد را روشن کنید.', 'محرک‌ها را پیدا کنید و کلمه‌های جایگزین مانند کمک، نوبت و توقف را تمرین کنید.'],
    ar: ['عض الطفل الصغير وحدود هادئة', 'قد يعض الطفل بسبب التعب أو الخلاف أو الحماس أو محدودية اللغة.', 'أبعدي الطفلين واهتمي بالمصاب وقولي جملة قصيرة توضح الحد.', 'ابحثي عن المحفزات ودربي الطفل على كلمات بديلة مثل ساعدني ودوري وتوقف.'],
    fr: ['Les morsures du tout-petit, des limites calmes', 'Les morsures peuvent venir de la fatigue, d’un conflit, de l’excitation ou d’un langage encore limité.', 'Séparez les enfants, soignez celui qui a été mordu et posez une limite en une phrase.', 'Repérez les déclencheurs et apprenez des mots de remplacement comme aide, encore et stop.'],
    tr: ['Yürümeye başlayan çocukta ısırma ve sakin sınırlar', 'Çocuk yorgunluk, çatışma, heyecan veya sınırlı dil nedeniyle ısırabilir.', 'Çocukları ayırın, ısırılan çocuğa bakın ve kısa bir cümleyle sınırı belirtin.', 'Tetikleyicileri bulun ve yardım, sıra ve dur gibi alternatif kelimeleri çalışın.'],
    es: ['Mordiscos en niños pequeños, límites tranquilos', 'Los mordiscos pueden aparecer por cansancio, conflicto, emoción o lenguaje limitado.', 'Separa a los niños, atiende al que recibió el mordisco y marca el límite con una frase.', 'Busca los desencadenantes y enseña palabras alternativas como ayuda, turno y para.'],
    pt: ['Mordidas na primeira infância, limites tranquilos', 'A criança pode morder por cansaço, conflito, excitação ou linguagem ainda limitada.', 'Separe as crianças, cuide de quem foi mordido e estabeleça o limite com uma frase curta.', 'Procure os gatilhos e ensine palavras alternativas como ajuda, minha vez e pare.']
  },
  'baby-and-child/family-reading-routine': {
    fa: ['ساختن برنامه مطالعه خانوادگی که پایدار بماند', 'زمانی کوتاه و قابل تکرار انتخاب کنید و اجازه دهید کودک کتاب، صفحه و سرعت را گاهی انتخاب کند.', 'اشاره، حرکت، تکرار و حرف زدن درباره تصاویر همگی بخشی از سوادآموزی هستند.', 'با زبانی بخوانید که برای شما طبیعی و پر از گفت‌وگوی گرم است.'],
    ar: ['بناء روتين قراءة عائلي يستمر', 'اختاري وقتا قصيرا قابلا للتكرار ودعي الطفل يختار الكتاب أو الصفحة أو السرعة أحيانا.', 'الإشارة والحركة والتكرار والحديث عن الصور كلها جزء من التعلم.', 'اقرئي باللغة التي تشعرين فيها بأكبر قدر من الراحة والتواصل.'],
    fr: ['Créer une routine de lecture familiale durable', 'Choisissez un moment court et régulier, et laissez parfois l’enfant choisir le livre, la page et le rythme.', 'Pointer, bouger, répéter et parler des images font aussi partie de l’apprentissage.', 'Lisez dans la langue qui vous permet d’avoir les échanges les plus naturels et chaleureux.'],
    tr: ['Sürdürülebilir bir aile okuma rutini kurmak', 'Kısa ve düzenli bir zaman seçin; çocuğun bazen kitabı, sayfayı ve hızı seçmesine izin verin.', 'İşaret etmek, hareket etmek, tekrar etmek ve resimleri konuşmak öğrenmenin parçasıdır.', 'En doğal ve sıcak sohbeti kurabildiğiniz dilde okuyun.'],
    es: ['Crear una rutina familiar de lectura que dure', 'Elige un momento breve y repetible, y deja que el niño escoja a veces el libro, la página y el ritmo.', 'Señalar, moverse, repetir y hablar de las imágenes también es aprendizaje.', 'Lee en el idioma que te permita conversar con más naturalidad y calidez.'],
    pt: ['Criar uma rotina familiar de leitura que dure', 'Escolha um momento curto e repetível e deixe a criança escolher às vezes o livro, a página e o ritmo.', 'Apontar, se mexer, repetir e falar sobre imagens também são formas de aprender.', 'Leia no idioma que permita a conversa mais natural e acolhedora.']
  }
};

function buildTranslation(language, article) {
  const kit = kits[language];
  const topic = topics[article.slug]?.[language];
  if (!topic) throw new Error(`Missing manual translation for ${article.slug} in ${language}`);
  const title = topic[0];
  const focus = topic.slice(1);
  return {
    title,
    description: kit.description(title),
    intro: kit.intro(title),
    sections: kit.headings.map((heading, index) => ({
      heading,
      paragraphs: [focus[index] || kit.generic[index], kit.generic[(index + 1) % kit.generic.length]]
    })),
    takeaways: kit.takeaways(title),
    faq: kit.faq(title)
  };
}

export const translations = Object.fromEntries(
  Object.keys(kits).map((language) => [
    language,
    Object.fromEntries(newArticles.map((article) => [article.slug, buildTranslation(language, article)]))
  ])
);
