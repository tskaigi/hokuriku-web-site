import type React from "react";

type Props = {
  children: React.ReactNode;
};

export function TimetableHeader({ children }: Props) {
  return (
    <div className="mt-4 grid grid-cols-[1fr] gap-1 md:mt-2 md:grid-cols-[auto_minmax(210px,1fr)_minmax(210px,1fr)]">
      {children}
    </div>
  );
}
