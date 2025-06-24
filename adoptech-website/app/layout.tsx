import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AdopTech GmbH - Lösungen, die nicht mal unsere Eltern wollten",
  description: "Wir bei AdopTech stehen für radikale Innovation, disruptive Denkweisen und den Mut, Projekte umzusetzen, die eigentlich keiner bestellt hat.",
  keywords: ["Innovation", "IT-Lösungen", "Blockchain", "KI", "Satire"],
  authors: [{ name: "AdopTech GmbH" }],
  openGraph: {
    title: "AdopTech GmbH - Lösungen, die nicht mal unsere Eltern wollten",
    description: "Wir bei AdopTech stehen für radikale Innovation, disruptive Denkweisen und den Mut, Projekte umzusetzen, die eigentlich keiner bestellt hat.",
    url: "https://adoptech.de",
    siteName: "AdopTech GmbH",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
