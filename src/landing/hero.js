import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="size-full grid md:grid-cols-2 grid-cols-1 space-y-8 place-content-center mx-auto py-8 md:py-16 lg:py-24 ">
      <div className="flex items-center flex-col justify-center ">
        <div className="w-fit space-y-8">
          <div className="space-y-2 md:text-start text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-6xl flex flex-col gap-1">
              <span>Transformez vos idées</span>
              <span>
                en <span className="decoration-primary underline">ebooks</span>{" "}
                en un{" "}
                <span className="decoration-primary underline">clin d'œil</span>
              </span>
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-base lg:text-base/relaxed text-sm">
              Créez des ebooks de qualité professionnelle avec l'aide de l'IA.
            </p>
          </div>
          <div className="flex items-center gap-2 w-full ">
            <Button size="lg" asChild>
              <Link href="#tarifs">Générer un ebook</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#fonctionnalites">En savoir plus</Link>
            </Button>
          </div>
        </div>
      </div>
      <Image
        src="/hero.png"
        width={700}
        height={400}
        alt="Interface QuickTome AI"
        objectFit="cover"
        className="rounded-xl"
      />
    </section>
  );
}

// <Button size="lg" asChild>
// <Link href="/register">
//   Commencer maintenant
//   <ArrowRight className="ml-2 h-4 w-4" />
// </Link>
// </Button>
// <Button size="lg" variant="outline" asChild>
// <Link href="#demo">Voir la démo</Link>
// </Button>
// </div>
// </div>
// <div className="mx-auto w-full max-w-[600px] rounded-xl border bg-background p-2 shadow-xl lg:p-4">
// <Image
// src="/hero.png"
// width={1100}
// height={800}
// alt="Interface QuickTome AI"
// className="aspect-video rounded-lg "
// />
