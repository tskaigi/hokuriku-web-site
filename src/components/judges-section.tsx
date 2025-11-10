import { judgesList } from "@/constants/judgesList";
import SectionHeading from "./section-heading";

export const JudgesSection = () => {
  return (
    <section className="px-6 pt-18">
      <div className="mx-auto flex max-w-4xl flex-col gap-12 px-6 md:px-12">
        <SectionHeading>プロポーザル選考委員</SectionHeading>
        <ul className="grid grid-cols-[repeat(auto-fit,192px)] justify-center gap-x-14 gap-y-8 px-10 md:grid-cols-[repeat(auto-fit,224px)]">
          {judgesList.map(({ name, image, href }) => (
            <li key={name}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={image}
                  alt={`${name} アイコン`}
                  className="h-auto w-full overflow-hidden rounded-full"
                />
                <p className="text-lg font-bold">{name}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
