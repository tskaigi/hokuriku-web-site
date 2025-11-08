import type React from "react";

type Props = {
  children: React.ReactNode;
  refHandler?: (ref: HTMLDivElement | null) => void;
};

export function TimetableHeader({ children, refHandler }: Props) {
  return (
    <div
      ref={refHandler}
      className="mt-4 grid grid-cols-[1fr] gap-1 md:mt-2 md:grid-cols-[auto_minmax(210px,1fr)_minmax(210px,1fr)]"
    >
      {children}
    </div>
  );
}
