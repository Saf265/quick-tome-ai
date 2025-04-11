import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqItems = [
    {
      question: "Comment fonctionne QuickTome AI ?",
      answer:
        "QuickTome AI utilise une intelligence artificielle pour générer automatiquement des e-books à partir de quelques indications fournies par l’utilisateur.",
    },
    {
      question:
        "Puis-je utiliser les e-books générés à des fins commerciales ?",
      answer:
        "Oui, vous êtes libre d’utiliser les e-books générés à des fins commerciales, sauf mention contraire sur certains modèles ou contenus spécifiques.",
    },
    {
      question: "Quels formats d’export sont disponibles ?",
      answer: "Les e-books peuvent être exportés en format PDF",
    },
    {
      question: "Mes données sont-elles sécurisées ?",
      answer:
        "Oui, toutes vos données sont chiffrées et stockées de manière sécurisée. Vous pouvez également supprimer définitivement vos fichiers à tout moment.",
    },
    {
      question: "À quelle fréquence le service est-il mis à jour ?",
      answer:
        "Nous mettons régulièrement à jour notre service pour ajouter de nouvelles fonctionnalités et améliorer l’expérience utilisateur.",
    },
  ];

  return (
    <section id="faq" className="w-full py-8 md:py-16 lg:py-24 ">
      <div className="w-full">
        <div className="px-4 md:px-6 gap-4">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Questions fréquentes
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-base lg:text-base/relaxed text-sm">
                Tout ce que vous devez savoir sur QuickTome AI.
              </p>
            </div>
          </div>
          <div className="w-full mx-auto mt-8 max-w-5xl">
            {/* <div className="mx-auto mt-8 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        */}
            <Accordion type="single" collapsible>
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
