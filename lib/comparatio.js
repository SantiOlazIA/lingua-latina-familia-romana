// lib/comparatio.js
// Logica pura de comparatio responsorum (sine DOM), ut probari possit.

// Normalizatio macronum: tollit macrones, minusculas facit, spatia tollit.
export function stripMacrons(str) {
  return String(str ?? '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

// Comparat responsum usoris cum exspectato.
// Reddit: 'exacte' (omnino idem), 'lene' (macrones desunt) vel 'prave'.
export function comparaResponsum(usor, exspectatum) {
  const u = String(usor ?? '').trim();
  const e = String(exspectatum ?? '').trim();
  if (u === e) return 'exacte';
  if (stripMacrons(u) === stripMacrons(e)) return 'lene';
  return 'prave';
}
