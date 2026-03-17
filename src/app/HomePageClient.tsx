'use client';

import { useRef, lazy, Suspense } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import { HERO_IMG, HERO_MOBILE_IMG } from "@/lib/images";

const PartnersMarquee = lazy(() =>
  import("@/components/PartnersMarquee").then((m) => ({ default: m.PartnersMarquee }))
);

const WA = "966508252134";

/* ─── Why-Us Cards ─── */
const whyCards = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
    title: "خبرة متميزة",
    desc: "أكثر من ٨ سنوات في تقديم خدمات الضيافة الفاخرة للمناسبات الكبرى والمحافل الرسمية",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    title: "فريق احترافي",
    desc: "كوادر مدربة على أعلى معايير الضيافة الدولية والأصالة العربية",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    title: "تقديمات فاخرة",
    desc: "أرقى المشروبات والتقديمات من قهوة سعودية وشاي وحلويات فاخرة",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    title: "تغطية المملكة",
    desc: "نصل إلى جميع مناطق المملكة بأسطول من المعدات الفاخرة",
  },
];

/* ─── Vision Items ─── */
const currentState = ["معرض صور تقليدي", "تشتت التصفح", "غياب نظام الحجز"];
const futureState = ["منصة تفاعلية تعكس الفخامة", "بيع التجربة المتكاملة", "نظام حجز ذكي"];

/* ─── Color Palette Items ─── */
const colorPalette = [
  { color: "#C5A059", label: "ذهبي مطفي", usage: "للعناوين", hex: "#C5A059" },
  { color: "#1A1A1A", label: "أسود فحمي", usage: "للخلفيات", hex: "#1A1A1A" },
  { color: "#F5F5F5", label: "أبيض كريمي", usage: "للنصوص", hex: "#F5F5F5" },
];

/* ─── Golden Smoke Particles ─── */
function GoldenSmoke() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[2]">
      {/* Smoke Layer 1 */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[500px]"
        style={{
          background: "radial-gradient(ellipse at 50% 80%, rgba(197,160,89,0.25) 0%, rgba(197,160,89,0.08) 40%, transparent 70%)",
          animation: "smokeRise1 12s ease-in-out infinite",
        }}
      />
      {/* Smoke Layer 2 */}
      <div
        className="absolute bottom-0 left-[40%] w-[400px] h-[400px]"
        style={{
          background: "radial-gradient(ellipse at 50% 90%, rgba(197,160,89,0.2) 0%, rgba(197,160,89,0.05) 50%, transparent 75%)",
          animation: "smokeRise2 16s ease-in-out infinite",
          animationDelay: "2s",
        }}
      />
      {/* Smoke Layer 3 */}
      <div
        className="absolute bottom-0 right-[35%] w-[350px] h-[450px]"
        style={{
          background: "radial-gradient(ellipse at 50% 85%, rgba(197,160,89,0.18) 0%, rgba(197,160,89,0.04) 45%, transparent 70%)",
          animation: "smokeRise3 14s ease-in-out infinite",
          animationDelay: "4s",
        }}
      />
      {/* Warm glow at bottom */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px]"
        style={{
          background: "radial-gradient(ellipse at 50% 100%, rgba(197,160,89,0.3) 0%, rgba(197,160,89,0.1) 40%, transparent 70%)",
          filter: "blur(30px)",
        }}
      />
      {/* Floating golden particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            left: `${20 + i * 8}%`,
            bottom: `${10 + (i % 3) * 15}%`,
            background: "radial-gradient(circle, #C5A059 0%, rgba(197,160,89,0.3) 100%)",
            boxShadow: "0 0 6px rgba(197,160,89,0.6)",
          }}
          animate={{
            y: [0, -80 - i * 20, -160],
            opacity: [0, 0.8, 0],
            scale: [0.5, 1.2, 0.3],
          }}
          transition={{
            duration: 5 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.7,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}

/* ─── Section Header ─── */
function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7 }}
      className="mb-16 text-center"
    >
      <h2
        className="font-amiri mb-4"
        style={{
          fontSize: "clamp(1.8rem, 4.5vw, 2.8rem)",
          fontWeight: 700,
          color: "#C5A059",
          lineHeight: 1.4,
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-[#F5F5F5]/70 max-w-2xl mx-auto" style={{ fontSize: "1rem", lineHeight: 1.8 }}>
          {subtitle}
        </p>
      )}
      <div
        className="mt-5 mx-auto rounded-full"
        style={{
          width: 90,
          height: 2,
          background: "linear-gradient(90deg, transparent, #C5A059 30%, #D4AF60 60%, transparent)",
        }}
      />
    </motion.div>
  );
}

