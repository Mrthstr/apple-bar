import Header from "@/components/Header";
import CatalogSection from "@/components/CatalogSection";
import { ALL_PRODUCTS } from "@/lib/products";

export default function CatalogPage() {
  return (
    <>
      <Header />
      <main style={{ background: "var(--body-bg)", minHeight: "100vh" }}>
        <div style={{ padding: "32px 48px 16px" }}>
          <div style={{ fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9d9d9d", marginBottom: 8 }}>
            applebar
          </div>
          <h1 style={{ fontSize: 40, fontWeight: 600, letterSpacing: "-0.02em", color: "#0d0d0d", margin: 0 }}>
            Каталог
          </h1>
        </div>
        <CatalogSection products={ALL_PRODUCTS} />
        <div style={{ height: 64 }} />
      </main>
    </>
  );
}
