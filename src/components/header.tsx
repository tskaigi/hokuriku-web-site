"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
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
  // {
  //   href: "/talks",
  //   label: "タイムテーブル",
  // },
  // {
  //   href: "/sponsors",
  //   label: "スポンサー",
  // },
  // {
  //   href: "/code-of-conduct",
  //   label: "行動規範",
  // },
];

export const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <header className="fixed z-50 flex w-full items-center justify-between bg-white p-4 opacity-90 shadow-[0px_3px_16px_0px_rgba(0,143,238,0.05)] md:px-6">
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
      <nav className="hidden space-x-6 md:flex">
        {links.map(({ href, label }) => (
          <Link key={href} href={href} className="text-primary text-sm font-bold">
            {label}
          </Link>
        ))}
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
                    className="text-primary block text-sm font-bold"
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
