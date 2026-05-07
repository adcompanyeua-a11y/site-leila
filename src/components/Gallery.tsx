import { useRef, useState } from "react";
import { motion } from "framer-motion";
import before1 from "@/assets/before1.jpg";
import after1 from "@/assets/after1.jpg";
import before2 from "@/assets/before2.jpg";
import after2 from "@/assets/after2.jpg";

function BeforeAfter({ before, after, label }: { before: string; after: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);

  const move = (clientX: number) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const x = ((clientX - r.left) / r.width) * 100;
    setPos(Math.max(0, Math.min(100, x)));
  };

  return (
    <div className="space-y-4">
      <div
        ref={ref}
        className="relative aspect-[4/5] overflow-hidden rounded-sm cursor-ew-resize select-none ring-1 ring-border"
        onMouseMove={(e) => e.buttons === 1 && move(e.clientX)}
        onTouchMove={(e) => move(e.touches[0].clientX)}
        onClick={(e) => move(e.clientX)}
      >
        <img src={after} alt={`${label} after`} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
          <img src={before} alt={`${label} before`} className="absolute inset-0 h-full w-full object-cover" style={{ width: `${100 / (pos / 100)}%`, maxWidth: "none" }} loading="lazy" />
        </div>
        <div className="absolute top-0 bottom-0 w-px bg-primary shadow-gold" style={{ left: `${pos}%` }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-[image:var(--gradient-gold)] flex items-center justify-center text-primary-foreground text-xs animate-pulse-gold">
            ⇆
          </div>
        </div>
        <span className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.3em] bg-background/70 px-3 py-1.5 backdrop-blur text-primary">Before</span>
        <span className="absolute top-4 right-4 text-[10px] uppercase tracking-[0.3em] bg-background/70 px-3 py-1.5 backdrop-blur text-primary">After</span>
      </div>
      <p className="text-center text-[11px] uppercase tracking-[0.32em] text-muted-foreground">{label}</p>
    </div>
  );
}

export function Gallery() {
  return (
    <section id="gallery" className="relative py-32 md:py-44 bg-onyx">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <span className="text-[10px] uppercase tracking-[0.42em] text-primary">— The Transformations</span>
          <h2 className="mt-6 font-display text-5xl md:text-7xl leading-[0.95] tracking-tight">
            Before <span className="italic text-gold-gradient">&</span> After
          </h2>
          <p className="mt-6 text-muted-foreground font-light">
            Drag the slider to witness the Alabama touch — frizz dissolved, dimension revealed.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="grid md:grid-cols-2 gap-10 md:gap-14"
        >
          <BeforeAfter before={before1} after={after1} label="Brazilian Keratin Treatment" />
          <BeforeAfter before={before2} after={after2} label="Lived-In Brunette Balayage" />
        </motion.div>
      </div>
    </section>
  );
}
