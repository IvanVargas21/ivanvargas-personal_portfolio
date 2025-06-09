import Navbar from "@/components/layout/Navbar";
import StickyLabel from "@/components/ui/StickyLabel";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div>
      <StickyLabel />
          <div className={`min-h-screen`}>
              <Navbar/>
              <div className="max-w-7xl mx-auto px-8 xs:pt-[calc(100vh-90vh)]">
                  <HeroSection/>
              </div>
          </div>
    </div>
  );
}
