type Props = {
  children: React.ReactNode;
};

export default function SponsorLayout({ children }: Props) {
  return <main className="bg-sponsor-background flex-1 py-10 pt-16 md:px-8">{children}</main>;
}
