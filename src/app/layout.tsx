import type { Metadata } from "next";
import { Amiri, Outfit } from "next/font/google";
import "./globals.css";

const amiri = Amiri({
  variable: "--font-amiri",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cafe Ibrahim | Authentic Irani Cafe in Viman Nagar, Pune — Open 24 Hours",
  description:
    "Cafe Ibrahim — Pune's beloved 24-hour Irani cafe in Viman Nagar. Famous for Irani Chai, Chicken Shawarma, Bun Maska, Kheema Pav, Biryani & more. Late night cravings? We're always open.",
  keywords: [
    "Cafe Ibrahim",
    "Cafe Ibrahim Pune",
    "Irani Cafe Pune",
    "Viman Nagar Cafe",
    "24 Hour Cafe Pune",
    "Late Night Food Pune",
    "Shawarma Pune",
    "Irani Chai Pune",
    "Bun Maska Pune",
    "Kheema Pav Pune",
    "Late Night Cafe Viman Nagar",
  ],
  authors: [{ name: "Cafe Ibrahim" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Cafe Ibrahim | Authentic Irani Cafe — Open 24 Hours",
    description:
      "Pune's beloved 24-hour Irani cafe. Famous for Irani Chai, Shawarma, Bun Maska & more.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cafe Ibrahim | Authentic Irani Cafe — Open 24 Hours",
    description:
      "Pune's beloved 24-hour Irani cafe. Famous for Irani Chai, Shawarma, Bun Maska & more.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${amiri.variable} ${outfit.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
