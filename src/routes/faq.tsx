import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { CtaBand } from "@/components/site-chrome";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Întrebări Frecvente – Montaj Aer Condiționat București" },
      { name: "description", content: "Răspunsuri la întrebările frecvente despre montaj, garanție, branduri și timpii de intervenție pentru aer condiționat în București." },
      { property: "og:title", content: "Întrebări Frecvente – Clima Expert București" },
      { property: "og:description", content: "Tot ce trebuie să știi înainte de a-ți monta un aer condiționat." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqsForSchema(),
        }),
      },
    ],
  }),
  component: FaqPage,
});

const faqs = [
  { q: "Cât durează montajul unui aparat de aer condiționat?", a: "În mod normal, montajul unui aparat split standard durează între 2 și 3 ore. Pentru situații complexe (tub de cupru mai lung, mascări speciale) poate ajunge la 4-5 ore. Întotdeauna terminăm în aceeași zi." },
  { q: "Oferiți garanție pentru lucrare?", a: "Da. Oferim 2 ani garanție pe manoperă, la care se adaugă garanția producătorului pentru aparat (de obicei 3-5 ani). În plus, primul control tehnic este gratuit." },
  { q: "Ce branduri de aer condiționat instalați?", a: "Lucrăm cu toate brandurile de top: Daikin, Mitsubishi, Panasonic, LG, Samsung, Gree, Hisense, Midea, Beko și altele. Putem instala atât aparate cumpărate de la noi, cât și aparate procurate separat." },
  { q: "Ce este inclus în prețul de montaj?", a: "Prețul standard include: 3 metri tub de cupru izolat, suport metalic pentru unitatea exterioară, cablu de alimentare, vidarea instalației, pornirea aparatului și instructajul de utilizare. Orice extra este comunicat dinainte." },
  { q: "Cât de repede puteți veni?", a: "În sezon (mai-august) avem disponibilitate în aceeași săptămână, de obicei în 24-72h. În afara sezonului putem veni chiar și a doua zi. Pentru intervenții urgente, încercăm să ajungem în maxim 24 de ore." },
  { q: "Lucrați și cu firme? Emiteți factură?", a: "Da, lucrăm cu persoane fizice și juridice. Emitem factură fiscală și acceptăm plata prin OP, card sau numerar. Pentru firme oferim contracte de mentenanță anuală." },
  { q: "Ce se întâmplă dacă nu pot ajunge la locuință în ziua programată?", a: "Nicio problemă – sună-ne cu cel puțin 2 ore înainte și reprogramăm gratuit. Înțelegem că pot apărea situații neprevăzute." },
];

function faqsForSchema() {
  return faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  }));
}

function FaqPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <section className="bg-hero-gradient text-white">
        <div className="container-page py-14 md:py-20">
          <h1 className="max-w-3xl text-4xl font-extrabold md:text-5xl">Întrebări frecvente</h1>
          <p className="mt-4 max-w-2xl text-white/80">
            Răspundem celor mai comune întrebări despre montaj, garanție și timpul de intervenție.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page mx-auto max-w-3xl space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="grid w-full grid-cols-[1fr_auto] items-center gap-4 p-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-brand">{f.q}</span>
                  <ChevronDown className={`h-5 w-5 shrink-0 text-brand transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen && (
                  <div className="border-t border-border bg-background px-5 py-4 text-sm text-muted-foreground">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <CtaBand title="Mai ai întrebări?" subtitle="Suntem disponibili la telefon de luni până duminică pentru orice nelămurire." />
    </>
  );
}
