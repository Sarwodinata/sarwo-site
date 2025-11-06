import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import ThemeProvider from "./theme-provider";
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
        import "./globals.css";
import { ThemeProvider } from "./theme-provider";

export const metadata = {
  title: "Sarwo Dinata",
  description: "Belajar, membangun dan berbagi",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100 transition-colors">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
      </body>
    </html>
  );
}

