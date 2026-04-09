import type { Metadata } from "next";
import { Instrument_Serif } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Innovarex Swiss | Sourcing, Import & Produktion aus China",
  description:
    "Innovarex Swiss — Dein Schweizer Partner für Product Sourcing, Import und Produktion aus China. Eigenes Team vor Ort, keine Zwischenhändler. E-Commerce, Branding & Performance Marketing.",
  keywords:
    "Import China Schweiz, Product Sourcing, Produktion China, E-Commerce Schweiz, Shopify, Branding, Innovarex",
  openGraph: {
    title: "Innovarex Swiss | Sourcing, Import & Produktion aus China",
    description:
      "Dein Schweizer Full-Service Partner für Import & Produktion aus China. Eigenes Team vor Ort — beste Preise, beste Qualität.",
    url: "https://innovarex.ch",
    type: "website",
    locale: "de_CH",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${instrumentSerif.variable} ${geistSans.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
