import CoreStaffSection from "@/components/core-staff-section";
import EventOverview from "@/components/event-overview";
import Hero from "@/components/hero";
import { ShareButton } from "@/components/share-button";
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

      <div className="fixed right-0 bottom-[env(safe-area-inset-bottom)] p-4 md:hidden">
        <ShareButton />
      </div>
    </main>
  );
};

export default Home;
