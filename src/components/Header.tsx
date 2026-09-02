"use client";

import { useState } from "react";
import { LINKEDIN_URL_FALAR_COMIGO } from "@/data/links";

const NAV_LINKS = [
  { label: "Trajetória", href: "#trajetoria" },
  { label: "Especialidades", href: "#especialidades" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((v) => !v);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 20,
        background: "rgba(250,246,240,0.88)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid var(--border-hairline)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "16px clamp(20px,5vw,40px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 20,
        }}
      >
        <nav className="nav-desktop" style={{ alignItems: "center", gap: "clamp(18px,3vw,34px)" }}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="link-hover-magenta"
              style={{ fontSize: 14.5, fontWeight: 500, color: "var(--ink-soft)" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/cv"
            target="_blank"
            rel="noopener noreferrer"
            className="press-99"
            style={{
              display: "inline-flex",
              alignItems: "center",
              background: "transparent",
              color: "var(--ink)",
              border: "1px solid var(--border-strong)",
              borderRadius: 999,
              padding: "11px 21px",
              fontSize: 14.5,
              fontWeight: 600,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--stone-100)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            Baixar CV
          </a>
          <a
            href={LINKEDIN_URL_FALAR_COMIGO}
            target="_blank"
            rel="noopener noreferrer"
            className="press-99"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: "var(--ink)",
              color: "#fff",
              borderRadius: 999,
              padding: "12px 22px",
              fontSize: 14.5,
              fontWeight: 600,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--night)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "var(--ink)")}
          >
            Falar comigo <span style={{ fontSize: 15 }}>→</span>
          </a>
        </nav>

        <button
          aria-label="Menu"
          onClick={toggleMenu}
          className="nav-mobile-toggle"
          style={{ flexDirection: "column", gap: 5, background: "none", border: 0, padding: 10, cursor: "pointer" }}
        >
          <span style={{ width: 24, height: 1.6, background: "var(--ink)", display: "block" }} />
          <span style={{ width: 24, height: 1.6, background: "var(--ink)", display: "block" }} />
          <span style={{ width: 24, height: 1.6, background: "var(--ink)", display: "block" }} />
        </button>
      </div>

      {menuOpen && (
        <nav
          className="nav-mobile-toggle"
          style={{
            flexDirection: "column",
            gap: 4,
            padding: "8px 20px 22px",
            borderTop: "1px solid var(--border-hairline)",
            background: "var(--paper)",
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={toggleMenu}
              style={{
                padding: "14px 4px",
                fontSize: 17,
                fontWeight: 500,
                color: "var(--ink)",
                borderBottom: "1px solid var(--stone-100)",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/cv"
            target="_blank"
            rel="noopener noreferrer"
            onClick={toggleMenu}
            style={{
              marginTop: 14,
              display: "inline-flex",
              justifyContent: "center",
              alignItems: "center",
              background: "transparent",
              color: "var(--ink)",
              border: "1px solid var(--border-strong)",
              borderRadius: 999,
              padding: "14px 22px",
              fontSize: 15,
              fontWeight: 600,
            }}
          >
            Baixar CV
          </a>
          <a
            href={LINKEDIN_URL_FALAR_COMIGO}
            target="_blank"
            rel="noopener noreferrer"
            onClick={toggleMenu}
            style={{
              marginTop: 12,
              display: "inline-flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
              background: "var(--ink)",
              color: "#fff",
              borderRadius: 999,
              padding: "15px 22px",
              fontSize: 15,
              fontWeight: 600,
            }}
          >
            Falar comigo <span>→</span>
          </a>
        </nav>
      )}
    </header>
  );
}
