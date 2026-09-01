import type { Metadata } from "next";
import { instrumentSerif, hankenGrotesk } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Giovanni Lucas — Growth, Produto, IA",
  description:
    "Treze anos de carreira trabalhando para impactar empresas com estratégias de growth e produto. Passagens por Superlógica, Stefanini, Zup, Advice, Alura e CRMBonus, e sala de aula na FIAP desde 2020.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${instrumentSerif.variable} ${hankenGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
