"use client";

import Image from "next/image";
import { useState } from "react";

/* ───────────────────────── HEADER ───────────────────────── */
function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const chevron = (
    <svg className="w-[10px] h-[10px] opacity-70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-sm">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 flex items-center justify-between h-[72px]">
        <a href="#" className="flex-shrink-0">
          <Image src="/images/logo.png" alt="Approved Expandable Homes" width={160} height={70} className="h-14 w-auto" />
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          <a href="#designs" className="flex items-center gap-1.5 text-white hover:text-gold transition-colors text-[13.5px] font-medium whitespace-nowrap">
            Home Designs {chevron}
          </a>
          <a href="#how-it-works" className="flex items-center gap-1.5 text-white hover:text-gold transition-colors text-[13.5px] font-medium whitespace-nowrap">
            Building Guide {chevron}
          </a>
          <a href="#about" className="text-white hover:text-gold transition-colors text-[13.5px] font-medium">About Us</a>
          <a href="#faqs" className="text-white hover:text-gold transition-colors text-[13.5px] font-medium">FAQs</a>
          <a href="#meet-brett" className="text-white hover:text-gold transition-colors text-[13.5px] font-medium">Meet Brett</a>
          <a href="#contact" className="inline-flex items-center justify-center gap-2.5 bg-gold hover:bg-gold-soft text-navy px-[26px] py-3.5 rounded-[3px] text-[13px] font-semibold tracking-[0.08em] uppercase transition-colors">
            Get a Quote
          </a>
        </nav>
        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-white p-2" aria-label="Toggle menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {mobileOpen && (
        <div className="lg:hidden bg-navy border-t border-white/10 px-5 pb-4">
          <a href="#designs" onClick={() => setMobileOpen(false)} className="block py-3 text-white hover:text-gold text-sm">Home Designs</a>
          <a href="#how-it-works" onClick={() => setMobileOpen(false)} className="block py-3 text-white hover:text-gold text-sm">Building Guide</a>
          <a href="#about" onClick={() => setMobileOpen(false)} className="block py-3 text-white hover:text-gold text-sm">About Us</a>
          <a href="#faqs" onClick={() => setMobileOpen(false)} className="block py-3 text-white hover:text-gold text-sm">FAQs</a>
          <a href="#meet-brett" onClick={() => setMobileOpen(false)} className="block py-3 text-white hover:text-gold text-sm">Meet Brett</a>
          <a href="#contact" onClick={() => setMobileOpen(false)} className="block mt-2 bg-gold text-navy px-6 py-3 rounded-[3px] text-[13px] font-semibold tracking-[0.08em] uppercase text-center">Get a Quote</a>
        </div>
      )}
    </header>
  );
}

