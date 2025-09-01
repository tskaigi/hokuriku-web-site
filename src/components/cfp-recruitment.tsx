import Link from "next/link";

export const CfpRecruitment = () => {
  return (
    <section
      aria-labelledby="cfp-heading"
      className="mx-auto w-full max-w-screen-md px-6 pt-10 pb-24 text-center lg:pt-14"
    >
      <h2
        id="cfp-heading"
        className="font-noto text-center text-[32px] leading-[48px] font-bold tracking-[-1.2%] lg:text-4xl"
      >
        プロポーザル募集
      </h2>

      <div className="mx-auto mt-10 max-w-[680px] space-y-10 text-left">
        <div>
          <div className="px-0 leading-[25px] font-bold tracking-[-0.75%]">
            <p>TSKaigi Hokuriku では、TypeScript に関するあらゆるトークを募集しています。</p>
            <p>
              エンジニアに限らず、初心者、学生、非エンジニアなど多様な領域や立場の方々からのご応募もお待ちしております。
            </p>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLScPI8DoYJDvUD2f0I8N077rdxMDxQPsKwkKqLs0C4tHdipsXQ/viewform"
            className="font-noto bg-primary focus-visible:ring-primary/40 text-background inline-flex items-center rounded-full px-8 py-3 text-sm font-bold shadow-sm transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:outline-none"
          >
            申し込む →
          </Link>
        </div>
      </div>
    </section>
  );
};
