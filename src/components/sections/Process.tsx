"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: 1,
    title: "Anfrage",
    description:
      "Du beschreibst uns dein Wunschprodukt — wir starten die Recherche.",
  },
  {
    number: 2,
    title: "Produktrecherche",
    description:
      "Wir finden die besten Hersteller und vergleichen Qualität & Preise.",
  },
  {
    number: 3,
    title: "Offerte",
    description:
      "Du erhältst eine transparente Offerte mit allen Kosten.",
  },
  {
    number: 4,
    title: "Bestätigung",
    description: "Nach deinem Go starten wir den Produktionsprozess.",
  },
  {
    number: 5,
    title: "Produktion",
    description:
      "Dein Produkt wird nach deinen Spezifikationen gefertigt.",
  },
  {
    number: 6,
    title: "Qualitätskontrolle",
    description:
      "Vor-Ort-Inspektion und QC nach Schweizer Standards.",
  },
  {
    number: 7,
    title: "Lieferung",
    description:
      "Import, Verzollung und Lieferung direkt zu dir in die Schweiz.",
  },
];

export default function Process() {
  return (
    <section id="prozess" className="bg-[#FAFAFA] py-24 text-[#1A1A1A]">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.p
          className="text-sm text-[#E8593C] uppercase tracking-widest mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          PROZESS
        </motion.p>
        <motion.h2
          className="font-heading text-4xl md:text-5xl text-[#1A1A1A] mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          7 Schritte zum Ziel
        </motion.h2>
        <motion.p
          className="text-[#6B7280] text-lg mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Von der Idee bis zur Lieferung — wir kümmern uns um alles.
        </motion.p>

        {/* Timeline */}
        <div className="relative">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className={`flex items-start gap-8 ${
                index === steps.length - 1 ? "mb-0" : "mb-12"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Left: Number circle + connecting line */}
              <div className="relative flex flex-col items-center">
                <motion.div
                  className="w-12 h-12 rounded-full border-2 flex items-center justify-center font-heading text-lg flex-shrink-0"
                  initial={{
                    borderColor: "#E8E4DE",
                    color: "#A3A3A3",
                    backgroundColor: "transparent",
                  }}
                  whileInView={{
                    borderColor: "#E8593C",
                    color: "#E8593C",
                    backgroundColor: "rgba(232, 89, 60, 0.05)",
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                >
                  {step.number}
                </motion.div>
                {/* Connecting line */}
                {index < steps.length - 1 && (
                  <div className="w-px bg-[#E8E4DE] absolute top-12 bottom-0 left-1/2 -translate-x-1/2 h-12" />
                )}
              </div>

              {/* Right: Content */}
              <div className="pt-2.5">
                <h3 className="font-semibold text-lg text-[#1A1A1A]">
                  {step.title}
                </h3>
                <p className="text-[#6B7280] text-sm mt-1">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
