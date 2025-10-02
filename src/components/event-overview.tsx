// src/components/event-overview.tsx
import { ExternalLink } from "lucide-react";
import Link from "next/link";

const EventOverviewSection = () => {
  return (
    <section id="overview" className="py-20 text-center">
      <div className="mx-auto max-w-[720px]">
        <h2 className="font-noto text-[32px] leading-[48px] font-bold tracking-[-1.2%] lg:text-4xl">
          TSKaigi Hokuriku 2025 概要
        </h2>

        <dl className="mx-auto my-8 w-[90%] border border-gray-300 lg:w-full lg:max-w-[720px]">
          {/* 開催日 */}
          <div className="flex w-full flex-col border-b border-gray-300 sm:flex-row">
            <dt className="flex items-center justify-center border-r border-gray-300 bg-gray-100 px-2 py-4 font-semibold sm:w-40 md:text-lg">
              開催日
            </dt>
            <dd className="w-full px-2 py-4 text-center sm:flex-1 sm:text-left md:text-lg">
              2025年11月23日（日）
            </dd>
          </div>
          {/* 会場 */}
          <div className="flex w-full flex-col border-b border-gray-300 last:border-b-0 sm:flex-row">
            <dt className="flex items-center justify-center border-r border-gray-300 bg-gray-100 px-2 py-4 font-semibold sm:w-40 md:text-lg">
              会場
            </dt>
            <dd className="w-full px-2 py-4 text-center sm:flex-1 sm:text-left md:text-lg">
              <Link
                href="https://www.hotelkanazawa.co.jp/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ホテル金沢（外部サイト）"
                className="text-sponsor-platinum inline-flex items-center font-bold hover:underline"
              >
                ホテル金沢
                <ExternalLink className="ml-2 size-5" aria-hidden />
              </Link>
            </dd>
          </div>
        </dl>
      </div>
      <div className="mx-auto mt-9 aspect-video w-[90%] max-w-full overflow-hidden lg:w-full lg:max-w-[720px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3203.9826728087396!2d136.6476801114828!3d36.57863537219567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5ff8336a724d7b97%3A0xdecdd1be982f231a!2z44CSOTIwLTA4NDkg55-z5bed55yM6YeR5rKi5biC5aCA5bed5paw55S677yR4oiS77yR!5e0!3m2!1sja!2sjp!4v1758981577345!5m2!1sja!2sjp"
          className="h-full w-full"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="ホテル金沢の地図（Googleマップ）"
        ></iframe>
      </div>
    </section>
  );
};

export default EventOverviewSection;
