import Image from "next/image";
import AnnounceBar from "@/components/AnnounceBar";
import Header from "@/components/Header";
import RewardsCarousel from "@/components/RewardsCarousel";
import FaqAccordion from "@/components/FaqAccordion";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import ShaderGradient from "@/components/ShaderGradient";
import TiltImage from "@/components/TiltImage";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { SOCIAL_HANDLE, SOCIAL_LINKS } from "@/lib/social";
import { SOCIAL_ICONS } from "@/components/SocialIcons";
import OpenStatus from "@/components/OpenStatus";
import MenuCard from "@/components/MenuCard";
import FloatingBubbles from "@/components/FloatingBubbles";
import CountUp from "@/components/CountUp";
import AnimatedWords from "@/components/AnimatedWords";
import AnimatedCup from "@/components/AnimatedCup";
import GalleryTile from "@/components/GalleryTile";
import VisitCard from "@/components/VisitCard";
import MotionLink from "@/components/MotionLink";

const FAVORITES = [
  {
    tag: "Signature",
    tagClass: "bg-blue",
    icon: "🧋",
    title: "Brown Sugar Boba Milk",
    body: "Fresh milk, chewy pearls, and hand-cooked brown sugar swirled right into the glass.",
  },
  {
    tag: "New",
    tagClass: "bg-[#ff5a8c]",
    icon: "🍑",
    title: "Peach Oolong Fizz",
    body: "Sparkling oolong tea with real peach, light and bubbly.",
  },
  {
    tag: "Seasonal",
    tagClass: "bg-[#ff9f40]",
    icon: "🎃",
    title: "Pumpkin Spice Swirl",
    body: "Soft-serve meets pumpkin spice milk tea. Here for a limited time.",
  },
  {
    tag: "Classic",
    tagClass: "bg-[#2bb673]",
    icon: "🍵",
    title: "Matcha Milk Tea",
    body: "Stone-ground matcha whisked with creamy milk. Simple, and never fails.",
  },
];

const MENU_ITEMS = [
  {
    icon: "🧋",
    title: "Classic Milk Tea",
    body: "Rich black tea, creamy milk, and chewy tapioca pearls. The one that started it all.",
    accent: "bg-[#ffe9c7]",
    rotate: -2,
  },
  {
    icon: "🍓",
    title: "Fresh Fruit Tea",
    body: "Real fruit, brewed tea, and a bright, refreshing finish. Light, fruity, and never too sweet.",
    accent: "bg-[#ffd9e6]",
    rotate: 1.5,
  },
  {
    icon: "🍦",
    title: "Soft-Serve Ice Cream",
    body: "Silky, hand-swirled soft serve in classic and seasonal flavors, with all the toppings.",
    accent: "bg-[#dff3ff]",
    rotate: -1,
  },
  {
    icon: "🍨",
    title: "Ice Cream Floats",
    body: "Our soft serve meets your favorite tea for the ultimate hot-day cooldown.",
    accent: "bg-[#e3d9ff]",
    rotate: 2,
  },
  {
    icon: "🧊",
    title: "Slushies",
    body: "Blended to icy perfection. Sweet, tart, and endlessly refreshing.",
    accent: "bg-[#d7f7e9]",
    rotate: -1.5,
  },
  {
    icon: "✨",
    title: "Seasonal Specials",
    body: "Limited-time flavors that rotate with the seasons. Ask what's new today.",
    accent: "bg-[#fff3c4]",
    rotate: 1,
  },
];

const QUALITY_ITEMS = [
  { icon: "🍃", title: "Real Ingredients", body: "Whole-leaf tea and real fruit. No powdered shortcuts." },
  { icon: "🤲", title: "Handcrafted Fresh", body: "Brewed and shaken to order, never sitting around waiting for you." },
  { icon: "🌾", title: "Ethically Sourced", body: "Tea leaves sourced from farms we trust, at the peak of flavor." },
  { icon: "⏱️", title: "Made To Order", body: "Your sweetness, your ice, your toppings — every single time." },
];

const TESTIMONIALS = [
  { quote: "Best brown sugar boba I've had. The staff remember my order every time I walk in.", name: "Amara O." },
  { quote: "The ice cream floats are unreal. Perfect stop after school with the kids.", name: "Daniel K." },
  { quote: "Fresh, fast, and the mascot merch on the cups always makes my day.", name: "Priya S." },
];

