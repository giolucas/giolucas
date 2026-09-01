export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border-hairline)",
        padding: "28px clamp(16px,4vw,56px)",
        maxWidth: 1200,
        margin: "0 auto",
        display: "flex",
        flexWrap: "wrap",
        gap: "12px 24px",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <span
        style={{
          fontSize: "var(--text-2xs)",
          letterSpacing: "var(--tracking-label)",
          textTransform: "uppercase",
          fontWeight: "var(--weight-bold)",
          color: "var(--text-muted)",
        }}
      >
        Giovanni Lucas
      </span>
      <span style={{ fontSize: "var(--text-2xs)", color: "var(--text-muted)" }}>Growth · Produto · IA · São Paulo</span>
    </footer>
  );
}
