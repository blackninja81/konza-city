import localFont from "next/font/local";
import "./globals.css";
import Layout from "@/components/layout/Layout";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Home | Konza City",
  description:
    "Konza Technopolis, often referred to as Konza City, is a cutting-edge smart city project located in Kenya, designed to be a hub for technology, innovation, and business. Strategically positioned 60 kilometers southeast of Nairobi, Konza City is a key pillar in Kenya's Vision 2030 development plan. It aims to attract tech companies, investors, and startups by offering world-class infrastructure, research facilities, data centers, and educational institutions. Dubbed Silicon Savannah, Konza City aspires to foster economic growth through innovation in ICT, life sciences, and green technologies while providing sustainable urban living.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Layout>
        {children}
        </Layout>
      </body>
    </html>
  );
}
