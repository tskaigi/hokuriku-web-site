import Image from "next/image";
import Link from "next/link";

export const Header = () => {
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
    </header>
  );
};
