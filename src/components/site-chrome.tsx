import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone, Snowflake } from "lucide-react";

const PHONE = "+40721234567";
const PHONE_DISPLAY = "0721 234 567";

const links = [
  { to: "/", label: "Acasă" },
  { to: "/servicii", label: "Servicii" },
  { to: "/despre", label: "Despre" },
  { to: "/proiecte", label: "Proiecte" },
  { to: "/recenzii", label: "Recenzii" },
  { to: "/faq", label: "Întrebări" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/70 bg-white/85 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex min-w-0 items-center gap-2" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-hero-gradient text-white">
            <Snowflake className="h-5 w-5" />
          </span>
          <span className="truncate">
            <span className="block text-sm font-bold leading-tight text-brand">Clima Expert</span>
            <span className="block text-[10px] font-medium uppercase tracking-widest text-muted-foreground">București</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-brand"
              activeProps={{ className: "text-brand bg-secondary" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a href={`tel:${PHONE}`} className="btn-cta btn-cta-hover text-sm">
            <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="grid h-10 w-10 place-items-center rounded-md border border-border lg:hidden"
          aria-label="Meniu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-white lg:hidden">
          <nav className="container-page flex flex-col py-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium text-foreground/90 hover:bg-secondary"
                activeProps={{ className: "text-brand bg-secondary" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-border bg-white/95 p-2 shadow-[0_-8px_24px_-12px_rgba(0,0,0,0.18)] backdrop-blur lg:hidden">
      <a href={`tel:${PHONE}`} className="btn-cta btn-cta-hover">
        <Phone className="h-4 w-4" /> Sună Acum
      </a>
      <Link to="/contact" className="btn-brand">
        Cere ofertă
      </Link>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-border bg-brand text-brand-foreground">
      <div className="container-page grid gap-10 py-12 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/10">
              <Snowflake className="h-5 w-5" />
            </span>
            <div>
              <div className="text-sm font-bold">Clima Expert București</div>
              <div className="text-[10px] uppercase tracking-widest text-white/60">Montaj & Service AC</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-white/70">
            Firmă locală de montaj și service aer condiționat în toate sectoarele Bucureștiului. Tehnicieni autorizați, garanție și prețuri transparente.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Servicii</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>Montaj aer condiționat</li>
            <li>Service și mentenanță</li>
            <li>Igienizare AC</li>
            <li>Mutare aparat</li>
            <li>Încărcare freon</li>
            <li>Reparații urgente</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Acoperire</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>Sector 1, 2, 3</li>
            <li>Sector 4, 5, 6</li>
            <li>Ilfov & împrejurimi</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>
              <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 font-semibold hover:text-white">
                <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
              </a>
            </li>
            <li>contact@climaexpert.ro</li>
            <li>L–V: 08:00 – 20:00</li>
            <li>S–D: 09:00 – 18:00</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-start justify-between gap-2 py-4 text-xs text-white/60 sm:flex-row">
          <span>© {new Date().getFullYear()} Clima Expert București. Toate drepturile rezervate.</span>
          <span>CUI demo · ANRE autorizat · F-Gas certified</span>
        </div>
      </div>
    </footer>
  );
}

export function CtaBand({
  title = "Ai nevoie de montaj sau service AC astăzi?",
  subtitle = "Echipa noastră ajunge la tine în București în maxim 24 de ore. Cere o ofertă gratuită acum.",
}: { title?: string; subtitle?: string }) {
  return (
    <section className="section-pad">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl bg-hero-gradient p-8 text-white shadow-soft md:p-14">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-brand-light/30 blur-3xl" />
          <div className="relative grid items-center gap-6 md:grid-cols-[1.4fr_auto]">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">{title}</h2>
              <p className="mt-3 max-w-2xl text-white/80">{subtitle}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
              <a href={`tel:${PHONE}`} className="btn-cta btn-cta-hover">
                <Phone className="h-4 w-4" /> Sună: {PHONE_DISPLAY}
              </a>
              <Link to="/contact" className="btn-outline-brand bg-white">
                Cere ofertă gratuită
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { PHONE, PHONE_DISPLAY };
