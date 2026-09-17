import Image from "next/image";
import AnnounceBar from "@/components/AnnounceBar";
import Header from "@/components/Header";
import RewardsCarousel from "@/components/RewardsCarousel";
import FaqAccordion from "@/components/FaqAccordion";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

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
  },
  {
    icon: "🍓",
    title: "Fresh Fruit Tea",
    body: "Real fruit, brewed tea, and a bright, refreshing finish. Light, fruity, and never too sweet.",
  },
  {
    icon: "🍦",
    title: "Soft-Serve Ice Cream",
    body: "Silky, hand-swirled soft serve in classic and seasonal flavors, with all the toppings.",
  },
  {
    icon: "🍨",
    title: "Ice Cream Floats",
    body: "Our soft serve meets your favorite tea for the ultimate hot-day cooldown.",
  },
  {
    icon: "🧊",
    title: "Slushies",
    body: "Blended to icy perfection. Sweet, tart, and endlessly refreshing.",
  },
  {
    icon: "✨",
    title: "Seasonal Specials",
    body: "Limited-time flavors that rotate with the seasons. Ask what's new today.",
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
  { emoji: "🧋", label: "New drop!", gradient: "from-blue to-[#4a90ff]" },
  { emoji: "🍦", label: "Scoop goals", gradient: "from-[#4a90ff] to-blue" },
  { emoji: "🎉", label: "Grand opening", gradient: "from-blue-darker to-blue" },
  { emoji: "🐰", label: "Meet the mascot", gradient: "from-blue to-blue-darker" },
  { emoji: "🍑", label: "Peach season", gradient: "from-[#4a90ff] to-blue-darker" },
  { emoji: "📸", label: "Tag us to be featured", gradient: "from-blue-darker to-[#4a90ff]" },
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
        <section className="bg-[radial-gradient(circle_at_20%_20%,#eaf1ff_0%,#fbfcff_55%)] px-0 pb-10 pt-16">
          <div className="mx-auto grid w-full max-w-[1160px] grid-cols-1 items-center gap-8 px-6 text-center md:grid-cols-[1.1fr_0.9fr] md:text-left">
            <div className="order-2 md:order-1">
              <p className="mb-2 font-display text-sm font-bold uppercase tracking-[0.04em] text-blue">
                Freshly Blended · Every Day
              </p>
              <h1 className="font-display text-[clamp(38px,5.5vw,64px)] font-extrabold leading-[1.1] text-ink">
                Chill out with
                <br />
                <span className="text-blue">Leng Yang</span>
              </h1>
              <p className="mx-auto max-w-[480px] text-lg text-[#3a4358] md:mx-0">
                Premium bubble tea and hand-scooped ice cream, made fresh in front of you. Come say hi to our favorite regular.
              </p>
              <div className="mt-2 flex flex-wrap justify-center gap-4 md:justify-start">
                <a
                  href="#order"
                  className="inline-block rounded-full bg-blue px-7 py-3.5 font-display text-base font-bold text-white shadow-[0_10px_24px_rgba(0,102,255,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(0,102,255,0.45)]"
                >
                  Order Now
                </a>
                <a
                  href="#menu"
                  className="inline-block rounded-full border-2 border-blue bg-transparent px-7 py-3.5 font-display text-base font-bold text-blue transition hover:-translate-y-0.5 hover:bg-bg-soft"
                >
                  View Menu
                </a>
              </div>
            </div>
            <div className="relative order-1 mb-3 flex items-center justify-center md:order-2 md:mb-0">
              <div className="absolute h-[105%] w-[105%] rounded-full bg-[radial-gradient(circle,#d8e6ff_0%,rgba(216,230,255,0)_70%)]" />
              <Image
                src="/assets/mascot.png"
                alt="Leng Yang mascot holding a boba drink"
                width={683}
                height={936}
                priority
                className="relative z-[1] w-[min(70%,300px)] animate-float object-contain drop-shadow-[0_20px_30px_rgba(0,40,120,0.2)] md:w-[min(100%,380px)]"
              />
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
        <section id="story" className="py-[90px]">
          <div className="mx-auto grid w-full max-w-[1160px] grid-cols-1 items-start gap-12 px-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="mb-1.5 font-display text-sm font-bold uppercase tracking-[0.04em] text-blue">
                Our Story
              </p>
              <h2 className="font-display text-[clamp(30px,4vw,42px)] font-extrabold text-ink">
                Small cup, big smiles.
              </h2>
              <p className="text-[#3a4358]">
                Leng Yang started with one simple idea: bubble tea and ice cream should make your day better, one cup at a time. Every drink is shaken fresh, every scoop is made in-house, and every visit comes with a little extra warmth (even when the drink is ice cold).
              </p>
              <p className="text-[#3a4358]">
                From classic milk teas to fruity slushies and creamy soft-serve, we keep things simple, fresh, and fun — just like our mascot.
              </p>
              <a href="#menu" className="mt-2 inline-block font-bold text-blue">
                Explore the menu →
              </a>
            </div>
            <div className="grid gap-4">
              <div className="flex flex-col gap-1 rounded-brand bg-bg-soft p-6">
                <span className="font-display text-3xl font-extrabold text-blue">100%</span>
                <span className="text-sm text-[#3a4358]">Fresh, made to order</span>
              </div>
              <div className="flex flex-col gap-1 rounded-brand bg-bg-soft p-6">
                <span className="font-display text-3xl font-extrabold text-blue">20+</span>
                <span className="text-sm text-[#3a4358]">Signature flavors</span>
              </div>
              <div className="flex flex-col gap-1 rounded-brand bg-bg-soft p-6">
                <span className="font-display text-3xl font-extrabold text-blue">❄️</span>
                <span className="text-sm text-[#3a4358]">Ice cream + boba, together</span>
              </div>
            </div>
          </div>
        </section>

        {/* QUALITY / TRUST */}
        <section className="border-y border-bg-soft bg-white py-[50px]">
          <div className="mx-auto grid w-full max-w-[1160px] grid-cols-2 gap-6 px-6 text-center md:grid-cols-4">
            {QUALITY_ITEMS.map((item) => (
              <div key={item.title}>
                <div className="mb-2.5 text-[34px]">{item.icon}</div>
                <h3 className="mb-1.5 text-base">{item.title}</h3>
                <p className="m-0 text-[13.5px]">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* MENU */}
        <section id="menu" className="bg-bg-soft py-[90px]">
          <div className="mx-auto w-full max-w-[1160px] px-6">
            <p className="mb-1.5 text-center font-display text-sm font-bold uppercase tracking-[0.04em] text-blue">
              Fan Favorites
            </p>
            <h2 className="mb-10 text-center font-display text-[clamp(30px,4vw,42px)] font-extrabold text-ink">
              Our most-loved cups
            </h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {FAVORITES.map((item) => (
                <div
                  key={item.title}
                  className="relative rounded-brand bg-white px-5 pb-6 pt-[30px] text-center shadow-brand transition hover:-translate-y-1.5 hover:-rotate-1 hover:shadow-brand-lg"
                >
                  <span
                    className={`absolute -top-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-3.5 py-1 font-display text-[11px] font-bold uppercase tracking-[0.03em] text-white shadow-[0_4px_10px_rgba(0,0,0,0.15)] ${item.tagClass}`}
                  >
                    {item.tag}
                  </span>
                  <div className="my-2.5 text-[38px]">{item.icon}</div>
                  <h3 className="mb-1.5 text-lg">{item.title}</h3>
                  <p className="m-0 text-[13.5px]">{item.body}</p>
                </div>
              ))}
            </div>

            <p className="mb-1.5 mt-16 text-center font-display text-sm font-bold uppercase tracking-[0.04em] text-blue">
              Explore The Menu
            </p>
            <h2 className="mb-10 text-center font-display text-[clamp(30px,4vw,42px)] font-extrabold text-ink">
              What are you craving?
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {MENU_ITEMS.map((item) => (
                <div
                  key={item.title}
                  className="rounded-brand bg-white px-6 py-8 text-center shadow-brand transition hover:-translate-y-1.5 hover:shadow-brand-lg"
                >
                  <div className="mb-3 text-4xl">{item.icon}</div>
                  <h3 className="mb-2 text-xl">{item.title}</h3>
                  <p className="m-0 text-[14.5px]">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section id="testimonials" className="bg-white py-[90px]">
          <div className="mx-auto w-full max-w-[1160px] px-6">
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
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {TESTIMONIALS.map((t) => (
                <div key={t.name} className="rounded-brand bg-bg-soft px-6 py-7">
                  <div className="mb-2.5 tracking-[2px] text-[#ff9f40]">★★★★★</div>
                  <p className="mb-3 italic">&quot;{t.quote}&quot;</p>
                  <span className="text-sm font-bold text-blue">— {t.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* REWARDS */}
        <section id="rewards" className="bg-white py-[90px]">
          <div className="mx-auto w-full max-w-[1160px] px-6">
            <p className="mb-1.5 text-center font-display text-sm font-bold uppercase tracking-[0.04em] text-blue">
              Perks &amp; Drops
            </p>
            <h2 className="mb-10 text-center font-display text-[clamp(30px,4vw,42px)] font-extrabold text-ink">
              Always something sweet
            </h2>
            <RewardsCarousel />
          </div>
        </section>

        {/* ORDER / MASCOT BANNER */}
        <section id="order" className="bg-gradient-to-br from-blue to-blue-darker py-20 text-white">
          <div className="mx-auto grid w-full max-w-[1160px] grid-cols-1 items-center gap-8 px-6 text-center md:grid-cols-2 md:text-left">
            <div>
              <p className="mb-1.5 font-display text-sm font-bold uppercase tracking-[0.04em] text-[#dbe8ff]">
                Order Ahead
              </p>
              <h2 className="font-display text-[clamp(28px,4vw,40px)] font-extrabold text-white">
                Skip the line, not the flavor.
              </h2>
              <p className="mx-auto max-w-[440px] text-[#dbe8ff] md:mx-0">
                Order online for pickup and we&apos;ll have your drink ready when you walk in — fresh, fast, and exactly how you like it.
              </p>
              <a
                href="#contact"
                className="inline-block rounded-full bg-white px-7 py-3.5 font-display text-base font-bold text-blue shadow-[0_10px_24px_rgba(0,0,0,0.15)] transition hover:-translate-y-0.5"
              >
                Start Your Order
              </a>
            </div>
            <Image
              src="/assets/sticker-sheet.png"
              alt="Leng Yang mascot stickers showing different moods"
              width={1024}
              height={1024}
              className="mx-auto w-full max-w-[480px] drop-shadow-[0_20px_30px_rgba(0,0,0,0.25)]"
            />
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-bg-soft py-[90px]">
          <div className="mx-auto w-full max-w-[1160px] px-6">
            <p className="mb-1.5 text-center font-display text-sm font-bold uppercase tracking-[0.04em] text-blue">
              Good To Know
            </p>
            <h2 className="mb-10 text-center font-display text-[clamp(30px,4vw,42px)] font-extrabold text-ink">
              Frequently Asked Questions
            </h2>
            <FaqAccordion />
          </div>
        </section>

        {/* SOCIAL GALLERY */}
        <section className="bg-white py-[90px]">
          <div className="mx-auto w-full max-w-[1160px] px-6">
            <p className="mb-1.5 text-center font-display text-sm font-bold uppercase tracking-[0.04em] text-blue">
              Community
            </p>
            <h2 className="mb-10 text-center font-display text-[clamp(30px,4vw,42px)] font-extrabold text-ink">
              Follow @LengYangTea
            </h2>
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
              {GALLERY_TILES.map((tile) => (
                <div
                  key={tile.label}
                  className={`flex aspect-square flex-col items-center justify-center gap-2 rounded-[18px] bg-gradient-to-br ${tile.gradient} p-3 text-center font-display text-sm font-bold text-white transition hover:scale-[1.04] hover:-rotate-1`}
                >
                  <span className="text-[34px]">{tile.emoji}</span>
                  {tile.label}
                </div>
              ))}
            </div>
            <div className="mt-8 flex justify-center">
              <a
                href="#"
                className="inline-block rounded-full border-2 border-blue bg-transparent px-7 py-3.5 font-display text-base font-bold text-blue transition hover:-translate-y-0.5 hover:bg-bg-soft"
              >
                Follow on Instagram
              </a>
            </div>
          </div>
        </section>

        {/* NEWSLETTER */}
        <section className="bg-gradient-to-br from-blue to-blue-darker py-[72px] text-white">
          <div className="mx-auto max-w-[640px] px-6 text-center">
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
          </div>
        </section>

        {/* VISIT US */}
        <section id="visit" className="py-[90px]">
          <div className="mx-auto grid w-full max-w-[1160px] grid-cols-1 gap-6 px-6 lg:grid-cols-3">
            <div className="rounded-brand border-2 border-bg-soft bg-white p-7">
              <h3 className="mb-2.5 text-lg">📍 Find Us</h3>
              <p className="text-[14.5px]">
                123 Bubble Street
                <br />
                Suite 4
                <br />
                Your City, ST 00000
              </p>
            </div>
            <div className="rounded-brand border-2 border-bg-soft bg-white p-7">
              <h3 className="mb-2.5 text-lg">🕒 Hours</h3>
              <p className="text-[14.5px]">
                Mon – Fri: 10am – 9pm
                <br />
                Sat – Sun: 11am – 10pm
              </p>
            </div>
            <div className="rounded-brand border-2 border-bg-soft bg-white p-7">
              <h3 className="mb-2.5 text-lg">📱 Stay Connected</h3>
              <p className="text-[14.5px]">
                Follow us for new flavors, giveaways, and mascot cameos.
              </p>
              <div className="mt-3 flex gap-2.5">
                {["Instagram", "TikTok", "Facebook"].map((label, i) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-blue text-xs font-bold text-white transition hover:-translate-y-0.5 hover:bg-blue-dark"
                  >
                    {["IG", "TT", "FB"][i]}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
