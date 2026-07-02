"use client";

import { useState } from "react";

const cities = {
  uu:  { label: "Улан-Удэ", addr: "ул. Балтахинова 15, КТК GALAXY, 3 эт.", phone: "+7 (924) 392-13-11", phoneRaw: "+79243921311", gis: "https://2gis.ru/ulanude/firm/70000001102691711" },
  irk: { label: "Иркутск",  addr: "ул. Богдана Хмельницкого, 3",          phone: "+7 (993) 939-18-06", phoneRaw: "+79939391806", gis: "https://2gis.ru/irkutsk/firm/70000001075232991" },
} as const;

type CityKey = keyof typeof cities;

type MegaColumn = { title: string; items: string[] };

const MEGA: Record<string, MegaColumn[]> = {
  Apple: [
    { title: "iPhone",       items: ["iPhone 17 Pro Max", "iPhone 17 Pro", "iPhone 17", "iPhone 17e"] },
    { title: "Apple Watch",  items: ["Apple Watch Ultra 2", "Apple Watch Series 10", "Apple Watch SE"] },
    { title: "Mac",          items: ["MacBook Pro 16", "MacBook Pro 14", "MacBook Air 15", "Mac mini"] },
    { title: "AirPods",      items: ["AirPods Pro 2", "AirPods 4", "AirPods Max"] },
  ],
  Samsung: [
    { title: "Смартфоны",   items: ["Galaxy S25 Ultra", "Galaxy S25+", "Galaxy S25", "Galaxy Z Fold 7"] },
    { title: "Планшеты",    items: ["Galaxy Tab S10 Ultra", "Galaxy Tab S10+", "Galaxy Tab S9 FE"] },
    { title: "Аксессуары",  items: ["Buds3 Pro", "Galaxy Ring", "Зарядные устройства"] },
  ],
  Dyson: [
    { title: "Стайлеры",    items: ["Dyson Airwrap HS05", "Dyson Airwrap HS01"] },
    { title: "Фены",        items: ["Dyson Supersonic HD08", "Dyson Supersonic HD15"] },
    { title: "Пылесосы",    items: ["Dyson V15 Detect", "Dyson V12 Detect Slim"] },
    { title: "Очистители",  items: ["Dyson Pure Cool TP09", "Dyson Hot+Cool HP09"] },
  ],
  "Гаджеты": [
    { title: "Наушники",    items: ["Наушники Beats", "Наушники Bose", "Наушники Sony"] },
    { title: "Колонки",     items: ["JBL", "Яндекс Станция"] },
    { title: "Очки VR",     items: ["Apple Vision Pro", "Meta Quest 3"] },
    { title: "Экшн-камеры", items: ["GoPro", "DJI Action"] },
  ],
  "Re:Set": [
    { title: "iPhone б/у",   items: ["iPhone 15 Pro Max", "iPhone 15 Pro", "iPhone 15", "iPhone 14 Pro"] },
    { title: "Samsung б/у",  items: ["Galaxy S24 Ultra", "Galaxy S24+", "Galaxy S24", "Galaxy Z Fold 6"] },
    { title: "Mac б/у",      items: ["MacBook Pro M3", "MacBook Air M2", "Mac mini M2"] },
    { title: "Apple Watch б/у", items: ["Apple Watch Series 9", "Apple Watch Ultra"] },
  ],
};

