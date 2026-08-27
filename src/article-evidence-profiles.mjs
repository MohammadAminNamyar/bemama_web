// Reusable evidence profiles for English health articles.
//
// Closely related articles share an authoritative evidence base. Priority
// pages can still override these profiles with fully bespoke evidence notes.

const sources = {
  acogFertilityAwareness: {
    organization: 'ACOG',
    title: 'Fertility Awareness-Based Methods of Family Planning',
    url: 'https://www.acog.org/womens-health/faqs/fertility-awareness-based-methods-of-family-planning'
  },
  acogInfertility: {
    organization: 'ACOG',
    title: 'Evaluating Infertility',
    url: 'https://www.acog.org/womens-health/faqs/evaluating-infertility'
  },
  cdcInfertility: {
    organization: 'CDC',
    title: 'Infertility: Frequently Asked Questions',
    url: 'https://www.cdc.gov/reproductive-health/infertility-faq/index.html'
  },
  cdcPregnancyPlanning: {
    organization: 'CDC',
    title: 'Planning for Pregnancy',
    url: 'https://www.cdc.gov/pregnancy/about/index.html'
  },
  cdcPregnancyMedicine: {
    organization: 'CDC',
    title: 'Medicine and Pregnancy: An Overview',
    url: 'https://www.cdc.gov/medicine-and-pregnancy/index.html'
  },
  cdcAlcoholPregnancy: {
    organization: 'CDC',
    title: 'About Alcohol Use During Pregnancy',
    url: 'https://www.cdc.gov/alcohol-pregnancy/about/index.html'
  },
  acogCaffeine: {
    organization: 'ACOG',
    title: 'Moderate Caffeine Consumption During Pregnancy',
    url: 'https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2010/08/moderate-caffeine-consumption-during-pregnancy'
  },
  acogPcos: {
    organization: 'ACOG',
    title: 'Polycystic Ovary Syndrome (PCOS)',
    url: 'https://www.acog.org/womens-health/faqs/polycystic-ovary-syndrome-pcos'
  },
  acogEndometriosis: {
    organization: 'ACOG',
    title: 'Endometriosis',
    url: 'https://www.acog.org/womens-health/faqs/endometriosis'
  },
  acogBirthControl: {
    organization: 'ACOG',
    title: 'Birth Control',
    url: 'https://www.acog.org/womens-health/faqs/birth-control'
  },
  womensHealthPregnancyTests: {
    organization: 'U.S. Office on Women’s Health',
    title: 'Pregnancy tests',
    url: 'https://womenshealth.gov/a-z-topics/pregnancy-tests'
  },
  fdaHomeTests: {
    organization: 'FDA',
    title: 'How You Can Get the Best Results With Home Use Tests',
    url: 'https://www.fda.gov/medical-devices/home-use-tests/how-you-can-get-best-results-home-use-tests'
  },
  nimhWomenMentalHealth: {
    organization: 'NIMH',
    title: 'Women and Mental Health',
    url: 'https://www.nimh.nih.gov/health/topics/women-and-mental-health'
  },
  acogFetalGrowth: {
    organization: 'ACOG',
    title: 'How Your Fetus Grows During Pregnancy',
    url: 'https://www.acog.org/womens-health/faqs/how-your-fetus-grows-during-pregnancy'
  },
  acogPrenatalCare: {
    organization: 'ACOG',
    title: 'Prenatal Care',
    url: 'https://www.acog.org/womens-health/faqs/prenatal-care'
  },
  acogRoutineTests: {
    organization: 'ACOG',
    title: 'Routine Tests During Pregnancy',
    url: 'https://www.acog.org/womens-health/faqs/routine-tests-during-pregnancy'
  },
  acogUltrasound: {
    organization: 'ACOG',
    title: 'Ultrasound Exams',
    url: 'https://www.acog.org/womens-health/faqs/ultrasound-exams'
  },
  acogNausea: {
    organization: 'ACOG',
    title: 'Morning Sickness: Nausea and Vomiting of Pregnancy',
    url: 'https://www.acog.org/womens-health/faqs/morning-sickness-nausea-and-vomiting-of-pregnancy'
  },
  acogDigestive: {
    organization: 'ACOG',
    title: 'Problems of the Digestive System',
    url: 'https://www.acog.org/womens-health/faqs/problems-of-the-digestive-system'
  },
  acogNutrition: {
    organization: 'ACOG',
    title: 'Healthy Eating During Pregnancy',
    url: 'https://www.acog.org/womens-health/faqs/healthy-eating-during-pregnancy'
  },
  acogWeightGain: {
    organization: 'ACOG',
    title: 'How much weight should I gain during pregnancy?',
    url: 'https://www.acog.org/womens-health/experts-and-stories/ask-acog/how-much-weight-should-i-gain-during-pregnancy'
  },
  acogExercise: {
    organization: 'ACOG',
    title: 'Exercise During Pregnancy',
    url: 'https://www.acog.org/womens-health/faqs/exercise-during-pregnancy'
  },
  acogPreeclampsia: {
    organization: 'ACOG',
    title: 'Preeclampsia and High Blood Pressure During Pregnancy',
    url: 'https://www.acog.org/womens-health/faqs/preeclampsia-and-high-blood-pressure-during-pregnancy'
  },
  acogGestationalDiabetes: {
    organization: 'ACOG',
    title: 'Gestational Diabetes',
    url: 'https://www.acog.org/womens-health/faqs/gestational-diabetes'
  },
  cdcPregnancyVaccines: {
    organization: 'CDC',
    title: 'Vaccines During and After Pregnancy',
    url: 'https://www.cdc.gov/vaccines-pregnancy/recommended-vaccines/index.html'
  },
  acogTravel: {
    organization: 'ACOG',
    title: 'Travel During Pregnancy',
    url: 'https://www.acog.org/womens-health/faqs/travel-during-pregnancy'
  },
  acogFetalWellbeing: {
    organization: 'ACOG',
    title: 'Special Tests for Monitoring Fetal Well-Being',
    url: 'https://www.acog.org/womens-health/faqs/special-tests-for-monitoring-fetal-well-being'
  },
  acogLabor: {
    organization: 'ACOG',
    title: 'How to Tell When Labor Begins',
    url: 'https://www.acog.org/womens-health/faqs/how-to-tell-when-labor-begins'
  },
  acogInduction: {
    organization: 'ACOG',
    title: 'Induction of Labor at 39 Weeks',
    url: 'https://www.acog.org/womens-health/faqs/induction-of-labor-at-39-weeks'
  },
  acogCesarean: {
    organization: 'ACOG',
    title: 'Cesarean Birth',
    url: 'https://www.acog.org/womens-health/faqs/cesarean-birth'
  },
  cdcMaternalWarnings: {
    organization: 'CDC',
    title: 'Urgent Maternal Warning Signs and Symptoms',
    url: 'https://www.cdc.gov/hearher/maternal-warning-signs/index.html'
  },
  acogPostpartumCare: {
    organization: 'ACOG',
    title: 'My Postpartum Care Checklist',
    url: 'https://www.acog.org/womens-health/health-tools/my-postpartum-care-checklist'
  },
  acogPostpartumDepression: {
    organization: 'ACOG',
    title: 'Postpartum Depression',
    url: 'https://www.acog.org/womens-health/faqs/postpartum-depression'
  },
  whoInfantFeeding: {
    organization: 'WHO',
    title: 'Infant and young child feeding',
    url: 'https://www.who.int/news-room/fact-sheets/detail/infant-and-young-child-feeding'
  },
  cdcBreastfeedingBasics: {
    organization: 'CDC',
    title: 'Newborn Breastfeeding Basics',
    url: 'https://www.cdc.gov/infant-toddler-nutrition/breastfeeding/newborn-basics.html'
  },
  cdcMilkStorage: {
    organization: 'CDC',
    title: 'Breast Milk Storage and Preparation',
    url: 'https://www.cdc.gov/breastfeeding/breast-milk-preparation-and-storage/handling-breastmilk.html'
  },
  cdcFormula: {
    organization: 'CDC',
    title: 'Infant Formula Preparation and Storage',
    url: 'https://www.cdc.gov/infant-toddler-nutrition/formula-feeding/preparation-and-storage.html'
  },
  canadaSafeSleep: {
    organization: 'Public Health Agency of Canada',
    title: 'Safe Sleep for Your Baby',
    url: 'https://www.canada.ca/en/public-health/services/publications/healthy-living/safe-sleep-your-baby-brochure.html'
  },
  canadaSleepwear: {
    organization: 'Health Canada',
    title: 'Dressing your baby for sleep',
    url: 'https://www.canada.ca/en/public-health/services/safe-sleep/dressing-baby-sleep.html'
  },
  aapFever: {
    organization: 'American Academy of Pediatrics',
    title: 'Fever and Your Baby',
    url: 'https://www.healthychildren.org/English/health-issues/conditions/fever/Pages/Fever-and-Your-Baby.aspx'
  },
  aapColic: {
    organization: 'American Academy of Pediatrics',
    title: 'Colic Relief Tips for Parents',
    url: 'https://www.healthychildren.org/English/ages-stages/baby/crying-colic/pages/Colic.aspx'
  },
  canadaBabywearing: {
    organization: 'Health Canada',
    title: 'Baby sling and carrier safety',
    url: 'https://www.canada.ca/en/health-canada/services/infant-care/baby-slings-carriers.html'
  },
  cdcMilestones: {
    organization: 'CDC',
    title: 'CDC’s Developmental Milestones',
    url: 'https://www.cdc.gov/act-early/milestones/index.html'
  },
  cdcSolids: {
    organization: 'CDC',
    title: 'When, What, and How to Introduce Solid Foods',
    url: 'https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/when-what-and-how-to-introduce-solid-foods.html'
  },
  aapSolids: {
    organization: 'American Academy of Pediatrics',
    title: 'When Can Babies Start Solid Foods?',
    url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Starting-Solid-Foods.aspx'
  },
  aapAllergens: {
    organization: 'American Academy of Pediatrics',
    title: 'When to Introduce Common Food Allergens to a Baby',
    url: 'https://www.healthychildren.org/English/healthy-living/nutrition/Pages/when-to-introduce-egg-peanut-butter-and-other-common-food-allergens-to-your-baby-food-allergy-prevention-tips.aspx'
  },
  aapToddlerNutrition: {
    organization: 'American Academy of Pediatrics',
    title: 'Feeding & Nutrition Tips: Your 2-Year-Old',
    url: 'https://www.healthychildren.org/English/ages-stages/toddler/nutrition/Pages/feeding-and-nutrition-your-two-year-old.aspx'
  },
  canadaVaccines: {
    organization: 'Public Health Agency of Canada',
    title: 'Vaccines for children: Childhood vaccination schedule',
    url: 'https://www.canada.ca/en/public-health/services/vaccination-children/when-to-vaccinate.html'
  },
  cdcToddlers: {
    organization: 'CDC',
    title: 'Positive Parenting Tips: Toddlers (2–3 years old)',
    url: 'https://www.cdc.gov/child-development/positive-parenting-tips/toddlers-2-3-years.html'
  },
  cdcParenting: {
    organization: 'CDC',
    title: 'Essentials for Parenting Toddlers and Preschoolers',
    url: 'https://www.cdc.gov/parenting-toddlers/about/index.html'
  },
  aapPotty: {
    organization: 'American Academy of Pediatrics',
    title: 'Potty Training',
    url: 'https://www.healthychildren.org/English/ages-stages/toddler/toilet-training/Pages/default.aspx'
  },
  aapSeparationSleep: {
    organization: 'American Academy of Pediatrics',
    title: 'Separation Anxiety & Sleeping Trouble in Young Children',
    url: 'https://www.healthychildren.org/English/healthy-living/sleep/Pages/separation-anxiety-and-sleeping.aspx'
  },
  canadaHomeSafety: {
    organization: 'Public Health Agency of Canada',
    title: 'Make Your Home Safe for Your Child',
    url: 'https://www.canada.ca/en/public-health/services/publications/healthy-living/make-your-home-safe-for-child-nobodys-perfect.html'
  },
  transportCarSeat: {
    organization: 'Transport Canada',
    title: 'Choosing a child car seat or booster seat',
    url: 'https://tc.canada.ca/en/road-transportation/child-car-seat-safety/choosing-child-car-seat-booster-seat'
  }
};

