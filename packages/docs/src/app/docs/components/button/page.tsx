import { Check } from "lucide-react";
import { Button } from "@/components/button";
import { ComponentPreview } from "@/components/component-preview";

export default function ButtonPage() {
  return (
    <div className="p-8 max-w-3xl space-y-10">
      <div>
        <h1 className="text-4xl font-bold tracking-tight mb-2">Button</h1>
        <p className="text-[var(--orbit-muted-foreground)]">
          A Liquid Glass pill button with label and icon-only variations.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Default</h2>
        <ComponentPreview code={`<Button>Label</Button>`}>
          <Button>Label</Button>
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Liquid Glass</h2>
        <p className="text-sm text-[var(--orbit-muted-foreground)]">
          The neutral <code>secondary</code> and blue <code>default</code> variants, with
          labels and icon-only. Adapts to light and dark backgrounds.
        </p>
        <ComponentPreview
          code={`<Button variant="secondary">Label</Button>
<Button variant="secondary" size="icon"><Check /></Button>
<Button>Label</Button>
<Button size="icon"><Check /></Button>`}
        >
          <Button variant="secondary">Label</Button>
          <Button variant="secondary" size="icon" aria-label="Confirm">
            <Check />
          </Button>
          <Button>Label</Button>
          <Button size="icon" aria-label="Confirm">
            <Check />
          </Button>
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Variants</h2>
        <ComponentPreview
          code={`<Button>Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="glass">Glass</Button>`}
        >
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="glass">Glass</Button>
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Sizes</h2>
        <ComponentPreview
          code={`<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon"><Check /></Button>`}
        >
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button size="icon" aria-label="Confirm">
            <Check />
          </Button>
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Installation</h2>
        <div className="bg-[var(--orbit-muted)] rounded-md p-4 text-sm font-mono">
          <p>npx orbit-design add button</p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <div className="bg-[var(--orbit-muted)] rounded-md p-4 text-sm font-mono overflow-x-auto">
          <pre>{`import { Button } from "@/components/orbit-ui/button"

export default function Page() {
  return <Button variant="default">Click me</Button>
}`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <div className="text-sm text-[var(--orbit-muted-foreground)] space-y-3">
          <div>
            <h3 className="font-medium text-[var(--orbit-foreground)] mb-1">variant</h3>
            <p><code className="bg-[var(--orbit-muted)] px-1.5 py-0.5 rounded text-[var(--orbit-foreground)]">"default" | "secondary" | "outline" | "ghost" | "destructive" | "glass"</code></p>
          </div>
          <div>
            <h3 className="font-medium text-[var(--orbit-foreground)] mb-1">size</h3>
            <p><code className="bg-[var(--orbit-muted)] px-1.5 py-0.5 rounded text-[var(--orbit-foreground)]">"sm" | "default" | "lg" | "icon" | "icon-lg"</code></p>
          </div>
          <div>
            <h3 className="font-medium text-[var(--orbit-foreground)] mb-1">asChild</h3>
            <p><code className="bg-[var(--orbit-muted)] px-1.5 py-0.5 rounded text-[var(--orbit-foreground)]">boolean</code> — render as child element via Radix Slot</p>
          </div>
        </div>
      </section>
    </div>
  );
}
