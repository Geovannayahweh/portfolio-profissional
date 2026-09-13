"use client";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { profile } from "@/data/portfolio";
import { useI18n } from "@/lib/i18n";
import { Reveal, SectionHeading } from "./ui";

export function Contact() {
  const { t } = useI18n();

  const channels = [
    {
      label: t.contact.linkedin,
      value: "in/geovanna-soto",
      href: profile.linkedin,
      icon: FaLinkedinIn,
      gradient: "from-rose to-plum",
    },
    {
      label: t.contact.github,
      value: "@Geovannayahweh",
      href: profile.github,
      icon: FaGithub,
      gradient: "from-plum to-lilac",
    },
    {
      label: t.contact.email,
      value: profile.email,
      href: `mailto:${profile.email}`,
      icon: HiOutlineMail,
      gradient: "from-lilac to-gold",
    },
  ];

  return (
    <section id="contact" className="section relative overflow-hidden bg-bg-alt/60">
      <div className="glow left-1/2 top-0 size-[26rem] -translate-x-1/2 bg-rose-light/30" />

      <div className="container-x relative z-10">
        <SectionHeading kicker={t.contact.kicker} title={t.contact.title} />

        <Reveal delay={0.08}>
          <p className="mx-auto mt-6 max-w-2xl text-center leading-relaxed text-ink-soft">
            {t.contact.description}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {channels.map((channel, index) => (
            <Reveal key={channel.label} delay={0.12 + index * 0.08}>
              <a
                href={channel.href}
                target={channel.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                className="card group flex h-full flex-col items-center gap-3 p-7 text-center"
              >
                <span
                  className={`grid size-12 place-items-center rounded-2xl bg-gradient-to-br ${channel.gradient} text-white transition-transform duration-300 group-hover:scale-110`}
                >
                  <channel.icon size={20} />
                </span>
                <span className="font-display text-lg text-ink">{channel.label}</span>
                <span className="text-xs text-ink-mute break-all">{channel.value}</span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
