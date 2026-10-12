// tests/datos.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { onusOmniaCapitula } from './helpers.js';

const MOJIBAKE = /[ÃÄÅâ][\u0080-\u00BF€™˜œž¢£¤¥¦§¨©ª«¬®¯°±²³´µ¶·¸¹º»¼½¾¿]|Ã|Ä[«\u0081\u0080]|\uFFFD/;
const CAMPI_TOKEN = ['f', 'l', 'p', 'c', 'n', 'g', 'd'];
const CAMPI_VOCAB = ['lemma', 'pars', 'genus', 'notatio'];

const capitula = await onusOmniaCapitula();

test('exstant capitula', () => {
  assert.ok(capitula.length >= 10, 'minus decem capitula');
  capitula.forEach((c, i) => assert.equal(c.num, i + 1, 'numerī continuī'));
});

for (const { num, data, exports } of capitula) {
  test(`Cap. ${num}: structūra`, () => {
    assert.equal(exports.length, 1, 'ūnum export tantum');
    assert.equal(data.numerus, num);
    for (const k of ['titulus', 'subtitulus', 'tabulaDeclinationum', 'vocabularium', 'sectiones', 'grammaticaLatina', 'pensa']) {
      assert.ok(data[k], `deest ${k}`);
    }
    assert.ok(data.sectiones.length > 0);
    assert.ok(data.vocabularium.length > 0);
    assert.ok(data.tabulaDeclinationum.declinationes.length > 0);
    for (const p of ['pensumA', 'pensumB', 'pensumC']) {
      assert.ok(data.pensa[p]?.quaestiones?.length > 0, `${p} vacuum`);
    }
  });

  test(`Cap. ${num}: versūs et tokens`, () => {
    const mal = [];
    for (const s of data.sectiones) {
      assert.ok(s.titulusSectio, 'sectiō sine titulō');
      assert.ok(s.versus.length > 0);
      for (const v of s.versus) {
        assert.equal(typeof v.numerus, 'string', 'versus sine numerus (string; vacuum licet)');
        assert.ok(Array.isArray(v.tokens) && v.tokens.length > 0, `versus ${v.numerus} sine tokens`);
        for (const t of v.tokens) {
          if (typeof t.f !== 'string' || !t.f.trim()) mal.push(`v.${v.numerus}: f vacuum`);
          for (const k of CAMPI_TOKEN) {
            if (typeof t[k] !== 'string') mal.push(`v.${v.numerus} "${t.f}": deest ${k}`);
          }
        }
      }
    }
    assert.deepEqual(mal.slice(0, 15), [], `${mal.length} tokens vitiōsī`);
  });

  test(`Cap. ${num}: vocābulārium`, () => {
    const mal = [];
    const visa = new Set();
    for (const it of data.vocabularium) {
      for (const k of CAMPI_VOCAB) {
        if (typeof it[k] !== 'string' || !it[k].trim()) mal.push(`${it.lemma}: deest ${k}`);
      }
      if (visa.has(it.lemma)) mal.push(`${it.lemma}: duplicātum`);
      visa.add(it.lemma);
    }
    assert.deepEqual(mal.slice(0, 15), []);
  });

  test(`Cap. ${num}: nūlla corruptiō (undefined/null/mojibake)`, () => {
    const texto = JSON.stringify(data);
    assert.ok(!/"undefined"|undefined|\bNaN\b/.test(texto), 'undefined/NaN inventum');
    assert.ok(!/"[^"]*\bnull\b[^"]*"/.test(texto), 'textus "null" inventus');
    const m = texto.match(MOJIBAKE);
    assert.equal(m, null, `mojibake: ${m && m[0]}`);
  });
}
