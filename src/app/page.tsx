import CoreStaffSection from "@/components/core-staff-section";
import EventOverview from "@/components/event-overview";
import Hero from "@/components/hero";
import { NewsSection } from "@/components/news-section";
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
      <CoreStaffSection />
      <StaffSection />
    </main>
  );
};

export default Home;
