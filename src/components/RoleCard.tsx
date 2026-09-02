import Badge from "@/components/ui/Badge";
import type { Role } from "@/data/roles";

function Highlights({ items }: { items: string[] }) {
  return (
    <ul style={{ margin: "4px 0 0", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
      {items.map((h) => (
        <li
          key={h}
          style={{ display: "flex", gap: 11, alignItems: "flex-start", fontSize: 14.5, lineHeight: 1.5, color: "var(--text-body)", textWrap: "pretty" }}
        >
          <span
            style={{
              flex: "0 0 auto",
              width: 7,
              height: 7,
              marginTop: 7,
              background: "var(--brand-primary)",
              transform: "rotate(45deg)",
            }}
          />
          <span>{h}</span>
        </li>
      ))}
    </ul>
  );
}

function Tags({ items }: { items: string[] }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
      {items.map((t) => (
        <span
          key={t}
          style={{
            fontSize: 13,
            color: "var(--stone-700)",
            background: "var(--stone-100)",
            borderRadius: 999,
            padding: "7px 14px",
          }}
        >
          {t}
        </span>
      ))}
    </div>
  );
}

export default function RoleCard({ role }: { role: Role }) {
  return (
    <article
      style={{
        scrollSnapAlign: "start",
        flex: "0 0 min(86vw,400px)",
        display: "flex",
        flexDirection: "column",
        background: "var(--surface-card)",
        border: "1px solid var(--border-hairline)",
        borderRadius: 20,
        boxShadow: "var(--shadow-sm)",
        overflow: "hidden",
      }}
    >
      <div style={{ height: 6, background: role.color }} />
      <div style={{ display: "flex", flexDirection: "column", gap: 12, padding: "24px 24px 26px", flex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
          <span
            style={{
              fontSize: 11.5,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--stone-500)",
            }}
          >
            {role.company}
          </span>
          {role.badge && (
            <Badge tone={role.badgeTone} style={{ fontSize: 12.5, fontWeight: 600, padding: "6px 13px" }}>
              {role.badge}
            </Badge>
          )}
        </div>

        <h3
          style={{
            margin: 0,
            fontFamily: "var(--font-display)",
            fontWeight: 400,
            fontSize: 29,
            lineHeight: 1.08,
            letterSpacing: "-0.01em",
            color: "var(--text-strong)",
            textWrap: "pretty",
          }}
        >
          {role.title}
        </h3>
        <p style={{ margin: 0, fontSize: 14.5, color: "var(--stone-500)" }}>
          {role.period} · {role.place}
        </p>
        <p style={{ margin: 0, fontSize: 15, lineHeight: 1.55, color: "var(--text-body)", textWrap: "pretty" }}>
          {role.summary}
        </p>
        <Highlights items={role.highlights} />
        <div style={{ marginTop: "auto", paddingTop: 20 }}>
          <Tags items={role.tags} />
        </div>
      </div>
    </article>
  );
}
