export const plansItems = [
  {
    link:
      process.env.NODE_ENV === "development"
        ? "https://buy.stripe.com/test_4gw5mPdmLf0u3aEeUU"
        : "",
    priceId:
      process.env.NODE_ENV === "development"
        ? "price_1RD1m8E0fGNvUMFWzfozqhZO"
        : "",
    price: 9.99,
    duration: "/mois",
    name: "Starter",
    highlighted: false,
    features: [
      "Génération de 10 ebooks par mois",
      "Accès à toutes les fonctionnalités",
      "Support non prioritaire",
      "Export de livres au format PDF",
    ],
    role: "STARTER",
  },
  {
    link:
      process.env.NODE_ENV === "development"
        ? "https://buy.stripe.com/test_00g8z196v3hM6mQ4gi"
        : "",
    priceId:
      process.env.NODE_ENV === "development"
        ? "price_1RD1vnE0fGNvUMFWvCuuROaL"
        : "",
    price: 83.99,
    features: [
      "Génération de 10 ebooks par mois",
      "Accès à toutes les fonctionnalités",
      "Support non prioritaire",
      "Export de livres au format PDF",
    ],
    duration: "/an",
    name: "Starter",
    highlighted: false,
    role: "STARTER",
  },
  {
    link:
      process.env.NODE_ENV === "development"
        ? "https://buy.stripe.com/test_00g6qTgyX8C68uYdQR"
        : "",
    priceId:
      process.env.NODE_ENV === "development"
        ? "price_1RD1mdE0fGNvUMFWL28WkZPQ"
        : "",
    price: 19.99,
    features: [
      "Génération d'ebook illimitée",
      "Accès à toutes les fonctionnalités",
      "Support prioritaire",
      "Export de livres au format PDF",
    ],
    duration: "/mois",
    name: "PRO PLAN",
    highlighted: true,
    role: "PRO",
  },
  {
    link:
      process.env.NODE_ENV === "development"
        ? "https://buy.stripe.com/test_aEUeXp6Yn19EaD6dQT"
        : "",
    priceId:
      process.env.NODE_ENV === "development"
        ? "price_1RD1uqE0fGNvUMFWAfPTHBT6"
        : "",
    price: 179.99,
    features: [
      "Génération d'ebook illimitée",
      "Accès à toutes les fonctionnalités",
      "Support prioritaire",
      "Export de livres au format PDF",
    ],
    duration: "/an",
    name: "PRO PLAN",
    highlighted: true,
    role: "PRO",
  },
];
