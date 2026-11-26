import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Stapler, steel, c. 1998, gift of the Accounts Department. It bound 40,000 contracts nobody read, and outlasted three mergers, two CEOs, and the company itself.";

function gate(line: string): string {
  const text = line.trim();
  if (text.length < 1 || text.length > 180) {
    throw new Error("entry must be 1 to 180 characters");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  if (Buffer.byteLength(text, "utf8") > 180) {
    throw new Error("entry must be at most 180 bytes");
  }
  if (!text.includes("Stapler")) {
    throw new Error("entry must name its office object");
  }
  return text;
}

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, gate(LINE), "utf8");
