import Button from "./Button";
import { motion } from "framer-motion";

const ActionSection = () => {
  return (
    <section className="w-full py-32 md:py-48 bg-canvas flex flex-col items-center text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        <h2 className="text-4xl md:text-6xl font-regular tracking-tight mb-8">
          Să dăm viață ideilor tale.
        </h2>
        <p className="text-muted text-lg md:text-xl mb-12 max-w-xl mx-auto">
          Fiecare proiect este o oportunitate de a crea ceva memorabil. Suntem
          gata să transformăm viziunea ta în realitate.
        </p>
        <Button
          variant="primary"
          className="mt-4 text-border border-border"
          dotClassName="bg-border"
          hoverTextClassName="text-primary"
        >
          Hai să discutăm
        </Button>
      </motion.div>
    </section>
  );
};

export default ActionSection;
