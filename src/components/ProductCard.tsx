export type Product = {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  oldPrice?: number;
  badge?: "hot" | "new" | "used";
  image?: string;
};

const badgeStyles: Record<string, React.CSSProperties> = {
  hot:  { background: "#0c0c12", color: "#fff" },
  new:  { background: "#eef0f8", color: "#5560aa", border: "1px solid #d8dcf0" },
  used: { background: "#f4f4f6", color: "#999",    border: "1px solid #e4e4e8" },
};

const badgeLabels: Record<string, string> = {
  hot: "Хит", new: "Новинка", used: "Re:Set",
};

import Link from "next/link";

export default function ProductCard({ product }: { product: Product }) {
  const bonus = Math.floor(product.price * 0.01);

  return (
    <Link href={`/product/${product.id}`} style={{ textDecoration: "none" }}>
    <div className="product-card" style={{
      background: "#f2f2f2", padding: "22px 20px 18px", cursor: "pointer",
      transition: "background .15s",
    }}>
      {product.badge && (
        <span style={{
          display: "inline-block", fontSize: 11,
          fontFamily: "inherit", padding: "3px 10px", borderRadius: 4,
          marginBottom: 16, ...badgeStyles[product.badge],
        }}>
          {badgeLabels[product.badge]}
        </span>
      )}

      <div className="card-img" style={{
        width: "100%", aspectRatio: "1", display: "flex",
        alignItems: "center", justifyContent: "center",
        background: "linear-gradient(145deg, #f2f2f2, #e8e8e8)",
        borderRadius: 12, marginBottom: 18, overflow: "hidden",
      }}>
        {product.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={product.image}
            alt={product.name}
            style={{ objectFit: "contain", width: "80%", height: "80%" }}
          />
        ) : (
          <span style={{ fontSize: 64, color: "#ccc" }}>▭</span>
        )}
      </div>

      <div className="card-name" style={{ fontSize: 14, fontWeight: 600, color: "#0d0d1a", marginBottom: 5 }}>{product.name}</div>
      <div className="card-sub" style={{ fontSize: 12, color: "#bbb", marginBottom: 14 }}>{product.subtitle}</div>

      <div style={{ display: "flex", alignItems: "baseline", flexWrap: "wrap", gap: 4 }}>
        <span className="card-price" style={{ fontSize: 20, fontWeight: 600, letterSpacing: "-0.02em", color: "#0d0d1a" }}>
          {product.price.toLocaleString("ru-RU")} ₽
        </span>
        {product.oldPrice && (
          <span className="card-old-price" style={{ fontSize: 12, color: "#ccc", textDecoration: "line-through" }}>
            {product.oldPrice.toLocaleString("ru-RU")} ₽
          </span>
        )}
      </div>

      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        marginTop: 14, paddingTop: 14, borderTop: "1px solid #f0f0f4",
      }}>
        <div className="card-bonus" style={{ fontSize: 11, color: "#bbb" }}>+{bonus} бонусов</div>
        <button className="card-btn" style={{
          width: 34, height: 34, borderRadius: 8,
          background: "#0a0a0a", color: "#fff", fontSize: 22,
          display: "flex", alignItems: "center", justifyContent: "center",
          border: "none", cursor: "pointer", flexShrink: 0,
        }}>+</button>
      </div>
    </div>
    </Link>
  );
}
