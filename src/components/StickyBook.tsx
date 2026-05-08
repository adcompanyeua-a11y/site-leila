import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";

export function StickyBook() {
  const [show, setShow] = useState(false);
  const { t } = useI18n();
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#book"
      aria-label="Book appointment"
      className={`fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 px-6 py-4 rounded-full bg-[image:var(--gradient-gold)] text-primary-foreground text-[11px] uppercase tracking-[0.32em] font-medium shadow-gold-strong transition-all duration-500 animate-pulse-gold ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
      }`}
    >
      <span aria-hidden>✦</span>
      {t("sticky_book")}
    </a>
  );
}
