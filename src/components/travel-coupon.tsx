import ButtonLink from "@/components/button-link";
import SectionHeading from "@/components/section-heading";

const TravelCouponSection = () => {
  return (
    <section className="px-6 py-18">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-12 px-6 md:px-12">
        <SectionHeading>宿泊クーポン</SectionHeading>

        <div className="font-medium md:text-lg">
          <p>
            株式会社令和トラベル様から、TSKaigi Hokuriku 2025
            参加者限定の、金沢の宿・ホテルで利用できる、宿泊費が50%OFF（最大割引5,000円）になるクーポンを、ご提供いただきました。
          </p>
          <br />
          <p>クーポンの利用方法は、チケット購入後のご案内をご確認ください。</p>
        </div>

        <ButtonLink href="https://newt.net/spo-tskaiga-hokuriku-2025">
          クーポンの詳細を確認する
        </ButtonLink>
      </div>
    </section>
  );
};

export default TravelCouponSection;
