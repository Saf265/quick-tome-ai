import { Check, Cpu, Sparkles, Zap } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Sparkles className="h-10 w-10 text-primary" />,
      title: "Génération de contenu IA",
      description:
        "Créez du contenu de qualité à partir de simples prompts ou améliorez vos textes existants.",
    },
    // {
    //   icon: <BookOpen className="h-10 w-10 text-primary" />,
    //   title: "Modèles professionnels",
    //   description:
    //     "Accédez à des dizaines de modèles conçus par des designers professionnels.",
    // },
    {
      icon: <Cpu className="h-10 w-10 text-primary" />,
      title: "Édition intuitive",
      description:
        "Interface formulaire simple pour personnaliser chaque aspect de votre ebook.",
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Exportation format PDF",
      description: "Exportez en PDF en un clic.",
    },
    {
      icon: <Check className="h-10 w-10 text-primary" />,
      title: "SEO optimisé",
      description:
        "Optimisez votre contenu pour les moteurs de recherche et augmentez sa visibilité.",
    },
    // {
    //   icon: <ArrowRight className="h-10 w-10 text-primary" />,
    //   title: "Publication directe",
    //   description:
    //     "Publiez directement sur Amazon KDP, Apple Books et d'autres plateformes.",
    // },
  ];

  return (
    <section id="fonctionnalites" className="w-full py-8 md:py-16 lg:py-24 ">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Explorez toutes nos fonctionnalités
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-base lg:text-base/relaxed text-sm">
              Découvrez comment notre plateforme peut vous aider à atteindre vos
              objectifs.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-center text-zinc-500 dark:text-zinc-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
