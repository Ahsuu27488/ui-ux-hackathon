import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "@/components/Footer";
import CartProviderWrapper from "./providers/CartProviderWrapper";

// Local fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap", // Improves font rendering
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

// Google Fonts
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Furniro",
  description: "Best Furniture Shopping App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Combine all font classes for better readability
  const fontClasses = `
    ${geistSans.variable} 
    ${geistMono.variable} 
    ${poppins.variable} 
    ${montserrat.variable}
    antialiased
  `;

  return (
    <html lang="en">
      <body className={fontClasses}>
        <CartProviderWrapper>
          <Header />
          {children} 
          <Footer />
        </CartProviderWrapper>
      </body>
    </html>
  );
}
