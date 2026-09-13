"use client";

import { motion } from "motion/react";
import { skills, type SkillCategory } from "@/data/portfolio";
import { useI18n } from "@/lib/i18n";
import { Reveal, SectionHeading } from "./ui";
import { TechIcon } from "./TechIcon";

const categories: SkillCategory[] = ["frontend", "backend", "tools"];

export function Skills() {
  const { t } = useI18n();

  return (
    <section id="skills" className="section relative overflow-hidden bg-bg-alt/60">
      <div className="glow -right-32 top-10 size-[24rem] bg-lilac/25" />
      <div className="glow -left-24 bottom-0 size-[20rem] bg-rose-light/25" />

      <div className="container-x relative z-10">
        <SectionHeading kicker={t.skills.kicker} title={t.skills.title} />

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {categories.map((category, index) => {
            const items = skills.filter((skill) => skill.category === category);
            return (
              <Reveal key={category} delay={index * 0.08}>
                <div className="card h-full p-7">
                  <div className="flex items-center gap-3">
                    <span className="h-px w-6 bg-gradient-to-r from-rose to-transparent" />
                    <h3 className="font-display text-lg text-ink">{t.skills[category]}</h3>
                  </div>

                  <div className="mt-6 flex flex-wrap justify-center gap-3">
                    {items.map((skill) => (
                      <motion.div
                        key={skill.name}
                        whileHover={{ y: -5 }}
                        transition={{ type: "spring", stiffness: 320, damping: 20 }}
                        className="group flex w-[88px] flex-col items-center gap-2 rounded-2xl border border-line/80 bg-bg/60 px-3 py-4 text-center transition-colors hover:border-line-strong hover:bg-surface"
                      >
                        <TechIcon
                          name={skill.icon}
                          className="size-7 transition-transform duration-300 group-hover:scale-110"
                          style={{ color: skill.color }}
                        />
                        <span className="text-[11px] font-medium leading-tight text-ink-soft">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
