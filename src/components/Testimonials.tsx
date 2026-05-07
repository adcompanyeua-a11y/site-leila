import { motion } from "framer-motion";

const reviews = [
  { name: "Isabella R.", role: "Editor, Vogue LATAM", quote: "The closest thing to magic. My hair has never moved like this — pure liquid silk for months." },
  { name: "Camille D.", role: "Founder, Maison D.", quote: "Alabama doesn't do hair, she composes it. The most thoughtful balayage of my life." },
  { name: "Sofia M.", role: "Brand Director", quote: "Five-star everything. The studio feels like a private member's club for your hair." },
  { name: "Olivia K.", role: "Television Host", quote: "I've flown from New York twice. Worth every mile, every dollar, every minute." },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-32 md:py-44 bg-onyx overflow-hidden">
      <div className="absolute -right-40 top-1/4 h-[500px] w-[500px] rounded-full blur-[160px] opacity-20" style={{ background: "var(--gradient-gold)" }} />
      <div className="mx-auto max-w-7xl px-6 relative">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <span className="text-[10px] uppercase tracking-[0.42em] text-primary">— Praise</span>
          <h2 className="mt-6 font-display text-5xl md:text-7xl leading-[0.95] tracking-tight">
            Words from our <span className="italic text-gold-gradient">muses</span>
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
                {r.quote}
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4">
                <div className="h-px w-10 bg-primary" />
                <div>
                  <div className="text-sm text-foreground">{r.name}</div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mt-1">{r.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
