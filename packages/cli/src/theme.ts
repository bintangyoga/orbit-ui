/**
 * orbit-ui Theme System
 * 
 * Users can create their own themes by providing a theme config.
 * The theme is converted to CSS variables and injected into the project.
 */

export interface OrbitThemeColors {
  /** Base background color */
  background: string;
  /** Foreground / text color */
  foreground: string;

  /** Card background */
  card: string;
  /** Card foreground */
  "card-foreground": string;

  /** Popover background */
  popover: string;
  /** Popover foreground */
  "popover-foreground": string;

  /** Primary action color (used for buttons, links) */
  primary: string;
  /** Primary foreground */
  "primary-foreground": string;

  /** Secondary color */
  secondary: string;
  /** Secondary foreground */
  "secondary-foreground": string;

  /** Muted / subtle background */
  muted: string;
  /** Muted foreground */
  "muted-foreground": string;

  /** Accent / highlight color */
  accent: string;
  /** Accent foreground */
  "accent-foreground": string;

  /** Destructive / error color */
  destructive: string;
  /** Destructive foreground */
  "destructive-foreground": string;

  /** Border color */
  border: string;
  /** Input border color */
  input: string;
  /** Ring / focus color */
  ring: string;
}

export interface OrbitGradientConfig {
  /** Gradient color — the main color used for the glass/gradient effect */
  gradient: string;
  /** Gradient highlight — lighter version for reflections */
  "gradient-highlight": string;
  /** Gradient shadow — darker version for depth */
  "gradient-shadow": string;
  /** Gradient opacity (0-1) */
  "gradient-opacity": number;
  /** Glow intensity (0-1) */
  "glow-intensity": number;
}

export interface OrbitDepthConfig {
  /** Top highlight color */
  "highlight": string;
  /** Highlight opacity (0-1) */
  "highlight-opacity": number;
  /** Inner shadow darkness (0-1) */
  "inner-shadow": number;
  /** Inner gradient direction: 'to-bottom' | 'to-top' | 'none' */
  "inner-gradient-direction": string;
}

export interface OrbitTheme {
  name: string;
  colors: OrbitThemeColors;
  gradient: OrbitGradientConfig;
  depth: OrbitDepthConfig;
  radius?: string;
}

// ──────────────────────────────────────────────
// Default Theme: "Orbit Dark"
// ──────────────────────────────────────────────
export const orbitDark: OrbitTheme = {
  name: "orbit-dark",
  colors: {
    background: "#0a0a0f",
    foreground: "#fafafa",
    card: "#0f0f18",
    "card-foreground": "#fafafa",
    popover: "#0f0f18",
    "popover-foreground": "#fafafa",
    primary: "#3087ed",
    "primary-foreground": "#ffffff",
    secondary: "#1a1a2e",
    "secondary-foreground": "#fafafa",
    muted: "#16162a",
    "muted-foreground": "#8888aa",
    accent: "#3dc3fb",
    "accent-foreground": "#ffffff",
    destructive: "#ef4444",
    "destructive-foreground": "#ffffff",
    border: "#1e1e3a",
    input: "#1e1e3a",
    ring: "#3087ed",
  },
  gradient: {
    gradient: "#3087ed",
    "gradient-highlight": "#3dc3fb",
    "gradient-shadow": "#015ecb",
    "gradient-opacity": 0.6,
    "glow-intensity": 0.3,
  },
  depth: {
    highlight: "#ffffff",
    "highlight-opacity": 0.08,
    "inner-shadow": 0.3,
    "inner-gradient-direction": "to-bottom",
  },
  radius: "0.75rem",
};

// ──────────────────────────────────────────────
// Default Theme: "Orbit Light"
// ──────────────────────────────────────────────
export const orbitLight: OrbitTheme = {
  name: "orbit-light",
  colors: {
    background: "#ffffff",
    foreground: "#0a0a0f",
    card: "#f8f8fa",
    "card-foreground": "#0a0a0f",
    popover: "#f8f8fa",
    "popover-foreground": "#0a0a0f",
    primary: "#0090fe",
    "primary-foreground": "#ffffff",
    secondary: "#f0f0f5",
    "secondary-foreground": "#0a0a0f",
    muted: "#f0f0f5",
    "muted-foreground": "#6b6b80",
    accent: "#3dc3fb",
    "accent-foreground": "#0a0a0f",
    destructive: "#ef4444",
    "destructive-foreground": "#ffffff",
    border: "#e0e0ea",
    input: "#e0e0ea",
    ring: "#0090fe",
  },
  gradient: {
    gradient: "#0090fe",
    "gradient-highlight": "#3dc3fb",
    "gradient-shadow": "#015ecb",
    "gradient-opacity": 0.5,
    "glow-intensity": 0.2,
  },
  depth: {
    highlight: "#ffffff",
    "highlight-opacity": 0.7,
    "inner-shadow": 0.1,
    "inner-gradient-direction": "to-bottom",
  },
  radius: "0.75rem",
};

// ──────────────────────────────────────────────
// Theme → CSS Variables
// ──────────────────────────────────────────────
export function themeToCSS(theme: OrbitTheme): string {
  const lines: string[] = [];

  lines.push(`  /* ── ${theme.name} ── */`);

  // Colors
  for (const [key, value] of Object.entries(theme.colors)) {
    lines.push(`  --orbit-${key}: ${value};`);
  }

  // Gradient
  for (const [key, value] of Object.entries(theme.gradient)) {
    lines.push(`  --orbit-${key}: ${value};`);
  }

  // Depth
  for (const [key, value] of Object.entries(theme.depth)) {
    lines.push(`  --orbit-${key}: ${value};`);
  }

  // Radius
  if (theme.radius) {
    lines.push(`  --orbit-radius: ${theme.radius};`);
  }

  return lines.join("\n");
}

export function generateThemeCSS(dark: OrbitTheme, light: OrbitTheme): string {
  return `/* orbit-ui theme — generated by orbit-ui CLI */
/* Customize by editing your theme config and running: orbit-ui theme */

:root {
${themeToCSS(light)}
}

.dark {
${themeToCSS(dark)}
}
`;
}

// ──────────────────────────────────────────────
// Tailwind plugin config generator
// ──────────────────────────────────────────────
export function generateTailwindConfig(): string {
  return `// orbit-ui Tailwind config extension
// Add this to your tailwind.config.ts/js

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        orbit: {
          background: "var(--orbit-background)",
          foreground: "var(--orbit-foreground)",
          card: {
            DEFAULT: "var(--orbit-card)",
            foreground: "var(--orbit-card-foreground)",
          },
          popover: {
            DEFAULT: "var(--orbit-popover)",
            foreground: "var(--orbit-popover-foreground)",
          },
          primary: {
            DEFAULT: "var(--orbit-primary)",
            foreground: "var(--orbit-primary-foreground)",
          },
          secondary: {
            DEFAULT: "var(--orbit-secondary)",
            foreground: "var(--orbit-secondary-foreground)",
          },
          muted: {
            DEFAULT: "var(--orbit-muted)",
            foreground: "var(--orbit-muted-foreground)",
          },
          accent: {
            DEFAULT: "var(--orbit-accent)",
            foreground: "var(--orbit-accent-foreground)",
          },
          destructive: {
            DEFAULT: "var(--orbit-destructive)",
            foreground: "var(--orbit-destructive-foreground)",
          },
          border: "var(--orbit-border)",
          input: "var(--orbit-input)",
          ring: "var(--orbit-ring)",
        },
      },
      borderRadius: {
        orbit: "var(--orbit-radius)",
      },
    },
  },
};
`;
}
