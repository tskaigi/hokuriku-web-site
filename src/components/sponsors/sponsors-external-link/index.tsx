import clsx from "clsx";
import { ArrowUpRightFromSquare } from "lucide-react";
import Link from "next/link";

type ExternalLinkProps = {
  href: string;
  children: React.ReactNode;
  size?: "md" | "sm";
};

const ExternalLink = ({ href, children, size = "md" }: ExternalLinkProps) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        "flex items-center gap-2 text-blue-600 hover:underline",
        size === "sm" ? "text-sm" : "text-base",
      )}
    >
      {children}
      <ArrowUpRightFromSquare size={16} />
    </Link>
  );
};

export default ExternalLink;
