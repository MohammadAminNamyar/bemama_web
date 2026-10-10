import fs from 'node:fs';
import { articles, categories } from '../src/content-hub.mjs';
import { searchMetadata, metadataLength } from '../src/seo-metadata.mjs';
const langs=['en','fa','ar','fr','tr','es','pt'];
const issues=[];
const checked=[];
for(const article of [...articles,...categories]) for(const lang of langs){
  const copy=article.i18n?.[lang]??{title:article.title[lang],description:article.blurb[lang]};
  try { checked.push({route:lang+'/'+article.slug,...searchMetadata({lang,slug:article.slug,title:`${copy.title} | BeMama`,description:copy.description})}); }
  catch(error){issues.push({lang,slug:article.slug,title:copy.title,description:copy.description,titleLength:metadataLength(copy.title),descriptionLength:metadataLength(copy.description),message:error.message});}
}
const duplicates=key=>{
  const groups=new Map();
  for(const row of checked)groups.set(row[key],[...(groups.get(row[key])??[]),row.route]);
  return [...groups].filter(([,routes])=>routes.length>1).map(([value,routes])=>({value,routes}));
};
const duplicateTitles=duplicates('title'),duplicateDescriptions=duplicates('description');
const report={checkedAt:new Date().toISOString(),articles:articles.length,categories:categories.length,issues,duplicateTitles,duplicateDescriptions};
const reportFlag=process.argv.indexOf('--report');
if(reportFlag>=0){
  const destination=process.argv[reportFlag+1];
  if(!destination)throw new Error('Provide a path after --report');
  fs.writeFileSync(destination,JSON.stringify(report,null,2)+'\n');
}
console.log(JSON.stringify({articles:articles.length,categories:categories.length,issues:issues.length,duplicateTitles,duplicateDescriptions,byLanguage:Object.fromEntries(langs.map(l=>[l,issues.filter(i=>i.lang===l).length]))}));
if(issues.length||duplicateTitles.length||duplicateDescriptions.length)process.exitCode=1;
