import type { Metadata } from "next";

const specificCommercialData = {
  販売業者: <p>一般社団法人 TSKaigi Association</p>,
  所在地: <p>東京都中央区東日本橋2-4-10 701</p>,
  メールアドレス: (
    <p>
      info<span className="hidden">dummy@text</span>@tskaigi.org
    </p>
  ),
  電話番号: <p>請求があった場合、遅滞なく開示します。</p>,
  運営統括責任者: <p>竹下義晃</p>,
  販売価格: (
    <p>
      <a
        href="https://conference.findy-code.io/conferences/tskaigi_hokuriku/9/registration"
        className="text-link-light pr-1 underline"
      >
        チケットを販売するサイト
      </a>
      をご確認ください。
    </p>
  ),
  受け付け可能な決済手段: <p>クレジットカード、コンビニ/ATM、PayPal</p>,
  引渡時期: (
    <p>
      TSKaigi 2025の開催期間は
      <span className="px-1 font-bold">2025年11月23日</span>
      です。お申し込み完了後、イベント当日に会場または指定の方法にてサービスを提供いたします。
    </p>
  ),
  "交換および返品（返金ポリシー）": (
    <p>
      お申し込み後のお客様のご都合によるキャンセルや返金は承っておりません。天候や災害などによりイベントが中止となった場合の対応については、決定次第ご案内いたします。
    </p>
  ),
  追加手数料等の追加料金: (
    <p>
      インターネット接続料金その他の電気通信回線の通信に関する費用はお客様にて別途ご用意いただく必要があります。（金額は、お客様が契約した各事業者が定める通り）
    </p>
  ),
};

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記",
  twitter: {
    title: "特定商取引法に基づく表記",
  },
  openGraph: {
    title: "特定商取引法に基づく表記",
  },
};

const SpecificCommercialPage = () => {
  return (
    <main className="bg-blue-light-100 flex-1 pt-16 pb-10 md:px-8">
      <h1 className="text-blue-light-500 py-10 text-center text-2xl font-bold md:py-16 md:text-3xl lg:text-4xl">
        特定商取引法に基づく表記
      </h1>
      <div className="mx-auto max-w-screen-xl bg-white p-6 md:rounded-xl">
        <table>
          <tbody>
            {Object.entries(specificCommercialData).map(([key, value]) => (
              <tr key={key} className="flex flex-col py-3 md:block">
                <th className="border-gray-300 p-2 text-left text-sm md:w-36 md:text-base lg:w-72">
                  {key}
                </th>
                <td className="border-gray-300 p-2 md:pl-3">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default SpecificCommercialPage;
