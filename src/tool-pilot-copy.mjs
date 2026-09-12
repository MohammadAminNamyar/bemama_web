// UI translations maintain the same task and validation meaning in every locale.
// These are interface strings, not a substitute for the Step 5 keyword research.
const languages = ['en', 'fa', 'ar', 'fr', 'tr', 'es', 'pt'];
const rows = {
  calculationPrivacy: ['Calculator inputs are used on this page and are not saved.','ورودی‌های محاسبه‌گر فقط در این صفحه استفاده می‌شوند و ذخیره نمی‌شوند.','تُستخدم مدخلات الحاسبة في هذه الصفحة ولا تُحفظ.','Les données du calculateur sont utilisées sur cette page et ne sont pas enregistrées.','Hesaplayıcıya girilen bilgiler bu sayfada kullanılır ve kaydedilmez.','Los datos de la calculadora se usan en esta página y no se guardan.','Os dados da calculadora são usados nesta página e não são salvos.'],
  details: ['Your details','اطلاعات شما','بياناتك','Vos informations','Bilgileriniz','Tus datos','Seus dados'],
  result: ['Your estimate','برآورد شما','تقديرك','Votre estimation','Tahmininiz','Tu estimación','Sua estimativa'],
  emptyResult: ['Enter your dates to see an estimate.','برای دیدن برآورد، تاریخ‌ها را وارد کنید.','أدخلي التواريخ لعرض التقدير.','Saisissez vos dates pour obtenir une estimation.','Tahmini görmek için tarihlerinizi girin.','Introduce las fechas para ver una estimación.','Informe as datas para ver uma estimativa.'],
  ovulationAction: ['Estimate fertile days','برآورد روزهای باروری','تقدير أيام الخصوبة','Estimer les jours fertiles','Verimli günleri tahmin et','Estimar días fértiles','Estimar dias férteis'],
  dueDateAction: ['Calculate due date','محاسبه تاریخ زایمان','حساب موعد الولادة','Calculer le terme','Doğum tarihini hesapla','Calcular fecha probable','Calcular data provável'],
  pregnancyWeekAction: ['Calculate pregnancy age','محاسبه سن بارداری','حساب عمر الحمل','Calculer l’âge gestationnel','Gebelik yaşını hesapla','Calcular edad gestacional','Calcular idade gestacional'],
  ageFormat: ['{weeks} weeks, {days} days','{weeks} هفته و {days} روز','{weeks} أسبوعًا و{days} يومًا','{weeks} semaines et {days} jours','{weeks} hafta, {days} gün','{weeks} semanas y {days} días','{weeks} semanas e {days} dias'],
  completedWeeks: ['Completed weeks','هفته‌های کامل‌شده','الأسابيع المكتملة','Semaines révolues','Tamamlanan haftalar','Semanas completas','Semanas completas'],
  required: ['Complete this field.','این بخش را تکمیل کنید.','أكملي هذا الحقل.','Complétez ce champ.','Bu alanı doldurun.','Completa este campo.','Preencha este campo.'],
  pastDate: ['Choose today or an earlier date.','امروز یا تاریخی پیش از آن را انتخاب کنید.','اختاري اليوم أو تاريخًا سابقًا.','Choisissez aujourd’hui ou une date antérieure.','Bugünü veya daha önceki bir tarihi seçin.','Elige hoy o una fecha anterior.','Escolha hoje ou uma data anterior.'],
  cycleRange: ['This estimate supports whole cycle lengths of 20–45 days.','این برآورد از طول چرخهٔ ۲۰ تا ۴۵ روز، به صورت عدد صحیح، پشتیبانی می‌کند.','يدعم هذا التقدير دورات من 20 إلى 45 يومًا بأعداد صحيحة.','Cette estimation accepte des cycles de 20 à 45 jours entiers.','Bu tahmin 20–45 tam günlük döngüleri destekler.','Esta estimación admite ciclos de 20 a 45 días enteros.','Esta estimativa aceita ciclos de 20 a 45 dias inteiros.'],
  lutealRange: ['Enter a whole number from 10 to 18 days.','یک عدد صحیح از ۱۰ تا ۱۸ روز وارد کنید.','أدخلي عددًا صحيحًا من 10 إلى 18 يومًا.','Saisissez un nombre entier de 10 à 18 jours.','10 ile 18 arasında tam gün sayısı girin.','Introduce un número entero de 10 a 18 días.','Informe um número inteiro de 10 a 18 dias.'],
  errors: ['Check the highlighted fields.','بخش‌های مشخص‌شده را بررسی کنید.','راجعي الحقول المحددة.','Vérifiez les champs indiqués.','İşaretli alanları kontrol edin.','Revisa los campos señalados.','Confira os campos indicados.'],
  daysUnit: ['days','روز','يوم','jours','gün','días','dias'],
  saveEntry: ['Save entry','ذخیرهٔ رکورد','حفظ السجل','Enregistrer','Kaydı sakla','Guardar registro','Salvar registro'],
  updateEntry: ['Save changes','ذخیرهٔ تغییرات','حفظ التغييرات','Enregistrer les modifications','Değişiklikleri kaydet','Guardar cambios','Salvar alterações'],
  saved: ['Saved in this browser.','در این مرورگر ذخیره شد.','تم الحفظ في هذا المتصفح.','Enregistré dans ce navigateur.','Bu tarayıcıya kaydedildi.','Guardado en este navegador.','Salvo neste navegador.'],
  edit: ['Edit','ویرایش','تعديل','Modifier','Düzenle','Editar','Editar'],
  remove: ['Remove','حذف','إزالة','Retirer','Kaldır','Quitar','Remover'],
  cancel: ['Cancel editing','لغو ویرایش','إلغاء التعديل','Annuler la modification','Düzenlemeyi iptal et','Cancelar edición','Cancelar edição'],
  undo: ['Undo last removal','بازگردانی آخرین حذف','التراجع عن آخر إزالة','Annuler le dernier retrait','Son kaldırmayı geri al','Deshacer última eliminación','Desfazer última remoção'],
  removed: ['Entry removed. You can undo this below.','رکورد حذف شد. می‌توانید در پایین آن را بازگردانید.','تمت إزالة السجل. يمكنك التراجع أدناه.','Entrée retirée. Vous pouvez annuler ci-dessous.','Kayıt kaldırıldı. Aşağıdan geri alabilirsiniz.','Registro eliminado. Puedes deshacerlo abajo.','Registro removido. Você pode desfazer abaixo.'],
  backup: ['Download backup','دریافت نسخهٔ پشتیبان','تنزيل نسخة احتياطية','Télécharger une sauvegarde','Yedeği indir','Descargar copia de seguridad','Baixar cópia de segurança'],
  history: ['Your history','سوابق شما','سجلك','Votre historique','Geçmişiniz','Tu historial','Seu histórico'],
  emptyLog: ['No entries yet. Start with a date and the details you want to record.','هنوز رکوردی ندارید. با تاریخ و اطلاعاتی که می‌خواهید ثبت کنید شروع کنید.','لا توجد سجلات بعد. ابدئي بتاريخ والتفاصيل التي تريدين تسجيلها.','Aucune entrée. Commencez par une date et les informations à noter.','Henüz kayıt yok. Bir tarih ve kaydetmek istediğiniz bilgilerle başlayın.','Aún no hay registros. Empieza con una fecha y los datos que quieras anotar.','Ainda não há registros. Comece com uma data e os dados que deseja anotar.'],
  count: ['Entries: {count}','رکوردها: {count}','السجلات: {count}','Entrées : {count}','Kayıtlar: {count}','Registros: {count}','Registros: {count}'],
  showMore: ['Show more entries','نمایش رکوردهای بیشتر','عرض المزيد من السجلات','Afficher plus d’entrées','Daha fazla kayıt göster','Mostrar más registros','Mostrar mais registros'],
  chooseUnit: ['Select a unit','انتخاب واحد','اختاري الوحدة','Choisir une unité','Birim seçin','Elige una unidad','Escolha uma unidade'],
  unknownUnit: ['Unit not recorded','واحد ثبت نشده','الوحدة غير مسجلة','Unité non renseignée','Birim kaydedilmemiş','Unidad no registrada','Unidade não registrada'],
  weightUnit: ['Weight unit','واحد وزن','وحدة الوزن','Unité du poids','Ağırlık birimi','Unidad de peso','Unidade de peso'],
  lengthUnit: ['Length unit','واحد قد','وحدة الطول','Unité de taille','Boy birimi','Unidad de longitud','Unidade de comprimento'],
  measurementRequired: ['Add at least one measurement.','حداقل یک اندازه‌گیری وارد کنید.','أضيفي قياسًا واحدًا على الأقل.','Ajoutez au moins une mesure.','En az bir ölçüm ekleyin.','Añade al menos una medida.','Adicione pelo menos uma medida.'],
  positiveNumber: ['Enter a number greater than zero.','عددی بزرگ‌تر از صفر وارد کنید.','أدخلي عددًا أكبر من صفر.','Saisissez un nombre supérieur à zéro.','Sıfırdan büyük bir sayı girin.','Introduce un número mayor que cero.','Informe um número maior que zero.'],
  readFailed: ['Saved records could not be read. Nothing has been overwritten. Check browser storage access before trying again.','رکوردهای ذخیره‌شده خوانده نشدند. چیزی بازنویسی نشده است. پیش از تلاش دوباره، دسترسی ذخیره‌سازی مرورگر را بررسی کنید.','تعذرت قراءة السجلات المحفوظة. لم يتم استبدال أي بيانات. تحققي من الوصول إلى تخزين المتصفح قبل المحاولة مجددًا.','Impossible de lire les données enregistrées. Rien n’a été écrasé. Vérifiez l’accès au stockage du navigateur avant de réessayer.','Kayıtlar okunamadı. Hiçbir verinin üzerine yazılmadı. Yeniden denemeden önce tarayıcı depolama erişimini kontrol edin.','No se pudieron leer los registros. No se sobrescribió nada. Revisa el acceso al almacenamiento del navegador antes de reintentar.','Não foi possível ler os registros. Nada foi sobrescrito. Confira o acesso ao armazenamento do navegador antes de tentar novamente.'],
  writeFailed: ['Not saved. Browser storage may be full or unavailable. Your previous records are unchanged; keep this form open and download a backup.','ذخیره نشد. فضای مرورگر ممکن است پر یا در دسترس نباشد. رکوردهای قبلی تغییر نکرده‌اند؛ فرم را باز نگه دارید و نسخهٔ پشتیبان بگیرید.','لم يتم الحفظ. قد يكون تخزين المتصفح ممتلئًا أو غير متاح. لم تتغير السجلات السابقة؛ أبقي النموذج مفتوحًا ونزّلي نسخة احتياطية.','Non enregistré. Le stockage peut être plein ou indisponible. Les anciens enregistrements sont inchangés ; gardez le formulaire ouvert et téléchargez une sauvegarde.','Kaydedilmedi. Tarayıcı depolaması dolu veya kullanılamıyor olabilir. Önceki kayıtlar değişmedi; formu açık tutun ve yedek indirin.','No se guardó. El almacenamiento puede estar lleno o no disponible. Los registros anteriores siguen intactos; mantén el formulario abierto y descarga una copia.','Não foi salvo. O armazenamento pode estar cheio ou indisponível. Os registros anteriores não mudaram; mantenha o formulário aberto e baixe uma cópia.'],
  conflict: ['Another tab changed this log. Copy any unsaved details, then reload before saving.','این دفتر در برگهٔ دیگری تغییر کرده است. اطلاعات ذخیره‌نشده را کپی کنید و پیش از ذخیره، صفحه را دوباره بارگیری کنید.','تغيّر هذا السجل في علامة تبويب أخرى. انسخي التفاصيل غير المحفوظة ثم أعيدي تحميل الصفحة قبل الحفظ.','Cet historique a changé dans un autre onglet. Copiez les données non enregistrées, puis rechargez avant d’enregistrer.','Bu kayıt başka bir sekmede değişti. Kaydedilmemiş bilgileri kopyalayıp kaydetmeden önce sayfayı yenileyin.','Otra pestaña cambió este historial. Copia los datos sin guardar y recarga antes de guardar.','Outra aba alterou este histórico. Copie os dados não salvos e recarregue antes de salvar.'],
  unknownHelp: ['Older measurements without units stay as entered. Edit them to confirm units before they appear in trends.','اندازه‌های قدیمی بدون واحد همان‌طور که وارد شده‌اند می‌مانند. برای نمایش در نمودار، آن‌ها را ویرایش و واحد را تأیید کنید.','تبقى القياسات القديمة بلا وحدات كما أُدخلت. عدّليها لتأكيد الوحدات قبل ظهورها في الاتجاهات.','Les anciennes mesures sans unité restent inchangées. Confirmez leur unité en les modifiant pour les inclure dans les courbes.','Birimsiz eski ölçümler girildiği gibi kalır. Grafikte görünmeleri için düzenleyip birimlerini doğrulayın.','Las medidas antiguas sin unidad se conservan tal cual. Edítalas para confirmar la unidad e incluirlas en las tendencias.','Medidas antigas sem unidade ficam como foram inseridas. Edite para confirmar a unidade antes de incluí-las nas tendências.'],
  trend: ['Recorded measurements','اندازه‌گیری‌های ثبت‌شده','القياسات المسجلة','Mesures enregistrées','Kaydedilen ölçümler','Medidas registradas','Medidas registradas'],
  trendHelp: ['Your entries over time; not a percentile chart or medical assessment.','رکوردهای شما در گذر زمان؛ این نمودار صدک یا ارزیابی پزشکی نیست.','سجلاتك بمرور الوقت؛ ليست مخطط نسب مئوية أو تقييمًا طبيًا.','Vos mesures au fil du temps ; ni courbe de percentiles ni évaluation médicale.','Zaman içindeki kayıtlarınız; persentil grafiği veya tıbbi değerlendirme değildir.','Tus registros a lo largo del tiempo; no es una gráfica de percentiles ni una evaluación médica.','Seus registros ao longo do tempo; não é um gráfico de percentis nem uma avaliação médica.'],
  trendEmpty: ['Add two dated measurements with confirmed units to see a trend.','دو اندازه‌گیری تاریخ‌دار با واحد مشخص اضافه کنید تا روند را ببینید.','أضيفي قياسين مؤرخين بوحدات مؤكدة لرؤية الاتجاه.','Ajoutez deux mesures datées avec une unité confirmée pour voir une courbe.','Grafik için birimleri doğrulanmış iki tarihli ölçüm ekleyin.','Añade dos medidas con fecha y unidades confirmadas para ver una tendencia.','Adicione duas medidas com data e unidades confirmadas para ver a tendência.']
};

