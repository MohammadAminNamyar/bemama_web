export const site = {
  origin: 'https://bemamas.com',
  name: 'BeMama',
  description:
    'BeMama is a companion for planning, pregnancy, baby care, and child growth with Daily Journey, Q&A, community, and clearly labeled AI-assisted support.',
  supportEmail: 'support@bemamas.com'
};

export const navigation = [
  { href: '/', label: 'Home' },
  { href: '/about/', label: 'About' },
  { href: '/privacy/', label: 'Privacy' },
  { href: '/terms/', label: 'Terms' },
  { href: '/ai-disclaimer/', label: 'AI safety' },
  { href: '/contact/', label: 'Contact' }
];

export const pages = [
  {
    slug: '',
    title: 'BeMama',
    description: site.description,
    kind: 'home'
  },
  {
    slug: 'about',
    title: 'About BeMama',
    description:
      'Learn what BeMama is, who it is for, and the limits of care and AI-assisted support.',
    body: [
      {
        type: 'notice',
        text:
          'BeMama is not a medical diagnosis tool and does not replace care from qualified clinicians, emergency services, or local health systems.'
      },
      {
        heading: 'Who BeMama is',
        paragraphs: [
          'BeMama is a digital companion for people navigating planning, pregnancy, baby care, and child growth. It is designed to organize care-related routines, community support, Q&A, and helpful educational content in one calm place.',
          'The product is built for supportive everyday use. It can help you find your Daily Journey, ask questions, join community spaces, and keep track of practical parenting moments.'
        ]
      },
      {
        heading: 'Mission',
        paragraphs: [
          'Our mission is to make motherhood and parenting support feel more personal, less fragmented, and easier to access across different stages of family life.'
        ]
      },
      {
        heading: 'What BeMama is not',
        paragraphs: [
          'BeMama does not provide diagnosis, prescriptions, medication dosing, emergency care, or a replacement for professional medical judgment. For urgent symptoms or safety concerns, contact qualified local care or emergency services.'
        ]
      }
    ]
  },
  {
    slug: 'privacy',
    title: 'Privacy Policy',
    description:
      'Plain-language overview of how BeMama collects, uses, retains, and protects account, care journey, Q&A, community, chat, device, and AI-assisted support data.',
    updated: 'May 30, 2026',
    body: [
      {
        type: 'notice',
        text:
          'This policy is provided in English as the official public version until reviewed translations are available. It is not a claim of GDPR, PIPEDA, HIPAA, or other legal compliance.'
      },
      {
        heading: 'Information we collect',
        list: [
          'Account and profile information, such as name, email or mobile contact, username, profile details, language, country, and province.',
          'Daily Journey information you provide to personalize your current planning, pregnancy, baby, or child growth stage.',
          'Q&A, community, chat, consultation, report, and support content you choose to send or upload.',
          'Device, session, push notification, and security information used to keep your account signed in and protected.',
          'Operational records such as audit events, moderation records, message delivery records, and service diagnostics.',
          'AI-assisted support metadata and limited audit records when AI features are enabled.'
        ]
      },
      {
        heading: 'How we use information',
        list: [
          'To create and maintain your account.',
          'To personalize Daily Journey and other app surfaces from information you provide.',
          'To show Q&A, community, chat, support, and moderation features.',
          'To label and operate AI-assisted support where enabled.',
          'To protect accounts, prevent abuse, troubleshoot issues, and support safe operations.',
          'To respond to support, deletion, privacy, or export requests.'
        ]
      },
      {
        heading: 'AI-assisted support data',
        paragraphs: [
          'Some BeMama answers or consultation messages may be AI-assisted when the feature is enabled. AI-assisted content is intended for general education and support only. AI may be incorrect or incomplete, and it is not a diagnosis, prescription, or emergency service.',
          'Operational AI audit records may store limited redacted input, output, metadata, refusal reasons, or error information so administrators can review safety and quality.'
        ]
      },
      {
        heading: 'Retention basics',
        paragraphs: [
          'BeMama keeps account and care data while it is needed to provide the service, support safety, resolve disputes, and operate the platform. Some technical and audit records may be retained for shorter configured periods and may be redacted over time.',
          'User messages, Q&A, community content, and uploaded files are not hard-deleted automatically by default unless a configured deletion process or approved account deletion request applies.'
        ]
      },
      {
        heading: 'Deletion and export requests',
        paragraphs: [
          `To request account deletion, data export, or a privacy review, contact ${site.supportEmail}. In-app account deletion requests may also be available from Settings. Some audit or safety records may be retained where needed for platform integrity or legal/safety reasons.`
        ]
      },
      {
        heading: 'Contact',
        paragraphs: [
          `For privacy questions, deletion/export requests, or support, email ${site.supportEmail}.`
        ]
      }
    ]
  },
  {
    slug: 'terms',
    title: 'Terms of Use',
    description:
      'Terms for using BeMama, including user responsibilities, community rules, AI-assisted content, and medical disclaimers.',
    updated: 'May 30, 2026',
    body: [
      {
        type: 'notice',
        text:
          'These terms are a practical product draft and should be reviewed by qualified legal counsel before a paid or broad public launch.'
      },
      {
        heading: 'Using BeMama',
        paragraphs: [
          'You may use BeMama to access planning, pregnancy, baby care, child growth, Q&A, community, chat, and support features that are available to your account and region.',
          'You are responsible for keeping your account information accurate, protecting your login/session access, and using the app lawfully and respectfully.'
        ]
      },
      {
        heading: 'Not medical advice',
        paragraphs: [
          'BeMama content is for general education and support. It is not medical advice, diagnosis, prescription, medication dosing, emergency care, or a replacement for qualified clinicians. For urgent symptoms or safety concerns, seek qualified local care or emergency services.'
        ]
      },
      {
        heading: 'Community rules',
        list: [
          'Be respectful and do not harass, threaten, exploit, or impersonate others.',
          'Do not post illegal, abusive, hateful, explicit, or dangerous content.',
          'Do not share another person\'s private information without permission.',
          'Do not use BeMama to provide unsafe medical instructions or emergency guidance.'
        ]
      },
      {
        heading: 'AI-assisted content',
        paragraphs: [
          'Some answers or consultation messages may be AI-assisted and may be labeled when metadata is available. AI can be wrong or incomplete. Do not rely on AI-assisted content for diagnosis, prescriptions, medication dosage, emergency decisions, or urgent safety concerns.'
        ]
      },
      {
        heading: 'Account suspension or removal',
        paragraphs: [
          'BeMama may suspend, restrict, remove, or moderate accounts and content to protect users, comply with law, address abuse, or operate the service safely.'
        ]
      },
      {
        heading: 'Intellectual property',
        paragraphs: [
          'BeMama owns the app, website, brand, and platform materials. You keep responsibility for content you submit, and you grant BeMama permission to process and display it as needed to provide the service.'
        ]
      },
      {
        heading: 'Limitation of liability',
        paragraphs: [
          'BeMama is provided as available. To the maximum extent permitted by applicable law, BeMama is not liable for indirect, incidental, consequential, or special damages. This section is a placeholder and requires legal review.'
        ]
      },
      {
        heading: 'Contact',
        paragraphs: [`Questions about these terms can be sent to ${site.supportEmail}.`]
      }
    ]
  },
  {
    slug: 'subscription-terms',
    title: 'Subscription Terms',
    description:
      'Subscription terms for future paid BeMama plans, app store billing, cancellation, refunds, trials, and price changes.',
    updated: 'May 30, 2026',
    body: [
      {
        type: 'notice',
        text:
          'BeMama may not offer paid plans yet. This page is prepared for future subscription review and must be finalized before paid launch.'
      },
      {
        heading: 'Free and premium access',
        paragraphs: [
          'BeMama may offer free features and optional premium features. The available feature set, price, trial, and billing provider may vary by platform, region, or promotion.'
        ]
      },
      {
        heading: 'Billing',
        paragraphs: [
          'If subscriptions are offered through an app store or payment provider, billing is handled by that store or provider. The purchase screen should show price, renewal period, trial terms, and cancellation details before purchase.'
        ]
      },
      {
        heading: 'Auto-renewal and cancellation',
        paragraphs: [
          'Subscriptions may renew automatically unless cancelled before the renewal date. Cancellation should be managed through the app store or payment provider used for purchase unless BeMama states otherwise.'
        ]
      },
      {
        heading: 'Refunds',
        paragraphs: [
          'Refunds are generally handled by the app store or payment provider according to their policies, unless BeMama provides a separate written refund process.'
        ]
      },
      {
        heading: 'Trials, founding plans, and price changes',
        paragraphs: [
          'If BeMama offers a trial, founding plan, or promotional plan, the offer terms should be shown before signup. BeMama may change prices or features with notice where required by the billing provider or applicable law.'
        ]
      },
      {
        heading: 'Contact',
        paragraphs: [`For subscription questions, email ${site.supportEmail}.`]
      }
    ]
  },
  {
    slug: 'ai-disclaimer',
    title: 'AI Disclaimer and Safety',
    description:
      'How BeMama uses AI-assisted content, what AI can and cannot do, and when to seek qualified care.',
    updated: 'May 30, 2026',
    body: [
      {
        type: 'notice',
        text:
          'AI-assisted content can be wrong, incomplete, or not appropriate for your situation. Use qualified local care for medical, urgent, emergency, or safety concerns.'
      },
      {
        heading: 'How AI may be used',
        paragraphs: [
          'BeMama may use AI-assisted tools to draft or support Q&A answers and consultation-style messages when the feature is enabled. AI-generated or AI-assisted answers are labeled when metadata is available.'
        ]
      },
      {
        heading: 'What AI is for',
        list: [
          'General education and supportive explanation.',
          'Helping organize questions or next steps for a clinician or support team.',
          'Non-emergency parenting and motherhood support within BeMama scope.'
        ]
      },
      {
        heading: 'What AI is not for',
        list: [
          'Medical diagnosis, prescriptions, medication dosage, or treatment decisions.',
          'Emergency care, urgent triage, or crisis response.',
          'Replacing a qualified clinician, midwife, nurse, pharmacist, mental health professional, or local emergency service.'
        ]
      },
      {
        heading: 'Safety guidance',
        paragraphs: [
          'For severe pain, heavy bleeding, breathing difficulty, fainting, signs of infection, concerns about baby movement, self-harm thoughts, abuse, or any urgent symptom, seek qualified local care or emergency services immediately.'
        ]
      },
      {
        heading: 'Contact',
        paragraphs: [`To report an unsafe AI answer or request review, email ${site.supportEmail}.`]
      }
    ]
  },
  {
    slug: 'contact',
    title: 'Contact and Support',
    description:
      'Contact BeMama for support, privacy requests, deletion/export requests, and safety review.',
    body: [
      {
        heading: 'Support',
        paragraphs: [
          `Email ${site.supportEmail} for product support, account help, deletion/export requests, privacy questions, or review of AI-assisted content.`
        ]
      },
      {
        heading: 'Privacy requests',
        paragraphs: [
          'For account deletion, data export, correction, or privacy review, include the email or account identifier associated with your BeMama account. Do not send urgent medical information by email.'
        ]
      },
      {
        heading: 'Urgent care',
        paragraphs: [
          'BeMama support is not emergency support. For urgent symptoms, medical concerns, self-harm concerns, or immediate safety issues, contact qualified local care or emergency services.'
        ]
      }
    ]
  }
];

