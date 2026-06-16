import { createFileRoute } from "@tanstack/react-router";
import { Snowflake, Wrench, Sparkles, Truck, Flame, Wind, Building2, ShieldCheck, CheckCircle2 } from "lucide-react";
import { CtaBand } from "@/components/site-chrome";

export const Route = createFileRoute("/servicii")({
  head: () => ({
    meta: [
      { title: "Servicii Aer Condiționat București – Montaj, Service, Igienizare" },
      { name: "description", content: "Montaj, service, igienizare, mutare, încărcare freon și reparații AC în București. Tehnicieni autorizați, garanție și prețuri transparente." },
      { property: "og:title", content: "Servicii Aer Condiționat – Clima Expert București" },
      { property: "og:description", content: "Toate serviciile AC pentru rezidențial și comercial în București." },
      { property: "og:url", content: "/servicii" },
    ],
    links: [{ rel: "canonical", href: "/servicii" }],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Snowflake, title: "Montaj aer condiționat", text: "Instalare completă pentru aparate noi: tub de cupru izolat, vidare, pornire și instructaj." , bullets: ["Kit montaj inclus", "Test funcționare", "Curățenie la final"] },
  { icon: Wrench, title: "Service AC", text: "Diagnoză rapidă și reparații pentru orice tip de defecțiune – placă, ventilator, senzori.", bullets: ["Piese originale", "Garanție 6 luni intervenție", "Programare 24-48h"] },
  { icon: ShieldCheck, title: "Mentenanță preventivă", text: "Contracte anuale care prelungesc durata de viață a aparatului și reduc consumul.", bullets: ["2 vizite pe an", "Raport tehnic", "Discount piese"] },
  { icon: Sparkles, title: "Igienizare & sanitizare", text: "Curățare profundă a unității interioare și exterioare, eliminare mirosuri și bacterii.", bullets: ["Soluții bio", "Eficient antifungic", "Aer mai sănătos"] },
  { icon: Truck, title: "Mutare aparat", text: "Demontăm cu pompă de vid, transportăm și remontăm aparatul la noua adresă.", bullets: ["Recuperare freon", "Tub nou inclus", "Pornire & test"] },
  { icon: Building2, title: "AC comercial", text: "Sisteme multi-split, casetă și duct pentru birouri, restaurante și magazine.", bullets: ["Audit gratuit", "Dimensionare corectă", "Facturare firmă"] },
  { icon: Flame, title: "Încărcare freon", text: "Verificăm scurgerile, vidăm instalația și încărcăm cu freonul potrivit aparatului.", bullets: ["R32 / R410A / R22", "Detectare scurgeri", "Garanție etanșeitate"] },
  { icon: Wind, title: "Reparații de urgență", text: "Intervenții rapide când aparatul nu mai răcește sau face zgomot suspect.", bullets: ["Intervenție 24h", "Diagnoză gratuită", "Plată după lucrare"] },
];

function ServicesPage() {
  return (
    <>
      <section className="bg-hero-gradient text-white">
        <div className="container-page py-14 md:py-20">
          <h1 className="max-w-3xl text-4xl font-extrabold md:text-5xl">Servicii complete de aer condiționat în București</h1>
          <p className="mt-4 max-w-2xl text-white/80">
            De la montaj la mentenanță și reparații urgente – ne ocupăm de tot ce înseamnă AC, pentru locuință sau spațiu comercial.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <article key={s.title} className="rounded-2xl border border-border bg-card p-6 shadow-card md:p-8">
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand text-white">
                  <s.icon className="h-6 w-6" />
                </span>
                <h2 className="text-xl font-bold text-brand">{s.title}</h2>
              </div>
              <p className="mt-3 text-muted-foreground">{s.text}</p>
              <ul className="mt-4 space-y-2">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cta" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <CtaBand title="Ai nevoie de unul din aceste servicii?" subtitle="Sună-ne pentru o ofertă personalizată sau pentru o programare rapidă." />
    </>
  );
}
