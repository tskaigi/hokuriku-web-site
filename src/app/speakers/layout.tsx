import { Suspense } from "react";

type Props = {
  children: React.ReactNode;
};

export default function SponsorLayout({ children }: Props) {
  return (
    <div className="bg-sponsor-background flex-1 pb-10 md:px-8">
      <Suspense>{children}</Suspense>
    </div>
  );
}
