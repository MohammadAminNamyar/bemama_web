// Public sources checked on 2026-09-13. This records source checks, not clinical review.
export const routineSourceNotes = {
  en: { sleep: 'The AAP source addresses the sleep environment. A timeline does not establish that a sleep space is safe.', feeding: 'The CDC source describes developmental readiness and food preparation; age alone does not establish readiness.' },
  fa: { sleep: 'منبع AAP درباره محیط خواب است. نمودار زمانی نشان نمی‌دهد که محل خواب ایمن است.', feeding: 'منبع CDC آمادگی رشدی و آماده‌سازی غذا را توضیح می‌دهد؛ سن به‌تنهایی آمادگی کودک را مشخص نمی‌کند.' },
  ar: { sleep: 'يتناول مصدر AAP بيئة النوم. لا يثبت المخطط الزمني أن مكان النوم آمن.', feeding: 'يوضح مصدر CDC الاستعداد النمائي وتحضير الطعام؛ العمر وحده لا يثبت استعداد الرضيع.' },
  fr: { sleep: 'La source AAP traite du couchage. Une frise horaire ne permet pas de conclure que le lieu de sommeil est sûr.', feeding: 'La source CDC explique les capacités à observer et la préparation des aliments ; l’âge seul ne détermine pas si le bébé est prêt.' },
  tr: { sleep: 'AAP kaynağı uyku ortamını ele alır. Zaman çizelgesi uyku alanının güvenli olduğunu göstermez.', feeding: 'CDC kaynağı gelişimsel hazır olma belirtilerini ve gıda hazırlığını açıklar; yalnızca yaş hazır olmayı belirlemez.' },
  es: { sleep: 'La fuente AAP aborda el entorno para dormir. Una línea de tiempo no demuestra que ese espacio sea seguro.', feeding: 'La fuente CDC explica la preparación del desarrollo y de los alimentos; la edad por sí sola no determina si el bebé está listo.' },
  pt: { sleep: 'A fonte AAP trata do ambiente de sono. Uma linha do tempo não demonstra que o local de dormir seja seguro.', feeding: 'A fonte CDC explica os sinais de prontidão e o preparo dos alimentos; a idade sozinha não determina se o bebê está pronto.' }
};

export const routineSources = {
  sleep: [
    { organization: 'AASM', title: 'Child Sleep Duration Health Advisory', url: 'https://aasm.org/advocacy/position-statements/child-sleep-duration-health-advisory/' },
    { organization: 'AAP / HealthyChildren', title: 'How to Keep Your Sleeping Baby Safe', url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/A-Parents-Guide-to-Safe-Sleep.aspx' }
  ],
  feeding: [
    { organization: 'NHS', title: 'Your baby’s first solid foods', url: 'https://www.nhs.uk/baby/weaning-and-feeding/babys-first-solid-foods/' },
    { organization: 'CDC', title: 'When, What, and How to Introduce Solid Foods', url: 'https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/when-what-and-how-to-introduce-solid-foods.html' }
  ]
};

export const routineLocalSources = {
  fa: {
    sleep: { organization: 'CDC', title: 'فهرست مراحل رشد کودک به فارسی', url: 'https://www.cdc.gov/act-early/media/pdfs/2025/11/cdc-milestone-checklists-ltsae-farsi.pdf' },
    feeding: { organization: 'یونیسف ایران', title: 'رشد و تغذیه نوزاد در ۶ ماهگی', url: 'https://www.unicef.org/iran/داستان/نقاط-عطف-رشد-و-بالندگی-نوزاد-شما-در-6-ماهگی' }
  },
  ar: {
    sleep: { organization: 'وزارة الصحة السعودية', title: 'سلامة الرضيع', url: 'https://www.moh.gov.sa/healthawareness/educationalcontent/babyhealth/pages/014.aspx' },
    feeding: { organization: 'وزارة الصحة السعودية', title: 'الغذاء التكميلي للرضع', url: 'https://www.moh.gov.sa/healthawareness/educationalcontent/babyhealth/pages/complementary-food-for-infants.aspx' }
  },
  fr: {
    sleep: { organization: 'Naître et grandir (Québec)', title: 'Le sommeil de bébé', url: 'https://naitreetgrandir.com/fr/etape/0_12_mois/soins/fiche.aspx?doc=naitre-grandir-bebe-sommeil-dodo' },
    feeding: { organization: 'Naître et grandir (Québec)', title: 'L’introduction aux aliments complémentaires', url: 'https://naitreetgrandir.com/fr/etape/0_12_mois/alimentation/fiche.aspx?doc=naitre-grandir-bebe-introduction-aliment-solide-complementaire' }
  },
  tr: {
    sleep: { organization: 'Acıbadem', title: '4 Aylık Bebek Gelişimi Nasıl Olur?', url: 'https://www.acibadem.com.tr/saglikli-yasam/4-aylik-bebek-gelisimi/' },
    feeding: { organization: 'T.C. Sağlık Bakanlığı / Dr. Behçet Uz Hastanesi', title: '6–8 aylık bebeklerde beslenme', url: 'https://behcetuzch.saglik.gov.tr/TR-520554/6-8-aylik-bebeklerde-beslenme.html' }
  },
  es: {
    sleep: { organization: 'AAP / HealthyChildren', title: 'Consejos para hacer dormir a su bebé', url: 'https://www.healthychildren.org/Spanish/ages-stages/baby/sleep/Paginas/Getting-Your-Baby-to-Sleep.aspx' },
    feeding: { organization: 'Asociación Española de Pediatría', title: 'Recomendaciones sobre alimentación complementaria', url: 'https://static.aeped.es/recomendaciones_aep_sobre_alimentacio_n_complementaria_nov2018_v3_final_0d83dbbd5a.pdf' }
  },
  pt: {
    sleep: { organization: 'Sociedade Brasileira de Pediatria', title: 'Recomendações para o sono seguro', url: 'https://www.sbp.com.br/bebe-deve-dormir-de-barriga-para-cima-ou-de-lado-pediatras-reforcam-recomendacoes-para-o-sono-seguro/' },
    feeding: { organization: 'Ministério da Saúde do Brasil', title: 'Alimentação saudável', url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/s/saude-da-crianca/primeira-infancia/alimentacao-saudavel' }
  }
};
