import Eyebrow from "@/components/ui/Eyebrow";

export default function Hero() {
  return (
    <section
      style={{
        padding: "clamp(36px,7vw,84px) clamp(16px,4vw,56px) 0",
        maxWidth: 1200,
        margin: "0 auto",
      }}
    >
      <Eyebrow rule>Carreira consolidada em startups e corporações</Eyebrow>

      <p
        style={{
          margin: "16px 0 0",
          fontFamily: "var(--font-display)",
          fontWeight: 400,
          fontSize: "clamp(1.15rem,2.4vw,1.5rem)",
          letterSpacing: "var(--tracking-display)",
          color: "var(--text-strong)",
        }}
      >
        Giovanni<span style={{ fontStyle: "italic", color: "var(--brand-primary)" }}> Lucas</span>
      </p>

      <h1
        style={{
          margin: "18px 0 0",
          fontFamily: "var(--font-display)",
          fontWeight: 400,
          fontSize: "clamp(2.25rem,7.4vw,4.6rem)",
          lineHeight: 1.03,
          letterSpacing: "var(--tracking-display)",
          color: "var(--text-strong)",
          textWrap: "pretty",
          maxWidth: "20ch",
        }}
      >
        Treze anos de carreira
      </h1>
      <p
        style={{
          margin: "8px 0 0",
          fontFamily: "var(--font-display)",
          fontWeight: 400,
          fontSize: "clamp(2.25rem,7.4vw,4.6rem)",
          lineHeight: 1.03,
          letterSpacing: "var(--tracking-display)",
          color: "var(--text-faint)",
          textWrap: "pretty",
          maxWidth: "22ch",
        }}
      >
        trabalhando para impactar empresas com estratégias de growth e produto.
      </p>
      <p
        style={{
          margin: "clamp(20px,3vw,28px) 0 0",
          fontSize: "var(--text-md)",
          lineHeight: "var(--leading-relaxed)",
          color: "var(--text-body)",
          maxWidth: "60ch",
        }}
      >
        Experimentação, métricas e gestão de times. Passagens por Superlógica, Stefanini, Zup, Advice, Alura e
        CRMBonus — atuando também como professor universitário desde 2020.
      </p>
      <a
        href="#trajetoria"
        className="link-underline"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 12,
          marginTop: "clamp(24px,4vw,40px)",
          paddingBottom: 6,
          fontSize: "var(--text-md)",
          fontWeight: "var(--weight-medium)",
        }}
      >
        Ver trajetória completa <span style={{ fontSize: "1.1em" }}>→</span>
      </a>
    </section>
  );
}
