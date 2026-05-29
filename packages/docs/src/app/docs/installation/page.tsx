export default function InstallationPage() {
  return (
    <div className="p-8 max-w-3xl">
      <h1 className="text-4xl font-bold tracking-tight mb-4">Installation</h1>

      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold mb-3">1. Initialize</h2>
          <div className="bg-[var(--orbit-muted)] rounded-md p-4 text-sm font-mono">
            <p>npx orbit-design init</p>
          </div>
          <p className="mt-3 text-sm text-[var(--orbit-muted-foreground)]">
            This creates <code className="bg-[var(--orbit-muted)] px-1.5 py-0.5 rounded text-[var(--orbit-foreground)]">orbit-ui.json</code> in your project root
            and injects the theme CSS into your global stylesheet.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">2. Install dependencies</h2>
          <div className="bg-[var(--orbit-muted)] rounded-md p-4 text-sm font-mono">
            <p>npm install clsx tailwind-merge class-variance-authority</p>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">3. Add components</h2>
          <div className="bg-[var(--orbit-muted)] rounded-md p-4 text-sm font-mono">
            <p>npx orbit-design add button</p>
          </div>
          <p className="mt-3 text-sm text-[var(--orbit-muted-foreground)]">
            Components are copied into your project. Modify them however you want.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">4. Customize theme</h2>
          <div className="bg-[var(--orbit-muted)] rounded-md p-4 text-sm font-mono">
            <p>npx orbit-design theme generate</p>
          </div>
          <p className="mt-3 text-sm text-[var(--orbit-muted-foreground)]">
            Answer a few prompts to generate a custom theme JSON, then apply it:
          </p>
          <div className="bg-[var(--orbit-muted)] rounded-md p-4 text-sm font-mono mt-2">
            <p>npx orbit-design theme apply orbit-theme-my-theme.json</p>
          </div>
        </div>
      </div>
    </div>
  );
}
