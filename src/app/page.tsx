import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import CatalogSection from "@/components/CatalogSection";
import { ALL_PRODUCTS } from "@/lib/products";

export default function Home() {
  return (
    <>
      <Header />

      <main style={{ background: "var(--body-bg)" }}>

        {/* ── HERO CAROUSEL ── */}
        <HeroCarousel />


        {/* ── CATALOG ── */}
        <CatalogSection products={ALL_PRODUCTS} />

        {/* ── TRADE-IN ── */}
        <div className="trade-in-block page-section-first">
          {/* Photo + text overlay */}
          <div className="trade-in-photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/banners/tradein.jpg" alt="Trade-In iPhone" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 75%" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(10,3,8,0.75) 0%, rgba(10,3,8,0.3) 50%, transparent 100%)" }} />
            <div style={{ position: "absolute", inset: 0, padding: "0 44px", display: "flex", flexDirection: "column", justifyContent: "center", gap: 6 }}>
              <h2 style={{ fontSize: 22, fontWeight: 600, letterSpacing: "-0.02em", color: "#fff", margin: 0 }}>Сдай старое — получи новое</h2>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, margin: 0 }}>Оценим онлайн. Стоимость зачтётся как скидка.</p>
            </div>
          </div>
          {/* Button side */}
          <div className="trade-in-cta">
            <button style={{ background: "#e8e8e8", color: "#222222", border: "none", padding: "14px 24px", borderRadius: 10, fontSize: 13, fontFamily: "inherit", fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap", width: "100%" }}>
              Оценить устройство
            </button>
          </div>
        </div>

        {/* ── BONUS ── */}
        <div className="bonus-block page-section">
          {/* Image */}
          <div className="bonus-photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/banners/bonus.jpg" alt="Бонусная программа" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
          </div>
          {/* Content */}
          <div className="bonus-content">
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div style={{ width: 52, height: 52, background: "#e8e8e8", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, color: "#0a0a0a" }}>★</div>
            <div>
              <div style={{ fontSize: 15, fontWeight: 600, color: "#0d0d0d", marginBottom: 5 }}>Бонусная программа</div>
              <div style={{ fontSize: 13, color: "#999", lineHeight: 1.7 }}>1% от суммы покупки возвращается бонусами — списывайте как рубли</div>
            </div>
          </div>
          <button style={{ background: "#0d0d0d", color: "#e8e8e8", border: "none", padding: "13px 24px", borderRadius: 10, fontSize: 13, fontFamily: "inherit", cursor: "pointer", whiteSpace: "nowrap" }}>
            Зарегистрироваться
          </button>
          </div>
        </div>

        {/* ── FEATURES ── */}
        <div className="three-col page-section" style={{ gap: 1, background: "#9d9d9d", border: "1px solid #9d9d9d", borderRadius: 14, overflow: "hidden" }}>
          {[
            { title: "Гарантия до 12 месяцев", desc: "На всю технику. Официальная гарантия на каждое устройство." },
            { title: "Рассрочка до 36 месяцев", desc: "Без переплат и скрытых комиссий. Быстрое одобрение онлайн." },
            { title: "2–10 рабочих дней",        desc: "Доставка под заказ из Кореи, Японии и США." },
          ].map(({ title, desc }) => (
            <div key={title} style={{ background: "#e8e8e8", padding: 30 }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: "#0d0d0d", marginBottom: 8 }}>{title}</div>
              <div style={{ fontSize: 13, color: "#999", lineHeight: 1.7 }}>{desc}</div>
            </div>
          ))}
        </div>

        {/* ── О КОМПАНИИ ── */}
        <div className="two-col page-section" style={{ background: "#e8e8e8", border: "1px solid #9d9d9d", borderRadius: 14, overflow: "hidden", gap: 0 }}>
          <div style={{ padding: "48px 32px" }}>
            <div style={{ fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "#bbb", marginBottom: 12 }}>О компании</div>
            <h2 style={{ fontSize: 36, fontWeight: 600, letterSpacing: "-0.02em", color: "#0d0d0d", marginBottom: 20 }}>applebar</h2>
            <p style={{ fontSize: 14, color: "#666", lineHeight: 1.9, marginBottom: 28 }}>
              — магазины премиальной техники в Улан-Удэ и Иркутске. Работаем с 2019 года. Привозим оригинальную технику из Кореи, Японии и США без пробега по России — на 30–40% дешевле официальных цен.
            </p>
            <p style={{ fontSize: 14, color: "#666", lineHeight: 1.9, marginBottom: 32 }}>
              В каждом устройстве уверены лично. Гарантия до 12 месяцев, рассрочка до 36 месяцев.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#0d0d0d", marginBottom: 4 }}>Улан-Удэ</div>
                <div style={{ fontSize: 13, color: "#999" }}>КТК «Galaxy», 3 этаж, Балтахинова 15</div>
                <div style={{ fontSize: 13, color: "#999" }}>10:00 — 20:00, ежедневно · <a href="tel:+79243921311" style={{ color: "#0a0a0a", textDecoration: "none" }}>+7 (924) 392-13-11</a></div>
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#0d0d0d", marginBottom: 4 }}>Иркутск</div>
                <div style={{ fontSize: 13, color: "#999" }}>ул. Богдана Хмельницкого, 3</div>
                <div style={{ fontSize: 13, color: "#999" }}>10:00 — 20:00, ежедневно · <a href="tel:+79939391806" style={{ color: "#0a0a0a", textDecoration: "none" }}>+7 (993) 939-18-06</a></div>
              </div>
            </div>
          </div>
          <div style={{
            background: "linear-gradient(135deg, #222222 0%, #0d0d0d 100%)",
            padding: "56px 40px",
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16,
          }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo/logo-transparent.png" alt="applebar" style={{ height: 60, objectFit: "contain" }} />
            <div style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", textAlign: "center", lineHeight: 1.7 }}>
              Оригинальная техника<br />из Азии и США
            </div>
          </div>
        </div>

        {/* ── FOOTER ── */}
        <footer style={{ marginTop: 32, borderTop: "1px solid #9d9d9d", background: "#e8e8e8" }}>
          <div className="footer-inner" style={{ padding: "24px 48px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: 16, fontWeight: 600, color: "#0d0d0d" }}>applebar</span>
          <div className="footer-nav" style={{ display: "flex", gap: 20, fontSize: 13 }}>
            {["Доставка", "Гарантия", "Trade-In", "О магазине", "Контакты"].map(l => (
              <a key={l} href="#" style={{ color: "#bbb", textDecoration: "none" }}>{l}</a>
            ))}
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            {[{ label: "Telegram", href: "https://t.me/applebarIRK" }].map(({ label, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" title={label} style={{ width: 40, height: 40, border: "1px solid #9d9d9d", borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#aaa", textDecoration: "none" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.19 13.913l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.958.646z"/>
                </svg>
              </a>
            ))}
          </div>
          </div>
        </footer>

      </main>
    </>
  );
}


