import { judgesList } from "@/constants/judgesList";

export const JudgesSection = () => {
  return (
    <section className="pt-10 pb-10 md:pt-20 md:pb-20">
      <h2 className="text-24 md:text-32 pb-8 text-center leading-normal font-bold md:pb-10 md:leading-[48px]">
        プロポーザル選考委員
      </h2>
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
    </section>
  );
};
