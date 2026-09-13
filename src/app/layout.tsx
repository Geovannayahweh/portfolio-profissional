import type { Metadata, Viewport } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import { I18nProvider } from "@/lib/i18n";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const siteUrl = "https://geovannasoto.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Geovanna Soto | Desenvolvedora",
  description:
    "Portfólio de Geovanna Karolyne Jave Soto — estudante de Sistemas de Informação na PUCPR, com foco em desenvolvimento web: React, Node.js, Python e Java.",
  keywords: [
    "Geovanna Soto",
    "portfólio",
    "desenvolvimento web",
    "front-end",
    "JavaScript",
    "Node.js",
    "Python",
    "Java",
    "React",
    "Sistemas de Informação",
    "PUCPR",
  ],
  authors: [{ name: "Geovanna Karolyne Jave Soto" }],
  openGraph: {
    title: "Geovanna Soto | Desenvolvedora",
    description:
      "Estudante de Sistemas de Informação na PUCPR, construindo aplicações web do front-end ao back-end.",
    url: siteUrl,
    siteName: "Geovanna Soto",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/geovanna.jpg", width: 1000, height: 1000, alt: "Geovanna Soto" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Geovanna Soto | Desenvolvedora",
    description:
      "Estudante de Sistemas de Informação na PUCPR, construindo aplicações web do front-end ao back-end.",
    images: ["/geovanna.jpg"],
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#fffaf8",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${poppins.variable} h-full`}>
      <body className="min-h-full">
        {/* Sem JS as animações de entrada nunca disparam — o conteúdo precisa aparecer mesmo assim. */}
        <noscript>
          <style>{`[style*="opacity:0"]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
