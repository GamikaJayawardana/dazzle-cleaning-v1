import HomeClient from '@/components/HomeClient'; // Import the new client component

// --- METADATA FOR HOMEPAGE (This is a Server Component, so this is allowed) ---
export const metadata = {
  title: "Dazzle Cleaning | Professional House & Commercial Cleaners in Melbourne",
  description: "Top-rated residential and commercial cleaning services in Melbourne. Dazzle Cleaning delivers a spotless finish for homes, offices, and end-of-lease properties.",
  openGraph: {
    title: 'Dazzle Cleaning | Professional Cleaners in Melbourne',
    description: 'Reliable and affordable cleaning services for homes and businesses across Melbourne.',
    url: 'https://www.dazzlecleaning.com.au',
    siteName: 'Dazzle Cleaning',
    images: [
      {
        url: 'https://www.dazzlecleaning.com.au/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_AU',
    type: 'website',
  },
};

// This is now a simple Server Component
export default function Home() {
  return <HomeClient />;
}