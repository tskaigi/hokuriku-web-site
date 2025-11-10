import CoreStaffSection from "@/components/core-staff-section";
import EventOverview from "@/components/event-overview";
import Hero from "@/components/hero";
import { JudgesSection } from "@/components/JudgesSection";
import { NewsSection } from "@/components/news-section";
import { ShareButton } from "@/components/share-button";
import SponsorBoardSection from "@/components/sponsor-board";
import StaffSection from "@/components/staff-section";
import TicketPurchaseSection from "@/components/ticket-purchase";

const Home = () => {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <NewsSection />
      <TicketPurchaseSection />
      <EventOverview />
      <SponsorBoardSection />
      <JudgesSection />
      <CoreStaffSection />
      <StaffSection />

      <div className="fixed right-0 bottom-[env(safe-area-inset-bottom)] p-4 md:hidden">
        <ShareButton />
      </div>
    </main>
  );
};

export default Home;
