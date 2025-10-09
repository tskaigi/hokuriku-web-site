import Image from "next/image";
import Link from "next/link";

const TicketPurchaseSection = () => {
  return (
    <div className="bg-blue-light-100 w-full px-6 py-20 text-center lg:py-24">
      <div className="mx-auto flex max-w-[1080px] flex-col gap-8 rounded-xl bg-white p-8 md:flex-row md:p-12">
        <section className="flex flex-2 grow-[2] flex-col">
          <h2 className="font-noto text-center text-[32px] leading-[48px] font-bold tracking-[-1.2%] lg:text-4xl">
            チケット購入
          </h2>
          <ul className="mx-auto mt-10 max-w-[680px] list-disc space-y-4 pl-5 text-left leading-6 font-bold md:text-lg">
            <li>イベント参加にはチケットが必要です。以下のリンクから購入できます。</li>
            <li>お申し込みの際には、「Findy Tools」への登録が必要です。</li>
            <li>
              登録時に勤務先情報の入力を求められますが、実際には連絡が取れるメールアドレスであれば問題ありません。必ずご連絡可能なメールアドレスをご記入ください。
            </li>
          </ul>
          <div className="mt-10 flex justify-center">
            <Link
              href="https://conference.findy-code.io/conferences/tskaigi_hokuriku/9/registration"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TSKaigi Hokuriku 2025 のチケットを購入する"
              className="font-noto text-background bg-primary focus-visible:ring-primary/40 inline-flex items-center rounded-full px-8 py-3 text-sm font-bold shadow-sm transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:outline-none"
            >
              チケットを購入する →
            </Link>
          </div>
        </section>
        <hr className="h-auto self-stretch border-r border-r-slate-200" />
        <section className="flex flex-1 grow-[1] flex-col">
          <h2 className="font-noto text-center text-lg font-bold tracking-[-1.2%] lg:text-lg">
            現地参加される方へ
          </h2>
          <p className="mt-2 text-start">
            TSKaigi Hokuriku 2025
            参加者限定の宿泊費が50%OFF（最大割引5,000円）になるクーポンはこちら。
          </p>
          <div className="mx-auto my-6 grid max-w-[300px] place-items-center">
            <Image src="/travel_sponsor.webp" alt="" width={566} height={210} />
          </div>
          <div className="mt-auto">
            <Link
              href="https://newt.net/spo-tskaigi-hokuriku-2025"
              target="_blank"
              rel="noopener noreferrer"
              className="font-noto border-primary text-primary focus-visible:ring-primary/40 hover:bg-primary/10 inline-flex items-center rounded-full border px-8 py-3 text-sm font-bold transition-colors focus-visible:ring-2 focus-visible:outline-none"
            >
              クーポンの詳細を確認する →
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TicketPurchaseSection;
