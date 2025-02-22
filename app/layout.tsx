import "./globals.css";
import type { ReactNode } from "react";
import { Noto_Sans } from "next/font/google";
import type { Metadata } from "next";

import MouseMoveEffect from "@/components/ui/mouse-move-effect";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import { Bg } from "@/components/ui/bg";

const font = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FJKM Quebec - Church",
  description: "FJKM Quebec",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${font.className} bg-background text-foreground antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <MouseMoveEffect />
          <div className="relative min-h-screen">
            <Bg />
            <div className="relative z-10">
              <Navbar />
              {children}
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
