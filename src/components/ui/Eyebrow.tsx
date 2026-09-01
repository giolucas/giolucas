import { CSSProperties, HTMLAttributes } from "react";

/**
 * Garimpa Drink design system — Eyebrow.
 * Uppercase tracked kicker label, optionally with a leading rule.
 */

type Tone = "magenta" | "ink" | "muted" | "onNight";

interface EyebrowProps extends HTMLAttributes<HTMLSpanElement> {
  rule?: boolean;
  tone?: Tone;
}

const colors: Record<Tone, string> = {
  magenta: "var(--brand-primary)",
  ink: "var(--text-strong)",
  muted: "var(--text-muted)",
  onNight: "var(--text-on-night)",
};

export default function Eyebrow({ rule = false, tone = "magenta", style = {}, children, ...rest }: EyebrowProps) {
  const color = colors[tone] ?? colors.magenta;
  const base: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    fontFamily: "var(--font-sans)",
    fontSize: "var(--text-2xs)",
    fontWeight: "var(--weight-bold)",
    textTransform: "uppercase",
    letterSpacing: "var(--tracking-label)",
    color,
    ...style,
  };
  return (
    <span style={base} {...rest}>
      {rule && <span style={{ width: 26, height: 1, background: "currentColor", opacity: 0.7 }} />}
      {children}
    </span>
  );
}
