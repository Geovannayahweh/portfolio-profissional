"use client";

import { useEffect, useState, type MouseEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { HiOutlineMenuAlt4, HiX } from "react-icons/hi";
import { navLinks } from "@/data/portfolio";
import { useI18n } from "@/lib/i18n";

export function Navbar() {
  const { t, locale, toggleLocale } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // O salto nativo do hash é cancelado quando o painel colapsa e o browser
  // reposiciona o link que acabou de receber foco. Rolamos por conta própria.
  const goToSection = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    event.currentTarget.blur();
    setOpen(false);
    window.history.replaceState(null, "", `#${id}`);
    window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 320);
  };

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-line/80 bg-bg/80 backdrop-blur-xl shadow-[0_8px_30px_-24px_rgba(140,74,100,0.5)]"
          : "border-b border-transparent"
      }`}
    >
      <nav className="container-x flex h-18 items-center justify-between py-4">
        <a
          href="#hero"
          className="font-display text-xl tracking-tight text-ink transition-colors hover:text-rose"
        >
          Geovanna<span className="gradient-text font-semibold"> Soto</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active === link.id ? "text-rose" : "text-ink-soft hover:text-ink"
              }`}
            >
              {active === link.id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-bg-deep"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              {t.nav[link.key]}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleLocale}
            aria-label={locale === "pt" ? "Switch to English" : "Mudar para Português"}
            className="rounded-full border border-line-strong bg-surface px-3 py-1.5 text-xs font-semibold tracking-wide text-ink-soft transition-all hover:border-rose hover:text-rose"
          >
            {locale === "pt" ? "PT" : "EN"}
          </button>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={t.nav.menu}
            aria-expanded={open}
            className="rounded-full border border-line-strong bg-surface p-2 text-ink-soft transition-colors hover:text-rose md:hidden"
          >
            {open ? <HiX size={18} /> : <HiOutlineMenuAlt4 size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-line bg-bg/95 backdrop-blur-xl md:hidden"
          >
            <div className="container-x flex flex-col py-4">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(event) => goToSection(event, link.id)}
                  className="border-b border-line/70 py-3 font-display text-lg text-ink last:border-0"
                >
                  {t.nav[link.key]}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
