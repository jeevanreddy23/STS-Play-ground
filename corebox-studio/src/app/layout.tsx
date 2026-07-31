import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Corebox Studio — defensible core intelligence",
  description: "Local-first 3D core logging, defect review, RQD and AGS-oriented issue workflow.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
