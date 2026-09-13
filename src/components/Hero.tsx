"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiOutlineMail, HiOutlineArrowNarrowDown } from "react-icons/hi";
import { profile } from "@/data/portfolio";
import { useI18n } from "@/lib/i18n";

export function Hero() {
  const { t } = useI18n();

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20"
    >
      {/* Fundo decorativo */}
      <div className="glow -top-24 -left-32 size-[26rem] bg-rose-light/35" />
      <div className="glow top-1/3 -right-24 size-[30rem] bg-lilac/30" />
      <div className="glow bottom-0 left-1/3 size-[22rem] bg-gold-soft/35" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.55]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(199,95,134,0.16) 1px, transparent 0)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse at center, black 20%, transparent 72%)",
        }}
      />

      <div className="container-x relative z-10 grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
        {/* Texto */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface/80 px-4 py-1.5 backdrop-blur"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-rose opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-rose" />
            </span>
            <span className="text-xs font-medium tracking-wide text-ink-soft">
              {t.hero.badge}
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-lg italic text-ink-soft"
          >
            {t.hero.greeting}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
            className="mt-2 font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            <span className="gradient-text">{t.hero.name}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 text-lg font-medium text-ink-soft sm:text-xl"
          >
            {t.hero.role}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl leading-relaxed text-ink-soft/90"
          >
            {t.hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-rose to-plum px-7 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_-14px_rgba(199,95,134,0.9)] transition-transform hover:-translate-y-0.5"
            >
              <span className="relative z-10">{t.hero.cta}</span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-plum to-lilac transition-transform duration-500 group-hover:translate-x-0" />
            </a>
            <a
              href="#contact"
              className="rounded-full border border-line-strong bg-surface/70 px-7 py-3 text-sm font-semibold text-ink backdrop-blur transition-all hover:-translate-y-0.5 hover:border-rose hover:text-rose"
            >
              {t.hero.contact}
            </a>

            <div className="ml-1 flex items-center gap-2">
              {[
                { href: profile.linkedin, icon: FaLinkedinIn, label: "LinkedIn" },
                { href: profile.github, icon: FaGithub, label: "GitHub" },
                { href: `mailto:${profile.email}`, icon: HiOutlineMail, label: "E-mail" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noreferrer"
                  aria-label={label}
                  className="grid size-10 place-items-center rounded-full border border-line-strong bg-surface text-ink-soft transition-all hover:-translate-y-0.5 hover:border-rose hover:text-rose"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Retrato */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[22rem] lg:max-w-none"
        >
          <div className="animate-float relative">
            <div className="frame-gradient rounded-[2.5rem] p-[3px] shadow-[0_36px_70px_-30px_rgba(140,74,100,0.55)]">
              <div className="overflow-hidden rounded-[2.35rem] bg-surface p-2">
                <Image
                  src={profile.photo}
                  alt={profile.shortName}
                  width={1000}
                  height={1000}
                  priority
                  sizes="(max-width: 1024px) 22rem, 26rem"
                  className="aspect-square w-full rounded-[2rem] object-cover"
                />
              </div>
            </div>

            <div className="absolute -bottom-4 left-1 rounded-2xl border border-line bg-surface/90 px-4 py-3 sm:-bottom-5 sm:-left-5 shadow-[var(--shadow-md)] backdrop-blur">
              <p className="font-display text-2xl leading-none gradient-text">SI</p>
              <p className="mt-1 text-[11px] font-medium tracking-wide text-ink-mute">
                PUCPR
              </p>
            </div>

            <div className="absolute -top-4 right-1 rounded-2xl border border-line bg-surface/90 px-4 py-3 sm:-right-4 shadow-[var(--shadow-md)] backdrop-blur">
              <p className="font-display text-2xl leading-none gradient-text">Dev</p>
              <p className="mt-1 text-[11px] font-medium tracking-wide text-ink-mute">
                React · Node.js
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="absolute inset-x-0 bottom-6 z-10 mx-auto hidden w-fit flex-col items-center gap-1 text-[11px] uppercase tracking-[0.24em] text-ink-mute transition-colors hover:text-rose lg:flex"
      >
        {t.hero.scroll}
        <HiOutlineArrowNarrowDown className="animate-bounce" />
      </motion.a>
    </section>
  );
}
