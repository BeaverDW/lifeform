import Header from "@/app/components/Header";
import HeroSection from "@/app/components/HeroSection";
import BenefitsSection from "@/app/components/BenefitsSection";
import TrustPoints from "@/app/components/TrustPoints";
import Comparison from "@/app/components/Comparison";
import ComboBenefits from "@/app/components/ComboBenefits";
import Process from "@/app/components/Process";
import FAQ from "@/app/components/FAQ";
import ConsultForm from "@/app/components/ConsultForm";
import FixedBottomBar from "@/app/components/FixedBottomBar";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <BenefitsSection />
        <TrustPoints />
        <Comparison />
        <ComboBenefits />
        <Process />
        <FAQ />
        <ConsultForm />
      </main>
      <FixedBottomBar />
    </>
  );
}
