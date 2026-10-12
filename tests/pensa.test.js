// tests/pensa.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { comparaResponsum, stripMacrons } from '../lib/comparatio.js';
import { onusOmniaCapitula } from './helpers.js';

test('stripMacrons: tollit macrones et normālizat', () => {
  assert.equal(stripMacrons('Rōma'), 'roma');
  assert.equal(stripMacrons('  Fīliī '), 'filii');
  assert.equal(stripMacrons('ĀĒĪŌŪ'), 'aeiou');
  assert.equal(stripMacrons(undefined), '');
});

test('comparaResponsum: exacte / lene / prave', () => {
  assert.equal(comparaResponsum('ancillārum', 'ancillārum'), 'exacte');
  assert.equal(comparaResponsum(' ancillārum ', 'ancillārum'), 'exacte');
  assert.equal(comparaResponsum('ancillarum', 'ancillārum'), 'lene');
  assert.equal(comparaResponsum('Ancillarum', 'ancillārum'), 'lene');
  assert.equal(comparaResponsum('ancillae', 'ancillārum'), 'prave');
  assert.equal(comparaResponsum('', 'ancillārum'), 'prave');
});

const capitula = await onusOmniaCapitula();

for (const { num, data } of capitula) {
  const { pensumA, pensumB, pensumC } = data.pensa;

  test(`Cap. ${num}: Pēnsa A et B — responsa recta comprobantur`, () => {
    const ids = new Set();
    for (const [nomen, p] of [['A', pensumA], ['B', pensumB]]) {
      assert.ok(p.descriptio, `Pēnsum ${nomen} sine descriptiōne`);
      for (const q of p.quaestiones) {
        assert.ok(q.id, `Pēnsum ${nomen}: quaestiō sine id`);
        assert.ok(!ids.has(q.id), `id duplicātum: ${q.id}`);
        ids.add(q.id);

        const lacunae = [q.lacuna];
        if (q.lacuna2 !== undefined && q.lacuna2 !== null && q.lacuna2 !== '') lacunae.push(q.lacuna2);
        for (const l of lacunae) {
          assert.ok(typeof l === 'string' && l.trim(), `${q.id}: lacūna vacua`);
          assert.equal(comparaResponsum(l, l), 'exacte', `${q.id}: ${l}`);
          assert.equal(comparaResponsum(stripMacrons(l), l) === 'prave', false, `${q.id}: sine macrōnibus dēbet esse lēne`);
          assert.equal(comparaResponsum(l + 'x', l), 'prave', `${q.id}: erratum dēbet esse prāvum`);
        }
        // Dēscriptiō explicātiōnis: nōn dēbet esse vacua.
        assert.ok(typeof q.explicatio === 'string' && q.explicatio.trim(), `${q.id}: deest explicātiō`);
        // Pars textūs praesēns (praefix/suffix definīta ut renderī nōn "undefined" sit)
        if (nomen === 'B') {
          assert.equal(typeof q.praefix, 'string', `${q.id}: praefix`);
          assert.equal(typeof q.suffix, 'string', `${q.id}: suffix`);
        }
      }
    }
    // Pēnsum A: lacuna2 requīrit inter
    for (const q of pensumA.quaestiones) {
      if (q.lacuna2) assert.equal(typeof q.inter, 'string', `${q.id}: lacuna2 sine inter`);
    }
  });

  test(`Cap. ${num}: Pēnsum C — interrogātiōnēs et exempla`, () => {
    const ids = new Set();
    assert.ok(pensumC.descriptio);
    for (const q of pensumC.quaestiones) {
      assert.ok(q.id && !ids.has(q.id), `id vitiōsum: ${q.id}`);
      ids.add(q.id);
      assert.ok(q.interrogatio?.trim(), `${q.id}: sine interrogātiōne`);
      assert.ok(q.exemplum?.trim(), `${q.id}: sine exemplō`);
    }
  });

  test(`Cap. ${num}: id quaestiōnum ūnīca inter A, B, C`, () => {
    const todos = [pensumA, pensumB, pensumC].flatMap((p) => p.quaestiones.map((q) => q.id));
    assert.equal(new Set(todos).size, todos.length);
  });
}
