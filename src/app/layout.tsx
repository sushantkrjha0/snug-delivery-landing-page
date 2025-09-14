import type { Metadata } from "next";
import "./globals.css";
import { rosemartin, neue_regrade } from './fonts';

export const metadata: Metadata = {
  title: "Snug Soft Furnishings | Custom Curtains, Blinds, Wallpapers & Upholstery in Bangalore",
  description: "Transform your home with Snug's premium soft furnishings. Custom curtains, blinds, wallpapers, and upholstery crafted with love in Bangalore. Experience comfort like never before.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${rosemartin.variable} ${neue_regrade.variable}`}>
      <body className="font-neue-regrade min-h-screen">{children}</body>
    </html>
  );
}
