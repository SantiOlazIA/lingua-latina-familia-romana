// tests/helpers.js
import { readdirSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

export const RADIX = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

// Reddit [{ num, data }] pro omnibus data_capitulumN.js, ordinata.
export async function onusOmniaCapitula() {
  const files = readdirSync(RADIX)
    .map((f) => ({ f, m: f.match(/^data_capitulum(\d+)\.js$/) }))
    .filter((x) => x.m)
    .map((x) => ({ file: x.f, num: parseInt(x.m[1], 10) }))
    .sort((a, b) => a.num - b.num);

  const out = [];
  for (const { file, num } of files) {
    const mod = await import(pathToFileURL(path.join(RADIX, file)).href);
    const exports = Object.values(mod);
    out.push({ num, file, exports, data: exports[0] });
  }
  return out;
}
