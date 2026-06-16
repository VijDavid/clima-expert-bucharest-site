import { createFileRoute } from "@tanstack/react-router";
import living from "@/assets/project-living.jpg";
import bedroom from "@/assets/project-bedroom.jpg";
import office from "@/assets/project-office.jpg";
import outdoor from "@/assets/project-outdoor.jpg";
import commercial from "@/assets/project-commercial.jpg";
import hero from "@/assets/hero-ac.jpg";
import { CtaBand } from "@/components/site-chrome";

export const Route = createFileRoute("/proiecte")({
  head: () => ({
    meta: [
      { title: "Proiecte AC București – Galerie Montaje Aer Condiționat" },
      { name: "description", content: "Galerie cu proiecte de montaj aer condiționat realizate în București: apartamente, birouri și spații comerciale." },
      { property: "og:title", content: "Proiecte Aer Condiționat București – Clima Expert" },
      { property: "og:description", content: "Vezi proiecte reale de montaj AC realizate de echipa Clima Expert." },
      { property: "og:url", content: "/proiecte" },
      { property: "og:image", content: hero },
    ],
    links: [{ rel: "canonical", href: "/proiecte" }],
  }),
  component: ProjectsPage,
});

const projects = [
  { img: living, title: "Apartament 3 camere – Sector 1", category: "Rezidențial", text: "Montaj Daikin 12000 BTU cu mascare tuburi prin riflaj. Pornire în aceeași zi." },
  { img: bedroom, title: "Igienizare profundă – Sector 3", category: "Service", text: "Curățare unitate interioară și schimbarea filtrelor pentru un dormitor de copil." },
  { img: office, title: "Birouri Pipera – open space", category: "Comercial", text: "Sistem multi-split cu 4 unități interioare montat în weekend, fără să întrerupem activitatea." },
  { img: outdoor, title: "Unități exterioare – bloc Sector 6", category: "Rezidențial", text: "Montaj curat pe balcon, cu cabluri ghidate și protejate împotriva intemperiilor." },
  { img: commercial, title: "Restaurant Centru Vechi", category: "HoReCa", text: "Casetă tavan 18000 BTU dimensionată pentru un spațiu cu trafic intens." },
  { img: hero, title: "Tub cupru izolat – apartament nou", category: "Rezidențial", text: "Vidare profesională și pornire cu test de etanșeitate înainte de predare." },
];

function ProjectsPage() {
  return (
    <>
      <section className="bg-hero-gradient text-white">
        <div className="container-page py-14 md:py-20">
          <h1 className="max-w-3xl text-4xl font-extrabold md:text-5xl">Proiecte reale din București</h1>
          <p className="mt-4 max-w-2xl text-white/80">
            Câteva dintre montajele și intervențiile noastre recente. Atenția la detalii face diferența.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <figure key={p.title} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card transition hover:shadow-soft">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" width={1024} height={768} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <figcaption className="p-5">
                <span className="inline-block rounded-full bg-accent px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand">{p.category}</span>
                <h3 className="mt-2 text-lg font-semibold text-brand">{p.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.text}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <CtaBand title="Vrei un proiect ca al lor?" subtitle="Trimite-ne câteva detalii și revenim cu o ofertă în maxim 2 ore." />
    </>
  );
}
