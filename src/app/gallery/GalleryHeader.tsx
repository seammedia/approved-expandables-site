"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function GalleryHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMenu = () => setMobileOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-sm">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 flex items-center justify-between h-[72px]">
        <Link href="/" className="flex-shrink-0" aria-label="Approved Expandable Homes home">
          <Image
            src="/images/logo.png"
            alt="Approved Expandable Homes"
            width={160}
            height={70}
            className="h-14 w-auto"
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Main navigation">
          <Link href="/#designs" className="text-white hover:text-gold transition-colors text-[13.5px] font-medium whitespace-nowrap">Home Designs</Link>
          <Link href="/#how-it-works" className="text-white hover:text-gold transition-colors text-[13.5px] font-medium whitespace-nowrap">Building Guide</Link>
          <Link href="/#about" className="text-white hover:text-gold transition-colors text-[13.5px] font-medium">About Us</Link>
          <Link href="/gallery" aria-current="page" className="text-gold text-[13.5px] font-semibold">Gallery</Link>
          <Link href="/#faqs" className="text-white hover:text-gold transition-colors text-[13.5px] font-medium">FAQs</Link>
          <Link href="/#contact" className="inline-flex items-center justify-center bg-gold hover:bg-gold-soft text-navy px-[26px] py-3.5 rounded-[3px] text-[13px] font-semibold tracking-[0.08em] uppercase transition-colors">
            Get a Quote
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          className="lg:hidden text-white p-2"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          aria-controls="gallery-mobile-menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen ? (
        <div id="gallery-mobile-menu" className="lg:hidden bg-navy border-t border-white/10 px-5 pb-4">
          <Link href="/#designs" onClick={closeMenu} className="block py-3 text-white hover:text-gold text-sm">Home Designs</Link>
          <Link href="/#how-it-works" onClick={closeMenu} className="block py-3 text-white hover:text-gold text-sm">Building Guide</Link>
          <Link href="/#about" onClick={closeMenu} className="block py-3 text-white hover:text-gold text-sm">About Us</Link>
          <Link href="/gallery" onClick={closeMenu} aria-current="page" className="block py-3 text-gold text-sm font-semibold">Gallery</Link>
          <Link href="/#faqs" onClick={closeMenu} className="block py-3 text-white hover:text-gold text-sm">FAQs</Link>
          <Link href="/#contact" onClick={closeMenu} className="block mt-2 bg-gold text-navy px-6 py-3 rounded-[3px] text-[13px] font-semibold tracking-[0.08em] uppercase text-center">Get a Quote</Link>
        </div>
      ) : null}
    </header>
  );
}
