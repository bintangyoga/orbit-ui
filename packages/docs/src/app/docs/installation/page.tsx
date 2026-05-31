export default function InstallationPage() {
  return (
    <div className="p-8 max-w-3xl">
      <h1 className="text-4xl font-bold tracking-tight mb-4">Installation</h1>
      <p className="text-lg text-[var(--orbit-muted-foreground)] mb-8">
        Get orbit-design running in your project in under a minute.
      </p>

      <div className="space-y-10">
        <div>
          <h2 className="text-xl font-semibold mb-3">1. Initialize</h2>
          <div className="bg-[var(--orbit-muted)] rounded-md p-4 text-sm font-mono">
            <p>npx orbit-design init</p>
          </div>
          <p className="mt-3 text-sm text-[var(--orbit-muted-foreground)]">
            This does three things:
          </p>
          <ul className="mt-2 space-y-1 text-sm text-[var(--orbit-muted-foreground)] list-disc list-inside">
            <li>Creates <code className="bg-[var(--orbit-muted)] px-1.5 py-0.5 rounded text-[var(--orbit-foreground)]">orbit-ui.json</code> config in your project root</li>
            <li>Injects theme CSS variables into your global stylesheet</li>
            <li>Writes the <code className="bg-[var(--orbit-muted)] px-1.5 py-0.5 rounded text-[var(--orbit-foreground)]">cn()</code> utility to your lib folder</li>
          </ul>
          <p className="mt-3 text-sm text-[var(--orbit-muted-foreground)]">
            Use <code className="bg-[var(--orbit-muted)] px-1.5 py-0.5 rounded text-[var(--orbit-foreground)]">-y</code> flag to skip prompts and use defaults:
          </p>
          <div className="bg-[var(--orbit-muted)] rounded-md p-4 text-sm font-mono mt-2">
            <p>npx orbit-design init -y</p>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">2. Add components</h2>
          <div className="bg-[var(--orbit-muted)] rounded-md p-4 text-sm font-mono">
            <p>npx orbit-design add button</p>
          </div>
          <p className="mt-3 text-sm text-[var(--orbit-muted-foreground)]">
            This copies the Button component into your project and installs required packages.
            Dependencies are installed automatically using your project's package manager
            (npm, yarn, pnpm, or bun — detected from your lock file).
          </p>

          <div className="mt-4 space-y-2">
            <p className="text-sm font-medium text-[var(--orbit-foreground)]">More examples:</p>
            <div className="bg-[var(--orbit-muted)] rounded-md p-4 text-sm font-mono space-y-1">
              <p className="text-[var(--orbit-muted-foreground)]"># Add multiple components</p>
              <p>npx orbit-design add button responsive-sheet</p>
              <br />
              <p className="text-[var(--orbit-muted-foreground)]"># Add everything</p>
              <p>npx orbit-design add --all</p>
              <br />
              <p className="text-[var(--orbit-muted-foreground)]"># Overwrite existing files</p>
              <p>npx orbit-design add button --overwrite</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">3. Use it</h2>
          <div className="bg-[var(--orbit-muted)] rounded-md p-4 text-sm font-mono">
            <pre>{`import { Button } from "@/components/orbit-ui/button";

export default function Page() {
  return <Button>Click me</Button>;
}`}</pre>
          </div>
          <p className="mt-3 text-sm text-[var(--orbit-muted-foreground)]">
            The component is now in your project. Import it, use it, modify it — it's your code.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">4. Customize theme (optional)</h2>
          <p className="text-sm text-[var(--orbit-muted-foreground)] mb-3">
            Want your own look? Create a custom theme:
          </p>
          <div className="bg-[var(--orbit-muted)] rounded-md p-4 text-sm font-mono">
            <p>npx orbit-design theme generate</p>
          </div>
          <p className="mt-3 text-sm text-[var(--orbit-muted-foreground)]">
            This walks you through creating a theme JSON. Then apply it:
          </p>
          <div className="bg-[var(--orbit-muted)] rounded-md p-4 text-sm font-mono mt-2">
            <p>npx orbit-design theme apply my-theme.json</p>
          </div>
          <p className="mt-3 text-sm text-[var(--orbit-muted-foreground)]">
            See <a href="/docs/theming" className="text-[var(--orbit-accent)] hover:underline">Theming</a> for details.
          </p>
        </div>
      </div>
    </div>
  );
}