export default function Header() {
  const [city, setCity] = useState<CityKey>("uu");
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const cur = cities[city];

  return (
    <header style={{ position: "relative", zIndex: 100 }}>

      {/* ── TOP BAR ── */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr auto 1fr",
        alignItems: "center",
        padding: "0 48px",
        height: 48,
        background: "#2e0f18",
      }}>

        {/* City switcher */}
        <div style={{ position: "relative" }}>
          <button
            onClick={() => setOpen(v => !v)}
            style={{
              display: "flex", alignItems: "center", gap: 7,
              fontSize: 13, color: "rgba(255,255,255,0.35)",
              background: "none", border: "none", cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            <span style={{ color: "rgba(255,255,255,0.75)", fontWeight: 600, borderBottom: "1px dashed rgba(255,255,255,0.3)" }}>
              {cur.label}
            </span>
            <span style={{
              fontSize: 11, color: "rgba(255,255,255,0.3)",
              transform: open ? "rotate(180deg)" : "none",
              transition: "transform .2s", display: "inline-block",
            }}>▾</span>
          </button>

          {open && (
            <div style={{
              position: "absolute", top: "calc(100% + 8px)", left: 0,
              background: "#16161e", border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 12, padding: 8, minWidth: 220,
              zIndex: 200, boxShadow: "0 16px 40px rgba(0,0,0,0.5)",
            }}>
              {(Object.entries(cities) as [CityKey, typeof cities[CityKey]][]).map(([key, c]) => (
                <button
                  key={key}
                  onClick={() => { setCity(key); setOpen(false); }}
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    width: "100%", padding: "11px 14px", borderRadius: 8,
                    background: city === key ? "rgba(255,255,255,0.1)" : "transparent",
                    border: "none", cursor: "pointer", fontFamily: "inherit",
                    color: city === key ? "#fff" : "rgba(255,255,255,0.5)",
                    fontWeight: city === key ? 600 : 400,
                    fontSize: 13, textAlign: "left",
                  }}
                >
                  <div>
                    <div>{c.label}</div>
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,0.25)", marginTop: 3 }}>{c.addr}</div>
                  </div>
                  {city === key && <span style={{ fontSize: 14 }}>✓</span>}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Service links */}
        <nav style={{ display: "flex", alignItems: "center" }}>
          {["Доставка", "Гарантия", "Trade-In", "Рассрочка", "О нас"].map((label) => (
            <a key={label} href="#" style={{
              fontSize: 12, color: "rgba(255,255,255,0.4)", cursor: "pointer",
              padding: "0 16px", height: 48, display: "flex", alignItems: "center",
              textDecoration: "none",
              whiteSpace: "nowrap", transition: "color .15s",
            }}>
              {label}
            </a>
          ))}
        </nav>

        {/* Phone + address */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 24 }}>
          <a href={cur.gis} target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, color: "rgba(255,255,255,0.65)", fontWeight: 600, whiteSpace: "nowrap", textDecoration: "none", borderBottom: "1px dashed rgba(255,255,255,0.25)" }}>
            {cur.addr}
          </a>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 3 }}>
            <a href={`tel:${cur.phoneRaw}`} style={{ fontSize: 13, color: "rgba(255,255,255,0.8)", fontWeight: 600, whiteSpace: "nowrap", textDecoration: "none" }}>
              {cur.phone}
            </a>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", whiteSpace: "nowrap" }}>
              10:00 — 20:00, ежедневно
            </div>
          </div>
        </div>
      </div>

      {/* ── MAIN NAV ── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
          padding: "0 48px",
          height: 80,
          background: "#3d1420",
          position: "relative",
          zIndex: 101,
        }}
        onMouseLeave={() => setActiveMenu(null)}
      >

        {/* Logo */}
        <a href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo/logo-transparent.png" alt="bapplebar" style={{ height: 44, objectFit: "contain" }} />
        </a>

        {/* Categories */}
        <nav style={{ display: "flex", alignItems: "center" }}>
          {(["Apple", "Samsung", "Dyson", "Гаджеты", "Re:Set"] as const).map((cat) => (
            <div
              key={cat}
              onMouseEnter={() => setActiveMenu(cat)}
              style={{ position: "relative" }}
            >
              <a href="#" style={{
                fontSize: 13,
                color: activeMenu === cat ? "#fff" : "rgba(255,255,255,0.55)",
                padding: "0 20px", height: 80, display: "flex", alignItems: "center",
                textDecoration: "none", whiteSpace: "nowrap", transition: "color .15s",
                borderBottom: activeMenu === cat ? "2px solid rgba(255,255,255,0.4)" : "2px solid transparent",
              }}>
                {cat}
              </a>
            </div>
          ))}
        </nav>

        {/* Icons + login */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 4 }}>
          {[
            {
              label: "Поиск",
              svg: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
              ),
            },
            {
              label: "Избранное",
              svg: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              ),
            },
            {
              label: "Корзина",
              svg: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
                </svg>
              ),
            },
          ].map(({ label, svg }) => (
            <button key={label} title={label} style={{
              width: 44, height: 44,
              border: "none",
              borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", color: "rgba(255,255,255,0.55)",
              background: "transparent", fontFamily: "inherit",
              transition: "color .15s, background .15s",
            }}>
              {svg}
            </button>
          ))}
          <button style={{
            border: "none",
            color: "rgba(255,255,255,0.75)",
            background: "transparent",
            fontSize: 12, fontFamily: "inherit", fontWeight: 400,
            padding: "8px 18px", borderRadius: 7, cursor: "pointer",
          }}>
            Войти
          </button>
        </div>
      </div>

      {/* ── MEGAMENU ── */}
      {activeMenu && MEGA[activeMenu] && (
        <div
          onMouseEnter={() => setActiveMenu(activeMenu)}
          onMouseLeave={() => setActiveMenu(null)}
          style={{
            position: "absolute",
            top: 128,
            left: 0, right: 0,
            background: "#1a0810",
            borderTop: "1px solid rgba(255,255,255,0.07)",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
            zIndex: 100,
            padding: "32px 48px 36px",
          }}
        >
          <div style={{ display: "flex", gap: 48 }}>
            {MEGA[activeMenu].map((col) => (
              <div key={col.title} style={{ minWidth: 160 }}>
                <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 14 }}>
                  {col.title}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {col.items.map((item) => (
                    <a key={item} href="#" style={{
                      fontSize: 13, color: "rgba(255,255,255,0.65)",
                      textDecoration: "none", transition: "color .15s",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.65)")}
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </header>
  );
}
