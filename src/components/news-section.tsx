import Link from "next/link";

export const NewsSection = () => {
  return (
    <section id="news" className="bg-blue-light-100 p-4">
      <div className="mx-auto grid max-w-5xl gap-2 rounded-xl bg-white p-4 sm:[grid-template-columns:max-content_1fr] sm:p-6">
        {/* タイムテーブル公開 */}
        <div>2025.11.08.</div>
        <div>
          <Link
            href="/talks"
            className="text-blue-600 underline underline-offset-3 hover:no-underline"
          >
            タイムテーブル
          </Link>
          を公開しました
        </div>

        {/* 採択トーク公開 */}
        <div>2025.10.14.</div>
        <div>
          <Link
            href="/speakers"
            className="text-blue-600 underline underline-offset-3 hover:no-underline"
          >
            採択トーク
          </Link>
          を公開しました
        </div>
      </div>
    </section>
  );
};
