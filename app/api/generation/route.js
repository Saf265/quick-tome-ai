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

    if (!titre || !description || !theme || !longueur) {
      return NextResponse.json(
        {
          error: "Tous les champs sont obligatoires.",
        },
        { status: 400 }
      );
    }

    const prompt = `
      Génère un ebook complet en Markdown avec le titre "${titre}".

      Informations sur l'ebook:
      - Description: ${description}
      - Public cible: ${cible}
      - Nombre de pages approximatif: ${longueur}
      - Ton et style: ${theme}

      Instructions de formatage Markdown:
      - Utilise # pour le titre principal
      - Utilise ## pour les titres de chapitres
      - Utilise ### pour les sous-titres de sections
      - Organise le texte en paragraphes bien structurés
      - Utilise des listes avec * ou - quand c'est approprié
      - Utilise **texte** pour mettre en gras les points importants
      - Utilise > pour les citations ou points importants
      - Ajoute une table des matières au début
      - Utilise --- pour séparer les grandes sections
      - N'inclus pas d'images, concentre-toi uniquement sur le texte

      Format de sortie:
      Renvoie l'ebook directement en format Markdown, bien structuré et prêt à être converti en PDF.
      Commence par le titre principal, suivi d'une table des matières, puis le contenu.
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
