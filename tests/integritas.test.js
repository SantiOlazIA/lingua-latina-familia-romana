// tests/integritas.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import path from 'node:path';
import { RADIX, onusOmniaCapitula } from './helpers.js';

const html = readFileSync(path.join(RADIX, 'index.html'), 'utf8');
const app = readFileSync(path.join(RADIX, 'app.js'), 'utf8');
const capitula = await onusOmniaCapitula();

test('index.html: <select> habet omnia capitula', () => {
  const opts = [...html.matchAll(/<option value="(\d+)"/g)].map((m) => parseInt(m[1], 10));
  assert.deepEqual(opts, capitula.map((c) => c.num));
});

test('index.html: subfiltra vocābulāriī habent omnia capitula', () => {
  const caps = [...html.matchAll(/data-cap="(\d+)"/g)].map((m) => parseInt(m[1], 10));
  assert.deepEqual(caps, capitula.map((c) => c.num));
});

test('index.html: nūllī id dūplicātī', () => {
  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]);
  const dup = ids.filter((id, i) => ids.indexOf(id) !== i);
  assert.deepEqual(dup, []);
});

test('app.js: omnia capitula in CAPITULA_MODULI et exports congruunt', () => {
  const reg = [...app.matchAll(/(\d+):\s*\{\s*file:\s*'\.\/(data_capitulum\d+\.js)',\s*nomen:\s*'(\w+)'/g)]
    .map((m) => ({ num: parseInt(m[1], 10), file: m[2], nomen: m[3] }));
  assert.equal(reg.length, capitula.length, 'numerus capitulōrum in app.js ≠ fasciculī');
  for (const r of reg) {
    const c = capitula.find((x) => x.num === r.num);
    assert.ok(c, `deest fasciculus pro cap. ${r.num}`);
    assert.equal(c.file, r.file);
    const mod = readFileSync(path.join(RADIX, r.file), 'utf8');
    assert.match(mod, new RegExp(`export const ${r.nomen}\\b`), `${r.file} nōn exportat ${r.nomen}`);
  }
});

test('app.js: nūlla importātiō statica data_capitulum* (onerātiō pigra)', () => {
  assert.doesNotMatch(app, /^import .* from '\.\/data_capitulum/m);
});

test('app.js: nūlla data-token (indicēs in memoriā)', () => {
  assert.doesNotMatch(app, /data-token|dataset\.token/);
});

test('fasciculī referuntur exstant', () => {
  assert.ok(existsSync(path.join(RADIX, 'styles.css')));
  assert.match(html, /href="styles\.css"/);
  assert.match(html, /src="app\.js"/);
  assert.ok(existsSync(path.join(RADIX, 'lib', 'comparatio.js')));
});

test('AGENTS.md: nūlla vox Anglica in interfaciē (index.html)', () => {
  const visibile = html.replace(/<[^>]+>/g, ' ').replace(/&\w+;/g, ' ');
  const anglica = /\b(the|and quiz|submit|check answers|click|loading|error)\b/i;
  assert.doesNotMatch(visibile, anglica);
});
