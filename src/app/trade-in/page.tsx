"use client";

import { useState } from "react";
import Header from "@/components/Header";

const MODELS: Record<string, Record<string, number>> = {
  "iPhone 11":          { "64 ГБ": 11000, "128 ГБ": 13000, "256 ГБ": 15000 },
  "iPhone 11 Pro":      { "64 ГБ": 16000, "256 ГБ": 19000, "512 ГБ": 22000 },
  "iPhone 11 Pro Max":  { "64 ГБ": 17000, "256 ГБ": 20000, "512 ГБ": 24000 },
  "iPhone 12 mini":     { "64 ГБ": 14000, "128 ГБ": 16000, "256 ГБ": 18000 },
  "iPhone 12":          { "64 ГБ": 16000, "128 ГБ": 18000, "256 ГБ": 21000 },
  "iPhone 12 Pro":      { "128 ГБ": 22000, "256 ГБ": 25000, "512 ГБ": 29000 },
  "iPhone 12 Pro Max":  { "128 ГБ": 24000, "256 ГБ": 27000, "512 ГБ": 31000 },
  "iPhone 13 mini":     { "128 ГБ": 18000, "256 ГБ": 21000, "512 ГБ": 24000 },
  "iPhone 13":          { "128 ГБ": 22000, "256 ГБ": 25000, "512 ГБ": 28000 },
  "iPhone 13 Pro":      { "128 ГБ": 28000, "256 ГБ": 31000, "512 ГБ": 35000, "1 ТБ": 39000 },
  "iPhone 13 Pro Max":  { "128 ГБ": 30000, "256 ГБ": 33000, "512 ГБ": 37000, "1 ТБ": 41000 },
  "iPhone SE (2022)":   { "64 ГБ": 12000, "128 ГБ": 14000, "256 ГБ": 16000 },
  "iPhone 14":          { "128 ГБ": 28000, "256 ГБ": 32000, "512 ГБ": 36000 },
  "iPhone 14 Plus":     { "128 ГБ": 30000, "256 ГБ": 34000, "512 ГБ": 38000 },
  "iPhone 14 Pro":      { "128 ГБ": 36000, "256 ГБ": 40000, "512 ГБ": 44000, "1 ТБ": 49000 },
  "iPhone 14 Pro Max":  { "128 ГБ": 39000, "256 ГБ": 43000, "512 ГБ": 47000, "1 ТБ": 52000 },
  "iPhone 15":          { "128 ГБ": 38000, "256 ГБ": 42000, "512 ГБ": 47000 },
  "iPhone 15 Plus":     { "128 ГБ": 42000, "256 ГБ": 46000, "512 ГБ": 51000 },
  "iPhone 15 Pro":      { "128 ГБ": 50000, "256 ГБ": 55000, "512 ГБ": 60000, "1 ТБ": 66000 },
  "iPhone 15 Pro Max":  { "256 ГБ": 58000, "512 ГБ": 63000, "1 ТБ": 69000 },
  "iPhone 16":          { "128 ГБ": 52000, "256 ГБ": 57000, "512 ГБ": 62000 },
  "iPhone 16 Plus":     { "128 ГБ": 57000, "256 ГБ": 62000, "512 ГБ": 67000 },
  "iPhone 16 Pro":      { "128 ГБ": 68000, "256 ГБ": 73000, "512 ГБ": 79000, "1 ТБ": 85000 },
  "iPhone 16 Pro Max":  { "256 ГБ": 76000, "512 ГБ": 82000, "1 ТБ": 88000 },
  "iPhone 16e":         { "128 ГБ": 42000, "256 ГБ": 47000 },
};

