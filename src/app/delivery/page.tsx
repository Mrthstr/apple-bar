import Header from "@/components/Header";

const sections = [
  {
    title: "Доставка",
    items: [
      { q: "Сроки", a: "2–10 рабочих дней. Устройства привозим под заказ из Кореи, Японии и США." },
      { q: "Стоимость", a: "Доставка до магазина бесплатно. Курьером по городу — уточняйте при оформлении." },
      { q: "Как заказать", a: "Напишите нам в Telegram или позвоните — оформим заказ и уточним сроки." },
      { q: "Отслеживание", a: "После отправки пришлём трек-номер для отслеживания посылки." },
    ],
  },
  {
    title: "Гарантия",
    items: [
      { q: "Срок гарантии", a: "До 12 месяцев на все устройства. Срок зависит от категории товара." },
      { q: "Что покрывает", a: "Заводские дефекты и неисправности, возникшие при обычном использовании." },
      { q: "Что не покрывает", a: "Механические повреждения, попадание влаги, программные сбои после обновлений." },
      { q: "Гарантийный ремонт", a: "Проводится в нашем сервисном центре бесплатно в течение гарантийного срока." },
    ],
  },
  {
    title: "Оплата и рассрочка",
    items: [
      { q: "Способы оплаты", a: "Наличные, банковская карта, перевод по СБП." },
      { q: "Рассрочка", a: "До 36 месяцев без переплат и скрытых комиссий. Быстрое одобрение онлайн." },
      { q: "Возврат", a: "В течение 14 дней при сохранении товарного вида и комплектации." },
    ],
  },
];

export default function DeliveryPage() {
  return (
    <>
      <Header />
      <main style={{ background: "var(--body-bg)", minHeight: "100vh", padding: "0 48px 64px" }}>
        <div style={{ paddingTop: 40, marginBottom: 40 }}>
          <div style={{ fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9d9d9d", marginBottom: 8 }}>applebar</div>
          <h1 style={{ fontSize: 40, fontWeight: 600, letterSpacing: "-0.02em", color: "#0d0d0d", margin: 0 }}>Доставка и гарантия</h1>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {sections.map(({ title, items }) => (
            <div key={title} style={{ background: "#e8e8e8", borderRadius: 14, border: "1px solid #9d9d9d", overflow: "hidden" }}>
              <div style={{ padding: "20px 32px", borderBottom: "1px solid #9d9d9d", background: "#222222" }}>
                <span style={{ fontSize: 16, fontWeight: 600, color: "#e8e8e8" }}>{title}</span>
              </div>
              {items.map(({ q, a }, i) => (
                <div key={q} style={{
                  display: "flex", gap: 32, padding: "20px 32px",
                  borderTop: i > 0 ? "1px solid #9d9d9d" : "none",
                }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "#0d0d0d", minWidth: 180, flexShrink: 0 }}>{q}</div>
                  <div style={{ fontSize: 13, color: "#5d5d5f", lineHeight: 1.7 }}>{a}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
