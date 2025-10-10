import ButtonLink from "@/components/button-link";
import SectionHeading from "@/components/section-heading";
import Image from "next/image";

const TicketPurchaseSection = () => {
  return (
    <section className="bg-blue-light-100 px-6 py-18">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-12 rounded-xl bg-white p-6 md:p-12 lg:flex-row">
        <div className="flex flex-col items-center gap-12">
          <SectionHeading>チケット購入</SectionHeading>

          <ul className="mx-auto list-disc space-y-4 pl-5 text-left leading-6 font-medium md:text-lg">
            <li>イベント参加にはチケットが必要です。以下のリンクから購入できます。</li>
            <li>お申し込みの際には、「Findy Tools」への登録が必要です。</li>
            <li>
              登録時に勤務先情報の入力を求められますが、実際には連絡が取れるメールアドレスであれば問題ありません。必ずご連絡可能なメールアドレスをご記入ください。
            </li>
          </ul>

          <ButtonLink href="https://conference.findy-code.io/conferences/tskaigi_hokuriku/9/registration">
            チケットを購入する
          </ButtonLink>
        </div>

        <hr className="h-auto self-stretch border-r border-r-slate-200" />

        <div className="flex w-full flex-col items-center gap-6">
          <h2 className="font-noto text-lg font-bold lg:text-xl">現地参加される方へ</h2>

          <p className="font-medium">
            TSKaigi Hokuriku 2025
            参加者限定の宿泊費が50%OFF（最大割引5,000円）になるクーポンはこちら。
          </p>

          <Image
            src="/travel_sponsor.webp"
            alt="NEWT × TSKaigi"
            width={566}
            height={210}
            className="w-full max-w-80"
          />

          <ButtonLink href="https://newt.net/spo-tskaigi-hokuriku-2025" variant="secondary">
            クーポンの詳細を確認する
          </ButtonLink>
        </div>
      </div>
    </section>
  );
};

export default TicketPurchaseSection;
