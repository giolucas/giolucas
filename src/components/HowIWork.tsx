import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import GrainBlock from "@/components/ui/GrainBlock";
import { LINKEDIN_URL_VER_NO_LINKEDIN } from "@/data/links";

export default function HowIWork() {
  return (
    <section style={{ padding: "0 clamp(16px,4vw,56px) clamp(48px,8vw,96px)", maxWidth: 1200, margin: "0 auto" }}>
      <GrainBlock color="var(--night)" radius="var(--radius-xl)" grain={0.18}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: "clamp(24px,4vw,48px)",
            alignItems: "center",
            padding: "clamp(28px,5vw,56px)",
          }}
        >
          <div>
            <Eyebrow tone="onNight" rule>
              Como eu trabalho
            </Eyebrow>
            <h2
              style={{
                margin: "16px 0 12px",
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                fontSize: "clamp(1.75rem,4vw,2.875rem)",
                lineHeight: 1.06,
                letterSpacing: "var(--tracking-display)",
                color: "var(--text-on-night)",
              }}
            >
              Hipótese, teste e <span style={{ fontStyle: "italic", color: "var(--accent-amber)" }}>evidência</span>.
            </h2>
            <p style={{ margin: 0, fontSize: "var(--text-md)", lineHeight: "var(--leading-relaxed)", color: "rgba(243,236,226,0.72)", maxWidth: "44ch" }}>
              AARRR, Bullseye, dual track e cultura de experimentação — aplicados em banking, telecom, educação, SaaS
              e varejo. Times de até 116 pessoas, produtos com parceiros como Vivo, Uber e iFood.
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center" }}>
            <Button href={LINKEDIN_URL_VER_NO_LINKEDIN} target="_blank" rel="noopener noreferrer" variant="night" size="lg">
              Ver no LinkedIn
            </Button>
            {/* TODO: link to the real CV file */}
            <Button
              variant="ghost"
              size="lg"
              style={{ color: "var(--text-on-night)", boxShadow: "inset 0 0 0 1px var(--border-on-night)" }}
            >
              Baixar CV
            </Button>
          </div>
        </div>
      </GrainBlock>
    </section>
  );
}
