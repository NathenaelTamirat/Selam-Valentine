import type { Metadata, Viewport } from "next";
import { Dancing_Script, Quicksand } from "next/font/google";

import "./globals.css";

const _dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-serif",
});
const _quicksand = Quicksand({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Will You Be My Valentine?",
  description: "A special question for someone special",
};

export const viewport: Viewport = {
  themeColor: "#e0245e",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
