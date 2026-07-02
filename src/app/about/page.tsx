import Header from "@/components/Header";

const stores = [
  {
    city: "Улан-Удэ",
    address: "КТК «Galaxy», 3 этаж, Балтахинова 15",
    hours: "10:00 — 20:00, ежедневно",
    phone: "+7 (924) 392-13-11",
    phoneRaw: "+79243921311",
    tg: "https://t.me/applebarUU",
  },
  {
    city: "Иркутск",
    address: "ул. Богдана Хмельницкого, 3",
    hours: "10:00 — 20:00, ежедневно",
    phone: "+7 (993) 939-18-06",
    phoneRaw: "+79939391806",
    tg: "https://t.me/applebarIRK",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main style={{ background: "var(--body-bg)", minHeight: "100vh", padding: "0 48px 64px" }}>
        <div style={{ paddingTop: 40, marginBottom: 48 }}>
          <div style={{ fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9d9d9d", marginBottom: 8 }}>applebar</div>
          <h1 style={{ fontSize: 40, fontWeight: 600, letterSpacing: "-0.02em", color: "#0d0d0d", margin: 0 }}>О компании</h1>
        </div>

        {/* About text */}
        <div style={{ display: "flex", alignItems: "stretch", borderRadius: 14, border: "1px solid #9d9d9d", marginBottom: 24, overflow: "hidden" }}>
          <div style={{ flex: 1, padding: "48px 40px", background: "#e8e8e8" }}>
            <p style={{ fontSize: 15, color: "#5d5d5f", lineHeight: 1.9, marginBottom: 20, marginTop: 0 }}>
              <strong style={{ color: "#0d0d0d" }}>applebar</strong> — магазины премиальной техники в Улан-Удэ и Иркутске. Работаем с 2019 года.
            </p>
            <p style={{ fontSize: 14, color: "#5d5d5f", lineHeight: 1.9, marginBottom: 20 }}>
              Привозим оригинальную технику Apple, Samsung и Dyson из Кореи, Японии и США без пробега по России — на 30–40% дешевле официальных цен. Каждое устройство проходит проверку перед продажей.
            </p>
            <p style={{ fontSize: 14, color: "#5d5d5f", lineHeight: 1.9, margin: 0 }}>
              Гарантия до 12 месяцев. Рассрочка до 36 месяцев без переплат. Собственный сервисный центр.
            </p>
          </div>
          <div style={{ width: "40%", flexShrink: 0, background: "linear-gradient(135deg, #222222 0%, #0d0d0d 100%)", display: "flex", alignItems: "center", justifyContent: "center", padding: "40px" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo/logo-transparent.png" alt="applebar" style={{ height: 64, objectFit: "contain" }} />
          </div>
        </div>

        {/* Stores */}
        <h2 style={{ fontSize: 22, fontWeight: 600, color: "#0d0d0d", marginBottom: 20 }}>Наши магазины</h2>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          {stores.map(({ city, address, hours, phone, phoneRaw, tg }) => (
            <div key={city} style={{ flex: 1, minWidth: 280, background: "#e8e8e8", borderRadius: 14, border: "1px solid #9d9d9d", padding: "32px 28px" }}>
              <div style={{ fontSize: 18, fontWeight: 600, color: "#0d0d0d", marginBottom: 16 }}>{city}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 13 }}>
                <div style={{ color: "#9d9d9d" }}>📍 {address}</div>
                <div style={{ color: "#9d9d9d" }}>🕙 {hours}</div>
                <a href={`tel:${phoneRaw}`} style={{ color: "#0d0d0d", fontWeight: 600, textDecoration: "none" }}>📞 {phone}</a>
                <a href={tg} style={{ color: "#5d5d5f", textDecoration: "none" }}>✈️ Telegram</a>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div style={{ display: "flex", gap: 1, background: "#9d9d9d", borderRadius: 14, overflow: "hidden", marginTop: 24 }}>
          {[
            { num: "2019", label: "год основания" },
            { num: "2", label: "города присутствия" },
            { num: "5000+", label: "довольных клиентов" },
            { num: "12 мес", label: "гарантия" },
          ].map(({ num, label }) => (
            <div key={label} style={{ flex: 1, background: "#e8e8e8", padding: "28px 24px", textAlign: "center" }}>
              <div style={{ fontSize: 28, fontWeight: 600, color: "#0d0d0d", letterSpacing: "-0.02em" }}>{num}</div>
              <div style={{ fontSize: 12, color: "#9d9d9d", marginTop: 4 }}>{label}</div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
