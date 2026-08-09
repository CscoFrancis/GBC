import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { TopBar } from "@/components/layout/TopBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { getSiteSettings, getNavigation } from "@/lib/data";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Grace Fellowship Church",
  description:
    "Grace Fellowship Church has been a beacon of hope in our community since 1982 — a diverse, Spirit-led congregation in Westlands, Nairobi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = getSiteSettings();
  const navigation = getNavigation();

  return (
    <html lang="en" data-theme="light">
      <body className={`${cormorant.variable} ${dmSans.variable} antialiased`}>
        <ThemeProvider>
          <TopBar text={settings.topbar} />
          <Navbar
            churchName={settings.churchName}
            churchSub={settings.churchSub}
            navigation={navigation}
          />
          <main>{children}</main>
          <Footer settings={settings} navigation={navigation} />
        </ThemeProvider>
      </body>
    </html>
  );
}
