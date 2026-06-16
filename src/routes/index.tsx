import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Phone, ShieldCheck, Clock, Wrench, Award, Star, MapPin, CheckCircle2,
  Snowflake, Sparkles, Truck, Flame, Wind, Building2, ArrowRight,
} from "lucide-react";
import heroImg from "@/assets/hero-ac.jpg";
import { CtaBand, PHONE, PHONE_DISPLAY } from "@/components/site-chrome";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Montaj Aer Condiționat București – Clima Expert" },
      { name: "description", content: "Montaj aer condiționat în București rapid și profesionist. Tehnicieni autorizați, garanție 2 ani, prețuri transparente. Programări în aceeași săptămână." },
      { property: "og:title", content: "Montaj Aer Condiționat București – Clima Expert" },
      { property: "og:description", content: "Tehnicieni autorizați, garanție 2 ani, programări rapide în toate sectoarele Bucureștiului." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const benefits = [
  { icon: ShieldCheck, title: "Tehnicieni autorizați", text: "Echipă certificată ANRE și F-Gas, cu peste 8 ani de experiență." },
  { icon: Clock, title: "Programări rapide", text: "Vii în aceeași săptămână, intervenții urgente în 24h în tot Bucureștiul." },
  { icon: Award, title: "Garanție 2 ani montaj", text: "Garanție extinsă pe manoperă și verificări gratuite anuale." },
  { icon: Wrench, title: "Echipament profesional", text: "Pompe de vid, detectoare freon și unelte de top pentru montaj corect." },
];

const services = [
  { icon: Snowflake, title: "Montaj aer condiționat", text: "Instalare completă cu tub de cupru, vidare și pornire." },
  { icon: Wrench, title: "Service & mentenanță", text: "Verificări periodice care prelungesc viața aparatului." },
  { icon: Sparkles, title: "Igienizare AC", text: "Curățare profundă și dezinfectare cu produse certificate." },
  { icon: Truck, title: "Mutare aparat", text: "Demontare și remontare la noua locație, cu vidare." },
  { icon: Flame, title: "Încărcare freon", text: "R32, R410A, R22 – cu detectoare profesionale de scurgeri." },
  { icon: Wind, title: "Reparații urgente", text: "Diagnosticare și înlocuire piese în aceeași zi." },
];

const reviews = [
  { name: "Andreea M.", area: "Sector 1", text: "Montaj rapid și extrem de curat. Băieții au pus folie peste tot, au explicat fiecare pas. Recomand cu încredere!" },
  { name: "Mihai P.", area: "Sector 3", text: "Au venit a doua zi după telefon. Preț corect, fără surprize. Aparatul merge impecabil de o vară întreagă." },
  { name: "Cristina D.", area: "Sector 6", text: "Profesionalism de la primul contact. Au respectat ora programată la minut, ceea ce e rar." },
];

const sectors = ["Sector 1", "Sector 2", "Sector 3", "Sector 4", "Sector 5", "Sector 6", "Ilfov"];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero-gradient text-white">
        <div className="absolute inset-0 opacity-25" style={{ background: "radial-gradient(60% 80% at 80% 20%, white, transparent 60%)" }} />
        <div className="container-page relative grid items-center gap-10 py-16 md:grid-cols-2 md:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
              <Snowflake className="h-3.5 w-3.5" /> Montaj profesionist în toate sectoarele
            </div>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] sm:text-5xl md:text-6xl">
              Montaj Aer Condiționat în București – <span className="text-brand-light">Rapid și Profesionist</span>
            </h1>
            <p className="mt-5 max-w-xl text-base text-white/85 md:text-lg">
              Tehnicieni autorizați, garanție 2 ani la manoperă și prețuri transparente. Programări disponibile în aceeași săptămână.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href={`tel:${PHONE}`} className="btn-cta btn-cta-hover">
                <Phone className="h-4 w-4" /> Sună acum: {PHONE_DISPLAY}
              </a>
              <Link to="/contact" className="btn-outline-brand bg-white">
                Cere ofertă gratuită <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/15 pt-6 text-sm">
              <div><div className="text-2xl font-bold">1200+</div><div className="text-white/70">Montaje finalizate</div></div>
              <div><div className="text-2xl font-bold">4.9★</div><div className="text-white/70">Recenzii Google</div></div>
              <div><div className="text-2xl font-bold">24h</div><div className="text-white/70">Intervenții urgente</div></div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-white/10 blur-2xl" />
            <img
              src={heroImg}
              alt="Tehnician Clima Expert montând aparat de aer condiționat în București"
              width={1600}
              height={1100}
              className="relative rounded-3xl shadow-2xl ring-1 ring-white/20"
            />
            <div className="absolute -bottom-5 left-5 rounded-2xl bg-white p-4 text-foreground shadow-soft sm:left-8">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-cta/10 text-cta">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Garanție</div>
                  <div className="text-sm font-bold text-brand">2 ani manoperă</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EMERGENCY BANNER */}
      <section className="border-y border-cta/20 bg-cta/10">
        <div className="container-page grid items-center gap-4 py-4 md:grid-cols-[1fr_auto]">
          <div className="flex items-start gap-3 min-w-0">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-cta text-white">
              <Flame className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <div className="font-bold text-brand">Service urgent AC – disponibil 7 zile pe săptămână</div>
              <div className="text-sm text-muted-foreground">Reparații, încărcare freon și intervenții de urgență în maxim 24h.</div>
            </div>
          </div>
          <a href={`tel:${PHONE}`} className="btn-cta btn-cta-hover">
            <Phone className="h-4 w-4" /> Sună urgent
          </a>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="section-pad">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-light">De ce Clima Expert</span>
            <h2 className="mt-3 text-3xl font-bold text-brand md:text-4xl">Servicii AC fără bătăi de cap</h2>
            <p className="mt-3 text-muted-foreground">De la primul telefon și până la pornirea aparatului, totul se întâmplă fix la timp.</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-2xl border border-border bg-card p-6 shadow-card transition hover:-translate-y-1 hover:shadow-soft">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent text-brand">
                  <b.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-brand">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-pad bg-soft-gradient">
        <div className="container-page">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-light">Serviciile noastre</span>
              <h2 className="mt-3 text-3xl font-bold text-brand md:text-4xl">Tot ce înseamnă aer condiționat</h2>
            </div>
            <Link to="/servicii" className="inline-flex items-center gap-1 text-sm font-semibold text-brand hover:underline">
              Vezi toate serviciile <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="group rounded-2xl bg-white p-6 shadow-card transition hover:shadow-soft">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-lg bg-brand text-white">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-semibold text-brand">{s.title}</h3>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="section-pad">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-light">Clienți mulțumiți</span>
            <h2 className="mt-3 text-3xl font-bold text-brand md:text-4xl">Ce spun bucureștenii despre noi</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {reviews.map((r) => (
              <div key={r.name} className="rounded-2xl border border-border bg-card p-6 shadow-card">
                <div className="flex gap-1 text-cta">
                  {Array.from({ length: 5 }).map((_, i) => (<Star key={i} className="h-4 w-4 fill-current" />))}
                </div>
                <p className="mt-3 text-sm text-foreground/85">"{r.text}"</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-brand text-sm font-bold text-white">
                    {r.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-brand">{r.name}</div>
                    <div className="text-xs text-muted-foreground">{r.area}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/recenzii" className="btn-outline-brand">Vezi toate recenziile</Link>
          </div>
        </div>
      </section>

      {/* COVERAGE */}
      <section className="section-pad bg-brand text-white">
        <div className="container-page grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-light">Zone deservite</span>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Acoperim tot Bucureștiul și Ilfov</h2>
            <p className="mt-3 text-white/80">
              Echipele noastre intervin rapid în toate sectoarele capitalei, cu timpi de răspuns sub 24h pentru urgențe.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {sectors.map((s) => (
                <span key={s} className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-sm">
                  <MapPin className="h-3.5 w-3.5 text-brand-light" /> {s}
                </span>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: Building2, title: "Apartamente & case", text: "Montaj curat în clădiri rezidențiale, blocuri vechi sau noi." },
              { icon: Wind, title: "Birouri", text: "Soluții multi-split pentru spații de lucru moderne." },
              { icon: CheckCircle2, title: "HoReCa & comercial", text: "Sisteme dimensionate corect pentru restaurante și magazine." },
              { icon: ShieldCheck, title: "Asociații de proprietari", text: "Contracte de mentenanță cu raportare lunară." },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur">
                <c.icon className="h-6 w-6 text-brand-light" />
                <h3 className="mt-3 font-semibold">{c.title}</h3>
                <p className="mt-1 text-sm text-white/75">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
