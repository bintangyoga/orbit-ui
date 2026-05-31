import { Command } from "commander";
import fs from "fs-extra";
import path from "path";
import chalk from "chalk";
import ora from "ora";
import { OrbitUIConfig } from "../config";
import { RegistryItem, resolveDependencies } from "../registry";
import { getRegistry } from "../registry/fetch";

export function addCommand(): Command {
  return new Command("add")
    .description("Add a component to your project")
    .argument("[components...]", "component names to add")
    .option("-a, --all", "Add all available components")
    .option("-o, --overwrite", "Overwrite existing files")
    .action(async (componentNames: string[], options) => {
      // Load config
      let config: OrbitUIConfig;
      try {
        config = await fs.readJSON("orbit-ui.json");
      } catch {
        console.error(chalk.red("\n  Orbit Design is not initialized."));
        console.log(chalk.gray("  Run ") + chalk.cyan("npx orbit-design init") + chalk.gray(" first.\n"));
        process.exit(1);
      }

      const spinner = ora("Loading registry...").start();

      try {
        const registry = await getRegistry();

        // Determine which components to install
        let targets: string[];

        if (options.all) {
          targets = Array.from(registry.keys());
        } else if (componentNames.length > 0) {
          targets = componentNames;
        } else {
          // Interactive selection
          spinner.stop();
          const available = Array.from(registry.keys());
          const { selected } = await import("inquirer").then((m) =>
            m.default.prompt([
              {
                type: "checkbox",
                name: "selected",
                message: "Which components do you want to add?",
                choices: available.map((name) => {
                  const item = registry.get(name)!;
                  return {
                    name: `${name} ${chalk.gray(`— ${item.type}`)}`,
                    value: name,
                  };
                }),
              },
            ])
          );
          targets = selected;
        }

        if (targets.length === 0) {
          spinner.info("No components selected.");
          return;
        }

        // Resolve all dependencies
        const resolved = new Set<string>();
        const allItems: RegistryItem[] = [];

        for (const name of targets) {
          if (!registry.has(name)) {
            spinner.warn(chalk.yellow(`Component "${name}" not found. Skipping.`));
            continue;
          }
          allItems.push(...resolveDependencies(name, registry, resolved));
        }

        // Install each item
        const componentsDir = resolveAliasDir(config.aliases.components);
        const utilsDir = resolveAliasDir(config.aliases.utils);

        for (const item of allItems) {
          spinner.text = `Adding ${chalk.cyan(item.name)}...`;

          for (const file of item.files) {
            const targetPath = path.join(
              file.type === "registry:lib" || file.type === "registry:style"
                ? utilsDir
                : componentsDir,
              file.path
            );

            // Check if file exists
            if ((await fs.pathExists(targetPath)) && !options.overwrite) {
              const { overwrite } = await import("inquirer").then((m) =>
                m.default.prompt([
                  {
                    type: "confirm",
                    name: "overwrite",
                    message: `${targetPath} already exists. Overwrite?`,
                    default: false,
                  },
                ])
              );
              if (!overwrite) {
                spinner.info(`Skipped ${chalk.gray(targetPath)}`);
                continue;
              }
            }

            await fs.ensureDir(path.dirname(targetPath));
            await fs.writeFile(targetPath, file.content);
          }

          // Install npm dependencies
          if (item.dependencies && item.dependencies.length > 0) {
            spinner.text = `Installing dependencies for ${item.name}...`;
            const { execSync } = await import("child_process");
            const deps = item.dependencies.join(" ");
            execSync(`npm install ${deps}`, { stdio: "pipe" });
          }
        }

        spinner.succeed(
          chalk.green(`Added ${allItems.length} component(s)! ✨`)
        );

        // Print installed components
        for (const item of allItems) {
          console.log(chalk.gray(`  ✓ ${item.name}`));
        }
        console.log();
      } catch (err: any) {
        spinner.fail(chalk.red("Failed to add components"));
        console.error(err.message);
        process.exit(1);
      }
    });
}

function resolveAliasDir(alias: string): string {
  const aliasPath = alias.replace(/^@\//, "src/");
  return path.resolve(process.cwd(), aliasPath);
}
