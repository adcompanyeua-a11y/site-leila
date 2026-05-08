import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

export function Services() {
  const { t } = useI18n();
  const services = [
    { name: "Brazilian Keratin Treatment", nameEs: "Queratina Brasileña", desc: "Our signature smoothing ritual. Frizz-free, glass-glossy, formaldehyde-free.", descEs: "Nuestro ritual alisador insignia. Sin frizz, brillo de cristal, sin formaldehído.", price: "from $350", priceEs: "desde $350", featured: true },
    { name: "Balayage", nameEs: "Balayage", desc: "Hand-painted dimension for sun-kissed, lived-in luminosity.", descEs: "Dimensión pintada a mano para una luminosidad besada por el sol.", price: "from $280", priceEs: "desde $280" },
    { name: "Lived-In Brunette", nameEs: "Castaño Natural", desc: "Soft, melted brunette tones designed to grow gracefully.", descEs: "Tonos castaños suaves y derretidos diseñados para crecer con gracia.", price: "from $260", priceEs: "desde $260" },
    { name: "Highlights", nameEs: "Mechas", desc: "Precision foiling for crisp, dimensional brightness.", descEs: "Mechas de precisión para un brillo nítido y dimensional.", price: "from $240", priceEs: "desde $240" },
    { name: "Hair Coloring", nameEs: "Coloración", desc: "Bespoke single-process color tailored to your complexion.", descEs: "Color a medida en un solo proceso, adaptado a tu tez.", price: "from $180", priceEs: "desde $180" },
    { name: "Color Correction", nameEs: "Corrección de Color", desc: "Restorative artistry for compromised or unwanted tones.", descEs: "Arte restaurador para tonos comprometidos o no deseados.", price: "by consultation", priceEs: "por consulta" },
    { name: "Haircut & Style", nameEs: "Corte y Peinado", desc: "Architectural cuts crafted for your face & lifestyle.", descEs: "Cortes arquitectónicos creados para tu rostro y estilo de vida.", price: "from $120", priceEs: "desde $120" },
  ];
  const isEs = (typeof window !== "undefined" && localStorage.getItem("lang") === "es");
  const lang = isEs ? "es" : "en";
  // use translation key existence as signal:
  const isSpanish = t("services_signature") === "Insignia";

  return (
    <section id="services" className="relative py-32 md:py-44 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-end mb-20">
          <div className="lg:col-span-6">
            <span className="text-[10px] uppercase tracking-[0.42em] text-primary">{t("services_eyebrow")}</span>
            <h2 className="mt-6 font-display text-5xl md:text-7xl leading-[0.95] tracking-tight">
              {t("services_title_1")} <span className="italic text-gold-gradient">{t("services_title_2")}</span>
            </h2>
          </div>
          <p className="lg:col-span-5 lg:col-start-8 text-muted-foreground font-light leading-relaxed">
            {t("services_desc")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-border">
          {services.map((s, i) => (
            <motion.article
              key={s.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative bg-background p-10 md:p-12 transition-all duration-500 hover:bg-card ${
                s.featured ? "md:col-span-2 md:p-16" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-6 mb-6">
                <div className="font-display text-3xl md:text-4xl text-foreground group-hover:text-gold-gradient transition-colors">
                  {isSpanish ? s.nameEs : s.name}
                </div>
                {s.featured && (
                  <span className="text-[9px] uppercase tracking-[0.32em] text-primary border border-primary/40 px-3 py-1 rounded-full whitespace-nowrap">
                    {t("services_signature")}
                  </span>
                )}
              </div>
              <p className="text-muted-foreground font-light max-w-xl leading-relaxed">{isSpanish ? s.descEs : s.desc}</p>
              <div className="mt-8 flex items-center justify-between">
                <span className="text-primary text-sm tracking-[0.2em] uppercase">{isSpanish ? s.priceEs : s.price}</span>
                <a href="#book" className="text-foreground/70 hover:text-primary text-[11px] uppercase tracking-[0.32em] transition-colors">
                  {t("services_book")}
                </a>
              </div>
              <div className="absolute inset-x-10 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/60 transition-all duration-700" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
