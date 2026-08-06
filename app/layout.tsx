import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host");
  const protocol = requestHeaders.get("x-forwarded-proto") ?? "https";
  const origin = host
    ? `${protocol}://${host}`
    : "https://pile-inspection-3d-260988.poreddyjeevanreddy.chatgpt.site";
  const socialImage = new URL("/og.png", origin).toString();

  return {
    title: "STS Playground | Pile Inspection Portal",
    description:
      "Upload structural plans, mark pile locations and record field inspection data.",
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
    },
    openGraph: {
      title: "STS Playground | Pile Inspection Portal",
      description:
        "Upload structural plans, mark pile locations and record field inspection data.",
      images: [{ url: socialImage, width: 1536, height: 1024 }],
    },
    twitter: {
      card: "summary_large_image",
      title: "STS Playground | Pile Inspection Portal",
      description:
        "Upload structural plans, mark pile locations and record field inspection data.",
      images: [socialImage],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
