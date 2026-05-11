import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

export function Services() {
  const { t } = useI18n();
  const services = [
    { name: "✨ Women’s Haircuts", nameEs: "✨ Cortes de Dama" },
    { name: "✨ Brazilian Keratin Treatments", nameEs: "✨ Tratamientos de Queratina Brasileña" },
    { name: "✨ Hair Botox Treatments", nameEs: "✨ Tratamientos de Botox Capilar" },
    { name: "✨ Customized Hair Treatments", nameEs: "✨ Tratamientos Capilares Personalizados" },
    { name: "✨ Deep Hydration & Repair", nameEs: "✨ Hidratación Profunda y Reparación" },
    { name: "✨ Balayage & Highlights", nameEs: "✨ Balayage y Mechas" },
    { name: "✨ Brunette Dimension (“Morena Iluminada”)", nameEs: "✨ Dimensión para Morenas (“Morena Iluminada”)" },
    { name: "✨ Hair Coloring & Toners", nameEs: "✨ Coloración y Matizadores" },
    { name: "✨ Blowouts & Styling", nameEs: "✨ Secado y Peinado" },
  ];
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((s, i) => (
            <motion.article
              key={s.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-background p-8 md:p-10 transition-all duration-500 hover:bg-card flex flex-col justify-between"
            >
              <div className="font-display text-2xl md:text-3xl text-foreground group-hover:text-gold-gradient transition-colors leading-tight">
                {isSpanish ? s.nameEs : s.name}
              </div>
              <div className="mt-8 flex items-center justify-end">
                <a href="#book" className="text-foreground/70 hover:text-primary text-[10px] uppercase tracking-[0.32em] transition-colors">
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
