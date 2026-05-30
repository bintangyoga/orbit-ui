export default function DocsPage() {
  return (
    <div className="p-8 max-w-3xl">
      <h1 className="text-4xl font-bold tracking-tight mb-4">Introduction</h1>
      <p className="text-lg text-[var(--orbit-muted-foreground)] mb-8">
        orbit-design is a React component library inspired by modern iOS design.
        Glassmorphic gradients, frosted glass effects, and mobile-first UX —
        so your website looks and feels like a native app.
      </p>

      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Why orbit-design?</h2>
          <div className="space-y-4">
            <div className="rounded-[var(--orbit-radius)] border border-[var(--orbit-border)] bg-[var(--orbit-card)] p-4">
              <h3 className="text-sm font-semibold text-[var(--orbit-foreground)] mb-1">📱 iOS-inspired design</h3>
              <p className="text-sm text-[var(--orbit-muted-foreground)]">
                Glassmorphic gradients, depth effects, frosted glass — the kind of UI your users already love from iOS.
              </p>
            </div>
            <div className="rounded-[var(--orbit-radius)] border border-[var(--orbit-border)] bg-[var(--orbit-card)] p-4">
              <h3 className="text-sm font-semibold text-[var(--orbit-foreground)] mb-1">📲 Mobile-first</h3>
              <p className="text-sm text-[var(--orbit-muted-foreground)]">
                Every component is designed for touch screens first. Proper tap targets, smooth transitions,
                responsive behaviors that adapt to any screen size.
              </p>
            </div>
            <div className="rounded-[var(--orbit-radius)] border border-[var(--orbit-border)] bg-[var(--orbit-card)] p-4">
              <h3 className="text-sm font-semibold text-[var(--orbit-foreground)] mb-1">🎨 Beautiful by default</h3>
              <p className="text-sm text-[var(--orbit-muted-foreground)]">
                Dark theme, glass gradients, subtle depth effects — all working out of the box.
                No design skills needed. No tweaking required.
              </p>
            </div>
            <div className="rounded-[var(--orbit-radius)] border border-[var(--orbit-border)] bg-[var(--orbit-card)] p-4">
              <h3 className="text-sm font-semibold text-[var(--orbit-foreground)] mb-1">📋 Copy-paste, zero lock-in</h3>
              <p className="text-sm text-[var(--orbit-muted-foreground)]">
                Components are copied into your project. You own the code. Modify it, extend it, break it — it's yours.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Quick Start</h2>
          <div className="bg-[var(--orbit-muted)] rounded-md p-4 text-sm font-mono text-[var(--orbit-foreground)] space-y-1">
            <p className="text-[var(--orbit-muted-foreground)]"># Initialize in your project</p>
            <p>$ npx orbit-design init</p>
            <br />
            <p className="text-[var(--orbit-muted-foreground)]"># Add components</p>
            <p>$ npx orbit-design add button</p>
          </div>
          <p className="mt-4 text-sm text-[var(--orbit-muted-foreground)]">
            See the <a href="/docs/installation" className="text-[var(--orbit-accent)] hover:underline">Installation guide</a> for detailed steps.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Built With</h2>
          <ul className="list-disc list-inside space-y-1 text-[var(--orbit-muted-foreground)] text-sm">
            <li><strong className="text-[var(--orbit-foreground)]">React</strong> + <strong className="text-[var(--orbit-foreground)]">TypeScript</strong></li>
            <li><strong className="text-[var(--orbit-foreground)]">Radix UI</strong> — accessible primitives (focus trap, keyboard nav, ARIA)</li>
            <li><strong className="text-[var(--orbit-foreground)]">Tailwind CSS</strong> — utility-first styling</li>
            <li><strong className="text-[var(--orbit-foreground)]">CVA</strong> — class-variance-authority for type-safe variants</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
