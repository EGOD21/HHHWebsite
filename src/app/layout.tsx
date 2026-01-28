import type { Metadata } from "next";

import { siteConfig } from "@/config/site";

import "./globals.css";

const baseUrl = "https://www.godwinrepair.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${siteConfig.name} | Handyman Services with Purpose`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "handyman",
    "home repair",
    "Godwin Repair",
    "construction",
    "remodeling",
    "Springfield Missouri handyman",
    "professional handyman",
  ],
  openGraph: {
    title: `${siteConfig.name} | Handyman Services with Purpose`,
    description: siteConfig.description,
    url: baseUrl,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Handyman Services with Purpose`,
    description: siteConfig.description,
  },
  alternates: {
    canonical: baseUrl,
  },
  category: "Home Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-black text-white">
        {children}
      </body>
    </html>
  );
}
