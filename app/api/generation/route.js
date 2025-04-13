import { generateContent } from "@/lib/actions/action-generate";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { titre, description, theme, longueur, cible } = await req.json();
    // logger.debug("Received data:", {
    //   titre,
    //   description,
    //   theme,
    //   longueur,
    //   cible,
    // });

    if (!titre || !description || !theme || !longueur || !cible) {
      return NextResponse.json(
        {
          error: "Tous les champs sont obligatoires.",
        },
        { status: 400 }
      );
    }

    const prompt = `
    Je voudrais que tu me génères un ebook en format markdown avec les caractéristiques suivantes :

Titre de l'ebook : ${titre}
Description : ${description}
Public cible : ${cible}
Longueur : ${longueur} (court/médium/long)
Thème : ${theme}

L'ebook doit suivre EXACTEMENT cette structure (c'est très important pour mon système de parsing) :

Commence par le titre principal au format # ${titre}
Continue avec une ## Introduction qui présente brièvement le sujet et annonce le contenu de l'ebook
Organise le contenu en chapitres numérotés avec EXACTEMENT ce format : ## Chapitre 1: [Titre du chapitre], ## Chapitre 2: [Titre du chapitre], etc.
Termine avec une ## Conclusion qui résume les points principaux

Directives de longueur selon la variable ${longueur} :

Si "court" : 3 chapitres, environ 1500 mots au total
Si "médium" : 4-5 chapitres, environ 3000 mots au total
Si "long" : 6-7 chapitres, environ 5000 mots au total

Règles importantes à respecter :

UTILISE EXCLUSIVEMENT les niveaux de titres indiqués pour la structure principale
Assure-toi que chaque chapitre commence EXACTEMENT par "## Chapitre [numéro]:"
N'ajoute PAS de sections supplémentaires comme "Références" ou "Annexes"
Ne mets PAS de table des matières
Chaque chapitre doit contenir du contenu substantiel adapté au ${cible}
Inclus des listes à puces ou numérotées quand c'est pertinent
Adapte le style et le vocabulaire au ${cible} spécifié

Génère maintenant l'ebook complet basé sur ces spécifications, en respectant scrupuleusement la structure et le format indiqués.
    `;

    // Simulate ebook generation
    const markdownContent = await generateContent(prompt);

    // logger.debug("Generated content:", content);
    // const response = await generateContent(prompt);

    return NextResponse.json(
      {
        message: "Ebook generated successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: "Une erreur est survenue lors de la génération de l'ebook.",
      },
      { status: 500 }
    );
  }
}
