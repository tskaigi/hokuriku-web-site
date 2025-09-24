import { CfpRecruitment } from "@/components/cfp-recruitment";
import Hero from "@/components/hero";
import { SponsorBoardSection } from "@/components/spondor-board";
import TicketPurchaseSection from "@/components/ticket-purchase";
import { ChevronDown } from "lucide-react";

const Home = () => {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <TicketPurchaseSection />
      <CfpRecruitment />
      <SponsorBoardSection />
    </main>
  );
};

export default Home;
