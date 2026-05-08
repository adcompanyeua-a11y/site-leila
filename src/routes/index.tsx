import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Atelier } from "@/components/Atelier";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { Instagram } from "@/components/Instagram";
import { BookingCTA } from "@/components/BookingCTA";
import { Footer } from "@/components/Footer";
import { StickyBook } from "@/components/StickyBook";
import { I18nProvider } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Alabama · Brazilian Keratin Expert | Luxury Hair Atelier" },
      { name: "description", content: "Private luxury atelier specializing in Brazilian keratin, balayage, and lived-in brunette transformations. Formaldehyde-free, couture hair in Randolph, Alabama." },
      { property: "og:title", content: "Alabama · Brazilian Keratin Expert" },
      { property: "og:description", content: "Couture Brazilian keratin and balayage, in a private Randolph, Alabama atelier." },
    ],
  }),
});

function Index() {
  return (
    <I18nProvider>
      <div className="dark min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Atelier />
          <Gallery />
          <Testimonials />
          <Instagram />
          <BookingCTA />
        </main>
        <Footer />
        <StickyBook />
      </div>
    </I18nProvider>
  );
}
