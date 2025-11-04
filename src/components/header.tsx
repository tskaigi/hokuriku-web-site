"use client";

import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ShareButton } from "./share-button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

const links: {
  href: string;
  label: string;
}[] = [
  {
    href: "/timetable",
    label: "タイムテーブル",
  },
  {
    href: "/speakers",
    label: "採択トーク",
  },
  {
    href: "/sponsors",
    label: "スポンサー",
  },
  {
    href: "/code-of-conduct",
    label: "行動規範",
  },
];

export const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const heroSection = document.getElementById("hero");

    if (!heroSection) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });

    observer.observe(heroSection);

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed z-50 flex w-full items-center justify-between bg-white p-4 opacity-90 shadow-[0px_3px_16px_0px_rgba(0,143,238,0.05)] duration-300 md:px-6 md:py-2",
        isVisible ? "translate-y-0" : "-translate-y-full",
      )}
    >
      <Link href="/" className="text-xl font-bold text-blue-600">
        <Image
          src="/logo.svg"
          alt="TSKaigi"
          width={98}
          height={36}
          className="h-[28px] w-[78px] md:h-[36px] md:w-[98px]"
        />
      </Link>

      {/* PC 用ナビゲーション */}
      <nav className="hidden space-x-6 md:flex md:items-center">
        {links.map(({ href, label }) => (
          <Link key={href} href={href} className="text-primary-dark text-sm font-bold">
            {label}
          </Link>
        ))}
        <ShareButton size="sm" />
      </nav>

      {/* モバイル用ナビゲーション */}
      <Sheet open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <SheetTrigger asChild className="md:hidden">
          <Menu size={24} />
        </SheetTrigger>
        <SheetContent side="right" className="w-[80%] sm:w-[350px]">
          <SheetHeader className="sr-only">
            <SheetTitle>メニュー</SheetTitle>
            <SheetDescription>TSKaigi のメニュー</SheetDescription>
          </SheetHeader>
          <nav className="px-4 pt-12">
            <ul className="space-y-6">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-primary-dark block text-sm font-bold"
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
};
