"use client";

import Image from "next/image";
import { TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function CaseStudies() {
  return (
    <section id="referenzen" className="bg-[#0A0A0A] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.p
            variants={itemVariants}
            className="text-sm text-[#E8593C] uppercase tracking-widest mb-4"
          >
            REFERENZEN
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="font-heading text-4xl md:text-5xl text-white mb-4"
          >
            Was wir aufgebaut haben
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-[#A3A3A3] text-lg mb-16"
          >
            Keine Theorie — echte Produkte, echte Ergebnisse.
          </motion.p>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-4"
          >
            {/* PowerJets — large card, spans 2 rows */}
            <motion.div
              variants={itemVariants}
              className="lg:row-span-2 bg-[#1A1A1A] rounded-2xl overflow-hidden border border-white/[0.06] hover:border-[#E8593C]/30 transition-all duration-300 group"
            >
              <div className="relative h-64 overflow-hidden">
                {/* TODO: Durch echtes Bild ersetzen */}
                <Image
                  src="https://images.pexels.com/photos/6872149/pexels-photo-6872149.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="PowerJets.ch"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="inline-block bg-white/10 rounded-full px-3 py-1 text-xs text-white/70 mb-3">
                  B2B &amp; D2C
                </span>
                <h3 className="font-heading text-2xl text-white">
                  PowerJets.ch
                </h3>
                <p className="text-[#A3A3A3] text-sm mt-2 leading-relaxed">
                  Kompakter kabelloser High-Performance Blower für kontaktlose
                  Autotrocknung. 4× ausverkauft auf Galaxus &amp; Brack. Im B2B bei
                  Jumbo/FIBAG.
                </p>
                <div className="flex gap-6 mt-4 text-sm">
                  <span className="text-white font-medium">4× Sold Out</span>
                  <span className="text-white font-medium">&lt;1% Returns</span>
                  <span className="text-white font-medium">129.95 CHF UVP</span>
                </div>
              </div>
            </motion.div>

            {/* MatchaGlow — right top */}
            <motion.div
              variants={itemVariants}
              className="bg-[#1A1A1A] rounded-2xl overflow-hidden border border-white/[0.06] hover:border-[#E8593C]/30 transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                {/* TODO: Durch echtes Bild ersetzen */}
                <Image
                  src="https://images.pexels.com/photos/3662845/pexels-photo-3662845.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="MatchaGlow.ch"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="inline-block bg-white/10 rounded-full px-3 py-1 text-xs text-white/70 mb-3">
                  Retail &amp; Online
                </span>
                <h3 className="font-heading text-2xl text-white">
                  MatchaGlow.ch
                </h3>
                <p className="text-[#A3A3A3] text-sm mt-2 leading-relaxed">
                  Erste Schweizer Marke: Ceremonial Matcha + Kollagen. Bei
                  Rossmann, Drogerien, Apotheken und online.
                </p>
                <div className="flex gap-6 mt-4 text-sm">
                  <span className="text-white font-medium">Rossmann CH</span>
                  <span className="text-white font-medium">6+ Retailer</span>
                </div>
              </div>
            </motion.div>

            {/* Wiegeparadies — right bottom */}
            <motion.div
              variants={itemVariants}
              className="bg-[#1A1A1A] rounded-2xl overflow-hidden border border-white/[0.06] hover:border-[#E8593C]/30 transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#1A1A1A] to-[#262626] flex items-center justify-center">
                {/* TODO: Durch echtes Bild ersetzen */}
                <TrendingUp className="w-16 h-16 text-[#A3A3A3]/40" />
              </div>
              <div className="p-6">
                <span className="inline-block bg-white/10 rounded-full px-3 py-1 text-xs text-white/70 mb-3">
                  Exit 2026
                </span>
                <h3 className="font-heading text-2xl text-white">
                  Wiegeparadies.ch
                </h3>
                <p className="text-[#A3A3A3] text-sm mt-2 leading-relaxed">
                  2023 aufgebaut, 2026 erfolgreich verkauft. Proof of Concept:
                  Wir bauen Marken, die Wert schaffen.
                </p>
                <div className="flex gap-6 mt-4 text-sm">
                  <span className="text-white font-medium">
                    Aufgebaut → Exit
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