/* ───────────────────────── HERO ───────────────────────── */
function Hero() {
  return (
    <section className="relative min-h-[560px] lg:min-h-[620px] flex flex-col bg-[#0f141a] overflow-hidden">
      <div className="absolute inset-0 z-[1]">
        <Image src="/images/hero-bg.png" alt="Expandable Home" fill className="object-cover object-[center_right]" preload />
      </div>
      {/* gradient shades */}
      <div className="absolute inset-0 z-[2]" style={{ background: 'linear-gradient(90deg, rgba(15,20,26,0.92) 0%, rgba(15,20,26,0.78) 25%, rgba(15,20,26,0.4) 50%, rgba(15,20,26,0.08) 70%, transparent 100%)' }} />
      <div className="absolute inset-0 z-[3] pointer-events-none" style={{ background: 'linear-gradient(180deg, transparent 65%, rgba(15,20,26,0.3) 100%)' }} />

      {/* spacer for fixed nav */}
      <div className="h-[72px]" />

      <div className="relative z-[5] max-w-[1280px] mx-auto px-5 md:px-10 py-[60px] flex-1 flex flex-col justify-center w-full">
        <h1 className="text-[clamp(48px,5.4vw,76px)] leading-[1.04] font-bold tracking-[-0.02em] text-white max-w-[680px]">
          Australian Council<br />
          Approved<br />
          <span className="text-gold">Expandable</span> Homes
        </h1>
        <div className="flex items-center gap-3.5 mt-6 mb-8 text-sm text-[#d7d9dc] flex-wrap">
          <span><strong className="text-white">From $65,000</strong></span>
          <span className="w-1 h-1 rounded-full bg-gold" />
          <span>1, 2 &amp; 3 Bedroom Layouts</span>
          <span className="w-1 h-1 rounded-full bg-gold" />
          <span>Custom Designed</span>
        </div>
        <div className="flex gap-3.5 flex-wrap">
          <a href="#sizes" className="inline-flex items-center justify-center gap-2.5 bg-gold hover:bg-gold-soft text-navy px-[26px] py-3.5 rounded-[3px] font-semibold text-[13px] tracking-[0.08em] uppercase transition-colors group">
            View Our Range <span className="inline-block transition-transform group-hover:translate-x-[3px]">&rarr;</span>
          </a>
          <a href="#contact" className="inline-flex items-center justify-center gap-2.5 border-[1.5px] border-white text-white px-[26px] py-3.5 rounded-[3px] font-semibold text-[13px] tracking-[0.08em] uppercase transition-colors hover:bg-white hover:text-navy group">
            Get a Quote <span className="inline-block transition-transform group-hover:translate-x-[3px]">&rarr;</span>
          </a>
        </div>

        {/* Cyclone Rating Announcement */}
        <div className="mt-8 max-w-[520px]">
          <a href="#meet-brett" className="group flex items-center gap-3.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-[6px] px-5 py-3.5 transition-all hover:bg-white/15 hover:border-gold/40">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center">
              <svg className="w-5 h-5 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-gold text-[13px] font-semibold tracking-[0.04em] uppercase">Now Offering Cyclone-Rated Builds</p>
              <p className="text-[12.5px] text-white/70 mt-0.5">Engineered for northern coastal Australia above Bundaberg, QLD</p>
            </div>
            <svg className="w-4 h-4 text-white/40 flex-shrink-0 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M9 18l6-6-6-6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── FEATURE STRIP ───────────────────────── */
function FeatureStrip() {
  const features = [
    {
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}><path d="M12 2 L3 6 V12 C3 17 7 21 12 22 C17 21 21 17 21 12 V6 Z" /><path d="M9 12 l2 2 l4-4" strokeLinecap="round" strokeLinejoin="round" /></svg>,
      title: "Council Approved",
      desc: "Class 1a building approval compliant across Australia",
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round"><path d="M14 4l6 6-10 10H4v-6z" /><path d="M13 5l6 6" /><path d="M3 21h7" /></svg>,
      title: "Custom Designed",
      desc: "Tailored layouts, finishes and inclusions",
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinejoin="round"><path d="M12 2l2.5 2 3.5-.5 1 3.5 3 1.5-1.5 3 1 3.5-3 1-1 3.5-3.5-.5L12 22l-2.5-2-3.5.5-1-3.5-3-1.5 1.5-3-1-3.5 3-1 1-3.5 3.5.5z" /><path d="M9 12l2 2 4-4" strokeLinecap="round" /></svg>,
      title: "One-Step Certified",
      desc: "Engineered, certified and ready to build",
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
      title: "Australia Wide Delivery",
      desc: "Delivered to your site, coast to coast",
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.95l-.71.71M21 12h-1M4 12H3m16.66 7.66l-.71-.71M4.05 4.05l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
      title: "Cyclone Rated Builds",
      desc: "Cyclone-rated homes for northern coastal Australia",
    },
  ];

  return (
    <section className="bg-navy border-t border-line-dark" style={{ padding: 0 }}>
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`flex items-start gap-4 px-4 lg:px-7 ${
                i < features.length - 1
                  ? 'border-b sm:border-b lg:border-b-0 lg:border-r border-line-dark pb-5 lg:pb-0'
                  : ''
              } ${i > 0 ? 'pt-5 lg:pt-0' : ''} ${i % 2 === 1 && i < features.length - 1 ? 'sm:border-r-0 lg:border-r' : ''}`}
            >
              <div className="w-[42px] h-[42px] border-[1.5px] border-gold rounded-full flex items-center justify-center flex-shrink-0">
                <div className="w-[18px] h-[18px] text-gold">{f.icon}</div>
              </div>
              <div>
                <h4 className="text-white text-sm font-semibold mb-1">{f.title}</h4>
                <p className="text-[#a8b0b8] text-xs leading-[1.45]">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── THREE SIZES ───────────────────────── */
function ThreeSizes() {
  const sizes = [
    { size: "20FT", img: "/images/size-20ft.jpeg", desc: "Perfect for studios, guest homes or compact living." },
    { size: "30FT", img: "/images/size-30ft.jpeg", desc: "Ideal for couples and small families." },
    { size: "40FT", img: "/images/size-40ft.jpeg", desc: "Spacious designs for growing families and modern living." },
  ];

  return (
    <section id="sizes" className="py-20">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        <div className="grid lg:grid-cols-[240px_1fr] gap-8 items-start">
          <div className="pr-6">
            <h2 className="text-base font-bold tracking-[0.18em] uppercase text-ink mb-3.5">Three Flexible Sizes</h2>
            <p className="text-[13.5px] text-muted leading-relaxed mb-5">Smart designs. Maximum space.<br />Built to fit your lifestyle and block.</p>
            <a href="#designs" className="inline-flex items-center justify-center gap-2.5 border-[1.5px] border-gold text-gold px-[18px] py-[11px] rounded-[3px] text-[11px] font-semibold tracking-[0.08em] uppercase transition-colors hover:bg-gold hover:text-navy group">
              View All Sizes <span className="inline-block transition-transform group-hover:translate-x-[3px]">&rarr;</span>
            </a>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {sizes.map((s) => (
              <article key={s.size} className="bg-paper rounded-[6px] overflow-hidden flex flex-col transition-all duration-300 shadow-[0_1px_0_rgba(0,0,0,0.02)] hover:-translate-y-[3px] hover:shadow-[0_12px_28px_rgba(29,36,44,0.08)] group">
                <div className="aspect-video bg-[#cdc7b9] overflow-hidden">
                  <Image src={s.img} alt={`${s.size} Home`} width={480} height={270} className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-[1.04]" />
                </div>
                <div className="p-5 pb-[22px]">
                  <h3 className="text-base font-bold tracking-[0.12em] uppercase text-ink mb-2.5">{s.size} Homes</h3>
                  <p className="text-[13.5px] text-muted leading-[1.55] mb-4 min-h-[42px]">{s.desc}</p>
                  <a href="#customise" className="text-[11px] font-semibold tracking-[0.12em] uppercase text-gold hover:text-gold-2 inline-flex items-center gap-1.5">
                    View Details &rarr;
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── EXPLORE DESIGNS ───────────────────────── */
function ExploreDesigns() {
  const designs = [
    { name: "ASCOT", img: "/images/design-ascot.jpeg", beds: 2, baths: 1, size: "30ft", desc: "Open plan living with a modern, airy feel." },
    { name: "SORRENTO", img: "/images/design-sorrento.jpeg", beds: 3, baths: 1, size: "40ft", desc: "Spacious family layout with room to grow." },
    { name: "CAPRI", img: "/images/design-capri.jpeg", beds: 1, baths: 1, size: "20ft", desc: "Smart, stylish and efficient compact living." },
  ];

  return (
    <section id="designs" className="pb-20">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        <div className="grid lg:grid-cols-[240px_1fr] gap-8 items-start">
          <div className="pr-6">
            <h2 className="text-base font-bold tracking-[0.18em] uppercase text-ink mb-3.5">Explore Home Designs</h2>
            <p className="text-[13.5px] text-muted leading-relaxed mb-5">Beautiful designs. Functional spaces. Built for real life.</p>
            <a href="#customise" className="inline-flex items-center justify-center gap-2.5 border-[1.5px] border-gold text-gold px-[18px] py-[11px] rounded-[3px] text-[11px] font-semibold tracking-[0.08em] uppercase transition-colors hover:bg-gold hover:text-navy group">
              View All Designs <span className="inline-block transition-transform group-hover:translate-x-[3px]">&rarr;</span>
            </a>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {designs.map((d) => (
              <article key={d.name} className="bg-paper rounded-[6px] overflow-hidden flex flex-col transition-all duration-300 shadow-[0_1px_0_rgba(0,0,0,0.02)] hover:-translate-y-[3px] hover:shadow-[0_12px_28px_rgba(29,36,44,0.08)] group">
                <div className="aspect-video bg-[#cdc7b9] overflow-hidden">
                  <Image src={d.img} alt={d.name} width={480} height={270} className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-[1.04]" />
                </div>
                <div className="p-5 pb-[22px]">
                  <h3 className="text-base font-bold tracking-[0.12em] uppercase text-ink mb-2.5">{d.name}</h3>
                  <div className="flex gap-3.5 mb-2.5 text-muted text-[12.5px]">
                    <span className="inline-flex items-center gap-1.5">
                      <svg className="w-[13px] h-[13px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M3 12V7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v5M3 12h18M3 12v6M21 12v6M6 12V9h5v3M13 12V9h5v3" /></svg>
                      {d.beds} Bed
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <svg className="w-[13px] h-[13px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M4 12h16v4a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3zM6 12V6a2 2 0 0 1 4 0M6 19v2M18 19v2" /></svg>
                      {d.baths} Bath
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <svg className="w-[13px] h-[13px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><rect x="3" y="6" width="18" height="12" rx="1" /><path d="M7 6v12M17 6v12" /></svg>
                      {d.size}
                    </span>
                  </div>
                  <p className="text-[13.5px] text-muted leading-[1.55] mb-4 min-h-[42px]">{d.desc}</p>
                  <a href="#customise" className="text-[11px] font-semibold tracking-[0.12em] uppercase text-gold hover:text-gold-2 inline-flex items-center gap-1.5">
                    View Design &rarr;
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── WHY CHOOSE ───────────────────────── */
function WhyChoose() {
  const reasons = [
    {
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}><path d="M12 2 L4 6 V12 C4 17 7.5 21 12 22 C16.5 21 20 17 20 12 V6 Z" /><path d="M9 12l2 2 4-4" /></svg>,
      title: "Class 1a Council Approval",
      desc: "Built to meet Australian Standards for complete peace of mind.",
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}><path d="M4 4h8l8 8v8H4z" /><path d="M14 4v8h8M9 14l3 3M12 11l6 6" /></svg>,
      title: "Custom Layouts & Finishes",
      desc: "Choose your layout, cladding, flooring and finishes to suit you.",
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2" /></svg>,
      title: "Fast, Reliable Delivery",
      desc: "Engineered off-site for faster build times and on-time delivery.",
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}><rect x="7" y="3" width="10" height="18" rx="1" /><path d="M10 7h4M10 10h4M10 13h3" /><path d="M9 3h6v2H9z" /></svg>,
      title: "Streamlined Approval Process",
      desc: "We aim to complete your approval and start site works before your home arrives.",
    },
  ];

  return (
    <section id="about" className="bg-navy text-white py-[90px]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        <div className="grid lg:grid-cols-[340px_1fr] gap-12 items-center">
          {/* Left - square image */}
          <div className="aspect-[1/1.05] rounded overflow-hidden bg-[#cdc7b9]">
            <Image src="/images/hero-secondary.jpeg" alt="Expandable Home Exterior" width={680} height={714} className="w-full h-full object-cover" />
          </div>
          {/* Right - content */}
          <div>
            <h2 className="text-center text-[22px] font-semibold tracking-[0.05em] mb-12">WHY CHOOSE APPROVED EXPANDABLE HOMES?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {reasons.map((r) => (
                <div key={r.title} className="text-center px-2">
                  <div className="w-14 h-14 border-[1.5px] border-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-6 h-6 text-gold">{r.icon}</div>
                  </div>
                  <h4 className="text-sm font-bold mb-2.5 leading-snug">{r.title}</h4>
                  <p className="text-[12.5px] text-[#a8b0b8] leading-[1.55]">{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── HOW IT WORKS ───────────────────────── */
function HowItWorks() {
  const steps = [
    {
      num: 1,
      icon: <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M20 6 L6 18 V34 H34 V18 Z" /><rect x="16" y="22" width="8" height="12" /></svg>,
      title: "DESIGN SELECTION",
      desc: "Choose your home design or customise your own.",
    },
    {
      num: 2,
      icon: <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth={1.5}><rect x="10" y="6" width="20" height="28" rx="2" /><path d="M14 14h12M14 20h12M14 26h8" /><path d="M16 4h8v4h-8z" /></svg>,
      title: "APPROVAL & CERTIFICATION",
      desc: "We handle your Class 1a council approval while Expandihome prepares your home.",
    },
    {
      num: 3,
      icon: <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth={1.5}><circle cx="20" cy="20" r="6" /><path d="M20 4v4M20 32v4M4 20h4M32 20h4M8.5 8.5l3 3M28.5 28.5l3 3M8.5 31.5l3-3M28.5 11.5l3-3" /></svg>,
      title: "SITE PREPARATION",
      desc: "Your home is built off-site while we prepare your approvals and site works.",
    },
    {
      num: 4,
      icon: <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M4 12h18v14H4z M22 16h7l5 5v5h-12z" /><circle cx="11" cy="29" r="3" /><circle cx="28" cy="29" r="3" /></svg>,
      title: "DELIVER & INSTALL",
      desc: "Delivered to your site and ready to install with ease.",
    },
  ];

  return (
    <section id="how-it-works" className="bg-bg py-20">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        <div className="grid lg:grid-cols-[240px_1fr] gap-8 items-start">
          <div className="pr-6">
            <h2 className="text-base font-bold tracking-[0.18em] uppercase text-ink mb-3.5">How It Works</h2>
            <p className="text-[13.5px] text-muted leading-relaxed mb-5">A simple 4-step process from design to delivery.</p>
            <a href="#contact" className="inline-flex items-center justify-center gap-2.5 border-[1.5px] border-gold text-gold px-[18px] py-[11px] rounded-[3px] text-[11px] font-semibold tracking-[0.08em] uppercase transition-colors hover:bg-gold hover:text-navy group">
              Learn More <span className="inline-block transition-transform group-hover:translate-x-[3px]">&rarr;</span>
            </a>
          </div>
          <div className="relative">
            {/* Dashed connecting line */}
            <div
              className="hidden sm:block absolute left-[6%] right-[6%] h-[2px] z-0"
              style={{
                top: '24px',
                backgroundImage: 'linear-gradient(90deg, var(--color-gold) 50%, transparent 50%)',
                backgroundSize: '10px 2px',
                backgroundRepeat: 'repeat-x',
              }}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 relative">
              {steps.map((s) => (
                <div key={s.num} className="relative z-[1] bg-paper rounded pt-14 pb-6 px-[22px] text-center shadow-[0_1px_0_rgba(0,0,0,0.04)] mt-6">
                  {/* Number circle */}
                  <div className="absolute -top-[22px] left-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-gold text-navy font-extrabold text-lg flex items-center justify-center border-4 border-bg z-10">
                    {s.num}
                  </div>
                  {/* Icon */}
                  <div className="w-12 h-12 flex items-center justify-center mx-auto mb-3.5 text-navy">
                    <div className="w-[38px] h-[38px]">{s.icon}</div>
                  </div>
                  <h4 className="text-[13px] font-bold tracking-[0.12em] uppercase mb-2.5">{s.title}</h4>
                  <p className="text-[13px] text-muted leading-[1.55]">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── MEET BRETT ───────────────────────── */
function MeetBrett() {
  return (
    <section id="meet-brett" className="py-20 bg-bg">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        <div className="grid lg:grid-cols-[240px_1fr] gap-8 items-start">
          <div className="pr-6">
            <h2 className="text-base font-bold tracking-[0.18em] uppercase text-ink mb-3.5">Meet Brett</h2>
            <p className="text-[13.5px] text-muted leading-relaxed mb-5">
              Your dedicated building approval specialist. Brett partners exclusively with Expandihome to handle cyclone-rated and regular Class 1a council-approved homes across Australia.
            </p>
            <a href="#contact" className="inline-flex items-center justify-center gap-2.5 border-[1.5px] border-gold text-gold px-[18px] py-[11px] rounded-[3px] text-[11px] font-semibold tracking-[0.08em] uppercase transition-colors hover:bg-gold hover:text-navy group">
              Ask a Question <span className="inline-block transition-transform group-hover:translate-x-[3px]">&rarr;</span>
            </a>
          </div>
          <div>
            {/* Upcoming consultation card */}
            <div className="bg-paper rounded-[6px] border border-line p-8 lg:p-10 shadow-[0_1px_0_rgba(0,0,0,0.02)]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center">
                  <svg className="w-5 h-5 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-ink">Upcoming Consultation Day</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <svg className="w-5 h-5 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="text-sm font-bold text-ink">Saturday, May 30th</p>
                      <p className="text-xs text-muted">10:00 AM - 12:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="text-sm font-bold text-ink">Expandihome Offices</p>
                      <p className="text-xs text-muted">43 Cairns St, Loganholme QLD 4129</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-between">
                  <p className="text-[13.5px] text-muted leading-relaxed">
                    Meet Brett in person to discuss Class 1a council approvals, cyclone-rated builds for northern coastal areas, and everything you need to know about your expandable home.
                  </p>
                  <a href="#contact" className="inline-flex items-center justify-center gap-2.5 mt-4 bg-gold hover:bg-gold-soft text-navy px-6 py-3 rounded-[3px] text-[13px] font-semibold tracking-[0.08em] uppercase transition-colors group">
                    Book Your Spot <span className="inline-block transition-transform group-hover:translate-x-[3px]">&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
            {/* Info note about cyclone builds */}
            <div className="mt-4 flex items-start gap-3 bg-paper rounded-[6px] p-5 shadow-[0_1px_0_rgba(0,0,0,0.02)]">
              <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-[13.5px] text-muted leading-relaxed">
                <span className="font-semibold text-ink">Cyclone-rated builds available</span> - We offer cyclone-rated expandable homes for coastal northern Australia above Bundaberg, QLD. Ask Brett about certification requirements for your region.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── CUSTOMISE ───────────────────────── */
function CustomiseSection() {
  const options = ["Layout Options", "Cladding Choices", "Flooring Selections", "Window & Door Options", "Accessories & Inclusions", "Cyclone-Rated Options"];

  return (
    <section id="customise" className="bg-navy text-white py-20">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        <div className="grid lg:grid-cols-[240px_1fr_1fr] gap-8 items-center">
          {/* Left - options list */}
          <div>
            <h2 className="text-base font-bold tracking-[0.18em] uppercase mb-3.5">Customise Your Home</h2>
            <p className="text-[13.5px] text-[#a8b0b8] leading-relaxed mb-5">Make it yours with a wide range of options and premium finishes.</p>
            <ul className="flex flex-col gap-3.5">
              {options.map((opt) => (
                <li key={opt} className="flex items-center gap-2.5 text-[13.5px] text-[#e0e2e5]">
                  <svg className="w-4 h-4 text-gold flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="9" /><path d="M8 12l3 3 5-6" /></svg>
                  {opt}
                </li>
              ))}
            </ul>
          </div>
          {/* Center - floor plan */}
          <div className="aspect-[1.45/1] bg-white rounded overflow-hidden relative">
            <Image src="/images/floor-plan.jpg" alt="Floor Plan" fill className="object-cover" />
          </div>
          {/* Right - delivery map */}
          <div>
            <h3 className="text-2xl font-semibold mb-2">Delivery Australia Wide</h3>
            <p className="text-[13.5px] text-[#a8b0b8] leading-[1.55] mb-6 max-w-[280px]">From the city to the coast, we deliver Australia wide.</p>
            <div className="aspect-[1.3/1] rounded relative flex items-center justify-center">
              <svg viewBox="0 0 400 320" className="w-full h-full" style={{ display: 'block' }}>
                {/* Australia silhouette */}
                <path d="M 78 118 C 64 124, 58 138, 56 152 C 53 168, 56 184, 62 198 C 70 214, 84 226, 100 234 C 118 244, 138 252, 158 258 C 178 264, 198 268, 220 268 C 246 268, 270 264, 292 256 C 312 250, 332 242, 344 228 C 354 214, 358 196, 358 178 C 358 162, 354 146, 346 132 C 338 118, 324 106, 308 100 C 290 92, 268 88, 248 88 C 230 86, 212 84, 196 80 C 182 76, 168 72, 154 72 C 138 72, 124 76, 112 84 C 100 90, 88 102, 78 118 Z" fill="#2d3640" stroke="#3a4350" strokeWidth="1" />
                {/* Tasmania */}
                <ellipse cx="282" cy="288" rx="14" ry="9" fill="#2d3640" stroke="#3a4350" strokeWidth="1" />
                {/* Dashed route */}
                <path d="M 100 195 Q 160 210, 200 200 Q 240 188, 270 170 Q 295 150, 305 130 Q 310 110, 290 95" fill="none" stroke="#d4a14a" strokeWidth="1.5" strokeDasharray="3 4" opacity="0.85" />
                {/* Truck */}
                <g transform="translate(76,180)">
                  <circle cx="12" cy="12" r="22" fill="none" stroke="#d4a14a" strokeWidth="1.2" strokeDasharray="2 3" opacity="0.6" />
                  <g fill="#d4a14a" stroke="none">
                    <rect x="0" y="8" width="14" height="10" rx="1" />
                    <path d="M14 11 h6 l3 3 v4 h-9 z" />
                    <circle cx="5" cy="19" r="2.2" fill="#1d242c" />
                    <circle cx="5" cy="19" r="1" fill="#d4a14a" />
                    <circle cx="18" cy="19" r="2.2" fill="#1d242c" />
                    <circle cx="18" cy="19" r="1" fill="#d4a14a" />
                  </g>
                </g>
              </svg>
              {/* City pins */}
              {[
                { top: '33%', left: '73%', title: 'Brisbane' },
                { top: '52%', left: '78%', title: 'Sydney' },
                { top: '62%', left: '70%', title: 'Canberra' },
                { top: '74%', left: '62%', title: 'Melbourne' },
                { top: '54%', left: '60%', title: 'Inland' },
                { top: '88%', left: '69%', title: 'Tasmania' },
                { top: '42%', left: '62%', title: 'Cairns' },
              ].map((pin) => (
                <span
                  key={pin.title}
                  className="absolute w-3.5 h-3.5 rounded-full bg-gold"
                  style={{
                    top: pin.top,
                    left: pin.left,
                    boxShadow: '0 0 0 4px rgba(212,161,74,0.2)',
                    animation: 'pulse-pin 2.4s infinite',
                  }}
                  title={pin.title}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── FAQ ───────────────────────── */
function FAQSection() {
  const faqs = [
    { q: "Are your homes council approved?", a: "Yes, all our homes are designed and engineered to meet Class 1a building standards. We handle the full council approval process for you." },
    { q: "What is included in the base price?", a: "The base price includes the complete home structure, internal fit-out, kitchen, bathroom, flooring, and standard finishes. Council approval fees are additional." },
    { q: "How long does delivery take?", a: "From order to delivery is approximately 90 days. Your home is built overseas while we work to complete your council approval and site preparation, so everything is ready when your home arrives." },
    { q: "Do I need council approval on my block?", a: "Yes, council approval is required for all permanent dwellings. Brett handles the entire approval and certification process for you as part of our service." },
    { q: "Can I customise the layout and finishes?", a: "Absolutely. You can choose your layout, cladding, flooring, window styles, and accessories to create a home that suits your needs." },
    { q: "How long does installation take?", a: "Installation is typically completed within 1-2 days once your site is prepared and the home arrives. Our team manages the full setup process." },
    { q: "Do you offer cyclone-rated homes?", a: "Yes, we offer cyclone-rated builds for coastal northern Australia above Bundaberg. Brett works exclusively with Expandihome to ensure your home meets all cyclone rating requirements and Class 1a standards for your region." },
    { q: "Who builds the home?", a: "Your home is manufactured by Expandihome, our exclusive partner. Approved Expandable Homes handles all council approvals, engineering certification, and ensures your home meets Class 1a standards - including cyclone ratings for northern coastal regions." },
  ];

  return (
    <section id="faqs" className="bg-bg py-20">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-base font-bold tracking-[0.18em] uppercase text-ink">Frequently Asked Questions</h2>
          <a href="#contact" className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.12em] uppercase text-gold hover:text-gold-2">
            View All FAQs &rarr;
          </a>
        </div>
        <div className="grid md:grid-cols-2 gap-3.5">
          {faqs.map((faq, i) => (
            <details key={i} className="bg-paper rounded shadow-[0_1px_0_rgba(0,0,0,0.03)] overflow-hidden group">
              <summary className="list-none flex items-center justify-between p-[18px_22px] text-sm font-medium text-ink cursor-pointer gap-4 [&::-webkit-details-marker]:hidden">
                <span>{faq.q}</span>
                <span className="w-[22px] h-[22px] flex items-center justify-center text-muted flex-shrink-0 transition-transform group-open:rotate-45 group-open:text-gold text-lg">+</span>
              </summary>
              <div className="px-[22px] pb-5 text-[13.5px] text-muted leading-relaxed">{faq.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── FOOTER ───────────────────────── */
function Footer() {
  const handleQuote = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const propertyAddress = String(data.get("propertyAddress") || "").trim();
    const postcode = String(data.get("postcode") || "").trim();
    const size = String(data.get("size") || "").trim();
    const subject = `Quote request${name ? ` from ${name}` : ""}`;
    const body =
      `Hi Approved Expandable Homes team,\n\n` +
      `I'd like to request a quote. My details are below.\n\n` +
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone}\n` +
      `Property Address: ${propertyAddress}\n` +
      `Postcode: ${postcode}\n` +
      `Home Size: ${size}\n\n` +
      `Thanks.`;
    window.location.href = `mailto:answers@approvedexpandables.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <footer
      id="contact"
      className="bg-navy text-white"
      style={{
        backgroundImage: 'linear-gradient(0deg, rgba(29,36,44,0.92), rgba(29,36,44,0.96)), url(/images/hero-secondary.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        {/* Top: brand + quote form */}
        <div className="py-[60px] pb-[50px] grid lg:grid-cols-[1fr_1.2fr] gap-[60px] items-center">
          <div>
            <div className="flex items-center gap-3 mb-[18px]">
              <Image src="/images/logo.png" alt="Approved Expandable Homes" width={180} height={80} className="h-14 w-auto" />
            </div>
            <p className="text-[13.5px] text-[#cfd2d6] leading-[1.55] max-w-[300px]">Australian Council Approved Expandable Homes</p>
          </div>

          <form onSubmit={handleQuote} className="grid grid-cols-2 gap-3">
            <input required name="name" type="text" placeholder="Full Name" className="bg-white border-0 rounded-[3px] px-4 py-3.5 text-[13.5px] text-navy placeholder-[#9aa1a9] font-[inherit]" />
            <input required name="email" type="email" placeholder="Email Address" className="bg-white border-0 rounded-[3px] px-4 py-3.5 text-[13.5px] text-navy placeholder-[#9aa1a9] font-[inherit]" />
            <input name="phone" type="tel" placeholder="Phone Number" className="bg-white border-0 rounded-[3px] px-4 py-3.5 text-[13.5px] text-navy placeholder-[#9aa1a9] font-[inherit]" />
            <input name="postcode" type="text" placeholder="Postcode" className="bg-white border-0 rounded-[3px] px-4 py-3.5 text-[13.5px] text-navy placeholder-[#9aa1a9] font-[inherit]" />
            <input required name="propertyAddress" type="text" placeholder="Property Address" className="col-span-2 bg-white border-0 rounded-[3px] px-4 py-3.5 text-[13.5px] text-navy placeholder-[#9aa1a9] font-[inherit]" />
            <select required name="size" defaultValue="" aria-label="Home Size" className="col-span-2 bg-white border-0 rounded-[3px] px-4 py-3.5 text-[13.5px] text-navy font-[inherit]">
              <option value="" disabled>Home Size</option>
              <option value="20ft (40 sq mtrs)">20ft (40 sq mtrs)</option>
              <option value="30ft (60 sq mtrs)">30ft (60 sq mtrs)</option>
              <option value="40ft (80 sq mtrs)">40ft (80 sq mtrs)</option>
            </select>
            <button type="submit" className="col-span-2 bg-gold text-navy py-3.5 rounded-[3px] font-bold text-[13px] tracking-[0.12em] uppercase transition-colors hover:bg-gold-soft">
              Request a Quote
            </button>
          </form>
        </div>

        {/* Mid: nav columns */}
        <div className="border-t border-line-dark py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-9 items-start">
          <div>
            <Image src="/images/logo.png" alt="Approved Expandable Homes" width={140} height={60} className="h-12 w-auto" />
          </div>

          <div>
            <h5 className="text-[11px] font-bold tracking-[0.18em] uppercase text-white mb-[18px]">Navigation</h5>
            <ul className="flex flex-col gap-2.5">
              <li><a href="#designs" className="text-[13px] text-[#b4b9bf] hover:text-gold transition-colors">Home Designs</a></li>
              <li><a href="#how-it-works" className="text-[13px] text-[#b4b9bf] hover:text-gold transition-colors">Building Guide</a></li>
              <li><a href="#about" className="text-[13px] text-[#b4b9bf] hover:text-gold transition-colors">About Us</a></li>
              <li><a href="#faqs" className="text-[13px] text-[#b4b9bf] hover:text-gold transition-colors">FAQs</a></li>
              <li><a href="#meet-brett" className="text-[13px] text-[#b4b9bf] hover:text-gold transition-colors">Meet Brett</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-[11px] font-bold tracking-[0.18em] uppercase text-white mb-[18px]">Popular</h5>
            <ul className="flex flex-col gap-2.5">
              <li><a href="#sizes" className="text-[13px] text-[#b4b9bf] hover:text-gold transition-colors">20ft Homes</a></li>
              <li><a href="#sizes" className="text-[13px] text-[#b4b9bf] hover:text-gold transition-colors">30ft Homes</a></li>
              <li><a href="#sizes" className="text-[13px] text-[#b4b9bf] hover:text-gold transition-colors">40ft Homes</a></li>
              <li><a href="#designs" className="text-[13px] text-[#b4b9bf] hover:text-gold transition-colors">All Designs</a></li>
              <li><a href="#meet-brett" className="text-[13px] text-[#b4b9bf] hover:text-gold transition-colors">Cyclone-Rated Builds</a></li>
              <li><a href="#about" className="text-[13px] text-[#b4b9bf] hover:text-gold transition-colors">Australia Wide Delivery</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-[11px] font-bold tracking-[0.18em] uppercase text-white mb-[18px]">Contact Us</h5>
            <div className="flex flex-col gap-2.5">
              <div className="flex items-start gap-2.5 text-[13px] text-[#b4b9bf]">
                <svg className="w-3.5 h-3.5 text-gold mt-[3px] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.91.32 1.8.59 2.65a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.43-1.16a2 2 0 0 1 2.11-.45c.85.27 1.74.47 2.65.59A2 2 0 0 1 22 16.92z" /></svg>
                0415 228 171
              </div>
              <div className="flex items-start gap-2.5 text-[13px] text-[#b4b9bf]">
                <svg className="w-3.5 h-3.5 text-gold mt-[3px] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
                answers@approvedexpandables.com
              </div>
              <div className="flex items-start gap-2.5 text-[13px] text-[#b4b9bf]">
                <svg className="w-3.5 h-3.5 text-gold mt-[3px] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M12 22s8-7.5 8-13a8 8 0 1 0-16 0c0 5.5 8 13 8 13z" /><circle cx="12" cy="9" r="3" /></svg>
                Australia Wide Delivery
              </div>
            </div>
          </div>

          <div>
            <h5 className="text-[11px] font-bold tracking-[0.18em] uppercase text-white mb-[18px]">Follow Us</h5>
            <div className="flex gap-2.5">
              <a
                href="https://www.facebook.com/p/Council-Approved-Expandable-Homes-Australia-61577789785666/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[34px] h-[34px] border border-[#b4b9bf] rounded-full flex items-center justify-center text-white hover:bg-gold hover:border-gold hover:text-navy transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M13 22v-8h3l1-4h-4V7c0-1.1.4-2 2-2h2V1.2C16.6 1.1 15.4 1 14 1c-3 0-5 1.8-5 5v4H6v4h3v8h4z" /></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom: copyright */}
        <div className="border-t border-line-dark py-[22px] flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs text-[#8a909a]">
          <div>&copy; {new Date().getFullYear()} Approved Expandable Homes. All Rights Reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/60 transition-colors">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ───────────────────────── PAGE ───────────────────────── */
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeatureStrip />
        <ThreeSizes />
        <ExploreDesigns />
        <WhyChoose />
        <HowItWorks />
        <MeetBrett />
        <CustomiseSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
