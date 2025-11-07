import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Sarwo Site",
  description: "Simple & tegas",
};

export default function RootLayout({ children }) {
  return (
<html lang="id"suppressHydrationWarning>
<head>
  <script
    dangerouslySetInnerHTML={{
      __html: `
      (function () {
        try {
          var t = localStorage.getItem('theme');
          var m = localStorage.getItem('mood') || 'tenang';
          if (t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
          document.documentElement.setAttribute('data-mood', m);
        } catch (e) {}
      })();
      `
    }}
  />
</head>
      
      <body className="min-h-dvh bg-[var(--bg)] text-[var(--fg)]">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
