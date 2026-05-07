import { motion } from "framer-motion";
import salon from "@/assets/salon.jpg";

export function Atelier() {
  return (
    <section className="relative py-32 md:py-44">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-6 relative"
        >
          <div className="relative overflow-hidden rounded-sm ring-1 ring-border">
            <img src={salon} alt="Alabama luxury salon interior" className="w-full aspect-[4/5] object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-8 -right-6 hidden md:block bg-card border border-border p-6 max-w-xs shadow-gold">
            <div className="font-display text-4xl text-gold-gradient">2014</div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mt-2">Founded in Miami</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.15 }}
          className="lg:col-span-6 lg:pl-10"
        >
          <span className="text-[10px] uppercase tracking-[0.42em] text-primary">— The Atelier</span>
          <h2 className="mt-6 font-display text-5xl md:text-6xl leading-[0.95] tracking-tight">
            A house built for <span className="italic text-gold-gradient">hair</span>.
          </h2>
          <p className="mt-8 text-muted-foreground font-light leading-relaxed">
            Tucked between Beverly Hills tradition and Miami modernity, our private studio is intimate by design.
            Only three chairs. Only invited guests. Only formaldehyde-free chemistry.
          </p>
          <p className="mt-5 text-muted-foreground font-light leading-relaxed">
            Every appointment is a quiet ritual — espresso, champagne, and the unhurried craft of transformation.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-8">
            {[
              "Formaldehyde-Free Formulas",
              "Master-Trained Stylists",
              "Couture Color Bar",
              "Private Atelier Setting",
            ].map((f) => (
              <div key={f} className="flex items-start gap-3">
                <span className="mt-2 h-1 w-4 bg-[image:var(--gradient-gold)]" />
                <span className="text-sm text-foreground/85">{f}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
