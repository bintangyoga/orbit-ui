/**
 * orbit-ui Registry — component definitions
 */

export interface RegistryFile {
  /** Target path relative to components directory */
  path: string;
  /** File content (React component source) */
  content: string;
  /** File type */
  type: "registry:component" | "registry:lib" | "registry:style";
}

export interface RegistryDependency {
  /** Component name */
  name: string;
  /** npm dependencies to install */
  dependencies?: string[];
}

export interface RegistryItem {
  /** Component name (kebab-case) */
  name: string;
  /** Component type */
  type: "registry:ui" | "registry:lib" | "registry:style";
  /** npm dependencies to install */
  dependencies?: string[];
  /** Other orbit-ui components this depends on */
  registryDependencies?: string[];
  /** Files to create */
  files: RegistryFile[];
  /** Tailwind config additions */
  tailwind?: {
    /** Additional CSS to inject */
    css?: string;
  };
}

/**
 * Resolve all dependencies for a component (recursive)
 */
export function resolveDependencies(
  name: string,
  registry: Map<string, RegistryItem>,
  resolved: Set<string> = new Set()
): RegistryItem[] {
  const items: RegistryItem[] = [];
  const item = registry.get(name);

  if (!item) {
    throw new Error(`Component "${name}" not found in registry.`);
  }

  if (resolved.has(name)) {
    return items;
  }

  // Resolve dependencies first
  if (item.registryDependencies) {
    for (const dep of item.registryDependencies) {
      items.push(...resolveDependencies(dep, registry, resolved));
    }
  }

  resolved.add(name);
  items.push(item);
  return items;
}
