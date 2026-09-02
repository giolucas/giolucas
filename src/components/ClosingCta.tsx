"use client";

import { LINKEDIN_URL_FALAR_COMIGO } from "@/data/links";

export default function ClosingCta() {
  return (
    <section
      id="contato"
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "clamp(20px,4vw,48px)",
        padding: "clamp(38px,6vw,68px) 0",
      }}
    >
      <h2
        style={{
          margin: 0,
          flex: "1 1 320px",
          fontFamily: "var(--font-display)",
          fontWeight: 400,
          fontSize: "clamp(28px,4.4vw,40px)",
          lineHeight: 1.15,
          letterSpacing: "-0.01em",
          color: "var(--ink)",
          textWrap: "pretty",
        }}
      >
        Tem um problema interessante para resolver?
      </h2>
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "clamp(16px,3vw,30px)" }}>
        <span style={{ fontSize: 15, color: "var(--text-muted)" }}>Vamos conversar.</span>
        <a
          href={LINKEDIN_URL_FALAR_COMIGO}
          target="_blank"
          rel="noopener noreferrer"
          className="press-99"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 30,
            background: "var(--ink)",
            color: "#fff",
            borderRadius: 999,
            padding: "16px 26px",
            fontSize: 15,
            fontWeight: 600,
            minWidth: 200,
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "var(--night)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "var(--ink)")}
        >
          Falar comigo <span>→</span>
        </a>
      </div>
    </section>
  );
}
