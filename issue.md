# Frontend Framework Integration: Next.js + Tailwind CSS + Shadcn UI

## 1. Objective
Menambahkan layer Front-end ke dalam project menggunakan **Next.js** (App Router), **Tailwind CSS** untuk styling, dan **Shadcn UI** sebagai fondasi component library. Dokumen ini dirancang sebagai panduan high-level yang siap diimplementasikan oleh LLM/developer.

---

## 2. Tech Stack & Dependencies
- **Runtime & Package Manager**: Bun
- **Framework**: Next.js (React 19 / latest stable, App Router)
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer
- **UI Library**: Shadcn UI (Radix UI primitives, `clsx`, `tailwind-merge`, `class-variance-authority`, `lucide-react`)

---

## 3. High-Level Architecture & Directory Structure
Direkomendasikan menggunakan struktur modular (misal: sub-direktori `frontend/` atau terintegrasi rapi) agar tidak terjadi benturan dependency/skrip dengan backend ElysiaJS:

```text
├── frontend/ (atau web/)
│   ├── app/
│   │   ├── layout.tsx         # Root layout (import globals.css, font setup)
│   │   └── page.tsx           # Halaman utama landing / dashboard
│   ├── components/
│   │   └── ui/                # Komponen Shadcn UI (button, card, input, dll.)
│   ├── lib/
│   │   └── utils.ts           # Helper function `cn()` untuk class merging
│   ├── components.json        # Konfigurasi Shadcn UI CLI
│   ├── tailwind.config.ts     # Konfigurasi Tailwind & warna theme Shadcn
│   ├── postcss.config.mjs     # Konfigurasi PostCSS
│   └── package.json           # Frontend dependencies & scripts
├── src/                       # Backend ElysiaJS + Drizzle (eksisting)
└── package.json               # Root scripts untuk menjalankan frontend & backend
```

---

## 4. Implementation Steps

### Langkah 1: Inisialisasi Next.js Project
- Inisialisasi aplikasi Next.js baru menggunakan Bun dengan opsi TypeScript dan App Router diaktifkan.
- Pastikan konfigurasi `tsconfig.json` dan path alias (`@/*`) telah terkonfigurasi dengan baik.

### Langkah 2: Setup Tailwind CSS
- Install dan konfigurasi Tailwind CSS beserta PostCSS.
- Setup file konfigurasi Tailwind (`tailwind.config.ts`) dan file stylesheet global (`globals.css`) dengan Tailwind directives (`@tailwind base; @tailwind components; @tailwind utilities;`).

### Langkah 3: Setup & Inisialisasi Shadcn UI
- Inisialisasi konfigurasi Shadcn UI (`components.json`) dengan style default (misal: New York / Default, tema Slate / Zinc).
- Siapkan utility class merger `cn()` di `lib/utils.ts`.
- Pasang 1–2 komponen dasar Shadcn UI (contoh: `button`, `card`) sebagai pembuktian integrasi.

### Langkah 4: Pembuatan Halaman Tampilan Awal
- Buat tampilan landing/home page sederhana di `app/page.tsx` yang menggunakan komponen Shadcn UI (misal Card dan Button).
- Sediakan placeholder atau mock fetch untuk integrasi ke backend API Elysia (`/health` atau `/users`).

### Langkah 5: Konfigurasi Port & Scripts
- Atur port default frontend (misal port `3001` atau default Next.js `3000`) agar tidak konflik dengan port backend Elysia (jika berjalan bersamaan).
- Tambahkan script kemudahan di root `package.json` untuk menjalankan frontend dev server via Bun (misal: `bun run dev:frontend` atau script dev bersamaan).

---

## 5. Acceptance Criteria
1. Server Next.js dapat dijalankan tanpa error menggunakan runtime Bun.
2. Utility styling Tailwind CSS aktif dan bekerja dengan benar pada browser.
3. Komponen Shadcn UI ter-render sempurna tanpa breaking style atau missing dependencies.
4. Struktur kode modular, bersih, dan mudah dihubungkan dengan API backend.

