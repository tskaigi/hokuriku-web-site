import { CfpRecruitment } from "@/components/cfp-recruitment";
import { SponsorRecruitment } from "@/components/sponsor-recruitment";
import Image from "next/image";

const Home = () => {
  return (
    <main className="overflow-x-hidden">
      {/* ヒーローセクション */}
      <section id="hero">
        <Image
          src="/hero.png"
          alt="TSKaigi Hokurikuのメインビジュアル"
          width={1280}
          height={960}
          className="w-full"
        />
      </section>

      <SponsorRecruitment />
      <CfpRecruitment />
    </main>
  );
};

export default Home;
