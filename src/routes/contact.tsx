import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { PHONE, PHONE_DISPLAY } from "@/components/site-chrome";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact – Clima Expert București | Cere Ofertă AC" },
      { name: "description", content: "Contactează-ne pentru o ofertă gratuită de montaj sau service aer condiționat în București. Telefon, email și formular online." },
      { property: "og:title", content: "Contact – Clima Expert București" },
      { property: "og:description", content: "Cere o ofertă gratuită pentru montaj sau service AC în București." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "", service: "Montaj" });

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) return;
    setSent(true);
  }

  return (
    <>
      <section className="bg-hero-gradient text-white">
        <div className="container-page py-14 md:py-20">
          <h1 className="max-w-3xl text-4xl font-extrabold md:text-5xl">Hai să discutăm despre proiectul tău</h1>
          <p className="mt-4 max-w-2xl text-white/80">
            Răspundem la telefon în mai puțin de 30 de minute în programul de lucru. Pentru cele mai bune oferte, sună direct.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          {/* FORM */}
          <div className="rounded-3xl border border-border bg-card p-6 shadow-card md:p-8">
            <h2 className="text-2xl font-bold text-brand">Cere o ofertă gratuită</h2>
            <p className="mt-1 text-sm text-muted-foreground">Completează datele tale și revenim în maxim 2 ore în programul de lucru.</p>

            {sent ? (
              <div className="mt-6 grid place-items-center gap-3 rounded-2xl bg-accent p-8 text-center">
                <CheckCircle2 className="h-12 w-12 text-cta" />
                <h3 className="text-xl font-bold text-brand">Mulțumim, {form.name.split(" ")[0]}!</h3>
                <p className="text-sm text-muted-foreground">Am primit cererea ta. Te sunăm în scurt timp la {form.phone}.</p>
                <a href={`tel:${PHONE}`} className="btn-cta btn-cta-hover mt-2">
                  <Phone className="h-4 w-4" /> Sau sună acum: {PHONE_DISPLAY}
                </a>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="mt-6 grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-1.5">
                    <span className="text-sm font-medium">Nume *</span>
                    <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring" placeholder="Numele tău" maxLength={100} />
                  </label>
                  <label className="grid gap-1.5">
                    <span className="text-sm font-medium">Telefon *</span>
                    <input required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring" placeholder="07xx xxx xxx" maxLength={20} />
                  </label>
                </div>
                <label className="grid gap-1.5">
                  <span className="text-sm font-medium">Email</span>
                  <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring" placeholder="email@exemplu.ro" maxLength={255} />
                </label>
                <label className="grid gap-1.5">
                  <span className="text-sm font-medium">Tip serviciu</span>
                  <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className="rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring">
                    <option>Montaj aer condiționat</option>
                    <option>Service / reparație</option>
                    <option>Igienizare</option>
                    <option>Mutare aparat</option>
                    <option>Încărcare freon</option>
                    <option>Montaj comercial</option>
                    <option>Altceva</option>
                  </select>
                </label>
                <label className="grid gap-1.5">
                  <span className="text-sm font-medium">Detalii (opțional)</span>
                  <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={4} maxLength={1000} className="rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring" placeholder="Adresa, tipul aparatului, când ai vrea să venim..." />
                </label>
                <button type="submit" className="btn-cta btn-cta-hover w-full sm:w-auto">
                  <Send className="h-4 w-4" /> Trimite cererea
                </button>
                <p className="text-xs text-muted-foreground">Prin trimitere ești de acord cu prelucrarea datelor pentru a fi contactat.</p>
              </form>
            )}
          </div>

          {/* INFO */}
          <div className="space-y-5">
            <a href={`tel:${PHONE}`} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-card transition hover:shadow-soft">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-cta text-white">
                <Phone className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <div className="text-sm text-muted-foreground">Sună-ne direct</div>
                <div className="text-xl font-bold text-brand">{PHONE_DISPLAY}</div>
                <div className="mt-1 text-xs text-muted-foreground">Răspundem în mai puțin de 30 minute</div>
              </div>
            </a>

            <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-card">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand text-white">
                <Mail className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <div className="text-sm text-muted-foreground">Email</div>
                <div className="font-semibold text-brand">contact@climaexpert.ro</div>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-card">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand text-white">
                <Clock className="h-5 w-5" />
              </span>
              <div>
                <div className="text-sm text-muted-foreground">Program de lucru</div>
                <div className="font-semibold text-brand">Luni – Vineri: 08:00 – 20:00</div>
                <div className="font-semibold text-brand">Sâmbătă – Duminică: 09:00 – 18:00</div>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-card">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand text-white">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <div className="text-sm text-muted-foreground">Zonă deservită</div>
                <div className="font-semibold text-brand">București – toate sectoarele & Ilfov</div>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border shadow-card">
              <iframe
                title="Hartă București"
                src="https://www.google.com/maps?q=Bucharest&output=embed"
                width="100%"
                height="320"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
