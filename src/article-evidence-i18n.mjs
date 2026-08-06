import {
  evidenceAssignmentForArticle,
  evidenceProfiles
} from './article-evidence-profiles.mjs';
import { evidenceTranslations } from './article-evidence-translations.mjs';

export const evidenceUi = {
  en: {
    kicker: 'Evidence-informed guidance',
    recommendationTitle: 'What trusted health organizations recommend',
    bemamaTitle: 'How BeMama can help',
    safetyTitle: 'When to seek help',
    sourcesTitle: 'Sources and further reading',
    sourceNote: 'Links lead directly to guidance from the organizations named above.'
  },
  fa: {
    kicker: 'راهنمای مبتنی بر شواهد',
    recommendationTitle: 'توصیه سازمان‌های معتبر سلامت',
    bemamaTitle: 'BeMama چگونه می‌تواند کمک کند',
    safetyTitle: 'چه زمانی کمک پزشکی بگیرید',
    sourcesTitle: 'منابع و مطالعه بیشتر',
    sourceNote: 'این پیوندها مستقیماً به راهنمای سازمان‌های نام‌برده هدایت می‌شوند.'
  },
  ar: {
    kicker: 'إرشادات مستندة إلى الأدلة',
    recommendationTitle: 'توصيات المؤسسات الصحية الموثوقة',
    bemamaTitle: 'كيف يمكن أن يساعدك BeMama',
    safetyTitle: 'متى يجب طلب المساعدة',
    sourcesTitle: 'المصادر وقراءات إضافية',
    sourceNote: 'تؤدي هذه الروابط مباشرةً إلى إرشادات المؤسسات المذكورة أعلاه.'
  },
  fr: {
    kicker: 'Conseils fondés sur les données probantes',
    recommendationTitle: 'Ce que recommandent les organismes de santé reconnus',
    bemamaTitle: 'Comment BeMama peut vous aider',
    safetyTitle: 'Quand demander de l’aide',
    sourcesTitle: 'Sources et lectures complémentaires',
    sourceNote: 'Ces liens mènent directement aux recommandations des organismes mentionnés ci-dessus.'
  },
  tr: {
    kicker: 'Kanıta dayalı rehberlik',
    recommendationTitle: 'Güvenilir sağlık kuruluşlarının önerileri',
    bemamaTitle: 'BeMama nasıl yardımcı olabilir?',
    safetyTitle: 'Ne zaman yardım alınmalı?',
    sourcesTitle: 'Kaynaklar ve ek okumalar',
    sourceNote: 'Bağlantılar, yukarıda adı geçen kuruluşların rehberlerine doğrudan yönlendirir.'
  },
  es: {
    kicker: 'Orientación basada en evidencia',
    recommendationTitle: 'Qué recomiendan las organizaciones de salud reconocidas',
    bemamaTitle: 'Cómo puede ayudarte BeMama',
    safetyTitle: 'Cuándo buscar ayuda',
    sourcesTitle: 'Fuentes y lecturas adicionales',
    sourceNote: 'Los enlaces llevan directamente a las recomendaciones de las organizaciones mencionadas.'
  },
  pt: {
    kicker: 'Orientação baseada em evidências',
    recommendationTitle: 'O que recomendam as organizações de saúde reconhecidas',
    bemamaTitle: 'Como a BeMama pode ajudar',
    safetyTitle: 'Quando procurar ajuda',
    sourcesTitle: 'Fontes e leituras adicionais',
    sourceNote: 'Os links levam diretamente às orientações das organizações mencionadas acima.'
  }
};

const localeTags = {
  en: 'en-CA',
  fa: 'fa-IR',
  ar: 'ar',
  fr: 'fr-CA',
  tr: 'tr-TR',
  es: 'es',
  pt: 'pt-BR'
};

export function localizedProfileEvidence(article, languageCode, updatedIso) {
  const profileId = evidenceAssignmentForArticle(article.slug);
  const sourceProfile = profileId ? evidenceProfiles[profileId] : null;
  const translation = profileId ? evidenceTranslations[languageCode]?.[profileId] : null;
  if (!sourceProfile || !translation) return null;

  return {
    updated: formatEvidenceDate(languageCode, updatedIso),
    updatedIso,
    guidance: [...translation.guidance],
    bemama: translation.bemama,
    safety: translation.safety,
    sources: sourceProfile.sources.map((source) => ({ ...source })),
    labels: evidenceUi[languageCode]
  };
}

export function labelsForEvidence(languageCode) {
  return evidenceUi[languageCode] ?? evidenceUi.en;
}

function formatEvidenceDate(languageCode, updatedIso) {
  return new Intl.DateTimeFormat(localeTags[languageCode] ?? localeTags.en, {
    calendar: 'gregory',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC'
  }).format(new Date(`${updatedIso}T12:00:00Z`));
}
