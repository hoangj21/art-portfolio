import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { HudFrame } from "@/components/HudFrame";
import { Footer } from "@/components/Footer";
import { BackgroundPatterns } from "@/components/BackgroundPatterns";

const bebasNeue = localFont({
  src: "./fonts/bebas-neue-latin-400-normal.woff2",
  variable: "--font-bebas",
  display: "swap",
  weight: "400",
});

const sairaExtraCondensed = localFont({
  src: [
    { path: "./fonts/saira-extra-condensed-latin-700-normal.woff2", weight: "700" },
    { path: "./fonts/saira-extra-condensed-latin-800-normal.woff2", weight: "800" },
    { path: "./fonts/saira-extra-condensed-latin-900-normal.woff2", weight: "900" },
  ],
  variable: "--font-saira",
  display: "swap",
});

const spaceGrotesk = localFont({
  src: [
    { path: "./fonts/space-grotesk-latin-400-normal.woff2", weight: "400" },
    { path: "./fonts/space-grotesk-latin-500-normal.woff2", weight: "500" },
    { path: "./fonts/space-grotesk-latin-600-normal.woff2", weight: "600" },
    { path: "./fonts/space-grotesk-latin-700-normal.woff2", weight: "700" },
  ],
  variable: "--font-space",
  display: "swap",
});

const shareTechMono = localFont({
  src: "./fonts/share-tech-mono-latin-400-normal.woff2",
  variable: "--font-share",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://artsfromjoanna.com"),
  title: "Joanna Hoang — Art Portfolio",
  description: "Illustration, sequential art, ink, and photography by Joanna Hoang. Portland, OR.",
  keywords: ["illustration", "art", "portfolio", "commissions", "comics", "ink", "photography"],
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Joanna Hoang — Art Portfolio",
    title: "Joanna Hoang — Art Portfolio",
    description: "Illustration, sequential art, ink, and photography by Joanna Hoang. Portland, OR.",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Joanna Hoang — Art Portfolio",
    description: "Illustration, sequential art, ink, and photography by Joanna Hoang. Portland, OR.",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${bebasNeue.variable} ${sairaExtraCondensed.variable} ${spaceGrotesk.variable} ${shareTechMono.variable} font-body text-[15px] leading-relaxed antialiased`}
      >
        <BackgroundPatterns />
        <HudFrame />
        <Navbar />
        <main className="relative z-[1]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
