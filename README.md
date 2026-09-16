# Innovarex Swiss – B2B Landingpage

Statische Landingpage der Innovarex GmbH (innovarex.swiss): eine einzelne `index.html` mit Tailwind CSS per CDN.

## Lokal testen

Datei `index.html` direkt im Browser öffnen – kein Build nötig.

Optional mit lokalem Server:

```bash
python3 -m http.server 8080
# → http://localhost:8080
```

## Struktur

```
landingpage/
├── index.html          Komplette Seite (Navigation, Hero, Leistungen, Referenzen,
│                       Ablauf, Über uns, Kontaktformular, Footer, Impressum/Datenschutz/AGB)
└── assets/
    ├── logo.png            Logo, 1200 px breit (wird auf der Seite verwendet)
    └── logo-original.png   Logo in Originalauflösung
```

## Kontaktformular

Das Formular sendet per POST an FormSubmit (`https://formsubmit.co/vdalipi@innovarex.swiss`).
Beim ersten Absenden schickt FormSubmit eine Aktivierungsmail an diese Adresse – einmal bestätigen, danach landen Anfragen direkt im Postfach.
Soll eine andere Adresse verwendet werden: `action`-Attribut des `<form>` und die E-Mail-Adressen in Kontakt, Footer und Impressum anpassen.

## Deployment

Statische Seite – funktioniert auf Hostpoint (Webspace), Vercel, Netlify oder GitHub Pages ohne Anpassung.
