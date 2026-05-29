import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cafe Coffee Treat | Great Food, Great Vibes, Great Prices",
  description:
    "Cafe Coffee Treat (CCT) — Your favourite hangout spot near Wadia College, Pune. Budget-friendly pizza, pasta, burgers, coffee, shakes & more. Private seating, birthday celebrations, home delivery available.",
  keywords: [
    "Cafe Coffee Treat",
    "CCT Cafe",
    "Budget Cafe Pune",
    "Wadia College Cafe",
    "Pizza Pune",
    "Burger Pune",
    "Coffee Shop Pune",
    "Student Cafe Pune",
    "Bund Garden Road Cafe",
    "Birthday Party Cafe Pune",
  ],
  authors: [{ name: "Cafe Coffee Treat" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Cafe Coffee Treat | Great Food, Great Vibes, Great Prices",
    description:
      "Your favourite hangout spot near Wadia College, Pune. Budget-friendly pizza, pasta, burgers, coffee, shakes & more.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cafe Coffee Treat | Great Food, Great Vibes, Great Prices",
    description:
      "Your favourite hangout spot near Wadia College, Pune. Budget-friendly pizza, pasta, burgers, coffee, shakes & more.",
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
        className={`${outfit.variable} ${inter.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
