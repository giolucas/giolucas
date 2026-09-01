import type { Metadata } from "next";
import { instrumentSerif, hankenGrotesk } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Giovanni Lucas — Growth, Produto, IA",
  description:
    "Dez anos construindo growth e produto: de primeiro growth hacker a head de produto. Passagens por Superlógica, Stefanini, Zup, Advice, Alura e CRMBonus, e sala de aula na FIAP desde 2020.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${instrumentSerif.variable} ${hankenGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
