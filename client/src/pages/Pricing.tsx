import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PricingTeaser from "@/components/PricingTeaser";

export default function Pricing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <PricingTeaser />
      </main>
      <Footer />
    </div>
  );
}
