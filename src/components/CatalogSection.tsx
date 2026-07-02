"use client";

import { useState } from "react";
import ProductCard, { Product } from "./ProductCard";

const CATS = ["iPhone", "Apple Watch", "Mac", "AirPods", "Dyson", "Samsung", "Re:Set"];

type ProductWithCat = Product & { cat: string };

export default function CatalogSection({ products }: { products: ProductWithCat[] }) {
  const [activeCat, setActiveCat] = useState("iPhone");

  const filtered = activeCat === "iPhone"
    ? products.filter(p => p.cat === "iPhone")
    : products.filter(p => p.cat === activeCat);

  const cols = 4;

  return (
    <div className="catalog-section">
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 20, paddingBottom: 16, borderBottom: "1px solid #9d9d9d" }}>
        <span style={{ fontSize: 16, fontWeight: 600, color: "#0d0d0d" }}>Каталог</span>
        <span style={{ fontSize: 13, color: "#bbb", cursor: "pointer" }}>Все товары →</span>
      </div>

      {/* Category pills */}
      <div style={{ display: "flex", gap: 9, flexWrap: "wrap", marginBottom: 24 }}>
        {CATS.map(c => (
          <button key={c} onClick={() => setActiveCat(c)} style={{
            border: "1px solid", borderColor: activeCat === c ? "#0d0d0d" : "#9d9d9d",
            borderRadius: 24, padding: "7px 18px", fontSize: 13,
            fontFamily: "inherit",
            background: activeCat === c ? "#0d0d0d" : "#e8e8e8",
            color: activeCat === c ? "#fff" : "#888",
            cursor: "pointer", transition: "all .15s",
          }}>{c}</button>
        ))}
      </div>

      {/* Product grid */}
      {filtered.length > 0 ? (
        <div className="catalog-grid" style={{ gap: 1, background: "#9d9d9d", border: "1px solid #9d9d9d", borderRadius: 14, overflow: "hidden" }}>
          {filtered.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      ) : (
        <div style={{ padding: "60px 0", textAlign: "center", color: "#bbb", fontSize: 14 }}>
          Товары в этой категории скоро появятся
        </div>
      )}
    </div>
  );
}


