"use client";

import { HiHeart } from "react-icons/hi";
import { profile } from "@/data/portfolio";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-line bg-bg py-9">
      <div className="container-x flex flex-col items-center justify-between gap-3 text-sm text-ink-mute sm:flex-row">
        <p className="font-display text-base text-ink">
          Geovanna<span className="gradient-text font-semibold"> Soto</span>
        </p>
        <p className="flex items-center gap-1.5">
          {t.footer.madeWith}
          <HiHeart className="text-rose" />
          {t.footer.by}
        </p>
        <p>
          © {new Date().getFullYear()} · {t.footer.rights}
        </p>
      </div>
      <span className="sr-only">{profile.name}</span>
    </footer>
  );
}
