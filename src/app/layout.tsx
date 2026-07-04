import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EasyAI Hub",
  description: "Premium AI Prompt & Tools Hub",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}