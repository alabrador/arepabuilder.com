import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Features from "@/components/sections/Features";
import AppShowcase from "@/components/sections/AppShowcase";
import HowItWorks from "@/components/sections/HowItWorks";
import BackendFlow from "@/components/sections/BackendFlow";
import CtaBanner from "@/components/sections/CtaBanner";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Features />
        <AppShowcase />
        <HowItWorks />
        <BackendFlow />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