export const evidenceProfiles = {
  preconception: {
    guidance: [
      'Preconception guidance focuses on health history, medicines and supplements, vaccinations, chronic conditions, nutrition, substance use, and any previous pregnancy concerns. Changes are safest when planned with a qualified professional before pregnancy rather than made after a positive test.',
      'For most people who could become pregnant, public-health guidance recommends 400 micrograms of folic acid daily beginning before conception. Individual needs differ, and prescribed medicines or higher-dose supplements should not be changed without professional advice.'
    ],
    bemama: 'Use BeMama to keep cycle dates, medicines, supplements, vaccination questions, and appointment notes together. The record can support a preconception conversation, but it cannot decide whether a medicine or supplement is safe.',
    safety: 'Seek individualized advice before pregnancy if you have a chronic condition, use prescription medicine, had a previous pregnancy complication, or cannot stop alcohol, smoking, or another substance.',
    sources: [sources.cdcPregnancyPlanning, sources.cdcPregnancyMedicine]
  },
  cycle: {
    guidance: [
      'Cycle length and ovulation timing vary, so calendar dates and home fertility signs provide estimates rather than proof. Temperature usually rises after ovulation, cervical mucus may change beforehand, and urine tests detect a hormone surge that suggests ovulation may follow.',
      'Sleep disruption, illness, travel, breastfeeding, hormonal contraception, and irregular cycles can make patterns harder to interpret. Combining observations may provide useful context, but no home method confirms fertility or guarantees pregnancy.'
    ],
    bemama: 'BeMama can place periods, temperatures, cervical mucus, symptoms, and test results on one timeline. Fertile-window dates are educational estimates and must not be used as contraception.',
    safety: 'Contact a healthcare professional for persistently absent, very painful, unusually heavy, or highly irregular periods, or when a medical condition may affect fertility.',
    sources: [sources.acogFertilityAwareness, sources.acogInfertility]
  },
  infertility: {
    guidance: [
      'Fertility evaluation considers both partners and may include cycle history, ovulation, semen analysis, medicines, health conditions, imaging, or other tests. Timing for evaluation depends on age, how long pregnancy has been attempted, cycle regularity, and known reproductive factors.',
      'Earlier advice can be appropriate when periods are absent or very irregular, pelvic disease or cancer treatment may affect fertility, or either partner has a known concern. A specialist determines which tests are useful; home tracking alone cannot diagnose infertility.'
    ],
    bemama: 'Bring a concise BeMama record of cycle dates, test results, symptoms, medicines, and how long you have been trying. It can make the history easier to explain without replacing a clinical evaluation.',
    safety: 'Seek prompt care for severe pelvic pain, very heavy bleeding, or another urgent symptom instead of waiting for a fertility appointment.',
    sources: [sources.acogInfertility, sources.cdcInfertility]
  },
  fertilityConditions: {
    guidance: [
      'PCOS and endometriosis can affect cycles, pain, ovulation, or conception, but their effects differ widely. Diagnosis is based on clinical history and appropriate examination or testing, not on an app pattern or a single symptom.',
      'Treatment and fertility planning depend on symptoms, age, goals, and other health factors. Earlier professional advice is reasonable when cycles are absent or unpredictable, pain interferes with daily life, or pregnancy has not occurred within the interval recommended for your situation.'
    ],
    bemama: 'Use BeMama to document cycle variability, pain, bleeding, tests, and questions for an appointment. Do not use the record to self-diagnose PCOS, endometriosis, or infertility.',
    safety: 'Seek urgent care for sudden severe pelvic pain, fainting, or very heavy bleeding. Routine concerns should be discussed with a qualified reproductive-health professional.',
    sources: [sources.acogPcos, sources.acogEndometriosis, sources.acogInfertility]
  },
  fertilityLifestyle: {
    guidance: [
      'Fertility is influenced by many factors, and no food, supplement, timing trick, or lifestyle routine guarantees conception. A varied eating pattern, appropriate activity, avoiding smoking and drugs, and reviewing alcohol, medicines, and workplace exposures support general preconception health for both partners.',
      'Male fertility can also be affected by age, smoking, heavy alcohol or drug use, certain medicines and treatments, heat exposure, and health conditions. Persistent concerns deserve medical assessment rather than increasingly restrictive diets or unproven supplements.'
    ],
    bemama: 'Use BeMama to note meals, habits, supplements, and questions you want to discuss. The app does not score fertility, semen quality, or whether a particular diet increases the chance of pregnancy.',
    safety: 'Check supplements and major diet changes with a healthcare professional, especially when you take medicine or have a medical condition.',
    sources: [sources.cdcPregnancyPlanning, sources.cdcInfertility]
  },
  ttcSubstances: {
    guidance: [
      'CDC states that there is no known safe amount of alcohol during pregnancy or while trying to become pregnant. Because pregnancy may begin before a test turns positive, avoiding alcohol while trying removes uncertainty about early exposure.',
      'ACOG advises limiting caffeine during pregnancy to less than 200 mg per day. People trying to conceive can discuss their usual intake, medicines, smoking, cannabis, and other substances during preconception care.'
    ],
    bemama: 'BeMama can help you notice caffeine or alcohol patterns and save questions for a clinician. It cannot calculate a safe personal exposure level or assess fetal risk.',
    safety: 'If stopping alcohol or another substance is difficult, contact a healthcare professional or local treatment service for confidential support rather than trying to manage withdrawal alone.',
    sources: [sources.cdcAlcoholPregnancy, sources.acogCaffeine, sources.cdcPregnancyPlanning]
  },
  birthControlReturn: {
    guidance: [
      'Return to ovulation and bleeding patterns after birth control depends on the method and the individual. A first bleed is not always proof of ovulation, and pregnancy can occur before the first recognized period after stopping some methods.',
      'Temporary irregularity can make calendar predictions less reliable. Product-specific questions, delayed return of periods, or symptoms that concern you should be discussed with the clinician who prescribed or removed the method.'
    ],
    bemama: 'Use BeMama to record the date a method ended, bleeding, symptoms, and tests. The app cannot confirm that ovulation has returned or predict how quickly pregnancy will occur.',
    safety: 'Seek care for severe pain, very heavy bleeding, or a possible pregnancy with concerning symptoms. Use contraception until you are ready for pregnancy.',
    sources: [sources.acogBirthControl, sources.acogFertilityAwareness]
  },
  pregnancyTesting: {
    guidance: [
      'Home pregnancy tests detect hCG, and accuracy depends on timing and following the product instructions. Testing very early can produce a negative result even when pregnancy has begun; repeating after the expected period or as directed may be more informative.',
      'Symptoms such as fatigue, breast tenderness, nausea, and a missed period are not specific enough to confirm pregnancy. A positive or unclear result and persistent symptoms deserve appropriate follow-up.'
    ],
    bemama: 'BeMama can record period dates, symptoms, and test dates so you do not have to rely on memory. It does not interpret test lines or confirm a pregnancy.',
    safety: 'Seek urgent care for a positive test with severe one-sided pain, heavy bleeding, shoulder pain, dizziness, or fainting. Do not change medicine based only on a home test without professional advice.',
    sources: [sources.womensHealthPregnancyTests, sources.fdaHomeTests]
  },
  emotionalTtc: {
    guidance: [
      'Trying to conceive can bring repeated uncertainty, disappointment, relationship strain, or intrusive worry. Emotional support is a legitimate part of reproductive care, and persistent anxiety, low mood, sleep disruption, or difficulty functioning deserves professional attention.',
      'Tracking can be helpful when it supports decisions, but it can also become overwhelming. Setting limits on testing and app checking, sharing the workload with a partner, and seeking counselling or peer support are reasonable options.'
    ],
    bemama: 'Use BeMama only as much as it helps: record the essentials, turn off unnecessary reminders, and save questions for appointments. AI-assisted features are not mental-health treatment or crisis services.',
    safety: 'Thoughts of self-harm or feeling unable to stay safe require immediate help from emergency or crisis services and a trusted person.',
    sources: [sources.nimhWomenMentalHealth, sources.acogInfertility]
  },
  sexSelection: {
    guidance: [
      'Timing intercourse around ovulation can affect the chance of conception, but evidence does not support calendar timing, position, diet, or the Shettles method as a reliable way to choose a baby’s sex.',
      'Fertility signs are best used to understand the cycle, not to promise a particular outcome. Claims that guarantee sex selection should be treated cautiously unless they involve regulated clinical genetic testing discussed with a specialist.'
    ],
    bemama: 'Use BeMama to understand cycle timing and record questions, not to predict or select fetal sex.',
    safety: 'Do not use unsafe diets, supplements, douching, or other unproven methods in an attempt to influence conception.',
    sources: [sources.acogFertilityAwareness, sources.acogInfertility]
  },
  fetalDevelopment: {
    guidance: [
      'Pregnancy is dated from the first day of the last menstrual period and is commonly described in weeks and trimesters. ACOG’s week ranges describe typical development, but they are an orientation rather than a test of an individual fetus.',
      'Due dates are estimates, and ultrasound is used for medical reasons to assess gestational age, growth, anatomy, position, and other questions. Only a qualified prenatal professional can interpret findings for a specific pregnancy.'
    ],
    bemama: 'Use BeMama’s week view for education, appointment preparation, and dated notes. It cannot confirm fetal growth, anatomy, heartbeat, or wellbeing.',
    safety: 'Contact your prenatal team for bleeding, severe pain, fluid leakage, reduced movement after movement is established, or any urgent concern instead of relying on a week-by-week article.',
    sources: [sources.acogFetalGrowth, sources.acogUltrasound, sources.cdcMaternalWarnings]
  },
  prenatalCare: {
    guidance: [
      'Prenatal care is individualized rather than a single universal calendar. Visits, laboratory tests, ultrasound, screening choices, and monitoring depend on gestational age, health history, local practice, and concerns that arise.',
      'Screening tests estimate the chance of a condition, while diagnostic tests are used to confirm or exclude specific problems. A prenatal professional can explain what a result means and what choices follow.'
    ],
    bemama: 'Use BeMama to record appointments, test names, instructions, and questions. The educational schedule in the app does not replace the plan from your own doctor or midwife.',
    safety: 'Do not wait for the next scheduled visit when you have an urgent symptom or a significant change in fetal movement.',
    sources: [sources.acogPrenatalCare, sources.acogRoutineTests, sources.acogUltrasound]
  },
  pregnancySymptoms: {
    guidance: [
      'Many pregnancy symptoms are common, but severity, timing, and the effect on eating, drinking, breathing, sleep, or daily function matter. Comfort measures should be low risk and medicines should be checked with a prenatal professional.',
      'A symptom that is severe, sudden, persistent, or accompanied by bleeding, fever, vision changes, chest pain, one-sided swelling, fainting, or reduced fetal movement needs prompt assessment rather than self-treatment.'
    ],
    bemama: 'Record when symptoms begin, what makes them better or worse, and related temperature, food, hydration, or activity in BeMama. The pattern can aid communication but cannot determine whether a symptom is normal.',
    safety: 'Seek urgent care for trouble breathing, chest pain, fainting, severe headache, vision changes, heavy bleeding, severe abdominal pain, fever, or inability to keep fluids down.',
    sources: [sources.acogNausea, sources.acogDigestive, sources.cdcMaternalWarnings]
  },
  pregnancyNutrition: {
    guidance: [
      'Pregnancy nutrition emphasizes a varied eating pattern and appropriate prenatal supplementation rather than eating twice as much. Needs for energy, weight gain, iron, folic acid, and other nutrients differ with prepregnancy health, symptoms, and clinical findings.',
      'Food safety also matters because some infections and exposures carry greater pregnancy risk. Current local guidance, product recalls, and individual advice are more reliable than a static list for a specific food or supplement.'
    ],
    bemama: 'Use BeMama to notice meal, hydration, supplement, symptom, and weight patterns and prepare questions. It does not calculate nutrient adequacy or prescribe a weight target.',
    safety: 'Contact your care team for persistent vomiting, unintentional weight loss, foodborne-illness symptoms, or concerns about anemia, diabetes, or disordered eating.',
    sources: [sources.acogNutrition, sources.acogWeightGain, sources.cdcMaternalWarnings]
  },
  pregnancyActivity: {
    guidance: [
      'Regular activity is generally safe in uncomplicated pregnancy when adapted to fitness, symptoms, balance, and prenatal advice. ACOG’s general target is at least 150 minutes of moderate aerobic activity per week for eligible pregnant people.',
      'Pregnancy changes joints, balance, temperature regulation, breathing, and the pelvic floor. Activities with fall, impact, overheating, or diving risk require caution, and pain or pressure should guide modification and professional assessment.'
    ],
    bemama: 'Use BeMama to record activity, duration, symptoms, and recovery for discussion with your care team. It cannot assess exercise intensity, pelvic-floor function, or fetal wellbeing.',
    safety: 'Stop activity and seek advice for bleeding, fluid leakage, painful regular contractions, chest pain, dizziness, calf swelling, unusual breathlessness, or reduced fetal movement.',
    sources: [sources.acogExercise, sources.cdcMaternalWarnings]
  },
  preeclampsia: {
    guidance: [
      'Preeclampsia is a serious blood-pressure disorder that usually develops after 20 weeks and can also occur after birth. Diagnosis depends on properly measured blood pressure and clinical assessment, not symptoms or a single home reading alone.',
      'Severe headache, vision changes, upper abdominal pain, sudden swelling of the face or hands, trouble breathing, or a strong sense that something is wrong require prompt contact with maternity care.'
    ],
    bemama: 'BeMama can store readings taken with a validated device and the time symptoms began. It does not validate the cuff, diagnose preeclampsia, or decide whether a reading is safe.',
    safety: 'Follow your maternity team’s thresholds. Seek urgent care for severe readings or warning symptoms, including after delivery.',
    sources: [sources.acogPreeclampsia, sources.cdcMaternalWarnings]
  },
  gestationalDiabetes: {
    guidance: [
      'Gestational diabetes is high blood glucose first recognized during pregnancy. Screening and diagnosis use specific clinical tests; a positive screening result may require a follow-up diagnostic test.',
      'When gestational diabetes is diagnosed, individualized nutrition, activity, glucose monitoring, medicine when needed, fetal monitoring, and postpartum follow-up can reduce risk. Targets should come from the treating team.'
    ],
    bemama: 'Use BeMama to organize meals, activity, appointments, and the instructions you receive. It is not a glucose meter and does not calculate insulin or medication doses.',
    safety: 'Contact your clinical team for readings outside your prescribed range, illness that affects eating or drinking, reduced fetal movement, or symptoms of high blood pressure.',
    sources: [sources.acogGestationalDiabetes, sources.acogPreeclampsia]
  },
  pregnancyPrevention: {
    guidance: [
      'Vaccines and medicines in pregnancy are chosen by weighing the risks of infection or untreated illness against the known information about a product. Recommended vaccines vary by pregnancy stage, season, location, and health history.',
      'Do not start, stop, or change a prescription, over-the-counter medicine, herbal product, or supplement solely because of an online list. Product names and formulations can differ, and individualized review matters.'
    ],
    bemama: 'Use BeMama to keep a current medicine and vaccination list and save questions for a pharmacist or prenatal professional. The app does not verify interactions or safety.',
    safety: 'Seek immediate care for a severe allergic reaction, trouble breathing, facial swelling, collapse, or another emergency. Contact the prescriber before stopping essential medicine.',
    sources: [sources.cdcPregnancyVaccines, sources.cdcPregnancyMedicine]
  },
  travelWork: {
    guidance: [
      'Travel and work plans during pregnancy depend on gestational age, complications, distance from care, infection risks, prolonged sitting, physical demands, and employer or carrier requirements. A prenatal professional can identify reasons to modify a plan.',
      'For longer travel, regular movement, hydration, correct seat-belt use, destination-specific advice, and access to medical records are practical safeguards. Policies and legal leave entitlements vary by location and employer.'
    ],
    bemama: 'Use BeMama to carry appointment dates, due-date information, medicines, and questions. It cannot determine fitness to travel or provide employment-law advice.',
    safety: 'Do not travel against medical advice, and seek urgent care for bleeding, fluid leakage, contractions, chest pain, one-sided leg swelling, or trouble breathing.',
    sources: [sources.acogTravel, sources.cdcMaternalWarnings]
  },
  fetalMovement: {
    guidance: [
      'Fetal movement patterns become meaningful after movement is established, but there is no single pattern that fits every pregnancy. A prenatal professional may recommend a specific movement-counting method based on the situation.',
      'A noticeable reduction or change from the baby’s usual activity deserves prompt contact with maternity care. A completed count or app total cannot prove fetal wellbeing.'
    ],
    bemama: 'BeMama can time and record movement observations exactly as your care team instructs. Do not repeat counts for hours or wait for the app to reassure you when movement is reduced.',
    safety: 'Contact your maternity unit immediately for less movement than usual or the threshold provided by your care team.',
    sources: [sources.acogFetalWellbeing, sources.cdcMaternalWarnings]
  },
  laborBirth: {
    guidance: [
      'Birth preferences are most useful as a flexible conversation about priorities, pain relief, support, newborn care, and what may change if safety concerns arise. Labor signs and the timing for hospital assessment should follow instructions from the local maternity service.',
      'Induction and cesarean birth are clinical decisions with benefits, risks, and alternatives that depend on gestational age and the health of the pregnant person and fetus. Ask what is recommended, why, what alternatives exist, and what to expect during recovery.'
    ],
    bemama: 'Use BeMama to prepare questions, preferences, hospital details, and the instructions your maternity team provides. It cannot diagnose labor or determine the safest mode or timing of birth.',
    safety: 'Contact maternity care for regular painful contractions as instructed, ruptured membranes, bleeding, reduced fetal movement, severe pain, or any urgent concern.',
    sources: [sources.acogLabor, sources.acogInduction, sources.acogCesarean]
  },
  postpartumPlanning: {
    guidance: [
      'Postpartum care includes physical recovery, mood, sleep, feeding, contraception, chronic conditions, and practical support—not only a single six-week visit. Planning help, follow-up, transport, meals, and warning-sign awareness before birth can reduce avoidable strain.',
      'Recovery differs after vaginal and cesarean birth. Heavy bleeding, severe pain, wound concerns, high blood pressure symptoms, and mental-health changes require timely assessment.'
    ],
    bemama: 'Use BeMama to organize support contacts, appointments, medicines, feeding questions, and recovery notes. The app is not a postpartum triage or crisis service.',
    safety: 'Seek urgent care for heavy bleeding, chest pain, trouble breathing, severe headache, fever, seizures, thoughts of harm, or another urgent maternal warning sign.',
    sources: [sources.acogPostpartumCare, sources.acogPostpartumDepression, sources.cdcMaternalWarnings]
  },
  newbornCare: {
    guidance: [
      'Newborn care centres on frequent responsive feeding, safe sleep, warmth without overheating, hygiene, and timely follow-up. Clinicians assess the whole picture—including alertness, feeding effectiveness, growth, urine and stool output, colour, and breathing.',
      'A young baby can become unwell quickly, so caregiver concern and sudden change matter. Routine records help describe what happened but cannot determine whether a newborn is medically well.'
    ],
    bemama: 'Use BeMama to coordinate feeding, diapers, sleep, temperature, appointments, and which caregiver recorded each event. Do not delay care to complete a log.',
    safety: 'Seek prompt professional advice for poor feeding, unusual sleepiness, breathing difficulty, blue or grey colour, repeated vomiting, dehydration concerns, or any temperature concern in a young baby.',
    sources: [sources.whoInfantFeeding, sources.canadaSafeSleep, sources.aapFever]
  },
  breastfeeding: {
    guidance: [
      'Responsive feeding uses early hunger and fullness cues rather than a rigid clock. Effective feeding is judged through latch and swallowing, comfort, weight change, alertness, and expected urine and stool output—not minutes at the breast alone.',
      'Pumping and milk storage require clean handling and temperature-based storage guidance. Pain, damaged nipples, poor transfer, supply concerns, or difficulty waking a baby for feeds deserve skilled lactation or clinical assessment.'
    ],
    bemama: 'Use BeMama to record nursing, pumping, bottles, and diaper output for discussion with a clinician or lactation professional. The app cannot measure milk transfer or decide whether intake is adequate.',
    safety: 'Seek prompt advice for poor feeding, fewer wet diapers than expected, increasing sleepiness, dehydration signs, fever, or poor weight gain.',
    sources: [sources.cdcBreastfeedingBasics, sources.cdcMilkStorage, sources.whoInfantFeeding]
  },
  formulaBottle: {
    guidance: [
      'Formula preparation requires hand hygiene, clean equipment, safe water, and the exact water-to-formula ratio on the container. Powdered formula is not sterile, and some young or medically vulnerable babies need additional precautions.',
      'Bottle feeding can be responsive: hold the baby, watch hunger and fullness cues, pause as needed, and never prop a bottle. Storage and discard times apply even when a bottle still looks or smells normal.'
    ],
    bemama: 'Use BeMama to coordinate bottle times, amounts, formula type, and preparation notes. It cannot verify mixing, storage temperature, product safety, or the right amount for a baby.',
    safety: 'Contact a healthcare professional for a possible mixing error, poor feeding, repeated vomiting, unusual sleepiness, dehydration concerns, or fever.',
    sources: [sources.cdcFormula, sources.whoInfantFeeding]
  },
  newbornOutput: {
    guidance: [
      'Urine and stool patterns change rapidly in the first days and vary with age and feeding. Output is interpreted together with feeding, alertness, weight, jaundice, and clinical examination rather than as an isolated target.',
      'Fewer wet diapers than expected, persistent dark urine, very pale stool, blood, increasing jaundice, repeated vomiting, or poor feeding should be discussed promptly with a newborn-care professional.'
    ],
    bemama: 'Use BeMama to preserve diaper times and descriptions for your baby’s clinician. The app does not diagnose dehydration, jaundice, allergy, or infection.',
    safety: 'Seek prompt care when output drops, the baby is hard to wake, feeding is poor, or colour or behaviour changes.',
    sources: [sources.cdcBreastfeedingBasics, sources.aapFever]
  },
  newbornIllness: {
    guidance: [
      'A rectal temperature of 38°C (100.4°F) or higher in a baby three months or younger requires immediate medical contact, even when the baby otherwise appears well. Young infants can have serious infection without many obvious symptoms.',
      'Breathing difficulty, blue or grey colour, marked sleepiness, seizures, persistent vomiting, dehydration, poor feeding, or a rapidly changing rash also require urgent assessment.'
    ],
    bemama: 'Use BeMama to record the exact temperature, method, time, feeding, diapers, and symptoms while arranging care. Do not wait for a trend or AI response before calling.',
    safety: 'Call the baby’s clinician or urgent service immediately for fever in a young infant; use emergency services for severe breathing, responsiveness, colour, or seizure concerns.',
    sources: [sources.aapFever]
  },
  newbornSleep: {
    guidance: [
      'Place a baby on their back for every sleep on a firm, flat, separate sleep surface with no pillows, loose bedding, positioners, or soft objects. Room sharing is recommended, but room sharing is different from sharing an adult bed, sofa, or chair.',
      'Dress the baby for the room and avoid overheating or weighted sleep products. Swaddling does not make an unsafe sleep surface safe and should stop when a baby shows signs of trying to roll.'
    ],
    bemama: 'Use BeMama to coordinate sleep times and notice routine changes. Sleep totals cannot assess sleep safety or explain why a baby is unusually sleepy.',
    safety: 'Seek prompt advice if a newborn is difficult to wake, feeds poorly, or has breathing or colour changes. Never use an inclined product, sofa, armchair, or car seat as a routine sleep space.',
    sources: [sources.canadaSafeSleep, sources.canadaSleepwear]
  },
  newbornHygiene: {
    guidance: [
      'Newborn skin, nails, diaper care, and umbilical healing usually need gentle handling, clean water, fragrance-free products when needed, and keeping the cord area clean and dry. Normal appearance changes should still be discussed when caregivers are uncertain.',
      'Spreading redness, swelling, pus, foul odour, persistent bleeding, fever, blisters, or a baby who seems unwell can signal a problem that needs professional assessment.'
    ],
    bemama: 'Use BeMama to save dated skin or cord observations and questions for visits. Photos and notes do not diagnose infection or determine whether a product is safe.',
    safety: 'Contact a clinician promptly for signs of infection, fever, poor feeding, or a rapidly worsening rash. Use emergency care for severe illness or breathing difficulty.',
    sources: [sources.aapFever, sources.canadaHomeSafety]
  },
  cryingColic: {
    guidance: [
      'Crying commonly increases in the early weeks, but colic is diagnosed only after illness, feeding problems, injury, and other causes are considered. A baby who is well between episodes still deserves assessment when crying is new, extreme, or difficult to console.',
      'Use calm, repetitive soothing and put the baby safely in the crib when you need a break. Never shake a baby, and ask another trusted adult for help when frustration is rising.'
    ],
    bemama: 'Use BeMama to note crying times, feeds, diapers, sleep, and what helped. The pattern can support a clinical conversation but cannot diagnose colic.',
    safety: 'Seek urgent care for fever, breathing or colour changes, unusual sleepiness, repeated vomiting, injury, poor feeding, a bulging soft spot, or inconsolable crying with illness signs.',
    sources: [sources.aapColic, sources.aapFever]
  },
  newbornDevelopment: {
    guidance: [
      'Early development includes social attention, sounds, movement, feeding, and growing head control. Milestone lists describe skills most children can do by an age; they are observation prompts, not standardized developmental screening tests.',
      'Supervised awake tummy time can be built gradually in short sessions. A baby should still be placed on their back for sleep, and loss of a skill or caregiver concern should be discussed rather than waiting for the next checklist age.'
    ],
    bemama: 'Use BeMama to save dated observations, activities, growth entries, and questions. The app does not score development or diagnose delay.',
    safety: 'Contact the baby’s healthcare professional for concerns about movement, hearing, vision, feeding, interaction, or loss of a skill; seek urgent care for an acute change or seizure-like activity.',
    sources: [sources.cdcMilestones, sources.canadaSafeSleep]
  },
  babywearing: {
    guidance: [
      'Young babies have limited head control and can suffocate when their face is covered or their chin is pressed to the chest. A carrier must fit the baby and wearer, keep the airway visible, and be used exactly as the manufacturer directs.',
      'Check position often, support the head and neck, keep the baby’s face away from fabric and the wearer’s body, and take extra care with premature or medically vulnerable infants.'
    ],
    bemama: 'Use BeMama to save product questions or care notes, not to certify a carrier fit or airway position.',
    safety: 'Remove the baby immediately and seek emergency help for breathing difficulty, colour change, limpness, or unresponsiveness.',
    sources: [sources.canadaBabywearing]
  },
  postpartumRecovery: {
    guidance: [
      'Postpartum recovery includes bleeding, pain, wounds, bladder and bowel function, blood pressure, sleep, feeding, and emotional wellbeing. Changes should gradually improve, but recovery is not identical after every birth.',
      'Baby blues usually improve within days to two weeks. Persistent or intense sadness, anxiety, despair, inability to function, or frightening thoughts can indicate a treatable perinatal mental-health condition.'
    ],
    bemama: 'Use BeMama to record recovery changes and prepare questions for postpartum care. It is not a bleeding monitor, mental-health assessment, or emergency service.',
    safety: 'Seek urgent care for heavy bleeding, chest pain, trouble breathing, severe headache, fever, seizures, wound infection, thoughts of harm, or another urgent maternal warning sign.',
    sources: [sources.acogPostpartumCare, sources.acogPostpartumDepression, sources.cdcMaternalWarnings]
  },
  childMilestones: {
    guidance: [
      'CDC milestones describe skills that most children can do by a particular age across social, language, thinking, and movement domains. They support observation and conversation but do not replace standardized developmental screening.',
      'Individual skills vary, but caregiver concern matters. Missing several expected skills, losing a skill, or a difference in movement, communication, hearing, or vision should be discussed promptly.'
    ],
    bemama: 'Use BeMama to preserve dated observations, growth, activities, and questions for well-child visits. It cannot label development as normal or delayed.',
    safety: 'Contact your child’s healthcare professional whenever you are concerned or notice loss of a skill. Seek urgent care for an acute change, breathing difficulty, loss of responsiveness, or seizure-like activity.',
    sources: [sources.cdcMilestones]
  },
  childFeeding: {
    guidance: [
      'Complementary foods generally begin around six months when developmental readiness is present, while breast milk or formula remains important through the first year. Texture, variety, iron-rich foods, and responsive attention to hunger and fullness develop gradually.',
      'Foods must be prepared to reduce choking risk, and allergenic foods should be introduced in an age-appropriate form based on current guidance. Toddlers benefit from predictable meals and snacks without pressure to clean the plate.'
    ],
    bemama: 'Use BeMama to coordinate foods, textures, observations, and caregiver notes. A food log cannot diagnose allergy, choking risk, nutrient deficiency, or feeding readiness.',
    safety: 'Learn choking first aid. Trouble breathing, facial or tongue swelling, collapse, or a severe allergic reaction requires emergency care; persistent feeding or growth concerns need clinical review.',
    sources: [sources.cdcSolids, sources.aapSolids, sources.aapToddlerNutrition]
  },
  childAllergens: {
    guidance: [
      'Current pediatric guidance does not recommend delaying common allergenic foods once a baby is ready for solids. Introduce them in infant-safe forms and discuss the plan first when a baby has severe eczema, an existing food allergy, or another high-risk history.',
      'An allergy action plan should identify the child, known allergens, symptoms, prescribed medicine, emergency steps, and who needs a copy. It must be created with the child’s qualified healthcare professional.'
    ],
    bemama: 'Use BeMama to keep a personal food and symptom history and reminders. It is not an allergy diagnosis, emergency plan, or substitute for prescribed epinephrine.',
    safety: 'Use emergency services for breathing difficulty, throat or tongue swelling, collapse, widespread hives with other symptoms, or any reaction covered by the child’s emergency plan.',
    sources: [sources.aapAllergens, sources.cdcSolids]
  },
  childSleep: {
    guidance: [
      'Sleep patterns change with development, illness, travel, separation anxiety, and nap transitions. Consistent wake times, calming routines, age-appropriate naps, and a safe sleep environment are more useful than expecting one universal schedule.',
      'Behavioral sleep approaches should fit the child’s age, temperament, feeding needs, health, and family values. Persistent snoring, breathing pauses, pain, poor growth, or extreme daytime sleepiness needs clinical assessment.'
    ],
    bemama: 'Use BeMama to compare sleep patterns and routines across days. Totals cannot diagnose a sleep disorder or determine that a sleep arrangement is safe.',
    safety: 'Continue infant safe-sleep practices for babies. Seek medical advice for breathing concerns, unusual sleepiness, poor feeding, or a sudden major change.',
    sources: [sources.aapSeparationSleep, sources.cdcToddlers, sources.canadaSafeSleep]
  },
  teething: {
    guidance: [
      'Teething can cause gum discomfort, drooling, and a desire to chew, but it does not explain a true fever of 38°C (100.4°F) or higher, marked lethargy, or significant illness. Cold—not frozen—teething items and gentle gum massage are common comfort measures.',
      'Avoid products that create choking, strangulation, medication, or toxicity risks. Ask a pharmacist or child-health professional before using pain medicine or a topical product.'
    ],
    bemama: 'Use BeMama to note symptoms, temperature, sleep, and medicine instructions. Do not attribute fever or illness to teething based on the app.',
    safety: 'Contact a clinician for fever, poor feeding, dehydration, breathing changes, or a child who seems unwell.',
    sources: [sources.aapFever, sources.canadaHomeSafety]
  },
  childVaccines: {
    guidance: [
      'Childhood vaccination schedules protect children when they are most vulnerable. Timing and combinations vary by country and, in Canada, by province or territory, and schedules are updated over time.',
      'Use the current local schedule and an official vaccination record. A healthcare professional or public-health clinic can create a catch-up plan when doses are delayed or records come from different regions.'
    ],
    bemama: 'Use BeMama for appointment reminders and personal notes, not as the official immunization record or a dose calculator.',
    safety: 'Seek urgent care for breathing difficulty, facial or throat swelling, collapse, or another severe reaction after vaccination.',
    sources: [sources.canadaVaccines]
  },
  languageReading: {
    guidance: [
      'Language grows through responsive interaction: talking, listening, naming, singing, shared reading, and taking turns in play. Everyday conversation in the family’s strongest languages supports connection and learning.',
      'Milestone ranges vary, but loss of language, limited response to sound or name, or caregiver concern should be discussed with a healthcare professional and may warrant hearing or developmental assessment.'
    ],
    bemama: 'Use BeMama to save favourite activities, new words, and questions for well-child visits. It cannot screen hearing, speech, or language development.',
    safety: 'Request professional assessment when communication concerns persist or a child loses previously used words or social skills.',
    sources: [sources.cdcMilestones, sources.cdcToddlers]
  },
  positiveParenting: {
    guidance: [
      'Young children learn through predictable routines, clear directions, positive attention, play, and calm, consistent limits. Tantrums, biting, separation difficulty, and testing boundaries are opportunities to teach safer alternatives rather than label a child.',
      'Look for triggers such as hunger, fatigue, transitions, overstimulation, and limited language. Protect safety first, use brief concrete language, and reconnect after the situation is calm.'
    ],
    bemama: 'Use BeMama to notice routines and triggers and share strategies across caregivers. It does not diagnose behaviour or replace individualized developmental or family support.',
    safety: 'Seek professional help when behaviour causes injury, is unusually intense or persistent, involves developmental regression, or leaves caregivers unable to keep anyone safe.',
    sources: [sources.cdcParenting, sources.cdcToddlers]
  },
  potty: {
    guidance: [
      'Toilet learning works best when a child can notice the urge, communicate it, reach the toilet, manage clothing with help, and show interest. Readiness varies, and pressure or punishment can make the process harder.',
      'Use a calm routine, easy clothing, praise for participation, and neutral responses to accidents. Constipation, pain, stool withholding, or regression may need healthcare guidance.'
    ],
    bemama: 'Use BeMama to notice readiness, routines, and constipation patterns without turning the tracker into a reward or punishment system.',
    safety: 'Contact a healthcare professional for painful urination or stool, blood, persistent constipation, marked thirst, or a sudden loss of previously established skills.',
    sources: [sources.aapPotty, sources.cdcParenting]
  },
  screenTime: {
    guidance: [
      'For toddlers, CDC guidance emphasizes limited high-quality programming, caregiver involvement, and a family media plan. Screens should not displace sleep, active play, face-to-face conversation, meals, or safe supervision.',
      'Video calls with loved ones differ from passive viewing, and family circumstances vary. Consistent boundaries and adults modelling the same habits are more useful than treating one day’s total as a verdict.'
    ],
    bemama: 'Use BeMama to notice routines and plan screen-free times. The app does not judge content quality or diagnose sleep, attention, or behaviour concerns.',
    safety: 'Discuss persistent sleep, developmental, vision, hearing, or behaviour concerns with the child’s healthcare professional.',
    sources: [sources.cdcToddlers, sources.cdcParenting]
  },
  childSafety: {
    guidance: [
      'Safety changes as a child becomes mobile. Recheck stairs, windows, blind cords, furniture anchoring, medicines, cleaners, water, hot liquids, choking hazards, and sleep spaces from the child’s height and reach.',
      'For travel, use a certified child restraint that fits the child and vehicle, follow the manufacturer’s instructions, and keep a child rear-facing until the seat’s stated limits. Laws and requirements vary by jurisdiction.'
    ],
    bemama: 'Use BeMama for reminders and questions, not to certify a home, product, installation, or car-seat fit.',
    safety: 'Use emergency services for choking, poisoning, serious falls, burns, breathing difficulty, or loss of responsiveness. Contact poison control immediately for a possible ingestion.',
    sources: [sources.canadaHomeSafety, sources.transportCarSeat]
  }
};

