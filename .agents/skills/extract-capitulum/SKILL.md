---
name: extract-capitulum
description: >-
  Procedure and standards for extracting, tokenizing, and validating chapters
  directly from familia_romana.pdf for the Lingua Latina per se Illustrata web app.
  Guarantees 100% complete text, zero lost lines, and full punctuation and macrons.
---

# Extract-Capitulum Skill (Lingua Latina per sē Illustrata)

Hic fasciculus cōnstituit modum operandī ad textūs capitulōrum ex librō `familia_romana.pdf` fīdēliter et integrē extrahendōs sine amissiōne versuum.

---

## 1. Rēgulae sevērae dē Integritāte (Integrity Standards)

1. **Nullus versus amittendus:**
   * Quodque capitulum habet numerum versuum typographīcōrum fīxum in librō impressō (e.g. Capitulum I = versūs 1–83; Capitulum II = versūs 1–85+; Capitulum III = versūs 1–80+).
   * Antequam fasciculus `data_capitulumX.js` committātur, scriptum verificātiōnis computāre dēbet omnēs versūs.
2. **Puncta et Signa Graphica:**
   * Omnia puncta (`.`, `,`, `?`, `!`, `:`, `;`, `'`, `"`) accurate servanda sunt in proprietātibus `lead` et `punc` cuiusque verbī.
   * Nullum verbum a sententiā dīvellendum est sine punctō suō.
3. **Macrōnēs Fīdēlēs:**
   * Omnēs vōcālēs longae (`ā, ē, ī, ō, ū`) accurate retinendae sunt.
4. **Compositio Fasciculi `data_capitulumX.js`:**
   * Quodque capitulum complectī dēbet:
     1. `numerus`, `titulus`, `subtitulus`
     2. `tabulaDeclinationum` (fōrmae grammaticae novae)
     3. `vocabularium` (vocābula nova huius capitulī cum lemmate, parte ōrātiōnis, genere, et notātiōne)
     4. `sectiones` (Lēctiōnēs I, II, III cum versibus et verbīs tokenizātīs)
     5. `grammaticaLatina` (explicātiōnēs grammaticae authenticae Ørbergianae)
     6. `pensa` (Pēnsum A, Pēnsum B, Pēnsum C)

---

## 2. Gradūs Operātiōnis (Step-by-Step Workflow)

1. **Inspectiō PDF:**
   * Inspicere pāginās capitulī in `familia_romana.pdf` per Python `pypdf`.
   * Notāre primam et ultimam lineam textūs lēctiōnum.
2. **Dissectio Textūs:**
   * Distribuere textum in versūs cum numerīs Rōmānīs (I, V, X, XV...) et notīs marginalibus authenticīs.
   * Rēgula tokenizātiōnis:
     ```python
     tok = {
         "f": clean_latin_word,
         "l": lemma,
         "p": pars_orationis,
         "c": casus,
         "n": numerus,
         "g": genus,
         "d": context_note,
         "lead": leading_punctuation_if_any,
         "punc": trailing_punctuation_if_any
     }
     ```
3. **Verificātiō Automāta:**
   * Curre scriptum verificātiōnis:
     - Versūs aequant numerum PDF.
     - Omnia verba habent analysim validam.
     - Omnia pensa continent clāvēs solutionum.
