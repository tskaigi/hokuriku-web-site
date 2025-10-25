import ButtonLink from "@/components/button-link";
import SectionHeading from "@/components/section-heading";
import { Laptop, MapPin } from "lucide-react";
import Image from "next/image";

const TicketPurchaseSection = () => {
  return (
    <section id="ticket" className="bg-blue-light-100 px-6 py-18">
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

          <div className="w-full rounded-lg border border-slate-200 bg-white p-6">
            <div className="flex flex-col gap-6 md:gap-8">
              <div className="flex-1">
                <div className="mb-3 flex items-center gap-2">
                  <MapPin className="size-5" />
                  <h3 className="font-noto text-base font-bold md:text-lg">現地参加:</h3>
                </div>
                <ul className="font-noto space-y-2 text-base font-bold md:text-base">
                  <li>一般チケット（懇親会なし）: 4,000円</li>
                  <li>一般チケット（懇親会あり）: 6,000円</li>
                </ul>
              </div>

              <div className="flex-1">
                <div className="mb-3 flex items-center gap-2">
                  <Laptop className="size-5 text-gray-700" />
                  <h3 className="font-noto text-base font-bold md:text-lg">
                    <span className="text-md md:text-base">オンライン参加 : 無料</span>
                  </h3>
                </div>
              </div>
            </div>

            <p className="mt-4 text-xs text-gray-600 md:text-sm">
              ※ 学生チケットや個人スポンサーチケットもございます。
            </p>

            <div className="mt-6 flex justify-center">
              <ButtonLink href="https://conference.findy-code.io/conferences/tskaigi_hokuriku/9/registration">
                チケットを購入する
              </ButtonLink>
            </div>
          </div>
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
