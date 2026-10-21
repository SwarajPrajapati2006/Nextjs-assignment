import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "LearnSpace - Curriculum Directory",
  description: "Disciplined academic minimalist curriculum engine.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-1 max-w-6xl w-full mx-auto p-4 md:p-6">
          {children}
        </main>
        <footer className="border-t border-white py-6 mt-12 bg-black">
          <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 gap-4">
            <div>&copy; 2025 LearnSpace Inc. Disciplined academic minimalist curriculum engine.</div>
            <div className="flex gap-4">
              <span>Documentation</span>
              <span>Curriculum Index</span>
              <span>Privacy</span>
              <span>Terms</span>
              <span>System Status</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
