"use client";

import {
  Search,
  HandCoins,
  ShieldCheck,
  Ship,
  ShoppingBag,
  Megaphone,
} from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const services = [
  {
    icon: Search,
    title: "Product Sourcing",
    description:
      "Wir finden die richtigen Hersteller für dein Produkt in China.",
  },
  {
    icon: HandCoins,
    title: "Preisverhandlung",
    description:
      "Direkte Verhandlung mit Fabriken — ohne teure Zwischenhändler.",
  },
  {
    icon: ShieldCheck,
    title: "Qualitätskontrolle",
    description:
      "Vor-Ort-Inspektionen und QC nach Schweizer Standards.",
  },
  {
    icon: Ship,
    title: "Import & Verzollung",
    description:
      "Komplette Logistik von China bis zu deiner Tür in der Schweiz.",
  },
  {
    icon: ShoppingBag,
    title: "Shopify & E-Commerce",
    description:
      "Wir bauen deinen Online-Shop und machen ihn verkaufsbereit.",
  },
  {
    icon: Megaphone,
    title: "Branding & Marketing",
    description:
      "Von der Markenidentität bis zur Performance-Marketing-Kampagne.",
  },
];

export default function Services() {
  return (
    <section id="leistungen" className="bg-[#0A0A0A] py-24">
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
            LEISTUNGEN
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="font-heading text-4xl md:text-5xl text-white mb-4"
          >
            Was wir für dich tun
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-[#A3A3A3] text-lg mb-16"
          >
            Von der Idee bis zum Verkauf — alles aus einer Hand.
          </motion.p>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  variants={itemVariants}
                  className="border border-white/[0.06] rounded-2xl p-8 hover:border-[#E8593C]/40 transition-all duration-300 group"
                >
                  <Icon className="w-10 h-10 text-[#A3A3A3] group-hover:text-[#E8593C] transition-colors mb-6" />
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[#A3A3A3] text-sm leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
