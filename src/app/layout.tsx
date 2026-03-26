import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://chatagents.ai"),
  title: {
    default: "ChatAgents AI — Smart Chatbots. Real Results. Zero Effort.",
    template: "%s | ChatAgents AI",
  },
  description:
    "AI chatbots that qualify leads, recover revenue, and handle complex customer tasks — trained on YOUR business, deployed on WhatsApp, your website, and everywhere your customers are.",
  openGraph: {
    title: "ChatAgents AI — Smart Chatbots. Real Results. Zero Effort.",
    description:
      "AI chatbots that qualify leads, recover revenue, and handle complex customer tasks — trained on YOUR business.",
    siteName: "ChatAgents AI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ChatAgents AI — Smart Chatbots. Real Results. Zero Effort.",
    description:
      "AI chatbots that qualify leads, recover revenue, and handle complex customer tasks — trained on YOUR business.",
  },
  other: {
    "theme-color": "#0a0a0a",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} dark antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
