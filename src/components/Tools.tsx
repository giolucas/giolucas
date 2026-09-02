import { tools, aiTools } from "@/data/tools";

function PillGroup({ items }: { items: string[] }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
      {items.map((item) => (
        <span
          key={item}
          style={{
            fontSize: 13,
            color: "var(--stone-700)",
            background: "var(--stone-100)",
            borderRadius: 999,
            padding: "7px 14px",
          }}
        >
          {item}
        </span>
      ))}
    </div>
  );
}

export default function Tools() {
  return (
    <section id="ferramentas" style={{ padding: "clamp(34px,5vw,60px) 0", borderBottom: "1px solid var(--border-hairline)", scrollMarginTop: 84 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
        <span style={{ fontSize: 14, fontWeight: 700, color: "var(--brand-primary)" }}>03</span>
        <span style={{ width: 22, height: 1.4, background: "var(--brand-primary)" }} />
      </div>
      <h2 style={{ margin: "0 0 30px", fontSize: 12.5, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ink)" }}>
        Ferramentas
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div>
          <p style={{ margin: "0 0 12px", fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--stone-500)" }}>
            Ferramentas
          </p>
          <PillGroup items={tools} />
        </div>

        <div>
          <p style={{ margin: "0 0 12px", fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--stone-500)" }}>
            Ferramentas de IA
          </p>
          <PillGroup items={aiTools} />
        </div>
      </div>
    </section>
  );
}
