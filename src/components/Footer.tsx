import logo from "@/assets/logo.jpeg";

export function Footer() {
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
            A private atelier for the modern muse. Couture hair, formaldehyde-free, since 2014.
          </p>
        </div>

        <div>
          <div className="text-[10px] uppercase tracking-[0.32em] text-primary mb-5">Visit</div>
          <p className="text-sm text-foreground/80 leading-relaxed">Brickell Avenue<br />Miami, Florida</p>
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-[0.32em] text-primary mb-5">Connect</div>
          <ul className="space-y-2 text-sm text-foreground/80">
            <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-primary">Instagram</a></li>
            <li><a href="https://wa.me/13050000000" className="hover:text-primary">WhatsApp</a></li>
            <li><a href="mailto:hello@alabamakeratin.com" className="hover:text-primary">Email</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
        © {new Date().getFullYear()} Alabama Brazilian Keratin Expert · Crafted with gold
      </div>
    </footer>
  );
}
