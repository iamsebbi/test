import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import Button from "./Button";

// ─────────────────────────────────────────────────────────────────────────────
// Configuration
// ─────────────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { name: "Evenimente", href: "#" },
  { name: "Oferte", href: "#" },
  { name: "Echipa", href: "#" },
  { name: "Galerie", href: "#" },
];

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ─────────────────────────────────────────────────────────────────────────
  // Dynamic Styles (based on scroll state)
  // ─────────────────────────────────────────────────────────────────────────

  const navStyle = isScrolled
    ? "bg-canvas/80 backdrop-blur-md border-b border-border"
    : "bg-transparent";

  const logoStyle = isScrolled ? "brightness-0" : "brightness-0 invert";

  const linkStyle = isScrolled ? "text-primary" : "text-white/90";

  const buttonStyle = isScrolled
    ? "text-primary border-primary"
    : "text-border border-border";

  const dotStyle = isScrolled ? "bg-primary" : "bg-border";

  const hoverTextStyle = isScrolled ? "text-canvas" : "text-primary";

  const iconStyle = isScrolled ? "text-primary" : "text-border";

  // ─────────────────────────────────────────────────────────────────────────
  // Render
  // ─────────────────────────────────────────────────────────────────────────

  return (
    <nav
      className={`fixed top-0 w-full z-50 py-3 md:py-4 transition-colors duration-300 ${navStyle}`}
    >
      <div className="w-full px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <img
          src="/bold3.svg"
          alt="BOLD Logo"
          className={`h-5 md:h-8 w-auto transition-all duration-300 ${logoStyle}`}
        />

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-md font-medium transition-colors duration-300 hover:text-accent ${linkStyle}`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Actions: Contact Button (Desktop) | Menu Icon (Mobile) */}
        <div className="flex items-center space-x-4">
          <Button
            className={`hidden md:block ${buttonStyle}`}
            dotClassName={dotStyle}
            hoverTextClassName={hoverTextStyle}
          >
            Contact
          </Button>

          <button className="md:hidden p-2">
            <Menu className={`w-6 h-6 ${iconStyle}`} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