const assignments = new Map();

function assign(category, profile, slugs) {
  for (const slug of slugs) assignments.set(`${category}/${slug}`, profile);
}

assign('trying-to-conceive', 'preconception', [
  'preparing-for-pregnancy', 'folic-acid-preconception', 'prenatal-vitamins-before-pregnancy',
  'folic-acid-basics', 'preconception-appointment', 'preconception-medication-review'
]);
assign('trying-to-conceive', 'cycle', [
  'menstrual-cycle-fertile-window', 'tracking-ovulation', 'menstrual-cycle-basics', 'ovulation-signs',
  'fertile-window-timing', 'ovulation-tests', 'basal-body-temperature', 'cervical-mucus',
  'irregular-cycles-ttc', 'cycle-planning-week-by-week', 'luteal-phase-basics'
]);
assign('trying-to-conceive', 'infertility', [
  'how-long-to-conceive', 'when-to-see-fertility-specialist', 'when-to-seek-fertility-help'
]);
assign('trying-to-conceive', 'fertilityConditions', [
  'endometriosis-and-conception', 'pcos-and-ovulation-tracking'
]);
assign('trying-to-conceive', 'fertilityLifestyle', [
  'fertility-nutrition', 'male-fertility', 'fertility-friendly-nutrition', 'partner-health-sperm',
  'fertility-friendly-meal-patterns'
]);
assign('trying-to-conceive', 'ttcSubstances', ['caffeine-alcohol-ttc']);
assign('trying-to-conceive', 'birthControlReturn', ['stopping-birth-control', 'fertility-after-birth-control']);
assign('trying-to-conceive', 'pregnancyTesting', ['early-pregnancy-signs', 'pregnancy-test-timing', 'implantation-signs-and-timing']);
assign('trying-to-conceive', 'emotionalTtc', ['emotional-wellbeing-while-trying', 'coping-with-negative-pregnancy-test']);
assign('trying-to-conceive', 'sexSelection', ['shettles-method']);

