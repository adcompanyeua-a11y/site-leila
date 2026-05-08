import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Lang = "en" | "es";

type Dict = Record<string, string | string[] | Record<string, string>[]>;

const dict: Record<Lang, Dict> = {
  en: {
    nav_services: "Services",
    nav_gallery: "Transformations",
    nav_testimonials: "Reviews",
    nav_instagram: "TikTok",
    nav_contact: "Contact",
    nav_book: "Book Now",

    hero_eyebrow: "Est. Excellence",
    hero_title_1: "The Art of",
    hero_title_2: "Brazilian",
    hero_title_3: "Keratin",
    hero_desc: "A private atelier dedicated to silk-smooth, glossy, transformative hair. Hand-crafted treatments by master stylists for the modern muse.",
    hero_cta_book: "Reserve Your Seat",
    hero_cta_services: "Discover Services",
    hero_stat_years: "Years",
    hero_stat_transformations: "Transformations",
    hero_stat_free: "Formaldehyde Free",
    hero_scroll: "Scroll",

    services_eyebrow: "— Our Craft",
    services_title_1: "Signature",
    services_title_2: "services",
    services_desc: "Every service begins with a private consultation. We design hair the way couture is fitted — measured, intentional, and unrepeatable.",
    services_signature: "Signature",
    services_book: "Book →",

    atelier_eyebrow: "— The Atelier",
    atelier_title_1: "A house built for",
    atelier_title_2: "hair",
    atelier_p1: "Tucked into the heart of the South, our private studio is intimate by design. Only three chairs. Only invited guests. Only formaldehyde-free chemistry.",
    atelier_p2: "Every appointment is a quiet ritual — espresso, champagne, and the unhurried craft of transformation.",
    atelier_founded: "Founded in Randolph, Alabama",
    atelier_f1: "Formaldehyde-Free Formulas",
    atelier_f2: "Master-Trained Stylists",
    atelier_f3: "Couture Color Bar",
    atelier_f4: "Private Atelier Setting",

    gallery_eyebrow: "— The Transformations",
    gallery_title_1: "Before",
    gallery_title_2: "&",
    gallery_title_3: "After",
    gallery_desc: "Drag the slider to witness the Alabama touch — frizz dissolved, dimension revealed.",
    gallery_before: "Before",
    gallery_after: "After",
    gallery_label_1: "Brazilian Keratin Treatment",
    gallery_label_2: "Lived-In Brunette Balayage",

    testimonials_eyebrow: "— Praise",
    testimonials_title_1: "Words from our",
    testimonials_title_2: "muses",

    instagram_title_1: "Watch on",
    instagram_title_2: "TikTok",
    instagram_follow: "Follow on Instagram →",

    book_eyebrow: "— Reserve",
    book_title_1: "Your hair,",
    book_title_2: "elevated",
    book_desc: "Limited weekly seats. Inquire today and step into the most coveted chair in the city.",
    book_whatsapp: "Book now on WhatsApp",
    book_studio: "Studio",
    book_hours: "Hours",
    book_hours_val: "Tue – Sat\n8:00 am - 7:00pm",
    book_email: "Email",

    footer_tagline: "A private atelier for the modern muse. Couture hair, formaldehyde-free, since 2014.",
    footer_visit: "Visit",
    footer_connect: "Connect",
    footer_address: "Randolph, Alabama",
    footer_rights: "Created by AD Company",

    sticky_book: "Book Now",
  },
  es: {
    nav_services: "Servicios",
    nav_gallery: "Transformaciones",
    nav_testimonials: "Reseñas",
    nav_instagram: "TikTok",
    nav_contact: "Contacto",
    nav_book: "Reservar",

    hero_eyebrow: "Excelencia Establecida",
    hero_title_1: "El Arte de la",
    hero_title_2: "Queratina",
    hero_title_3: "Brasileña",
    hero_desc: "Un atelier privado dedicado al cabello sedoso, brillante y transformador. Tratamientos artesanales por estilistas maestros para la musa moderna.",
    hero_cta_book: "Reserva Tu Lugar",
    hero_cta_services: "Descubre Servicios",
    hero_stat_years: "Años",
    hero_stat_transformations: "Transformaciones",
    hero_stat_free: "Sin Formaldehído",
    hero_scroll: "Desliza",

    services_eyebrow: "— Nuestro Arte",
    services_title_1: "Servicios",
    services_title_2: "exclusivos",
    services_desc: "Cada servicio comienza con una consulta privada. Diseñamos el cabello como se ajusta la alta costura — medido, intencional e irrepetible.",
    services_signature: "Insignia",
    services_book: "Reservar →",

    atelier_eyebrow: "— El Atelier",
    atelier_title_1: "Una casa hecha para el",
    atelier_title_2: "cabello",
    atelier_p1: "Ubicado en el corazón del sur, nuestro estudio privado es íntimo por diseño. Solo tres sillas. Solo invitadas. Solo química sin formaldehído.",
    atelier_p2: "Cada cita es un ritual silencioso — espresso, champaña y el arte pausado de la transformación.",
    atelier_founded: "Fundado en Randolph, Alabama",
    atelier_f1: "Fórmulas Sin Formaldehído",
    atelier_f2: "Estilistas Máster",
    atelier_f3: "Barra de Color Couture",
    atelier_f4: "Atelier Privado",

    gallery_eyebrow: "— Las Transformaciones",
    gallery_title_1: "Antes",
    gallery_title_2: "&",
    gallery_title_3: "Después",
    gallery_desc: "Desliza para ver el toque Alabama — el frizz disuelto, la dimensión revelada.",
    gallery_before: "Antes",
    gallery_after: "Después",
    gallery_label_1: "Tratamiento de Queratina Brasileña",
    gallery_label_2: "Balayage Castaño Natural",

    testimonials_eyebrow: "— Elogios",
    testimonials_title_1: "Palabras de nuestras",
    testimonials_title_2: "musas",

    instagram_title_1: "Ver en",
    instagram_title_2: "TikTok",
    instagram_follow: "Síguenos en Instagram →",

    book_eyebrow: "— Reserva",
    book_title_1: "Tu cabello,",
    book_title_2: "elevado",
    book_desc: "Cupos limitados por semana. Consulta hoy y siéntate en la silla más codiciada de la ciudad.",
    book_whatsapp: "Book now on WhatsApp",
    book_studio: "Estudio",
    book_hours: "Horario",
    book_hours_val: "Mar – Sáb\n8:00 am - 7:00pm",
    book_email: "Correo",

    footer_tagline: "Un atelier privado para la musa moderna. Cabello couture, sin formaldehído, desde 2014.",
    footer_visit: "Visítanos",
    footer_connect: "Conecta",
    footer_address: "Randolph, Alabama",
    footer_rights: "Created by AD Company",

    sticky_book: "Reservar",
  },
};

const I18nContext = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: (k: string) => string }>({
  lang: "en",
  setLang: () => {},
  t: (k) => k,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem("lang")) as Lang | null;
    if (saved === "en" || saved === "es") setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
  };

  const t = (key: string) => {
    const v = (dict[lang] as Record<string, string>)[key];
    return typeof v === "string" ? v : key;
  };

  return <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>;
}

export const useI18n = () => useContext(I18nContext);
