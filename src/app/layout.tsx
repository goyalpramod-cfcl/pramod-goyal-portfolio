import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { siteContent } from "@/data/siteContent";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: siteContent.seo.pageTitle,
  description: siteContent.seo.metaDescription,
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: siteContent.seo.pageTitle,
    description: siteContent.seo.metaDescription,
    url: siteContent.seo.ogUrl,
    siteName: siteContent.identity.fullName,
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "/images/pramod-goyal-studio.jpg",
        width: 1200,
        height: 630,
        alt: siteContent.identity.headshotAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteContent.seo.pageTitle,
    description: siteContent.seo.metaDescription,
    images: ["/images/pramod-goyal-studio.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable}`}>
      <body className="font-sans bg-ivory text-charcoal antialiased selection:bg-forest selection:text-ivory">
        {children}
      </body>
    </html>
  );
}
