import { Hanken_Grotesk, Instrument_Serif } from "next/font/google";

// Garimpa Drink design system: Instrument Serif (display) + Hanken Grotesk (text/UI).
export const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-hanken-grotesk",
  display: "swap",
});
