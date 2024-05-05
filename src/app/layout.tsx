import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  title: "Todos pelo RS",
  description:
    "Saiba como ajudar as vítimas das enchentes no Rio Grande do Sul",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} flex flex-col min-h-screen text-pretty`}>
        <header></header>
        {children}
        <footer className="p-6 text-center">
          <p>
            Desenvolvido com ❤️ por{" "}
            <a
              className="font-bold hover:underline underline-offset-4"
              href="https://www.marcelopereira.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Marcelo Pereira
            </a>
          </p>
        </footer>
      </body>
    </html>
  );
}
