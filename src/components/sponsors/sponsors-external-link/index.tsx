import { ArrowUpRightFromSquare } from "lucide-react";
import Link from "next/link";

type ExternalLinkProps = {
  href: string;
  children: React.ReactNode;
};

const ExternalLink = ({ href, children }: ExternalLinkProps) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:underline"
    >
      {children}
      <ArrowUpRightFromSquare size={16} className="relative left-2 inline" />
    </Link>
  );
};

export default ExternalLink;
