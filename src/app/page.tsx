import CoreStaffSection from "@/components/core-staff-section";
import EventOverview from "@/components/event-overview";
import Hero from "@/components/hero";
import SponsorBoardSection from "@/components/sponsor-board";
import StaffSection from "@/components/staff-section";
import TicketPurchaseSection from "@/components/ticket-purchase";
import TravelCouponSection from "@/components/travel-coupon";

const Home = () => {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <EventOverview />
      <TicketPurchaseSection />
      <TravelCouponSection />
      <SponsorBoardSection />
      <CoreStaffSection />
      <StaffSection />
    </main>
  );
};

export default Home;
