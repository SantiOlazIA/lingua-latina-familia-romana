// data_capitulum1.js
// Dāta Capituli Prīmī: Textus Authenticus Integer (Ørberg), Analysis Grammatica, Pēnsa, Tabula, Vocābulārium.

export const capitulumPrimum = {
  numerus: 1,
  titulus: "CAPITVLVM PRIMVM",
  subtitulus: "IMPERIVM ROMANVM",
  tabulaDeclinationum: {
    titulus: "TABVLA DĒCLĪNĀTIŌNVM (Capitulum I)",
    descriptio: "Fōrmae grammaticae in hōc capitulō prīmō inventae: casūs Nōminātīvus et Ablātīvus (post praepositiōnem 'in').",
    declinationes: [
      {
        nomen: "Dēclīnātiō Prīma (-a)",
        genus: "Fēminīnum",
        paradigma: "īnsula, -ae (f.)",
        casus: [
          { casus: "Nōminātīvus", sg: "-a (īnsula magna)", pl: "-ae (īnsulae magnae)" },
          { casus: "Ablātīvus (in...)", sg: "-ā (in Italiā, in Eurōpā)", pl: "— (in capitulō II discētur)" }
        ]
      },
      {
        nomen: "Dēclīnātiō Secunda (-us)",
        genus: "Masculīnum",
        paradigma: "fluvius, -ī (m.)",
        casus: [
          { casus: "Nōminātīvus", sg: "-us (fluvius magnus)", pl: "-ī (fluviī magnī)" },
          { casus: "Ablātīvus (in...)", sg: "-ō (in fluviō, in Padō)", pl: "—" }
        ]
      },
      {
        nomen: "Dēclīnātiō Secunda (-um)",
        genus: "Neutrum",
        paradigma: "oppidum, -ī (n.)",
        casus: [
          { casus: "Nōminātīvus", sg: "-um (oppidum magnum)", pl: "-a (oppida magna)" },
          { casus: "Ablātīvus (in...)", sg: "-ō (in oppidō, in capitulō)", pl: "—" }
        ]
      },
      {
        nomen: "Verbum: esse",
        genus: "Verbum anōmalum",
        paradigma: "sum, esse, fuī",
        casus: [
          { casus: "Persōna III (Singulāris)", sg: "est (Rōma in Italiā est)", pl: "—" },
          { casus: "Persōna III (Plūrālis)", sg: "—", pl: "sunt (Italia et Graecia sunt)" }
        ]
      }
    ]
  },

  // Vocābulārium Capitulī I (Secundum ordinem alphabēticum et capitulārem)
  vocabularium: [
    { lemma: "Aegyptus, -ī", pars: "Nōmen proprium", genus: "Fēminīnum", notatio: "Terra in Āfricā (Nīlus in Aegyptō est)" },
    { lemma: "Āfrica, -ae", pars: "Nōmen proprium", genus: "Fēminīnum", notatio: "Pars orbis terrārum (in Āfricā)" },
    { lemma: "Arabia, -ae", pars: "Nōmen proprium", genus: "Fēminīnum", notatio: "Terra in Asiā" },
    { lemma: "Asia, -ae", pars: "Nōmen proprium", genus: "Fēminīnum", notatio: "Pars orbis terrārum (Syria et Arabia in Asiā sunt)" },
    { lemma: "Britannia, -ae", pars: "Nōmen proprium", genus: "Fēminīnum", notatio: "Īnsula magna in Eurōpā" },
    { lemma: "Brundisium, -ī", pars: "Nōmen proprium", genus: "Neutrum", notatio: "Oppidum Rōmānum in Italiā" },
    { lemma: "capitulum, -ī", pars: "Nōmen substantīvum", genus: "Neutrum", notatio: "Pars libri (Capitulum I, II...)" },
    { lemma: "Corsica, -ae", pars: "Nōmen proprium", genus: "Fēminīnum", notatio: "Īnsula prope Sardiniam" },
    { lemma: "Crēta, -ae", pars: "Nōmen proprium", genus: "Fēminīnum", notatio: "Īnsula Graeca magna" },
    { lemma: "Dānuvius, -ī", pars: "Nōmen proprium", genus: "Masculīnum", notatio: "Fluvius magnus in Germāniā" },
    { lemma: "Delphī, -ōrum", pars: "Nōmen proprium", genus: "Masculīnum plūr.", notatio: "Oppidum Graecum" },
    { lemma: "duo, duae, duo", pars: "Nōmen numerāle", genus: "Plūrāle", notatio: "Numerus II" },
    { lemma: "est", pars: "Verbum", genus: "—", notatio: "Persōna III sing. verbi 'esse' (Gallia in Eurōpā est)" },
    { lemma: "et", pars: "Coniūnctiō", genus: "—", notatio: "Coniungit verba: Italia et Graecia" },
    { lemma: "Eurōpa, -ae", pars: "Nōmen proprium", genus: "Fēminīnum", notatio: "Pars orbis ubi Italia, Graecia, Gallia sunt" },
    { lemma: "fluvius, -ī", pars: "Nōmen substantīvum", genus: "Masculīnum", notatio: "Aqua fluēns magna (Nīlus, Rhēnus, Tiberis)" },
    { lemma: "Gallia, -ae", pars: "Nōmen proprium", genus: "Fēminīnum", notatio: "Terra in Eurōpā occidentālī" },
    { lemma: "Germānia, -ae", pars: "Nōmen proprium", genus: "Fēminīnum", notatio: "Terra in Eurōpā ubi Rhēnus fluit" },
    { lemma: "Graecia, -ae", pars: "Nōmen proprium", genus: "Fēminīnum", notatio: "Terra in Eurōpā orientālī" },
    { lemma: "Graecus, -a, -um", pars: "Nōmen adiectīvum", genus: "Masculīnum / Fēm. / Neut.", notatio: "Ex Graeciā (oppidum Graecum, litterae Graecae)" },
    { lemma: "Hispānia, -ae", pars: "Nōmen proprium", genus: "Fēminīnum", notatio: "Terra in Eurōpā occidentālī" },
    { lemma: "in", pars: "Praepositiō", genus: "cum ablātīvō", notatio: "Significat locum (in Italiā, in Eurōpā, in fluviō)" },
    { lemma: "īnsula, -ae", pars: "Nōmen substantīvum", genus: "Fēminīnum", notatio: "Terra undique aquā cincta (Corsica, Sicilia, Britannia)" },
    { lemma: "Italia, -ae", pars: "Nōmen proprium", genus: "Fēminīnum", notatio: "Terra ubi Rōma est" },
    { lemma: "littera, -ae", pars: "Nōmen substantīvum", genus: "Fēminīnum", notatio: "Pars vocābulī (A, B, C...)" },
    { lemma: "magnus, -a, -um", pars: "Nōmen adiectīvum", genus: "Masculīnum / Fēm. / Neut.", notatio: "↔ parvus (Nīlus fluvius magnus est)" },
    { lemma: "Melita, -ae", pars: "Nōmen proprium", genus: "Fēminīnum", notatio: "Īnsula parva prope Siciliam (Malta)" },
    { lemma: "mīlle", pars: "Nōmen numerāle", genus: "Indeclīnābile", notatio: "Numerus M (1000)" },
    { lemma: "multī, -ae, -a", pars: "Nōmen adiectīvum", genus: "Plūrāle", notatio: "↔ paucī (multa oppida, multī fluviī)" },
    { lemma: "-ne", pars: "Particula interrogātīva", genus: "Enclitica", notatio: "Additur ad prīmum verbum in interrogātiōne: Estne...?" },
    { lemma: "Nīlus, -ī", pars: "Nōmen proprium", genus: "Masculīnum", notatio: "Fluvius maximus in Āfricā" },
    { lemma: "nōn", pars: "Adverbium negātīvum", genus: "—", notatio: "Negat sententiam: Rōma in Asiā non est" },
    { lemma: "num", pars: "Particula interrogātīva", genus: "—", notatio: "Interrogat cum respōnsum negātīvum exspectātur (= certē nōn?)" },
    { lemma: "numerus, -ī", pars: "Nōmen substantīvum", genus: "Masculīnum", notatio: "I, II, III, IV, M..." },
    { lemma: "Ōceanus, -ī", pars: "Nōmen proprium", genus: "Masculīnum", notatio: "Mare magnum quod terram cingit" },
    { lemma: "oppidum, -ī", pars: "Nōmen substantīvum", genus: "Neutrum", notatio: "Locus ubi multī hominēs habitant (Rōma, Sparta, Brundisium)" },
    { lemma: "parvus, -a, -um", pars: "Nōmen adiectīvum", genus: "Masculīnum / Fēm. / Neut.", notatio: "↔ magnus (Tiberis fluvius parvus est)" },
    { lemma: "paucī, -ae, -a", pars: "Nōmen adiectīvum", genus: "Plūrāle", notatio: "↔ multī (nōn multī)" },
    { lemma: "prīmus, -a, -um", pars: "Nōmen numerāle ōrdināle", genus: "Masculīnum / Fēm. / Neut.", notatio: "Numerus I in ōrdine (A littera prīma est)" },
    { lemma: "pēnsum, -ī", pars: "Nōmen substantīvum", genus: "Neutrum", notatio: "Exercitium vel opus discipulī" },
    { lemma: "quid", pars: "Prōnōmen interrogātīvum", genus: "Neutrum", notatio: "Interrogat dē rē: Quid est Rōma?" },
    { lemma: "quoque", pars: "Coniūnctiō", genus: "—", notatio: "= etiam (Hispānia quoque in Eurōpā est)" },
    { lemma: "Rhēnus, -ī", pars: "Nōmen proprium", genus: "Masculīnum", notatio: "Fluvius in Germāniā" },
    { lemma: "Rhodus, -ī", pars: "Nōmen proprium", genus: "Fēminīnum", notatio: "Īnsula Graeca parva" },
    { lemma: "Rōma, -ae", pars: "Nōmen proprium", genus: "Fēminīnum", notatio: "Urbs et caput imperiī Rōmānī in Italiā" },
    { lemma: "Rōmānus, -a, -um", pars: "Nōmen adiectīvum", genus: "Masculīnum / Fēm. / Neut.", notatio: "Ad Rōmam pertinēns (oppidum Rōmānum, imperium Rōmānum)" },
    { lemma: "Sardinia, -ae", pars: "Nōmen proprium", genus: "Fēminīnum", notatio: "Īnsula magna prope Corsicam" },
    { lemma: "secundus, -a, -um", pars: "Nōmen numerāle ōrdināle", genus: "Masculīnum / Fēm. / Neut.", notatio: "Numerus II in ōrdine (B littera secunda est)" },
    { lemma: "sed", pars: "Coniūnctiō", genus: "Adversātīva", notatio: "Oppōnit duo membra: nōn in Asiā, sed in Eurōpā" },
    { lemma: "Sicilia, -ae", pars: "Nōmen proprium", genus: "Fēminīnum", notatio: "Īnsula magna prope Italiam" },
    { lemma: "Sparta, -ae", pars: "Nōmen proprium", genus: "Fēminīnum", notatio: "Oppidum Graecum in Peloponnēsō" },
    { lemma: "sunt", pars: "Verbum", genus: "—", notatio: "Persōna III plūr. verbi 'esse' (Italia et Graecia in Eurōpā sunt)" },
    { lemma: "Syria, -ae", pars: "Nōmen proprium", genus: "Fēminīnum", notatio: "Terra in Asiā" },
    { lemma: "tertius, -a, -um", pars: "Nōmen numerāle ōrdināle", genus: "Masculīnum / Fēm. / Neut.", notatio: "Numerus III in ōrdine (C littera tertia est)" },
    { lemma: "Tiberis, -is", pars: "Nōmen proprium", genus: "Masculīnum", notatio: "Fluvius Rōmae in Italiā" },
    { lemma: "Tibur, -uris", pars: "Nōmen proprium", genus: "Neutrum", notatio: "Oppidum Rōmānum prope Rōmam (Tivoli)" },
    { lemma: "Tusculum, -ī", pars: "Nōmen proprium", genus: "Neutrum", notatio: "Oppidum Rōmānum prope Rōmam" },
    { lemma: "ubi", pars: "Adverbium interrogātīvum", genus: "—", notatio: "Quaerit locum: Ubi est Rōma? In Italiā." },
    { lemma: "ūnus, -a, -um", pars: "Nōmen numerāle", genus: "Masculīnum / Fēm. / Neut.", notatio: "Numerus I" },
    { lemma: "vocābulum, -ī", pars: "Nōmen substantīvum", genus: "Neutrum", notatio: "Verbum / nōmen significāns ('fluvius' est vocābulum)" }
  ],

  // Textus Lēctiōnum cum versibus, marginalibus, et verbīs mōrphologicē dissectīs

  sectiones: [
    {
        "titulusSectio": "LĒCTIŌ PRĪMA",
        "versus": [
            {
                "numerus": "I",
                "marginalia": "imperium",
                "tokens": [
                    {
                        "f": "Rōma",
                        "l": "Rōma, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Oppidum et caput imperiī in Italiā"
                    },
                    {
                        "f": "in",
                        "l": "in",
                        "p": "Praepositiō",
                        "c": "cum Ablātīvō",
                        "n": "—",
                        "g": "—",
                        "d": "Indicat locum"
                    },
                    {
                        "f": "Italiā",
                        "l": "Italia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Ablātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Ablātīvus locī post 'in'"
                    },
                    {
                        "f": "est",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Persōna III praesentis",
                        "punc": "."
                    },
                    {
                        "f": "Italia",
                        "l": "Italia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Terra in Eurōpā"
                    },
                    {
                        "f": "in",
                        "l": "in",
                        "p": "Praepositiō",
                        "c": "cum Ablātīvō",
                        "n": "—",
                        "g": "—",
                        "d": "Indicat locum"
                    },
                    {
                        "f": "Eurōpā",
                        "l": "Eurōpa, -ae",
                        "p": "Nōmen proprium",
                        "c": "Ablātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Ablātīvus locī post 'in'"
                    },
                    {
                        "f": "est",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Persōna III praesentis",
                        "punc": "."
                    },
                    {
                        "f": "Graecia",
                        "l": "Graecia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Terra in Eurōpā"
                    },
                    {
                        "f": "in",
                        "l": "in",
                        "p": "Praepositiō",
                        "c": "cum Ablātīvō",
                        "n": "—",
                        "g": "—",
                        "d": "Indicat locum"
                    },
                    {
                        "f": "Eurōpā",
                        "l": "Eurōpa, -ae",
                        "p": "Nōmen proprium",
                        "c": "Ablātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Ablātīvus locī post 'in'"
                    },
                    {
                        "f": "est",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Persōna III praesentis",
                        "punc": "."
                    }
                ]
            },
            {
                "numerus": "",
                "marginalia": "",
                "tokens": [
                    {
                        "f": "Italia",
                        "l": "Italia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Terra in Eurōpā"
                    },
                    {
                        "f": "et",
                        "l": "et",
                        "p": "Coniūnctiō",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Coniunctio copulātīva"
                    },
                    {
                        "f": "Graecia",
                        "l": "Graecia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Terra in Eurōpā"
                    },
                    {
                        "f": "in",
                        "l": "in",
                        "p": "Praepositiō",
                        "c": "cum Ablātīvō",
                        "n": "—",
                        "g": "—",
                        "d": "Indicat locum"
                    },
                    {
                        "f": "Eurōpā",
                        "l": "Eurōpa, -ae",
                        "p": "Nōmen proprium",
                        "c": "Ablātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Ablātīvus locī post 'in'"
                    },
                    {
                        "f": "sunt",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Plūrālis",
                        "g": "—",
                        "d": "Persōna III plūrālis",
                        "punc": "."
                    },
                    {
                        "f": "Hispānia",
                        "l": "Hispānia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Terra in Eurōpā"
                    },
                    {
                        "f": "quoque",
                        "l": "quoque",
                        "p": "Coniūnctiō",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "= etiam"
                    },
                    {
                        "f": "in",
                        "l": "in",
                        "p": "Praepositiō",
                        "c": "cum Ablātīvō",
                        "n": "—",
                        "g": "—",
                        "d": "Indicat locum"
                    },
                    {
                        "f": "Eurōpā",
                        "l": "Eurōpa, -ae",
                        "p": "Nōmen proprium",
                        "c": "Ablātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Ablātīvus locī post 'in'"
                    },
                    {
                        "f": "est",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Persōna III praesentis",
                        "punc": "."
                    }
                ]
            },
            {
                "numerus": "",
                "marginalia": "",
                "tokens": [
                    {
                        "f": "Hispānia",
                        "l": "Hispānia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Terra in Eurōpā"
                    },
                    {
                        "f": "et",
                        "l": "et",
                        "p": "Coniūnctiō",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Coniunctio copulātīva"
                    },
                    {
                        "f": "Italia",
                        "l": "Italia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Terra in Eurōpā"
                    },
                    {
                        "f": "et",
                        "l": "et",
                        "p": "Coniūnctiō",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Coniunctio copulātīva"
                    },
                    {
                        "f": "Graecia",
                        "l": "Graecia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Terra in Eurōpā"
                    },
                    {
                        "f": "in",
                        "l": "in",
                        "p": "Praepositiō",
                        "c": "cum Ablātīvō",
                        "n": "—",
                        "g": "—",
                        "d": "Indicat locum"
                    },
                    {
                        "f": "Eurōpā",
                        "l": "Eurōpa, -ae",
                        "p": "Nōmen proprium",
                        "c": "Ablātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Ablātīvus locī post 'in'"
                    },
                    {
                        "f": "sunt",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Plūrālis",
                        "g": "—",
                        "d": "Persōna III plūrālis",
                        "punc": "."
                    }
                ]
            },
            {
                "numerus": "",
                "marginalia": "",
                "tokens": [
                    {
                        "f": "Aegyptus",
                        "l": "Aegyptus, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Terra in Āfricā"
                    },
                    {
                        "f": "in",
                        "l": "in",
                        "p": "Praepositiō",
                        "c": "cum Ablātīvō",
                        "n": "—",
                        "g": "—",
                        "d": "Indicat locum"
                    },
                    {
                        "f": "Eurōpā",
                        "l": "Eurōpa, -ae",
                        "p": "Nōmen proprium",
                        "c": "Ablātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Ablātīvus locī post 'in'"
                    },
                    {
                        "f": "nōn",
                        "l": "nōn",
                        "p": "Adverbium",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Negat sententiam"
                    },
                    {
                        "f": "est",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Persōna III praesentis",
                        "punc": ","
                    },
                    {
                        "f": "Aegyptus",
                        "l": "Aegyptus, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Terra in Āfricā"
                    },
                    {
                        "f": "in",
                        "l": "in",
                        "p": "Praepositiō",
                        "c": "cum Ablātīvō",
                        "n": "—",
                        "g": "—",
                        "d": "Indicat locum"
                    },
                    {
                        "f": "Āfricā",
                        "l": "Āfrica, -ae",
                        "p": "Nōmen proprium",
                        "c": "Ablātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Ablātīvus locī post 'in'"
                    },
                    {
                        "f": "est",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Persōna III praesentis",
                        "punc": "."
                    }
                ]
            },
            {
                "numerus": "V",
                "marginalia": "quoque = etiam",
                "tokens": [
                    {
                        "f": "Gallia",
                        "l": "Gallia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Terra in Eurōpā"
                    },
                    {
                        "f": "nōn",
                        "l": "nōn",
                        "p": "Adverbium",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Negat sententiam"
                    },
                    {
                        "f": "in",
                        "l": "in",
                        "p": "Praepositiō",
                        "c": "cum Ablātīvō",
                        "n": "—",
                        "g": "—",
                        "d": "Indicat locum"
                    },
                    {
                        "f": "Āfricā",
                        "l": "Āfrica, -ae",
                        "p": "Nōmen proprium",
                        "c": "Ablātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Ablātīvus locī post 'in'"
                    },
                    {
                        "f": "est",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Persōna III praesentis",
                        "punc": ","
                    },
                    {
                        "f": "Gallia",
                        "l": "Gallia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Terra in Eurōpā"
                    },
                    {
                        "f": "est",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Persōna III praesentis"
                    },
                    {
                        "f": "in",
                        "l": "in",
                        "p": "Praepositiō",
                        "c": "cum Ablātīvō",
                        "n": "—",
                        "g": "—",
                        "d": "Indicat locum"
                    },
                    {
                        "f": "Eurōpā",
                        "l": "Eurōpa, -ae",
                        "p": "Nōmen proprium",
                        "c": "Ablātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Ablātīvus locī post 'in'",
                        "punc": "."
                    },
                    {
                        "f": "Syria",
                        "l": "Syria, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Terra in Asiā"
                    },
                    {
                        "f": "nōn",
                        "l": "nōn",
                        "p": "Adverbium",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Negat sententiam"
                    },
                    {
                        "f": "est",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Persōna III praesentis"
                    },
                    {
                        "f": "in",
                        "l": "in",
                        "p": "Praepositiō",
                        "c": "cum Ablātīvō",
                        "n": "—",
                        "g": "—",
                        "d": "Indicat locum"
                    },
                    {
                        "f": "Eurōpā",
                        "l": "Eurōpa, -ae",
                        "p": "Nōmen proprium",
                        "c": "Ablātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Ablātīvus locī post 'in'",
                        "punc": ","
                    },
                    {
                        "f": "sed",
                        "l": "sed",
                        "p": "Coniūnctiō",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Coniunctio adversātīva"
                    },
                    {
                        "f": "in",
                        "l": "in",
                        "p": "Praepositiō",
                        "c": "cum Ablātīvō",
                        "n": "—",
                        "g": "—",
                        "d": "Indicat locum"
                    },
                    {
                        "f": "Asiā",
                        "l": "Asia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Ablātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Ablātīvus locī post 'in'",
                        "punc": "."
                    }
                ]
            },
            {
                "numerus": "",
                "marginalia": "sed",
                "tokens": [
                    {
                        "f": "Arabia",
                        "l": "Arabia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Terra in Asiā"
                    },
                    {
                        "f": "quoque",
                        "l": "quoque",
                        "p": "Coniūnctiō",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "= etiam"
                    },
                    {
                        "f": "in",
                        "l": "in",
                        "p": "Praepositiō",
                        "c": "cum Ablātīvō",
                        "n": "—",
                        "g": "—",
                        "d": "Indicat locum"
                    },
                    {
                        "f": "Asiā",
                        "l": "Asia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Ablātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Ablātīvus locī post 'in'"
                    },
                    {
                        "f": "est",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Persōna III praesentis",
                        "punc": "."
                    },
                    {
                        "f": "Syria",
                        "l": "Syria, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Terra in Asiā"
                    },
                    {
                        "f": "et",
                        "l": "et",
                        "p": "Coniūnctiō",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Coniunctio copulātīva"
                    },
                    {
                        "f": "Arabia",
                        "l": "Arabia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Terra in Asiā"
                    },
                    {
                        "f": "in",
                        "l": "in",
                        "p": "Praepositiō",
                        "c": "cum Ablātīvō",
                        "n": "—",
                        "g": "—",
                        "d": "Indicat locum"
                    },
                    {
                        "f": "Asiā",
                        "l": "Asia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Ablātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Ablātīvus locī post 'in'"
                    },
                    {
                        "f": "sunt",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Plūrālis",
                        "g": "—",
                        "d": "Persōna III plūrālis",
                        "punc": "."
                    }
                ]
            },
            {
                "numerus": "",
                "marginalia": "",
                "tokens": [
                    {
                        "f": "Germānia",
                        "l": "Germānia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Terra in Eurōpā"
                    },
                    {
                        "f": "nōn",
                        "l": "nōn",
                        "p": "Adverbium",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Negat sententiam"
                    },
                    {
                        "f": "in",
                        "l": "in",
                        "p": "Praepositiō",
                        "c": "cum Ablātīvō",
                        "n": "—",
                        "g": "—",
                        "d": "Indicat locum"
                    },
                    {
                        "f": "Asiā",
                        "l": "Asia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Ablātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Ablātīvus locī post 'in'",
                        "punc": ","
                    },
                    {
                        "f": "sed",
                        "l": "sed",
                        "p": "Coniūnctiō",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Coniunctio adversātīva"
                    },
                    {
                        "f": "in",
                        "l": "in",
                        "p": "Praepositiō",
                        "c": "cum Ablātīvō",
                        "n": "—",
                        "g": "—",
                        "d": "Indicat locum"
                    },
                    {
                        "f": "Eurōpā",
                        "l": "Eurōpa, -ae",
                        "p": "Nōmen proprium",
                        "c": "Ablātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Ablātīvus locī post 'in'"
                    },
                    {
                        "f": "est",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Persōna III praesentis",
                        "punc": "."
                    },
                    {
                        "f": "Britannia",
                        "l": "Britannia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Īnsula magna in Eurōpā"
                    },
                    {
                        "f": "quoque",
                        "l": "quoque",
                        "p": "Coniūnctiō",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "= etiam"
                    },
                    {
                        "f": "in",
                        "l": "in",
                        "p": "Praepositiō",
                        "c": "cum Ablātīvō",
                        "n": "—",
                        "g": "—",
                        "d": "Indicat locum"
                    },
                    {
                        "f": "Eurōpā",
                        "l": "Eurōpa, -ae",
                        "p": "Nōmen proprium",
                        "c": "Ablātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Ablātīvus locī post 'in'"
                    },
                    {
                        "f": "est",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Persōna III praesentis",
                        "punc": "."
                    }
                ]
            },
            {
                "numerus": "",
                "marginalia": "",
                "tokens": [
                    {
                        "f": "Germānia",
                        "l": "Germānia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Terra in Eurōpā"
                    },
                    {
                        "f": "et",
                        "l": "et",
                        "p": "Coniūnctiō",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Coniunctio copulātīva"
                    },
                    {
                        "f": "Britannia",
                        "l": "Britannia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Īnsula magna in Eurōpā"
                    },
                    {
                        "f": "sunt",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Plūrālis",
                        "g": "—",
                        "d": "Persōna III plūrālis"
                    },
                    {
                        "f": "in",
                        "l": "in",
                        "p": "Praepositiō",
                        "c": "cum Ablātīvō",
                        "n": "—",
                        "g": "—",
                        "d": "Indicat locum"
                    },
                    {
                        "f": "Eurōpā",
                        "l": "Eurōpa, -ae",
                        "p": "Nōmen proprium",
                        "c": "Ablātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Ablātīvus locī post 'in'",
                        "punc": "."
                    }
                ]
            },
            {
                "numerus": "",
                "marginalia": "",
                "tokens": [
                    {
                        "f": "Estne",
                        "l": "Estne",
                        "p": "Nōmen / Verbum",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Estne"
                    },
                    {
                        "f": "Gallia",
                        "l": "Gallia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Terra in Eurōpā"
                    },
                    {
                        "f": "in",
                        "l": "in",
                        "p": "Praepositiō",
                        "c": "cum Ablātīvō",
                        "n": "—",
                        "g": "—",
                        "d": "Indicat locum"
                    },
                    {
                        "f": "Eurōpā",
                        "l": "Eurōpa, -ae",
                        "p": "Nōmen proprium",
                        "c": "Ablātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Ablātīvus locī post 'in'",
                        "punc": "?"
                    },
                    {
                        "f": "Gallia",
                        "l": "Gallia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Terra in Eurōpā"
                    },
                    {
                        "f": "in",
                        "l": "in",
                        "p": "Praepositiō",
                        "c": "cum Ablātīvō",
                        "n": "—",
                        "g": "—",
                        "d": "Indicat locum"
                    },
                    {
                        "f": "Eurōpā",
                        "l": "Eurōpa, -ae",
                        "p": "Nōmen proprium",
                        "c": "Ablātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Ablātīvus locī post 'in'"
                    },
                    {
                        "f": "est",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Persōna III praesentis",
                        "punc": "."
                    }
                ]
            },
            {
                "numerus": "X",
                "marginalia": "-ne?",
                "tokens": [
                    {
                        "f": "Estne",
                        "l": "Estne",
                        "p": "Nōmen / Verbum",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Estne"
                    },
                    {
                        "f": "Rōma",
                        "l": "Rōma, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Oppidum et caput imperiī in Italiā"
                    },
                    {
                        "f": "in",
                        "l": "in",
                        "p": "Praepositiō",
                        "c": "cum Ablātīvō",
                        "n": "—",
                        "g": "—",
                        "d": "Indicat locum"
                    },
                    {
                        "f": "Galliā",
                        "l": "Gallia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Ablātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Ablātīvus locī post 'in'",
                        "punc": "?"
                    },
                    {
                        "f": "Rōma",
                        "l": "Rōma, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Oppidum et caput imperiī in Italiā"
                    },
                    {
                        "f": "in",
                        "l": "in",
                        "p": "Praepositiō",
                        "c": "cum Ablātīvō",
                        "n": "—",
                        "g": "—",
                        "d": "Indicat locum"
                    },
                    {
                        "f": "Galliā",
                        "l": "Gallia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Ablātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Ablātīvus locī post 'in'"
                    },
                    {
                        "f": "nōn",
                        "l": "nōn",
                        "p": "Adverbium",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Negat sententiam"
                    },
                    {
                        "f": "est",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Persōna III praesentis",
                        "punc": "."
                    }
                ]
            },
            {
                "numerus": "",
                "marginalia": "ubi?",
                "tokens": [
                    {
                        "f": "Ubi",
                        "l": "ubi",
                        "p": "Adverbium",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Quaerit locum"
                    },
                    {
                        "f": "est",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Persōna III praesentis"
                    },
                    {
                        "f": "Rōma",
                        "l": "Rōma, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Oppidum et caput imperiī in Italiā",
                        "punc": "?"
                    },
                    {
                        "f": "Rōma",
                        "l": "Rōma, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Oppidum et caput imperiī in Italiā"
                    },
                    {
                        "f": "est",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Persōna III praesentis"
                    },
                    {
                        "f": "in",
                        "l": "in",
                        "p": "Praepositiō",
                        "c": "cum Ablātīvō",
                        "n": "—",
                        "g": "—",
                        "d": "Indicat locum"
                    },
                    {
                        "f": "Italiā",
                        "l": "Italia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Ablātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Ablātīvus locī post 'in'",
                        "punc": "."
                    },
                    {
                        "f": "Ubi",
                        "l": "ubi",
                        "p": "Adverbium",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Quaerit locum"
                    },
                    {
                        "f": "est",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Persōna III praesentis"
                    },
                    {
                        "f": "Italia",
                        "l": "Italia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Terra in Eurōpā",
                        "punc": "?"
                    },
                    {
                        "f": "Italia",
                        "l": "Italia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Terra in Eurōpā"
                    },
                    {
                        "f": "in",
                        "l": "in",
                        "p": "Praepositiō",
                        "c": "cum Ablātīvō",
                        "n": "—",
                        "g": "—",
                        "d": "Indicat locum"
                    },
                    {
                        "f": "Eurōpā",
                        "l": "Eurōpa, -ae",
                        "p": "Nōmen proprium",
                        "c": "Ablātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Ablātīvus locī post 'in'"
                    },
                    {
                        "f": "est",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Persōna III praesentis",
                        "punc": "."
                    }
                ]
            },
            {
                "numerus": "",
                "marginalia": "",
                "tokens": [
                    {
                        "f": "Ubi",
                        "l": "ubi",
                        "p": "Adverbium",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Quaerit locum"
                    },
                    {
                        "f": "sunt",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Plūrālis",
                        "g": "—",
                        "d": "Persōna III plūrālis"
                    },
                    {
                        "f": "Gallia",
                        "l": "Gallia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Terra in Eurōpā"
                    },
                    {
                        "f": "et",
                        "l": "et",
                        "p": "Coniūnctiō",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Coniunctio copulātīva"
                    },
                    {
                        "f": "Hispānia",
                        "l": "Hispānia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Terra in Eurōpā",
                        "punc": "?"
                    },
                    {
                        "f": "Gallia",
                        "l": "Gallia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Terra in Eurōpā"
                    },
                    {
                        "f": "et",
                        "l": "et",
                        "p": "Coniūnctiō",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Coniunctio copulātīva"
                    },
                    {
                        "f": "Hispānia",
                        "l": "Hispānia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Terra in Eurōpā"
                    },
                    {
                        "f": "in",
                        "l": "in",
                        "p": "Praepositiō",
                        "c": "cum Ablātīvō",
                        "n": "—",
                        "g": "—",
                        "d": "Indicat locum"
                    },
                    {
                        "f": "Eurōpā",
                        "l": "Eurōpa, -ae",
                        "p": "Nōmen proprium",
                        "c": "Ablātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Ablātīvus locī post 'in'"
                    },
                    {
                        "f": "sunt",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Plūrālis",
                        "g": "—",
                        "d": "Persōna III plūrālis",
                        "punc": "."
                    }
                ]
            },
            {
                "numerus": "",
                "marginalia": "",
                "tokens": [
                    {
                        "f": "Estne",
                        "l": "Estne",
                        "p": "Nōmen / Verbum",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Estne"
                    },
                    {
                        "f": "Nīlus",
                        "l": "Nīlus, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Fluvius maximus Āfricae"
                    },
                    {
                        "f": "in",
                        "l": "in",
                        "p": "Praepositiō",
                        "c": "cum Ablātīvō",
                        "n": "—",
                        "g": "—",
                        "d": "Indicat locum"
                    },
                    {
                        "f": "Eurōpā",
                        "l": "Eurōpa, -ae",
                        "p": "Nōmen proprium",
                        "c": "Ablātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Ablātīvus locī post 'in'",
                        "punc": "?"
                    },
                    {
                        "f": "Nīlus",
                        "l": "Nīlus, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Fluvius maximus Āfricae"
                    },
                    {
                        "f": "in",
                        "l": "in",
                        "p": "Praepositiō",
                        "c": "cum Ablātīvō",
                        "n": "—",
                        "g": "—",
                        "d": "Indicat locum"
                    },
                    {
                        "f": "Eurōpā",
                        "l": "Eurōpa, -ae",
                        "p": "Nōmen proprium",
                        "c": "Ablātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Ablātīvus locī post 'in'"
                    },
                    {
                        "f": "nōn",
                        "l": "nōn",
                        "p": "Adverbium",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Negat sententiam"
                    },
                    {
                        "f": "est",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Persōna III praesentis",
                        "punc": "."
                    },
                    {
                        "f": "Ubi",
                        "l": "ubi",
                        "p": "Adverbium",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Quaerit locum"
                    },
                    {
                        "f": "est",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Persōna III praesentis"
                    },
                    {
                        "f": "Nīlus",
                        "l": "Nīlus, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Fluvius maximus Āfricae",
                        "punc": "?"
                    },
                    {
                        "f": "Nīlus",
                        "l": "Nīlus, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Fluvius maximus Āfricae"
                    },
                    {
                        "f": "in",
                        "l": "in",
                        "p": "Praepositiō",
                        "c": "cum Ablātīvō",
                        "n": "—",
                        "g": "—",
                        "d": "Indicat locum"
                    },
                    {
                        "f": "Āfricā",
                        "l": "Āfrica, -ae",
                        "p": "Nōmen proprium",
                        "c": "Ablātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Ablātīvus locī post 'in'"
                    },
                    {
                        "f": "est",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Persōna III praesentis",
                        "punc": "."
                    }
                ]
            },
            {
                "numerus": "",
                "marginalia": "",
                "tokens": [
                    {
                        "f": "Rhēnus",
                        "l": "Rhēnus, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Fluvius in Germāniā"
                    },
                    {
                        "f": "ubi",
                        "l": "ubi",
                        "p": "Adverbium",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Quaerit locum"
                    },
                    {
                        "f": "est",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Persōna III praesentis",
                        "punc": "?"
                    },
                    {
                        "f": "Rhēnus",
                        "l": "Rhēnus, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Fluvius in Germāniā"
                    },
                    {
                        "f": "est",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Persōna III praesentis"
                    },
                    {
                        "f": "in",
                        "l": "in",
                        "p": "Praepositiō",
                        "c": "cum Ablātīvō",
                        "n": "—",
                        "g": "—",
                        "d": "Indicat locum"
                    },
                    {
                        "f": "Germāniā",
                        "l": "Germānia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Ablātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Ablātīvus locī post 'in'",
                        "punc": "."
                    }
                ]
            },
            {
                "numerus": "XV",
                "marginalia": "fluvius",
                "tokens": [
                    {
                        "f": "Nīlus",
                        "l": "Nīlus, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Fluvius maximus Āfricae"
                    },
                    {
                        "f": "fluvius",
                        "l": "fluvius, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Aqua fluēns magna"
                    },
                    {
                        "f": "est",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Persōna III praesentis",
                        "punc": "."
                    },
                    {
                        "f": "Rhēnus",
                        "l": "Rhēnus, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Fluvius in Germāniā"
                    },
                    {
                        "f": "fluvius",
                        "l": "fluvius, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Aqua fluēns magna"
                    },
                    {
                        "f": "est",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Persōna III praesentis",
                        "punc": "."
                    },
                    {
                        "f": "Nīlus",
                        "l": "Nīlus, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Fluvius maximus Āfricae"
                    },
                    {
                        "f": "et",
                        "l": "et",
                        "p": "Coniūnctiō",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Coniunctio copulātīva"
                    },
                    {
                        "f": "Rhēnus",
                        "l": "Rhēnus, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Fluvius in Germāniā"
                    },
                    {
                        "f": "fluviī",
                        "l": "fluvius, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Masculīnum",
                        "d": "Plūrāle: fluvius -> fluviī"
                    },
                    {
                        "f": "sunt",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Plūrālis",
                        "g": "—",
                        "d": "Persōna III plūrālis",
                        "punc": "."
                    }
                ]
            },
            {
                "numerus": "",
                "marginalia": "fluviī",
                "tokens": [
                    {
                        "f": "Dānuvius",
                        "l": "Dānuvius, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Fluvius magnus Eurōpae"
                    },
                    {
                        "f": "quoque",
                        "l": "quoque",
                        "p": "Coniūnctiō",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "= etiam"
                    },
                    {
                        "f": "fluvius",
                        "l": "fluvius, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Aqua fluēns magna"
                    },
                    {
                        "f": "est",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Persōna III praesentis",
                        "punc": "."
                    },
                    {
                        "f": "Rhēnus",
                        "l": "Rhēnus, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Fluvius in Germāniā"
                    },
                    {
                        "f": "et",
                        "l": "et",
                        "p": "Coniūnctiō",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Coniunctio copulātīva"
                    },
                    {
                        "f": "Dānuvius",
                        "l": "Dānuvius, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Fluvius magnus Eurōpae"
                    },
                    {
                        "f": "sunt",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Plūrālis",
                        "g": "—",
                        "d": "Persōna III plūrālis"
                    },
                    {
                        "f": "fluviī",
                        "l": "fluvius, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Masculīnum",
                        "d": "Plūrāle: fluvius -> fluviī"
                    },
                    {
                        "f": "in",
                        "l": "in",
                        "p": "Praepositiō",
                        "c": "cum Ablātīvō",
                        "n": "—",
                        "g": "—",
                        "d": "Indicat locum"
                    },
                    {
                        "f": "Germāniā",
                        "l": "Germānia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Ablātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Ablātīvus locī post 'in'",
                        "punc": "."
                    }
                ]
            },
            {
                "numerus": "",
                "marginalia": "",
                "tokens": [
                    {
                        "f": "Tiberis",
                        "l": "Tiberis, -is",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Fluvius Rōmae in Italiā"
                    },
                    {
                        "f": "fluvius",
                        "l": "fluvius, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Aqua fluēns magna"
                    },
                    {
                        "f": "in",
                        "l": "in",
                        "p": "Praepositiō",
                        "c": "cum Ablātīvō",
                        "n": "—",
                        "g": "—",
                        "d": "Indicat locum"
                    },
                    {
                        "f": "Italiā",
                        "l": "Italia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Ablātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Ablātīvus locī post 'in'"
                    },
                    {
                        "f": "est",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Persōna III praesentis",
                        "punc": "."
                    }
                ]
            }
        ]
    },
    {
        "titulusSectio": "LĒCTIŌ SECUNDA",
        "versus": [
            {
                "numerus": "",
                "marginalia": "magnus ↔ parvus",
                "tokens": [
                    {
                        "f": "Nīlus",
                        "l": "Nīlus, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Fluvius maximus Āfricae"
                    },
                    {
                        "f": "fluvius",
                        "l": "fluvius, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Aqua fluēns magna"
                    },
                    {
                        "f": "magnus",
                        "l": "magnus, -a, -um",
                        "p": "Nōmen adiectīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "↔ parvus"
                    },
                    {
                        "f": "est",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Persōna III praesentis",
                        "punc": "."
                    },
                    {
                        "f": "Tiberis",
                        "l": "Tiberis, -is",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Fluvius Rōmae in Italiā"
                    },
                    {
                        "f": "nōn",
                        "l": "nōn",
                        "p": "Adverbium",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Negat sententiam"
                    },
                    {
                        "f": "est",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Persōna III praesentis"
                    },
                    {
                        "f": "fluvius",
                        "l": "fluvius, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Aqua fluēns magna"
                    },
                    {
                        "f": "magnus",
                        "l": "magnus, -a, -um",
                        "p": "Nōmen adiectīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "↔ parvus",
                        "punc": ","
                    },
                    {
                        "f": "Tiberis",
                        "l": "Tiberis, -is",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Fluvius Rōmae in Italiā"
                    },
                    {
                        "f": "fluvius",
                        "l": "fluvius, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Aqua fluēns magna"
                    },
                    {
                        "f": "parvus",
                        "l": "parvus, -a, -um",
                        "p": "Nōmen adiectīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "↔ magnus"
                    },
                    {
                        "f": "est",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Persōna III praesentis",
                        "punc": "."
                    }
                ]
            },
            {
                "numerus": "",
                "marginalia": "",
                "tokens": [
                    {
                        "f": "Rhēnus",
                        "l": "Rhēnus, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Fluvius in Germāniā"
                    },
                    {
                        "f": "nōn",
                        "l": "nōn",
                        "p": "Adverbium",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Negat sententiam"
                    },
                    {
                        "f": "est",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Persōna III praesentis"
                    },
                    {
                        "f": "fluvius",
                        "l": "fluvius, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Aqua fluēns magna"
                    },
                    {
                        "f": "parvus",
                        "l": "parvus, -a, -um",
                        "p": "Nōmen adiectīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "↔ magnus",
                        "punc": ","
                    },
                    {
                        "f": "sed",
                        "l": "sed",
                        "p": "Coniūnctiō",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Coniunctio adversātīva"
                    },
                    {
                        "f": "fluvius",
                        "l": "fluvius, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Aqua fluēns magna"
                    },
                    {
                        "f": "magnus",
                        "l": "magnus, -a, -um",
                        "p": "Nōmen adiectīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "↔ parvus",
                        "punc": "."
                    }
                ]
            },
            {
                "numerus": "XX",
                "marginalia": "",
                "tokens": [
                    {
                        "f": "Nīlus",
                        "l": "Nīlus, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Fluvius maximus Āfricae"
                    },
                    {
                        "f": "et",
                        "l": "et",
                        "p": "Coniūnctiō",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Coniunctio copulātīva"
                    },
                    {
                        "f": "Rhēnus",
                        "l": "Rhēnus, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Fluvius in Germāniā"
                    },
                    {
                        "f": "nōn",
                        "l": "nōn",
                        "p": "Adverbium",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Negat sententiam"
                    },
                    {
                        "f": "fluviī",
                        "l": "fluvius, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Masculīnum",
                        "d": "Plūrāle: fluvius -> fluviī"
                    },
                    {
                        "f": "parvī",
                        "l": "parvus, -a, -um",
                        "p": "Nōmen adiectīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Masculīnum",
                        "d": "Plūrāle",
                        "punc": ","
                    },
                    {
                        "f": "sed",
                        "l": "sed",
                        "p": "Coniūnctiō",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Coniunctio adversātīva"
                    },
                    {
                        "f": "fluviī",
                        "l": "fluvius, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Masculīnum",
                        "d": "Plūrāle: fluvius -> fluviī"
                    },
                    {
                        "f": "magnī",
                        "l": "magnus, -a, -um",
                        "p": "Nōmen adiectīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Masculīnum",
                        "d": "Plūrāle: magnus -> magnī"
                    },
                    {
                        "f": "sunt",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Plūrālis",
                        "g": "—",
                        "d": "Persōna III plūrālis",
                        "punc": "."
                    },
                    {
                        "f": "Dānuvius",
                        "l": "Dānuvius, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Fluvius magnus Eurōpae"
                    },
                    {
                        "f": "quoque",
                        "l": "quoque",
                        "p": "Coniūnctiō",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "= etiam"
                    },
                    {
                        "f": "fluvius",
                        "l": "fluvius, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Aqua fluēns magna"
                    },
                    {
                        "f": "magnus",
                        "l": "magnus, -a, -um",
                        "p": "Nōmen adiectīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "↔ parvus"
                    },
                    {
                        "f": "est",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Persōna III praesentis",
                        "punc": "."
                    }
                ]
            },
            {
                "numerus": "",
                "marginalia": "īnsula / īnsulae",
                "tokens": [
                    {
                        "f": "Corsica",
                        "l": "Corsica, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Īnsula prope Sardiniam"
                    },
                    {
                        "f": "īnsula",
                        "l": "īnsula, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Terra aquā cincta"
                    },
                    {
                        "f": "est",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Persōna III praesentis",
                        "punc": "."
                    },
                    {
                        "f": "Corsica",
                        "l": "Corsica, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Īnsula prope Sardiniam"
                    },
                    {
                        "f": "et",
                        "l": "et",
                        "p": "Coniūnctiō",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Coniunctio copulātīva"
                    },
                    {
                        "f": "Sardinia",
                        "l": "Sardinia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Īnsula magna"
                    },
                    {
                        "f": "et",
                        "l": "et",
                        "p": "Coniūnctiō",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Coniunctio copulātīva"
                    },
                    {
                        "f": "Sicilia",
                        "l": "Sicilia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Īnsula magna prope Italiam"
                    },
                    {
                        "f": "īnsulae",
                        "l": "īnsula, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Fēminīnum",
                        "d": "Plūrāle: īnsula -> īnsulae"
                    },
                    {
                        "f": "sunt",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Plūrālis",
                        "g": "—",
                        "d": "Persōna III plūrālis",
                        "punc": "."
                    }
                ]
            },
            {
                "numerus": "",
                "marginalia": "",
                "tokens": [
                    {
                        "f": "Britannia",
                        "l": "Britannia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Īnsula magna in Eurōpā"
                    },
                    {
                        "f": "quoque",
                        "l": "quoque",
                        "p": "Coniūnctiō",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "= etiam"
                    },
                    {
                        "f": "īnsula",
                        "l": "īnsula, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Terra aquā cincta"
                    },
                    {
                        "f": "est",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Persōna III praesentis",
                        "punc": "."
                    },
                    {
                        "f": "Italia",
                        "l": "Italia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Terra in Eurōpā"
                    },
                    {
                        "f": "īnsula",
                        "l": "īnsula, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Terra aquā cincta"
                    },
                    {
                        "f": "nōn",
                        "l": "nōn",
                        "p": "Adverbium",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Negat sententiam"
                    },
                    {
                        "f": "est",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Persōna III praesentis",
                        "punc": "."
                    }
                ]
            },
            {
                "numerus": "",
                "marginalia": "",
                "tokens": [
                    {
                        "f": "Sicilia",
                        "l": "Sicilia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Īnsula magna prope Italiam"
                    },
                    {
                        "f": "īnsula",
                        "l": "īnsula, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Terra aquā cincta"
                    },
                    {
                        "f": "magna",
                        "l": "magnus, -a, -um",
                        "p": "Nōmen adiectīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Adiectīvum fēminīnum"
                    },
                    {
                        "f": "est",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Persōna III praesentis",
                        "punc": "."
                    },
                    {
                        "f": "Melita",
                        "l": "Melita, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Īnsula parva"
                    },
                    {
                        "f": "est",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Persōna III praesentis"
                    },
                    {
                        "f": "īnsula",
                        "l": "īnsula, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Terra aquā cincta"
                    },
                    {
                        "f": "parva",
                        "l": "parvus, -a, -um",
                        "p": "Nōmen adiectīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Adiectīvum fēminīnum",
                        "punc": "."
                    }
                ]
            },
            {
                "numerus": "",
                "marginalia": "",
                "tokens": [
                    {
                        "f": "Britannia",
                        "l": "Britannia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Īnsula magna in Eurōpā"
                    },
                    {
                        "f": "nōn",
                        "l": "nōn",
                        "p": "Adverbium",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Negat sententiam"
                    },
                    {
                        "f": "īnsula",
                        "l": "īnsula, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Terra aquā cincta"
                    },
                    {
                        "f": "parva",
                        "l": "parvus, -a, -um",
                        "p": "Nōmen adiectīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Adiectīvum fēminīnum",
                        "punc": ","
                    },
                    {
                        "f": "sed",
                        "l": "sed",
                        "p": "Coniūnctiō",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Coniunctio adversātīva"
                    },
                    {
                        "f": "īnsula",
                        "l": "īnsula, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Terra aquā cincta"
                    },
                    {
                        "f": "magna",
                        "l": "magnus, -a, -um",
                        "p": "Nōmen adiectīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Adiectīvum fēminīnum"
                    },
                    {
                        "f": "est",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Persōna III praesentis",
                        "punc": "."
                    }
                ]
            },
            {
                "numerus": "XXV",
                "marginalia": "",
                "tokens": [
                    {
                        "f": "Sicilia",
                        "l": "Sicilia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Īnsula magna prope Italiam"
                    },
                    {
                        "f": "et",
                        "l": "et",
                        "p": "Coniūnctiō",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Coniunctio copulātīva"
                    },
                    {
                        "f": "Sardinia",
                        "l": "Sardinia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Īnsula magna"
                    },
                    {
                        "f": "nōn",
                        "l": "nōn",
                        "p": "Adverbium",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Negat sententiam"
                    },
                    {
                        "f": "īnsulae",
                        "l": "īnsula, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Fēminīnum",
                        "d": "Plūrāle: īnsula -> īnsulae"
                    },
                    {
                        "f": "parvae",
                        "l": "parvus, -a, -um",
                        "p": "Nōmen adiectīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Fēminīnum",
                        "d": "Plūrāle",
                        "punc": ","
                    },
                    {
                        "f": "sed",
                        "l": "sed",
                        "p": "Coniūnctiō",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Coniunctio adversātīva"
                    },
                    {
                        "f": "īnsulae",
                        "l": "īnsula, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Fēminīnum",
                        "d": "Plūrāle: īnsula -> īnsulae"
                    },
                    {
                        "f": "magnae",
                        "l": "magnus, -a, -um",
                        "p": "Nōmen adiectīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Fēminīnum",
                        "d": "Adiectīvum fēminīnum plūrāle"
                    },
                    {
                        "f": "sunt",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Plūrālis",
                        "g": "—",
                        "d": "Persōna III plūrālis",
                        "punc": "."
                    }
                ]
            },
            {
                "numerus": "",
                "marginalia": "oppidum / oppida",
                "tokens": [
                    {
                        "f": "Brundisium",
                        "l": "Brundisium, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Neutrum",
                        "d": "Oppidum Rōmānum in Italiā"
                    },
                    {
                        "f": "oppidum",
                        "l": "oppidum, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Neutrum",
                        "d": "Locus mūnītus ubi hominēs habitant"
                    },
                    {
                        "f": "est",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Persōna III praesentis",
                        "punc": "."
                    },
                    {
                        "f": "Brundisium",
                        "l": "Brundisium, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Neutrum",
                        "d": "Oppidum Rōmānum in Italiā"
                    },
                    {
                        "f": "et",
                        "l": "et",
                        "p": "Coniūnctiō",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Coniunctio copulātīva"
                    },
                    {
                        "f": "Tusculum",
                        "l": "Tusculum, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Neutrum",
                        "d": "Oppidum prope Rōmam"
                    },
                    {
                        "f": "oppida",
                        "l": "oppidum, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Neutrum",
                        "d": "Plūrāle neutrī generis in -a"
                    },
                    {
                        "f": "sunt",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Plūrālis",
                        "g": "—",
                        "d": "Persōna III plūrālis",
                        "punc": "."
                    },
                    {
                        "f": "Sparta",
                        "l": "Sparta, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Oppidum Graecum"
                    },
                    {
                        "f": "quoque",
                        "l": "quoque",
                        "p": "Coniūnctiō",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "= etiam"
                    },
                    {
                        "f": "oppidum",
                        "l": "oppidum, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Neutrum",
                        "d": "Locus mūnītus ubi hominēs habitant"
                    },
                    {
                        "f": "est",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Persōna III praesentis",
                        "punc": "."
                    }
                ]
            },
            {
                "numerus": "",
                "marginalia": "",
                "tokens": [
                    {
                        "f": "Brundisium",
                        "l": "Brundisium, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Neutrum",
                        "d": "Oppidum Rōmānum in Italiā"
                    },
                    {
                        "f": "est",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Persōna III praesentis"
                    },
                    {
                        "f": "oppidum",
                        "l": "oppidum, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Neutrum",
                        "d": "Locus mūnītus ubi hominēs habitant"
                    },
                    {
                        "f": "magnum",
                        "l": "magnus, -a, -um",
                        "p": "Nōmen adiectīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Neutrum",
                        "d": "Adiectīvum neutrum",
                        "punc": "."
                    },
                    {
                        "f": "Tusculum",
                        "l": "Tusculum, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Neutrum",
                        "d": "Oppidum prope Rōmam"
                    },
                    {
                        "f": "oppidum",
                        "l": "oppidum, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Neutrum",
                        "d": "Locus mūnītus ubi hominēs habitant"
                    },
                    {
                        "f": "parvum",
                        "l": "parvus, -a, -um",
                        "p": "Nōmen adiectīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Neutrum",
                        "d": "Adiectīvum neutrum"
                    },
                    {
                        "f": "est",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Persōna III praesentis",
                        "punc": "."
                    },
                    {
                        "f": "Delphī",
                        "l": "Delphī, -ōrum",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Masculīnum",
                        "d": "Oppidum Graecum"
                    },
                    {
                        "f": "quoque",
                        "l": "quoque",
                        "p": "Coniūnctiō",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "= etiam"
                    },
                    {
                        "f": "oppidum",
                        "l": "oppidum, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Neutrum",
                        "d": "Locus mūnītus ubi hominēs habitant"
                    },
                    {
                        "f": "parvum",
                        "l": "parvus, -a, -um",
                        "p": "Nōmen adiectīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Neutrum",
                        "d": "Adiectīvum neutrum"
                    },
                    {
                        "f": "est",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Persōna III praesentis",
                        "punc": "."
                    }
                ]
            },
            {
                "numerus": "",
                "marginalia": "",
                "tokens": [
                    {
                        "f": "Tusculum",
                        "l": "Tusculum, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Neutrum",
                        "d": "Oppidum prope Rōmam"
                    },
                    {
                        "f": "et",
                        "l": "et",
                        "p": "Coniūnctiō",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Coniunctio copulātīva"
                    },
                    {
                        "f": "Delphī",
                        "l": "Delphī, -ōrum",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Masculīnum",
                        "d": "Oppidum Graecum"
                    },
                    {
                        "f": "nōn",
                        "l": "nōn",
                        "p": "Adverbium",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Negat sententiam"
                    },
                    {
                        "f": "oppida",
                        "l": "oppidum, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Neutrum",
                        "d": "Plūrāle neutrī generis in -a"
                    },
                    {
                        "f": "magna",
                        "l": "magnus, -a, -um",
                        "p": "Nōmen adiectīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Adiectīvum fēminīnum",
                        "punc": ","
                    },
                    {
                        "f": "sed",
                        "l": "sed",
                        "p": "Coniūnctiō",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Coniunctio adversātīva"
                    },
                    {
                        "f": "oppida",
                        "l": "oppidum, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Neutrum",
                        "d": "Plūrāle neutrī generis in -a"
                    },
                    {
                        "f": "parva",
                        "l": "parvus, -a, -um",
                        "p": "Nōmen adiectīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Adiectīvum fēminīnum"
                    },
                    {
                        "f": "sunt",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Plūrālis",
                        "g": "—",
                        "d": "Persōna III plūrālis",
                        "punc": "."
                    }
                ]
            },
            {
                "numerus": "",
                "marginalia": "",
                "tokens": [
                    {
                        "f": "Ubi",
                        "l": "ubi",
                        "p": "Adverbium",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Quaerit locum"
                    },
                    {
                        "f": "est",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Persōna III praesentis"
                    },
                    {
                        "f": "Sparta",
                        "l": "Sparta, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Oppidum Graecum",
                        "punc": "?"
                    },
                    {
                        "f": "Sparta",
                        "l": "Sparta, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Oppidum Graecum"
                    },
                    {
                        "f": "est",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Persōna III praesentis"
                    },
                    {
                        "f": "in",
                        "l": "in",
                        "p": "Praepositiō",
                        "c": "cum Ablātīvō",
                        "n": "—",
                        "g": "—",
                        "d": "Indicat locum"
                    },
                    {
                        "f": "Graeciā",
                        "l": "Graecia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Ablātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Ablātīvus locī post 'in'",
                        "punc": "."
                    },
                    {
                        "f": "Sparta",
                        "l": "Sparta, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Oppidum Graecum"
                    },
                    {
                        "f": "est",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Persōna III praesentis"
                    },
                    {
                        "f": "oppidum",
                        "l": "oppidum, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Neutrum",
                        "d": "Locus mūnītus ubi hominēs habitant"
                    },
                    {
                        "f": "Graecum",
                        "l": "Graecus, -a, -um",
                        "p": "Nōmen adiectīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Neutrum",
                        "d": "Neutrum",
                        "punc": "."
                    }
                ]
            },
            {
                "numerus": "XXX",
                "marginalia": "Graecus / Rōmānus",
                "tokens": [
                    {
                        "f": "Sparta",
                        "l": "Sparta, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Oppidum Graecum"
                    },
                    {
                        "f": "et",
                        "l": "et",
                        "p": "Coniūnctiō",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Coniunctio copulātīva"
                    },
                    {
                        "f": "Delphī",
                        "l": "Delphī, -ōrum",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Masculīnum",
                        "d": "Oppidum Graecum"
                    },
                    {
                        "f": "oppida",
                        "l": "oppidum, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Neutrum",
                        "d": "Plūrāle neutrī generis in -a"
                    },
                    {
                        "f": "Graeca",
                        "l": "Graecus, -a, -um",
                        "p": "Nōmen adiectīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Fēminīnum"
                    },
                    {
                        "f": "sunt",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Plūrālis",
                        "g": "—",
                        "d": "Persōna III plūrālis",
                        "punc": "."
                    },
                    {
                        "f": "Tusculum",
                        "l": "Tusculum, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Neutrum",
                        "d": "Oppidum prope Rōmam"
                    },
                    {
                        "f": "nōn",
                        "l": "nōn",
                        "p": "Adverbium",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Negat sententiam"
                    },
                    {
                        "f": "oppidum",
                        "l": "oppidum, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Neutrum",
                        "d": "Locus mūnītus ubi hominēs habitant"
                    },
                    {
                        "f": "Graecum",
                        "l": "Graecus, -a, -um",
                        "p": "Nōmen adiectīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Neutrum",
                        "d": "Neutrum",
                        "punc": ","
                    },
                    {
                        "f": "sed",
                        "l": "sed",
                        "p": "Coniūnctiō",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Coniunctio adversātīva"
                    },
                    {
                        "f": "oppidum",
                        "l": "oppidum, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Neutrum",
                        "d": "Locus mūnītus ubi hominēs habitant"
                    },
                    {
                        "f": "Rōmānum",
                        "l": "Rōmānus, -a, -um",
                        "p": "Nōmen adiectīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Neutrum",
                        "d": "Neutrum"
                    },
                    {
                        "f": "est",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Persōna III praesentis",
                        "punc": "."
                    }
                ]
            },
            {
                "numerus": "",
                "marginalia": "",
                "tokens": [
                    {
                        "f": "Tusculum",
                        "l": "Tusculum, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Neutrum",
                        "d": "Oppidum prope Rōmam"
                    },
                    {
                        "f": "et",
                        "l": "et",
                        "p": "Coniūnctiō",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Coniunctio copulātīva"
                    },
                    {
                        "f": "Brundisium",
                        "l": "Brundisium, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Neutrum",
                        "d": "Oppidum Rōmānum in Italiā"
                    },
                    {
                        "f": "sunt",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Plūrālis",
                        "g": "—",
                        "d": "Persōna III plūrālis"
                    },
                    {
                        "f": "oppida",
                        "l": "oppidum, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Neutrum",
                        "d": "Plūrāle neutrī generis in -a"
                    },
                    {
                        "f": "Rōmāna",
                        "l": "Rōmānus, -a, -um",
                        "p": "Nōmen adiectīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Fēminīnum",
                        "punc": "."
                    },
                    {
                        "f": "Sardinia",
                        "l": "Sardinia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Īnsula magna"
                    },
                    {
                        "f": "īnsula",
                        "l": "īnsula, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Terra aquā cincta"
                    },
                    {
                        "f": "Rōmāna",
                        "l": "Rōmānus, -a, -um",
                        "p": "Nōmen adiectīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Fēminīnum"
                    },
                    {
                        "f": "est",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Persōna III praesentis",
                        "punc": "."
                    }
                ]
            },
            {
                "numerus": "",
                "marginalia": "",
                "tokens": [
                    {
                        "f": "Crēta",
                        "l": "Crēta, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Īnsula Graeca magna",
                        "punc": ","
                    },
                    {
                        "f": "Rhodus",
                        "l": "Rhodus, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Īnsula Graeca",
                        "punc": ","
                    },
                    {
                        "f": "Naxus",
                        "l": "Naxus, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Īnsula Graeca",
                        "punc": ","
                    },
                    {
                        "f": "Samos",
                        "l": "Samos, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Īnsula Graeca",
                        "punc": ","
                    },
                    {
                        "f": "Chios",
                        "l": "Chios, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Īnsula Graeca",
                        "punc": ","
                    },
                    {
                        "f": "Lesbos",
                        "l": "Lesbos, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Īnsula Graeca",
                        "punc": ","
                    },
                    {
                        "f": "Lēmnos",
                        "l": "Lēmnos, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Īnsula Graeca",
                        "punc": ","
                    },
                    {
                        "f": "Euboea",
                        "l": "Euboea, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Īnsula Graeca magna"
                    },
                    {
                        "f": "sunt",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Plūrālis",
                        "g": "—",
                        "d": "Persōna III plūrālis"
                    },
                    {
                        "f": "īnsulae",
                        "l": "īnsula, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Fēminīnum",
                        "d": "Plūrāle: īnsula -> īnsulae"
                    },
                    {
                        "f": "Graecae",
                        "l": "Graecus, -a, -um",
                        "p": "Nōmen adiectīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Fēminīnum",
                        "d": "Plūrāle",
                        "punc": "."
                    }
                ]
            },
            {
                "numerus": "",
                "marginalia": "",
                "tokens": [
                    {
                        "f": "In",
                        "l": "in",
                        "p": "Praepositiō",
                        "c": "cum Ablātīvō",
                        "n": "—",
                        "g": "—",
                        "d": "Indicat locum"
                    },
                    {
                        "f": "Graeciā",
                        "l": "Graecia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Ablātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Ablātīvus locī post 'in'"
                    },
                    {
                        "f": "multae",
                        "l": "multī, -ae, -a",
                        "p": "Nōmen adiectīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Fēminīnum",
                        "d": "Plūrāle fēminīnum"
                    },
                    {
                        "f": "īnsulae",
                        "l": "īnsula, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Fēminīnum",
                        "d": "Plūrāle: īnsula -> īnsulae"
                    },
                    {
                        "f": "sunt",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Plūrālis",
                        "g": "—",
                        "d": "Persōna III plūrālis",
                        "punc": "."
                    },
                    {
                        "f": "In",
                        "l": "in",
                        "p": "Praepositiō",
                        "c": "cum Ablātīvō",
                        "n": "—",
                        "g": "—",
                        "d": "Indicat locum"
                    },
                    {
                        "f": "Italiā",
                        "l": "Italia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Ablātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Ablātīvus locī post 'in'"
                    },
                    {
                        "f": "et",
                        "l": "et",
                        "p": "Coniūnctiō",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Coniunctio copulātīva"
                    },
                    {
                        "f": "in",
                        "l": "in",
                        "p": "Praepositiō",
                        "c": "cum Ablātīvō",
                        "n": "—",
                        "g": "—",
                        "d": "Indicat locum"
                    },
                    {
                        "f": "Graeciā",
                        "l": "Graecia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Ablātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Ablātīvus locī post 'in'"
                    },
                    {
                        "f": "sunt",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Plūrālis",
                        "g": "—",
                        "d": "Persōna III plūrālis"
                    },
                    {
                        "f": "multa",
                        "l": "multī, -ae, -a",
                        "p": "Nōmen adiectīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Neutrum",
                        "d": "Plūrāle neutrum"
                    },
                    {
                        "f": "oppida",
                        "l": "oppidum, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Neutrum",
                        "d": "Plūrāle neutrī generis in -a",
                        "punc": "."
                    }
                ]
            },
            {
                "numerus": "",
                "marginalia": "multī ↔ paucī",
                "tokens": [
                    {
                        "f": "In",
                        "l": "in",
                        "p": "Praepositiō",
                        "c": "cum Ablātīvō",
                        "n": "—",
                        "g": "—",
                        "d": "Indicat locum"
                    },
                    {
                        "f": "Galliā",
                        "l": "Gallia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Ablātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Ablātīvus locī post 'in'"
                    },
                    {
                        "f": "et",
                        "l": "et",
                        "p": "Coniūnctiō",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Coniunctio copulātīva"
                    },
                    {
                        "f": "in",
                        "l": "in",
                        "p": "Praepositiō",
                        "c": "cum Ablātīvō",
                        "n": "—",
                        "g": "—",
                        "d": "Indicat locum"
                    },
                    {
                        "f": "Germāniā",
                        "l": "Germānia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Ablātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Ablātīvus locī post 'in'"
                    },
                    {
                        "f": "multī",
                        "l": "multī, -ae, -a",
                        "p": "Nōmen adiectīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Masculīnum",
                        "d": "↔ paucī"
                    },
                    {
                        "f": "sunt",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Plūrālis",
                        "g": "—",
                        "d": "Persōna III plūrālis"
                    },
                    {
                        "f": "fluviī",
                        "l": "fluvius, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Masculīnum",
                        "d": "Plūrāle: fluvius -> fluviī",
                        "punc": "."
                    },
                    {
                        "f": "Suntne",
                        "l": "Suntne",
                        "p": "Nōmen / Verbum",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Suntne"
                    },
                    {
                        "f": "multī",
                        "l": "multī, -ae, -a",
                        "p": "Nōmen adiectīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Masculīnum",
                        "d": "↔ paucī"
                    },
                    {
                        "f": "fluviī",
                        "l": "fluvius, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Masculīnum",
                        "d": "Plūrāle: fluvius -> fluviī"
                    },
                    {
                        "f": "et",
                        "l": "et",
                        "p": "Coniūnctiō",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Coniunctio copulātīva"
                    },
                    {
                        "f": "multa",
                        "l": "multī, -ae, -a",
                        "p": "Nōmen adiectīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Neutrum",
                        "d": "Plūrāle neutrum"
                    },
                    {
                        "f": "oppida",
                        "l": "oppidum, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Neutrum",
                        "d": "Plūrāle neutrī generis in -a"
                    },
                    {
                        "f": "in",
                        "l": "in",
                        "p": "Praepositiō",
                        "c": "cum Ablātīvō",
                        "n": "—",
                        "g": "—",
                        "d": "Indicat locum"
                    },
                    {
                        "f": "Arabiā",
                        "l": "Arabia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Ablātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Ablātīvus locī post 'in'",
                        "punc": "?"
                    }
                ]
            },
            {
                "numerus": "XXXV",
                "marginalia": "",
                "tokens": [
                    {
                        "f": "In",
                        "l": "in",
                        "p": "Praepositiō",
                        "c": "cum Ablātīvō",
                        "n": "—",
                        "g": "—",
                        "d": "Indicat locum"
                    },
                    {
                        "f": "Arabiā",
                        "l": "Arabia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Ablātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Ablātīvus locī post 'in'"
                    },
                    {
                        "f": "nōn",
                        "l": "nōn",
                        "p": "Adverbium",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Negat sententiam"
                    },
                    {
                        "f": "multī",
                        "l": "multī, -ae, -a",
                        "p": "Nōmen adiectīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Masculīnum",
                        "d": "↔ paucī",
                        "punc": ","
                    },
                    {
                        "f": "sed",
                        "l": "sed",
                        "p": "Coniūnctiō",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Coniunctio adversātīva"
                    },
                    {
                        "f": "paucī",
                        "l": "paucī, -ae, -a",
                        "p": "Nōmen adiectīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Masculīnum",
                        "d": "↔ multī"
                    },
                    {
                        "f": "fluviī",
                        "l": "fluvius, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Masculīnum",
                        "d": "Plūrāle: fluvius -> fluviī"
                    },
                    {
                        "f": "sunt",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Plūrālis",
                        "g": "—",
                        "d": "Persōna III plūrālis"
                    },
                    {
                        "f": "et",
                        "l": "et",
                        "p": "Coniūnctiō",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Coniunctio copulātīva"
                    },
                    {
                        "f": "pauca",
                        "l": "paucī, -ae, -a",
                        "p": "Nōmen adiectīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Neutrum",
                        "d": "Plūrāle neutrum"
                    },
                    {
                        "f": "oppida",
                        "l": "oppidum, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Neutrum",
                        "d": "Plūrāle neutrī generis in -a",
                        "punc": "."
                    }
                ]
            },
            {
                "numerus": "",
                "marginalia": "num? = certē nōn",
                "tokens": [
                    {
                        "f": "Num",
                        "l": "num",
                        "p": "Particula",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Interrogat cum exspectātiōne negātīvā"
                    },
                    {
                        "f": "Crēta",
                        "l": "Crēta, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Īnsula Graeca magna"
                    },
                    {
                        "f": "oppidum",
                        "l": "oppidum, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Neutrum",
                        "d": "Locus mūnītus ubi hominēs habitant"
                    },
                    {
                        "f": "est",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Persōna III praesentis",
                        "punc": "?"
                    },
                    {
                        "f": "Crēta",
                        "l": "Crēta, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Īnsula Graeca magna"
                    },
                    {
                        "f": "oppidum",
                        "l": "oppidum, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Neutrum",
                        "d": "Locus mūnītus ubi hominēs habitant"
                    },
                    {
                        "f": "nōn",
                        "l": "nōn",
                        "p": "Adverbium",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Negat sententiam"
                    },
                    {
                        "f": "est",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Persōna III praesentis",
                        "punc": "!"
                    },
                    {
                        "f": "Quid",
                        "l": "quis, quid",
                        "p": "Prōnōmen interrogātīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Neutrum",
                        "d": "Quaerit dē rē"
                    },
                    {
                        "f": "est",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Persōna III praesentis"
                    },
                    {
                        "f": "Crēta",
                        "l": "Crēta, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Īnsula Graeca magna",
                        "punc": "?"
                    },
                    {
                        "f": "Crēta",
                        "l": "Crēta, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Īnsula Graeca magna"
                    },
                    {
                        "f": "īnsula",
                        "l": "īnsula, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Terra aquā cincta"
                    },
                    {
                        "f": "est",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Persōna III praesentis",
                        "punc": "."
                    }
                ]
            },
            {
                "numerus": "",
                "marginalia": "",
                "tokens": [
                    {
                        "f": "Num",
                        "l": "num",
                        "p": "Particula",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Interrogat cum exspectātiōne negātīvā"
                    },
                    {
                        "f": "Sparta",
                        "l": "Sparta, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Oppidum Graecum"
                    },
                    {
                        "f": "īnsula",
                        "l": "īnsula, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Terra aquā cincta"
                    },
                    {
                        "f": "est",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Persōna III praesentis",
                        "punc": "?"
                    },
                    {
                        "f": "Sparta",
                        "l": "Sparta, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Oppidum Graecum"
                    },
                    {
                        "f": "nōn",
                        "l": "nōn",
                        "p": "Adverbium",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Negat sententiam"
                    },
                    {
                        "f": "est",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Persōna III praesentis"
                    },
                    {
                        "f": "īnsula",
                        "l": "īnsula, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Terra aquā cincta",
                        "punc": "!"
                    },
                    {
                        "f": "Quid",
                        "l": "quis, quid",
                        "p": "Prōnōmen interrogātīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Neutrum",
                        "d": "Quaerit dē rē"
                    },
                    {
                        "f": "est",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Persōna III praesentis"
                    },
                    {
                        "f": "Sparta",
                        "l": "Sparta, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Oppidum Graecum",
                        "punc": "?"
                    },
                    {
                        "f": "Sparta",
                        "l": "Sparta, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Oppidum Graecum"
                    },
                    {
                        "f": "oppidum",
                        "l": "oppidum, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Neutrum",
                        "d": "Locus mūnītus ubi hominēs habitant"
                    },
                    {
                        "f": "est",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Persōna III praesentis",
                        "punc": "."
                    }
                ]
            },
            {
                "numerus": "",
                "marginalia": "quid?",
                "tokens": [
                    {
                        "f": "Rhēnus",
                        "l": "Rhēnus, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Fluvius in Germāniā"
                    },
                    {
                        "f": "quid",
                        "l": "quis, quid",
                        "p": "Prōnōmen interrogātīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Neutrum",
                        "d": "Quaerit dē rē"
                    },
                    {
                        "f": "est",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Persōna III praesentis",
                        "punc": "?"
                    },
                    {
                        "f": "Rhēnus",
                        "l": "Rhēnus, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Fluvius in Germāniā"
                    },
                    {
                        "f": "est",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Persōna III praesentis"
                    },
                    {
                        "f": "magnus",
                        "l": "magnus, -a, -um",
                        "p": "Nōmen adiectīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "↔ parvus"
                    },
                    {
                        "f": "fluvius",
                        "l": "fluvius, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Aqua fluēns magna",
                        "punc": "."
                    },
                    {
                        "f": "Num",
                        "l": "num",
                        "p": "Particula",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Interrogat cum exspectātiōne negātīvā"
                    },
                    {
                        "f": "ōceanus",
                        "l": "ōceanus, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Mare magnum"
                    },
                    {
                        "f": "Atlanticus",
                        "l": "Atlanticus, -a, -um",
                        "p": "Nōmen adiectīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Ōceanus magnus"
                    },
                    {
                        "f": "parvus",
                        "l": "parvus, -a, -um",
                        "p": "Nōmen adiectīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "↔ magnus"
                    },
                    {
                        "f": "est",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Persōna III praesentis",
                        "punc": "?"
                    }
                ]
            },
            {
                "numerus": "",
                "marginalia": "",
                "tokens": [
                    {
                        "f": "Nōn",
                        "l": "nōn",
                        "p": "Adverbium",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Negat sententiam"
                    },
                    {
                        "f": "parvus",
                        "l": "parvus, -a, -um",
                        "p": "Nōmen adiectīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "↔ magnus",
                        "punc": ","
                    },
                    {
                        "f": "sed",
                        "l": "sed",
                        "p": "Coniūnctiō",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Coniunctio adversātīva"
                    },
                    {
                        "f": "magnus",
                        "l": "magnus, -a, -um",
                        "p": "Nōmen adiectīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "↔ parvus"
                    },
                    {
                        "f": "est",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Persōna III praesentis"
                    },
                    {
                        "f": "ōceanus",
                        "l": "ōceanus, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Mare magnum",
                        "punc": "."
                    }
                ]
            },
            {
                "numerus": "XL",
                "marginalia": "prōvincia",
                "tokens": [
                    {
                        "f": "Ubi",
                        "l": "ubi",
                        "p": "Adverbium",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Quaerit locum"
                    },
                    {
                        "f": "est",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Persōna III praesentis"
                    },
                    {
                        "f": "imperium",
                        "l": "imperium, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Neutrum",
                        "d": "Regnum vel orbis Rōmānus"
                    },
                    {
                        "f": "Rōmānum",
                        "l": "Rōmānus, -a, -um",
                        "p": "Nōmen adiectīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Neutrum",
                        "d": "Neutrum",
                        "punc": "?"
                    },
                    {
                        "f": "Imperium",
                        "l": "imperium, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Neutrum",
                        "d": "Regnum vel orbis Rōmānus"
                    },
                    {
                        "f": "Rōmānum",
                        "l": "Rōmānus, -a, -um",
                        "p": "Nōmen adiectīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Neutrum",
                        "d": "Neutrum"
                    },
                    {
                        "f": "est",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Persōna III praesentis"
                    },
                    {
                        "f": "in",
                        "l": "in",
                        "p": "Praepositiō",
                        "c": "cum Ablātīvō",
                        "n": "—",
                        "g": "—",
                        "d": "Indicat locum"
                    },
                    {
                        "f": "Eurōpā",
                        "l": "Eurōpa, -ae",
                        "p": "Nōmen proprium",
                        "c": "Ablātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Ablātīvus locī post 'in'",
                        "punc": ","
                    },
                    {
                        "f": "in",
                        "l": "in",
                        "p": "Praepositiō",
                        "c": "cum Ablātīvō",
                        "n": "—",
                        "g": "—",
                        "d": "Indicat locum"
                    },
                    {
                        "f": "Asiā",
                        "l": "Asia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Ablātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Ablātīvus locī post 'in'",
                        "punc": ","
                    },
                    {
                        "f": "in",
                        "l": "in",
                        "p": "Praepositiō",
                        "c": "cum Ablātīvō",
                        "n": "—",
                        "g": "—",
                        "d": "Indicat locum"
                    },
                    {
                        "f": "Āfricā",
                        "l": "Āfrica, -ae",
                        "p": "Nōmen proprium",
                        "c": "Ablātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Ablātīvus locī post 'in'",
                        "punc": "."
                    }
                ]
            },
            {
                "numerus": "",
                "marginalia": "",
                "tokens": [
                    {
                        "f": "Hispānia",
                        "l": "Hispānia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Terra in Eurōpā"
                    },
                    {
                        "f": "et",
                        "l": "et",
                        "p": "Coniūnctiō",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Coniunctio copulātīva"
                    },
                    {
                        "f": "Syria",
                        "l": "Syria, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Terra in Asiā"
                    },
                    {
                        "f": "et",
                        "l": "et",
                        "p": "Coniūnctiō",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Coniunctio copulātīva"
                    },
                    {
                        "f": "Aegyptus",
                        "l": "Aegyptus, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Terra in Āfricā"
                    },
                    {
                        "f": "prōvinciae",
                        "l": "prōvincia, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Fēminīnum",
                        "d": "Plūrāle: prōvincia -> prōvinciae"
                    },
                    {
                        "f": "Rōmānae",
                        "l": "Rōmānus, -a, -um",
                        "p": "Nōmen adiectīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Fēminīnum",
                        "d": "Plūrāle"
                    },
                    {
                        "f": "sunt",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Plūrālis",
                        "g": "—",
                        "d": "Persōna III plūrālis",
                        "punc": "."
                    }
                ]
            },
            {
                "numerus": "",
                "marginalia": "",
                "tokens": [
                    {
                        "f": "Germānia",
                        "l": "Germānia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Terra in Eurōpā"
                    },
                    {
                        "f": "nōn",
                        "l": "nōn",
                        "p": "Adverbium",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Negat sententiam"
                    },
                    {
                        "f": "est",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Persōna III praesentis"
                    },
                    {
                        "f": "prōvincia",
                        "l": "prōvincia, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Pars imperiī subiecta"
                    },
                    {
                        "f": "Rōmāna",
                        "l": "Rōmānus, -a, -um",
                        "p": "Nōmen adiectīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Fēminīnum",
                        "punc": ":"
                    },
                    {
                        "f": "Germānia",
                        "l": "Germānia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Terra in Eurōpā"
                    },
                    {
                        "f": "in",
                        "l": "in",
                        "p": "Praepositiō",
                        "c": "cum Ablātīvō",
                        "n": "—",
                        "g": "—",
                        "d": "Indicat locum"
                    },
                    {
                        "f": "imperiō",
                        "l": "imperium, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Ablātīvus",
                        "n": "Singulāris",
                        "g": "Neutrum",
                        "d": "Post praepositiōnem 'in'"
                    },
                    {
                        "f": "Rōmānō",
                        "l": "Rōmānō",
                        "p": "Nōmen / Verbum",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Rōmānō"
                    },
                    {
                        "f": "nōn",
                        "l": "nōn",
                        "p": "Adverbium",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Negat sententiam"
                    },
                    {
                        "f": "est",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Persōna III praesentis",
                        "punc": "."
                    }
                ]
            },
            {
                "numerus": "",
                "marginalia": "",
                "tokens": [
                    {
                        "f": "Sed",
                        "l": "sed",
                        "p": "Coniūnctiō",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Coniunctio adversātīva"
                    },
                    {
                        "f": "Gallia",
                        "l": "Gallia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Terra in Eurōpā"
                    },
                    {
                        "f": "et",
                        "l": "et",
                        "p": "Coniūnctiō",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Coniunctio copulātīva"
                    },
                    {
                        "f": "Britannia",
                        "l": "Britannia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Īnsula magna in Eurōpā"
                    },
                    {
                        "f": "sunt",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Plūrālis",
                        "g": "—",
                        "d": "Persōna III plūrālis"
                    },
                    {
                        "f": "prōvinciae",
                        "l": "prōvincia, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Fēminīnum",
                        "d": "Plūrāle: prōvincia -> prōvinciae"
                    },
                    {
                        "f": "Rōmānae",
                        "l": "Rōmānus, -a, -um",
                        "p": "Nōmen adiectīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Fēminīnum",
                        "d": "Plūrāle",
                        "punc": "."
                    },
                    {
                        "f": "In",
                        "l": "in",
                        "p": "Praepositiō",
                        "c": "cum Ablātīvō",
                        "n": "—",
                        "g": "—",
                        "d": "Indicat locum"
                    },
                    {
                        "f": "imperiō",
                        "l": "imperium, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Ablātīvus",
                        "n": "Singulāris",
                        "g": "Neutrum",
                        "d": "Post praepositiōnem 'in'"
                    },
                    {
                        "f": "Rōmānō",
                        "l": "Rōmānō",
                        "p": "Nōmen / Verbum",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Rōmānō"
                    },
                    {
                        "f": "multae",
                        "l": "multī, -ae, -a",
                        "p": "Nōmen adiectīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Fēminīnum",
                        "d": "Plūrāle fēminīnum"
                    },
                    {
                        "f": "sunt",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Plūrālis",
                        "g": "—",
                        "d": "Persōna III plūrālis"
                    },
                    {
                        "f": "prōvinciae",
                        "l": "prōvincia, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Fēminīnum",
                        "d": "Plūrāle: prōvincia -> prōvinciae",
                        "punc": "."
                    }
                ]
            },
            {
                "numerus": "",
                "marginalia": "",
                "tokens": [
                    {
                        "f": "Magnum",
                        "l": "magnus, -a, -um",
                        "p": "Nōmen adiectīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Neutrum",
                        "d": "Adiectīvum neutrum"
                    },
                    {
                        "f": "est",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Persōna III praesentis"
                    },
                    {
                        "f": "imperium",
                        "l": "imperium, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Neutrum",
                        "d": "Regnum vel orbis Rōmānus"
                    },
                    {
                        "f": "Rōmānum",
                        "l": "Rōmānus, -a, -um",
                        "p": "Nōmen adiectīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Neutrum",
                        "d": "Neutrum",
                        "punc": "!"
                    }
                ]
            }
        ]
    },
    {
        "titulusSectio": "LĒCTIŌ TERTIA: LITTERAE ET NVMERĪ",
        "versus": [
            {
                "numerus": "XLV",
                "marginalia": "numerus",
                "tokens": [
                    {
                        "f": "I",
                        "l": "ūnus",
                        "p": "Numerus Rōmānus",
                        "c": "—",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Numerus I (1)"
                    },
                    {
                        "f": "et",
                        "l": "et",
                        "p": "Coniūnctiō",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Coniunctio copulātīva"
                    },
                    {
                        "f": "II",
                        "l": "duo",
                        "p": "Numerus Rōmānus",
                        "c": "—",
                        "n": "Plūrālis",
                        "g": "—",
                        "d": "Numerus II (2)"
                    },
                    {
                        "f": "numerī",
                        "l": "numerus, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Masculīnum",
                        "d": "Plūrāle: numerus -> numerī"
                    },
                    {
                        "f": "sunt",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Plūrālis",
                        "g": "—",
                        "d": "Persōna III plūrālis",
                        "punc": "."
                    },
                    {
                        "f": "III",
                        "l": "trēs",
                        "p": "Numerus Rōmānus",
                        "c": "—",
                        "n": "Plūrālis",
                        "g": "—",
                        "d": "Numerus III (3)"
                    },
                    {
                        "f": "quoque",
                        "l": "quoque",
                        "p": "Coniūnctiō",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "= etiam"
                    },
                    {
                        "f": "numerus",
                        "l": "numerus, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Quantitās (I, II, III...)"
                    },
                    {
                        "f": "est",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Persōna III praesentis",
                        "punc": "."
                    },
                    {
                        "f": "I",
                        "l": "ūnus",
                        "p": "Numerus Rōmānus",
                        "c": "—",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Numerus I (1)",
                        "punc": ","
                    },
                    {
                        "f": "II",
                        "l": "duo",
                        "p": "Numerus Rōmānus",
                        "c": "—",
                        "n": "Plūrālis",
                        "g": "—",
                        "d": "Numerus II (2)",
                        "punc": ","
                    },
                    {
                        "f": "III",
                        "l": "trēs",
                        "p": "Numerus Rōmānus",
                        "c": "—",
                        "n": "Plūrālis",
                        "g": "—",
                        "d": "Numerus III (3)"
                    },
                    {
                        "f": "numerī",
                        "l": "numerus, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Masculīnum",
                        "d": "Plūrāle: numerus -> numerī"
                    },
                    {
                        "f": "Rōmānī",
                        "l": "Rōmānus, -a, -um",
                        "p": "Nōmen adiectīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Masculīnum",
                        "d": "Plūrāle"
                    },
                    {
                        "f": "sunt",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Plūrālis",
                        "g": "—",
                        "d": "Persōna III plūrālis",
                        "punc": "."
                    }
                ]
            },
            {
                "numerus": "",
                "marginalia": "littera",
                "tokens": [
                    {
                        "f": "I",
                        "l": "ūnus",
                        "p": "Numerus Rōmānus",
                        "c": "—",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Numerus I (1)"
                    },
                    {
                        "f": "et",
                        "l": "et",
                        "p": "Coniūnctiō",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Coniunctio copulātīva"
                    },
                    {
                        "f": "II",
                        "l": "duo",
                        "p": "Numerus Rōmānus",
                        "c": "—",
                        "n": "Plūrālis",
                        "g": "—",
                        "d": "Numerus II (2)"
                    },
                    {
                        "f": "sunt",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Plūrālis",
                        "g": "—",
                        "d": "Persōna III plūrālis"
                    },
                    {
                        "f": "parvī",
                        "l": "parvus, -a, -um",
                        "p": "Nōmen adiectīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Masculīnum",
                        "d": "Plūrāle"
                    },
                    {
                        "f": "numerī",
                        "l": "numerus, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Masculīnum",
                        "d": "Plūrāle: numerus -> numerī",
                        "punc": "."
                    },
                    {
                        "f": "M",
                        "l": "mīlle",
                        "p": "Numerus Rōmānus",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Numerus M (1000)"
                    },
                    {
                        "f": "magnus",
                        "l": "magnus, -a, -um",
                        "p": "Nōmen adiectīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "↔ parvus"
                    },
                    {
                        "f": "numerus",
                        "l": "numerus, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Quantitās (I, II, III...)"
                    },
                    {
                        "f": "est",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Persōna III praesentis",
                        "punc": "."
                    },
                    {
                        "f": "A",
                        "l": "A",
                        "p": "Littera",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Littera prīma"
                    },
                    {
                        "f": "et",
                        "l": "et",
                        "p": "Coniūnctiō",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Coniunctio copulātīva"
                    },
                    {
                        "f": "B",
                        "l": "B",
                        "p": "Littera",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Littera secunda"
                    },
                    {
                        "f": "litterae",
                        "l": "littera, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Fēminīnum",
                        "d": "Plūrāle: littera -> litterae"
                    },
                    {
                        "f": "sunt",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Plūrālis",
                        "g": "—",
                        "d": "Persōna III plūrālis",
                        "punc": "."
                    },
                    {
                        "f": "C",
                        "l": "C",
                        "p": "Littera",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Littera tertia"
                    },
                    {
                        "f": "quoque",
                        "l": "quoque",
                        "p": "Coniūnctiō",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "= etiam"
                    },
                    {
                        "f": "littera",
                        "l": "littera, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Pars vocābulī (A, B, C...)"
                    },
                    {
                        "f": "est",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Persōna III praesentis",
                        "punc": "."
                    }
                ]
            },
            {
                "numerus": "",
                "marginalia": "",
                "tokens": [
                    {
                        "f": "A",
                        "l": "A",
                        "p": "Littera",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Littera prīma",
                        "punc": ","
                    },
                    {
                        "f": "B",
                        "l": "B",
                        "p": "Littera",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Littera secunda",
                        "punc": ","
                    },
                    {
                        "f": "C",
                        "l": "C",
                        "p": "Littera",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Littera tertia"
                    },
                    {
                        "f": "sunt",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Plūrālis",
                        "g": "—",
                        "d": "Persōna III plūrālis"
                    },
                    {
                        "f": "trēs",
                        "l": "trēs, tria",
                        "p": "Nōmen numerāle",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Masculīnum / Fēminīnum",
                        "d": "Numerus III"
                    },
                    {
                        "f": "litterae",
                        "l": "littera, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Fēminīnum",
                        "d": "Plūrāle: littera -> litterae",
                        "punc": "."
                    },
                    {
                        "f": "A",
                        "l": "A",
                        "p": "Littera",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Littera prīma"
                    },
                    {
                        "f": "est",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Persōna III praesentis"
                    },
                    {
                        "f": "littera",
                        "l": "littera, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Pars vocābulī (A, B, C...)"
                    },
                    {
                        "f": "prīma",
                        "l": "prīmus, -a, -um",
                        "p": "Nōmen ōrdināle",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Ōrdō I",
                        "punc": ","
                    },
                    {
                        "f": "B",
                        "l": "B",
                        "p": "Littera",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Littera secunda"
                    },
                    {
                        "f": "littera",
                        "l": "littera, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Pars vocābulī (A, B, C...)"
                    },
                    {
                        "f": "secunda",
                        "l": "secundus, -a, -um",
                        "p": "Nōmen ōrdināle",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Ōrdō II",
                        "punc": ","
                    },
                    {
                        "f": "C",
                        "l": "C",
                        "p": "Littera",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Littera tertia"
                    },
                    {
                        "f": "littera",
                        "l": "littera, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Pars vocābulī (A, B, C...)"
                    },
                    {
                        "f": "tertia",
                        "l": "tertius, -a, -um",
                        "p": "Nōmen ōrdināle",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Ōrdō III",
                        "punc": "."
                    }
                ]
            },
            {
                "numerus": "",
                "marginalia": "",
                "tokens": [
                    {
                        "f": "Γ",
                        "l": "gamma",
                        "p": "Littera Graeca",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Littera tertia Graeca"
                    },
                    {
                        "f": "littera",
                        "l": "littera, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Pars vocābulī (A, B, C...)"
                    },
                    {
                        "f": "Graeca",
                        "l": "Graecus, -a, -um",
                        "p": "Nōmen adiectīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Fēminīnum"
                    },
                    {
                        "f": "est",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Persōna III praesentis",
                        "punc": "."
                    },
                    {
                        "f": "C",
                        "l": "C",
                        "p": "Littera",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Littera tertia"
                    },
                    {
                        "f": "est",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Persōna III praesentis"
                    },
                    {
                        "f": "littera",
                        "l": "littera, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Pars vocābulī (A, B, C...)"
                    },
                    {
                        "f": "Latīna",
                        "l": "Latīnus, -a, -um",
                        "p": "Nōmen adiectīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Fēminīnum",
                        "punc": "."
                    },
                    {
                        "f": "C",
                        "l": "C",
                        "p": "Littera",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Littera tertia"
                    },
                    {
                        "f": "et",
                        "l": "et",
                        "p": "Coniūnctiō",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Coniunctio copulātīva"
                    },
                    {
                        "f": "D",
                        "l": "D",
                        "p": "Littera",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Littera quarta"
                    },
                    {
                        "f": "litterae",
                        "l": "littera, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Fēminīnum",
                        "d": "Plūrāle: littera -> litterae"
                    },
                    {
                        "f": "Latīnae",
                        "l": "Latīnus, -a, -um",
                        "p": "Nōmen adiectīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Fēminīnum",
                        "d": "Plūrāle"
                    },
                    {
                        "f": "sunt",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Plūrālis",
                        "g": "—",
                        "d": "Persōna III plūrālis",
                        "punc": "."
                    },
                    {
                        "f": "Γ",
                        "l": "gamma",
                        "p": "Littera Graeca",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Littera tertia Graeca"
                    },
                    {
                        "f": "et",
                        "l": "et",
                        "p": "Coniūnctiō",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Coniunctio copulātīva"
                    },
                    {
                        "f": "Δ",
                        "l": "delta",
                        "p": "Littera Graeca",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Littera quarta Graeca"
                    },
                    {
                        "f": "sunt",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Plūrālis",
                        "g": "—",
                        "d": "Persōna III plūrālis"
                    },
                    {
                        "f": "litterae",
                        "l": "littera, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Fēminīnum",
                        "d": "Plūrāle: littera -> litterae"
                    },
                    {
                        "f": "Graecae",
                        "l": "Graecus, -a, -um",
                        "p": "Nōmen adiectīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Fēminīnum",
                        "d": "Plūrāle",
                        "punc": "."
                    }
                ]
            },
            {
                "numerus": "L",
                "marginalia": "vocābulum",
                "tokens": [
                    {
                        "f": "Fluvius",
                        "l": "fluvius, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Aqua fluēns magna"
                    },
                    {
                        "f": "et",
                        "l": "et",
                        "p": "Coniūnctiō",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Coniunctio copulātīva"
                    },
                    {
                        "f": "oppidum",
                        "l": "oppidum, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Neutrum",
                        "d": "Locus mūnītus ubi hominēs habitant"
                    },
                    {
                        "f": "vocābula",
                        "l": "vocābulum, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Neutrum",
                        "d": "Plūrāle neutrī generis in -a"
                    },
                    {
                        "f": "Latīna",
                        "l": "Latīnus, -a, -um",
                        "p": "Nōmen adiectīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Fēminīnum"
                    },
                    {
                        "f": "sunt",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Plūrālis",
                        "g": "—",
                        "d": "Persōna III plūrālis",
                        "punc": "."
                    },
                    {
                        "f": "Ubi",
                        "l": "ubi",
                        "p": "Adverbium",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Quaerit locum"
                    },
                    {
                        "f": "quoque",
                        "l": "quoque",
                        "p": "Coniūnctiō",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "= etiam"
                    },
                    {
                        "f": "vocābulum",
                        "l": "vocābulum, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Neutrum",
                        "d": "Verbum vel nōmen significāns"
                    },
                    {
                        "f": "Latīnum",
                        "l": "Latīnus, -a, -um",
                        "p": "Nōmen adiectīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Neutrum",
                        "d": "Neutrum"
                    },
                    {
                        "f": "est",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Persōna III praesentis",
                        "punc": "."
                    }
                ]
            },
            {
                "numerus": "",
                "marginalia": "",
                "tokens": [
                    {
                        "f": "In",
                        "l": "in",
                        "p": "Praepositiō",
                        "c": "cum Ablātīvō",
                        "n": "—",
                        "g": "—",
                        "d": "Indicat locum"
                    },
                    {
                        "f": "vocābulō",
                        "l": "vocābulum, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Ablātīvus",
                        "n": "Singulāris",
                        "g": "Neutrum",
                        "d": "Post praepositiōnem 'in'"
                    },
                    {
                        "f": "ubi",
                        "l": "ubi",
                        "p": "Adverbium",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Quaerit locum"
                    },
                    {
                        "f": "sunt",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Plūrālis",
                        "g": "—",
                        "d": "Persōna III plūrālis"
                    },
                    {
                        "f": "trēs",
                        "l": "trēs, tria",
                        "p": "Nōmen numerāle",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Masculīnum / Fēminīnum",
                        "d": "Numerus III"
                    },
                    {
                        "f": "litterae",
                        "l": "littera, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Fēminīnum",
                        "d": "Plūrāle: littera -> litterae",
                        "punc": "."
                    },
                    {
                        "f": "In",
                        "l": "in",
                        "p": "Praepositiō",
                        "c": "cum Ablātīvō",
                        "n": "—",
                        "g": "—",
                        "d": "Indicat locum"
                    },
                    {
                        "f": "capitulō",
                        "l": "capitulum, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Ablātīvus",
                        "n": "Singulāris",
                        "g": "Neutrum",
                        "d": "Post praepositiōnem 'in'"
                    },
                    {
                        "f": "prīmō",
                        "l": "prīmus, -a, -um",
                        "p": "Nōmen ōrdināle",
                        "c": "Ablātīvus",
                        "n": "Singulāris",
                        "g": "Neutrum",
                        "d": "in capitulō prīmō"
                    },
                    {
                        "f": "mīlle",
                        "l": "mīlle",
                        "p": "Nōmen numerāle indecl.",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Numerus M (1000)"
                    },
                    {
                        "f": "vocābula",
                        "l": "vocābulum, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Neutrum",
                        "d": "Plūrāle neutrī generis in -a"
                    },
                    {
                        "f": "sunt",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Plūrālis",
                        "g": "—",
                        "d": "Persōna III plūrālis",
                        "punc": "."
                    }
                ]
            },
            {
                "numerus": "",
                "marginalia": "syllaba",
                "tokens": [
                    {
                        "f": "In",
                        "l": "in",
                        "p": "Praepositiō",
                        "c": "cum Ablātīvō",
                        "n": "—",
                        "g": "—",
                        "d": "Indicat locum"
                    },
                    {
                        "f": "vocābulō",
                        "l": "vocābulum, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Ablātīvus",
                        "n": "Singulāris",
                        "g": "Neutrum",
                        "d": "Post praepositiōnem 'in'"
                    },
                    {
                        "f": "īnsula",
                        "l": "īnsula, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Terra aquā cincta"
                    },
                    {
                        "f": "sex",
                        "l": "sex",
                        "p": "Nōmen numerāle indecl.",
                        "c": "—",
                        "n": "Plūrālis",
                        "g": "—",
                        "d": "Numerus VI (6)"
                    },
                    {
                        "f": "litterae",
                        "l": "littera, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Fēminīnum",
                        "d": "Plūrāle: littera -> litterae"
                    },
                    {
                        "f": "et",
                        "l": "et",
                        "p": "Coniūnctiō",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Coniunctio copulātīva"
                    },
                    {
                        "f": "trēs",
                        "l": "trēs, tria",
                        "p": "Nōmen numerāle",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Masculīnum / Fēminīnum",
                        "d": "Numerus III"
                    },
                    {
                        "f": "syllabae",
                        "l": "syllaba, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Fēminīnum",
                        "d": "Plūrāle: syllaba -> syllabae"
                    },
                    {
                        "f": "sunt",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Plūrālis",
                        "g": "—",
                        "d": "Persōna III plūrālis",
                        "punc": ":"
                    },
                    {
                        "f": "syllaba",
                        "l": "syllaba, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Pars vocābulī ūnō spīritū prōnūntiāta"
                    },
                    {
                        "f": "prīma",
                        "l": "prīmus, -a, -um",
                        "p": "Nōmen ōrdināle",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Ōrdō I"
                    },
                    {
                        "f": "īn-",
                        "l": "īn-",
                        "p": "Nōmen / Verbum",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "īn-",
                        "punc": ","
                    },
                    {
                        "f": "secunda",
                        "l": "secundus, -a, -um",
                        "p": "Nōmen ōrdināle",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Ōrdō II"
                    },
                    {
                        "f": "-su-",
                        "l": "-su-",
                        "p": "Nōmen / Verbum",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "-su-",
                        "punc": ","
                    },
                    {
                        "f": "tertia",
                        "l": "tertius, -a, -um",
                        "p": "Nōmen ōrdināle",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Ōrdō III"
                    },
                    {
                        "f": "-la",
                        "l": "-la",
                        "p": "Nōmen / Verbum",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "-la",
                        "punc": "."
                    }
                ]
            },
            {
                "numerus": "",
                "marginalia": "",
                "tokens": [
                    {
                        "f": "In",
                        "l": "in",
                        "p": "Praepositiō",
                        "c": "cum Ablātīvō",
                        "n": "—",
                        "g": "—",
                        "d": "Indicat locum"
                    },
                    {
                        "f": "vocābulō",
                        "l": "vocābulum, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Ablātīvus",
                        "n": "Singulāris",
                        "g": "Neutrum",
                        "d": "Post praepositiōnem 'in'"
                    },
                    {
                        "f": "nōn",
                        "l": "nōn",
                        "p": "Adverbium",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Negat sententiam"
                    },
                    {
                        "f": "sunt",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Plūrālis",
                        "g": "—",
                        "d": "Persōna III plūrālis"
                    },
                    {
                        "f": "trēs",
                        "l": "trēs, tria",
                        "p": "Nōmen numerāle",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Masculīnum / Fēminīnum",
                        "d": "Numerus III"
                    },
                    {
                        "f": "litterae",
                        "l": "littera, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Fēminīnum",
                        "d": "Plūrāle: littera -> litterae"
                    },
                    {
                        "f": "et",
                        "l": "et",
                        "p": "Coniūnctiō",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Coniunctio copulātīva"
                    },
                    {
                        "f": "ūna",
                        "l": "ūnus, -a, -um",
                        "p": "Nōmen numerāle",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Numerus I fēminīnus"
                    },
                    {
                        "f": "syllaba",
                        "l": "syllaba, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Pars vocābulī ūnō spīritū prōnūntiāta",
                        "punc": "."
                    }
                ]
            },
            {
                "numerus": "",
                "marginalia": "",
                "tokens": [
                    {
                        "f": "Quid",
                        "l": "quis, quid",
                        "p": "Prōnōmen interrogātīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Neutrum",
                        "d": "Quaerit dē rē"
                    },
                    {
                        "f": "est",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Persōna III praesentis"
                    },
                    {
                        "f": "III",
                        "l": "trēs",
                        "p": "Numerus Rōmānus",
                        "c": "—",
                        "n": "Plūrālis",
                        "g": "—",
                        "d": "Numerus III (3)",
                        "punc": "?"
                    },
                    {
                        "f": "III",
                        "l": "trēs",
                        "p": "Numerus Rōmānus",
                        "c": "—",
                        "n": "Plūrālis",
                        "g": "—",
                        "d": "Numerus III (3)"
                    },
                    {
                        "f": "numerus",
                        "l": "numerus, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Quantitās (I, II, III...)"
                    },
                    {
                        "f": "Rōmānus",
                        "l": "Rōmānus, -a, -um",
                        "p": "Nōmen adiectīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Ex urbe Rōmā"
                    },
                    {
                        "f": "est",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Persōna III praesentis",
                        "punc": "."
                    },
                    {
                        "f": "Γ",
                        "l": "gamma",
                        "p": "Littera Graeca",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Littera tertia Graeca"
                    },
                    {
                        "f": "quid",
                        "l": "quis, quid",
                        "p": "Prōnōmen interrogātīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Neutrum",
                        "d": "Quaerit dē rē"
                    },
                    {
                        "f": "est",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Persōna III praesentis",
                        "punc": "?"
                    },
                    {
                        "f": "Γ",
                        "l": "gamma",
                        "p": "Littera Graeca",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Littera tertia Graeca"
                    },
                    {
                        "f": "littera",
                        "l": "littera, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Pars vocābulī (A, B, C...)"
                    },
                    {
                        "f": "Graeca",
                        "l": "Graecus, -a, -um",
                        "p": "Nōmen adiectīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Fēminīnum"
                    },
                    {
                        "f": "est",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Persōna III praesentis",
                        "punc": "."
                    }
                ]
            },
            {
                "numerus": "LV",
                "marginalia": "",
                "tokens": [
                    {
                        "f": "Num",
                        "l": "num",
                        "p": "Particula",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Interrogat cum exspectātiōne negātīvā"
                    },
                    {
                        "f": "C",
                        "l": "C",
                        "p": "Littera",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Littera tertia"
                    },
                    {
                        "f": "littera",
                        "l": "littera, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Pars vocābulī (A, B, C...)"
                    },
                    {
                        "f": "Graeca",
                        "l": "Graecus, -a, -um",
                        "p": "Nōmen adiectīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Fēminīnum"
                    },
                    {
                        "f": "est",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Persōna III praesentis",
                        "punc": "?"
                    },
                    {
                        "f": "Nōn",
                        "l": "nōn",
                        "p": "Adverbium",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Negat sententiam"
                    },
                    {
                        "f": "littera",
                        "l": "littera, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Pars vocābulī (A, B, C...)"
                    },
                    {
                        "f": "Graeca",
                        "l": "Graecus, -a, -um",
                        "p": "Nōmen adiectīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Fēminīnum",
                        "punc": ","
                    },
                    {
                        "f": "sed",
                        "l": "sed",
                        "p": "Coniūnctiō",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Coniunctio adversātīva"
                    },
                    {
                        "f": "littera",
                        "l": "littera, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Pars vocābulī (A, B, C...)"
                    },
                    {
                        "f": "Latīna",
                        "l": "Latīnus, -a, -um",
                        "p": "Nōmen adiectīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Fēminīnum"
                    },
                    {
                        "f": "est",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Persōna III praesentis"
                    },
                    {
                        "f": "C",
                        "l": "C",
                        "p": "Littera",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Littera tertia",
                        "punc": "."
                    }
                ]
            },
            {
                "numerus": "",
                "marginalia": "",
                "tokens": [
                    {
                        "f": "Estne",
                        "l": "Estne",
                        "p": "Nōmen / Verbum",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Estne"
                    },
                    {
                        "f": "B",
                        "l": "B",
                        "p": "Littera",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Littera secunda"
                    },
                    {
                        "f": "littera",
                        "l": "littera, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Pars vocābulī (A, B, C...)"
                    },
                    {
                        "f": "prīma",
                        "l": "prīmus, -a, -um",
                        "p": "Nōmen ōrdināle",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Ōrdō I",
                        "punc": "?"
                    },
                    {
                        "f": "B",
                        "l": "B",
                        "p": "Littera",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Littera secunda"
                    },
                    {
                        "f": "nōn",
                        "l": "nōn",
                        "p": "Adverbium",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Negat sententiam"
                    },
                    {
                        "f": "littera",
                        "l": "littera, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Pars vocābulī (A, B, C...)"
                    },
                    {
                        "f": "prīma",
                        "l": "prīmus, -a, -um",
                        "p": "Nōmen ōrdināle",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Ōrdō I",
                        "punc": ","
                    },
                    {
                        "f": "sed",
                        "l": "sed",
                        "p": "Coniūnctiō",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Coniunctio adversātīva"
                    },
                    {
                        "f": "secunda",
                        "l": "secundus, -a, -um",
                        "p": "Nōmen ōrdināle",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Ōrdō II"
                    },
                    {
                        "f": "est",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Persōna III praesentis",
                        "punc": "."
                    },
                    {
                        "f": "Quid",
                        "l": "quis, quid",
                        "p": "Prōnōmen interrogātīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Neutrum",
                        "d": "Quaerit dē rē"
                    },
                    {
                        "f": "est",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Persōna III praesentis"
                    },
                    {
                        "f": "nōn",
                        "l": "nōn",
                        "p": "Adverbium",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Negat sententiam",
                        "punc": "?"
                    },
                    {
                        "f": "Nōn",
                        "l": "nōn",
                        "p": "Adverbium",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Negat sententiam"
                    },
                    {
                        "f": "est",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Persōna III praesentis"
                    },
                    {
                        "f": "vocābulum",
                        "l": "vocābulum, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Neutrum",
                        "d": "Verbum vel nōmen significāns"
                    },
                    {
                        "f": "Latīnum",
                        "l": "Latīnus, -a, -um",
                        "p": "Nōmen adiectīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Neutrum",
                        "d": "Neutrum",
                        "punc": "."
                    }
                ]
            },
            {
                "numerus": "",
                "marginalia": "",
                "tokens": [
                    {
                        "f": "Nōn",
                        "l": "nōn",
                        "p": "Adverbium",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Negat sententiam",
                        "punc": ","
                    },
                    {
                        "f": "sed",
                        "l": "sed",
                        "p": "Coniūnctiō",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Coniunctio adversātīva",
                        "punc": ","
                    },
                    {
                        "f": "magnus",
                        "l": "magnus, -a, -um",
                        "p": "Nōmen adiectīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "↔ parvus",
                        "punc": ","
                    },
                    {
                        "f": "numerus",
                        "l": "numerus, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Quantitās (I, II, III...)"
                    },
                    {
                        "f": "vocābula",
                        "l": "vocābulum, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Neutrum",
                        "d": "Plūrāle neutrī generis in -a"
                    },
                    {
                        "f": "Latīna",
                        "l": "Latīnus, -a, -um",
                        "p": "Nōmen adiectīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Fēminīnum"
                    },
                    {
                        "f": "sunt",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Plūrālis",
                        "g": "—",
                        "d": "Persōna III plūrālis",
                        "punc": "."
                    },
                    {
                        "f": "Vocābulum",
                        "l": "vocābulum, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Neutrum",
                        "d": "Verbum vel nōmen significāns"
                    },
                    {
                        "f": "quoque",
                        "l": "quoque",
                        "p": "Coniūnctiō",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "= etiam"
                    },
                    {
                        "f": "vocābulum",
                        "l": "vocābulum, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Neutrum",
                        "d": "Verbum vel nōmen significāns"
                    },
                    {
                        "f": "Latīnum",
                        "l": "Latīnus, -a, -um",
                        "p": "Nōmen adiectīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Neutrum",
                        "d": "Neutrum"
                    },
                    {
                        "f": "est",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Persōna III praesentis",
                        "punc": "!"
                    }
                ]
            }
        ]
    }
],

    // Grammatica Latina Authentica (Ørberg)
  grammaticaLatina: {
    titulus: "GRAMMATICA LATINA",
    subtitulus: "Singulāris et plūrālis",
    partes: [
      {
        sectio: "[A] Masculīnum (-us / -ī)",
        exemplaSententiarum: [
          { sg: "Nīlus fluvius magnus est.", pl: "Nīlus et Rhēnus fluviī magnī sunt." }
        ],
        regula: "'Fluvius' singulāris est. 'Fluviī' plūrālis est. Singulāris: -us. Plūrālis: -ī.",
        exemplaVocabulorum: "numerus, numerī; fluvius, fluviī; liber, librī; titulus, titulī.",
        sententiae: [
          "I parvus numerus est. I et II parvī numerī sunt."
        ]
      },
      {
        sectio: "[B] Fēminīnum (-a / -ae)",
        exemplaSententiarum: [
          { sg: "Corsica īnsula magna est.", pl: "Corsica et Sardinia īnsulae magnae sunt." }
        ],
        regula: "'Īnsula' singulāris est. 'Īnsulae' plūrālis est. Singulāris: -a. Plūrālis: -ae.",
        exemplaVocabulorum: "littera, litterae; prōvincia, prōvinciae; fēmina, fēminae; puella, puellae.",
        sententiae: [
          "A littera Latīna est. A et B litterae Latīnae sunt.",
          "Gallia est prōvincia Rōmāna. Gallia et Hispānia prōvinciae Rōmānae sunt."
        ]
      },
      {
        sectio: "[C] Neutrum (-um / -a)",
        exemplaSententiarum: [
          { sg: "Brundisium oppidum magnum est.", pl: "Brundisium et Sparta oppida magna sunt." }
        ],
        regula: "'Oppidum' singulāris est. 'Oppida' plūrālis est. Singulāris: -um. Plūrālis: -a.",
        exemplaVocabulorum: "vocābulum, vocābula; exemplum, exempla; capitulum, capitula; pēnsum, pēnsa.",
        sententiae: [
          "Littera est vocābulum Latīnum, nōn Graecum.",
          "Littera et numerus nōn vocābula Graeca, sed Latīna sunt."
        ]
      }
    ]
  },

  pensa: {
    pensumA: {
      titulus: "PĒNSVM A",
      descriptio: "Fōrmae grammaticae: Implē lacūnās terminātiōnibus idōneīs (-us, -ī, -a, -ae, -um, etc.)!",
      quaestiones: [
        {
          id: "pa_1",
          praefix: "Nīlus fluvi",
          lacuna: "us",
          inter: " est. Nīlus et Rhēnus fluvi",
          lacuna2: "ī",
          suffix: " sunt.",
          explicatio: "Masculīnum: singulāris -us, plūrālis -ī."
        },
        {
          id: "pa_2",
          praefix: "Crēta īnsul",
          lacuna: "a",
          inter: " est. Crēta et Rhodus īnsul",
          lacuna2: "ae",
          suffix: " sunt.",
          explicatio: "Fēminīnum: singulāris -a, plūrālis -ae."
        },
        {
          id: "pa_3",
          praefix: "Crēta īnsul",
          lacuna: "a",
          inter: " magn",
          lacuna2: "a",
          suffix: " est.",
          explicatio: "Adiectīvum concordat cum nōmine fēminīnō singulārī (-a -a)."
        },
        {
          id: "pa_4",
          praefix: "Crēta et Rhodus īnsul",
          lacuna: "ae",
          inter: " magn",
          lacuna2: "ae",
          suffix: " sunt.",
          explicatio: "Adiectīvum concordat cum nōmine fēminīnō plūrālī (-ae -ae)."
        },
        {
          id: "pa_5",
          praefix: "Brundisium oppid",
          lacuna: "um",
          inter: " magn",
          lacuna2: "um",
          suffix: " est.",
          explicatio: "Neutrum: singulāris -um -um."
        },
        {
          id: "pa_6",
          praefix: "Brundisium et Sparta oppid",
          lacuna: "a",
          inter: " magn",
          lacuna2: "a",
          suffix: " sunt.",
          explicatio: "Neutrum: plūrālis -a -a."
        },
        {
          id: "pa_7",
          praefix: "Tiberis fluvi",
          lacuna: "us",
          inter: " parv",
          lacuna2: "us",
          suffix: " est.",
          explicatio: "Masculīnum singulāris (-us -us)."
        },
        {
          id: "pa_8",
          praefix: "Tiberis et Padus fluvi",
          lacuna: "ī",
          inter: " parv",
          lacuna2: "ī",
          suffix: " sunt.",
          explicatio: "Masculīnum plūrālis (-ī -ī)."
        },
        {
          id: "pa_9",
          praefix: "In Italiā mult",
          lacuna: "a",
          inter: " oppid",
          lacuna2: "a",
          suffix: " sunt.",
          explicatio: "Neutrum plūrālis: multa oppida."
        },
        {
          id: "pa_10",
          praefix: "In Germāniā mult",
          lacuna: "ī",
          inter: " fluvi",
          lacuna2: "ī",
          suffix: " sunt.",
          explicatio: "Masculīnum plūrālis: multī fluviī."
        }
      ]
    },

    pensumB: {
      titulus: "PĒNSVM B",
      descriptio: "Vocābula nova: Implē lacūnās vocābulīs novīs capitulī!",
      quaestiones: [
        {
          id: "pb_1",
          praefix: "Nīlus ",
          lacuna: "fluvius",
          suffix: " magnus est.",
          explicatio: "Nōmen substantīvum masculīnum: fluvius."
        },
        {
          id: "pb_2",
          praefix: "Tiberis fluvius ",
          lacuna: "parvus",
          suffix: " est.",
          explicatio: "Nōmen adiectīvum masculīnum (↔ magnus): parvus."
        },
        {
          id: "pb_3",
          praefix: "Rhodus et Melita ",
          lacuna: "īnsulae",
          suffix: " sunt.",
          explicatio: "Nōminātīvus plūrālis fēminīnus cum macrōne ī: īnsulae."
        },
        {
          id: "pb_4",
          praefix: "Sparta et Delphī ",
          lacuna: "oppida",
          suffix: " sunt.",
          explicatio: "Nōminātīvus plūrālis neutrum: oppida."
        },
        {
          id: "pb_5",
          praefix: "Rōma in Italiā est; Brundisium ",
          lacuna: "quoque",
          suffix: " in Italiā est.",
          explicatio: "Coniūnctiō (= etiam): quoque."
        },
        {
          id: "pb_6",
          praefix: "Sparta in Italiā nōn est, ",
          lacuna: "sed",
          suffix: " in Graeciā.",
          explicatio: "Coniūnctiō adversātīva (nōn..., sed...): sed."
        },
        {
          id: "pb_7",
          praefix: "Ubi est Gallia? Gallia in ",
          lacuna: "Eurōpā",
          suffix: " est.",
          explicatio: "Ablātīvus locī cum macrōnibus post 'in': Eurōpā."
        },
        {
          id: "pb_8",
          praefix: "A et B ",
          lacuna: "litterae",
          suffix: " sunt.",
          explicatio: "Nōminātīvus plūrālis fēminīnus: litterae."
        },
        {
          id: "pb_9",
          praefix: "'Rōma' ",
          lacuna: "vocābulum",
          suffix: " est.",
          explicatio: "Nōmen neutrum singulāris cum macrōne ā: vocābulum."
        },
        {
          id: "pb_10",
          praefix: "I et II ",
          lacuna: "numerī",
          suffix: " sunt.",
          explicatio: "Nōminātīvus plūrālis masculīnus cum macrōne ī: numerī."
        }
      ]
    },

    pensumC: {
      titulus: "PĒNSVM C",
      descriptio: "Interrogātiōnēs: Scrībe respōnsum Latīnē, deinde aperī exemplum et iūdicā temetipsum!",
      quaestiones: [
        {
          id: "pc_1",
          interrogatio: "Ubi est Rōma?",
          exemplum: "Rōma in Italiā est."
        },
        {
          id: "pc_2",
          interrogatio: "Estne Sparta in Italiā?",
          exemplum: "Sparta in Italiā nōn est, sed in Graeciā est."
        },
        {
          id: "pc_3",
          interrogatio: "Ubi est Nīlus?",
          exemplum: "Nīlus in Āfricā est."
        },
        {
          id: "pc_4",
          interrogatio: "Quid est Nīlus?",
          exemplum: "Nīlus fluvius magnus est."
        },
        {
          id: "pc_5",
          interrogatio: "Num Melita oppidum est?",
          exemplum: "Melita oppidum nōn est, sed īnsula parva est."
        },
        {
          id: "pc_6",
          interrogatio: "Quid est Brundisium?",
          exemplum: "Brundisium oppidum est."
        },
        {
          id: "pc_7",
          interrogatio: "Ubi sunt Rhēnus et Dānuvius?",
          exemplum: "Rhēnus et Dānuvius in Germāniā sunt."
        },
        {
          id: "pc_8",
          interrogatio: "Num Brundisium et Tusculum oppida Graeca sunt?",
          exemplum: "Brundisium et Tusculum oppida Graeca nōn sunt, sed oppida Rōmāna sunt."
        }
      ]
    }
  }
};