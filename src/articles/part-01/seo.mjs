import en from './seo-en.json' with { type: 'json' };
import fa from './seo-fa.json' with { type: 'json' };
import ar from './seo-ar.json' with { type: 'json' };
import fr from './seo-fr.json' with { type: 'json' };
import tr from './seo-tr.json' with { type: 'json' };
import es from './seo-es.json' with { type: 'json' };
import pt from './seo-pt.json' with { type: 'json' };

// Search snippets are edited independently; full reader summaries stay intact.
export const part1SearchOverrides = Object.fromEntries(
  Object.entries({ en, fa, ar, fr, tr, es, pt }).flatMap(([lang, entries]) =>
    Object.entries(entries).map(([slug, metadata]) => [`${lang}/${slug}`, metadata]))
);
