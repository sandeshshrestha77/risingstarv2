import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://sikkimrisingstar.com'),
  title: {
    template: '%s | Sikkim Rising Star',
    default: 'Sikkim Rising Star: Premier Talent Hunt Competition',
  },
  description: 'Join Sikkim\'s biggest talent hunt competition. Showcase your skills in singing, dancing, acting & more. Register now for Season 4 with prizes worth ₹2,00,000.',
  keywords: ['talent hunt', 'sikkim', 'singing competition', 'dance competition', 'performing arts', 'talent show'],
  authors: [{ name: 'Sikkim Rising Star Team' }],
  creator: 'Sikkim Rising Star',
  publisher: 'Sikkim Rising Star',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://sikkimrisingstar.com',
    title: 'Sikkim Rising Star: Premier Talent Hunt Competition',
    description: 'Join Sikkim\'s biggest talent hunt competition. Showcase your skills in singing, dancing, acting & more. Register now for Season 4.',
    siteName: 'Sikkim Rising Star',
    images: [{
      url: '/s4 main.jpg',
      width: 1200,
      height: 630,
      alt: 'Sikkim Rising Star Season 4 - Talent Hunt Competition Featuring Singing, Dancing, and More',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sikkim Rising Star: Premier Talent Hunt Competition',
    description: 'Join Sikkim\'s biggest talent hunt competition. Showcase your skills in singing, dancing, acting & more. Register now for Season 4.',
    images: ['/s4 main.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification_token',
  },
  alternates: {
    canonical: 'https://sikkimrisingstar.com',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  appleWebApp: {
    title: 'Sikkim Rising Star',
    statusBarStyle: 'default',
    capable: true,
  },
};

export const viewport = {
  initialScale: 1,
  maximumScale: 1,
  userScalable: true,
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 pt-20">{children}</main>
            <Footer />
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}