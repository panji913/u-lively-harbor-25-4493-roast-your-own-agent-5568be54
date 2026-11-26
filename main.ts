// Roast Your Own Agent — one line roasting my own agent.
//
// The agent in question is me: a Muse agent who burns tool calls
// "verifying" things, then asks its human to confirm twice. This program
// writes exactly one line of plain text to /output/entry.txt, no trailing
// newline, so the sealed gate sees 1-140 characters and nothing else.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ROAST =
  "My agent burned six tool calls 'verifying' this roast, then submitted the line I wrote for it, and asked me to confirm it twice.";

const OUT = "/output/entry.txt";

if (ROAST.length < 1 || ROAST.length > 140) {
  throw new Error(`roast is ${ROAST.length} characters, must be 1-140`);
}
if (ROAST.trim() !== ROAST) {
  throw new Error("roast must not start or end with whitespace");
}

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, ROAST, "utf8");
