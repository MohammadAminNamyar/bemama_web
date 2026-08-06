// Original long-form BeMama guides added July 30, 2026.
// English is the source language; the content hub intentionally falls back to
// English for languages that do not yet have a reviewed translation.

const makeArticle = ({ slug, category, hero, title, description, intro, sections, takeaways, faq }) => ({
  slug,
  category,
  hero,
  updated: 'July 30, 2026',
  i18n: {
    en: { title, description, intro, sections, takeaways, faq }
  }
});

export const newArticles = [
  makeArticle({
    slug: 'trying-to-conceive/preconception-medication-review',
    category: 'ttc',
    hero: 'content/generated-ttc-medication-review.png',
    title: 'A Practical Medication Review Before Pregnancy',
    description: 'How to make a safe, useful list of medicines and supplements before pregnancy, what to ask at a preconception visit, and why you should not stop prescribed treatment on your own.',
    intro: 'A medication review is one of the highest-value things to do before trying for a pregnancy. The goal is not to panic about every tablet or supplement. It is to give a qualified clinician a complete picture early enough to adjust treatment safely, protect your health, and avoid rushed decisions after a positive test.',
    sections: [
      { heading: 'Make one complete list', paragraphs: [
        'Write down every prescription medicine, over-the-counter product, vitamin, herbal product, topical cream, inhaler, and occasional pain reliever you use. Include the strength, how often you take it, why you take it, and the date you last changed the dose. A photo of labels can make the list easier to build.',
        'Do not leave out medicines that feel unrelated to fertility, such as migraine treatment, acne products, sleep aids, or medicines used only during flare-ups. A clinician can only assess the full picture when the list is honest and complete. Bring the actual containers or a current pharmacy printout when possible.'
      ] },
      { heading: 'Book the review before you need an answer', paragraphs: [
        'A preconception appointment gives you time to compare the benefits of treatment with any pregnancy considerations. Some medicines can be continued, some can be changed to a better-studied option, and some need a gradual taper. The right plan depends on the condition being treated, your dose, and your health history.',
        'Ask how far in advance a change should happen, whether a replacement needs time to work, and what to do if you conceive before the plan is complete. A written plan is especially useful for medicines that control seizures, blood pressure, diabetes, thyroid disease, depression, or severe allergies.'
      ] },
      { heading: 'Treat supplements as real medicines', paragraphs: [
        'Natural does not automatically mean safe in pregnancy. Herbal blends can contain several active ingredients, labels may not show every dose clearly, and products can vary between batches. Tell your clinician about teas, powders, gummies, fertility blends, and high-dose vitamins rather than assuming they do not count.',
        'A prenatal vitamin may be helpful, but more is not always better. Ask about folic acid, iron, iodine, vitamin D, and any nutrients that matter for your particular diet or medical history. Avoid stacking several products until someone has checked for duplicate ingredients and excessive doses.'
      ] },
      { heading: 'Plan what happens after a positive test', paragraphs: [
        'Before trying, write down who to contact if you get a positive test and whether you should arrange an early review. Knowing the plan reduces the temptation to stop treatment abruptly or wait while worrying. Keep the clinic number and the name of your pharmacy somewhere easy to find.',
        'If you discover you are pregnant while taking a medicine, pause before making changes and contact the prescriber or pharmacist promptly. Share the name, dose, timing, and the date of your last dose. Clear information helps the team make a safer decision than a sudden stop based on fear.'
      ] },
      { heading: 'Questions worth taking to the appointment', paragraphs: [
        'Useful questions include: Is this medicine compatible with pregnancy? Is there a safer alternative? What is the risk of stopping it? Do I need blood tests before changing it? What symptoms mean I should call? Ask for plain-language answers and request the plan in writing if several steps are involved.',
        'Bring your partner or a support person if you tend to forget details under pressure. You can also take notes in BeMama or on paper: the decision, the reason, the next review date, and what to do if your cycle or pregnancy status changes. The aim is a calm, shared plan.'
      ] }
    ],
    takeaways: ['List every prescription, over-the-counter product, supplement, and topical treatment.', 'Do not stop important prescribed treatment without professional guidance.', 'Ask about timing, alternatives, tapering, and what to do after a positive test.', 'Check supplements for duplicate ingredients and high doses.', 'Keep a written plan and an easy way to contact your care team.'],
    faq: [
      { q: 'Should I stop my medicine while trying to conceive?', a: 'Usually not without advice. Some conditions are more dangerous when untreated, and abrupt stopping can cause withdrawal or a return of symptoms. Contact the prescriber or pharmacist for a personalized plan before changing a regular medicine.' },
      { q: 'Do herbal fertility supplements need to be reviewed?', a: 'Yes. Herbs can have active effects, interact with medicines, or lack good pregnancy safety data. Bring the ingredient list and dose to a clinician rather than relying on the word natural.' },
      { q: 'What if I get a positive test before my appointment?', a: 'Contact the clinician who prescribes your medicine or a pharmacist promptly. Share the exact product, dose, and timing, and avoid making a sudden change until you receive guidance.' }
    ]
  }),
  makeArticle({
    slug: 'trying-to-conceive/emotional-wellbeing-while-trying',
    category: 'ttc',
    hero: 'content/generated-ttc-emotional-wellbeing.png',
    title: 'Protecting Your Emotional Wellbeing While Trying to Conceive',
    description: 'A grounded guide to managing the emotional load of trying to conceive, setting boundaries, staying connected with a partner, and recognizing when extra support would help.',
    intro: 'Trying to conceive can turn ordinary days into a cycle of hope, waiting, checking, and disappointment. Feeling excited, jealous, tired, hopeful, or detached does not mean you are handling it badly. Emotional care is part of the process, not an optional reward for when the process becomes easier.',
    sections: [
      { heading: 'Name the parts that are hardest', paragraphs: [
        'The emotional load is often made from small repeated moments: tracking signs, seeing announcements, answering questions, buying tests, or deciding whether to tell family. Naming the specific trigger makes it easier to choose a response. You may need privacy around announcements, a break from tracking, or a different way to talk with your partner.',
        'Try a short weekly check-in rather than asking yourself to process everything every day. Write three lines: what felt heavy, what helped even a little, and what you need next week. This keeps feelings visible without allowing them to fill every conversation.'
      ] },
      { heading: 'Build boundaries without apologizing', paragraphs: [
        'Boundaries are practical tools, not punishments. You can mute pregnancy-related accounts, decline a baby shower, ask relatives not to give updates about someone else’s pregnancy, or leave a group chat for a while. A simple script is enough: “I am happy for them and I need some space from pregnancy news right now.”',
        'Choose one person who understands the boundary and can help you leave difficult situations gracefully. Protecting your attention does not make you unsupportive. It gives you more capacity to care for yourself and the relationships that feel safe.'
      ] },
      { heading: 'Keep the relationship bigger than the project', paragraphs: [
        'Fertility timing can make intimacy feel scheduled and performance-based. Make room for affection that has no goal: a walk, a shared meal, a massage, or a night where fertility talk is off limits. This is not about pretending the process is easy; it is about remembering that you are partners, not only co-managers of a calendar.',
        'People often cope differently. One partner may research everything while the other avoids talking about it. Agree on a small communication rhythm and ask what kind of support is wanted before offering solutions. Listening, practical help, and quiet company are all legitimate forms of care.'
      ] },
      { heading: 'Use coping tools that actually fit', paragraphs: [
        'Choose supports you can repeat: a ten-minute walk, a device-free meal, a breathing exercise, a trusted friend, therapy, journaling, or a planned distraction after testing. The best tool is not the most impressive one; it is the one that lowers the temperature enough for you to make your next decision clearly.',
        'Be cautious with advice that promises control over conception through perfect thoughts, food, or routines. Healthy habits can support wellbeing, but a difficult emotion is not a cause of infertility. You do not need to earn a pregnancy by being calm every minute.'
      ] },
      { heading: 'Know when to ask for more support', paragraphs: [
        'Consider speaking with a mental-health professional if sadness, anxiety, anger, or numbness is persistent, affects sleep or work, creates conflict, or makes you avoid ordinary life. A therapist who understands reproductive health can offer support without treating your feelings as a problem to solve quickly.',
        'Seek urgent help if you feel unsafe, cannot care for yourself, or have thoughts of harming yourself. Tell a trusted person and contact local emergency or crisis services. Asking for help is a protective step, not an admission that you have failed.'
      ] }
    ],
    takeaways: ['Mixed feelings are normal when hope and uncertainty repeat month after month.', 'Set clear boundaries around conversations, announcements, and online content.', 'Protect couple time that has nothing to do with fertility timing.', 'Choose small coping actions that are repeatable and realistic.', 'Persistent distress deserves professional support, and urgent safety concerns need immediate help.'],
    faq: [
      { q: 'Is it wrong to feel jealous of someone else’s pregnancy?', a: 'No. Jealousy can coexist with genuine happiness for another person. Notice the feeling without turning it into a verdict about your character, then choose a boundary or support that helps you move through the moment.' },
      { q: 'How can I talk to my partner when we cope differently?', a: 'Set a short scheduled check-in and ask whether they want listening, practical help, or problem-solving. Agree on what needs a decision now and what can wait. Different coping styles can coexist when both people feel heard.' },
      { q: 'When should I consider therapy?', a: 'Therapy can help at any point, especially when distress persists, disrupts sleep or work, or strains relationships. You do not need to wait until things feel unbearable to ask for support.' }
    ]
  }),
  makeArticle({
    slug: 'trying-to-conceive/endometriosis-and-conception',
    category: 'ttc',
    hero: 'content/generated-ttc-endometriosis.png',
    title: 'Endometriosis and Conception: A More Informed Starting Point',
    description: 'What to track, discuss, and plan when endometriosis may affect conception, including pain, previous treatment, timing of referral, and supportive next steps.',
    intro: 'Endometriosis can make trying to conceive feel especially uncertain, but uncertainty is not the same as hopelessness. A thoughtful plan starts with your symptoms, history, and goals. The purpose of this guide is to help you prepare for a useful conversation with qualified care, not to predict an individual outcome.',
    sections: [
      { heading: 'Bring the whole history', paragraphs: [
        'Write down cycle length, pain pattern, bleeding changes, bowel or bladder symptoms around your period, prior scans, surgeries, and treatments. Include how symptoms affect work, sleep, exercise, and sex. These details help a clinician see the condition as a lived pattern rather than a single diagnosis label.',
        'Gather records if you have them, but do not delay an appointment because paperwork is incomplete. A short timeline with dates and the questions you most want answered is enough to begin. Add your partner’s health history too, because fertility is shared.'
      ] },
      { heading: 'Understand why timing of help matters', paragraphs: [
        'Some people with endometriosis conceive without assistance, while others benefit from an earlier fertility evaluation. The best timing depends on age, symptoms, ovarian reserve considerations, previous surgery, other diagnoses, and how long you have been trying. A clinician can explain the reasoning rather than applying one rule to everyone.',
        'Ask what can be assessed now and what would change the plan later. You may discuss ovulation, semen analysis, tubal or uterine evaluation, pain treatment, or referral to a fertility specialist. A referral is information-gathering, not a commitment to a particular treatment.'
      ] },
      { heading: 'Think about pain as part of fertility care', paragraphs: [
        'Pain with sex, bowel movements, or movement deserves attention even when pregnancy is the immediate goal. You should not have to push through severe pain to meet a timing schedule. Ask about positions, lubricants, non-hormonal comfort measures, and ways to protect intimacy while keeping the process manageable.',
        'Because some hormonal treatments used for endometriosis prevent ovulation, explain your current goal before changing anything. Do not stop or restart treatment based on internet advice. The care team can balance symptom control with the timeline you want.'
      ] },
      { heading: 'Care for the body between appointments', paragraphs: [
        'Regular meals, movement that feels tolerable, sleep support, and a plan for flare days can improve daily function even though they do not cure endometriosis. Track what genuinely helps rather than chasing a perfect diet or supplement routine. Avoid advice that blames pain or fertility outcomes on a lack of willpower.',
        'Create a flare plan: who can help, which clinician to call, what work can be postponed, and which comfort measures are safe for you. If a medicine may be used during pregnancy, confirm the dose and timing with a professional before trying.'
      ] },
      { heading: 'Questions for the next visit', paragraphs: [
        'Ask: How might my symptoms or prior surgery affect the plan? Should we evaluate both partners now? What signs mean I should return sooner? Which pain options are compatible with trying? What are the next two steps, and when will we reassess?',
        'Take notes and ask the clinician to define unfamiliar terms. If the appointment feels rushed, request a written summary or a follow-up. Good care should leave you with a clearer plan, even when it cannot promise a specific result.'
      ] }
    ],
    takeaways: ['Bring symptom patterns, treatment history, and the effect of pain on daily life.', 'Earlier evaluation may be useful, but the right timing is individualized.', 'Do not change hormonal or pain treatment without professional guidance.', 'Protect intimacy from becoming a test of endurance.', 'Use visits to clarify the next two steps rather than trying to predict the entire path.'],
    faq: [
      { q: 'Does endometriosis always prevent pregnancy?', a: 'No. Some people with endometriosis conceive without fertility treatment, while others need support. Symptoms, age, anatomy, prior treatment, and partner factors all influence the plan.' },
      { q: 'Should I see a fertility specialist right away?', a: 'Discuss timing with your gynecologist or primary clinician. Severe symptoms, previous surgery, known tubal concerns, age-related factors, or a longer period of trying may support earlier referral.' },
      { q: 'Can I take my usual pain medicine while trying?', a: 'Ask the prescriber or pharmacist about the specific product, dose, and timing. The safest choice depends on your health and whether pregnancy is possible in the current cycle.' }
    ]
  }),
  makeArticle({
    slug: 'trying-to-conceive/fertility-friendly-meal-patterns',
    category: 'ttc',
    hero: 'content/generated-ttc-nourishing-dinner.png',
    title: 'Fertility-Friendly Meal Patterns Without a Perfect Diet',
    description: 'A realistic preconception nutrition guide focused on balanced meals, steady energy, key nutrients, food safety, and sustainable habits instead of restrictive fertility rules.',
    intro: 'There is no magic menu that guarantees conception. A more useful approach is to build meals that support steady energy, overall health, and the nutrients needed before pregnancy. Small repeatable patterns matter more than a perfect week or a list of foods you are told to fear.',
    sections: [
      { heading: 'Build a balanced plate', paragraphs: [
        'At most meals, combine a source of protein, a high-fiber carbohydrate, vegetables or fruit, and a source of unsaturated fat. Examples include lentils with rice and salad, eggs with whole-grain toast and fruit, or tofu with noodles and vegetables. This pattern is flexible across cultures and budgets.',
        'If appetite, nausea, shift work, or a medical condition makes large meals difficult, use smaller combinations more often. A yogurt with oats and fruit, soup with beans, or a sandwich with vegetables can still be a complete, useful meal.'
      ] },
      { heading: 'Pay attention to the nutrients that matter', paragraphs: [
        'Folic acid is especially important before pregnancy, and a prenatal vitamin may help fill gaps. Iron, iodine, vitamin D, calcium, choline, and omega-3 fats may also matter depending on your diet and health. Ask a clinician which supplement and dose are appropriate instead of combining several products.',
        'Vegetarian, vegan, gluten-free, dairy-free, and culturally specific diets can all support pregnancy when planned thoughtfully. If you have anemia, diabetes, a digestive condition, a history of an eating disorder, or a restricted diet, a dietitian can make the plan safer and less stressful.'
      ] },
      { heading: 'Use food safety habits now', paragraphs: [
        'Wash produce, keep raw and cooked foods separate, refrigerate leftovers promptly, and cook high-risk foods thoroughly. Learning these habits before a positive test makes the transition into pregnancy easier. If you are unsure about a food, check local public-health guidance rather than relying on a long social-media list.',
        'Caffeine and alcohol deserve a personal conversation with your care team, especially if you use caffeine to manage fatigue or work long hours. Avoid turning one meal or one drink into a source of shame; focus on the pattern and the next practical choice.'
      ] },
      { heading: 'Make the plan affordable and repeatable', paragraphs: [
        'Choose a few low-cost staples that can be mixed and matched: beans, eggs, oats, frozen vegetables, canned fish with appropriate local guidance, fruit, whole grains, and plain yogurt or alternatives. Batch-cook one component rather than trying to prepare every meal in advance.',
        'Keep emergency meals available for busy days. A healthy pattern that survives fatigue is more valuable than an ambitious plan that collapses after a week. Share the work with your partner and agree on a short shopping list you can reuse.'
      ] },
      { heading: 'Let nutrition support wellbeing', paragraphs: [
        'Food is not a moral test and body size does not tell you how hard someone is trying. Focus on nourishment, enjoyment, and medical needs. If tracking food increases anxiety or brings back restrictive behaviors, step away from detailed tracking and ask for supportive professional help.',
        'At your preconception visit, ask whether you need screening for anemia, diabetes, thyroid concerns, or other issues. Nutrition works best when it is connected to real health information rather than generic promises about fertility.'
      ] }
    ],
    takeaways: ['Use a flexible plate pattern with protein, fiber-rich carbohydrates, produce, and healthy fats.', 'Ask about folic acid and other supplements before combining products.', 'Practice food safety and discuss caffeine or alcohol with qualified care.', 'Use affordable staples and emergency meals to keep habits realistic.', 'Nourishment is not a moral test, and a diet should not increase anxiety.'],
    faq: [
      { q: 'Is there one best fertility diet?', a: 'No single diet guarantees conception. A varied pattern with enough energy, protein, fiber, and key nutrients supports general health and can be adapted to your culture, budget, and medical needs.' },
      { q: 'Should I avoid all sugar or carbohydrates?', a: 'Usually not. Carbohydrates provide energy and can be part of balanced meals. If you have diabetes or another condition that changes nutrition needs, ask your clinician or dietitian for individualized guidance.' },
      { q: 'Can I take several fertility supplements together?', a: 'Check every label with a clinician or pharmacist. Multiple products can duplicate ingredients or provide high doses, and some herbs have limited safety information around pregnancy.' }
    ]
  }),
  makeArticle({
    slug: 'trying-to-conceive/pcos-and-ovulation-tracking',
    category: 'ttc',
    hero: 'content/generated-ttc-pcos-tracking.png',
    title: 'PCOS and Ovulation Tracking: Use Data Without Letting It Take Over',
    description: 'How to track ovulation with PCOS more thoughtfully, understand the limits of apps and tests, record useful patterns, and know when to ask for clinical support.',
    intro: 'PCOS can make cycle tracking confusing because ovulation may not follow a predictable calendar and some tests can show repeated hormone rises. Tracking can still be useful when it is treated as information rather than a promise. The goal is to notice patterns and bring better questions to care.',
    sections: [
      { heading: 'Start with the cycle pattern you actually have', paragraphs: [
        'Record the first day of bleeding, the length of each cycle, spotting, pain, cervical-fluid changes, and any treatment or illness that may affect timing. Do not force your cycle into a 28-day template. A simple record over several months is often more informative than a single app prediction.',
        'If periods are very far apart or absent, that is worth discussing even if you are not ready to try immediately. Long gaps can matter for health and may make calendar-based fertile-window guesses especially unreliable.'
      ] },
      { heading: 'Know what each tool can and cannot say', paragraphs: [
        'Ovulation predictor kits detect a hormone signal, not the release of an egg itself. With PCOS, the signal may rise more than once or remain elevated, so a positive result may need context. Basal temperature can show a sustained change after ovulation, but it confirms a pattern retrospectively rather than predicting the day.',
        'Cervical fluid observations can add another clue, while ultrasound or blood tests used by a clinician can answer different questions. No home tool needs to be used perfectly. Pick one or two methods you can maintain without increasing stress.'
      ] },
      { heading: 'Use timing that is broad enough', paragraphs: [
        'When ovulation is unpredictable, intercourse every few days through the cycle can be more practical than trying to identify one perfect day. If that is not comfortable or feasible, ask a clinician about ways to make timing more targeted. The best plan is one that respects intimacy, energy, and your relationship.',
        'Avoid turning every symptom into a diagnosis. Sleep changes, discharge, breast tenderness, and mood can have many causes. Record them briefly, then look for patterns across cycles instead of interpreting each sign in isolation.'
      ] },
      { heading: 'Ask about treatment options early enough', paragraphs: [
        'A clinician may discuss metabolic health, medications, ovulation induction, or referral depending on your history. You do not need to wait indefinitely when cycles are highly irregular or when you already know PCOS affects ovulation. Bring your tracking record and your goals so the conversation is specific.',
        'Ask what success would look like, how monitoring works, which side effects matter, and when the plan changes. Understanding the next decision point can reduce the pressure to decode every home test.'
      ] },
      { heading: 'Keep tracking emotionally sustainable', paragraphs: [
        'Set a limit on how often you check the app or search symptoms. A weekly review may be enough. If tracking causes panic, arguments, or avoidance of sex, pause and discuss a lower-tech approach with your partner or clinician.',
        'PCOS is a health condition, not a personal failure. Sleep, food, movement, and stress support overall health, but none of them need to be perfect for you to deserve care or hope. Use data to get support, not to judge yourself.'
      ] }
    ],
    takeaways: ['PCOS can make calendar predictions and hormone tests less straightforward.', 'Use a small set of observations and look for patterns across cycles.', 'No home tool proves ovulation on its own.', 'Broad timing may be more practical than chasing one ideal day.', 'Ask for care earlier when cycles are very irregular, absent, or stressful to manage.'],
    faq: [
      { q: 'Can an ovulation test be positive more than once with PCOS?', a: 'It can happen because hormone patterns may include more than one rise or a longer elevated period. Discuss repeated positives with a clinician and consider combining methods rather than relying on one strip.' },
      { q: 'Do I need to track basal temperature?', a: 'No. It can be useful for some people, but it is optional and mainly helps confirm a pattern after ovulation. Choose methods that provide information without harming sleep or increasing anxiety.' },
      { q: 'When should I seek help if my periods are irregular?', a: 'You can ask for an evaluation before trying or early in the process, especially if periods are absent, very far apart, or accompanied by significant pain or other symptoms.' }
    ]
  }),
  makeArticle({
    slug: 'trying-to-conceive/fertility-after-birth-control',
    category: 'ttc',
    hero: 'content/generated-ttc-after-birth-control.png',
    title: 'What to Expect When Fertility Returns After Birth Control',
    description: 'A practical guide to cycle changes after stopping contraception, when to start trying, what variation is normal, and which changes deserve a clinician’s attention.',
    intro: 'Many people wonder whether they need to wait after stopping birth control. The answer depends on the method and your health, but fertility can return before the first “normal” period. Understanding what may change helps you plan without treating every variation as a warning sign.',
    sections: [
      { heading: 'Separate return of ovulation from return of a regular cycle', paragraphs: [
        'Ovulation can happen before the first period after stopping some methods, which means pregnancy may be possible sooner than expected. Other methods can take longer for ovulation to resume. Ask about your specific method rather than using a friend’s timeline as a prediction.',
        'The first few cycles may be different in length, flow, cramps, or premenstrual symptoms. If you used hormonal contraception for years, you may also be noticing your underlying pattern for the first time. Track gently and give the body time to show its rhythm.'
      ] },
      { heading: 'Plan the transition', paragraphs: [
        'Before stopping, make a list of medicines, start any recommended prenatal vitamin, and decide how you will record periods. If avoiding pregnancy until a certain date, use another reliable method during the transition. If trying immediately, know who to contact with questions about a positive test.',
        'A method may have special instructions. An injection, implant, intrauterine device, pill, patch, ring, or barrier method each has a different removal or stopping process. Follow the product or clinician’s instructions and do not remove a device yourself.'
      ] },
      { heading: 'Interpret early changes carefully', paragraphs: [
        'Spotting, breast tenderness, acne, mood changes, and cramps can reflect hormone shifts, ovulation, a period, or another cause. Apps can be especially inaccurate during an unsettled transition. Record dates and symptoms, but avoid using a single unusual cycle to draw a conclusion.',
        'If you are trying to conceive, broad intercourse timing every few days can be less stressful than waiting for a precise prediction. If cycles remain unpredictable, ask about a preconception assessment rather than increasing tracking until it becomes exhausting.'
      ] },
      { heading: 'Know when to check in', paragraphs: [
        'Contact a clinician if periods do not return within the timeframe they gave you, if bleeding is very heavy or painful, if you have severe pelvic pain, or if you are worried about pregnancy. The right timeframe varies by method, so ask for a method-specific plan.',
        'If pregnancy has not happened after the usual period for your age and history, seek guidance. Earlier assessment can be appropriate with irregular or absent cycles, known endometriosis or PCOS, prior pelvic surgery, or other concerns.'
      ] },
      { heading: 'Give yourself a workable timeline', paragraphs: [
        'It is easy to expect an immediate “reset,” but the body is not a switch. Use the first months to learn your pattern, prepare appointments, and make routines sustainable. A delayed cycle does not automatically mean the method caused lasting fertility problems.',
        'Keep contraception questions and fertility questions separate. You can ask both: how quickly pregnancy may be possible and how to protect against it if your plans change. Clear information is more useful than internet countdowns.'
      ] }
    ],
    takeaways: ['Ovulation may return before the first period after stopping some methods.', 'The return timeline depends on the contraception method and the individual.', 'Track gently because early cycles can be irregular or unfamiliar.', 'Follow specific removal and stopping instructions.', 'Ask for care sooner with severe symptoms, absent cycles, or known fertility concerns.'],
    faq: [
      { q: 'Do I need to wait three months after stopping birth control?', a: 'Not as a universal rule. Some methods allow pregnancy as soon as ovulation returns, while others have a different timeline. Ask about the exact method you used and your health history.' },
      { q: 'Can I get pregnant before my first period?', a: 'Yes, because ovulation happens before a period. If you are trying, pregnancy may be possible early; if you are not, use another reliable method during the transition.' },
      { q: 'When should my periods be checked?', a: 'Ask the clinician who provided the method for a timeframe. Seek help sooner for severe pain, unusually heavy bleeding, pregnancy concerns, or a history that already makes cycles unpredictable.' }
    ]
  }),
  makeArticle({
    slug: 'trying-to-conceive/coping-with-negative-pregnancy-test',
    category: 'ttc',
    hero: 'content/generated-ttc-negative-test.png',
    title: 'Coping With a Negative Pregnancy Test',
    description: 'A compassionate, practical guide to what a negative test can mean, when to retest, how to care for yourself, and how to decide on the next step without self-blame.',
    intro: 'A negative pregnancy test can bring relief, disappointment, confusion, or several feelings at once. It is a result, not a verdict about your body or your future. Give yourself a little space to feel it, then use the timing and your cycle information to decide what to do next.',
    sections: [
      { heading: 'Check the timing before interpreting the result', paragraphs: [
        'Home tests detect pregnancy hormone after it rises enough to be measured. Testing before the expected period, testing later in the day, or using diluted urine can produce a negative result even when pregnancy is very early. Read the instructions for the test you used and check its expiration date.',
        'If your period has not arrived, consider retesting in a few days or asking a clinician when a blood test would be useful. If you have a very irregular cycle, base the timing on the last possible ovulation or ask for guidance rather than repeating tests indefinitely.'
      ] },
      { heading: 'Let the emotional response be real', paragraphs: [
        'You do not need to make the result sound positive for other people. A short message such as “It was negative and I need a quiet day” can protect you from explaining more than you want. Choose one gentle action: a walk, a meal, a shower, a phone call, or rest.',
        'Avoid turning disappointment into a list of things you did wrong. Conception is influenced by biology and chance, and a negative result is not proof that you were too stressed, ate the wrong food, or missed a hidden rule.'
      ] },
      { heading: 'Talk with your partner in the way you need', paragraphs: [
        'Partners can react differently. One person may want to analyze timing while the other needs comfort or distraction. Say which one you need today and choose a separate time for planning. This keeps a hard moment from becoming an argument about who is coping correctly.',
        'If sex has started to feel like a duty, consider a short reset from fertility talk while staying connected in other ways. A plan that protects the relationship is more sustainable than one that treats closeness as a monthly assignment.'
      ] },
      { heading: 'Choose the next decision point', paragraphs: [
        'Write down the next useful question: retest, wait for the period, schedule a preconception visit, review tracking, or ask about fertility evaluation. You do not have to decide every future treatment after one result. A clear next step is enough.',
        'If you have been trying for a while, have irregular or absent periods, significant pain, or a known condition, ask for advice earlier. Fertility evaluation can include both partners and is a way to gather information, not a prediction that treatment will be required.'
      ] },
      { heading: 'Know when symptoms need care', paragraphs: [
        'A negative test does not explain severe one-sided pain, fainting, shoulder pain, heavy bleeding, fever, or feeling acutely unwell. Contact urgent care for concerning symptoms, especially if pregnancy is still possible. Keep the test result and timing available when you call.',
        'For the emotional side, reach out if sadness or anxiety persists, affects daily life, or makes you feel unsafe. Support can be practical, medical, or therapeutic. You deserve care during the waiting period too.'
      ] }
    ],
    takeaways: ['A negative result may be too early to be conclusive if the period is not due.', 'Retest thoughtfully instead of testing repeatedly without a plan.', 'Disappointment is valid and is not evidence of personal failure.', 'Choose one next decision point rather than planning the entire future.', 'Seek urgent help for severe symptoms or immediate emotional safety concerns.'],
    faq: [
      { q: 'How long should I wait before retesting?', a: 'If your period has not arrived, many people retest after a few days using the instructions for that product. With irregular cycles, ask a clinician for timing based on your possible ovulation date.' },
      { q: 'Can stress cause a negative test?', a: 'Stress can affect cycles for some people, but a negative test mainly reflects pregnancy hormone being absent or not yet high enough to detect. Do not blame yourself for the result.' },
      { q: 'When should I ask for fertility testing?', a: 'The timing depends on age, cycle regularity, medical history, and how long you have tried. Ask earlier if periods are absent or very irregular, pain is significant, or you already know of a fertility concern.' }
    ]
  }),
  makeArticle({
    slug: 'trying-to-conceive/cycle-planning-week-by-week',
    category: 'ttc',
    hero: 'content/generated-ttc-cycle-planning.png',
    title: 'A Low-Stress Cycle Planning Routine, Week by Week',
    description: 'A simple cycle-planning routine for noticing periods, preparing for the fertile window, timing intimacy, and reviewing patterns without turning every day into a fertility test.',
    intro: 'Cycle tracking works best when it gives you a little clarity without taking over your life. This week-by-week approach is a flexible starting point for people with fairly predictable cycles. If your cycles are irregular, use the principles rather than the calendar labels and ask for individualized guidance.',
    sections: [
      { heading: 'Week one: mark the start and reset', paragraphs: [
        'Day one is usually the first day of full menstrual bleeding, not light spotting. Record the date, flow pattern, pain, and any medicine or symptom that matters. Then reset the goal: one useful note per day is enough. You do not need to track every sensation.',
        'Use this week to restock prenatal vitamins if recommended, review medicines, plan nourishing meals, and make space for sleep. If pain is severe, bleeding is unusually heavy, or periods interfere with daily life, write that down for a clinician rather than accepting it as something you must simply endure.'
      ] },
      { heading: 'Week two: watch for changing signs', paragraphs: [
        'As bleeding ends, notice changes in cervical fluid, energy, or mood without assigning each one a diagnosis. If you use ovulation tests, follow the product instructions and remember that the timing varies. An app can suggest a window, but it cannot see your actual biology.',
        'If you are trying to conceive, intercourse every few days can cover a broad window without requiring perfect prediction. If timing feels stressful or painful, talk with your partner and choose a plan that protects closeness as well as conception goals.'
      ] },
      { heading: 'Week three: confirm patterns, do not chase certainty', paragraphs: [
        'Some people notice a temperature shift or a change in cervical fluid after ovulation. These signs are useful as a pattern across cycles, not as proof from a single day. Keep the record short: date, observation, and one question if something is unclear.',
        'After the possible fertile window, return to ordinary routines. Avoid testing so early that repeated negatives create more anxiety. Decide in advance when you will test and what support you want during the wait.'
      ] },
      { heading: 'Week four: test or begin again with kindness', paragraphs: [
        'If your period is late, use a home pregnancy test according to its instructions. If it is negative and your period has not arrived, ask when to retest instead of assuming the result explains the whole cycle. Record the outcome and move forward without rewriting the previous weeks as a failure.',
        'If a period begins, give yourself a day or two before reviewing. Look for one pattern that helps and one change that would make the next cycle easier. A useful review might be “tests started too early” or “we need a better plan for work nights,” not a long list of flaws.'
      ] },
      { heading: 'Adapt the calendar to your real life', paragraphs: [
        'Travel, shift work, illness, breastfeeding, stopping contraception, PCOS, thyroid disease, and stress can change cycle timing. When the calendar stops matching the body, broaden the approach and ask for support. Do not increase tracking just because prediction has become harder.',
        'Set a monthly limit on fertility content and choose a trusted source for questions. The purpose of a plan is to make care more accessible and decisions more informed. If the plan creates more fear than clarity, simplify it.'
      ] }
    ],
    takeaways: ['Mark the first day of full bleeding and track only observations that help decisions.', 'Use broad timing when possible instead of chasing one exact day.', 'Home tests and apps have limits, especially with irregular cycles.', 'Choose a testing date and support plan before the waiting period.', 'Simplify tracking when it increases anxiety or stops matching your health context.'],
    faq: [
      { q: 'What is the best day to have sex when trying?', a: 'The fertile window spans several days, so intercourse every few days or around the signs of possible ovulation can be practical. Ask a clinician if cycles are very irregular or timing is difficult.' },
      { q: 'Do I need to track everything for this to work?', a: 'No. Tracking is optional and should serve you. A simple record of period dates and one or two signs may be enough, while some people prefer no tracking at all.' },
      { q: 'What if my cycle does not fit four weeks?', a: 'Use the week labels loosely or abandon them. Track your actual pattern and discuss very long, very short, absent, or highly unpredictable cycles with qualified care.' }
    ]
  }),

  makeArticle({
    slug: 'pregnancy/healthy-weight-gain',
    category: 'pregnancy',
    hero: 'content/generated-pregnancy-healthy-gain.png',
    title: 'Healthy Pregnancy Weight Gain: A Supportive, Individual Approach',
    description: 'How to think about pregnancy weight gain as a health conversation, what influences the range, how to nourish yourself, and when to ask for extra support.',
    intro: 'Weight gain in pregnancy is expected, but the “right” amount is not one number for every person. It depends on factors such as pre-pregnancy health, whether you are carrying more than one baby, and how pregnancy is progressing. The useful goal is steady care, not constant self-surveillance.',
    sections: [
      { heading: 'Start with individualized guidance', paragraphs: [
        'At a prenatal visit, ask how your clinician is thinking about weight gain for your body and pregnancy. General charts are starting points, not grades. They should be considered alongside blood pressure, fetal growth, nutrition, activity, symptoms, and your medical history.',
        'If weight conversations have been difficult or you have a history of an eating disorder, say so. Your care team can use neutral language, limit unnecessary weighing, and involve a dietitian or mental-health professional when that would make care safer.'
      ] },
      { heading: 'Nourish rather than restrict', paragraphs: [
        'Pregnancy needs vary by trimester, appetite, nausea, activity, and health. Aim for regular meals and snacks that combine protein, fiber-rich carbohydrates, produce, and healthy fats. Fluids, iron-rich foods, calcium, and the nutrients in a recommended prenatal vitamin also matter.',
        'Avoid using hunger, cravings, or one larger meal as evidence that you have lost control. Pregnancy is not the time for a restrictive weight-loss plan unless a specialist has given you a specific medical plan. Ask for help if nausea, vomiting, food aversions, or diabetes makes eating difficult.'
      ] },
      { heading: 'Use movement for function and wellbeing', paragraphs: [
        'For many pregnancies, gentle to moderate movement supports energy, sleep, strength, and mood. The right activity depends on your health and pregnancy, so ask what is safe for you. Walking, swimming, mobility work, or prenatal strength exercises may be useful options.',
        'Stop and seek advice for symptoms such as bleeding, fluid leakage, chest pain, faintness, severe shortness of breath, or regular painful contractions. Movement should support your body, not become a way to compensate for eating or meet an arbitrary number.'
      ] },
      { heading: 'Notice changes that need a conversation', paragraphs: [
        'A sudden change in weight, persistent inability to keep food down, swelling with headache or vision changes, or symptoms of high blood sugar deserves a call to your prenatal team. Do not wait for the next routine appointment if something feels significantly different.',
        'Your clinician may review blood pressure, urine, blood tests, glucose, fetal growth, or hydration. Those checks are more informative than a scale number alone and can help identify support early.'
      ] },
      { heading: 'Protect the relationship with your body', paragraphs: [
        'Pregnancy changes can feel visible before they feel emotionally familiar. Wear clothes that fit, reduce social-media comparison, and ask loved ones not to comment on your size or appetite. You are allowed to redirect the conversation toward how you are feeling.',
        'After birth, recovery does not follow a deadline. Give your body time and seek support for nutrition, movement, pain, mood, or feeding. Health is a long relationship, not a before-and-after project.'
      ] }
    ],
    takeaways: ['Pregnancy weight gain ranges are individualized and are not grades.', 'Ask for neutral, specific guidance if weight conversations are difficult.', 'Prioritize regular nourishment, fluids, and recommended prenatal nutrients.', 'Use movement for function and wellbeing, not compensation.', 'Call your prenatal team for sudden changes or concerning symptoms.'],
    faq: [
      { q: 'Is there one healthy amount of weight to gain?', a: 'No. Guidance depends on pre-pregnancy health, the pregnancy, and your clinician’s assessment. General ranges are starting points and should not be used as a personal grade.' },
      { q: 'Should I try to lose weight during pregnancy?', a: 'Do not start a restrictive plan without discussing it with your prenatal team. The priority is adequate nourishment and safe care; individualized nutrition support is available when needed.' },
      { q: 'How can I handle unwanted comments about my body?', a: 'Try a direct script such as “I am focusing on how I feel, not comments about my size.” Ask a trusted person to help change the subject and mute accounts that increase comparison.' }
    ]
  }),
  makeArticle({
    slug: 'pregnancy/headaches-when-to-call',
    category: 'pregnancy',
    hero: 'content/generated-pregnancy-headache-warning.png',
    title: 'Headaches in Pregnancy: Comfort Measures and When to Call',
    description: 'How to notice common headache triggers in pregnancy, use simple comfort measures, check medicines safely, and recognize symptoms that need prompt care.',
    intro: 'Headaches can happen during pregnancy because of hormones, dehydration, hunger, sleep disruption, stress, congestion, or changes in caffeine. Many are manageable, but a new or severe headache can also be a sign that needs assessment. Pay attention to the pattern and trust a meaningful change.',
    sections: [
      { heading: 'Describe the pattern clearly', paragraphs: [
        'Record when the headache started, where it hurts, how severe it feels, how long it lasts, and what makes it better or worse. Note vision changes, nausea, fever, swelling, blood-pressure readings if you have them, and any new medicine. This information helps your clinician triage the concern.',
        'A familiar mild headache that improves with rest may be different from a sudden, severe, persistent, or unusual headache. You do not need to diagnose the cause before calling. Describe what has changed from your normal pattern.'
      ] },
      { heading: 'Try basic support if your team has said it is appropriate', paragraphs: [
        'Drink fluids, eat a snack with protein or carbohydrate, rest in a quiet dim room, and consider a cool or warm compress. Gentle neck and shoulder movement may help when tension is involved. Regular sleep, meals, and a gradual caffeine plan can reduce preventable triggers.',
        'Ask before taking pain medicine, especially if you have high blood pressure, liver or kidney concerns, or other medicines. Do not use someone else’s prescription or assume that a product labeled natural is pregnancy-safe.'
      ] },
      { heading: 'Know the symptoms that need prompt advice', paragraphs: [
        'Call your prenatal team promptly for a severe headache, a headache that does not improve, a new headache after mid-pregnancy, or headache with vision changes, upper abdominal pain, sudden swelling, shortness of breath, weakness, confusion, or high blood pressure. These symptoms need a professional assessment.',
        'Seek urgent care for a sudden “worst headache,” fainting, seizure, difficulty speaking, one-sided weakness, severe neck stiffness, or a high fever. If you are unsure, call and explain the symptoms rather than waiting for certainty.'
      ] },
      { heading: 'Check the surrounding factors', paragraphs: [
        'Ask whether you are drinking enough, eating at regular intervals, sleeping, and spending long periods in heat or screen glare. Congestion, anemia, vision changes, or medication changes can also contribute. Your clinician may recommend blood-pressure checks or tests based on the full picture.',
        'Do not assume every headache is “just pregnancy.” A clear record gives your team the chance to identify a treatable cause and choose a medicine or plan that fits your health.'
      ] },
      { heading: 'Make a simple call plan', paragraphs: [
        'Save your prenatal team’s number and know whether they use an after-hours line. Keep a note with your gestational week, allergies, medicines, and recent blood-pressure readings if available. This reduces friction when you feel unwell.',
        'If headaches are recurring, ask for a prevention plan at a routine visit. Discuss hydration, sleep, safe medicines, caffeine, and when an appointment or urgent evaluation is needed. A written plan can be reassuring without minimizing symptoms.'
      ] }
    ],
    takeaways: ['Record timing, severity, associated symptoms, and what changed from your usual pattern.', 'Fluids, food, rest, and a quiet room may help mild headaches.', 'Check every medicine with your prenatal team or pharmacist.', 'Headache with vision changes, swelling, upper abdominal pain, or high blood pressure needs prompt advice.', 'Sudden severe neurological symptoms require urgent care.'],
    faq: [
      { q: 'Are headaches common in pregnancy?', a: 'They can be, especially with hormonal changes, dehydration, hunger, poor sleep, congestion, or caffeine changes. A new, severe, persistent, or unusual headache still deserves professional advice.' },
      { q: 'What pain medicine can I take?', a: 'The answer depends on your pregnancy, health, allergies, and other medicines. Ask your prenatal clinician or pharmacist for product-specific guidance rather than choosing from a general internet list.' },
      { q: 'When is a headache an emergency?', a: 'Seek urgent care for a sudden extreme headache, fainting, seizure, confusion, one-sided weakness, trouble speaking, severe neck stiffness, or high fever. Call your prenatal team promptly for other severe or unusual patterns.' }
    ]
  }),
  makeArticle({
    slug: 'pregnancy/swelling-and-edema',
    category: 'pregnancy',
    hero: 'content/generated-pregnancy-swelling.png',
    title: 'Swelling and Edema in Pregnancy: Everyday Comfort and Warning Signs',
    description: 'A practical guide to common pregnancy swelling, comfort measures, footwear and movement, and symptoms that need a call to your prenatal team.',
    intro: 'Swelling in the feet, ankles, fingers, or legs is common in pregnancy as the body holds more fluid and the growing uterus affects circulation. It can be uncomfortable, but the pattern matters. Gradual swelling on both sides is different from sudden or one-sided swelling with other symptoms.',
    sections: [
      { heading: 'Notice when and where it happens', paragraphs: [
        'Track whether swelling builds later in the day, after standing, in hot weather, or after a salty meal. Note if it affects both feet or hands similarly and whether it improves overnight. A simple photo or note can help your clinician see change over time.',
        'Remove rings before fingers become very swollen and choose shoes with room to expand. Ask before using compression garments, especially if swelling is painful, one-sided, or linked with a circulation problem.'
      ] },
      { heading: 'Support circulation gently', paragraphs: [
        'Change positions regularly, avoid standing still for long periods, elevate your legs when resting, and take gentle movement breaks if your prenatal team says activity is safe. Comfortable walking, ankle circles, or swimming may help some people.',
        'Sleep and rest on your side if that is comfortable and recommended for your stage of pregnancy. Do not restrict fluids to reduce swelling; dehydration can make you feel worse. Ask your clinician about salt and fluid guidance rather than making a severe change.'
      ] },
      { heading: 'Make daily comfort easier', paragraphs: [
        'Wear supportive shoes, avoid tight bands around the ankles, and keep a spare pair of comfortable shoes at work or in the car. Cool—not icy—water and a short rest can feel soothing after a long day.',
        'Ask for help with tasks that require prolonged standing or carrying. Workplace adjustments such as a chair, short breaks, or the ability to change position can support both comfort and safety.'
      ] },
      { heading: 'Know the warning patterns', paragraphs: [
        'Call your prenatal team promptly for sudden swelling of the face or hands, rapid swelling, severe headache, vision changes, upper abdominal pain, shortness of breath, or high blood pressure. These symptoms may need same-day assessment.',
        'Seek urgent care for one-sided leg swelling with pain, warmth, redness, or sudden breathing difficulty or chest pain. Do not massage a painful swollen leg until a clinician has advised you.'
      ] },
      { heading: 'Bring questions to routine care', paragraphs: [
        'Ask how your clinician wants you to monitor blood pressure, which changes are expected at your gestational week, and whether activity or compression support is appropriate. Tell them about swelling that is persistent, uncomfortable, or changing even if it seems mild.',
        'The goal is not to eliminate every change. It is to distinguish ordinary discomfort from a pattern that deserves evaluation and to give you practical tools for the ordinary days.'
      ] }
    ],
    takeaways: ['Gradual, fairly even swelling is common, but pattern and associated symptoms matter.', 'Elevate legs, change position, move gently, and keep fluids adequate if advised.', 'Use roomy supportive footwear and ask about workplace adjustments.', 'Sudden swelling with headache, vision changes, pain, or high blood pressure needs prompt advice.', 'One-sided painful swelling or chest symptoms need urgent care.'],
    faq: [
      { q: 'Is swelling in pregnancy normal?', a: 'Gradual swelling in both feet or ankles is common, especially later in the day. Sudden, severe, one-sided, or symptom-associated swelling should be assessed.' },
      { q: 'Should I drink less water?', a: 'Usually not. Restricting fluids can worsen dehydration. Ask your prenatal team for guidance specific to your health, blood pressure, and pregnancy.' },
      { q: 'Can I use compression socks?', a: 'Some people benefit, but fit and timing matter. Ask your clinician first, particularly if swelling is one-sided, painful, or linked with circulation concerns.' }
    ]
  }),
  makeArticle({
    slug: 'pregnancy/pelvic-floor-preparation',
    category: 'pregnancy',
    hero: 'content/generated-pregnancy-pelvic-floor.png',
    title: 'Preparing Your Pelvic Floor During Pregnancy',
    description: 'How to understand the pelvic floor, practice gentle coordination and breathing, manage common symptoms, and find specialized support before birth.',
    intro: 'The pelvic floor is a group of muscles and connective tissues that support the bladder, bowel, and reproductive organs. Pregnancy and birth place changing demands on it. Preparation is not about tightening as hard as possible; it is about strength, relaxation, coordination, and knowing when to ask for help.',
    sections: [
      { heading: 'Learn the full job of the muscles', paragraphs: [
        'The pelvic floor helps close openings when needed and relaxes for urination, bowel movements, sex, and birth. Some people need more strength, while others have muscles that are already tense or painful. A one-size-fits-all squeeze routine can miss the actual problem.',
        'Notice whether you can gently contract and fully release without holding your breath, tightening your jaw, or gripping your buttocks. The release matters as much as the lift. If you feel pain, pressure, or uncertainty, ask a pelvic-health physiotherapist or clinician.'
      ] },
      { heading: 'Coordinate with breathing', paragraphs: [
        'Try a comfortable breath: let the ribs expand as you inhale and imagine the pelvic floor softening, then exhale while gently engaging if that feels easy. Keep the effort small. You should be able to speak and breathe normally rather than bracing your whole body.',
        'Practice during ordinary movements such as standing from a chair, lifting a light object, coughing, or walking. Pregnancy is not an exam where more repetitions equal a better result. A few mindful repetitions can be enough to learn coordination.'
      ] },
      { heading: 'Support bowel and bladder comfort', paragraphs: [
        'Drink regularly, include fiber as tolerated, and avoid straining during bowel movements. A footstool and relaxed breathing can help some people. Tell your clinician about constipation, leaking, pain, urgency, or a feeling of heaviness; these are common but deserve support.',
        'Do not routinely delay urination for long periods or practice stopping the stream as an exercise. Ask about safe movement and lifting modifications as your pregnancy changes, especially if symptoms increase.'
      ] },
      { heading: 'Prepare for birth without fear', paragraphs: [
        'Birth preparation can include positions, breathing, comfort measures, and learning how to relax the pelvic floor. A prenatal class or pelvic-health professional can explain options without promising a particular birth outcome. The body is not failing if birth does not follow the plan.',
        'Ask your birth team what support is available for tearing, stitches, pain, urinary symptoms, or bowel changes after birth. Knowing that these topics can be discussed makes it easier to seek help early.'
      ] },
      { heading: 'Plan postpartum follow-up', paragraphs: [
        'Recovery deserves attention whether birth is vaginal or by cesarean. Contact your care team for increasing pain, pressure, leaking, difficulty emptying your bladder or bowel, or symptoms that make daily life hard. You do not need to wait for a routine postpartum check.',
        'Pelvic-health rehabilitation can be useful after birth and is not only for athletes. Ask when an assessment is appropriate for you, and choose care that respects your goals, comfort, and cultural context.'
      ] }
    ],
    takeaways: ['The pelvic floor must both contract and relax.', 'Small, coordinated breathing practice is more useful than forceful squeezing.', 'Constipation, leaking, pain, and pressure are worth discussing.', 'Birth preparation can include relaxation and comfort, not only strength.', 'Postpartum pelvic-health support is available after any type of birth.'],
    faq: [
      { q: 'Should everyone do pelvic-floor exercises in pregnancy?', a: 'Many people benefit from learning gentle coordination, but the right approach depends on symptoms. If muscles are painful or overactive, relaxation and specialized assessment may matter more than more contractions.' },
      { q: 'Can pelvic-floor work prevent all leaking?', a: 'No. It can support function for some people, but pregnancy and birth involve many factors. Seek assessment if leaking, pain, or pressure affects daily life.' },
      { q: 'When should I see a pelvic-health physiotherapist?', a: 'You can ask at any point, especially for pain with sex, leaking, constipation, heaviness, or uncertainty about technique. Earlier support can make exercises more individualized.' }
    ]
  }),
  makeArticle({
    slug: 'pregnancy/induction-of-labor-conversation',
    category: 'pregnancy',
    hero: 'content/generated-pregnancy-induction-talk.png',
    title: 'How to Have a Clear Conversation About Induction of Labor',
    description: 'A question-led guide to induction of labor, including why it may be offered, what the process can involve, alternatives, timing, and how to keep consent at the center.',
    intro: 'Hearing that induction may be recommended can bring relief, worry, or a rush of decisions. A clear conversation can make the options easier to understand. Induction is not one single procedure; it is a sequence that depends on your cervix, baby’s wellbeing, gestational age, local practice, and your preferences.',
    sections: [
      { heading: 'Start with the reason and the timing', paragraphs: [
        'Ask why induction is being suggested, how urgent it is, what may happen if you wait, and whether there are alternatives. Reasons can include a medical condition, concerns about growth or wellbeing, waters breaking, or pregnancy continuing beyond a recommended point. The reason changes the balance of options.',
        'Ask whether the recommendation is for today, within a few days, or simply a plan to revisit. You can request time to think when the situation is not urgent. If it is urgent, the team should still explain what they know and what they need to do.'
      ] },
      { heading: 'Understand the stages', paragraphs: [
        'Induction may begin with cervical ripening using medicine or a device, followed by breaking the waters or using an intravenous medicine to strengthen contractions. The sequence and waiting time vary. Ask what the first step is, how long it commonly takes, and what happens if it does not work.',
        'Ask about monitoring, mobility, pain relief, food and drink, and whether you can change positions. Some hospitals have different policies depending on the reason for induction, so turn general information into a specific plan for your setting.'
      ] },
      { heading: 'Keep preferences in the conversation', paragraphs: [
        'Write a short list of priorities: who you want present, words that help, movement, privacy, pain-relief preferences, delayed cord clamping if appropriate, and what you want explained before a change. A birth plan is a communication tool, not a guarantee.',
        'If a proposed step changes, ask what has changed and what choices remain. Consent is ongoing. You can ask for a pause, another explanation, or a support person to help you understand unless an emergency requires immediate action.'
      ] },
      { heading: 'Prepare for different timelines', paragraphs: [
        'Induction can take hours or longer, particularly when the cervix is not yet ready. Pack according to the possibility of a longer stay, plan for childcare or pet care, and bring a charger, snacks if allowed, and comfortable clothing. Waiting is easier when the logistics are handled.',
        'Ask what signs mean you should call before the scheduled date, especially if waters break, bleeding occurs, contractions begin, or fetal movement changes. Keep the maternity unit’s number accessible.'
      ] },
      { heading: 'Review recovery and follow-up', paragraphs: [
        'Before discharge, ask about pain, bleeding, medicines, feeding support, activity, and when to seek help. The method of labor does not determine your worth or your ability to care for your baby. Recovery deserves the same practical planning as the birth itself.',
        'If the experience feels difficult afterward, tell someone you trust and ask about mental-health or birth-trauma support. A debrief can help you understand what happened and what care you need next.'
      ] }
    ],
    takeaways: ['Ask why induction is recommended, how urgent it is, and what happens if you wait.', 'Understand cervical ripening, monitoring, possible next steps, and timing.', 'Keep preferences and consent in the conversation as the plan changes.', 'Prepare for a longer timeline and confirm when to call the maternity unit.', 'Plan recovery and emotional support, not only the start of labor.'],
    faq: [
      { q: 'Does induction always mean a cesarean birth?', a: 'No. Induction can lead to vaginal birth or cesarean birth, depending on how labor progresses and the health of parent and baby. Ask your team what factors matter in your situation.' },
      { q: 'Can I ask to wait?', a: 'Sometimes, depending on the reason and urgency. Ask what risks and benefits change with waiting and what monitoring would be needed. If the situation is urgent, follow the team’s safety guidance.' },
      { q: 'How long does an induction take?', a: 'It varies widely. Cervical ripening, labor, and recovery can take many hours or longer. Ask your maternity unit what timelines are common for the specific method being proposed.' }
    ]
  }),
  makeArticle({
    slug: 'pregnancy/gestational-diabetes-support',
    category: 'pregnancy',
    hero: 'content/generated-pregnancy-glucose-support.png',
    title: 'Gestational Diabetes: Practical Support After a Positive Screen',
    description: 'What a gestational-diabetes diagnosis can involve, how monitoring and meals fit together, how to avoid blame, and which questions to ask your pregnancy care team.',
    intro: 'Gestational diabetes can feel like a sudden label added to an already full pregnancy. It is common, manageable, and not a sign that you caused a problem. Care usually focuses on blood-glucose patterns, food, movement, medicines when needed, and monitoring the pregnancy with a team.',
    sections: [
      { heading: 'Understand what the test means', paragraphs: [
        'A screening result and a diagnosis are not always the same thing. Ask which test was abnormal, what the numbers mean, and whether another test or appointment is needed. Request a written explanation of the target ranges and when to contact the team.',
        'Gestational diabetes reflects how pregnancy changes insulin needs; it is not a simple measure of willpower or whether you ate one particular food. Genetics, hormones, previous health, and chance all play a role.'
      ] },
      { heading: 'Learn the monitoring routine', paragraphs: [
        'Your team may ask you to check glucose at specific times, record meals, and note activity or symptoms. Learn how to use the meter, dispose of supplies, and what to do if a reading seems unexpected. Ask whether you should repeat a reading or call.',
        'Look at patterns rather than judging one number. A log helps the team adjust the plan, especially when sleep, illness, nausea, or work changes your routine. Bring it to appointments or use an approved digital record.'
      ] },
      { heading: 'Build balanced meals', paragraphs: [
        'A dietitian or diabetes educator can help you combine carbohydrates with protein, fiber, and fat and spread food through the day. You do not need to remove all carbohydrates. The right plan should provide enough energy for pregnancy and fit your culture, budget, and appetite.',
        'Keep quick options available for busy days and ask how to handle nausea, celebrations, travel, or missed meals. If food rules trigger anxiety or past disordered eating, tell the team so support can be adapted.'
      ] },
      { heading: 'Use movement and medicine without blame', paragraphs: [
        'A gentle walk after a meal or other pregnancy-safe movement may help some people, but activity is not a punishment for a high reading. Ask what is safe if you have bleeding, contractions, high blood pressure, or another restriction.',
        'Some people need medicine or insulin even with careful meals and movement. Using medicine is not a failure; it is a way to support health when the body needs more help. Ask how to handle low readings, illness, and missed doses.'
      ] },
      { heading: 'Plan birth and long-term follow-up', paragraphs: [
        'Ask how glucose patterns may affect monitoring, timing of birth, baby’s size, or newborn checks. Recommendations are individualized. Bring questions to each visit rather than relying on alarming stories online.',
        'Gestational diabetes can increase future diabetes risk, so ask about postpartum testing and ongoing prevention support. The follow-up is useful information, not a reason to feel guilty about the pregnancy.'
      ] }
    ],
    takeaways: ['A diagnosis is about pregnancy physiology, not blame.', 'Learn the exact monitoring targets and when to call.', 'Use balanced meals that provide enough energy and fit your life.', 'Movement and medicine are supports, not punishments.', 'Ask about birth planning and postpartum glucose follow-up.'],
    faq: [
      { q: 'Did I cause gestational diabetes?', a: 'No. Pregnancy hormones, genetics, prior health, and other factors affect insulin needs. Food and movement can support management, but the diagnosis is not a moral judgment.' },
      { q: 'Do I have to stop eating carbohydrates?', a: 'Usually not. Carbohydrates provide energy, and many plans distribute them with protein and fiber. Ask a diabetes educator or dietitian for targets that fit your pregnancy.' },
      { q: 'Will I need insulin?', a: 'Some people do and some do not. The decision depends on glucose patterns and pregnancy factors. If insulin is recommended, it is a treatment tool, not a sign that you failed.' }
    ]
  }),
  makeArticle({
    slug: 'pregnancy/breathlessness-in-pregnancy',
    category: 'pregnancy',
    hero: 'content/generated-pregnancy-breathlessness.png',
    title: 'Breathlessness in Pregnancy: What to Notice and How to Get Help',
    description: 'A clear guide to common breathlessness in pregnancy, supportive daily habits, medicine questions, and symptoms that need same-day or urgent assessment.',
    intro: 'Feeling more short of breath can happen as pregnancy changes circulation, hormones, posture, and the space available for the lungs. Mild breathlessness that comes gradually is different from sudden or severe difficulty breathing. Notice the context, the speed of change, and any symptoms alongside it.',
    sections: [
      { heading: 'Describe what you feel', paragraphs: [
        'Notice whether breathlessness happens with stairs, conversation, lying down, heat, anxiety, or at rest. Record when it started and whether it is getting worse. Tell your clinician about palpitations, cough, fever, chest discomfort, wheezing, dizziness, or reduced exercise tolerance.',
        'Breathlessness can overlap with anemia, asthma, infection, heart conditions, blood clots, or anxiety. You do not need to decide which explanation fits. A clear description helps the team decide whether you need examination or testing.'
      ] },
      { heading: 'Make ordinary activities easier', paragraphs: [
        'Move at a comfortable pace, sit upright when resting, use pillows for support, and take breaks before you are exhausted. Avoid overheating and keep fluids available. If your clinician has approved activity, gentle movement can help maintain conditioning without pushing into distress.',
        'Review inhalers and other medicines with your prenatal team. Do not stop asthma treatment because of pregnancy fear; uncontrolled breathing problems can also be risky. Ask how to use prescribed medicines and when to seek help.'
      ] },
      { heading: 'Call promptly for changes', paragraphs: [
        'Contact your prenatal team for breathlessness at rest, breathlessness that is suddenly worse, difficulty lying flat, faintness, a racing or irregular heartbeat, fever, or a cough that is new or worsening. Tell them how far along you are and whether you have risk factors.',
        'Seek urgent care for sudden severe breathing difficulty, chest pain, blue or grey lips, coughing blood, fainting, confusion, or one-sided leg pain and swelling. Do not drive yourself if you feel unsafe.'
      ] },
      { heading: 'Check the basics at prenatal visits', paragraphs: [
        'Your team may check blood pressure, heart rate, oxygen level, lungs, blood count, or other tests depending on symptoms. Ask whether anemia, asthma, infection, or another condition could be contributing and what follow-up is needed.',
        'Keep a list of your medicines, allergies, and any previous lung or heart history. If you have an action plan for asthma or another condition, update it for pregnancy with your clinician.'
      ] },
      { heading: 'Support the emotional side', paragraphs: [
        'Breathlessness can feel frightening even when it is physiologic. Slow your pace, name what is happening, and use a support person while you decide whether to call. Anxiety can amplify breathing sensations, but reassurance should come after concerning causes are considered.',
        'You are not wasting a clinician’s time by asking about a new breathing change. Pregnancy shifts quickly, and an assessment can give you a safer, clearer plan.'
      ] }
    ],
    takeaways: ['Gradual breathlessness with exertion can occur, but pattern and associated symptoms matter.', 'Record when it happens and any cough, fever, pain, faintness, or palpitations.', 'Review asthma and other medicines rather than stopping them on your own.', 'New or worsening breathlessness at rest needs prompt advice.', 'Severe sudden breathing difficulty or chest symptoms require urgent care.'],
    faq: [
      { q: 'Is shortness of breath normal in pregnancy?', a: 'Mild gradual breathlessness can be common, especially with exertion. New, sudden, severe, worsening, or symptom-associated breathlessness should be assessed.' },
      { q: 'Can anxiety cause breathlessness?', a: 'Anxiety can change breathing and intensify sensations, but it should not be assumed to be the only cause of a new symptom. Contact your care team when the pattern is unfamiliar or concerning.' },
      { q: 'Should I stop my inhaler?', a: 'Do not stop prescribed asthma treatment without advice. Ask your prenatal clinician or respiratory specialist to review the specific medicine and action plan.' }
    ]
  }),
  makeArticle({
    slug: 'pregnancy/preparing-for-prenatal-appointments',
    category: 'pregnancy',
    hero: 'content/generated-pregnancy-appointment-folder.png',
    title: 'How to Get More From Every Prenatal Appointment',
    description: 'A practical system for preparing questions, tracking symptoms, understanding routine tests, and leaving prenatal appointments with a clear next step.',
    intro: 'Prenatal visits can be short, and it is easy to remember your most important question only after you leave. A small preparation routine can make appointments more useful without turning pregnancy into a paperwork project. Bring what changed, what worries you, and what decision comes next.',
    sections: [
      { heading: 'Keep one running note', paragraphs: [
        'Use a phone note or notebook with four headings: symptoms, medicines, questions, and dates. Add short entries rather than long stories. Include when a symptom began, how often it happens, what helps, and whether it is getting worse.',
        'Bring your medication and supplement list, allergies, home blood-pressure readings if requested, and any records from another clinic. Your care team can work more accurately when information is in one place.'
      ] },
      { heading: 'Prioritize the questions', paragraphs: [
        'Choose the two or three questions that would make the biggest difference today. Ask what the finding means, what you should do next, what would change the plan, and who to call after hours. If the answer is complicated, ask for it in plain language.',
        'It is okay to say, “I am not sure I understand.” Repeat the plan back in your own words and ask whether it is written in your after-visit summary. Understanding is part of informed care.'
      ] },
      { heading: 'Understand routine tests', paragraphs: [
        'Ask what each test is checking, when results will arrive, what a normal or abnormal result could mean, and whether you need to do anything beforehand. Screening estimates risk; it does not always diagnose a condition. Your clinician can explain which kind of result you are receiving.',
        'If a result is outside the expected range, ask what happens next and how quickly. Avoid interpreting a single number through a search engine before you know the clinical context.'
      ] },
      { heading: 'Discuss mental health and safety', paragraphs: [
        'Tell your team about anxiety, low mood, intrusive thoughts, sleep problems, relationship safety, or stress that affects eating and daily life. These are pregnancy-care topics, not distractions from “real” medical issues.',
        'If you do not feel safe at home or feel at risk of harming yourself, say so clearly and ask for immediate help. A support person can come into the appointment if that makes speaking easier.'
      ] },
      { heading: 'Leave with a plan', paragraphs: [
        'Before you leave, confirm the next appointment, test dates, medicines, warning signs, and the phone number for questions. Ask who will review pending results and when you should expect a reply. If you need a referral, confirm whether you should schedule it or wait for the clinic.',
        'Afterward, write the plan in one sentence: “This week I will…, and I will call if….” A clear next step reduces the mental load between visits and makes it easier to notice when something has changed.'
      ] }
    ],
    takeaways: ['Keep one short note for symptoms, medicines, questions, and dates.', 'Prioritize the few questions that affect decisions today.', 'Ask what tests mean, when results arrive, and what happens next.', 'Bring mental health and safety concerns into routine care.', 'Leave with the next appointment, warning signs, and a clear action plan.'],
    faq: [
      { q: 'What should I bring to a prenatal appointment?', a: 'Bring your questions, medicine and supplement list, allergies, relevant records, and any requested home readings. A support person can help with notes if you want one.' },
      { q: 'How many questions can I ask?', a: 'Ask the questions that affect safety or decisions first. If time runs short, request a follow-up, message, or the correct after-hours contact for remaining concerns.' },
      { q: 'What if I do not understand a test result?', a: 'Ask the clinician to explain the result, its limits, and the next step in plain language. Write down the plan and avoid making treatment changes based on a number alone.' }
    ]
  }),

  makeArticle({
    slug: 'newborn/cluster-feeding-and-rest',
    category: 'newborn',
    hero: 'content/generated-newborn-shared-care.png',
    title: 'Cluster Feeding and Rest: A Plan for the Early Weeks',
    description: 'How to understand frequent newborn feeding periods, protect parent rest, share practical work, and recognize when feeding concerns need professional support.',
    intro: 'Newborns sometimes want to feed repeatedly over several hours, especially during growth spurts or unsettled evenings. Frequent feeding can be normal, but it is also tiring and can make parents wonder whether something is wrong. A calm plan looks at the baby’s output, behavior, growth, and the parent’s recovery together.',
    sections: [
      { heading: 'Understand the rhythm without forcing a schedule', paragraphs: [
        'Newborn feeding is guided by cues and a developing stomach, not a predictable clock. Some days include long stretches of frequent feeds and other days feel more spaced out. Watch for early cues such as stirring, hands to mouth, rooting, or changes in alertness rather than waiting for intense crying.',
        'Ask your midwife, nurse, lactation professional, or pediatric clinician what pattern is expected for your baby’s age and feeding method. A schedule copied from another family may not fit your baby or your recovery.'
      ] },
      { heading: 'Share the work around the feed', paragraphs: [
        'One person may be feeding, but the whole household can support the cycle. A partner can refill water, prepare food, change diapers, settle the room, wash equipment, and protect a quiet rest period. Visitors can bring a meal or fold laundry instead of expecting the recovering parent to host.',
        'Make a short “next feed station”: water, snack, phone charger, burp cloth, and anything your clinician recommends. Small preparation reduces the number of times an exhausted parent has to stand up and search.'
      ] },
      { heading: 'Protect safe sleep during exhaustion', paragraphs: [
        'When you feel yourself falling asleep while holding the baby, place the baby on a separate, firm, flat sleep surface on their back. Ask another adult to take over if available. Do not rely on a sofa, armchair, or improvised nest as a safe sleep space.',
        'Talk openly about the moments when you are most tired and create a handoff phrase. Safe sleep planning is not an accusation; it is a practical response to the reality of newborn exhaustion.'
      ] },
      { heading: 'Look at the full feeding picture', paragraphs: [
        'Output, alertness, latch or bottle technique, swallowing, comfort, and weight checks give more information than one evening of frequent feeding. Ask for help if feeds are consistently painful, the baby is difficult to wake, or you are unsure whether milk or formula is transferring well.',
        'A feeding professional can observe a feed and suggest adjustments. Support should respect your feeding goals and mental health; asking for help does not commit you to one method.'
      ] },
      { heading: 'Know when to call', paragraphs: [
        'Contact the baby’s clinician for fewer wet diapers than expected, poor feeding, repeated vomiting, increasing yellow color, unusual sleepiness, breathing difficulty, or concern that the baby is not gaining. Follow the specific output and feeding guidance given for your baby’s age.',
        'Call urgently for a newborn who is difficult to wake, has a fever as defined by your clinician, is struggling to breathe, or looks blue or grey. Keep the birth and discharge information nearby when you call.'
      ] }
    ],
    takeaways: ['Frequent feeding periods can happen, especially during growth spurts.', 'Follow cues and your baby’s overall pattern rather than copying another schedule.', 'Share food, water, diapering, equipment, and rest protection around the feed.', 'Plan safe sleep for the moments when exhaustion is strongest.', 'Get professional help for painful feeds, poor output, unusual sleepiness, or breathing and fever concerns.'],
    faq: [
      { q: 'Does frequent feeding mean I do not have enough milk?', a: 'Not necessarily. Newborns may feed frequently for several reasons. Output, swallowing, weight, comfort, and an observed feed provide more useful information. Ask a feeding professional rather than judging supply from one evening.' },
      { q: 'How can I rest if the baby feeds often?', a: 'Share every task around feeding, protect one uninterrupted rest block when possible, and accept practical help. If you are falling asleep while holding the baby, place the baby in a separate safe sleep space and ask another adult to help.' },
      { q: 'When should I call the pediatric clinician?', a: 'Call for poor feeding, fewer wet diapers than expected, repeated vomiting, unusual sleepiness, worsening jaundice, breathing concerns, or any fever guidance specific to a newborn.' }
    ]
  }),
  makeArticle({
    slug: 'newborn/paced-bottle-feeding',
    category: 'newborn',
    hero: 'content/generated-newborn-paced-bottle.png',
    title: 'Paced Bottle Feeding: A Calm, Responsive Technique',
    description: 'How paced bottle feeding works, how to notice a newborn’s cues, choose a comfortable position, reduce pressure to finish, and know when feeding support is needed.',
    intro: 'Paced bottle feeding slows the rhythm so a newborn can coordinate sucking, swallowing, and breathing and can show when they need a pause. It can be used with expressed milk or formula and is less about one perfect angle than about responding to the baby instead of making the bottle lead.',
    sections: [
      { heading: 'Set up a safe, supported position', paragraphs: [
        'Hold the baby semi-upright with the head and neck supported and the body close to you. Keep the bottle more horizontal than vertical so milk does not pour quickly into the mouth. Choose a calm place where you can see the baby’s face and breathing.',
        'Use a nipple flow recommended for the baby’s age and feeding pattern, but remember that labels vary. Coughing, gulping, leaking, pulling away, or frantic swallowing can mean the flow or position needs review.'
      ] },
      { heading: 'Offer pauses and follow cues', paragraphs: [
        'Touch the nipple to the baby’s lips and wait for a wide, active latch. During the feed, watch for slower sucking, relaxed hands, turning away, letting the nipple fall out, or changes in breathing. Tip the bottle down or remove it briefly to offer a pause.',
        'Do not insist that the baby finishes a set volume. A baby can need different amounts at different feeds. Follow the clinician’s guidance about total intake while allowing the baby to communicate within that plan.'
      ] },
      { heading: 'Make burping and breaks ordinary', paragraphs: [
        'Some babies need a pause to burp, while others do not. Hold the baby upright, keep the movement gentle, and resume only if they show interest. A break is not a sign that the feed is failing.',
        'Keep the experience quiet and connected. Loud distractions, rushing, or repeatedly changing positions can make it harder to notice cues. A calm caregiver and a supported baby are the main equipment.'
      ] },
      { heading: 'Avoid common pressure points', paragraphs: [
        'Never prop a bottle or leave a baby alone with it. Do not feed a baby flat on their back, force the nipple into the mouth, or add cereal or other ingredients unless a clinician specifically directs you. Clean and prepare bottles according to local guidance.',
        'If someone else feeds the baby, show them the same cue-based approach. Consistency helps the baby learn that pauses are safe and that they do not have to keep drinking after they are full.'
      ] },
      { heading: 'Ask for an observed feed when needed', paragraphs: [
        'Contact the baby’s clinician or feeding professional if feeds are consistently very long, painful, stressful, or accompanied by coughing, blue color, repeated vomiting, poor output, or concern about growth. A professional can check coordination, flow, posture, and the overall plan.',
        'Feeding support should be practical and nonjudgmental. Whether you use formula, expressed milk, or a combination, the goal is a nourished baby and a caregiver who feels supported.'
      ] }
    ],
    takeaways: ['Hold the baby semi-upright and keep the bottle relatively horizontal.', 'Watch sucking, swallowing, breathing, and stop cues.', 'Offer pauses and do not pressure a baby to finish.', 'Never prop a bottle or add ingredients without clinical direction.', 'Seek an observed feed for coughing, long stressful feeds, poor output, or growth concerns.'],
    faq: [
      { q: 'Does paced feeding work with formula and expressed milk?', a: 'Yes. The technique focuses on pace, position, and cues, so it can be used with either. Follow safe preparation and storage guidance for the milk you are using.' },
      { q: 'How do I know when the baby is finished?', a: 'Look for turning away, relaxed hands, slower sucking, letting the nipple go, or falling into a comfortable rest. Follow your clinician’s intake plan without overriding clear fullness cues.' },
      { q: 'What if my baby coughs during feeds?', a: 'Pause and reposition, then contact the baby’s clinician or feeding professional if it happens repeatedly or is accompanied by color change, breathing difficulty, vomiting, or poor feeding.' }
    ]
  }),
  makeArticle({
    slug: 'newborn/babywearing-safety',
    category: 'newborn',
    hero: 'content/generated-newborn-babywearing.png',
    title: 'Babywearing Safety: A Simple Fit and Airway Check',
    description: 'How to choose and adjust a newborn carrier, keep the baby’s airway visible, move safely, and know when to ask for a fit check.',
    intro: 'A carrier can make daily life easier and offer closeness, but a newborn’s airway needs careful attention because babies have limited head and trunk control. Safe babywearing is about fit, visibility, support, and the caregiver’s ability to move without losing balance.',
    sections: [
      { heading: 'Choose a carrier that fits the baby', paragraphs: [
        'Follow the manufacturer’s minimum weight, age, and position guidance. A carrier designed for an older baby may not support a newborn’s head, hips, or spine. If the carrier has an infant insert, use it only as directed and check that it does not push the chin toward the chest.',
        'Learn the carrier before using it with a newborn. Practice with a weighted doll or over a bed, then ask another adult to check the fit. A local babywearing educator can often help with adjustment.'
      ] },
      { heading: 'Keep the airway visible', paragraphs: [
        'The baby’s face should be visible, close enough to kiss, and uncovered by fabric. The chin should not be pressed down to the chest, and the nose and mouth must remain clear. Recheck after bending, sitting, walking, or feeding because position can change.',
        'If the baby is premature, has low tone, breathing concerns, or another medical condition, ask the clinician before using a carrier. Extra support or a different position may be needed.'
      ] },
      { heading: 'Support the hips and body', paragraphs: [
        'The carrier should support the baby’s thighs and keep the legs in a comfortable supported position rather than dangling. The back should be supported without being forced flat or curled too tightly. Adjust the fabric so the baby is snug but able to breathe and move naturally.',
        'Check buckles, seams, and fabric before every use. Avoid bulky coats between the baby and carrier because they can loosen the fit or add heat. Use a weather layer over both of you when appropriate.'
      ] },
      { heading: 'Move and work within limits', paragraphs: [
        'Keep one hand available when walking on stairs or uneven ground, and avoid activities that involve heat, cooking, cycling, or falling risk. A carrier is not a substitute for a safe sleep surface; remove the baby when you arrive at a place to sleep.',
        'Watch the baby’s color, temperature, breathing, and comfort. Take breaks for diapering, feeding, and repositioning. The carrier should support connection, not require you to ignore the baby’s signals.'
      ] },
      { heading: 'Get a fit check when unsure', paragraphs: [
        'If the baby’s face is hidden, the chin drops, the body slumps, the carrier hurts, or you cannot see the airway, stop and adjust or remove it. Ask for help rather than trying to solve a poor fit while moving.',
        'Call the baby’s clinician urgently for breathing difficulty, blue or grey color, unusual limpness, or overheating after carrier use. Keep the carrier instructions and the baby’s health details available.'
      ] }
    ],
    takeaways: ['Use a carrier designed for the baby’s age, weight, and development.', 'Keep the face visible, airway clear, and chin off the chest.', 'Support the back and thighs without over-tightening.', 'Avoid heat, cooking, falling risks, and using the carrier as a sleep space.', 'Stop for a fit check when anything feels uncertain.'],
    faq: [
      { q: 'Can a newborn sleep in a carrier?', a: 'A carrier is for supervised carrying, not a replacement for a safe sleep surface. If the baby falls asleep, monitor the airway and move them to a separate safe sleep space as soon as practical.' },
      { q: 'How tight should a carrier be?', a: 'The baby should be snug and supported without the fabric pressing the chin to the chest or restricting breathing. Follow the carrier instructions and seek a hands-on fit check if unsure.' },
      { q: 'Can I babywear a premature baby?', a: 'Ask the baby’s clinician first. Prematurity, low tone, or breathing concerns can change the safest position and timing.' }
    ]
  }),
  makeArticle({
    slug: 'newborn/newborn-temperature-and-dressing',
    category: 'newborn',
    hero: 'content/generated-newborn-temperature-dressing.png',
    title: 'Newborn Temperature and Dressing: Simple Layers, Safer Sleep',
    description: 'How to judge a newborn’s comfort, choose breathable layers, avoid overheating, check the room, and respond to signs of illness.',
    intro: 'Newborns need help regulating temperature, but adding more blankets is not always the answer. The safest approach is a comfortable room, breathable clothing, an uncluttered sleep space, and checking the baby’s body rather than guessing from cold hands alone.',
    sections: [
      { heading: 'Check the baby, not just the hands', paragraphs: [
        'Hands and feet can feel cool even when a baby’s core is comfortable. Feel the chest or back of the neck and notice sweating, flushed skin, unusual fussiness, or unusual sleepiness. Your clinician can explain what temperature range and thermometer method to use for your baby.',
        'If the baby feels hot, remove one layer and reassess. Avoid placing a hot-water bottle, heating pad, or heavy covering near the baby. Never use temperature as a reason to delay care when the baby looks unwell.'
      ] },
      { heading: 'Use breathable, simple layers', paragraphs: [
        'A common starting point is one more light layer than a comfortable adult would wear in the same room, then adjust for the baby, the room, and the season. Choose breathable fabrics and avoid tight hats indoors unless a clinician has advised one for a specific reason.',
        'For sleep, use a properly fitted wearable blanket or sleep clothing when appropriate rather than loose blankets. Keep the head and face uncovered and remove bulky outerwear before placing the baby down.'
      ] },
      { heading: 'Create a safer sleep environment', paragraphs: [
        'Use a firm, flat sleep surface with a fitted sheet and no pillows, loose blankets, bumpers, toys, or weighted products. Room-sharing without bed-sharing can make nighttime checks easier. Follow local safe-sleep guidance because recommendations vary by region.',
        'A fan or air circulation can help reduce overheating when used safely, but it is not a substitute for a clear sleep space. Keep the bassinet away from direct heaters and strong sunlight.'
      ] },
      { heading: 'Plan for weather and travel', paragraphs: [
        'In cold weather, add layers outside but remove bulky coats before strapping the baby into a car seat. In hot weather, use shade and ventilation, avoid direct sun, and check the baby frequently. A stroller cover that blocks airflow can become dangerously hot.',
        'When traveling, pack an extra light layer, a thermometer if your clinician recommends one, and the number to call for local care. A simple plan is safer than bringing every possible product.'
      ] },
      { heading: 'Know when temperature is illness', paragraphs: [
        'A fever in a young infant has a different level of urgency than a mild temperature variation. Use the measurement method recommended by the baby’s clinician and call promptly for the threshold they gave you. Also call for poor feeding, breathing difficulty, unusual sleepiness, or a baby who feels very cold or hot.',
        'Do not give fever medicine or use cold baths unless a qualified clinician tells you what to use and how much. Newborn care changes quickly, so a phone call is safer than guessing.'
      ] }
    ],
    takeaways: ['Check the chest or back of the neck rather than relying on cool hands.', 'Use breathable layers and keep the face uncovered during sleep.', 'Avoid loose bedding, heating products, and bulky coats in car seats.', 'Adjust for weather, shade, and airflow when traveling.', 'Ask the baby’s clinician about fever thresholds and call for illness signs.'],
    faq: [
      { q: 'How many layers should a newborn wear?', a: 'A common starting point is one light layer more than a comfortable adult, but room temperature, the baby’s health, and the clothing material matter. Check the baby’s chest or back and ask your clinician for local guidance.' },
      { q: 'Are cold hands a sign the baby is too cold?', a: 'Not always. Hands and feet can feel cool while the core is comfortable. Check the chest or back of the neck and watch for unusual behavior or color.' },
      { q: 'Can I use a hat for sleep?', a: 'Loose hats can contribute to overheating or cover the face. Follow your clinician’s specific advice, and keep the sleep surface and airway clear.' }
    ]
  }),
  makeArticle({
    slug: 'newborn/postpartum-bleeding-basics',
    category: 'newborn',
    hero: 'content/generated-newborn-postpartum-recovery.png',
    title: 'Postpartum Bleeding: What Recovery Can Look Like and When to Call',
    description: 'A non-graphic guide to normal postpartum bleeding changes, rest and hygiene, warning signs, and how to prepare for a timely call to your care team.',
    intro: 'Postpartum bleeding is part of the uterus healing after birth, but it can be difficult to know what is expected when you are tired and newly responsible for a baby. The color and amount often change over time. Your maternity team’s discharge instructions should take priority, and concerning changes deserve a call.',
    sections: [
      { heading: 'Expect a changing pattern', paragraphs: [
        'Bleeding is often heavier at first and gradually becomes lighter, changing in color and amount over days or weeks. It may increase briefly after activity or breastfeeding, then settle with rest. The exact timeline varies with the type of birth and your individual recovery.',
        'Use the pads and hygiene guidance provided by your care team. Notice the trend rather than comparing yourself with another parent. If bleeding is getting heavier instead of gradually easing, contact the maternity unit.'
      ] },
      { heading: 'Make recovery practical', paragraphs: [
        'Keep supplies, water, food, and the baby’s essentials within reach so you do not need to climb stairs or stand for long periods. Accept help with meals, laundry, and older children. Rest is a health task, not an indulgence.',
        'Avoid inserting anything into the vagina until your clinician says it is safe, and follow advice about bathing, activity, sex, and driving. If you had stitches, surgery, or complications, ask for instructions specific to you.'
      ] },
      { heading: 'Track symptoms without alarm', paragraphs: [
        'A brief daily note can include bleeding trend, pain, temperature if you feel unwell, wound changes, and medicines. This helps you notice a meaningful change and gives the clinician useful information. You do not need to measure every pad unless your team told you to.',
        'Ask what size of clot, pain level, or discharge change they want you to report. Clear thresholds are easier to follow than vague advice to “watch it.”' 
      ] },
      { heading: 'Know warning signs', paragraphs: [
        'Call your maternity team promptly for bleeding that suddenly becomes much heavier, large clots, a bad smell, fever, worsening pelvic or abdominal pain, dizziness, weakness, or a wound that is red or draining. Tell them how many days postpartum you are and whether symptoms changed suddenly.',
        'Seek urgent care for fainting, severe weakness, trouble breathing, chest pain, or bleeding that feels uncontrollable. Ask someone else to care for the baby and travel with you if possible.'
      ] },
      { heading: 'Plan the follow-up conversation', paragraphs: [
        'At the postpartum visit, ask about bleeding, pain, pelvic-floor symptoms, contraception, mood, sleep, and feeding support. You can call before that appointment; you do not have to wait for a scheduled check if something concerns you.',
        'Recovery is not a test of toughness. A parent who asks for help early protects their own health and makes it easier to care for the baby.'
      ] }
    ],
    takeaways: ['Postpartum bleeding often changes from heavier to lighter over time.', 'Follow your own discharge instructions and notice the overall trend.', 'Protect rest, hydration, food, hygiene, and practical support.', 'Call for heavier bleeding, large clots, fever, bad smell, worsening pain, or dizziness.', 'Seek urgent care for fainting, severe weakness, breathing trouble, chest pain, or uncontrollable bleeding.'],
    faq: [
      { q: 'How long does postpartum bleeding last?', a: 'It varies, often becoming lighter over days to weeks. Your discharge instructions and the pattern of your symptoms matter more than one exact timeline.' },
      { q: 'Can bleeding increase after activity?', a: 'A temporary increase can happen, but bleeding that becomes suddenly heavy or does not settle with rest should be reported. Ask your maternity team for specific thresholds.' },
      { q: 'What if I feel dizzy?', a: 'Sit or lie down safely and contact your maternity team, especially if dizziness comes with heavier bleeding, weakness, shortness of breath, chest pain, or fainting. Seek urgent care for severe symptoms.' }
    ]
  }),
  makeArticle({
    slug: 'newborn/postpartum-mood-changes',
    category: 'newborn',
    hero: 'content/generated-newborn-postpartum-mood.png',
    title: 'Postpartum Mood Changes: Support for the Parent, Too',
    description: 'How to tell the difference between common early emotional changes and symptoms that deserve professional support, with practical ways partners can help.',
    intro: 'The early weeks after birth can include joy, tears, irritability, worry, numbness, and a feeling of being overwhelmed. Hormone shifts, pain, sleep loss, feeding pressure, and a major life change all matter. You do not have to wait for a crisis to talk about how you are doing.',
    sections: [
      { heading: 'Expect a range, not one perfect feeling', paragraphs: [
        'Many parents have a few days of tearfulness, mood swings, sensitivity, or anxiety that improve with rest and support. Feeling ambivalent or missing your old life does not mean you do not love your baby. New parenthood is demanding and identity-changing.',
        'Ask yourself whether you are getting any moments of relief, connection, or sleep and whether the difficult feelings are easing. A simple daily check-in with a support person can show whether the pattern is improving or becoming heavier.'
      ] },
      { heading: 'Notice symptoms that deserve help', paragraphs: [
        'Contact your clinician if low mood, anxiety, panic, irritability, guilt, intrusive thoughts, numbness, or inability to sleep continues, worsens, or makes it hard to function. You can ask for help even if the baby is healthy and even if other people think you are doing well.',
        'Postpartum depression and anxiety are medical conditions with effective support. Therapy, practical help, medication, peer support, or a combination may be appropriate. Tell the clinician about feeding plans and previous mental-health treatment so the plan fits you.'
      ] },
      { heading: 'Share the load in concrete ways', paragraphs: [
        'Partners and family can help by bringing food, protecting a sleep block, taking a shift with diapers, attending appointments, and listening without debating whether the parent “should” feel grateful. Ask before offering advice and avoid making the recovering parent manage the helper.',
        'A useful question is, “What is one thing I can take off your list today?” If the answer is unclear, choose a task and do it quietly. Practical support is often more valuable than reassurance alone.'
      ] },
      { heading: 'Treat safety concerns as urgent', paragraphs: [
        'If you feel you may harm yourself or the baby, cannot sleep for several nights despite the chance to rest, feel detached from reality, or hear or see things others do not, seek urgent professional help. Tell another adult immediately and do not stay alone with the baby while you get help.',
        'Use local emergency services, a crisis line, or the maternity unit’s after-hours number. These symptoms are not a character flaw or a parenting failure; they need prompt care.'
      ] },
      { heading: 'Keep support going after the first weeks', paragraphs: [
        'Mood symptoms can begin later, including after feeding changes, returning to work, or a difficult sleep stretch. Keep your support contacts and follow-up appointments even if one good week makes you feel better.',
        'Recovery can be gradual. Celebrate small changes such as taking a shower, eating, answering a message, or feeling a moment of interest. You deserve care as a whole person, not only as the baby’s caregiver.'
      ] }
    ],
    takeaways: ['Mixed feelings and early tearfulness can happen, but worsening or persistent symptoms deserve support.', 'Ask for help with mood, anxiety, intrusive thoughts, sleep, or functioning.', 'Partners can protect rest and take concrete tasks without waiting to be managed.', 'Safety concerns, loss of contact with reality, or thoughts of harm require urgent help.', 'Support may be needed weeks or months after birth, not only immediately.'],
    faq: [
      { q: 'How long do the baby blues last?', a: 'Short-lived tearfulness and mood swings are common early on and often improve within days. If symptoms are severe, persist, worsen, or interfere with care, contact a clinician.' },
      { q: 'Can I ask for help even if I love my baby?', a: 'Yes. Love and distress can exist together. Postpartum support is about your health and functioning, not a judgment of your bond with the baby.' },
      { q: 'What should I do if I feel unsafe?', a: 'Tell another adult immediately, do not stay alone, and contact local emergency or crisis services or the maternity unit’s urgent line. Get immediate support for yourself and the baby.' }
    ]
  }),
  makeArticle({
    slug: 'newborn/umbilical-cord-healing',
    category: 'newborn',
    hero: 'content/generated-newborn-cord-care.png',
    title: 'Umbilical Cord Healing: Gentle Care and What to Watch',
    description: 'How to keep a newborn’s umbilical cord clean and dry, protect it from rubbing, recognize expected changes, and identify signs of infection.',
    intro: 'The umbilical cord stump dries and separates on its own. Most care is simple: keep it clean and dry, fold the diaper away from it, and avoid pulling or covering it with products unless the baby’s clinician directs you. A small amount of change can be normal, but infection needs prompt attention.',
    sections: [
      { heading: 'Keep the area clean and dry', paragraphs: [
        'Wash your hands before and after touching the stump. Follow the hospital or midwife’s local guidance; in many settings, dry care is recommended unless the area is soiled. If urine or stool gets on it, clean gently with the advised method and allow it to dry.',
        'Fold the diaper down so air can reach the base and the edge does not rub. Dress the baby in loose, breathable clothing. Do not cover the stump with a bandage or apply alcohol, oil, powder, or herbal products unless a clinician specifically tells you to.'
      ] },
      { heading: 'Expect gradual changes', paragraphs: [
        'The stump usually changes from soft and moist to dry, darker, and firm before it falls away. A tiny spot of blood can occur when it separates, but ongoing bleeding should be discussed. Never pull it off, even if it is hanging by a thread.',
        'Keep bathing instructions simple and follow local advice about sponge baths or water. Pat the area dry rather than rubbing it. The baby can still have normal cuddles and diaper changes while the stump heals.'
      ] },
      { heading: 'Look for signs of infection', paragraphs: [
        'Call the baby’s clinician for redness spreading onto the surrounding skin, swelling, warmth, pus-like drainage, a bad smell, ongoing bleeding, or tenderness that seems significant. A newborn with fever, poor feeding, unusual sleepiness, or a change in breathing also needs prompt advice.',
        'Take a photo only if it helps show change, but do not delay a call while comparing images online. Newborn infections can progress quickly, so professional assessment is the safer choice.'
      ] },
      { heading: 'Handle common questions calmly', paragraphs: [
        'Some families worry that the stump looks unpleasant or that a small stain means something is wrong. Ask the clinician what amount is expected for your baby. Clear local instructions are more useful than general reassurance because practices differ.',
        'Keep the baby’s discharge papers and the number for the newborn team accessible. If you are uncertain, describe the color, amount, smell, surrounding skin, and the baby’s behavior.'
      ] },
      { heading: 'After it falls off', paragraphs: [
        'The skin underneath may look moist or have a small crust for a short time. Continue the care instructions you were given and contact the clinician if drainage, bleeding, redness, or a persistent wet spot concerns you.',
        'A small umbilical granuloma or hernia can sometimes be noticed later and usually has straightforward evaluation. Do not tie anything around the belly or use a coin or tape to change its shape.'
      ] }
    ],
    takeaways: ['Wash hands, keep the stump clean and dry, and fold the diaper away.', 'Avoid pulling or applying products unless the baby’s clinician recommends them.', 'A tiny change can be expected, but spreading redness, drainage, bad smell, or ongoing bleeding needs advice.', 'Call promptly for fever, poor feeding, unusual sleepiness, or breathing concerns.', 'Do not tie or tape the belly after the stump falls.'],
    faq: [
      { q: 'Should I use alcohol on the umbilical cord?', a: 'Follow your local newborn-care instructions. Many settings recommend dry care, while some situations have different guidance. Do not add products unless the baby’s clinician tells you to.' },
      { q: 'Is a little blood normal?', a: 'A tiny spot can occur as the stump dries or separates, but ongoing bleeding, repeated bleeding, or a large amount should be reported.' },
      { q: 'When should I call about redness?', a: 'Call for redness that spreads, warmth, swelling, pus-like drainage, bad smell, or a baby who seems unwell. Newborn fever and breathing or feeding changes need prompt care.' }
    ]
  }),

  makeArticle({
    slug: 'baby-and-child/early-morning-waking',
    category: 'child',
    hero: 'content/generated-child-early-waking.png',
    title: 'Early-Morning Waking: A Gentle Troubleshooting Guide',
    description: 'Why toddlers and preschoolers may wake too early, how to check sleep timing, light, hunger, and routines, and when to ask about a health concern.',
    intro: 'Early waking can make the whole household feel jet-lagged. It is often shaped by sleep pressure, light, noise, nap timing, hunger, temperature, or a developmental change. Start with the pattern, make one adjustment at a time, and keep the response boring and reassuring.',
    sections: [
      { heading: 'Define “too early” for your child', paragraphs: [
        'Children vary, and some naturally wake earlier than adults prefer. Track bedtime, sleep onset, naps, wake time, night waking, and mood for several days. A child who wakes cheerful after enough total sleep may need a schedule adjustment rather than more time in bed.',
        'Look for signs of too little sleep: irritability, hyperactivity, falling asleep in the car, frequent tantrums, or difficulty concentrating. Sleep needs change with age, so ask your pediatric clinician or a trusted sleep resource for age-appropriate ranges.'
      ] },
      { heading: 'Check the room first', paragraphs: [
        'Morning light can signal the body clock before the household is ready. Use safe blackout options, reduce noise, and keep the room comfortably cool. Check whether a heater, street sound, sibling, pet, or wet diaper regularly wakes the child.',
        'A simple visual clock or wake-up cue may help children who can understand it. Use one clear rule: quiet play or rest until the cue, with a safe set of books or toys available.'
      ] },
      { heading: 'Review bedtime and naps', paragraphs: [
        'An overtired child can wake early, but a bedtime that is too early or a late long nap can also shift the morning. Move bedtime or nap timing gradually, in small steps, and hold the change for several days before judging it.',
        'Protect a predictable wind-down: dim lights, pajamas, a short story, and the same final steps. A child does not need a perfect routine; they need a pattern their body recognizes.'
      ] },
      { heading: 'Respond without starting the day', paragraphs: [
        'Keep the room dark and your voice quiet. Offer brief reassurance, guide the child back to rest or quiet play, and avoid introducing screens, exciting games, or a full breakfast if you want the morning to shift later. Expect some protest while the pattern changes.',
        'Be consistent across caregivers. If one adult starts the day at 5 a.m. and another holds the boundary until 6:30, the child receives mixed information. Agree on a response you can sustain.'
      ] },
      { heading: 'Look for health and development clues', paragraphs: [
        'Snoring, gasping, pauses in breathing, restless sleep, pain, itching, reflux symptoms, anxiety, or frequent urination can disrupt sleep. Mention them to the pediatric clinician, especially if daytime mood or growth is affected.',
        'A developmental leap, travel, illness, or family change can temporarily shift waking. Return to the basics when life settles, and seek help if the pattern persists despite reasonable adjustments.'
      ] }
    ],
    takeaways: ['Track the full sleep pattern before changing the schedule.', 'Check light, noise, temperature, hunger, and safe quiet activities.', 'Adjust bedtime or naps gradually and hold one change for several days.', 'Keep early-morning responses brief, dark, and boring.', 'Ask about snoring, breathing pauses, pain, itching, or daytime impairment.'],
    faq: [
      { q: 'Should I move bedtime later?', a: 'Sometimes, but not always. A child may wake early from overtiredness or from too much total daytime sleep. Track naps and mood, then make one small change at a time.' },
      { q: 'Is an okay-to-wake clock useful?', a: 'It can help children who understand a simple visual cue. Pair it with quiet activities and a consistent caregiver response rather than using it as a punishment.' },
      { q: 'When should I ask a doctor about early waking?', a: 'Ask about persistent waking with snoring, gasping, pain, itching, frequent urination, severe daytime sleepiness, or a pattern that does not improve with basic routine changes.' }
    ]
  }),
  makeArticle({
    slug: 'baby-and-child/toddler-balanced-meals',
    category: 'child',
    hero: 'content/generated-child-balanced-meals.png',
    title: 'Balanced Meals for Toddlers: Structure Without Pressure',
    description: 'How to offer balanced toddler meals, handle picky phases, share responsibility for eating, and keep choking safety and growth in view.',
    intro: 'Toddlers often eat unevenly: a large breakfast, a tiny lunch, and a surprising amount of one food for a week. A balanced approach gives adults responsibility for what, when, and where food is offered while allowing the child to decide whether and how much to eat within that offer.',
    sections: [
      { heading: 'Use a predictable meal rhythm', paragraphs: [
        'Offer meals and snacks at regular times with water between them. Constant grazing can reduce appetite, while long gaps can make a tired toddler frantic. Keep the schedule flexible for sleep, childcare, illness, and family life.',
        'Serve one family meal when possible, with at least one familiar food alongside something new. A child does not need a separate menu for every preference. Repeated low-pressure exposure is more useful than a single forced taste.'
      ] },
      { heading: 'Build variety across the week', paragraphs: [
        'A toddler plate can include a protein food, a grain or starchy food, produce, and a source of fat, but every plate does not need to look perfect. Yogurt, beans, eggs, avocado, oats, vegetables, fruit, and soft family foods can be combined in many ways.',
        'Appetite naturally changes with growth and activity. Look at variety and intake across several days rather than reacting to one small meal. Ask your clinician about fortified foods or supplements if the diet is very limited.'
      ] },
      { heading: 'Keep pressure out of the chair', paragraphs: [
        'Avoid forcing bites, bargaining for dessert, or making a child sit until a plate is empty. Pressure can make eating more stressful and teach a child to ignore fullness. Use neutral language: “You do not have to eat it. It will be here if you want to try.”',
        'Let the child touch, smell, lick, or leave a new food. Eating skills develop through many forms of exploration. Calm repetition is a better teacher than praise that makes one food seem especially important.'
      ] },
      { heading: 'Protect safety while offering independence', paragraphs: [
        'Seat the child upright and close by while eating. Cut round, firm, sticky, or stringy foods into safer shapes and follow current local choking-prevention guidance. Avoid eating while walking, lying down, or playing intensely.',
        'Offer a small choice within your plan: apple or pear, rice or bread, red cup or blue cup. Independence grows when the choices are real but the adult is not handing over the entire menu.'
      ] },
      { heading: 'Know when to ask for help', paragraphs: [
        'Talk with the pediatric clinician if growth is falling, meals are consistently painful, the child coughs or chokes, the diet is extremely limited, constipation is persistent, or eating creates major family distress. A feeding therapist or dietitian may help.',
        'Food allergies, sensory differences, oral-motor challenges, and anxiety can all affect eating. Early support is kinder than escalating pressure at home.'
      ] }
    ],
    takeaways: ['Offer food on a predictable rhythm with water between meals.', 'Include a familiar food and build variety across the week.', 'Adults choose what, when, and where; children choose whether and how much.', 'Keep the child seated and supervise choking-risk foods.', 'Seek support for pain, choking, growth concerns, or severe food restriction.'],
    faq: [
      { q: 'Should I make my toddler finish the plate?', a: 'Usually not. Serve a reasonable amount, allow the child to stop when full, and look at intake across several days. Pressure can make eating more stressful.' },
      { q: 'What if my child eats only one food?', a: 'Keep offering familiar foods with small, low-pressure exposures to others. If the restriction persists, affects growth, or causes distress, ask a pediatric clinician or feeding professional for help.' },
      { q: 'How many snacks should a toddler have?', a: 'Many toddlers do well with regular meals and one or two planned snacks, but appetite and schedule vary. Use a predictable rhythm and ask your clinician about your child’s specific needs.' }
    ]
  }),
  makeArticle({
    slug: 'baby-and-child/allergy-action-plan',
    category: 'child',
    hero: 'content/generated-child-allergy-plan.png',
    title: 'Building a Family Allergy Action Plan',
    description: 'How to prepare for a child’s food or environmental allergy, share clear instructions with caregivers, and recognize symptoms that need urgent help.',
    intro: 'An allergy action plan turns a frightening possibility into a set of steps adults can follow. Whether a child has a confirmed allergy, a suspected reaction, or an epinephrine prescription, the plan should be written by a qualified clinician and practiced by every regular caregiver.',
    sections: [
      { heading: 'Know the child’s specific triggers', paragraphs: [
        'Write the exact allergen or suspected trigger, the form it can take, and where exposure may happen. Ask whether the child needs to avoid cross-contact, shared utensils, labels, or particular environments. Do not broaden restrictions beyond professional advice without a reason.',
        'Keep the diagnosis and emergency medication information current. Allergies can change, and school, childcare, relatives, and sports settings may each need a copy of the plan.'
      ] },
      { heading: 'Learn the symptoms and the response', paragraphs: [
        'Ask the clinician to describe mild symptoms, severe symptoms, and the exact point at which emergency medicine should be used. The response should not depend on guessing whether a reaction will get worse. Follow the prescribed plan and local emergency guidance.',
        'Practice with a trainer device if one is available. Adults should know where medicine is kept, how to check its expiration date, and who calls emergency services. Older children can learn age-appropriate steps without being made responsible for their own safety.'
      ] },
      { heading: 'Make the plan work outside home', paragraphs: [
        'Share a copy with childcare, school, babysitters, grandparents, coaches, and other adults. Ask them to repeat the plan back so you know the wording is clear. Include emergency contacts, the child’s weight if relevant to the prescription, and the location of medication.',
        'For restaurants, parties, and travel, prepare questions and a backup snack if advised. Avoid assuming that a familiar food is safe in every kitchen. A calm routine reduces risk without making the child feel excluded from ordinary life.'
      ] },
      { heading: 'Support the child emotionally', paragraphs: [
        'Use simple, matter-of-fact language: “This food makes your body sick, and grown-ups know how to keep you safe.” Avoid describing the child as fragile or naughty. Teach practical habits such as asking before sharing food and washing hands without creating shame.',
        'As children grow, include them in age-appropriate planning. They can learn to recognize their medicine case, tell an adult, and describe symptoms. Responsibility should increase gradually and never replace adult supervision.'
      ] },
      { heading: 'Review after every change', paragraphs: [
        'Update the plan after a new reaction, diagnosis, medicine change, move, school change, or weight change that affects dosing. Check expiration dates and practice the response at least occasionally so it is not brand new during an emergency.',
        'Seek urgent care for signs your clinician has identified as severe, especially breathing difficulty, swelling of the mouth or throat, faintness, widespread symptoms, or rapid progression. When in doubt, follow the written plan and call for help.'
      ] }
    ],
    takeaways: ['Use a clinician-written plan with the exact trigger and response.', 'Teach every regular caregiver where medicine is and what to do.', 'Practice with a trainer and check expiration dates.', 'Use calm, age-appropriate language that builds skill without shame.', 'Update the plan after reactions, medicine changes, or changes in care setting.'],
    faq: [
      { q: 'Should I wait to see if symptoms get worse?', a: 'Follow the child’s written allergy action plan. It should explain when to use prescribed emergency medicine and call emergency services. Do not make a delay decision based only on hoping symptoms stay mild.' },
      { q: 'Who needs a copy of the plan?', a: 'Anyone who regularly cares for the child, including school or childcare staff, relatives, babysitters, coaches, and travel companions. Ask them to review it and show they understand.' },
      { q: 'How can I talk about allergies without making my child afraid?', a: 'Use clear, neutral language about safety and the adults’ job. Practice the steps calmly, avoid blame, and give the child age-appropriate choices in other parts of daily life.' }
    ]
  }),
  makeArticle({
    slug: 'baby-and-child/welcoming-new-sibling',
    category: 'child',
    hero: 'content/generated-child-sibling-introduction.png',
    title: 'Welcoming a New Sibling With Less Pressure',
    description: 'How to prepare an older child for a new baby, protect their connection with caregivers, respond to big feelings, and make the first weeks more manageable.',
    intro: 'A new baby changes a child’s routines, attention, and sense of place in the family. Preparation helps, but no script prevents every hard feeling. The goal is not to make an older child perform excitement; it is to help them feel secure while the family learns its new rhythm.',
    sections: [
      { heading: 'Tell the truth in child-sized pieces', paragraphs: [
        'Explain what will happen using concrete details: where the baby will sleep, who will care for the older child during the birth, and which routines will stay the same. Avoid promising that the baby will be a playmate right away; newborns mostly eat, sleep, and need adult help.',
        'Read books, look at baby photos, or visit a newborn if that feels useful, but follow the child’s lead. Some children want every detail and others change the subject. Both responses are normal.'
      ] },
      { heading: 'Protect the older child’s anchors', paragraphs: [
        'Keep a few predictable rituals: breakfast together, a bedtime story, a walk, or a weekly outing. The ritual can be short. What matters is that the child knows when they will have your attention again, even if the day is busy.',
        'Tell caregivers how to preserve these anchors while you recover. A grandparent who handles the school run or a partner who protects bedtime can make the transition feel less like a total loss.'
      ] },
      { heading: 'Make room for mixed feelings', paragraphs: [
        'An older child may be proud, jealous, clingy, rough, helpful, or uninterested in the baby. Name the feeling and hold the boundary: “You wanted me to yourself. I will not let you hit. I am here.” Connection and safety can happen in the same sentence.',
        'Avoid making the baby responsible for every limit. Instead of “The baby needs you to be quiet,” try “People are sleeping, so we are using quiet voices.” This reduces resentment and keeps the adult in charge of the boundary.'
      ] },
      { heading: 'Include without making a job', paragraphs: [
        'Offer small choices such as which book to bring or whether to sit near the baby. Praise genuine kindness but do not require constant helping. The older child is still a child and should not become a second caregiver.',
        'Create a safe place for the older child’s toys and time. If the baby receives gifts, consider a small welcome item for the older child, but do not make every interaction a competition for equal objects.'
      ] },
      { heading: 'Repair the rough moments', paragraphs: [
        'Sleep loss makes everyone less patient. If you shout or miss a moment, repair simply: name what happened, apologize, restate the limit, and reconnect. Children learn that relationships can survive stress and that adults take responsibility.',
        'Ask for support before resentment builds. A meal, a bath handled by someone else, or ten minutes of one-on-one time can change the tone of the whole evening.'
      ] }
    ],
    takeaways: ['Prepare with concrete information rather than promises of instant friendship.', 'Protect a few predictable rituals for the older child.', 'Name jealousy or sadness while keeping safety limits firm.', 'Invite involvement without turning the child into a caregiver.', 'Repair after hard moments and accept practical support.'],
    faq: [
      { q: 'What if my child is not excited about the baby?', a: 'That is okay. The child does not need to perform excitement. Focus on safety, honest information, and continued connection; feelings often change over time.' },
      { q: 'How do I respond to regression?', a: 'Offer extra connection, keep routines predictable, and avoid shame. Regression can be a request for reassurance. If behavior is unsafe or persistent, ask a pediatric clinician for guidance.' },
      { q: 'Should the older child help with the baby?', a: 'Offer optional, age-appropriate participation, but keep responsibility with adults. The older child needs time to play and be cared for too.' }
    ]
  }),
  makeArticle({
    slug: 'baby-and-child/independent-play',
    category: 'child',
    hero: 'content/generated-child-independent-play.png',
    title: 'Independent Play: Helping Toddlers Build Attention and Confidence',
    description: 'How to create a safe play invitation, start with short stretches, stay available without taking over, and understand why independent play develops gradually.',
    intro: 'Independent play does not mean leaving a child alone for long periods. It means giving a child safe time to explore while an adult remains emotionally and physically available. The skill grows through practice, a manageable environment, and the experience that play does not always need adult direction.',
    sections: [
      { heading: 'Start with the environment', paragraphs: [
        'Choose a safe, contained space with a few open-ended materials: blocks, cups, large puzzles, paper and crayons, pretend-food items, or books. Remove choking hazards and anything that needs constant correction. Fewer choices can help a toddler begin.',
        'Sit nearby at first and describe what the child is doing without leading every move. “You put the blue block on top” is different from showing the child what to build. Let the play belong to them.'
      ] },
      { heading: 'Build the time slowly', paragraphs: [
        'Begin with five or ten minutes after connection, food, and a diaper or toilet check. Use a predictable phrase such as “I am going to make tea while you play here.” Increase the time when the child is ready rather than starting with an ambitious goal.',
        'Some days will be shorter because of illness, travel, tiredness, or developmental change. The practice still counts. Independent play is not a performance that must improve every day.'
      ] },
      { heading: 'Stay available without taking over', paragraphs: [
        'Keep the child within sight and hearing when the space or age requires it. Respond to real needs, but allow a few seconds before solving a problem. A child who struggles to fit two blocks together may discover a strategy if the adult does not immediately fix it.',
        'If the child asks you to play, offer a brief bridge: start the pretend game, then say you will watch for a few minutes while you return to your task. Connection first often makes separation easier.'
      ] },
      { heading: 'Use everyday work as a companion activity', paragraphs: [
        'Toddlers often play more independently when a caregiver is doing a nearby real task. A basket of laundry, safe kitchen utensils, water painting outside, or sorting socks can create a shared rhythm without requiring constant entertainment.',
        'Narrate your availability and your boundary: “I am folding clothes. I can help when I finish this shirt.” Children learn that adults have tasks and that waiting can be safe.'
      ] },
      { heading: 'Notice when support is needed', paragraphs: [
        'A sudden inability to play, extreme distress, unsafe behavior, or a major change in sleep or mood may signal illness, stress, or a developmental need. Offer more connection and talk with a pediatric clinician if the change persists.',
        'Do not compare siblings or children online. Temperament, age, language, sensory needs, and home circumstances shape play. The goal is a little more confidence and attention over time, not a quiet child for adult convenience.'
      ] }
    ],
    takeaways: ['Independent play is supervised space for exploration, not isolation.', 'Offer a safe, simple environment with open-ended materials.', 'Start with short predictable stretches and grow gradually.', 'Stay available while allowing the child to solve manageable problems.', 'Adjust expectations for temperament, development, illness, and family stress.'],
    faq: [
      { q: 'How long should a toddler play independently?', a: 'There is no single target. Start with a few minutes after connection and build gradually. Short successful practice is more useful than a long struggle.' },
      { q: 'Should I ignore my child while they play?', a: 'No. Stay available and supervise as needed. You can respond warmly without directing every move, allowing the child to experience ownership of the play.' },
      { q: 'What if my child never wants to play alone?', a: 'Check basic needs, reduce choices, begin nearby, and offer a brief predictable routine. If distress is intense or represents a sudden change, ask a pediatric clinician for guidance.' }
    ]
  }),
  makeArticle({
    slug: 'baby-and-child/toddler-biting',
    category: 'child',
    hero: 'content/generated-child-toddler-biting.png',
    title: 'Toddler Biting: Calm Limits and Practical Prevention',
    description: 'Why toddlers bite, what to do in the moment, how to protect other children, and how to teach safer ways to communicate without shame.',
    intro: 'Biting is upsetting, but it is common in early childhood because toddlers have strong feelings and limited impulse control, language, and body awareness. The response should be immediate and firm about safety, while also looking for the trigger so the skill can be taught rather than only punished.',
    sections: [
      { heading: 'Respond quickly and simply', paragraphs: [
        'Move close, separate the children, and say, “I will not let you bite.” Check the child who was bitten first and provide calm care. Keep the explanation short; a toddler in a surge of emotion cannot absorb a lecture.',
        'Avoid biting back, shaming, or making the child perform an apology before they are calm. The limit needs to be clear, but humiliation does not teach better impulse control.'
      ] },
      { heading: 'Look for the pattern', paragraphs: [
        'Write down what happened before the bite: crowding, toy conflict, tiredness, hunger, excitement, language frustration, teething discomfort, or a sudden transition. Patterns make prevention possible. A child who bites only at the end of a long playdate may need an earlier break.',
        'Ask whether the child can communicate “stop,” “mine,” “help,” or “my turn.” Practice those phrases and gestures outside the hard moment. Give the child words before the next conflict, not only after the bite.'
      ] },
      { heading: 'Prevent and redirect', paragraphs: [
        'Stay close during predictable triggers, reduce crowding, offer duplicates of popular toys, and use short turn-taking games. If teething or sensory seeking may be involved, ask a clinician about safe chewable options and avoid small objects.',
        'Praise the behavior you want to see: gentle hands, asking for help, moving away, or waiting. Be specific and immediate. A child learns faster when adults notice success rather than talking only about mistakes.'
      ] },
      { heading: 'Care for the bitten child', paragraphs: [
        'Wash the area with soap and water and follow local first-aid advice. Contact a clinician for a deep wound, bleeding that will not stop, a bite to the face or hand, spreading redness, swelling, pus, fever, or concern about infection.',
        'Protect privacy and avoid labeling either child. The child who was bitten needs care and safety; the child who bit needs teaching and supervision. Adults can hold both truths at once.'
      ] },
      { heading: 'Ask for support when it persists', paragraphs: [
        'Talk with a pediatric clinician if biting is frequent, severe, occurs without clear triggers, continues despite consistent support, or is part of wider language, sensory, sleep, or behavior concerns. A speech-language or developmental evaluation may help identify the missing skill.',
        'Tell childcare providers the exact response you want used so the child receives a consistent limit. Share prevention strategies, not only a warning about what happened.'
      ] }
    ],
    takeaways: ['Separate children, protect the bitten child, and use one firm safety sentence.', 'Look for triggers such as tiredness, crowding, conflict, or language frustration.', 'Teach replacement words and gestures before the next hard moment.', 'Praise gentle hands and safe communication.', 'Seek medical or developmental guidance when biting is severe, persistent, or part of a wider concern.'],
    faq: [
      { q: 'Should I bite back so my toddler understands?', a: 'No. Biting back models the behavior and can add fear or shame. Separate, state the limit, care for the injured child, and teach an alternative when everyone is calm.' },
      { q: 'Is biting always teething?', a: 'No. Teething can add discomfort, but toddlers also bite from frustration, excitement, crowding, tiredness, or limited language. Look for the pattern rather than assuming one cause.' },
      { q: 'When does biting need professional help?', a: 'Ask for guidance when bites are frequent, severe, unexplained, persistent despite consistent support, or accompanied by language, sensory, sleep, or developmental concerns.' }
    ]
  }),
  makeArticle({
    slug: 'baby-and-child/family-reading-routine',
    category: 'child',
    hero: 'content/generated-child-reading-routine.png',
    title: 'Building a Family Reading Routine That Actually Lasts',
    description: 'How shared reading supports language and connection, how to choose books, keep a routine flexible, and include children who do not sit still for a whole story.',
    intro: 'Shared reading is less about finishing a book and more about the conversation, attention, and comfort that happen around it. A routine can be five minutes on a sofa, a picture walk before bed, or a child choosing the same favorite book again. Repetition is part of learning, not a failure of imagination.',
    sections: [
      { heading: 'Choose a time that can survive real life', paragraphs: [
        'Attach reading to an existing anchor such as after bath, after breakfast, or while a sibling gets ready. Keep the first goal small enough that illness, work, and tired evenings do not destroy the habit. A short consistent routine beats an elaborate one that happens rarely.',
        'If bedtime is already tense, read earlier in the day. Reading is valuable wherever it fits. The goal is shared attention, not a particular chair or hour.'
      ] },
      { heading: 'Let the child lead sometimes', paragraphs: [
        'Offer two or three choices and let the child choose the book, page, or position. Children may want to skip, repeat, point, or tell their own version. Respond to their interest and add a few words rather than insisting on every sentence.',
        'For babies, name pictures, copy sounds, and pause for a response. For toddlers, ask simple questions and connect the story to their world. For preschoolers, invite predictions and feelings without turning reading into a quiz.'
      ] },
      { heading: 'Support language without pressure', paragraphs: [
        'Expand what the child says: if they point to a dog, you might say, “Yes, a big brown dog is running.” Talk about actions, colors, emotions, and cause and effect. Children learn from hearing rich language in a warm exchange.',
        'Do not correct every pronunciation or demand that a child repeat words. Model the word naturally and keep the interaction enjoyable. If you have concerns about hearing, speech, or understanding, ask a pediatric clinician or speech-language professional.'
      ] },
      { heading: 'Make room for movement and repetition', paragraphs: [
        'A child who wanders while listening may still be taking in the story. Let them bring a toy, act out a page, or look at only a few pictures. Board books, lift-the-flap books, poems, songs, and family stories all count.',
        'Reading the same book repeatedly builds memory and prediction. Keep a small basket within reach and rotate a few titles when the child is ready. Library visits can add variety without requiring every book to be purchased.'
      ] },
      { heading: 'Make it inclusive and sustainable', paragraphs: [
        'Choose books that reflect the child’s family, language, culture, disability, and everyday life. If your strongest reading language is not the school language, read in the language that feels richest; a strong language foundation supports communication broadly.',
        'Protect the routine from perfectionism. Missing a night is normal. Begin again at the next opportunity, invite another caregiver to read, and remember that the relationship around the book is the lasting part.'
      ] }
    ],
    takeaways: ['Choose a short time and place that fit your real family rhythm.', 'Let children point, skip, repeat, move, and tell their own version.', 'Use rich language and connection without turning reading into a test.', 'Repetition, songs, and family stories all count as shared literacy.', 'Read in the language that supports the warmest, richest interaction.'],
    faq: [
      { q: 'What if my child will not sit still for a book?', a: 'Keep the reading short, allow movement, use songs or picture walks, and let the child choose. Listening does not always look like sitting quietly from cover to cover.' },
      { q: 'Is repeating the same book helpful?', a: 'Yes. Repetition supports memory, vocabulary, prediction, and confidence. Familiar books can be a strong bridge to new ones.' },
      { q: 'Should I read in my home language?', a: 'Yes. Read and talk in the language that feels natural and rich to you. Strong shared language experiences support communication and connection.' }
    ]
  })
];
