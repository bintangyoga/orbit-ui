import { RegistryItem } from "../registry";
import { generateCNUtil } from "../utils/cn";

export function getUtilsRegistry(): RegistryItem[] {
  return [
    {
      name: "utils",
      type: "registry:lib",
      dependencies: ["clsx", "tailwind-merge"],
      files: [
        {
          path: "utils.ts",
          content: generateCNUtil(),
          type: "registry:lib",
        },
      ],
    },
  ];
}
