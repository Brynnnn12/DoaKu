# DoaKu - Aplikasi Doa

DoaKu adalah aplikasi web untuk membaca dan mengelola doa-doa harian. Dibangun dengan React dan Vite untuk performa yang optimal.

## Fitur

- Daftar doa dengan fitur load more
- Detail doa dengan animasi
- Caching API untuk performa yang lebih baik
- Routing dengan lazy loading
- Animasi menggunakan Framer Motion
- Responsive design dengan Tailwind CSS

## Teknologi yang Digunakan

- React (dengan hooks seperti useMemo, useCallback, memo)
- Vite (untuk build dan development)
- React Router DOM (untuk routing)
- Framer Motion (untuk animasi)
- Tailwind CSS (untuk styling)
- Custom hook useCachedFetch untuk caching API

## Cara Menjalankan

1. Install dependencies:

   ```
   npm install
   ```

2. Jalankan development server:

   ```
   npm run dev
   ```

3. Buka browser dan akses `http://localhost:5173`

## Cara Refresh API

Aplikasi menggunakan custom hook `useCachedFetch` untuk caching data API. Untuk refresh data API secara manual:

- Gunakan fungsi `invalidateCache` yang tersedia di hook tersebut.
- Contoh penggunaan di komponen:
  ```javascript
  const { data, loading, error, invalidateCache } = useCachedFetch(url);
  // Panggil invalidateCache() untuk refresh data
  ```

Ini akan menghapus cache dan mengambil data terbaru dari API.

## Struktur Proyek

```
src/
  components/     # Komponen UI
  hooks/          # Custom hooks seperti useCachedFetch
  api/            # Konstanta API
  assets/         # Gambar dan ikon
  App.jsx         # Komponen utama
  main.jsx        # Entry point
```

## Lisensi

Proyek ini dibuat untuk tujuan pembelajaran.
