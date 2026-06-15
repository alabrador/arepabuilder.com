import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import AppShowcase from "@/components/sections/AppShowcase";
import HowItWorks from "@/components/sections/HowItWorks";
import DemoVideo from "@/components/sections/DemoVideo";
import BackendFlow from "@/components/sections/BackendFlow";
import ContactDemo from "@/components/sections/ContactDemo";
import CtaBanner from "@/components/sections/CtaBanner";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <AppShowcase />
        <HowItWorks />
        <DemoVideo />
        <BackendFlow />
        <ContactDemo />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
