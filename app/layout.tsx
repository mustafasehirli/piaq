import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Suspense } from "react";
import localFont from "next/font/local";
import { AppShell } from "./AppShell";
import "./globals.css";

const archivo = localFont({
  src: "../public/fonts/Archivo/Archivo-VariableFont_wdth,wght.ttf",
  variable: "--font-archivo",
  display: "swap"
});

const caveat = localFont({
  src: "../public/fonts/Caveat/Caveat-VariableFont_wght.ttf",
  variable: "--font-caveat",
  display: "swap"
});

const geist = localFont({
  src: "../public/fonts/Geist/Geist-VariableFont_wght.ttf",
  variable: "--font-geist",
  display: "swap"
});

const inter = localFont({
  src: "../public/fonts/Inter/Inter-VariableFont_opsz,wght.ttf",
  variable: "--font-inter",
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
    <html lang="tr" suppressHydrationWarning className={`${archivo.variable} ${caveat.variable} ${geist.variable} ${inter.variable}`}>
      <body>
        <Suspense fallback={null}>
          <AppShell>
            {children}
          </AppShell>
        </Suspense>
      </body>
    </html>
  );
}
