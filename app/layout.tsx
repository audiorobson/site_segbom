import type { Metadata } from "next";
import "./globals.css";
import { Footer, Header } from "@/components/site-shell";

export const metadata: Metadata = {
  title: {
    default: "Segbom Corretora de Seguros",
    template: "%s | Segbom",
  },
  description:
    "Proteção personalizada para sua vida, sua família, seu patrimônio e sua empresa.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <a className="skip-link" href="#conteudo">
          Ir para o conteúdo
        </a>
        <Header />
        <main id="conteudo">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
