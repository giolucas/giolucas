const ICONS: Record<string, string[]> = {
  Produto: ["m21 16-9 5-9-5V8l9-5 9 5z", "m3.3 7.3 8.7 4.8 8.7-4.8", "M12 21v-8.9"],
  Growth: ["M3 17l6-6 4 4 7-7", "M15 8h6v6"],
  Experimentação: ["M10 2v6.5L5.2 17A2 2 0 0 0 7 20h10a2 2 0 0 0 1.8-3L14 8.5V2", "M9 2h6", "M7.5 14h9"],
  Estratégia: [
    "M12 3a9 9 0 1 0 9 9 9 9 0 0 0-9-9z",
    "M12 7.5a4.5 4.5 0 1 0 4.5 4.5A4.5 4.5 0 0 0 12 7.5z",
    "M12 11.4a.6.6 0 1 0 .6.6.6.6 0 0 0-.6-.6z",
  ],
  Liderança: [
    "M16 20v-1.5a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4V20",
    "M9 4.5a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4z",
    "M17 5.2a3.2 3.2 0 0 1 0 6.2",
    "M22 20v-1.5a4 4 0 0 0-3-3.8",
  ],
};

const SPECIALTIES = [
  { titulo: "Produto", texto: "Descoberta, estratégia e desenvolvimento de produtos digitais." },
  { titulo: "Growth", texto: "Aquisição, ativação, retenção e monetização baseados em dados." },
  { titulo: "Experimentação", texto: "Testes, hipóteses e dados para encontrar oportunidades e reduzir riscos." },
  { titulo: "Estratégia", texto: "Alinhamento entre negócio, produto, dados e tecnologia para gerar impacto." },
  { titulo: "Liderança", texto: "Formação de times, processos e cultura voltados a resultados." },
];

function Icon({ paths }: { paths: string[] }) {
  return (
    <svg viewBox="0 0 24 24" width={26} height={26} fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      {paths.map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}

export default function Specialties() {
  return (
    <section id="especialidades" style={{ padding: "clamp(34px,5vw,60px) 0", borderBottom: "1px solid var(--border-hairline)", scrollMarginTop: 84 }}>
      {/* border-bottom kept here since Tools/Education sections follow, unlike the original design where this was the last section before the quote */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
        <span style={{ fontSize: 14, fontWeight: 700, color: "var(--brand-primary)" }}>02</span>
        <span style={{ width: 22, height: 1.4, background: "var(--brand-primary)" }} />
      </div>
      <h2 style={{ margin: "0 0 34px", fontSize: 12.5, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ink)" }}>
        Especialidades
      </h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,190px),1fr))", gap: "clamp(22px,3vw,34px)" }}>
        {SPECIALTIES.map((s) => (
          <div key={s.titulo} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ color: "var(--brand-primary)", height: 26 }}>
              <Icon paths={ICONS[s.titulo]} />
            </div>
            <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: "var(--ink)" }}>{s.titulo}</h3>
            <p style={{ margin: 0, fontSize: 13.8, lineHeight: 1.55, color: "var(--text-muted)", textWrap: "pretty" }}>{s.texto}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