const GALLERY_TILES = [
  { emoji: "🧋", label: "New drop!", gradient: "from-blue to-[#4a90ff]", rotate: -2 },
  { emoji: "🍦", label: "Scoop goals", gradient: "from-[#4a90ff] to-blue", rotate: 1.5 },
  { emoji: "🎉", label: "Grand opening", gradient: "from-blue-darker to-blue", rotate: -1 },
  { emoji: "🐰", label: "Meet the mascot", gradient: "from-blue to-blue-darker", rotate: 2 },
  { emoji: "🍑", label: "Peach season", gradient: "from-[#4a90ff] to-blue-darker", rotate: -1.5 },
  { emoji: "📸", label: "Tag us to be featured", gradient: "from-blue-darker to-[#4a90ff]", rotate: 1 },
];

const MARQUEE_ITEMS = [
  "BUBBLE TEA",
  "ICE CREAM",
  "FRESH FRUIT TEA",
  "MILK TEA",
  "SLUSHIES",
];

export default function Home() {
  return (
    <>
      <AnnounceBar />
      <Header />

      <main id="top">
        {/* HERO */}
        <section className="relative overflow-hidden bg-bg px-0 pb-10 pt-16">
          <div className="absolute inset-0">
            <ShaderGradient />
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_60%_at_78%_35%,rgba(251,252,255,0.32)_0%,rgba(251,252,255,0.94)_62%)]" />

          <div className="relative mx-auto grid w-full max-w-[1160px] grid-cols-1 items-center gap-8 px-6 text-center md:grid-cols-[1.1fr_0.9fr] md:text-left">
            <RevealGroup className="order-2 md:order-1" stagger={0.2} delayChildren={0.1}>
              <RevealItem duration={0.7}>
                <p className="glass-pill mb-4 inline-block rounded-full px-4 py-1.5 font-display text-sm font-bold uppercase tracking-[0.04em] text-blue">
                  Freshly Blended · Every Day
                </p>
              </RevealItem>
              <h1 className="font-display text-[clamp(38px,5.5vw,64px)] font-extrabold leading-[1.1] text-ink">
                <AnimatedWords as="span" text="Chill out with" delay={0.35} stagger={0.12} duration={0.6} className="block" />
                <AnimatedWords as="span" text="Leng Yang" delay={0.75} stagger={0.12} duration={0.6} className="block text-blue" />
              </h1>
              <RevealItem duration={0.7}>
                <p className="mx-auto max-w-[480px] text-lg text-[#3a4358] md:mx-0">
                  Premium bubble tea and hand-scooped ice cream, made fresh in front of you. Come say hi to our favorite regular.
                </p>
              </RevealItem>
              <RevealItem duration={0.7} className="mt-2 flex flex-wrap justify-center gap-4 md:justify-start">
                <MotionLink
                  href="#order"
                  className="inline-block rounded-full bg-blue px-7 py-3.5 font-display text-base font-bold text-white shadow-[0_10px_24px_rgba(0,102,255,0.35)] transition-shadow hover:shadow-[0_14px_28px_rgba(0,102,255,0.45)]"
                >
                  Order Now
                </MotionLink>
                <MotionLink
                  href="#menu"
                  className="glass-pill inline-block rounded-full px-7 py-3.5 font-display text-base font-bold text-blue"
                >
                  View Menu
                </MotionLink>
              </RevealItem>
            </RevealGroup>
            <div className="relative order-1 mb-3 flex items-center justify-center md:order-2 md:mb-0">
              <div className="absolute h-[105%] w-[105%] rounded-full bg-[radial-gradient(circle,#d8e6ff_0%,rgba(216,230,255,0)_70%)]" />
              <TiltImage className="relative z-[1]">
                <Image
                  src="/assets/mascot.png"
                  alt="Leng Yang mascot holding a boba drink"
                  width={683}
                  height={936}
                  priority
                  className="w-[min(70%,300px)] animate-float object-contain drop-shadow-[0_20px_30px_rgba(0,40,120,0.2)] md:w-[min(100%,380px)]"
                />
              </TiltImage>
            </div>
          </div>
        </section>

        {/* MARQUEE */}
        <div className="overflow-hidden bg-blue py-3.5" aria-hidden="true">
          <div className="marquee-track flex animate-marquee gap-6 whitespace-nowrap">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
              <span key={i} className="font-display text-base font-bold tracking-[0.03em] text-white">
                {item} •
              </span>
            ))}
          </div>
        </div>

        {/* OUR STORY */}
        <section id="story" className="relative overflow-hidden py-[90px]">
          <FloatingBubbles />
          <div className="relative mx-auto grid w-full max-w-[1160px] grid-cols-1 items-start gap-12 px-6 lg:grid-cols-[1.2fr_0.8fr]">
            <Reveal>
              <p className="mb-1.5 font-display text-sm font-bold uppercase tracking-[0.04em] text-blue">
                Our Story
              </p>
              <AnimatedWords
                text="Small cup, big smiles."
                className="font-display text-[clamp(30px,4vw,42px)] font-extrabold text-ink"
              />
              <span className="wiggle-idle -mt-2 mb-2 block text-2xl md:inline-block md:pl-2 md:align-middle">
                🎉
              </span>
              <p className="text-[#3a4358]">
                Leng Yang started with one simple idea: bubble tea and ice cream should make your day better, one cup at a time. Every drink is shaken fresh, every scoop is made in-house, and every visit comes with a little extra warmth (even when the drink is ice cold).
              </p>
              <p className="text-[#3a4358]">
                From classic milk teas to fruity slushies and creamy soft-serve, we keep things simple, fresh, and fun — just like our mascot.
              </p>
              <a href="#menu" className="group mt-2 inline-flex items-center gap-1.5 font-bold text-blue">
                Explore the menu
                <span
                  aria-hidden="true"
                  className="inline-block transition-transform duration-300 group-hover:translate-x-1.5"
                >
                  →
                </span>
              </a>
            </Reveal>
            <RevealGroup className="grid gap-4">
              <RevealItem className="glass-card flex flex-col gap-1 rounded-brand p-6 transition duration-300 hover:-translate-y-1 hover:rotate-1 hover:shadow-brand-lg">
                <span className="font-display text-3xl font-extrabold text-blue">
                  <CountUp to={100} suffix="%" />
                </span>
                <span className="text-sm text-[#3a4358]">Fresh, made to order</span>
              </RevealItem>
              <RevealItem className="glass-card flex flex-col gap-1 rounded-brand p-6 transition duration-300 hover:-translate-y-1 hover:-rotate-1 hover:shadow-brand-lg">
                <span className="font-display text-3xl font-extrabold text-blue">
                  <CountUp to={20} suffix="+" />
                </span>
                <span className="text-sm text-[#3a4358]">Signature flavors</span>
              </RevealItem>
              <RevealItem className="glass-card flex flex-col gap-1 rounded-brand p-6 transition duration-300 hover:-translate-y-1 hover:rotate-1 hover:shadow-brand-lg">
                <span className="wiggle-idle font-display text-3xl font-extrabold text-blue">
                  ❄️
                </span>
                <span className="text-sm text-[#3a4358]">Ice cream + boba, together</span>
              </RevealItem>
            </RevealGroup>
          </div>
        </section>

        {/* QUALITY / TRUST */}
        <section className="border-y border-bg-soft bg-white py-[50px]">
          <RevealGroup className="mx-auto grid w-full max-w-[1160px] grid-cols-2 gap-6 px-6 text-center md:grid-cols-4">
            {QUALITY_ITEMS.map((item) => (
              <RevealItem key={item.title}>
                <div className="mb-2.5 text-[34px]">{item.icon}</div>
                <h3 className="mb-1.5 text-base">{item.title}</h3>
                <p className="m-0 text-[13.5px]">{item.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </section>

        {/* MENU */}
        <section id="menu" className="bg-bg-soft py-[90px]">
          <div className="mx-auto w-full max-w-[1160px] px-6">
            <Reveal>
              <p className="mb-1.5 text-center font-display text-sm font-bold uppercase tracking-[0.04em] text-blue">
                Fan Favorites
              </p>
              <h2 className="mb-10 text-center font-display text-[clamp(30px,4vw,42px)] font-extrabold text-ink">
                Our most-loved cups
              </h2>
            </Reveal>
            <RevealGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {FAVORITES.map((item) => (
                <RevealItem key={item.title} className="group relative">
                  <span
                    className={`absolute -top-2.5 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full px-3.5 py-1 font-display text-[11px] font-bold uppercase tracking-[0.03em] text-white shadow-[0_4px_10px_rgba(0,0,0,0.15)] ${item.tagClass}`}
                  >
                    {item.tag}
                  </span>
                  <div className="glass-card rounded-brand px-5 pb-6 pt-[30px] text-center transition group-hover:-translate-y-1.5 group-hover:-rotate-1 group-hover:shadow-brand-lg">
                    <div className="my-2.5 text-[38px]">{item.icon}</div>
                    <h3 className="mb-1.5 text-lg">{item.title}</h3>
                    <p className="m-0 text-[13.5px]">{item.body}</p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>

            <Reveal>
              <p className="mb-1.5 mt-16 text-center font-display text-sm font-bold uppercase tracking-[0.04em] text-blue">
                Explore The Menu
              </p>
              <h2 className="mb-10 text-center font-display text-[clamp(30px,4vw,42px)] font-extrabold text-ink">
                What are you craving? 🤤
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {MENU_ITEMS.map((item, i) => (
                <MenuCard
                  key={item.title}
                  icon={item.icon}
                  title={item.title}
                  body={item.body}
                  accent={item.accent}
                  rotate={item.rotate}
                  delay={i * 0.07}
                />
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section
          id="testimonials"
          className="bg-[radial-gradient(circle_at_25%_15%,#eef4ff_0%,#ffffff_55%)] py-[90px]"
        >
          <div className="mx-auto w-full max-w-[1160px] px-6">
            <Reveal>
              <p className="mb-1.5 text-center font-display text-sm font-bold uppercase tracking-[0.04em] text-blue">
                Loved Locally
              </p>
              <h2 className="mb-10 text-center font-display text-[clamp(30px,4vw,42px)] font-extrabold text-ink">
                What our regulars say
              </h2>
              <div className="-mt-4 mb-9 flex flex-col items-center justify-center gap-1 sm:flex-row sm:gap-2.5">
                <span className="text-xl tracking-[2px] text-[#ff9f40]">★★★★★</span>
                <span className="text-sm font-semibold text-[#3a4358]">
                  4.9 average from 500+ happy customers
                </span>
              </div>
            </Reveal>
            <RevealGroup className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {TESTIMONIALS.map((t) => (
                <RevealItem key={t.name} className="glass-card rounded-brand px-6 py-7">
                  <div className="mb-2.5 tracking-[2px] text-[#ff9f40]">★★★★★</div>
                  <p className="mb-3 italic">&quot;{t.quote}&quot;</p>
                  <span className="text-sm font-bold text-blue">— {t.name}</span>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>

        {/* REWARDS */}
        <section id="rewards" className="bg-white py-[90px]">
          <div className="mx-auto w-full max-w-[1160px] px-6">
            <Reveal>
              <p className="mb-1.5 text-center font-display text-sm font-bold uppercase tracking-[0.04em] text-blue">
                Perks &amp; Drops
              </p>
              <h2 className="mb-10 text-center font-display text-[clamp(30px,4vw,42px)] font-extrabold text-ink">
                Always something sweet
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <RewardsCarousel />
            </Reveal>
          </div>
        </section>

        {/* ORDER BANNER */}
        <section
          id="order"
          className="gradient-shift relative overflow-hidden bg-[linear-gradient(120deg,#0066FF_0%,#002a66_50%,#0047b3_100%)] py-20 text-white"
        >
          <FloatingBubbles variant="light" />
          <div className="relative mx-auto grid w-full max-w-[1160px] grid-cols-1 items-center gap-8 px-6 text-center md:grid-cols-2 md:text-left">
            <Reveal>
              <div className="glass-dark rounded-brand p-8">
                <p className="mb-1.5 inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 font-display text-sm font-bold uppercase tracking-[0.04em] text-[#dbe8ff]">
                  ⚡ Order Ahead
                </p>
                <AnimatedWords
                  text="Skip the line, not the flavor."
                  className="font-display text-[clamp(28px,4vw,40px)] font-extrabold text-white"
                />
                <p className="mx-auto max-w-[440px] text-[#dbe8ff] md:mx-0">
                  Order online for pickup and we&apos;ll have your drink ready when you walk in — fresh, fast, and exactly how you like it.
                </p>
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-display text-base font-bold text-blue shadow-[0_10px_24px_rgba(0,0,0,0.15)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(0,0,0,0.25)]"
                >
                  Start Your Order
                  <span
                    aria-hidden="true"
                    className="inline-block transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <AnimatedCup />
            </Reveal>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-bg-soft py-[90px]">
          <div className="mx-auto w-full max-w-[1160px] px-6">
            <Reveal>
              <p className="mb-1.5 text-center font-display text-sm font-bold uppercase tracking-[0.04em] text-blue">
                Good To Know
              </p>
              <h2 className="mb-10 text-center font-display text-[clamp(30px,4vw,42px)] font-extrabold text-ink">
                Frequently Asked Questions
              </h2>
            </Reveal>
            <FaqAccordion />
          </div>
        </section>

        {/* SOCIAL GALLERY */}
        <section className="relative overflow-hidden bg-[radial-gradient(circle_at_15%_85%,#eef4ff_0%,#ffffff_55%)] py-[90px]">
          <FloatingBubbles />
          <div className="relative mx-auto w-full max-w-[1160px] px-6">
            <Reveal>
              <p className="glass-pill mx-auto mb-1.5 inline-flex w-fit items-center gap-1.5 rounded-full px-4 py-1.5 font-display text-sm font-bold uppercase tracking-[0.04em] text-blue">
                <SOCIAL_ICONS.Instagram className="h-3.5 w-3.5" />
                Community
              </p>
              <h2 className="mb-10 text-center font-display text-[clamp(30px,4vw,42px)] font-extrabold text-ink">
                Follow @{SOCIAL_HANDLE}
              </h2>
            </Reveal>
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
              {GALLERY_TILES.map((tile, i) => (
                <GalleryTile
                  key={tile.label}
                  emoji={tile.emoji}
                  label={tile.label}
                  gradient={tile.gradient}
                  rotate={tile.rotate}
                  delay={i * 0.06}
                />
              ))}
            </div>
            <Reveal className="mt-8 flex justify-center">
              <a
                href={SOCIAL_LINKS[0].href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card group inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-display text-base font-bold text-blue transition hover:-translate-y-0.5"
              >
                <SOCIAL_ICONS.Instagram className="h-[18px] w-[18px] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
                Follow on Instagram
              </a>
            </Reveal>
          </div>
        </section>

        {/* NEWSLETTER */}
        <section className="gradient-shift bg-[linear-gradient(120deg,#0066FF_0%,#002a66_50%,#0047b3_100%)] py-[72px] text-white">
          <Reveal className="mx-auto max-w-[640px] px-6 text-center">
            <p className="mb-1.5 font-display text-sm font-bold uppercase tracking-[0.04em] text-[#dbe8ff]">
              Stay In The Loop
            </p>
            <h2 className="font-display text-[clamp(26px,4vw,36px)] font-extrabold text-white">
              Join the Leng Yang Fam
            </h2>
            <p className="text-[#dbe8ff]">
              Get first dibs on seasonal flavors, secret menu items, and birthday rewards — straight to your inbox.
            </p>
            <Newsletter />
          </Reveal>
        </section>

        {/* VISIT US */}
        <section
          id="visit"
          className="relative overflow-hidden bg-[radial-gradient(circle_at_80%_10%,#eef4ff_0%,#fbfcff_55%)] py-[90px]"
        >
          <FloatingBubbles />
          <div className="relative mx-auto w-full max-w-[1160px] px-6">
            <Reveal>
              <p className="mb-1.5 text-center font-display text-sm font-bold uppercase tracking-[0.04em] text-blue">
                Come Say Hi
              </p>
            </Reveal>
            <AnimatedWords
              text="Visit Us In Person"
              className="mb-10 text-center font-display text-[clamp(30px,4vw,42px)] font-extrabold text-ink"
            />
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <VisitCard icon="📍" iconMotion="bounce" title="Find Us">
                <p className="text-[14.5px]">
                  123 Bubble Street
                  <br />
                  Suite 4
                  <br />
                  Your City, ST 00000
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=123+Bubble+Street+Suite+4+Your+City+ST+00000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-blue transition-all duration-300 hover:gap-2.5"
                >
                  Get Directions
                  <span aria-hidden="true">→</span>
                </a>
              </VisitCard>

              <VisitCard icon="🕒" iconMotion="swing" title="Hours" delay={0.08}>
                <div className="mb-2 -mt-2">
                  <OpenStatus />
                </div>
                <p className="text-[14.5px]">
                  Mon – Fri: 10am – 9pm
                  <br />
                  Sat – Sun: 11am – 10pm
                </p>
              </VisitCard>

              <VisitCard icon="📱" iconMotion="wiggle" title="Stay Connected" delay={0.16}>
                <p className="text-[14.5px]">
                  Follow us for new flavors, giveaways, and mascot cameos.
                </p>
                <div className="mt-3 flex gap-2.5">
                  {SOCIAL_LINKS.map((social) => {
                    const Icon = SOCIAL_ICONS[social.label];
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-blue text-white transition duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-blue-dark hover:shadow-[0_8px_20px_rgba(0,102,255,0.35)]"
                      >
                        <Icon className="h-[18px] w-[18px]" />
                      </a>
                    );
                  })}
                </div>
              </VisitCard>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
