import ButtonLink from "@/components/button-link";
import SectionHeading from "@/components/section-heading";

const TicketPurchaseSection = () => {
  return (
    <section className="bg-blue-light-100 px-6 py-18">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-12 rounded-xl bg-white p-6 md:p-12">
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
    </section>
  );
};

export default TicketPurchaseSection;
