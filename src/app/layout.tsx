import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Al Jawahara Dental Clinic Ajman | Premium Dental Care",
  description:
    "Experience premium dental care at Al Jawahara Dental Clinic in Ajman. We offer cosmetic dentistry, orthodontics, implants, and general dentistry led by expert clinical specialists.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>{children}</body>
    </html>
  );
}
