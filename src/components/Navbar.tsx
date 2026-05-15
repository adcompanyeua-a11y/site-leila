import { useEffect, useState } from "react";
import logo from "@/assets/logo.webp";
import { useI18n } from "@/lib/i18n";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { t } = useI18n();

  const links = [
    { href: "#services", label: t("nav_services") },
    { href: "#gallery", label: t("nav_gallery") },
    { href: "#testimonials", label: t("nav_testimonials") },
    { href: "#tiktok", label: t("nav_instagram") },
    { href: "#contact", label: t("nav_contact") },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:py-5">
        <a href="/" className="flex items-center gap-3 group">
          <img src={logo} alt="Alabama logo" className="h-11 w-11 rounded-full ring-1 ring-primary/40 group-hover:ring-primary transition" loading="eager" />
          <div className="hidden sm:block leading-tight">
            <div className="font-display text-xl text-gold-gradient tracking-wide">Alabama</div>
            <div className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground">Brazilian Keratin Expert</div>
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-9 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="relative text-foreground/80 hover:text-primary transition-colors uppercase tracking-[0.2em] text-[11px]">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <a
            href="#book"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[11px] uppercase tracking-[0.25em] text-primary-foreground bg-[image:var(--gradient-gold)] glow-on-hover font-medium"
          >
            {t("nav_book")}
          </a>

          <button
            aria-label="Menu"
            onClick={() => setOpen(!open)}
            className="lg:hidden text-primary p-2"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <><path d="M3 7h18" /><path d="M3 17h18" /></>}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <ul className="flex flex-col px-6 py-6 gap-5">
            {links.map((l) => (
              <li key={l.href}>
                <a onClick={() => setOpen(false)} href={l.href} className="text-foreground/80 uppercase tracking-[0.22em] text-xs">
                  {l.label}
                </a>
              </li>
            ))}
            <a href="#book" onClick={() => setOpen(false)} className="mt-2 inline-flex justify-center px-5 py-3 rounded-full text-xs uppercase tracking-[0.25em] text-primary-foreground bg-[image:var(--gradient-gold)]">
              {t("nav_book")}
            </a>
          </ul>
        </div>
      )}
    </header>
  );
}
