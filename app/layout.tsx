import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import MouseMoveEffect from "@/components/mouse-move-effect";
import { ThemeProvider } from "@/components/theme/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FJKM Quebec - Church",
  description: "FJKM Quebec",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-background text-foreground antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <MouseMoveEffect />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";
import { ReactNode } from "react";
