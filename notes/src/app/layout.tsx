import type { Metadata } from "next";
import { Momo_Trust_Display, Momo_Trust_Sans } from "next/font/google";
import "./globals.css";

const momoTrustSans = Momo_Trust_Sans({
  weight: ['200'],
  variable: "--font-momo-trust-sans",
  subsets: ["latin"],
  display: 'swap',
  fallback: [
    'ui-sans-serif',
    'system-ui',
    '-apple-system',
    'Segoe UI',
    'Roboto',
    'Helvetica Neue',
    'Arial',
  ],
  adjustFontFallback: false,
});

const momoTrustDisplay = Momo_Trust_Display({
  weight: '400',
  variable: "--font-momo-trust-display",
  subsets: ["latin"],
  display: 'swap',
  fallback: ['ui-serif', 'Georgia', 'Times New Roman', 'Times', 'serif'],
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "Notes",
  description: "App for notes",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="es">
      <body
        className={`${momoTrustSans.className ?? ''} ${momoTrustSans.variable} ${momoTrustDisplay.className ?? ''} ${momoTrustDisplay.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
