import { useEffect } from "react";
import { useI18n } from "@/lib/i18n";

export function TikTokFeed() {
  const { t } = useI18n();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="tiktok" className="relative py-32 md:py-44">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <span className="text-[10px] uppercase tracking-[0.42em] text-primary">— @leila.bassanezi</span>
            <h2 className="mt-6 font-display text-5xl md:text-6xl leading-[0.95] tracking-tight">
              {t("instagram_title_1")} <span className="italic text-gold-gradient">{t("instagram_title_2")}</span>
            </h2>
          </div>
          <a
            href="https://www.tiktok.com/@leila.bassanezi"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-primary hover:text-gold-soft transition-colors self-start"
          >
            Follow on TikTok →
          </a>
        </div>

        <div className="flex justify-center">
          <blockquote 
            className="tiktok-embed" 
            cite="https://www.tiktok.com/@leila.bassanezi" 
            data-unique-id="leila.bassanezi" 
            data-embed-type="creator" 
            style={{ maxWidth: '780px', minWidth: '288px' }}
          > 
            <section> 
              <a target="_blank" href="https://www.tiktok.com/@leila.bassanezi?refer=creator_embed">@leila.bassanezi</a> 
            </section> 
          </blockquote>
        </div>
      </div>
    </section>
  );
}