const purpose = {
  ovulation: [
    'Estimate fertile days from the first day of your last period, cycle length, and luteal phase. Calendar estimates cannot confirm ovulation and should not be used for contraception.',
    'روزهای باروری را با روز اول آخرین قاعدگی، طول چرخه و فاز لوتئال برآورد کنید. برآورد تقویمی تخمک‌گذاری را تأیید نمی‌کند و برای پیشگیری از بارداری مناسب نیست.',
    'قدّري أيام الخصوبة باستخدام أول يوم لآخر دورة وطول الدورة والطور الأصفري. التقدير التقويمي لا يؤكد الإباضة ولا يُستخدم لمنع الحمل.',
    'Estimez les jours fertiles à partir du début des dernières règles, du cycle et de la phase lutéale. Ce calcul ne confirme pas l’ovulation et ne doit pas servir de contraception.',
    'Son adetin ilk günü, döngü ve luteal faz uzunluğuyla verimli günleri tahmin edin. Takvim tahminleri yumurtlamayı doğrulamaz ve doğum kontrolü için kullanılmamalıdır.',
    'Estima los días fértiles con el inicio de tu última regla, el ciclo y la fase lútea. El calendario no confirma la ovulación y no debe usarse como anticonceptivo.',
    'Estime os dias férteis com o início da última menstruação, o ciclo e a fase lútea. O calendário não confirma a ovulação e não deve ser usado como contraceptivo.'
  ],
  dueDate: [
    'Estimate your due date and completed pregnancy weeks from your last period. The calculation allows for cycle length; an ultrasound or your care team may revise the date.',
    'تاریخ زایمان و هفته‌های کامل بارداری را از آخرین قاعدگی برآورد کنید. طول چرخه در محاسبه لحاظ می‌شود؛ سونوگرافی یا تیم مراقبت ممکن است تاریخ را اصلاح کند.',
    'قدّري موعد الولادة وأسابيع الحمل المكتملة من آخر دورة. يراعي الحساب طول الدورة؛ وقد يعدّل التصوير بالموجات فوق الصوتية أو فريق الرعاية التاريخ.',
    'Estimez le terme et les semaines révolues depuis vos dernières règles. Le calcul tient compte du cycle ; une échographie ou votre équipe de soins peut réviser la date.',
    'Son adetinizden tahmini doğum tarihini ve tamamlanan gebelik haftalarını hesaplayın. Döngü uzunluğu hesaba katılır; ultrason veya bakım ekibiniz tarihi değiştirebilir.',
    'Estima la fecha probable y las semanas completas desde tu última regla. Se tiene en cuenta el ciclo; una ecografía o tu equipo de salud puede ajustar la fecha.',
    'Estime a data provável e as semanas completas desde a última menstruação. O ciclo é considerado; o ultrassom ou a equipe de saúde pode ajustar a data.'
  ],
  pregnancyWeek: [
    'Enter your estimated due date to see completed weeks and days today. The due date corresponds to 40 weeks and 0 days; use the date agreed with your care team.',
    'تاریخ احتمالی زایمان را وارد کنید تا هفته‌ها و روزهای کامل بارداری امروز را ببینید. روز زایمان برابر با ۴۰ هفته و صفر روز است؛ تاریخ تأییدشده توسط تیم مراقبت را به کار ببرید.',
    'أدخلي موعد الولادة المتوقع لعرض الأسابيع والأيام المكتملة اليوم. يوافق موعد الولادة 40 أسبوعًا و0 أيام؛ استخدمي التاريخ المتفق عليه مع فريق الرعاية.',
    'Saisissez le terme prévu pour voir les semaines et jours révolus aujourd’hui. Le terme correspond à 40 semaines et 0 jour ; utilisez la date convenue avec votre équipe de soins.',
    'Bugünkü tamamlanmış hafta ve günleri görmek için tahmini doğum tarihini girin. Bu tarih 40 hafta 0 güne karşılık gelir; bakım ekibinizle belirlenen tarihi kullanın.',
    'Introduce la fecha probable para ver las semanas y días completos de hoy. Corresponde a 40 semanas y 0 días; usa la fecha acordada con tu equipo de salud.',
    'Informe a data provável para ver as semanas e dias completos hoje. Ela corresponde a 40 semanas e 0 dias; use a data definida com sua equipe de saúde.'
  ],
  growth: [
    'Keep a dated record of weight and length. Choose units for each measurement, edit earlier entries, and download a backup. Records stay in this browser.',
    'وزن و قد را همراه تاریخ ثبت کنید. واحد هر اندازه‌گیری را انتخاب کنید، رکوردهای قبلی را ویرایش کنید و نسخهٔ پشتیبان بگیرید. رکوردها در همین مرورگر می‌مانند.',
    'احتفظي بسجل مؤرخ للوزن والطول. اختاري وحدة كل قياس وعدّلي السجلات السابقة ونزّلي نسخة احتياطية. تبقى السجلات في هذا المتصفح.',
    'Notez le poids et la taille avec leur date. Choisissez les unités, modifiez les anciennes entrées et téléchargez une sauvegarde. Les données restent dans ce navigateur.',
    'Kilo ve boyu tarihleriyle kaydedin. Her ölçümün birimini seçin, eski kayıtları düzenleyin ve yedek indirin. Kayıtlar bu tarayıcıda kalır.',
    'Registra peso y talla con fecha. Elige las unidades, edita registros anteriores y descarga una copia de seguridad. Los datos quedan en este navegador.',
    'Registre peso e comprimento com a data. Escolha as unidades, edite registros anteriores e baixe uma cópia de segurança. Os dados ficam neste navegador.'
  ]
};

export function pilotCopy(lang) {
  const index = languages.indexOf(lang);
  if (index < 0) throw new Error(`Unsupported tool language: ${lang}`);
  return Object.fromEntries(Object.entries(rows).map(([key, values]) => [key, values[index]]));
}

export function pilotPurpose(kind, lang) {
  return purpose[kind]?.[languages.indexOf(lang)];
}
