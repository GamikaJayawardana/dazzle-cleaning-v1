import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", ],
});


export const metadata = {
  title: "Dazzle Cleaning | Top House & Commercial Cleaners in Melbourne",
  description: "Dazzle Cleaning offers professional and reliable house, end of lease, and commercial office cleaning services across Melbourne. Get a free quote today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ADD THIS LINK TAG to prioritize the hero image */}
        <link 
          rel="preload" 
          fetchPriority="high"
          as="image"
          href="/assets/img/hero/bg.png"
          type="image/png"
        />
      </head>
      <body
        className={`${montserrat.variable} ${openSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
