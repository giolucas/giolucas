"use client";

import { useRef, useState } from "react";
import RoleCard from "@/components/RoleCard";
import { roles } from "@/data/roles";
import { LINKEDIN_URL } from "@/data/links";

const COMPANIES = ["superlógica", "stefanini", "zup", "advice", "alura", "CRMBonus"];

function NavButton({ label, onClick, children }: { label: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      aria-label={label}
      onClick={onClick}
      className="press-93"
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 46,
        height: 46,
        borderRadius: 999,
        background: "transparent",
        border: "1px solid var(--border-strong)",
        color: "var(--ink)",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.background = "var(--stone-100)")}
      onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
    >
      {children}
    </button>
  );
}

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

  return (
    <section id="trajetoria" style={{ padding: "clamp(34px,5vw,60px) 0", borderBottom: "1px solid var(--border-hairline)", scrollMarginTop: 84 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
        <span style={{ fontSize: 14, fontWeight: 700, color: "var(--brand-primary)" }}>01</span>
        <span style={{ width: 22, height: 1.4, background: "var(--brand-primary)" }} />
      </div>
      <h2 style={{ margin: "0 0 30px", fontSize: 12.5, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ink)" }}>
        Trajetória
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(140px,1fr))",
          gap: "clamp(20px,3vw,36px)",
          alignItems: "center",
          marginBottom: 28,
        }}
      >
        {COMPANIES.map((name) => (
          <span key={name} style={{ fontSize: "clamp(18px,2.2vw,22px)", fontWeight: 700, letterSpacing: "-0.01em", color: "var(--stone-700)" }}>
            {name}
          </span>
        ))}
      </div>

      <p style={{ margin: "0 0 30px", fontSize: 15, color: "var(--text-muted)", textWrap: "pretty" }}>
        <strong style={{ color: "var(--brand-primary)", fontWeight: 700 }}>+13 anos</strong> de experiência construindo
        produtos, estratégias e times de alta performance.
      </p>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 14, marginBottom: 16 }}>
        <span style={{ fontSize: 14, color: "var(--text-muted)", fontVariantNumeric: "tabular-nums" }}>
          {Math.min(index, roles.length - 1) + 1} de {roles.length}
        </span>
        <NavButton label="Anterior" onClick={() => scrollTo(index - 1)}>
          <svg viewBox="0 0 24 24" width={19} height={19} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5" />
            <path d="m11 6-6 6 6 6" />
          </svg>
        </NavButton>
        <NavButton label="Próximo" onClick={() => scrollTo(index + 1)}>
          <svg viewBox="0 0 24 24" width={19} height={19} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" />
            <path d="m13 6 6 6-6 6" />
          </svg>
        </NavButton>
      </div>

      <div
        ref={railRef}
        className="rail"
        onScroll={onScroll}
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: 20,
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          scrollBehavior: "smooth",
          scrollbarWidth: "none",
          padding: "6px clamp(20px,5vw,40px) 22px",
          margin: "0 calc(-1 * clamp(20px,5vw,40px))",
        }}
      >
        {roles.map((role) => (
          <RoleCard key={`${role.company}-${role.title}`} role={role} />
        ))}
      </div>

      <a
        href={LINKEDIN_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="link-hover-magenta-border"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 10,
          fontSize: 15,
          fontWeight: 600,
          color: "var(--ink)",
          borderBottom: "1.5px solid var(--ink)",
          paddingBottom: 4,
        }}
      >
        LinkedIn <span>→</span>
      </a>
    </section>
  );
}
