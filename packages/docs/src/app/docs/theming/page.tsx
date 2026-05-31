export default function ThemingPage() {
  return (
    <div className="p-8 max-w-3xl">
      <h1 className="text-4xl font-bold tracking-tight mb-4">Theming</h1>
      <p className="text-lg text-[var(--orbit-muted-foreground)] mb-8">
        orbit-design uses CSS variables for full customization.
        Change colors, gradients, glow, and border radius — all from a single JSON file.
      </p>

      <div className="space-y-10">
        <div>
          <h2 className="text-xl font-semibold mb-3">How it works</h2>
          <p className="text-sm text-[var(--orbit-muted-foreground)]">
            Every orbit component reads from CSS variables prefixed with <code className="bg-[var(--orbit-muted)] px-1.5 py-0.5 rounded text-[var(--orbit-foreground)]">--orbit-*</code>.
            When you apply a theme, these variables get updated in your global CSS.
            All components react instantly — no code changes needed.
          </p>
        </div>

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
    "secondary": "#1a1a2e",
    "secondary-foreground": "#fafafa",
    "muted": "#16162a",
    "muted-foreground": "#8888aa",
    "accent": "#3dc3fb",
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
}`}</pre>
          </div>
          <p className="mt-3 text-sm text-[var(--orbit-muted-foreground)]">
            Apply it with <code className="bg-[var(--orbit-muted)] px-1.5 py-0.5 rounded text-[var(--orbit-foreground)]">npx orbit-design theme apply my-theme.json</code>
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">Gradient Settings</h2>
          <p className="text-sm text-[var(--orbit-muted-foreground)] mb-4">
            The signature glass effect is controlled by three gradient colors plus two intensity values:
          </p>
          <div className="space-y-3">
            <div className="rounded-[var(--orbit-radius)] border border-[var(--orbit-border)] bg-[var(--orbit-card)] p-4">
              <p className="text-sm"><strong className="text-[var(--orbit-foreground)]">gradient</strong></p>
              <p className="text-sm text-[var(--orbit-muted-foreground)]">Main gradient color — used for the horizontal glass shine line across components</p>
            </div>
            <div className="rounded-[var(--orbit-radius)] border border-[var(--orbit-border)] bg-[var(--orbit-card)] p-4">
              <p className="text-sm"><strong className="text-[var(--orbit-foreground)]">gradient-highlight</strong></p>
              <p className="text-sm text-[var(--orbit-muted-foreground)]">Lighter version — used for top-to-bottom glass reflection overlays</p>
            </div>
            <div className="rounded-[var(--orbit-radius)] border border-[var(--orbit-border)] bg-[var(--orbit-card)] p-4">
              <p className="text-sm"><strong className="text-[var(--orbit-foreground)]">gradient-shadow</strong></p>
              <p className="text-sm text-[var(--orbit-muted-foreground)]">Darker version — used for outer glow shadows and inset borders</p>
            </div>
            <div className="rounded-[var(--orbit-radius)] border border-[var(--orbit-border)] bg-[var(--orbit-card)] p-4">
              <p className="text-sm"><strong className="text-[var(--orbit-foreground)]">gradient-opacity</strong> <span className="text-[var(--orbit-muted-foreground)]">(0 – 1)</span></p>
              <p className="text-sm text-[var(--orbit-muted-foreground)]">How visible the shine line is. 0 = invisible, 1 = full opacity</p>
            </div>
            <div className="rounded-[var(--orbit-radius)] border border-[var(--orbit-border)] bg-[var(--orbit-card)] p-4">
              <p className="text-sm"><strong className="text-[var(--orbit-foreground)]">glow-intensity</strong> <span className="text-[var(--orbit-muted-foreground)]">(0 – 1)</span></p>
              <p className="text-sm text-[var(--orbit-muted-foreground)]">Outer glow shadow strength. 0 = no glow, 1 = strong glow around components</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">Built-in Presets</h2>
          <p className="text-sm text-[var(--orbit-muted-foreground)] mb-4">
            Apply any of these presets with <code className="bg-[var(--orbit-muted)] px-1.5 py-0.5 rounded text-[var(--orbit-foreground)]">npx orbit-design theme apply &lt;preset&gt;.json</code>
          </p>
          <div className="grid grid-cols-2 gap-3">
            {[
              { name: "Orbit Dark", color: "#3087ed", desc: "Cyan-blue on dark — the default", file: "orbit-dark" },
              { name: "Orbit Light", color: "#0090fe", desc: "Blue on white", file: "orbit-light" },
              { name: "Ocean Night", color: "#06b6d4", desc: "Teal on deep blue", file: "ocean-night" },
              { name: "Sunset Ember", color: "#f97316", desc: "Orange on warm dark", file: "sunset-ember" },
              { name: "Emerald Dream", color: "#10b981", desc: "Emerald on dark green", file: "emerald-dream" },
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

        <div>
          <h2 className="text-xl font-semibold mb-3">CLI Commands</h2>
          <div className="bg-[var(--orbit-muted)] rounded-md p-4 text-sm font-mono space-y-2">
            <div>
              <p className="text-[var(--orbit-muted-foreground)]"># Interactive theme creator</p>
              <p>npx orbit-design theme generate</p>
            </div>
            <div>
              <p className="text-[var(--orbit-muted-foreground)]"># Apply a theme JSON file</p>
              <p>npx orbit-design theme apply my-theme.json</p>
            </div>
            <div>
              <p className="text-[var(--orbit-muted-foreground)]"># Show current CSS variables</p>
              <p>npx orbit-design theme show</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
