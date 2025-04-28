import CTA from "./components/CTA";
import Features from "./components/Features";
import Footer from "./components/footer";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/navbar";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </>
  );
}
