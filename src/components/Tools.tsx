import Eyebrow from "@/components/ui/Eyebrow";
import { tools, aiTools } from "@/data/tools";

function PillGroup({ items }: { items: string[] }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
      {items.map((item) => (
        <span
          key={item}
          style={{
            fontSize: "var(--text-xs)",
            fontWeight: "var(--weight-medium)",
            letterSpacing: "0.02em",
            color: "var(--text-body)",
            background: "var(--surface-inset)",
            borderRadius: "var(--radius-pill)",
            padding: "8px 14px",
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
    <section style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(16px,4vw,56px) clamp(48px,8vw,96px)" }}>
      <Eyebrow rule>Domínio de ferramentas</Eyebrow>
      <h2
        style={{
          margin: "16px 0 clamp(28px,4vw,40px)",
          fontFamily: "var(--font-display)",
          fontWeight: 400,
          fontSize: "clamp(1.75rem,4vw,2.875rem)",
          lineHeight: 1.06,
          letterSpacing: "var(--tracking-display)",
          color: "var(--text-strong)",
          maxWidth: "26ch",
        }}
      >
        Stack que uso no dia a dia.
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "clamp(24px,4vw,32px)" }}>
        <div>
          <p
            style={{
              margin: "0 0 12px",
              fontSize: "var(--text-2xs)",
              fontWeight: "var(--weight-bold)",
              letterSpacing: "var(--tracking-label)",
              textTransform: "uppercase",
              color: "var(--text-muted)",
            }}
          >
            Ferramentas
          </p>
          <PillGroup items={tools} />
        </div>

        <div>
          <p
            style={{
              margin: "0 0 12px",
              fontSize: "var(--text-2xs)",
              fontWeight: "var(--weight-bold)",
              letterSpacing: "var(--tracking-label)",
              textTransform: "uppercase",
              color: "var(--text-muted)",
            }}
          >
            Ferramentas de IA
          </p>
          <PillGroup items={aiTools} />
        </div>
      </div>
    </section>
  );
}
