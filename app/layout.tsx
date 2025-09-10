import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/hooks/LanguageContext";
import { ThemeProvider } from "@/hooks/ThemeContext";
import { Analytics } from "@vercel/analytics/next"
import { headers } from "next/headers"
import type { Language } from "@/lib/data"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Francisco Banquez - Portfolio",
  description: "Portfolio of Francisco Banquez, a software engineer specializing in web development.",
};

// Function to detect language from headers
async function getInitialLanguage(): Promise<Language> {
  const headersList = await headers()
  const acceptLanguage = headersList.get("accept-language") || ""
  
  if (acceptLanguage.includes("en")) return "en"
  if (acceptLanguage.includes("pt")) return "pt"
  return "es" // default
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialLanguage = await getInitialLanguage()

  return (
    <html lang={initialLanguage} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics />
        <ThemeProvider>
          <LanguageProvider initialLanguage={initialLanguage}>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
