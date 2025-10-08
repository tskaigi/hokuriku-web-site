import ButtonLink from "../button-link";
import SectionHeading from "../section-heading";

const TicketPurchaseSection = () => {
  return (
    <section className="bg-blue-light-100 px-6 py-18">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-12 rounded-xl bg-white p-6 md:p-12">
        <SectionHeading>チケット購入</SectionHeading>

        <ul className="mx-auto max-w-[680px] list-disc space-y-4 pl-5 text-left leading-6 font-bold md:text-lg">
          <li>イベント参加にはチケットが必要です。以下のリンクから購入できます。</li>
          <li>お申し込みの際には、「Findy Tools」への登録が必要です。</li>
          <li>
            登録時に勤務先情報の入力を求められますが、実際には連絡が取れるメールアドレスであれば問題ありません。必ずご連絡可能なメールアドレスをご記入ください。
          </li>
        </ul>

        <ButtonLink
          href="https://conference.findy-code.io/conferences/tskaigi_hokuriku/9/registration"
          aria-label="TSKaigi Hokuriku 2025 のチケットを購入する"
        >
          チケットを購入する
        </ButtonLink>

        {/* <Link
          href="https://conference.findy-code.io/conferences/tskaigi_hokuriku/9/registration"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TSKaigi Hokuriku 2025 のチケットを購入する"
          className="font-noto bg-primary focus-visible:ring-primary/40 relative inline-flex items-center gap-3 rounded-full py-3 pr-6 pl-9 text-sm font-bold text-white shadow-sm transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:outline-none"
        >
          チケットを購入する
          <ExternalLink size={16} />
        </Link> */}
      </div>
    </section>
  );
};

export default TicketPurchaseSection;
