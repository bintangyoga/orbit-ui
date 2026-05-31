import { Button } from "@/components/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-6">
      <div className="max-w-2xl text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold tracking-tight text-[var(--orbit-foreground)]">
            Orbit Design
          </h1>
          <p className="text-lg text-[var(--orbit-muted-foreground)]">
            Beautiful glassmorphic React components with gradient depth effects.
            Fully customizable themes. Copy-paste like shadcn.
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Button size="lg">Get Started</Button>
          <Button variant="outline" size="lg">
            GitHub
          </Button>
          <Button variant="glass" size="lg">
            ✨ Glass
          </Button>
        </div>

        <div className="pt-8">
          <div className="rounded-[var(--orbit-radius)] border border-[var(--orbit-border)] bg-[var(--orbit-card)] p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm font-medium text-[var(--orbit-foreground)]">Quick Start</span>
            </div>
            <pre className="text-sm text-[var(--orbit-muted-foreground)] bg-[var(--orbit-muted)] rounded-md p-4">
              <code>{`npx orbit-design init
npx orbit-design add button`}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
