"use client";

import { Button } from "@/components/button";
import { ComponentPreview } from "@/components/component-preview";
import {
  ResponsiveSheet,
  ResponsiveSheetTrigger,
  ResponsiveSheetContent,
  ResponsiveSheetHeader,
  ResponsiveSheetFooter,
  ResponsiveSheetTitle,
  ResponsiveSheetDescription,
  ResponsiveSheetClose,
} from "@/components/responsive-sheet";

export default function ResponsiveSheetPage() {
  return (
    <div className="p-8 max-w-3xl space-y-10">
      <div>
        <h1 className="text-4xl font-bold tracking-tight mb-2">
          ResponsiveSheet
        </h1>
        <p className="text-[var(--orbit-muted-foreground)]">
          A responsive overlay that renders as a bottom drawer on mobile and a
          centered dialog on desktop. One component, two experiences.
        </p>
        <div className="mt-3 flex gap-2">
          <span className="inline-flex items-center rounded-full bg-[var(--orbit-primary)]/10 px-2.5 py-0.5 text-xs font-medium text-[var(--orbit-primary)]">
            Mobile-first
          </span>
          <span className="inline-flex items-center rounded-full bg-[var(--orbit-accent)]/10 px-2.5 py-0.5 text-xs font-medium text-[var(--orbit-accent)]">
            Responsive
          </span>
        </div>
      </div>

      {/* How it works */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">How It Works</h2>
        <div className="text-sm text-[var(--orbit-muted-foreground)] space-y-2">
          <p>
            The component uses a single DOM tree with CSS media queries to
            switch between presentations:
          </p>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="rounded-lg border border-[var(--orbit-border)] bg-[var(--orbit-muted)]/30 p-4">
              <div className="text-xs font-mono text-[var(--orbit-accent)] mb-2">
                {"< 768px"}
              </div>
              <div className="text-sm text-[var(--orbit-foreground)] font-medium">
                Bottom Drawer
              </div>
              <div className="text-xs text-[var(--orbit-muted-foreground)] mt-1">
                Slides up from bottom, full-width, drag-to-dismiss feel
              </div>
            </div>
            <div className="rounded-lg border border-[var(--orbit-border)] bg-[var(--orbit-muted)]/30 p-4">
              <div className="text-xs font-mono text-[var(--orbit-accent)] mb-2">
                {"≥ 768px"}
              </div>
              <div className="text-sm text-[var(--orbit-foreground)] font-medium">
                Centered Dialog
              </div>
              <div className="text-xs text-[var(--orbit-muted-foreground)] mt-1">
                Centered modal with backdrop, close on overlay click
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Default */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Default</h2>
        <ComponentPreview
          code={`<ResponsiveSheet>
  <ResponsiveSheetTrigger asChild>
    <Button>Open Sheet</Button>
  </ResponsiveSheetTrigger>
  <ResponsiveSheetContent>
    <ResponsiveSheetHeader>
      <ResponsiveSheetTitle>Edit Profile</ResponsiveSheetTitle>
      <ResponsiveSheetDescription>
        Make changes to your profile here. Click save when done.
      </ResponsiveSheetDescription>
    </ResponsiveSheetHeader>
    <div className="px-6 py-4">
      <p className="text-sm text-[var(--orbit-muted-foreground)]">
        Resize your browser to see the responsive behavior.
      </p>
    </div>
    <ResponsiveSheetFooter>
      <ResponsiveSheetClose asChild>
        <Button variant="outline">Cancel</Button>
      </ResponsiveSheetClose>
      <Button>Save Changes</Button>
    </ResponsiveSheetFooter>
  </ResponsiveSheetContent>
</ResponsiveSheet>`}
        >
          <ResponsiveSheet>
            <ResponsiveSheetTrigger asChild>
              <Button>Open Sheet</Button>
            </ResponsiveSheetTrigger>
            <ResponsiveSheetContent>
              <ResponsiveSheetHeader>
                <ResponsiveSheetTitle>Edit Profile</ResponsiveSheetTitle>
                <ResponsiveSheetDescription>
                  Make changes to your profile here. Click save when done.
                </ResponsiveSheetDescription>
              </ResponsiveSheetHeader>
              <div className="px-6 py-4">
                <p className="text-sm text-[var(--orbit-muted-foreground)]">
                  Resize your browser to see the responsive behavior.
                </p>
              </div>
              <ResponsiveSheetFooter>
                <ResponsiveSheetClose asChild>
                  <Button variant="outline">Cancel</Button>
                </ResponsiveSheetClose>
                <Button>Save Changes</Button>
              </ResponsiveSheetFooter>
            </ResponsiveSheetContent>
          </ResponsiveSheet>
        </ComponentPreview>
      </section>

      {/* Glass variant */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Glass Variant</h2>
        <ComponentPreview
          code={`<ResponsiveSheet>
  <ResponsiveSheetTrigger asChild>
    <Button variant="glass">Open Glass Sheet</Button>
  </ResponsiveSheetTrigger>
  <ResponsiveSheetContent variant="glass">
    <ResponsiveSheetHeader>
      <ResponsiveSheetTitle>Notifications</ResponsiveSheetTitle>
      <ResponsiveSheetDescription>
        You have 3 unread notifications.
      </ResponsiveSheetDescription>
    </ResponsiveSheetHeader>
    <div className="px-6 py-4 space-y-3">
      <div className="rounded-lg bg-[var(--orbit-muted)]/50 p-3">
        <p className="text-sm font-medium">New follower</p>
        <p className="text-xs text-[var(--orbit-muted-foreground)]">2 minutes ago</p>
      </div>
      <div className="rounded-lg bg-[var(--orbit-muted)]/50 p-3">
        <p className="text-sm font-medium">Comment on your post</p>
        <p className="text-xs text-[var(--orbit-muted-foreground)]">15 minutes ago</p>
      </div>
      <div className="rounded-lg bg-[var(--orbit-muted)]/50 p-3">
        <p className="text-sm font-medium">System update available</p>
        <p className="text-xs text-[var(--orbit-muted-foreground)]">1 hour ago</p>
      </div>
    </div>
  </ResponsiveSheetContent>
</ResponsiveSheet>`}
        >
          <ResponsiveSheet>
            <ResponsiveSheetTrigger asChild>
              <Button variant="glass">Open Glass Sheet</Button>
            </ResponsiveSheetTrigger>
            <ResponsiveSheetContent variant="glass">
              <ResponsiveSheetHeader>
                <ResponsiveSheetTitle>Notifications</ResponsiveSheetTitle>
                <ResponsiveSheetDescription>
                  You have 3 unread notifications.
                </ResponsiveSheetDescription>
              </ResponsiveSheetHeader>
              <div className="px-6 py-4 space-y-3">
                <div className="rounded-lg bg-[var(--orbit-muted)]/50 p-3">
                  <p className="text-sm font-medium">New follower</p>
                  <p className="text-xs text-[var(--orbit-muted-foreground)]">2 minutes ago</p>
                </div>
                <div className="rounded-lg bg-[var(--orbit-muted)]/50 p-3">
                  <p className="text-sm font-medium">Comment on your post</p>
                  <p className="text-xs text-[var(--orbit-muted-foreground)]">15 minutes ago</p>
                </div>
                <div className="rounded-lg bg-[var(--orbit-muted)]/50 p-3">
                  <p className="text-sm font-medium">System update available</p>
                  <p className="text-xs text-[var(--orbit-muted-foreground)]">1 hour ago</p>
                </div>
              </div>
            </ResponsiveSheetContent>
          </ResponsiveSheet>
        </ComponentPreview>
      </section>

      {/* Installation */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Installation</h2>
        <div className="bg-[var(--orbit-muted)] rounded-md p-4 text-sm font-mono">
          <p>npx orbit-design add responsive-sheet</p>
        </div>
      </section>

      {/* Usage */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <div className="bg-[var(--orbit-muted)] rounded-md p-4 text-sm font-mono overflow-x-auto">
          <pre>{`import {
  ResponsiveSheet,
  ResponsiveSheetTrigger,
  ResponsiveSheetContent,
  ResponsiveSheetHeader,
  ResponsiveSheetFooter,
  ResponsiveSheetTitle,
  ResponsiveSheetDescription,
  ResponsiveSheetClose,
} from "@/components/orbit-ui/responsive-sheet"

export default function Page() {
  return (
    <ResponsiveSheet>
      <ResponsiveSheetTrigger asChild>
        <Button>Open</Button>
      </ResponsiveSheetTrigger>
      <ResponsiveSheetContent>
        <ResponsiveSheetHeader>
          <ResponsiveSheetTitle>Title</ResponsiveSheetTitle>
          <ResponsiveSheetDescription>Description</ResponsiveSheetDescription>
        </ResponsiveSheetHeader>
        <div className="px-6 py-4">
          {/* Your content */}
        </div>
        <ResponsiveSheetFooter>
          <ResponsiveSheetClose asChild>
            <Button variant="outline">Cancel</Button>
          </ResponsiveSheetClose>
          <Button>Confirm</Button>
        </ResponsiveSheetFooter>
      </ResponsiveSheetContent>
    </ResponsiveSheet>
  )
}`}</pre>
        </div>
      </section>

      {/* CSS Setup */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">CSS Setup</h2>
        <p className="text-sm text-[var(--orbit-muted-foreground)]">
          Add the responsive positioning styles to your global CSS file:
        </p>
        <div className="bg-[var(--orbit-muted)] rounded-md p-4 text-sm font-mono overflow-x-auto">
          <pre>{`/* Mobile: bottom drawer */
.orbit-rs-content {
  bottom: 0; left: 0; right: 0; top: auto;
  width: 100%; max-height: 85vh;
  border-radius: var(--orbit-radius) var(--orbit-radius) 0 0;
  overflow-y: auto;
  --tw-enter-translate-y: 100%;
  --tw-exit-translate-y: 100%;
}

/* Desktop: centered dialog */
@media (min-width: 768px) {
  .orbit-rs-content {
    bottom: auto; left: 50%; right: auto; top: 50%;
    min-width: 400px; max-width: 540px;
    border-radius: var(--orbit-radius);
    transform: translate(-50%, -50%);
    --tw-enter-translate-y: 0;
    --tw-enter-scale: 0.95;
    --tw-enter-opacity: 0;
  }
}`}</pre>
        </div>
      </section>

      {/* API Reference */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <div className="text-sm text-[var(--orbit-muted-foreground)] space-y-4">
          <div>
            <h3 className="font-medium text-[var(--orbit-foreground)] mb-1">
              ResponsiveSheetContent
            </h3>
            <div className="space-y-2">
              <div>
                <code className="bg-[var(--orbit-muted)] px-1.5 py-0.5 rounded text-[var(--orbit-foreground)]">
                  variant
                </code>
                <span className="ml-2">
                  "default" | "glass" — defaults to "default"
                </span>
              </div>
              <div>
                <code className="bg-[var(--orbit-muted)] px-1.5 py-0.5 rounded text-[var(--orbit-foreground)]">
                  className
                </code>
                <span className="ml-2">
                  string — additional CSS classes
                </span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-medium text-[var(--orbit-foreground)] mb-1">
              ResponsiveSheet
            </h3>
            <div className="space-y-2">
              <div>
                <code className="bg-[var(--orbit-muted)] px-1.5 py-0.5 rounded text-[var(--orbit-foreground)]">
                  open
                </code>
                <span className="ml-2">boolean — controlled open state</span>
              </div>
              <div>
                <code className="bg-[var(--orbit-muted)] px-1.5 py-0.5 rounded text-[var(--orbit-foreground)]">
                  onOpenChange
                </code>
                <span className="ml-2">
                  (open: boolean) =&gt; void — change handler
                </span>
              </div>
              <div>
                <code className="bg-[var(--orbit-muted)] px-1.5 py-0.5 rounded text-[var(--orbit-foreground)]">
                  modal
                </code>
                <span className="ml-2">
                  boolean — whether to render as modal (default: true)
                </span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-medium text-[var(--orbit-foreground)] mb-1">
              Sub-components
            </h3>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>ResponsiveSheetTrigger</li>
              <li>ResponsiveSheetContent</li>
              <li>ResponsiveSheetHeader</li>
              <li>ResponsiveSheetFooter</li>
              <li>ResponsiveSheetTitle</li>
              <li>ResponsiveSheetDescription</li>
              <li>ResponsiveSheetClose</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Dependencies */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Dependencies</h2>
        <div className="bg-[var(--orbit-muted)] rounded-md p-4 text-sm font-mono space-y-1">
          <p>@radix-ui/react-dialog</p>
          <p>class-variance-authority</p>
          <p>lucide-react</p>
        </div>
        <p className="text-xs text-[var(--orbit-muted-foreground)]">
          Installed automatically when running{" "}
          <code className="bg-[var(--orbit-muted)] px-1 py-0.5 rounded">
            npx orbit-design add responsive-sheet
          </code>
        </p>
      </section>
    </div>
  );
}
