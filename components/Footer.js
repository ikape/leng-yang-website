import Image from "next/image";

export default function Footer() {
  return (
    <footer id="contact" className="bg-ink pt-14 text-slate-300">
      <div className="mx-auto grid w-full max-w-[1160px] grid-cols-1 gap-8 border-b border-white/10 px-6 pb-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
        <div className="sm:col-span-2 lg:col-span-1">
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

        <div className="flex flex-col gap-2.5 text-sm">
          <h4 className="mb-3.5 font-display text-[15px] text-white">Company</h4>
          <a href="#story" className="text-[#9fb0cc] transition-colors hover:text-white">
            Our Story
          </a>
          <a href="#visit" className="text-[#9fb0cc] transition-colors hover:text-white">
            Visit Us
          </a>
          <a href="#" className="text-[#9fb0cc] transition-colors hover:text-white">
            Careers
          </a>
        </div>

        <div className="flex flex-col gap-2.5 text-sm">
          <h4 className="mb-3.5 font-display text-[15px] text-white">Support</h4>
          <a href="#contact" className="text-[#9fb0cc] transition-colors hover:text-white">
            Contact Us
          </a>
          <a href="#" className="text-[#9fb0cc] transition-colors hover:text-white">
            Gift Cards
          </a>
          <a href="#" className="text-[#9fb0cc] transition-colors hover:text-white">
            Catering &amp; Fundraising
          </a>
        </div>

        <div className="flex flex-col gap-2.5 text-sm">
          <h4 className="mb-3.5 font-display text-[15px] text-white">Legal</h4>
          <a href="#" className="text-[#9fb0cc] transition-colors hover:text-white">
            Terms &amp; Conditions
          </a>
          <a href="#" className="text-[#9fb0cc] transition-colors hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="text-[#9fb0cc] transition-colors hover:text-white">
            Accessibility
          </a>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1160px] px-6 py-5 text-center">
        <p className="m-0 text-[13px] text-[#7c8aa5]">
          © {new Date().getFullYear()} Leng Yang Ice Cream &amp; Tea. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
