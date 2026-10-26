import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollObserver from "./components/ScrollObserver";

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

export const metadata = {
  title: "Assent Real Estate & Property Management Ltd. | Modern Living & Asset Excellence",
  description:
    "Assent Real Estate & Property Management Ltd. is a premier real estate developer and institutional property management company in Bangladesh, delivering luxury residential towers, commercial complexes, and end-to-end facility solutions.",
  keywords: [
    "Assent Real Estate",
    "Assent Real Estate & Property Management Ltd.",
    "Property Management Bangladesh",
    "Dhaka Real Estate Developer",
    "Assent Royal Heights",
    "Luxury Apartments Dhaka",
    "Commercial Development",
    "Asset Management",
    "Real Estate Bangladesh",
  ],
  authors: [{ name: "Assent Real Estate & Property Management Ltd." }],
  openGraph: {
    title: "Assent Real Estate & Property Management Ltd.",
    description: "Architectural Excellence, Luxury Living & Comprehensive Property Management.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-text">
        <ScrollObserver />
        <Navbar />
        <main className="flex-1 pt-[76px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
