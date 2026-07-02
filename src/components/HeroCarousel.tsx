"use client";

import { useState, useEffect, useCallback } from "react";

const slides = [
  {
    id: "iphone",
    bg: "linear-gradient(145deg, #1a1a26 0%, #0f0f18 100%)",
    image: "/banners/hero.png",
    imageStyle: { position: "absolute" as const, inset: 0, width: "100%", height: "100%", objectFit: "cover" as const, objectPosition: "center 20%", zIndex: 1 },
    overlay: "linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)",
    badge: "iPhone 17 Pro Max",
    title: "Техника из\nКореи, Японии\nи США",
    desc: "Оригинальные смартфоны и гаджеты на 30–40% ниже рыночной цены.",
    cta: "Открыть каталог",
    ctaSecondary: null,
    light: false,
  },
  {
    id: "tradein",
    bg: "linear-gradient(145deg, #1a0810 0%, #0f0508 100%)",
    image: "/banners/tradein.jpg",
    imageStyle: { position: "absolute" as const, inset: 0, width: "100%", height: "100%", objectFit: "cover" as const, objectPosition: "center 75%", zIndex: 1 },
    overlay: "linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 50%, transparent 100%)",
    badge: "Trade-In",
    title: "Сдай старое —\nполучи новое",
    desc: "Оценим ваше устройство онлайн. Стоимость зачтётся как скидка на покупку.",
    cta: "Оценить устройство",
    ctaSecondary: null,
    light: false,
  },
  {
    id: "bonus",
    bg: "linear-gradient(145deg, #0f0f18 0%, #1a1a26 100%)",
    image: "/banners/bonus.jpg",
    imageStyle: { position: "absolute" as const, inset: 0, width: "100%", height: "100%", objectFit: "cover" as const, zIndex: 1 },
    overlay: "linear-gradient(to right, rgba(10,5,20,0.92) 0%, rgba(10,5,20,0.6) 50%, transparent 100%)",
    badge: "Бонусная программа",
    title: "1% с каждой\nпокупки",
    desc: "Бонусы начисляются автоматически и списываются как рубли при следующей покупке.",
    cta: "Зарегистрироваться",
    ctaSecondary: null,
    light: false,
  },
  {
    id: "repair",
    bg: "linear-gradient(135deg, #1a0810 0%, #2e0f18 100%)",
    image: "/banners/repair.jpg",
    imageStyle: { position: "absolute" as const, inset: 0, width: "100%", height: "100%", objectFit: "cover" as const, objectPosition: "center 30%", zIndex: 1 },
    overlay: "linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 50%, transparent 100%)",
    badge: "Сервисный центр",
    title: "Ремонт\nтехники Apple\nи Samsung",
    desc: "Диагностика бесплатно. Оригинальные запчасти. Гарантия на работы 90 дней.",
    cta: "Записаться на ремонт",
    ctaSecondary: null,
    light: false,
  },
  {
    id: "gifts",
    bg: "linear-gradient(135deg, #0f1a10 0%, #162e12 100%)",
    image: "/banners/gifts.png",
    imageStyle: { position: "absolute" as const, inset: 0, width: "100%", height: "100%", objectFit: "cover" as const, objectPosition: "center", zIndex: 1 },
    overlay: "linear-gradient(to right, rgba(5,10,5,0.9) 0%, rgba(5,10,5,0.5) 50%, transparent 100%)",
    badge: "Акция",
    title: "Подарок\nпри каждой\nпокупке",
    desc: "При покупке техники от 30 000 ₽ — защитное стекло и чехол в подарок.",
    cta: "Смотреть акции",
    ctaSecondary: null,
    light: false,
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback((idx: number) => {
    if (animating || idx === current) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(idx);
      setAnimating(false);
    }, 300);
  }, [animating, current]);

  const prev = () => goTo((current - 1 + slides.length) % slides.length);
  const next = () => goTo((current + 1) % slides.length);

  useEffect(() => {
    const t = setInterval(() => {
      setCurrent(c => (c + 1) % slides.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  const s = slides[current];

  return (
    <div className="hero-carousel" style={{ position: "relative", height: 560, overflow: "hidden", background: s.bg, transition: "background 0.4s" }}>
      {/* Image */}
      {s.image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={s.image} alt={s.badge} style={{ ...s.imageStyle, opacity: animating ? 0 : 1, transition: "opacity 0.3s" }} />
      )}

      {/* Overlay */}
      {s.overlay && (
        <div style={{ position: "absolute", inset: 0, background: s.overlay, zIndex: 2 }} />
      )}

      {/* Content */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 3,
        display: "flex", flexDirection: "column", justifyContent: "center",
        padding: "0 clamp(20px, 6vw, 80px)",
        opacity: animating ? 0 : 1,
        transform: animating ? "translateY(8px)" : "translateY(0)",
        transition: "opacity 0.3s, transform 0.3s",
      }}>
        <div style={{ display: "inline-flex", marginBottom: 18 }}>
          <span style={{
            background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: 20, padding: "5px 16px", fontSize: 12,
            color: "rgba(255,255,255,0.7)", letterSpacing: "0.05em",
          }}>{s.badge}</span>
        </div>

        <h1 style={{
          fontSize: "clamp(28px, 8vw, 48px)", fontWeight: 600, lineHeight: 1.1,
          letterSpacing: "-0.02em", color: "#fff",
          marginBottom: 16, whiteSpace: "pre-line",
          textShadow: "0 2px 20px rgba(0,0,0,0.3)",
        }}>{s.title}</h1>

        <p style={{ fontSize: 15, color: "rgba(255,255,255,0.55)", lineHeight: 1.8, maxWidth: 440, marginBottom: 32 }}>
          {s.desc}
        </p>

        <div>
          <button style={{
            background: "#e8e8e8", color: "#0d0d0d",
            border: "none", padding: "14px 28px", borderRadius: 10,
            fontSize: 13, fontFamily: "inherit", fontWeight: 600, cursor: "pointer",
          }}>
            {s.cta}
          </button>
        </div>
      </div>

      {/* Arrows */}
      <button onClick={prev} style={{
        position: "absolute", left: 24, top: "50%", transform: "translateY(-50%)",
        zIndex: 10, width: 44, height: 44, borderRadius: "50%",
        background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)",
        color: "#fff", fontSize: 18, cursor: "pointer", display: "flex",
        alignItems: "center", justifyContent: "center",
      }}>‹</button>
      <button onClick={next} style={{
        position: "absolute", right: 24, top: "50%", transform: "translateY(-50%)",
        zIndex: 10, width: 44, height: 44, borderRadius: "50%",
        background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)",
        color: "#fff", fontSize: 18, cursor: "pointer", display: "flex",
        alignItems: "center", justifyContent: "center",
      }}>›</button>

      {/* Dots */}
      <div style={{
        position: "absolute", bottom: 24, left: "50%", transform: "translateX(-50%)",
        zIndex: 10, display: "flex", gap: 8,
      }}>
        {slides.map((_, i) => (
          <button key={i} onClick={() => goTo(i)} style={{
            width: i === current ? 24 : 8, height: 8, borderRadius: 4,
            background: i === current ? "#fff" : "rgba(255,255,255,0.3)",
            border: "none", cursor: "pointer", padding: 0,
            transition: "width 0.3s, background 0.3s",
          }} />
        ))}
      </div>
    </div>
  );
}


