# orbit-design

React components inspired by iOS — glassmorphic, mobile-first, beautiful out of the box.

orbit-design helps you build stunning websites fast. Every component looks and feels like modern iOS — smooth gradients, frosted glass, and thoughtful mobile UX. No design skills needed.

```bash
npx orbit-design init
npx orbit-design add button
```

**Docs:** https://orbitdesign.vercel.app

## Why orbit-design?

- **iOS-inspired design** — glassmorphic gradients, depth effects, frosted glass. The kind of UI your users already love.
- **Mobile-first UX** — every component is built for touch screens first. Responsive sheets that become drawers on mobile, proper tap targets, smooth transitions.
- **Beautiful by default** — no tweaking needed. Dark theme, glass gradients, and subtle depth effects work out of the box.
- **Copy-paste model** — components are copied into your project. You own the code. Zero lock-in.
- **Fully customizable** — create your own themes with a simple JSON file. Change colors, gradients, glow, border radius.
- **Accessible** — built on Radix UI primitives for keyboard nav, screen readers, and focus management.

## Quick Start

```bash
# Initialize in your project
npx orbit-design init

# Add components
npx orbit-design add button
npx orbit-design add responsive-sheet
npx orbit-design add --all
```

That's it. No config hell, no setup wizards. Two commands and you're rolling.

## Components

### Button

6 variants with the signature glass gradient effect:

```tsx
import { Button } from "@/components/orbit-ui/button";

<Button>Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Delete</Button>
<Button variant="glass">Glass</Button>
```

Sizes: `sm`, `default`, `lg`, `icon`

### ResponsiveSheet

A sheet that adapts to the screen — **bottom drawer on mobile**, **centered dialog on desktop**. Pure CSS, no JS media queries.

```tsx
import { ResponsiveSheet } from "@/components/orbit-ui/responsive-sheet";

<ResponsiveSheet>
  <ResponsiveSheet.Trigger>Open</ResponsiveSheet.Trigger>
  <ResponsiveSheet.Content>
    <ResponsiveSheet.Header>
      <ResponsiveSheet.Title>Title</ResponsiveSheet.Title>
    </ResponsiveSheet.Header>
    <p>Content here</p>
  </ResponsiveSheet.Content>
</ResponsiveSheet>
```

## Theming

Create a custom theme with a JSON file:

```bash
npx orbit-design theme generate     # Interactive theme creator
npx orbit-design theme apply my-theme.json
npx orbit-design theme show          # Show current CSS variables
```

### Theme JSON

```json
{
  "name": "my-theme",
  "colors": {
    "background": "#0a0a0f",
    "foreground": "#fafafa",
    "primary": "#3087ed",
    "primary-foreground": "#ffffff",
    "border": "#1e1e3a",
    "ring": "#3087ed"
  },
  "gradient": {
    "gradient": "#3087ed",
    "gradient-highlight": "#3dc3fb",
    "gradient-shadow": "#015ecb",
    "gradient-opacity": 0.6,
    "glow-intensity": 0.3
  },
  "depth": {
    "highlight": "#ffffff",
    "highlight-opacity": 0.08,
    "inner-shadow": 0.3
  },
  "radius": "0.75rem"
}
```

### Gradient Controls

- **gradient** — main gradient color for the glass shine line
- **gradient-opacity** — shine line visibility (0 = invisible, 1 = full)
- **glow-intensity** — outer glow strength (0 = no glow, 1 = strong)
- **highlight-opacity** — top edge brightness, simulates glass reflection

### Built-in Presets

- **Orbit Dark** — cyan-blue on dark (default)
- **Orbit Light** — blue on white
- **Ocean Night** — teal on deep blue
- **Sunset Ember** — orange on warm dark
- **Emerald Dream** — emerald on dark green

## How It Works

Like shadcn/ui, orbit-design is **not a dependency**. When you run `add button`:

1. Reads your `orbit-ui.json` config
2. Fetches the component from the registry
3. Resolves dependencies (button → utils → npm packages)
4. Writes `.tsx` files directly into your project
5. Installs npm packages (auto-detects npm/yarn/pnpm/bun)

You own the code. Modify it however you want.

## Requirements

- React 18+
- Tailwind CSS 3+
- TypeScript (recommended)

## Tech Stack

- **CLI**: Commander.js + TypeScript
- **Components**: React + Radix UI + CVA
- **Styling**: Tailwind CSS + CSS Variables
- **Themes**: JSON config → CSS variables

## License

MIT