assign('pregnancy', 'fetalDevelopment', [
  'first-trimester', 'second-trimester', 'third-trimester', 'pregnancy-weeks-4-8', 'pregnancy-weeks-9-12',
  'pregnancy-weeks-13-16', 'pregnancy-weeks-17-20', 'pregnancy-weeks-21-24', 'pregnancy-weeks-25-28',
  'pregnancy-weeks-29-32', 'pregnancy-weeks-33-36', 'pregnancy-weeks-37-40',
  'trimesters-of-pregnancy', 'how-many-weeks-pregnant', 'when-do-you-start-showing'
]);
assign('pregnancy', 'prenatalCare', [
  'prenatal-care-schedule', 'prenatal-visit-schedule', 'blood-tests-screening', 'anatomy-scan-guide',
  'preparing-for-prenatal-appointments'
]);
assign('pregnancy', 'pregnancySymptoms', [
  'common-symptoms', 'nausea-remedies', 'heartburn-during-pregnancy', 'constipation-during-pregnancy',
  'pelvic-pain-round-ligament', 'sleep-positions-pregnancy', 'headaches-when-to-call',
  'swelling-and-edema', 'breathlessness-in-pregnancy', 'warning-signs'
]);
assign('pregnancy', 'pregnancyNutrition', [
  'pregnancy-nutrition', 'foods-to-avoid', 'healthy-weight-gain'
]);
assign('pregnancy', 'pregnancyActivity', ['safe-exercise', 'pelvic-floor-preparation']);
assign('pregnancy', 'preeclampsia', ['blood-pressure-preeclampsia']);
assign('pregnancy', 'gestationalDiabetes', ['glucose-test-guide', 'gestational-diabetes-support']);
assign('pregnancy', 'pregnancyPrevention', ['vaccines-during-pregnancy', 'safe-medicines-pregnancy']);
assign('pregnancy', 'travelWork', ['travel-during-pregnancy', 'work-and-maternity-leave']);
assign('pregnancy', 'fetalMovement', ['baby-movement-patterns', 'when-can-you-feel-baby-move']);
assign('pregnancy', 'laborBirth', [
  'birth-plan', 'hospital-bag', 'preparing-for-labor', 'signs-of-labor', 'c-section-basics',
  'induction-of-labor-conversation'
]);
assign('pregnancy', 'postpartumPlanning', ['postpartum-plan']);
assign('pregnancy', 'emotionalTtc', ['mental-health']);

