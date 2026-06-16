import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader, SiteFooter, MobileCallBar } from "../components/site-chrome";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-brand">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Pagina nu a fost găsită</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Pagina căutată nu există sau a fost mutată.
        </p>
        <div className="mt-6">
          <Link to="/" className="btn-brand">Înapoi acasă</Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">Pagina nu s-a încărcat</h1>
        <p className="mt-2 text-sm text-muted-foreground">A apărut o eroare. Încearcă din nou.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="btn-brand"
          >
            Reîncearcă
          </button>
          <a href="/" className="btn-outline-brand">Acasă</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Clima Expert București – Montaj & Service Aer Condiționat" },
      { name: "description", content: "Montaj aer condiționat în București rapid și profesionist. Tehnicieni autorizați, garanție, prețuri transparente. Sună acum." },
      { name: "author", content: "Clima Expert București" },
      { name: "theme-color", content: "#1e3a8a" },
      { property: "og:site_name", content: "Clima Expert București" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Clima Expert București – Montaj & Service Aer Condiționat" },
      { name: "twitter:title", content: "Clima Expert București – Montaj & Service Aer Condiționat" },
      { property: "og:description", content: "Montaj aer condiționat în București rapid și profesionist. Tehnicieni autorizați, garanție, prețuri transparente. Sună acum." },
      { name: "twitter:description", content: "Montaj aer condiționat în București rapid și profesionist. Tehnicieni autorizați, garanție, prețuri transparente. Sună acum." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/3ec7a1de-9899-45ad-a9c2-5031428433eb/id-preview-a4498900--8c05ab53-ac67-47a3-b296-26f7e2b12705.lovable.app-1781641667096.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/3ec7a1de-9899-45ad-a9c2-5031428433eb/id-preview-a4498900--8c05ab53-ac67-47a3-b296-26f7e2b12705.lovable.app-1781641667096.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HVACBusiness",
          name: "Clima Expert București",
          telephone: "+40721234567",
          email: "contact@climaexpert.ro",
          areaServed: "București",
          address: {
            "@type": "PostalAddress",
            addressLocality: "București",
            addressCountry: "RO",
          },
          openingHours: ["Mo-Fr 08:00-20:00", "Sa-Su 09:00-18:00"],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="ro">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col pb-16 lg:pb-0">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
        <MobileCallBar />
      </div>
    </QueryClientProvider>
  );
}
