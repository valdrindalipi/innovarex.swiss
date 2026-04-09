"use client";

import { motion } from "framer-motion";
import Image from "next/image";
function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Founder() {
  return (
    <section id="ueber-uns" className="bg-[#F5F0EB] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Image */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Valdrin Dalipi — Gründer von Innovarex Swiss"
                fill
                className="object-cover rounded-2xl"
                /* TODO: Durch echtes Bild ersetzen */
              />
            </div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-sm text-[#E8593C] uppercase tracking-widest font-medium mb-4">
              DER GRÜNDER
            </p>
            <h2 className="font-heading text-4xl md:text-5xl text-[#1A1A1A] mb-2">
              Valdrin Dalipi
            </h2>
            <p className="text-[#6B7280] text-sm mb-8">
              Gründer &amp; Geschäftsführer, Innovarex Swiss
            </p>

            <p className="text-[#4B5563] leading-relaxed mb-6">
              Mit 24 Jahren habe ich bereits drei Marken aufgebaut, eine davon
              erfolgreich verkauft. Ich war selbst in den Fabriken in China, habe
              Qualitätskontrollen durchgeführt und weiss genau, worauf es beim
              Import ankommt.
            </p>
            <p className="text-[#4B5563] leading-relaxed mb-6">
              Was mich antreibt: Schweizer Unternehmen den direkten Zugang zu
              chinesischen Herstellern zu ermöglichen — ohne Zwischenhändler,
              ohne versteckte Kosten, ohne Kompromisse bei der Qualität.
            </p>

            <blockquote className="border-l-2 border-[#E8593C] pl-6 mt-8">
              <p className="font-heading text-xl md:text-2xl text-[#1A1A1A] italic">
                «Ich war selber da — in den Fabriken, bei der QC, am Hafen.»
              </p>
            </blockquote>

            <div className="flex gap-4 mt-8">
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-[#A3A3A3] hover:text-[#E8593C] transition-colors"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-[#A3A3A3] hover:text-[#E8593C] transition-colors"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
