"use client";

import { useState } from "react";
import type { ProductItem } from "@/lib/products";

export default function ProductDetail({ product }: { product: ProductItem }) {
  const [activeColor, setActiveColor] = useState(0);
  const [activeStorage, setActiveStorage] = useState(0);
  const [activeSim, setActiveSim] = useState(product.simTypes?.[0] ?? null);
  const [activeImg, setActiveImg] = useState(0);

  const colors = product.colors ?? [];
  const storages = product.storages ?? [];

  // При смене цвета — меняем главное фото
  const handleColorClick = (i: number) => {
    setActiveColor(i);
    setActiveImg(0);
  };

  const currentImages = (() => {
    const colorImg = colors[activeColor]?.image;
    if (colorImg) return [colorImg, ...(product.images ?? []).filter(x => x !== colorImg)];
    return product.images ?? (product.image ? [product.image] : []);
  })();

  const currentStorage = storages[activeStorage];
  const price = currentStorage?.price ?? product.price;
  const oldPrice = currentStorage?.oldPrice ?? product.oldPrice;
  const bonus = Math.floor(price * 0.01);

  const badgeLabel: Record<string, string> = { hot: "Хит", new: "Новинка", used: "Re:Set" };
  const badgeColor: Record<string, string> = { hot: "#0c0c12", new: "#111111", used: "#0a0a0a" };

  return (
    <div className="product-detail-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>

      {/* Gallery */}
      <div>
        <div style={{
          background: "linear-gradient(145deg, #f2f2f2, #e8e8e8)",
          borderRadius: 20, overflow: "hidden", aspectRatio: "1",
          display: "flex", alignItems: "center", justifyContent: "center",
          marginBottom: 12,
        }}>
          {currentImages.length > 0 ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={currentImages[activeImg]} alt={product.name} style={{ width: "80%", height: "80%", objectFit: "contain" }} />
          ) : (
            <span style={{ fontSize: 64, color: "#ddd" }}>▭</span>
          )}
        </div>
        {currentImages.length > 1 && (
          <div style={{ display: "flex", gap: 8 }}>
            {currentImages.map((img, i) => (
              <button key={i} onClick={() => setActiveImg(i)} style={{
                width: 72, height: 72, borderRadius: 10, overflow: "hidden",
                border: `2px solid ${i === activeImg ? "#0a0a0a" : "#e8e0e3"}`,
                background: "linear-gradient(145deg, #f2f2f2, #e8e8e8)",
                cursor: "pointer", padding: 4, flexShrink: 0,
              }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img} alt={product.name} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Info */}
      <div>
        {product.badge && (
          <span style={{
            display: "inline-block", fontSize: 11, padding: "4px 12px",
            borderRadius: 6, marginBottom: 14,
            background: badgeColor[product.badge] || "#eee",
            color: "#fff", fontWeight: 600,
          }}>{badgeLabel[product.badge] || product.badge}</span>
        )}

        <h1 style={{ fontSize: 32, fontWeight: 600, letterSpacing: "-0.02em", color: "#0d0d1a", marginBottom: 6, lineHeight: 1.2 }}>
          {product.name}
        </h1>
        <div style={{ fontSize: 14, color: "#999", marginBottom: 24 }}>{product.subtitle}</div>

        {/* Price */}
        <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 6, flexWrap: "wrap" }}>
          <span className="detail-price" style={{ fontSize: 36, fontWeight: 600, letterSpacing: "-0.03em", color: "#0d0d1a", whiteSpace: "nowrap" }}>
            {price.toLocaleString("ru-RU")} ₽
          </span>
          {oldPrice && (
            <span className="detail-old-price" style={{ fontSize: 18, color: "#ccc", textDecoration: "line-through", whiteSpace: "nowrap" }}>
              {oldPrice.toLocaleString("ru-RU")} ₽
            </span>
          )}
        </div>
        <div style={{ fontSize: 13, color: "#0a0a0a", marginBottom: 28 }}>+{bonus} бонусов за покупку</div>

        {/* Цвет */}
        {colors.length > 0 && (
          <div style={{ marginBottom: 24 }}>
            <div style={{ fontSize: 13, color: "#999", marginBottom: 10 }}>
              Цвет: <span style={{ color: "#0d0d1a", fontWeight: 600 }}>{colors[activeColor].label}</span>
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {colors.map((c, i) => (
                <button key={c.label} onClick={() => handleColorClick(i)} title={c.label} style={{
                  width: 36, height: 36, borderRadius: "50%",
                  background: c.hex,
                  border: `3px solid ${i === activeColor ? "#0a0a0a" : "transparent"}`,
                  outline: `2px solid ${i === activeColor ? "#0a0a0a" : "#e0d8db"}`,
                  cursor: "pointer", padding: 0, transition: "outline .15s",
                }} />
              ))}
            </div>
          </div>
        )}

        {/* Память */}
        {storages.length > 0 && (
          <div style={{ marginBottom: 24 }}>
            <div style={{ fontSize: 13, color: "#999", marginBottom: 10 }}>Объём памяти</div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {storages.map((s, i) => (
                <button key={s.label} onClick={() => setActiveStorage(i)} style={{
                  padding: "8px 18px", borderRadius: 8, fontSize: 13,
                  fontFamily: "inherit", fontWeight: 600,
                  background: i === activeStorage ? "#0a0a0a" : "#fff",
                  color: i === activeStorage ? "#fff" : "#555",
                  border: `1px solid ${i === activeStorage ? "#0a0a0a" : "#e0d8db"}`,
                  cursor: "pointer", transition: "all .15s",
                }}>{s.label}</button>
              ))}
            </div>
          </div>
        )}

        {/* SIM */}
        {product.simTypes && product.simTypes.length > 0 && (
          <div style={{ marginBottom: 28 }}>
            <div style={{ fontSize: 13, color: "#999", marginBottom: 10 }}>Тип SIM</div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {product.simTypes.map(sim => (
                <button key={sim} onClick={() => setActiveSim(sim)} style={{
                  padding: "8px 18px", borderRadius: 8, fontSize: 13,
                  fontFamily: "inherit", fontWeight: 600,
                  background: activeSim === sim ? "#0d0d1a" : "#fff",
                  color: activeSim === sim ? "#fff" : "#555",
                  border: `1px solid ${activeSim === sim ? "#0d0d1a" : "#e0d8db"}`,
                  cursor: "pointer", transition: "all .15s",
                }}>{sim}</button>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
          <button style={{ background: "#0a0a0a", color: "#fff", border: "none", padding: "16px 28px", borderRadius: 12, fontSize: 14, fontFamily: "inherit", fontWeight: 600, cursor: "pointer" }}>
            Купить сейчас
          </button>
          <button style={{ background: "transparent", color: "#0a0a0a", border: "2px solid #0a0a0a", padding: "14px 28px", borderRadius: 12, fontSize: 14, fontFamily: "inherit", fontWeight: 600, cursor: "pointer" }}>
            Рассрочка до 36 месяцев
          </button>
          <button style={{ background: "transparent", color: "#555", border: "1px solid #e0d8db", padding: "14px 28px", borderRadius: 12, fontSize: 14, fontFamily: "inherit", cursor: "pointer" }}>
            Написать в Telegram
          </button>
        </div>

        {/* Guarantees */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 32 }}>
          {[
            { title: "Гарантия", desc: "до 12 месяцев" },
            { title: "Доставка", desc: "2–10 рабочих дней" },
            { title: "Рассрочка", desc: "до 36 месяцев" },
            { title: "Оригинал", desc: "Без пробега по РФ" },
          ].map(({ title, desc }) => (
            <div key={title} style={{ background: "#f2f2f2", border: "1px solid #e0e0e3", borderRadius: 10, padding: "12px 16px" }}>
              <div style={{ fontSize: 12, color: "#bbb", marginBottom: 3 }}>{title}</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#0d0d1a" }}>{desc}</div>
            </div>
          ))}
        </div>

        {/* Description */}
        {product.description && (
          <div style={{ marginBottom: 28 }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: "#0d0d1a", marginBottom: 8 }}>О товаре</div>
            <p style={{ fontSize: 14, color: "#666", lineHeight: 1.8, margin: 0 }}>{product.description}</p>
          </div>
        )}

        {/* Specs */}
        {product.specs && product.specs.length > 0 && (
          <div>
            <div style={{ fontSize: 14, fontWeight: 600, color: "#0d0d1a", marginBottom: 12 }}>Характеристики</div>
            <div style={{ border: "1px solid #e8e0e3", borderRadius: 12, overflow: "hidden" }}>
              {product.specs.map(({ label, value }, i) => (
                <div key={label} style={{
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  padding: "12px 16px",
                  background: i % 2 === 0 ? "#fff" : "#faf8f9",
                  borderTop: i > 0 ? "1px solid #f0eaec" : "none",
                }}>
                  <span style={{ fontSize: 13, color: "#999" }}>{label}</span>
                  <span style={{ fontSize: 13, fontWeight: 600, color: "#0d0d1a" }}>{value}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
