import { Command } from "commander";
import chalk from "chalk";
import { getRegistry } from "../registry/fetch";

export function listCommand(): Command {
  return new Command("list")
    .description("List all available Orbit Design components")
    .action(async () => {
      try {
        const registry = await getRegistry();

        console.log(chalk.cyan("\n✨ Available Orbit Design components:\n"));

        const items = Array.from(registry.values());

        for (const item of items) {
          const deps = item.registryDependencies?.length
            ? chalk.gray(` (requires: ${item.registryDependencies.join(", ")})`)
            : "";
          console.log(`  ${chalk.green("●")} ${chalk.bold(item.name)} ${chalk.gray(`[${item.type}]`)}${deps}`);

          if (item.dependencies?.length) {
            console.log(chalk.gray(`    npm deps: ${item.dependencies.join(", ")}`));
          }
        }

        console.log();
        console.log(chalk.gray(`  Total: ${items.length} components`));
        console.log(chalk.gray("  Add a component: ") + chalk.cyan("npx orbit-design add <name>"));
        console.log();
      } catch (err: any) {
        console.error(chalk.red("Failed to load registry:"), err.message);
        process.exit(1);
      }
    });
}
