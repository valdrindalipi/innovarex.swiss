"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Hinweis: Aktuell Platzhalter — werden durch echte Bilder ersetzt

const images = [
  {
    src: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=600",
    label: "Fabrikhalle",
    /* TODO: Durch echtes Bild ersetzen */
  },
  {
    src: "https://images.pexels.com/photos/3785927/pexels-photo-3785927.jpeg?auto=compress&cs=tinysrgb&w=600",
    label: "Qualitätskontrolle",
    /* TODO: Durch echtes Bild ersetzen */
  },
  {
    src: "https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=600",
    label: "Verpackung",
    /* TODO: Durch echtes Bild ersetzen */
  },
  {
    src: "https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=600",
    label: "Container & Versand",
    /* TODO: Durch echtes Bild ersetzen */
  },
  {
    src: "https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=600",
    label: "Warehouse",
    /* TODO: Durch echtes Bild ersetzen */
  },
  {
    src: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
    label: "Team Meeting",
    /* TODO: Durch echtes Bild ersetzen */
  },
];

export default function Gallery() {
  return (
    <section className="bg-[#0A0A0A] py-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <motion.p
          className="text-sm text-[#E8593C] uppercase tracking-widest mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          EINBLICKE
        </motion.p>
        <motion.h2
          className="font-heading text-4xl md:text-5xl text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Direkt vor Ort — in der Produktion
        </motion.h2>
        <motion.p
          className="text-[#A3A3A3] text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Keine Stock-Fotos. Echte Einblicke aus unseren Fabrikbesuchen.
        </motion.p>
      </div>

      {/* Horizontal scroll gallery */}
      <div className="overflow-x-auto scrollbar-hide snap-x snap-mandatory">
        <div className="flex gap-4 px-6 pb-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="group snap-center flex-shrink-0 relative rounded-xl overflow-hidden aspect-[4/3] min-w-[300px] md:min-w-[400px]"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image
                src={image.src}
                alt={image.label}
                fill
                className="object-cover"
                loading="lazy"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold text-lg">
                  {image.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
