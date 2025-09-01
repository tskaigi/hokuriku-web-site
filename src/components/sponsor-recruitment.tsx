import Link from "next/link";

export const SponsorRecruitment = () => {
  return (
    <section
      aria-labelledby="sponsor-heading"
      className="mx-auto w-full max-w-screen-md px-6 pt-20 pb-24 text-center lg:pt-24"
    >
      <h2
        id="sponsor-heading"
        className="font-noto text-center text-[32px] leading-[48px] font-bold tracking-[-1.2%] lg:text-4xl"
      >
        スポンサー募集
      </h2>

      <div className="mx-auto mt-10 max-w-[680px] space-y-10 text-left">
        <div>
          <div className="px-0 leading-[25px] font-bold tracking-[-0.75%]">
            <p>
              TypeScriptコミュニティの発展に共に取り組んでいただけるスポンサー企業を募集いたします。
              希望される企業様はスポンサー向け資料をご確認の上、お申し込みください。
            </p>
            <p className="mt-4">
              スポンサー向け資料はこちら <br />
              <Link
                href="https://docs.google.com/presentation/d/1O0dLT7VKXBaqZvMqzWPNW9bJScK3Kwz13nuXHrOnNyU/edit?slide=id.g2b17e06a1af_0_0#slide=id.g2b17e06a1af_0_0"
                className="font-noto text-primary underline"
              >
                TSKaigi Hokuriku 2025 協賛のご案内
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSdv-kXz27ZJdWGgnffz2BhYqn6ki5pcfkrGuUSzPuESaBEihQ/viewform"
            className="font-noto bg-primary focus-visible:ring-primary/40 text-background inline-flex items-center rounded-full px-8 py-3 text-sm font-bold shadow-sm transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:outline-none"
          >
            申し込む →
          </Link>
        </div>
      </div>
    </section>
  );
};
