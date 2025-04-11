import { Star } from "lucide-react";
import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "QuickTome AI a transformé ma façon de créer du contenu. J'ai pu publier mon premier ebook en seulement deux jours!",
      author: "Marie Dupont",
      role: "Blogueuse & Auteure",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "La qualité du contenu généré est impressionnante. J'utilise QuickTome AI pour tous mes lead magnets et mes clients adorent.",
      author: "Thomas Martin",
      role: "Consultant Marketing",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "Interface intuitive, modèles professionnels et support client exceptionnel. Je recommande vivement!",
      author: "Sophie Legrand",
      role: "Coach d'entreprise",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "Grâce à QuickTome AI, j'ai pu créer une série d'ebooks pour mon entreprise qui génère maintenant des milliers de leads.",
      author: "Pierre Moreau",
      role: "Entrepreneur",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "La fonction d'exportation multi-formats est un vrai plus. Je peux toucher tous mes lecteurs, peu importe leur appareil.",
      author: "Camille Dubois",
      role: "Auteure indépendante",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "L'IA comprend parfaitement mon style d'écriture et produit un contenu qui semble avoir été écrit par moi-même.",
      author: "Lucas Bernard",
      role: "Blogueur Tech",
      avatar: "/placeholder.svg?height=100&width=100",
    },
  ];

  return (
    <section className="w-full py-8 md:py-16 lg:py-24 ">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Ce que disent nos utilisateurs
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-base lg:text-base/relaxed text-sm">
              Découvrez comment QuickTome AI aide des auteurs et entrepreneurs à
              créer des ebooks de qualité.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-lg border bg-background p-6 shadow-sm"
            >
              <div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="mt-4">{testimonial.quote}</p>
              </div>
              <div className="mt-6 flex items-center gap-3">
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  width={40}
                  height={40}
                  alt={testimonial.author}
                  className="rounded-full"
                />
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
