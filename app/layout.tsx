import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://eldora.app";
const title = "Eldora - Elderly care, made calmer";
const description =
  "Eldora helps families monitor elderly care through safety alerts, DoraBot device status, wellness summaries, and calm caregiver updates.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Eldora",
  },
  description,
  applicationName: "Eldora",
  keywords: [
    "Eldora",
    "elderly care app",
    "caregiver app",
    "fall alerts",
    "family care",
    "DoraBot",
    "DoraShield",
    "wellness monitoring",
  ],
  authors: [{ name: "Eldora" }],
  creator: "Eldora",
  publisher: "Eldora",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Eldora",
    title,
    description,
    images: [
      {
        url: "/mockups/screen-1.jpg",
        width: 1080,
        height: 2400,
        alt: "Eldora mobile app dashboard preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/mockups/screen-1.jpg"],
  },
  icons: {
    icon: "/brand/eldora_logo.png",
    apple: "/brand/eldora_logo.png",
  },
  category: "healthcare",
};

export const viewport: Viewport = {
  themeColor: "#F6F1EC",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
