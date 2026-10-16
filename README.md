# Fullstack Workspace: Next.js + ElysiaJS + Drizzle ORM + MySQL (Bun)

Arsitektur aplikasi fullstack modern dengan runtime Bun:
- **Frontend**: Next.js 16 (App Router), Tailwind CSS v4, Shadcn UI (`frontend/`)
- **Backend**: ElysiaJS, Drizzle ORM, MySQL driver `mysql2` (`src/`)

## Prerequisites
- [Bun](https://bun.sh/) (v1.0+)
- MySQL server (lokal atau remote)

---

## Quick Start

### 1. Install Dependencies
```bash
# Install backend dependencies
bun install

# Install frontend dependencies
cd frontend && bun install && cd ..
```

### 2. Konfigurasi Database Backend
Salin `.env.example` ke `.env` dan sesuaikan kredensial MySQL Anda:
```bash
cp .env.example .env
```

Jalankan migrasi database via Drizzle:
```bash
# Generate migration SQL
bun run db:generate

# Push skema langsung ke MySQL
bun run db:push
```

### 3. Jalankan Aplikasi Development

- **Backend Server (ElysiaJS)**:
  ```bash
  bun run dev:backend
  ```
  Berjalan di `http://localhost:3000`.

- **Frontend Server (Next.js)**:
  ```bash
  bun run dev:frontend
  ```
  Berjalan di `http://localhost:3001`.

---

## Struktur Direktori

```text
├── frontend/                  # Next.js App Router (Port 3001)
│   ├── app/                   # App routes & global styles
│   ├── components/ui/         # Shadcn UI components (Button, Card, dll.)
│   ├── lib/                   # Utility functions (cn helper)
│   └── components.json        # Konfigurasi Shadcn UI
├── src/                       # Backend ElysiaJS (Port 3000)
│   ├── db/                    # Drizzle connection & schema
│   └── index.ts               # Elysia server entrypoint
├── drizzle/                   # Output file migration SQL
├── drizzle.config.ts          # Konfigurasi Drizzle Kit untuk MySQL
├── .env.example               # Template environment backend
└── package.json               # Root scripts
```

---

## API Endpoints (Backend)
- `GET /`: Sambutan dan status server
- `GET /health`: Health-check endpoint
- `GET /users`: Mengambil daftar data users dari tabel MySQL via Drizzle ORM

---

## Root Scripts
- `bun run dev:backend`: Menjalankan server backend dalam watch mode
- `bun run dev:frontend`: Menjalankan server frontend Next.js di port 3001
- `bun run build:frontend`: Menjalankan production build untuk frontend
- `bun run typecheck`: Menjalankan pengecekan TypeScript backend (`bun check`)
- `bun run db:generate`: Menghasilkan SQL migration baru via Drizzle Kit
- `bun run db:push`: Menyinkronkan skema langsung ke database MySQL
