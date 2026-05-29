import { Command } from "commander";
import inquirer from "inquirer";
import fs from "fs-extra";
import path from "path";
import chalk from "chalk";
import ora from "ora";
import { OrbitUIConfig, defaultConfig } from "../config";
import { generateThemeCSS, orbitDark, orbitLight } from "../theme";
import { generateCNUtil } from "../utils/cn";

export function initCommand(): Command {
  return new Command("init")
    .description("Initialize orbit-ui in your project")
    .option("-y, --yes", "Skip prompts, use defaults")
    .action(async (options) => {
      console.log(chalk.cyan("\n✨ Welcome to orbit-ui!\n"));

      let config: OrbitUIConfig;

      if (options.yes) {
        config = { ...defaultConfig };
      } else {
        const answers = await inquirer.prompt([
          {
            type: "list",
            name: "style",
            message: "Which style do you want?",
            choices: [
              { name: "Default  — glass gradient + depth effects", value: "default" },
              { name: "Minimal — clean, no effects", value: "minimal" },
            ],
            default: "default",
          },
          {
            type: "confirm",
            name: "typescript",
            message: "Do you use TypeScript?",
            default: true,
          },
          {
            type: "input",
            name: "tailwindConfig",
            message: "Where is your tailwind config?",
            default: "tailwind.config.ts",
          },
          {
            type: "input",
            name: "tailwindCss",
            message: "Where is your global CSS file?",
            default: "src/app/globals.css",
          },
          {
            type: "input",
            name: "componentsAlias",
            message: "Where should components be installed?",
            default: "@/components/orbit-ui",
          },
          {
            type: "input",
            name: "utilsAlias",
            message: "Where should the cn utility be installed?",
            default: "@/lib/utils",
          },
        ]);

        config = {
          style: answers.style,
          typescript: answers.typescript,
          tailwind: {
            config: answers.tailwindConfig,
            css: answers.tailwindCss,
            baseColor: "slate",
          },
          aliases: {
            components: answers.componentsAlias,
            utils: answers.utilsAlias,
          },
        };
      }

      const spinner = ora("Setting up orbit-ui...").start();

      try {
        // 1. Write config file
        await fs.writeJSON("orbit-ui.json", config, { spaces: 2 });

        // 2. Write theme CSS
        const themeCSS = generateThemeCSS(orbitDark, orbitLight);
        const cssPath = config.tailwind.css;

        if (await fs.pathExists(cssPath)) {
          const existing = await fs.readFile(cssPath, "utf-8");
          // Append orbit theme if not already present
          if (!existing.includes("orbit-ui theme")) {
            await fs.appendFile(cssPath, `\n\n${themeCSS}`);
            spinner.info(`Appended theme to ${chalk.cyan(cssPath)}`);
          } else {
            spinner.info(`Theme already exists in ${chalk.cyan(cssPath)}`);
          }
        } else {
          await fs.ensureFile(cssPath);
          await fs.writeFile(cssPath, themeCSS);
          spinner.info(`Created ${chalk.cyan(cssPath)} with orbit theme`);
        }

        // 3. Write cn utility
        const utilsDir = resolveAliasDir(config.aliases.utils);
        const ext = config.typescript ? "ts" : "js";
        const utilsPath = path.join(utilsDir, `utils.${ext}`);
        await fs.ensureDir(path.dirname(utilsPath));
        await fs.writeFile(utilsPath, generateCNUtil());

        spinner.succeed(chalk.green("orbit-ui initialized! ✨"));
        console.log();
        console.log(chalk.gray("  Next steps:"));
        console.log(chalk.gray("  1. Install dependencies:  ") + chalk.cyan("npm install clsx tailwind-merge class-variance-authority"));
        console.log(chalk.gray("  2. Add components:         ") + chalk.cyan("npx orbit-ui add button"));
        console.log(chalk.gray("  3. Customize theme:        ") + chalk.cyan("npx orbit-ui theme"));
        console.log();
      } catch (err: any) {
        spinner.fail(chalk.red("Failed to initialize"));
        console.error(err.message);
        process.exit(1);
      }
    });
}

/**
 * Convert alias path (@/...) to filesystem path
 */
function resolveAliasDir(alias: string): string {
  const aliasPath = alias.replace(/^@\//, "src/");
  return path.resolve(process.cwd(), aliasPath);
}
