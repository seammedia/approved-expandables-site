import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import GalleryHeader from "./GalleryHeader";

export const metadata: Metadata = {
  title: "Real Client Builds | Approved Expandable Homes Gallery",
  description:
    "See real Class 1a expandable home builds expanded in the factory before shipment and final on-site installation.",
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "Real Client Builds | Approved Expandable Homes",
    description:
      "See real Class 1a client builds expanded in the factory before shipment.",
    url: "/gallery",
    type: "website",
    images: ["/images/gallery/factory-client-build-deck-left.jpeg"],
  },
};

const galleryImages = [
  {
    src: "/images/gallery/factory-client-build-deck-left.jpeg",
    alt: "Timber-look Class 1a expandable home with deck expanded inside the factory before shipment",
    caption: "A real client build expanded inside the factory, showing the entry, deck and timber-look exterior.",
    className: "md:col-span-2",
    aspect: "aspect-[16/9]",
    sizes: "(max-width: 768px) 100vw, 80vw",
    position: "object-center",
  },
  {
    src: "/images/gallery/factory-client-build-deck-right.jpeg",
    alt: "Opposite front angle of a timber-look expandable home at the factory viewing stage",
    caption: "The opposite front angle shows the expanded footprint, deck and dark framing before dispatch.",
    className: "",
    aspect: "aspect-[4/3]",
    sizes: "(max-width: 768px) 100vw, 40vw",
    position: "object-center",
  },
  {
    src: "/images/gallery/factory-client-build-front-charcoal.jpeg",
    alt: "Charcoal expandable home expanded inside the factory before shipment",
    caption: "A charcoal client build opened to full width for the factory viewing stage.",
    className: "",
    aspect: "aspect-[4/3]",
    sizes: "(max-width: 768px) 100vw, 40vw",
    position: "object-center",
  },
  {
    src: "/images/gallery/factory-client-build-side-woodgrain.jpeg",
    alt: "Close exterior view of timber-look cladding and dark-framed windows on an expandable home",
    caption: "A closer look at the timber-look cladding, dark windows and expandable structure.",
    className: "",
    aspect: "aspect-square",
    sizes: "(max-width: 768px) 100vw, 40vw",
    position: "object-left",
  },
];

export default function GalleryPage() {
  return (
    <>
      <GalleryHeader />
      <main>
        <section className="bg-navy text-white pt-[132px] pb-16 md:pt-[154px] md:pb-20">
          <div className="max-w-[1060px] mx-auto px-5 md:px-10">
            <p className="text-gold text-[12px] font-bold tracking-[0.2em] uppercase mb-5">
              Real client builds
            </p>
            <h1 className="text-[clamp(42px,6vw,72px)] leading-[1.04] font-bold tracking-[-0.03em] max-w-[820px]">
              Expanded in the factory before shipment.
            </h1>
            <p className="mt-7 max-w-[760px] text-[16px] md:text-[18px] leading-[1.7] text-[#cfd2d6]">
              These are real Class 1a client builds shown at the factory viewing stage. The homes are expanded so clients can see the scale, cladding, windows and deck before dispatch. The pitched roof is not attached at this stage, so the final installed home will look different.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-bg" aria-labelledby="factory-gallery-heading">
          <div className="max-w-[1060px] mx-auto px-5 md:px-10">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10">
              <div>
                <h2 id="factory-gallery-heading" className="text-base font-bold tracking-[0.18em] uppercase text-ink mb-3">
                  Factory build gallery
                </h2>
                <p className="text-[14px] md:text-[15px] text-muted leading-relaxed max-w-[650px]">
                  Authentic factory-stage photography from client builds, with more projects to be added as they progress.
                </p>
              </div>
              <Link href="/#how-it-works" className="text-[12px] font-semibold tracking-[0.12em] uppercase text-gold hover:text-gold-2">
                See how it works &rarr;
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {galleryImages.map((image, index) => (
                <figure key={image.src} className={`bg-paper rounded-[6px] overflow-hidden border border-line shadow-[0_8px_30px_rgba(29,36,44,0.06)] ${image.className}`}>
                  <div className={`relative overflow-hidden bg-[#cdc7b9] ${image.aspect}`}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      loading={index === 0 ? "eager" : "lazy"}
                      sizes={image.sizes}
                      className={`object-cover ${image.position}`}
                    />
                  </div>
                  <figcaption className="px-5 py-4 text-[13.5px] leading-relaxed text-muted">
                    {image.caption}
                  </figcaption>
                </figure>
              ))}
              <aside className="bg-navy text-white rounded-[6px] p-7 md:p-9 min-h-[320px] flex flex-col justify-end">
                <p className="text-gold text-[11px] font-bold tracking-[0.18em] uppercase mb-4">What you are seeing</p>
                <h3 className="text-[25px] font-bold leading-tight mb-4">The factory viewing stage, not the final installed home.</h3>
                <p className="text-[14px] leading-relaxed text-[#cfd2d6]">
                  The home is opened to its full width before dispatch. Site preparation, delivery, installation and the pitched roof still form part of the project pathway.
                </p>
              </aside>
            </div>
          </div>
        </section>

        <section className="bg-paper border-t border-line py-16 md:py-20">
          <div className="max-w-[1060px] mx-auto px-5 md:px-10">
            <div className="bg-navy text-white rounded-[6px] p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div>
                <p className="text-gold text-[11px] font-bold tracking-[0.18em] uppercase mb-3">Start with your block</p>
                <h2 className="text-[28px] md:text-[36px] font-bold leading-tight">Could a Class 1a home suit your property?</h2>
                <p className="mt-3 text-[14px] text-[#cfd2d6] leading-relaxed max-w-[610px]">
                  Share the property address, intended use and preferred home size to begin a practical conversation about approval, access and site requirements.
                </p>
              </div>
              <Link href="/#contact" className="inline-flex flex-shrink-0 items-center justify-center bg-gold hover:bg-gold-soft text-navy px-7 py-4 rounded-[3px] text-[13px] font-semibold tracking-[0.08em] uppercase transition-colors">
                Request a Quote
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-navy text-white">
        <div className="max-w-[1060px] mx-auto px-5 md:px-10 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-7">
          <Link href="/" aria-label="Approved Expandable Homes home">
            <Image src="/images/logo.png" alt="Approved Expandable Homes" width={160} height={70} className="h-14 w-auto" />
          </Link>
          <div className="text-[13px] text-[#b4b9bf] leading-relaxed sm:text-right">
            <p>0415 228 171</p>
            <p>answers@approvedexpandables.com</p>
            <p className="mt-2">&copy; {new Date().getFullYear()} Approved Expandable Homes.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
