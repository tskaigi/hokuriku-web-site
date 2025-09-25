import { CfpRecruitment } from "@/components/cfp-recruitment";
import Hero from "@/components/hero";
import { SponsorBoardSection } from "@/components/spondor-board";
import TicketPurchaseSection from "@/components/ticket-purchase";
import { TravelCouponSection } from "@/components/travel-coupon";

const Home = () => {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <TicketPurchaseSection />
      <TravelCouponSection />
      <hr />
      <CfpRecruitment />
      <SponsorBoardSection />
    </main>
  );
};

export default Home;
