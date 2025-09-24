import Image from "next/image";
import Link from "next/link";

type Props = {
  href: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  className: string;
};

export const SponsorsBoardItem = ({ href, src, alt, width, height, className }: Props) => {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer" className="aspect-video w-full">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`rounded-[10px] bg-white object-contain ${className}`}
        loading="lazy"
      />
    </Link>
  );
};
