import Link from "next/link";

export const NewsSection = () => {
  return (
    <section id="news" className="bg-blue-light-100 p-4">
      <div className="mx-auto grid max-w-5xl gap-2 rounded-xl bg-white p-4 sm:[grid-template-columns:max-content_1fr] sm:p-6">
        {/* 採択トーク公開 */}
        <div>2025.10.14.</div>
        <div>
          採択トークを公開しました （
          <Link
            href="/speakers"
            className="text-blue-600 underline underline-offset-3 hover:no-underline"
          >
            トーク一覧ページを見る
          </Link>
          ）
        </div>
      </div>
    </section>
  );
};
