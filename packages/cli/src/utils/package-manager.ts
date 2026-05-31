import fs from "fs-extra";
import path from "path";
import { execSync } from "child_process";

export type PackageManager = "npm" | "yarn" | "pnpm" | "bun";

const LOCK_FILES: Record<string, PackageManager> = {
  "bun.lockb": "bun",
  "bun.lock": "bun",
  "pnpm-lock.yaml": "pnpm",
  "yarn.lock": "yarn",
  "package-lock.json": "npm",
};

export function detectPackageManager(cwd?: string): PackageManager {
  const dir = cwd || process.cwd();

  // Check packageManager field in package.json (corepack standard)
  const pkgPath = path.join(dir, "package.json");
  if (fs.existsSync(pkgPath)) {
    try {
      const pkg = fs.readJsonSync(pkgPath);
      if (pkg.packageManager) {
        const pm = pkg.packageManager.split("@")[0];
        if (["npm", "yarn", "pnpm", "bun"].includes(pm)) {
          return pm as PackageManager;
        }
      }
    } catch {}
  }

  // Check lock files
  for (const [lockFile, pm] of Object.entries(LOCK_FILES)) {
    if (fs.existsSync(path.join(dir, lockFile))) {
      return pm;
    }
  }

  return "npm";
}

export function getInstallCmd(pm: PackageManager): string {
  switch (pm) {
    case "yarn":
      return "yarn add";
    case "pnpm":
      return "pnpm add";
    case "bun":
      return "bun add";
    default:
      return "npm install";
  }
}

export function installDeps(deps: string[], cwd?: string): void {
  const pm = detectPackageManager(cwd);
  const cmd = getInstallCmd(pm);
  const depsStr = deps.join(" ");

  execSync(`${cmd} ${depsStr}`, {
    cwd: cwd || process.cwd(),
    stdio: "pipe",
    timeout: 120_000,
  });
}
