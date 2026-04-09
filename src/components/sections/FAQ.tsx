"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Was kostet die Zusammenarbeit mit Innovarex?",
    a: "Wir arbeiten transparent: Du zahlst den Einkaufspreis plus unsere Servicepauschale. Keine versteckten Kosten. Genaue Preise erhältst du in der Offerte.",
  },
  {
    q: "Ab welcher Menge lohnt sich ein Import aus China?",
    a: "Grundsätzlich ab ca. 500 Stück, je nach Produkt. Wir beraten dich ehrlich, ob sich der Import für dein Vorhaben lohnt.",
  },
  {
    q: "Wie lange dauert der gesamte Prozess?",
    a: "Von der Anfrage bis zur Lieferung in der Schweiz: typischerweise 8–12 Wochen. Bei Eilaufträgen auch schneller möglich.",
  },
  {
    q: "Wie stellt ihr die Qualität sicher?",
    a: "Wir führen Vor-Ort-Inspektionen in den Fabriken durch und arbeiten nach Schweizer Qualitätsstandards. Jede Charge wird geprüft.",
  },
  {
    q: "Welche Produkte könnt ihr sourcen?",
    a: "Von Elektronik über Kosmetik bis hin zu Haushaltsprodukten — wir haben Erfahrung in verschiedensten Branchen. Frag uns einfach an.",
  },
  {
    q: "Bietet ihr auch Branding und Shopify-Aufbau an?",
    a: "Ja. Wir können den gesamten Prozess abdecken: vom Sourcing über Branding bis zum fertigen Online-Shop mit Performance Marketing.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-white py-24">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="font-heading text-4xl md:text-5xl text-[#1A1A1A] mb-16 text-center">
          Häufig gestellte Fragen
        </h2>

        <Accordion>
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              className="border-b border-[#E8E4DE]"
            >
              <AccordionTrigger className="text-left text-[#1A1A1A] font-medium text-base py-5 hover:text-[#E8593C]">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-[#6B7280] text-sm leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
