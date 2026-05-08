import { motion } from "framer-motion";
import ig1 from "@/assets/ig1.jpg";
import ig2 from "@/assets/ig2.jpg";
import ig3 from "@/assets/ig3.jpg";
import ig4 from "@/assets/ig4.jpg";
import { useI18n } from "@/lib/i18n";

const posts = [
  { src: ig1, tag: "Balayage" },
  { src: ig2, tag: "Atelier" },
  { src: ig3, tag: "Keratin" },
  { src: ig4, tag: "Color" },
];

export function Instagram() {
  const { t } = useI18n();
  return (
    <section id="instagram" className="relative py-32 md:py-44">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <span className="text-[10px] uppercase tracking-[0.42em] text-primary">— @alabama.keratin</span>
            <h2 className="mt-6 font-display text-5xl md:text-6xl leading-[0.95] tracking-tight">
              {t("instagram_title_1")} <span className="italic text-gold-gradient">{t("instagram_title_2")}</span>
            </h2>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-primary hover:text-gold-soft transition-colors self-start"
          >
            {t("instagram_follow")}
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
          {posts.map((p, i) => (
            <motion.a
              key={i}
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="group relative aspect-square overflow-hidden block ring-1 ring-border"
            >
              <img src={p.src} alt={p.tag} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/55 transition-colors duration-500 flex items-end p-5">
                <span className="text-[10px] uppercase tracking-[0.32em] text-primary opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  #{p.tag}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
