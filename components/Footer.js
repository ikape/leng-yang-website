import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { SOCIAL_LINKS } from "@/lib/social";
import { SOCIAL_ICONS } from "@/components/SocialIcons";

const LINK_GROUPS = [
  {
    title: "Company",
    links: [
      { label: "Our Story", href: "#story" },
      { label: "Visit Us", href: "#visit" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact Us", href: "#contact" },
      { label: "Gift Cards", href: "#" },
      { label: "Catering & Fundraising", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms & Conditions", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Accessibility", href: "#" },
    ],
  },
];

function FooterLink({ href, children }) {
  return (
    <a
      href={href}
      className="group inline-flex items-center gap-1.5 text-[#9fb0cc] transition-colors hover:text-white"
    >
      <span className="h-1 w-1 shrink-0 rounded-full bg-blue/60 transition-all duration-300 group-hover:w-3 group-hover:bg-blue" />
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-ink pt-16 text-slate-300">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue/70 to-transparent" />
      <div className="pointer-events-none absolute -left-28 -top-28 h-80 w-80 rounded-full bg-blue/20 blur-[110px]" />
      <div className="pointer-events-none absolute -right-28 top-1/4 h-80 w-80 rounded-full bg-blue-dark/40 blur-[110px]" />
      <Image
        src="/assets/mascot.png"
        alt=""
        width={683}
        height={936}
        className="pointer-events-none absolute -bottom-10 right-0 hidden w-[220px] opacity-[0.06] md:block"
      />

      <div className="relative mx-auto grid w-full max-w-[1160px] grid-cols-1 gap-10 border-b border-white/10 px-6 pb-12 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
        <Reveal className="sm:col-span-2 lg:col-span-1">
          <Image
            src="/assets/logo.png"
            alt="Leng Yang Ice Cream & Tea"
            width={900}
            height={251}
            className="h-[34px] w-auto brightness-0 invert"
          />
          <p className="my-3.5 max-w-[280px] text-sm text-[#9fb0cc]">
            Premium bubble tea and hand-scooped ice cream, made fresh in front of you.
          </p>
          <div className="flex gap-2.5">
            {SOCIAL_LINKS.map((social) => {
              const Icon = SOCIAL_ICONS[social.label];
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="glass-dark flex h-10 w-10 items-center justify-center rounded-full text-white transition duration-300 hover:-translate-y-1 hover:bg-blue/50 hover:shadow-[0_8px_20px_rgba(0,102,255,0.35)]"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              );
            })}
          </div>
        </Reveal>

        {LINK_GROUPS.map((group, i) => (
          <Reveal key={group.title} delay={0.08 * (i + 1)} className="flex flex-col gap-2.5 text-sm">
            <h4 className="mb-1.5 font-display text-[15px] tracking-[0.02em] text-white">
              {group.title}
            </h4>
            {group.links.map((link) => (
              <FooterLink key={link.label} href={link.href}>
                {link.label}
              </FooterLink>
            ))}
          </Reveal>
        ))}
      </div>

      <div className="relative mx-auto w-full max-w-[1160px] px-6 py-6 text-center">
        <p className="m-0 text-[13px] text-[#7c8aa5]">
          © {new Date().getFullYear()} Leng Yang Ice Cream &amp; Tea. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
