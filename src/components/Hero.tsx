import { motion } from "framer-motion";
import hero from "@/assets/hero.jpg";
import { useI18n } from "@/lib/i18n";

export function Hero() {
  const { t } = useI18n();
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-onyx grain">
      <div className="absolute inset-0">
        <img src={hero} alt="Luxury keratin hair transformation" className="h-full w-full object-cover object-center opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-background/40" />
      </div>

      {/* Floating gold orb */}
      <div className="absolute -left-32 top-1/3 h-[480px] w-[480px] rounded-full blur-[140px] opacity-30" style={{ background: "var(--gradient-gold)" }} />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-12 bg-primary" />
            <span className="text-[10px] uppercase tracking-[0.42em] text-primary">{t("hero_eyebrow")}</span>
          </div>

          <h1 className="font-display text-[clamp(3.2rem,9vw,8rem)] leading-[0.92] tracking-tight text-foreground">
            {t("hero_title_1")} <br />
            <span className="italic text-gold-gradient">{t("hero_title_2")}</span> {t("hero_title_3")}
          </h1>

          <p className="mt-8 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed font-light">
            {t("hero_desc")}
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-5">
            <a href="#book" className="inline-flex items-center gap-3 px-9 py-4 rounded-full bg-[image:var(--gradient-gold)] text-primary-foreground text-[11px] uppercase tracking-[0.32em] glow-on-hover font-medium">
              {t("hero_cta_book")}
              <span aria-hidden>→</span>
            </a>
            <a href="#services" className="inline-flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors text-[11px] uppercase tracking-[0.32em]">
              {t("hero_cta_services")}
            </a>
          </div>

          <div className="mt-20 grid grid-cols-3 gap-8 max-w-md border-t border-border pt-8">
            {[
              { k: "12+", v: t("hero_stat_years") },
              { k: "5K+", v: t("hero_stat_transformations") },
              { k: "100%", v: t("hero_stat_free") },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-3xl text-gold-gradient">{s.k}</div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary/70">
        <span className="text-[9px] uppercase tracking-[0.42em]">{t("hero_scroll")}</span>
        <div className="h-12 w-px bg-gradient-to-b from-primary to-transparent animate-float" />
      </div>
    </section>
  );
}
