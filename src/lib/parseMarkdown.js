// lib/parseMarkdown.js
export function parseMarkdown(md) {
  if (!md) return {};
  
  const sections = {};
  
  // Extraction du titre
  const titleMatch = md.match(/^# (.+)$/m);
  if (titleMatch) {
    sections.title = titleMatch[1].trim();
  }
  
  // Extraction de l'introduction
  const introMatch = md.match(/## Introduction\n([\s\S]+?)(?=\n## (Chapitre|Conclusion))/);
  if (introMatch) {
    sections.introduction = introMatch[1].trim();
  }
  
  // Extraction des chapitres
  const chapterRegex = /## Chapitre (\d+): (.+?)\n([\s\S]+?)(?=\n## (Chapitre \d+|Conclusion))/g;
  sections.chapters = [];
  let chapterMatch;
  
  while ((chapterMatch = chapterRegex.exec(md)) !== null) {
    sections.chapters.push({
      number: chapterMatch[1],
      title: chapterMatch[2].trim(),
      content: chapterMatch[3].trim()
    });
  }
  
  // Extraction de la conclusion
  const conclusionMatch = md.match(/## Conclusion\n([\s\S]+?)(?=\n*$)/);
  if (conclusionMatch) {
    sections.conclusion = conclusionMatch[1].trim();
  }
  
  return sections;
}