# Regulae et Cōnstitūtiō Proiectī (AGENTS.md)

Hic fasciculus cōnstituit praecepta architectūrae, linguae, et dēsignātiōnis huius prōiectī (*Lingua Latina per sē Illustrata: Familia Romana*).

---

## 1. Praeceptum Prīmārium: Tantum Latīnē (Pure Latin Only)
* **Nullum verbum Anglicum:** Omnia in interfacie, epistulīs errōrum, titulis, nōtātiōnibus grammaticīs, et nōtīs iūdicandī Latīnē scrībenda sunt.
* **Terminī Grammaticī Rōmānī:**
  * Partēs ōrātiōnis: *Nōmen substantīvum*, *Nōmen adiectīvum*, *Nōmen proprium*, *Verbum*, *Praepositiō*, *Coniūnctiō*, *Adverbium*.
  * Casūs: *Nōminātīvus*, *Genetīvus*, *Datīvus*, *Accūsātīvus*, *Ablātīvus*, *Vocātīvus*.
  * Numerī: *Singulāris*, *Plūrālis*.
  * Genera: *Masculīnum*, *Fēminīnum*, *Neutrum*.
  * Persōnae: *Persōna I, II, III*.
  * Tempora & Modī: *Praesēns indicātīvī*, *Infinītīvus*, etc.
* **Iūdicātiō Exercitiōrum & Feedback:**
  * Actiones/Botōnēs: *Comprobā pēnsum* (vel *Comprobā respōnsa*), *Iterum comprobā*. Vitanda est vox sōla *Probā* ad confūsiōnem cum *Prāvē* dēpellendam.
  * Status: *Rēctē!* (exactum vel lēne), *Prāvē!* (errātum), *Pūnctīs potītus*.
  * Feedback Vīsibile (Non latēns in tooltips):
    1. Si macrō dēficit (Optiō C lēnis): colōre vīridī pūnctum datur, sed statim sub versū mōnstrātur monitiō paedagōgica vīsibilis (*ℹ Rēctē! Sed nōtā macrōnem: ...*).
    2. Si errātum est (*Prāvē*): colōre rubrō mōnstrātur fōrma rēcta (*✘ Prāvē! Rēctē: ...*) ūnā cum brevī explicātiōne grammaticā Latīnē.

---

## 2. Dēsignātiō Graphica: "Taste-Skill" (Leon Lin Principles)
* **Anti-AI-Slop:**
  * Nūllī colōres purpurei/caerulei neōnī, nūllae tesserae inflātae (bubbly pill badges).
  * Nūllae umbrae fictae ingentēs (no heavy drop-shadows or glassmorphism).
* **Colorēs Authentici:**
  * Charta: `#FAF7F0` (pergamenum calidum).
  * Atrāmentum: `#221E1B` (fuscus antīquus).
  * Rubrum Rōmānum: `#8B1E1E` (purpura/rubrum imperiāle ad titulos et accentūs).
  * Subtile saxum: `#E5DFD3` ad lineās et marginēs.
* **Typographia:**
  * Tituli et capitula: *Cinzel* (litterae lapidāriae Rōmānae).
  * Textus et notae: *EB Garamond* (litterae classicae cum macrōnibus `ā, ē, ī, ō, ū`).

---

## 3. Disciplīna Technica (Matt Pocock Principles)
* **Dāta Fīdēlia et Determināta:**
  * Omnis sententia et verbum accurate tokenizātum in `data_capitulum1.js`.
  * Quodque verbum habet: `forma`, `lemma`, `pars`, `casus`, `numerus`, `genus`, `notatio`.
* **Verificātiō Automāta (Testing):**
  * Omnia Pēnsa (A, B, C) probanda sunt per scriptum verificātōris antequam committantur.
  * Macrōnum aequiparātiō: verba cum macrōnibus et sine macrōnibus intellegenda sunt fīdēliter.
* **Zero-Build Architecture:**
  * Fasciculi purī HTML5, CSS3, et ES Modules (sine necessitate `npm install`).
