import type { Metadata } from "next";
import { Playfair_Display, Nunito } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Pet Cafe Pune | A Pet Cafe That's Human Friendly",
  description:
    "Pune's first cage-free, leash-free pet cafe in Koregaon Park. Enjoy artisan coffee, gourmet food & a special pet menu while your furry friends roam free. Cafe | Boarding | Grooming | Pet Store | 783+ Adoptions.",
  keywords: [
    "The Pet Cafe Pune",
    "Pet Cafe Pune",
    "Dog Cafe Pune",
    "Pet Friendly Cafe Pune",
    "Koregaon Park Cafe",
    "Pet Boarding Pune",
    "Pet Grooming Pune",
    "Dog Adoption Pune",
    "Cage Free Cafe",
    "Pet Menu Pune",
  ],
  authors: [{ name: "The Pet Cafe Pune" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "The Pet Cafe Pune | A Pet Cafe That's Human Friendly",
    description:
      "Pune's first cage-free, leash-free pet cafe. 783+ adoptions. Cafe, Boarding, Grooming & Pet Store.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Pet Cafe Pune | A Pet Cafe That's Human Friendly",
    description:
      "Pune's first cage-free, leash-free pet cafe. 783+ adoptions. Cafe, Boarding, Grooming & Pet Store.",
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
        className={`${playfair.variable} ${nunito.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
