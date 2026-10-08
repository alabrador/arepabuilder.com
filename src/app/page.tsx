import AppJourney from "@/components/landing/AppJourney";
import AdminPanel from "@/components/landing/AdminPanel";
import ArepaStack from "@/components/landing/ArepaStack";
import FinalCta from "@/components/landing/FinalCta";
import Hero from "@/components/landing/Hero";
import KioskShowcase from "@/components/landing/KioskShowcase";
import SiteFooter from "@/components/landing/SiteFooter";
import Tapes from "@/components/landing/Tapes";
import Tickets from "@/components/landing/Tickets";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Tapes />
        <ArepaStack />
        <AppJourney />
        <KioskShowcase />
        <AdminPanel />
        <Tickets />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
