import type { Metadata } from "next";

const CV_PATH = "/cv/Giovanni-Lucas-Curriculo.pdf";

export const metadata: Metadata = {
  title: "Giovanni Lucas — Currículo (PDF)",
  description: "Currículo de Giovanni Lucas em PDF.",
};

export default function CvPage() {
  return (
    <div style={{ position: "relative", height: "100vh", background: "var(--stone-100)" }}>
      <embed src={CV_PATH} type="application/pdf" style={{ width: "100%", height: "100%", border: "none" }} />

      <a
        href={CV_PATH}
        download="Giovanni-Lucas-Curriculo.pdf"
        style={{
          position: "fixed",
          bottom: "clamp(16px,4vw,32px)",
          right: "clamp(16px,4vw,32px)",
          display: "inline-flex",
          alignItems: "center",
          gap: 10,
          height: 54,
          padding: "0 26px",
          borderRadius: "var(--radius-pill)",
          background: "var(--brand-primary)",
          color: "var(--brand-on-primary)",
          fontFamily: "var(--font-sans)",
          fontSize: "var(--text-sm)",
          fontWeight: "var(--weight-semibold)",
          letterSpacing: "0.01em",
          textDecoration: "none",
          boxShadow: "var(--shadow-lg)",
          transition: "background var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard)",
        }}
      >
        <span style={{ fontSize: "1.1em" }}>↓</span> Baixar CV
      </a>
    </div>
  );
}
