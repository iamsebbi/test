import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import ActionSection from "./ActionSection";
import StudioSection from "./StudioSection";
import { ModernBanners } from "./ModernBanners";

function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-canvas">
        <HeroSection />
        <StudioSection />
        <ActionSection />
        {/* <ModernBanners /> */}
      </main>
    </>
  );
}

export default App;
