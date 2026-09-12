// The same age-specific guidance is delivered in all seven languages.
const langs = ['en', 'fa', 'ar', 'fr', 'tr', 'es', 'pt'];
const advice = {
  milestones: {
    '0-3': [
      'Notice eye contact, responses to your voice, and early head lifting. Use brief, supervised tummy time while awake; discuss concerns about feeding, alertness, or movement with your care team.',
      'به تماس چشمی، پاسخ به صدای شما و بالا آوردن اولیهٔ سر توجه کنید. در بیداری، زمان کوتاه و تحت نظارت روی شکم داشته باشید؛ نگرانی دربارهٔ تغذیه، هوشیاری یا حرکت را با تیم مراقبت مطرح کنید.',
      'لاحظي التواصل البصري والاستجابة لصوتك ومحاولات رفع الرأس. خصصي وقتًا قصيرًا على البطن أثناء اليقظة وتحت الإشراف؛ ناقشي مخاوف التغذية أو الانتباه أو الحركة مع فريق الرعاية.',
      'Observez le contact visuel, la réaction à votre voix et les premiers relevés de tête. Proposez de courts moments sur le ventre, éveillé et surveillé ; parlez des inquiétudes concernant alimentation, vigilance ou mouvements à votre équipe de soins.',
      'Göz temasını, sesinize tepkileri ve başını kaldırma girişimlerini gözlemleyin. Uyanıkken kısa, gözetimli yüzüstü zaman sunun; beslenme, uyanıklık veya hareket kaygılarını bakım ekibinizle konuşun.',
      'Observa el contacto visual, las respuestas a tu voz y los primeros intentos de levantar la cabeza. Ofrece ratos breves boca abajo, despierto y supervisado; consulta las dudas sobre alimentación, atención o movimiento.',
      'Observe o contato visual, as respostas à sua voz e as primeiras tentativas de levantar a cabeça. Ofereça breves momentos de bruços, acordado e supervisionado; converse sobre dúvidas de alimentação, atenção ou movimento.'
    ],
    '4-6': [
      'Watch for reaching, laughter, rolling attempts, and stronger head control. Try floor play, mirrors, and songs; discuss persistent stiffness, floppiness, or a lack of response to sounds.',
      'به دست دراز کردن، خنده، تلاش برای غلتیدن و کنترل بهتر سر توجه کنید. بازی روی زمین، آینه و آواز را امتحان کنید؛ سفتی یا شلی مداوم بدن یا پاسخ ندادن به صدا را مطرح کنید.',
      'راقبي مد اليد والضحك ومحاولات التدحرج وتحسن التحكم بالرأس. جربي اللعب على الأرض والمرايا والأغاني؛ ناقشي التيبس أو الارتخاء المستمر أو عدم الاستجابة للأصوات.',
      'Observez les gestes pour attraper, les rires, les tentatives de retournement et le contrôle de la tête. Essayez jeux au sol, miroirs et chansons ; signalez une raideur, une mollesse persistante ou l’absence de réaction aux sons.',
      'Uzanma, gülme, dönme girişimleri ve gelişen baş kontrolünü izleyin. Yer oyunları, aynalar ve şarkılar deneyin; süren sertlik, gevşeklik veya seslere tepkisizliği danışın.',
      'Observa los intentos de alcanzar objetos y girarse, la risa y el control de la cabeza. Prueba juegos en el suelo, espejos y canciones; consulta la rigidez, flacidez persistente o falta de respuesta a sonidos.',
      'Observe tentativas de alcançar objetos e rolar, risadas e controle da cabeça. Experimente brincadeiras no chão, espelhos e músicas; converse sobre rigidez, flacidez persistente ou falta de resposta aos sons.'
    ],
    '7-9': [
      'Notice sitting practice, babbling, and moving toys between hands. Try peekaboo and reading; ask for advice if skills are lost or movement seems very one-sided.',
      'به تمرین نشستن، غان‌وغون و جابه‌جایی اسباب‌بازی بین دست‌ها توجه کنید. دالی و کتاب‌خوانی را امتحان کنید؛ در صورت از دست دادن مهارت یا حرکت بسیار یک‌طرفه مشورت بگیرید.',
      'لاحظي محاولات الجلوس والمناغاة ونقل الألعاب بين اليدين. جربي الغميضة والقراءة؛ اطلبي المشورة عند فقدان مهارات أو اقتصار الحركة كثيرًا على جانب واحد.',
      'Observez les essais de position assise, le babillage et le transfert de jouets entre les mains. Jouez à coucou et lisez ; demandez conseil en cas de perte de compétences ou de mouvements très asymétriques.',
      'Oturma denemelerini, hecelemeyi ve oyuncakları eller arasında aktarmayı izleyin. Ce-ee ve kitap okuma deneyin; beceri kaybı veya belirgin tek taraflı hareketlerde danışın.',
      'Observa la práctica de sentarse, el balbuceo y el paso de juguetes entre manos. Prueba cucú y lectura; consulta si pierde habilidades o se mueve mucho más de un lado.',
      'Observe as tentativas de sentar, o balbucio e a troca de brinquedos entre as mãos. Brinque de cadê-achou e leia; procure orientação se houver perda de habilidades ou movimentos muito assimétricos.'
    ],
    '10-12': [
      'Notice gestures, sounds, pulling up, and moving along furniture. Name objects and take turns in play; discuss absent babbling or gestures, or any loss of skills.',
      'به اشاره‌ها، صداها، بلند شدن با تکیه‌گاه و حرکت کنار وسایل توجه کنید. اشیا را نام ببرید و نوبتی بازی کنید؛ نبود غان‌وغون یا اشاره و هرگونه از دست دادن مهارت را مطرح کنید.',
      'لاحظي الإيماءات والأصوات ومحاولات الوقوف والتحرك بمحاذاة الأثاث. سمّي الأشياء وتبادلي الأدوار في اللعب؛ ناقشي غياب المناغاة أو الإيماءات أو فقدان المهارات.',
      'Observez gestes, sons, redressement et déplacements le long des meubles. Nommez les objets et jouez à tour de rôle ; parlez de l’absence de babillage ou de gestes, ou de toute perte de compétences.',
      'Jestleri, sesleri, tutunarak kalkmayı ve mobilya boyunca ilerlemeyi gözlemleyin. Nesneleri adlandırın ve sırayla oynayın; heceleme veya jest eksikliğini ya da beceri kaybını danışın.',
      'Observa gestos, sonidos, intentos de ponerse de pie y desplazarse junto a muebles. Nombra objetos y juega por turnos; consulta la ausencia de balbuceo o gestos, o la pérdida de habilidades.',
      'Observe gestos, sons, tentativas de levantar e andar apoiado nos móveis. Nomeie objetos e alterne turnos na brincadeira; converse sobre ausência de balbucio ou gestos, ou perda de habilidades.'
    ],
    toddler: [
      'Notice walking, words, pointing, imitation, and pretend play. Use books, songs, movement, and simple choices; discuss ongoing concerns about speech, hearing, movement, or behavior.',
      'به راه رفتن، واژه‌ها، اشاره، تقلید و بازی خیالی توجه کنید. کتاب، آواز، حرکت و انتخاب‌های ساده ارائه دهید؛ نگرانی مداوم دربارهٔ گفتار، شنوایی، حرکت یا رفتار را مطرح کنید.',
      'لاحظي المشي والكلمات والإشارة والتقليد واللعب التخيلي. استخدمي الكتب والأغاني والحركة والخيارات البسيطة؛ ناقشي المخاوف المستمرة بشأن الكلام أو السمع أو الحركة أو السلوك.',
      'Observez marche, mots, pointage, imitation et jeux de faire semblant. Proposez livres, chansons, mouvement et choix simples ; discutez des inquiétudes persistantes sur le langage, l’audition, les mouvements ou le comportement.',
      'Yürüme, kelimeler, işaret etme, taklit ve hayali oyunu izleyin. Kitaplar, şarkılar, hareket ve basit seçimler sunun; konuşma, işitme, hareket veya davranışla ilgili süren kaygıları danışın.',
      'Observa la marcha, palabras, gestos de señalar, imitación y juego simbólico. Usa libros, canciones, movimiento y opciones sencillas; consulta las dudas persistentes sobre habla, audición, movimiento o conducta.',
      'Observe caminhada, palavras, apontar, imitação e faz de conta. Use livros, músicas, movimento e escolhas simples; converse sobre preocupações persistentes com fala, audição, movimento ou comportamento.'
    ]
  },
  solids: {
    '0-3': [
      'This age group is not ready for solid foods. Focus on breast milk or infant formula. Most babies start solids around 6 months, when developmentally ready; discuss concerns with your care team.',
      'این گروه سنی برای غذای جامد آماده نیست. بر شیر مادر یا شیرخشک مخصوص شیرخوار تمرکز کنید. بیشتر نوزادان حدود ۶ ماهگی و با آمادگی رشدی شروع می‌کنند؛ نگرانی‌ها را با تیم مراقبت مطرح کنید.',
      'هذه الفئة العمرية غير مستعدة للأطعمة الصلبة. ركزي على حليب الأم أو حليب الرضع الصناعي. يبدأ معظم الأطفال نحو 6 أشهر عند الاستعداد النمائي؛ ناقشي مخاوفك مع فريق الرعاية.',
      'Cette tranche d’âge n’est pas prête pour les aliments solides. Privilégiez le lait maternel ou infantile. La plupart des bébés commencent vers 6 mois, lorsqu’ils sont prêts ; parlez-en à votre équipe de soins.',
      'Bu yaş grubu katı gıdalara hazır değildir. Anne sütüne veya bebek mamasına odaklanın. Çoğu bebek gelişimsel olarak hazır olduğunda yaklaşık 6 ayda başlar; kaygılarınızı bakım ekibinizle görüşün.',
      'Este grupo de edad no está preparado para sólidos. Céntrate en leche materna o fórmula infantil. La mayoría empieza alrededor de los 6 meses, cuando está preparado; consulta tus dudas con el equipo de salud.',
      'Esta faixa etária não está pronta para sólidos. Priorize leite materno ou fórmula infantil. A maioria começa por volta dos 6 meses, quando está pronta; converse sobre dúvidas com a equipe de saúde.'
    ],
    '4-6': [
      'Readiness matters: good head control and sitting with support. Solids usually begin around 6 months. Discuss timing with your care team; choose soft, iron-rich foods and supervise every meal.',
      'آمادگی مهم است: کنترل خوب سر و نشستن با حمایت. غذای کمکی معمولاً حدود ۶ ماهگی شروع می‌شود. زمان شروع را با تیم مراقبت بررسی کنید؛ غذای نرم و آهن‌دار انتخاب کنید و همیشه نظارت داشته باشید.',
      'الاستعداد مهم: التحكم الجيد بالرأس والجلوس مع دعم. تبدأ الأطعمة الصلبة عادة نحو 6 أشهر. ناقشي التوقيت مع فريق الرعاية؛ اختاري أطعمة لينة غنية بالحديد وأشرفي على كل وجبة.',
      'La préparation compte : bon contrôle de la tête et position assise avec soutien. Les solides débutent généralement vers 6 mois. Discutez du moment avec votre équipe de soins ; choisissez des aliments mous riches en fer et surveillez chaque repas.',
      'Hazır olmak önemlidir: iyi baş kontrolü ve destekle oturma. Katı gıdalara genellikle 6 ay civarında başlanır. Zamanlamayı bakım ekibinizle konuşun; yumuşak, demirden zengin gıdalar seçin ve her öğünü gözetin.',
      'Importa estar preparado: buen control de la cabeza y sentarse con apoyo. Los sólidos suelen empezar alrededor de los 6 meses. Consulta el momento; elige alimentos blandos ricos en hierro y supervisa cada comida.',
      'A prontidão importa: bom controle da cabeça e sentar com apoio. Os sólidos geralmente começam por volta dos 6 meses. Converse sobre o momento adequado; escolha alimentos macios ricos em ferro e supervisione cada refeição.'
    ],
    '7-9': [
      'Offer soft finger foods and mashed textures with supervised cup practice. Avoid choking hazards such as whole grapes, nuts, and hard pieces. Exploration matters more than the amount eaten.',
      'غذاهای انگشتی نرم و بافت له‌شده همراه تمرین لیوان تحت نظارت ارائه دهید. از خطرهای خفگی مانند انگور کامل، مغزها و تکه‌های سفت پرهیز کنید. آشنایی با غذا مهم‌تر از مقدار خوردن است.',
      'قدمي أطعمة لينة تؤكل باليد وقوامًا مهروسًا مع التدريب على الكوب تحت الإشراف. تجنبي مخاطر الاختناق مثل العنب الكامل والمكسرات والقطع الصلبة. الاستكشاف أهم من الكمية المأكولة.',
      'Proposez des aliments mous à saisir et des textures écrasées, avec un apprentissage du gobelet surveillé. Évitez raisins entiers, noix et morceaux durs. L’exploration compte plus que la quantité mangée.',
      'Yumuşak parmak gıdalar ve ezilmiş dokularla gözetimli bardak denemeleri sunun. Bütün üzüm, kuruyemiş ve sert parçalar gibi boğulma tehlikelerinden kaçının. Keşfetmek yenilen miktardan önemlidir.',
      'Ofrece alimentos blandos para coger con la mano y texturas machacadas, con práctica del vaso supervisada. Evita uvas enteras, frutos secos y trozos duros. Explorar importa más que la cantidad ingerida.',
      'Ofereça alimentos macios para pegar com a mão e texturas amassadas, com prática do copo supervisionada. Evite uvas inteiras, castanhas e pedaços duros. Explorar importa mais que a quantidade ingerida.'
    ],
    '10-12': [
      'Move toward varied family foods with safe textures while milk remains important. Avoid honey before 12 months and choking hazards; keep added salt and sugar low.',
      'به سوی غذای متنوع خانواده با بافت ایمن بروید؛ شیر همچنان مهم است. پیش از ۱۲ ماهگی عسل ندهید و از خطرهای خفگی پرهیز کنید؛ نمک و شکر افزوده را کم نگه دارید.',
      'انتقلي نحو أطعمة عائلية متنوعة بقوام آمن مع بقاء الحليب مهمًا. تجنبي العسل قبل 12 شهرًا ومخاطر الاختناق؛ قللي الملح والسكر المضافين.',
      'Évoluez vers des repas familiaux variés aux textures sûres, le lait restant important. Évitez le miel avant 12 mois et les risques d’étouffement ; limitez sel et sucre ajoutés.',
      'Süt önemini korurken güvenli dokularda çeşitli aile yemeklerine geçin. 12 aydan önce baldan ve boğulma tehlikelerinden kaçının; eklenen tuz ve şekeri düşük tutun.',
      'Avanza hacia comidas familiares variadas con texturas seguras; la leche sigue siendo importante. Evita miel antes de los 12 meses y riesgos de atragantamiento; limita sal y azúcar añadidos.',
      'Avance para refeições variadas da família com texturas seguras; o leite continua importante. Evite mel antes dos 12 meses e riscos de engasgo; limite sal e açúcar adicionados.'
    ],
    toddler: [
      'Offer predictable meals and snacks with varied food groups. Appetite can change from day to day; look at the pattern across a week and offer foods without pressure.',
      'وعده‌ها و میان‌وعده‌های منظم از گروه‌های غذایی متنوع ارائه دهید. اشتها روزبه‌روز تغییر می‌کند؛ الگوی یک هفته را ببینید و غذا را بدون فشار پیشنهاد کنید.',
      'قدمي وجبات ووجبات خفيفة منتظمة من مجموعات غذائية متنوعة. قد تتغير الشهية يوميًا؛ راقبي النمط خلال أسبوع وقدمي الطعام دون ضغط.',
      'Proposez repas et collations réguliers avec des groupes alimentaires variés. L’appétit varie selon les jours ; observez la semaine et proposez les aliments sans pression.',
      'Çeşitli besin gruplarıyla düzenli öğünler ve ara öğünler sunun. İştah günden güne değişebilir; haftalık örüntüye bakın ve baskı yapmadan yiyecek sunun.',
      'Ofrece comidas y tentempiés regulares con grupos variados de alimentos. El apetito puede cambiar cada día; observa el patrón semanal y ofrece alimentos sin presión.',
      'Ofereça refeições e lanches regulares com grupos alimentares variados. O apetite pode mudar a cada dia; observe o padrão semanal e ofereça alimentos sem pressão.'
    ]
  },
  activities: {
    '0-3': ['Try face-to-face talking, songs, and supervised tummy time while awake. Keep it brief and stop when baby turns away or fusses.','گفت‌وگوی چهره‌به‌چهره، آواز و زمان روی شکم در بیداری و تحت نظارت را امتحان کنید. کوتاه نگه دارید و اگر کودک روی برگرداند یا بی‌قرار شد، توقف کنید.','جربي الحديث وجهًا لوجه والأغاني ووقت البطن أثناء اليقظة وتحت الإشراف. اجعليه قصيرًا وتوقفي إذا أدار الطفل وجهه أو انزعج.','Essayez échanges face à face, chansons et temps sur le ventre, éveillé et surveillé. Faites court et arrêtez si bébé se détourne ou s’agite.','Yüz yüze konuşma, şarkılar ve uyanıkken gözetimli yüzüstü zaman deneyin. Kısa tutun; bebek başını çevirir veya huzursuzlanırsa durun.','Prueba hablar cara a cara, canciones y ratos boca abajo, despierto y supervisado. Hazlo breve y para si se aparta o se inquieta.','Experimente conversar frente a frente, cantar e ficar de bruços, acordado e supervisionado. Faça por pouco tempo e pare se o bebê virar o rosto ou ficar inquieto.'],
    '4-6': ['Try mirror play, reaching for soft toys, songs, and supervised floor play. Follow the baby’s interest and stop before frustration.','بازی با آینه، دست دراز کردن به اسباب‌بازی نرم، آواز و بازی روی زمین تحت نظارت را امتحان کنید. علاقهٔ کودک را دنبال کنید و پیش از کلافگی توقف کنید.','جربي المرآة والوصول لألعاب ناعمة والأغاني واللعب الأرضي تحت الإشراف. اتبعي اهتمام الطفل وتوقفي قبل الإحباط.','Essayez miroirs, jouets souples à attraper, chansons et jeux au sol surveillés. Suivez l’intérêt du bébé et arrêtez avant la frustration.','Ayna oyunları, yumuşak oyuncaklara uzanma, şarkılar ve gözetimli yer oyunları deneyin. Bebeğin ilgisini izleyin ve sıkılmadan durun.','Prueba espejos, alcanzar juguetes blandos, canciones y juego en el suelo supervisado. Sigue su interés y para antes de la frustración.','Experimente espelhos, alcançar brinquedos macios, músicas e brincadeiras no chão supervisionadas. Siga o interesse do bebê e pare antes da frustração.'],
    '7-9': ['Try peekaboo, safe container play, and naming body parts. Provide supervised space to explore and rotate a few simple toys.','دالی، بازی با ظرف ایمن و نام بردن اعضای بدن را امتحان کنید. فضای کاوش تحت نظارت فراهم کنید و چند اسباب‌بازی ساده را نوبتی ارائه دهید.','جربي الغميضة واللعب بأوعية آمنة وتسمية أعضاء الجسم. وفري مساحة للاستكشاف تحت الإشراف وبدلي بين ألعاب بسيطة.','Essayez coucou, contenants sûrs et noms des parties du corps. Offrez un espace d’exploration surveillé et alternez quelques jouets simples.','Ce-ee, güvenli kaplarla oyun ve vücut bölümlerini adlandırmayı deneyin. Gözetimli keşif alanı sağlayın ve birkaç basit oyuncağı dönüşümlü sunun.','Prueba cucú, recipientes seguros y nombrar partes del cuerpo. Ofrece espacio supervisado para explorar y alterna unos pocos juguetes sencillos.','Experimente cadê-achou, recipientes seguros e nomear partes do corpo. Ofereça espaço supervisionado para explorar e alterne poucos brinquedos simples.'],
    '10-12': ['Try stacking cups, rolling a ball, pointing games, and action songs. Narrate everyday routines and give baby time to try again before helping.','چیدن لیوان، غلتاندن توپ، بازی اشاره و آواز حرکتی را امتحان کنید. کارهای روزمره را توضیح دهید و پیش از کمک، به کودک فرصت تلاش دوباره بدهید.','جربي تكديس الأكواب ودحرجة الكرة وألعاب الإشارة وأغاني الحركة. صفي الروتين اليومي وامنحي الطفل وقتًا للمحاولة مجددًا قبل المساعدة.','Essayez gobelets à empiler, balle à rouler, pointage et chansons à gestes. Racontez le quotidien et laissez le bébé réessayer avant de l’aider.','Bardak dizme, top yuvarlama, işaret oyunları ve hareketli şarkılar deneyin. Günlük işleri anlatın ve yardım etmeden önce bebeğe tekrar deneme fırsatı verin.','Prueba apilar vasos, rodar una pelota, señalar y canciones con gestos. Narra las rutinas y dale tiempo para volver a intentarlo antes de ayudar.','Experimente empilhar copos, rolar uma bola, apontar e músicas com gestos. Narre as rotinas e dê tempo para o bebê tentar de novo antes de ajudar.'],
    toddler: ['Try sorting socks, pretend cooking, book hunts, and simple obstacle games with supervision. Offer two simple choices and keep activities short and repeatable.','جور کردن جوراب‌ها، آشپزی خیالی، پیدا کردن کتاب و بازی مانع ساده را تحت نظارت امتحان کنید. دو انتخاب ساده بدهید و فعالیت‌ها را کوتاه و تکرارپذیر نگه دارید.','جربي فرز الجوارب والطبخ التخيلي والبحث عن الكتب وألعاب العوائق البسيطة تحت الإشراف. قدمي خيارين بسيطين واجعلي الأنشطة قصيرة وقابلة للتكرار.','Essayez tri de chaussettes, cuisine imaginaire, chasse aux livres et petits parcours surveillés. Proposez deux choix simples et des activités courtes à répéter.','Gözetim altında çorap eşleştirme, hayali yemek yapma, kitap bulma ve basit engel oyunları deneyin. İki basit seçenek sunun; etkinlikleri kısa ve tekrarlanabilir tutun.','Prueba clasificar calcetines, cocinar de mentira, buscar libros y circuitos sencillos supervisados. Ofrece dos opciones y actividades breves que se puedan repetir.','Experimente separar meias, cozinhar de faz de conta, buscar livros e obstáculos simples com supervisão. Ofereça duas escolhas e atividades curtas que possam ser repetidas.']
  }
};

export function plannerCopy(kind, lang) {
  const index = langs.indexOf(lang);
  if (index < 0 || !advice[kind]) throw new Error(`Missing planner copy: ${kind}/${lang}`);
  return Object.fromEntries(Object.entries(advice[kind]).map(([age, translations]) => [age, translations[index]]));
}
