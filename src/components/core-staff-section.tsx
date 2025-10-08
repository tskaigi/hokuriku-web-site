import SectionHeading from "@/components/section-heading";

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

const CoreStaffSection = () => {
  return (
    <section className="px-6 py-18">
      <div className="mx-auto flex max-w-4xl flex-col gap-12 px-6 md:px-12">
        <SectionHeading>コアスタッフ</SectionHeading>

        <ul className="grid grid-cols-[repeat(2,8rem)] justify-center gap-6 sm:grid-cols-[repeat(3,9rem)] sm:gap-10 md:grid-cols-[repeat(4,9rem)] md:gap-9">
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
      </div>
    </section>
  );
};

export default CoreStaffSection;
