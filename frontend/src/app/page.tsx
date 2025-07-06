import Navbar from "@/components/layout/Navbar";
import StickyLabel from "@/components/ui/StickyLabel";
import HeroSection from "@/components/sections/Hero";
import GitHubContributions from "@/components/sections/GitHubContributions";
import ExperienceSection from "@/components/sections/Experience";
import TechStackSection from "@/components/sections/Tech";
import ProjectSection from "@/components/sections/Project";
import ContactSection from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import BackToTopButton from "@/components/ui/BackToTopButton";

export default function Home() {
  return (
    <div>
      <StickyLabel />
          <div className={`min-h-screen`}>
              <Navbar/>
              <div className="max-w-7xl mx-auto px-8 xs:pt-[calc(100vh-90vh)]">
                  <HeroSection/>
                  <GitHubContributions/>
                  <ExperienceSection/>
                  <TechStackSection/>
                  <ProjectSection/>
                  <ContactSection/>
              </div>
              <Footer/>
              <BackToTopButton/>
          </div>
    </div>
  );
}
