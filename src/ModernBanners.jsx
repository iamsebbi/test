import { motion, AnimatePresence } from "framer-motion";

// ─────────────────────────────────────────────────────────────
// CONFIGURATION
// ─────────────────────────────────────────────────────────────
const CONFIG = {
  // Layout
  cardWidth: "1440px",
  cardHeight: "50vh",
  cardBgColor: "#E8E4D9",
  borderRadius: "24px",
  imageBorderRadius: "18px",
  frameGap: "16px",
  frameInset: "16px",

  // Animation
  duration: 0.7,
  ease: [0.4, 0, 0.2, 1],
  imageDelay: 0.15,
  textDelay: 0.1,

  // Effects
  blurAmount: "6px",
  imageZoom: 1.03,
  brightnessHover: 0.8,
  textScaleDown: 0.9,
  noiseOpacityHover: 0.5,
};

// Noise SVG (encoded for inline use)
const NOISE_SVG = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.99' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

// Project data
const PROJECTS = [
  { image: "/events.jpg", title: "BOLD Events." },
  { image: "/creative.jpg", title: "BOLD Creative." },
];

// ─────────────────────────────────────────────────────────────
// VARIANTS
// ─────────────────────────────────────────────────────────────
const containerVariants = {
  rest: {
    width: `calc(100% - ${CONFIG.frameGap})`,
    height: `calc(100% - ${CONFIG.frameGap})`,
    borderRadius: CONFIG.imageBorderRadius,
  },
  hover: {
    width: "100%",
    height: "100%",
    borderRadius: CONFIG.borderRadius,
  },
};

const imageVariants = {
  rest: { scale: 1, filter: "blur(0px) brightness(1)" },
  hover: {
    scale: CONFIG.imageZoom,
    filter: `blur(${CONFIG.blurAmount}) brightness(${CONFIG.brightnessHover})`,
  },
};

const noiseVariants = {
  rest: { opacity: 0 },
  hover: { opacity: CONFIG.noiseOpacityHover },
};

const textVariants = {
  rest: { scale: 1, opacity: 1 },
  hover: { scale: CONFIG.textScaleDown, opacity: 0.9 },
};

// ─────────────────────────────────────────────────────────────
// COMPONENTS
// ─────────────────────────────────────────────────────────────
const ProjectCard = ({ image, title }) => (
  <div className="w-full flex justify-center items-center bg-[#F7F4ED] overflow-hidden">
    <motion.div
      className="max-w-full flex items-center justify-center relative p-4 cursor-pointer"
      style={{ width: CONFIG.cardWidth, height: CONFIG.cardHeight }}
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      {/* Frame Background */}
      <div
        className="absolute z-0"
        style={{
          inset: CONFIG.frameInset,
          backgroundColor: CONFIG.cardBgColor,
          borderRadius: CONFIG.borderRadius,
        }}
      />

      {/* Interactive Image Container */}
      <motion.div
        className="relative z-10 overflow-hidden will-change-[width,height]"
        variants={containerVariants}
        transition={{ duration: CONFIG.duration, ease: CONFIG.ease }}
      >
        {/* Image */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center will-change-transform"
          style={{ backgroundImage: `url(${image})` }}
          variants={imageVariants}
          transition={{
            duration: CONFIG.duration,
            ease: CONFIG.ease,
            delay: CONFIG.imageDelay,
          }}
        />

        {/* Noise Overlay */}
        <motion.div
          className="absolute inset-0 z-20 pointer-events-none mix-blend-overlay"
          variants={noiseVariants}
          transition={{ duration: CONFIG.duration, delay: CONFIG.imageDelay }}
          style={{ backgroundImage: NOISE_SVG, backgroundSize: "150px" }}
        />
      </motion.div>

      {/* Text Overlay - Moved outside the animating container for stability */}
      <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
        <motion.h2
          className="text-white text-3xl md:text-5xl font-bold tracking-tight will-change-transform antialiased"
          style={{
            WebkitFontSmoothing: "antialiased",
            backfaceVisibility: "hidden",
          }}
          variants={textVariants}
          transition={{
            duration: CONFIG.duration * 0.9,
            ease: "easeInOut",
            delay: CONFIG.textDelay,
          }}
        >
          {title}
        </motion.h2>
      </div>
    </motion.div>
  </div>
);

// ─────────────────────────────────────────────────────────────
// EXPORT
// ─────────────────────────────────────────────────────────────
export const ModernBanners = () => (
  <section className="w-full h-screen flex flex-col bg-[#F7F4ED]">
    {PROJECTS.map((project) => (
      <ProjectCard key={project.title} {...project} />
    ))}
  </section>
);
