import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SERVICES = [
  "Brazilian Keratin Treatment",
  "Haircut",
  "Balayage",
  "Highlights",
  "Lived-In Brunette",
  "Hair Coloring (General)",
  "Color Correction",
];

function validateName(v: string) {
  const trimmed = v.trim();
  if (!trimmed) return "Name is required.";
  if (trimmed.split(/\s+/).filter(Boolean).length < 2) return "Please enter your full name (first and last).";
  if (trimmed.length < 4) return "Name is too short.";
  return "";
}

function validatePhone(v: string) {
  const digits = v.replace(/\D/g, "");
  if (!v.trim()) return "Phone is required.";
  if (digits.length < 7) return "Enter a valid phone number.";
  if (!/^[\d\s\+\-\(\)]+$/.test(v)) return "Phone contains invalid characters.";
  return "";
}

function validateEmail(v: string) {
  if (!v.trim()) return "Email is required.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) return "Enter a valid email address.";
  return "";
}

export function InquiryForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  const [honeypot, setHoneypot] = useState(""); // anti-bot field
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitBlocked, setSubmitBlocked] = useState(false);
  const lastSubmit = useRef<number>(0);

  const toggle = (s: string) => {
    setSelected((prev) => (prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]));
    setErrors((e) => ({ ...e, services: "" }));
  };

  const blur = (field: string) => {
    setTouched((t) => ({ ...t, [field]: true }));
    validate(field);
  };

  const validate = (field?: string) => {
    const newErrors: Record<string, string> = { ...errors };
    if (!field || field === "name") newErrors.name = validateName(name);
    if (!field || field === "phone") newErrors.phone = validatePhone(phone);
    if (!field || field === "email") newErrors.email = validateEmail(email);
    if (!field || field === "services") newErrors.services = selected.length === 0 ? "Select at least one service." : "";
    setErrors(newErrors);
    return Object.values(newErrors).every((e) => !e);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Anti-bot: honeypot filled
    if (honeypot) return;

    // Rate limit: 30 seconds between submissions
    const now = Date.now();
    if (now - lastSubmit.current < 30_000) {
      setSubmitBlocked(true);
      setTimeout(() => setSubmitBlocked(false), 3000);
      return;
    }

    setTouched({ name: true, phone: true, email: true, services: true });
    const valid = validate();
    if (!valid) return;

    lastSubmit.current = now;

    const message =
      `Hello, I came from the website and I want more information.%0A%0A` +
      `Name: ${encodeURIComponent(name.trim())}%0A` +
      `Phone: ${encodeURIComponent(phone.trim())}%0A` +
      `Email: ${encodeURIComponent(email.trim())}%0A` +
      `Services: ${encodeURIComponent(selected.join(", ") || "—")}`;
    window.open(`https://wa.me/12059831715?text=${message}`, "_blank");
  };

  const fieldClass = (field: string) =>
    `w-full bg-transparent border-b outline-none py-2 text-foreground placeholder:text-muted-foreground/50 transition-colors ${
      touched[field] && errors[field] ? "border-red-400 focus:border-red-400" : "border-border focus:border-primary"
    }`;

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
          noValidate
          className="rounded-2xl border border-primary/20 bg-background/40 backdrop-blur-sm p-8 md:p-10 space-y-6"
        >
          {/* Honeypot — hidden from real users */}
          <div style={{ position: "absolute", left: "-9999px", opacity: 0, pointerEvents: "none" }} aria-hidden="true">
            <label>Leave this empty</label>
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {/* Name */}
            <div>
              <label className="block text-[10px] uppercase tracking-[0.32em] text-primary mb-2">
                Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                required
                maxLength={100}
                value={name}
                onChange={(e) => { setName(e.target.value); if (touched.name) validate("name"); }}
                onBlur={() => blur("name")}
                className={fieldClass("name")}
                placeholder="Your full name"
                autoComplete="name"
              />
              <AnimatePresence>
                {touched.name && errors.name && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    className="mt-1 text-[11px] text-red-400"
                  >
                    {errors.name}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-[10px] uppercase tracking-[0.32em] text-primary mb-2">
                Phone <span className="text-red-400">*</span>
              </label>
              <input
                type="tel"
                required
                maxLength={30}
                value={phone}
                onChange={(e) => { setPhone(e.target.value); if (touched.phone) validate("phone"); }}
                onBlur={() => blur("phone")}
                className={fieldClass("phone")}
                placeholder="+1 (___) ___-____"
                autoComplete="tel"
              />
              <AnimatePresence>
                {touched.phone && errors.phone && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    className="mt-1 text-[11px] text-red-400"
                  >
                    {errors.phone}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-[10px] uppercase tracking-[0.32em] text-primary mb-2">
              Email <span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              required
              maxLength={255}
              value={email}
              onChange={(e) => { setEmail(e.target.value); if (touched.email) validate("email"); }}
              onBlur={() => blur("email")}
              className={fieldClass("email")}
              placeholder="you@email.com"
              autoComplete="email"
            />
            <AnimatePresence>
              {touched.email && errors.email && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="mt-1 text-[11px] text-red-400"
                >
                  {errors.email}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Services */}
          <div>
            <label className="block text-[10px] uppercase tracking-[0.32em] text-primary mb-4">
              Select Services <span className="text-red-400">*</span>
            </label>
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
            <AnimatePresence>
              {touched.services && errors.services && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="mt-2 text-[11px] text-red-400"
                >
                  {errors.services}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Rate limit warning */}
          <AnimatePresence>
            {submitBlocked && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center text-[11px] text-amber-400"
              >
                Please wait a moment before submitting again.
              </motion.p>
            )}
          </AnimatePresence>

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
