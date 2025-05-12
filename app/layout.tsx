import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { RootLayout as Layout } from "@/components/layout/root-layout";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Next Stack Template",
  description:
    "A modern, responsive web application template built with Next.js",
  keywords: ["Next.js", "React", "TypeScript", "Web Development", "Template"],
  authors: [{ name: "Next Stack Team" }],
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/icon.png", sizes: "192x192", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.json",
  themeColor: "#000000",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Next Stack",
    startupImage: ["/icon.png"],
  },
  applicationName: "Next Stack Template",
  other: {
    "mobile-web-app-capable": "yes",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nextstack.com",
    title: "Next Stack Template",
    description:
      "A modern, responsive web application template built with Next.js",
    siteName: "Next Stack Template",
  },
  twitter: {
    card: "summary_large_image",
    title: "Next Stack Template",
    description:
      "A modern, responsive web application template built with Next.js",
    creator: "@nextstack",
    images: ["/icon.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}
