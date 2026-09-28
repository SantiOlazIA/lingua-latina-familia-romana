// data_capitulum4.js
// Dāta Capituli Quarti: Textus Authenticus Integer (Ørberg), Analysis Grammatica, Pēnsa, Tabula, Vocābulārium.

export const capitulumQuartum = {
  "numerus": 4,
  "titulus": "CAPITVLVM QVARTVM",
  "subtitulus": "DOMINVS ET SERVI",
  "tabulaDeclinationum": {
    "titulus": "TABVLA DĒCLĪNĀTIŌNVM (Capitulum IV)",
    "descriptio": "Casus novus: VOCĀTĪVUS (-e / -ī), et Modī Verbālēs: IMPERĀTĪVUS (-ā, -ē, -e, -ī) et INDICĀTĪVUS (-at, -et, -it).",
    "declinationes": [
      {
        "nomen": "Casus Vocātīvus (-e / -ī)",
        "genus": "Masculīnum (Dēclīnātiō II)",
        "paradigma": "servus -> serve! / Dāvus -> Dāve! / fīlius -> fīlī!",
        "casus": [
          {
            "casus": "Nōminātīvus",
            "sg": "-us (servus, dominus, Dāvus)",
            "pl": "-ī (servī, dominī)"
          },
          {
            "casus": "Vocātīvus",
            "sg": "-e (serve, domine, Dāve); in -ius: -ī (Iūlī, fīlī)",
            "pl": "-ī (servī, dominī)"
          },
          {
            "casus": "Dēclīnātiō I",
            "sg": "-a (Aemilia, Iūlia)",
            "pl": "-ae (vocātīvus = nōminātīvus)"
          }
        ]
      },
      {
        "nomen": "Imperātīvus et Indicātīvus",
        "genus": "Modī Verbōrum (I, II, III, IV)",
        "paradigma": "vocā / vocat; tacē / tacet; pōne / pōnit; venī / venit",
        "casus": [
          {
            "casus": "Coniugātiō I",
            "sg": "Imperātīvus: vocā! salūtā!",
            "pl": "Indicātīvus: vocat, salūtat"
          },
          {
            "casus": "Coniugātiō II",
            "sg": "Imperātīvus: tacē! respondē!",
            "pl": "Indicātīvus: tacet, respondet"
          },
          {
            "casus": "Coniugātiō III",
            "sg": "Imperātīvus: pōne! sūme! discēde!",
            "pl": "Indicātīvus: pōnit, sūmit, discēdit"
          },
          {
            "casus": "Coniugātiō IV",
            "sg": "Imperātīvus: audī! venī!",
            "pl": "Indicātīvus: audit, venit"
          }
        ]
      },
      {
        "nomen": "Prōnōmina Relātīva: Neutrum",
        "genus": "quī, quae, quod",
        "paradigma": "baculum quod in mēnsā est",
        "casus": [
          {
            "casus": "Masculīnum",
            "sg": "quī (puer quī...)",
            "pl": "quī (puerī quī...)"
          },
          {
            "casus": "Fēminīnum",
            "sg": "quae (puella quae...)",
            "pl": "quae (puellae quae...)"
          },
          {
            "casus": "Neutrum",
            "sg": "quod (baculum quod...)",
            "pl": "quae (oppida quae...)"
          }
        ]
      }
    ]
  },
  "vocabularium": [
    {
      "lemma": "abest, abesse",
      "pars": "Verbum",
      "genus": "Irregukāre",
      "notatio": "↔ adest; nōn hīc est: Dāvus nōn adest, sed abest."
    },
    {
      "lemma": "accūsat, accūsāre",
      "pars": "Verbum",
      "genus": "Coniugātiō I",
      "notatio": "Culpam alicui tribuit: Mēdus Dāvum accūsat."
    },
    {
      "lemma": "adest, adesse",
      "pars": "Verbum",
      "genus": "Irregukāre",
      "notatio": "= hīc est; ↔ abest: Mēdus adest."
    },
    {
      "lemma": "baculum, -ī",
      "pars": "Nōmen substantīvum",
      "genus": "Neutrum",
      "notatio": "Līgnum quō dominus verberat: Baculum dominī in mēnsā est."
    },
    {
      "lemma": "bonus, -a, -um",
      "pars": "Nōmen adiectīvum",
      "genus": "Masculīnum",
      "notatio": "= probus; ↔ malus: Dāvus bonus servus est."
    },
    {
      "lemma": "decem",
      "pars": "Nōmen numerāle indecl.",
      "genus": "—",
      "notatio": "Numerus X (10): In sacculō sunt decem tantum nummī."
    },
    {
      "lemma": "discēdit, discēdere",
      "pars": "Verbum",
      "genus": "Coniugātiō III",
      "notatio": "Abit, recēdit; ↔ venit: Dāvus sacculum sūmit et discēdit."
    },
    {
      "lemma": "eius",
      "pars": "Prōnōmen",
      "genus": "Genetīvus",
      "notatio": "Genetīvus prōnōminis 'is, ea, id' (illīus): Sacculus eius vacuus est."
    },
    {
      "lemma": "habet, habēre",
      "pars": "Verbum",
      "genus": "Coniugātiō II",
      "notatio": "Possidet: Iūlius pecūniam in sacculō habet."
    },
    {
      "lemma": "imperat, imperāre",
      "pars": "Verbum",
      "genus": "Coniugātiō I",
      "notatio": "Iubet; ↔ pāret: Dominus imperat, servus pāret."
    },
    {
      "lemma": "imperātīvus, -ī",
      "pars": "Nōmen grammaticum",
      "genus": "Masculīnum",
      "notatio": "Modus iubendī: 'Vocā!', 'Tacē!', 'Pōne!', 'Venī!'"
    },
    {
      "lemma": "indicātīvus, -ī",
      "pars": "Nōmen grammaticum",
      "genus": "Masculīnum",
      "notatio": "Modus facta dēclārandī: 'Vocat', 'Tacet', 'Pōnit', 'Venit'."
    },
    {
      "lemma": "is",
      "pars": "Prōnōmen",
      "genus": "Nōminātīvus masc. sg.",
      "notatio": "Prōnōmen persōnāle persōnae III (ille vir): Is pecūniam habet."
    },
    {
      "lemma": "mēnsa, -ae",
      "pars": "Nōmen substantīvum",
      "genus": "Fēminīnum",
      "notatio": "Tabula ubi rēs pōnuntur: Pōne sacculum in mēnsā!"
    },
    {
      "lemma": "novem",
      "pars": "Nōmen numerāle indecl.",
      "genus": "—",
      "notatio": "Numerus IX (9): Ūnus, duo... novem, decem."
    },
    {
      "lemma": "nūllus, -a, -um",
      "pars": "Nōmen adiectīvum",
      "genus": "Masculīnum",
      "notatio": "= nōn ūnus: Nūllus servus adest. In sacculō nūlla pecūnia est."
    },
    {
      "lemma": "numerat, numerāre",
      "pars": "Verbum",
      "genus": "Coniugātiō I",
      "notatio": "Computat: Iūlius pecūniam numerat."
    },
    {
      "lemma": "nummus, -ī",
      "pars": "Nōmen substantīvum",
      "genus": "Masculīnum",
      "notatio": "Monēta: Quot nummī sunt in sacculō? Centum."
    },
    {
      "lemma": "octō",
      "pars": "Nōmen numerāle indecl.",
      "genus": "—",
      "notatio": "Numerus VIII (8)."
    },
    {
      "lemma": "pāret, pārēre",
      "pars": "Verbum",
      "genus": "Coniugātiō II",
      "notatio": "Facit quod imperātur; ↔ imperat: Dāvus pāret et sacculum pōnit."
    },
    {
      "lemma": "pecūnia, -ae",
      "pars": "Nōmen substantīvum",
      "genus": "Fēminīnum",
      "notatio": "Nummī, opēs: In sacculō eius est pecūnia."
    },
    {
      "lemma": "pōnit, pōnere",
      "pars": "Verbum",
      "genus": "Coniugātiō III",
      "notatio": "Locat: Dāvus sacculum in mēnsā pōnit."
    },
    {
      "lemma": "quattuor",
      "pars": "Nōmen numerāle indecl.",
      "genus": "—",
      "notatio": "Numerus IV (4)."
    },
    {
      "lemma": "quīnque",
      "pars": "Nōmen numerāle indecl.",
      "genus": "—",
      "notatio": "Numerus V (5)."
    },
    {
      "lemma": "quod",
      "pars": "Prōnōmen",
      "genus": "Neutrum sg.",
      "notatio": "Prōnōmen relātīvum neutrum: Baculum, quod in mēnsā est, videt."
    },
    {
      "lemma": "rūrsus",
      "pars": "Adverbium",
      "genus": "—",
      "notatio": "= iterum: Iūlius rūrsus pecūniam numerat."
    },
    {
      "lemma": "sacculus, -ī",
      "pars": "Nōmen substantīvum",
      "genus": "Masculīnum",
      "notatio": "Pera parva ubi pecūnia continētur: Sacculus Iūliī nōn parvus est."
    },
    {
      "lemma": "salūtā, salūtāre",
      "pars": "Verbum",
      "genus": "Coniugātiō I",
      "notatio": "Dīcit 'Salvē': Servus dominum salūtat: 'Salvē, domine!'"
    },
    {
      "lemma": "salvē",
      "pars": "Verbum / Interiectiō",
      "genus": "Imperātīvus sg.",
      "notatio": "Forma salūtandī: Salvē, domine! / Salvē, serve!"
    },
    {
      "lemma": "septem",
      "pars": "Nōmen numerāle indecl.",
      "genus": "—",
      "notatio": "Numerus VII (7)."
    },
    {
      "lemma": "sūmit, sūmere",
      "pars": "Verbum",
      "genus": "Coniugātiō III",
      "notatio": "Manū tollit; ↔ pōnit: Iūlius baculum suum sūmit."
    },
    {
      "lemma": "suus, -a, -um",
      "pars": "Prōnōmen possessīvum",
      "genus": "Masculīnum",
      "notatio": "Ad subiectum pertinēns: Dāvus sacculum suum sūmit."
    },
    {
      "lemma": "tacet, tacēre",
      "pars": "Verbum",
      "genus": "Coniugātiō II",
      "notatio": "Silet, nihil dīcit: Dāvus tacet neque respondet."
    },
    {
      "lemma": "tantum",
      "pars": "Adverbium",
      "genus": "—",
      "notatio": "= sōlum: Decem tantum nummī sunt."
    },
    {
      "lemma": "vacuus, -a, -um",
      "pars": "Nōmen adiectīvum",
      "genus": "Masculīnum",
      "notatio": "In quō nihil inest; ↔ plēnus: Sacculus eius vacuus est."
    },
    {
      "lemma": "vocātīvus, -ī",
      "pars": "Nōmen grammaticum",
      "genus": "Masculīnum",
      "notatio": "Casus quō quis vocātur: 'Dāve!' vocātīvus est."
    }
  ],
  "sectiones": [
    {
      "titulusSectio": "SCAENA PRĪMA",
      "versus": [
        {
          "numerus": "I",
          "marginalia": "sacculus / pecūnia",
          "tokens": [
            {
              "f": "Sacculus",
              "l": "sacculus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Pera parva in quā pecūnia portātur"
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
              "d": "Persōna III sing. praesentis",
              "punc": "."
            },
            {
              "f": "In",
              "l": "in",
              "p": "Praepositiō",
              "c": "cum Ablātīvō",
              "n": "—",
              "g": "—",
              "d": "Indicat locum ubi aliquid inest"
            },
            {
              "f": "sacculō",
              "l": "sacculus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Ablātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Ablātīvus locī post 'in'"
            },
            {
              "f": "eius",
              "l": "is, ea, id",
              "p": "Prōnōmen dēmōnstrātīvum",
              "c": "Genetīvus",
              "n": "Singulāris",
              "g": "Omnia genera",
              "d": "Genetīvus possessīvus: in sacculō eius"
            },
            {
              "f": "est",
              "l": "esse",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Persōna III sing. praesentis"
            },
            {
              "f": "pecūnia",
              "l": "pecūnia, -ae",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Nummī, dīvitiae",
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
              "f": "pecūniam",
              "l": "pecūnia, -ae",
              "p": "Nōmen substantīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Accūsātīvus in -am: habet pecūniam"
            },
            {
              "f": "in",
              "l": "in",
              "p": "Praepositiō",
              "c": "cum Ablātīvō",
              "n": "—",
              "g": "—",
              "d": "Indicat locum ubi aliquid inest"
            },
            {
              "f": "sacculō",
              "l": "sacculus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Ablātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Ablātīvus locī post 'in'"
            },
            {
              "f": "habet",
              "l": "habēre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Possidet (-et)",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "nummus",
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
              "f": "sacculum",
              "l": "sacculus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Accūsātīvus in -um: sacculum pōnit"
            },
            {
              "f": "videt",
              "l": "vidēre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Oculīs percipit (-et)"
            },
            {
              "f": "Iūliumque",
              "l": "Iūlius, -ī + -que",
              "p": "Nōmen proprium + Coniūnctiō",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "= et Iūlium"
            },
            {
              "f": "interrogat",
              "l": "interrogāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Quaestionem pōnit (-at)",
              "punc": ":"
            },
            {
              "f": "Quot",
              "l": "quot",
              "p": "Nōmen numerāle indecl.",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Quot nummī sunt?",
              "lead": "\""
            },
            {
              "f": "nummī",
              "l": "nummus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus",
              "n": "Plūrālis",
              "g": "Masculīnum",
              "d": "Plūrāle: nummus -> nummī"
            },
            {
              "f": "sunt",
              "l": "esse",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Plūrālis",
              "g": "—",
              "d": "Persōna III plūr. praesentis"
            },
            {
              "f": "in",
              "l": "in",
              "p": "Praepositiō",
              "c": "cum Ablātīvō",
              "n": "—",
              "g": "—",
              "d": "Indicat locum ubi aliquid inest"
            },
            {
              "f": "sacculō",
              "l": "sacculus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Ablātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Ablātīvus locī post 'in'"
            },
            {
              "f": "tuō",
              "l": "tuus, -a, -um",
              "p": "Prōnōmen possessīvum",
              "c": "Ablātīvus",
              "n": "Singulāris",
              "g": "Masculīnum / Neut.",
              "d": "in sacculō tuō",
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
              "d": "Vir Rōmānus, pater familiae"
            },
            {
              "f": "respondet",
              "l": "respondēre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Ad interrogātum dīcit (-et)",
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
              "lead": "\"",
              "punc": ".\""
            }
          ]
        },
        {
          "numerus": "V",
          "marginalia": "",
          "tokens": [
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
              "f": "Num",
              "l": "num",
              "p": "Particula interrogātīva",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Exspectat respōnsum negātīvum ('nōn')",
              "lead": "\""
            },
            {
              "f": "hīc",
              "l": "hīc",
              "p": "Adverbium locī",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "In hoc locō"
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
              "f": "nummī",
              "l": "nummus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus",
              "n": "Plūrālis",
              "g": "Masculīnum",
              "d": "Plūrāle: nummus -> nummī"
            },
            {
              "f": "sunt",
              "l": "esse",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Plūrālis",
              "g": "—",
              "d": "Persōna III plūr. praesentis",
              "punc": "?\""
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "numerat < numerus",
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
              "f": "pecūniam",
              "l": "pecūnia, -ae",
              "p": "Nōmen substantīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Accūsātīvus in -am: habet pecūniam"
            },
            {
              "f": "numerat",
              "l": "numerāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Numerum computat (ūnus, duo...)",
              "punc": ":"
            },
            {
              "f": "Ūnus",
              "l": "ūnus, -a, -um",
              "p": "Nōmen numerāle",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Numerus I",
              "lead": "\"",
              "punc": ","
            },
            {
              "f": "duo",
              "l": "duo, duae, duo",
              "p": "Nōmen numerāle",
              "c": "Nōminātīvus",
              "n": "Plūrālis",
              "g": "Masculīnum / Neut.",
              "d": "Numerus II",
              "punc": ","
            },
            {
              "f": "trēs",
              "l": "trēs, tria",
              "p": "Nōmen numerāle",
              "c": "Nōminātīvus",
              "n": "Plūrālis",
              "g": "Masculīnum / Fēminīnum",
              "d": "Numerus III",
              "punc": ","
            },
            {
              "f": "quattuor",
              "l": "quattuor",
              "p": "Nōmen numerāle indecl.",
              "c": "—",
              "n": "Plūrālis",
              "g": "—",
              "d": "Numerus IV (4)",
              "punc": ","
            },
            {
              "f": "quīnque",
              "l": "quīnque",
              "p": "Nōmen numerāle indecl.",
              "c": "—",
              "n": "Plūrālis",
              "g": "—",
              "d": "Numerus V (5)",
              "punc": ","
            },
            {
              "f": "sex",
              "l": "sex",
              "p": "Nōmen numerāle indecl.",
              "c": "—",
              "n": "Plūrālis",
              "g": "—",
              "d": "Numerus VI (6)",
              "punc": ","
            },
            {
              "f": "septem",
              "l": "septem",
              "p": "Nōmen numerāle indecl.",
              "c": "—",
              "n": "Plūrālis",
              "g": "—",
              "d": "Numerus VII (7)",
              "punc": ","
            },
            {
              "f": "octō",
              "l": "octō",
              "p": "Nōmen numerāle indecl.",
              "c": "—",
              "n": "Plūrālis",
              "g": "—",
              "d": "Numerus VIII (8)",
              "punc": ","
            },
            {
              "f": "novem",
              "l": "novem",
              "p": "Nōmen numerāle indecl.",
              "c": "—",
              "n": "Plūrālis",
              "g": "—",
              "d": "Numerus IX (9)",
              "punc": ","
            },
            {
              "f": "decem",
              "l": "decem",
              "p": "Nōmen numerāle indecl.",
              "c": "—",
              "n": "Plūrālis",
              "g": "—",
              "d": "Numerus X (10)",
              "punc": ".\""
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "tantum = sōlum",
          "tokens": [
            {
              "f": "Quid",
              "l": "quis, quid",
              "p": "Prōnōmen interrogātīvum",
              "c": "Nōminātīvus / Acc.",
              "n": "Singulāris",
              "g": "Neutrum",
              "d": "Quid est?",
              "lead": "\"",
              "punc": "?"
            },
            {
              "f": "Decem",
              "l": "decem",
              "p": "Nōmen numerāle indecl.",
              "c": "—",
              "n": "Plūrālis",
              "g": "—",
              "d": "Numerus X (10)"
            },
            {
              "f": "tantum",
              "l": "tantum",
              "p": "Adverbium",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Sōlum, nōn amplius",
              "punc": "?\""
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "rūrsus = iterum",
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
              "f": "rūrsus",
              "l": "rūrsus",
              "p": "Adverbium",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Iterum, dē integrō"
            },
            {
              "f": "pecūniam",
              "l": "pecūnia, -ae",
              "p": "Nōmen substantīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Accūsātīvus in -am: habet pecūniam"
            },
            {
              "f": "numerat",
              "l": "numerāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Numerum computat (ūnus, duo...)",
              "punc": ":"
            },
            {
              "f": "Ūnus",
              "l": "ūnus, -a, -um",
              "p": "Nōmen numerāle",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Numerus I",
              "lead": "\"",
              "punc": ","
            },
            {
              "f": "duo",
              "l": "duo, duae, duo",
              "p": "Nōmen numerāle",
              "c": "Nōminātīvus",
              "n": "Plūrālis",
              "g": "Masculīnum / Neut.",
              "d": "Numerus II",
              "punc": ","
            },
            {
              "f": "trēs",
              "l": "trēs, tria",
              "p": "Nōmen numerāle",
              "c": "Nōminātīvus",
              "n": "Plūrālis",
              "g": "Masculīnum / Fēminīnum",
              "d": "Numerus III",
              "punc": ","
            },
            {
              "f": "quattuor",
              "l": "quattuor",
              "p": "Nōmen numerāle indecl.",
              "c": "—",
              "n": "Plūrālis",
              "g": "—",
              "d": "Numerus IV (4)",
              "punc": "..."
            },
            {
              "f": "novem",
              "l": "novem",
              "p": "Nōmen numerāle indecl.",
              "c": "—",
              "n": "Plūrālis",
              "g": "—",
              "d": "Numerus IX (9)",
              "punc": ","
            },
            {
              "f": "decem",
              "l": "decem",
              "p": "Nōmen numerāle indecl.",
              "c": "—",
              "n": "Plūrālis",
              "g": "—",
              "d": "Numerus X (10)",
              "punc": ".\""
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "",
          "tokens": [
            {
              "f": "Numerus",
              "l": "Numerus",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Numerus"
            },
            {
              "f": "nummōrum",
              "l": "nummus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Genetīvus",
              "n": "Plūrālis",
              "g": "Masculīnum",
              "d": "Genetīvus plūrālis in -ōrum"
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
              "d": "Persōna III sing. praesentis"
            },
            {
              "f": "centum",
              "l": "centum",
              "p": "Nōmen numerāle indecl.",
              "c": "—",
              "n": "Plūrālis",
              "g": "—",
              "d": "Numerus C (100)",
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
              "f": "decem",
              "l": "decem",
              "p": "Nōmen numerāle indecl.",
              "c": "—",
              "n": "Plūrālis",
              "g": "—",
              "d": "Numerus X (10)"
            },
            {
              "f": "tantum",
              "l": "tantum",
              "p": "Adverbium",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Sōlum, nōn amplius",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "X",
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
              "f": "Quid",
              "l": "quis, quid",
              "p": "Prōnōmen interrogātīvum",
              "c": "Nōminātīvus / Acc.",
              "n": "Singulāris",
              "g": "Neutrum",
              "d": "Quid est?",
              "lead": "\"",
              "punc": "?"
            },
            {
              "f": "In",
              "l": "in",
              "p": "Praepositiō",
              "c": "cum Ablātīvō",
              "n": "—",
              "g": "—",
              "d": "Indicat locum ubi aliquid inest"
            },
            {
              "f": "sacculō",
              "l": "sacculus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Ablātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Ablātīvus locī post 'in'"
            },
            {
              "f": "meō",
              "l": "meus, -a, -um",
              "p": "Prōnōmen possessīvum",
              "c": "Ablātīvus",
              "n": "Singulāris",
              "g": "Masculīnum / Neut.",
              "d": "in sacculō meō"
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
              "f": "centum",
              "l": "centum",
              "p": "Nōmen numerāle indecl.",
              "c": "—",
              "n": "Plūrālis",
              "g": "—",
              "d": "Numerus C (100)",
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
              "f": "tantum",
              "l": "tantum",
              "p": "Adverbium",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Sōlum, nōn amplius"
            },
            {
              "f": "decem",
              "l": "decem",
              "p": "Nōmen numerāle indecl.",
              "c": "—",
              "n": "Plūrālis",
              "g": "—",
              "d": "Numerus X (10)"
            },
            {
              "f": "nummī",
              "l": "nummus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus",
              "n": "Plūrālis",
              "g": "Masculīnum",
              "d": "Plūrāle: nummus -> nummī"
            },
            {
              "f": "sunt",
              "l": "esse",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Plūrālis",
              "g": "—",
              "d": "Persōna III plūr. praesentis",
              "punc": "!\""
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
              "p": "Adverbium interrogātīvum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Quaerit locum",
              "lead": "\""
            },
            {
              "f": "sunt",
              "l": "esse",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Plūrālis",
              "g": "—",
              "d": "Persōna III plūr. praesentis"
            },
            {
              "f": "cēterī",
              "l": "cēterī, -ae, -a",
              "p": "Nōmen adiectīvum",
              "c": "Nōminātīvus",
              "n": "Plūrālis",
              "g": "Masculīnum",
              "d": "Reliquī servī / nummī"
            },
            {
              "f": "nummī",
              "l": "nummus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus",
              "n": "Plūrālis",
              "g": "Masculīnum",
              "d": "Plūrāle: nummus -> nummī",
              "punc": "?"
            },
            {
              "f": "Servī",
              "l": "servus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Genetīvus / Nōm. plūr.",
              "n": "Singulāris / Plūr.",
              "g": "Masculīnum",
              "d": "Plūrāle: servī"
            },
            {
              "f": "meī",
              "l": "meus, -a, -um",
              "p": "Prōnōmen possessīvum",
              "c": "Nōm. plūr. / Genetīvus",
              "n": "Plūrālis / Sing.",
              "g": "Masculīnum",
              "d": "nummī meī / servī meī"
            },
            {
              "f": "ubi",
              "l": "ubi",
              "p": "Adverbium interrogātīvum",
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
              "d": "Persōna III plūr. praesentis",
              "punc": "?\""
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "ad-est = hīc est",
          "tokens": [
            {
              "f": "Mēdus",
              "l": "Mēdus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Servus Iūliī improbus qui pecūniam habet",
              "punc": ":"
            },
            {
              "f": "Servus",
              "l": "servus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Homo dominō serviēns",
              "lead": "\""
            },
            {
              "f": "tuus",
              "l": "tuus, -a, -um",
              "p": "Prōnōmen possessīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "nummus tuus"
            },
            {
              "f": "Mēdus",
              "l": "Mēdus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Servus Iūliī improbus qui pecūniam habet"
            },
            {
              "f": "hīc",
              "l": "hīc",
              "p": "Adverbium locī",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "In hoc locō"
            },
            {
              "f": "est",
              "l": "esse",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Persōna III sing. praesentis",
              "punc": ".\""
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "ab-est ↔ ad-est",
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
              "f": "servum",
              "l": "servus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Accūsātīvus: servum salūtat"
            },
            {
              "f": "suum",
              "l": "suus, -a, -um",
              "p": "Prōnōmen possessīvum reflexīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum / Neut.",
              "d": "Accūsātīvus: sacculum suum / baculum suum"
            },
            {
              "f": "Mēdum",
              "l": "Mēdus, -ī",
              "p": "Nōmen proprium",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Accūsātīvus: Iūlius Mēdum vocat"
            },
            {
              "f": "videt",
              "l": "vidēre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Oculīs percipit (-et)",
              "punc": ","
            },
            {
              "f": "Dāvum",
              "l": "Dāvus, -ī",
              "p": "Nōmen proprium",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Accūsātīvus: Mēdus Dāvum vocat"
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
              "f": "videt",
              "l": "vidēre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Oculīs percipit (-et)",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "ad-sunt = hīc sunt",
          "tokens": [
            {
              "f": "Mēdus",
              "l": "Mēdus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Servus Iūliī improbus qui pecūniam habet"
            },
            {
              "f": "adest",
              "l": "adesse",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "= hīc est; ↔ abest",
              "punc": "."
            },
            {
              "f": "Dāvus",
              "l": "Dāvus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Servus Iūliī bonus"
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
              "f": "adest",
              "l": "adesse",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "= hīc est; ↔ abest",
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
              "f": "abest",
              "l": "abesse",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "↔ adest; nōn hīc est",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "XV",
          "marginalia": "ab-sunt ↔ ad-sunt",
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
              "f": "et",
              "l": "et",
              "p": "Coniūnctiō",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Coniunctio copulātīva"
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
              "d": "Servus Iūliī improbus qui pecūniam habet"
            },
            {
              "f": "adsunt",
              "l": "adesse",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Plūrālis",
              "g": "—",
              "d": "Persōna III plūr.: hīc sunt",
              "punc": "."
            },
            {
              "f": "Dāvus",
              "l": "Dāvus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Servus Iūliī bonus"
            },
            {
              "f": "cēterīque",
              "l": "cēterī, -ae, -a + -que",
              "p": "Nōmen adiectīvum + Coniūnctiō enclitica",
              "c": "Nōminātīvus",
              "n": "Plūrālis",
              "g": "Masculīnum",
              "d": "cēterī + -que (= et cēterī)"
            },
            {
              "f": "servī",
              "l": "servus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Genetīvus / Nōm. plūr.",
              "n": "Singulāris / Plūr.",
              "g": "Masculīnum",
              "d": "Plūrāle: servī"
            },
            {
              "f": "absunt",
              "l": "abesse",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Plūrālis",
              "g": "—",
              "d": "Persōna III plūr.: nōn hīc sunt",
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
              "d": "Vir Rōmānus, pater familiae",
              "punc": ":"
            },
            {
              "f": "Quid",
              "l": "quis, quid",
              "p": "Prōnōmen interrogātīvum",
              "c": "Nōminātīvus / Acc.",
              "n": "Singulāris",
              "g": "Neutrum",
              "d": "Quid est?",
              "lead": "\"",
              "punc": "?"
            },
            {
              "f": "Ūnus",
              "l": "ūnus, -a, -um",
              "p": "Nōmen numerāle",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Numerus I"
            },
            {
              "f": "servus",
              "l": "servus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Homo dominō serviēns"
            },
            {
              "f": "tantum",
              "l": "tantum",
              "p": "Adverbium",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Sōlum, nōn amplius"
            },
            {
              "f": "adest",
              "l": "adesse",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "= hīc est; ↔ abest",
              "punc": "!"
            },
            {
              "f": "Ubi",
              "l": "ubi",
              "p": "Adverbium interrogātīvum",
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
              "d": "Persōna III sing. praesentis"
            },
            {
              "f": "Dāvus",
              "l": "Dāvus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Servus Iūliī bonus",
              "punc": "?"
            },
            {
              "f": "Dāvum",
              "l": "Dāvus, -ī",
              "p": "Nōmen proprium",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Accūsātīvus: Mēdus Dāvum vocat"
            },
            {
              "f": "vocā",
              "l": "vocāre",
              "p": "Verbum",
              "c": "Imperātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Imperātīvus: Dāvum vocā!",
              "punc": "!\""
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "Mēdus Dāvum vocat",
          "tokens": [
            {
              "f": "Mēdus",
              "l": "Mēdus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Servus Iūliī improbus qui pecūniam habet"
            },
            {
              "f": "Dāvum",
              "l": "Dāvus, -ī",
              "p": "Nōmen proprium",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Accūsātīvus: Mēdus Dāvum vocat"
            },
            {
              "f": "vocat",
              "l": "vocāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Nōmine compellat (-at)",
              "punc": ":"
            },
            {
              "f": "Dāve",
              "l": "Dāvus, -ī",
              "p": "Nōmen proprium",
              "c": "Vocātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Vocātīvus in -e: Salūtat: 'Dāve!'",
              "lead": "\"",
              "punc": "!\""
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "",
          "tokens": [
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
              "f": "Dāvus",
              "l": "Dāvus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Servus Iūliī bonus"
            },
            {
              "f": "Mēdum",
              "l": "Mēdus, -ī",
              "p": "Nōmen proprium",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Accūsātīvus: Iūlius Mēdum vocat"
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
              "f": "audit",
              "l": "audīre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Auribus percipit (-it)"
            },
            {
              "f": "neque",
              "l": "neque",
              "p": "Coniūnctiō",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "= et nōn"
            },
            {
              "f": "venit",
              "l": "venīre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Accēdit, advenit (-it)",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "Venī! (imperātīvus)",
          "tokens": [
            {
              "f": "Mēdus",
              "l": "Mēdus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Servus Iūliī improbus qui pecūniam habet"
            },
            {
              "f": "rūrsus",
              "l": "rūrsus",
              "p": "Adverbium",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Iterum, dē integrō"
            },
            {
              "f": "Dāvum",
              "l": "Dāvus, -ī",
              "p": "Nōmen proprium",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Accūsātīvus: Mēdus Dāvum vocat"
            },
            {
              "f": "vocat",
              "l": "vocāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Nōmine compellat (-at)",
              "punc": ":"
            },
            {
              "f": "Da-ā-ve",
              "l": "Dāvus, -ī",
              "p": "Nōmen proprium",
              "c": "Vocātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Vocātīvus cum sonō prōtractō clāmāntis",
              "lead": "\"",
              "punc": "!"
            },
            {
              "f": "Venī",
              "l": "venīre",
              "p": "Verbum",
              "c": "Imperātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Imperātīvus: Venī hūc!",
              "punc": "!\""
            }
          ]
        },
        {
          "numerus": "XX",
          "marginalia": "",
          "tokens": [
            {
              "f": "Dāvus",
              "l": "Dāvus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Servus Iūliī bonus"
            },
            {
              "f": "venit",
              "l": "venīre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Accēdit, advenit (-it)",
              "punc": "."
            },
            {
              "f": "Iam",
              "l": "iam",
              "p": "Adverbium",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Hoc ipsō tempore, nōndum -> iam"
            },
            {
              "f": "duo",
              "l": "duo, duae, duo",
              "p": "Nōmen numerāle",
              "c": "Nōminātīvus",
              "n": "Plūrālis",
              "g": "Masculīnum / Neut.",
              "d": "Numerus II"
            },
            {
              "f": "servī",
              "l": "servus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Genetīvus / Nōm. plūr.",
              "n": "Singulāris / Plūr.",
              "g": "Masculīnum",
              "d": "Plūrāle: servī"
            },
            {
              "f": "adsunt",
              "l": "adesse",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Plūrālis",
              "g": "—",
              "d": "Persōna III plūr.: hīc sunt",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "",
          "tokens": [
            {
              "f": "Dāvus",
              "l": "Dāvus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Servus Iūliī bonus",
              "punc": ","
            },
            {
              "f": "quī",
              "l": "quī, quae, quod",
              "p": "Prōnōmen relātīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris / Plūr.",
              "g": "Masculīnum",
              "d": "Puer quī cantat / rīdet"
            },
            {
              "f": "dominum",
              "l": "dominus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Accūsātīvus: salūtā dominum"
            },
            {
              "f": "suum",
              "l": "suus, -a, -um",
              "p": "Prōnōmen possessīvum reflexīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum / Neut.",
              "d": "Accūsātīvus: sacculum suum / baculum suum"
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
              "f": "videt",
              "l": "vidēre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Oculīs percipit (-et)",
              "punc": ","
            },
            {
              "f": "Mēdum",
              "l": "Mēdus, -ī",
              "p": "Nōmen proprium",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Accūsātīvus: Iūlius Mēdum vocat"
            },
            {
              "f": "interrogat",
              "l": "interrogāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Quaestionem pōnit (-at)",
              "punc": ":"
            },
            {
              "f": "Quid",
              "l": "quis, quid",
              "p": "Prōnōmen interrogātīvum",
              "c": "Nōminātīvus / Acc.",
              "n": "Singulāris",
              "g": "Neutrum",
              "d": "Quid est?",
              "lead": "\""
            },
            {
              "f": "est",
              "l": "esse",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Persōna III sing. praesentis",
              "punc": ","
            },
            {
              "f": "Mēde",
              "l": "Mēdus, -ī",
              "p": "Nōmen proprium",
              "c": "Vocātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Vocātīvus in -e: 'Quid est, Mēde?'",
              "punc": "?\""
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
              "d": "Servus Iūliī improbus qui pecūniam habet",
              "punc": ":"
            },
            {
              "f": "St",
              "l": "st",
              "p": "Interiectiō",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Vōx silentium poscentis",
              "lead": "\"",
              "punc": "!"
            },
            {
              "f": "Dominus",
              "l": "dominus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Qui servōs et familiam possidet"
            },
            {
              "f": "adest",
              "l": "adesse",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "= hīc est; ↔ abest",
              "punc": "."
            },
            {
              "f": "Salūtā",
              "l": "salūtāre",
              "p": "Verbum",
              "c": "Imperātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Imperātīvus: Salūtā dominum!"
            },
            {
              "f": "dominum",
              "l": "dominus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Accūsātīvus: salūtā dominum",
              "punc": "!\""
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "servus dominum salūtat",
          "tokens": [
            {
              "f": "Servus",
              "l": "servus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Homo dominō serviēns"
            },
            {
              "f": "dominum",
              "l": "dominus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Accūsātīvus: salūtā dominum"
            },
            {
              "f": "salūtat",
              "l": "salūtāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Dīcit 'Salvē!'",
              "punc": ":"
            },
            {
              "f": "Salvē",
              "l": "salvēre",
              "p": "Verbum / Interiectiō",
              "c": "Imperātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Salūtātiō Rōmāna: 'Salvē, domine!'",
              "lead": "\"",
              "punc": ","
            },
            {
              "f": "domine",
              "l": "dominus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Vocātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Vocātīvus in -e: 'Salvē, domine!'",
              "punc": "!\""
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "Salvē, serve!",
          "tokens": [
            {
              "f": "Dominus",
              "l": "dominus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Qui servōs et familiam possidet"
            },
            {
              "f": "servum",
              "l": "servus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Accūsātīvus: servum salūtat"
            },
            {
              "f": "salūtat",
              "l": "salūtāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Dīcit 'Salvē!'",
              "punc": ":"
            },
            {
              "f": "Salvē",
              "l": "salvēre",
              "p": "Verbum / Interiectiō",
              "c": "Imperātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Salūtātiō Rōmāna: 'Salvē, domine!'",
              "lead": "\"",
              "punc": ","
            },
            {
              "f": "serve",
              "l": "servus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Vocātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Vocātīvus in -e: 'Salvē, serve!'",
              "punc": "!\""
            }
          ]
        },
        {
          "numerus": "XXV",
          "marginalia": "",
          "tokens": [
            {
              "f": "Dāvus",
              "l": "Dāvus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Servus Iūliī bonus",
              "punc": ":"
            },
            {
              "f": "Quid",
              "l": "quis, quid",
              "p": "Prōnōmen interrogātīvum",
              "c": "Nōminātīvus / Acc.",
              "n": "Singulāris",
              "g": "Neutrum",
              "d": "Quid est?",
              "lead": "\""
            },
            {
              "f": "est",
              "l": "esse",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Persōna III sing. praesentis",
              "punc": ","
            },
            {
              "f": "domine",
              "l": "dominus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Vocātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Vocātīvus in -e: 'Salvē, domine!'",
              "punc": "?\""
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "Tacē! Audī!",
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
              "f": "St",
              "l": "st",
              "p": "Interiectiō",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Vōx silentium poscentis",
              "lead": "\"",
              "punc": "!"
            },
            {
              "f": "Tacē",
              "l": "tacēre",
              "p": "Verbum",
              "c": "Imperātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Imperātīvus: Tacē, serve!",
              "punc": ","
            },
            {
              "f": "serve",
              "l": "servus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Vocātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Vocātīvus in -e: 'Salvē, serve!'",
              "punc": "!"
            },
            {
              "f": "Tacē",
              "l": "tacēre",
              "p": "Verbum",
              "c": "Imperātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Imperātīvus: Tacē, serve!"
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
              "f": "audī",
              "l": "audīre",
              "p": "Verbum",
              "c": "Imperātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Imperātīvus: Tacē et audī!",
              "punc": "!\""
            },
            {
              "f": "Servus",
              "l": "servus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Homo dominō serviēns"
            },
            {
              "f": "tacet",
              "l": "tacēre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Nihil dīcit, silet (-et)",
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
              "d": "Indicat locum ubi aliquid inest",
              "lead": "\""
            },
            {
              "f": "sacculō",
              "l": "sacculus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Ablātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Ablātīvus locī post 'in'"
            },
            {
              "f": "meō",
              "l": "meus, -a, -um",
              "p": "Prōnōmen possessīvum",
              "c": "Ablātīvus",
              "n": "Singulāris",
              "g": "Masculīnum / Neut.",
              "d": "in sacculō meō"
            },
            {
              "f": "sunt",
              "l": "esse",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Plūrālis",
              "g": "—",
              "d": "Persōna III plūr. praesentis"
            },
            {
              "f": "decem",
              "l": "decem",
              "p": "Nōmen numerāle indecl.",
              "c": "—",
              "n": "Plūrālis",
              "g": "—",
              "d": "Numerus X (10)"
            },
            {
              "f": "tantum",
              "l": "tantum",
              "p": "Adverbium",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Sōlum, nōn amplius"
            },
            {
              "f": "nummī",
              "l": "nummus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus",
              "n": "Plūrālis",
              "g": "Masculīnum",
              "d": "Plūrāle: nummus -> nummī",
              "punc": "."
            },
            {
              "f": "Ubi",
              "l": "ubi",
              "p": "Adverbium interrogātīvum",
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
              "d": "Persōna III plūr. praesentis"
            },
            {
              "f": "cēterī",
              "l": "cēterī, -ae, -a",
              "p": "Nōmen adiectīvum",
              "c": "Nōminātīvus",
              "n": "Plūrālis",
              "g": "Masculīnum",
              "d": "Reliquī servī / nummī"
            },
            {
              "f": "nummī",
              "l": "nummus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus",
              "n": "Plūrālis",
              "g": "Masculīnum",
              "d": "Plūrāle: nummus -> nummī"
            },
            {
              "f": "meī",
              "l": "meus, -a, -um",
              "p": "Prōnōmen possessīvum",
              "c": "Nōm. plūr. / Genetīvus",
              "n": "Plūrālis / Sing.",
              "g": "Masculīnum",
              "d": "nummī meī / servī meī",
              "punc": "?\""
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "",
          "tokens": [
            {
              "f": "Dāvus",
              "l": "Dāvus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Servus Iūliī bonus"
            },
            {
              "f": "tacet",
              "l": "tacēre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Nihil dīcit, silet (-et)",
              "punc": ","
            },
            {
              "f": "neque",
              "l": "neque",
              "p": "Coniūnctiō",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "= et nōn"
            },
            {
              "f": "respondet",
              "l": "respondēre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Ad interrogātum dīcit (-et)",
              "punc": "."
            }
          ]
        }
      ]
    },
    {
      "titulusSectio": "SCAENA SECVNDA",
      "versus": [
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
              "d": "Fēmina Rōmāna, māter",
              "punc": ":"
            },
            {
              "f": "Respondē",
              "l": "respondēre",
              "p": "Verbum",
              "c": "Imperātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Imperātīvus: Respondē, Dāve!",
              "lead": "\"",
              "punc": ","
            },
            {
              "f": "Dāve",
              "l": "Dāvus, -ī",
              "p": "Nōmen proprium",
              "c": "Vocātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Vocātīvus in -e: Salūtat: 'Dāve!'",
              "punc": "!"
            },
            {
              "f": "Dominus",
              "l": "dominus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Qui servōs et familiam possidet"
            },
            {
              "f": "tē",
              "l": "tū",
              "p": "Prōnōmen persōnāle",
              "c": "Accūsātīvus / Ablātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Persōna II: Iūlia tē vocat"
            },
            {
              "f": "interrogat",
              "l": "interrogāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Quaestionem pōnit (-at)",
              "punc": ".\""
            }
          ]
        },
        {
          "numerus": "XXX",
          "marginalia": "",
          "tokens": [
            {
              "f": "Dāvus",
              "l": "Dāvus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Servus Iūliī bonus"
            },
            {
              "f": "respondet",
              "l": "respondēre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Ad interrogātum dīcit (-et)",
              "punc": ":"
            },
            {
              "f": "Pecūnia",
              "l": "pecūnia, -ae",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Nummī, dīvitiae",
              "lead": "\""
            },
            {
              "f": "tua",
              "l": "tuus, -a, -um",
              "p": "Prōnōmen possessīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "pecūnia tua"
            },
            {
              "f": "hīc",
              "l": "hīc",
              "p": "Adverbium locī",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "In hoc locō"
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
              "d": "Persōna III sing. praesentis",
              "punc": "."
            },
            {
              "f": "Interrogā",
              "l": "interrogāre",
              "p": "Verbum",
              "c": "Imperātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Imperātīvus: Interrogā Mēdum!"
            },
            {
              "f": "Mēdum",
              "l": "Mēdus, -ī",
              "p": "Nōmen proprium",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Accūsātīvus: Iūlius Mēdum vocat",
              "punc": "!\""
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "nūllum verbum",
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
              "f": "Mēdum",
              "l": "Mēdus, -ī",
              "p": "Nōmen proprium",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Accūsātīvus: Iūlius Mēdum vocat"
            },
            {
              "f": "interrogat",
              "l": "interrogāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Quaestionem pōnit (-at)",
              "punc": ":"
            },
            {
              "f": "Ubi",
              "l": "ubi",
              "p": "Adverbium interrogātīvum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Quaerit locum",
              "lead": "\""
            },
            {
              "f": "sunt",
              "l": "esse",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Plūrālis",
              "g": "—",
              "d": "Persōna III plūr. praesentis"
            },
            {
              "f": "nummī",
              "l": "nummus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus",
              "n": "Plūrālis",
              "g": "Masculīnum",
              "d": "Plūrāle: nummus -> nummī"
            },
            {
              "f": "meī",
              "l": "meus, -a, -um",
              "p": "Prōnōmen possessīvum",
              "c": "Nōm. plūr. / Genetīvus",
              "n": "Plūrālis / Sing.",
              "g": "Masculīnum",
              "d": "nummī meī / servī meī",
              "punc": ","
            },
            {
              "f": "Mēde",
              "l": "Mēdus, -ī",
              "p": "Nōmen proprium",
              "c": "Vocātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Vocātīvus in -e: 'Quid est, Mēde?'",
              "punc": "?\""
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
              "d": "Servus Iūliī improbus qui pecūniam habet"
            },
            {
              "f": "nūllum",
              "l": "nūllus, -a, -um",
              "p": "Nōmen adiectīvum / Prōnōmen",
              "c": "Accūsātīvus / Neut.",
              "n": "Singulāris",
              "g": "Masculīnum / Neut.",
              "d": "nūllum verbum"
            },
            {
              "f": "verbum",
              "l": "verbum, -ī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Acc.",
              "n": "Singulāris",
              "g": "Neutrum",
              "d": "Vocābulum / pars ōrātiōnis"
            },
            {
              "f": "respondet",
              "l": "respondēre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Ad interrogātum dīcit (-et)",
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
              "f": "rūrsus",
              "l": "rūrsus",
              "p": "Adverbium",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Iterum, dē integrō"
            },
            {
              "f": "eum",
              "l": "is, ea, id",
              "p": "Prōnōmen dēmōnstrātīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Accūsātīvus: Iūlius eum audit"
            },
            {
              "f": "interrogat",
              "l": "interrogāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Quaestionem pōnit (-at)",
              "punc": ":"
            },
            {
              "f": "Ubi",
              "l": "ubi",
              "p": "Adverbium interrogātīvum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Quaerit locum",
              "lead": "\""
            },
            {
              "f": "est",
              "l": "esse",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Persōna III sing. praesentis"
            },
            {
              "f": "pecūnia",
              "l": "pecūnia, -ae",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Nummī, dīvitiae"
            },
            {
              "f": "mea",
              "l": "meus, -a, -um",
              "p": "Prōnōmen possessīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "pecūnia mea",
              "punc": "?"
            },
            {
              "f": "Respondē",
              "l": "respondēre",
              "p": "Verbum",
              "c": "Imperātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Imperātīvus: Respondē, Dāve!",
              "punc": ","
            },
            {
              "f": "serve",
              "l": "servus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Vocātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Vocātīvus in -e: 'Salvē, serve!'",
              "punc": "!\""
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "accūsat",
          "tokens": [
            {
              "f": "Mēdus",
              "l": "Mēdus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Servus Iūliī improbus qui pecūniam habet"
            },
            {
              "f": "Dāvum",
              "l": "Dāvus, -ī",
              "p": "Nōmen proprium",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Accūsātīvus: Mēdus Dāvum vocat"
            },
            {
              "f": "accūsat",
              "l": "accūsāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Culpam in alium cōnicit",
              "punc": ":"
            },
            {
              "f": "Pecūnia",
              "l": "pecūnia, -ae",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Nummī, dīvitiae",
              "lead": "\""
            },
            {
              "f": "tua",
              "l": "tuus, -a, -um",
              "p": "Prōnōmen possessīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "pecūnia tua"
            },
            {
              "f": "in",
              "l": "in",
              "p": "Praepositiō",
              "c": "cum Ablātīvō",
              "n": "—",
              "g": "—",
              "d": "Indicat locum ubi aliquid inest"
            },
            {
              "f": "sacculō",
              "l": "sacculus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Ablātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Ablātīvus locī post 'in'"
            },
            {
              "f": "Dāvī",
              "l": "Dāvus, -ī",
              "p": "Nōmen proprium",
              "c": "Genetīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Genetīvus: sacculus Dāvī"
            },
            {
              "f": "est",
              "l": "esse",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Persōna III sing. praesentis",
              "punc": "."
            },
            {
              "f": "Dāvus",
              "l": "Dāvus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Servus Iūliī bonus"
            },
            {
              "f": "pecūniam",
              "l": "pecūnia, -ae",
              "p": "Nōmen substantīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Accūsātīvus in -am: habet pecūniam"
            },
            {
              "f": "tuam",
              "l": "tuus, -a, -um",
              "p": "Prōnōmen possessīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "pecūniam tuam"
            },
            {
              "f": "habet",
              "l": "habēre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Possidet (-et)",
              "punc": ".\""
            }
          ]
        },
        {
          "numerus": "XXXV",
          "marginalia": "",
          "tokens": [
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
              "f": "Audī",
              "l": "audīre",
              "p": "Verbum",
              "c": "Imperātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Imperātīvus: Tacē et audī!",
              "lead": "\"",
              "punc": ","
            },
            {
              "f": "Dāve",
              "l": "Dāvus, -ī",
              "p": "Nōmen proprium",
              "c": "Vocātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Vocātīvus in -e: Salūtat: 'Dāve!'",
              "punc": "!"
            },
            {
              "f": "Mēdus",
              "l": "Mēdus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Servus Iūliī improbus qui pecūniam habet"
            },
            {
              "f": "tē",
              "l": "tū",
              "p": "Prōnōmen persōnāle",
              "c": "Accūsātīvus / Ablātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Persōna II: Iūlia tē vocat"
            },
            {
              "f": "accūsat",
              "l": "accūsāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Culpam in alium cōnicit",
              "punc": ".\""
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "",
          "tokens": [
            {
              "f": "Dāvus",
              "l": "Dāvus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Servus Iūliī bonus",
              "punc": ":"
            },
            {
              "f": "Quem",
              "l": "quī, quae, quod",
              "p": "Prōnōmen relātīvum / Interrog.",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Puer quem Aemilia verberat / Quem vocat?",
              "lead": "\""
            },
            {
              "f": "Mēdus",
              "l": "Mēdus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Servus Iūliī improbus qui pecūniam habet"
            },
            {
              "f": "accūsat",
              "l": "accūsāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Culpam in alium cōnicit",
              "punc": "?"
            },
            {
              "f": "mē",
              "l": "ego",
              "p": "Prōnōmen persōnāle",
              "c": "Accūsātīvus / Ablātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Persōna I: Mārcus mē pulsat",
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
              "f": "Tacē",
              "l": "tacēre",
              "p": "Verbum",
              "c": "Imperātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Imperātīvus: Tacē, serve!",
              "lead": "\"",
              "punc": ","
            },
            {
              "f": "Mēde",
              "l": "Mēdus, -ī",
              "p": "Nōmen proprium",
              "c": "Vocātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Vocātīvus in -e: 'Quid est, Mēde?'",
              "punc": "!"
            },
            {
              "f": "Servus",
              "l": "servus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Homo dominō serviēns"
            },
            {
              "f": "quī",
              "l": "quī, quae, quod",
              "p": "Prōnōmen relātīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris / Plūr.",
              "g": "Masculīnum",
              "d": "Puer quī cantat / rīdet"
            },
            {
              "f": "servum",
              "l": "servus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Accūsātīvus: servum salūtat"
            },
            {
              "f": "accūsat",
              "l": "accūsāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Culpam in alium cōnicit"
            },
            {
              "f": "improbus",
              "l": "improbus, -a, -um",
              "p": "Nōmen adiectīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "↔ probus; malus, iniūstus"
            },
            {
              "f": "est",
              "l": "esse",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Persōna III sing. praesentis",
              "punc": "!\""
            },
            {
              "f": "Mēdus",
              "l": "Mēdus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Servus Iūliī improbus qui pecūniam habet"
            },
            {
              "f": "tacet",
              "l": "tacēre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Nihil dīcit, silet (-et)",
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
              "f": "Dāvum",
              "l": "Dāvus, -ī",
              "p": "Nōmen proprium",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Accūsātīvus: Mēdus Dāvum vocat"
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
              "f": "accūsat",
              "l": "accūsāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Culpam in alium cōnicit",
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
              "f": "interrogat",
              "l": "interrogāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Quaestionem pōnit (-at)"
            },
            {
              "f": "eum",
              "l": "is, ea, id",
              "p": "Prōnōmen dēmōnstrātīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Accūsātīvus: Iūlius eum audit",
              "punc": ":"
            },
            {
              "f": "Estne",
              "l": "esse + -ne",
              "p": "Verbum + Particula",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Est + particula interrogātīva",
              "lead": "\""
            },
            {
              "f": "pecūnia",
              "l": "pecūnia, -ae",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Nummī, dīvitiae"
            },
            {
              "f": "mea",
              "l": "meus, -a, -um",
              "p": "Prōnōmen possessīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "pecūnia mea"
            },
            {
              "f": "in",
              "l": "in",
              "p": "Praepositiō",
              "c": "cum Ablātīvō",
              "n": "—",
              "g": "—",
              "d": "Indicat locum ubi aliquid inest"
            },
            {
              "f": "sacculō",
              "l": "sacculus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Ablātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Ablātīvus locī post 'in'"
            },
            {
              "f": "tuō",
              "l": "tuus, -a, -um",
              "p": "Prōnōmen possessīvum",
              "c": "Ablātīvus",
              "n": "Singulāris",
              "g": "Masculīnum / Neut.",
              "d": "in sacculō tuō",
              "punc": ","
            },
            {
              "f": "Dāve",
              "l": "Dāvus, -ī",
              "p": "Nōmen proprium",
              "c": "Vocātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Vocātīvus in -e: Salūtat: 'Dāve!'",
              "punc": "?\""
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "",
          "tokens": [
            {
              "f": "Dāvus",
              "l": "Dāvus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Servus Iūliī bonus",
              "punc": ":"
            },
            {
              "f": "In",
              "l": "in",
              "p": "Praepositiō",
              "c": "cum Ablātīvō",
              "n": "—",
              "g": "—",
              "d": "Indicat locum ubi aliquid inest",
              "lead": "\""
            },
            {
              "f": "sacculō",
              "l": "sacculus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Ablātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Ablātīvus locī post 'in'"
            },
            {
              "f": "meō",
              "l": "meus, -a, -um",
              "p": "Prōnōmen possessīvum",
              "c": "Ablātīvus",
              "n": "Singulāris",
              "g": "Masculīnum / Neut.",
              "d": "in sacculō meō"
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
              "d": "Persōna III sing. praesentis"
            },
            {
              "f": "pecūnia",
              "l": "pecūnia, -ae",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Nummī, dīvitiae"
            },
            {
              "f": "tua",
              "l": "tuus, -a, -um",
              "p": "Prōnōmen possessīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "pecūnia tua",
              "punc": ","
            },
            {
              "f": "domine",
              "l": "dominus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Vocātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Vocātīvus in -e: 'Salvē, domine!'",
              "punc": ".\""
            }
          ]
        },
        {
          "numerus": "XL",
          "marginalia": "mēnsa",
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
              "f": "Ubi",
              "l": "ubi",
              "p": "Adverbium interrogātīvum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Quaerit locum",
              "lead": "\""
            },
            {
              "f": "est",
              "l": "esse",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Persōna III sing. praesentis"
            },
            {
              "f": "sacculus",
              "l": "sacculus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Pera parva in quā pecūnia portātur"
            },
            {
              "f": "tuus",
              "l": "tuus, -a, -um",
              "p": "Prōnōmen possessīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "nummus tuus",
              "punc": "?\""
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "ecce sacculus",
          "tokens": [
            {
              "f": "Dāvus",
              "l": "Dāvus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Servus Iūliī bonus",
              "punc": ":"
            },
            {
              "f": "Hīc",
              "l": "hīc",
              "p": "Adverbium locī",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "In hoc locō",
              "lead": "\""
            },
            {
              "f": "est",
              "l": "esse",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Persōna III sing. praesentis",
              "punc": "."
            },
            {
              "f": "Ecce",
              "l": "ecce",
              "p": "Interiectiō / Particula",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "= vidē: hīc est!"
            },
            {
              "f": "sacculus",
              "l": "sacculus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Pera parva in quā pecūnia portātur"
            },
            {
              "f": "meus",
              "l": "meus, -a, -um",
              "p": "Prōnōmen possessīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "sacculus meus",
              "punc": ".\""
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "pōne! (imperātīvus)",
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
              "f": "Sacculum",
              "l": "sacculus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Accūsātīvus in -um: sacculum pōnit",
              "lead": "\""
            },
            {
              "f": "tuum",
              "l": "tuus, -a, -um",
              "p": "Prōnōmen possessīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "sacculum tuum"
            },
            {
              "f": "in",
              "l": "in",
              "p": "Praepositiō",
              "c": "cum Ablātīvō",
              "n": "—",
              "g": "—",
              "d": "Indicat locum ubi aliquid inest"
            },
            {
              "f": "mēnsā",
              "l": "mēnsa, -ae",
              "p": "Nōmen substantīvum",
              "c": "Ablātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Ablātīvus locī post 'in': in mēnsā"
            },
            {
              "f": "pōne",
              "l": "pōnere",
              "p": "Verbum",
              "c": "Imperātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Imperātīvus: Sacculum pōne!",
              "punc": "!\""
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "pōnit in mēnsā",
          "tokens": [
            {
              "f": "Dāvus",
              "l": "Dāvus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Servus Iūliī bonus"
            },
            {
              "f": "sacculum",
              "l": "sacculus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Accūsātīvus in -um: sacculum pōnit"
            },
            {
              "f": "suum",
              "l": "suus, -a, -um",
              "p": "Prōnōmen possessīvum reflexīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum / Neut.",
              "d": "Accūsātīvus: sacculum suum / baculum suum"
            },
            {
              "f": "in",
              "l": "in",
              "p": "Praepositiō",
              "c": "cum Ablātīvō",
              "n": "—",
              "g": "—",
              "d": "Indicat locum ubi aliquid inest"
            },
            {
              "f": "mēnsā",
              "l": "mēnsa, -ae",
              "p": "Nōmen substantīvum",
              "c": "Ablātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Ablātīvus locī post 'in': in mēnsā"
            },
            {
              "f": "pōnit",
              "l": "pōnere",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Locat in mēnsā (-it)",
              "punc": "."
            },
            {
              "f": "Iam",
              "l": "iam",
              "p": "Adverbium",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Hoc ipsō tempore, nōndum -> iam"
            },
            {
              "f": "sacculus",
              "l": "sacculus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Pera parva in quā pecūnia portātur"
            },
            {
              "f": "eius",
              "l": "is, ea, id",
              "p": "Prōnōmen dēmōnstrātīvum",
              "c": "Genetīvus",
              "n": "Singulāris",
              "g": "Omnia genera",
              "d": "Genetīvus possessīvus: in sacculō eius"
            },
            {
              "f": "in",
              "l": "in",
              "p": "Praepositiō",
              "c": "cum Ablātīvō",
              "n": "—",
              "g": "—",
              "d": "Indicat locum ubi aliquid inest"
            },
            {
              "f": "mēnsā",
              "l": "mēnsa, -ae",
              "p": "Nōmen substantīvum",
              "c": "Ablātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Ablātīvus locī post 'in': in mēnsā"
            },
            {
              "f": "est",
              "l": "esse",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Persōna III sing. praesentis",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "baculum dominī",
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
              "f": "baculum",
              "l": "baculum, -ī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Acc.",
              "n": "Singulāris",
              "g": "Neutrum",
              "d": "Līgnum quō quis ambulat vel verberat"
            },
            {
              "f": "suum",
              "l": "suus, -a, -um",
              "p": "Prōnōmen possessīvum reflexīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum / Neut.",
              "d": "Accūsātīvus: sacculum suum / baculum suum"
            },
            {
              "f": "in",
              "l": "in",
              "p": "Praepositiō",
              "c": "cum Ablātīvō",
              "n": "—",
              "g": "—",
              "d": "Indicat locum ubi aliquid inest"
            },
            {
              "f": "mēnsā",
              "l": "mēnsa, -ae",
              "p": "Nōmen substantīvum",
              "c": "Ablātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Ablātīvus locī post 'in': in mēnsā"
            },
            {
              "f": "pōnit",
              "l": "pōnere",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Locat in mēnsā (-it)",
              "punc": "."
            },
            {
              "f": "Baculum",
              "l": "baculum, -ī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Acc.",
              "n": "Singulāris",
              "g": "Neutrum",
              "d": "Līgnum quō quis ambulat vel verberat"
            },
            {
              "f": "dominī",
              "l": "dominus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Genetīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Genetīvus: baculum dominī"
            },
            {
              "f": "in",
              "l": "in",
              "p": "Praepositiō",
              "c": "cum Ablātīvō",
              "n": "—",
              "g": "—",
              "d": "Indicat locum ubi aliquid inest"
            },
            {
              "f": "mēnsā",
              "l": "mēnsa, -ae",
              "p": "Nōmen substantīvum",
              "c": "Ablātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Ablātīvus locī post 'in': in mēnsā"
            },
            {
              "f": "est",
              "l": "esse",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Persōna III sing. praesentis",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "XLV",
          "marginalia": "nūlla pecūnia",
          "tokens": [
            {
              "f": "Dāvus",
              "l": "Dāvus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Servus Iūliī bonus",
              "punc": ":"
            },
            {
              "f": "Vidē",
              "l": "vidēre",
              "p": "Verbum",
              "c": "Imperātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Imperātīvus: ecce! cerne!",
              "lead": "\"",
              "punc": ":"
            },
            {
              "f": "in",
              "l": "in",
              "p": "Praepositiō",
              "c": "cum Ablātīvō",
              "n": "—",
              "g": "—",
              "d": "Indicat locum ubi aliquid inest"
            },
            {
              "f": "sacculō",
              "l": "sacculus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Ablātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Ablātīvus locī post 'in'"
            },
            {
              "f": "meō",
              "l": "meus, -a, -um",
              "p": "Prōnōmen possessīvum",
              "c": "Ablātīvus",
              "n": "Singulāris",
              "g": "Masculīnum / Neut.",
              "d": "in sacculō meō"
            },
            {
              "f": "nūlla",
              "l": "nūllus, -a, -um",
              "p": "Nōmen adiectīvum / Prōnōmen",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "nūlla pecūnia"
            },
            {
              "f": "pecūnia",
              "l": "pecūnia, -ae",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Nummī, dīvitiae"
            },
            {
              "f": "est",
              "l": "esse",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Persōna III sing. praesentis",
              "punc": ".\""
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "sacculus vacuus est",
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
              "f": "nūllam",
              "l": "nūllus, -a, -um",
              "p": "Nōmen adiectīvum / Prōnōmen",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Accūsātīvus: nūllam pecūniam"
            },
            {
              "f": "pecūniam",
              "l": "pecūnia, -ae",
              "p": "Nōmen substantīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Accūsātīvus in -am: habet pecūniam"
            },
            {
              "f": "videt",
              "l": "vidēre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Oculīs percipit (-et)"
            },
            {
              "f": "in",
              "l": "in",
              "p": "Praepositiō",
              "c": "cum Ablātīvō",
              "n": "—",
              "g": "—",
              "d": "Indicat locum ubi aliquid inest"
            },
            {
              "f": "sacculō",
              "l": "sacculus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Ablātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Ablātīvus locī post 'in'",
              "punc": "."
            },
            {
              "f": "In",
              "l": "in",
              "p": "Praepositiō",
              "c": "cum Ablātīvō",
              "n": "—",
              "g": "—",
              "d": "Indicat locum ubi aliquid inest"
            },
            {
              "f": "sacculō",
              "l": "sacculus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Ablātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Ablātīvus locī post 'in'"
            },
            {
              "f": "Dāvī",
              "l": "Dāvus, -ī",
              "p": "Nōmen proprium",
              "c": "Genetīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Genetīvus: sacculus Dāvī"
            },
            {
              "f": "nūllī",
              "l": "nūllus, -a, -um",
              "p": "Nōmen adiectīvum / Prōnōmen",
              "c": "Nōminātīvus",
              "n": "Plūrālis",
              "g": "Masculīnum",
              "d": "nūllī nummī"
            },
            {
              "f": "nummī",
              "l": "nummus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus",
              "n": "Plūrālis",
              "g": "Masculīnum",
              "d": "Plūrāle: nummus -> nummī"
            },
            {
              "f": "sunt",
              "l": "esse",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Plūrālis",
              "g": "—",
              "d": "Persōna III plūr. praesentis",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "bonus = probus",
          "tokens": [
            {
              "f": "Sacculus",
              "l": "sacculus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Pera parva in quā pecūnia portātur"
            },
            {
              "f": "eius",
              "l": "is, ea, id",
              "p": "Prōnōmen dēmōnstrātīvum",
              "c": "Genetīvus",
              "n": "Singulāris",
              "g": "Omnia genera",
              "d": "Genetīvus possessīvus: in sacculō eius"
            },
            {
              "f": "vacuus",
              "l": "vacuus, -a, -um",
              "p": "Nōmen adiectīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "In quō nihil inest; ↔ plēnus"
            },
            {
              "f": "est",
              "l": "esse",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Persōna III sing. praesentis",
              "punc": "."
            },
            {
              "f": "Dāvus",
              "l": "Dāvus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Servus Iūliī bonus"
            },
            {
              "f": "pecūniam",
              "l": "pecūnia, -ae",
              "p": "Nōmen substantīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Accūsātīvus in -am: habet pecūniam"
            },
            {
              "f": "dominī",
              "l": "dominus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Genetīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Genetīvus: baculum dominī"
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
              "f": "habet",
              "l": "habēre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Possidet (-et)",
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
              "d": "Vir Rōmānus, pater familiae",
              "punc": ":"
            },
            {
              "f": "Ō",
              "l": "ō",
              "p": "Interiectiō",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Vōx admīrantis vel invocantis",
              "lead": "\"",
              "punc": "!"
            },
            {
              "f": "Dāvus",
              "l": "Dāvus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Servus Iūliī bonus"
            },
            {
              "f": "bonus",
              "l": "bonus, -a, -um",
              "p": "Nōmen adiectīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "= probus; ↔ malus"
            },
            {
              "f": "servus",
              "l": "servus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Homo dominō serviēns"
            },
            {
              "f": "est",
              "l": "esse",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Persōna III sing. praesentis",
              "punc": ":"
            },
            {
              "f": "pecūniam",
              "l": "pecūnia, -ae",
              "p": "Nōmen substantīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Accūsātīvus in -am: habet pecūniam"
            },
            {
              "f": "meam",
              "l": "meus, -a, -um",
              "p": "Prōnōmen possessīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Accūsātīvus: pecūniam meam"
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
              "f": "habet",
              "l": "habēre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Possidet (-et)",
              "punc": ".\""
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "Ecce nummus tuus!",
          "tokens": [
            {
              "f": "Ecce",
              "l": "ecce",
              "p": "Interiectiō / Particula",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "= vidē: hīc est!",
              "lead": "\""
            },
            {
              "f": "nummus",
              "l": "nummus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Monēta aēnea vel argentea"
            },
            {
              "f": "tuus",
              "l": "tuus, -a, -um",
              "p": "Prōnōmen possessīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "nummus tuus",
              "punc": ","
            },
            {
              "f": "Dāve",
              "l": "Dāvus, -ī",
              "p": "Nōmen proprium",
              "c": "Vocātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Vocātīvus in -e: Salūtat: 'Dāve!'",
              "punc": "!\""
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
              "f": "ūnum",
              "l": "ūnus, -a, -um",
              "p": "Nōmen numerāle",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum / Neut.",
              "d": "ūnum nummum"
            },
            {
              "f": "nummum",
              "l": "nummus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Accūsātīvus: ūnum nummum pōnit"
            },
            {
              "f": "pōnit",
              "l": "pōnere",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Locat in mēnsā (-it)"
            },
            {
              "f": "in",
              "l": "in",
              "p": "Praepositiō",
              "c": "cum Ablātīvō",
              "n": "—",
              "g": "—",
              "d": "Indicat locum ubi aliquid inest"
            },
            {
              "f": "sacculō",
              "l": "sacculus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Ablātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Ablātīvus locī post 'in'"
            },
            {
              "f": "Dāvī",
              "l": "Dāvus, -ī",
              "p": "Nōmen proprium",
              "c": "Genetīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Genetīvus: sacculus Dāvī",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "L",
          "marginalia": "",
          "tokens": [
            {
              "f": "Iam",
              "l": "iam",
              "p": "Adverbium",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Hoc ipsō tempore, nōndum -> iam"
            },
            {
              "f": "sacculus",
              "l": "sacculus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Pera parva in quā pecūnia portātur"
            },
            {
              "f": "Dāvī",
              "l": "Dāvus, -ī",
              "p": "Nōmen proprium",
              "c": "Genetīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Genetīvus: sacculus Dāvī"
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
              "d": "Persōna III sing. praesentis"
            },
            {
              "f": "vacuus",
              "l": "vacuus, -a, -um",
              "p": "Nōmen adiectīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "In quō nihil inest; ↔ plēnus",
              "punc": ":"
            },
            {
              "f": "in",
              "l": "in",
              "p": "Praepositiō",
              "c": "cum Ablātīvō",
              "n": "—",
              "g": "—",
              "d": "Indicat locum ubi aliquid inest"
            },
            {
              "f": "sacculō",
              "l": "sacculus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Ablātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Ablātīvus locī post 'in'"
            },
            {
              "f": "eius",
              "l": "is, ea, id",
              "p": "Prōnōmen dēmōnstrātīvum",
              "c": "Genetīvus",
              "n": "Singulāris",
              "g": "Omnia genera",
              "d": "Genetīvus possessīvus: in sacculō eius"
            },
            {
              "f": "est",
              "l": "esse",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Persōna III sing. praesentis"
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
              "f": "nummus",
              "l": "nummus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Monēta aēnea vel argentea",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "",
          "tokens": [
            {
              "f": "Dāvus",
              "l": "Dāvus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Servus Iūliī bonus"
            },
            {
              "f": "laetus",
              "l": "laetus, -a, -um",
              "p": "Nōmen adiectīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Gaudēns, hilaris"
            },
            {
              "f": "est",
              "l": "esse",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Persōna III sing. praesentis",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "sūme! discēde!",
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
              "f": "Sūme",
              "l": "sūmere",
              "p": "Verbum",
              "c": "Imperātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Imperātīvus: Sūme sacculum!",
              "lead": "\""
            },
            {
              "f": "sacculum",
              "l": "sacculus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Accūsātīvus in -um: sacculum pōnit"
            },
            {
              "f": "tuum",
              "l": "tuus, -a, -um",
              "p": "Prōnōmen possessīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "sacculum tuum"
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
              "f": "discēde",
              "l": "discēdere",
              "p": "Verbum",
              "c": "Imperātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Imperātīvus: Discēde, bone serve!",
              "punc": ","
            },
            {
              "f": "bone",
              "l": "bonus, -a, -um",
              "p": "Nōmen adiectīvum",
              "c": "Vocātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Vocātīvus: 'bone serve!'"
            },
            {
              "f": "serve",
              "l": "servus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Vocātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Vocātīvus in -e: 'Salvē, serve!'",
              "punc": "!\""
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "sūmit et discēdit",
          "tokens": [
            {
              "f": "Dāvus",
              "l": "Dāvus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Servus Iūliī bonus"
            },
            {
              "f": "sacculum",
              "l": "sacculus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Accūsātīvus in -um: sacculum pōnit"
            },
            {
              "f": "suum",
              "l": "suus, -a, -um",
              "p": "Prōnōmen possessīvum reflexīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum / Neut.",
              "d": "Accūsātīvus: sacculum suum / baculum suum"
            },
            {
              "f": "sūmit",
              "l": "sūmere",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Manū capit; ↔ pōnit"
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
              "f": "discēdit",
              "l": "discēdere",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Abit, recēdit; ↔ venit",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "baculum quod in mēnsā est",
          "tokens": [
            {
              "f": "Mēdus",
              "l": "Mēdus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Servus Iūliī improbus qui pecūniam habet"
            },
            {
              "f": "baculum",
              "l": "baculum, -ī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Acc.",
              "n": "Singulāris",
              "g": "Neutrum",
              "d": "Līgnum quō quis ambulat vel verberat",
              "punc": ","
            },
            {
              "f": "quod",
              "l": "quī, quae, quod",
              "p": "Prōnōmen relātīvum",
              "c": "Nōminātīvus / Acc.",
              "n": "Singulāris",
              "g": "Neutrum",
              "d": "Baculum, quod in mēnsā est"
            },
            {
              "f": "in",
              "l": "in",
              "p": "Praepositiō",
              "c": "cum Ablātīvō",
              "n": "—",
              "g": "—",
              "d": "Indicat locum ubi aliquid inest"
            },
            {
              "f": "mēnsā",
              "l": "mēnsa, -ae",
              "p": "Nōmen substantīvum",
              "c": "Ablātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Ablātīvus locī post 'in': in mēnsā"
            },
            {
              "f": "est",
              "l": "esse",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Persōna III sing. praesentis",
              "punc": ","
            },
            {
              "f": "videt",
              "l": "vidēre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Oculīs percipit (-et)",
              "punc": "."
            },
            {
              "f": "Mēdus",
              "l": "Mēdus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Servus Iūliī improbus qui pecūniam habet"
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
              "f": "discēdit",
              "l": "discēdere",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Abit, recēdit; ↔ venit",
              "punc": "!"
            }
          ]
        },
        {
          "numerus": "LV",
          "marginalia": "is: Mēdus",
          "tokens": [
            {
              "f": "Cūr",
              "l": "cūr",
              "p": "Adverbium interrogātīvum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Quaerit causam (Cūr...? Quia...)"
            },
            {
              "f": "discēdit",
              "l": "discēdere",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Abit, recēdit; ↔ venit"
            },
            {
              "f": "Mēdus",
              "l": "Mēdus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Servus Iūliī improbus qui pecūniam habet",
              "punc": "?"
            },
            {
              "f": "Mēdus",
              "l": "Mēdus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Servus Iūliī improbus qui pecūniam habet"
            },
            {
              "f": "discēdit",
              "l": "discēdere",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Abit, recēdit; ↔ venit",
              "punc": ","
            },
            {
              "f": "quia",
              "l": "quia",
              "p": "Coniūnctiō causālis",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Indicat causam (respondet ad 'cūr')"
            },
            {
              "f": "is",
              "l": "is, ea, id",
              "p": "Prōnōmen dēmōnstrātīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Subiectum masculīnum: is habet"
            },
            {
              "f": "pecūniam",
              "l": "pecūnia, -ae",
              "p": "Nōmen substantīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Accūsātīvus in -am: habet pecūniam"
            },
            {
              "f": "dominī",
              "l": "dominus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Genetīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Genetīvus: baculum dominī"
            },
            {
              "f": "in",
              "l": "in",
              "p": "Praepositiō",
              "c": "cum Ablātīvō",
              "n": "—",
              "g": "—",
              "d": "Indicat locum ubi aliquid inest"
            },
            {
              "f": "sacculō",
              "l": "sacculus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Ablātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Ablātīvus locī post 'in'"
            },
            {
              "f": "suō",
              "l": "suus, -a, -um",
              "p": "Prōnōmen possessīvum reflexīvum",
              "c": "Ablātīvus",
              "n": "Singulāris",
              "g": "Masculīnum / Neut.",
              "d": "Ablātīvus: in sacculō suō"
            },
            {
              "f": "habet",
              "l": "habēre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Possidet (-et)",
              "punc": "!"
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "Dāvus et Mēdus absunt",
          "tokens": [
            {
              "f": "Dāvus",
              "l": "Dāvus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Servus Iūliī bonus"
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
              "d": "Servus Iūliī improbus qui pecūniam habet"
            },
            {
              "f": "absunt",
              "l": "abesse",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Plūrālis",
              "g": "—",
              "d": "Persōna III plūr.: nōn hīc sunt",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "is: Dāvus",
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
              "d": "Servus Iūliī bonus",
              "lead": "\""
            },
            {
              "f": "bonus",
              "l": "bonus, -a, -um",
              "p": "Nōmen adiectīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "= probus; ↔ malus"
            },
            {
              "f": "servus",
              "l": "servus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Homo dominō serviēns"
            },
            {
              "f": "est",
              "l": "esse",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Persōna III sing. praesentis",
              "punc": "."
            },
            {
              "f": "Is",
              "l": "is, ea, id",
              "p": "Prōnōmen dēmōnstrātīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Subiectum masculīnum: is habet"
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
              "f": "habet",
              "l": "habēre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Possidet (-et)"
            },
            {
              "f": "pecūniam",
              "l": "pecūnia, -ae",
              "p": "Nōmen substantīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Accūsātīvus in -am: habet pecūniam"
            },
            {
              "f": "meam",
              "l": "meus, -a, -um",
              "p": "Prōnōmen possessīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Accūsātīvus: pecūniam meam",
              "punc": ".\""
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "",
          "tokens": [
            {
              "f": "—",
              "l": "—",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "—",
              "lead": "\""
            },
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
              "f": "ubi",
              "l": "ubi",
              "p": "Adverbium interrogātīvum",
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
              "d": "Persōna III sing. praesentis"
            },
            {
              "f": "pecūnia",
              "l": "pecūnia, -ae",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Nummī, dīvitiae"
            },
            {
              "f": "mea",
              "l": "meus, -a, -um",
              "p": "Prōnōmen possessīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "pecūnia mea",
              "punc": ","
            },
            {
              "f": "Mēde",
              "l": "Mēdus, -ī",
              "p": "Nōmen proprium",
              "c": "Vocātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Vocātīvus in -e: 'Quid est, Mēde?'",
              "punc": "?"
            },
            {
              "f": "Quis",
              "l": "quis, quid",
              "p": "Prōnōmen interrogātīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Quis mē vocat?"
            },
            {
              "f": "pecūniam",
              "l": "pecūnia, -ae",
              "p": "Nōmen substantīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Accūsātīvus in -am: habet pecūniam"
            },
            {
              "f": "meam",
              "l": "meus, -a, -um",
              "p": "Prōnōmen possessīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Accūsātīvus: pecūniam meam"
            },
            {
              "f": "habet",
              "l": "habēre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Possidet (-et)",
              "punc": "?\""
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
              "d": "Servus Iūliī improbus qui pecūniam habet"
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
              "f": "respondet",
              "l": "respondēre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Ad interrogātum dīcit (-et)",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "LX",
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
              "f": "Ubi",
              "l": "ubi",
              "p": "Adverbium interrogātīvum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Quaerit locum",
              "lead": "\""
            },
            {
              "f": "est",
              "l": "esse",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Persōna III sing. praesentis"
            },
            {
              "f": "Mēdus",
              "l": "Mēdus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Servus Iūliī improbus qui pecūniam habet",
              "punc": "?"
            },
            {
              "f": "Cūr",
              "l": "cūr",
              "p": "Adverbium interrogātīvum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Quaerit causam (Cūr...? Quia...)"
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
              "f": "respondet",
              "l": "respondēre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Ad interrogātum dīcit (-et)",
              "punc": "?\""
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "nūllus servus adest",
          "tokens": [
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
              "f": "Mēdus",
              "l": "Mēdus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Servus Iūliī improbus qui pecūniam habet",
              "lead": "\""
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
              "f": "respondet",
              "l": "respondēre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Ad interrogātum dīcit (-et)",
              "punc": ","
            },
            {
              "f": "quia",
              "l": "quia",
              "p": "Coniūnctiō causālis",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Indicat causam (respondet ad 'cūr')"
            },
            {
              "f": "abest",
              "l": "abesse",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "↔ adest; nōn hīc est",
              "punc": "."
            },
            {
              "f": "Nūllus",
              "l": "nūllus, -a, -um",
              "p": "Nōmen adiectīvum / Prōnōmen",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "= nōn ūnus"
            },
            {
              "f": "servus",
              "l": "servus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Homo dominō serviēns"
            },
            {
              "f": "adest",
              "l": "adesse",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "= hīc est; ↔ abest",
              "punc": ".\""
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "Venī, improbe serve!",
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
              "f": "Mēdum",
              "l": "Mēdus, -ī",
              "p": "Nōmen proprium",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Accūsātīvus: Iūlius Mēdum vocat"
            },
            {
              "f": "vocat",
              "l": "vocāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Nōmine compellat (-at)",
              "punc": ":"
            },
            {
              "f": "Mēde",
              "l": "Mēdus, -ī",
              "p": "Nōmen proprium",
              "c": "Vocātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Vocātīvus in -e: 'Quid est, Mēde?'",
              "lead": "\"",
              "punc": "!"
            },
            {
              "f": "Venī",
              "l": "venīre",
              "p": "Verbum",
              "c": "Imperātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Imperātīvus: Venī hūc!",
              "punc": "!\""
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
              "f": "Mēdus",
              "l": "Mēdus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Servus Iūliī improbus qui pecūniam habet",
              "punc": ","
            },
            {
              "f": "quī",
              "l": "quī, quae, quod",
              "p": "Prōnōmen relātīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris / Plūr.",
              "g": "Masculīnum",
              "d": "Puer quī cantat / rīdet"
            },
            {
              "f": "abest",
              "l": "abesse",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "↔ adest; nōn hīc est",
              "punc": ","
            },
            {
              "f": "eum",
              "l": "is, ea, id",
              "p": "Prōnōmen dēmōnstrātīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Accūsātīvus: Iūlius eum audit"
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
              "f": "audit",
              "l": "audīre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Auribus percipit (-it)"
            },
            {
              "f": "neque",
              "l": "neque",
              "p": "Coniūnctiō",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "= et nōn"
            },
            {
              "f": "venit",
              "l": "venīre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Accēdit, advenit (-it)",
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
              "f": "rūrsus",
              "l": "rūrsus",
              "p": "Adverbium",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Iterum, dē integrō"
            },
            {
              "f": "vocat",
              "l": "vocāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Nōmine compellat (-at)",
              "punc": ":"
            },
            {
              "f": "Mē-de",
              "l": "Mēdus, -ī",
              "p": "Nōmen proprium",
              "c": "Vocātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Vocātīvus clāmātus",
              "lead": "\"",
              "punc": "!"
            },
            {
              "f": "Venī",
              "l": "venīre",
              "p": "Verbum",
              "c": "Imperātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Imperātīvus: Venī hūc!",
              "punc": ","
            },
            {
              "f": "improbe",
              "l": "improbus, -a, -um",
              "p": "Nōmen adiectīvum",
              "c": "Vocātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Vocātīvus: 'improbe serve!'"
            },
            {
              "f": "serve",
              "l": "servus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Vocātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Vocātīvus in -e: 'Salvē, serve!'",
              "punc": "!\""
            },
            {
              "f": "Mēdus",
              "l": "Mēdus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Servus Iūliī improbus qui pecūniam habet"
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
              "f": "venit",
              "l": "venīre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Accēdit, advenit (-it)",
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
              "d": "Vir Rōmānus, pater familiae",
              "punc": ":"
            },
            {
              "f": "Cūr",
              "l": "cūr",
              "p": "Adverbium interrogātīvum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Quaerit causam (Cūr...? Quia...)",
              "lead": "\""
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
              "f": "venit",
              "l": "venīre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Accēdit, advenit (-it)"
            },
            {
              "f": "Mēdus",
              "l": "Mēdus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Servus Iūliī improbus qui pecūniam habet",
              "punc": "?\""
            }
          ]
        },
        {
          "numerus": "LXV",
          "marginalia": "sacculus eius nōn vacuus",
          "tokens": [
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
              "f": "Mēdus",
              "l": "Mēdus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Servus Iūliī improbus qui pecūniam habet",
              "lead": "\""
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
              "f": "venit",
              "l": "venīre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Accēdit, advenit (-it)",
              "punc": ","
            },
            {
              "f": "quia",
              "l": "quia",
              "p": "Coniūnctiō causālis",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Indicat causam (respondet ad 'cūr')"
            },
            {
              "f": "is",
              "l": "is, ea, id",
              "p": "Prōnōmen dēmōnstrātīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Subiectum masculīnum: is habet"
            },
            {
              "f": "habet",
              "l": "habēre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Possidet (-et)"
            },
            {
              "f": "pecūniam",
              "l": "pecūnia, -ae",
              "p": "Nōmen substantīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Accūsātīvus in -am: habet pecūniam"
            },
            {
              "f": "tuam",
              "l": "tuus, -a, -um",
              "p": "Prōnōmen possessīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "pecūniam tuam",
              "punc": "!"
            },
            {
              "f": "Eius",
              "l": "is, ea, id",
              "p": "Prōnōmen dēmōnstrātīvum",
              "c": "Genetīvus",
              "n": "Singulāris",
              "g": "Omnia genera",
              "d": "Genetīvus possessīvus: in sacculō eius"
            },
            {
              "f": "sacculus",
              "l": "sacculus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Pera parva in quā pecūnia portātur"
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
              "d": "Persōna III sing. praesentis"
            },
            {
              "f": "vacuus",
              "l": "vacuus, -a, -um",
              "p": "Nōmen adiectīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "In quō nihil inest; ↔ plēnus",
              "punc": "!\""
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
              "f": "rīdet",
              "l": "rīdēre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Ōre laetitiam dēmōnstrat (-et)",
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
              "f": "īrātus",
              "l": "īrātus, -a, -um",
              "p": "Nōmen adiectīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Īrā commōtus, furēns"
            },
            {
              "f": "est",
              "l": "esse",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Persōna III sing. praesentis"
            },
            {
              "f": "—",
              "l": "—",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "—"
            },
            {
              "f": "is",
              "l": "is, ea, id",
              "p": "Prōnōmen dēmōnstrātīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Subiectum masculīnum: is habet"
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
              "f": "rīdet",
              "l": "rīdēre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Ōre laetitiam dēmōnstrat (-et)",
              "punc": "!"
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "Ubi est baculum meum?",
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
              "f": "Ubi",
              "l": "ubi",
              "p": "Adverbium interrogātīvum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Quaerit locum",
              "lead": "\""
            },
            {
              "f": "est",
              "l": "esse",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Persōna III sing. praesentis"
            },
            {
              "f": "baculum",
              "l": "baculum, -ī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Acc.",
              "n": "Singulāris",
              "g": "Neutrum",
              "d": "Līgnum quō quis ambulat vel verberat"
            },
            {
              "f": "meum",
              "l": "meus, -a, -um",
              "p": "Prōnōmen possessīvum",
              "c": "Nōminātīvus / Acc.",
              "n": "Singulāris",
              "g": "Neutrum",
              "d": "baculum meum",
              "punc": "?\""
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
              "f": "baculum",
              "l": "baculum, -ī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Acc.",
              "n": "Singulāris",
              "g": "Neutrum",
              "d": "Līgnum quō quis ambulat vel verberat",
              "punc": ","
            },
            {
              "f": "quod",
              "l": "quī, quae, quod",
              "p": "Prōnōmen relātīvum",
              "c": "Nōminātīvus / Acc.",
              "n": "Singulāris",
              "g": "Neutrum",
              "d": "Baculum, quod in mēnsā est"
            },
            {
              "f": "in",
              "l": "in",
              "p": "Praepositiō",
              "c": "cum Ablātīvō",
              "n": "—",
              "g": "—",
              "d": "Indicat locum ubi aliquid inest"
            },
            {
              "f": "mēnsā",
              "l": "mēnsa, -ae",
              "p": "Nōmen substantīvum",
              "c": "Ablātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Ablātīvus locī post 'in': in mēnsā"
            },
            {
              "f": "est",
              "l": "esse",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Persōna III sing. praesentis",
              "punc": ","
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
              "f": "videt",
              "l": "vidēre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Oculīs percipit (-et)",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "Ecce baculum in mēnsā!",
          "tokens": [
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
              "f": "Ecce",
              "l": "ecce",
              "p": "Interiectiō / Particula",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "= vidē: hīc est!",
              "lead": "\""
            },
            {
              "f": "baculum",
              "l": "baculum, -ī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Acc.",
              "n": "Singulāris",
              "g": "Neutrum",
              "d": "Līgnum quō quis ambulat vel verberat"
            },
            {
              "f": "in",
              "l": "in",
              "p": "Praepositiō",
              "c": "cum Ablātīvō",
              "n": "—",
              "g": "—",
              "d": "Indicat locum ubi aliquid inest"
            },
            {
              "f": "mēnsā",
              "l": "mēnsa, -ae",
              "p": "Nōmen substantīvum",
              "c": "Ablātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Ablātīvus locī post 'in': in mēnsā",
              "punc": ".\""
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "sūmit et discēdit",
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
              "f": "baculum",
              "l": "baculum, -ī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Acc.",
              "n": "Singulāris",
              "g": "Neutrum",
              "d": "Līgnum quō quis ambulat vel verberat"
            },
            {
              "f": "suum",
              "l": "suus, -a, -um",
              "p": "Prōnōmen possessīvum reflexīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum / Neut.",
              "d": "Accūsātīvus: sacculum suum / baculum suum"
            },
            {
              "f": "sūmit",
              "l": "sūmere",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Manū capit; ↔ pōnit"
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
              "f": "discēdit",
              "l": "discēdere",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Abit, recēdit; ↔ venit",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "LXX",
          "marginalia": "vocātīvus: Dāve",
          "tokens": [
            {
              "f": "Mēdus",
              "l": "Mēdus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Servus Iūliī improbus qui pecūniam habet"
            },
            {
              "f": "Dāvum",
              "l": "Dāvus, -ī",
              "p": "Nōmen proprium",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Accūsātīvus: Mēdus Dāvum vocat"
            },
            {
              "f": "vocat",
              "l": "vocāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Nōmine compellat (-at)",
              "punc": ":"
            },
            {
              "f": "Dāve",
              "l": "Dāvus, -ī",
              "p": "Nōmen proprium",
              "c": "Vocātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Vocātīvus in -e: Salūtat: 'Dāve!'",
              "lead": "\"",
              "punc": "!\""
            },
            {
              "f": "Dāve",
              "l": "Dāvus, -ī",
              "p": "Nōmen proprium",
              "c": "Vocātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Vocātīvus in -e: Salūtat: 'Dāve!'",
              "lead": "'",
              "punc": "'"
            },
            {
              "f": "vocātīvus",
              "l": "vocātīvus, -ī",
              "p": "Nōmen grammaticum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Casus invocātiōnis"
            },
            {
              "f": "est",
              "l": "esse",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Persōna III sing. praesentis",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "vocātīvus: -e",
          "tokens": [
            {
              "f": "Vocātīvus",
              "l": "vocātīvus, -ī",
              "p": "Nōmen grammaticum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Casus invocātiōnis",
              "punc": ":"
            },
            {
              "f": "-e",
              "l": "-e",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "-e"
            },
            {
              "f": "nōminātīvus",
              "l": "nōminātīvus, -ī",
              "p": "Nōmen grammaticum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Casus subiectī",
              "lead": "(",
              "punc": ":"
            },
            {
              "f": "-us",
              "l": "-us",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "-us",
              "punc": ")."
            },
            {
              "f": "Exempla",
              "l": "Exempla",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Exempla",
              "punc": ":"
            },
            {
              "f": "Mēde",
              "l": "Mēdus, -ī",
              "p": "Nōmen proprium",
              "c": "Vocātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Vocātīvus in -e: 'Quid est, Mēde?'",
              "punc": ","
            },
            {
              "f": "domine",
              "l": "dominus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Vocātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Vocātīvus in -e: 'Salvē, domine!'",
              "punc": ","
            },
            {
              "f": "serve",
              "l": "servus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Vocātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Vocātīvus in -e: 'Salvē, serve!'",
              "punc": ","
            },
            {
              "f": "improbe",
              "l": "improbus, -a, -um",
              "p": "Nōmen adiectīvum",
              "c": "Vocātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Vocātīvus: 'improbe serve!'",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "Salvē, domine!",
          "tokens": [
            {
              "f": "Servus",
              "l": "servus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Homo dominō serviēns",
              "punc": ":"
            },
            {
              "f": "Salvē",
              "l": "salvēre",
              "p": "Verbum / Interiectiō",
              "c": "Imperātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Salūtātiō Rōmāna: 'Salvē, domine!'",
              "lead": "\"",
              "punc": ","
            },
            {
              "f": "domine",
              "l": "dominus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Vocātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Vocātīvus in -e: 'Salvē, domine!'",
              "punc": "!\""
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
              "f": "Mēdum",
              "l": "Mēdus, -ī",
              "p": "Nōmen proprium",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Accūsātīvus: Iūlius Mēdum vocat"
            },
            {
              "f": "vocat",
              "l": "vocāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Nōmine compellat (-at)",
              "punc": ":"
            },
            {
              "f": "Mēde",
              "l": "Mēdus, -ī",
              "p": "Nōmen proprium",
              "c": "Vocātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Vocātīvus in -e: 'Quid est, Mēde?'",
              "lead": "\"",
              "punc": "!"
            },
            {
              "f": "Venī",
              "l": "venīre",
              "p": "Verbum",
              "c": "Imperātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Imperātīvus: Venī hūc!",
              "punc": ","
            },
            {
              "f": "improbe",
              "l": "improbus, -a, -um",
              "p": "Nōmen adiectīvum",
              "c": "Vocātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Vocātīvus: 'improbe serve!'"
            },
            {
              "f": "serve",
              "l": "servus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Vocātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Vocātīvus in -e: 'Salvē, serve!'",
              "punc": "!\""
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "imperātīvus: vocā / indicātīvus: vocat",
          "tokens": [
            {
              "f": "Dominus",
              "l": "dominus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Qui servōs et familiam possidet",
              "punc": ":"
            },
            {
              "f": "Vocā",
              "l": "vocāre",
              "p": "Verbum",
              "c": "Imperātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Imperātīvus: Dāvum vocā!",
              "lead": "\""
            },
            {
              "f": "Dāvum",
              "l": "Dāvus, -ī",
              "p": "Nōmen proprium",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Accūsātīvus: Mēdus Dāvum vocat",
              "punc": "!\""
            },
            {
              "f": "Servus",
              "l": "servus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Homo dominō serviēns"
            },
            {
              "f": "Dāvum",
              "l": "Dāvus, -ī",
              "p": "Nōmen proprium",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Accūsātīvus: Mēdus Dāvum vocat"
            },
            {
              "f": "vocat",
              "l": "vocāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Nōmine compellat (-at)",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "imperātīvus: tacē, audī",
          "tokens": [
            {
              "f": "Dominus",
              "l": "dominus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Qui servōs et familiam possidet",
              "punc": ":"
            },
            {
              "f": "Tacē",
              "l": "tacēre",
              "p": "Verbum",
              "c": "Imperātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Imperātīvus: Tacē, serve!",
              "lead": "\""
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
              "f": "audī",
              "l": "audīre",
              "p": "Verbum",
              "c": "Imperātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Imperātīvus: Tacē et audī!",
              "punc": "!\""
            },
            {
              "f": "Servus",
              "l": "servus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Homo dominō serviēns"
            },
            {
              "f": "tacet",
              "l": "tacēre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Nihil dīcit, silet (-et)"
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
              "f": "audit",
              "l": "audīre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Auribus percipit (-it)",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "LXXV",
          "marginalia": "imperātīvus: discēde",
          "tokens": [
            {
              "f": "Dominus",
              "l": "dominus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Qui servōs et familiam possidet",
              "punc": ":"
            },
            {
              "f": "Discēde",
              "l": "discēdere",
              "p": "Verbum",
              "c": "Imperātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Imperātīvus: Discēde, bone serve!",
              "lead": "\"",
              "punc": ","
            },
            {
              "f": "serve",
              "l": "servus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Vocātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Vocātīvus in -e: 'Salvē, serve!'",
              "punc": "!\""
            },
            {
              "f": "Servus",
              "l": "servus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Homo dominō serviēns"
            },
            {
              "f": "discēdit",
              "l": "discēdere",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Abit, recēdit; ↔ venit",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "imperat ↔ pāret",
          "tokens": [
            {
              "f": "Dominus",
              "l": "dominus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Qui servōs et familiam possidet"
            },
            {
              "f": "imperat",
              "l": "imperāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Iubet, mandat; ↔ pāret",
              "punc": "."
            },
            {
              "f": "Servus",
              "l": "servus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Homo dominō serviēns"
            },
            {
              "f": "pāret",
              "l": "pārēre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Facit quod imperātur; ↔ imperat",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "",
          "tokens": [
            {
              "f": "Vocā",
              "l": "vocāre",
              "p": "Verbum",
              "c": "Imperātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Imperātīvus: Dāvum vocā!",
              "lead": "'",
              "punc": "'"
            },
            {
              "f": "imperātīvus",
              "l": "imperātīvus, -ī",
              "p": "Nōmen grammaticum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Modus imperandī (iussūs)"
            },
            {
              "f": "est",
              "l": "esse",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Persōna III sing. praesentis",
              "punc": "."
            },
            {
              "f": "Vocat",
              "l": "vocāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Nōmine compellat (-at)",
              "lead": "'",
              "punc": "'"
            },
            {
              "f": "indicātīvus",
              "l": "indicātīvus, -ī",
              "p": "Nōmen grammaticum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Modus dēclārandī facta"
            },
            {
              "f": "est",
              "l": "esse",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Persōna III sing. praesentis",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "",
          "tokens": [
            {
              "f": "Tacē",
              "l": "tacēre",
              "p": "Verbum",
              "c": "Imperātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Imperātīvus: Tacē, serve!",
              "lead": "'",
              "punc": "',"
            },
            {
              "f": "audī",
              "l": "audīre",
              "p": "Verbum",
              "c": "Imperātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Imperātīvus: Tacē et audī!",
              "lead": "'",
              "punc": "',"
            },
            {
              "f": "discēde",
              "l": "discēdere",
              "p": "Verbum",
              "c": "Imperātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Imperātīvus: Discēde, bone serve!",
              "lead": "'",
              "punc": "'"
            },
            {
              "f": "est",
              "l": "esse",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Persōna III sing. praesentis"
            },
            {
              "f": "imperātīvus",
              "l": "imperātīvus, -ī",
              "p": "Nōmen grammaticum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Modus imperandī (iussūs)",
              "punc": "."
            },
            {
              "f": "Tacet",
              "l": "tacēre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Nihil dīcit, silet (-et)",
              "lead": "'",
              "punc": "',"
            },
            {
              "f": "audit",
              "l": "audīre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Auribus percipit (-it)",
              "lead": "'",
              "punc": "',"
            },
            {
              "f": "discēdit",
              "l": "discēdere",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Abit, recēdit; ↔ venit",
              "lead": "'",
              "punc": "'"
            },
            {
              "f": "indicātīvus",
              "l": "indicātīvus, -ī",
              "p": "Nōmen grammaticum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Modus dēclārandī facta"
            },
            {
              "f": "est",
              "l": "esse",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Persōna III sing. praesentis",
              "punc": "."
            }
          ]
        }
      ]
    },
    {
      "titulusSectio": "SCAENA TERTIA & SVMMA GRAMMATICA",
      "versus": [
        {
          "numerus": "",
          "marginalia": "imperātīvus: -ā, -ē, -e, -ī",
          "tokens": [
            {
              "f": "Imperātīvus",
              "l": "imperātīvus, -ī",
              "p": "Nōmen grammaticum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Modus imperandī (iussūs)",
              "punc": ":"
            },
            {
              "f": "-ā",
              "l": "-ā",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "-ā",
              "punc": ","
            },
            {
              "f": "-ē",
              "l": "-ē",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "-ē",
              "punc": ","
            },
            {
              "f": "-e",
              "l": "-e",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "-e",
              "punc": ","
            },
            {
              "f": "-ī",
              "l": "-ī",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "-ī",
              "punc": "."
            },
            {
              "f": "Indicātīvus",
              "l": "indicātīvus, -ī",
              "p": "Nōmen grammaticum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Modus dēclārandī facta",
              "punc": ":"
            },
            {
              "f": "-at",
              "l": "-at",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "-at",
              "punc": ","
            },
            {
              "f": "-et",
              "l": "-et",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "-et",
              "punc": ","
            },
            {
              "f": "-it",
              "l": "-it",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "-it",
              "punc": ","
            },
            {
              "f": "-it",
              "l": "-it",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "-it",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "LXXX",
          "marginalia": "",
          "tokens": [
            {
              "f": "Exempla",
              "l": "Exempla",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Exempla",
              "punc": ":"
            },
            {
              "f": "1",
              "l": "1",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "1",
              "lead": "[",
              "punc": "]"
            },
            {
              "f": "salūtā",
              "l": "salūtāre",
              "p": "Verbum",
              "c": "Imperātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Imperātīvus: Salūtā dominum!",
              "punc": ","
            },
            {
              "f": "salūtat",
              "l": "salūtāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Dīcit 'Salvē!'",
              "punc": ";"
            },
            {
              "f": "2",
              "l": "2",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "2",
              "lead": "[",
              "punc": "]"
            },
            {
              "f": "respondē",
              "l": "respondēre",
              "p": "Verbum",
              "c": "Imperātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Imperātīvus: Respondē, Dāve!",
              "punc": ","
            },
            {
              "f": "respondet",
              "l": "respondēre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Ad interrogātum dīcit (-et)",
              "punc": ";"
            },
            {
              "f": "3",
              "l": "3",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "3",
              "lead": "[",
              "punc": "]"
            },
            {
              "f": "sūme",
              "l": "sūmere",
              "p": "Verbum",
              "c": "Imperātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Imperātīvus: Sūme sacculum!",
              "punc": ","
            },
            {
              "f": "sūmit",
              "l": "sūmere",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Manū capit; ↔ pōnit",
              "punc": ";"
            },
            {
              "f": "4",
              "l": "4",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "4",
              "lead": "[",
              "punc": "]"
            },
            {
              "f": "venī",
              "l": "venīre",
              "p": "Verbum",
              "c": "Imperātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Imperātīvus: Venī hūc!",
              "punc": ","
            },
            {
              "f": "venit",
              "l": "venīre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Accēdit, advenit (-it)",
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
              "d": "Servus Iūliī improbus qui pecūniam habet",
              "punc": ":"
            },
            {
              "f": "Salūtā",
              "l": "salūtāre",
              "p": "Verbum",
              "c": "Imperātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Imperātīvus: Salūtā dominum!",
              "lead": "\""
            },
            {
              "f": "dominum",
              "l": "dominus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Accūsātīvus: salūtā dominum",
              "punc": "!\""
            },
            {
              "f": "Dāvus",
              "l": "Dāvus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Servus Iūliī bonus"
            },
            {
              "f": "dominum",
              "l": "dominus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Accūsātīvus: salūtā dominum"
            },
            {
              "f": "salūtat",
              "l": "salūtāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Dīcit 'Salvē!'",
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
              "d": "Vir Rōmānus, pater familiae",
              "punc": ":"
            },
            {
              "f": "Respondē",
              "l": "respondēre",
              "p": "Verbum",
              "c": "Imperātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Imperātīvus: Respondē, Dāve!",
              "lead": "\"",
              "punc": ","
            },
            {
              "f": "serve",
              "l": "servus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Vocātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Vocātīvus in -e: 'Salvē, serve!'",
              "punc": "!\""
            },
            {
              "f": "Servus",
              "l": "servus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Homo dominō serviēns"
            },
            {
              "f": "respondet",
              "l": "respondēre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Ad interrogātum dīcit (-et)",
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
              "f": "imperat",
              "l": "imperāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Iubet, mandat; ↔ pāret",
              "punc": ":"
            },
            {
              "f": "Sūme",
              "l": "sūmere",
              "p": "Verbum",
              "c": "Imperātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Imperātīvus: Sūme sacculum!",
              "lead": "\""
            },
            {
              "f": "sacculum",
              "l": "sacculus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Accūsātīvus in -um: sacculum pōnit"
            },
            {
              "f": "tuum",
              "l": "tuus, -a, -um",
              "p": "Prōnōmen possessīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "sacculum tuum"
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
              "f": "discēde",
              "l": "discēdere",
              "p": "Verbum",
              "c": "Imperātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Imperātīvus: Discēde, bone serve!",
              "punc": "!\""
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "",
          "tokens": [
            {
              "f": "Dāvus",
              "l": "Dāvus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Servus Iūliī bonus"
            },
            {
              "f": "sacculum",
              "l": "sacculus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Accūsātīvus in -um: sacculum pōnit"
            },
            {
              "f": "suum",
              "l": "suus, -a, -um",
              "p": "Prōnōmen possessīvum reflexīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum / Neut.",
              "d": "Accūsātīvus: sacculum suum / baculum suum"
            },
            {
              "f": "sūmit",
              "l": "sūmere",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Manū capit; ↔ pōnit"
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
              "f": "discēdit",
              "l": "discēdere",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Abit, recēdit; ↔ venit",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "LXXXV",
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
              "f": "Mēde",
              "l": "Mēdus, -ī",
              "p": "Nōmen proprium",
              "c": "Vocātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Vocātīvus in -e: 'Quid est, Mēde?'",
              "lead": "\"",
              "punc": "!"
            },
            {
              "f": "Venī",
              "l": "venīre",
              "p": "Verbum",
              "c": "Imperātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Imperātīvus: Venī hūc!",
              "punc": "!\""
            },
            {
              "f": "Mēdus",
              "l": "Mēdus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Servus Iūliī improbus qui pecūniam habet"
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
              "f": "venit",
              "l": "venīre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Accēdit, advenit (-it)",
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
              "f": "imperat",
              "l": "imperāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Iubet, mandat; ↔ pāret",
              "punc": "."
            },
            {
              "f": "Dāvus",
              "l": "Dāvus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Servus Iūliī bonus"
            },
            {
              "f": "pāret",
              "l": "pārēre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Facit quod imperātur; ↔ imperat",
              "punc": ";"
            },
            {
              "f": "Mēdus",
              "l": "Mēdus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Servus Iūliī improbus qui pecūniam habet"
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
              "f": "pāret",
              "l": "pārēre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Facit quod imperātur; ↔ imperat",
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
              "d": "Servus Iūliī improbus qui pecūniam habet"
            },
            {
              "f": "adest",
              "l": "adesse",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "= hīc est; ↔ abest",
              "punc": "."
            },
            {
              "f": "Dāvus",
              "l": "Dāvus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Servus Iūliī bonus"
            },
            {
              "f": "abest",
              "l": "abesse",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "↔ adest; nōn hīc est",
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
              "f": "imperat",
              "l": "imperāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Iubet, mandat; ↔ pāret",
              "punc": ":"
            },
            {
              "f": "Vocā",
              "l": "vocāre",
              "p": "Verbum",
              "c": "Imperātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Imperātīvus: Dāvum vocā!",
              "lead": "\""
            },
            {
              "f": "Dāvum",
              "l": "Dāvus, -ī",
              "p": "Nōmen proprium",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Accūsātīvus: Mēdus Dāvum vocat",
              "punc": ","
            },
            {
              "f": "Mēde",
              "l": "Mēdus, -ī",
              "p": "Nōmen proprium",
              "c": "Vocātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Vocātīvus in -e: 'Quid est, Mēde?'",
              "punc": "!\""
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
              "d": "Servus Iūliī improbus qui pecūniam habet"
            },
            {
              "f": "Dāvum",
              "l": "Dāvus, -ī",
              "p": "Nōmen proprium",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Accūsātīvus: Mēdus Dāvum vocat"
            },
            {
              "f": "vocat",
              "l": "vocāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Nōmine compellat (-at)",
              "punc": ":"
            },
            {
              "f": "Dāve",
              "l": "Dāvus, -ī",
              "p": "Nōmen proprium",
              "c": "Vocātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Vocātīvus in -e: Salūtat: 'Dāve!'",
              "lead": "\"",
              "punc": "!"
            },
            {
              "f": "Venī",
              "l": "venīre",
              "p": "Verbum",
              "c": "Imperātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Imperātīvus: Venī hūc!",
              "punc": "!\""
            },
            {
              "f": "Dāvus",
              "l": "Dāvus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Servus Iūliī bonus"
            },
            {
              "f": "venit",
              "l": "venīre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Accēdit, advenit (-it)"
            },
            {
              "f": "neque",
              "l": "neque",
              "p": "Coniūnctiō",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "= et nōn"
            },
            {
              "f": "Iūlium",
              "l": "Iūlius, -ī",
              "p": "Nōmen proprium",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Accūsātīvus: persōna quem vocat/videt"
            },
            {
              "f": "videt",
              "l": "vidēre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Oculīs percipit (-et)",
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
              "d": "Servus Iūliī improbus qui pecūniam habet",
              "punc": ":"
            },
            {
              "f": "Salūtā",
              "l": "salūtāre",
              "p": "Verbum",
              "c": "Imperātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Imperātīvus: Salūtā dominum!",
              "lead": "\""
            },
            {
              "f": "dominum",
              "l": "dominus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Accūsātīvus: salūtā dominum",
              "punc": "!\""
            },
            {
              "f": "Dāvus",
              "l": "Dāvus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Servus Iūliī bonus"
            },
            {
              "f": "dominum",
              "l": "dominus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Accūsātīvus: salūtā dominum"
            },
            {
              "f": "salūtat",
              "l": "salūtāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Dīcit 'Salvē!'",
              "punc": ":"
            },
            {
              "f": "Salvē",
              "l": "salvēre",
              "p": "Verbum / Interiectiō",
              "c": "Imperātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Salūtātiō Rōmāna: 'Salvē, domine!'",
              "lead": "\"",
              "punc": ","
            },
            {
              "f": "domine",
              "l": "dominus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Vocātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Vocātīvus in -e: 'Salvē, domine!'",
              "punc": "!"
            },
            {
              "f": "Quid",
              "l": "quis, quid",
              "p": "Prōnōmen interrogātīvum",
              "c": "Nōminātīvus / Acc.",
              "n": "Singulāris",
              "g": "Neutrum",
              "d": "Quid est?"
            },
            {
              "f": "est",
              "l": "esse",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Persōna III sing. praesentis",
              "punc": "?\""
            }
          ]
        },
        {
          "numerus": "XC",
          "marginalia": "",
          "tokens": [
            {
              "f": "Dominus",
              "l": "dominus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Qui servōs et familiam possidet",
              "punc": ":"
            },
            {
              "f": "Tacē",
              "l": "tacēre",
              "p": "Verbum",
              "c": "Imperātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Imperātīvus: Tacē, serve!",
              "lead": "\"",
              "punc": ","
            },
            {
              "f": "serve",
              "l": "servus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Vocātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Vocātīvus in -e: 'Salvē, serve!'",
              "punc": "!"
            },
            {
              "f": "Nummī",
              "l": "nummus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus",
              "n": "Plūrālis",
              "g": "Masculīnum",
              "d": "Plūrāle: nummus -> nummī"
            },
            {
              "f": "meī",
              "l": "meus, -a, -um",
              "p": "Prōnōmen possessīvum",
              "c": "Nōm. plūr. / Genetīvus",
              "n": "Plūrālis / Sing.",
              "g": "Masculīnum",
              "d": "nummī meī / servī meī"
            },
            {
              "f": "ubi",
              "l": "ubi",
              "p": "Adverbium interrogātīvum",
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
              "d": "Persōna III plūr. praesentis",
              "punc": "?\""
            },
            {
              "f": "Servus",
              "l": "servus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Homo dominō serviēns"
            },
            {
              "f": "tacet",
              "l": "tacēre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Nihil dīcit, silet (-et)"
            },
            {
              "f": "neque",
              "l": "neque",
              "p": "Coniūnctiō",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "= et nōn"
            },
            {
              "f": "respondet",
              "l": "respondēre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Ad interrogātum dīcit (-et)",
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
              "d": "Vir Rōmānus, pater familiae",
              "punc": ":"
            },
            {
              "f": "Respondē",
              "l": "respondēre",
              "p": "Verbum",
              "c": "Imperātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Imperātīvus: Respondē, Dāve!",
              "lead": "\"",
              "punc": "!\""
            },
            {
              "f": "Dāvus",
              "l": "Dāvus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Servus Iūliī bonus",
              "punc": ":"
            },
            {
              "f": "Interrogā",
              "l": "interrogāre",
              "p": "Verbum",
              "c": "Imperātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Imperātīvus: Interrogā Mēdum!",
              "lead": "\""
            },
            {
              "f": "Mēdum",
              "l": "Mēdus, -ī",
              "p": "Nōmen proprium",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Accūsātīvus: Iūlius Mēdum vocat",
              "punc": "!\""
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
              "f": "Mēdum",
              "l": "Mēdus, -ī",
              "p": "Nōmen proprium",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Accūsātīvus: Iūlius Mēdum vocat"
            },
            {
              "f": "interrogat",
              "l": "interrogāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Quaestionem pōnit (-at)",
              "punc": ":"
            },
            {
              "f": "Ubi",
              "l": "ubi",
              "p": "Adverbium interrogātīvum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Quaerit locum",
              "lead": "\""
            },
            {
              "f": "est",
              "l": "esse",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Persōna III sing. praesentis"
            },
            {
              "f": "pecūnia",
              "l": "pecūnia, -ae",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Nummī, dīvitiae"
            },
            {
              "f": "mea",
              "l": "meus, -a, -um",
              "p": "Prōnōmen possessīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "pecūnia mea",
              "punc": ","
            },
            {
              "f": "Mēde",
              "l": "Mēdus, -ī",
              "p": "Nōmen proprium",
              "c": "Vocātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Vocātīvus in -e: 'Quid est, Mēde?'",
              "punc": "?\""
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
              "d": "Servus Iūliī improbus qui pecūniam habet",
              "punc": ":"
            },
            {
              "f": "Dāvus",
              "l": "Dāvus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Servus Iūliī bonus",
              "lead": "\""
            },
            {
              "f": "pecūniam",
              "l": "pecūnia, -ae",
              "p": "Nōmen substantīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Accūsātīvus in -am: habet pecūniam"
            },
            {
              "f": "tuam",
              "l": "tuus, -a, -um",
              "p": "Prōnōmen possessīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "pecūniam tuam"
            },
            {
              "f": "habet",
              "l": "habēre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Possidet (-et)",
              "punc": ".\""
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
              "f": "Pōne",
              "l": "pōnere",
              "p": "Verbum",
              "c": "Imperātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Imperātīvus: Sacculum pōne!",
              "lead": "\""
            },
            {
              "f": "sacculum",
              "l": "sacculus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Accūsātīvus in -um: sacculum pōnit"
            },
            {
              "f": "tuum",
              "l": "tuus, -a, -um",
              "p": "Prōnōmen possessīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "sacculum tuum"
            },
            {
              "f": "in",
              "l": "in",
              "p": "Praepositiō",
              "c": "cum Ablātīvō",
              "n": "—",
              "g": "—",
              "d": "Indicat locum ubi aliquid inest"
            },
            {
              "f": "mēnsā",
              "l": "mēnsa, -ae",
              "p": "Nōmen substantīvum",
              "c": "Ablātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Ablātīvus locī post 'in': in mēnsā",
              "punc": ","
            },
            {
              "f": "Dāve",
              "l": "Dāvus, -ī",
              "p": "Nōmen proprium",
              "c": "Vocātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Vocātīvus in -e: Salūtat: 'Dāve!'",
              "punc": "!\""
            }
          ]
        },
        {
          "numerus": "XCV",
          "marginalia": "",
          "tokens": [
            {
              "f": "Dāvus",
              "l": "Dāvus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Servus Iūliī bonus"
            },
            {
              "f": "pāret",
              "l": "pārēre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Facit quod imperātur; ↔ imperat",
              "punc": ":"
            },
            {
              "f": "sacculum",
              "l": "sacculus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Accūsātīvus in -um: sacculum pōnit"
            },
            {
              "f": "suum",
              "l": "suus, -a, -um",
              "p": "Prōnōmen possessīvum reflexīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum / Neut.",
              "d": "Accūsātīvus: sacculum suum / baculum suum"
            },
            {
              "f": "in",
              "l": "in",
              "p": "Praepositiō",
              "c": "cum Ablātīvō",
              "n": "—",
              "g": "—",
              "d": "Indicat locum ubi aliquid inest"
            },
            {
              "f": "mēnsā",
              "l": "mēnsa, -ae",
              "p": "Nōmen substantīvum",
              "c": "Ablātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Ablātīvus locī post 'in': in mēnsā"
            },
            {
              "f": "pōnit",
              "l": "pōnere",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Locat in mēnsā (-it)",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "",
          "tokens": [
            {
              "f": "Dāvus",
              "l": "Dāvus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Servus Iūliī bonus",
              "punc": ":"
            },
            {
              "f": "Vidē",
              "l": "vidēre",
              "p": "Verbum",
              "c": "Imperātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Imperātīvus: ecce! cerne!",
              "lead": "\"",
              "punc": ","
            },
            {
              "f": "domine",
              "l": "dominus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Vocātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Vocātīvus in -e: 'Salvē, domine!'",
              "punc": ":"
            },
            {
              "f": "sacculus",
              "l": "sacculus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Pera parva in quā pecūnia portātur"
            },
            {
              "f": "meus",
              "l": "meus, -a, -um",
              "p": "Prōnōmen possessīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "sacculus meus"
            },
            {
              "f": "vacuus",
              "l": "vacuus, -a, -um",
              "p": "Nōmen adiectīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "In quō nihil inest; ↔ plēnus"
            },
            {
              "f": "est",
              "l": "esse",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Persōna III sing. praesentis",
              "punc": ".\""
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
              "f": "Sūme",
              "l": "sūmere",
              "p": "Verbum",
              "c": "Imperātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Imperātīvus: Sūme sacculum!",
              "lead": "\""
            },
            {
              "f": "sacculum",
              "l": "sacculus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Accūsātīvus in -um: sacculum pōnit"
            },
            {
              "f": "tuum",
              "l": "tuus, -a, -um",
              "p": "Prōnōmen possessīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "sacculum tuum"
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
              "f": "discēde",
              "l": "discēdere",
              "p": "Verbum",
              "c": "Imperātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Imperātīvus: Discēde, bone serve!",
              "punc": ","
            },
            {
              "f": "bone",
              "l": "bonus, -a, -um",
              "p": "Nōmen adiectīvum",
              "c": "Vocātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Vocātīvus: 'bone serve!'"
            },
            {
              "f": "serve",
              "l": "servus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Vocātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Vocātīvus in -e: 'Salvē, serve!'",
              "punc": "!\""
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "",
          "tokens": [
            {
              "f": "Dāvus",
              "l": "Dāvus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Servus Iūliī bonus"
            },
            {
              "f": "sacculum",
              "l": "sacculus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Accūsātīvus in -um: sacculum pōnit"
            },
            {
              "f": "suum",
              "l": "suus, -a, -um",
              "p": "Prōnōmen possessīvum reflexīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum / Neut.",
              "d": "Accūsātīvus: sacculum suum / baculum suum"
            },
            {
              "f": "sūmit",
              "l": "sūmere",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Manū capit; ↔ pōnit"
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
              "f": "discēdit",
              "l": "discēdere",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Abit, recēdit; ↔ venit",
              "punc": "."
            }
          ]
        }
      ]
    }
  ],
  "grammaticaLatina": {
    "titulus": "GRAMMATICA LATINA",
    "subtitulus": "Vocātīvus & Imperātīvus et indicātīvus",
    "partes": [
      {
        "sectio": "I. Vocātīvus",
        "subsectio": "Vocātīvus masculīnus in -e (nōminātīvus: -us)",
        "exemplaSententiarum": [
          {
            "sg": "Mēdus Dāvum vocat: \"Dāve!\"",
            "pl": "Servus: \"Salvē, domine!\""
          }
        ],
        "regula": "'Dāve' vocātīvus est. In dēclīnātiōne secundā masculīnā, vocātīvus singulāris exit in -e (nōminātīvus: -us). Nomina in -ius exeunt in -ī (Iūlī, fīlī).",
        "exemplaVocabulorum": "Dāvus -> Dāve!; dominus -> domine!; servus -> serve!; improbus -> improbe!; Mēdus -> Mēde! (sed: Iūlius -> Iūlī!).",
        "sententiae": [
          "Iūlius Mēdum vocat: \"Mēde! Venī, improbe serve!\"",
          "Dāvus: \"Quid est, domine?\" Iūlius: \"Tacē, serve!\""
        ]
      },
      {
        "sectio": "II. Imperātīvus et indicātīvus",
        "subsectio": "Modus imperandī (-ā, -ē, -e, -ī) et modus indicandī (-at, -et, -it)",
        "exemplaSententiarum": [
          {
            "sg": "Dominus: \"Vocā Dāvum!\" (imperātīvus)",
            "pl": "Servus Dāvum vocat. (indicātīvus)"
          },
          {
            "sg": "Dominus: \"Tacē et audī!\" (imperātīvus)",
            "pl": "Servus tacet et audit. (indicātīvus)"
          },
          {
            "sg": "Dominus: \"Discēde, serve!\" (imperātīvus)",
            "pl": "Servus discēdit. (indicātīvus)"
          }
        ],
        "regula": "Dominus imperat (imperātīvus). Servus pāret (indicātīvus). Imperātīvus: [1] -ā, [2] -ē, [3] -e, [4] -ī. Indicātīvus: [1] -at, [2] -et, [3] -it, [4] -it.",
        "exemplaVocabulorum": "[1] salūtā -> salūtat; vocā -> vocat; interrogā -> interrogat.\n[2] tacē -> tacet; respondē -> respondet; vidē -> videt.\n[3] pōne -> pōnit; sūme -> sūmit; discēde -> discēdit.\n[4] audī -> audit; venī -> venit; dormī -> dormit.",
        "sententiae": [
          "Iūlius imperat: \"Sūme sacculum tuum et discēde!\" Dāvus sacculum suum sūmit et discēdit.",
          "Dominus: \"Respondē, serve!\" Dāvus respondet: \"Pecūnia tua hīc nōn est.\""
        ]
      }
    ]
  },
  "pensa": {
    "pensumA": {
      "titulus": "PĒNSVM A (Capitulum IV)",
      "descriptio": "Fōrmae grammaticae: Implē lacūnās terminātiōnibus Vocātīvī (-e) vel Imperātīvī / Indicātīvī (-ā, -ē, -e, -ī, -at, -et, -it)!",
      "quaestiones": [
        {
          "id": "p4a_1",
          "praefix": "Mēdus ad",
          "lacuna": "est",
          "inter": ". Dāvus ab",
          "lacuna2": "est",
          "suffix": ".",
          "explicatio": "Verba: adest (hīc est), abest (nōn hīc est)."
        },
        {
          "id": "p4a_2",
          "praefix": "Iūlius imper",
          "lacuna": "at",
          "inter": ": \"Voc",
          "lacuna2": "ā",
          "suffix": " Dāvum, Mēde!\"",
          "explicatio": "Indicātīvus (imperat); imperātīvus coniugātiōnis I in -ā (vocā)."
        },
        {
          "id": "p4a_3",
          "praefix": "Mēdus Dāvum vocat: \"Dāv",
          "lacuna": "e",
          "inter": "! Ven",
          "lacuna2": "ī",
          "suffix": "!\"",
          "explicatio": "Vocātīvus in -e (Dāve); imperātīvus coniugātiōnis IV in -ī (venī)."
        },
        {
          "id": "p4a_4",
          "praefix": "Dāvus ven",
          "lacuna": "it",
          "inter": " neque Iūlium vid",
          "lacuna2": "et",
          "suffix": ".",
          "explicatio": "Indicātīvus coniugātiōnis IV (venit); coniugātiōnis II (videt)."
        },
        {
          "id": "p4a_5",
          "praefix": "Mēdus: \"Salūt",
          "lacuna": "ā",
          "inter": " dominum!\" Dāvus dominum salūt",
          "lacuna2": "at",
          "suffix": ".",
          "explicatio": "Imperātīvus (salūtā); indicātīvus (salūtat)."
        },
        {
          "id": "p4a_6",
          "praefix": "\"Salvē, domin",
          "lacuna": "e",
          "inter": "!\" Dominus: \"Tac",
          "lacuna2": "ē",
          "suffix": ", serve!\"",
          "explicatio": "Vocātīvus in -e (domine); imperātīvus coniugātiōnis II in -ē (tacē)."
        },
        {
          "id": "p4a_7",
          "praefix": "Servus tac",
          "lacuna": "et",
          "inter": " neque respond",
          "lacuna2": "et",
          "suffix": ".",
          "explicatio": "Indicātīvus coniugātiōnis II (tacet, respondet)."
        },
        {
          "id": "p4a_8",
          "praefix": "Iūlius: \"Respond",
          "lacuna": "ē",
          "inter": "!\" Dāvus: \"Interrog",
          "lacuna2": "ā",
          "suffix": " Mēdum!\"",
          "explicatio": "Imperātīvī: respondē (-ē), interrogā (-ā)."
        },
        {
          "id": "p4a_9",
          "praefix": "Iūlius: \"Pōn",
          "lacuna": "e",
          "inter": " sacculum tuum in mēnsā, Dāv",
          "lacuna2": "e",
          "suffix": "!\"",
          "explicatio": "Imperātīvus coniugātiōnis III in -e (pōne); vocātīvus in -e (Dāve)."
        },
        {
          "id": "p4a_10",
          "praefix": "Dāvus pār",
          "lacuna": "et",
          "inter": ": sacculum suum in mēnsā pōn",
          "lacuna2": "it",
          "suffix": ".",
          "explicatio": "Indicātīvus coniugātiōnis II (pāret); coniugātiōnis III in -it (pōnit)."
        },
        {
          "id": "p4a_11",
          "praefix": "Iūlius: \"Sūm",
          "lacuna": "e",
          "inter": " sacculum tuum et discēd",
          "lacuna2": "e",
          "suffix": ", bone serve!\"",
          "explicatio": "Imperātīvī coniugātiōnis III in -e (sūme, discēde)."
        },
        {
          "id": "p4a_12",
          "praefix": "Dāvus sacculum suum sūm",
          "lacuna": "it",
          "inter": " et discēd",
          "lacuna2": "it",
          "suffix": ".",
          "explicatio": "Indicātīvī coniugātiōnis III in -it (sūmit, discēdit)."
        }
      ]
    },
    "pensumB": {
      "titulus": "PĒNSVM B (Capitulum IV)",
      "descriptio": "Vocābula nova: Implē lacūnās vocābulīs capitulī!",
      "quaestiones": [
        {
          "id": "p4b_1",
          "praefix": "In sacculō Iūliī ",
          "lacuna": "pecūnia",
          "suffix": " est.",
          "explicatio": "Nōmen: pecūnia (nummī in sacculō)."
        },
        {
          "id": "p4b_2",
          "praefix": "Iūlius pecūniam ",
          "lacuna": "numerat",
          "suffix": ": \"Ūnus, duo, trēs, quattuor...\"",
          "explicatio": "Verbum: numerat (computat)."
        },
        {
          "id": "p4b_3",
          "praefix": "In sacculō nōn centum, sed ",
          "lacuna": "tantum",
          "suffix": " decem nummī sunt.",
          "explicatio": "Adverbium: tantum (= sōlum)."
        },
        {
          "id": "p4b_4",
          "praefix": "Dāvus dominum ",
          "lacuna": "salūtat",
          "suffix": ": \"Salvē, domine!\"",
          "explicatio": "Verbum: salūtat (dīcit 'Salvē')."
        },
        {
          "id": "p4b_5",
          "praefix": "Iūlius: \"Pōne sacculum tuum in ",
          "lacuna": "mēnsā",
          "suffix": "!\"",
          "explicatio": "Nōmen ablātīvī locī post 'in': mēnsā."
        },
        {
          "id": "p4b_6",
          "praefix": "Dāvus sacculum ",
          "lacuna": "suum",
          "suffix": " in mēnsā pōnit.",
          "explicatio": "Prōnōmen possessīvum reflexīvum: suum."
        },
        {
          "id": "p4b_7",
          "praefix": "Sacculus Dāvī ",
          "lacuna": "vacuus",
          "suffix": " est, in sacculō eius nūlla pecūnia est.",
          "explicatio": "Adiectīvum: vacuus (in quō nihil inest)."
        },
        {
          "id": "p4b_8",
          "praefix": "In sacculō eius ",
          "lacuna": "nūlla",
          "suffix": " pecūnia est.",
          "explicatio": "Adiectīvum fēminīnum: nūlla (= nōn ūna)."
        },
        {
          "id": "p4b_9",
          "praefix": "Dāvus sacculum suum ",
          "lacuna": "sūmit",
          "suffix": " et discēdit.",
          "explicatio": "Verbum: sūmit (tollit manū; ↔ pōnit)."
        },
        {
          "id": "p4b_10",
          "praefix": "Mēdus nōn venit, quia ",
          "lacuna": "is",
          "suffix": " pecūniam Iūliī habet.",
          "explicatio": "Prōnōmen persōnāle subiectī: is."
        },
        {
          "id": "p4b_11",
          "praefix": "Iūlius baculum, ",
          "lacuna": "quod",
          "suffix": " in mēnsā est, sūmit.",
          "explicatio": "Prōnōmen relātīvum neutrum: quod (baculum quod)."
        },
        {
          "id": "p4b_12",
          "praefix": "Dominus imperat, bonus servus ",
          "lacuna": "pāret",
          "suffix": ".",
          "explicatio": "Verbum: pāret (facit quod iubētur; ↔ imperat)."
        }
      ]
    },
    "pensumC": {
      "titulus": "PĒNSVM C (Capitulum IV)",
      "descriptio": "Interrogātiōnēs: Scrībe respōnsum Latīnē, deinde aperī exemplum!",
      "quaestiones": [
        {
          "id": "p4c_1",
          "interrogatio": "Quot nummī sunt in sacculō Iūliī?",
          "exemplum": "In sacculō Iūliī decem tantum nummī sunt."
        },
        {
          "id": "p4c_2",
          "interrogatio": "Adestne Dāvus in scaenā prīmā?",
          "exemplum": "Dāvus in scaenā prīmā nōn adest, sed abest."
        },
        {
          "id": "p4c_3",
          "interrogatio": "Quis Dāvum vocat?",
          "exemplum": "Mēdus Dāvum vocat (Iūlius iubet: \"Dāvum vocā!\")."
        },
        {
          "id": "p4c_4",
          "interrogatio": "Suntne nummī Iūliī in sacculō Dāvī?",
          "exemplum": "Nōn sunt nummī Iūliī in sacculō Dāvī: sacculus eius vacuus est."
        },
        {
          "id": "p4c_5",
          "interrogatio": "Quid Iūlius pōnit in sacculō Dāvī?",
          "exemplum": "Iūlius ūnum nummum pōnit in sacculō Dāvī."
        },
        {
          "id": "p4c_6",
          "interrogatio": "Quot nummī iam in sacculō Iūliī sunt?",
          "exemplum": "Iam novem tantum nummī in sacculō Iūliī sunt."
        },
        {
          "id": "p4c_7",
          "interrogatio": "Estne vacuus sacculus Mēdī?",
          "exemplum": "Sacculus Mēdī nōn est vacuus, nam is pecūniam dominī habet."
        },
        {
          "id": "p4c_8",
          "interrogatio": "Cūr Mēdus discēdit?",
          "exemplum": "Mēdus discēdit, quia is pecūniam dominī in sacculō suō habet et baculum videt!"
        },
        {
          "id": "p4c_9",
          "interrogatio": "Quem Iūlius vocat?",
          "exemplum": "Iūlius Mēdum vocat: \"Mēde! Venī, improbe serve!\""
        },
        {
          "id": "p4c_10",
          "interrogatio": "Cūr Mēdus Iūlium nōn audit?",
          "exemplum": "Mēdus Iūlium nōn audit, quia abest (aufūgit cum pecūniā)."
        }
      ]
    }
  }
};
