import type { Metadata } from "next";

const CV_PATH = "/cv/Giovanni-Lucas-Curriculo.pdf";

export const metadata: Metadata = {
  title: "Giovanni Lucas — Currículo (PDF)",
  description: "Currículo de Giovanni Lucas em PDF.",
};

export default function CvPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100dvh", background: "var(--stone-100)" }}>
      <embed
        src={CV_PATH}
        type="application/pdf"
        style={{ flex: "1 1 auto", minHeight: 0, width: "100%", border: "none" }}
      />

      {/* A dedicated bar (not an overlay) so this stays visible even on mobile
          Safari, where the native PDF plugin can render above fixed-position
          elements layered on top of it. */}
      <div
        style={{
          flex: "none",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          padding: "12px clamp(16px,4vw,32px)",
          background: "var(--paper)",
          borderTop: "1px solid var(--border-hairline)",
          boxShadow: "var(--shadow-lg)",
        }}
      >
        <a
          href={CV_PATH}
          download="Giovanni-Lucas-Curriculo.pdf"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            height: 48,
            padding: "0 26px",
            borderRadius: "var(--radius-pill)",
            background: "var(--brand-primary)",
            color: "var(--brand-on-primary)",
            fontFamily: "var(--font-sans)",
            fontSize: "var(--text-sm)",
            fontWeight: "var(--weight-semibold)",
            letterSpacing: "0.01em",
            textDecoration: "none",
          }}
        >
          Baixar CV
        </a>
      </div>
    </div>
  );
}
