import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { auth } from "@/lib/auth";
import Image from "next/image";
import Link from "next/link";

export default async function Header() {
  const session = await auth();
  const items = [
    {
      name: "Fonctionnalités",
      href: "#fonctionnalites",
    },
    {
      name: "Démo",
      href: "#demo",
    },
    {
      name: "Tarifs",
      href: "#tarifs",
    },
    {
      name: "FAQ",
      href: "#faq",
    },
  ];

  return (
    <header className=" px-4 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="logo QuickTome AI"
            width={34}
            height={34}
          />
          <span className="text-xl font-bold">QuickTome AI</span>
        </div>
        <nav className="hidden md:flex gap-6">
          {items.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        {session?.user && session?.user?.id ? (
          <Avatar>
            <AvatarImage src={session?.user?.image || ""} />
            <AvatarFallback>{session?.user?.name[0] ?? ""}</AvatarFallback>
          </Avatar>
        ) : (
          <Link
            href="/login"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Connexion
          </Link>
        )}
      </div>
    </header>
  );
}
