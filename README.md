# ElysiaJS + Drizzle ORM + MySQL (Bun)

Project backend API menggunakan Bun, ElysiaJS, Drizzle ORM, dan MySQL.

## Prerequisites
- [Bun](https://bun.sh/) (v1.0+)
- MySQL server (lokal atau remote)

## Getting Started

1. **Install dependencies:**
   ```bash
   bun install
   ```

2. **Konfigurasi Environment:**
   Salin `.env.example` ke `.env` dan sesuaikan kredensial MySQL Anda:
   ```bash
   cp .env.example .env
   ```

3. **Jalankan Database Migration (Drizzle):**
   ```bash
   # Generate migration SQL
   bun run db:generate

   # Push schema langsung ke MySQL
   bun run db:push
   ```

4. **Jalankan Server Development:**
   ```bash
   bun run dev
   ```
   Server akan berjalan di `http://localhost:3000`.

## Endpoints

- `GET /`: Sambutan dan status server
- `GET /health`: Health-check endpoint
- `GET /users`: Mengambil daftar data users dari tabel MySQL via Drizzle ORM

## Scripts

- `bun run dev`: Menjalankan server dalam watch mode (`bun --watch src/index.ts`)
- `bun run start`: Menjalankan server (`bun run src/index.ts`)
- `bun run typecheck`: Menjalankan pengecekan TypeScript (`bun check`)
- `bun run db:generate`: Menghasilkan SQL migration baru berdasarkan `src/db/schema.ts`
- `bun run db:push`: Menyinkronkan skema langsung ke database MySQL
- `bun run db:studio`: Membuka Drizzle Studio untuk visualisasi data
