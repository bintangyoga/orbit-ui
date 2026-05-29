# ✨ orbit-ui

A beautiful, glassmorphic React component library CLI — like shadcn/ui, but with gradient glass effects and inner depth.

```
npx orbit-ui init
npx orbit-ui add button
```

## Features

- 🎨 **Glass gradient effects** — signature gradient shine line across components
- 🔮 **Inner depth** — subtle vertical gradients creating 3D depth perception
- 🌗 **Dark + Light themes** — beautiful out of the box
- 🎯 **Fully customizable** — create your own themes with JSON config
- ⚡ **Tailwind + CVA** — built on class-variance-authority + Tailwind CSS
- 📦 **Copy-paste model** — you own the code, no locked-in dependencies
- ♿ **Accessible** — built on Radix UI primitives

## Quick Start

```bash
# Initialize in your React project
npx orbit-ui init

# Add components
npx orbit-ui add button

# Or add all components
npx orbit-ui add --all
```

## Theme Customization

orbit-ui uses CSS variables for full color customization. Create your own theme:

```bash
# Generate a custom theme interactively
npx orbit-ui theme generate

# Apply a theme
npx orbit-ui theme apply orbit-theme-my-custom-theme.json

# View current theme variables
npx orbit-ui theme show
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

| Property | Description |
|---|---|
| `gradient` | Main gradient color |
| `gradient-highlight` | Lighter version for reflections |
| `gradient-shadow` | Darker version for depth |
| `gradient-opacity` | How visible the shine line is (0-1) |
| `glow-intensity` | Glow shadow strength (0-1) |

### Depth Settings

| Property | Description |
|---|---|
| `highlight` | Top highlight color |
| `highlight-opacity` | Top edge brightness (0-1) |
| `inner-shadow` | Inner depth darkness (0-1) |
| `inner-gradient-direction` | Depth gradient direction |

## Button Variants

```tsx
import { Button } from "@/components/orbit-ui/button";

// Default — glass gradient with inner glow
<Button>Click me</Button>

// Secondary — subtle glass
<Button variant="secondary">Secondary</Button>

// Outline — bordered glass
<Button variant="outline">Outline</Button>

// Ghost — invisible until hover
<Button variant="ghost">Ghost</Button>

// Destructive — red glass gradient
<Button variant="destructive">Delete</Button>

// Glass — frosted glass effect
<Button variant="glass">Glass</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon">🔔</Button>
```

## Included Presets

| Theme | Preview |
|---|---|
| `orbit-dark` | Dark with cyan-blue accents |
| `orbit-light` | Light with blue accents |
| `ocean-night` | Deep blue with teal accents |
| `sunset-ember` | Dark warm with orange accents |
| `emerald-dream` | Dark green with emerald accents |

## Architecture

```
orbit-ui/
├── packages/
│   └── cli/                    ← CLI tool
│       └── src/
│           ├── commands/       ← init, add, list, theme
│           ├── components/     ← Component registry definitions
│           ├── registry/       ← Registry resolver
│           ├── theme.ts        ← Theme system (CSS var generation)
│           └── config.ts       ← User config schema
├── templates/                  ← Theme presets (JSON)
└── package.json
```

## How It Works

Like shadcn/ui, orbit-ui is **not a dependency**. When you run `orbit-ui add button`:

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
