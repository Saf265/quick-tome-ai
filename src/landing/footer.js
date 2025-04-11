import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background px-4">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="logo QuickTome AI"
            width={34}
            height={34}
          />
          <span className="text-lg font-bold">QuickTome AI</span>
        </div>
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-6 md:px-0">
          <Link
            href="#features"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Fonctionnalités
          </Link>
          <Link
            href="#tarifs"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Tarifs
          </Link>
          <Link
            href="/blog"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Blog
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/privacy"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Confidentialité
          </Link>
          <Link
            href="/legal-mentions"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Mentions légales
          </Link>
        </div>
      </div>
    </footer>
  );
}
