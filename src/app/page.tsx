import { CfpRecruitment } from "@/components/cfp-recruitment";
import Hero from "@/components/hero";
import { SponsorBoardSection } from "@/components/spondor-board";

const Home = () => {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <CfpRecruitment />
      <SponsorBoardSection />
    </main>
  );
};

export default Home;
