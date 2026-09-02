"use client";

import { LINKEDIN_URL_FALAR_COMIGO } from "@/data/links";

export default function Hero() {
  return (
    <section
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: "clamp(28px,5vw,56px)",
        padding: "clamp(38px,6vw,76px) 0 clamp(34px,5vw,64px)",
        borderBottom: "1px solid var(--border-hairline)",
      }}
    >
      <div style={{ flex: "1 1 340px", minWidth: 280, maxWidth: 560 }}>
        <div style={{ width: 34, height: 1.6, background: "var(--brand-primary)", marginBottom: 18 }} />
        <p
          style={{
            margin: "0 0 14px",
            fontSize: 12.5,
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--brand-primary)",
          }}
        >
          Product × Growth
        </p>
        <h1
          style={{
            margin: "0 0 22px",
            fontFamily: "var(--font-display)",
            fontWeight: 400,
            fontSize: "clamp(46px,8.5vw,78px)",
            lineHeight: 0.98,
            letterSpacing: "-0.015em",
            color: "var(--text-strong)",
          }}
        >
          Giovanni
          <br />
          <em style={{ fontStyle: "italic", color: "var(--brand-primary)" }}>Lucas</em>
        </h1>
        <p
          style={{
            margin: "0 0 16px",
            fontSize: "clamp(17px,2.1vw,21px)",
            fontWeight: 600,
            lineHeight: 1.35,
            color: "var(--text-strong)",
            textWrap: "pretty",
            maxWidth: "26ch",
          }}
        >
          Transformo problemas de negócio em produtos e crescimento.
        </p>
        <p
          style={{
            margin: "0 0 30px",
            fontSize: 15.5,
            lineHeight: 1.6,
            color: "var(--text-muted)",
            textWrap: "pretty",
            maxWidth: "40ch",
          }}
        >
          13 anos entre startups e corporações, criando valor com estratégia, experimentação e liderança.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
          <a
            href={LINKEDIN_URL_FALAR_COMIGO}
            target="_blank"
            rel="noopener noreferrer"
            className="press-99"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 34,
              background: "var(--ink)",
              color: "#fff",
              borderRadius: 999,
              padding: "15px 24px",
              fontSize: 15,
              fontWeight: 600,
              minWidth: 190,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--night)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "var(--ink)")}
          >
            Falar comigo <span>→</span>
          </a>
          <a
            href="#trajetoria"
            className="press-99"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 34,
              background: "transparent",
              color: "var(--ink)",
              border: "1px solid var(--border-strong)",
              borderRadius: 999,
              padding: "15px 24px",
              fontSize: 15,
              fontWeight: 600,
              minWidth: 190,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--stone-100)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            Ver trajetória <span>→</span>
          </a>
        </div>
      </div>

      <div
        style={{
          flex: "1 1 320px",
          minWidth: 260,
          boxSizing: "border-box",
          position: "relative",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-end",
          padding: "44px clamp(0px,5vw,78px) 0 0",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            width: "46%",
            aspectRatio: "1 / 1",
            background: "var(--brand-primary)",
            borderRadius: "4px 4px 96px",
            transform: "rotate(-8deg)",
            opacity: 0.92,
            zIndex: 1,
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 0,
            bottom: "12%",
            width: 118,
            height: 104,
            backgroundImage: "radial-gradient(var(--stone-300) 1.4px, transparent 1.4px)",
            backgroundSize: "13px 13px",
            opacity: 0.8,
            zIndex: 0,
          }}
        />
        <img
          src="/images/giovanni.jpg"
          alt="Giovanni Lucas"
          style={{
            position: "relative",
            zIndex: 2,
            width: "100%",
            maxWidth: 380,
            aspectRatio: "1 / 1",
            objectFit: "cover",
            objectPosition: "50% 22%",
            filter: "grayscale(1) contrast(1.06)",
            borderRadius: 6,
            boxShadow: "var(--shadow-lg)",
          }}
        />
      </div>
    </section>
  );
}