/* ─── Checkmark SVG ─── */
function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-[#C5A059] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

/* ─── Bullet SVG ─── */
function BulletIcon() {
  return (
    <svg className="w-4 h-4 text-gray-400 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export function HomePageClient() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <div>
      {/* Keyframes for smoke animations */}
      <style>{`
        @keyframes smokeRise1 {
          0% { transform: translateX(-50%) translateY(0%) scale(1); opacity: 0.3; }
          50% { transform: translateX(-50%) translateY(-30%) scale(1.3); opacity: 0.6; }
          100% { transform: translateX(-50%) translateY(-60%) scale(1.6); opacity: 0; }
        }
        @keyframes smokeRise2 {
          0% { transform: translateY(0%) scale(0.8); opacity: 0.2; }
          40% { transform: translateY(-25%) scale(1.1); opacity: 0.5; }
          100% { transform: translateY(-55%) scale(1.4); opacity: 0; }
        }
        @keyframes smokeRise3 {
          0% { transform: translateY(0%) scale(0.9); opacity: 0.25; }
          60% { transform: translateY(-35%) scale(1.2); opacity: 0.45; }
          100% { transform: translateY(-65%) scale(1.5); opacity: 0; }
        }
        @keyframes shimmerGold {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 20px rgba(197,160,89,0.2), 0 0 60px rgba(197,160,89,0.1); }
          50% { box-shadow: 0 0 30px rgba(197,160,89,0.4), 0 0 80px rgba(197,160,89,0.2); }
        }
      `}</style>

      {/* ═══ HERO SECTION ═══ */}
      <section
        ref={heroRef}
        className="relative h-screen min-h-[650px] max-h-[1000px] overflow-hidden"
        aria-label="الشاشة الرئيسية"
      >
        {/* Background Image with Parallax */}
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <ImageWithFallback
            src={HERO_MOBILE_IMG}
            alt="كيف الضيافة - خدمات الضيافة الفاخرة"
            className="block md:hidden w-full h-[110%] object-cover object-center"
            priority={true}
            quality={90}
            sizes="100vw"
          />
          <ImageWithFallback
            src={HERO_IMG}
            alt="كيف الضيافة - خدمات الضيافة الفاخرة"
            className="hidden md:block w-full h-[110%] object-cover object-center"
            priority={true}
            quality={90}
            sizes="100vw"
          />
        </motion.div>

        {/* Heavy Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/80 via-[#1A1A1A]/60 to-[#1A1A1A]" />
        <div className="absolute inset-0 bg-[#1A1A1A]/50" />

        {/* Golden Smoke Effect */}
        <GoldenSmoke />

        {/* Hero Content */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 z-10"
          style={{ opacity: heroOpacity }}
        >
          {/* Glass-morphism Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-3xl px-8 sm:px-12 py-10 sm:py-16 rounded-3xl"
            style={{
              background: "linear-gradient(135deg, rgba(197,160,89,0.08) 0%, rgba(26,26,26,0.6) 50%, rgba(197,160,89,0.05) 100%)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              border: "1px solid rgba(197,160,89,0.25)",
              boxShadow: "0 8px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05), 0 0 80px rgba(197,160,89,0.08)",
              animation: "pulseGlow 4s ease-in-out infinite",
            }}
          >
            {/* Decorative top line */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] rounded-full"
              style={{
                width: "60%",
                background: "linear-gradient(90deg, transparent, #C5A059, transparent)",
              }}
            />

            {/* SINCE 2016 */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex items-center justify-center gap-3 mb-8"
            >
              <div className="h-px w-10 bg-gradient-to-l from-[#C5A059] to-transparent" />
              <span className="text-[#C5A059] font-medium" style={{ fontSize: "0.7rem", letterSpacing: "0.35em" }}>
                SINCE 2016
              </span>
              <div className="h-px w-10 bg-gradient-to-r from-[#C5A059] to-transparent" />
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="font-amiri mb-6"
              style={{
                fontSize: "clamp(1.8rem, 6vw, 3.5rem)",
                fontWeight: 700,
                lineHeight: 1.3,
                background: "linear-gradient(135deg, #D4AF60 0%, #C5A059 30%, #B8944D 50%, #C5A059 70%, #D4AF60 100%)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "shimmerGold 4s linear infinite",
                filter: "drop-shadow(0 2px 15px rgba(197,160,89,0.3))",
              }}
            >
              كيف الضيافة: حقبة جديدة من الفخامة الرقمية
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-[#F5F5F5]/80 mb-4"
              style={{ fontSize: "clamp(0.95rem, 2vw, 1.2rem)", lineHeight: 1.8 }}
            >
              استراتيجية التحول الرقمي وإعادة بناء العلامة التجارية
            </motion.p>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mb-6 mx-auto"
              style={{
                width: 100,
                height: 2,
                background: "linear-gradient(90deg, transparent, #C5A059, #D4AF60, #C5A059, transparent)",
                boxShadow: "0 0 12px rgba(197,160,89,0.5)",
              }}
            />

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-[#C5A059] font-amiri"
              style={{ fontSize: "clamp(1rem, 2.5vw, 1.4rem)", letterSpacing: "0.05em" }}
            >
              ضيافة تليق بمقام ضيوفك
            </motion.p>

            {/* Decorative bottom line */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] rounded-full"
              style={{
                width: "40%",
                background: "linear-gradient(90deg, transparent, #C5A059, transparent)",
              }}
            />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2 }}
            className="flex gap-4 flex-wrap justify-center mt-10"
          >
            <Link
              href="/services"
              className="px-8 py-3.5 rounded-full text-[#1A1A1A] font-bold transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "linear-gradient(135deg, #D4AF60, #C5A059, #B8944D)",
                fontSize: "0.95rem",
                boxShadow: "0 8px 30px rgba(197,160,89,0.4)",
              }}
            >
              اكتشف خدماتنا
            </Link>
            <a
              href={`https://wa.me/${WA}?text=${encodeURIComponent("مرحباً، أود الاستفسار عن خدمات الضيافة لديكم.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full transition-all duration-300 hover:bg-white/10"
              style={{
                border: "1.5px solid rgba(197,160,89,0.5)",
                color: "#C5A059",
                fontWeight: 600,
                fontSize: "0.95rem",
                backdropFilter: "blur(10px)",
              }}
            >
              تواصل معنا
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="flex flex-col items-center gap-2" style={{ opacity: 0.5 }}>
            <span className="text-[#C5A059] text-xs" style={{ letterSpacing: "0.2em" }}>اكتشف</span>
            <div className="w-5 h-8 rounded-full border border-[#C5A059]/40 flex items-start justify-center pt-1.5">
              <motion.div
                className="w-1 h-2 rounded-full bg-[#C5A059]"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* ═══ PARTNERS SLIDER ═══ */}
      <section className="relative py-16 sm:py-20 bg-[#1A1A1A]">
        <div className="container mx-auto px-4">
          <Suspense fallback={<div className="h-32 bg-[#222] rounded-lg animate-pulse" />}>
            <PartnersMarquee />
          </Suspense>
        </div>
      </section>

      {/* ═══ VISION SECTION ═══ */}
      <section className="relative py-20 sm:py-28 bg-[#1A1A1A] overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10" style={{ background: "radial-gradient(circle, #C5A059 0%, transparent 70%)" }} />

        <div className="container mx-auto px-4 relative z-10">
          <SectionHeader title="الرؤية: من تقديم الخدمة إلى صناعة التجربة" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {/* Current State Card - Silver/Gray */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative p-8 sm:p-10 rounded-2xl overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(120,120,120,0.1) 0%, rgba(80,80,80,0.08) 100%)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(150,150,150,0.2)",
                boxShadow: "0 4px 30px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)",
              }}
            >
              {/* Silver shine effect */}
              <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background: "linear-gradient(90deg, transparent, rgba(200,200,200,0.3), transparent)" }} />
              <h3 className="text-2xl font-bold text-gray-300 mb-6 font-tajawal text-center">الوضع الراهن</h3>
              <div className="space-y-4">
                {currentState.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-right">
                    <BulletIcon />
                    <span className="text-[#F5F5F5]/70" style={{ fontSize: "1.05rem", lineHeight: 1.7 }}>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Future State Card - Gold */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative p-8 sm:p-10 rounded-2xl overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(197,160,89,0.12) 0%, rgba(197,160,89,0.05) 100%)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(197,160,89,0.3)",
                boxShadow: "0 4px 30px rgba(197,160,89,0.1), inset 0 1px 0 rgba(255,255,255,0.05)",
              }}
            >
              {/* Gold shine effect */}
              <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background: "linear-gradient(90deg, transparent, rgba(197,160,89,0.5), transparent)" }} />
              <h3 className="text-2xl font-bold text-[#C5A059] mb-6 font-tajawal text-center">المستقبل</h3>
              <div className="space-y-4">
                {futureState.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-right">
                    <CheckIcon />
                    <span className="text-[#F5F5F5]/90" style={{ fontSize: "1.05rem", lineHeight: 1.7 }}>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Golden Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative max-w-4xl mx-auto p-8 sm:p-10 rounded-2xl text-center overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(197,160,89,0.15) 0%, rgba(197,160,89,0.08) 50%, rgba(197,160,89,0.15) 100%)",
              border: "1px solid rgba(197,160,89,0.3)",
              boxShadow: "0 0 60px rgba(197,160,89,0.1), inset 0 0 30px rgba(197,160,89,0.05)",
            }}
          >
            {/* Glow lines */}
            <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: "linear-gradient(90deg, transparent, #C5A059, transparent)" }} />
            <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: "linear-gradient(90deg, transparent, #C5A059, transparent)" }} />

            <p className="font-amiri text-[#C5A059] mb-4" style={{ fontSize: "clamp(1.4rem, 3.5vw, 2rem)", fontWeight: 700, lineHeight: 1.5 }}>
              الضيافة ليست مجرد قهوة، بل هي وجه أبيض.
            </p>
            <p className="text-[#F5F5F5]/70 max-w-2xl mx-auto" style={{ fontSize: "0.95rem", lineHeight: 1.8 }}>
              التحول إلى شركة إدارة تجارب الضيافة المتكاملة التي تمنح العميل الثقة والراحة النفسية.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ VISUAL IDENTITY SECTION ═══ */}
      <section className="relative py-20 sm:py-28 bg-[#141414] overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeader title="الهوية البصرية: فخامة ملكية بلمسة عصرية" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {/* Color Palette Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.03)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(197,160,89,0.15)",
              }}
            >
              <h3 className="text-lg font-bold text-[#F5F5F5]/60 mb-8 text-center" style={{ letterSpacing: "0.15em" }}>Color Palette</h3>
              <div className="space-y-6">
                {colorPalette.map((c, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div
                      className="w-16 h-16 rounded-full flex-shrink-0"
                      style={{
                        background: c.color,
                        boxShadow: `0 4px 20px ${c.color}40, inset 0 -2px 4px rgba(0,0,0,0.3), inset 0 2px 4px rgba(255,255,255,0.1)`,
                        border: c.color === "#1A1A1A" ? "1px solid rgba(255,255,255,0.15)" : "none",
                      }}
                    />
                    <div>
                      <p className="text-[#F5F5F5] text-sm font-medium">{c.label} - {c.usage}</p>
                      <p className="text-[#C5A059] text-xs mt-1" style={{ fontFamily: "monospace" }}>{c.hex}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Typography Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-8 rounded-2xl flex flex-col items-center justify-center"
              style={{
                background: "rgba(255,255,255,0.03)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(197,160,89,0.15)",
              }}
            >
              <h3 className="text-lg font-bold text-[#F5F5F5]/60 mb-8 text-center" style={{ letterSpacing: "0.15em" }}>Typography</h3>
              <p className="text-[#F5F5F5] text-sm mb-6">IBM Plex Sans Arabic</p>
              <p className="font-amiri text-[#F5F5F5] mb-6" style={{ fontSize: "4rem", lineHeight: 1 }}>
                أ ب ت
              </p>
              <p className="text-[#F5F5F5]/50 text-sm text-center">خطوط كوفية حديثة تعكس الأصالة.</p>
            </motion.div>

            {/* Texture & Mood Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 rounded-2xl flex flex-col items-center justify-center"
              style={{
                background: "rgba(255,255,255,0.03)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(197,160,89,0.15)",
              }}
            >
              <h3 className="text-lg font-bold text-[#F5F5F5]/60 mb-8 text-center" style={{ letterSpacing: "0.15em" }}>Texture & Mood</h3>
              <div className="w-full h-32 rounded-xl mb-6 overflow-hidden" style={{ background: "linear-gradient(135deg, #1A1A1A 0%, #2a2520 50%, #1A1A1A 100%)", border: "1px solid rgba(197,160,89,0.1)" }}>
                <div className="w-full h-full" style={{ background: "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(197,160,89,0.05) 10px, rgba(197,160,89,0.05) 11px)" }} />
              </div>
              <p className="text-[#F5F5F5]/50 text-sm text-center">نسيج داكن بخيوط ذهبية</p>
            </motion.div>
          </div>

          {/* Design Philosophy Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-[#C5A059]/40 text-4xl mb-4 font-amiri">&ldquo;</p>
            <p className="text-[#F5F5F5]/80 italic mb-2" style={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
              فلسفة التصميم: دمج فخامة Rolex في عرض التفاصيل، مع انسيابية Apple في تجربة المستخدم.
            </p>
            <p className="text-[#C5A059]/40 text-4xl font-amiri">&rdquo;</p>
          </motion.div>
        </div>
      </section>

      {/* ═══ WHY US SECTION ═══ */}
      <section className="relative py-20 sm:py-28 bg-[#1A1A1A]">
        <div className="container mx-auto px-4">
          <SectionHeader title="لماذا تختار كيف الضيافة؟" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {whyCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative p-7 sm:p-8 rounded-2xl overflow-hidden"
                style={{
                  background: "rgba(197,160,89,0.04)",
                  border: "1px solid rgba(197,160,89,0.15)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#C5A059]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="mb-5 text-[#C5A059] group-hover:scale-110 transition-transform duration-300">
                    {card.icon}
                  </div>
                  <h3 className="text-[#F5F5F5] font-tajawal mb-3" style={{ fontSize: "1.15rem", fontWeight: 700 }}>
                    {card.title}
                  </h3>
                  <p className="text-[#F5F5F5]/60" style={{ fontSize: "0.9rem", lineHeight: 1.7 }}>
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA SECTION ═══ */}
      <section className="relative py-20 sm:py-28 bg-[#1A1A1A] overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#C5A059]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-amiri mb-6"
            style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)", fontWeight: 700, color: "#C5A059" }}
          >
            هل أنت مستعد لتجربة الفخامة الحقيقية؟
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#F5F5F5]/60 max-w-2xl mx-auto mb-10"
            style={{ fontSize: "1rem", lineHeight: 1.8 }}
          >
            دع فريقنا المتخصص يحول مناسبتك إلى حدث لا يُنسى بخدمات ضيافة فاخرة وراقية
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-4 flex-wrap justify-center"
          >
            <a
              href={`https://wa.me/${WA}?text=${encodeURIComponent("مرحباً، أود الاستفسار عن خدمات الضيافة لديكم.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full text-[#1A1A1A] transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "linear-gradient(135deg, #D4AF60, #C5A059)",
                fontWeight: 800,
                fontSize: "0.95rem",
                boxShadow: "0 8px 30px rgba(197,160,89,0.4)",
              }}
            >
              تواصل معنا الآن
            </a>
            <Link
              href="/portfolio"
              className="px-8 py-4 rounded-full transition-all duration-300 hover:bg-white/10"
              style={{
                border: "1.5px solid rgba(197,160,89,0.5)",
                color: "#C5A059",
                fontWeight: 600,
                fontSize: "0.95rem",
                backdropFilter: "blur(10px)",
              }}
            >
              شاهد أعمالنا
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
