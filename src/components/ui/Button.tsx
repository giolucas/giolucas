"use client";

import { ButtonHTMLAttributes, CSSProperties, ReactNode } from "react";

/**
 * Garimpa Drink design system — Button.
 * Primary actions use the magenta signature; secondary is a hairline-outlined
 * paper button; ghost is text-only; "night" inverts for dark sections.
 */

type Variant = "primary" | "secondary" | "ghost" | "night";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  fullWidth?: boolean;
}

const sizes: Record<Size, { fontSize: string; padding: string; height: number; gap: number; radius: string }> = {
  sm: { fontSize: "var(--text-xs)", padding: "0 14px", height: 34, gap: 7, radius: "var(--radius-sm)" },
  md: { fontSize: "var(--text-sm)", padding: "0 20px", height: 44, gap: 9, radius: "var(--radius-md)" },
  lg: { fontSize: "var(--text-md)", padding: "0 28px", height: 54, gap: 10, radius: "var(--radius-md)" },
};

const variants: Record<Variant, CSSProperties> = {
  primary: { background: "var(--brand-primary)", color: "var(--brand-on-primary)", boxShadow: "var(--shadow-sm)", border: "1px solid transparent" },
  secondary: { background: "var(--card)", color: "var(--text-strong)", boxShadow: "var(--ring-hairline)", border: "1px solid transparent" },
  ghost: { background: "transparent", color: "var(--brand-primary)", boxShadow: "none", border: "1px solid transparent" },
  night: { background: "var(--text-on-night)", color: "var(--ink)", boxShadow: "none", border: "1px solid transparent" },
};

export default function Button({
  variant = "primary",
  size = "md",
  iconLeft = null,
  iconRight = null,
  fullWidth = false,
  disabled = false,
  type = "button",
  style = {},
  children,
  onMouseEnter,
  onMouseLeave,
  onMouseDown,
  onMouseUp,
  ...rest
}: ButtonProps) {
  const s = sizes[size] ?? sizes.md;
  const v = variants[variant] ?? variants.primary;

  const base: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: s.gap,
    height: s.height,
    padding: s.padding,
    width: fullWidth ? "100%" : "auto",
    fontFamily: "var(--font-sans)",
    fontSize: s.fontSize,
    fontWeight: "var(--weight-semibold)",
    letterSpacing: "0.01em",
    lineHeight: 1,
    borderRadius: s.radius,
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : 1,
    transition:
      "background var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)",
    WebkitTapHighlightColor: "transparent",
    ...v,
    ...style,
  };

  return (
    <button
      type={type}
      disabled={disabled}
      style={base}
      onMouseEnter={(e) => {
        if (!disabled) {
          if (variant === "primary") e.currentTarget.style.background = "var(--brand-primary-hover)";
          else if (variant === "secondary") e.currentTarget.style.background = "var(--surface-inset)";
          else if (variant === "ghost") e.currentTarget.style.background = "var(--tint-magenta)";
          else if (variant === "night") e.currentTarget.style.background = "#ffffff";
        }
        onMouseEnter?.(e);
      }}
      onMouseLeave={(e) => {
        if (!disabled) {
          e.currentTarget.style.background = (v.background as string) ?? "";
          e.currentTarget.style.transform = "none";
        }
        onMouseLeave?.(e);
      }}
      onMouseDown={(e) => {
        if (!disabled) {
          e.currentTarget.style.transform = "translateY(1px) scale(0.99)";
          if (variant === "primary") e.currentTarget.style.background = "var(--brand-primary-press)";
        }
        onMouseDown?.(e);
      }}
      onMouseUp={(e) => {
        if (!disabled) {
          e.currentTarget.style.transform = "none";
          if (variant === "primary") e.currentTarget.style.background = "var(--brand-primary-hover)";
        }
        onMouseUp?.(e);
      }}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
