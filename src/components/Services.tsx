import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

export function Services() {
  const { t } = useI18n();
  const services = [
    { 
      name: "Woman’s Haircut", 
      nameEs: "Corte de Dama", 
      desc: "Professional precision cut tailored to your unique features and style.", 
      descEs: "Corte profesional de precisión adaptado a sus facciones y estilo únicos.", 
      price: "$35", 
      priceEs: "$35" 
    },
    { 
      name: "Specials Haircuts / Textures / Blow-dry / Moisturizing", 
      nameEs: "Especiales de Corte / Texturas / Secado / Hidratación", 
      desc: "Comprehensive package for a complete hair rejuvenation and styling.", 
      descEs: "Paquete integral para un rejuvenecimiento y peinado completo del cabello.", 
      price: "$60", 
      priceEs: "$60" 
    },
    { 
      name: "Brazilian Keratin", 
      nameEs: "Queratina Brasileña", 
      desc: "Our signature smoothing treatment for frizz-free, glass-glossy hair.", 
      descEs: "Nuestro tratamiento alisador insignia para un cabello sin frizz y con brillo de cristal.", 
      price: "$150 / $200 / $250", 
      priceEs: "$150 / $200 / $250", 
      featured: true 
    },
    { 
      name: "Botox (Volume Reduction)", 
      nameEs: "Botox (Reducción de Volumen)", 
      desc: "Deep conditioning treatment designed to reduce volume and restore vitality.", 
      descEs: "Tratamiento de acondicionamiento profundo diseñado para reducir el volumen y restaurar la vitalidad.", 
      price: "$100 / $130 / $150", 
      priceEs: "$100 / $130 / $150" 
    },
    { 
      name: "Bright Streaking", 
      nameEs: "Mechas Brillantes", 
      desc: "Luminous, strategically placed highlights for a vibrant, sun-kissed look.", 
      descEs: "Mechas luminosas estratégicamente colocadas para un look vibrante y besado por el sol.", 
      price: "$100 / $150 / $200", 
      priceEs: "$100 / $150 / $200" 
    },
    { 
      name: "Highlights Basic", 
      nameEs: "Mechas Básicas", 
      desc: "Classic dimensional brightness to enhance your natural hair color.", 
      descEs: "Brillo dimensional clásico para realzar el color natural de su cabello.", 
      price: "$100 / $150 / $200", 
      priceEs: "$100 / $150 / $200" 
    },
    { 
      name: "Highlights Full", 
      nameEs: "Mechas Completas", 
      desc: "All-over highlighting for maximum dimension and transformative brightness.", 
      descEs: "Mechas completas para una dimensión máxima y un brillo transformador.", 
      price: "$200 / $250 / $300", 
      priceEs: "$200 / $250 / $300" 
    },
    { 
      name: "Hair Colouring", 
      nameEs: "Coloración de Cabello", 
      desc: "Bespoke professional color tailored perfectly to your complexion.", 
      descEs: "Color profesional a medida adaptado perfectamente a su tez.", 
      price: "$80 / $100 / $120", 
      priceEs: "$80 / $100 / $120" 
    },
    { 
      name: "Moisturizing + Blow-dry", 
      nameEs: "Hidratación + Secado", 
      desc: "Intensive moisturizing ritual followed by a professional, voluminous blowout.", 
      descEs: "Ritual de hidratación intensiva seguido de un secado profesional y voluminoso.", 
      price: "$70 / $80 / $90", 
      priceEs: "$70 / $80 / $90" 
    },
    { 
      name: "Henna Eyebrow", 
      nameEs: "Cejas de Henna", 
      desc: "Precision brow shaping and natural tinting with premium henna.", 
      descEs: "Perfilado de cejas de precisión y tinte natural con henna de primera calidad.", 
      price: "$25", 
      priceEs: "$25" 
    },
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
