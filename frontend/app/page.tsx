import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 flex flex-col items-center justify-center p-6">
      <main className="w-full max-w-4xl space-y-8">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200">
            Next.js + Tailwind CSS + Shadcn UI
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Fullstack Workspace
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            A modern architecture combining a Next.js App Router frontend with an
            ElysiaJS + Drizzle ORM + MySQL backend powered by Bun.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Frontend Card */}
          <Card className="border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <span>⚡</span> Frontend Stack
              </CardTitle>
              <CardDescription>
                Client & Server Component architecture
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 pb-2">
                <span className="font-medium text-zinc-900 dark:text-zinc-100">
                  Framework
                </span>
                <span>Next.js 16 (App Router)</span>
              </div>
              <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 pb-2">
                <span className="font-medium text-zinc-900 dark:text-zinc-100">
                  Styling
                </span>
                <span>Tailwind CSS v4</span>
              </div>
              <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 pb-2">
                <span className="font-medium text-zinc-900 dark:text-zinc-100">
                  Components
                </span>
                <span>Shadcn UI</span>
              </div>
              <div className="flex items-center justify-between pt-1">
                <span className="font-medium text-zinc-900 dark:text-zinc-100">
                  Runtime
                </span>
                <span>Bun</span>
              </div>
            </CardContent>
            <CardFooter className="gap-2">
              <Button variant="default" size="sm">
                Get Started
              </Button>
              <Button variant="outline" size="sm">
                Documentation
              </Button>
            </CardFooter>
          </Card>

          {/* Backend Card */}
          <Card className="border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <span>🦊</span> Backend Stack
              </CardTitle>
              <CardDescription>
                High-performance API and data layer
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 pb-2">
                <span className="font-medium text-zinc-900 dark:text-zinc-100">
                  Server
                </span>
                <span>ElysiaJS</span>
              </div>
              <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 pb-2">
                <span className="font-medium text-zinc-900 dark:text-zinc-100">
                  ORM
                </span>
                <span>Drizzle ORM</span>
              </div>
              <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 pb-2">
                <span className="font-medium text-zinc-900 dark:text-zinc-100">
                  Database
                </span>
                <span>MySQL (mysql2)</span>
              </div>
              <div className="flex items-center justify-between pt-1">
                <span className="font-medium text-zinc-900 dark:text-zinc-100">
                  API Port
                </span>
                <span>http://localhost:3000</span>
              </div>
            </CardContent>
            <CardFooter className="gap-2">
              <a
                href="http://localhost:3000/health"
                target="_blank"
                rel="noreferrer"
                className={buttonVariants({ variant: "secondary", size: "sm" })}
              >
                Health Check
              </a>
              <a
                href="http://localhost:3000/users"
                target="_blank"
                rel="noreferrer"
                className={buttonVariants({ variant: "ghost", size: "sm" })}
              >
                View Users API
              </a>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  );
}
