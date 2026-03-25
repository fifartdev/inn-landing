"use client";

import { useState, useEffect, useCallback } from "react";
import { useLang } from "@/contexts/LanguageContext";
import { ImageIcon, X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  { src: "/gallery/innacademy-1.jpeg", alt: "Season 1 - Photo 1" },
  { src: "/gallery/innacademy-2.jpeg", alt: "Season 1 - Photo 2" },
  { src: "/gallery/innacademy-4.jpeg", alt: "Season 2 - Photo 4" },
  { src: "/gallery/innacademy-5.jpeg", alt: "Season 3 - Photo 5" },
];

function Placeholder({ alt }: { alt: string }) {
  return (
    <div className="relative w-full h-full min-h-[180px] bg-slate-100 rounded-2xl flex flex-col items-center justify-center gap-2 border-2 border-dashed border-slate-200 group-hover:border-inn-teal/40 transition-colors">
      <ImageIcon className="w-7 h-7 text-slate-300 group-hover:text-inn-teal/40 transition-colors" />
      <span className="text-xs text-slate-300 text-center px-2">{alt}</span>
    </div>
  );
}

export default function GallerySection() {
  const { t } = useLang();
  const g = t.gallery;
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const realImages = galleryImages.filter((img) => img.src);

  const close = useCallback(() => setLightboxIndex(null), []);

  const prev = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i - 1 + realImages.length) % realImages.length));
  }, [realImages.length]);

  const next = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i + 1) % realImages.length));
  }, [realImages.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, close, prev, next]);

  return (
    <>
      <section id="gallery" className="py-20 lg:py-28 bg-inn-light-grey overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="px-4 py-1.5 bg-inn-teal/10 rounded-full text-inn-teal text-sm font-semibold">
              {g.tag}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-inn-dark mt-4 mb-3 leading-tight">
              {g.title}
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto leading-relaxed">
              {g.subtitle}
            </p>
          </div>

          {/* Gallery grid — 2 cols mobile, 3 tablet, 5 desktop */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {galleryImages.map((img, i) => {
              const realIdx = realImages.indexOf(img);
              return (
                <div
                  key={i}
                  className="group aspect-square overflow-hidden rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                >
                  {img.src ? (
                    <button
                      onClick={() => setLightboxIndex(realIdx)}
                      className="w-full h-full block focus:outline-none focus-visible:ring-2 focus-visible:ring-inn-teal"
                      aria-label={`Open ${img.alt}`}
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </button>
                  ) : (
                    <Placeholder alt={img.alt} />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={close}
        >
          {/* Close */}
          <button
            onClick={close}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-10"
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Prev */}
          {realImages.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 text-white/70 hover:text-white transition-colors z-10"
              aria-label="Previous"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
          )}

          {/* Image */}
          <div
            className="max-w-[90vw] max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={realImages[lightboxIndex].src}
              alt={realImages[lightboxIndex].alt}
              className="max-w-[90vw] max-h-[90vh] rounded-2xl object-contain shadow-2xl"
            />
            {/* Caption */}
            <p className="text-center text-white/60 text-sm mt-3">
              {lightboxIndex + 1} / {realImages.length}
            </p>
          </div>

          {/* Next */}
          {realImages.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 text-white/70 hover:text-white transition-colors z-10"
              aria-label="Next"
            >
              <ChevronRight className="w-10 h-10" />
            </button>
          )}
        </div>
      )}
    </>
  );
}
