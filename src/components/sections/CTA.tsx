"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";

export default function CTA() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ name, email, message });
  };

  return (
    <section id="kontakt" className="bg-[#0A0A0A] py-24">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">
            Bereit, dein Produkt aus China zu sourcen?
          </h2>
          <p className="text-[#A3A3A3] mb-12">
            Erzähl uns von deinem Projekt — wir melden uns innert 24 Stunden.
          </p>

          <form onSubmit={handleSubmit} className="text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-[#1A1A1A] border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-[#6B7280] focus:border-[#E8593C] focus:outline-none transition-colors"
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-[#1A1A1A] border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-[#6B7280] focus:border-[#E8593C] focus:outline-none transition-colors"
              />
            </div>

            <textarea
              placeholder="Nachricht / Produktbeschreibung"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-[#6B7280] focus:border-[#E8593C] focus:outline-none transition-colors mb-4"
            />

            <button
              type="submit"
              className="w-full bg-[#E8593C] hover:bg-[#D04A2E] text-white rounded-full py-4 text-base font-medium transition-colors mt-2"
            >
              Anfrage senden
            </button>
          </form>

          <p className="text-[#A3A3A3] text-sm mt-8">
            Oder direkt per E-Mail:{" "}
            <a
              href="mailto:info@innovarex.ch"
              className="text-white hover:text-[#E8593C] transition-colors"
            >
              info@innovarex.ch
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
