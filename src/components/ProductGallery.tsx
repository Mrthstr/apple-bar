"use client";

import { useState } from "react";

export default function ProductGallery({ images, name }: { images: string[]; name: string }) {
  const [active, setActive] = useState(0);

  if (images.length === 0) {
    return (
      <div style={{
        background: "linear-gradient(145deg, #f5eef0, #ede5e8)",
        borderRadius: 20, aspectRatio: "1",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 64, color: "#ddd",
      }}>▭</div>
    );
  }

  return (
    <div>
      {/* Main image */}
      <div style={{
        background: "linear-gradient(145deg, #f5eef0, #ede5e8)",
        borderRadius: 20, overflow: "hidden", aspectRatio: "1",
        display: "flex", alignItems: "center", justifyContent: "center",
        marginBottom: 12,
      }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={images[active]}
          alt={name}
          style={{ width: "80%", height: "80%", objectFit: "contain" }}
        />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div style={{ display: "flex", gap: 8 }}>
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                width: 72, height: 72, borderRadius: 10, overflow: "hidden",
                border: `2px solid ${i === active ? "#6b1428" : "#e8e0e3"}`,
                background: "linear-gradient(145deg, #f5eef0, #ede5e8)",
                cursor: "pointer", padding: 4, flexShrink: 0,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img} alt={name} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
