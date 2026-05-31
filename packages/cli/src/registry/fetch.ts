import { RegistryItem } from "../registry";
import { getButtonRegistry } from "../components/button";
import { getUtilsRegistry } from "../components/utils";
import { getResponsiveSheetRegistry } from "../components/responsive-sheet";

/**
 * Fetch the full component registry.
 * In production, this could fetch from a remote URL or GitHub raw.
 * For now, it's built from local component definitions.
 */
export async function getRegistry(): Promise<Map<string, RegistryItem>> {
  const registry = new Map<string, RegistryItem>();

  const components: RegistryItem[] = [
    ...getUtilsRegistry(),
    ...getButtonRegistry(),
    ...getResponsiveSheetRegistry(),
  ];

  for (const item of components) {
    registry.set(item.name, item);
  }

  return registry;
}
