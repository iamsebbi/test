1. Content & Header Structure:

Creează o secțiune <section> cu un container principal.

Top Label: Un element <span> cu textul (studio), font size mic (text-xs/sm), lowercase, text-muted-foreground.

Copy Block: Un <p> cu textul: "surpirndem momente care ii aducpe oameni impreuna. din iasi, venim cu un mix de curiozitate si atentie la detaliu, transformanda nunti, botezuri sau petrecerea ta in amintiri vizuale clare. lucram relaxa, alaturi de tine, pentru a d forma unei povesti care sa ramana vie peste ani, fie ca vorba de inceputul unei familii sau bucuria unui moment nou".

CTA: Un component Button (shadcn) cu variant "link" sau "outline", label "mai mult", plasat sub text.

2. Image Grid System (Desktop - 3 Columns):

Folosește un wrapper cu display: flex sau grid-cols-3 cu itemi aliniați asimetric:

Card 1: Image wrapper cu h-screen (sau h-[100vh]), aspect-ratio portrait.

Card 2: Image wrapper cu înălțime mai mică, aspect-ratio landscape, centrat vertical.

Card 3: Image wrapper cu aspect-ratio portrait, înălțime aproximativ 70-80% din Card 1.

Service Footer: Sub fiecare imagine, un div cu flex justify-between items-center w-full mt-2.

Stânga: Text mic (ex: "nunta ta").

Dreapta: Text mic (ex: "exploreaza").

3. Responsive Logic (Mobile):

Pe mobile (hidden md:flex logic), transformă grid-ul într-o coloană (flex-col).

Order: Păstrează ordinea Portrait (1) -> Landscape (2) -> Portrait (3).

Sync Dimensions: Cele două imagini de tip Portrait (1 și 3) trebuie să aibă aceeași înălțime și aspect-ratio pe mobil pentru consistență vizuală.

4. Technical Requirements:

Folosește img cu object-cover pentru a asigura încadrarea corectă în containerele asimetrice.

Aplică text-muted-foreground pentru textele secundare conform specificațiilor.

Nu defini culori sau fonturi personalizate, folosește variabilele globale existente în proiect.
