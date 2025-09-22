import { ExternalLinkProps } from "@/constants/sponsors";
import { ArrowUpRightFromSquare } from "lucide-react";
import Link from "next/link";

const ExternalLink = ({ title, href }: ExternalLinkProps) => {
  return (
    <Link
      href={href}
      target="_blank"
      className="text-sponsor-link decoration-link-light underline decoration-1 underline-offset-2"
    >
      {title}
      <ArrowUpRightFromSquare size={16} className="relative left-2 inline" />
    </Link>
  );
};

export default ExternalLink;
