"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { FolderKanban, Home, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  {
    title: "Home",
    icon: Home,
    href: "/dashboard/home",
  },
  {
    title: "Generations",
    icon: FolderKanban,
    href: "/dashboard/generations",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/dashboard/settings",
  },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "z-40 md:block hidden h-full min-h-screen lg:w-64 bg-background border-r transition-transform duration-200 ease-in-out w-fit translate-x-0"
      )}
    >
      <div className="flex h-full flex-col">
        <div className="p-6">
          <ScrollArea className="h-[calc(100vh-12rem)]">
            <div className="space-y-2 flex flex-col">
              {items.map((item) => (
                <Button
                  key={item.title}
                  variant={pathname === item.href ? "default" : "ghost"}
                  className="md:w-full w-fit justify-start"
                  asChild
                >
                  <Link href={item.href}>
                    <item.icon className="md:mr-2 size-4" />
                    <span className="md:block hidden">{item.title}</span>
                  </Link>
                </Button>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}