assign('newborn', 'newbornCare', ['newborn-care-basics', 'first-24-hours', 'first-doctor-visit']);
assign('newborn', 'breastfeeding', [
  'breastfeeding-guide', 'feeding-cues', 'latch-basics', 'pumping-storing-milk', 'cluster-feeding-and-rest'
]);
assign('newborn', 'formulaBottle', ['formula-feeding', 'formula-prep-safety', 'paced-bottle-feeding']);
assign('newborn', 'newbornOutput', ['diaper-output', 'newborn-poop', 'jaundice-basics']);
assign('newborn', 'newbornIllness', ['when-to-call-doctor', 'newborn-fever']);
assign('newborn', 'newbornSleep', [
  'newborn-sleep', 'safe-sleep-room-sharing', 'swaddling-safety', 'pacifier-basics',
  'newborn-temperature-and-dressing'
]);
assign('newborn', 'newbornHygiene', [
  'bathing-and-diapering', 'cord-and-skin-care', 'newborn-skin-rashes', 'newborn-nail-care',
  'umbilical-cord-healing'
]);
assign('newborn', 'cryingColic', ['soothing-and-colic', 'crying-and-colic']);
assign('newborn', 'newbornDevelopment', ['newborn-development', 'tummy-time-newborn', 'baby-growth-spurts']);
assign('newborn', 'babywearing', ['babywearing-safety']);
assign('newborn', 'postpartumRecovery', [
  'postpartum-recovery', 'parent-rest-newborn', 'postpartum-bleeding-basics', 'postpartum-mood-changes'
]);

