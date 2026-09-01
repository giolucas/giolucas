"use client";

import { ButtonHTMLAttributes, CSSProperties, ReactNode } from "react";

/**
 * Garimpa Drink design system — IconButton.
 * Square/circular control for a single icon. Same variants as Button.
 */

type Variant = "primary" | "secondary" | "ghost" | "night";
type Size = "sm" | "md" | "lg";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  round?: boolean;
  label: string;
  children: ReactNode;
}

const sizes: Record<Size, number> = { sm: 34, md: 44, lg: 54 };

const variants: Record<Variant, CSSProperties> = {
  primary: { background: "var(--brand-primary)", color: "#fff", boxShadow: "var(--shadow-sm)" },
  secondary: { background: "var(--card)", color: "var(--text-strong)", boxShadow: "var(--ring-hairline)" },
  ghost: { background: "transparent", color: "var(--text-body)", boxShadow: "none" },
  night: { background: "rgba(255,255,255,0.10)", color: "var(--text-on-night)", boxShadow: "none" },
};

export default function IconButton({
  variant = "secondary",
  size = "md",
  round = false,
  disabled = false,
  label,
  style = {},
  children,
  onMouseEnter,
  onMouseLeave,
  onMouseDown,
  onMouseUp,
  ...rest
}: IconButtonProps) {
  const dim = sizes[size] ?? sizes.md;
  const v = variants[variant] ?? variants.secondary;

  const base: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: dim,
    height: dim,
    flex: "none",
    borderRadius: round ? "var(--radius-pill)" : "var(--radius-md)",
    border: "1px solid transparent",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : 1,
    transition: "background var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard)",
    ...v,
    ...style,
  };

  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      style={base}
      onMouseEnter={(e) => {
        if (!disabled) {
          if (variant === "primary") e.currentTarget.style.background = "var(--brand-primary-hover)";
          else if (variant === "secondary") e.currentTarget.style.background = "var(--surface-inset)";
          else if (variant === "ghost") e.currentTarget.style.background = "var(--surface-inset)";
          else if (variant === "night") e.currentTarget.style.background = "rgba(255,255,255,0.18)";
        }
        onMouseEnter?.(e);
      }}
      onMouseLeave={(e) => {
        if (!disabled) e.currentTarget.style.background = (v.background as string) ?? "";
        onMouseLeave?.(e);
      }}
      onMouseDown={(e) => {
        if (!disabled) e.currentTarget.style.transform = "scale(0.93)";
        onMouseDown?.(e);
      }}
      onMouseUp={(e) => {
        if (!disabled) e.currentTarget.style.transform = "none";
        onMouseUp?.(e);
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
