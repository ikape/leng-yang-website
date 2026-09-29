"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const NAV_LINKS = [
  { href: "#story", emoji: "📖", label: "Our Story" },
  { href: "#menu", emoji: "🧋", label: "Menu" },
  { href: "#rewards", emoji: "🎁", label: "Rewards" },
  { href: "#visit", emoji: "📍", label: "Visit Us" },
  { href: "#contact", emoji: "✉️", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("resize", onResize);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("resize", onResize);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const elements = NAV_LINKS.map((link) =>
      document.getElementById(link.href.slice(1))
    ).filter(Boolean);
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHref(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`sticky top-0 z-[100] border-b transition-all duration-300 ${
        scrolled
          ? "border-blue/[0.1] bg-white/95 shadow-[0_8px_24px_rgba(0,40,120,0.08)] backdrop-blur-xl"
          : "border-blue/[0.08] bg-white/90 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-[72px] w-full max-w-[1160px] items-center justify-between px-6">
        <motion.a
          href="#top"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="shrink-0"
        >
          <Image
            src="/assets/logo.png"
            alt="Leng Yang Ice Cream & Tea"
            width={900}
            height={251}
            priority
            className="h-10 w-auto"
          />
        </motion.a>

        <nav
          className={`main-nav fixed inset-y-0 right-0 z-[90] flex h-[100dvh] w-[min(78vw,320px)] origin-top-right flex-col items-stretch gap-1 overflow-hidden rounded-l-[28px] px-7 pb-8 pt-24 shadow-[-18px_0_40px_rgba(0,20,80,0.35)] transition-transform duration-500 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)]
            bg-[radial-gradient(circle_at_90%_8%,rgba(255,255,255,0.16)_0%,rgba(255,255,255,0)_40%),radial-gradient(circle_at_0%_95%,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_45%),linear-gradient(160deg,#0066FF_0%,#002a66_100%)]
            ${open ? "translate-x-0 rotate-0 open" : "translate-x-full rotate-2"}
            lg:static lg:h-auto lg:w-auto lg:translate-x-0 lg:rotate-0 lg:flex-row lg:items-center lg:gap-1.5 lg:rounded-none lg:bg-none lg:p-0 lg:shadow-none lg:overflow-visible`}
        >
          <div className="mb-[18px] flex items-center gap-2.5 border-b border-white/20 pb-4 lg:hidden">
            <Image
              src="/assets/mascot.png"
              alt=""
              width={683}
              height={936}
              className="h-10 w-10 object-contain drop-shadow-[0_4px_8px_rgba(0,0,0,0.25)]"
            />
            <span className="font-display text-[17px] font-bold text-white">
              Hey, hungry?
            </span>
          </div>

          {NAV_LINKS.map((link) => {
            const isActive = activeHref === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`relative flex items-center gap-3 rounded-2xl px-3 py-3.5 font-display text-[17px] font-semibold text-white transition hover:translate-x-1 hover:scale-[1.02] hover:bg-white/[0.12] active:translate-x-1 active:scale-[1.02] active:bg-white/[0.12] lg:w-auto lg:gap-0 lg:rounded-full lg:px-4 lg:py-2 lg:font-body lg:text-[15px] lg:font-semibold lg:transition-colors lg:hover:translate-x-0 lg:hover:scale-100 lg:hover:bg-blue/[0.06] lg:hover:text-blue ${
                  isActive ? "lg:text-blue" : "lg:text-ink"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-active-pill"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    className="absolute inset-0 -z-10 hidden rounded-full bg-blue/10 lg:block"
                  />
                )}
                <span className="text-xl leading-none lg:hidden">{link.emoji}</span>
                {link.label}
              </a>
            );
          })}

          <motion.a
            href="#order"
            onClick={() => setOpen(false)}
            whileHover={{ scale: 1.05, y: -1 }}
            whileTap={{ scale: 0.96 }}
            className="mt-3.5 flex items-center justify-center gap-2 rounded-2xl bg-white px-3 py-3.5 font-display text-[17px] font-semibold text-blue shadow-[0_8px_20px_rgba(0,0,0,0.25)] lg:mt-0 lg:ml-2 lg:justify-start lg:rounded-full lg:bg-blue lg:px-5 lg:py-2.5 lg:font-body lg:text-[15px] lg:text-white lg:shadow-[0_6px_16px_rgba(0,102,255,0.35)] lg:hover:shadow-[0_10px_22px_rgba(0,102,255,0.45)]"
          >
            <span className="text-xl leading-none lg:hidden">🛒</span>
            <span className="hidden text-base leading-none lg:inline">🧋</span>
            Order Now
          </motion.a>

          <Image
            src="/assets/mascot.png"
            alt=""
            width={683}
            height={936}
            className="pointer-events-none absolute -bottom-[30px] -right-10 hidden w-[200px] rotate-[-8deg] opacity-[0.12] max-lg:block"
          />
        </nav>

        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative z-[95] flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
        >
          <span
            className={`block h-[3px] w-full rounded-sm bg-blue transition-transform duration-300 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] ${
              open ? "translate-y-[8px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[3px] w-full rounded-sm bg-blue transition-opacity duration-200 ${
              open ? "scale-x-0 opacity-0" : ""
            }`}
          />
          <span
            className={`block h-[3px] w-full rounded-sm bg-blue transition-transform duration-300 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] ${
              open ? "-translate-y-[8px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <div
        onClick={() => setOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 z-[85] bg-[rgba(4,16,48,0.45)] backdrop-blur-[2px] transition-opacity duration-300 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
    </header>
  );
}
