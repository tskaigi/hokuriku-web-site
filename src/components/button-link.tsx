import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

const ButtonLink = ({ href, children }: { href: string; children: ReactNode }) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-noto bg-primary focus-visible:ring-primary/40 relative inline-flex items-center gap-3 rounded-full py-3 pr-6 pl-9 text-sm font-bold text-white shadow-sm transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:outline-none md:text-base"
    >
      {children}
      <ExternalLink className="size-4" />
    </Link>
  );
};

export default ButtonLink;
