export default function DocsPage() {
  return (
    <div className="p-8 max-w-3xl">
      <h1 className="text-4xl font-bold tracking-tight mb-4">Orbit Design</h1>
      <p className="text-lg text-[var(--orbit-muted-foreground)] mb-8">
        A collection of beautiful, glassmorphic React components you can copy and paste
        into your apps. Fully customizable with your own themes.
      </p>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">What makes it different?</h2>
        <ul className="list-disc list-inside space-y-2 text-[var(--orbit-muted-foreground)]">
          <li>Glass gradient effects with inner depth — not just flat buttons</li>
          <li>Fully customizable theme system via JSON config + CSS variables</li>
          <li>Dark and light mode built-in</li>
          <li>Copy-paste model — you own the code, zero lock-in</li>
          <li>Built on Radix UI, CVA, and Tailwind CSS</li>
        </ul>

        <h2 className="text-2xl font-semibold pt-4">Quick Start</h2>
        <div className="bg-[var(--orbit-muted)] rounded-md p-4 text-sm font-mono text-[var(--orbit-foreground)]">
          <p>$ npx orbit-design init</p>
          <p>$ npx orbit-design add button</p>
        </div>
      </div>
    </div>
  );
}