assign('baby-and-child', 'childMilestones', [
  'baby-milestones', 'two-month-milestones', 'four-month-milestones', 'six-month-milestones',
  'nine-month-milestones', 'twelve-month-milestones',
  'when-do-babies-roll-over', 'when-do-babies-sit-up', 'when-do-babies-crawl', 'when-do-babies-walk'
]);
assign('baby-and-child', 'childFeeding', [
  'starting-solids', 'toddler-nutrition', 'finger-foods', 'cup-and-water', 'toddler-balanced-meals'
]);
assign('baby-and-child', 'childAllergens', ['starting-solids-allergens', 'allergy-action-plan']);
assign('baby-and-child', 'childSleep', [
  'sleep-training', 'sleep-regressions', 'nap-transitions', 'separation-anxiety', 'early-morning-waking',
  'when-do-babies-sleep-through-the-night'
]);
assign('baby-and-child', 'teething', ['teething', 'teething-comfort']);
assign('baby-and-child', 'childVaccines', ['vaccinations-overview']);
assign('baby-and-child', 'languageReading', ['language-development', 'language-games', 'family-reading-routine']);
assign('baby-and-child', 'positiveParenting', [
  'positive-parenting', 'toddler-tantrums', 'daycare-transition', 'welcoming-new-sibling',
  'independent-play', 'toddler-biting'
]);
assign('baby-and-child', 'potty', ['potty-training', 'potty-readiness']);
assign('baby-and-child', 'screenTime', ['screen-time']);
assign('baby-and-child', 'childSafety', ['babyproofing-basics', 'car-seat-basics']);

export function buildProfileEvidence(article, updated, updatedIso) {
  const profileId = assignments.get(article.slug);
  const profile = profileId ? evidenceProfiles[profileId] : null;
  if (!profile) return null;

  return {
    updated,
    updatedIso,
    guidance: [...profile.guidance],
    bemama: profile.bemama,
    safety: profile.safety,
    sources: profile.sources.map((source) => ({ ...source }))
  };
}

export function evidenceAssignmentForArticle(slug) {
  return assignments.get(slug) ?? null;
}
