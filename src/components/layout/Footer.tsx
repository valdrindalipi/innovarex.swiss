import { Mail } from "lucide-react";

function LinkedinIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

const navigationLinks = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Prozess", href: "#prozess" },
  { label: "Referenzen", href: "#referenzen" },
  { label: "Über uns", href: "#ueber-uns" },
  { label: "FAQ", href: "#faq" },
];

const brandLinks = [
  { label: "PowerJets.ch", href: "https://powerjets.ch", external: true },
  { label: "MatchaGlow.ch", href: "https://matchaglow.ch", external: true },
];

export default function Footer() {
  return (
    <footer className="bg-[#050505] py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* Columns */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Col 1: Brand */}
          <div className="flex flex-col gap-4">
            <span className="font-sans text-lg font-medium tracking-tight text-white">
              innovarex swiss
            </span>
            <p className="text-sm leading-relaxed text-[#A3A3A3]">
              Dein Schweizer Partner für Sourcing &amp; Import aus China.
            </p>
            <p className="text-sm text-[#A3A3A3]">Eglisau, Schweiz</p>
          </div>

          {/* Col 2: Navigation */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="flex flex-col gap-3">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[#A3A3A3] transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Unsere Marken */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Unsere Marken
            </h4>
            <ul className="flex flex-col gap-3">
              {brandLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#A3A3A3] transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Kontakt */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Kontakt
            </h4>
            <a
              href="mailto:info@innovarex.ch"
              className="flex items-center gap-2 text-sm text-[#A3A3A3] transition-colors duration-200 hover:text-white"
            >
              <Mail size={16} />
              info@innovarex.ch
            </a>
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A3A3A3] transition-colors duration-200 hover:text-white"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A3A3A3] transition-colors duration-200 hover:text-white"
                aria-label="Instagram"
              >
                <InstagramIcon size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 h-px w-full bg-[rgba(255,255,255,0.1)]" />

        {/* Bottom row */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-[#A3A3A3]">
            &copy; 2026 Innovarex GmbH, Eglisau. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="/impressum"
              className="text-xs text-[#A3A3A3] transition-colors duration-200 hover:text-white"
            >
              Impressum
            </a>
            <span className="text-xs text-[#A3A3A3]">|</span>
            <a
              href="/datenschutz"
              className="text-xs text-[#A3A3A3] transition-colors duration-200 hover:text-white"
            >
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
