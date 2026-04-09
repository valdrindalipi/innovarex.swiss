import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import LogoBar from "@/components/sections/LogoBar";
import CaseStudies from "@/components/sections/CaseStudies";
import Process from "@/components/sections/Process";
import Services from "@/components/sections/Services";
import Gallery from "@/components/sections/Gallery";
import Founder from "@/components/sections/Founder";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <LogoBar />
      <CaseStudies />
      <Process />
      <Services />
      <Gallery />
      <Founder />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
