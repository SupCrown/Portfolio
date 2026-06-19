import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Josua KEBAILI — Portfolio",
  description: "Portfolio de Josua KEBAILI, développeur logiciel & IA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-950`}>
        <nav className="sticky top-0 z-50 flex justify-between items-center px-8 py-5 max-w-5xl mx-auto">
          <Link href="/" className="text-xl font-bold tracking-tighter text-white hover:text-indigo-400 transition-colors">
            Josua<span className="text-indigo-500">.</span>
          </Link>
          <ul className="flex gap-6 text-sm font-medium text-neutral-400">
            <li className="hover:text-white transition-colors"><Link href="/">Projets</Link></li>
            <li className="hover:text-white transition-colors"><Link href="/cv">CV</Link></li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
