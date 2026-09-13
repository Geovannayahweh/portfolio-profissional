"use client";

import { HiOutlineAcademicCap, HiOutlineSparkles, HiOutlineLocationMarker } from "react-icons/hi";
import { profile } from "@/data/portfolio";
import { useI18n } from "@/lib/i18n";
import { Reveal, SectionHeading } from "./ui";

export function About() {
  const { t } = useI18n();

  return (
    <section id="about" className="section bg-bg-alt/60">
      <div className="container-x relative z-10">
        <SectionHeading kicker={t.about.kicker} title={t.about.title} />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
          <Reveal>
            <div className="card h-full p-7 md:p-9">
              <span className="font-display text-5xl leading-none text-rose-light">“</span>
              <p className="-mt-4 leading-relaxed text-ink-soft">{t.about.p1}</p>
              <p className="mt-4 leading-relaxed text-ink-soft">{t.about.p2}</p>

              <div className="mt-8 grid gap-4 border-t border-line pt-7 sm:grid-cols-3">
                {t.about.highlights.map((item) => (
                  <div key={item.value}>
                    <p className="font-display text-2xl gradient-text">{item.value}</p>
                    <p className="mt-1 text-sm leading-snug text-ink-mute">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col gap-6">
            <Reveal delay={0.1}>
              <div className="card p-7">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-rose to-plum text-white">
                    <HiOutlineAcademicCap size={20} />
                  </span>
                  <h3 className="font-display text-xl">{t.about.educationTitle}</h3>
                </div>
                <p className="mt-5 font-semibold text-ink">{t.about.degree}</p>
                <p className="mt-1 text-sm text-ink-soft">{t.about.university}</p>
                <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-bg-deep px-3 py-1 text-xs font-medium text-rose">
                  <span className="size-1.5 rounded-full bg-rose" />
                  {t.about.status}
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="card p-7">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-lilac to-gold text-white">
                    <HiOutlineSparkles size={20} />
                  </span>
                  <h3 className="font-display text-xl">{t.about.focusTitle}</h3>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-ink-soft">{t.about.focus}</p>
                <p className="mt-5 flex items-center gap-2 border-t border-line pt-5 text-xs text-ink-mute">
                  <HiOutlineLocationMarker size={14} />
                  {profile.location}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
