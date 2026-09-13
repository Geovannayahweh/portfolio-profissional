"use client";

import { HiOutlineBriefcase, HiOutlineCalendar, HiOutlineLocationMarker } from "react-icons/hi";
import { useI18n } from "@/lib/i18n";
import { Chip, Reveal, SectionHeading } from "./ui";

export function Experience() {
  const { t } = useI18n();

  return (
    <section id="experience" className="section">
      <div className="container-x">
        <SectionHeading kicker={t.experience.kicker} title={t.experience.title} />

        <div className="relative mt-14 pl-8 md:pl-0">
          {/* Linha da timeline */}
          <span className="absolute inset-y-2 left-[9px] w-px bg-gradient-to-b from-rose-light via-lilac to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="flex flex-col gap-10 md:gap-16">
            {t.experience.jobs.map((job, index) => {
              const isLeft = index % 2 === 0;
              return (
                <Reveal key={job.company} delay={index * 0.08}>
                  <div className="relative md:grid md:grid-cols-2 md:gap-12">
                    {/* Marcador */}
                    <span className="absolute -left-8 top-6 grid size-[19px] place-items-center rounded-full border-2 border-bg bg-gradient-to-br from-rose to-plum shadow-[0_0_0_4px_rgba(231,149,177,0.28)] md:left-1/2 md:-translate-x-1/2" />

                    <div
                      className={
                        isLeft
                          ? "md:col-start-1 md:text-right"
                          : "md:col-start-2 md:row-start-1"
                      }
                    >
                      <div className="card p-6 md:p-7">
                        <div
                          className={`flex flex-wrap items-center gap-2 ${
                            isLeft ? "md:justify-end" : ""
                          }`}
                        >
                          <span className="grid size-9 place-items-center rounded-lg bg-bg-deep text-rose">
                            <HiOutlineBriefcase size={17} />
                          </span>
                          <h3 className="font-display text-xl text-ink">{job.company}</h3>
                          {job.current && (
                            <span className="rounded-full bg-gradient-to-r from-rose to-plum px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">
                              {t.experience.current}
                            </span>
                          )}
                        </div>

                        <p className="mt-3 font-semibold text-rose">{job.role}</p>

                        <div
                          className={`mt-2 flex flex-wrap items-center gap-4 text-xs text-ink-mute ${
                            isLeft ? "md:justify-end" : ""
                          }`}
                        >
                          <span className="inline-flex items-center gap-1.5">
                            <HiOutlineCalendar size={13} /> {job.period}
                          </span>
                          <span className="inline-flex items-center gap-1.5">
                            <HiOutlineLocationMarker size={13} /> {job.location}
                          </span>
                        </div>

                        <p className="mt-4 text-left text-sm leading-relaxed text-ink-soft">
                          {job.description}
                        </p>

                        <ul className="mt-5 flex flex-col gap-2.5 border-t border-line pt-5 text-left text-sm text-ink-soft">
                          {job.bullets.map((bullet) => (
                            <li key={bullet} className="flex gap-2.5 leading-snug">
                              <span className="mt-[7px] size-1.5 shrink-0 rotate-45 bg-gold" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>

                        <div
                          className={`mt-5 flex flex-wrap gap-2 ${
                            isLeft ? "md:justify-end" : ""
                          }`}
                        >
                          {job.stack.map((tech) => (
                            <Chip key={tech}>{tech}</Chip>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
