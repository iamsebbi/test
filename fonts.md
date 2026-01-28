:root {
/_ Typography _/
--font-primary: 'Inter', sans-serif; /_ Utilizare: Global (Titluri, Body, UI) _/
--font-mono: 'Xanh Mono', monospace; /_ Utilizare: Code blocks, accente, citate _/
}

/_ --- TYPOGRAPHY UTILITIES --- _/

/_ Aplică Inter (Principal) _/
.font-sans {
font-family: var(--font-primary);
}

/_ Aplică Xanh Mono (Cod/Accente) _/
.font-mono {
font-family: var(--font-mono);
}

/_ --- COLOR UTILITIES (Semantic) --- _/
/_ Aceste clase își schimbă automat valoarea dacă variabilele
sunt setate corect pe :root sau în media queries _/

/_ Fundal și Text de bază _/
.bg-surface {
background-color: var(--light-bg-canvas); /_ sau --dark-bg-canvas în dark mode _/
}

.text-primary {
color: var(--light-text-primary);
}

/_ Text Secundar _/
.text-muted {
color: var(--light-text-muted);
}

/_ Accente și Link-uri _/
.text-accent {
color: var(--light-accent);
}

.bg-accent {
background-color: var(--light-accent);
color: #FFFFFF; /_ Text alb pe accent _/
}

/_ Borduri _/
.border-default {
border: 1px solid var(--light-border);
}
