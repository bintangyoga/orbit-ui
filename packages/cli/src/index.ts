#!/usr/bin/env node

import { Command } from "commander";
import { initCommand } from "./commands/init";
import { addCommand } from "./commands/add";
import { listCommand } from "./commands/list";
import { themeCommand } from "./commands/theme";

const program = new Command();

program
  .name("orbit-design")
  .description("✨ A beautiful glassmorphic React component library CLI")
  .version("0.1.0");

program.addCommand(initCommand());
program.addCommand(addCommand());
program.addCommand(listCommand());
program.addCommand(themeCommand());

program.parse();
