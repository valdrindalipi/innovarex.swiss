"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Valdrin hat uns geholfen, unser Produkt direkt aus China zu sourcen. Die Qualität war top und der Preis unschlagbar.",
    name: "Max M.",
    role: "E-Commerce Unternehmer",
  },
  {
    quote:
      "Vom ersten Gespräch bis zur Lieferung — alles aus einer Hand. Sehr professionell und transparent.",
    name: "Sandra K.",
    role: "Startup-Gründerin",
  },
  {
    quote:
      "Dank Innovarex konnten wir unsere Produktionskosten um 40% senken, ohne Abstriche bei der Qualität.",
    name: "Thomas B.",
    role: "KMU Inhaber",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const, delay: i * 0.15 },
  }),
};

export default function Testimonials() {
  return (
    <section className="bg-[#0A0A0A] py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm text-[#E8593C] uppercase tracking-widest font-medium mb-4">
            KUNDENSTIMMEN
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-white">
            Was unsere Kunden sagen
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="border border-white/[0.06] rounded-2xl p-8"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star
                    key={s}
                    className="w-4 h-4 fill-[#E8593C] text-[#E8593C]"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-white/80 text-sm leading-relaxed mt-4 mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <p className="text-white font-medium text-sm">{t.name}</p>
              <p className="text-[#A3A3A3] text-xs">{t.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
