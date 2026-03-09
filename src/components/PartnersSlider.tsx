"use client";

import { useEffect, useCallback, useState, memo } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "motion/react";
import { PARTNER_LOGOS } from "@/lib/images";
import { ImageWithFallback } from "@/components/ImageWithFallback";

const partners = [
  { id: 1, name: "أرامكو السعودية", logo: PARTNER_LOGOS[0], color: "#00A651" },
  { id: 2, name: "مجموعة بن لادن", logo: PARTNER_LOGOS[28], color: "#B8860B" },
  { id: 3, name: "وزارة الطاقة", logo: PARTNER_LOGOS[27], color: "#00BFFF" },
  { id: 4, name: "النادي الأهلي", logo: PARTNER_LOGOS[5], color: "#009C5B" },
  { id: 5, name: "شركة الآفاق", logo: PARTNER_LOGOS[33], color: "#C0A030" },
  { id: 6, name: "جامعة كاساو", logo: PARTNER_LOGOS[35], color: "#5B9BD5" },
  { id: 7, name: "دلة", logo: PARTNER_LOGOS[6], color: "#E8C84A" },
  { id: 8, name: "شريك 1", logo: PARTNER_LOGOS[7], color: "#FF6B35" },
  { id: 9, name: "شريك 2", logo: PARTNER_LOGOS[8], color: "#7C3AED" },
  { id: 10, name: "شريك 3", logo: PARTNER_LOGOS[9], color: "#B8860B" },
  { id: 11, name: "شريك 4", logo: PARTNER_LOGOS[10], color: "#00A651" },
  { id: 12, name: "شريك 5", logo: PARTNER_LOGOS[11], color: "#D4A017" },
  { id: 13, name: "شريك 6", logo: PARTNER_LOGOS[12], color: "#00BFFF" },
  { id: 14, name: "شريك 7", logo: PARTNER_LOGOS[13], color: "#E8C84A" },
  { id: 15, name: "شريك 8", logo: PARTNER_LOGOS[14], color: "#FF6B35" },
  { id: 16, name: "شريك 9", logo: PARTNER_LOGOS[15], color: "#5B9BD5" },
];

const PartnerCard = memo(function PartnerCard({ partner }: { partner: (typeof partners)[0] }) {
  return (
    <div className="flex-shrink-0 select-none" style={{ width: "clamp(130px, 35vw, 200px)" }}>
      <div
        className="relative h-28 sm:h-32 rounded-2xl flex flex-col items-center justify-center gap-2 cursor-grab active:cursor-grabbing transition-all duration-300 hover:border-[rgba(184,134,11,0.35)]"
        style={{
          background: "rgba(20,16,6,0.7)",
          border: "1px solid rgba(184,134,11,0.1)",
        }}
      >
        <div className="w-16 h-16 rounded-xl overflow-hidden flex items-center justify-center p-1.5" style={{ background: "rgba(255,255,255,0.05)" }}>
          <ImageWithFallback
            src={partner.logo}
            alt={partner.name}
            className="w-full h-full object-contain"
            loading="lazy"
            width={64}
            height={64}
            quality={60}
          />
        </div>
        <div className="text-center px-3">
          <p style={{ color: "rgba(245,245,220,0.4)", fontSize: "0.7rem", fontWeight: 600, lineHeight: 1.3 }}>{partner.name}</p>
        </div>
      </div>
    </div>
  );
});

export function PartnersSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ direction: "rtl", loop: true, align: "center", dragFree: true, containScroll: "trimSnaps" });
  const [isDragging, setIsDragging] = useState(false);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const handleDown = () => setIsDragging(true);
    const handleUp = () => setIsDragging(false);

    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("pointerDown", handleDown);
    emblaApi.on("pointerUp", handleUp);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("pointerDown", handleDown);
      emblaApi.off("pointerUp", handleUp);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="py-16 px-4 overflow-hidden contain-paint">
      <div className="max-w-7xl mx-auto mb-10">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="text-center mb-14">
          <p className="text-[#B8860B] mb-3 text-center" style={{ fontSize: "0.75rem", letterSpacing: "0.35em" }}>✦ نثق بهم ويثقون بنا ✦</p>
          <h2 className="text-[#F5F5DC] text-center font-tajawal" style={{ fontSize: "clamp(1.6rem, 4.5vw, 2.4rem)", fontWeight: 800, lineHeight: 1.3 }}>شركاء النجاح</h2>
          <div className="mt-4 mb-1 rounded-full mx-auto" style={{ width: 90, height: 2, background: "linear-gradient(90deg, transparent, #B8860B 30%, #D4A017 60%, transparent)" }} />
          <p className="text-[#F5F5DC]/40 text-sm mt-4">اسحب يميناً أو يساراً لاستعراض شركائنا</p>
        </motion.div>
      </div>
      <div className="relative">
        <div className="absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#0f0f0f] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#0f0f0f] to-transparent z-10 pointer-events-none" />
        <div ref={emblaRef} className="overflow-hidden" style={{ cursor: isDragging ? "grabbing" : "grab" }}>
          <div className="flex gap-4 px-4">
            {[...partners, ...partners].map((partner, i) => (
              <PartnerCard key={`${partner.id}-${i}`} partner={partner} />
            ))}
          </div>
        </div>
        <div className="flex justify-center gap-4 mt-8 relative z-20">
          <button onClick={scrollPrev} className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300" style={{ background: canScrollPrev ? "rgba(184,134,11,0.12)" : "rgba(255,255,255,0.03)", border: "1px solid rgba(184,134,11,0.2)", color: canScrollPrev ? "#B8860B" : "rgba(245,245,220,0.2)" }} aria-label="السابق">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </button>
          <div className="flex items-center gap-2 px-4 rounded-full" style={{ background: "rgba(184,134,11,0.06)", border: "1px solid rgba(184,134,11,0.12)" }}>
            <span className="text-[#B8860B]/50 text-xs">اسحب للتصفح</span>
          </div>
          <button onClick={scrollNext} className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300" style={{ background: canScrollNext ? "rgba(184,134,11,0.12)" : "rgba(255,255,255,0.03)", border: "1px solid rgba(184,134,11,0.2)", color: canScrollNext ? "#B8860B" : "rgba(245,245,220,0.2)" }} aria-label="التالي">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
