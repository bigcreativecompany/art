import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import ThemeToggle from "@/components/ui/ThemeToggle";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DisplayCard | Art Portfolio",
  description: "Art Portfolio Display Component",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={geist.className}>
        <ThemeProvider>
          <main className="min-h-screen bg-white dark:bg-neutral-900 transition-colors duration-300">
            <ThemeToggle />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
