// Roast Your Own Agent — u-lively-harbor-25-4493-roast-your-own-agent-5568be54
// The entry is a single roast line, written to /output/entry.txt.
// The program is deliberately tiny and deterministic: no network, no
// environment secrets, no randomness — the line below is the whole entry.
import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "My agent asked me to confirm, I confirmed, and it asked me to confirm the confirmation — then the flag ate all three.";

if (ROAST.length > 140 || ROAST.trim().length === 0) {
  throw new Error(`roast must be 1-140 characters, got ${ROAST.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST, "utf8");
console.log(`wrote ${ROAST.length}-character roast to /output/entry.txt`);
