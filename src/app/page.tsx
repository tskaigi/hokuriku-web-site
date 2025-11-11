import CoreStaffSection from "@/components/core-staff-section";
import EventOverview from "@/components/event-overview";
import EventStaffSection from "@/components/event-staff-section";
import Hero from "@/components/hero";
import { NewsSection } from "@/components/news-section";
import PersonalSponsorsSection from "@/components/personal-sponsors-section";
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
      <PersonalSponsorsSection />
      <CoreStaffSection />
      <StaffSection />
      <EventStaffSection />

      <div className="fixed right-0 bottom-[env(safe-area-inset-bottom)] p-4 md:hidden">
        <ShareButton />
      </div>
    </main>
  );
};

export default Home;
