import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import t1 from "@/assets/transformations/transformation1.webp";
import t2 from "@/assets/transformations/transformation2.webp";
import t3 from "@/assets/transformations/transformation3.webp";
import t4 from "@/assets/transformations/transformation4.webp";
import t5 from "@/assets/transformations/transformation5.webp";
import t6 from "@/assets/transformations/transformation6.webp";
import t7 from "@/assets/transformations/transformation7.webp";

/* Container 1 — Before & After: fotos 3, 4 (side-by-side comparison shots) */
const beforeAfterImages = [t3, t4];

/* Container 2 — Real Transformations: fotos 1, 2, 5, 6 (result shots) */
const realImages = [t1, t2, t5, t6];

function AutoSlider({
  images,
  label,
}: {
  images: string[];
  label: string;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="space-y-4">
      {/* Label */}
      <div className="flex items-center gap-3 mb-2">
        <span className="h-px flex-1 bg-gradient-to-r from-primary/60 to-transparent" />
        <span className="text-[10px] uppercase tracking-[0.32em] text-primary whitespace-nowrap">
          {label}
        </span>
        <span className="h-px flex-1 bg-gradient-to-l from-primary/60 to-transparent" />
      </div>

      {/* Slider */}
      <div className="relative aspect-[4/5] overflow-hidden rounded-sm ring-1 ring-border">
        <AnimatePresence initial={false} mode="wait">
          <motion.img
            key={index}
            src={images[index]}
            alt={`${label} ${index + 1}`}
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 pt-2">
        {images.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === index
                ? "w-6 bg-primary"
                : "w-1.5 bg-muted-foreground/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export function Gallery() {
  const { t } = useI18n();

  return (
    <section id="gallery" className="relative py-32 md:py-44 bg-onyx grain">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <span className="text-[10px] uppercase tracking-[0.42em] text-primary">
            {t("gallery_eyebrow")}
          </span>
          <h2 className="mt-6 font-display text-5xl md:text-7xl leading-[0.95] tracking-tight">
            {t("gallery_title_1")}{" "}
            <span className="italic text-gold-gradient">
              {t("gallery_title_2")}
            </span>{" "}
            {t("gallery_title_3")}
          </h2>
          <p className="mt-6 text-muted-foreground font-light text-balance">
            {t("gallery_desc")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
          {/* Container 1 — Before & After */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <AutoSlider
              images={beforeAfterImages}
              label={t("gallery_before") + " & " + t("gallery_after")}
            />
          </motion.div>

          {/* Container 2 — Real Transformations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <AutoSlider
              images={realImages}
              label={t("gallery_title_1") + " " + t("gallery_title_2")}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
