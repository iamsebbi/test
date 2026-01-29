import React from "react";
import Button from "./Button";

const StudioSection = () => {
  return (
    <section className="py-20 flex flex-col gap-10">
      {/* Header Structure - Left aligned with padding */}
      <div className="w-full px-4 md:px-8">
        <div className="flex flex-col gap-3 max-w-4xl">
          <span className="text-md font-medium text-muted-foreground uppercase">
            (STUDIO)
          </span>

          <p className="text-xl md:text-2xl leading-snug font-regular tracking-tighter ">
            Surprindem momente care ii aduc pe oameni impreuna. din iasi, venim
            cu un mix de curiozitate si atentie la detaliu, transformand nunti,
            botezuri sau petrecerea ta in amintiri vizuale clare. lucram
            relaxat, alaturi de tine, pentru a da forma unei povesti care sa
            ramana vie peste ani, fie ca e vorba de inceputul unei familii sau
            bucuria unui moment nou.
          </p>

          <div className="pt-2">
            <Button className="w-fit text-sm">Mai mult</Button>
          </div>
        </div>
      </div>

      {/* Image Grid - Full Width */}
      <div className="w-full flex flex-col md:grid md:grid-cols-3 gap-8 md:gap-4 items-start md:px-8">
        {/* Card 1: Portrait */}
        <div className="flex flex-col gap-2 w-full px-4 md:px-0">
          <div className="relative w-full overflow-hidden h-[60vh] md:h-screen">
            <img
              src="/sinitta-leunen-dS87qokCAC4-unsplash.jpg"
              alt="Wedding couple"
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>
          <div className="flex justify-between items-center text-sm text-muted-foreground">
            <span>nunta ta</span>
            <a href="#" className="hover:text-foreground transition-colors">
              exploreaza
            </a>
          </div>
        </div>

        {/* Card 2: Landscape - Top aligned */}
        <div className="flex flex-col gap-2 w-full px-4 md:px-0">
          <div className="relative w-full overflow-hidden aspect-[4/3] md:aspect-[3/2]">
            <img
              src="/events.jpg"
              alt="Event celebration"
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>
          <div className="flex justify-between items-center text-sm text-muted-foreground">
            <span>evenimente</span>
            <a href="#" className="hover:text-foreground transition-colors">
              exploreaza
            </a>
          </div>
        </div>

        {/* Card 3: Portrait - Smaller than Card 1 */}
        <div className="flex flex-col gap-2 w-full px-4 md:px-0">
          {/* On mobile, we might want this to be consistent with Card 1 height if strictly following "Sync Dimensions"
              The prompt says: "Cele două imagini de tip Portrait (1 și 3) trebuie să aibă aceeași înălțime și aspect-ratio pe mobil"
              So I will use the same class for mobile h-[60vh] but on desktop it should be smaller, ~70-80% of Card 1 (screen height).
          */}
          <div className="relative w-full overflow-hidden h-[60vh] md:h-[75vh]">
            <img
              src="/annie-spratt-6pMI--IXV-8-unsplash.jpg"
              alt="Family moments"
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>
          <div className="flex justify-between items-center text-sm text-muted-foreground">
            <span>portrete</span>
            <a href="#" className="hover:text-foreground transition-colors">
              exploreaza
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudioSection;
