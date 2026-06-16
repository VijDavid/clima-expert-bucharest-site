import { createFileRoute } from "@tanstack/react-router";
import { Star, Quote } from "lucide-react";
import { CtaBand } from "@/components/site-chrome";

export const Route = createFileRoute("/recenzii")({
  head: () => ({
    meta: [
      { title: "Recenzii Clienți – Clima Expert București" },
      { name: "description", content: "Citește recenziile clienților noștri din București despre serviciile de montaj și service aer condiționat." },
      { property: "og:title", content: "Recenzii Clienți – Clima Expert București" },
      { property: "og:description", content: "Sute de clienți mulțumiți în toate sectoarele Bucureștiului." },
      { property: "og:url", content: "/recenzii" },
    ],
    links: [{ rel: "canonical", href: "/recenzii" }],
  }),
  component: ReviewsPage,
});

const reviews = [
  { name: "Andreea Mihalache", area: "Sector 1, Aviației", text: "Am cerut ofertă pe seară, dimineața erau la ușă. Montaj impecabil, au pus folie peste tot, au strâns la final, nici nu ai zice că s-a lucrat în casă." },
  { name: "Mihai Popescu", area: "Sector 3, Titan", text: "Preț corect și exact cât au spus la telefon. Aparatul merge perfect de o vară, recomand cu încredere oricui." },
  { name: "Cristina Dobrescu", area: "Sector 6, Drumul Taberei", text: "Punctualitate de invidiat. Au venit fix la ora stabilită și au terminat în 2 ore. Au explicat și cum să folosesc telecomanda." },
  { name: "Răzvan Ionescu", area: "Sector 2, Tei", text: "Am avut nevoie de mutarea aparatului la altă adresă. Au demontat profesional, transportat și remontat fără nicio problemă. Mulțumesc!" },
  { name: "Alina Vasile", area: "Sector 4, Berceni", text: "Igienizarea a făcut minuni – nu mai miroase deloc și pare că trage mai bine. Băieții sunt foarte ok, simpatici și serioși." },
  { name: "Bogdan Marinescu", area: "Sector 5, Cotroceni", text: "Am chemat alți doi „specialiști” înainte, n-au știut să-mi spună de unde curge freon. Cei de la Clima Expert au găsit imediat, au reparat și au reîncărcat. Pro!" },
];

function ReviewsPage() {
  return (
    <>
      <section className="bg-hero-gradient text-white">
        <div className="container-page py-14 md:py-20">
          <h1 className="max-w-3xl text-4xl font-extrabold md:text-5xl">Recenzii de la clienții noștri</h1>
          <p className="mt-4 max-w-2xl text-white/80">
            Punctualitate, profesionalism și curățenie la final – cele 3 lucruri pe care le auzim cel mai des. Iată câteva păreri.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
            <div className="flex gap-0.5 text-cta">
              {Array.from({ length: 5 }).map((_, i) => (<Star key={i} className="h-4 w-4 fill-current" />))}
            </div>
            <span className="text-sm font-semibold">4.9 / 5 medie · peste 280 de recenzii</span>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page grid gap-6 md:grid-cols-2">
          {reviews.map((r) => (
            <article key={r.name} className="relative rounded-2xl border border-border bg-card p-6 shadow-card md:p-8">
              <Quote className="absolute right-6 top-6 h-8 w-8 text-accent" />
              <div className="flex gap-0.5 text-cta">
                {Array.from({ length: 5 }).map((_, i) => (<Star key={i} className="h-4 w-4 fill-current" />))}
              </div>
              <p className="mt-3 text-foreground/90">"{r.text}"</p>
              <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-brand text-sm font-bold text-white">
                  {r.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </div>
                <div>
                  <div className="font-semibold text-brand">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.area}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBand title="Alătură-te clienților mulțumiți" subtitle="Cere o ofertă astăzi și convinge-te singur de calitatea serviciilor noastre." />
    </>
  );
}
