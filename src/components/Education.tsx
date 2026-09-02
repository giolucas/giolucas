import Badge from "@/components/ui/Badge";
import { education } from "@/data/education";

export default function Education() {
  return (
    <section id="formacao" style={{ padding: "clamp(34px,5vw,60px) 0", scrollMarginTop: 84 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
        <span style={{ fontSize: 14, fontWeight: 700, color: "var(--brand-primary)" }}>04</span>
        <span style={{ width: 22, height: 1.4, background: "var(--brand-primary)" }} />
      </div>
      <h2 style={{ margin: "0 0 30px", fontSize: 12.5, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ink)" }}>
        Formação acadêmica
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
              borderTop: i === 0 ? "1px solid var(--stone-100)" : "none",
              borderBottom: "1px solid var(--stone-100)",
            }}
          >
            <div style={{ display: "flex", alignItems: "baseline", gap: 14, flexWrap: "wrap" }}>
              <span style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--stone-500)" }}>
                {item.type}
              </span>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 20, color: "var(--ink)" }}>{item.title}</span>
              {item.note && (
                <Badge tone="magenta" size="sm">
                  {item.note}
                </Badge>
              )}
            </div>
            <span style={{ fontSize: 14.5, color: "var(--stone-500)" }}>{item.institution}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
