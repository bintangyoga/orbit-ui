export default function ThemingPage() {
  return (
    <div className="p-8 max-w-3xl">
      <h1 className="text-4xl font-bold tracking-tight mb-4">Theming</h1>
      <p className="text-lg text-[var(--orbit-muted-foreground)] mb-8">
        Orbit Design uses CSS variables for full color customization.
        Create your own themes with a JSON config file.
      </p>

      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold mb-3" id="custom-themes">Custom Themes</h2>
          <p className="text-sm text-[var(--orbit-muted-foreground)] mb-4">
            Create a JSON file with your theme definition:
          </p>
          <div className="bg-[var(--orbit-muted)] rounded-md p-4 text-sm font-mono overflow-x-auto">
            <pre>{`{
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
}`}</pre>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">Gradient Settings</h2>
          <div className="text-sm text-[var(--orbit-muted-foreground)] space-y-2">
            <p><strong className="text-[var(--orbit-foreground)]">gradient</strong> — main gradient color used for the glass shine line</p>
            <p><strong className="text-[var(--orbit-foreground)]">gradient-highlight</strong> — lighter version for reflections</p>
            <p><strong className="text-[var(--orbit-foreground)]">gradient-shadow</strong> — darker version for depth and glow</p>
            <p><strong className="text-[var(--orbit-foreground)]">gradient-opacity</strong> — visibility of the shine line (0-1)</p>
            <p><strong className="text-[var(--orbit-foreground)]">glow-intensity</strong> — outer glow shadow strength (0-1)</p>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">Included Presets</h2>
          <div className="grid grid-cols-2 gap-3">
            {[
              { name: "Orbit Dark", color: "#3087ed", desc: "Cyan-blue on dark" },
              { name: "Orbit Light", color: "#0090fe", desc: "Blue on white" },
              { name: "Ocean Night", color: "#06b6d4", desc: "Teal on deep blue" },
              { name: "Sunset Ember", color: "#f97316", desc: "Orange on warm dark" },
              { name: "Emerald Dream", color: "#10b981", desc: "Emerald on dark green" },
            ].map((t) => (
              <div
                key={t.name}
                className="rounded-[var(--orbit-radius)] border border-[var(--orbit-border)] bg-[var(--orbit-card)] p-4"
              >
                <div className="flex items-center gap-2 mb-1">
                  <div
                    className="h-3 w-3 rounded-full"
                    style={{ background: t.color }}
                  />
                  <span className="text-sm font-medium text-[var(--orbit-foreground)]">
                    {t.name}
                  </span>
                </div>
                <span className="text-xs text-[var(--orbit-muted-foreground)]">
                  {t.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
