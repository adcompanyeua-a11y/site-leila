import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

const reviews = [
  { name: "Isabella R.", role: { en: "Editor, Vogue LATAM", es: "Editora, Vogue LATAM" }, quote: { en: "The closest thing to magic. My hair has never moved like this — pure liquid silk for months.", es: "Lo más cercano a la magia. Mi cabello nunca se había movido así — pura seda líquida durante meses." } },
  { name: "Camille D.", role: { en: "Founder, Maison D.", es: "Fundadora, Maison D." }, quote: { en: "Alabama doesn't do hair, she composes it. The most thoughtful balayage of my life.", es: "Alabama no hace cabello, lo compone. El balayage más cuidado de mi vida." } },
  { name: "Sofia M.", role: { en: "Brand Director", es: "Directora de Marca" }, quote: { en: "Five-star everything. The studio feels like a private member's club for your hair.", es: "Cinco estrellas en todo. El estudio se siente como un club privado para tu cabello." } },
  { name: "Olivia K.", role: { en: "Television Host", es: "Presentadora de TV" }, quote: { en: "I've flown from New York twice. Worth every mile, every dollar, every minute.", es: "He volado desde Nueva York dos veces. Vale cada milla, cada dólar, cada minuto." } },
];

export function Testimonials() {
  const { t, lang } = useI18n();
  return (
    <section id="testimonials" className="relative py-32 md:py-44 bg-onyx overflow-hidden">
      <div className="absolute -right-40 top-1/4 h-[500px] w-[500px] rounded-full blur-[160px] opacity-20" style={{ background: "var(--gradient-gold)" }} />
      <div className="mx-auto max-w-7xl px-6 relative">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <span className="text-[10px] uppercase tracking-[0.42em] text-primary">{t("testimonials_eyebrow")}</span>
          <h2 className="mt-6 font-display text-5xl md:text-7xl leading-[0.95] tracking-tight">
            {t("testimonials_title_1")} <span className="italic text-gold-gradient">{t("testimonials_title_2")}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.08 }}
              className="relative bg-card border border-border p-10 md:p-12 group hover:border-primary/60 transition-colors"
            >
              <div className="font-display text-7xl leading-none text-primary/40 absolute top-4 left-6">"</div>
              <blockquote className="font-display italic text-2xl md:text-3xl leading-snug text-foreground/95 relative">
                {r.quote[lang]}
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4">
                <div className="h-px w-10 bg-primary" />
                <div>
                  <div className="text-sm text-foreground">{r.name}</div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mt-1">{r.role[lang]}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
