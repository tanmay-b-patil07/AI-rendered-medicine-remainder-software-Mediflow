import "./globals.css";
import type { Metadata } from "next";
import { Manrope, Fraunces } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces" });

export const metadata: Metadata = {
  title: "MediFlow | Never Miss Your Medicine Again",
  description: "Modern medicine reminders, adherence insights, and family medication management."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${fraunces.variable}`}>
      <body className="font-[var(--font-manrope)] antialiased">
        {children}
      </body>
    </html>
  );
}
