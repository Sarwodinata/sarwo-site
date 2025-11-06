// src/data/posts.ts
export type Post = {
  slug: string;
  title: string;
  date: string; // ISO: '2025-11-06'
  excerpt: string;
  tags: string[];
  content: string[]; // paragraf
};

export const posts: Post[] = [
  {
    slug: "nextjs-app-router-cepat-ngeh",
    title: "Next.js App Router: Cara Cepat Biar Ngeh",
    date: "2025-11-06",
    excerpt:
      "Ringkasan konsep App Router: folder app, layout, page, route segment, dan metadata—biar langsung paham pola kerjanya.",
    tags: ["Next.js", "Frontend", "Belajar Cepat"],
    content: [
      "App Router pakai folder `app/` sebagai entry. Setiap folder bisa punya `page.tsx` (halaman) dan `layout.tsx` (pembungkus).",
      "Layout bersifat nested. Navbar/Footernya cocok ditaruh di layout tingkat root.",
      "Metadata judul/deskripsi bisa via `export const metadata` atau `generateMetadata` untuk yang dinamis.",
      "Keuntungan: routing jelas, server components lebih hemat, dan kolaborasi rapi."
    ],
  },
  {
    slug: "topsis-singkat-padat",
    title: "TOPSIS Singkat Padat untuk DSS",
    date: "2025-10-20",
    excerpt:
      "Langkah-langkah TOPSIS yang sering kepakai: normalisasi, bobot, solusi ideal, jarak, dan nilai preferensi.",
    tags: ["DSS", "TOPSIS", "Pemodelan"],
    content: [
      "Inti TOPSIS: alternatif terbaik harus paling dekat dengan solusi ideal positif dan paling jauh dari ideal negatif.",
      "Langkah umum: normalisasi matriks, kalikan bobot, tentukan A+ dan A-, hitung jarak D+ dan D-, lalu nilai preferensi.",
      "Tips praktis: simpan bobot dan matriks dalam array 2D, dan verifikasi dengan contoh kecil dulu."
    ],
  },
  {
    slug: "esp32-rfid-tips",
    title: "Tips Ringkas ESP32 + RFID biar Anti Ngelag",
    date: "2025-09-15",
    excerpt:
      "Beberapa trik supaya pembacaan kartu stabil: debounce, cek UID unik, dan beri feedback LED/buzzer.",
    tags: ["ESP32", "RFID", "IoT"],
    content: [
      "Gunakan library yang stabil dan pastikan pin SPI/I2C sesuai board.",
      "Tambahkan jeda kecil (debounce) setelah pembacaan sukses untuk hindari double-read.",
      "Simpan UID yang valid dalam array/list; cocokkan saat tap berikutnya.",
      "Feedback LED/Buzzer penting agar user tahu status sukses/gagal."
    ],
  },
];

// util kecil
export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
