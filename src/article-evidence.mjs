// English evidence notes for priority health articles.
//
// These additions deliberately avoid author or medical-review claims. Each
// statement is a concise synthesis of the linked public-health guidance, and
// BeMama is described only as a recordkeeping and preparation tool.

import { articleBySlug, articles } from './content-hub.mjs';
import { buildProfileEvidence } from './article-evidence-profiles.mjs';
import {
  labelsForEvidence,
  localizedProfileEvidence
} from './article-evidence-i18n.mjs';

const updated = 'August 5, 2026';
const updatedIso = '2026-08-05';

const priorityEvidence = {
  'trying-to-conceive/preparing-for-pregnancy': {
    updated,
    updatedIso,
    guidance: [
      'The CDC recommends preparing for pregnancy by discussing your health history, medical conditions, medicines, supplements, vaccinations, and lifestyle with a healthcare professional. A preconception conversation can identify changes that are safer to make before pregnancy rather than after a positive test.',
      'The same guidance recommends 400 micrograms of folic acid each day for most people who could become pregnant, beginning at least one month before pregnancy. Individual needs can differ, so higher-dose supplements or changes to prescribed medicines should only be made with a qualified healthcare professional.'
    ],
    bemama:
      'Use BeMama to keep a private list of medicines, supplements, vaccination questions, cycle dates, and topics for a preconception appointment. The app can help organize what you want to discuss, but it does not determine whether a medicine, supplement, or activity is safe for you.',
    safety:
      'Do not stop a prescribed medicine because you are planning a pregnancy without speaking with the clinician who manages it. Seek individualized advice if you have a chronic condition, a previous pregnancy complication, or concerns about alcohol, smoking, or other substance use.',
    sources: [
      {
        organization: 'CDC',
        title: 'Planning for Pregnancy',
        url: 'https://www.cdc.gov/pregnancy/about/index.html'
      },
      {
        organization: 'CDC',
        title: 'Medicine and Pregnancy: An Overview',
        url: 'https://www.cdc.gov/medicine-and-pregnancy/index.html'
      },
      {
        organization: 'Public Health Agency of Canada',
        title: 'Folic acid, healthy pregnancy and neural tube defect prevention',
        url: 'https://www.canada.ca/en/public-health/services/pregnancy/folic-acid.html'
      }
    ]
  },

  'trying-to-conceive/menstrual-cycle-fertile-window': {
    updated,
    updatedIso,
    guidance: [
      'ACOG defines a menstrual cycle from the first day of one period to the first day of the next. Ovulation does not always occur on the same cycle day: even in a 28-day cycle, timing is an estimate rather than a guarantee.',
      'Pregnancy can occur from intercourse in the days before ovulation because sperm may survive for several days, while an egg remains available for a much shorter period after ovulation. Calendar estimates become less dependable when cycles vary, after hormonal birth control, while breastfeeding, or when illness and routine changes affect fertility signs.'
    ],
    bemama:
      'BeMama can place period dates, symptoms, cervical mucus observations, temperatures, and test results on one timeline so patterns are easier to discuss. Its fertile-window dates are educational estimates and must not be used as contraception or as proof that ovulation occurred.',
    safety:
      'Seek professional advice if cycles are persistently absent, unusually painful, very heavy, or difficult to interpret, or if pregnancy would pose a medical risk. Fertility-awareness methods do not protect against sexually transmitted infections.',
    sources: [
      {
        organization: 'ACOG',
        title: 'Fertility Awareness-Based Methods of Family Planning',
        url: 'https://www.acog.org/womens-health/faqs/fertility-awareness-based-methods-of-family-planning'
      }
    ]
  },

  'trying-to-conceive/tracking-ovulation': {
    updated,
    updatedIso,
    guidance: [
      'ACOG explains that basal body temperature usually rises around ovulation, but the rise confirms that ovulation has likely already happened rather than predicting it in advance. Fever, disrupted sleep, travel, alcohol, and inconsistent measurement times can make a temperature chart harder to interpret.',
      'Cervical mucus may become thinner and more slippery before ovulation, while urine ovulation tests detect a rise in luteinizing hormone. A positive urine test suggests ovulation may follow soon, but no single home sign confirms fertility or guarantees pregnancy.'
    ],
    bemama:
      'Record temperature at a consistent time, note unusual sleep or illness, and keep mucus and test observations beside the same cycle in BeMama. Looking at several observations together can make your record more useful for a healthcare appointment without turning the app into a diagnostic test.',
    safety:
      'Contact a healthcare professional if you repeatedly do not detect expected patterns, have very irregular cycles, or need advice about how long to try before seeking an evaluation.',
    sources: [
      {
        organization: 'ACOG',
        title: 'Evaluating Infertility',
        url: 'https://www.acog.org/womens-health/faqs/evaluating-infertility'
      },
      {
        organization: 'ACOG',
        title: 'Fertility Awareness-Based Methods of Family Planning',
        url: 'https://www.acog.org/womens-health/faqs/fertility-awareness-based-methods-of-family-planning'
      }
    ]
  },

  'trying-to-conceive/folic-acid-preconception': {
    updated,
    updatedIso,
    guidance: [
      'The CDC recommends that most people who could become pregnant get 400 micrograms of folic acid each day. Having enough folic acid before conception and during early pregnancy helps reduce the risk of neural tube defects, which develop very early—sometimes before a person knows they are pregnant.',
      'Public Health Agency of Canada guidance also emphasizes taking a daily multivitamin containing folic acid before pregnancy. Some people need a different dose because of their health history, medicines, or a previous affected pregnancy, so more is not automatically better and individualized advice matters.'
    ],
    bemama:
      'BeMama can help you record a daily prenatal vitamin and prepare questions about the product and dose for a pharmacist, family doctor, midwife, or obstetric care professional. The app does not verify supplement ingredients or select a dose for you.',
    safety:
      'Ask a qualified healthcare professional before taking a high-dose folic acid supplement or combining multiple supplements, particularly if you take prescription medicines or have a relevant medical history.',
    sources: [
      {
        organization: 'CDC',
        title: 'Folic Acid: Sources and Recommended Intake',
        url: 'https://www.cdc.gov/folic-acid/about/intake-and-sources.html'
      },
      {
        organization: 'Public Health Agency of Canada',
        title: 'Folic acid, healthy pregnancy and neural tube defect prevention',
        url: 'https://www.canada.ca/en/public-health/services/pregnancy/folic-acid.html'
      }
    ]
  },

  'trying-to-conceive/when-to-see-fertility-specialist': {
    updated,
    updatedIso,
    guidance: [
      'ACOG describes infertility evaluation as a stepwise review that may include both partners. Depending on the situation, clinicians may review cycle and ovulation patterns, medical history, medicines, semen analysis, hormone tests, ultrasound, or tests of the uterus and fallopian tubes.',
      'The right time to request an evaluation depends on age, how long pregnancy has been attempted, cycle regularity, and known medical factors. Earlier advice may be appropriate when periods are absent or very irregular, there is a history of pelvic disease or treatment that may affect fertility, or either partner has a known reproductive concern.'
    ],
    bemama:
      'Bring a concise BeMama record of cycle dates, ovulation observations, test results, symptoms, medicines, and how long you have been trying. A structured history can support the appointment, but the app cannot diagnose infertility or determine which tests are appropriate.',
    safety:
      'Seek care promptly for severe pelvic pain, very heavy bleeding, or another urgent symptom rather than waiting for a routine fertility appointment.',
    sources: [
      {
        organization: 'ACOG',
        title: 'Evaluating Infertility',
        url: 'https://www.acog.org/womens-health/faqs/evaluating-infertility'
      },
      {
        organization: 'ACOG',
        title: 'Treating Infertility',
        url: 'https://www.acog.org/womens-health/faqs/treating-infertility'
      }
    ]
  },

  'pregnancy/first-trimester': {
    updated,
    updatedIso,
    guidance: [
      'ACOG recommends starting prenatal care in the first trimester when possible. An early visit commonly reviews the first day of the last menstrual period, current medicines and supplements, health conditions, vaccination history, and previous pregnancies, with testing tailored to the individual.',
      'Folic acid remains important in early pregnancy, and medicines should be reviewed rather than stopped or started independently. Symptoms vary widely, but severe or worsening symptoms should not be dismissed as a normal part of the first trimester.'
    ],
    bemama:
      'Use BeMama to record symptoms, hydration, medicines, supplements, appointments, and questions between visits. A dated record can help you describe changes clearly, but symptom tracking cannot confirm that a pregnancy is healthy or replace prenatal assessment.',
    safety:
      'Seek urgent medical care for heavy bleeding, severe or persistent abdominal pain, fainting, trouble breathing, fever of 38°C (100.4°F) or higher, or vomiting that prevents you from keeping fluids down. Contact your care team whenever something feels seriously wrong.',
    sources: [
      {
        organization: 'ACOG',
        title: 'Prenatal Care',
        url: 'https://www.acog.org/womens-health/faqs/prenatal-care'
      },
      {
        organization: 'CDC',
        title: 'Medicine and Pregnancy: An Overview',
        url: 'https://www.cdc.gov/medicine-and-pregnancy/index.html'
      },
      {
        organization: 'CDC',
        title: 'Urgent Maternal Warning Signs and Symptoms',
        url: 'https://www.cdc.gov/hearher/maternal-warning-signs/index.html'
      }
    ]
  },

  'pregnancy/pregnancy-nutrition': {
    updated,
    updatedIso,
    guidance: [
      'ACOG recommends focusing on a varied eating pattern and the nutrients needed to support both the pregnant person and the developing fetus—not simply eating twice as much. Important nutrients include folic acid, iron, calcium, vitamin D, choline, and others obtained through food and an appropriate prenatal vitamin.',
      'Nutrition needs are individual. Nausea, anemia, diabetes, food access, allergies, cultural eating patterns, and vegetarian or vegan diets can all change the advice that is most useful, so a prenatal clinician or registered dietitian can help tailor a plan.'
    ],
    bemama:
      'BeMama can help you notice meal, hydration, supplement, and symptom patterns and save questions for prenatal visits. Food logs are personal records; they do not calculate nutrient adequacy or replace assessment by a clinician or dietitian.',
    safety:
      'Contact your care team if vomiting prevents eating or drinking, you are losing weight unintentionally, you have been told you are anemic, or a medical condition affects what you can safely eat.',
    sources: [
      {
        organization: 'ACOG',
        title: 'Healthy Eating During Pregnancy',
        url: 'https://www.acog.org/womens-health/faqs/healthy-eating-during-pregnancy'
      },
      {
        organization: 'Public Health Agency of Canada',
        title: 'Folic acid, healthy pregnancy and neural tube defect prevention',
        url: 'https://www.canada.ca/en/public-health/services/pregnancy/folic-acid.html'
      }
    ]
  },

  'pregnancy/foods-to-avoid': {
    updated,
    updatedIso,
    guidance: [
      'Pregnancy changes how the immune system responds to some foodborne infections. Public health guidance emphasizes safe food handling, pasteurized dairy products, thoroughly cooked meat and eggs, and avoiding raw seafood and fish with high mercury levels.',
      'Listeria can survive and grow at refrigerator temperatures, so handwashing, keeping raw and ready-to-eat foods separate, cleaning surfaces, and following current advice for higher-risk refrigerated foods are important. Recommendations can differ by country and may change during an outbreak.'
    ],
    bemama:
      'Use BeMama to save food-related questions, symptoms, and advice received from your own prenatal team. The app does not evaluate whether a particular product, restaurant meal, fish species, or recalled food is safe.',
    safety:
      'If you develop fever, significant vomiting or diarrhea, dehydration, severe abdominal pain, or feel unwell after a possible high-risk food exposure, contact a healthcare professional and mention that you are pregnant.',
    sources: [
      {
        organization: 'ACOG',
        title: 'Healthy Eating During Pregnancy',
        url: 'https://www.acog.org/womens-health/faqs/healthy-eating-during-pregnancy'
      },
      {
        organization: 'Public Health Agency of Canada',
        title: 'Listeria (listeriosis): Spread, prevention and risks',
        url: 'https://www.canada.ca/en/public-health/services/diseases/listeriosis/prevention-listeriosis.html'
      }
    ]
  },

  'pregnancy/safe-exercise': {
    updated,
    updatedIso,
    guidance: [
      'ACOG states that regular physical activity is generally safe for healthy people with uncomplicated pregnancies and recommends discussing exercise at an early prenatal visit. Its general goal is at least 150 minutes of moderate-intensity aerobic activity per week, adapted to fitness, pregnancy changes, and clinical advice.',
      'Pregnancy affects balance, joints, temperature regulation, and breathing. Activities with a high risk of falling, abdominal impact, overheating, or scuba diving require particular caution, while walking, swimming, stationary cycling, and modified prenatal exercise are common lower-risk options.'
    ],
    bemama:
      'BeMama can record activity type, duration, and how you felt afterward so you can notice patterns and describe them at an appointment. It does not assess exercise intensity, fetal wellbeing, or whether an activity is safe for a specific pregnancy.',
    safety:
      'Stop exercising and contact your prenatal care professional for vaginal bleeding, dizziness or fainting, chest pain, painful regular contractions, fluid leakage, calf pain or swelling, or unusual shortness of breath. Seek urgent care for severe symptoms.',
    sources: [
      {
        organization: 'ACOG',
        title: 'Exercise During Pregnancy',
        url: 'https://www.acog.org/womens-health/faqs/exercise-during-pregnancy'
      },
      {
        organization: 'CDC',
        title: 'Urgent Maternal Warning Signs and Symptoms',
        url: 'https://www.cdc.gov/hearher/maternal-warning-signs/index.html'
      }
    ]
  },

  'pregnancy/prenatal-care-schedule': {
    updated,
    updatedIso,
    guidance: [
      'Prenatal care is more than a fixed appointment calendar. ACOG describes a tailored approach in which visit frequency, in-person examinations, telehealth, laboratory tests, and ultrasound are adjusted to the pregnancy, health history, local practice, and emerging concerns.',
      'Routine visits commonly include blood pressure and other measurements, fetal assessment appropriate to gestational age, and time for questions. Early blood and urine testing can identify conditions that may be treated or monitored during pregnancy.'
    ],
    bemama:
      'Use BeMama to record appointment dates, test names, questions, and the instructions your care team gives you. The schedule shown in an educational guide is not a substitute for the plan from your own doctor or midwife.',
    safety:
      'Do not wait for the next scheduled visit if you develop an urgent symptom or a significant change in your baby’s movement. Contact your maternity service or seek urgent care based on local instructions.',
    sources: [
      {
        organization: 'ACOG',
        title: 'Prenatal Care',
        url: 'https://www.acog.org/womens-health/faqs/prenatal-care'
      },
      {
        organization: 'ACOG',
        title: 'Routine Tests During Pregnancy',
        url: 'https://www.acog.org/womens-health/faqs/routine-tests-during-pregnancy'
      },
      {
        organization: 'WHO',
        title: 'Recommendations on antenatal care for a positive pregnancy experience',
        url: 'https://www.who.int/publications/i/item/WHO-RHR-16.12'
      }
    ]
  },

  'pregnancy/mental-health': {
    updated,
    updatedIso,
    guidance: [
      'Anxiety, depression, and other mental health concerns can begin or change during pregnancy. ACOG encourages discussing persistent worry, low mood, panic, intrusive thoughts, sleep disruption, or difficulty functioning with a prenatal or mental health professional; effective support can include therapy, social support, lifestyle measures, and medication when appropriate.',
      'Treatment decisions are individualized. Do not stop a mental health medicine suddenly because of pregnancy without speaking with the prescriber, since untreated symptoms and abrupt medication changes can also carry risks.'
    ],
    bemama:
      'A private BeMama mood and symptom record may help you explain when changes began, what makes them better or worse, and how they affect sleep and daily life. AI-assisted features are not crisis services and do not diagnose or treat mental health conditions.',
    safety:
      'Thoughts of harming yourself or your baby require immediate help. Contact emergency services or a local crisis service, and tell a trusted person and healthcare professional right away.',
    sources: [
      {
        organization: 'ACOG',
        title: 'Anxiety and Pregnancy',
        url: 'https://www.acog.org/womens-health/faqs/anxiety-and-pregnancy'
      },
      {
        organization: 'CDC',
        title: 'Urgent Maternal Warning Signs and Symptoms',
        url: 'https://www.cdc.gov/hearher/maternal-warning-signs/index.html'
      },
      {
        organization: 'CDC',
        title: 'Medicine and Pregnancy: An Overview',
        url: 'https://www.cdc.gov/medicine-and-pregnancy/index.html'
      }
    ]
  },

  'pregnancy/warning-signs': {
    updated,
    updatedIso,
    guidance: [
      'The CDC advises seeking immediate medical care for urgent maternal warning signs during pregnancy and for up to one year after delivery. Examples include a severe or worsening headache, fainting, vision changes, fever of 38°C (100.4°F) or higher, trouble breathing, chest pain, severe persistent abdominal pain, or severe nausea and vomiting that prevents fluid intake.',
      'Other urgent signs include vaginal bleeding heavier than spotting, leaking fluid, marked swelling of the face or hands, one-sided leg or arm swelling and pain, a baby moving less than usual, or thoughts of harming yourself or your baby. This is not a complete list; a strong sense that something is wrong also deserves attention.'
    ],
    bemama:
      'BeMama can preserve the time a symptom began and related observations for communication with your care team. Do not spend time completing a tracker before seeking help, and do not use an app entry or AI response to decide whether urgent care is necessary.',
    safety:
      'Call local emergency services for severe or life-threatening symptoms. Otherwise contact your maternity unit or healthcare professional immediately and clearly state that you are pregnant or gave birth within the past year.',
    sources: [
      {
        organization: 'CDC',
        title: 'Urgent Maternal Warning Signs and Symptoms',
        url: 'https://www.cdc.gov/hearher/maternal-warning-signs/index.html'
      }
    ]
  },

  'newborn/newborn-care-basics': {
    updated,
    updatedIso,
    guidance: [
      'The first weeks centre on frequent feeding, safe sleep, warmth without overheating, hygiene, and scheduled newborn follow-up. Feeding patterns vary, so clinicians assess the whole picture—including growth, alertness, feeding effectiveness, and urine and stool output—rather than one isolated entry.',
      'For sleep, Canadian guidance recommends placing babies on their backs in their own crib, cradle, or bassinet with a firm, flat surface and no soft items. Room sharing is recommended for the first six months, but room sharing is different from sharing the same sleep surface.'
    ],
    bemama:
      'BeMama can keep feeding, diaper, sleep, temperature, medicine, and appointment records together and show which caregiver made each entry. These records can support a conversation with your baby’s clinician, but totals and charts do not assess whether a newborn is well.',
    safety:
      'Newborns can become unwell quickly. Seek prompt professional advice for poor feeding, unusual sleepiness, breathing difficulty, blue or grey colour, repeated vomiting, fewer wet diapers than expected, or any temperature concern in a young baby.',
    sources: [
      {
        organization: 'Public Health Agency of Canada',
        title: 'Safe Sleep for Your Baby',
        url: 'https://www.canada.ca/en/public-health/services/publications/healthy-living/safe-sleep-your-baby-brochure.html'
      },
      {
        organization: 'WHO',
        title: 'Infant and young child feeding',
        url: 'https://www.who.int/news-room/fact-sheets/detail/infant-and-young-child-feeding'
      },
      {
        organization: 'CDC',
        title: 'Milestones by 2 Months',
        url: 'https://www.cdc.gov/act-early/milestones/2-months.html'
      }
    ]
  },

  'newborn/breastfeeding-guide': {
    updated,
    updatedIso,
    guidance: [
      'WHO and Canadian public-health guidance recommend exclusive breastfeeding for approximately the first six months when it is possible and appropriate, followed by complementary foods with continued breastfeeding. Families may use breastfeeding, expressed milk, formula, or a combination based on their circumstances and clinical advice.',
      'Responsive feeding means watching early hunger and fullness cues rather than forcing a rigid schedule. If feeding is painful, the baby is difficult to wake for feeds, milk transfer seems poor, or growth and diaper output are concerning, skilled assessment can identify attachment, supply, oral, or medical issues.'
    ],
    bemama:
      'Use BeMama to record nursing side and duration, pumping, bottles, and diaper output so you can remember patterns and share them with a lactation professional or clinician. Time at the breast alone does not measure milk intake, and the app cannot determine whether feeding is adequate.',
    safety:
      'Seek prompt advice if your newborn is feeding poorly, has fewer wet diapers than your care team expects, is increasingly sleepy, shows signs of dehydration, or is not gaining as expected. Urgent symptoms require immediate care.',
    sources: [
      {
        organization: 'Public Health Agency of Canada',
        title: 'Breastfeeding your baby',
        url: 'https://www.canada.ca/en/public-health/services/child-infant-health/breastfeeding-infant-nutrition.html'
      },
      {
        organization: 'WHO',
        title: 'Breastfeeding: Questions and answers',
        url: 'https://www.who.int/news-room/questions-and-answers/item/breastfeeding'
      },
      {
        organization: 'WHO',
        title: 'Infant and young child feeding',
        url: 'https://www.who.int/news-room/fact-sheets/detail/infant-and-young-child-feeding'
      }
    ]
  },

  'newborn/formula-feeding': {
    updated,
    updatedIso,
    guidance: [
      'CDC guidance emphasizes washing hands, cleaning the preparation surface and feeding equipment, using safe water, and following the formula container’s measurements exactly. Measure the water as directed before adding powder; changing the ratio can provide too little nutrition or place stress on a baby’s kidneys and digestive system.',
      'Prepared formula should be used or refrigerated within the published safety window, and formula left in a bottle after a feed should be discarded because saliva can support bacterial growth. Powdered formula is not sterile, so babies younger than two months, born prematurely, or with weakened immunity may need additional precautions from their clinician or local public-health authority.'
    ],
    bemama:
      'BeMama can record bottle times, amounts, formula type, and preparation notes for caregiver coordination. It does not verify a formula product, mixing ratio, water source, storage temperature, or whether an amount is appropriate for your baby.',
    safety:
      'Use the product instructions and local public-health guidance, which can differ by location and circumstance. Contact a healthcare professional promptly for poor feeding, repeated vomiting, unusual sleepiness, dehydration concerns, or a possible preparation error.',
    sources: [
      {
        organization: 'CDC',
        title: 'Infant Formula Preparation and Storage',
        url: 'https://www.cdc.gov/infant-toddler-nutrition/formula-feeding/preparation-and-storage.html'
      },
      {
        organization: 'CDC',
        title: 'How to Clean, Sanitize, and Store Infant Feeding Items',
        url: 'https://www.cdc.gov/hygiene/faq/index.html'
      }
    ]
  },

  'newborn/newborn-sleep': {
    updated,
    updatedIso,
    guidance: [
      'Newborn sleep is distributed across day and night and changes rapidly, so short sleep periods and frequent waking are expected. A tracking total can describe a pattern, but it cannot determine sleep quality or whether a baby is medically well.',
      'Canadian safe-sleep guidance recommends placing a baby on their back for every sleep in their own crib, cradle, or bassinet with a firm, flat surface and no pillows, loose bedding, positioners, or soft objects. Room sharing for the first six months is recommended; sharing a room is not the same as sharing a bed or sofa.'
    ],
    bemama:
      'BeMama can help multiple caregivers record sleep start and end times and notice when routines change. Use those records to support conversations, not to delay feeding, wake a baby solely to satisfy a chart, or decide that an unusually sleepy newborn is safe.',
    safety:
      'Seek prompt advice if a newborn is unusually difficult to wake, feeds poorly, has breathing or colour changes, or seems unwell. Never place a baby to sleep on a sofa, armchair, inclined product, or adult bed.',
    sources: [
      {
        organization: 'Public Health Agency of Canada',
        title: 'Safe Sleep for Your Baby',
        url: 'https://www.canada.ca/en/public-health/services/publications/healthy-living/safe-sleep-your-baby-brochure.html'
      },
      {
        organization: 'Health Canada',
        title: 'Is Your Child Safe? Sleep Time',
        url: 'https://www.canada.ca/en/health-canada/services/consumer-product-safety/reports-publications/consumer-education/your-child-safe/sleep-time.html'
      }
    ]
  },

  'newborn/newborn-development': {
    updated,
    updatedIso,
    guidance: [
      'CDC developmental milestones describe skills that most children—about 75% or more—can do by a particular age. At around two months these observations span social interaction, sounds, attention, and movement, but children develop along individual paths.',
      'Milestone lists help caregivers notice and communicate changes; they are not standardized developmental screening tests. Losing a skill, not responding as expected, marked asymmetry, or any caregiver concern should be discussed with a healthcare professional rather than waiting for the next checklist age.'
    ],
    bemama:
      'Use BeMama to save dated observations, growth entries, activities, and questions for well-child visits. Photos and notes can add context, but the app does not score development or decide whether a delay is present.',
    safety:
      'Contact your baby’s healthcare professional whenever you are concerned about development, movement, hearing, vision, feeding, or interaction. Seek urgent care for an acute change, loss of responsiveness, breathing difficulty, or seizure-like activity.',
    sources: [
      {
        organization: 'CDC',
        title: 'Milestones by 2 Months',
        url: 'https://www.cdc.gov/act-early/milestones/2-months.html'
      },
      {
        organization: 'CDC',
        title: 'Positive Parenting Tips: Infants (0–1 years)',
        url: 'https://www.cdc.gov/child-development/positive-parenting-tips/infants.html'
      }
    ]
  },

  'baby-and-child/baby-milestones': {
    updated,
    updatedIso,
    guidance: [
      'Developmental milestones are useful observation points, not deadlines or a competition. CDC checklists describe what most children can do by a given age across social, language, thinking, and movement domains, and they are intended to support conversations with healthcare professionals.',
      'A child may reach individual skills earlier or later, but a caregiver’s concern matters. Missing several expected skills, losing a previously acquired skill, or a difference in movement, communication, hearing, or vision should prompt a conversation and, when appropriate, formal developmental screening.'
    ],
    bemama:
      'BeMama can preserve dated notes, activities, growth records, and questions across well-child visits. Use the timeline to describe what you observe; do not use it to label a child’s development as normal or delayed.',
    safety:
      'Contact your child’s healthcare professional if you are concerned or notice loss of a skill. Early discussion does not assume a diagnosis—it helps determine whether observation, screening, or support is appropriate.',
    sources: [
      {
        organization: 'CDC',
        title: 'Milestones by 2 Months',
        url: 'https://www.cdc.gov/act-early/milestones/2-months.html'
      },
      {
        organization: 'CDC',
        title: 'Positive Parenting Tips: Infants (0–1 years)',
        url: 'https://www.cdc.gov/child-development/positive-parenting-tips/infants.html'
      }
    ]
  },

  'baby-and-child/starting-solids': {
    updated,
    updatedIso,
    guidance: [
      'CDC and WHO guidance generally place the introduction of complementary foods at about six months, when a baby is developmentally ready. Readiness signs include controlling the head and neck, sitting with support, bringing objects to the mouth, and swallowing food rather than consistently pushing it out.',
      'Begin with safe textures and small amounts, then gradually expand texture and variety while continuing breast milk or formula. Prepare food to reduce choking risk, seat the baby upright, supervise every meal, and respond to hunger and fullness cues without forcing food.'
    ],
    bemama:
      'BeMama can record foods offered, textures, amounts, and observations so caregivers do not have to rely on memory. A food log cannot diagnose an allergy, distinguish gagging from choking, or determine whether a baby is ready to start solids.',
    safety:
      'Learn age-appropriate choking first aid before solids begin. Trouble breathing, facial or tongue swelling, widespread hives with other symptoms, unusual limpness, or another severe reaction requires emergency care.',
    sources: [
      {
        organization: 'CDC',
        title: 'When, What, and How to Introduce Solid Foods',
        url: 'https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/when-what-and-how-to-introduce-solid-foods.html'
      },
      {
        organization: 'WHO',
        title: 'Infant and young child feeding',
        url: 'https://www.who.int/news-room/fact-sheets/detail/infant-and-young-child-feeding'
      },
      {
        organization: 'CDC',
        title: 'Foods and Drinks to Encourage',
        url: 'https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/foods-and-drinks-to-encourage.html'
      }
    ]
  },

  'baby-and-child/vaccinations-overview': {
    updated,
    updatedIso,
    guidance: [
      'Childhood vaccination schedules are designed to provide protection when children are most vulnerable to vaccine-preventable diseases. In Canada, the timing and combination of routine doses can differ by province or territory and schedules are updated over time.',
      'Use the current schedule for the place where your child receives care and keep an official vaccination record. If a dose is late or a family moves between regions, a healthcare professional or public-health clinic can create a catch-up plan; a delayed dose does not mean the series should be restarted without advice.'
    ],
    bemama:
      'BeMama can save appointment reminders and a personal record of dates and questions, but it is not an official immunization record and does not calculate which vaccine or dose is due. Confirm every entry with the clinic or provincial record.',
    safety:
      'Discuss expected reactions and warning signs with the vaccine provider. Seek urgent medical care for breathing difficulty, facial or throat swelling, collapse, or another severe reaction after vaccination.',
    sources: [
      {
        organization: 'Public Health Agency of Canada',
        title: 'Vaccines for children: Childhood vaccination schedule',
        url: 'https://www.canada.ca/en/public-health/services/vaccination-children/when-to-vaccinate.html'
      },
      {
        organization: 'Public Health Agency of Canada',
        title: 'Provincial and territorial routine and catch-up vaccination schedules',
        url: 'https://www.canada.ca/en/public-health/services/immunization-vaccines/provincial-territorial-routine-vaccination-programs-infants-children.html'
      }
    ]
  }
};

const healthCategories = new Set(['ttc', 'pregnancy', 'newborn', 'child']);
const generatedEvidence = Object.fromEntries(
  articles
    .filter((article) => healthCategories.has(article.category))
    .map((article) => [article.slug, buildProfileEvidence(article, updated, updatedIso)])
    .filter(([, evidence]) => evidence)
);

// Bespoke evidence takes precedence over a reusable topic profile.
export const articleEvidence = {
  ...generatedEvidence,
  ...priorityEvidence
};

export function evidenceForArticle(slug, languageCode) {
  if (languageCode === 'en') {
    const evidence = articleEvidence[slug];
    return evidence ? { ...evidence, labels: labelsForEvidence('en') } : null;
  }

  const article = articleBySlug.get(slug);
  return article ? localizedProfileEvidence(article, languageCode, updatedIso) : null;
}
