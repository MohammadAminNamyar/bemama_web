// Small, source-linked editorial collection. Usage and linguistic origin are distinct.
// Meanings are lexical glosses, not promises about a child's character or health.
const languages = ['en','ar','fa','fr','es','pt','tr'];
const metadata = {
  en:['Baby Name Finder: Meanings & Shortlist','Explore Arabic and Turkish baby names with meanings, browse US name rankings, and save a private shortlist with notes.'],
  ar:['أسماء مواليد ومعانيها وقائمة المفضلة','استكشف أسماء مواليد عربية وتركية ومعانيها، وتصفّح ترتيب الأسماء في الولايات المتحدة، واحفظ قائمة خاصة مع ملاحظاتك.'],
  fa:['انتخاب نام نوزاد، معنی و فهرست دلخواه','نام‌های عربی و ترکی و معنی آن‌ها را ببینید، رتبه‌بندی نام‌ها در آمریکا را مرور کنید و فهرست شخصی را با یادداشت ذخیره کنید.'],
  fr:['Prénoms de bébé : sens et favoris','Explorez des prénoms arabes et turcs et leurs sens, consultez les classements américains et gardez vos favoris avec des notes.'],
  es:['Nombres de bebé: significados y favoritos','Explora nombres árabes y turcos y sus significados, consulta rankings de Estados Unidos y guarda tus favoritos con notas.'],
  pt:['Nomes de bebê: significados e favoritos','Explore nomes árabes e turcos e seus significados, consulte rankings dos Estados Unidos e salve seus favoritos com notas.'],
  tr:['Bebek İsimleri: Anlamları ve Listeniz','Arapça ve Türkçe bebek isimlerini anlamlarıyla inceleyin, ABD sıralamalarına bakın ve özel listenizi notlarla kaydedin.']
};
const records = [
  ['Amin','أمين · امین',['ar','fa'],'ar','amin',['Trustworthy, faithful','أمين، موثوق','امین، قابل اعتماد','Digne de confiance, fidèle','Confiable, fiel','Confiável, fiel','Güvenilir, sadık']],
  ['Amani','أماني',['ar'],'ar','amani',['Wishes','أمنيات','آرزوها','Souhaits','Deseos','Desejos','Dilekler']],
  ['Nur','نور',['ar','tr'],'ar','nur',['Light','نور','نور','Lumière','Luz','Luz','Işık']],
  ['Deniz','',['tr'],'tr','deniz',['Sea','بحر','دریا','Mer','Mar','Mar','Deniz']],
  ['Ayla','',['tr'],'tr','ayla-2',['Halo around the moon','هالة حول القمر','هاله دور ماه','Halo autour de la lune','Halo alrededor de la luna','Halo ao redor da lua','Ayın çevresindeki hale']],
  ['Umut','',['tr'],'tr','umut',['Hope','أمل','امید','Espoir','Esperanza','Esperança','Umut']],
  ['Amal','أمل',['ar'],'ar','amal-1',['Hope, aspiration','أمل، طموح','امید، آرزو','Espoir, aspiration','Esperanza, aspiración','Esperança, aspiração','Umut, arzu']],
  ['Karim','كريم · کریم',['ar','fa'],'ar','karim',['Generous, noble','كريم، نبيل','بخشنده، بزرگوار','Généreux, noble','Generoso, noble','Generoso, nobre','Cömert, soylu']],
  ['Layla','ليلى',['ar'],'ar','layla',['Night','ليل','شب','Nuit','Noche','Noite','Gece']],
  ['Iman','إيمان · ایمان',['ar','fa'],'ar','iman',['Faith','إيمان','ایمان','Foi','Fe','Fé','İman']],
  ['Yasmin','ياسمين',['ar'],'fa','yasmin',['Jasmine','ياسمين','یاسمن','Jasmin','Jazmín','Jasmim','Yasemin']],
  ['Ada','',['tr'],'tr','ada-2',['Island','جزيرة','جزیره','Île','Isla','Ilha','Ada']],
  ['Eren','',['tr'],'tr','eren',['Saint, holy person','وليّ، شخص مقدّس','قدیس، شخص مقدس','Saint, personne sainte','Santo, persona santa','Santo, pessoa santa','Ermiş, kutsal kişi']],
  ['Bahar','بهار',['fa','tr'],'fa','bahar',['Spring','ربيع','بهار','Printemps','Primavera','Primavera','İlkbahar']],
  ['Derya','',['tr'],'fa','derya',['Sea, ocean','بحر، محيط','دریا، اقیانوس','Mer, océan','Mar, océano','Mar, oceano','Deniz, okyanus']],
  ['Selim','',['tr'],'ar','selim',['Turkish form of Salim: safe, sound','صيغة تركية من سليم: سالم، معافى','صورت ترکی سلیم: سالم، بی‌آسیب','Forme turque de Salim : sain, sauf','Forma turca de Salim: sano, a salvo','Forma turca de Salim: são, a salvo','Salim adının Türkçe biçimi: sağlam, esen']]
];
const copy = {
  en:['Arabic and Turkish names with meanings','Explore 16 source-linked names, including names with Persian roots or usage. Search the name, original spelling or meaning. Usage is not the same as origin; this selection is not a popularity ranking. Check the linked entry for pronunciation and variants.','Search names or meanings','Used in','Origin','Meaning and pronunciation source','Arabic','Turkish','Persian'],
  ar:['أسماء عربية وتركية ومعانيها','استكشف 16 اسمًا بمصادر، منها أسماء ذات جذور أو استخدامات فارسية. ابحث بالاسم أو كتابته الأصلية أو معناه. الاستخدام يختلف عن الأصل، وهذه المجموعة ليست ترتيبًا للشيوع. راجع المصدر للنطق والصيغ الأخرى.','ابحث عن اسم أو معنى','الاستخدام','الأصل','مصدر المعنى والنطق','العربية','التركية','الفارسية'],
  fa:['نام‌های عربی و ترکی و معنی آن‌ها','۱۶ نام با منبع، از جمله نام‌هایی با ریشه یا کاربرد فارسی را ببینید. با نام، املای اصلی یا معنی جست‌وجو کنید. کاربرد با ریشه فرق دارد؛ این مجموعه رتبه‌بندی محبوبیت نیست. تلفظ و شکل‌های دیگر را در منبع ببینید.','جست‌وجوی نام یا معنی','کاربرد','ریشه','منبع معنی و تلفظ','عربی','ترکی','فارسی'],
  fr:['Prénoms arabes et turcs et leurs sens','Explorez 16 prénoms sourcés, dont certains ont des racines ou un usage persans. Recherchez un prénom, sa graphie ou son sens. Usage et origine diffèrent : cette sélection ne classe pas la popularité. Consultez la source pour la prononciation et les variantes.','Rechercher un prénom ou un sens','Usage','Origine','Source du sens et de la prononciation','Arabe','Turc','Persan'],
  es:['Nombres árabes y turcos y sus significados','Explora 16 nombres con fuentes, incluidos algunos con raíces o uso persas. Busca por nombre, escritura original o significado. Uso y origen son distintos; esta selección no es un ranking de popularidad. Consulta la fuente para pronunciación y variantes.','Buscar nombres o significados','Uso','Origen','Fuente del significado y la pronunciación','Árabe','Turco','Persa'],
  pt:['Nomes árabes e turcos e seus significados','Explore 16 nomes com fontes, incluindo nomes de origem ou uso persa. Pesquise pelo nome, grafia original ou significado. Uso e origem são diferentes; esta seleção não é um ranking de popularidade. Consulte a fonte para pronúncia e variantes.','Pesquisar nomes ou significados','Uso','Origem','Fonte do significado e da pronúncia','Árabe','Turco','Persa'],
  tr:['Arapça ve Türkçe adlar ve anlamları','Farsça kökenli veya Farsçada da kullanılan adlar dahil, kaynaklı 16 adı inceleyin. Adı, özgün yazımı veya anlamı arayın. Kullanım ile köken farklıdır; bu seçki popülerlik sıralaması değildir. Telaffuz ve farklı biçimler için kaynağa bakın.','Ad veya anlam ara','Kullanım','Köken','Anlam ve telaffuz kaynağı','Arapça','Türkçe','Farsça']
};

export function nameCollection(lang) {
  const c=copy[lang];
  if(!c) throw Error(`Unsupported name locale: ${lang}`);
  const labels={ar:c[6],tr:c[7],fa:c[8]};
  return {
    title:metadata[lang][0],description:metadata[lang][1],
    ui:{title:c[0],help:c[1],search:c[2],usage:c[3],origin:c[4],source:c[5],languages:labels},
    entries:records.map(([name,script,usage,origin,slug,meanings])=>({
      name,script,usage,origin,usageLabel:usage.map(code=>labels[code]).join(' / '),originLabel:labels[origin],
      meaning:meanings[languages.indexOf(lang)],source:`https://www.behindthename.com/name/${slug}`
    }))
  };
}
