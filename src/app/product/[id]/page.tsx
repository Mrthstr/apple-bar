import { notFound } from "next/navigation";
import Header from "@/components/Header";
import { ALL_PRODUCTS } from "@/lib/products";
import ProductDetail from "@/components/ProductDetail";

export function generateStaticParams() {
  return ALL_PRODUCTS.map((p) => ({ id: p.id }));
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = ALL_PRODUCTS.find(p => p.id === id);
  if (!product) notFound();

  return (
    <>
      <Header />
      <main style={{ background: "var(--body-bg)", minHeight: "100vh" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "36px 48px" }}>

          {/* Breadcrumb */}
          <div style={{ fontSize: 12, color: "#bbb", marginBottom: 28, display: "flex", gap: 8, alignItems: "center" }}>
            <a href="/" style={{ color: "#bbb", textDecoration: "none" }}>Главная</a>
            <span>›</span>
            <a href="/" style={{ color: "#bbb", textDecoration: "none" }}>{product.cat}</a>
            <span>›</span>
            <span style={{ color: "#555" }}>{product.name}</span>
          </div>

          <ProductDetail product={product} />
        </div>
      </main>
    </>
  );
}
