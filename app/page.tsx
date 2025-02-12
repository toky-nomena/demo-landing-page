import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Activities from "@/components/activities/activities";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background gradients */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-blue-200/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-purple-500/10 blur-[100px]" />
      </div>
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Activities />
        <Footer />
      </div>
    </div>
  );
}
