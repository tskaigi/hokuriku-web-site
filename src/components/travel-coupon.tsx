import Link from "next/link";

export const TravelCouponSection = () => {
  return (
    <section
      aria-labelledby="travel-coupon-heading"
      className="mx-auto w-full max-w-screen-md px-6 pt-10 pb-24 text-center lg:pt-14"
    >
      <h2
        id="travel-coupon"
        className="font-noto text-center text-[32px] leading-[48px] font-bold tracking-[-1.2%] lg:text-4xl"
      >
        宿泊クーポン
      </h2>

      <div className="mx-auto mt-10 max-w-[680px] space-y-10 text-left">
        <div>
          <div className="px-0 leading-[25px] font-bold tracking-[-0.75%]">
            <p>株式会社令和トラベル様より、宿泊クーポンのご提供があります！</p>
            <p>
              下記サイトにクーポンコードをご入力いただくと、宿泊費から50%OFFの割引(最大5,000円)を利用することができます（先着60名まで）。
            </p>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="https://newt.net/spo-tskaigi-hokuriku-2025"
            target="_blank"
            rel="noopener noreferrer"
            className="font-noto bg-primary focus-visible:ring-primary/40 text-background inline-flex items-center rounded-full px-8 py-3 text-sm font-bold shadow-sm transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:outline-none"
          >
            詳細を確認する →
          </Link>
        </div>
      </div>
    </section>
  );
};
