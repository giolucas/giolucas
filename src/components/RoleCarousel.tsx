"use client";

import { useRef, useState } from "react";
import IconButton from "@/components/ui/IconButton";
import RoleCard from "@/components/RoleCard";
import { roles } from "@/data/roles";
import { LINKEDIN_URL } from "@/data/links";

export default function RoleCarousel() {
  const [index, setIndex] = useState(0);
  const railRef = useRef<HTMLDivElement>(null);

  const step = () => {
    const rail = railRef.current;
    if (!rail) return 300;
    const card = rail.firstElementChild as HTMLElement | null;
    const width = card ? card.getBoundingClientRect().width : 300;
    const gap = parseFloat(getComputedStyle(rail).columnGap || "20") || 20;
    return width + gap;
  };

  const scrollTo = (i: number) => {
    const idx = Math.max(0, Math.min(roles.length - 1, i));
    setIndex(idx);
    railRef.current?.scrollTo({ left: idx * step(), behavior: "smooth" });
  };

  const onScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const i = Math.round(e.currentTarget.scrollLeft / step());
    if (i !== index) setIndex(Math.max(0, Math.min(roles.length - 1, i)));
  };

  const navProps = {
    style: { width: 52, height: 52, fontSize: "var(--text-lg)", background: "transparent", boxShadow: "inset 0 0 0 1px var(--border-strong)" },
  };

  return (
    <section
      id="trajetoria"
      style={{ maxWidth: 1200, margin: "0 auto", padding: "clamp(28px,5vw,56px) 0 clamp(48px,8vw,96px)", scrollMarginTop: 84 }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          gap: 18,
          padding: "0 clamp(16px,4vw,56px)",
          marginBottom: "clamp(20px,3vw,32px)",
        }}
      >
        <span style={{ fontSize: "var(--text-md)", color: "var(--text-body)", fontVariantNumeric: "tabular-nums" }}>
          {Math.min(index, roles.length - 1) + 1} de {roles.length}
        </span>
        <div style={{ display: "flex", gap: 10 }}>
          <IconButton round size="lg" label="Anterior" onClick={() => scrollTo(index - 1)} {...navProps}>
            ←
          </IconButton>
          <IconButton round size="lg" label="Próximo" onClick={() => scrollTo(index + 1)} {...navProps}>
            →
          </IconButton>
        </div>
      </div>

      <div
        ref={railRef}
        className="rail"
        onScroll={onScroll}
        style={{
          display: "flex",
          gap: "clamp(14px,2vw,24px)",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none",
          padding: "6px clamp(16px,4vw,56px) 10px",
          scrollPaddingLeft: "clamp(16px,4vw,56px)",
          alignItems: "stretch",
        }}
      >
        {roles.map((role) => (
          <RoleCard key={`${role.company}-${role.title}`} role={role} />
        ))}
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "14px 28px",
          justifyContent: "flex-end",
          padding: "clamp(20px,3vw,32px) clamp(16px,4vw,56px) 0",
        }}
      >
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            fontSize: "var(--text-md)",
            fontWeight: "var(--weight-medium)",
            paddingBottom: 4,
          }}
        >
          LinkedIn <span>→</span>
        </a>
      </div>
    </section>
  );
}
