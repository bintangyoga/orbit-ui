/**
 * orbit-ui Config — stored in user's project as orbit-ui.json
 */

export interface OrbitUIConfig {
  /** $schema for IDE autocomplete */
  $schema?: string;
  /** Style preset */
  style: "default" | "minimal";
  /** Whether to use TypeScript */
  typescript: boolean;
  /** Tailwind CSS config path */
  tailwind: {
    /** Path to tailwind config */
    config: string;
    /** Path to global CSS file */
    css: string;
    /** Base color variable prefix */
    baseColor: string;
  };
  /** Component aliases — where components get installed */
  aliases: {
    /** UI component directory */
    components: string;
    /** Utility directory (cn helper, etc.) */
    utils: string;
  };
  /** Custom theme overrides */
  theme?: {
    /** Path to custom theme file (orbit-theme.json) */
    file?: string;
  };
}

export const defaultConfig: OrbitUIConfig = {
  style: "default",
  typescript: true,
  tailwind: {
    config: "tailwind.config.ts",
    css: "src/app/globals.css",
    baseColor: "slate",
  },
  aliases: {
    components: "@/components/orbit-ui",
    utils: "@/lib/utils",
  },
};

export function validateConfig(config: Partial<OrbitUIConfig>): config is OrbitUIConfig {
  return !!(
    config.style &&
    config.tailwind &&
    config.tailwind.config &&
    config.tailwind.css &&
    config.aliases &&
    config.aliases.components &&
    config.aliases.utils
  );
}
