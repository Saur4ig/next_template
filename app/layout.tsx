import type { Metadata } from "next";
import { inter } from "./font";
import "./globals.css";

export const metadata: Metadata = {
  title: "Default title for all pages",
  description: "Default description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
