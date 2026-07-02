"use client";

import { useState } from "react";
import type { ColorOption, StorageOption, SimOption } from "@/lib/products";

type Props = {
  colors?: ColorOption[];
  storages?: StorageOption[];
  simTypes?: SimOption[];
  basePrice: number;
  baseOldPrice?: number;
  onImageChange?: (img: string) => void;
};

export default function ProductOptions({ colors, storages, simTypes, basePrice, baseOldPrice, onImageChange }: Props) {
  const [activeColor, setActiveColor] = useState(0);
  const [activeStorage, setActiveStorage] = useState(0);
  const [activeSim, setActiveSim] = useState<SimOption | null>(simTypes?.[0] ?? null);

  const currentStorage = storages?.[activeStorage];
  const price = currentStorage?.price ?? basePrice;
  const oldPrice = currentStorage?.oldPrice ?? baseOldPrice;
  const bonus = Math.floor(price * 0.01);

  const handleColorClick = (i: number) => {
    setActiveColor(i);
    if (colors?.[i]?.image && onImageChange) {
      onImageChange(colors[i].image!);
    }
  };

  return (
    <div>
      {/* Price (динамическая) */}
      <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 6 }}>
        <span style={{ fontSize: 36, fontWeight: 600, letterSpacing: "-0.03em", color: "#0d0d0d" }}>
          {price.toLocaleString("ru-RU")} ₽
        </span>
        {oldPrice && (
          <span style={{ fontSize: 18, color: "#ccc", textDecoration: "line-through" }}>
            {oldPrice.toLocaleString("ru-RU")} ₽
          </span>
        )}
      </div>
      <div style={{ fontSize: 13, color: "#0d0d0d", marginBottom: 28 }}>+{bonus} бонусов за покупку</div>

      {/* Цвет */}
      {colors && colors.length > 0 && (
        <div style={{ marginBottom: 24 }}>
          <div style={{ fontSize: 13, color: "#999", marginBottom: 10 }}>
            Цвет: <span style={{ color: "#0d0d0d", fontWeight: 600 }}>{colors[activeColor].label}</span>
          </div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {colors.map((c, i) => (
              <button
                key={c.label}
                onClick={() => handleColorClick(i)}
                title={c.label}
                style={{
                  width: 36, height: 36, borderRadius: "50%",
                  background: c.hex,
                  border: `3px solid ${i === activeColor ? "#0d0d0d" : "transparent"}`,
                  outline: `2px solid ${i === activeColor ? "#0d0d0d" : "#e0d8db"}`,
                  cursor: "pointer", padding: 0,
                  transition: "outline .15s, border .15s",
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Память */}
      {storages && storages.length > 0 && (
        <div style={{ marginBottom: 24 }}>
          <div style={{ fontSize: 13, color: "#999", marginBottom: 10 }}>Объём памяти</div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {storages.map((s, i) => (
              <button
                key={s.label}
                onClick={() => setActiveStorage(i)}
                style={{
                  padding: "8px 18px", borderRadius: 8, fontSize: 13,
                  fontFamily: "inherit", fontWeight: 600,
                  background: i === activeStorage ? "#0d0d0d" : "#e0e0e0",
                  color: i === activeStorage ? "#fff" : "#555",
                  border: `1px solid ${i === activeStorage ? "#0d0d0d" : "#e0d8db"}`,
                  cursor: "pointer", transition: "all .15s",
                }}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* SIM */}
      {simTypes && simTypes.length > 0 && (
        <div style={{ marginBottom: 28 }}>
          <div style={{ fontSize: 13, color: "#999", marginBottom: 10 }}>Тип SIM</div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {simTypes.map(sim => (
              <button
                key={sim}
                onClick={() => setActiveSim(sim)}
                style={{
                  padding: "8px 18px", borderRadius: 8, fontSize: 13,
                  fontFamily: "inherit", fontWeight: 600,
                  background: activeSim === sim ? "#0d0d0d" : "#e0e0e0",
                  color: activeSim === sim ? "#fff" : "#555",
                  border: `1px solid ${activeSim === sim ? "#0d0d0d" : "#e0d8db"}`,
                  cursor: "pointer", transition: "all .15s",
                }}
              >
                {sim}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

