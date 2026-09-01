import Eyebrow from "@/components/ui/Eyebrow";
import Badge from "@/components/ui/Badge";
import { education } from "@/data/education";

export default function Education() {
  return (
    <section style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(16px,4vw,56px) clamp(48px,8vw,96px)" }}>
      <Eyebrow rule>Formação acadêmica</Eyebrow>
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
        Graduação e especializações.
      </h2>

      <div style={{ display: "flex", flexDirection: "column" }}>
        {education.map((item, i) => (
          <div
            key={`${item.title}-${item.institution}`}
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
              gap: 16,
              flexWrap: "wrap",
              padding: "clamp(14px,2vw,18px) 0",
              borderTop: i === 0 ? "1px solid var(--border-hairline)" : "none",
              borderBottom: "1px solid var(--border-hairline)",
            }}
          >
            <div style={{ display: "flex", alignItems: "baseline", gap: 14, flexWrap: "wrap" }}>
              <span
                style={{
                  fontSize: "var(--text-2xs)",
                  fontWeight: "var(--weight-bold)",
                  letterSpacing: "var(--tracking-label)",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                }}
              >
                {item.type}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 400,
                  fontSize: "clamp(1.15rem,2vw,1.4rem)",
                  color: "var(--text-strong)",
                }}
              >
                {item.title}
              </span>
              {item.note && (
                <Badge tone="magenta" size="sm">
                  {item.note}
                </Badge>
              )}
            </div>
            <span style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>{item.institution}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
