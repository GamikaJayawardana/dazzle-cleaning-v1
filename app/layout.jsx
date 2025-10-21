import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";

// 1. Configure the fonts with the 'swap' display property for performance
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: 'swap', // This tells the browser to show a fallback font while loading
  variable: '--font-montserrat',
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: 'swap', // This prevents the font from blocking the render
  variable: '--font-open-sans',
});

export const metadata = {
  title: "Dazzle Cleaning | Top House & Commercial Cleaners in Melbourne",
  description: "Dazzle Cleaning offers professional and reliable house, end of lease, and commercial office cleaning services across Melbourne. Get a free quote today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* This link helps prioritize the desktop hero image download */}
        <link 
          rel="preload" 
          fetchPriority="high"
          as="image"
          href="/assets/img/hero/bg.png"
          type="image/png"
        />
      </head>
      {/* 2. Apply the font variables directly to the body class */}
      <body
        className={`${montserrat.variable} ${openSans.variable} font-secondary antialiased`}
      >
        {children}
      </body>
    </html>
  );
}