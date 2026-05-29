/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{ts,tsx,mdx}",
  ],
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
  plugins: [
    require("@tailwindcss/typography"),
  ],
};
