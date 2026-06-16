import { createFileRoute } from "@tanstack/react-router";
import { Award, ShieldCheck, Clock, Wrench, Users, MapPin, CheckCircle2 } from "lucide-react";
import teamImg from "@/assets/about-team.jpg";
import { CtaBand } from "@/components/site-chrome";

export const Route = createFileRoute("/despre")({
  head: () => ({
    meta: [
      { title: "Despre Clima Expert București – Firmă Locală de Aer Condiționat" },
      { name: "description", content: "Firmă locală bucureșteană cu tehnicieni autorizați ANRE și F-Gas. Peste 1200 de montaje, intervenții rapide și echipament profesional." },
      { property: "og:title", content: "Despre Clima Expert București" },
      { property: "og:description", content: "Echipă locală cu experiență, certificări și sute de clienți mulțumiți în București." },
      { property: "og:url", content: "/despre" },
    ],
    links: [{ rel: "canonical", href: "/despre" }],
  }),
  component: AboutPage,
});

const reasons = [
  { icon: ShieldCheck, title: "Tehnicieni licențiați", text: "Toți colegii noștri au atestate ANRE și certificare F-Gas pentru lucrul cu freoni." },
  { icon: Award, title: "Garanție extinsă", text: "2 ani garanție pe manoperă, plus garanția producătorului pentru orice aparat livrat." },
  { icon: Wrench, title: "Echipament profesional", text: "Pompe de vid Value, detectoare freon și unelte calibrate pentru montaj corect." },
  { icon: Clock, title: "Programări rapide", text: "Răspundem în maxim 30 minute și venim, de obicei, în 24-48h în tot Bucureștiul." },
  { icon: Users, title: "Echipă locală", text: "Suntem din București – cunoaștem fiecare sector și fiecare tip de clădire." },
  { icon: CheckCircle2, title: "Prețuri transparente", text: "Ofertă scrisă înainte de lucrare. Nu există costuri ascunse, niciodată." },
];

function AboutPage() {
  return (
    <>
      <section className="bg-hero-gradient text-white">
        <div className="container-page py-14 md:py-20">
          <h1 className="max-w-3xl text-4xl font-extrabold md:text-5xl">Firmă locală de aer condiționat din inima Bucureștiului</h1>
          <p className="mt-4 max-w-2xl text-white/80">
            De peste 8 ani răcim apartamentele, birourile și restaurantele bucureștenilor. Profesionalism, punctualitate și grijă pentru fiecare client.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page grid items-center gap-10 md:grid-cols-2">
          <div>
            <img src={teamImg} alt="Echipa Clima Expert București lângă duba de service" width={1400} height={900} loading="lazy" className="rounded-3xl shadow-card" />
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-light">Despre noi</span>
            <h2 className="mt-3 text-3xl font-bold text-brand md:text-4xl">O echipă mică, dar foarte serioasă</h2>
            <p className="mt-4 text-muted-foreground">
              Suntem o firmă bucureșteană fondată în 2017 de doi tehnicieni cu pasiune pentru lucrul bine făcut. Astăzi avem 6 colegi pe teren și două dube complet echipate care acoperă întreaga capitală.
            </p>
            <p className="mt-3 text-muted-foreground">
              Am instalat peste 1200 de aparate, de la garsoniere în Drumul Taberei până la clădiri de birouri în Pipera. Ne mândrim cu rata de revenire a clienților – majoritatea ne sună din nou pentru igienizări anuale sau pentru montaj la o casă nouă.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-4">
              {[
                { v: "8+", l: "ani experiență" },
                { v: "1200+", l: "montaje" },
                { v: "4.9★", l: "rating Google" },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl border border-border bg-card p-4 text-center">
                  <div className="text-2xl font-extrabold text-brand">{s.v}</div>
                  <div className="text-xs text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-soft-gradient">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-light">De ce să ne alegi</span>
            <h2 className="mt-3 text-3xl font-bold text-brand md:text-4xl">Motivele pentru care bucureștenii ne aleg</h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((r) => (
              <div key={r.title} className="rounded-2xl bg-white p-6 shadow-card">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-accent text-brand">
                  <r.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-brand">{r.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <div className="rounded-3xl border border-border bg-card p-8 md:p-12">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-light">Certificări</span>
            <h2 className="mt-3 text-2xl font-bold text-brand md:text-3xl">Lucrăm doar legal și sigur</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {["Atestat ANRE", "Certificare F-Gas", "Autorizație ISCIR", "Asigurare profesională"].map((c) => (
                <div key={c} className="flex items-center gap-3 rounded-xl border border-border bg-background p-4">
                  <ShieldCheck className="h-5 w-5 text-cta" />
                  <span className="text-sm font-semibold">{c}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" /> Sediu social în București · Acoperim Sectoarele 1-6 și Ilfov
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
