import { copyFileSync, existsSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Copies the day's news image to the output directory.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const here = dirname(fileURLToPath(import.meta.url));
const dest = join(outDir, "entry.png");
mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "entry.png"), dest);
if (!existsSync(dest)) {
  throw new Error(`entry.png did not land in ${outDir}`);
}
console.log(`entry.png written to ${dest} (${statSync(dest).size} bytes)`);
