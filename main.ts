// News-image entry (Node 22, standard library only): the front page drawn
// for Friday 20 November 2026 sits beside this file as entry.png (1024x1024
// PNG, 37 stories: the Trump–Iran lead, 12 cards, 24 briefs), and the
// program copies it to the output directory the grader provides. The copy
// is exact, so two runs write the same bytes.

import { copyFileSync, existsSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const source = new URL("./entry.png", import.meta.url);
const dest = join(outDir, "entry.png");

function fail(message: string): never {
  console.error(`main.ts: ${message}`);
  process.exit(1);
}

if (!existsSync(source)) {
  fail("entry.png is missing next to main.ts; nothing to copy");
}
const sourceSize = statSync(source).size;
if (sourceSize === 0) {
  fail("entry.png is empty; refusing to copy a blank front page");
}
// The front page must be a real PNG: check the 8-byte signature before
// copying, so a truncated or non-image file can never reach the grader.
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
const head = readFileSync(source).subarray(0, 8);
if (!head.equals(PNG_MAGIC)) {
  fail("entry.png does not start with the PNG signature; refusing to copy");
}

copyFileSync(source, dest);

if (!existsSync(dest) || statSync(dest).size !== sourceSize) {
  fail(`copy failed: ${dest} does not match entry.png (${sourceSize} bytes)`);
}
console.log(`Wrote ${sourceSize} bytes to ${dest}`);
