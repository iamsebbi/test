import { motion } from "framer-motion";
import Button from "./Button";

// ─────────────────────────────────────────────────────────────────────────────
// Configuration
// ─────────────────────────────────────────────────────────────────────────────

const VIDEO_URL_DESKTOP =
  "https://assets.mixkit.co/videos/preview/mixkit-photographer-capturing-a-photo-in-the-forest-43343-large.mp4";

const VIDEO_URL_MOBILE = "/hero.mp4";

const HERO_TEXT = {
  line1: "CREEAM MISCAREA",
  line2: "IMAGINI CARE STAU MEREU",
  accent: "CU TINE.",
};

const DESCRIPTION =
  "Povești vizuale create în Iași, unde detaliul și claritatea vin pe primul loc";

const SCROLL_CUE = "Scroll pentru mai mult";

// Animation presets
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: "easeOut" },
};

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

const HeroSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section className="relative h-screen w-full flex items-start justify-center overflow-hidden bg-black font-sans pt-32 md:pt-48">
      {/* ─────────────── Background Video ─────────────── */}
      {/* Mobile Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="md:hidden absolute inset-0 w-full h-full object-cover opacity-60"
      >
        <source src={VIDEO_URL_MOBILE} type="video/mp4" />
      </video>

      {/* Desktop Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="hidden md:block absolute inset-0 w-full h-full object-cover opacity-60"
      >
        <source src={VIDEO_URL_DESKTOP} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* ─────────────── Main Content ─────────────── */}
      <div className="relative z-10 w-full flex justify-center md:justify-start px-6 md:pl-[43%]">
        <div className="text-left">
          <motion.h1
            {...fadeInUp}
            className="text-white text-5xl md:text-7xl font-regular leading-[0.90] tracking-tight"
          >
            {HERO_TEXT.line1}
            <br />
            {HERO_TEXT.line2}
            <br />
            <span className="font-mono italic">{HERO_TEXT.accent}</span>
          </motion.h1>

          <Button
            size="lg"
            className="mt-12 text-border border-border"
            dotClassName="bg-border"
            hoverTextClassName="text-primary"
          >
            OFERTE
          </Button>
        </div>
      </div>

      {/* ─────────────── Bottom Bar ─────────────── */}
      <div className="absolute bottom-0 w-full p-6 md:p-10 flex flex-row justify-between items-end text-white/80 font-medium z-10 gap-4">
        {/* Description */}
        <p className="max-w-[65%] md:max-w-md text-left leading-relaxed text-sm md:text-base">
          {DESCRIPTION}
        </p>

        {/* Scroll Cue (Desktop only) */}
        <div className="hidden md:flex items-center space-x-2 text-sm md:text-base">
          <span className="w-1 h-1 bg-white rounded-full" />
          <span>{SCROLL_CUE}</span>
        </div>

        {/* Copyright */}
        <div className="text-lg md:text-7xl">&copy;{currentYear}</div>
      </div>
    </section>
  );
};

export default HeroSection;
