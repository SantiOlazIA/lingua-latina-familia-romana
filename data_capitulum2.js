// data_capitulum2.js
// Dāta Capituli Secundī: Textus Authenticus Integer (Ørberg), Analysis Grammatica, Pēnsa, Tabula, Vocābulārium.

export const capitulumSecundum = {
  numerus: 2,
  titulus: "CAPITVLVM SECVNDVM",
  subtitulus: "FAMILIA ROMANA",
  tabulaDeclinationum: {
    titulus: "TABVLA DĒCLĪNĀTIŌNVM (Capitula I–II)",
    descriptio: "Fōrmae grammaticae: Nōminātīvus, Ablātīvus (locī), et novus casus GENETĪVUS (possessiōnis: cuius?). Masculīna in -er (puer, vir).",
    declinationes: [
      {
        nomen: "Dēclīnātiō Prīma (-a)",
        genus: "Fēminīnum",
        paradigma: "fēmina / fīlia / īnsula",
        casus: [
          { casus: "Nōminātīvus", sg: "-a (fēmina, fīlia)", pl: "-ae (fēminae, fīliae)" },
          { casus: "Genetīvus", sg: "-ae (fīlia Aemiliae)", pl: "-ārum (numerus ancillārum)" },
          { casus: "Ablātīvus (in...)", sg: "-ā (in familiā)", pl: "—" }
        ]
      },
      {
        nomen: "Dēclīnātiō Secunda (-us / -er)",
        genus: "Masculīnum",
        paradigma: "servus / puer / vir",
        casus: [
          { casus: "Nōminātīvus", sg: "-us / -er (servus, puer, vir)", pl: "-ī (servī, puerī, virī)" },
          { casus: "Genetīvus", sg: "-ī (fīlius Iūliī)", pl: "-ōrum (numerus servōrum, liberōrum)" },
          { casus: "Ablātīvus (in...)", sg: "-ō (in numerō)", pl: "—" }
        ]
      },
      {
        nomen: "Dēclīnātiō Secunda (-um)",
        genus: "Neutrum",
        paradigma: "oppidum, -ī (n.)",
        casus: [
          { casus: "Nōminātīvus", sg: "-um (oppidum)", pl: "-a (oppida)" },
          { casus: "Genetīvus", sg: "-ī (titulus oppidī)", pl: "-ōrum (numerus oppidōrum)" },
          { casus: "Ablātīvus (in...)", sg: "-ō (in oppidō)", pl: "—" }
        ]
      },
      {
        nomen: "Terminātiō Enclitica: -que",
        genus: "Particula",
        paradigma: "fīliī fīliaeque = fīliī et fīliae",
        casus: [
          { casus: "Ūsus", sg: "-que adiungitur ad fīnem verbī", pl: "Mārcus Quīntusque = Mārcus et Quīntus" }
        ]
      }
    ]
  },

  // Vocābulārium Capitulī II
  vocabularium: [
    { lemma: "Aemilia, -ae", pars: "Nōmen proprium", genus: "Fēminīnum", notatio: "Fēmina Rōmāna, uxor Iūliī, māter Mārcī et Quīntī et Iūliae" },
    { lemma: "ancilla, -ae", pars: "Nōmen substantīvum", genus: "Fēminīnum", notatio: "Serva fēmina (Syra et Dēlia sunt ancillae)" },
    { lemma: "centum", pars: "Nōmen numerāle", genus: "Indeclīnābile", notatio: "Numerus C (100). In familiā Iūliī sunt centum servī" },
    { lemma: "cuius", pars: "Prōnōmen interrogātīvum", genus: "Genetīvus sing.", notatio: "Genetīvus prōnōminis 'quis': Cuius servus est Dāvus? Iūliī." },
    { lemma: "Dāvus, -ī", pars: "Nōmen proprium", genus: "Masculīnum", notatio: "Servus Iūliī bonus" },
    { lemma: "Dēlia, -ae", pars: "Nōmen proprium", genus: "Fēminīnum", notatio: "Ancilla Aemiliae" },
    { lemma: "domina, -ae", pars: "Nōmen substantīvum", genus: "Fēminīnum", notatio: "Quae servōs vel ancillās habet (Aemilia est domina)" },
    { lemma: "dominus, -ī", pars: "Nōmen substantīvum", genus: "Masculīnum", notatio: "Qui servōs habet (Iūlius est dominus Mēdī et Dāvī)" },
    { lemma: "duo, duae, duo", pars: "Nōmen numerāle", genus: "Plūrāle", notatio: "Numerus II (duo fīliī, duae ancillae)" },
    { lemma: "familia, -ae", pars: "Nōmen substantīvum", genus: "Fēminīnum", notatio: "Tōta domus: dominus, domina, līberī, et servī" },
    { lemma: "fēmina, -ae", pars: "Nōmen substantīvum", genus: "Fēminīnum", notatio: "Mulier adulta (Aemilia est fēmina)" },
    { lemma: "fīlia, -ae", pars: "Nōmen substantīvum", genus: "Fēminīnum", notatio: "Puella respectū parentum (Iūlia est fīlia Iūliī)" },
    { lemma: "fīlius, -ī", pars: "Nōmen substantīvum", genus: "Masculīnum", notatio: "Puer respectū parentum (Mārcus est fīlius Iūliī)" },
    { lemma: "Iūlia, -ae", pars: "Nōmen proprium", genus: "Fēminīnum", notatio: "Puella parva, fīlia Iūliī et Aemiliae" },
    { lemma: "Iūlius, -ī", pars: "Nōmen proprium", genus: "Masculīnum", notatio: "Vir Rōmānus, pater familiae" },
    { lemma: "liber, librī", pars: "Nōmen substantīvum", genus: "Masculīnum", notatio: "Volūmen chartārum scriptārum (hic liber: Lingua Latina)" },
    { lemma: "līberī, -ōrum", pars: "Nōmen substantīvum", genus: "Masculīnum plūr.", notatio: "Fīliī et fīliae (Mārcus, Quīntus, Iūlia sunt trēs līberī)" },
    { lemma: "Mārcus, -ī", pars: "Nōmen proprium", genus: "Masculīnum", notatio: "Puer Rōmānus, fīlius Iūliī prīmus" },
    { lemma: "māter, mātris", pars: "Nōmen substantīvum", genus: "Fēminīnum", notatio: "Fēmina quae līberōs peperit (Aemilia est māter)" },
    { lemma: "Mēdus, -ī", pars: "Nōmen proprium", genus: "Masculīnum", notatio: "Servus Iūliī" },
    { lemma: "meus, -a, -um", pars: "Prōnōmen possessīvum", genus: "Masculīnum / Fēm. / Neut.", notatio: "Ad mē pertinēns (servus meus)" },
    { lemma: "multī, -ae, -a", pars: "Nōmen adiectīvum", genus: "Plūrāle", notatio: "Magnus numerus (multī servī, multae ancillae)" },
    { lemma: "novus, -a, -um", pars: "Nōmen adiectīvum", genus: "Masculīnum / Fēm. / Neut.", notatio: "↔ antīquus (liber novus)" },
    { lemma: "pater, patris", pars: "Nōmen substantīvum", genus: "Masculīnum", notatio: "Vir qui līberōs genuit (Iūlius est pater)" },
    { lemma: "paucī, -ae, -a", pars: "Nōmen adiectīvum", genus: "Plūrāle", notatio: "↔ multī (paucī līberī)" },
    { lemma: "puella, -ae", pars: "Nōmen substantīvum", genus: "Fēminīnum", notatio: "Fēmina parva/iuvenis (Iūlia est puella)" },
    { lemma: "puer, puerī", pars: "Nōmen substantīvum", genus: "Masculīnum", notatio: "Vir parvus (Mārcus et Quīntus sunt puerī)" },
    { lemma: "-que", pars: "Coniūnctiō enclitica", genus: "—", notatio: "= et (fīliī fīliaeque = fīliī et fīliae)" },
    { lemma: "Quīntus, -ī", pars: "Nōmen proprium", genus: "Masculīnum", notatio: "Puer Rōmānus, fīlius Iūliī secundus" },
    { lemma: "quis, quae, quid", pars: "Prōnōmen interrogātīvum", genus: "Masc. / Fēm. / Neut.", notatio: "Quis est Mārcus? Puer Rōmānus." },
    { lemma: "quot", pars: "Nōmen numerāle indecl.", genus: "Indeclīnābile", notatio: "Interrogat dē numerō: Quot līberī sunt? Trēs." },
    { lemma: "servus, -ī", pars: "Nōmen substantīvum", genus: "Masculīnum", notatio: "Vir qui dominō servit (Dāvus est servus)" },
    { lemma: "Syra, -ae", pars: "Nōmen proprium", genus: "Fēminīnum", notatio: "Ancilla Aemiliae" },
    { lemma: "titulus, -ī", pars: "Nōmen substantīvum", genus: "Masculīnum", notatio: "Nōmen libri vel capitulī (titulus libri est 'Lingua Latina')" },
    { lemma: "trēs, tria", pars: "Nōmen numerāle", genus: "Plūrāle", notatio: "Numerus III (trēs līberī: duo puerī et ūna puella)" },
    { lemma: "tuus, -a, -um", pars: "Prōnōmen possessīvum", genus: "Masculīnum / Fēm. / Neut.", notatio: "Ad tē pertinēns (liber tuus)" },
    { lemma: "ūnus, -a, -um", pars: "Nōmen numerāle", genus: "Masculīnum / Fēm. / Neut.", notatio: "Numerus I (ūnus fīlius, ūna fīlia)" },
    { lemma: "vir, virī", pars: "Nōmen substantīvum", genus: "Masculīnum", notatio: "Homō masculus adultus (Iūlius est vir)" }
  ],

  // Textus Lēctiōnum

  sectiones: [
    {
        "titulusSectio": "LĒCTIŌ PRĪMA",
        "versus": [
            {
                "numerus": "I",
                "marginalia": "vir / fēmina",
                "tokens": [
                    {
                        "f": "Iūlius",
                        "l": "Iūlius, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Vir Rōmānus, pater familiae"
                    },
                    {
                        "f": "vir",
                        "l": "vir, virī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Homō masculus adultus"
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
                        "f": "Aemilia",
                        "l": "Aemilia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Fēmina Rōmāna, māter"
                    },
                    {
                        "f": "fēmina",
                        "l": "fēmina, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Mulier adulta"
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
                    },
                    {
                        "f": "Mārcus",
                        "l": "Mārcus, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Fīlius prīmus"
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
                        "f": "puer",
                        "l": "puer, puerī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Masculīnum iuvenis (dēclīnātiō II in -er)"
                    },
                    {
                        "f": "Rōmānus",
                        "l": "Rōmānus, -a, -um",
                        "p": "Nōmen adiectīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Ex urbe Rōmā",
                        "punc": "."
                    }
                ]
            },
            {
                "numerus": "",
                "marginalia": "",
                "tokens": [
                    {
                        "f": "Quīntus",
                        "l": "Quīntus, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Fīlius secundus"
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
                        "f": "puer",
                        "l": "puer, puerī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Masculīnum iuvenis (dēclīnātiō II in -er)"
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
                        "f": "Iūlia",
                        "l": "Iūlia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Fīlia Iūliī et Aemiliae"
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
                        "f": "puella",
                        "l": "puella, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Fēmina parva/iuvenis"
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
                    }
                ]
            },
            {
                "numerus": "",
                "marginalia": "puer / puella",
                "tokens": [
                    {
                        "f": "Mārcus",
                        "l": "Mārcus, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Fīlius prīmus"
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
                        "f": "Quīntus",
                        "l": "Quīntus, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Fīlius secundus"
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
                        "f": "virī",
                        "l": "vir, virī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Masculīnum",
                        "d": "Plūrāle: vir -> virī",
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
                        "f": "puerī",
                        "l": "puer, puerī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Masculīnum",
                        "d": "Plūrāle: puer -> puerī"
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
                        "f": "Virī",
                        "l": "vir, virī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Masculīnum",
                        "d": "Plūrāle: vir -> virī"
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
                        "f": "Iūlius",
                        "l": "Iūlius, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Vir Rōmānus, pater familiae"
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
                        "f": "Mēdus",
                        "l": "Mēdus, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Servus Iūliī"
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
                        "f": "Dāvus",
                        "l": "Dāvus, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Servus Iūliī",
                        "punc": "."
                    }
                ]
            },
            {
                "numerus": "",
                "marginalia": "",
                "tokens": [
                    {
                        "f": "Aemilia",
                        "l": "Aemilia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Fēmina Rōmāna, māter"
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
                        "f": "Dēlia",
                        "l": "Dēlia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Ancilla Aemiliae"
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
                        "f": "Syra",
                        "l": "Syra, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Ancilla Aemiliae"
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
                        "f": "fēminae",
                        "l": "fēmina, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Fēminīnum",
                        "d": "Plūrāle: fēmina -> fēminae",
                        "punc": "."
                    },
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
                        "f": "fēmina",
                        "l": "fēmina, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Mulier adulta"
                    },
                    {
                        "f": "Iūlia",
                        "l": "Iūlia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Fīlia Iūliī et Aemiliae",
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
                        "f": "fēmina",
                        "l": "fēmina, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Mulier adulta",
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
                        "f": "parva",
                        "l": "parvus, -a, -um",
                        "p": "Nōmen adiectīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Adiectīvum fēminīnum"
                    },
                    {
                        "f": "puella",
                        "l": "puella, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Fēmina parva/iuvenis"
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
                        "f": "Iūlia",
                        "l": "Iūlia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Fīlia Iūliī et Aemiliae",
                        "punc": "."
                    }
                ]
            },
            {
                "numerus": "V",
                "marginalia": "familia",
                "tokens": [
                    {
                        "f": "Iūlius",
                        "l": "Iūlius, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Vir Rōmānus, pater familiae",
                        "punc": ","
                    },
                    {
                        "f": "Aemilia",
                        "l": "Aemilia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Fēmina Rōmāna, māter",
                        "punc": ","
                    },
                    {
                        "f": "Mārcus",
                        "l": "Mārcus, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Fīlius prīmus",
                        "punc": ","
                    },
                    {
                        "f": "Quīntus",
                        "l": "Quīntus, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Fīlius secundus",
                        "punc": ","
                    },
                    {
                        "f": "Iūlia",
                        "l": "Iūlia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Fīlia Iūliī et Aemiliae",
                        "punc": ","
                    },
                    {
                        "f": "Syra",
                        "l": "Syra, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Ancilla Aemiliae",
                        "punc": ","
                    },
                    {
                        "f": "Dāvus",
                        "l": "Dāvus, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Servus Iūliī",
                        "punc": ","
                    },
                    {
                        "f": "Dēlia",
                        "l": "Dēlia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Ancilla Aemiliae"
                    },
                    {
                        "f": "Mēdusque",
                        "l": "Mēdus, -ī + -que",
                        "p": "Nōmen proprium + Particula enclitica",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Mēdus + -que (= et Mēdus)"
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
                        "f": "familia",
                        "l": "familia, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Tōta domus: dominus, līberī, servī"
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
                    }
                ]
            },
            {
                "numerus": "",
                "marginalia": "pater / māter",
                "tokens": [
                    {
                        "f": "Iūlius",
                        "l": "Iūlius, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Vir Rōmānus, pater familiae"
                    },
                    {
                        "f": "pater",
                        "l": "pater, patris",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Vir qui līberōs genuit"
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
                        "f": "Aemilia",
                        "l": "Aemilia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Fēmina Rōmāna, māter"
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
                        "f": "māter",
                        "l": "māter, mātris",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Fēmina quae līberōs peperit",
                        "punc": "."
                    },
                    {
                        "f": "Iūlius",
                        "l": "Iūlius, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Vir Rōmānus, pater familiae"
                    },
                    {
                        "f": "pater",
                        "l": "pater, patris",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Vir qui līberōs genuit"
                    },
                    {
                        "f": "Mārcī",
                        "l": "Mārcus, -ī",
                        "p": "Nōmen proprium",
                        "c": "Genetīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Genetīvus possessīvus in -ī"
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
                        "f": "Quīntī",
                        "l": "Quīntus, -ī",
                        "p": "Nōmen proprium",
                        "c": "Genetīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Genetīvus possessīvus in -ī"
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
                        "f": "Iūlius",
                        "l": "Iūlius, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Vir Rōmānus, pater familiae"
                    },
                    {
                        "f": "pater",
                        "l": "pater, patris",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Vir qui līberōs genuit"
                    },
                    {
                        "f": "Iūliae",
                        "l": "Iūlia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Genetīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Genetīvus possessīvus in -ae"
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
                        "f": "Aemilia",
                        "l": "Aemilia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Fēmina Rōmāna, māter"
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
                        "f": "māter",
                        "l": "māter, mātris",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Fēmina quae līberōs peperit"
                    },
                    {
                        "f": "Mārcī",
                        "l": "Mārcus, -ī",
                        "p": "Nōmen proprium",
                        "c": "Genetīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Genetīvus possessīvus in -ī"
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
                        "f": "Quīntī",
                        "l": "Quīntus, -ī",
                        "p": "Nōmen proprium",
                        "c": "Genetīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Genetīvus possessīvus in -ī"
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
                        "f": "Iūliae",
                        "l": "Iūlia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Genetīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Genetīvus possessīvus in -ae",
                        "punc": "."
                    },
                    {
                        "f": "Mārcus",
                        "l": "Mārcus, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Fīlius prīmus"
                    },
                    {
                        "f": "fīlius",
                        "l": "fīlius, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Puer respectū parentum"
                    },
                    {
                        "f": "Iūliī",
                        "l": "Iūlius, -ī",
                        "p": "Nōmen proprium",
                        "c": "Genetīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Genetīvus: fīlius Iūliī"
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
                        "f": "Mārcus",
                        "l": "Mārcus, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Fīlius prīmus"
                    },
                    {
                        "f": "fīlius",
                        "l": "fīlius, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Puer respectū parentum"
                    },
                    {
                        "f": "Aemiliae",
                        "l": "Aemilia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Genetīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Genetīvus possessīvus in -ae"
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
                "marginalia": "fīlius / fīlia",
                "tokens": [
                    {
                        "f": "Quīntus",
                        "l": "Quīntus, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Fīlius secundus"
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
                        "f": "fīlius",
                        "l": "fīlius, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Puer respectū parentum"
                    },
                    {
                        "f": "Iūliī",
                        "l": "Iūlius, -ī",
                        "p": "Nōmen proprium",
                        "c": "Genetīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Genetīvus: fīlius Iūliī"
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
                        "f": "Aemiliae",
                        "l": "Aemilia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Genetīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Genetīvus possessīvus in -ae"
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
                        "f": "Iūlia",
                        "l": "Iūlia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Fīlia Iūliī et Aemiliae"
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
                        "f": "fīlia",
                        "l": "fīlia, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Puella respectū parentum"
                    },
                    {
                        "f": "Iūliī",
                        "l": "Iūlius, -ī",
                        "p": "Nōmen proprium",
                        "c": "Genetīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Genetīvus: fīlius Iūliī"
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
                        "f": "Aemiliae",
                        "l": "Aemilia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Genetīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Genetīvus possessīvus in -ae",
                        "punc": "."
                    }
                ]
            },
            {
                "numerus": "",
                "marginalia": "quis? quae?",
                "tokens": [
                    {
                        "f": "Quis",
                        "l": "quis, quid",
                        "p": "Prōnōmen interrogātīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Quaerit dē persōnā masculā"
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
                        "f": "Mārcus",
                        "l": "Mārcus, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Fīlius prīmus",
                        "punc": "?"
                    },
                    {
                        "f": "Mārcus",
                        "l": "Mārcus, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Fīlius prīmus"
                    },
                    {
                        "f": "puer",
                        "l": "puer, puerī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Masculīnum iuvenis (dēclīnātiō II in -er)"
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
                        "f": "Quis",
                        "l": "quis, quid",
                        "p": "Prōnōmen interrogātīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Quaerit dē persōnā masculā"
                    },
                    {
                        "f": "pater",
                        "l": "pater, patris",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Vir qui līberōs genuit"
                    },
                    {
                        "f": "Mārcī",
                        "l": "Mārcus, -ī",
                        "p": "Nōmen proprium",
                        "c": "Genetīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Genetīvus possessīvus in -ī"
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
                        "f": "Iūlius",
                        "l": "Iūlius, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Vir Rōmānus, pater familiae"
                    },
                    {
                        "f": "pater",
                        "l": "pater, patris",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Vir qui līberōs genuit"
                    },
                    {
                        "f": "Mārcī",
                        "l": "Mārcus, -ī",
                        "p": "Nōmen proprium",
                        "c": "Genetīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Genetīvus possessīvus in -ī"
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
                "marginalia": "",
                "tokens": [
                    {
                        "f": "Quae",
                        "l": "quis, quae, quid",
                        "p": "Prōnōmen interrogātīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris / Plūrālis",
                        "g": "Fēminīnum",
                        "d": "Quaerit dē fēminā"
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
                        "f": "māter",
                        "l": "māter, mātris",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Fēmina quae līberōs peperit"
                    },
                    {
                        "f": "Mārcī",
                        "l": "Mārcus, -ī",
                        "p": "Nōmen proprium",
                        "c": "Genetīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Genetīvus possessīvus in -ī",
                        "punc": "?"
                    },
                    {
                        "f": "Māter",
                        "l": "māter, mātris",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Fēmina quae līberōs peperit"
                    },
                    {
                        "f": "Mārcī",
                        "l": "Mārcus, -ī",
                        "p": "Nōmen proprium",
                        "c": "Genetīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Genetīvus possessīvus in -ī"
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
                        "f": "Aemilia",
                        "l": "Aemilia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Fēmina Rōmāna, māter",
                        "punc": "."
                    },
                    {
                        "f": "Quae",
                        "l": "quis, quae, quid",
                        "p": "Prōnōmen interrogātīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris / Plūrālis",
                        "g": "Fēminīnum",
                        "d": "Quaerit dē fēminā"
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
                        "f": "Iūlia",
                        "l": "Iūlia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Fīlia Iūliī et Aemiliae",
                        "punc": "?"
                    },
                    {
                        "f": "Iūlia",
                        "l": "Iūlia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Fīlia Iūliī et Aemiliae"
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
                        "f": "puella",
                        "l": "puella, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Fēmina parva/iuvenis"
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
                    }
                ]
            },
            {
                "numerus": "",
                "marginalia": "",
                "tokens": [
                    {
                        "f": "Quae",
                        "l": "quis, quae, quid",
                        "p": "Prōnōmen interrogātīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris / Plūrālis",
                        "g": "Fēminīnum",
                        "d": "Quaerit dē fēminā"
                    },
                    {
                        "f": "māter",
                        "l": "māter, mātris",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Fēmina quae līberōs peperit"
                    },
                    {
                        "f": "Iūliae",
                        "l": "Iūlia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Genetīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Genetīvus possessīvus in -ae"
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
                        "f": "Aemilia",
                        "l": "Aemilia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Fēmina Rōmāna, māter"
                    },
                    {
                        "f": "māter",
                        "l": "māter, mātris",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Fēmina quae līberōs peperit"
                    },
                    {
                        "f": "Iūliae",
                        "l": "Iūlia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Genetīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Genetīvus possessīvus in -ae"
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
                        "f": "Pater",
                        "l": "pater, patris",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Vir qui līberōs genuit"
                    },
                    {
                        "f": "Iūliae",
                        "l": "Iūlia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Genetīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Genetīvus possessīvus in -ae"
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
                        "f": "Iūlius",
                        "l": "Iūlius, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Vir Rōmānus, pater familiae",
                        "punc": "."
                    },
                    {
                        "f": "Iūlia",
                        "l": "Iūlia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Fīlia Iūliī et Aemiliae"
                    },
                    {
                        "f": "fīlia",
                        "l": "fīlia, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Puella respectū parentum"
                    },
                    {
                        "f": "Iūliī",
                        "l": "Iūlius, -ī",
                        "p": "Nōmen proprium",
                        "c": "Genetīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Genetīvus: fīlius Iūliī"
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
                "marginalia": "quī?",
                "tokens": [
                    {
                        "f": "Quī",
                        "l": "quī, quae, quod",
                        "p": "Prōnōmen interrogātīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Masculīnum",
                        "d": "Quī sunt?"
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
                        "f": "fīliī",
                        "l": "fīlius, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Masculīnum",
                        "d": "Plūrāle: fīlius -> fīliī"
                    },
                    {
                        "f": "Iūliī",
                        "l": "Iūlius, -ī",
                        "p": "Nōmen proprium",
                        "c": "Genetīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Genetīvus: fīlius Iūliī",
                        "punc": "?"
                    },
                    {
                        "f": "Fīliī",
                        "l": "fīlius, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Masculīnum",
                        "d": "Plūrāle: fīlius -> fīliī"
                    },
                    {
                        "f": "Iūliī",
                        "l": "Iūlius, -ī",
                        "p": "Nōmen proprium",
                        "c": "Genetīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Genetīvus: fīlius Iūliī"
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
                        "f": "Mārcus",
                        "l": "Mārcus, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Fīlius prīmus"
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
                        "f": "Quīntus",
                        "l": "Quīntus, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Fīlius secundus",
                        "punc": "."
                    },
                    {
                        "f": "Mārcus",
                        "l": "Mārcus, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Fīlius prīmus",
                        "punc": ","
                    },
                    {
                        "f": "Quīntus",
                        "l": "Quīntus, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Fīlius secundus"
                    },
                    {
                        "f": "Iūliaque",
                        "l": "Iūlia, -ae + -que",
                        "p": "Nōmen proprium + Particula enclitica",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Iūlia + -que (= et Iūlia)"
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
                        "f": "līberī",
                        "l": "līberī, -ōrum",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Masculīnum",
                        "d": "Fīliī et fīliae",
                        "punc": "."
                    }
                ]
            },
            {
                "numerus": "",
                "marginalia": "līberī = fīliī fīliaeque",
                "tokens": [
                    {
                        "f": "Līberī",
                        "l": "līberī, -ōrum",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Masculīnum",
                        "d": "Fīliī et fīliae"
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
                        "f": "fīliī",
                        "l": "fīlius, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Masculīnum",
                        "d": "Plūrāle: fīlius -> fīliī"
                    },
                    {
                        "f": "fīliaeque",
                        "l": "fīlia, -ae + -que",
                        "p": "Nōmen + Particula",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Fēminīnum",
                        "d": "fīliae + -que (= et fīliae)",
                        "punc": "."
                    },
                    {
                        "f": "Mārcus",
                        "l": "Mārcus, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Fīlius prīmus"
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
                        "f": "Quīntus",
                        "l": "Quīntus, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Fīlius secundus"
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
                        "f": "Iūlia",
                        "l": "Iūlia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Fīlia Iūliī et Aemiliae"
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
                        "f": "līberī",
                        "l": "līberī, -ōrum",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Masculīnum",
                        "d": "Fīliī et fīliae"
                    },
                    {
                        "f": "Iūliī",
                        "l": "Iūlius, -ī",
                        "p": "Nōmen proprium",
                        "c": "Genetīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Genetīvus: fīlius Iūliī"
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
                        "f": "Aemiliae",
                        "l": "Aemilia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Genetīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Genetīvus possessīvus in -ae",
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
                        "f": "familiā",
                        "l": "familia, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Ablātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Post praepositiōnem 'in'"
                    },
                    {
                        "f": "Iūliī",
                        "l": "Iūlius, -ī",
                        "p": "Nōmen proprium",
                        "c": "Genetīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Genetīvus: fīlius Iūliī"
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
                        "f": "līberī",
                        "l": "līberī, -ōrum",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Masculīnum",
                        "d": "Fīliī et fīliae",
                        "punc": ":"
                    },
                    {
                        "f": "duo",
                        "l": "duo, duae, duo",
                        "p": "Nōmen numerāle",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Masculīnum / Neutrum",
                        "d": "Numerus II"
                    },
                    {
                        "f": "fīliī",
                        "l": "fīlius, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Masculīnum",
                        "d": "Plūrāle: fīlius -> fīliī"
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
                        "f": "fīlia",
                        "l": "fīlia, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Puella respectū parentum",
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
                "numerus": "XV",
                "marginalia": "servus",
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
                        "f": "Mēdus",
                        "l": "Mēdus, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Servus Iūliī"
                    },
                    {
                        "f": "fīlius",
                        "l": "fīlius, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Puer respectū parentum"
                    },
                    {
                        "f": "Iūliī",
                        "l": "Iūlius, -ī",
                        "p": "Nōmen proprium",
                        "c": "Genetīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Genetīvus: fīlius Iūliī",
                        "punc": "?"
                    },
                    {
                        "f": "Mēdus",
                        "l": "Mēdus, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Servus Iūliī"
                    },
                    {
                        "f": "fīlius",
                        "l": "fīlius, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Puer respectū parentum"
                    },
                    {
                        "f": "Iūliī",
                        "l": "Iūlius, -ī",
                        "p": "Nōmen proprium",
                        "c": "Genetīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Genetīvus: fīlius Iūliī"
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
                        "f": "Mēdus",
                        "l": "Mēdus, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Servus Iūliī"
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
                        "f": "servus",
                        "l": "servus, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Vir qui dominō servit"
                    },
                    {
                        "f": "Iūliī",
                        "l": "Iūlius, -ī",
                        "p": "Nōmen proprium",
                        "c": "Genetīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Genetīvus: fīlius Iūliī",
                        "punc": "."
                    }
                ]
            },
            {
                "numerus": "",
                "marginalia": "dominus",
                "tokens": [
                    {
                        "f": "Iūlius",
                        "l": "Iūlius, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Vir Rōmānus, pater familiae"
                    },
                    {
                        "f": "dominus",
                        "l": "dominus, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Vir qui dominātur / servōs habet"
                    },
                    {
                        "f": "Mēdī",
                        "l": "Mēdus, -ī",
                        "p": "Nōmen proprium",
                        "c": "Genetīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Genetīvus in -ī"
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
                        "f": "Iūlius",
                        "l": "Iūlius, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Vir Rōmānus, pater familiae"
                    },
                    {
                        "f": "dominus",
                        "l": "dominus, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Vir qui dominātur / servōs habet"
                    },
                    {
                        "f": "servī",
                        "l": "servus, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Masculīnum",
                        "d": "Plūrāle: servus -> servī"
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
                        "f": "Dāvus",
                        "l": "Dāvus, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Servus Iūliī"
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
                        "f": "servus",
                        "l": "servus, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Vir qui dominō servit"
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
                        "f": "Mēdus",
                        "l": "Mēdus, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Servus Iūliī"
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
                        "f": "Dāvus",
                        "l": "Dāvus, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Servus Iūliī"
                    },
                    {
                        "f": "duo",
                        "l": "duo, duae, duo",
                        "p": "Nōmen numerāle",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Masculīnum / Neutrum",
                        "d": "Numerus II"
                    },
                    {
                        "f": "servī",
                        "l": "servus, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Masculīnum",
                        "d": "Plūrāle: servus -> servī"
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
                        "f": "Iūlius",
                        "l": "Iūlius, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Vir Rōmānus, pater familiae"
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
                        "f": "dominus",
                        "l": "dominus, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Vir qui dominātur / servōs habet"
                    },
                    {
                        "f": "Mēdī",
                        "l": "Mēdus, -ī",
                        "p": "Nōmen proprium",
                        "c": "Genetīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Genetīvus in -ī"
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
                        "f": "Dāvī",
                        "l": "Dāvus, -ī",
                        "p": "Nōmen proprium",
                        "c": "Genetīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Genetīvus in -ī",
                        "punc": "."
                    },
                    {
                        "f": "Iūlius",
                        "l": "Iūlius, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Vir Rōmānus, pater familiae"
                    },
                    {
                        "f": "dominus",
                        "l": "dominus, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Vir qui dominātur / servōs habet"
                    },
                    {
                        "f": "servōrum",
                        "l": "servus, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Genetīvus",
                        "n": "Plūrālis",
                        "g": "Masculīnum",
                        "d": "Genetīvus plūrālis in -ōrum"
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
                        "f": "et",
                        "l": "et",
                        "p": "Coniūnctiō",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Coniunctio copulātīva"
                    },
                    {
                        "f": "pater",
                        "l": "pater, patris",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Vir qui līberōs genuit"
                    },
                    {
                        "f": "līberōrum",
                        "l": "līberī, -ōrum",
                        "p": "Nōmen substantīvum",
                        "c": "Genetīvus",
                        "n": "Plūrālis",
                        "g": "Masculīnum",
                        "d": "Genetīvus plūrālis in -ōrum",
                        "punc": "."
                    }
                ]
            },
            {
                "numerus": "",
                "marginalia": "ancilla / domina",
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
                        "f": "Dēlia",
                        "l": "Dēlia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Ancilla Aemiliae"
                    },
                    {
                        "f": "fīlia",
                        "l": "fīlia, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Puella respectū parentum"
                    },
                    {
                        "f": "Aemiliae",
                        "l": "Aemilia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Genetīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Genetīvus possessīvus in -ae",
                        "punc": "?"
                    },
                    {
                        "f": "Dēlia",
                        "l": "Dēlia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Ancilla Aemiliae"
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
                        "f": "fīlia",
                        "l": "fīlia, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Puella respectū parentum"
                    },
                    {
                        "f": "Aemiliae",
                        "l": "Aemilia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Genetīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Genetīvus possessīvus in -ae",
                        "punc": ","
                    },
                    {
                        "f": "Dēlia",
                        "l": "Dēlia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Ancilla Aemiliae"
                    },
                    {
                        "f": "ancilla",
                        "l": "ancilla, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Serva fēmina"
                    },
                    {
                        "f": "Aemiliae",
                        "l": "Aemilia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Genetīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Genetīvus possessīvus in -ae"
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
                        "f": "Aemilia",
                        "l": "Aemilia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Fēmina Rōmāna, māter"
                    },
                    {
                        "f": "domina",
                        "l": "domina, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Quae ancillās habet"
                    },
                    {
                        "f": "Dēliae",
                        "l": "Dēlia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Genetīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Genetīvus in -ae"
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
                        "f": "Aemilia",
                        "l": "Aemilia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Fēmina Rōmāna, māter"
                    },
                    {
                        "f": "domina",
                        "l": "domina, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Quae ancillās habet"
                    },
                    {
                        "f": "ancillae",
                        "l": "ancilla, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Fēminīnum",
                        "d": "Plūrāle: ancilla -> ancillae"
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
                        "f": "Syra",
                        "l": "Syra, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Ancilla Aemiliae"
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
                        "f": "ancilla",
                        "l": "ancilla, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Serva fēmina"
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
                "numerus": "XX",
                "marginalia": "",
                "tokens": [
                    {
                        "f": "Dēlia",
                        "l": "Dēlia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Ancilla Aemiliae"
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
                        "f": "Syra",
                        "l": "Syra, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Ancilla Aemiliae"
                    },
                    {
                        "f": "duae",
                        "l": "duo, duae, duo",
                        "p": "Nōmen numerāle",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Fēminīnum",
                        "d": "Numerus II fēminīnus"
                    },
                    {
                        "f": "ancillae",
                        "l": "ancilla, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Fēminīnum",
                        "d": "Plūrāle: ancilla -> ancillae"
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
                        "f": "Aemilia",
                        "l": "Aemilia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Fēmina Rōmāna, māter"
                    },
                    {
                        "f": "domina",
                        "l": "domina, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Quae ancillās habet"
                    },
                    {
                        "f": "ancillārum",
                        "l": "ancilla, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Genetīvus",
                        "n": "Plūrālis",
                        "g": "Fēminīnum",
                        "d": "Genetīvus plūrālis in -ārum"
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
                "marginalia": "cuius?",
                "tokens": [
                    {
                        "f": "Cuius",
                        "l": "quis",
                        "p": "Prōnōmen interrogātīvum",
                        "c": "Genetīvus",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Genetīvus: cuius servus? Iūliī."
                    },
                    {
                        "f": "servus",
                        "l": "servus, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Vir qui dominō servit"
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
                        "f": "Dāvus",
                        "l": "Dāvus, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Servus Iūliī",
                        "punc": "?"
                    },
                    {
                        "f": "Dāvus",
                        "l": "Dāvus, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Servus Iūliī"
                    },
                    {
                        "f": "servus",
                        "l": "servus, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Vir qui dominō servit"
                    },
                    {
                        "f": "Iūliī",
                        "l": "Iūlius, -ī",
                        "p": "Nōmen proprium",
                        "c": "Genetīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Genetīvus: fīlius Iūliī"
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
                        "f": "Cuius",
                        "l": "quis",
                        "p": "Prōnōmen interrogātīvum",
                        "c": "Genetīvus",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Genetīvus: cuius servus? Iūliī."
                    },
                    {
                        "f": "ancilla",
                        "l": "ancilla, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Serva fēmina"
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
                        "f": "Syra",
                        "l": "Syra, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Ancilla Aemiliae",
                        "punc": "?"
                    },
                    {
                        "f": "Syra",
                        "l": "Syra, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Ancilla Aemiliae"
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
                        "f": "ancilla",
                        "l": "ancilla, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Serva fēmina"
                    },
                    {
                        "f": "Aemiliae",
                        "l": "Aemilia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Genetīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Genetīvus possessīvus in -ae",
                        "punc": "."
                    }
                ]
            },
            {
                "numerus": "",
                "marginalia": "quot? centum",
                "tokens": [
                    {
                        "f": "Quot",
                        "l": "quot",
                        "p": "Nōmen numerāle indecl.",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Interrogat dē numerō"
                    },
                    {
                        "f": "līberī",
                        "l": "līberī, -ōrum",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Masculīnum",
                        "d": "Fīliī et fīliae"
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
                        "f": "familiā",
                        "l": "familia, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Ablātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Post praepositiōnem 'in'",
                        "punc": "?"
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
                        "f": "familiā",
                        "l": "familia, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Ablātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Post praepositiōnem 'in'"
                    },
                    {
                        "f": "Iūliī",
                        "l": "Iūlius, -ī",
                        "p": "Nōmen proprium",
                        "c": "Genetīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Genetīvus: fīlius Iūliī"
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
                        "f": "līberī",
                        "l": "līberī, -ōrum",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Masculīnum",
                        "d": "Fīliī et fīliae",
                        "punc": "."
                    },
                    {
                        "f": "Quot",
                        "l": "quot",
                        "p": "Nōmen numerāle indecl.",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Interrogat dē numerō"
                    },
                    {
                        "f": "fīliī",
                        "l": "fīlius, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Masculīnum",
                        "d": "Plūrāle: fīlius -> fīliī"
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
                        "f": "quot",
                        "l": "quot",
                        "p": "Nōmen numerāle indecl.",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Interrogat dē numerō"
                    },
                    {
                        "f": "fīliae",
                        "l": "fīlia, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Fēminīnum",
                        "d": "Plūrāle: fīlia -> fīliae",
                        "punc": "?"
                    },
                    {
                        "f": "Duo",
                        "l": "duo, duae, duo",
                        "p": "Nōmen numerāle",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Masculīnum / Neutrum",
                        "d": "Numerus II"
                    },
                    {
                        "f": "fīliī",
                        "l": "fīlius, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Masculīnum",
                        "d": "Plūrāle: fīlius -> fīliī"
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
                        "f": "fīlia",
                        "l": "fīlia, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Puella respectū parentum",
                        "punc": "."
                    }
                ]
            },
            {
                "numerus": "",
                "marginalia": "",
                "tokens": [
                    {
                        "f": "Quot",
                        "l": "quot",
                        "p": "Nōmen numerāle indecl.",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Interrogat dē numerō"
                    },
                    {
                        "f": "servī",
                        "l": "servus, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Masculīnum",
                        "d": "Plūrāle: servus -> servī"
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
                        "f": "familiā",
                        "l": "familia, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Ablātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Post praepositiōnem 'in'",
                        "punc": "?"
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
                        "f": "familiā",
                        "l": "familia, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Ablātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Post praepositiōnem 'in'"
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
                        "f": "centum",
                        "l": "centum",
                        "p": "Nōmen numerāle indecl.",
                        "c": "—",
                        "n": "Plūrālis",
                        "g": "—",
                        "d": "Numerus C (100)"
                    },
                    {
                        "f": "servī",
                        "l": "servus, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Masculīnum",
                        "d": "Plūrāle: servus -> servī",
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
                        "f": "familiā",
                        "l": "familia, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Ablātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Post praepositiōnem 'in'"
                    },
                    {
                        "f": "Iūliī",
                        "l": "Iūlius, -ī",
                        "p": "Nōmen proprium",
                        "c": "Genetīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Genetīvus: fīlius Iūliī"
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
                        "f": "multī",
                        "l": "multī, -ae, -a",
                        "p": "Nōmen adiectīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Masculīnum",
                        "d": "↔ paucī"
                    },
                    {
                        "f": "servī",
                        "l": "servus, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Masculīnum",
                        "d": "Plūrāle: servus -> servī",
                        "punc": ","
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
                        "f": "līberī",
                        "l": "līberī, -ōrum",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Masculīnum",
                        "d": "Fīliī et fīliae",
                        "punc": "."
                    }
                ]
            },
            {
                "numerus": "",
                "marginalia": "",
                "tokens": [
                    {
                        "f": "Iūlius",
                        "l": "Iūlius, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Vir Rōmānus, pater familiae"
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
                        "f": "dominus",
                        "l": "dominus, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Vir qui dominātur / servōs habet"
                    },
                    {
                        "f": "multōrum",
                        "l": "multī, -ae, -a",
                        "p": "Nōmen adiectīvum",
                        "c": "Genetīvus",
                        "n": "Plūrālis",
                        "g": "Masculīnum",
                        "d": "Genetīvus plūrālis in -ōrum"
                    },
                    {
                        "f": "servōrum",
                        "l": "servus, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Genetīvus",
                        "n": "Plūrālis",
                        "g": "Masculīnum",
                        "d": "Genetīvus plūrālis in -ōrum",
                        "punc": "."
                    },
                    {
                        "f": "Duo",
                        "l": "duo, duae, duo",
                        "p": "Nōmen numerāle",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Masculīnum / Neutrum",
                        "d": "Numerus II"
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
                        "f": "Centum",
                        "l": "centum",
                        "p": "Nōmen numerāle indecl.",
                        "c": "—",
                        "n": "Plūrālis",
                        "g": "—",
                        "d": "Numerus C (100)"
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
                    }
                ]
            },
            {
                "numerus": "XXV",
                "marginalia": "",
                "tokens": [
                    {
                        "f": "Numerus",
                        "l": "numerus, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Quantitās (I, II, III...)"
                    },
                    {
                        "f": "servōrum",
                        "l": "servus, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Genetīvus",
                        "n": "Plūrālis",
                        "g": "Masculīnum",
                        "d": "Genetīvus plūrālis in -ōrum"
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
                        "f": "centum",
                        "l": "centum",
                        "p": "Nōmen numerāle indecl.",
                        "c": "—",
                        "n": "Plūrālis",
                        "g": "—",
                        "d": "Numerus C (100)",
                        "punc": "."
                    },
                    {
                        "f": "Numerus",
                        "l": "numerus, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Quantitās (I, II, III...)"
                    },
                    {
                        "f": "līberōrum",
                        "l": "līberī, -ōrum",
                        "p": "Nōmen substantīvum",
                        "c": "Genetīvus",
                        "n": "Plūrālis",
                        "g": "Masculīnum",
                        "d": "Genetīvus plūrālis in -ōrum"
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
                        "f": "trēs",
                        "l": "trēs, tria",
                        "p": "Nōmen numerāle",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Masculīnum / Fēminīnum",
                        "d": "Numerus III",
                        "punc": "."
                    },
                    {
                        "f": "Centum",
                        "l": "centum",
                        "p": "Nōmen numerāle indecl.",
                        "c": "—",
                        "n": "Plūrālis",
                        "g": "—",
                        "d": "Numerus C (100)"
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
                        "f": "numerus",
                        "l": "numerus, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Quantitās (I, II, III...)",
                        "punc": "."
                    },
                    {
                        "f": "Trēs",
                        "l": "trēs, tria",
                        "p": "Nōmen numerāle",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Masculīnum / Fēminīnum",
                        "d": "Numerus III"
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
                    }
                ]
            },
            {
                "numerus": "",
                "marginalia": "",
                "tokens": [
                    {
                        "f": "Numerus",
                        "l": "numerus, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Quantitās (I, II, III...)"
                    },
                    {
                        "f": "servōrum",
                        "l": "servus, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Genetīvus",
                        "n": "Plūrālis",
                        "g": "Masculīnum",
                        "d": "Genetīvus plūrālis in -ōrum"
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
                        "d": "↔ parvus",
                        "punc": "."
                    },
                    {
                        "f": "Numerus",
                        "l": "numerus, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Quantitās (I, II, III...)"
                    },
                    {
                        "f": "līberōrum",
                        "l": "līberī, -ōrum",
                        "p": "Nōmen substantīvum",
                        "c": "Genetīvus",
                        "n": "Plūrālis",
                        "g": "Masculīnum",
                        "d": "Genetīvus plūrālis in -ōrum"
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
                        "f": "familiā",
                        "l": "familia, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Ablātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Post praepositiōnem 'in'"
                    },
                    {
                        "f": "Iūliī",
                        "l": "Iūlius, -ī",
                        "p": "Nōmen proprium",
                        "c": "Genetīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Genetīvus: fīlius Iūliī"
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
                        "f": "servōrum",
                        "l": "servus, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Genetīvus",
                        "n": "Plūrālis",
                        "g": "Masculīnum",
                        "d": "Genetīvus plūrālis in -ōrum",
                        "punc": ","
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
                        "f": "numerus",
                        "l": "numerus, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Quantitās (I, II, III...)"
                    },
                    {
                        "f": "līberōrum",
                        "l": "līberī, -ōrum",
                        "p": "Nōmen substantīvum",
                        "c": "Genetīvus",
                        "n": "Plūrālis",
                        "g": "Masculīnum",
                        "d": "Genetīvus plūrālis in -ōrum"
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
                        "f": "Mēdus",
                        "l": "Mēdus, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Servus Iūliī"
                    },
                    {
                        "f": "servus",
                        "l": "servus, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Vir qui dominō servit"
                    },
                    {
                        "f": "Graecus",
                        "l": "Graecus, -a, -um",
                        "p": "Nōmen adiectīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Ex Graeciā"
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
                        "f": "Dēlia",
                        "l": "Dēlia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Ancilla Aemiliae"
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
                        "f": "ancilla",
                        "l": "ancilla, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Serva fēmina"
                    },
                    {
                        "f": "Graeca",
                        "l": "Graecus, -a, -um",
                        "p": "Nōmen adiectīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Fēminīnum",
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
                        "f": "familiā",
                        "l": "familia, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Ablātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Post praepositiōnem 'in'"
                    },
                    {
                        "f": "Iūliī",
                        "l": "Iūlius, -ī",
                        "p": "Nōmen proprium",
                        "c": "Genetīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Genetīvus: fīlius Iūliī"
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
                        "f": "multī",
                        "l": "multī, -ae, -a",
                        "p": "Nōmen adiectīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Masculīnum",
                        "d": "↔ paucī"
                    },
                    {
                        "f": "servī",
                        "l": "servus, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Masculīnum",
                        "d": "Plūrāle: servus -> servī"
                    },
                    {
                        "f": "Graecī",
                        "l": "Graecus, -a, -um",
                        "p": "Nōmen adiectīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Masculīnum",
                        "d": "Plūrāle"
                    },
                    {
                        "f": "multaeque",
                        "l": "multī, -ae, -a + -que",
                        "p": "Nōmen + Particula",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Fēminīnum",
                        "d": "= et multae"
                    },
                    {
                        "f": "ancillae",
                        "l": "ancilla, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Fēminīnum",
                        "d": "Plūrāle: ancilla -> ancillae"
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
                        "f": "Estne",
                        "l": "Estne",
                        "p": "Nōmen / Verbum",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Estne"
                    },
                    {
                        "f": "Aemilia",
                        "l": "Aemilia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Fēmina Rōmāna, māter"
                    },
                    {
                        "f": "fēmina",
                        "l": "fēmina, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Mulier adulta"
                    },
                    {
                        "f": "Graeca",
                        "l": "Graecus, -a, -um",
                        "p": "Nōmen adiectīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Fēminīnum",
                        "punc": "?"
                    },
                    {
                        "f": "Aemilia",
                        "l": "Aemilia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Fēmina Rōmāna, māter"
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
                        "f": "fēmina",
                        "l": "fēmina, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Mulier adulta"
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
                        "f": "Iūlius",
                        "l": "Iūlius, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Vir Rōmānus, pater familiae"
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
                        "f": "vir",
                        "l": "vir, virī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Homō masculus adultus"
                    },
                    {
                        "f": "Graecus",
                        "l": "Graecus, -a, -um",
                        "p": "Nōmen adiectīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Ex Graeciā",
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
                    }
                ]
            },
            {
                "numerus": "",
                "marginalia": "",
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
                    },
                    {
                        "f": "Sparta",
                        "l": "Sparta, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Oppidum Graecum",
                        "punc": ","
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
                        "f": "Tusculumque",
                        "l": "Tusculum, -ī + -que",
                        "p": "Nōmen proprium + Particula enclitica",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Neutrum",
                        "d": "Tusculum + -que (= et Tusculum)"
                    },
                    {
                        "f": "tria",
                        "l": "trēs, tria",
                        "p": "Nōmen numerāle",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Neutrum",
                        "d": "Numerus III neutrum"
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
                        "punc": ":"
                    },
                    {
                        "f": "duo",
                        "l": "duo, duae, duo",
                        "p": "Nōmen numerāle",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Masculīnum / Neutrum",
                        "d": "Numerus II"
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
                        "f": "et",
                        "l": "et",
                        "p": "Coniūnctiō",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Coniunctio copulātīva"
                    },
                    {
                        "f": "ūnum",
                        "l": "ūnus, -a, -um",
                        "p": "Nōmen numerāle",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Neutrum",
                        "d": "Numerus I neutrum"
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
                        "d": "Neutrum",
                        "punc": "."
                    }
                ]
            },
            {
                "numerus": "XXX",
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
                        "f": "Italiā",
                        "l": "Italia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Ablātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Ablātīvus locī post 'in'"
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
                        "f": "oppidōrum",
                        "l": "oppidum, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Genetīvus",
                        "n": "Plūrālis",
                        "g": "Neutrum",
                        "d": "Genetīvus plūrālis in -ōrum"
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
                        "f": "numerus",
                        "l": "numerus, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Quantitās (I, II, III...)"
                    },
                    {
                        "f": "fluviōrum",
                        "l": "fluvius, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Genetīvus",
                        "n": "Plūrālis",
                        "g": "Masculīnum",
                        "d": "Genetīvus plūrālis in -ōrum",
                        "punc": "."
                    },
                    {
                        "f": "Fluviī",
                        "l": "fluvius, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Masculīnum",
                        "d": "Plūrāle: fluvius -> fluviī"
                    },
                    {
                        "f": "Galliae",
                        "l": "Gallia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Genetīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Genetīvus possessīvus"
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
                    }
                ]
            },
            {
                "numerus": "",
                "marginalia": "",
                "tokens": [
                    {
                        "f": "Magnīne",
                        "l": "Magnīne",
                        "p": "Nōmen / Verbum",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Magnīne"
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
                        "f": "Āfricae",
                        "l": "Āfrica, -ae",
                        "p": "Nōmen proprium",
                        "c": "Genetīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Genetīvus possessīvus",
                        "punc": "?"
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
                        "f": "Āfricā",
                        "l": "Āfrica, -ae",
                        "p": "Nōmen proprium",
                        "c": "Ablātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Ablātīvus locī post 'in'"
                    },
                    {
                        "f": "ūnus",
                        "l": "ūnus, -a, -um",
                        "p": "Nōmen numerāle",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Numerus I"
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
                        "punc": ":"
                    },
                    {
                        "f": "Nīlus",
                        "l": "Nīlus, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Fluvius maximus Āfricae",
                        "punc": ";"
                    },
                    {
                        "f": "cēterī",
                        "l": "cēterī, -ae, -a",
                        "p": "Nōmen adiectīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Masculīnum",
                        "d": "Reliquī"
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
                        "f": "Āfricae",
                        "l": "Āfrica, -ae",
                        "p": "Nōmen proprium",
                        "c": "Genetīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Genetīvus possessīvus"
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
                        "f": "Suntne",
                        "l": "Suntne",
                        "p": "Nōmen / Verbum",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Suntne"
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
                        "f": "et",
                        "l": "et",
                        "p": "Coniūnctiō",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Coniunctio copulātīva"
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
                        "f": "duae",
                        "l": "duo, duae, duo",
                        "p": "Nōmen numerāle",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Fēminīnum",
                        "d": "Numerus II fēminīnus"
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
                        "punc": ";"
                    },
                    {
                        "f": "cēterae",
                        "l": "cēterī, -ae, -a",
                        "p": "Nōmen adiectīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Fēminīnum",
                        "d": "Reliquae"
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
                        "d": "Plūrāle"
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
                        "f": "parvae",
                        "l": "parvus, -a, -um",
                        "p": "Nōmen adiectīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Fēminīnum",
                        "d": "Plūrāle",
                        "punc": "."
                    }
                ]
            }
        ]
    },
    {
        "titulusSectio": "LĒCTIŌ TERTIA: COLLOQVIVM",
        "versus": [
            {
                "numerus": "XXXV",
                "marginalia": "",
                "tokens": [
                    {
                        "f": "Quis",
                        "l": "quis, quid",
                        "p": "Prōnōmen interrogātīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Quaerit dē persōnā masculā"
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
                        "f": "Cornēlius",
                        "l": "Cornēlius, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Dominus Rōmānus, vīcīnus Iūliī",
                        "punc": "?"
                    },
                    {
                        "f": "Cornēlius",
                        "l": "Cornēlius, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Dominus Rōmānus, vīcīnus Iūliī"
                    },
                    {
                        "f": "dominus",
                        "l": "dominus, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Vir qui dominātur / servōs habet"
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
                        "f": "Iūlius",
                        "l": "Iūlius, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Vir Rōmānus, pater familiae"
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
                        "f": "Cornēlius",
                        "l": "Cornēlius, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Dominus Rōmānus, vīcīnus Iūliī"
                    },
                    {
                        "f": "duo",
                        "l": "duo, duae, duo",
                        "p": "Nōmen numerāle",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Masculīnum / Neutrum",
                        "d": "Numerus II"
                    },
                    {
                        "f": "dominī",
                        "l": "dominus, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Masculīnum",
                        "d": "Plūrāle: dominus -> dominī"
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
                "marginalia": "",
                "tokens": [
                    {
                        "f": "Mēdus",
                        "l": "Mēdus, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Servus Iūliī"
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
                        "f": "servus",
                        "l": "servus, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Vir qui dominō servit"
                    },
                    {
                        "f": "Cornēliī",
                        "l": "Cornēlius, -ī",
                        "p": "Nōmen proprium",
                        "c": "Genetīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Genetīvus in -ī",
                        "punc": "."
                    },
                    {
                        "f": "Mēdus",
                        "l": "Mēdus, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Servus Iūliī"
                    },
                    {
                        "f": "servus",
                        "l": "servus, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Vir qui dominō servit"
                    },
                    {
                        "f": "Iūliī",
                        "l": "Iūlius, -ī",
                        "p": "Nōmen proprium",
                        "c": "Genetīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Genetīvus: fīlius Iūliī"
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
                "marginalia": "meus / tuus",
                "tokens": [
                    {
                        "f": "Cornēlius",
                        "l": "Cornēlius, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Dominus Rōmānus, vīcīnus Iūliī",
                        "punc": ":"
                    },
                    {
                        "f": "Cuius",
                        "l": "quis",
                        "p": "Prōnōmen interrogātīvum",
                        "c": "Genetīvus",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Genetīvus: cuius servus? Iūliī.",
                        "lead": "\""
                    },
                    {
                        "f": "servus",
                        "l": "servus, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Vir qui dominō servit"
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
                        "f": "Mēdus",
                        "l": "Mēdus, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Servus Iūliī",
                        "punc": "?\""
                    },
                    {
                        "f": "Iūlius",
                        "l": "Iūlius, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Vir Rōmānus, pater familiae",
                        "punc": ":"
                    },
                    {
                        "f": "Mēdus",
                        "l": "Mēdus, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Servus Iūliī",
                        "lead": "\""
                    },
                    {
                        "f": "servus",
                        "l": "servus, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Vir qui dominō servit"
                    },
                    {
                        "f": "meus",
                        "l": "meus, -a, -um",
                        "p": "Prōnōmen possessīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Ad mē pertinēns"
                    },
                    {
                        "f": "est",
                        "l": "esse",
                        "p": "Verbum",
                        "c": "Indicātīvus",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Persōna III praesentis",
                        "punc": ".\""
                    }
                ]
            },
            {
                "numerus": "",
                "marginalia": "",
                "tokens": [
                    {
                        "f": "Cornēlius",
                        "l": "Cornēlius, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Dominus Rōmānus, vīcīnus Iūliī",
                        "punc": ":"
                    },
                    {
                        "f": "Estne",
                        "l": "Estne",
                        "p": "Nōmen / Verbum",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Estne",
                        "lead": "\""
                    },
                    {
                        "f": "Dāvus",
                        "l": "Dāvus, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Servus Iūliī"
                    },
                    {
                        "f": "servus",
                        "l": "servus, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Vir qui dominō servit"
                    },
                    {
                        "f": "tuus",
                        "l": "tuus, -a, -um",
                        "p": "Prōnōmen possessīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Ad tē pertinēns",
                        "punc": "?\""
                    }
                ]
            },
            {
                "numerus": "",
                "marginalia": "",
                "tokens": [
                    {
                        "f": "Iūlius",
                        "l": "Iūlius, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Vir Rōmānus, pater familiae",
                        "punc": ":"
                    },
                    {
                        "f": "Dāvus",
                        "l": "Dāvus, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Servus Iūliī",
                        "lead": "\""
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
                        "f": "servus",
                        "l": "servus, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Vir qui dominō servit"
                    },
                    {
                        "f": "meus",
                        "l": "meus, -a, -um",
                        "p": "Prōnōmen possessīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Ad mē pertinēns"
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
                        "f": "Servī",
                        "l": "servus, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Masculīnum",
                        "d": "Plūrāle: servus -> servī"
                    },
                    {
                        "f": "meī",
                        "l": "meus, -a, -um",
                        "p": "Prōnōmen possessīvum",
                        "c": "Genetīvus / Nōm. plūr.",
                        "n": "Singulāris / Plūrālis",
                        "g": "Masculīnum",
                        "d": "meus -> meī"
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
                        "f": "Mēdus",
                        "l": "Mēdus, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Servus Iūliī"
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
                        "f": "Dāvus",
                        "l": "Dāvus, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Servus Iūliī"
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
                        "f": "cēterī",
                        "l": "cēterī, -ae, -a",
                        "p": "Nōmen adiectīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Masculīnum",
                        "d": "Reliquī"
                    },
                    {
                        "f": "multī",
                        "l": "multī, -ae, -a",
                        "p": "Nōmen adiectīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Masculīnum",
                        "d": "↔ paucī",
                        "punc": "...\""
                    }
                ]
            },
            {
                "numerus": "XL",
                "marginalia": "",
                "tokens": [
                    {
                        "f": "Cornēlius",
                        "l": "Cornēlius, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Dominus Rōmānus, vīcīnus Iūliī",
                        "punc": ":"
                    },
                    {
                        "f": "Estne",
                        "l": "Estne",
                        "p": "Nōmen / Verbum",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Estne",
                        "lead": "\""
                    },
                    {
                        "f": "Dēlia",
                        "l": "Dēlia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Ancilla Aemiliae"
                    },
                    {
                        "f": "ancilla",
                        "l": "ancilla, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Serva fēmina"
                    },
                    {
                        "f": "tua",
                        "l": "tuus, -a, -um",
                        "p": "Prōnōmen possessīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Fēminīnum",
                        "punc": "?\""
                    }
                ]
            },
            {
                "numerus": "",
                "marginalia": "",
                "tokens": [
                    {
                        "f": "Iūlius",
                        "l": "Iūlius, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Vir Rōmānus, pater familiae",
                        "punc": ":"
                    },
                    {
                        "f": "Dēlia",
                        "l": "Dēlia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Ancilla Aemiliae",
                        "lead": "\""
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
                        "f": "ancilla",
                        "l": "ancilla, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Serva fēmina"
                    },
                    {
                        "f": "mea",
                        "l": "meus, -a, -um",
                        "p": "Prōnōmen possessīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Fēminīnum",
                        "punc": ","
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
                        "f": "Syra",
                        "l": "Syra, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Ancilla Aemiliae"
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
                        "f": "ancilla",
                        "l": "ancilla, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Serva fēmina"
                    },
                    {
                        "f": "mea",
                        "l": "meus, -a, -um",
                        "p": "Prōnōmen possessīvum",
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
                        "f": "Ancillae",
                        "l": "ancilla, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Fēminīnum",
                        "d": "Plūrāle: ancilla -> ancillae"
                    },
                    {
                        "f": "meae",
                        "l": "meus, -a, -um",
                        "p": "Prōnōmen possessīvum",
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
                        "f": "Dēlia",
                        "l": "Dēlia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Ancilla Aemiliae"
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
                        "f": "Syra",
                        "l": "Syra, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Ancilla Aemiliae"
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
                        "f": "cēterae",
                        "l": "cēterī, -ae, -a",
                        "p": "Nōmen adiectīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Fēminīnum",
                        "d": "Reliquae"
                    },
                    {
                        "f": "multae",
                        "l": "multī, -ae, -a",
                        "p": "Nōmen adiectīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Fēminīnum",
                        "d": "Plūrāle fēminīnum",
                        "punc": "."
                    },
                    {
                        "f": "Familia",
                        "l": "familia, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Tōta domus: dominus, līberī, servī"
                    },
                    {
                        "f": "mea",
                        "l": "meus, -a, -um",
                        "p": "Prōnōmen possessīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Fēminīnum"
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
                        "punc": ".\""
                    }
                ]
            },
            {
                "numerus": "",
                "marginalia": "",
                "tokens": [
                    {
                        "f": "Cornēlius",
                        "l": "Cornēlius, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Dominus Rōmānus, vīcīnus Iūliī",
                        "punc": ":"
                    },
                    {
                        "f": "Quot",
                        "l": "quot",
                        "p": "Nōmen numerāle indecl.",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Interrogat dē numerō",
                        "lead": "\""
                    },
                    {
                        "f": "servī",
                        "l": "servus, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Masculīnum",
                        "d": "Plūrāle: servus -> servī"
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
                        "f": "familiā",
                        "l": "familia, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Ablātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Post praepositiōnem 'in'"
                    },
                    {
                        "f": "tuā",
                        "l": "tuus, -a, -um",
                        "p": "Prōnōmen possessīvum",
                        "c": "Ablātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "in familiā tuā",
                        "punc": "?\""
                    },
                    {
                        "f": "Iūlius",
                        "l": "Iūlius, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Vir Rōmānus, pater familiae",
                        "punc": ":"
                    },
                    {
                        "f": "In",
                        "l": "in",
                        "p": "Praepositiō",
                        "c": "cum Ablātīvō",
                        "n": "—",
                        "g": "—",
                        "d": "Indicat locum",
                        "lead": "\""
                    },
                    {
                        "f": "familiā",
                        "l": "familia, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Ablātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Post praepositiōnem 'in'"
                    },
                    {
                        "f": "meā",
                        "l": "meus, -a, -um",
                        "p": "Prōnōmen possessīvum",
                        "c": "Ablātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "in familiā meā"
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
                        "f": "centum",
                        "l": "centum",
                        "p": "Nōmen numerāle indecl.",
                        "c": "—",
                        "n": "Plūrālis",
                        "g": "—",
                        "d": "Numerus C (100)"
                    },
                    {
                        "f": "servī",
                        "l": "servus, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Masculīnum",
                        "d": "Plūrāle: servus -> servī",
                        "punc": ".\""
                    }
                ]
            },
            {
                "numerus": "",
                "marginalia": "",
                "tokens": [
                    {
                        "f": "Cornēlius",
                        "l": "Cornēlius, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Dominus Rōmānus, vīcīnus Iūliī",
                        "punc": ":"
                    },
                    {
                        "f": "Quid",
                        "l": "quis, quid",
                        "p": "Prōnōmen interrogātīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Neutrum",
                        "d": "Quaerit dē rē",
                        "lead": "\"",
                        "punc": "?"
                    },
                    {
                        "f": "Centum",
                        "l": "centum",
                        "p": "Nōmen numerāle indecl.",
                        "c": "—",
                        "n": "Plūrālis",
                        "g": "—",
                        "d": "Numerus C (100)"
                    },
                    {
                        "f": "servī",
                        "l": "servus, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Masculīnum",
                        "d": "Plūrāle: servus -> servī",
                        "punc": "!\""
                    },
                    {
                        "f": "Iūlius",
                        "l": "Iūlius, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Vir Rōmānus, pater familiae",
                        "punc": ":"
                    },
                    {
                        "f": "Numerus",
                        "l": "numerus, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Quantitās (I, II, III...)",
                        "lead": "\""
                    },
                    {
                        "f": "servōrum",
                        "l": "servus, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Genetīvus",
                        "n": "Plūrālis",
                        "g": "Masculīnum",
                        "d": "Genetīvus plūrālis in -ōrum"
                    },
                    {
                        "f": "meōrum",
                        "l": "meus, -a, -um",
                        "p": "Prōnōmen possessīvum",
                        "c": "Genetīvus",
                        "n": "Plūrālis",
                        "g": "Masculīnum",
                        "d": "Genetīvus plūrālis"
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
                        "f": "centum",
                        "l": "centum",
                        "p": "Nōmen numerāle indecl.",
                        "c": "—",
                        "n": "Plūrālis",
                        "g": "—",
                        "d": "Numerus C (100)",
                        "punc": ".\""
                    }
                ]
            },
            {
                "numerus": "",
                "marginalia": "",
                "tokens": [
                    {
                        "f": "Cornēlius",
                        "l": "Cornēlius, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Dominus Rōmānus, vīcīnus Iūliī",
                        "punc": ":"
                    },
                    {
                        "f": "Centum",
                        "l": "centum",
                        "p": "Nōmen numerāle indecl.",
                        "c": "—",
                        "n": "Plūrālis",
                        "g": "—",
                        "d": "Numerus C (100)",
                        "lead": "\""
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
                        "f": "numerus",
                        "l": "numerus, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Quantitās (I, II, III...)"
                    },
                    {
                        "f": "servōrum",
                        "l": "servus, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Genetīvus",
                        "n": "Plūrālis",
                        "g": "Masculīnum",
                        "d": "Genetīvus plūrālis in -ōrum",
                        "punc": "!\""
                    },
                    {
                        "f": "Aemilia",
                        "l": "Aemilia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Fēmina Rōmāna, māter",
                        "punc": ":"
                    },
                    {
                        "f": "Mārcus",
                        "l": "Mārcus, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Fīlius prīmus",
                        "lead": "\"",
                        "punc": ","
                    },
                    {
                        "f": "Quīntus",
                        "l": "Quīntus, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Fīlius secundus",
                        "punc": ","
                    },
                    {
                        "f": "Iūlia",
                        "l": "Iūlia, -ae",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Fīlia Iūliī et Aemiliae"
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
                        "f": "līberī",
                        "l": "līberī, -ōrum",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Masculīnum",
                        "d": "Fīliī et fīliae"
                    },
                    {
                        "f": "meī",
                        "l": "meus, -a, -um",
                        "p": "Prōnōmen possessīvum",
                        "c": "Genetīvus / Nōm. plūr.",
                        "n": "Singulāris / Plūrālis",
                        "g": "Masculīnum",
                        "d": "meus -> meī",
                        "punc": ".\""
                    }
                ]
            },
            {
                "numerus": "XLV",
                "marginalia": "liber",
                "tokens": [
                    {
                        "f": "Cornēlius",
                        "l": "Cornēlius, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Dominus Rōmānus, vīcīnus Iūliī",
                        "punc": ":"
                    },
                    {
                        "f": "Cuius",
                        "l": "quis",
                        "p": "Prōnōmen interrogātīvum",
                        "c": "Genetīvus",
                        "n": "Singulāris",
                        "g": "—",
                        "d": "Genetīvus: cuius servus? Iūliī.",
                        "lead": "\""
                    },
                    {
                        "f": "liber",
                        "l": "liber, librī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Volūmen scriptum (dēclīnātiō II in -er)"
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
                        "f": "hic",
                        "l": "hic, haec, hoc",
                        "p": "Prōnōmen dēmōnstrātīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Hic prope nōs",
                        "punc": "?\""
                    },
                    {
                        "f": "Iūlius",
                        "l": "Iūlius, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Vir Rōmānus, pater familiae",
                        "punc": ":"
                    },
                    {
                        "f": "Hic",
                        "l": "hic, haec, hoc",
                        "p": "Prōnōmen dēmōnstrātīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Hic prope nōs",
                        "lead": "\""
                    },
                    {
                        "f": "liber",
                        "l": "liber, librī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Volūmen scriptum (dēclīnātiō II in -er)"
                    },
                    {
                        "f": "meus",
                        "l": "meus, -a, -um",
                        "p": "Prōnōmen possessīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Ad mē pertinēns"
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
                        "f": "Titulus",
                        "l": "titulus, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Nōmen libri vel capitulī"
                    },
                    {
                        "f": "librī",
                        "l": "liber, librī",
                        "p": "Nōmen substantīvum",
                        "c": "Genetīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Genetīvus possessīvus in -ī"
                    },
                    {
                        "f": "meī",
                        "l": "meus, -a, -um",
                        "p": "Prōnōmen possessīvum",
                        "c": "Genetīvus / Nōm. plūr.",
                        "n": "Singulāris / Plūrālis",
                        "g": "Masculīnum",
                        "d": "meus -> meī"
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
                        "f": "Lingua",
                        "l": "Lingua",
                        "p": "Nōmen / Verbum",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Lingua",
                        "lead": "'"
                    },
                    {
                        "f": "Latina",
                        "l": "Latina",
                        "p": "Nōmen / Verbum",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Latina",
                        "punc": "'.\""
                    }
                ]
            },
            {
                "numerus": "",
                "marginalia": "titulus",
                "tokens": [
                    {
                        "f": "Cornēlius",
                        "l": "Cornēlius, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Dominus Rōmānus, vīcīnus Iūliī",
                        "punc": ":"
                    },
                    {
                        "f": "Quot",
                        "l": "quot",
                        "p": "Nōmen numerāle indecl.",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Interrogat dē numerō",
                        "lead": "\""
                    },
                    {
                        "f": "pāginae",
                        "l": "pāgina, -ae",
                        "p": "Nōmen substantīvum",
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
                        "f": "librō",
                        "l": "liber, librī",
                        "p": "Nōmen substantīvum",
                        "c": "Ablātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Post praepositiōnem 'in'"
                    },
                    {
                        "f": "tuō",
                        "l": "tuus, -a, -um",
                        "p": "Prōnōmen possessīvum",
                        "c": "Ablātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "in librō tuō",
                        "punc": "?\""
                    },
                    {
                        "f": "Iūlius",
                        "l": "Iūlius, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Vir Rōmānus, pater familiae",
                        "punc": ":"
                    },
                    {
                        "f": "In",
                        "l": "in",
                        "p": "Praepositiō",
                        "c": "cum Ablātīvō",
                        "n": "—",
                        "g": "—",
                        "d": "Indicat locum",
                        "lead": "\""
                    },
                    {
                        "f": "librō",
                        "l": "liber, librī",
                        "p": "Nōmen substantīvum",
                        "c": "Ablātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Post praepositiōnem 'in'"
                    },
                    {
                        "f": "meō",
                        "l": "meus, -a, -um",
                        "p": "Prōnōmen possessīvum",
                        "c": "Ablātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "in librō meō"
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
                        "f": "multae",
                        "l": "multī, -ae, -a",
                        "p": "Nōmen adiectīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Fēminīnum",
                        "d": "Plūrāle fēminīnum"
                    },
                    {
                        "f": "pāginae",
                        "l": "pāgina, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Fēminīnum",
                        "d": "Plūrāle"
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
                        "f": "capitula",
                        "l": "capitulum, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Neutrum",
                        "d": "Plūrāle neutrī generis",
                        "punc": ".\""
                    }
                ]
            },
            {
                "numerus": "",
                "marginalia": "",
                "tokens": [
                    {
                        "f": "Cornēlius",
                        "l": "Cornēlius, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Dominus Rōmānus, vīcīnus Iūliī",
                        "punc": ":"
                    },
                    {
                        "f": "Quot",
                        "l": "quot",
                        "p": "Nōmen numerāle indecl.",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Interrogat dē numerō",
                        "lead": "\""
                    },
                    {
                        "f": "capitula",
                        "l": "capitulum, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Neutrum",
                        "d": "Plūrāle neutrī generis"
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
                        "f": "librō",
                        "l": "liber, librī",
                        "p": "Nōmen substantīvum",
                        "c": "Ablātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Post praepositiōnem 'in'",
                        "punc": "?\""
                    },
                    {
                        "f": "Iūlius",
                        "l": "Iūlius, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Vir Rōmānus, pater familiae",
                        "punc": ":"
                    },
                    {
                        "f": "In",
                        "l": "in",
                        "p": "Praepositiō",
                        "c": "cum Ablātīvō",
                        "n": "—",
                        "g": "—",
                        "d": "Indicat locum",
                        "lead": "\""
                    },
                    {
                        "f": "librō",
                        "l": "liber, librī",
                        "p": "Nōmen substantīvum",
                        "c": "Ablātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Post praepositiōnem 'in'"
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
                        "f": "trīgintā",
                        "l": "trīgintā",
                        "p": "Nōmen numerāle indecl.",
                        "c": "—",
                        "n": "Plūrālis",
                        "g": "—",
                        "d": "Numerus XXX (30)"
                    },
                    {
                        "f": "quīnque",
                        "l": "quīnque",
                        "p": "Nōmen numerāle indecl.",
                        "c": "—",
                        "n": "Plūrālis",
                        "g": "—",
                        "d": "Numerus V (5)"
                    },
                    {
                        "f": "capitula",
                        "l": "capitulum, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Plūrālis",
                        "g": "Neutrum",
                        "d": "Plūrāle neutrī generis",
                        "punc": ".\""
                    }
                ]
            },
            {
                "numerus": "",
                "marginalia": "",
                "tokens": [
                    {
                        "f": "Cornēlius",
                        "l": "Cornēlius, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Dominus Rōmānus, vīcīnus Iūliī",
                        "punc": ":"
                    },
                    {
                        "f": "Quis",
                        "l": "quis, quid",
                        "p": "Prōnōmen interrogātīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Quaerit dē persōnā masculā",
                        "lead": "\""
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
                        "f": "titulus",
                        "l": "titulus, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Nōmen libri vel capitulī"
                    },
                    {
                        "f": "capitulī",
                        "l": "capitulī",
                        "p": "Nōmen / Verbum",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "capitulī"
                    },
                    {
                        "f": "prīmī",
                        "l": "prīmus, -a, -um",
                        "p": "Nōmen ōrdināle",
                        "c": "Genetīvus",
                        "n": "Singulāris",
                        "g": "Neutrum",
                        "d": "capitulī prīmī",
                        "punc": "?\""
                    },
                    {
                        "f": "Iūlius",
                        "l": "Iūlius, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Vir Rōmānus, pater familiae",
                        "punc": ":"
                    },
                    {
                        "f": "Titulus",
                        "l": "titulus, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Nōmen libri vel capitulī",
                        "lead": "\""
                    },
                    {
                        "f": "capitulī",
                        "l": "capitulī",
                        "p": "Nōmen / Verbum",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "capitulī"
                    },
                    {
                        "f": "prīmī",
                        "l": "prīmus, -a, -um",
                        "p": "Nōmen ōrdināle",
                        "c": "Genetīvus",
                        "n": "Singulāris",
                        "g": "Neutrum",
                        "d": "capitulī prīmī"
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
                        "f": "Imperium",
                        "l": "imperium, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Neutrum",
                        "d": "Regnum vel orbis Rōmānus",
                        "lead": "'"
                    },
                    {
                        "f": "Romanum",
                        "l": "Romanum",
                        "p": "Nōmen / Verbum",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Romanum",
                        "punc": "'.\""
                    }
                ]
            },
            {
                "numerus": "L",
                "marginalia": "",
                "tokens": [
                    {
                        "f": "Cornēlius",
                        "l": "Cornēlius, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Dominus Rōmānus, vīcīnus Iūliī",
                        "punc": ":"
                    },
                    {
                        "f": "Quis",
                        "l": "quis, quid",
                        "p": "Prōnōmen interrogātīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Quaerit dē persōnā masculā",
                        "lead": "\""
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
                        "f": "titulus",
                        "l": "titulus, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Nōmen libri vel capitulī"
                    },
                    {
                        "f": "capitulī",
                        "l": "capitulī",
                        "p": "Nōmen / Verbum",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "capitulī"
                    },
                    {
                        "f": "secundī",
                        "l": "secundus, -a, -um",
                        "p": "Nōmen ōrdināle",
                        "c": "Genetīvus",
                        "n": "Singulāris",
                        "g": "Neutrum",
                        "d": "capitulī secundī",
                        "punc": "?\""
                    },
                    {
                        "f": "Iūlius",
                        "l": "Iūlius, -ī",
                        "p": "Nōmen proprium",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Vir Rōmānus, pater familiae",
                        "punc": ":"
                    },
                    {
                        "f": "Titulus",
                        "l": "titulus, -ī",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Masculīnum",
                        "d": "Nōmen libri vel capitulī",
                        "lead": "\""
                    },
                    {
                        "f": "capitulī",
                        "l": "capitulī",
                        "p": "Nōmen / Verbum",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "capitulī"
                    },
                    {
                        "f": "secundī",
                        "l": "secundus, -a, -um",
                        "p": "Nōmen ōrdināle",
                        "c": "Genetīvus",
                        "n": "Singulāris",
                        "g": "Neutrum",
                        "d": "capitulī secundī"
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
                        "f": "Familia",
                        "l": "familia, -ae",
                        "p": "Nōmen substantīvum",
                        "c": "Nōminātīvus",
                        "n": "Singulāris",
                        "g": "Fēminīnum",
                        "d": "Tōta domus: dominus, līberī, servī",
                        "lead": "'"
                    },
                    {
                        "f": "Romana",
                        "l": "Romana",
                        "p": "Nōmen / Verbum",
                        "c": "—",
                        "n": "—",
                        "g": "—",
                        "d": "Romana",
                        "punc": "'.\""
                    }
                ]
            }
        ]
    }
],

    // Grammatica Latina Authentica (Ørberg)
  grammaticaLatina: {
    titulus: "GRAMMATICA LATINA",
    subtitulus: "Masculīnum, fēminīnum, neutrum & Genetīvus",
    partes: [
      {
        sectio: "I. Masculīnum, fēminīnum, neutrum",
        regula: "'Servus' est vocābulum masculīnum (-us / -er). 'Ancilla' est vocābulum fēminīnum (-a). 'Oppidum' est vocābulum neutrum (-um).",
        exemplaSententiarum: [],
        exemplaVocabulorum: "Masculīna: fīlius, dominus, puer, vir; fluvius, ōceanus, numerus, liber, titulus.\nFēminīna: fēmina, puella, fīlia, domina; īnsula, prōvincia, littera, familia, pāgina.\nNeutra: oppidum, imperium, vocābulum, capitulum, exemplum, pēnsum.",
        sententiae: [
          "Mārcus puer Rōmānus est; Iūlius vir Rōmānus est (masculīna).",
          "Iūlia puella Rōmāna est; Aemilia fēmina Rōmāna est (fēminīna).",
          "Tūsculum oppidum Rōmānum est (neutrum)."
        ]
      },
      {
        sectio: "II. Genetīvus singulāris et plūrālis",
        subsectio: "[A] Masculīnum (Genetīvus: -ī / -ōrum)",
        exemplaSententiarum: [
          { sg: "Iūlius dominus servī (Dāvī) est.", pl: "Iūlius dominus servōrum (Dāvī et Mēdī) est." }
        ],
        regula: "'Servī' genetīvus singulāris est (-ī). 'Servōrum' est genetīvus plūrālis (-ōrum).",
        exemplaVocabulorum: "servus -> servī / servōrum; fīlius -> fīliī / fīliōrum; dominus -> dominī / dominōrum.",
        sententiae: [
          "Cuius servus est Dāvus? Iūliī servus est.",
          "Mēdus et Dāvus servī Iūliī sunt. Iūlius est dominus multōrum servōrum."
        ]
      },
      {
        sectio: "",
        subsectio: "[B] Fēminīnum (Genetīvus: -ae / -ārum)",
        exemplaSententiarum: [
          { sg: "Aemilia domina ancillae (Syrae) est.", pl: "Aemilia domina ancillārum (Syrae et Dēliae) est." }
        ],
        regula: "'Ancillae' genetīvus singulāris est (-ae). 'Ancillārum' est genetīvus plūrālis (-ārum).",
        exemplaVocabulorum: "ancilla -> ancillae / ancillārum; puella -> puellae / puellārum; fīlia -> fīliae / fīliārum.",
        sententiae: [
          "Syra est ancilla Aemiliae.",
          "Aemilia est domina multārum ancillārum."
        ]
      },
      {
        sectio: "",
        subsectio: "[C] Neutrum (Genetīvus: -ī / -ōrum)",
        exemplaSententiarum: [
          { sg: "D est prīma littera vocābulī 'dominus'.", pl: "Numerus vocābulōrum magnus est." }
        ],
        regula: "'Vocābulī' genetīvus singulāris est (-ī). 'Vocābulōrum' est genetīvus plūrālis (-ōrum).",
        exemplaVocabulorum: "oppidum -> oppidī / oppidōrum; vocābulum -> vocābulī / vocābulōrum; capitulum -> capitulī / capitulōrum.",
        sententiae: [
          "'Familia Rōmāna' est titulus capitulī secundī.",
          "Numerus capitulōrum nōn parvus est."
        ]
      }
    ]
  },

  pensa: {
    pensumA: {
      titulus: "PĒNSVM A (Capitulum II)",
      descriptio: "Fōrmae grammaticae: Implē lacūnās terminātiōnibus Genetīvī (-ī, -ae, -ōrum, -ārum)!",
      quaestiones: [
        {
          id: "p2a_1",
          praefix: "Mārcus fīlius Iūli",
          lacuna: "ī",
          inter: " est. Iūlia fīlia Aemili",
          lacuna2: "ae",
          suffix: " est.",
          explicatio: "Genetīvus singulāris: Iūliī (masculīnum -ī), Aemiliae (fēminīnum -ae)."
        },
        {
          id: "p2a_2",
          praefix: "Iūlius est pater Mārc",
          lacuna: "ī",
          inter: " et Quīnt",
          lacuna2: "ī",
          suffix: " et Iūliae.",
          explicatio: "Genetīvus singulāris masculīnus (-ī): Mārcī, Quīntī."
        },
        {
          id: "p2a_3",
          praefix: "Aemilia est māter Mārcī et Iūli",
          lacuna: "ae",
          inter: " et Quīnt",
          lacuna2: "ī",
          suffix: ".",
          explicatio: "Genetīvus singulāris: Iūliae (fēminīnum -ae), Quīntī (masculīnum -ī)."
        },
        {
          id: "p2a_4",
          praefix: "Iūlius est dominus mult",
          lacuna: "ōrum",
          inter: " serv",
          lacuna2: "ōrum",
          suffix: ".",
          explicatio: "Genetīvus plūrālis masculīnus (-ōrum): multōrum servōrum."
        },
        {
          id: "p2a_5",
          praefix: "Aemilia est domina mult",
          lacuna: "ārum",
          inter: " ancill",
          lacuna2: "ārum",
          suffix: ".",
          explicatio: "Genetīvus plūrālis fēminīnus (-ārum): multārum ancillārum."
        },
        {
          id: "p2a_6",
          praefix: "Numerus liber",
          lacuna: "ōrum",
          inter: " in familiā parvus est; numerus serv",
          lacuna2: "ōrum",
          suffix: " magnus est.",
          explicatio: "Genetīvus plūrālis: liberōrum, servōrum (-ōrum)."
        },
        {
          id: "p2a_7",
          praefix: "Titulus libr",
          lacuna: "ī",
          inter: " tu",
          lacuna2: "ī",
          suffix: " est 'Lingua Latina'.",
          explicatio: "Genetīvus singulāris masculīnus (-ī): librī tuī."
        },
        {
          id: "p2a_8",
          praefix: "Dāvus et Mēdus sunt servī Iūli",
          lacuna: "ī",
          inter: "; Syra et Dēlia sunt ancillae Aemili",
          lacuna2: "ae",
          suffix: ".",
          explicatio: "Genetīvus singulāris: servī Iūliī (-ī), ancillae Aemiliae (-ae)."
        }
      ]
    },

    pensumB: {
      titulus: "PĒNSVM B (Capitulum II)",
      descriptio: "Vocābula nova: Implē lacūnās vocābulīs idōneīs!",
      quaestiones: [
        {
          id: "p2b_1",
          praefix: "Iūlius ",
          lacuna: "vir",
          suffix: " Rōmānus est; Aemilia est fēmina.",
          explicatio: "Nōmen masculīnum in -r: vir (↔ fēmina)."
        },
        {
          id: "p2b_2",
          praefix: "Mārcus et Quīntus sunt ",
          lacuna: "puerī",
          suffix: "; Iūlia est puella.",
          explicatio: "Nōminātīvus plūrālis masculīnus: puerī (↔ puella)."
        },
        {
          id: "p2b_3",
          praefix: "Iūlius est ",
          lacuna: "pater",
          suffix: ", Aemilia est māter.",
          explicatio: "Nōmen masculīnum: pater (↔ māter)."
        },
        {
          id: "p2b_4",
          praefix: "Mārcus, Quīntus Iūlia",
          lacuna: "que",
          suffix: " sunt trēs līberī.",
          explicatio: "Particula enclitica copulātīva (= et Iūlia): -que."
        },
        {
          id: "p2b_5",
          praefix: "Dāvus est ",
          lacuna: "servus",
          suffix: "; Syra est ancilla.",
          explicatio: "Nōmen masculīnum: servus (↔ ancilla)."
        },
        {
          id: "p2b_6",
          praefix: "Iūlius est ",
          lacuna: "dominus",
          suffix: " servōrum.",
          explicatio: "Nōmen masculīnum: dominus (qui servōs habet)."
        },
        {
          id: "p2b_7",
          praefix: "",
          lacuna: "Cuius",
          suffix: " servus est Mēdus? Iūliī.",
          explicatio: "Prōnōmen interrogātīvum genetīvī (Cuius? = quis dominus est?): Cuius."
        },
        {
          id: "p2b_8",
          praefix: "",
          lacuna: "Quot",
          suffix: " servī sunt in familiā? Centum.",
          explicatio: "Adiectīvum interrogātīvum indeclīnābile quantitātis: Quot."
        },
        {
          id: "p2b_9",
          praefix: "In librō tuō sunt multae ",
          lacuna: "pāginae",
          suffix: ".",
          explicatio: "Nōminātīvus plūrālis fēminīnus cum macrōne ā: pāginae."
        }
      ]
    },

    pensumC: {
      titulus: "PĒNSVM C (Capitulum II)",
      descriptio: "Interrogātiōnēs: Scrībe respōnsum Latīnē, deinde aperī exemplum!",
      quaestiones: [
        {
          id: "p2c_1",
          interrogatio: "Quis est Iūlius?",
          exemplum: "Iūlius vir Rōmānus est, pater Mārcī et Quīntī et Iūliae."
        },
        {
          id: "p2c_2",
          interrogatio: "Quae est Aemilia?",
          exemplum: "Aemilia fēmina Rōmāna est, māter liberōrum."
        },
        {
          id: "p2c_3",
          interrogatio: "Quot līberī sunt Iūliō et Aemiliae?",
          exemplum: "Iūliō et Aemiliae trēs līberī sunt (duo fīliī et ūna fīlia)."
        },
        {
          id: "p2c_4",
          interrogatio: "Quī sunt fīliī Iūliī?",
          exemplum: "Fīliī Iūliī sunt Mārcus et Quīntus."
        },
        {
          id: "p2c_5",
          interrogatio: "Quae est fīlia Aemiliae?",
          exemplum: "Fīlia Aemiliae est Iūlia."
        },
        {
          id: "p2c_6",
          interrogatio: "Cuius servus est Dāvus?",
          exemplum: "Dāvus est servus Iūliī."
        },
        {
          id: "p2c_7",
          interrogatio: "Quot servī sunt in familiā?",
          exemplum: "In familiā sunt centum servī."
        },
        {
          id: "p2c_8",
          interrogatio: "Quis est titulus librī tuī?",
          exemplum: "Titulus librī meī est 'Lingua Latina'."
        }
      ]
    }
  }
};