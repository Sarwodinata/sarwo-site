import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ subsets: ["latin"], weight: ["600", "700"], variable: "--font-poppins" });

export const metadata = {
  title: "Sarwo Dinata",
  description: "Belajar, membangun dan berbagi",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className={`${inter.variable} ${poppins.variable} font-sans bg-slate-50 text-slate-900`}>
        <Navbar />
        <main className="pt-20 px-6 min-h-[80vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

