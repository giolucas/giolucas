export default function Quote() {
  return (
    <figure
      style={{
        position: "relative",
        overflow: "hidden",
        margin: "clamp(34px,5vw,60px) 0 clamp(34px,5vw,58px)",
        background: "var(--tint-magenta)",
        borderRadius: 22,
        padding: "clamp(26px,4vw,46px) clamp(24px,4vw,52px)",
      }}
    >
      <span
        style={{
          position: "absolute",
          right: 18,
          bottom: -34,
          fontFamily: "var(--font-display)",
          fontSize: 150,
          lineHeight: 1,
          color: "rgba(186,25,113,0.16)",
        }}
      >
        ”
      </span>
      <blockquote style={{ position: "relative", margin: 0, display: "flex", gap: 16, alignItems: "flex-start" }}>
        <span style={{ fontFamily: "var(--font-display)", fontSize: 40, lineHeight: 0.7, color: "var(--brand-primary)" }}>“</span>
        <p
          style={{
            margin: 0,
            fontFamily: "var(--font-display)",
            fontSize: "clamp(21px,3.2vw,33px)",
            lineHeight: 1.28,
            color: "var(--ink)",
            textWrap: "pretty",
            maxWidth: "30ch",
          }}
        >
          Um cara nascido no interior com passagens pelo Rio de Janeiro por 6 anos, Floripa, Campinas e morando em São
          Paulo desde 2018. Apaixonado por tecnologia, música brasileira, cinema, coquetelaria e podcasts
        </p>
      </blockquote>
    </figure>
  );
}
