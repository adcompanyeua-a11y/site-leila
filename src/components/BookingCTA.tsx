import { motion } from "framer-motion";

export function BookingCTA() {
  return (
    <section id="book" className="relative py-32 md:py-44 overflow-hidden">
      <div className="absolute inset-0 bg-[image:var(--gradient-gold)] opacity-[0.06]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative mx-auto max-w-4xl px-6 text-center"
      >
        <span className="text-[10px] uppercase tracking-[0.42em] text-primary">— Reserve</span>
        <h2 className="mt-6 font-display text-5xl md:text-7xl leading-[0.95] tracking-tight">
          Your hair, <span className="italic text-gold-gradient">elevated</span>.
        </h2>
        <p className="mt-8 text-muted-foreground font-light max-w-xl mx-auto">
          Limited weekly seats. Inquire today and step into the most coveted chair in the city.
        </p>

        <div id="contact" className="mt-12 flex flex-wrap justify-center gap-5">
          <a
            href="https://wa.me/13050000000"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-9 py-4 rounded-full bg-[image:var(--gradient-gold)] text-primary-foreground text-[11px] uppercase tracking-[0.32em] glow-on-hover font-medium"
          >
            Book on WhatsApp
          </a>
          <a
            href="tel:+13050000000"
            className="inline-flex items-center gap-3 px-9 py-4 rounded-full border border-primary/50 text-primary hover:bg-primary/10 text-[11px] uppercase tracking-[0.32em] transition-colors"
          >
            +1 (305) 000-0000
          </a>
        </div>

        <div className="mt-16 grid sm:grid-cols-3 gap-8 text-left max-w-3xl mx-auto pt-12 border-t border-border">
          <div>
            <div className="text-[10px] uppercase tracking-[0.32em] text-primary mb-2">Studio</div>
            <div className="text-sm text-foreground/85">Brickell Avenue<br />Miami, FL</div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.32em] text-primary mb-2">Hours</div>
            <div className="text-sm text-foreground/85">Tue – Sat<br />10:00 — 19:00</div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.32em] text-primary mb-2">Email</div>
            <div className="text-sm text-foreground/85">hello@alabamakeratin.com</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
