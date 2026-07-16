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

const updated = 'June 19, 2026';

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
      'This localized page is provided for convenience. If a translation conflicts with the English policy page, the English version controls to the extent permitted by law.',
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
      mediaTitle: 'A look inside BeMama',
      mediaText:
        'Preview the main BeMama experiences: daily guidance, Q&A, community spaces, AI-assisted explanations, and child-growth support.',
      trustCue: 'Clearly scoped support',
      adTitle: 'Support for each stage of the care journey',
      adText:
        'BeMama helps organize daily guidance, community conversations, and clearly labeled AI-assisted explanations while keeping medical decisions with qualified care.',
      adStatus: 'Care support across stages',
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
      privacy: policy('Privacy Policy', 'Plain-language overview of how BeMama collects, uses, shares, retains, and protects account, care journey, Q&A, community, chat, device, subscription, media, and AI-assisted support data.', [
        ['Who this policy covers', [
          'This policy applies when you use the BeMama website, web app, mobile apps, account features, Daily Journey, Q&A, community spaces, chat, voice or video calling, AI-assisted support, subscriptions, and support channels.',
          `Questions, deletion requests, access requests, export requests, or privacy concerns can be sent to ${site.supportEmail}.`
        ]],
        ['Information we collect', [
          'Account and contact information, such as name, email address, sign-in provider identifiers, language, account settings, support messages, verification records, and security records.',
          'Care journey and profile information, such as planning, pregnancy, baby care, or child growth stage; due date or child age range when provided; goals; preferences; daily check-ins; saved content; symptoms or questions you choose to enter; and other information you add to personalize BeMama.',
          'Community, Q&A, chat, call, and media information, such as posts, comments, questions, answers, messages, attachments, images, audio, video-call metadata, call participation records, moderation notes, and support review notes.',
          'Device, app, and commercial information, such as IP address, device and browser details, app version, diagnostics, crash logs, push notification tokens, approximate region, feature usage, subscription status, entitlement status, app-store transaction identifiers, and records needed to prevent abuse. BeMama does not receive full payment card numbers from app stores or payment providers.'
        ]],
        ['Sensitive care information', [
          'Planning, pregnancy, fertility, baby, child, mental wellbeing, symptom, and care-related information can be sensitive. BeMama uses this information only to provide requested features, personalize care surfaces, support safety and moderation, troubleshoot the service, and respond to account, support, or privacy requests.',
          'Do not post urgent symptoms, emergency details, or another person’s private information in public community areas. For urgent symptoms or safety concerns, contact qualified local care or emergency services.'
        ]],
        ['Camera, microphone, notifications, and calling', [
          'BeMama requests camera, microphone, audio, Bluetooth, internet, and notification permissions only for features that need them, such as voice or video calls, media capture, audio messages, message alerts, and call alerts.',
          'You can control many permissions through your device settings. Turning off a permission may limit the related feature, but the rest of BeMama may still work where technically possible.'
        ]],
        ['How we use information', [
          'We use information to create and secure accounts, provide Daily Journey and care surfaces, operate Q&A/community/chat/calling, send notifications you request or allow, manage subscriptions and entitlements, provide support, moderate content, prevent fraud and abuse, improve reliability, troubleshoot defects, measure feature performance, and comply with applicable obligations.',
          'We may use de-identified, aggregated, or otherwise privacy-protective information to understand product performance, improve care journeys, and plan future features.'
        ]],
        ['AI-assisted features', [
          'When AI-assisted features are enabled, prompts, questions, conversation context, generated responses, ratings, safety metadata, and related technical logs may be processed by BeMama and AI service providers to provide the feature, improve safety, investigate problems, and maintain quality.',
          'AI-assisted content is for general education and support. It can be wrong, incomplete, biased, or not appropriate for your situation. Do not use it for diagnosis, medication dosage, treatment decisions, emergency triage, or urgent safety decisions.'
        ]],
        ['Visibility and sharing inside BeMama', [
          'Community posts and Q&A content may be visible to other users according to the space, audience, or feature where you post them. Private messages and calls are intended for the selected participants, but BeMama administrators, moderators, or support staff may review related records when needed for safety, abuse prevention, troubleshooting, support, or legal reasons.',
          'You are responsible for the information you choose to share. Do not upload or publish another person’s personal information, images, health information, or child information unless you have permission and a lawful reason to do so.'
        ]],
        ['Reports, moderation, and abusive behavior', [
          'If someone insults, harasses, threatens, impersonates, doxxes, exploits, scams, or otherwise harms another person in BeMama, users may report the content or account to support. BeMama may review the reported content, surrounding conversation, account history, device and security records, prior reports, and technical logs to understand what happened and decide how to respond.',
          'Moderation actions may include leaving content in place, hiding content, removing content, warning a user, limiting features, suspending or closing an account, preserving records for safety, or reporting serious abuse to appropriate authorities where required or appropriate. We do not promise that every reported item will be removed, and we may not be able to share the full outcome with the reporter because other users also have privacy rights.',
          'If a report involves immediate danger, self-harm, abuse, threats, exploitation, or illegal conduct, contact local emergency services or qualified local support first. BeMama support is not an emergency response service.'
        ]],
        ['User disputes and evidence preservation', [
          'When users disagree with each other, BeMama may use available records to enforce the Terms of Use, protect users, and reduce misuse. We may preserve relevant account, message, moderation, transaction, and security records when needed to investigate a dispute, respond to a legal request, defend rights, prevent abuse, or protect safety.',
          'Before an account deletion request is completed, BeMama may temporarily use available records to finish an open support, refund, safety, abuse, or payment investigation. After account deletion is completed, BeMama’s intent is to keep no identifiable account data except required financial and transaction records. Public or community content may be removed or de-identified, and copies outside BeMama’s control, such as screenshots saved by other users, may still exist.'
        ]],
        ['Third parties and service providers', [
          'BeMama may share information with vendors and service providers that help operate the service, including hosting, storage, content delivery, authentication, email, support, push notifications, app analytics, diagnostics, AI processing, video or voice calling, payment and subscription management, security, and fraud prevention providers.',
          'App stores and payment providers may process purchases, refunds, subscriptions, taxes, and entitlement information under their own terms and policies. BeMama may receive purchase and entitlement records, but not full card details.',
          'We may disclose information when required to comply with law, enforce our terms, protect rights and safety, investigate misuse, respond to lawful requests, or complete a merger, acquisition, financing, reorganization, or transfer of service assets.'
        ]],
        ['International processing', [
          'BeMama and its providers may process information in Canada, the United States, the European Union, or other regions where BeMama or its providers operate. Privacy protections may differ by region, but we use safeguards appropriate to the nature of the information and the service.'
        ]],
        ['Retention', [
          'BeMama keeps personal information only while it is useful for providing the service, supporting the account, handling requests, maintaining safety, managing subscriptions, or meeting operational needs. BeMama does not guarantee that user content, messages, media, AI prompts, support history, diagnostics, or other user-exportable account data will be retained for more than 3 months.',
          'Some data may be deleted, de-identified, rotated, or overwritten sooner than 3 months, especially temporary files, logs, cached media, diagnostics, notification records, drafts, and inactive operational data. If you want an export, request it while the account is active and before requesting deletion.',
          'If you request account deletion, BeMama will delete the account and associated personal data from active systems after verifying and processing the request. After deletion is completed, BeMama will not intentionally retain identifiable account data except financial and transaction records required for accounting, tax, app-store reporting, refund, chargeback, payment dispute, or payment-provider obligations.',
          'Financial and transaction records may include purchase identifiers, subscription entitlement records, refund records, chargeback records, tax/accounting records, invoice or receipt metadata, payment-provider messages, and related support notes needed to understand a payment issue. These records are retained only for financial, accounting, legal, fraud-prevention, and payment-provider purposes, not to continue providing account features.',
          'Deleting the app from your device does not delete your account, erase server-side records, export your data, remove content already shared with others, or cancel an active app-store subscription.'
        ]],
        ['Access and export limits', [
          `You may request access, correction, deletion, export, or review of your BeMama information by contacting ${site.supportEmail}. We may need to verify your identity before acting on a request.`,
          'Exports include available personal account data that BeMama can reasonably locate, verify, and lawfully provide at the time of the request. Exports may not include data already deleted or de-identified, temporary logs, cached files, internal security notes, internal moderation notes, other users’ private data, confidential business records, app-store records controlled by Google or Apple, or records that cannot be safely linked to the verified requester.',
          'Because BeMama does not guarantee retention of user-exportable data for more than 3 months, an export may be incomplete if the request is made after records have expired, been overwritten, been de-identified, or been deleted through normal retention.',
          'You can update account details in the app where available, control device permissions in operating system settings, opt out of some communications, and disable push notifications through your device or app settings.'
        ]],
        ['Children and family information', [
          'BeMama is intended for adults and caregivers, not for children to create accounts on their own. Parents and caregivers may choose to provide information about a child to use BeMama features, and they are responsible for doing so appropriately.'
        ]],
        ['Security', [
          'We use administrative, technical, and organizational safeguards designed to protect personal information against unauthorized access, misuse, loss, and alteration. No online service can guarantee absolute security. BeMama uses email verification codes instead of account passwords, so keep your email account and device secure, do not share verification codes with anyone, and contact us if you believe your account or email access has been compromised.'
        ]],
        ['Changes to this policy', [
          'We may update this policy as BeMama changes. The updated date shows when this page last changed. If a change materially affects how we handle personal information, we will provide notice in a reasonable way, such as through the website, app, email, or account notices.'
        ]]
      ], 'This policy describes BeMama’s practices in plain language and does not limit privacy rights you may have under applicable law.'),
      terms: policy('Terms of Use', 'Terms for using BeMama, including user responsibilities, community rules, AI-assisted content, and medical disclaimers.', [
        ['Agreement and eligibility', ['By using BeMama, you agree to these terms and the policies linked from the website or app. You must be able to form a binding agreement in your region. If you use BeMama for someone else, you confirm that you have permission and authority to do so.']],
        ['Using BeMama', ['You may use BeMama to access planning, pregnancy, baby care, child growth, Daily Journey, Q&A, community, chat, voice or video calling, AI-assisted support, subscriptions, and support features available to your account, device, and region.']],
        ['Accounts and security', ['You are responsible for your account, credentials, device security, and the accuracy of information you provide. Notify BeMama if you suspect unauthorized account access. We may restrict, suspend, or close accounts when needed to protect users, the service, or legal obligations.']],
        ['Not medical advice', ['BeMama content is for general education and support. It is not medical advice, diagnosis, prescription, medication dosing, emergency care, urgent triage, or a replacement for qualified clinicians, midwives, nurses, pharmacists, therapists, emergency services, or local health systems.']],
        ['Emergencies and urgent care', ['For urgent symptoms, severe pain, heavy bleeding, breathing difficulty, fainting, infection signs, self-harm thoughts, abuse, danger, or any immediate safety concern, contact qualified local care or emergency services immediately. Do not wait for BeMama, AI-assisted content, chat, email, or community replies.']],
        ['Community, chat, and calls', ['Be respectful and lawful. Do not harass, threaten, exploit, impersonate, spam, scrape, reverse engineer, interfere with the service, upload malware, post illegal or unsafe content, or share another person’s private information, images, child information, or health information without permission.']],
        ['Insults, harassment, and unsafe conduct', ['BeMama is meant to be a supportive space. Paying for BeMama, subscribing to premium features, or purchasing any service does not give anyone permission to insult, bully, shame, use abusive language, use bad words toward others, stalk, sexually harass, threaten, intimidate, discriminate, promote self-harm, encourage dangerous medical behavior, exploit vulnerable people, or pressure someone to share private information. Content may also be restricted if it is graphic, hateful, obscene, misleading, predatory, fraudulent, illegal, or likely to harm another user. Each user is responsible for their own conduct, content, messages, uploads, calls, and any consequences that result from them.']],
        ['Reporting and enforcement', [`If someone violates these terms, report it through the app where available or email ${site.supportEmail}. Include the account name, screenshots if safe to share, approximate date/time, and why the content is harmful. BeMama may review related content and records, remove content, limit features, warn users, temporarily restrict an account, temporarily ban an account for a period of time, permanently ban an account, close an account, preserve records, or take no action if the content does not violate these terms.`]],
        ['Repeat abuse and serious harm', ['BeMama may act faster or more strictly for repeat violations, coordinated harassment, threats, exploitation, scams, evasion of a prior ban, attempts to identify or expose someone, or conduct involving minors, self-harm, abuse, or illegal activity. Repeated violations may result in a permanent ban. Serious cases may be escalated to service providers, app stores, payment providers, or appropriate authorities where required or appropriate.']],
        ['Appeals and mistakes', [`If you believe BeMama removed content, limited features, or suspended an account by mistake, contact ${site.supportEmail}. Appeals should include the account email, the affected content or feature, and a short explanation. We may not reverse a moderation decision when doing so could risk user safety, privacy, legal compliance, or platform integrity.`]],
        ['Your content', ['You keep ownership of content you submit, such as posts, questions, messages, images, and feedback. You grant BeMama the rights needed to host, process, display, moderate, translate, analyze, troubleshoot, and operate the service using that content. You are responsible for having the rights and permissions needed for content you share.']],
        ['Content removal and account closure', ['You may stop using BeMama at any time and may request account deletion. Once account deletion is completed, BeMama will remove the account and associated personal data from active systems and will not intentionally retain identifiable account data except required financial and transaction records. Some content may be removed, de-identified, or no longer recoverable, and BeMama does not guarantee that user-exportable data will be kept for more than 3 months. Closing an account does not automatically cancel a subscription purchased through an app store.']],
        ['AI-assisted content', ['AI-assisted answers may be labeled when metadata is available. AI can be wrong, incomplete, biased, outdated, or not appropriate for your situation. You must independently evaluate AI-assisted content and consult qualified care for medical, safety, legal, financial, or other professional decisions.']],
        ['Subscriptions and purchases', ['Paid features, trials, subscriptions, app-store purchases, refunds, renewals, cancellation, taxes, and entitlement management are governed by the checkout terms shown at purchase and by the applicable app store or payment provider, unless BeMama states otherwise. Paid users must follow the same safety, community, and legal rules as free users. Payment does not excuse insults, abusive language, harassment, threats, fraud, illegal behavior, or misuse of BeMama. Deleting the app, closing your BeMama account, losing access because of a terms violation, or choosing not to use the service may not cancel a subscription or guarantee a refund.']],
        ['Refund requests', ['For Google Play or Apple App Store purchases, refund eligibility and the refund decision are usually controlled by Google, Apple, or the payment provider. BeMama can help with entitlement issues, explain where to request a refund, and review support cases where store tools allow, but we cannot promise that a store or payment provider will approve a refund. If BeMama directly sells a paid feature outside an app store, refund handling will follow the terms shown at checkout and applicable law.']],
        ['Chargebacks and payment disputes', ['If a chargeback, payment reversal, suspected fraud, or payment dispute occurs, BeMama may receive related transaction information from the app store or payment provider, revoke paid access, pause entitlements, request verification, or close the related account where appropriate.']],
        ['Service changes and availability', ['BeMama may add, change, suspend, or remove features; limit access by region, device, account status, safety reason, or legal requirement; and perform maintenance. We try to keep BeMama reliable, but we do not promise uninterrupted or error-free service.']],
        ['Disclaimers and responsibility', ['To the maximum extent permitted by applicable law, BeMama is provided as-is and as available. We are not responsible for decisions you make based on general educational content, AI-assisted content, community posts, or user-generated information. Nothing in these terms limits rights that cannot be limited under applicable law.']],
        ['Contact', [`Questions about these terms can be sent to ${site.supportEmail}.`]]
      ]),
      'subscription-terms': policy('Subscription Terms', 'These Subscription Terms apply to BeMama Premium monthly and annual auto-renewable subscriptions, including app store billing, renewal, cancellation, refunds, trials, and price changes.', [
        ['Free and premium access', ['BeMama offers free features and optional BeMama Premium features through monthly and annual auto-renewable subscriptions. Feature availability, limits, trial length, billing provider, and promotions may vary by platform, country, account, and time. The applicable localized price is displayed by the app store before purchase confirmation.']],
        ['Billing provider', ['If you subscribe or buy through Google Play, Apple App Store, or another payment provider, that provider processes the payment and charges the store account used to confirm the purchase. The provider also manages renewal, cancellation, refunds, taxes, and payment-method rules. BeMama may receive transaction identifiers, entitlement status, renewal status, cancellation status, country, currency, and related records, but not full payment card numbers.']],
        ['Auto-renewal and cancellation', ['BeMama Premium subscriptions renew automatically unless cancelled before the renewal deadline shown by the applicable app store. The store charges the account used for purchase according to the selected monthly or annual plan and the localized price displayed before confirmation. Users can manage or cancel subscriptions through their App Store, Google Play, or other payment-provider account settings. Uninstalling BeMama, deleting your account, or stopping app use does not cancel an active subscription.']],
        ['Trials, promotions, and price changes', ['Trials, founding offers, promotional prices, coupons, or discounted plans are subject to the terms shown at checkout. If a subscription price changes, the store or payment provider may require notice, consent, or cancellation rights according to its rules and applicable law.']],
        ['Refunds through Google Play or Apple', ['Refund decisions for Google Play and Apple App Store purchases are usually made by Google, Apple, or the applicable payment provider under their own refund rules. Users should request refunds through the store account used for purchase. BeMama support can help locate entitlement information and explain the correct route, but may not be able to approve or reverse a store decision.']],
        ['Refunds handled by BeMama', ['If BeMama sells a paid feature directly outside an app store, BeMama may review refund requests case by case based on the checkout terms, whether the feature was delivered, account status, suspected abuse, technical problems, legal requirements, and fairness to the user. Approved refunds may revoke access to the paid feature.']],
        ['No automatic refund situations', ['A refund is not automatic just because a user deleted the app, stopped using the service, forgot to cancel renewal, disliked general educational content, lost access after violating the Terms of Use, changed devices, or expected BeMama to provide diagnosis, emergency response, or professional medical care. This does not limit rights a user may have under app-store rules or applicable law.']],
        ['Entitlement problems', ['If you paid but premium access is missing, contact support before requesting a refund if you want to keep using BeMama. Include the platform, account email, approximate purchase date, order ID or transaction ID if available, and screenshots of the purchase receipt with payment card details hidden.']],
        ['Refund abuse and fraud prevention', ['BeMama may limit accounts, revoke entitlements, or refuse direct refund support where there is evidence of refund abuse, chargeback abuse, account sharing, payment fraud, misuse of promotions, or attempts to bypass store rules.']],
        ['Feature changes', ['Premium features may change as BeMama improves the product, updates safety controls, complies with legal requirements, or changes platform integrations. If a feature is removed or materially changed, BeMama will handle it in a reasonable way based on the subscription terms, store rules, and applicable law.']],
        ['Support', [`For subscription or entitlement issues, contact ${site.supportEmail} and include the account email, platform, and approximate purchase date. Do not email full card details.`]]
      ]),
      'ai-disclaimer': policy('AI Disclaimer and Safety', 'How BeMama uses AI-assisted content, what AI can and cannot do, and when to seek qualified care.', [
        ['How AI may be used', ['BeMama may use AI-assisted tools to draft, summarize, translate, categorize, or support Q&A answers, Daily Journey content, safety reminders, and consultation-style messages when those features are enabled. AI-assisted answers are labeled when metadata is available.']],
        ['What AI is for', ['AI-assisted content can help explain general topics, organize questions, suggest non-urgent next steps, summarize information, and prepare questions for a clinician, midwife, nurse, support team, or trusted caregiver.']],
        ['What AI is not for', ['AI is not for diagnosis, prescriptions, medication dosage, treatment decisions, emergency care, urgent triage, abuse response, self-harm response, legal advice, financial advice, or replacing qualified local care.']],
        ['Accuracy and bias', ['AI systems can misunderstand context, produce outdated information, omit important details, or reflect bias. Do not rely on AI-assisted content as the only source for important health, safety, legal, financial, or caregiving decisions.']],
        ['Human review and safety', ['BeMama may review AI-assisted interactions, feedback, and safety signals to troubleshoot, improve quality, moderate misuse, and protect users. If an answer seems unsafe, unclear, offensive, or wrong, stop using it and contact support or qualified care as appropriate.']],
        ['Safety guidance', ['For severe pain, heavy bleeding, breathing difficulty, fainting, infection signs, self-harm thoughts, abuse, danger, or any urgent symptom, seek qualified local care or emergency services immediately.']]
      ], 'Use AI-assisted content as a starting point for general education, not as a final decision for health or safety matters.'),
      contact: policy('Contact and Support', 'Contact BeMama for support, privacy requests, deletion/export requests, and safety review.', [
        ['Support', [`Email ${site.supportEmail} for product support, account help, login issues, app-store entitlement issues, deletion/export requests, privacy questions, safety review, or review of AI-assisted content.`]],
        ['Privacy requests', ['For deletion, export, correction, access, consent withdrawal, or privacy review, include the email or account identifier associated with your BeMama account. We may ask for information needed to verify the request. Request an export before requesting deletion, because BeMama does not guarantee that user-exportable data will remain available for more than 3 months and deletion removes account data except required financial and transaction records.']],
        ['Billing and refund support', ['For app-store subscriptions, missing premium access, cancellation confusion, or refund questions, include the platform, account email, approximate purchase date, store order ID or transaction identifier if available, and screenshots of the receipt with payment card details hidden. Do not send full payment card details.']],
        ['Safety reports', ['Report harassment, insults, threats, unsafe content, impersonation, scams, privacy violations, or child-safety concerns through support. Include the account name, approximate date/time, where it happened, screenshots if safe to share, and whether anyone is in immediate danger. BeMama may review related content, account records, and technical logs to investigate and protect users.']],
        ['Moderation appeals', ['If your content was removed, your account was limited, or a feature was blocked and you believe it was a mistake, contact support with the affected account, content, date/time, and a short explanation.']],
        ['Urgent care', ['BeMama support is not emergency support. For urgent symptoms, medical concerns, self-harm concerns, abuse, danger, or immediate safety issues, contact qualified local care or emergency services.']]
      ])
    }
  },
  fa: {
    nav: { home: 'خانه', about: 'درباره', privacy: 'حریم خصوصی', terms: 'شرایط', ai: 'ایمنی هوش مصنوعی', contact: 'تماس', support: 'پشتیبانی', language: 'زبان' },
    metaDescription: 'BeMama همراهی آرام برای برنامه‌ریزی، بارداری، مراقبت نوزاد و رشد کودک است.',
    footer: 'فقط آموزش و پشتیبانی عمومی. ابزار تشخیص پزشکی نیست.',
    officialNotice: 'این صفحه ترجمه‌ای برای راحتی شماست. اگر ترجمه با نسخه انگلیسی تفاوت داشته باشد، تا حد مجاز قانون نسخه انگلیسی ملاک است.',
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
      mediaTitle: 'نگاهی به تجربه BeMama',
      mediaText: 'بخش‌های اصلی BeMama را ببینید: راهنمایی روزانه، پرسش و پاسخ، فضاهای جامعه، توضیح‌های کمک‌گرفته از هوش مصنوعی و پشتیبانی رشد کودک.',
      trustCue: 'پشتیبانی روشن و قابل اعتماد',
      adTitle: 'پشتیبانی برای هر مرحله از مسیر مراقبت',
      adText: 'BeMama به سازمان‌دهی راهنمایی روزانه، گفت‌وگوهای جامعه و توضیح‌های کمک‌گرفته از هوش مصنوعی کمک می‌کند، در حالی که تصمیم‌های پزشکی باید با مراقبت واجد شرایط باشد.',
      adStatus: 'پشتیبانی در همه مراحل',
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
    officialNotice: 'هذه الصفحة مترجمة للتسهيل. إذا تعارضت الترجمة مع النسخة الإنجليزية، تكون النسخة الإنجليزية هي المعتمدة بالقدر الذي يسمح به القانون.',
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
      mediaTitle: 'نظرة داخل تجربة BeMama',
      mediaText: 'استعرضي تجارب BeMama الرئيسية: الإرشاد اليومي، الأسئلة والأجوبة، مساحات المجتمع، الشرح بمساعدة الذكاء الاصطناعي، ودعم نمو الطفل.',
      trustCue: 'دعم واضح النطاق وموثوق',
      adTitle: 'دعم لكل مرحلة من رحلة الرعاية',
      adText: 'تساعد BeMama على تنظيم الإرشاد اليومي ومحادثات المجتمع والشرح المعرّف بوضوح بمساعدة الذكاء الاصطناعي، مع بقاء القرارات الطبية للرعاية المؤهلة.',
      adStatus: 'دعم الرعاية عبر المراحل',
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
    officialNotice: 'Cette page localisée est fournie pour faciliter la lecture. En cas de conflit avec la version anglaise, la version anglaise prévaut dans la mesure permise par la loi.',
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
      mediaTitle: 'Un aperçu de BeMama',
      mediaText: 'Découvrez les expériences principales de BeMama : guidance quotidienne, Q&R, espaces communautaires, explications assistées par IA et soutien à la croissance de l’enfant.',
      trustCue: 'Un soutien clairement cadré',
      adTitle: 'Un soutien pour chaque étape du parcours de soins',
      adText: 'BeMama aide à organiser la guidance quotidienne, les échanges communautaires et les explications assistées par IA clairement indiquées, tout en laissant les décisions médicales aux soins qualifiés.',
      adStatus: 'Soutien de soins par étape',
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
    officialNotice: 'Bu yerelleştirilmiş sayfa kolaylık için sunulur. Çeviri ile İngilizce sürüm arasında fark varsa, yasaların izin verdiği ölçüde İngilizce sürüm geçerlidir.',
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
      mediaTitle: 'BeMama deneyimine bakış',
      mediaText: 'BeMama’nın ana deneyimlerini görün: günlük rehberlik, soru-cevap, topluluk alanları, yapay zeka destekli açıklamalar ve çocuk gelişimi desteği.',
      trustCue: 'Kapsamı açık destek',
      adTitle: 'Bakım yolculuğunun her aşaması için destek',
      adText: 'BeMama günlük rehberliği, topluluk konuşmalarını ve açıkça etiketlenen yapay zeka destekli açıklamaları düzenlemeye yardımcı olur; tıbbi kararlar nitelikli bakıma bırakılır.',
      adStatus: 'Aşamalar boyunca bakım desteği',
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
    officialNotice: 'Esta página localizada se ofrece para facilitar la lectura. Si una traducción entra en conflicto con la versión en inglés, prevalece la versión en inglés en la medida permitida por la ley.',
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
      mediaTitle: 'Una mirada dentro de BeMama',
      mediaText: 'Explora las experiencias principales de BeMama: guía diaria, preguntas y respuestas, espacios de comunidad, explicaciones asistidas por IA y apoyo al crecimiento infantil.',
      trustCue: 'Apoyo claramente delimitado',
      adTitle: 'Apoyo para cada etapa del recorrido de cuidado',
      adText: 'BeMama ayuda a organizar guía diaria, conversaciones comunitarias y explicaciones asistidas por IA claramente etiquetadas, manteniendo las decisiones médicas con atención calificada.',
      adStatus: 'Apoyo de cuidado por etapas',
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
    officialNotice: 'Esta página localizada é fornecida para conveniência. Se uma tradução entrar em conflito com a versão em inglês, a versão em inglês prevalece na medida permitida por lei.',
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
      mediaTitle: 'Uma visão da experiência BeMama',
      mediaText: 'Veja as principais experiências do BeMama: orientação diária, perguntas e respostas, espaços de comunidade, explicações assistidas por IA e apoio ao crescimento infantil.',
      trustCue: 'Suporte com escopo claro',
      adTitle: 'Suporte para cada etapa da jornada de cuidado',
      adText: 'BeMama ajuda a organizar orientação diária, conversas da comunidade e explicações assistidas por IA claramente identificadas, mantendo decisões médicas com cuidado qualificado.',
      adStatus: 'Suporte de cuidado por etapas',
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

function persianPolicy() {
  return {
    about: policy('درباره BeMama', 'BeMama چیست، برای چه کسانی است، و محدودیت‌های مراقبت و پشتیبانی با کمک هوش مصنوعی چیست.', [
      ['BeMama چیست', ['BeMama یک همراه دیجیتال برای افرادی است که مسیر برنامه‌ریزی، بارداری، مراقبت نوزاد و رشد کودک را طی می‌کنند. BeMama برنامه‌ها، پشتیبانی جامعه، پرسش و پاسخ و محتوای آموزشی مفید را در یک فضای آرام و منظم گردآوری می‌کند.']],
      ['ماموریت', ['ماموریت ما این است که پشتیبانی مادران، والدین و مراقبان شخصی‌تر، کمتر پراکنده و در مراحل مختلف زندگی خانوادگی آسان‌تر در دسترس باشد.']],
      ['BeMama چه چیزی نیست', ['BeMama تشخیص، نسخه، تعیین دوز دارو، مراقبت اضطراری یا جایگزینی برای قضاوت حرفه‌ای پزشکی ارائه نمی‌کند. برای علائم فوری یا نگرانی‌های ایمنی، با مراقبت واجد شرایط محلی یا خدمات اضطراری تماس بگیرید.']]
    ], 'BeMama ابزار تشخیص پزشکی نیست و جای مراقبت پزشکان، متخصصان واجد شرایط، خدمات اضطراری یا نظام سلامت محلی را نمی‌گیرد.'),
    privacy: policy('سیاست حریم خصوصی', 'مرور ساده و دقیق درباره اینکه BeMama چگونه داده‌های حساب، مسیر مراقبت، پرسش و پاسخ، جامعه، چت، دستگاه، اشتراک، رسانه و پشتیبانی با کمک هوش مصنوعی را جمع‌آوری، استفاده، به‌اشتراک‌گذاری، نگهداری و محافظت می‌کند.', [
      ['این سیاست شامل چه مواردی است', [
        'این سیاست زمانی اعمال می‌شود که شما از وب‌سایت BeMama، وب‌اپ، اپلیکیشن‌های موبایل، قابلیت‌های حساب، مسیر روزانه، پرسش و پاسخ، فضاهای جامعه، چت، تماس صوتی یا تصویری، پشتیبانی با کمک هوش مصنوعی، اشتراک‌ها و کانال‌های پشتیبانی استفاده می‌کنید.',
        `پرسش‌ها، درخواست‌های حذف، درخواست‌های دسترسی، درخواست‌های خروجی داده یا نگرانی‌های حریم خصوصی را می‌توانید به ${site.supportEmail} ارسال کنید.`
      ]],
      ['اطلاعاتی که جمع‌آوری می‌کنیم', [
        'اطلاعات حساب و تماس، مانند نام، نشانی ایمیل، شناسه‌های ارائه‌دهنده ورود، زبان، تنظیمات حساب، پیام‌های پشتیبانی، سوابق تایید و سوابق امنیتی.',
        'اطلاعات مسیر مراقبت و پروفایل، مانند مرحله برنامه‌ریزی، بارداری، مراقبت نوزاد یا رشد کودک؛ تاریخ زایمان یا بازه سنی کودک در صورتی که ارائه شود؛ هدف‌ها؛ ترجیح‌ها؛ ثبت‌های روزانه؛ محتوای ذخیره‌شده؛ علائم یا پرسش‌هایی که خودتان وارد می‌کنید؛ و اطلاعات دیگری که برای شخصی‌سازی BeMama اضافه می‌کنید.',
        'اطلاعات جامعه، پرسش و پاسخ، چت، تماس و رسانه، مانند پست‌ها، نظرها، پرسش‌ها، پاسخ‌ها، پیام‌ها، پیوست‌ها، تصویرها، صدا، فراداده تماس تصویری، سوابق مشارکت در تماس، یادداشت‌های بررسی و یادداشت‌های پشتیبانی.',
        'اطلاعات دستگاه، اپلیکیشن و تجاری، مانند نشانی IP، جزئیات دستگاه و مرورگر، نسخه اپلیکیشن، عیب‌یابی، گزارش خرابی، توکن‌های اعلان، منطقه تقریبی، استفاده از قابلیت‌ها، وضعیت اشتراک، وضعیت دسترسی، شناسه‌های تراکنش فروشگاه اپلیکیشن و سوابق لازم برای جلوگیری از سوءاستفاده. BeMama شماره کامل کارت پرداخت را از فروشگاه‌های اپلیکیشن یا ارائه‌دهندگان پرداخت دریافت نمی‌کند.'
      ]],
      ['اطلاعات حساس مراقبت', [
        'اطلاعات مربوط به برنامه‌ریزی، بارداری، باروری، نوزاد، کودک، سلامت روان، علائم و مراقبت می‌تواند حساس باشد. BeMama این اطلاعات را فقط برای ارائه قابلیت‌های درخواستی، شخصی‌سازی بخش‌های مراقبت، پشتیبانی از ایمنی و بازبینی، رفع مشکل سرویس و پاسخ به درخواست‌های حساب، پشتیبانی یا حریم خصوصی استفاده می‌کند.',
        'علائم فوری، جزئیات اضطراری یا اطلاعات خصوصی شخص دیگر را در بخش‌های عمومی جامعه منتشر نکنید. برای علائم فوری یا نگرانی‌های ایمنی، با مراقبت واجد شرایط محلی یا خدمات اضطراری تماس بگیرید.'
      ]],
      ['دوربین، میکروفون، اعلان‌ها و تماس', [
        'BeMama فقط برای قابلیت‌هایی که به آن نیاز دارند، مانند تماس صوتی یا تصویری، ضبط یا ارسال رسانه، پیام صوتی، هشدار پیام و هشدار تماس، اجازه‌های دوربین، میکروفون، صدا، بلوتوث، اینترنت و اعلان را درخواست می‌کند.',
        'شما می‌توانید بسیاری از اجازه‌ها را از طریق تنظیمات دستگاه کنترل کنید. خاموش کردن یک اجازه ممکن است قابلیت مربوط به آن را محدود کند، اما بخش‌های دیگر BeMama در صورت امکان فنی همچنان کار می‌کنند.'
      ]],
      ['چگونه از اطلاعات استفاده می‌کنیم', [
        'ما از اطلاعات برای ساخت و ایمن‌سازی حساب‌ها، ارائه مسیر روزانه و بخش‌های مراقبت، اجرای پرسش و پاسخ، جامعه، چت و تماس، ارسال اعلان‌هایی که درخواست یا اجازه می‌دهید، مدیریت اشتراک‌ها و دسترسی‌ها، ارائه پشتیبانی، بازبینی محتوا، جلوگیری از تقلب و سوءاستفاده، بهبود پایداری، رفع خطاها، اندازه‌گیری عملکرد قابلیت‌ها و رعایت تعهدات قابل اعمال استفاده می‌کنیم.',
        'ممکن است از اطلاعات بی‌نام، تجمیع‌شده یا به شکل دیگری محافظت‌شده برای فهم عملکرد محصول، بهبود مسیرهای مراقبت و برنامه‌ریزی قابلیت‌های آینده استفاده کنیم.'
      ]],
      ['قابلیت‌های کمک‌گرفته از هوش مصنوعی', [
        'وقتی قابلیت‌های کمک‌گرفته از هوش مصنوعی فعال هستند، درخواست‌ها، پرسش‌ها، زمینه گفت‌وگو، پاسخ‌های تولیدشده، امتیازها، فراداده ایمنی و گزارش‌های فنی مرتبط ممکن است توسط BeMama و ارائه‌دهندگان خدمات هوش مصنوعی پردازش شوند تا قابلیت ارائه شود، ایمنی بهبود یابد، مشکل‌ها بررسی شوند و کیفیت حفظ شود.',
        'محتوای کمک‌گرفته از هوش مصنوعی فقط برای آموزش و پشتیبانی عمومی است. این محتوا می‌تواند نادرست، ناقص، دارای سوگیری یا نامناسب برای وضعیت شما باشد. از آن برای تشخیص، دوز دارو، تصمیم درمانی، تریاژ اضطراری یا تصمیم‌های فوری ایمنی استفاده نکنید.'
      ]],
      ['قابل‌مشاهده بودن و اشتراک‌گذاری در BeMama', [
        'پست‌های جامعه و محتوای پرسش و پاسخ ممکن است بر اساس فضا، مخاطب یا قابلیتی که در آن منتشر می‌کنید برای کاربران دیگر قابل مشاهده باشد. پیام‌های خصوصی و تماس‌ها برای شرکت‌کنندگان انتخاب‌شده در نظر گرفته شده‌اند، اما مدیران، بازبینان یا پشتیبانی BeMama ممکن است در صورت نیاز برای ایمنی، جلوگیری از سوءاستفاده، رفع مشکل، پشتیبانی یا دلایل قانونی سوابق مرتبط را بررسی کنند.',
        'شما مسئول اطلاعاتی هستید که برای اشتراک‌گذاری انتخاب می‌کنید. اطلاعات شخصی، تصویرها، اطلاعات سلامت یا اطلاعات کودک مربوط به شخص دیگر را بدون اجازه و دلیل قانونی بارگذاری یا منتشر نکنید.'
      ]],
      ['گزارش‌ها، بازبینی و رفتار آزاردهنده', [
        'اگر شخصی در BeMama به دیگری توهین کند، آزار دهد، تهدید کند، جعل هویت کند، اطلاعات خصوصی را افشا کند، سوءاستفاده کند، کلاهبرداری کند یا به هر شکل به شخص دیگری آسیب بزند، کاربران می‌توانند محتوا یا حساب را به پشتیبانی گزارش کنند. BeMama ممکن است محتوای گزارش‌شده، گفت‌وگوی اطراف آن، سابقه حساب، سوابق دستگاه و امنیت، گزارش‌های قبلی و گزارش‌های فنی را بررسی کند تا بفهمد چه رخ داده و چگونه باید پاسخ دهد.',
        'اقدام‌های بازبینی ممکن است شامل باقی گذاشتن محتوا، پنهان کردن محتوا، حذف محتوا، هشدار به کاربر، محدود کردن قابلیت‌ها، تعلیق یا بستن حساب، نگهداری موقت سوابق برای ایمنی یا گزارش سوءاستفاده جدی به مراجع مناسب در موارد لازم یا مناسب باشد. ما تضمین نمی‌کنیم هر مورد گزارش‌شده حذف شود و ممکن است به دلیل حقوق حریم خصوصی کاربران دیگر نتوانیم نتیجه کامل را با گزارش‌دهنده به اشتراک بگذاریم.',
        'اگر گزارش شامل خطر فوری، خودآزاری، سوءاستفاده، تهدید، بهره‌کشی یا رفتار غیرقانونی است، ابتدا با خدمات اضطراری محلی یا پشتیبانی واجد شرایط محلی تماس بگیرید. پشتیبانی BeMama سرویس پاسخ اضطراری نیست.'
      ]],
      ['اختلاف کاربران و نگهداری شواهد', [
        'وقتی کاربران با یکدیگر اختلاف دارند، BeMama ممکن است از سوابق موجود برای اجرای شرایط استفاده، محافظت از کاربران و کاهش سوءاستفاده استفاده کند. ممکن است برای بررسی اختلاف، پاسخ به درخواست قانونی، دفاع از حقوق، جلوگیری از سوءاستفاده یا حفاظت از ایمنی، سوابق مرتبط حساب، پیام، بازبینی، تراکنش و امنیت را موقتاً حفظ کنیم.',
        'پیش از تکمیل درخواست حذف حساب، BeMama ممکن است برای تکمیل یک پرونده باز پشتیبانی، بازپرداخت، ایمنی، سوءاستفاده یا پرداخت، موقتاً از سوابق موجود استفاده کند. پس از تکمیل حذف حساب، هدف BeMama این است که هیچ داده قابل شناسایی حساب را جز سوابق مالی و تراکنشی لازم نگه ندارد. محتوای عمومی یا جامعه ممکن است حذف یا بی‌نام شود، و نسخه‌هایی خارج از کنترل BeMama، مانند اسکرین‌شات‌هایی که کاربران دیگر ذخیره کرده‌اند، ممکن است همچنان وجود داشته باشد.'
      ]],
      ['اشخاص ثالث و ارائه‌دهندگان خدمات', [
        'BeMama ممکن است اطلاعات را با فروشندگان و ارائه‌دهندگان خدماتی به اشتراک بگذارد که به اجرای سرویس کمک می‌کنند، از جمله میزبانی، ذخیره‌سازی، تحویل محتوا، احراز هویت، ایمیل، پشتیبانی، اعلان‌های فشاری، تحلیل اپلیکیشن، عیب‌یابی، پردازش هوش مصنوعی، تماس صوتی یا تصویری، مدیریت پرداخت و اشتراک، امنیت و جلوگیری از تقلب.',
        'فروشگاه‌های اپلیکیشن و ارائه‌دهندگان پرداخت ممکن است خریدها، بازپرداخت‌ها، اشتراک‌ها، مالیات‌ها و اطلاعات دسترسی را طبق شرایط و سیاست‌های خود پردازش کنند. BeMama ممکن است سوابق خرید و دسترسی را دریافت کند، اما جزئیات کامل کارت را دریافت نمی‌کند.',
        'ممکن است اطلاعات را زمانی افشا کنیم که برای رعایت قانون، اجرای شرایط، حفاظت از حقوق و ایمنی، بررسی سوءاستفاده، پاسخ به درخواست‌های قانونی یا تکمیل ادغام، خرید، تامین مالی، سازمان‌دهی دوباره یا انتقال دارایی‌های سرویس لازم باشد.'
      ]],
      ['پردازش بین‌المللی', [
        'BeMama و ارائه‌دهندگان آن ممکن است اطلاعات را در کانادا، ایالات متحده، اتحادیه اروپا یا مناطق دیگری که BeMama یا ارائه‌دهندگان آن فعالیت می‌کنند پردازش کنند. حفاظت‌های حریم خصوصی ممکن است بر اساس منطقه متفاوت باشد، اما ما از حفاظت‌هایی متناسب با ماهیت اطلاعات و سرویس استفاده می‌کنیم.'
      ]],
      ['نگهداری', [
        'BeMama اطلاعات شخصی را فقط تا زمانی نگه می‌دارد که برای ارائه سرویس، پشتیبانی از حساب، رسیدگی به درخواست‌ها، حفظ ایمنی، مدیریت اشتراک‌ها یا نیازهای عملیاتی مفید باشد. BeMama تضمین نمی‌کند که محتوای کاربر، پیام‌ها، رسانه‌ها، درخواست‌های هوش مصنوعی، سابقه پشتیبانی، عیب‌یابی یا سایر داده‌های قابل خروجی گرفتن حساب بیش از ۳ ماه نگهداری شوند.',
        'برخی داده‌ها ممکن است زودتر از ۳ ماه حذف، بی‌نام، چرخشی یا بازنویسی شوند، مخصوصاً فایل‌های موقت، گزارش‌ها، رسانه‌های کش‌شده، عیب‌یابی، سوابق اعلان، پیش‌نویس‌ها و داده‌های عملیاتی غیرفعال. اگر خروجی داده می‌خواهید، آن را زمانی درخواست کنید که حساب فعال است و پیش از درخواست حذف حساب.',
        'اگر درخواست حذف حساب کنید، BeMama پس از تایید و پردازش درخواست، حساب و داده‌های شخصی مرتبط را از سیستم‌های فعال حذف می‌کند. پس از تکمیل حذف، BeMama عمداً داده قابل شناسایی حساب را نگه نمی‌دارد مگر سوابق مالی و تراکنشی لازم برای حسابداری، مالیات، گزارش‌دهی فروشگاه اپلیکیشن، بازپرداخت، چارج‌بک، اختلاف پرداخت یا تعهدات ارائه‌دهنده پرداخت.',
        'سوابق مالی و تراکنشی ممکن است شامل شناسه‌های خرید، سوابق دسترسی اشتراک، سوابق بازپرداخت، سوابق چارج‌بک، سوابق مالیاتی یا حسابداری، فراداده فاکتور یا رسید، پیام‌های ارائه‌دهنده پرداخت و یادداشت‌های پشتیبانی مرتبط برای فهم یک مشکل پرداخت باشد. این سوابق فقط برای اهداف مالی، حسابداری، قانونی، جلوگیری از تقلب و ارائه‌دهنده پرداخت نگهداری می‌شوند، نه برای ادامه ارائه قابلیت‌های حساب.',
        'حذف اپلیکیشن از دستگاه شما حساب شما را حذف نمی‌کند، سوابق سمت سرور را پاک نمی‌کند، داده‌های شما را خروجی نمی‌گیرد، محتوایی را که قبلاً با دیگران به اشتراک گذاشته‌اید حذف نمی‌کند، و اشتراک فعال فروشگاه اپلیکیشن را لغو نمی‌کند.'
      ]],
      ['محدودیت‌های دسترسی و خروجی داده', [
        `شما می‌توانید با تماس با ${site.supportEmail} درخواست دسترسی، اصلاح، حذف، خروجی گرفتن یا بازبینی اطلاعات BeMama خود را بدهید. ممکن است پیش از اقدام روی درخواست، لازم باشد هویت شما را تایید کنیم.`,
        'خروجی داده شامل داده‌های شخصی حساب است که BeMama در زمان درخواست بتواند به شکل معقول پیدا، تایید و به صورت قانونی ارائه کند. خروجی ممکن است شامل داده‌هایی که قبلاً حذف یا بی‌نام شده‌اند، گزارش‌های موقت، فایل‌های کش‌شده، یادداشت‌های داخلی امنیتی، یادداشت‌های داخلی بازبینی، داده‌های خصوصی کاربران دیگر، سوابق محرمانه تجاری، سوابق فروشگاه اپلیکیشن تحت کنترل Google یا Apple، یا سوابقی که نمی‌توان با ایمنی به درخواست‌دهنده تاییدشده مرتبط کرد، نباشد.',
        'چون BeMama تضمین نمی‌کند داده‌های قابل خروجی گرفتن کاربر بیش از ۳ ماه نگهداری شوند، اگر درخواست پس از انقضا، بازنویسی، بی‌نام‌سازی یا حذف عادی سوابق انجام شود، خروجی ممکن است ناقص باشد.',
        'شما می‌توانید جزئیات حساب را در اپلیکیشن در صورت وجود به‌روزرسانی کنید، اجازه‌های دستگاه را در تنظیمات سیستم‌عامل کنترل کنید، از برخی ارتباطات خارج شوید و اعلان‌های فشاری را از طریق تنظیمات دستگاه یا اپلیکیشن غیرفعال کنید.'
      ]],
      ['کودکان و اطلاعات خانواده', [
        'BeMama برای بزرگسالان و مراقبان در نظر گرفته شده است، نه برای اینکه کودکان خودشان حساب بسازند. والدین و مراقبان ممکن است برای استفاده از قابلیت‌های BeMama اطلاعاتی درباره کودک ارائه کنند و مسئول انجام مناسب این کار هستند.'
      ]],
      ['امنیت', [
        'ما از حفاظت‌های اداری، فنی و سازمانی استفاده می‌کنیم که برای محافظت از اطلاعات شخصی در برابر دسترسی غیرمجاز، سوءاستفاده، از دست رفتن و تغییر طراحی شده‌اند. هیچ سرویس آنلاین نمی‌تواند امنیت مطلق را تضمین کند. BeMama به جای گذرواژه حساب از کدهای تایید ایمیلی استفاده می‌کند، بنابراین حساب ایمیل و دستگاه خود را امن نگه دارید، کدهای تایید را با هیچ‌کس به اشتراک نگذارید و اگر فکر می‌کنید حساب یا دسترسی ایمیل شما به خطر افتاده است با ما تماس بگیرید.'
      ]],
      ['تغییرات این سیاست', [
        'ممکن است با تغییر BeMama این سیاست را به‌روزرسانی کنیم. تاریخ به‌روزرسانی نشان می‌دهد این صفحه آخرین بار چه زمانی تغییر کرده است. اگر تغییری به شکل مهم بر نحوه رسیدگی ما به اطلاعات شخصی اثر بگذارد، به شیوه‌ای معقول اطلاع‌رسانی می‌کنیم، مانند وب‌سایت، اپلیکیشن، ایمیل یا اعلان حساب.'
      ]]
    ], 'این سیاست شیوه‌های BeMama را به زبان ساده توضیح می‌دهد و حقوق حریم خصوصی‌ای را که ممکن است طبق قانون قابل اعمال داشته باشید محدود نمی‌کند.'),
    terms: policy('شرایط استفاده', 'شرایط استفاده از BeMama، شامل مسئولیت‌های کاربر، قوانین جامعه، محتوای کمک‌گرفته از هوش مصنوعی و هشدارهای پزشکی.', [
      ['توافق و واجد شرایط بودن', ['با استفاده از BeMama، شما با این شرایط و سیاست‌های پیوند داده‌شده از وب‌سایت یا اپلیکیشن موافقت می‌کنید. شما باید در منطقه خود توانایی تشکیل توافق الزام‌آور را داشته باشید. اگر از BeMama برای شخص دیگری استفاده می‌کنید، تایید می‌کنید که اجازه و اختیار انجام این کار را دارید.']],
      ['استفاده از BeMama', ['شما می‌توانید از BeMama برای دسترسی به برنامه‌ریزی، بارداری، مراقبت نوزاد، رشد کودک، مسیر روزانه، پرسش و پاسخ، جامعه، چت، تماس صوتی یا تصویری، پشتیبانی با کمک هوش مصنوعی، اشتراک‌ها و قابلیت‌های پشتیبانی موجود برای حساب، دستگاه و منطقه خود استفاده کنید.']],
      ['حساب‌ها و امنیت', ['شما مسئول حساب، دسترسی به ایمیل، کدهای تایید، امنیت دستگاه و درستی اطلاعاتی هستید که ارائه می‌کنید. اگر به دسترسی غیرمجاز به حساب مشکوک شدید به BeMama اطلاع دهید. ما ممکن است برای حفاظت از کاربران، سرویس یا تعهدات قانونی، حساب‌ها را محدود، معلق یا بسته کنیم.']],
      ['مشاوره پزشکی نیست', ['محتوای BeMama فقط برای آموزش و پشتیبانی عمومی است. این محتوا مشاوره پزشکی، تشخیص، نسخه، تعیین دوز دارو، مراقبت اضطراری، تریاژ فوری یا جایگزین پزشکان، ماماها، پرستاران، داروسازان، درمانگران، خدمات اضطراری یا نظام سلامت محلی نیست.']],
      ['موارد اضطراری و مراقبت فوری', ['برای علائم فوری، درد شدید، خونریزی شدید، مشکل تنفس، غش، نشانه‌های عفونت، افکار خودآزاری، سوءاستفاده، خطر یا هر نگرانی فوری ایمنی، فوراً با مراقبت واجد شرایط محلی یا خدمات اضطراری تماس بگیرید. منتظر BeMama، محتوای هوش مصنوعی، چت، ایمیل یا پاسخ‌های جامعه نمانید.']],
      ['جامعه، چت و تماس‌ها', ['محترمانه و قانونی رفتار کنید. آزار ندهید، تهدید نکنید، سوءاستفاده نکنید، جعل هویت نکنید، اسپم نفرستید، داده جمع‌آوری خودکار نکنید، مهندسی معکوس نکنید، در سرویس اختلال ایجاد نکنید، بدافزار بارگذاری نکنید، محتوای غیرقانونی یا ناایمن منتشر نکنید، و اطلاعات خصوصی، تصویرها، اطلاعات کودک یا اطلاعات سلامت شخص دیگری را بدون اجازه به اشتراک نگذارید.']],
      ['توهین، آزار و رفتار ناایمن', ['BeMama قرار است فضای حمایتی باشد. پرداخت برای BeMama، اشتراک در قابلیت‌های پریمیوم یا خرید هر سرویس به هیچ‌کس اجازه نمی‌دهد به دیگران توهین کند، تحقیر کند، شرمسار کند، زبان آزاردهنده یا بد به کار ببرد، تعقیب کند، آزار جنسی بدهد، تهدید کند، بترساند، تبعیض کند، خودآزاری را ترویج کند، رفتار پزشکی خطرناک را تشویق کند، از افراد آسیب‌پذیر سوءاستفاده کند یا کسی را برای اشتراک‌گذاری اطلاعات خصوصی تحت فشار بگذارد. محتوا همچنین ممکن است محدود شود اگر تصویری، نفرت‌انگیز، رکیک، گمراه‌کننده، شکارگرانه، تقلبی، غیرقانونی یا احتمالاً آسیب‌زا برای کاربر دیگر باشد. هر کاربر مسئول رفتار، محتوا، پیام‌ها، بارگذاری‌ها، تماس‌ها و پیامدهای ناشی از آن‌هاست.']],
      ['گزارش و اجرا', [`اگر کسی این شرایط را نقض کند، در صورت وجود از داخل اپلیکیشن گزارش کنید یا به ${site.supportEmail} ایمیل بزنید. نام حساب، اسکرین‌شات‌ها در صورت ایمن بودن اشتراک‌گذاری، تاریخ و زمان تقریبی و دلیل آسیب‌زا بودن محتوا را وارد کنید. BeMama ممکن است محتوا و سوابق مرتبط را بررسی کند، محتوا را حذف کند، قابلیت‌ها را محدود کند، هشدار بدهد، حساب را موقتاً محدود کند، حساب را برای مدتی ممنوع کند، حساب را دائماً ممنوع کند، حساب را ببندد، سوابق را نگه دارد یا اگر محتوا این شرایط را نقض نکند اقدامی انجام ندهد.`]],
      ['سوءاستفاده تکراری و آسیب جدی', ['BeMama ممکن است برای نقض‌های تکراری، آزار هماهنگ، تهدیدها، بهره‌کشی، کلاهبرداری، دور زدن ممنوعیت قبلی، تلاش برای شناسایی یا افشای شخص، یا رفتار مربوط به افراد زیر سن قانونی، خودآزاری، سوءاستفاده یا فعالیت غیرقانونی سریع‌تر یا سخت‌گیرانه‌تر عمل کند. نقض‌های تکراری ممکن است به ممنوعیت دائمی منجر شود. موارد جدی ممکن است در صورت لزوم یا مناسب به ارائه‌دهندگان خدمات، فروشگاه‌های اپلیکیشن، ارائه‌دهندگان پرداخت یا مراجع مناسب ارجاع شوند.']],
      ['اعتراض و اشتباه‌ها', [`اگر فکر می‌کنید BeMama محتوا را اشتباه حذف کرده، قابلیت‌ها را اشتباه محدود کرده یا حساب را اشتباه معلق کرده است، با ${site.supportEmail} تماس بگیرید. اعتراض باید شامل ایمیل حساب، محتوا یا قابلیت تحت تاثیر و توضیح کوتاه باشد. اگر بازگرداندن تصمیم بازبینی به ایمنی کاربر، حریم خصوصی، رعایت قانون یا یکپارچگی پلتفرم آسیب بزند، ممکن است تصمیم را تغییر ندهیم.`]],
      ['محتوای شما', ['شما مالک محتوایی هستید که ارسال می‌کنید، مانند پست‌ها، پرسش‌ها، پیام‌ها، تصویرها و بازخورد. شما به BeMama حقوق لازم را می‌دهید تا آن محتوا را برای میزبانی، پردازش، نمایش، بازبینی، ترجمه، تحلیل، رفع مشکل و اجرای سرویس استفاده کند. شما مسئول داشتن حقوق و اجازه‌های لازم برای محتوایی هستید که به اشتراک می‌گذارید.']],
      ['حذف محتوا و بستن حساب', ['شما هر زمان می‌توانید استفاده از BeMama را متوقف کنید و می‌توانید درخواست حذف حساب بدهید. پس از تکمیل حذف حساب، BeMama حساب و داده‌های شخصی مرتبط را از سیستم‌های فعال حذف می‌کند و عمداً داده قابل شناسایی حساب را جز سوابق مالی و تراکنشی لازم نگه نمی‌دارد. برخی محتوا ممکن است حذف، بی‌نام یا دیگر قابل بازیابی نباشد، و BeMama تضمین نمی‌کند داده‌های قابل خروجی گرفتن کاربر بیش از ۳ ماه نگهداری شود. بستن حساب، اشتراکی را که از فروشگاه اپلیکیشن خریداری شده است به طور خودکار لغو نمی‌کند.']],
      ['محتوای کمک‌گرفته از هوش مصنوعی', ['پاسخ‌های کمک‌گرفته از هوش مصنوعی ممکن است زمانی که فراداده موجود باشد برچسب‌گذاری شوند. هوش مصنوعی می‌تواند اشتباه، ناقص، دارای سوگیری، قدیمی یا نامناسب برای وضعیت شما باشد. شما باید محتوای هوش مصنوعی را مستقل ارزیابی کنید و برای تصمیم‌های پزشکی، ایمنی، قانونی، مالی یا حرفه‌ای دیگر با مراقبت یا متخصص واجد شرایط مشورت کنید.']],
      ['اشتراک‌ها و خریدها', ['قابلیت‌های پولی، دوره‌های آزمایشی، اشتراک‌ها، خریدهای فروشگاه اپلیکیشن، بازپرداخت‌ها، تمدیدها، لغو، مالیات‌ها و مدیریت دسترسی طبق شرایط نمایش‌داده‌شده در زمان خرید و فروشگاه اپلیکیشن یا ارائه‌دهنده پرداخت قابل اعمال اداره می‌شوند، مگر اینکه BeMama خلاف آن را بیان کند. کاربران پولی باید همان قوانین ایمنی، جامعه و قانونی کاربران رایگان را رعایت کنند. پرداخت، توهین، زبان آزاردهنده، آزار، تهدید، تقلب، رفتار غیرقانونی یا سوءاستفاده از BeMama را توجیه نمی‌کند. حذف اپلیکیشن، بستن حساب BeMama، از دست دادن دسترسی به دلیل نقض شرایط یا تصمیم به استفاده نکردن از سرویس، ممکن است اشتراک را لغو نکند یا بازپرداخت را تضمین نکند.']],
      ['درخواست‌های بازپرداخت', ['برای خریدهای Google Play یا Apple App Store، واجد شرایط بودن بازپرداخت و تصمیم بازپرداخت معمولاً توسط Google، Apple یا ارائه‌دهنده پرداخت کنترل می‌شود. BeMama می‌تواند درباره مشکل دسترسی کمک کند، توضیح دهد کجا درخواست بازپرداخت بدهید و در مواردی که ابزارهای فروشگاه اجازه می‌دهند پرونده‌های پشتیبانی را بررسی کند، اما نمی‌تواند تضمین کند فروشگاه یا ارائه‌دهنده پرداخت بازپرداخت را تایید کند. اگر BeMama قابلیتی پولی را مستقیم و خارج از فروشگاه اپلیکیشن بفروشد، رسیدگی به بازپرداخت طبق شرایط نمایش‌داده‌شده در زمان خرید و قانون قابل اعمال خواهد بود.']],
      ['چارج‌بک و اختلاف پرداخت', ['اگر چارج‌بک، برگشت پرداخت، تقلب مشکوک یا اختلاف پرداخت رخ دهد، BeMama ممکن است اطلاعات تراکنش مرتبط را از فروشگاه اپلیکیشن یا ارائه‌دهنده پرداخت دریافت کند، دسترسی پولی را لغو کند، دسترسی‌ها را متوقف کند، تایید بخواهد یا در صورت مناسب حساب مرتبط را ببندد.']],
      ['تغییرات و دسترس‌پذیری سرویس', ['BeMama ممکن است قابلیت‌ها را اضافه، تغییر، معلق یا حذف کند؛ دسترسی را بر اساس منطقه، دستگاه، وضعیت حساب، دلیل ایمنی یا الزام قانونی محدود کند؛ و تعمیرات و نگهداری انجام دهد. ما تلاش می‌کنیم BeMama قابل اتکا باشد، اما سرویس بدون وقفه یا بدون خطا را وعده نمی‌دهیم.']],
      ['سلب مسئولیت و مسئولیت', ['تا بیشترین حد مجاز طبق قانون قابل اعمال، BeMama همان‌گونه که هست و همان‌گونه که در دسترس است ارائه می‌شود. ما مسئول تصمیم‌هایی نیستیم که شما بر اساس محتوای آموزشی عمومی، محتوای هوش مصنوعی، پست‌های جامعه یا اطلاعات تولیدشده توسط کاربر می‌گیرید. هیچ چیز در این شرایط حقوقی را که طبق قانون قابل اعمال قابل محدود شدن نیست محدود نمی‌کند.']],
      ['تماس', [`پرسش درباره این شرایط را می‌توانید به ${site.supportEmail} ارسال کنید.`]]
    ]),
    'subscription-terms': policy('شرایط اشتراک', 'شرایط اشتراک برای طرح‌های پولی BeMama، پرداخت فروشگاهی، لغو، بازپرداخت، دوره آزمایشی و تغییر قیمت.', [
      ['دسترسی رایگان و پریمیوم', ['BeMama ممکن است قابلیت‌های رایگان و قابلیت‌های پریمیوم اختیاری ارائه کند. موجود بودن قابلیت‌ها، محدودیت‌ها، قیمت، مدت دوره آزمایشی، دوره تمدید، ارائه‌دهنده پرداخت و تبلیغ‌ها ممکن است بر اساس پلتفرم، کشور، حساب و زمان متفاوت باشد.']],
      ['ارائه‌دهنده پرداخت', ['اگر از طریق Google Play، Apple App Store یا ارائه‌دهنده پرداخت دیگر اشتراک بگیرید یا خرید کنید، همان ارائه‌دهنده پرداخت را پردازش می‌کند و تمدید، لغو، بازپرداخت، مالیات و قوانین روش پرداخت را مدیریت می‌کند. BeMama ممکن است شناسه‌های تراکنش، وضعیت دسترسی، وضعیت تمدید، وضعیت لغو، کشور، ارز و سوابق مرتبط را دریافت کند، اما شماره کامل کارت پرداخت را دریافت نمی‌کند.']],
      ['تمدید خودکار و لغو', ['اشتراک‌ها ممکن است به صورت خودکار تمدید شوند مگر اینکه پیش از مهلت تمدید نشان‌داده‌شده توسط فروشگاه اپلیکیشن یا ارائه‌دهنده پرداخت لغو شوند. حذف BeMama، حذف حساب یا متوقف کردن استفاده از اپلیکیشن ممکن است اشتراک فعال را لغو نکند. لغو را از طریق حساب فروشگاه یا ارائه‌دهنده پرداختی که برای خرید استفاده کرده‌اید مدیریت کنید.']],
      ['دوره‌های آزمایشی، تبلیغ‌ها و تغییر قیمت', ['دوره‌های آزمایشی، پیشنهادهای اولیه، قیمت‌های تبلیغاتی، کوپن‌ها یا طرح‌های تخفیفی تابع شرایطی هستند که در زمان خرید نشان داده می‌شوند. اگر قیمت اشتراک تغییر کند، فروشگاه یا ارائه‌دهنده پرداخت ممکن است طبق قوانین خود و قانون قابل اعمال، اطلاع‌رسانی، رضایت یا حق لغو را لازم بداند.']],
      ['بازپرداخت از طریق Google Play یا Apple', ['تصمیم‌های بازپرداخت برای خریدهای Google Play و Apple App Store معمولاً توسط Google، Apple یا ارائه‌دهنده پرداخت قابل اعمال طبق قوانین بازپرداخت خودشان گرفته می‌شود. کاربران باید بازپرداخت را از طریق حساب فروشگاهی که برای خرید استفاده شده درخواست کنند. پشتیبانی BeMama می‌تواند به پیدا کردن اطلاعات دسترسی و توضیح مسیر درست کمک کند، اما ممکن است نتواند تصمیم فروشگاه را تایید یا برگرداند.']],
      ['بازپرداخت‌هایی که BeMama رسیدگی می‌کند', ['اگر BeMama یک قابلیت پولی را مستقیم و خارج از فروشگاه اپلیکیشن بفروشد، BeMama ممکن است درخواست‌های بازپرداخت را موردی و بر اساس شرایط خرید، اینکه قابلیت ارائه شده یا نه، وضعیت حساب، سوءاستفاده مشکوک، مشکل فنی، الزام قانونی و انصاف نسبت به کاربر بررسی کند. بازپرداخت تاییدشده ممکن است دسترسی به قابلیت پولی را لغو کند.']],
      ['مواردی که خودکار بازپرداخت نمی‌شوند', ['بازپرداخت فقط به این دلیل خودکار نیست که کاربر اپلیکیشن را حذف کرده، استفاده از سرویس را متوقف کرده، فراموش کرده تمدید را لغو کند، محتوای آموزشی عمومی را نپسندیده، پس از نقض شرایط استفاده دسترسی را از دست داده، دستگاه را عوض کرده یا انتظار داشته BeMama تشخیص، پاسخ اضطراری یا مراقبت پزشکی حرفه‌ای ارائه کند. این موضوع حقوقی را که کاربر ممکن است طبق قوانین فروشگاه اپلیکیشن یا قانون قابل اعمال داشته باشد محدود نمی‌کند.']],
      ['مشکلات دسترسی', ['اگر پرداخت کرده‌اید اما دسترسی پریمیوم ندارید، اگر می‌خواهید همچنان از BeMama استفاده کنید پیش از درخواست بازپرداخت با پشتیبانی تماس بگیرید. پلتفرم، ایمیل حساب، تاریخ تقریبی خرید، شناسه سفارش یا تراکنش در صورت وجود و اسکرین‌شات رسید خرید با پنهان کردن جزئیات کارت پرداخت را ارسال کنید.']],
      ['سوءاستفاده از بازپرداخت و جلوگیری از تقلب', ['BeMama ممکن است حساب‌ها را محدود کند، دسترسی‌ها را لغو کند یا از پشتیبانی مستقیم بازپرداخت خودداری کند اگر شواهدی از سوءاستفاده از بازپرداخت، سوءاستفاده از چارج‌بک، اشتراک‌گذاری حساب، تقلب پرداخت، سوءاستفاده از تبلیغ‌ها یا تلاش برای دور زدن قوانین فروشگاه وجود داشته باشد.']],
      ['تغییر قابلیت‌ها', ['قابلیت‌های پریمیوم ممکن است با بهبود محصول، به‌روزرسانی کنترل‌های ایمنی، رعایت الزامات قانونی یا تغییر یکپارچه‌سازی‌های پلتفرم تغییر کنند. اگر قابلیتی حذف یا به شکل مهم تغییر کند، BeMama بر اساس شرایط اشتراک، قوانین فروشگاه و قانون قابل اعمال به شکل معقول با موضوع برخورد می‌کند.']],
      ['پشتیبانی', [`برای مشکل اشتراک یا دسترسی، با ${site.supportEmail} تماس بگیرید و ایمیل حساب، پلتفرم و تاریخ تقریبی خرید را وارد کنید. جزئیات کامل کارت را ایمیل نکنید.`]]
    ]),
    'ai-disclaimer': policy('هشدار هوش مصنوعی و ایمنی', 'BeMama چگونه از محتوای کمک‌گرفته از هوش مصنوعی استفاده می‌کند، هوش مصنوعی چه کاری می‌تواند و نمی‌تواند انجام دهد، و چه زمانی باید مراقبت واجد شرایط بگیرید.', [
      ['هوش مصنوعی چگونه ممکن است استفاده شود', ['BeMama ممکن است از ابزارهای کمک‌گرفته از هوش مصنوعی برای پیش‌نویس، خلاصه‌سازی، ترجمه، دسته‌بندی یا پشتیبانی از پاسخ‌های پرسش و پاسخ، محتوای مسیر روزانه، یادآوری‌های ایمنی و پیام‌های شبیه مشاوره زمانی که این قابلیت‌ها فعال هستند استفاده کند. پاسخ‌های کمک‌گرفته از هوش مصنوعی زمانی که فراداده موجود باشد برچسب‌گذاری می‌شوند.']],
      ['هوش مصنوعی برای چه چیزی است', ['محتوای کمک‌گرفته از هوش مصنوعی می‌تواند به توضیح موضوعات عمومی، سازمان‌دهی پرسش‌ها، پیشنهاد گام‌های بعدی غیر فوری، خلاصه‌سازی اطلاعات و آماده کردن پرسش‌ها برای پزشک، ماما، پرستار، تیم پشتیبانی یا مراقب مورد اعتماد کمک کند.']],
      ['هوش مصنوعی برای چه چیزی نیست', ['هوش مصنوعی برای تشخیص، نسخه، دوز دارو، تصمیم درمانی، مراقبت اضطراری، تریاژ فوری، پاسخ به سوءاستفاده، پاسخ به خودآزاری، مشاوره حقوقی، مشاوره مالی یا جایگزینی مراقبت واجد شرایط محلی نیست.']],
      ['دقت و سوگیری', ['سیستم‌های هوش مصنوعی می‌توانند زمینه را اشتباه بفهمند، اطلاعات قدیمی تولید کنند، جزئیات مهم را حذف کنند یا سوگیری نشان دهند. برای تصمیم‌های مهم سلامت، ایمنی، حقوقی، مالی یا مراقبتی، به محتوای هوش مصنوعی به عنوان تنها منبع تکیه نکنید.']],
      ['بازبینی انسانی و ایمنی', ['BeMama ممکن است تعاملات هوش مصنوعی، بازخورد و نشانه‌های ایمنی را برای رفع مشکل، بهبود کیفیت، بازبینی سوءاستفاده و حفاظت از کاربران بررسی کند. اگر پاسخی ناایمن، نامشخص، توهین‌آمیز یا اشتباه به نظر رسید، استفاده از آن را متوقف کنید و با پشتیبانی یا مراقبت واجد شرایط طبق مورد تماس بگیرید.']],
      ['راهنمای ایمنی', ['برای درد شدید، خونریزی شدید، مشکل تنفس، غش، نشانه‌های عفونت، افکار خودآزاری، سوءاستفاده، خطر یا هر علامت فوری، فوراً مراقبت واجد شرایط محلی یا خدمات اضطراری بگیرید.']]
    ], 'از محتوای کمک‌گرفته از هوش مصنوعی به عنوان نقطه شروع آموزش عمومی استفاده کنید، نه تصمیم نهایی برای مسائل سلامت یا ایمنی.'),
    contact: policy('تماس و پشتیبانی', 'برای پشتیبانی، درخواست‌های حریم خصوصی، درخواست حذف یا خروجی داده و بازبینی ایمنی با BeMama تماس بگیرید.', [
      ['پشتیبانی', [`برای پشتیبانی محصول، کمک حساب، مشکل ورود، مشکل دسترسی فروشگاه اپلیکیشن، درخواست حذف یا خروجی داده، پرسش حریم خصوصی، بازبینی ایمنی یا بازبینی محتوای هوش مصنوعی به ${site.supportEmail} ایمیل بزنید.`]],
      ['درخواست‌های حریم خصوصی', ['برای حذف، خروجی گرفتن، اصلاح، دسترسی، پس گرفتن رضایت یا بازبینی حریم خصوصی، ایمیل یا شناسه حساب مرتبط با حساب BeMama خود را وارد کنید. ممکن است برای تایید درخواست به اطلاعات لازم نیاز داشته باشیم. پیش از درخواست حذف، خروجی داده را درخواست کنید، چون BeMama تضمین نمی‌کند داده‌های قابل خروجی گرفتن کاربر بیش از ۳ ماه در دسترس بماند و حذف، داده‌های حساب را جز سوابق مالی و تراکنشی لازم حذف می‌کند.']],
      ['پشتیبانی پرداخت و بازپرداخت', ['برای اشتراک‌های فروشگاه اپلیکیشن، دسترسی پریمیوم از دست‌رفته، ابهام لغو یا پرسش بازپرداخت، پلتفرم، ایمیل حساب، تاریخ تقریبی خرید، شناسه سفارش یا تراکنش فروشگاه در صورت وجود و اسکرین‌شات رسید با پنهان کردن جزئیات کارت پرداخت را وارد کنید. جزئیات کامل کارت پرداخت را ارسال نکنید.']],
      ['گزارش‌های ایمنی', ['آزار، توهین، تهدید، محتوای ناایمن، جعل هویت، کلاهبرداری، نقض حریم خصوصی یا نگرانی‌های ایمنی کودک را به پشتیبانی گزارش کنید. نام حساب، تاریخ و زمان تقریبی، محل رخداد، اسکرین‌شات در صورت ایمن بودن اشتراک‌گذاری و اینکه آیا کسی در خطر فوری است را وارد کنید. BeMama ممکن است محتوای مرتبط، سوابق حساب و گزارش‌های فنی را برای بررسی و حفاظت از کاربران بازبینی کند.']],
      ['اعتراض به بازبینی', ['اگر محتوای شما حذف شده، حساب شما محدود شده یا قابلیتی مسدود شده و فکر می‌کنید اشتباه بوده است، با حساب تحت تاثیر، محتوا، تاریخ و زمان و توضیح کوتاه با پشتیبانی تماس بگیرید.']],
      ['مراقبت فوری', ['پشتیبانی BeMama پشتیبانی اضطراری نیست. برای علائم فوری، نگرانی پزشکی، نگرانی خودآزاری، سوءاستفاده، خطر یا مسائل ایمنی فوری، با مراقبت واجد شرایط محلی یا خدمات اضطراری تماس بگیرید.']]
    ])
  };
}

function translatedPrivacyPolicy(locale) {
  const policies = {
    ar: policy('سياسة الخصوصية', 'عرض واضح ومفصل لكيفية جمع BeMama واستخدامها ومشاركتها واحتفاظها وحمايتها لبيانات الحساب ومسار الرعاية والأسئلة والمجتمع والدردشة والجهاز والاشتراك والوسائط والدعم بمساعدة الذكاء الاصطناعي.', [
      ['ما الذي تغطيه هذه السياسة', [
        'تنطبق هذه السياسة عندما تستخدمين موقع BeMama، تطبيق الويب، تطبيقات الهاتف، ميزات الحساب، المسار اليومي، الأسئلة والأجوبة، مساحات المجتمع، الدردشة، المكالمات الصوتية أو المرئية، الدعم بمساعدة الذكاء الاصطناعي، الاشتراكات وقنوات الدعم.',
        `يمكن إرسال الأسئلة وطلبات الحذف وطلبات الوصول وطلبات تصدير البيانات أو مخاوف الخصوصية إلى ${site.supportEmail}.`
      ]],
      ['المعلومات التي نجمعها', [
        'معلومات الحساب والاتصال، مثل الاسم وعنوان البريد الإلكتروني ومعرفات مزود تسجيل الدخول واللغة وإعدادات الحساب ورسائل الدعم وسجلات التحقق وسجلات الأمان.',
        'معلومات مسار الرعاية والملف الشخصي، مثل مرحلة التخطيط أو الحمل أو رعاية الطفل أو نمو الطفل؛ تاريخ الولادة المتوقع أو نطاق عمر الطفل عند تقديمه؛ الأهداف؛ التفضيلات؛ التسجيلات اليومية؛ المحتوى المحفوظ؛ الأعراض أو الأسئلة التي تختارين إدخالها؛ وأي معلومات أخرى تضيفينها لتخصيص BeMama.',
        'معلومات المجتمع والأسئلة والدردشة والمكالمات والوسائط، مثل المنشورات والتعليقات والأسئلة والإجابات والرسائل والمرفقات والصور والصوت وبيانات المكالمة المرئية وسجلات المشاركة في المكالمات وملاحظات الإشراف وملاحظات مراجعة الدعم.',
        'معلومات الجهاز والتطبيق والمعلومات التجارية، مثل عنوان IP وتفاصيل الجهاز والمتصفح وإصدار التطبيق والتشخيصات وسجلات الأعطال ورموز الإشعارات والمنطقة التقريبية واستخدام الميزات وحالة الاشتراك وحالة الاستحقاق ومعرفات معاملات متجر التطبيقات والسجلات اللازمة لمنع إساءة الاستخدام. لا تتلقى BeMama أرقام بطاقات الدفع الكاملة من متاجر التطبيقات أو مزودي الدفع.'
      ]],
      ['معلومات الرعاية الحساسة', [
        'قد تكون معلومات التخطيط والحمل والخصوبة والطفل والصحة النفسية والأعراض والرعاية معلومات حساسة. تستخدم BeMama هذه المعلومات فقط لتقديم الميزات المطلوبة وتخصيص مساحات الرعاية ودعم السلامة والإشراف واستكشاف المشكلات والرد على طلبات الحساب أو الدعم أو الخصوصية.',
        'لا تنشري أعراضاً عاجلة أو تفاصيل طارئة أو معلومات خاصة بشخص آخر في مساحات المجتمع العامة. للأعراض العاجلة أو مخاوف السلامة، اتصلي بالرعاية المحلية المؤهلة أو خدمات الطوارئ.'
      ]],
      ['الكاميرا والميكروفون والإشعارات والمكالمات', [
        'تطلب BeMama أذونات الكاميرا والميكروفون والصوت والبلوتوث والإنترنت والإشعارات فقط للميزات التي تحتاج إليها، مثل المكالمات الصوتية أو المرئية، التقاط الوسائط، الرسائل الصوتية، تنبيهات الرسائل وتنبيهات المكالمات.',
        'يمكنك التحكم في كثير من الأذونات من إعدادات جهازك. قد يؤدي إيقاف الإذن إلى تقييد الميزة المرتبطة به، لكن بقية BeMama قد تستمر في العمل حيثما كان ذلك ممكناً تقنياً.'
      ]],
      ['كيف نستخدم المعلومات', [
        'نستخدم المعلومات لإنشاء الحسابات وتأمينها، وتقديم المسار اليومي ومساحات الرعاية، وتشغيل الأسئلة والمجتمع والدردشة والمكالمات، وإرسال الإشعارات التي تطلبينها أو تسمحين بها، وإدارة الاشتراكات والاستحقاقات، وتقديم الدعم، والإشراف على المحتوى، ومنع الاحتيال وإساءة الاستخدام، وتحسين الاعتمادية، واستكشاف الأخطاء، وقياس أداء الميزات، والامتثال للالتزامات المعمول بها.',
        'قد نستخدم معلومات منزوعة الهوية أو مجمعة أو محمية بطريقة أخرى لفهم أداء المنتج وتحسين مسارات الرعاية والتخطيط للميزات المستقبلية.'
      ]],
      ['الميزات بمساعدة الذكاء الاصطناعي', [
        'عند تفعيل الميزات بمساعدة الذكاء الاصطناعي، قد تتم معالجة المطالبات والأسئلة وسياق المحادثة والإجابات المولدة والتقييمات وبيانات السلامة والسجلات التقنية ذات الصلة بواسطة BeMama ومزودي خدمات الذكاء الاصطناعي لتقديم الميزة وتحسين السلامة والتحقيق في المشكلات والحفاظ على الجودة.',
        'المحتوى بمساعدة الذكاء الاصطناعي مخصص للتعليم والدعم العام. قد يكون خاطئاً أو ناقصاً أو متحيزاً أو غير مناسب لحالتك. لا تستخدميه للتشخيص أو جرعات الدواء أو قرارات العلاج أو الفرز الطارئ أو قرارات السلامة العاجلة.'
      ]],
      ['الظهور والمشاركة داخل BeMama', [
        'قد تكون منشورات المجتمع ومحتوى الأسئلة والأجوبة مرئية لمستخدمين آخرين بحسب المساحة أو الجمهور أو الميزة التي تنشرين فيها. الرسائل الخاصة والمكالمات مخصصة للمشاركين المحددين، لكن مسؤولي BeMama أو المشرفين أو موظفي الدعم قد يراجعون السجلات ذات الصلة عند الحاجة للسلامة أو منع الإساءة أو استكشاف المشكلات أو الدعم أو الأسباب القانونية.',
        'أنت مسؤولة عن المعلومات التي تختارين مشاركتها. لا تحملي أو تنشري معلومات شخصية أو صوراً أو معلومات صحية أو معلومات أطفال تخص شخصاً آخر إلا إذا كان لديك إذن وسبب قانوني للقيام بذلك.'
      ]],
      ['البلاغات والإشراف والسلوك المسيء', [
        'إذا أهان شخص ما أو ضايق أو هدد أو انتحل شخصية أو كشف معلومات خاصة أو استغل أو احتال أو أضر بشخص آخر في BeMama، يمكن للمستخدمين إبلاغ الدعم عن المحتوى أو الحساب. قد تراجع BeMama المحتوى المبلغ عنه والمحادثة المحيطة به وتاريخ الحساب وسجلات الجهاز والأمان والبلاغات السابقة والسجلات التقنية لفهم ما حدث وتحديد كيفية الرد.',
        'قد تشمل إجراءات الإشراف ترك المحتوى، إخفاءه، إزالته، تحذير المستخدم، تقييد الميزات، تعليق الحساب أو إغلاقه، حفظ السجلات للسلامة، أو الإبلاغ عن إساءة خطيرة للجهات المناسبة عند اللزوم أو الملاءمة. لا نعد بإزالة كل عنصر مبلغ عنه، وقد لا نستطيع مشاركة النتيجة الكاملة مع المبلغ لأن للمستخدمين الآخرين حقوق خصوصية أيضاً.',
        'إذا تضمن البلاغ خطراً فورياً أو إيذاءً للنفس أو إساءة أو تهديدات أو استغلالاً أو سلوكاً غير قانوني، فاتصلي أولاً بخدمات الطوارئ المحلية أو الدعم المحلي المؤهل. دعم BeMama ليس خدمة استجابة للطوارئ.'
      ]],
      ['نزاعات المستخدمين وحفظ الأدلة', [
        'عندما يختلف المستخدمون مع بعضهم، قد تستخدم BeMama السجلات المتاحة لإنفاذ شروط الاستخدام وحماية المستخدمين وتقليل إساءة الاستخدام. قد نحفظ مؤقتاً سجلات الحساب والرسائل والإشراف والمعاملات والأمان ذات الصلة عند الحاجة للتحقيق في نزاع أو الرد على طلب قانوني أو الدفاع عن الحقوق أو منع الإساءة أو حماية السلامة.',
        'قبل إكمال طلب حذف الحساب، قد تستخدم BeMama مؤقتاً السجلات المتاحة لإنهاء قضية دعم أو استرداد أو سلامة أو إساءة أو دفع مفتوحة. بعد اكتمال حذف الحساب، تهدف BeMama إلى عدم الاحتفاظ بأي بيانات حساب قابلة للتعريف باستثناء السجلات المالية وسجلات المعاملات المطلوبة. قد تتم إزالة المحتوى العام أو المجتمعي أو إزالة هويته، وقد تبقى نسخ خارج سيطرة BeMama مثل لقطات الشاشة المحفوظة لدى مستخدمين آخرين.'
      ]],
      ['الأطراف الثالثة ومزودو الخدمة', [
        'قد تشارك BeMama المعلومات مع البائعين ومزودي الخدمة الذين يساعدون في تشغيل الخدمة، بما في ذلك الاستضافة والتخزين وتسليم المحتوى والمصادقة والبريد الإلكتروني والدعم والإشعارات والتحليلات والتشخيصات ومعالجة الذكاء الاصطناعي والمكالمات الصوتية أو المرئية وإدارة الدفع والاشتراك والأمان ومنع الاحتيال.',
        'قد تعالج متاجر التطبيقات ومزودو الدفع المشتريات والاستردادات والاشتراكات والضرائب ومعلومات الاستحقاق وفق شروطهم وسياساتهم. قد تتلقى BeMama سجلات الشراء والاستحقاق، ولكن ليس تفاصيل البطاقة الكاملة.',
        'قد نفصح عن المعلومات عندما يكون ذلك مطلوباً للامتثال للقانون أو إنفاذ شروطنا أو حماية الحقوق والسلامة أو التحقيق في سوء الاستخدام أو الرد على الطلبات القانونية أو إكمال اندماج أو استحواذ أو تمويل أو إعادة تنظيم أو نقل أصول الخدمة.'
      ]],
      ['المعالجة الدولية', [
        'قد تعالج BeMama ومزودوها المعلومات في كندا أو الولايات المتحدة أو الاتحاد الأوروبي أو مناطق أخرى تعمل فيها BeMama أو مزودوها. قد تختلف حماية الخصوصية حسب المنطقة، لكننا نستخدم ضمانات مناسبة لطبيعة المعلومات والخدمة.'
      ]],
      ['الاحتفاظ', [
        'تحتفظ BeMama بالمعلومات الشخصية فقط ما دامت مفيدة لتقديم الخدمة ودعم الحساب ومعالجة الطلبات والحفاظ على السلامة وإدارة الاشتراكات أو تلبية الاحتياجات التشغيلية. لا تضمن BeMama الاحتفاظ بمحتوى المستخدم أو الرسائل أو الوسائط أو مطالبات الذكاء الاصطناعي أو سجل الدعم أو التشخيصات أو أي بيانات حساب قابلة للتصدير لأكثر من 3 أشهر.',
        'قد يتم حذف بعض البيانات أو إزالة هويتها أو تدويرها أو الكتابة فوقها قبل 3 أشهر، خصوصاً الملفات المؤقتة والسجلات والوسائط المخزنة مؤقتاً والتشخيصات وسجلات الإشعارات والمسودات والبيانات التشغيلية غير النشطة. إذا أردت تصديراً، فاطلبيه بينما الحساب نشط وقبل طلب الحذف.',
        'إذا طلبت حذف الحساب، ستحذف BeMama الحساب والبيانات الشخصية المرتبطة به من الأنظمة النشطة بعد التحقق من الطلب ومعالجته. بعد اكتمال الحذف، لن تحتفظ BeMama عمداً ببيانات حساب قابلة للتعريف باستثناء السجلات المالية وسجلات المعاملات المطلوبة للمحاسبة أو الضرائب أو تقارير متجر التطبيقات أو الاسترداد أو رد المبالغ أو نزاع الدفع أو التزامات مزود الدفع.',
        'قد تشمل السجلات المالية وسجلات المعاملات معرفات الشراء، سجلات استحقاق الاشتراك، سجلات الاسترداد، سجلات رد المبالغ، سجلات الضرائب أو المحاسبة، بيانات الفاتورة أو الإيصال، رسائل مزود الدفع، وملاحظات الدعم ذات الصلة لفهم مشكلة الدفع. يتم الاحتفاظ بهذه السجلات فقط لأغراض مالية ومحاسبية وقانونية ومنع الاحتيال ومزود الدفع، وليس لمواصلة تقديم ميزات الحساب.',
        'حذف التطبيق من جهازك لا يحذف حسابك، ولا يمحو السجلات على الخادم، ولا يصدر بياناتك، ولا يزيل المحتوى الذي شاركته بالفعل مع الآخرين، ولا يلغي اشتراكاً نشطاً في متجر التطبيقات.'
      ]],
      ['حدود الوصول والتصدير', [
        `يمكنك طلب الوصول أو التصحيح أو الحذف أو التصدير أو مراجعة معلومات BeMama الخاصة بك عن طريق التواصل مع ${site.supportEmail}. قد نحتاج إلى التحقق من هويتك قبل تنفيذ الطلب.`,
        'يشمل التصدير بيانات الحساب الشخصية المتاحة التي تستطيع BeMama تحديدها والتحقق منها وتقديمها قانونياً ومعقولاً وقت الطلب. قد لا يشمل التصدير البيانات المحذوفة أو منزوعة الهوية، السجلات المؤقتة، الملفات المخزنة مؤقتاً، ملاحظات الأمان الداخلية، ملاحظات الإشراف الداخلية، بيانات المستخدمين الآخرين الخاصة، سجلات الأعمال السرية، سجلات متجر التطبيقات التي تسيطر عليها Google أو Apple، أو السجلات التي لا يمكن ربطها بأمان بمقدم الطلب المتحقق منه.',
        'لأن BeMama لا تضمن الاحتفاظ ببيانات المستخدم القابلة للتصدير لأكثر من 3 أشهر، قد يكون التصدير غير كامل إذا تم الطلب بعد انتهاء السجلات أو الكتابة فوقها أو إزالة هويتها أو حذفها وفق الاحتفاظ العادي.',
        'يمكنك تحديث تفاصيل الحساب في التطبيق حيثما توفر ذلك، والتحكم في أذونات الجهاز من إعدادات نظام التشغيل، وإلغاء بعض الاتصالات، وتعطيل الإشعارات من إعدادات الجهاز أو التطبيق.'
      ]],
      ['الأطفال ومعلومات الأسرة', [
        'BeMama مخصص للبالغين ومقدمي الرعاية، وليس للأطفال لإنشاء حسابات بأنفسهم. قد يختار الآباء ومقدمو الرعاية تقديم معلومات عن طفل لاستخدام ميزات BeMama، وهم مسؤولون عن القيام بذلك بشكل مناسب.'
      ]],
      ['الأمان', [
        'نستخدم ضمانات إدارية وتقنية وتنظيمية مصممة لحماية المعلومات الشخصية من الوصول غير المصرح به وسوء الاستخدام والفقدان والتغيير. لا يمكن لأي خدمة على الإنترنت ضمان الأمان المطلق. تستخدم BeMama رموز تحقق عبر البريد الإلكتروني بدلاً من كلمات مرور الحساب، لذلك حافظي على أمان بريدك الإلكتروني وجهازك، ولا تشاركي رموز التحقق مع أي شخص، واتصلي بنا إذا كنت تعتقدين أن حسابك أو الوصول إلى بريدك الإلكتروني قد تعرض للخطر.'
      ]],
      ['تغييرات هذه السياسة', [
        'قد نحدث هذه السياسة مع تغير BeMama. يوضح تاريخ التحديث آخر مرة تغيرت فيها هذه الصفحة. إذا أثر تغيير بشكل جوهري على كيفية تعاملنا مع المعلومات الشخصية، سنقدم إشعاراً بطريقة معقولة، مثل الموقع أو التطبيق أو البريد الإلكتروني أو إشعارات الحساب.'
      ]]
    ], 'تصف هذه السياسة ممارسات BeMama بلغة واضحة ولا تحد من حقوق الخصوصية التي قد تكون لديك بموجب القانون المعمول به.'),
    fr: policy('Politique de Confidentialité', 'Présentation claire et détaillée de la manière dont BeMama collecte, utilise, partage, conserve et protège les données de compte, de parcours de soins, de questions-réponses, de communauté, de chat, d’appareil, d’abonnement, de médias et de support assisté par IA.', [
      ['Ce que couvre cette politique', [
        'Cette politique s’applique lorsque vous utilisez le site BeMama, l’application web, les applications mobiles, les fonctions de compte, le Parcours quotidien, les espaces de questions-réponses, la communauté, le chat, les appels audio ou vidéo, le support assisté par IA, les abonnements et les canaux de support.',
        `Les questions, demandes de suppression, demandes d’accès, demandes d’exportation de données ou préoccupations de confidentialité peuvent être envoyées à ${site.supportEmail}.`
      ]],
      ['Informations que nous collectons', [
        'Informations de compte et de contact, comme le nom, l’adresse e-mail, les identifiants de fournisseur de connexion, la langue, les paramètres de compte, les messages au support, les enregistrements de vérification et les enregistrements de sécurité.',
        'Informations de parcours de soins et de profil, comme l’étape de planification, grossesse, soin du bébé ou croissance de l’enfant; la date prévue d’accouchement ou la tranche d’âge de l’enfant lorsqu’elle est fournie; les objectifs; préférences; enregistrements quotidiens; contenu sauvegardé; symptômes ou questions que vous choisissez de saisir; et autres informations ajoutées pour personnaliser BeMama.',
        'Informations de communauté, questions-réponses, chat, appels et médias, comme les publications, commentaires, questions, réponses, messages, pièces jointes, images, audio, métadonnées d’appel vidéo, dossiers de participation aux appels, notes de modération et notes d’examen du support.',
        'Informations sur l’appareil, l’application et les transactions, comme l’adresse IP, les détails de l’appareil et du navigateur, la version de l’application, les diagnostics, journaux de crash, jetons de notification push, région approximative, utilisation des fonctionnalités, statut d’abonnement, statut d’accès, identifiants de transaction de boutique d’applications et dossiers nécessaires pour prévenir les abus. BeMama ne reçoit pas les numéros complets de carte de paiement des boutiques d’applications ou fournisseurs de paiement.'
      ]],
      ['Informations sensibles de soins', [
        'Les informations liées à la planification, la grossesse, la fertilité, le bébé, l’enfant, le bien-être mental, les symptômes et les soins peuvent être sensibles. BeMama utilise ces informations uniquement pour fournir les fonctionnalités demandées, personnaliser les espaces de soins, soutenir la sécurité et la modération, résoudre les problèmes du service et répondre aux demandes de compte, de support ou de confidentialité.',
        'Ne publiez pas de symptômes urgents, de détails d’urgence ou d’informations privées d’une autre personne dans les espaces publics de communauté. Pour des symptômes urgents ou des préoccupations de sécurité, contactez des soins locaux qualifiés ou les services d’urgence.'
      ]],
      ['Caméra, microphone, notifications et appels', [
        'BeMama demande les autorisations caméra, microphone, audio, Bluetooth, Internet et notifications uniquement pour les fonctionnalités qui en ont besoin, comme les appels audio ou vidéo, la capture de médias, les messages audio, les alertes de message et les alertes d’appel.',
        'Vous pouvez contrôler de nombreuses autorisations dans les paramètres de votre appareil. Désactiver une autorisation peut limiter la fonctionnalité concernée, mais le reste de BeMama peut continuer à fonctionner lorsque c’est techniquement possible.'
      ]],
      ['Comment nous utilisons les informations', [
        'Nous utilisons les informations pour créer et sécuriser les comptes, fournir le Parcours quotidien et les espaces de soins, faire fonctionner les questions-réponses, la communauté, le chat et les appels, envoyer les notifications que vous demandez ou autorisez, gérer les abonnements et droits d’accès, fournir du support, modérer le contenu, prévenir la fraude et les abus, améliorer la fiabilité, résoudre les défauts, mesurer la performance des fonctionnalités et respecter les obligations applicables.',
        'Nous pouvons utiliser des informations désidentifiées, agrégées ou autrement protégées pour comprendre la performance du produit, améliorer les parcours de soins et planifier de futures fonctionnalités.'
      ]],
      ['Fonctionnalités assistées par IA', [
        'Lorsque les fonctionnalités assistées par IA sont activées, les prompts, questions, contexte de conversation, réponses générées, évaluations, métadonnées de sécurité et journaux techniques associés peuvent être traités par BeMama et des fournisseurs de services d’IA afin de fournir la fonctionnalité, améliorer la sécurité, enquêter sur les problèmes et maintenir la qualité.',
        'Le contenu assisté par IA est destiné à l’éducation et au support général. Il peut être faux, incomplet, biaisé ou inadapté à votre situation. Ne l’utilisez pas pour un diagnostic, un dosage de médicament, une décision de traitement, un triage d’urgence ou une décision urgente de sécurité.'
      ]],
      ['Visibilité et partage dans BeMama', [
        'Les publications de communauté et le contenu de questions-réponses peuvent être visibles par d’autres utilisateurs selon l’espace, l’audience ou la fonctionnalité où vous les publiez. Les messages privés et appels sont destinés aux participants choisis, mais les administrateurs, modérateurs ou équipes de support BeMama peuvent examiner les dossiers liés lorsque cela est nécessaire pour la sécurité, la prévention des abus, le dépannage, le support ou des raisons juridiques.',
        'Vous êtes responsable des informations que vous choisissez de partager. Ne téléversez ni ne publiez les informations personnelles, images, informations de santé ou informations d’enfant d’une autre personne sans autorisation et raison légale.'
      ]],
      ['Signalements, modération et comportement abusif', [
        'Si quelqu’un insulte, harcèle, menace, usurpe une identité, divulgue des informations privées, exploite, fraude ou nuit autrement à une autre personne dans BeMama, les utilisateurs peuvent signaler le contenu ou le compte au support. BeMama peut examiner le contenu signalé, la conversation environnante, l’historique du compte, les dossiers d’appareil et de sécurité, les signalements antérieurs et les journaux techniques pour comprendre ce qui s’est passé et décider comment répondre.',
        'Les mesures de modération peuvent inclure laisser le contenu en place, le masquer, le retirer, avertir un utilisateur, limiter des fonctionnalités, suspendre ou fermer un compte, conserver des dossiers pour la sécurité, ou signaler un abus grave aux autorités appropriées lorsque cela est requis ou approprié. Nous ne promettons pas que chaque élément signalé sera retiré, et nous pouvons ne pas pouvoir partager le résultat complet avec la personne qui signale car les autres utilisateurs ont aussi des droits à la confidentialité.',
        'Si un signalement implique un danger immédiat, de l’automutilation, un abus, des menaces, de l’exploitation ou une conduite illégale, contactez d’abord les services d’urgence locaux ou un support local qualifié. Le support BeMama n’est pas un service d’intervention d’urgence.'
      ]],
      ['Conflits entre utilisateurs et conservation des preuves', [
        'Lorsque des utilisateurs sont en désaccord, BeMama peut utiliser les dossiers disponibles pour faire appliquer les Conditions d’utilisation, protéger les utilisateurs et réduire les abus. Nous pouvons conserver temporairement les dossiers pertinents de compte, message, modération, transaction et sécurité lorsqu’ils sont nécessaires pour enquêter sur un conflit, répondre à une demande légale, défendre des droits, prévenir des abus ou protéger la sécurité.',
        'Avant qu’une demande de suppression de compte soit terminée, BeMama peut utiliser temporairement les dossiers disponibles pour terminer une demande ouverte de support, remboursement, sécurité, abus ou paiement. Après la suppression du compte, l’intention de BeMama est de ne conserver aucune donnée de compte identifiable sauf les dossiers financiers et transactionnels requis. Le contenu public ou communautaire peut être supprimé ou désidentifié, et des copies hors du contrôle de BeMama, comme des captures d’écran sauvegardées par d’autres utilisateurs, peuvent encore exister.'
      ]],
      ['Tiers et prestataires de services', [
        'BeMama peut partager des informations avec des vendeurs et prestataires qui aident à faire fonctionner le service, y compris l’hébergement, le stockage, la livraison de contenu, l’authentification, l’e-mail, le support, les notifications push, l’analyse d’application, les diagnostics, le traitement IA, les appels audio ou vidéo, la gestion des paiements et abonnements, la sécurité et la prévention de la fraude.',
        'Les boutiques d’applications et fournisseurs de paiement peuvent traiter les achats, remboursements, abonnements, taxes et informations de droits selon leurs propres conditions et politiques. BeMama peut recevoir des dossiers d’achat et de droits, mais pas les détails complets de carte.',
        'Nous pouvons divulguer des informations lorsque cela est requis pour respecter la loi, appliquer nos conditions, protéger les droits et la sécurité, enquêter sur un mauvais usage, répondre à des demandes légales ou réaliser une fusion, acquisition, financement, réorganisation ou transfert d’actifs du service.'
      ]],
      ['Traitement international', [
        'BeMama et ses prestataires peuvent traiter les informations au Canada, aux États-Unis, dans l’Union européenne ou dans d’autres régions où BeMama ou ses prestataires opèrent. Les protections de confidentialité peuvent différer selon la région, mais nous utilisons des garanties appropriées à la nature des informations et du service.'
      ]],
      ['Conservation', [
        'BeMama conserve les informations personnelles seulement tant qu’elles sont utiles pour fournir le service, soutenir le compte, traiter les demandes, maintenir la sécurité, gérer les abonnements ou répondre aux besoins opérationnels. BeMama ne garantit pas que le contenu utilisateur, les messages, médias, prompts IA, historique de support, diagnostics ou autres données de compte exportables seront conservés plus de 3 mois.',
        'Certaines données peuvent être supprimées, désidentifiées, renouvelées ou écrasées avant 3 mois, surtout les fichiers temporaires, journaux, médias en cache, diagnostics, dossiers de notification, brouillons et données opérationnelles inactives. Si vous voulez une exportation, demandez-la pendant que le compte est actif et avant de demander la suppression.',
        'Si vous demandez la suppression du compte, BeMama supprimera le compte et les données personnelles associées des systèmes actifs après vérification et traitement de la demande. Après la suppression, BeMama ne conservera pas intentionnellement de données de compte identifiables sauf les dossiers financiers et transactionnels requis pour la comptabilité, les taxes, les rapports de boutique d’applications, les remboursements, les rétrofacturations, les litiges de paiement ou les obligations du fournisseur de paiement.',
        'Les dossiers financiers et transactionnels peuvent inclure les identifiants d’achat, dossiers de droits d’abonnement, dossiers de remboursement, dossiers de rétrofacturation, dossiers fiscaux/comptables, métadonnées de facture ou reçu, messages du fournisseur de paiement et notes de support liées nécessaires pour comprendre un problème de paiement. Ces dossiers sont conservés uniquement à des fins financières, comptables, juridiques, de prévention de fraude et de fournisseur de paiement, et non pour continuer à fournir des fonctionnalités de compte.',
        'Supprimer l’application de votre appareil ne supprime pas votre compte, n’efface pas les dossiers côté serveur, n’exporte pas vos données, ne retire pas le contenu déjà partagé avec d’autres et n’annule pas un abonnement actif dans une boutique d’applications.'
      ]],
      ['Limites d’accès et d’exportation', [
        `Vous pouvez demander l’accès, la correction, la suppression, l’exportation ou l’examen de vos informations BeMama en contactant ${site.supportEmail}. Nous pouvons devoir vérifier votre identité avant d’agir sur une demande.`,
        'Les exportations incluent les données personnelles de compte disponibles que BeMama peut raisonnablement localiser, vérifier et fournir légalement au moment de la demande. Elles peuvent ne pas inclure les données déjà supprimées ou désidentifiées, journaux temporaires, fichiers en cache, notes internes de sécurité, notes internes de modération, données privées d’autres utilisateurs, dossiers commerciaux confidentiels, dossiers de boutique d’applications contrôlés par Google ou Apple, ou dossiers ne pouvant pas être liés en sécurité au demandeur vérifié.',
        'Comme BeMama ne garantit pas la conservation des données utilisateur exportables pendant plus de 3 mois, une exportation peut être incomplète si la demande est faite après expiration, écrasement, désidentification ou suppression normale des dossiers.',
        'Vous pouvez mettre à jour les détails du compte dans l’application lorsque disponible, contrôler les autorisations de l’appareil dans les paramètres du système, vous désinscrire de certaines communications et désactiver les notifications push dans les paramètres de l’appareil ou de l’application.'
      ]],
      ['Enfants et informations familiales', [
        'BeMama est destiné aux adultes et aux aidants, pas aux enfants pour créer eux-mêmes des comptes. Les parents et aidants peuvent choisir de fournir des informations sur un enfant pour utiliser les fonctionnalités BeMama, et ils sont responsables de le faire correctement.'
      ]],
      ['Sécurité', [
        'Nous utilisons des garanties administratives, techniques et organisationnelles conçues pour protéger les informations personnelles contre l’accès non autorisé, le mauvais usage, la perte et l’altération. Aucun service en ligne ne peut garantir une sécurité absolue. BeMama utilise des codes de vérification par e-mail au lieu de mots de passe de compte; gardez donc votre compte e-mail et votre appareil sécurisés, ne partagez pas les codes de vérification, et contactez-nous si vous pensez que votre compte ou accès e-mail est compromis.'
      ]],
      ['Modifications de cette politique', [
        'Nous pouvons mettre à jour cette politique lorsque BeMama change. La date de mise à jour indique quand cette page a été modifiée pour la dernière fois. Si un changement affecte matériellement notre traitement des informations personnelles, nous fournirons un avis d’une manière raisonnable, par exemple via le site, l’application, l’e-mail ou des avis de compte.'
      ]]
    ], 'Cette politique décrit les pratiques de BeMama en langage clair et ne limite pas les droits à la confidentialité que vous pouvez avoir en vertu de la loi applicable.'),
    es: policy('Política de Privacidad', 'Resumen claro y detallado de cómo BeMama recopila, usa, comparte, conserva y protege datos de cuenta, recorrido de cuidado, preguntas y respuestas, comunidad, chat, dispositivo, suscripción, medios y soporte asistido por IA.', [
      ['Qué cubre esta política', [
        'Esta política se aplica cuando usas el sitio web de BeMama, la app web, las apps móviles, funciones de cuenta, Recorrido diario, preguntas y respuestas, espacios de comunidad, chat, llamadas de voz o video, soporte asistido por IA, suscripciones y canales de soporte.',
        `Las preguntas, solicitudes de eliminación, solicitudes de acceso, solicitudes de exportación de datos o inquietudes de privacidad pueden enviarse a ${site.supportEmail}.`
      ]],
      ['Información que recopilamos', [
        'Información de cuenta y contacto, como nombre, dirección de correo electrónico, identificadores del proveedor de inicio de sesión, idioma, configuración de cuenta, mensajes de soporte, registros de verificación y registros de seguridad.',
        'Información de recorrido de cuidado y perfil, como etapa de planificación, embarazo, cuidado del bebé o crecimiento infantil; fecha probable de parto o rango de edad del niño cuando se proporciona; objetivos; preferencias; registros diarios; contenido guardado; síntomas o preguntas que eliges ingresar; y otra información que agregas para personalizar BeMama.',
        'Información de comunidad, preguntas y respuestas, chat, llamadas y medios, como publicaciones, comentarios, preguntas, respuestas, mensajes, archivos adjuntos, imágenes, audio, metadatos de videollamada, registros de participación en llamadas, notas de moderación y notas de revisión de soporte.',
        'Información de dispositivo, app y comercial, como dirección IP, detalles del dispositivo y navegador, versión de app, diagnósticos, registros de fallos, tokens de notificación push, región aproximada, uso de funciones, estado de suscripción, estado de derecho de acceso, identificadores de transacción de tienda de apps y registros necesarios para prevenir abuso. BeMama no recibe números completos de tarjeta de pago de tiendas de apps o proveedores de pago.'
      ]],
      ['Información sensible de cuidado', [
        'La información sobre planificación, embarazo, fertilidad, bebé, niño, bienestar mental, síntomas y cuidado puede ser sensible. BeMama usa esta información solo para proporcionar funciones solicitadas, personalizar superficies de cuidado, apoyar seguridad y moderación, solucionar problemas del servicio y responder solicitudes de cuenta, soporte o privacidad.',
        'No publiques síntomas urgentes, detalles de emergencia o información privada de otra persona en áreas públicas de comunidad. Para síntomas urgentes o preocupaciones de seguridad, contacta atención local calificada o servicios de emergencia.'
      ]],
      ['Cámara, micrófono, notificaciones y llamadas', [
        'BeMama solicita permisos de cámara, micrófono, audio, Bluetooth, internet y notificaciones solo para funciones que los necesitan, como llamadas de voz o video, captura de medios, mensajes de audio, alertas de mensajes y alertas de llamadas.',
        'Puedes controlar muchos permisos desde la configuración de tu dispositivo. Desactivar un permiso puede limitar la función relacionada, pero el resto de BeMama puede seguir funcionando cuando sea técnicamente posible.'
      ]],
      ['Cómo usamos la información', [
        'Usamos información para crear y proteger cuentas, proporcionar Recorrido diario y superficies de cuidado, operar preguntas y respuestas, comunidad, chat y llamadas, enviar notificaciones que solicitas o permites, administrar suscripciones y derechos de acceso, dar soporte, moderar contenido, prevenir fraude y abuso, mejorar confiabilidad, solucionar defectos, medir rendimiento de funciones y cumplir obligaciones aplicables.',
        'Podemos usar información desidentificada, agregada o protegida de otra manera para entender el rendimiento del producto, mejorar recorridos de cuidado y planificar funciones futuras.'
      ]],
      ['Funciones asistidas por IA', [
        'Cuando las funciones asistidas por IA están habilitadas, los prompts, preguntas, contexto de conversación, respuestas generadas, calificaciones, metadatos de seguridad y registros técnicos relacionados pueden ser procesados por BeMama y proveedores de servicios de IA para proporcionar la función, mejorar seguridad, investigar problemas y mantener calidad.',
        'El contenido asistido por IA es para educación y apoyo general. Puede ser incorrecto, incompleto, sesgado o no apropiado para tu situación. No lo uses para diagnóstico, dosis de medicamento, decisiones de tratamiento, triaje de emergencia o decisiones urgentes de seguridad.'
      ]],
      ['Visibilidad y uso compartido dentro de BeMama', [
        'Las publicaciones de comunidad y el contenido de preguntas y respuestas pueden ser visibles para otros usuarios según el espacio, audiencia o función donde los publiques. Los mensajes privados y llamadas están destinados a los participantes seleccionados, pero administradores, moderadores o personal de soporte de BeMama pueden revisar registros relacionados cuando sea necesario por seguridad, prevención de abuso, solución de problemas, soporte o razones legales.',
        'Eres responsable de la información que eliges compartir. No subas ni publiques información personal, imágenes, información de salud o información infantil de otra persona salvo que tengas permiso y una razón legal para hacerlo.'
      ]],
      ['Reportes, moderación y conducta abusiva', [
        'Si alguien insulta, acosa, amenaza, suplanta identidad, expone información privada, explota, estafa o daña de otra manera a otra persona en BeMama, los usuarios pueden reportar el contenido o la cuenta a soporte. BeMama puede revisar el contenido reportado, la conversación alrededor, historial de cuenta, registros de dispositivo y seguridad, reportes anteriores y registros técnicos para entender qué ocurrió y decidir cómo responder.',
        'Las acciones de moderación pueden incluir dejar contenido, ocultarlo, eliminarlo, advertir a un usuario, limitar funciones, suspender o cerrar una cuenta, preservar registros por seguridad, o reportar abuso grave a autoridades apropiadas cuando sea requerido o apropiado. No prometemos que cada elemento reportado será eliminado, y puede que no podamos compartir el resultado completo con quien reporta porque otros usuarios también tienen derechos de privacidad.',
        'Si un reporte implica peligro inmediato, autolesión, abuso, amenazas, explotación o conducta ilegal, contacta primero servicios de emergencia locales o apoyo local calificado. El soporte de BeMama no es un servicio de respuesta de emergencia.'
      ]],
      ['Disputas entre usuarios y preservación de evidencia', [
        'Cuando usuarios discrepan entre sí, BeMama puede usar registros disponibles para hacer cumplir los Términos de Uso, proteger usuarios y reducir abuso. Podemos preservar temporalmente registros relevantes de cuenta, mensaje, moderación, transacción y seguridad cuando sea necesario para investigar una disputa, responder una solicitud legal, defender derechos, prevenir abuso o proteger seguridad.',
        'Antes de completar una solicitud de eliminación de cuenta, BeMama puede usar temporalmente registros disponibles para finalizar un caso abierto de soporte, reembolso, seguridad, abuso o pago. Después de completarse la eliminación de cuenta, la intención de BeMama es no conservar datos identificables de cuenta excepto registros financieros y de transacciones requeridos. El contenido público o comunitario puede ser eliminado o desidentificado, y pueden seguir existiendo copias fuera del control de BeMama, como capturas de pantalla guardadas por otros usuarios.'
      ]],
      ['Terceros y proveedores de servicios', [
        'BeMama puede compartir información con vendedores y proveedores de servicios que ayudan a operar el servicio, incluyendo alojamiento, almacenamiento, entrega de contenido, autenticación, correo electrónico, soporte, notificaciones push, analítica de app, diagnósticos, procesamiento de IA, llamadas de voz o video, gestión de pagos y suscripciones, seguridad y prevención de fraude.',
        'Las tiendas de apps y proveedores de pago pueden procesar compras, reembolsos, suscripciones, impuestos e información de derechos de acceso bajo sus propios términos y políticas. BeMama puede recibir registros de compra y derechos de acceso, pero no detalles completos de tarjeta.',
        'Podemos divulgar información cuando sea requerido para cumplir la ley, hacer cumplir nuestros términos, proteger derechos y seguridad, investigar uso indebido, responder solicitudes legales o completar una fusión, adquisición, financiación, reorganización o transferencia de activos del servicio.'
      ]],
      ['Procesamiento internacional', [
        'BeMama y sus proveedores pueden procesar información en Canadá, Estados Unidos, la Unión Europea u otras regiones donde BeMama o sus proveedores operan. Las protecciones de privacidad pueden diferir por región, pero usamos salvaguardas apropiadas a la naturaleza de la información y el servicio.'
      ]],
      ['Retención', [
        'BeMama conserva información personal solo mientras sea útil para proporcionar el servicio, apoyar la cuenta, manejar solicitudes, mantener seguridad, administrar suscripciones o cumplir necesidades operativas. BeMama no garantiza que contenido de usuario, mensajes, medios, prompts de IA, historial de soporte, diagnósticos u otros datos exportables de cuenta se conserven por más de 3 meses.',
        'Algunos datos pueden ser eliminados, desidentificados, rotados o sobrescritos antes de 3 meses, especialmente archivos temporales, registros, medios en caché, diagnósticos, registros de notificación, borradores y datos operativos inactivos. Si quieres una exportación, solicítala mientras la cuenta está activa y antes de pedir eliminación.',
        'Si solicitas eliminación de cuenta, BeMama eliminará la cuenta y datos personales asociados de sistemas activos después de verificar y procesar la solicitud. Después de completarse la eliminación, BeMama no conservará intencionalmente datos identificables de cuenta excepto registros financieros y de transacciones requeridos para contabilidad, impuestos, reportes de tienda de apps, reembolsos, contracargos, disputas de pago u obligaciones de proveedores de pago.',
        'Los registros financieros y de transacciones pueden incluir identificadores de compra, registros de derecho de suscripción, registros de reembolso, registros de contracargo, registros fiscales/contables, metadatos de factura o recibo, mensajes del proveedor de pago y notas de soporte relacionadas necesarias para entender un problema de pago. Estos registros se conservan solo para fines financieros, contables, legales, prevención de fraude y proveedor de pago, no para continuar proporcionando funciones de cuenta.',
        'Eliminar la app de tu dispositivo no elimina tu cuenta, no borra registros del servidor, no exporta tus datos, no elimina contenido ya compartido con otros y no cancela una suscripción activa de tienda de apps.'
      ]],
      ['Límites de acceso y exportación', [
        `Puedes solicitar acceso, corrección, eliminación, exportación o revisión de tu información de BeMama contactando a ${site.supportEmail}. Podemos necesitar verificar tu identidad antes de actuar sobre una solicitud.`,
        'Las exportaciones incluyen datos personales de cuenta disponibles que BeMama puede localizar, verificar y proporcionar legalmente de manera razonable al momento de la solicitud. Las exportaciones pueden no incluir datos ya eliminados o desidentificados, registros temporales, archivos en caché, notas internas de seguridad, notas internas de moderación, datos privados de otros usuarios, registros comerciales confidenciales, registros de tienda de apps controlados por Google o Apple, o registros que no puedan vincularse de forma segura con el solicitante verificado.',
        'Como BeMama no garantiza retención de datos exportables de usuario por más de 3 meses, una exportación puede estar incompleta si la solicitud se hace después de que los registros hayan expirado, sido sobrescritos, desidentificados o eliminados por retención normal.',
        'Puedes actualizar detalles de cuenta en la app cuando esté disponible, controlar permisos del dispositivo en ajustes del sistema operativo, cancelar algunas comunicaciones y desactivar notificaciones push desde ajustes del dispositivo o app.'
      ]],
      ['Niños e información familiar', [
        'BeMama está destinada a adultos y cuidadores, no a que niños creen cuentas por sí mismos. Padres y cuidadores pueden elegir proporcionar información sobre un niño para usar funciones de BeMama, y son responsables de hacerlo apropiadamente.'
      ]],
      ['Seguridad', [
        'Usamos salvaguardas administrativas, técnicas y organizativas diseñadas para proteger información personal contra acceso no autorizado, uso indebido, pérdida y alteración. Ningún servicio en línea puede garantizar seguridad absoluta. BeMama usa códigos de verificación por correo electrónico en lugar de contraseñas de cuenta, así que mantén segura tu cuenta de correo y dispositivo, no compartas códigos de verificación con nadie y contáctanos si crees que tu cuenta o acceso al correo se ha comprometido.'
      ]],
      ['Cambios a esta política', [
        'Podemos actualizar esta política cuando BeMama cambie. La fecha actualizada muestra cuándo cambió esta página por última vez. Si un cambio afecta materialmente cómo manejamos información personal, daremos aviso de una manera razonable, como mediante el sitio, app, correo electrónico o avisos de cuenta.'
      ]]
    ], 'Esta política describe las prácticas de BeMama en lenguaje claro y no limita derechos de privacidad que puedas tener bajo la ley aplicable.'),
    tr: policy('Gizlilik Politikası', 'BeMama’nın hesap, bakım yolculuğu, soru-cevap, topluluk, sohbet, cihaz, abonelik, medya ve yapay zeka destekli destek verilerini nasıl topladığını, kullandığını, paylaştığını, sakladığını ve koruduğunu açık ve ayrıntılı şekilde anlatır.', [
      ['Bu politika neleri kapsar', [
        'Bu politika BeMama web sitesini, web uygulamasını, mobil uygulamaları, hesap özelliklerini, Günlük Yolculuk, soru-cevap, topluluk alanları, sohbet, sesli veya görüntülü arama, yapay zeka destekli destek, abonelikler ve destek kanallarını kullandığınızda geçerlidir.',
        `Sorular, silme talepleri, erişim talepleri, veri dışa aktarma talepleri veya gizlilik endişeleri ${site.supportEmail} adresine gönderilebilir.`
      ]],
      ['Topladığımız bilgiler', [
        'Ad, e-posta adresi, oturum açma sağlayıcı kimlikleri, dil, hesap ayarları, destek mesajları, doğrulama kayıtları ve güvenlik kayıtları gibi hesap ve iletişim bilgileri.',
        'Planlama, hamilelik, bebek bakımı veya çocuk gelişimi aşaması; sağlandığında beklenen doğum tarihi veya çocuk yaş aralığı; hedefler; tercihler; günlük kayıtlar; kaydedilen içerik; girmeyi seçtiğiniz semptomlar veya sorular; ve BeMama’yı kişiselleştirmek için eklediğiniz diğer bilgiler gibi bakım yolculuğu ve profil bilgileri.',
        'Gönderiler, yorumlar, sorular, cevaplar, mesajlar, ekler, görüntüler, ses, görüntülü arama meta verileri, arama katılım kayıtları, moderasyon notları ve destek inceleme notları gibi topluluk, soru-cevap, sohbet, arama ve medya bilgileri.',
        'IP adresi, cihaz ve tarayıcı ayrıntıları, uygulama sürümü, tanılama, çökme günlükleri, anlık bildirim tokenları, yaklaşık bölge, özellik kullanımı, abonelik durumu, erişim hakkı durumu, uygulama mağazası işlem kimlikleri ve kötüye kullanımı önlemek için gereken kayıtlar gibi cihaz, uygulama ve ticari bilgiler. BeMama, uygulama mağazalarından veya ödeme sağlayıcılarından tam ödeme kartı numaralarını almaz.'
      ]],
      ['Hassas bakım bilgileri', [
        'Planlama, hamilelik, doğurganlık, bebek, çocuk, ruhsal iyilik hali, semptom ve bakım bilgileri hassas olabilir. BeMama bu bilgileri yalnızca istenen özellikleri sağlamak, bakım yüzeylerini kişiselleştirmek, güvenlik ve moderasyonu desteklemek, hizmet sorunlarını gidermek ve hesap, destek veya gizlilik taleplerine yanıt vermek için kullanır.',
        'Acil semptomları, acil durum ayrıntılarını veya başka bir kişinin özel bilgilerini herkese açık topluluk alanlarında paylaşmayın. Acil semptomlar veya güvenlik endişeleri için nitelikli yerel bakım veya acil servislerle iletişime geçin.'
      ]],
      ['Kamera, mikrofon, bildirimler ve arama', [
        'BeMama kamera, mikrofon, ses, Bluetooth, internet ve bildirim izinlerini yalnızca sesli veya görüntülü aramalar, medya yakalama, sesli mesajlar, mesaj uyarıları ve arama uyarıları gibi bunlara ihtiyaç duyan özellikler için ister.',
        'Birçok izni cihaz ayarlarınızdan kontrol edebilirsiniz. Bir izni kapatmak ilgili özelliği sınırlayabilir, ancak teknik olarak mümkün olduğunda BeMama’nın geri kalanı çalışmaya devam edebilir.'
      ]],
      ['Bilgileri nasıl kullanıyoruz', [
        'Bilgileri hesap oluşturmak ve güvenceye almak, Günlük Yolculuk ve bakım yüzeylerini sağlamak, soru-cevap/topluluk/sohbet/arama özelliklerini işletmek, istediğiniz veya izin verdiğiniz bildirimleri göndermek, abonelikleri ve erişim haklarını yönetmek, destek sağlamak, içeriği moderasyon etmek, dolandırıcılık ve kötüye kullanımı önlemek, güvenilirliği artırmak, hataları gidermek, özellik performansını ölçmek ve geçerli yükümlülüklere uymak için kullanırız.',
        'Kimliği kaldırılmış, toplulaştırılmış veya başka şekilde gizliliği korunan bilgileri ürün performansını anlamak, bakım yolculuklarını iyileştirmek ve gelecekteki özellikleri planlamak için kullanabiliriz.'
      ]],
      ['Yapay zeka destekli özellikler', [
        'Yapay zeka destekli özellikler etkin olduğunda, istemler, sorular, konuşma bağlamı, oluşturulan yanıtlar, puanlamalar, güvenlik meta verileri ve ilgili teknik günlükler özelliği sağlamak, güvenliği artırmak, sorunları araştırmak ve kaliteyi korumak için BeMama ve yapay zeka hizmet sağlayıcıları tarafından işlenebilir.',
        'Yapay zeka destekli içerik genel eğitim ve destek içindir. Yanlış, eksik, önyargılı veya durumunuza uygun olmayabilir. Tanı, ilaç dozu, tedavi kararı, acil triyaj veya acil güvenlik kararları için kullanmayın.'
      ]],
      ['BeMama içinde görünürlük ve paylaşım', [
        'Topluluk gönderileri ve soru-cevap içeriği, gönderdiğiniz alan, hedef kitle veya özelliğe göre diğer kullanıcılar tarafından görülebilir. Özel mesajlar ve aramalar seçilen katılımcılar içindir, ancak BeMama yöneticileri, moderatörleri veya destek personeli güvenlik, kötüye kullanımı önleme, sorun giderme, destek veya yasal nedenler için gerektiğinde ilgili kayıtları inceleyebilir.',
        'Paylaşmayı seçtiğiniz bilgilerden siz sorumlusunuz. İzniniz ve yasal gerekçeniz olmadan başka bir kişinin kişisel bilgilerini, görüntülerini, sağlık bilgilerini veya çocuk bilgilerini yüklemeyin ya da yayınlamayın.'
      ]],
      ['Bildirimler, moderasyon ve kötüye kullanım', [
        'Birisi BeMama’da başka bir kişiye hakaret eder, taciz eder, tehdit eder, kimliğe bürünür, özel bilgileri ifşa eder, sömürür, dolandırır veya başka şekilde zarar verirse kullanıcılar içeriği veya hesabı desteğe bildirebilir. BeMama ne olduğunu anlamak ve nasıl yanıt verileceğine karar vermek için bildirilen içeriği, çevresindeki konuşmayı, hesap geçmişini, cihaz ve güvenlik kayıtlarını, önceki bildirimleri ve teknik günlükleri inceleyebilir.',
        'Moderasyon işlemleri içeriği yerinde bırakmayı, gizlemeyi, kaldırmayı, kullanıcıyı uyarmayı, özellikleri sınırlamayı, hesabı askıya almayı veya kapatmayı, güvenlik için kayıtları korumayı ya da ciddi kötüye kullanımı gerekli veya uygun olduğunda ilgili makamlara bildirmeyi içerebilir. Bildirilen her öğenin kaldırılacağını vaat etmiyoruz ve diğer kullanıcıların da gizlilik hakları olduğu için sonucu bildiren kişiyle tamamen paylaşamayabiliriz.',
        'Bir bildirim acil tehlike, kendine zarar verme, istismar, tehditler, sömürü veya yasa dışı davranış içeriyorsa önce yerel acil servislerle veya nitelikli yerel destekle iletişime geçin. BeMama desteği acil müdahale hizmeti değildir.'
      ]],
      ['Kullanıcı anlaşmazlıkları ve kanıt koruma', [
        'Kullanıcılar birbirleriyle anlaşmazlık yaşadığında BeMama, Kullanım Şartlarını uygulamak, kullanıcıları korumak ve kötüye kullanımı azaltmak için mevcut kayıtları kullanabilir. Bir anlaşmazlığı araştırmak, yasal talebe yanıt vermek, hakları savunmak, kötüye kullanımı önlemek veya güvenliği korumak için gerekli olduğunda ilgili hesap, mesaj, moderasyon, işlem ve güvenlik kayıtlarını geçici olarak koruyabiliriz.',
        'Bir hesap silme talebi tamamlanmadan önce BeMama açık bir destek, iade, güvenlik, kötüye kullanım veya ödeme incelemesini bitirmek için mevcut kayıtları geçici olarak kullanabilir. Hesap silme tamamlandıktan sonra BeMama’nın amacı gerekli finansal ve işlem kayıtları dışında tanımlanabilir hesap verisi tutmamaktır. Herkese açık veya topluluk içeriği kaldırılabilir ya da kimliği kaldırılabilir; diğer kullanıcıların kaydettiği ekran görüntüleri gibi BeMama’nın kontrolü dışındaki kopyalar yine de var olabilir.'
      ]],
      ['Üçüncü taraflar ve hizmet sağlayıcılar', [
        'BeMama hizmeti işletmeye yardımcı olan barındırma, depolama, içerik teslimi, kimlik doğrulama, e-posta, destek, anlık bildirimler, uygulama analitiği, tanılama, yapay zeka işleme, sesli veya görüntülü arama, ödeme ve abonelik yönetimi, güvenlik ve dolandırıcılık önleme sağlayıcılarıyla bilgi paylaşabilir.',
        'Uygulama mağazaları ve ödeme sağlayıcıları satın almaları, iadeleri, abonelikleri, vergileri ve erişim hakkı bilgilerini kendi şartları ve politikalarına göre işleyebilir. BeMama satın alma ve erişim hakkı kayıtlarını alabilir, ancak tam kart ayrıntılarını almaz.',
        'Bilgileri hukuka uymak, şartlarımızı uygulamak, hakları ve güvenliği korumak, kötüye kullanımı araştırmak, yasal taleplere yanıt vermek veya birleşme, satın alma, finansman, yeniden yapılanma ya da hizmet varlıklarının devrini tamamlamak için gerekli olduğunda açıklayabiliriz.'
      ]],
      ['Uluslararası işleme', [
        'BeMama ve sağlayıcıları bilgileri Kanada, Amerika Birleşik Devletleri, Avrupa Birliği veya BeMama ya da sağlayıcılarının faaliyet gösterdiği diğer bölgelerde işleyebilir. Gizlilik korumaları bölgeye göre farklı olabilir, ancak bilginin ve hizmetin niteliğine uygun güvenceler kullanırız.'
      ]],
      ['Saklama', [
        'BeMama kişisel bilgileri yalnızca hizmeti sağlamak, hesabı desteklemek, talepleri ele almak, güvenliği sürdürmek, abonelikleri yönetmek veya operasyonel ihtiyaçları karşılamak için yararlı olduğu sürece saklar. BeMama kullanıcı içeriği, mesajlar, medya, yapay zeka istemleri, destek geçmişi, tanılama veya diğer dışa aktarılabilir hesap verilerinin 3 aydan uzun saklanacağını garanti etmez.',
        'Bazı veriler, özellikle geçici dosyalar, günlükler, önbelleğe alınmış medya, tanılama, bildirim kayıtları, taslaklar ve etkin olmayan operasyonel veriler 3 aydan önce silinebilir, kimliği kaldırılabilir, döndürülebilir veya üzerine yazılabilir. Dışa aktarma istiyorsanız hesap aktifken ve silme talebinden önce isteyin.',
        'Hesap silme talep ederseniz BeMama talebi doğrulayıp işledikten sonra hesabı ve ilişkili kişisel verileri aktif sistemlerden siler. Silme tamamlandıktan sonra BeMama muhasebe, vergi, uygulama mağazası raporlama, iade, ters ibraz, ödeme anlaşmazlığı veya ödeme sağlayıcı yükümlülükleri için gerekli finansal ve işlem kayıtları dışında tanımlanabilir hesap verisini bilerek saklamaz.',
        'Finansal ve işlem kayıtları satın alma kimlikleri, abonelik erişim hakkı kayıtları, iade kayıtları, ters ibraz kayıtları, vergi/muhasebe kayıtları, fatura veya makbuz meta verileri, ödeme sağlayıcı mesajları ve ödeme sorununu anlamak için gereken ilgili destek notlarını içerebilir. Bu kayıtlar yalnızca finansal, muhasebe, yasal, dolandırıcılık önleme ve ödeme sağlayıcı amaçlarıyla saklanır, hesap özelliklerini sağlamaya devam etmek için değil.',
        'Uygulamayı cihazınızdan silmek hesabınızı silmez, sunucu tarafı kayıtları temizlemez, verilerinizi dışa aktarmaz, başkalarıyla paylaşılmış içeriği kaldırmaz veya aktif bir uygulama mağazası aboneliğini iptal etmez.'
      ]],
      ['Erişim ve dışa aktarma sınırları', [
        `BeMama bilgileriniz için erişim, düzeltme, silme, dışa aktarma veya inceleme talebini ${site.supportEmail} ile iletişime geçerek yapabilirsiniz. Bir talep üzerinde işlem yapmadan önce kimliğinizi doğrulamamız gerekebilir.`,
        'Dışa aktarmalar, BeMama’nın talep anında makul şekilde bulabileceği, doğrulayabileceği ve hukuken sağlayabileceği mevcut kişisel hesap verilerini içerir. Zaten silinmiş veya kimliği kaldırılmış veriler, geçici günlükler, önbelleğe alınmış dosyalar, dahili güvenlik notları, dahili moderasyon notları, diğer kullanıcıların özel verileri, gizli iş kayıtları, Google veya Apple tarafından kontrol edilen uygulama mağazası kayıtları veya doğrulanmış talep sahibiyle güvenli şekilde ilişkilendirilemeyen kayıtlar dışa aktarmaya dahil olmayabilir.',
        'BeMama kullanıcıya ait dışa aktarılabilir verilerin 3 aydan uzun tutulacağını garanti etmediği için, kayıtlar süresi dolduktan, üzerine yazıldıktan, kimliği kaldırıldıktan veya normal saklama kapsamında silindikten sonra yapılan taleplerde dışa aktarma eksik olabilir.',
        'Hesap ayrıntılarını uygulamada mevcut olduğunda güncelleyebilir, cihaz izinlerini işletim sistemi ayarlarından kontrol edebilir, bazı iletişimlerden çıkabilir ve anlık bildirimleri cihaz veya uygulama ayarlarından kapatabilirsiniz.'
      ]],
      ['Çocuklar ve aile bilgileri', [
        'BeMama yetişkinler ve bakım verenler içindir; çocukların kendi başlarına hesap oluşturması için değildir. Ebeveynler ve bakım verenler BeMama özelliklerini kullanmak için çocuk hakkında bilgi vermeyi seçebilir ve bunu uygun şekilde yapmaktan sorumludur.'
      ]],
      ['Güvenlik', [
        'Kişisel bilgileri yetkisiz erişim, kötüye kullanım, kayıp ve değişikliğe karşı korumak için tasarlanmış idari, teknik ve organizasyonel güvenceler kullanırız. Hiçbir çevrimiçi hizmet mutlak güvenlik garanti edemez. BeMama hesap şifreleri yerine e-posta doğrulama kodları kullanır; bu nedenle e-posta hesabınızı ve cihazınızı güvende tutun, doğrulama kodlarını kimseyle paylaşmayın ve hesabınızın veya e-posta erişiminizin tehlikeye girdiğini düşünüyorsanız bizimle iletişime geçin.'
      ]],
      ['Bu politikadaki değişiklikler', [
        'BeMama değiştikçe bu politikayı güncelleyebiliriz. Güncelleme tarihi bu sayfanın en son ne zaman değiştiğini gösterir. Bir değişiklik kişisel bilgileri nasıl ele aldığımızı önemli ölçüde etkilerse web sitesi, uygulama, e-posta veya hesap bildirimleri gibi makul bir yolla bildirim sağlarız.'
      ]]
    ], 'Bu politika BeMama’nın uygulamalarını açık bir dille açıklar ve geçerli hukuk kapsamında sahip olabileceğiniz gizlilik haklarını sınırlamaz.'),
    pt: policy('Política de Privacidade', 'Visão clara e detalhada de como BeMama coleta, usa, compartilha, retém e protege dados de conta, jornada de cuidado, perguntas e respostas, comunidade, chat, dispositivo, assinatura, mídia e suporte assistido por IA.', [
      ['O que esta política cobre', [
        'Esta política se aplica quando você usa o site BeMama, o app web, apps móveis, recursos de conta, Jornada diária, perguntas e respostas, espaços de comunidade, chat, chamadas de voz ou vídeo, suporte assistido por IA, assinaturas e canais de suporte.',
        `Perguntas, pedidos de exclusão, pedidos de acesso, pedidos de exportação de dados ou preocupações de privacidade podem ser enviados para ${site.supportEmail}.`
      ]],
      ['Informações que coletamos', [
        'Informações de conta e contato, como nome, endereço de e-mail, identificadores do provedor de login, idioma, configurações da conta, mensagens de suporte, registros de verificação e registros de segurança.',
        'Informações de jornada de cuidado e perfil, como estágio de planejamento, gravidez, cuidado do bebê ou crescimento infantil; data provável de parto ou faixa etária da criança quando fornecida; objetivos; preferências; check-ins diários; conteúdo salvo; sintomas ou perguntas que você escolhe inserir; e outras informações adicionadas para personalizar BeMama.',
        'Informações de comunidade, perguntas e respostas, chat, chamadas e mídia, como publicações, comentários, perguntas, respostas, mensagens, anexos, imagens, áudio, metadados de chamada de vídeo, registros de participação em chamadas, notas de moderação e notas de revisão de suporte.',
        'Informações de dispositivo, app e comerciais, como endereço IP, detalhes de dispositivo e navegador, versão do app, diagnósticos, logs de falha, tokens de notificação push, região aproximada, uso de recursos, status de assinatura, status de direito de acesso, identificadores de transação de loja de apps e registros necessários para prevenir abuso. BeMama não recebe números completos de cartão de pagamento de lojas de apps ou provedores de pagamento.'
      ]],
      ['Informações sensíveis de cuidado', [
        'Informações sobre planejamento, gravidez, fertilidade, bebê, criança, bem-estar mental, sintomas e cuidado podem ser sensíveis. BeMama usa essas informações apenas para fornecer recursos solicitados, personalizar superfícies de cuidado, apoiar segurança e moderação, solucionar problemas do serviço e responder a solicitações de conta, suporte ou privacidade.',
        'Não publique sintomas urgentes, detalhes de emergência ou informações privadas de outra pessoa em áreas públicas de comunidade. Para sintomas urgentes ou preocupações de segurança, contate cuidado local qualificado ou serviços de emergência.'
      ]],
      ['Câmera, microfone, notificações e chamadas', [
        'BeMama solicita permissões de câmera, microfone, áudio, Bluetooth, internet e notificações apenas para recursos que precisam delas, como chamadas de voz ou vídeo, captura de mídia, mensagens de áudio, alertas de mensagem e alertas de chamada.',
        'Você pode controlar muitas permissões nas configurações do dispositivo. Desativar uma permissão pode limitar o recurso relacionado, mas o restante do BeMama pode continuar funcionando quando tecnicamente possível.'
      ]],
      ['Como usamos informações', [
        'Usamos informações para criar e proteger contas, fornecer Jornada diária e superfícies de cuidado, operar perguntas e respostas, comunidade, chat e chamadas, enviar notificações que você solicita ou permite, gerenciar assinaturas e direitos de acesso, fornecer suporte, moderar conteúdo, prevenir fraude e abuso, melhorar confiabilidade, solucionar defeitos, medir desempenho de recursos e cumprir obrigações aplicáveis.',
        'Podemos usar informações desidentificadas, agregadas ou protegidas de outra forma para entender desempenho do produto, melhorar jornadas de cuidado e planejar recursos futuros.'
      ]],
      ['Recursos assistidos por IA', [
        'Quando recursos assistidos por IA estão ativados, prompts, perguntas, contexto de conversa, respostas geradas, avaliações, metadados de segurança e logs técnicos relacionados podem ser processados por BeMama e provedores de serviços de IA para fornecer o recurso, melhorar segurança, investigar problemas e manter qualidade.',
        'Conteúdo assistido por IA é para educação e suporte geral. Pode estar errado, incompleto, enviesado ou inadequado para sua situação. Não use para diagnóstico, dosagem de medicamento, decisões de tratamento, triagem de emergência ou decisões urgentes de segurança.'
      ]],
      ['Visibilidade e compartilhamento dentro do BeMama', [
        'Publicações de comunidade e conteúdo de perguntas e respostas podem ficar visíveis para outros usuários conforme o espaço, público ou recurso onde você publica. Mensagens privadas e chamadas são destinadas aos participantes selecionados, mas administradores, moderadores ou equipe de suporte BeMama podem revisar registros relacionados quando necessário para segurança, prevenção de abuso, solução de problemas, suporte ou razões legais.',
        'Você é responsável pelas informações que escolhe compartilhar. Não envie nem publique informações pessoais, imagens, informações de saúde ou informações de criança de outra pessoa sem permissão e motivo legal.'
      ]],
      ['Denúncias, moderação e comportamento abusivo', [
        'Se alguém insultar, assediar, ameaçar, se passar por outra pessoa, expor informações privadas, explorar, aplicar golpe ou prejudicar outra pessoa no BeMama, usuários podem denunciar o conteúdo ou conta ao suporte. BeMama pode revisar o conteúdo denunciado, conversa ao redor, histórico da conta, registros de dispositivo e segurança, denúncias anteriores e logs técnicos para entender o que aconteceu e decidir como responder.',
        'Ações de moderação podem incluir deixar conteúdo no lugar, ocultar, remover, advertir usuário, limitar recursos, suspender ou fechar conta, preservar registros para segurança ou denunciar abuso grave às autoridades apropriadas quando exigido ou adequado. Não prometemos que todo item denunciado será removido e talvez não possamos compartilhar o resultado completo com quem denunciou porque outros usuários também têm direitos de privacidade.',
        'Se uma denúncia envolver perigo imediato, automutilação, abuso, ameaças, exploração ou conduta ilegal, contate primeiro serviços de emergência locais ou suporte local qualificado. O suporte BeMama não é serviço de resposta de emergência.'
      ]],
      ['Disputas entre usuários e preservação de evidências', [
        'Quando usuários discordam entre si, BeMama pode usar registros disponíveis para aplicar os Termos de Uso, proteger usuários e reduzir abuso. Podemos preservar temporariamente registros relevantes de conta, mensagem, moderação, transação e segurança quando necessário para investigar disputa, responder solicitação legal, defender direitos, prevenir abuso ou proteger segurança.',
        'Antes de concluir um pedido de exclusão de conta, BeMama pode usar temporariamente registros disponíveis para finalizar uma questão aberta de suporte, reembolso, segurança, abuso ou pagamento. Após a exclusão da conta ser concluída, a intenção de BeMama é não manter dados identificáveis de conta exceto registros financeiros e de transações exigidos. Conteúdo público ou comunitário pode ser removido ou desidentificado, e cópias fora do controle de BeMama, como capturas de tela salvas por outros usuários, ainda podem existir.'
      ]],
      ['Terceiros e prestadores de serviço', [
        'BeMama pode compartilhar informações com fornecedores e prestadores que ajudam a operar o serviço, incluindo hospedagem, armazenamento, entrega de conteúdo, autenticação, e-mail, suporte, notificações push, análise de app, diagnósticos, processamento de IA, chamadas de voz ou vídeo, gerenciamento de pagamentos e assinaturas, segurança e prevenção de fraude.',
        'Lojas de apps e provedores de pagamento podem processar compras, reembolsos, assinaturas, impostos e informações de direito de acesso conforme seus próprios termos e políticas. BeMama pode receber registros de compra e direito de acesso, mas não detalhes completos de cartão.',
        'Podemos divulgar informações quando necessário para cumprir a lei, aplicar nossos termos, proteger direitos e segurança, investigar mau uso, responder a solicitações legais ou concluir fusão, aquisição, financiamento, reorganização ou transferência de ativos do serviço.'
      ]],
      ['Processamento internacional', [
        'BeMama e seus provedores podem processar informações no Canadá, Estados Unidos, União Europeia ou outras regiões onde BeMama ou seus provedores operam. Proteções de privacidade podem diferir por região, mas usamos salvaguardas apropriadas à natureza das informações e do serviço.'
      ]],
      ['Retenção', [
        'BeMama mantém informações pessoais apenas enquanto forem úteis para fornecer o serviço, apoiar a conta, lidar com solicitações, manter segurança, gerenciar assinaturas ou atender necessidades operacionais. BeMama não garante que conteúdo do usuário, mensagens, mídia, prompts de IA, histórico de suporte, diagnósticos ou outros dados exportáveis da conta serão mantidos por mais de 3 meses.',
        'Alguns dados podem ser excluídos, desidentificados, rotacionados ou sobrescritos antes de 3 meses, especialmente arquivos temporários, logs, mídia em cache, diagnósticos, registros de notificação, rascunhos e dados operacionais inativos. Se quiser uma exportação, solicite enquanto a conta está ativa e antes de pedir exclusão.',
        'Se você solicitar exclusão da conta, BeMama excluirá a conta e os dados pessoais associados dos sistemas ativos após verificar e processar o pedido. Após a conclusão da exclusão, BeMama não reterá intencionalmente dados identificáveis de conta exceto registros financeiros e de transações exigidos para contabilidade, impostos, relatórios de loja de apps, reembolso, chargeback, disputa de pagamento ou obrigações do provedor de pagamento.',
        'Registros financeiros e de transações podem incluir identificadores de compra, registros de direito de assinatura, registros de reembolso, registros de chargeback, registros fiscais/contábeis, metadados de fatura ou recibo, mensagens do provedor de pagamento e notas de suporte relacionadas necessárias para entender um problema de pagamento. Esses registros são retidos apenas para fins financeiros, contábeis, legais, prevenção de fraude e provedor de pagamento, não para continuar fornecendo recursos de conta.',
        'Excluir o app do dispositivo não exclui sua conta, não apaga registros do servidor, não exporta seus dados, não remove conteúdo já compartilhado com outras pessoas e não cancela assinatura ativa de loja de apps.'
      ]],
      ['Limites de acesso e exportação', [
        `Você pode solicitar acesso, correção, exclusão, exportação ou revisão de suas informações BeMama entrando em contato com ${site.supportEmail}. Podemos precisar verificar sua identidade antes de agir sobre uma solicitação.`,
        'Exportações incluem dados pessoais de conta disponíveis que BeMama pode localizar, verificar e fornecer legalmente de forma razoável no momento da solicitação. Exportações podem não incluir dados já excluídos ou desidentificados, logs temporários, arquivos em cache, notas internas de segurança, notas internas de moderação, dados privados de outros usuários, registros comerciais confidenciais, registros de loja de apps controlados por Google ou Apple, ou registros que não possam ser vinculados com segurança ao solicitante verificado.',
        'Como BeMama não garante retenção de dados exportáveis do usuário por mais de 3 meses, uma exportação pode estar incompleta se a solicitação for feita depois que registros expiraram, foram sobrescritos, desidentificados ou excluídos pela retenção normal.',
        'Você pode atualizar detalhes da conta no app quando disponível, controlar permissões do dispositivo nas configurações do sistema operacional, sair de algumas comunicações e desativar notificações push nas configurações do dispositivo ou app.'
      ]],
      ['Crianças e informações familiares', [
        'BeMama é destinado a adultos e cuidadores, não para crianças criarem contas por conta própria. Pais e cuidadores podem escolher fornecer informações sobre uma criança para usar recursos BeMama e são responsáveis por fazê-lo adequadamente.'
      ]],
      ['Segurança', [
        'Usamos salvaguardas administrativas, técnicas e organizacionais projetadas para proteger informações pessoais contra acesso não autorizado, uso indevido, perda e alteração. Nenhum serviço online pode garantir segurança absoluta. BeMama usa códigos de verificação por e-mail em vez de senhas de conta, então mantenha sua conta de e-mail e dispositivo seguros, não compartilhe códigos de verificação com ninguém e contate-nos se acreditar que sua conta ou acesso ao e-mail foi comprometido.'
      ]],
      ['Mudanças nesta política', [
        'Podemos atualizar esta política conforme BeMama muda. A data atualizada mostra quando esta página foi alterada pela última vez. Se uma mudança afetar materialmente como tratamos informações pessoais, forneceremos aviso de maneira razoável, como pelo site, app, e-mail ou avisos de conta.'
      ]]
    ], 'Esta política descreve as práticas do BeMama em linguagem clara e não limita direitos de privacidade que você possa ter sob a lei aplicável.')
  };

  return policies[locale];
}

function localizedPolicy(locale) {
  if (locale === 'fa') {
    return persianPolicy();
  }

  const packs = {
    fa: {
      about: ['درباره BeMama', 'BeMama چیست و چه محدودیت‌هایی دارد.', 'BeMama ابزار تشخیص پزشکی نیست و جای پزشک یا خدمات اضطراری را نمی‌گیرد.'],
      privacy: ['سیاست حریم خصوصی', 'مروری ساده بر داده‌هایی که BeMama جمع‌آوری، استفاده، نگهداری و با ارائه‌دهندگان خدمات پردازش می‌کند.', 'برای جزئیات کامل‌تر، نسخه انگلیسی سیاست حریم خصوصی را نیز بررسی کنید.'],
      terms: ['شرایط استفاده', 'شرایط استفاده از BeMama، مسئولیت کاربر، جامعه و هوش مصنوعی.', 'با استفاده از BeMama، شما با این شرایط و سیاست‌های مرتبط موافقت می‌کنید.'],
      subscription: ['شرایط اشتراک', 'شرایط نسخه‌های رایگان و پریمیوم، پرداخت فروشگاهی، تمدید، لغو و بازپرداخت.', 'اشتراک‌ها، تمدید، لغو و بازپرداخت طبق شرایط فروشگاه یا ارائه‌دهنده پرداخت انجام می‌شود.'],
      ai: ['توضیح ایمنی هوش مصنوعی', 'هوش مصنوعی چگونه استفاده می‌شود و چه محدودیت‌هایی دارد.', 'محتوای هوش مصنوعی ممکن است نادرست یا ناقص باشد.'],
      contact: ['تماس و پشتیبانی', 'راه‌های درخواست پشتیبانی، حذف یا دریافت خروجی داده.', undefined],
      sections: [
        ['اطلاعات و استفاده', 'BeMama از داده حساب، مسیر روزانه، پرسش و پاسخ، جامعه، چت، دستگاه، اعلان‌ها، اشتراک و داده‌های عملیاتی برای ارائه و ایمن نگه داشتن سرویس استفاده می‌کند.'],
        ['دسترسی‌ها', 'دوربین، میکروفون، صدا، تماس تصویری و اعلان‌ها فقط برای قابلیت‌هایی استفاده می‌شوند که شما فعال یا استفاده می‌کنید.'],
        ['اشتراک‌گذاری', 'BeMama ممکن است داده را با ارائه‌دهندگان میزبانی، ذخیره‌سازی، ورود، اعلان، پرداخت، پشتیبانی، تحلیل، تماس و هوش مصنوعی فقط برای اجرای سرویس پردازش کند.'],
        ['گزارش و بازبینی', 'اگر کسی توهین، تهدید، آزار، جعل هویت، کلاهبرداری یا نقض حریم خصوصی انجام دهد، BeMama می‌تواند محتوای مرتبط، حساب، گزارش‌ها و سوابق فنی را برای حفاظت از کاربران بررسی کند.'],
        ['پرداخت و رفتار کاربر', 'پرداخت یا اشتراک به هیچ کاربری اجازه توهین، بدزبانی، آزار، تهدید، کلاهبرداری یا رفتار غیرقانونی نمی‌دهد. مسئولیت هر پیام، محتوا و رفتار با همان کاربری است که آن را انجام می‌دهد.'],
        ['محدودیت و ممنوعیت حساب', 'BeMama می‌تواند حساب را برای مدتی محدود یا ممنوع کند. تخلف‌های تکراری یا جدی ممکن است باعث ممنوعیت دائمی حساب شود.'],
        ['پرداخت و بازپرداخت', 'پرداخت‌ها، لغو اشتراک و بازپرداخت‌های Google Play یا Apple معمولاً طبق قوانین همان فروشگاه بررسی می‌شوند. پشتیبانی BeMama می‌تواند درباره دسترسی پریمیوم یا مسیر درخواست بازپرداخت کمک کند.'],
        ['نگهداری و حذف', 'BeMama تضمین نمی‌کند داده‌های قابل خروجی گرفتن بیش از ۳ ماه نگهداری شوند. پس از حذف حساب، فقط سوابق مالی و تراکنشی لازم نگهداری می‌شوند.'],
        ['محدودیت پزشکی', 'محتوا فقط آموزشی و حمایتی است و برای تشخیص، نسخه، دوز دارو یا مراقبت اضطراری نیست.'],
        ['درخواست‌ها', `برای حذف حساب، دریافت خروجی داده، اصلاح، بازبینی حریم خصوصی یا پشتیبانی با ${site.supportEmail} تماس بگیرید.`]
      ]
    },
    ar: {
      about: ['حول BeMama', 'ما هي BeMama وما حدودها.', 'BeMama ليست أداة تشخيص طبي ولا تستبدل الطبيب أو خدمات الطوارئ.'],
      privacy: ['سياسة الخصوصية', 'ملخص واضح للبيانات التي تجمعها BeMama وتستخدمها وتحتفظ بها وتعالجها مع مزودي الخدمة.', 'للتفاصيل الكاملة، راجعي النسخة الإنجليزية من سياسة الخصوصية أيضاً.'],
      terms: ['شروط الاستخدام', 'شروط استخدام BeMama ومسؤوليات المستخدم والمجتمع والذكاء الاصطناعي.', 'باستخدام BeMama، فإنك توافقين على هذه الشروط والسياسات المرتبطة بها.'],
      subscription: ['شروط الاشتراك', 'شروط الوصول المجاني والمميز والدفع عبر المتاجر والتجديد والإلغاء والاسترداد.', 'تتم الاشتراكات والتجديد والإلغاء والاسترداد وفق شروط المتجر أو مزود الدفع.'],
      ai: ['تنبيه الذكاء الاصطناعي', 'كيف يمكن استخدام الذكاء الاصطناعي وما حدوده.', 'قد يكون محتوى الذكاء الاصطناعي خاطئاً أو ناقصاً.'],
      contact: ['اتصال ودعم', 'طرق طلب الدعم أو الحذف أو تصدير البيانات.', undefined],
      sections: [
        ['البيانات والاستخدام', 'تستخدم BeMama بيانات الحساب والمسار اليومي والأسئلة والمجتمع والدردشة والجهاز والإشعارات والاشتراك والتشغيل لتقديم الخدمة وحمايتها.'],
        ['الأذونات', 'تستخدم الكاميرا والميكروفون والصوت ومكالمات الفيديو والإشعارات فقط للميزات التي تفعلينها أو تستخدمينها.'],
        ['المشاركة', 'قد تعالج BeMama البيانات مع مزودي الاستضافة والتخزين وتسجيل الدخول والإشعارات والدفع والدعم والتحليلات والمكالمات والذكاء الاصطناعي لتشغيل الخدمة.'],
        ['الإبلاغ والمراجعة', 'إذا قام شخص بالإهانة أو التهديد أو المضايقة أو الانتحال أو الاحتيال أو انتهاك الخصوصية، يمكن لـ BeMama مراجعة المحتوى والحسابات والبلاغات والسجلات التقنية لحماية المستخدمين.'],
        ['الدفع وسلوك المستخدم', 'الدفع أو الاشتراك لا يمنح أي مستخدم حق الإهانة أو استخدام ألفاظ مسيئة أو المضايقة أو التهديد أو الاحتيال أو أي سلوك غير قانوني. كل مستخدم مسؤول عن رسائله ومحتواه وسلوكه.'],
        ['تقييد أو حظر الحساب', 'يمكن لـ BeMama تقييد الحساب أو حظره لفترة من الوقت. المخالفات المتكررة أو الخطيرة قد تؤدي إلى حظر دائم للحساب.'],
        ['الدفع والاسترداد', 'عادةً تتم مدفوعات Google Play أو Apple وإلغاء الاشتراك والاسترداد وفق قواعد المتجر نفسه. يمكن لدعم BeMama المساعدة في الوصول المميز أو توجيهك لطريقة طلب الاسترداد.'],
        ['الاحتفاظ والحذف', 'لا تضمن BeMama الاحتفاظ بالبيانات القابلة للتصدير لأكثر من 3 أشهر. بعد حذف الحساب، يتم الاحتفاظ فقط بالسجلات المالية وسجلات المعاملات اللازمة.'],
        ['حدود طبية', 'المحتوى للتعليم والدعم العام فقط وليس للتشخيص أو الوصفات أو جرعات الدواء أو الطوارئ.'],
        ['الطلبات', `لطلب حذف الحساب أو تصدير البيانات أو التصحيح أو مراجعة الخصوصية أو الدعم، راسلينا على ${site.supportEmail}.`]
      ]
    },
    fr: {
      about: ['À propos de BeMama', 'Ce qu’est BeMama et ses limites.', 'BeMama n’est pas un outil de diagnostic médical et ne remplace pas les cliniciens ou les urgences.'],
      privacy: ['Politique de confidentialité', 'Résumé clair des données que BeMama collecte, utilise, conserve et traite avec ses prestataires.', 'Pour les détails complets, consultez aussi la politique de confidentialité en anglais.'],
      terms: ['Conditions d’utilisation', 'Conditions d’usage, responsabilités, communauté et contenu assisté par IA.', 'En utilisant BeMama, vous acceptez ces conditions et les politiques liées.'],
      subscription: ['Conditions d’abonnement', 'Conditions pour l’accès gratuit et premium, la facturation, le renouvellement, l’annulation et les remboursements.', 'Les abonnements, renouvellements, annulations et remboursements suivent les règles de la boutique ou du fournisseur de paiement.'],
      ai: ['Avertissement IA et sécurité', 'Comment l’IA peut être utilisée et quelles sont ses limites.', 'Le contenu assisté par IA peut être faux ou incomplet.'],
      contact: ['Contact et support', 'Support, demandes de suppression ou d’export de données.', undefined],
      sections: [
        ['Données et usage', 'BeMama utilise les données de compte, parcours quotidien, questions, communauté, chat, appareil, notifications, abonnements et opérations pour fournir et protéger le service.'],
        ['Autorisations', 'La caméra, le microphone, l’audio, les appels vidéo et les notifications sont utilisés seulement pour les fonctionnalités que vous activez ou utilisez.'],
        ['Partage', 'BeMama peut traiter les données avec des prestataires d’hébergement, stockage, connexion, notifications, paiement, support, analyse, appels et IA pour faire fonctionner le service.'],
        ['Signalements et examen', 'Si une personne insulte, menace, harcèle, usurpe une identité, fraude ou viole la confidentialité, BeMama peut examiner le contenu, les comptes, les signalements et les journaux techniques pour protéger les utilisateurs.'],
        ['Paiement et conduite', 'Le paiement ou l’abonnement ne donne à personne le droit d’insulter, d’utiliser un langage abusif, de harceler, de menacer, de frauder ou d’agir illégalement. Chaque utilisateur est responsable de ses messages, contenus et comportements.'],
        ['Restriction ou bannissement', 'BeMama peut restreindre ou bannir un compte pendant une période déterminée. Des violations répétées ou graves peuvent entraîner un bannissement permanent.'],
        ['Paiements et remboursements', 'Les paiements, annulations et remboursements Google Play ou Apple suivent généralement les règles de la boutique concernée. Le support BeMama peut aider avec l’accès premium ou indiquer où demander un remboursement.'],
        ['Conservation et suppression', 'BeMama ne garantit pas que les données exportables seront conservées plus de 3 mois. Après suppression du compte, seuls les documents financiers et transactionnels nécessaires sont conservés.'],
        ['Limite médicale', 'Le contenu est éducatif et de soutien seulement, sans diagnostic, ordonnance, dosage ou urgence.'],
        ['Demandes', `Pour une suppression, un export, une correction, une question de confidentialité ou du support, contactez ${site.supportEmail}.`]
      ]
    },
    tr: {
      about: ['BeMama hakkında', 'BeMama nedir ve sınırları nelerdir.', 'BeMama tıbbi tanı aracı değildir ve klinisyenlerin veya acil servislerin yerine geçmez.'],
      privacy: ['Gizlilik Politikası', 'BeMama’nın topladığı, kullandığı, sakladığı ve hizmet sağlayıcılarla işlediği verilerin sade özeti.', 'Tam ayrıntılar için İngilizce gizlilik politikasını da inceleyin.'],
      terms: ['Kullanım Şartları', 'Kullanım, kullanıcı sorumlulukları, topluluk ve yapay zeka destekli içerik şartları.', 'BeMama’yı kullanarak bu şartları ve ilgili politikaları kabul edersiniz.'],
      subscription: ['Abonelik Şartları', 'Ücretsiz ve premium erişim, mağaza ödemeleri, yenileme, iptal ve iade şartları.', 'Abonelikler, yenileme, iptal ve iadeler mağaza veya ödeme sağlayıcısı kurallarına göre yürütülür.'],
      ai: ['Yapay Zeka Uyarısı ve Güvenlik', 'Yapay zeka nasıl kullanılabilir ve sınırları nelerdir.', 'Yapay zeka destekli içerik yanlış veya eksik olabilir.'],
      contact: ['İletişim ve destek', 'Destek, silme veya veri dışa aktarma talepleri.', undefined],
      sections: [
        ['Veriler ve kullanım', 'BeMama hesap, günlük yolculuk, soru-cevap, topluluk, sohbet, cihaz, bildirim, abonelik ve operasyon verilerini hizmeti sunmak ve korumak için kullanır.'],
        ['İzinler', 'Kamera, mikrofon, ses, görüntülü arama ve bildirimler yalnızca etkinleştirdiğiniz veya kullandığınız özellikler için kullanılır.'],
        ['Paylaşım', 'BeMama verileri barındırma, depolama, giriş, bildirim, ödeme, destek, analiz, arama ve yapay zeka sağlayıcılarıyla hizmeti çalıştırmak için işleyebilir.'],
        ['Bildirim ve inceleme', 'Bir kişi hakaret, tehdit, taciz, kimliğe bürünme, dolandırıcılık veya gizlilik ihlali yaparsa BeMama kullanıcıları korumak için ilgili içerik, hesap, rapor ve teknik kayıtları inceleyebilir.'],
        ['Ödeme ve kullanıcı davranışı', 'Ödeme yapmak veya abone olmak hiçbir kullanıcıya hakaret etme, kötü söz kullanma, taciz etme, tehdit etme, dolandırıcılık yapma veya yasa dışı davranma izni vermez. Her kullanıcı kendi mesajlarından, içeriğinden ve davranışından sorumludur.'],
        ['Hesap kısıtlama veya yasaklama', 'BeMama bir hesabı belirli bir süre kısıtlayabilir veya yasaklayabilir. Tekrarlanan veya ciddi ihlaller kalıcı hesap yasağına yol açabilir.'],
        ['Ödeme ve iade', 'Google Play veya Apple ödemeleri, abonelik iptalleri ve iadeleri genellikle ilgili mağazanın kurallarına göre değerlendirilir. BeMama desteği premium erişim veya iade yolunu bulma konusunda yardımcı olabilir.'],
        ['Saklama ve silme', 'BeMama dışa aktarılabilir verilerin 3 aydan uzun süre saklanacağını garanti etmez. Hesap silindikten sonra yalnızca gerekli finansal ve işlem kayıtları tutulur.'],
        ['Tıbbi sınır', 'İçerik yalnızca genel eğitim ve destektir; tanı, reçete, doz veya acil bakım değildir.'],
        ['Talepler', `Hesap silme, veri dışa aktarma, düzeltme, gizlilik incelemesi veya destek için ${site.supportEmail} adresine yazın.`]
      ]
    },
    es: {
      about: ['Acerca de BeMama', 'Qué es BeMama y cuáles son sus límites.', 'BeMama no es una herramienta de diagnóstico médico ni reemplaza a profesionales o emergencias.'],
      privacy: ['Política de privacidad', 'Resumen claro de los datos que BeMama recopila, usa, conserva y procesa con proveedores de servicios.', 'Para todos los detalles, revisa también la política de privacidad en inglés.'],
      terms: ['Términos de uso', 'Uso de BeMama, responsabilidades, comunidad y contenido asistido por IA.', 'Al usar BeMama, aceptas estos términos y las políticas relacionadas.'],
      subscription: ['Términos de suscripción', 'Términos de acceso gratuito y premium, pagos de tienda, renovación, cancelación y reembolsos.', 'Las suscripciones, renovaciones, cancelaciones y reembolsos siguen las reglas de la tienda o proveedor de pago.'],
      ai: ['Aviso de IA y seguridad', 'Cómo puede usarse la IA y cuáles son sus límites.', 'El contenido asistido por IA puede ser incorrecto o incompleto.'],
      contact: ['Contacto y soporte', 'Soporte, eliminación o exportación de datos.', undefined],
      sections: [
        ['Datos y uso', 'BeMama usa datos de cuenta, viaje diario, preguntas, comunidad, chat, dispositivo, notificaciones, suscripción y operación para ofrecer y proteger el servicio.'],
        ['Permisos', 'La cámara, el micrófono, el audio, las videollamadas y las notificaciones se usan solo para funciones que activas o utilizas.'],
        ['Compartir', 'BeMama puede procesar datos con proveedores de alojamiento, almacenamiento, acceso, notificaciones, pago, soporte, análisis, llamadas e IA para operar el servicio.'],
        ['Reportes y revisión', 'Si alguien insulta, amenaza, acosa, suplanta identidad, estafa o viola la privacidad, BeMama puede revisar contenido, cuentas, reportes y registros técnicos para proteger a los usuarios.'],
        ['Pago y conducta', 'Pagar o suscribirse no da permiso para insultar, usar lenguaje abusivo, acosar, amenazar, cometer fraude o actuar ilegalmente. Cada usuario es responsable de sus propios mensajes, contenido y comportamiento.'],
        ['Restricción o bloqueo de cuenta', 'BeMama puede restringir o bloquear una cuenta por un período de tiempo. Las violaciones repetidas o graves pueden causar un bloqueo permanente.'],
        ['Pagos y reembolsos', 'Los pagos, cancelaciones y reembolsos de Google Play o Apple normalmente siguen las reglas de la tienda correspondiente. El soporte de BeMama puede ayudar con acceso premium o indicar dónde pedir un reembolso.'],
        ['Retención y eliminación', 'BeMama no garantiza conservar datos exportables por más de 3 meses. Después de eliminar la cuenta, solo se conservan los registros financieros y de transacciones necesarios.'],
        ['Límite médico', 'El contenido es solo educación y apoyo general, no diagnóstico, receta, dosis ni urgencias.'],
        ['Solicitudes', `Para eliminar cuenta, exportar datos, corregir información, revisar privacidad o pedir soporte, escribe a ${site.supportEmail}.`]
      ]
    },
    pt: {
      about: ['Sobre BeMama', 'O que é BeMama e quais são seus limites.', 'BeMama não é ferramenta de diagnóstico médico e não substitui profissionais ou emergência.'],
      privacy: ['Política de privacidade', 'Resumo claro dos dados que BeMama coleta, usa, retém e processa com prestadores de serviço.', 'Para todos os detalhes, revise também a política de privacidade em inglês.'],
      terms: ['Termos de uso', 'Uso do BeMama, responsabilidades, comunidade e conteúdo assistido por IA.', 'Ao usar BeMama, você aceita estes termos e as políticas relacionadas.'],
      subscription: ['Termos de assinatura', 'Termos de acesso gratuito e premium, pagamentos de loja, renovação, cancelamento e reembolsos.', 'Assinaturas, renovações, cancelamentos e reembolsos seguem as regras da loja ou do provedor de pagamento.'],
      ai: ['Aviso de IA e segurança', 'Como a IA pode ser usada e quais são seus limites.', 'Conteúdo assistido por IA pode estar errado ou incompleto.'],
      contact: ['Contato e suporte', 'Suporte, exclusão ou exportação de dados.', undefined],
      sections: [
        ['Dados e uso', 'BeMama usa dados de conta, jornada diária, perguntas, comunidade, chat, dispositivo, notificações, assinatura e operação para oferecer e proteger o serviço.'],
        ['Permissões', 'Câmera, microfone, áudio, chamadas de vídeo e notificações são usados apenas para recursos que você ativa ou utiliza.'],
        ['Compartilhamento', 'BeMama pode processar dados com prestadores de hospedagem, armazenamento, login, notificações, pagamento, suporte, análise, chamadas e IA para operar o serviço.'],
        ['Denúncias e revisão', 'Se alguém insultar, ameaçar, assediar, se passar por outra pessoa, aplicar golpes ou violar privacidade, BeMama pode revisar conteúdo, contas, denúncias e registros técnicos para proteger usuários.'],
        ['Pagamento e conduta', 'Pagar ou assinar não dá permissão para insultar, usar linguagem abusiva, assediar, ameaçar, cometer fraude ou agir ilegalmente. Cada usuário é responsável por suas próprias mensagens, conteúdo e comportamento.'],
        ['Restrição ou banimento de conta', 'BeMama pode restringir ou banir uma conta por um período de tempo. Violações repetidas ou graves podem levar a banimento permanente.'],
        ['Pagamentos e reembolsos', 'Pagamentos, cancelamentos e reembolsos do Google Play ou Apple geralmente seguem as regras da loja correspondente. O suporte BeMama pode ajudar com acesso premium ou indicar onde pedir reembolso.'],
        ['Retenção e exclusão', 'BeMama não garante manter dados exportáveis por mais de 3 meses. Após a exclusão da conta, apenas registros financeiros e de transações necessários são mantidos.'],
        ['Limite médico', 'O conteúdo é apenas educação e suporte geral, não diagnóstico, prescrição, dosagem ou emergência.'],
        ['Solicitações', `Para excluir conta, exportar dados, corrigir informações, revisar privacidade ou pedir suporte, escreva para ${site.supportEmail}.`]
      ]
    }
  };
  const pack = packs[locale];
  return {
    about: policy(pack.about[0], pack.about[1], pack.sections, pack.about[2]),
    privacy: translatedPrivacyPolicy(locale) ?? policy(pack.privacy[0], pack.privacy[1], pack.sections, pack.privacy[2]),
    terms: policy(pack.terms[0], pack.terms[1], pack.sections, pack.terms[2]),
    'subscription-terms': policy(pack.subscription[0], pack.subscription[1], pack.sections, pack.subscription[2]),
    'ai-disclaimer': policy(pack.ai[0], pack.ai[1], pack.sections, pack.ai[2]),
    contact: policy(pack.contact[0], pack.contact[1], pack.sections, pack.contact[2])
  };
}
