import { CfpRecruitment } from "@/components/cfp-recruitment";
import EventOverview from "@/components/event-overview";
import { CoreStaffSection } from "@/components/core-staff-section";
import Hero from "@/components/hero";
import { SponsorBoardSection } from "@/components/spondor-board";
import { StaffSection } from "@/components/staff-section";
import TicketPurchaseSection from "@/components/ticket-purchase";
import { TravelCouponSection } from "@/components/travel-coupon";

const Home = () => {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <EventOverview />
      <hr />
      <TicketPurchaseSection />
      <TravelCouponSection />
      <hr />
      <CfpRecruitment />

      <SponsorBoardSection />

      <CoreStaffSection />
      <StaffSection />
    </main>
  );
};

export default Home;
