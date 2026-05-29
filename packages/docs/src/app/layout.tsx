import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";
import "./globals.css";

export const metadata: Metadata = {
  title: "orbit-ui — Glassmorphic React Components",
  description: "Beautiful, glassmorphic React component library with customizable gradient effects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <Navbar />
        <Sidebar />
        <main className="ml-64 mt-16 min-h-[calc(100vh-4rem)]">
          {children}
        </main>
      </body>
    </html>
  );
}
