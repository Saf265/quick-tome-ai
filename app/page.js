import CTA from "@/landing/cta";
import FAQ from "@/landing/faq";
import Features from "@/landing/features";
import Footer from "@/landing/footer";
import Header from "@/landing/header";
import Hero from "@/landing/hero";
import Pricing from "@/landing/pricing";
import Testimonials from "@/landing/testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      {/* <Demo /> */}
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}
