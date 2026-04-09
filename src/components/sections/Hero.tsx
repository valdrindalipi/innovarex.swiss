"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const lineVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const stats = [
  { number: "60+", label: "Projekte realisiert" },
  { number: "3", label: "Eigene Marken" },
  { number: "1", label: "Erfolgreicher Exit" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0A0A0A] overflow-hidden">
      {/* TODO: Durch echtes Bild ersetzen */}
      <Image
        src="https://images.pexels.com/photos/1117210/pexels-photo-1117210.jpeg?auto=compress&cs=tinysrgb&w=1920"
        alt="Container Hafen"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/70 to-[#0A0A0A]/40" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24 flex flex-col items-center text-center">
        {/* Headline */}
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="font-heading text-5xl md:text-7xl lg:text-8xl text-white leading-tight"
        >
          <motion.span variants={lineVariants} className="block">
            Dein Produkt.
          </motion.span>
          <motion.span variants={lineVariants} className="block">
            Direkt aus China.
          </motion.span>
          <motion.span variants={lineVariants} className="block">
            Ohne Umwege.
          </motion.span>
        </motion.h1>

        {/* Subline */}
        <motion.p
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
          className="mt-6 font-sans text-lg text-[#A3A3A3] max-w-xl"
        >
          Wir organisieren Sourcing, Produktion, Qualitätskontrolle und Import
          — damit du dich auf dein Business konzentrieren kannst.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
          className="mt-8 flex flex-wrap gap-4 justify-center"
        >
          <a
            href="#kontakt"
            className="bg-[#E8593C] hover:bg-[#D04A2E] text-white rounded-full px-8 py-4 text-base font-medium transition-colors"
          >
            Kostenlose Beratung anfragen
          </a>
          <a
            href="#referenzen"
            className="border border-white/20 text-white rounded-full px-8 py-4 text-base font-medium hover:bg-white/5 transition-colors"
          >
            Unsere Referenzen
          </a>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.0 }}
          className="border-t border-white/10 pt-8 mt-12 w-full max-w-2xl grid grid-cols-3 gap-8"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-heading text-white">
                {stat.number}
              </div>
              <div className="text-sm text-[#A3A3A3]">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Scroll Down Chevron */}
        <div className="mt-12">
          <ChevronDown className="w-6 h-6 text-white/50 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
