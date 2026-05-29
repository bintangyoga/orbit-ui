# orbit-design

Beautiful glassmorphic React component library — gradient depth effects, custom themes, copy-paste like shadcn.

```bash
npx orbit-design init
npx orbit-design add button
```

**Docs:** https://orbitdesign.vercel.app

## Features

- Glass gradient effects — signature gradient shine line across components
- Inner depth — subtle vertical gradients creating 3D depth perception
- Dark + Light themes — beautiful out of the box
- Fully customizable — create your own themes with JSON config
- Tailwind + CVA — built on class-variance-authority + Tailwind CSS
- Copy-paste model — you own the code, no locked-in dependencies
- Accessible — built on Radix UI primitives

## Quick Start

```bash
npx orbit-design init
npx orbit-design add button
npx orbit-design add --all
```

## Theme Customization

```bash
npx orbit-design theme generate
npx orbit-design theme apply orbit-theme-my-custom-theme.json
npx orbit-design theme show
```

### Custom Theme JSON

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
    "inner-shadow": 0.3,
    "inner-gradient-direction": "to-bottom"
  },
  "radius": "0.75rem"
}
```

### Gradient Settings

- **gradient** — main gradient color used for the glass shine line
- **gradient-highlight** — lighter version for reflections
- **gradient-shadow** — darker version for depth and glow
- **gradient-opacity** — visibility of the shine line (0-1)
- **glow-intensity** — outer glow shadow strength (0-1)

## Button Variants

```tsx
import { Button } from "@/components/orbit-ui/button";

<Button>Click me</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Delete</Button>
<Button variant="glass">Glass</Button>
```

## Included Theme Presets

- **Orbit Dark** — cyan-blue on dark
- **Orbit Light** — blue on white
- **Ocean Night** — teal on deep blue
- **Sunset Ember** — orange on warm dark
- **Emerald Dream** — emerald on dark green

## Architecture

```
orbit-ui/
├── packages/
│   ├── cli/                 ← CLI tool (published as orbit-design on npm)
│   └── docs/                ← Documentation website (Next.js)
├── templates/               ← Theme presets (JSON)
└── README.md
```

## How It Works

Like shadcn/ui, orbit-design is **not a dependency**. When you run `orbit-design add button`:

1. Reads your `orbit-ui.json` config
2. Fetches the component from the registry
3. Resolves dependencies (recursively)
4. Writes the actual `.tsx` files to your project
5. Installs any required npm packages

You own the code. Modify it however you want.

## Tech Stack

- **CLI**: Commander.js + TypeScript
- **Components**: React + Radix UI + CVA
- **Styling**: Tailwind CSS + CSS Variables
- **Theme**: JSON config → CSS variables

## License

MIT
