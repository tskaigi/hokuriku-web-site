import SectionHeading from "@/components/section-heading";
import { personalSponsorList } from "@/constants/personalSponsorList";
import Image from "next/image";

const PersonalSponsorsSection = () => {
  return (
    <section id={"personal-sponsor"} className="px-6 pt-18">
      <div className="mx-auto flex max-w-4xl flex-col gap-12 px-6 md:px-12">
        <SectionHeading>個人スポンサー</SectionHeading>

        <ul className="grid grid-cols-[repeat(2,8rem)] justify-center gap-6 sm:grid-cols-[repeat(3,9rem)] sm:gap-10 md:grid-cols-[repeat(4,9rem)] md:gap-9">
          {personalSponsorList.map(({ name, image, href }) => (
            <li key={name}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex aspect-square flex-col items-center gap-2"
              >
                <Image
                  src={image}
                  alt={`${name} アイコン`}
                  width={400}
                  height={400}
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

export default PersonalSponsorsSection;
