import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const fromFlag=process.argv.indexOf('--from');
if(fromFlag<0||!process.argv[fromFlag+1])throw new Error('Use --from <external editorial directory>');
const editorial = path.resolve(process.argv[fromFlag+1]);
const delivery = path.join(editorial, 'english-adaptations/delivery/part-01');
const target = path.join(root, 'src/articles/part-01');
const read = file => JSON.parse(fs.readFileSync(file, 'utf8'));
const sha = bytes => crypto.createHash('sha256').update(bytes).digest('hex');
const audit = read(path.join(delivery, 'PREPARATION-AUDIT.json'));
const manifest = read(path.join(delivery, 'manifest.json'));
const articleBytes = fs.readFileSync(path.join(delivery, 'article-drafts.json'));
const batch = JSON.parse(articleBytes);
const categories = read(path.join(delivery, 'category-drafts.json')).categories;
assert(audit.preparationComplete && audit.issues.length === 0);
assert.equal(batch.length, 663);
assert.equal(new Set(batch.map(a => a.slug)).size, 663);
assert.equal(manifest.articles.length, 663);
assert.equal(manifest.articlesMissingPreparation, 0);
assert(batch.every(a => ['en','fa','ar','fr','tr','es','pt'].every(l => a.i18n[l]?.evidence)));
const { articles: current } = await import('../src/content-hub.mjs');
const batchSlugs = new Set(batch.map(a => a.slug));
const baseline = current.filter(a => !batchSlugs.has(a.slug));
const publicDir = path.join(root, 'public/assets/content/part-01');
const stagedDir = path.join(delivery, 'assets/content/part-01');
const images = fs.readdirSync(stagedDir).filter(f => f.endsWith('.webp')).sort();
assert.equal(images.length, 3320);
fs.mkdirSync(target, { recursive: true });
fs.mkdirSync(publicDir, { recursive: true });
for (const file of images) {
  const bytes = fs.readFileSync(path.join(stagedDir, file));
  const destination = path.join(publicDir, file);
  if (fs.existsSync(destination)) assert.equal(sha(fs.readFileSync(destination)), sha(bytes), `Existing asset differs: ${file}`);
  else fs.writeFileSync(destination, bytes, { flag: 'wx' });
}
fs.writeFileSync(path.join(target, 'articles.json'), articleBytes);
fs.writeFileSync(path.join(target, 'categories.json'), JSON.stringify(categories, null, 2)+'\n');
for (const lang of ['en','fa','ar','fr','tr','es','pt']) {
  const file = path.join(target, `seo-${lang}.json`);
  if (!fs.existsSync(file)) fs.writeFileSync(file, '{}\n', { flag: 'wx' });
}
const report = { importedAt: new Date().toISOString(), authorization: 'User requested: Please now add them to the bemama web',
  articles: batch.length, localizedArticles: batch.length*7, assets: images.length,
  sourceArticleSha256: sha(articleBytes), sourcePreparationAuditAt: audit.checkedAt,
  existingArticles: baseline.map(a => ({ slug: a.slug, sha256: sha(JSON.stringify(a)) })),
  routes: manifest.articles.map(a => ({ sourceId:a.sourceId, slug:a.slug })),
  copiedAssetHashes: Object.fromEntries(images.map(f => [f,sha(fs.readFileSync(path.join(publicDir,f)))])),
  externalDeployment: false, humanReviews: audit.humanApprovals };
fs.writeFileSync(path.join(editorial, 'niniplus-research/part1-website-import.json'), JSON.stringify(report,null,2)+'\n');
fs.writeFileSync(path.join(target,'manifest.json'),JSON.stringify({part:1,articles:663,languages:['en','fa','ar','fr','tr','es','pt'],assetCount:images.length,assetsSha256:sha(JSON.stringify(report.copiedAssetHashes)),articleSnapshotSha256:sha(articleBytes)},null,2)+'\n');
console.log(JSON.stringify({ importedArticles:batch.length, locales:7, assets:images.length, existingArticlesPreserved:baseline.length, externalDeployment:false }));
