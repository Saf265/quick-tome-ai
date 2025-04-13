// "use client";

// // import { useMarkdownStore } from "@/store/markdown-store";
// import { pdf } from "@react-pdf/renderer";
// // import { marked } from "marked";
// import MyDocument from "./result";
"use client"
// pages/ebook.js
import { useState, useEffect } from 'react';
import { parseMarkdown } from '@/lib/parseMarkdown';

const markdownExample =
  "# L'Art du Marketing Digital\n" +
    '\n' +
    '## Introduction\n' +
    'Dans cette introduction, nous allons aborder les bases du marketing digital et présenter brièvement les concepts clés qui seront développés dans cet ebook. Nous explorerons ensemble les différentes stratégies et outils essentiels pour réussir dans le monde du marketing digital.\n' +
    '\n' +
    '## Chapitre 1: Les Fondements du Marketing Digital\n' +
    "Dans ce premier chapitre, nous allons définir ce qu'est le marketing digital et pourquoi il est essentiel dans le monde moderne des affaires. Nous aborderons les différences avec le marketing traditionnel et les avantages qu'offre le marketing digital aux entreprises.\n" +
    '\n' +
    "## Chapitre 2: La Création d'une Stratégie Digitale Performante\n" +
    "Ce chapitre se concentrera sur l'importance de définir une stratégie digitale claire et efficace. Nous explorerons les éléments clés à prendre en compte lors de la création d'une stratégie marketing digital, en mettant l'accent sur la segmentation du public cible, le choix des canaux de communication et la définition des objectifs.\n" +
    '\n' +
    '## Chapitre 3: Le Content Marketing et le SEO\n' +
    "Le content marketing et le SEO (Search Engine Optimization) sont des piliers du marketing digital. Dans ce chapitre, nous aborderons l'importance de créer un contenu de qualité pour attirer et engager son audience, ainsi que les meilleures pratiques en matière de référencement naturel pour améliorer la visibilité d'un site web.\n" +
    '\n' +
    '## Chapitre 4: La Publicité en Ligne et le Remarketing\n' +
    "La publicité en ligne offre des opportunités uniques pour cibler des audiences spécifiques et mesurer l'impact de ses campagnes. Nous verrons dans ce chapitre comment créer des campagnes publicitaires efficaces sur les différents canaux digitaux, ainsi que l'utilisation du remarketing pour toucher les prospects chauds.\n" +
    '\n' +
    "## Chapitre 5: L'Email Marketing et l'Automation\n" +
    "L'email marketing reste un outil puissant pour établir des relations durables avec sa clientèle. Nous étudierons dans ce chapitre comment concevoir des campagnes d'email marketing efficaces, automatiser les processus et mesurer les performances de ses campagnes.\n" +
    '\n' +
    "## Chapitre 6: L'Analyse des Données et le Reporting\n" +
    "L'analyse des données est essentielle pour mesurer l'efficacité de ses actions marketing et prendre des décisions éclairées. Nous aborderons dans ce chapitre les principaux outils d'analyse disponibles, les KPIs à suivre et comment générer des rapports pertinents pour évaluer ses performances.\n" +
    '\n' +
    '## Conclusion\n' +
    "En conclusion, cet ebook a couvert les principaux aspects du marketing digital, en fournissant aux débutants une base solide pour démarrer leur parcours dans ce domaine en constante évolution. En mettant en pratique les conseils et stratégies présentés, vous serez en mesure de développer des campagnes digitales performantes et d'atteindre vos objectifs marketing avec succès.\n" +
    '\n' +
    "Cet ebook a pour but d'accompagner les personnes qui font du marketing digital, en leur fournissant des informations claires et pratiques pour exceller dans ce domaine compétitif et en constante évolution. Bonne lecture et bonne pratique du marketing digital !"
    

export default function EbookPage() {
  const [ebookData, setEbookData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchEbook() {
      // Ici vous récupérez le markdown depuis votre API ou autre source
      // const response = await fetch('/api/generate-ebook');
      // const markdownContent = await response.text();
      
      // Parsing du markdown
      const parsedData = parseMarkdown(markdownExample);
      setEbookData(parsedData);
      setIsLoading(false);
    }
    
    fetchEbook();
  }, []);

  if (isLoading) return <div>Chargement...</div>;
  if (!ebookData) return <div>Aucune donnée disponible</div>;

  return (
    <div className="flex flex-col gap-20">
      <h1>{ebookData.title}</h1>
      
      <section>
        <h2>Introduction</h2>
        <p>{ebookData.introduction}</p>
      </section>
      
      {ebookData.chapters.map(chapter => (
        <section key={chapter.number}>
        <h2>Chapitre {chapter.number}: {chapter.title}</h2>
          <p>{chapter.content}</p>
        </section>
      ))}
      
      <section>
        <h2>Conclusion</h2>
        <p>{ebookData.conclusion}</p>
      </section>
    </div>
  );
}