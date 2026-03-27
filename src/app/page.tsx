import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import Problem from "@/components/sections/problem";
import IndustryShowcase from "@/components/sections/industry-showcase";
import Features from "@/components/sections/features";
import HowItWorks from "@/components/sections/how-it-works";
import Comparison from "@/components/sections/comparison";
import Pricing from "@/components/sections/pricing";
import Integrations from "@/components/sections/integrations";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <IndustryShowcase />
        <HowItWorks />
        <Features />
        <Integrations />
        <Comparison />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
