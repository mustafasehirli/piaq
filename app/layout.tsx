import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Archivo, DM_Sans, Geist, Sora } from "next/font/google";
import { AppShell } from "./AppShell";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin", "latin-ext"],
  variable: "--font-archivo",
  display: "swap"
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap"
});

const sora = Sora({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sora",
  display: "swap"
});

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-dm-sans",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Piaq",
  description: "Dijital ajans yönetim platformu",
  icons: {
    icon: "/Logo.png",
    apple: "/Logo.png"
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="tr" suppressHydrationWarning className={`${archivo.variable} ${geist.variable} ${sora.variable} ${dmSans.variable}`}>
      <body>
        <AppShell>
          {children}
        </AppShell>
      </body>
    </html>
  );
}
