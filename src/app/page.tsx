"use client";

import Image from "next/image";
import { useState } from "react";

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        <a href="#" className="flex-shrink-0">
          <Image src="/images/logo.png" alt="Approved Expandable Homes" width={160} height={70} className="h-14 w-auto" />
        </a>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#designs" className="text-white hover:text-gold transition-colors text-sm font-medium">Home Designs</a>
          <a href="#how-it-works" className="text-white hover:text-gold transition-colors text-sm font-medium">Building Guide</a>
          <a href="#about" className="text-white hover:text-gold transition-colors text-sm font-medium">About Us</a>
          <a href="#faqs" className="text-white hover:text-gold transition-colors text-sm font-medium">FAQs</a>
          <a href="#contact" className="bg-gold hover:bg-gold-dark text-white px-6 py-2.5 rounded text-sm font-semibold transition-colors">
            GET A QUOTE
          </a>
        </nav>
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-white p-2" aria-label="Toggle menu">
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
        <div className="md:hidden bg-navy border-t border-white/10 px-4 pb-4">
          <a href="#designs" onClick={() => setMobileOpen(false)} className="block py-3 text-white hover:text-gold text-sm">Home Designs</a>
          <a href="#how-it-works" onClick={() => setMobileOpen(false)} className="block py-3 text-white hover:text-gold text-sm">Building Guide</a>
          <a href="#about" onClick={() => setMobileOpen(false)} className="block py-3 text-white hover:text-gold text-sm">About Us</a>
          <a href="#faqs" onClick={() => setMobileOpen(false)} className="block py-3 text-white hover:text-gold text-sm">FAQs</a>
          <a href="#contact" onClick={() => setMobileOpen(false)} className="block mt-2 bg-gold text-white px-6 py-2.5 rounded text-sm font-semibold text-center">GET A QUOTE</a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center pt-20">
      <div className="absolute inset-0">
        <Image src="/images/hero-home.jpeg" alt="Expandable Home" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/50 to-transparent" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-2xl">
          Australian Council{" "}
          <br />Approved{" "}
          <br /><span className="text-gold">Expandable</span> Homes
        </h1>
        <p className="mt-4 text-white/90 text-lg">
          From $65,000 &bull; 1, 2 &amp; 3 Bedroom Layouts &bull; Custom Designed
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#sizes" className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-white px-8 py-3.5 rounded font-semibold transition-colors">
            VIEW OUR RANGE
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3.5 rounded font-semibold hover:bg-white/10 transition-colors">
            GET A QUOTE
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
}

