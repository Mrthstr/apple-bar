import Header from "@/components/Header";

export default function TradeInPage() {
  return (
    <>
      <Header />
      <main style={{ background: "var(--body-bg)", minHeight: "100vh", padding: "0 48px 64px" }}>
        <div style={{ paddingTop: 40, marginBottom: 40 }}>
          <div style={{ fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9d9d9d", marginBottom: 8 }}>applebar</div>
          <h1 style={{ fontSize: 40, fontWeight: 600, letterSpacing: "-0.02em", color: "#0d0d0d", margin: 0 }}>Trade-In</h1>
        </div>

        <div style={{ display: "flex", gap: 24, alignItems: "flex-start", flexWrap: "wrap" }}>
          {/* Форма оценки */}
          <div style={{ flex: 1, minWidth: 300, background: "#e8e8e8", borderRadius: 14, border: "1px solid #9d9d9d", padding: "40px 36px" }}>
            <h2 style={{ fontSize: 22, fontWeight: 600, color: "#0d0d0d", marginBottom: 8, marginTop: 0 }}>Оценить устройство</h2>
            <p style={{ fontSize: 14, color: "#9d9d9d", marginBottom: 32, lineHeight: 1.7 }}>
              Заполните форму — мы свяжемся и назовём стоимость выкупа. Сумма зачтётся как скидка на покупку.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { label: "Устройство", placeholder: "Например: iPhone 13 Pro, 256 GB" },
                { label: "Состояние", placeholder: "Отличное / Хорошее / Удовлетворительное" },
                { label: "Ваше имя", placeholder: "Как к вам обращаться" },
                { label: "Телефон или Telegram", placeholder: "+7 (___) ___-__-__" },
              ].map(({ label, placeholder }) => (
                <div key={label}>
                  <div style={{ fontSize: 12, color: "#9d9d9d", marginBottom: 6, letterSpacing: "0.05em" }}>{label}</div>
                  <input
                    placeholder={placeholder}
                    style={{
                      width: "100%", padding: "12px 16px", borderRadius: 8,
                      border: "1px solid #9d9d9d", background: "#0d0d0d",
                      color: "#e8e8e8", fontSize: 13, fontFamily: "inherit",
                      outline: "none", boxSizing: "border-box",
                    }}
                  />
                </div>
              ))}
              <button style={{
                background: "#0d0d0d", color: "#e8e8e8", border: "none",
                padding: "14px 24px", borderRadius: 10, fontSize: 14,
                fontFamily: "inherit", fontWeight: 600, cursor: "pointer", marginTop: 8,
              }}>
                Отправить заявку
              </button>
            </div>
          </div>

          {/* Как это работает */}
          <div style={{ flex: 1, minWidth: 280 }}>
            <h2 style={{ fontSize: 20, fontWeight: 600, color: "#0d0d0d", marginBottom: 24, marginTop: 0 }}>Как это работает</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { num: "01", title: "Оставьте заявку", desc: "Укажите модель и состояние устройства в форме." },
                { num: "02", title: "Получите оценку", desc: "Мы свяжемся в течение 30 минут и назовём цену." },
                { num: "03", title: "Привезите устройство", desc: "В любой из наших магазинов в Улан-Удэ или Иркутске." },
                { num: "04", title: "Выберите новинку", desc: "Стоимость устройства вычитается из цены покупки." },
              ].map(({ num, title, desc }) => (
                <div key={num} style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                  <div style={{ fontSize: 24, fontWeight: 600, color: "#5d5d5f", flexShrink: 0, width: 40 }}>{num}</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "#0d0d0d", marginBottom: 4 }}>{title}</div>
                    <div style={{ fontSize: 13, color: "#9d9d9d", lineHeight: 1.7 }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 32, background: "#222222", borderRadius: 14, padding: "24px 28px" }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: "#e8e8e8", marginBottom: 8 }}>Принимаем устройства</div>
              <div style={{ fontSize: 13, color: "#9d9d9d", lineHeight: 1.8 }}>
                iPhone 11 и новее · Samsung Galaxy S21+<br />
                MacBook · iPad · Apple Watch · AirPods
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
