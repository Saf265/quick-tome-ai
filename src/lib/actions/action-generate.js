"use server";

import OpenAI from "openai";
import { logger } from "../logger";

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY || "",
  defaultHeaders: {
    "HTTP-Referer": "http://localhost:3000", // Optional. Site URL for rankings on openrouter.ai.
    "X-Title": "QuickTome - AI", // Optional. Site title for rankings on openrouter.ai.
  },
});

export const generateContent = async (prompt) => {
  try {
    if (!process.env.OPENROUTER_API_KEY) {
      logger.error(
        "OPENROUTER_API_KEY is not defined in environment variables"
      );
      throw new Error("OpenRouter API key is missing");
    }

    const completion = await openai.chat.completions.create({
      model: "openai/gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `
          Vous êtes un expert en création de contenu. 
          Répondez de manière détaillée et structurée en Markdown.
          Si la demande est vague, demandez des précisions.
          `,
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.7, // Ajoutez pour plus de créativité
      max_tokens: 1000, // Forcez une réponse plus longue
    });

    logger.debug("Received response from OpenRouter");

    logger.debug("Completion:", completion.choices[0].message);

    return completion.choices[0].message.content;
  } catch (error) {
    logger.error("Error generating content:", error);
    throw new Error("Failed to generate content");
  }
};
