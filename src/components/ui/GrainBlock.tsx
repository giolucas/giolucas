import { CSSProperties, HTMLAttributes, ReactNode } from "react";

/**
 * Garimpa Drink design system — GrainBlock.
 * A brand color block carrying the signature grain overlay. Use for hero
 * panels, photo placeholders, feature tiles. Children render above the grain.
 */

interface GrainBlockProps extends HTMLAttributes<HTMLDivElement> {
  color?: string;
  radius?: string;
  grain?: number;
  minHeight?: string | number;
  children?: ReactNode;
}

export default function GrainBlock({
  color = "var(--brand-primary)",
  radius = "var(--radius-lg)",
  grain = 0.14,
  minHeight,
  style = {},
  children,
  ...rest
}: GrainBlockProps) {
  const base: CSSProperties = {
    position: "relative",
    isolation: "isolate",
    background: color,
    borderRadius: radius,
    overflow: "hidden",
    minHeight,
    ...style,
  };
  return (
    <div style={base} {...rest}>
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "var(--grain-url)",
          backgroundSize: "160px 160px",
          opacity: grain,
          mixBlendMode: "overlay",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
      <div style={{ position: "relative", zIndex: 2, height: "100%" }}>{children}</div>
    </div>
  );
}
