import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["400", "600", "700", '900'] });

export const metadata: Metadata = {
  generator: "Next.js",
  applicationName: "Todos pelo RS",
  category: "communication",
  authors: [{ name: "Marcelo Pereira", url: "https://marcelopereira.dev" }],
  creator: "Marcelo Pereira",
  title: "Todos pelo RS",
  description:
    "Saiba como ajudar as vítimas das enchentes no Rio Grande do Sul",
  metadataBase: new URL("https://todospelors.com.br"),
  openGraph: {
    type: "website",
    countryName: "Brasil",
    url: "https://todospelors.com.br",
    locale: "pt_br",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${inter.className} flex flex-col min-h-screen text-pretty`}
      >
        <header className="px-6 pt-8 lg:pt-12 lg:mb-12">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-black leading-tight mb-4">
              Todos pelo RS
            </h1>
            <p className="text-xl lg:text-3xl">
              Saiba como ajudar as vítimas das enchentes no{" "}
              <strong>Rio Grande do Sul</strong>.
            </p>
          </div>
        </header>

        <main className="flex-1">{children}</main>

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
