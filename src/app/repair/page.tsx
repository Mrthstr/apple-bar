import Header from "@/components/Header";

const services = [
  { title: "Замена дисплея", devices: "iPhone, iPad, Samsung", price: "от 3 500 ₽", time: "1–2 часа" },
  { title: "Замена аккумулятора", devices: "iPhone, MacBook, Samsung", price: "от 2 000 ₽", time: "30–60 мин" },
  { title: "Замена стекла", devices: "iPhone, Samsung", price: "от 1 500 ₽", time: "1–2 часа" },
  { title: "Замена разъёма", devices: "iPhone, Samsung, MacBook", price: "от 1 800 ₽", time: "1–3 часа" },
  { title: "Восстановление после воды", devices: "iPhone, Samsung", price: "от 2 500 ₽", time: "1–3 дня" },
  { title: "Диагностика", devices: "Все устройства", price: "Бесплатно", time: "15–30 мин" },
];

export default function RepairPage() {
  return (
    <>
      <Header />
      <main style={{ background: "var(--body-bg)", minHeight: "100vh", padding: "0 48px 64px" }}>
        <div style={{ paddingTop: 40, marginBottom: 40 }}>
          <div style={{ fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9d9d9d", marginBottom: 8 }}>applebar</div>
          <h1 style={{ fontSize: 40, fontWeight: 600, letterSpacing: "-0.02em", color: "#0d0d0d", margin: 0 }}>Сервисный центр</h1>
        </div>

        {/* Hero */}
        <div style={{ display: "flex", gap: 16, marginBottom: 32, flexWrap: "wrap" }}>
          {[
            { title: "Диагностика", desc: "Бесплатно" },
            { title: "Оригинальные запчасти", desc: "Гарантия качества" },
            { title: "Гарантия на работы", desc: "90 дней" },
            { title: "Срочный ремонт", desc: "В день обращения" },
          ].map(({ title, desc }) => (
            <div key={title} style={{ flex: 1, minWidth: 160, background: "#222222", borderRadius: 12, padding: "20px 20px", textAlign: "center" }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: "#e8e8e8", marginBottom: 4 }}>{title}</div>
              <div style={{ fontSize: 12, color: "#9d9d9d" }}>{desc}</div>
            </div>
          ))}
        </div>

        {/* Services table */}
        <div style={{ background: "#e8e8e8", borderRadius: 14, border: "1px solid #9d9d9d", overflow: "hidden", marginBottom: 32 }}>
          <div style={{ padding: "16px 28px", background: "#222222", display: "flex", gap: 16 }}>
            <span style={{ flex: 2, fontSize: 12, color: "#9d9d9d", textTransform: "uppercase", letterSpacing: "0.08em" }}>Услуга</span>
            <span style={{ flex: 2, fontSize: 12, color: "#9d9d9d", textTransform: "uppercase", letterSpacing: "0.08em" }}>Устройства</span>
            <span style={{ flex: 1, fontSize: 12, color: "#9d9d9d", textTransform: "uppercase", letterSpacing: "0.08em" }}>Стоимость</span>
            <span style={{ flex: 1, fontSize: 12, color: "#9d9d9d", textTransform: "uppercase", letterSpacing: "0.08em" }}>Срок</span>
          </div>
          {services.map(({ title, devices, price, time }, i) => (
            <div key={title} style={{
              display: "flex", gap: 16, padding: "18px 28px", alignItems: "center",
              borderTop: i > 0 ? "1px solid #9d9d9d" : "none",
            }}>
              <div style={{ flex: 2, fontSize: 14, fontWeight: 600, color: "#0d0d0d" }}>{title}</div>
              <div style={{ flex: 2, fontSize: 13, color: "#9d9d9d" }}>{devices}</div>
              <div style={{ flex: 1, fontSize: 13, fontWeight: 600, color: "#0d0d0d" }}>{price}</div>
              <div style={{ flex: 1, fontSize: 13, color: "#9d9d9d" }}>{time}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ background: "linear-gradient(135deg, #222222 0%, #0d0d0d 100%)", borderRadius: 14, padding: "40px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 24 }}>
          <div>
            <div style={{ fontSize: 20, fontWeight: 600, color: "#e8e8e8", marginBottom: 8 }}>Записаться на ремонт</div>
            <div style={{ fontSize: 13, color: "#9d9d9d" }}>Позвоните или напишите в Telegram — ответим в течение 15 минут</div>
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            <a href="tel:+79243921311" style={{
              background: "#e8e8e8", color: "#0d0d0d", padding: "13px 24px",
              borderRadius: 10, fontSize: 13, fontWeight: 600, textDecoration: "none",
            }}>+7 (924) 392-13-11</a>
            <a href="https://t.me/applebarIRK" style={{
              background: "transparent", color: "#9d9d9d", padding: "13px 24px",
              borderRadius: 10, fontSize: 13, border: "1px solid #5d5d5f", textDecoration: "none",
            }}>Telegram</a>
          </div>
        </div>
      </main>
    </>
  );
}
