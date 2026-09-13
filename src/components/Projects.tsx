"use client";

import { motion } from "motion/react";
import { FaGithub } from "react-icons/fa";
import { HiOutlineArrowNarrowRight, HiOutlineStar } from "react-icons/hi";
import { profile, projects } from "@/data/portfolio";
import { useI18n } from "@/lib/i18n";
import { Chip, Reveal, SectionHeading } from "./ui";

export function Projects() {
  const { t } = useI18n();

  return (
    <section id="projects" className="section">
      <div className="container-x">
        <SectionHeading kicker={t.projects.kicker} title={t.projects.title} />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => {
            const content = t.projects.items[project.key];
            return (
              <Reveal
                key={project.key}
                delay={(index % 2) * 0.08}
                className={project.featured ? "md:col-span-2 lg:col-span-1" : ""}
              >
                <motion.article className="card group relative flex h-full flex-col overflow-hidden">
                  {/* Capa em gradiente com a inicial do projeto */}
                  <div
                    className="relative h-32 overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, ${project.accent[0]}, ${project.accent[1]})`,
                    }}
                  >
                    <div
                      className="absolute inset-0 opacity-25"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.7) 1px, transparent 0)",
                        backgroundSize: "18px 18px",
                      }}
                    />
                    <span className="absolute -bottom-6 left-6 font-display text-[5.5rem] leading-none text-white/90 transition-transform duration-500 group-hover:scale-105">
                      {content.name.charAt(0)}
                    </span>
                    {project.featured && (
                      <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-plum backdrop-blur">
                        <HiOutlineStar size={12} />
                        {t.projects.featured}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-2xl text-ink">{content.name}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                      {content.description}
                    </p>

                    {content.highlights.length > 0 && (
                      <ul className="mt-4 flex flex-col gap-2 text-sm text-ink-soft">
                        {content.highlights.map((highlight) => (
                          <li key={highlight} className="flex gap-2.5 leading-snug">
                            <span className="mt-[7px] size-1.5 shrink-0 rotate-45 bg-gold" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <Chip key={tech}>{tech}</Chip>
                      ))}
                    </div>

                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex items-center gap-2 self-start border-b border-transparent pb-0.5 text-sm font-semibold text-rose transition-all hover:border-rose"
                    >
                      <FaGithub size={15} />
                      {t.projects.viewCode}
                      <HiOutlineArrowNarrowRight className="transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </motion.article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 text-center">
            <a
              href={`${profile.github}?tab=repositories`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface px-7 py-3 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:border-rose hover:text-rose"
            >
              <FaGithub size={16} />
              {t.projects.viewAll}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
