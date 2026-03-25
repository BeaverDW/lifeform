import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import TrustPoints from "@/components/TrustPoints";
import Comparison from "@/components/Comparison";
import ComboBenefits from "@/components/ComboBenefits";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import ConsultForm from "@/components/ConsultForm";
import Reviews from "@/components/Reviews";
import FixedBottomBar from "@/components/FixedBottomBar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ConsultForm />
        <BenefitsSection />
        <TrustPoints />
        <Comparison />
        <ComboBenefits />
        <Process />
        <Reviews />
        <FAQ />
        <ConsultForm />
      </main>
      <Footer />
      <FixedBottomBar />
    </>
  );
}
