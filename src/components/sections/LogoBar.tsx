const logos = [
  "Brack.ch",
  "Galaxus",
  "Rossmann",
  "Jumbo",
  "AMAVITA",
  "Zur Rose",
  "Kanela",
];

export default function LogoBar() {
  return (
    <section className="bg-[#F5F0EB] py-12">
      <p className="text-sm text-[#A3A3A3] uppercase tracking-widest mb-8 text-center">
        Unsere Produkte sind erhältlich bei
      </p>

      <div className="overflow-hidden">
        <div className="flex animate-marquee w-max">
          {/* First set */}
          {logos.map((name) => (
            <span
              key={`a-${name}`}
              className="mx-4 px-8 py-3 bg-[#E8E4DE] rounded-lg text-[#1A1A1A]/40 font-medium text-sm whitespace-nowrap"
            >
              {name}
            </span>
          ))}

          {/* Duplicate set for seamless loop */}
          {logos.map((name) => (
            <span
              key={`b-${name}`}
              className="mx-4 px-8 py-3 bg-[#E8E4DE] rounded-lg text-[#1A1A1A]/40 font-medium text-sm whitespace-nowrap"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
