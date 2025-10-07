const coreStaffList = [
  {
    name: "tsuyuni",
    image: "coreStaff/tsuyuni.jpg",
    href: "https://x.com/tsuy_uni",
  },
  {
    name: "hoshico",
    image: "coreStaff/hoshico.png",
    href: "https://x.com/hoshihoshi_yasu",
  },
  {
    name: "OJI",
    image: "coreStaff/oji.png",
    href: "https://x.com/OldBigBuddha",
  },
  {
    name: "magcho",
    image: "coreStaff/magcho.png",
    href: "https://x.com/magcho0527",
  },
  {
    name: "ねぎ",
    image: "coreStaff/negi.png",
    href: "https://github.com/nyagihime",
  },
  {
    name: "yuta-ike",
    image: "coreStaff/yuta-ike.png",
    href: "https://x.com/Selria1",
  },
];

export const CoreStaffSection = () => {
  return (
    <section className="bg-sky-50 pt-24 pb-10 md:pb-20">
      <h2 className="pb-8 text-center text-2xl leading-normal font-bold md:pb-10 lg:text-3xl">
        コアスタッフ
      </h2>
      <ul className="grid grid-cols-[repeat(2,120px)] justify-center gap-x-14 gap-y-8 px-10 md:grid-cols-[repeat(2,144px)] lg:grid-cols-[repeat(4,144px)]">
        {coreStaffList.map(({ name, image, href }) => (
          <li key={name}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex aspect-square flex-col items-center gap-2"
            >
              <img
                src={image}
                alt={`${name} アイコン`}
                className="h-full w-full overflow-hidden rounded-full object-cover"
              />
              <p className="text-base leading-7">{name}</p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};
