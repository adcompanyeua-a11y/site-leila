import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import t1 from "@/assets/transformations/transformation1.webp";
import t2 from "@/assets/transformations/transformation2.webp";
import t3 from "@/assets/transformations/transformation3.webp";
import t4 from "@/assets/transformations/transformation4.webp";
import t5 from "@/assets/transformations/transformation5.webp";

const images = [
  { src: t1, alt: "Transformation 1" },
  { src: t2, alt: "Transformation 2" },
  { src: t3, alt: "Transformation 3" },
  { src: t4, alt: "Transformation 4" },
  { src: t5, alt: "Transformation 5" },
];

export function Gallery() {
  const { t } = useI18n();
  
  return (
    <section id="gallery" className="relative py-32 md:py-44 bg-onyx">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <span className="text-[10px] uppercase tracking-[0.42em] text-primary">{t("gallery_eyebrow")}</span>
          <h2 className="mt-6 font-display text-5xl md:text-7xl leading-[0.95] tracking-tight">
            {t("gallery_title_1")} <span className="italic text-gold-gradient">{t("gallery_title_2")}</span> {t("gallery_title_3")}
          </h2>
          <p className="mt-6 text-muted-foreground font-light text-balance">
            {t("gallery_desc")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`relative aspect-[4/5] overflow-hidden rounded-sm ring-1 ring-border group ${
                index === 1 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
