import logo from "@/assets/logo.jpeg";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="relative bg-onyx border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Alabama" className="h-12 w-12 rounded-full ring-1 ring-primary/40" />
            <div>
              <div className="font-display text-2xl text-gold-gradient">Alabama</div>
              <div className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground">Brazilian Keratin Expert</div>
            </div>
          </div>
          <p className="mt-6 text-sm text-muted-foreground max-w-sm font-light leading-relaxed">
            {t("footer_tagline")}
          </p>
        </div>

        <div>
          <div className="text-[10px] uppercase tracking-[0.32em] text-primary mb-5">{t("footer_visit")}</div>
          <p className="text-sm text-foreground/80 leading-relaxed whitespace-pre-line">{t("footer_address")}</p>
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-[0.32em] text-primary mb-5">{t("footer_connect")}</div>
          <ul className="space-y-2 text-sm text-foreground/80">
            <li><a href="https://www.instagram.com/alabama__brazilian_keratin/" target="_blank" rel="noreferrer" className="hover:text-primary">Instagram</a></li>
            <li><a href="https://wa.me/12059831715?text=Hello%2C%20I%20came%20from%20the%20website%20and%20I%20want%20more%20information." className="hover:text-primary">WhatsApp</a></li>
            <li><a href="mailto:hello@alabamakeratin.com" className="hover:text-primary">Email</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
        © {new Date().getFullYear()} Alabama Brazilian Keratin Expert · {t("footer_rights")}
      </div>
    </footer>
  );
}
