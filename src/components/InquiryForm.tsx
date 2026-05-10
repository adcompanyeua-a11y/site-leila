import { useState } from "react";
import { motion } from "framer-motion";

const SERVICES = [
  "Brazilian Keratin",
  "Haircut",
  "Balayage",
  "Botox (Volume Reduction)",
  "Color / Highlights",
  "Blow-dry / Styling",
];

export function InquiryForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (s: string) =>
    setSelected((prev) => (prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message =
      `Hello, I came from the website and I want more information.%0A%0A` +
      `Name: ${encodeURIComponent(name)}%0A` +
      `Phone: ${encodeURIComponent(phone)}%0A` +
      `Email: ${encodeURIComponent(email)}%0A` +
      `Services: ${encodeURIComponent(selected.join(", ") || "—")}`;
    window.open(`https://wa.me/12059831715?text=${message}`, "_blank");
  };

  return (
    <section id="inquiry" className="relative py-20 md:py-28 bg-onyx grain">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-[10px] uppercase tracking-[0.42em] text-primary">Request an Appointment</span>
          <h2 className="mt-5 font-display text-4xl md:text-6xl leading-[0.95] tracking-tight">
            Begin Your <span className="italic text-gold-gradient">Transformation</span>
          </h2>
          <p className="mt-5 text-muted-foreground font-light">
            Share your details and we'll reach out to confirm your private session.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="rounded-2xl border border-primary/20 bg-background/40 backdrop-blur-sm p-8 md:p-10 space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-[10px] uppercase tracking-[0.32em] text-primary mb-2">Name</label>
              <input
                type="text"
                required
                maxLength={100}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-2 text-foreground placeholder:text-muted-foreground/50 transition-colors"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-[0.32em] text-primary mb-2">Phone</label>
              <input
                type="tel"
                required
                maxLength={30}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-2 text-foreground placeholder:text-muted-foreground/50 transition-colors"
                placeholder="+1 (___) ___-____"
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] uppercase tracking-[0.32em] text-primary mb-2">Email</label>
            <input
              type="email"
              required
              maxLength={255}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-2 text-foreground placeholder:text-muted-foreground/50 transition-colors"
              placeholder="you@email.com"
            />
          </div>

          <div>
            <label className="block text-[10px] uppercase tracking-[0.32em] text-primary mb-4">Select Services</label>
            <div className="grid sm:grid-cols-2 gap-3">
              {SERVICES.map((s) => {
                const active = selected.includes(s);
                return (
                  <label
                    key={s}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg border cursor-pointer transition-all ${
                      active
                        ? "border-primary bg-primary/10 text-foreground"
                        : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={active}
                      onChange={() => toggle(s)}
                      className="h-4 w-4 accent-primary"
                    />
                    <span className="text-sm">{s}</span>
                  </label>
                );
              })}
            </div>
          </div>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full bg-[image:var(--gradient-gold)] text-primary-foreground text-[11px] uppercase tracking-[0.32em] glow-on-hover font-medium"
          >
            Send Request <span aria-hidden>→</span>
          </button>
        </motion.form>
      </div>
    </section>
  );
}
