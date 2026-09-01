import Badge from "@/components/ui/Badge";
import type { Role } from "@/data/roles";

export default function RoleCard({ role }: { role: Role }) {
  return (
    <article
      style={{
        flex: "none",
        width: "clamp(268px,80vw,380px)",
        scrollSnapAlign: "start",
        display: "flex",
        flexDirection: "column",
        background: "var(--surface-card)",
        borderRadius: "var(--radius-xl)",
        boxShadow: "var(--shadow-sm)",
        overflow: "hidden",
      }}
    >
      <div style={{ height: 8, background: role.color }} />
      <div style={{ padding: "clamp(20px,3vw,28px)", display: "flex", flexDirection: "column", gap: 14, flex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
          <span
            style={{
              fontSize: "var(--text-2xs)",
              letterSpacing: "var(--tracking-label)",
              textTransform: "uppercase",
              fontWeight: "var(--weight-bold)",
              color: "var(--text-muted)",
            }}
          >
            {role.company}
          </span>
          {role.badge && <Badge tone={role.badgeTone}>{role.badge}</Badge>}
        </div>

        <h3
          style={{
            margin: 0,
            fontFamily: "var(--font-display)",
            fontWeight: 400,
            fontSize: "clamp(1.4rem,3.4vw,1.9rem)",
            lineHeight: 1.1,
            letterSpacing: "var(--tracking-display)",
            color: "var(--text-strong)",
            textWrap: "pretty",
          }}
        >
          {role.title}
        </h3>
        <p style={{ margin: 0, fontSize: "var(--text-sm)", color: "var(--text-muted)", fontVariantNumeric: "tabular-nums" }}>
          {role.period} · {role.place}
        </p>
        <p style={{ margin: 0, fontSize: "var(--text-sm)", lineHeight: "var(--leading-relaxed)", color: "var(--text-body)", textWrap: "pretty" }}>
          {role.summary}
        </p>

        <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
          {role.highlights.map((h) => (
            <li key={h} style={{ display: "flex", gap: 10, fontSize: "var(--text-sm)", lineHeight: "var(--leading-relaxed)", color: "var(--text-body)" }}>
              <span style={{ color: "var(--brand-primary)", flex: "none" }}>◆</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: "auto", paddingTop: 6 }}>
          {role.tags.map((t) => (
            <span
              key={t}
              style={{
                fontSize: "var(--text-2xs)",
                fontWeight: "var(--weight-medium)",
                letterSpacing: "0.02em",
                color: "var(--text-body)",
                background: "var(--surface-inset)",
                borderRadius: "var(--radius-pill)",
                padding: "6px 12px",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
