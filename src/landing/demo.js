import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check } from "lucide-react";
import Image from "next/image";

export default function Demo() {
  const steps = [
    {
      id: "step1",
      title: "1. Remplir le formulaire",
      description:
        "Commencez par remplir un formulaire simple avec le sujet, le public cible et le style souhaité pour votre ebook.",
      features: [
        "Définissez votre sujet et vos objectifs",
        "Choisissez un modèle adapté à votre contenu",
        "Personnalisez le ton et le style d'écriture",
      ],
      image: "/placeholder.svg?height=400&width=600",
      alt: "Formulaire de création d'ebook",
    },
    {
      id: "step2",
      title: "2. Génération de l'ebook",
      description:
        "Notre IA génère automatiquement votre ebook complet avec chapitres, images et mise en page professionnelle.",
      features: [
        "Contenu généré par IA de haute qualité",
        "Mise en page automatique et professionnelle",
        "Possibilité de modifier et d'ajuster le contenu",
      ],
      image: "/placeholder.svg?height=400&width=600",
      alt: "Génération de l'ebook",
    },
    {
      id: "step3",
      title: "3. Exporter l'ebook",
      description:
        "Exportez votre ebook dans le format de votre choix et partagez-le avec votre audience ou publiez-le sur les plateformes.",
      features: [
        "Exportation en PDF, EPUB, MOBI et plus",
        "Publication directe sur les plateformes populaires",
        "Partage facile sur les réseaux sociaux",
      ],
      image: "/placeholder.svg?height=400&width=600",
      alt: "Exportation de l'ebook",
    },
  ];

  return (
    <section id="demo" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              Démonstration
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Voyez QuickTome AI en action
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Découvrez comment créer un ebook professionnel en seulement 3
              étapes simples.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-5xl">
          <Tabs defaultValue="step1" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              {steps.map((step) => (
                <TabsTrigger key={step.id} value={step.id}>
                  {step.title.split(". ")[1]}
                </TabsTrigger>
              ))}
            </TabsList>
            <div className="mt-6 overflow-hidden rounded-xl border">
              {steps.map((step) => (
                <TabsContent key={step.id} value={step.id} className="p-0">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="flex flex-col justify-center p-6 md:p-10">
                      <h3 className="text-2xl font-bold">{step.title}</h3>
                      <p className="mt-2 text-muted-foreground">
                        {step.description}
                      </p>
                      <ul className="mt-4 space-y-2">
                        {step.features.map((feature, index) => (
                          <li key={index} className="flex items-center">
                            <Check className="mr-2 h-4 w-4 text-primary" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="border-t md:border-l md:border-t-0">
                      <Image
                        src={step.image || "/placeholder.svg"}
                        width={600}
                        height={400}
                        alt={step.alt}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
