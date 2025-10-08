import { ReactNode } from "react";

const PetiteDaruma = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 80">
      <path d="M36,0c30,0,36,33,36,48,0,18-12,32-36,32S0,66,0,48C0,33,6,0,36,0ZM36,9c-27,0-33,36,0,36s27-36,0-36Z" />
    </svg>
  );
};

const SectionHeading = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="font-noto text-center text-2xl leading-snug font-bold md:text-3xl">
        {children}
      </h2>

      <div className="flex justify-center gap-3">
        <span className="h-[15px] w-[13.5px] fill-[#17a0fb]">
          <PetiteDaruma />
        </span>
        <span className="h-[15px] w-[13.5px] fill-[#d1ed2b]">
          <PetiteDaruma />
        </span>
        <span className="h-[15px] w-[13.5px] fill-[#f54d93]">
          <PetiteDaruma />
        </span>
      </div>
    </div>
  );
};

export default SectionHeading;
