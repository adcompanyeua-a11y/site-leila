import { useI18n, Lang } from "@/lib/i18n";

const flags: Record<Lang, { emoji: string; label: string }> = {
  en: { emoji: "🇺🇸", label: "EN" },
  es: { emoji: "🇪🇸", label: "ES" },
};

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { lang, setLang } = useI18n();
  return (
    <div className={`inline-flex items-center gap-1 rounded-full border border-border bg-background/40 backdrop-blur px-1 py-1 ${className}`}>
      {(Object.keys(flags) as Lang[]).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-label={`Switch to ${flags[l].label}`}
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] uppercase tracking-[0.25em] transition-all ${
            lang === l
              ? "bg-[image:var(--gradient-gold)] text-primary-foreground"
              : "text-foreground/70 hover:text-primary"
          }`}
        >
          <span className="text-base leading-none">{flags[l].emoji}</span>
          <span>{flags[l].label}</span>
        </button>
      ))}
    </div>
  );
}
