import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import PartnersSection from "./components/PartnersSection";
import FeaturesSection from "./components/FeaturesSection";
import TeamSection from "./components/TeamSection";
import partners from "./data/partner";

const App = () => {
  return (
    <div className="bg-[#0A0D10]">
      <Navbar />
      <HeroSection />
      <PartnersSection images={partners}/>
      <FeaturesSection />
      <TeamSection />
    </div>
  );
}

export default App;