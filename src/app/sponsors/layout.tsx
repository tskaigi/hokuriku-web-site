type Props = {
  children: React.ReactNode;
};

export default function SponsorLayout({ children }: Props) {
  return <main className="bg-sponsor-background flex-1 pb-10 md:px-8">{children}</main>;
}
