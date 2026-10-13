import { homeStructuredData } from "@/lib/seo";
import AppJourney from "@/components/landing/AppJourney";
import AdminPanel from "@/components/landing/AdminPanel";
import ArepaStack from "@/components/landing/ArepaStack";
import FinalCta from "@/components/landing/FinalCta";
import Hero from "@/components/landing/Hero";
import KioskShowcase from "@/components/landing/KioskShowcase";
import SiteFooter from "@/components/landing/SiteFooter";
import Tapes from "@/components/landing/Tapes";
import BusinessModel from "@/components/landing/BusinessModel";

export default function Home() {
  return (
    <>
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeStructuredData).replace(/</g, "\\u003c") }} />
        <Hero />
        <Tapes />
        <ArepaStack />
        <AppJourney />
        <KioskShowcase />
        <AdminPanel />
        <BusinessModel />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
