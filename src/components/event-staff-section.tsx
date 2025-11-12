import SectionHeading from "@/components/section-heading";
import { type Staff, eventStaffList } from "@/constants/staffList";
import Image from "next/image";
import { useMemo } from "react";

const EventStaffSection = () => {
  const sortedEventStaffList = useMemo(() => {
    const alphabetStaff: Staff[] = [];
    const japaneseStaff: Staff[] = [];

    for (const staff of eventStaffList) {
      if (/^[a-zA-Z]/.test(staff.name)) {
        alphabetStaff.push(staff);
      } else {
        japaneseStaff.push(staff);
      }
    }

    alphabetStaff.sort((a, b) => a.name.localeCompare(b.name, "en"));
    japaneseStaff.sort((a, b) => a.name.localeCompare(b.name, "ja"));

    return [...alphabetStaff, ...japaneseStaff];
  }, []);

  return (
    <section className="px-6 py-18">
      <div className="mx-auto flex max-w-4xl flex-col gap-12 px-6 md:px-12">
        <SectionHeading>当日スタッフ</SectionHeading>

        <ul className="grid grid-cols-[repeat(2,8rem)] justify-center gap-6 sm:grid-cols-[repeat(4,8rem)] md:grid-cols-[repeat(5,8rem)]">
          {sortedEventStaffList.map(({ name, image, href }) => (
            <li key={name}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2"
              >
                <Image
                  src={image}
                  alt={`${name} アイコン`}
                  className="aspect-square h-full w-full overflow-hidden rounded-full object-cover"
                  width={128}
                  height={128}
                  decoding="async"
                  loading="lazy"
                />
                <p className="text-center text-base leading-7">{name}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default EventStaffSection;
