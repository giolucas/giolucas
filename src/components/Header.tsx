"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { LINKEDIN_URL_CONTATO, LINKEDIN_URL_FALAR_COMIGO } from "@/data/links";

const NAV_LINKS = [
  { label: "Trajetória", href: "#trajetoria" },
  { label: "Contato", href: LINKEDIN_URL_CONTATO, target: "_blank", rel: "noopener noreferrer" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((v) => !v);

  return (
    <>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 40,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          padding: "14px clamp(16px,4vw,56px)",
          background: "rgba(250,246,240,0.86)",
          backdropFilter: "blur(14px)",
          borderBottom: "1px solid var(--border-hairline)",
        }}
      >
        <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, flex: "none" }}>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-lg)",
              color: "var(--text-strong)",
              letterSpacing: "var(--tracking-display)",
            }}
          >
            Giovanni<span style={{ fontStyle: "italic", color: "var(--brand-primary)" }}> Lucas</span>
          </span>
        </a>

        <nav
          style={{
            display: "none",
            alignItems: "center",
            gap: 28,
            fontSize: "var(--text-sm)",
            fontWeight: "var(--weight-medium)",
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.target}
              rel={link.rel}
              style={{ color: "var(--text-body)" }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Button
            href={LINKEDIN_URL_FALAR_COMIGO}
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: "var(--ink)", color: "#fff", borderRadius: "var(--radius-pill)", boxShadow: "none" }}
          >
            Falar comigo
          </Button>
          <button
            aria-label="Abrir menu"
            onClick={toggleMenu}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: 44,
              height: 44,
              flex: "none",
              border: "none",
              background: "transparent",
              borderRadius: "var(--radius-md)",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--surface-inset)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            <span style={{ display: "flex", flexDirection: "column", gap: 5, width: 22 }}>
              <span style={{ height: 2, background: "var(--text-strong)", borderRadius: 2 }} />
              <span style={{ height: 2, background: "var(--text-strong)", borderRadius: 2 }} />
            </span>
          </button>
        </div>
      </header>

      {menuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 60,
            background: "rgba(20,16,14,0.5)",
            backdropFilter: "blur(2px)",
          }}
          onClick={toggleMenu}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              width: "min(360px,86vw)",
              background: "var(--paper)",
              padding: "26px 24px",
              display: "flex",
              flexDirection: "column",
              gap: 6,
              boxShadow: "var(--shadow-lg)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 10 }}>
              <button
                aria-label="Fechar"
                onClick={toggleMenu}
                style={{
                  width: 40,
                  height: 40,
                  border: "none",
                  background: "var(--surface-inset)",
                  borderRadius: "var(--radius-pill)",
                  fontSize: 18,
                  color: "var(--text-strong)",
                  cursor: "pointer",
                }}
              >
                ✕
              </button>
            </div>
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.target}
                rel={link.rel}
                onClick={toggleMenu}
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "var(--text-xl)",
                  color: "var(--text-strong)",
                  padding: "10px 0",
                  borderBottom: "1px solid var(--border-hairline)",
                }}
              >
                {link.label}
              </a>
            ))}
            <p style={{ margin: "18px 0 0", fontSize: "var(--text-2xs)", color: "var(--text-muted)" }}>
              Growth · Produto · IA
            </p>
          </div>
        </div>
      )}
    </>
  );
}
