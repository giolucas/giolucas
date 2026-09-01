import { CSSProperties, HTMLAttributes, ReactNode } from "react";

/**
 * Garimpa Drink design system — Badge.
 * Small status/label pill. Tones map to brand + status colors.
 */

export type BadgeTone = "magenta" | "cobalt" | "amber" | "rust" | "neutral" | "success" | "danger";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: BadgeTone;
  solid?: boolean;
  size?: "sm" | "md";
  icon?: ReactNode;
}

const tones: Record<BadgeTone, { tint: string; fg: string; solid: string }> = {
  magenta: { tint: "var(--tint-magenta)", fg: "var(--brand-primary)", solid: "var(--brand-primary)" },
  cobalt: { tint: "var(--tint-cobalt)", fg: "var(--accent-cobalt)", solid: "var(--accent-cobalt)" },
  amber: { tint: "var(--tint-amber)", fg: "var(--accent-rust)", solid: "var(--accent-amber)" },
  rust: { tint: "var(--tint-rust)", fg: "var(--accent-rust)", solid: "var(--accent-rust)" },
  neutral: { tint: "var(--surface-inset)", fg: "var(--text-body)", solid: "var(--ink)" },
  success: { tint: "var(--status-success-tint)", fg: "var(--status-success)", solid: "var(--status-success)" },
  danger: { tint: "var(--status-danger-tint)", fg: "var(--status-danger)", solid: "var(--status-danger)" },
};

export default function Badge({
  tone = "magenta",
  solid = false,
  size = "md",
  icon = null,
  style = {},
  children,
  ...rest
}: BadgeProps) {
  const t = tones[tone] ?? tones.magenta;
  const sm = size === "sm";
  const base: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: 5,
    padding: sm ? "2px 8px" : "4px 11px",
    fontFamily: "var(--font-sans)",
    fontSize: sm ? "var(--text-3xs)" : "var(--text-2xs)",
    fontWeight: "var(--weight-bold)",
    letterSpacing: "0.02em",
    lineHeight: 1.4,
    borderRadius: "var(--radius-pill)",
    background: solid ? t.solid : t.tint,
    color: solid ? "#fff" : t.fg,
    whiteSpace: "nowrap",
    ...style,
  };
  return (
    <span style={base} {...rest}>
      {icon}
      {children}
    </span>
  );
}
