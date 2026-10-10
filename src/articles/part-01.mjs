// Explicit website snapshot of the completed first editorial delivery.
// Review history and source provenance are archived outside the website.
import articles from './part-01/articles.json' with { type: 'json' };
import categories from './part-01/categories.json' with { type: 'json' };

export const part1Articles = structuredClone(articles);
export const part1Categories = structuredClone(categories);
