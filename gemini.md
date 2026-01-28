Prompt Tehnic pentru AI Agent
Task: Implement HeroSection.jsx and Navbar.jsx components. Tech Stack: React (.jsx), Tailwind CSS (configured with custom theme). Context: The project uses a specific Design System with defined colors (canvas, primary, muted, accent) and fonts (font-sans, font-mono).

1. Components Structure & Layout
   A. Navbar Component (Navbar.jsx)

Position: Fixed top (fixed w-full z-50).

State Behavior:

Initial state: Transparent background (bg-transparent), Text color adaptable to video (likely white or text-canvas).

On Scroll (> 50px): Background becomes opaque (bg-canvas / dark:bg-canvas-dark), Text becomes text-primary. Includes a smooth transition (transition-all duration-300).

Desktop Layout (md:flex):

Left: Logo.

Center: Navigation Links (Evenimente, Oferte, Echipa, Galerie). Use font-sans.

Right: "Contact" Button. Style: bg-accent text-white, hover effects.

Mobile Layout:

Left: Logo.

Right: Hamburger Menu Icon (triggers mobile menu drawer - implementation optional but icon required).

B. Hero Section Component (HeroSection.jsx)

Container: Full viewport height (h-screen), relative positioning.

Background:

HTML5 <video> tag: Absolute, full width/height, object cover, loop, muted, autoplay, playsinline.

Overlay: Optional subtle dark overlay to ensure text readability if needed.

Center Content:

Title: "ONE FRAME.<br />ONE MOMENT.<br />FOREVER".

Style: Centered, Large Typography (H1), font-sans (or font-mono for artistic effect), high contrast.

CTA Button: Text "OFERTE".

Style: Placed below title, bg-accent (dark:bg-accent-dark), text white, rounded, padding, hover transition.

Bottom Bar (Footer of Hero):

Position: Absolute bottom (bottom-0 w-full), padding (p-4 or p-6).

Layout: Flexbox, justify-between, items-center.

Typography: text-sm, font-mono or font-sans, text-canvas (or white/readable on video).

Content Logic:

Left Element:

Desktop: "Scroll to view more".

Mobile: Hidden (hidden md:block).

Center Element:

Text: "Povești vizuale create în Iași, unde detaliul și claritatea vin pe primul loc".

Alignment: Center (or part of the flow depending on space).

Right Element:

Text: &copy; {new Date().getFullYear()}.

2. Design System Application (Tailwind Config)
   Fonts:

Use font-sans (Inter) for body text and navigation.

Use font-mono (Xanh Mono) for the Bottom Bar metadata or the Hero Title (if artistic direction allows).

Colors:

Use bg-accent for CTAs.

Use text-canvas (or specific white) for text overlaying the video.

Use bg-canvas and text-primary for the Navbar when scrolled.

3. Constraints
   Do not use raw CSS where Tailwind classes suffice.

Ensure semantic HTML (e.g., <nav>, <header>, <main>).

Code must be strictly React functional components with Hooks.