const SERIES = [
  { name: "iPhone 11", models: ["iPhone 11", "iPhone 11 Pro", "iPhone 11 Pro Max"] },
  { name: "iPhone 12", models: ["iPhone 12 mini", "iPhone 12", "iPhone 12 Pro", "iPhone 12 Pro Max"] },
  { name: "iPhone 13", models: ["iPhone 13 mini", "iPhone 13", "iPhone 13 Pro", "iPhone 13 Pro Max"] },
  { name: "iPhone SE", models: ["iPhone SE (2022)"] },
  { name: "iPhone 14", models: ["iPhone 14", "iPhone 14 Plus", "iPhone 14 Pro", "iPhone 14 Pro Max"] },
  { name: "iPhone 15", models: ["iPhone 15", "iPhone 15 Plus", "iPhone 15 Pro", "iPhone 15 Pro Max"] },
  { name: "iPhone 16", models: ["iPhone 16", "iPhone 16 Plus", "iPhone 16 Pro", "iPhone 16 Pro Max", "iPhone 16e"] },
];

const CONDITIONS = [
  { id: "perfect", label: "Идеальное", desc: "Без царапин, полный комплект", mult: 1.0 },
  { id: "good",    label: "Хорошее",   desc: "Мелкие царапины, без трещин",  mult: 0.85 },
  { id: "fair",    label: "Среднее",   desc: "Видимые потёртости или царапины на корпусе", mult: 0.70 },
  { id: "poor",    label: "Плохое",    desc: "Трещины на экране или корпусе", mult: 0.50 },
];

type Step = "model" | "storage" | "condition" | "result" | "form" | "done";