function FeatureStrip() {
  const features = [
    { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", title: "Council Approved", desc: "Class 1a building approval compliant across Australia" },
    { icon: "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z", title: "Custom Designed", desc: "Tailored layouts, finishes and inclusions" },
    { icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z", title: "One-Step Certified", desc: "Engineered, certified and ready to build" },
    { icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z", title: "Australia Wide Delivery", desc: "Delivered to your site, coast to coast" },
  ];

  return (
    <section className="bg-white py-12 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f) => (
            <div key={f.title} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-gold mb-4">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={f.icon} />
                </svg>
              </div>
              <h3 className="font-bold text-navy text-sm">{f.title}</h3>
              <p className="text-gray-500 text-xs mt-1">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ThreeSizes() {
  const sizes = [
    { size: "20FT", img: "/images/size-20ft.jpeg", desc: "Perfect for studios, guest homes or compact living." },
    { size: "30FT", img: "/images/size-30ft.jpeg", desc: "Ideal for couples and small families." },
    { size: "40FT", img: "/images/size-40ft.jpeg", desc: "Spacious designs for growing families and modern living." },
  ];

  return (
    <section id="sizes" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-start lg:gap-12">
          <div className="lg:w-1/4 mb-8 lg:mb-0">
            <h2 className="text-2xl lg:text-3xl font-bold text-navy">THREE FLEXIBLE SIZES</h2>
            <p className="text-gray-600 mt-3 text-sm">Smart designs. Maximum space. Built to fit your lifestyle and block.</p>
            <a href="#designs" className="inline-flex items-center gap-2 mt-4 border-2 border-navy text-navy px-5 py-2 rounded text-sm font-semibold hover:bg-navy hover:text-white transition-colors">
              VIEW ALL SIZES
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>
          <div className="lg:w-3/4 grid sm:grid-cols-3 gap-6">
            {sizes.map((s) => (
              <div key={s.size} className="group">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-100">
                  <Image src={s.img} alt={`${s.size} Home`} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="font-bold text-navy mt-4 text-lg">{s.size} HOMES</h3>
                <p className="text-gray-500 text-sm mt-1">{s.desc}</p>
                <a href="#contact" className="inline-flex items-center gap-1 text-gold font-semibold text-sm mt-2 hover:text-gold-dark transition-colors">
                  VIEW DETAILS
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExploreDesigns() {
  const designs = [
    { name: "ASCOT", img: "/images/design-ascot.jpeg", beds: 2, baths: 1, size: "30ft", desc: "Open plan living with a modern, airy feel." },
    { name: "SORRENTO", img: "/images/design-sorrento.jpeg", beds: 3, baths: 1, size: "40ft", desc: "Spacious family layout with room to grow." },
    { name: "CAPRI", img: "/images/design-capri.jpeg", beds: 1, baths: 1, size: "20ft", desc: "Smart, stylish and efficient compact living." },
  ];

  return (
    <section id="designs" className="py-16 lg:py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-start lg:gap-12">
          <div className="lg:w-1/4 mb-8 lg:mb-0">
            <h2 className="text-2xl lg:text-3xl font-bold text-navy">EXPLORE HOME DESIGNS</h2>
            <p className="text-gray-600 mt-3 text-sm">Beautiful designs. Functional spaces. Built for real life.</p>
            <a href="#contact" className="inline-flex items-center gap-2 mt-4 border-2 border-navy text-navy px-5 py-2 rounded text-sm font-semibold hover:bg-navy hover:text-white transition-colors">
              VIEW ALL DESIGNS
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>
          <div className="lg:w-3/4 grid sm:grid-cols-3 gap-6">
            {designs.map((d) => (
              <div key={d.name} className="group">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-200">
                  <Image src={d.img} alt={d.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="font-bold text-navy mt-4 text-lg">{d.name}</h3>
                <div className="flex items-center gap-4 text-gray-500 text-xs mt-1">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                    {d.beds} Bed
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14" /></svg>
                    {d.baths} Bath
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
                    {d.size}
                  </span>
                </div>
                <p className="text-gray-500 text-sm mt-2">{d.desc}</p>
                <a href="#contact" className="inline-flex items-center gap-1 text-gold font-semibold text-sm mt-2 hover:text-gold-dark transition-colors">
                  VIEW DESIGN
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  const reasons = [
    { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", title: "Class 1a Council Approval", desc: "Built to meet Australian Standards for complete peace of mind." },
    { icon: "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z", title: "Custom Layouts & Finishes", desc: "Choose your layout, cladding, flooring and finishes to suit you." },
    { icon: "M13 10V3L4 14h7v7l9-11h-7z", title: "Fast, Reliable Delivery", desc: "Engineered off-site for faster build times and on-time delivery." },
    { icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4", title: "Streamlined Approval Process", desc: "We handle the paperwork so you can focus on the excitement." },
  ];

  return (
    <section id="about" className="relative py-16 lg:py-20">
      <div className="absolute inset-0">
        <Image src="/images/interior-living.jpg" alt="Interior" fill className="object-cover" />
        <div className="absolute inset-0 bg-navy/90" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl lg:text-3xl font-bold text-white">WHY CHOOSE APPROVED EXPANDABLE HOMES?</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {reasons.map((r) => (
            <div key={r.title} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-gold mb-4">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={r.icon} />
                </svg>
              </div>
              <h3 className="font-bold text-gold text-sm">{r.title}</h3>
              <p className="text-white/70 text-xs mt-2">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { num: 1, icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6", title: "DESIGN SELECTION", desc: "Choose your home design or customise your own." },
    { num: 2, icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", title: "APPROVE & ORDER", desc: "We finalise plans, you approve and place your order." },
    { num: 3, icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4", title: "PREPARE & SETUP", desc: "We build off-site while you prepare your site." },
    { num: 4, icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4", title: "DELIVER & INSTALL", desc: "Delivered to your site and ready to install with ease." },
  ];

  return (
    <section id="how-it-works" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-start lg:gap-12">
          <div className="lg:w-1/4 mb-8 lg:mb-0">
            <h2 className="text-2xl lg:text-3xl font-bold text-navy">HOW IT WORKS</h2>
            <p className="text-gray-600 mt-3 text-sm">A simple 4-step process from design to delivery.</p>
            <a href="#contact" className="inline-flex items-center gap-2 mt-4 border-2 border-navy text-navy px-5 py-2 rounded text-sm font-semibold hover:bg-navy hover:text-white transition-colors">
              LEARN MORE
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>
          <div className="lg:w-3/4">
            <div className="grid sm:grid-cols-4 gap-6 relative">
              <div className="hidden sm:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-gold/30" />
              {steps.map((s) => (
                <div key={s.num} className="text-center relative">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold text-white text-xl font-bold mb-4 relative z-10">
                    {s.num}
                  </div>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-gold/30 mb-3">
                    <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={s.icon} />
                    </svg>
                  </div>
                  <h3 className="font-bold text-navy text-xs">{s.title}</h3>
                  <p className="text-gray-500 text-xs mt-1">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CustomiseSection() {
  const options = ["Layout Options", "Cladding Choices", "Flooring Selections", "Window & Door Options", "Accessories & Inclusions"];

  return (
    <section className="py-16 lg:py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:gap-12">
          <div className="lg:w-1/3 mb-8 lg:mb-0">
            <h2 className="text-2xl lg:text-3xl font-bold text-navy">CUSTOMISE YOUR HOME</h2>
            <p className="text-gray-600 mt-3 text-sm">Make it yours with a wide range of options and premium finishes.</p>
            <ul className="mt-6 space-y-3">
              {options.map((opt) => (
                <li key={opt} className="flex items-center gap-3 text-sm text-gray-700">
                  <svg className="w-5 h-5 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {opt}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-1/3">
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg">
              <Image src="/images/floor-plan.jpg" alt="Floor Plan" fill className="object-cover" />
            </div>
          </div>
          <div className="lg:w-1/3 mt-8 lg:mt-0">
            <h3 className="text-xl font-bold text-navy italic">Delivery Australia Wide</h3>
            <p className="text-gray-600 text-sm mt-2">From the city to the coast, we deliver Australia wide.</p>
            <div className="mt-6">
              <svg viewBox="0 0 400 380" className="w-full max-w-xs mx-auto" fill="none">
                <path d="M155 30 L185 25 L220 15 L260 20 L300 30 L340 55 L360 85 L370 120 L375 160 L365 200 L355 230 L340 260 L320 285 L295 305 L265 320 L235 335 L210 345 L185 350 L160 345 L140 335 L120 315 L100 290 L80 265 L65 235 L55 205 L50 175 L55 145 L65 115 L80 85 L100 60 L125 42 Z" fill="#f0ebe0" stroke="#c8a962" strokeWidth="2" />
                <path d="M310 270 L325 260 L340 265 L345 280 L335 290 L320 285 Z" fill="#f0ebe0" stroke="#c8a962" strokeWidth="2" />
                <circle cx="300" cy="140" r="6" fill="#c8a962" />
                <circle cx="260" cy="250" r="6" fill="#c8a962" />
                <circle cx="190" cy="300" r="6" fill="#c8a962" />
                <circle cx="110" cy="230" r="6" fill="#c8a962" />
                <circle cx="140" cy="140" r="6" fill="#c8a962" />
                <circle cx="230" cy="100" r="6" fill="#c8a962" />
                <circle cx="220" cy="200" r="8" fill="#1a1f36" />
                <text x="220" y="200" textAnchor="middle" fill="white" fontSize="6" dy="2">HQ</text>
                {[
                  [220, 200, 300, 140], [220, 200, 260, 250], [220, 200, 190, 300],
                  [220, 200, 110, 230], [220, 200, 140, 140], [220, 200, 230, 100],
                ].map(([x1, y1, x2, y2], i) => (
                  <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#c8a962" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
                ))}
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const faqs = [
    { q: "Are your homes council approved?", a: "Yes, all our homes are designed and engineered to meet Class 1a building standards. We handle the full council approval process for you." },
    { q: "How long does delivery take?", a: "From order to delivery is approximately 90 days. Your home is built off-site while you prepare your land and complete the council approval process." },
    { q: "Can I customise the layout and finishes?", a: "Absolutely. You can choose your layout, cladding, flooring, window styles, and accessories to create a home that suits your needs." },
    { q: "What is included in the base price?", a: "The base price includes the complete home structure, internal fit-out, kitchen, bathroom, flooring, and standard finishes. Council approval fees are additional." },
    { q: "Do I need council approval on my block?", a: "Yes, council approval is required for all permanent dwellings. We manage this entire process for you as part of our service." },
    { q: "How long does installation take?", a: "Installation is typically completed within 1-2 days once your site is prepared and the home arrives. Our team manages the full setup process." },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faqs" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-navy">FREQUENTLY ASKED QUESTIONS</h2>
          <a href="#contact" className="hidden sm:inline-flex items-center gap-1 text-gold font-semibold text-sm hover:text-gold-dark">
            VIEW ALL FAQS
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-200 rounded-lg">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-4 text-left"
              >
                <span className="text-sm font-medium text-navy">{faq.q}</span>
                <svg className={`w-5 h-5 text-gold flex-shrink-0 ml-2 transition-transform ${openIndex === i ? "rotate-45" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
              {openIndex === i && (
                <div className="px-4 pb-4 text-sm text-gray-600">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  return (
    <section id="contact" className="py-16 lg:py-20 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/3 text-center lg:text-left">
            <Image src="/images/logo.png" alt="Approved Expandable Homes" width={200} height={90} className="mx-auto lg:mx-0 mb-4" />
            <p className="text-white/70 text-sm">Australian Council Approved<br />Expandable Homes</p>
          </div>
          <div className="lg:w-2/3 w-full">
            <div className="grid sm:grid-cols-2 gap-4">
              <input type="text" placeholder="Full Name" className="w-full px-4 py-3 rounded bg-navy-light border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-gold" />
              <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded bg-navy-light border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-gold" />
              <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded bg-navy-light border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-gold" />
              <input type="text" placeholder="Postcode" className="w-full px-4 py-3 rounded bg-navy-light border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-gold" />
            </div>
            <button className="w-full mt-4 bg-gold hover:bg-gold-dark text-white py-3.5 rounded font-semibold transition-colors flex items-center justify-center gap-2">
              REQUEST A QUOTE
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-navy border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
          <div>
            <Image src="/images/logo.png" alt="Approved Expandable Homes" width={140} height={60} className="mb-4" />
          </div>
          <div>
            <h4 className="text-white font-bold text-sm mb-4">NAVIGATION</h4>
            <ul className="space-y-2">
              <li><a href="#designs" className="text-white/60 hover:text-gold text-sm transition-colors">Home Designs</a></li>
              <li><a href="#how-it-works" className="text-white/60 hover:text-gold text-sm transition-colors">Building Guide</a></li>
              <li><a href="#about" className="text-white/60 hover:text-gold text-sm transition-colors">About Us</a></li>
              <li><a href="#faqs" className="text-white/60 hover:text-gold text-sm transition-colors">FAQs</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm mb-4">POPULAR</h4>
            <ul className="space-y-2">
              <li><a href="#sizes" className="text-white/60 hover:text-gold text-sm transition-colors">20ft Homes</a></li>
              <li><a href="#sizes" className="text-white/60 hover:text-gold text-sm transition-colors">30ft Homes</a></li>
              <li><a href="#sizes" className="text-white/60 hover:text-gold text-sm transition-colors">40ft Homes</a></li>
              <li><a href="#designs" className="text-white/60 hover:text-gold text-sm transition-colors">All Designs</a></li>
              <li><a href="#" className="text-white/60 hover:text-gold text-sm transition-colors">Australia Wide Delivery</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm mb-4">CONTACT US</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-white/60 text-sm">
                <svg className="w-4 h-4 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                0415 228 171
              </li>
              <li className="flex items-center gap-2 text-white/60 text-sm">
                <svg className="w-4 h-4 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                info@approvedexpandablehomes.com.au
              </li>
              <li className="flex items-start gap-2 text-white/60 text-sm">
                <svg className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                Australia Wide Delivery
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm mb-4">FOLLOW US</h4>
            <div className="flex gap-3">
              {["facebook", "instagram", "youtube", "pinterest"].map((social) => (
                <a key={social} href="#" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-gold hover:text-gold transition-colors" aria-label={social}>
                  {social === "facebook" && <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>}
                  {social === "instagram" && <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" strokeWidth="2" /><circle cx="12" cy="12" r="5" strokeWidth="2" /><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" /></svg>}
                  {social === "youtube" && <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23 9.71a8.5 8.5 0 00-.91-4.13 2.92 2.92 0 00-1.72-1A78.36 78.36 0 0012 4.27a78.45 78.45 0 00-8.34.3 2.87 2.87 0 00-1.46.74c-.9.83-1 2.25-1.1 3.45a48.29 48.29 0 000 6.48 9.55 9.55 0 00.64 2.79 2.67 2.67 0 001.6 1.33c1.06.28 5.23.43 8.66.43s7.59-.16 8.65-.43a2.65 2.65 0 001.6-1.33 9.37 9.37 0 00.64-2.79c.1-.86.22-1.72.22-2.59v-1.68zM9.74 14.85V8.84l5.73 3-5.73 3.01z" /></svg>}
                  {social === "pinterest" && <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.08 3.15 9.42 7.6 11.17-.1-.94-.19-2.38.04-3.41.21-.93 1.36-5.77 1.36-5.77s-.35-.69-.35-1.72c0-1.61.93-2.81 2.1-2.81.99 0 1.47.74 1.47 1.63 0 .99-.63 2.48-.96 3.86-.27 1.15.58 2.09 1.71 2.09 2.06 0 3.64-2.17 3.64-5.3 0-2.77-1.99-4.7-4.83-4.7-3.29 0-5.22 2.47-5.22 5.02 0 .99.38 2.06.86 2.64.09.11.1.21.08.32-.09.36-.29 1.15-.33 1.31-.05.22-.18.26-.41.16-1.53-.71-2.49-2.95-2.49-4.75 0-3.87 2.81-7.42 8.11-7.42 4.26 0 7.57 3.03 7.57 7.1 0 4.23-2.67 7.63-6.37 7.63-1.24 0-2.41-.65-2.81-1.41l-.77 2.92c-.28 1.07-1.03 2.41-1.53 3.23 1.15.36 2.37.55 3.64.55 6.63 0 12-5.37 12-12C24 5.37 18.63 0 12 0z" /></svg>}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">&copy; {new Date().getFullYear()} Approved Expandable Homes. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-white/40 hover:text-white/60 text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/40 hover:text-white/60 text-xs transition-colors">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

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
        <CustomiseSection />
        <FAQSection />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
