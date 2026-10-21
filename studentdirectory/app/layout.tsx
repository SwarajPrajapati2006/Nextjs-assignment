import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Campus Directory",
  description: "Student Directory and Academic Portal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#1a120b] text-[#f5ede6] min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-1 max-w-6xl w-full mx-auto p-4 md:p-6">
          {children}
        </main>
      </body>
    </html>
  );
}
