import type { Metadata } from "next";
import { instrumentSerif, hankenGrotesk } from "./fonts";
import "./globals.css";

const title = "Giovanni Lucas — Growth, Produto, IA";
const description =
  "Transformo problemas de negócio em produtos e crescimento. 13 anos entre startups e corporações, criando valor com estratégia, experimentação e liderança. Passagens por Superlógica, Stefanini, Zup, Advice, Alura e CRMBonus.";

export const metadata: Metadata = {
  metadataBase: new URL("https://giovannilucas.com.br"),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Giovanni Lucas",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Giovanni Lucas — Growth, Produto, IA" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${instrumentSerif.variable} ${hankenGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
