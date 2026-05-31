import { cn } from "@/lib/utils";

const navItems = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/docs" },
      { title: "Installation", href: "/docs/installation" },
    ],
  },
  {
    title: "Theming",
    items: [
      { title: "Overview", href: "/docs/theming" },
      { title: "Custom Themes", href: "/docs/theming#custom-themes" },
    ],
  },
  {
    title: "Components",
    items: [
      { title: "Button", href: "/docs/components/button" },
      { title: "ResponsiveSheet", href: "/docs/components/responsive-sheet" },
    ],
  },
];

export function Sidebar() {
  return (
    <aside className="fixed top-16 left-0 z-30 h-[calc(100vh-4rem)] w-64 border-r border-[var(--orbit-border)] bg-[var(--orbit-card)] overflow-y-auto">
      <nav className="p-4 space-y-6">
        {navItems.map((group) => (
          <div key={group.title}>
            <h4 className="mb-2 text-sm font-semibold text-[var(--orbit-foreground)]">
              {group.title}
            </h4>
            <ul className="space-y-1">
              {group.items.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={cn(
                      "block rounded-md px-3 py-1.5 text-sm text-[var(--orbit-muted-foreground)]",
                      "hover:bg-[var(--orbit-accent)]/10 hover:text-[var(--orbit-accent-foreground)]",
                      "transition-colors duration-150"
                    )}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
