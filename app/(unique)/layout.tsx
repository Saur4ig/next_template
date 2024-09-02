import { ReactNode } from "react";
import { inter } from "../font";

interface RootLayoutProps {
  children: ReactNode;
}

export default function UniquePagesLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${inter.className}`} data-theme="light">
        <main>{children}</main>
      </body>
    </html>
  );
}
