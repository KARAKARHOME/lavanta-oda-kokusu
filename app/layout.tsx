import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StructuredData from "./components/StructuredData";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://lavantaodakokusu.com.tr'),
  title: {
    default: "Lavanta Çubuklu Oda Kokusu 100ml - Doğal Bambu Çubuklu",
    template: "%s | Lavanta Çubuklu Oda Kokusu"
  },
  description: "Doğal lavanta esansı ve bambu çubuklar ile hazırlanan 100ml premium oda kokusu. Yaşam alanlarınıza huzur ve ferahlık katar. 3-4 ay kullanım süresi.",
  keywords: ["lavanta oda kokusu", "çubuklu oda kokusu", "bambu çubuklu koku", "lavanta kokusu", "oda parfümü", "ev kokusu", "lavanta esansı", "doğal oda kokusu"],
  authors: [{ name: "Lavanta Çubuklu Oda Kokusu" }],
  creator: "Lavanta Çubuklu Oda Kokusu",
  publisher: "Lavanta Çubuklu Oda Kokusu",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://lavantaodakokusu.com.tr",
    siteName: "Lavanta Çubuklu Oda Kokusu",
    title: "Lavanta Çubuklu Oda Kokusu 100ml - Doğal Bambu Çubuklu",
    description: "Doğal lavanta esansı ve bambu çubuklar ile hazırlanan 100ml premium oda kokusu. 3-4 ay kullanım süresi.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lavanta Çubuklu Oda Kokusu 100ml",
    description: "Doğal lavanta esansı ve bambu çubuklar ile hazırlanan premium oda kokusu.",
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
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${inter.variable} ${playfair.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white">
        <StructuredData />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