export default function TradeInPage() {
  const [step, setStep] = useState<Step>("model");
  const [activeSeries, setActiveSeries] = useState(SERIES[6].name);
  const [model, setModel] = useState("");
  const [storage, setStorage] = useState("");
  const [condition, setCondition] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const basePrice = model && storage ? MODELS[model]?.[storage] ?? 0 : 0;
  const condMult = CONDITIONS.find(c => c.id === condition)?.mult ?? 1;
  const finalPrice = Math.round(basePrice * condMult / 1000) * 1000;

  const btn = (bg: string, text: string, onClick: () => void, disabled = false) => (
    <button onClick={onClick} disabled={disabled} style={{
      background: disabled ? "#5d5d5f" : bg, color: "#e8e8e8",
      border: "none", padding: "14px 32px", borderRadius: 10,
      fontSize: 14, fontFamily: "inherit", fontWeight: 600,
      cursor: disabled ? "not-allowed" : "pointer", transition: "opacity .15s",
    }}>{text}</button>
  );

  const chip = (label: string, active: boolean, onClick: () => void, sub?: string) => (
    <button key={label} onClick={onClick} style={{
      padding: sub ? "12px 20px" : "10px 20px",
      borderRadius: 10, fontSize: 13, fontFamily: "inherit", fontWeight: 600,
      background: active ? "#0d0d0d" : "#e0e0e0",
      color: active ? "#e8e8e8" : "#5d5d5f",
      border: `1px solid ${active ? "#0d0d0d" : "#9d9d9d"}`,
      cursor: "pointer", transition: "all .15s",
      textAlign: "left" as const,
    }}>
      <div>{label}</div>
      {sub && <div style={{ fontSize: 11, fontWeight: 400, color: active ? "#9d9d9d" : "#9d9d9d", marginTop: 2 }}>{sub}</div>}
    </button>
  );

  const STEPS: Step[] = ["model", "storage", "condition", "result", "form", "done"];
  const stepIdx = STEPS.indexOf(step);
  const stepLabels = ["Модель", "Память", "Состояние", "Оценка", "Заявка"];

  return (
    <>
      <Header />
      <main style={{ background: "var(--body-bg)", minHeight: "100vh", padding: "0 48px 64px" }}>
        <div style={{ paddingTop: 40, marginBottom: 40 }}>
          <div style={{ fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9d9d9d", marginBottom: 8 }}>applebar</div>
          <h1 style={{ fontSize: 40, fontWeight: 600, letterSpacing: "-0.02em", color: "#0d0d0d", margin: 0 }}>Trade-In</h1>
          <p style={{ fontSize: 14, color: "#9d9d9d", marginTop: 8 }}>Оценим ваш iPhone — стоимость зачтётся как скидка на новый</p>
        </div>

        <div style={{ display: "flex", gap: 32, alignItems: "flex-start" }}>

          {/* Calculator */}
          <div style={{ flex: 1, minWidth: 0 }}>

            {/* Progress */}
            {step !== "done" && (
              <div style={{ display: "flex", gap: 8, marginBottom: 32 }}>
                {stepLabels.map((l, i) => (
                  <div key={l} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{
                      width: 28, height: 28, borderRadius: "50%", fontSize: 12, fontWeight: 600,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      background: i < stepIdx ? "#5d5d5f" : i === stepIdx ? "#0d0d0d" : "#e0e0e0",
                      color: i <= stepIdx ? "#e8e8e8" : "#9d9d9d",
                    }}>{i < stepIdx ? "✓" : i + 1}</div>
                    <span style={{ fontSize: 12, color: i === stepIdx ? "#0d0d0d" : "#9d9d9d", fontWeight: i === stepIdx ? 600 : 400 }}>{l}</span>
                    {i < stepLabels.length - 1 && <div style={{ width: 24, height: 1, background: "#9d9d9d" }} />}
                  </div>
                ))}
              </div>
            )}

            {/* Step: Model */}
            {step === "model" && (
              <div style={{ background: "#e8e8e8", borderRadius: 14, border: "1px solid #9d9d9d", padding: "32px" }}>
                <div style={{ fontSize: 18, fontWeight: 600, color: "#0d0d0d", marginBottom: 20 }}>Выберите модель iPhone</div>

                {/* Series tabs */}
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 24 }}>
                  {SERIES.map(s => (
                    <button key={s.name} onClick={() => setActiveSeries(s.name)} style={{
                      padding: "6px 16px", borderRadius: 20, fontSize: 12, fontFamily: "inherit",
                      background: activeSeries === s.name ? "#0d0d0d" : "transparent",
                      color: activeSeries === s.name ? "#e8e8e8" : "#9d9d9d",
                      border: `1px solid ${activeSeries === s.name ? "#0d0d0d" : "#9d9d9d"}`,
                      cursor: "pointer",
                    }}>{s.name}</button>
                  ))}
                </div>

                {/* Models grid */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                  {(SERIES.find(s => s.name === activeSeries)?.models ?? []).map(m => chip(m, model === m, () => setModel(m)))}
                </div>

                <div style={{ marginTop: 28 }}>
                  {btn("#0d0d0d", "Далее →", () => setStep("storage"), !model)}
                </div>
              </div>
            )}

            {/* Step: Storage */}
            {step === "storage" && (
              <div style={{ background: "#e8e8e8", borderRadius: 14, border: "1px solid #9d9d9d", padding: "32px" }}>
                <div style={{ fontSize: 13, color: "#9d9d9d", marginBottom: 4 }}>Модель</div>
                <div style={{ fontSize: 18, fontWeight: 600, color: "#0d0d0d", marginBottom: 24 }}>{model}</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#0d0d0d", marginBottom: 16 }}>Объём памяти</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                  {Object.entries(MODELS[model] ?? {}).map(([gb, price]) =>
                    chip(gb, storage === gb, () => setStorage(gb), price.toLocaleString("ru-RU") + " ₽")
                  )}
                </div>
                <div style={{ marginTop: 28, display: "flex", gap: 12 }}>
                  <button onClick={() => setStep("model")} style={{ padding: "14px 24px", borderRadius: 10, fontSize: 14, fontFamily: "inherit", background: "transparent", color: "#9d9d9d", border: "1px solid #9d9d9d", cursor: "pointer" }}>← Назад</button>
                  {btn("#0d0d0d", "Далее →", () => setStep("condition"), !storage)}
                </div>
              </div>
            )}

            {/* Step: Condition */}
            {step === "condition" && (
              <div style={{ background: "#e8e8e8", borderRadius: 14, border: "1px solid #9d9d9d", padding: "32px" }}>
                <div style={{ fontSize: 18, fontWeight: 600, color: "#0d0d0d", marginBottom: 24 }}>Состояние устройства</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {CONDITIONS.map(c => (
                    <button key={c.id} onClick={() => setCondition(c.id)} style={{
                      display: "flex", alignItems: "center", justifyContent: "space-between",
                      padding: "16px 20px", borderRadius: 10, fontFamily: "inherit",
                      background: condition === c.id ? "#0d0d0d" : "#d8d8d8",
                      border: `1px solid ${condition === c.id ? "#0d0d0d" : "#9d9d9d"}`,
                      cursor: "pointer", transition: "all .15s", textAlign: "left",
                    }}>
                      <div>
                        <div style={{ fontSize: 14, fontWeight: 600, color: condition === c.id ? "#e8e8e8" : "#0d0d0d" }}>{c.label}</div>
                        <div style={{ fontSize: 12, color: "#9d9d9d", marginTop: 2 }}>{c.desc}</div>
                      </div>
                      <div style={{ fontSize: 13, fontWeight: 600, color: condition === c.id ? "#9d9d9d" : "#5d5d5f", flexShrink: 0, marginLeft: 16 }}>
                        до {Math.round(basePrice * c.mult / 1000) * 1000 > 0 ? (Math.round(basePrice * c.mult / 1000) * 1000).toLocaleString("ru-RU") + " ₽" : "—"}
                      </div>
                    </button>
                  ))}
                </div>
                <div style={{ marginTop: 28, display: "flex", gap: 12 }}>
                  <button onClick={() => setStep("storage")} style={{ padding: "14px 24px", borderRadius: 10, fontSize: 14, fontFamily: "inherit", background: "transparent", color: "#9d9d9d", border: "1px solid #9d9d9d", cursor: "pointer" }}>← Назад</button>
                  {btn("#0d0d0d", "Узнать цену →", () => setStep("result"), !condition)}
                </div>
              </div>
            )}

            {/* Step: Result */}
            {step === "result" && (
              <div style={{ background: "#e8e8e8", borderRadius: 14, border: "1px solid #9d9d9d", padding: "40px 32px", textAlign: "center" }}>
                <div style={{ fontSize: 13, color: "#9d9d9d", marginBottom: 4 }}>Ориентировочная стоимость</div>
                <div style={{ fontSize: 48, fontWeight: 600, color: "#0d0d0d", letterSpacing: "-0.03em", marginBottom: 4 }}>
                  {finalPrice.toLocaleString("ru-RU")} ₽
                </div>
                <div style={{ fontSize: 13, color: "#9d9d9d", marginBottom: 8 }}>
                  {model} · {storage} · {CONDITIONS.find(c => c.id === condition)?.label}
                </div>
                <div style={{ fontSize: 12, color: "#9d9d9d", marginBottom: 32, lineHeight: 1.6 }}>
                  Точная цена — после осмотра устройства в магазине.<br />
                  Оставьте заявку — мы перезвоним и уточним детали.
                </div>
                <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                  {btn("#0d0d0d", "Оставить заявку", () => setStep("form"))}
                  <button onClick={() => { setModel(""); setStorage(""); setCondition(""); setStep("model"); }} style={{ padding: "14px 24px", borderRadius: 10, fontSize: 14, fontFamily: "inherit", background: "transparent", color: "#9d9d9d", border: "1px solid #9d9d9d", cursor: "pointer" }}>Оценить другой</button>
                </div>
              </div>
            )}

            {/* Step: Form */}
            {step === "form" && (
              <div style={{ background: "#e8e8e8", borderRadius: 14, border: "1px solid #9d9d9d", padding: "32px" }}>
                <div style={{ fontSize: 18, fontWeight: 600, color: "#0d0d0d", marginBottom: 8 }}>Ваши контакты</div>
                <div style={{ fontSize: 13, color: "#9d9d9d", marginBottom: 24 }}>
                  {model} · {storage} · {finalPrice.toLocaleString("ru-RU")} ₽
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {[
                    { label: "Имя", value: name, set: setName, placeholder: "Как к вам обращаться" },
                    { label: "Телефон или Telegram", value: phone, set: setPhone, placeholder: "+7 (___) ___-__-__" },
                  ].map(({ label, value, set, placeholder }) => (
                    <div key={label}>
                      <div style={{ fontSize: 12, color: "#9d9d9d", marginBottom: 6 }}>{label}</div>
                      <input
                        value={value}
                        onChange={e => set(e.target.value)}
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
                  <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
                    <button onClick={() => setStep("result")} style={{ padding: "14px 24px", borderRadius: 10, fontSize: 14, fontFamily: "inherit", background: "transparent", color: "#9d9d9d", border: "1px solid #9d9d9d", cursor: "pointer" }}>← Назад</button>
                    {btn("#0d0d0d", "Отправить заявку", () => setStep("done"), !name || !phone)}
                  </div>
                </div>
              </div>
            )}

            {/* Step: Done */}
            {step === "done" && (
              <div style={{ background: "#e8e8e8", borderRadius: 14, border: "1px solid #9d9d9d", padding: "48px 32px", textAlign: "center" }}>
                <div style={{ fontSize: 40, marginBottom: 16 }}>✓</div>
                <div style={{ fontSize: 22, fontWeight: 600, color: "#0d0d0d", marginBottom: 8 }}>Заявка принята</div>
                <div style={{ fontSize: 14, color: "#9d9d9d", lineHeight: 1.7, marginBottom: 32 }}>
                  Мы свяжемся с вами в течение 30 минут<br />и подтвердим стоимость {model}.
                </div>
                {btn("#0d0d0d", "Оценить ещё устройство", () => { setModel(""); setStorage(""); setCondition(""); setName(""); setPhone(""); setStep("model"); })}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div style={{ width: 280, flexShrink: 0, display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ background: "#222222", borderRadius: 14, padding: "24px" }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: "#e8e8e8", marginBottom: 12 }}>Как это работает</div>
              {[
                { n: "1", t: "Оцените онлайн", d: "Укажите модель и состояние" },
                { n: "2", t: "Получите звонок", d: "Подтвердим цену за 30 мин" },
                { n: "3", t: "Привезите iPhone", d: "В магазин в вашем городе" },
                { n: "4", t: "Выберите новый", d: "Зачтём стоимость как скидку" },
              ].map(({ n, t, d }) => (
                <div key={n} style={{ display: "flex", gap: 12, marginBottom: 16, alignItems: "flex-start" }}>
                  <div style={{ width: 24, height: 24, borderRadius: "50%", background: "#5d5d5f", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 600, color: "#e8e8e8", flexShrink: 0 }}>{n}</div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "#e8e8e8" }}>{t}</div>
                    <div style={{ fontSize: 12, color: "#9d9d9d", marginTop: 2 }}>{d}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ background: "#e8e8e8", borderRadius: 14, border: "1px solid #9d9d9d", padding: "24px" }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: "#0d0d0d", marginBottom: 12 }}>Условия приёма</div>
              {[
                "Не был в ремонте и не вскрывался",
                "Не восстановленный (не refurbished)",
                "Желательно наличие коробки",
                "Паспорт владельца",
              ].map(t => (
                <div key={t} style={{ display: "flex", gap: 8, marginBottom: 10, fontSize: 12, color: "#5d5d5f", alignItems: "flex-start" }}>
                  <span style={{ color: "#9d9d9d", flexShrink: 0 }}>—</span> {t}
                </div>
              ))}
            </div>

            <div style={{ background: "#e8e8e8", borderRadius: 14, border: "1px solid #9d9d9d", padding: "24px" }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#0d0d0d", marginBottom: 8 }}>Есть вопросы?</div>
              <div style={{ fontSize: 12, color: "#9d9d9d", marginBottom: 16 }}>Напишите нам напрямую</div>
              <a href="https://t.me/applebarIRK" style={{ display: "block", background: "#0d0d0d", color: "#e8e8e8", padding: "11px 16px", borderRadius: 8, fontSize: 12, fontWeight: 600, textDecoration: "none", textAlign: "center" }}>
                Написать в Telegram
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
