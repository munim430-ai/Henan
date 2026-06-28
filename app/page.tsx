import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import LifespanAlert from "@/components/LifespanAlert";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";
import Products from "@/components/Products";
import TdfBadge from "@/components/TdfBadge";
import FuelCalculator from "@/components/FuelCalculator";
import Compliance from "@/components/Compliance";
import AfterSales from "@/components/AfterSales";
import QuoteForm from "@/components/QuoteForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustBar />
      <LifespanAlert />
      <About />
      <WhyUs />
      <Products />
      <FuelCalculator />
      <TdfBadge />
      <Compliance />
      <AfterSales />
      <QuoteForm />
      <Footer />
    </main>
  );
}
