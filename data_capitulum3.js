// data_capitulum3.js
// Dāta Capituli Tertii: Textus Authenticus Integer (Ørberg), Analysis Grammatica, Pēnsa, Tabula, Vocābulārium.

export const capitulumTertium = {
  "numerus": 3,
  "titulus": "CAPITVLVM TERTIVM",
  "subtitulus": "PVER IMPROBVS",
  "tabulaDeclinationum": {
    "titulus": "TABVLA DĒCLĪNĀTIŌNVM (Capitulum III)",
    "descriptio": "Casūs novī: ACCŪSĀTĪVUS (-um, -am) obiectī directī, Prōnōmina (mē, tē, eum, eam; quem, quam), et Verba (-at, -et, -it).",
    "declinationes": [
      {
        "nomen": "Accūsātīvus Singulāris (-um / -am)",
        "genus": "Masculīnum & Fēminīnum",
        "paradigma": "Mārcus -> Mārcum / Iūlia -> Iūliam",
        "casus": [
          {
            "casus": "Nōminātīvus",
            "sg": "-us / -a (Mārcus, Iūlia)",
            "pl": "-ī / -ae (puerī, puellae)"
          },
          {
            "casus": "Accūsātīvus",
            "sg": "-um / -am (Mārcum, Iūliam)",
            "pl": "-ōs / -ās (mox)"
          }
        ]
      },
      {
        "nomen": "Prōnōmina Persōnālia & Relātīva (Accūsātīvus)",
        "genus": "Prōnōmina",
        "paradigma": "mē, tē, eum, eam; quem, quam",
        "casus": [
          {
            "casus": "Persōna I & II",
            "sg": "mē (tē vocat) / tē (mē vocat)",
            "pl": "nōs / vōs"
          },
          {
            "casus": "Persōna III",
            "sg": "eum (masc.) / eam (fēm.)",
            "pl": "eōs / eās"
          },
          {
            "casus": "Relātīvum",
            "sg": "quem (masc.) / quam (fēm.)",
            "pl": "quōs / quās"
          }
        ]
      },
      {
        "nomen": "Verba: Persōna III Praesentis (-at, -et, -it)",
        "genus": "Coniugātiōnēs I, II, III/IV",
        "paradigma": "cantat, rīdet, dormit",
        "casus": [
          {
            "casus": "Coniugātiō I (-āre)",
            "sg": "cantat, pulsat, plōrat, vocat, verberat",
            "pl": "cantant, pulsant..."
          },
          {
            "casus": "Coniugātiō II (-ēre)",
            "sg": "rīdet, videt, respondet",
            "pl": "rīdent, vident..."
          },
          {
            "casus": "Coniugātiō III/IV (-ere / -īre)",
            "sg": "venit, audit, dormit",
            "pl": "veniunt, audiunt..."
          }
        ]
      }
    ]
  },
  "vocabularium": [
    {
      "lemma": "audit, audīre",
      "pars": "Verbum",
      "genus": "Coniugātiō IV",
      "notatio": "Auribus percipit: Iūlius eum audit."
    },
    {
      "lemma": "cantat, cantāre",
      "pars": "Verbum",
      "genus": "Coniugātiō I",
      "notatio": "Vōce sonōs musicōs ēdit: Iūlia cantat 'lalla'."
    },
    {
      "lemma": "cūr",
      "pars": "Adverbium",
      "genus": "Interrogātīvum",
      "notatio": "Quaerit causam: Cūr Iūlia plōrat? Quia Mārcus eam pulsat."
    },
    {
      "lemma": "dormit, dormīre",
      "pars": "Verbum",
      "genus": "Coniugātiō IV",
      "notatio": "Quiēscit oculīs clausīs: Pater dormit neque audit."
    },
    {
      "lemma": "eam",
      "pars": "Prōnōmen",
      "genus": "Accūsātīvus fēm. sg.",
      "notatio": "Accūsātīvus prōnōminis 'ea': Mārcus eam pulsat."
    },
    {
      "lemma": "eum",
      "pars": "Prōnōmen",
      "genus": "Accūsātīvus masc. sg.",
      "notatio": "Accūsātīvus prōnōminis 'is': Māter eum verberat."
    },
    {
      "lemma": "hīc",
      "pars": "Adverbium",
      "genus": "Locī",
      "notatio": "In hoc locō: Pater nōn hīc est."
    },
    {
      "lemma": "iam",
      "pars": "Adverbium",
      "genus": "Temporis",
      "notatio": "Hoc ipsō tempore: Iam Iūlia nōn cantat, sed plōrat."
    },
    {
      "lemma": "improbus, -a, -um",
      "pars": "Nōmen adiectīvum",
      "genus": "Masculīnum",
      "notatio": "↔ probus; malus: Mārcus puer improbus est."
    },
    {
      "lemma": "interrogat, interrogāre",
      "pars": "Verbum",
      "genus": "Coniugātiō I",
      "notatio": "Quaestionem facit: Aemilia Quīntum interrogat."
    },
    {
      "lemma": "īrātus, -a, -um",
      "pars": "Nōmen adiectīvum",
      "genus": "Masculīnum",
      "notatio": "Īrā commōtus: Mārcus īrātus pulsat Quīntum."
    },
    {
      "lemma": "laetus, -a, -um",
      "pars": "Nōmen adiectīvum",
      "genus": "Masculīnum",
      "notatio": "Hilaris, gaudēns: Iūlia laeta est; ↔ īrātus."
    },
    {
      "lemma": "mamma, -ae",
      "pars": "Nōmen substantīvum",
      "genus": "Fēminīnum",
      "notatio": "= māter (vōx familiāris līberōrum): Mamma! Mārcus mē pulsat!"
    },
    {
      "lemma": "mē",
      "pars": "Prōnōmen",
      "genus": "Accūsātīvus",
      "notatio": "Accūsātīvus prōnōminis 'ego': Mārcus mē pulsat."
    },
    {
      "lemma": "neque",
      "pars": "Coniūnctiō",
      "genus": "Copulātīva negātīva",
      "notatio": "= et nōn: Iūlius nōn audit neque venit."
    },
    {
      "lemma": "ō",
      "pars": "Interiectiō",
      "genus": "—",
      "notatio": "Vōx admīrantis vel dolentis: Ō Iūlia, mea parva fīlia!"
    },
    {
      "lemma": "persōna, -ae",
      "pars": "Nōmen substantīvum",
      "genus": "Fēminīnum",
      "notatio": "Homo quī in fābulā agit: Persōnae sunt Iūlia, Mārcus, Quīntus."
    },
    {
      "lemma": "plōrat, plōrāre",
      "pars": "Verbum",
      "genus": "Coniugātiō I",
      "notatio": "Lacrimat et clāmat: Iūlia plōrat 'uhuhū'."
    },
    {
      "lemma": "probus, -a, -um",
      "pars": "Nōmen adiectīvum",
      "genus": "Masculīnum",
      "notatio": "↔ improbus; bonus: Iūlia puella proba est."
    },
    {
      "lemma": "pulsat, pulsāre",
      "pars": "Verbum",
      "genus": "Coniugātiō I",
      "notatio": "Manū ferit: Mārcus Iūliam pulsat."
    },
    {
      "lemma": "quae",
      "pars": "Prōnōmen",
      "genus": "Nōminātīvus fēm. sg.",
      "notatio": "Prōnōmen relātīvum: Puella quae plōrat est Iūlia."
    },
    {
      "lemma": "quam",
      "pars": "Prōnōmen",
      "genus": "Accūsātīvus fēm. sg.",
      "notatio": "Prōnōmen relātīvum acc.: Puella quam Mārcus pulsat est Iūlia."
    },
    {
      "lemma": "quem",
      "pars": "Prōnōmen",
      "genus": "Accūsātīvus masc. sg.",
      "notatio": "Prōnōmen relātīvum / interrogātīvum: Puer quem Aemilia verberat est Mārcus. Quem vocat?"
    },
    {
      "lemma": "quī",
      "pars": "Prōnōmen",
      "genus": "Nōminātīvus masc. sg.",
      "notatio": "Prōnōmen relātīvum: Puer quī puellam pulsat improbus est."
    },
    {
      "lemma": "quia",
      "pars": "Coniūnctiō",
      "genus": "Causālis",
      "notatio": "Causam exponit: Iūlia plōrat, quia Mārcus eam pulsat."
    },
    {
      "lemma": "respondet, respondēre",
      "pars": "Verbum",
      "genus": "Coniugātiō II",
      "notatio": "Ad interrogātum dīcit: Quīntus respondet."
    },
    {
      "lemma": "rīdet, rīdēre",
      "pars": "Verbum",
      "genus": "Coniugātiō II",
      "notatio": "Hahahae facit: Mārcus rīdet."
    },
    {
      "lemma": "scaena, -ae",
      "pars": "Nōmen substantīvum",
      "genus": "Fēminīnum",
      "notatio": "Pars capitulī theātrālis: Scaena prīma, scaena secunda."
    },
    {
      "lemma": "tē",
      "pars": "Prōnōmen",
      "genus": "Accūsātīvus",
      "notatio": "Accūsātīvus prōnōminis 'tū': Iūlia tē vocat."
    },
    {
      "lemma": "venit, venīre",
      "pars": "Verbum",
      "genus": "Coniugātiō IV",
      "notatio": "Accēdit: Aemilia venit; pater nōn venit."
    },
    {
      "lemma": "verberat, verberāre",
      "pars": "Verbum",
      "genus": "Coniugātiō I",
      "notatio": "Pulsat et pulsat (tuxtax): Māter fīlium improbum verberat."
    },
    {
      "lemma": "videt, vidēre",
      "pars": "Verbum",
      "genus": "Coniugātiō II",
      "notatio": "Oculīs cernit: Quīntus Mārcum videt."
    },
    {
      "lemma": "vocat, vocāre",
      "pars": "Verbum",
      "genus": "Coniugātiō I",
      "notatio": "Clāmat ad se: Iūlia Aemiliam vocat: 'Mamma!'"
    }
  ],
  "sectiones": [
    {
      "titulusSectio": "SCAENA PRĪMA",
      "versus": [
        {
          "numerus": "I",
          "marginalia": "scaena",
          "tokens": [
            {
              "f": "Iūlia",
              "l": "Iūlia, -ae",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Fīlia Iūliī et Aemiliae, puella proba"
            },
            {
              "f": "cantat",
              "l": "cantāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Vōce sonōs musicōs ēdit (-at)",
              "punc": ":"
            },
            {
              "f": "Lalla",
              "l": "lalla",
              "p": "Interiectiō / Sonus",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Sonus cantantis puellae",
              "lead": "\"",
              "punc": ".\""
            },
            {
              "f": "Iūlia",
              "l": "Iūlia, -ae",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Fīlia Iūliī et Aemiliae, puella proba"
            },
            {
              "f": "laeta",
              "l": "laetus, -a, -um",
              "p": "Nōmen adiectīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Fēminīnum: Iūlia laeta est"
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
          "marginalia": "persōna",
          "tokens": [
            {
              "f": "Mārcus",
              "l": "Mārcus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Fīlius prīmus, puer improbus",
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
              "punc": "!\""
            },
            {
              "f": "Mārcus",
              "l": "Mārcus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Fīlius prīmus, puer improbus"
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
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "",
          "tokens": [
            {
              "f": "Iūlia",
              "l": "Iūlia, -ae",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Fīlia Iūliī et Aemiliae, puella proba"
            },
            {
              "f": "cantat",
              "l": "cantāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Vōce sonōs musicōs ēdit (-at)",
              "punc": ":"
            },
            {
              "f": "Lalla",
              "l": "lalla",
              "p": "Interiectiō / Sonus",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Sonus cantantis puellae",
              "lead": "\"",
              "punc": ","
            },
            {
              "f": "lalla",
              "l": "lalla",
              "p": "Interiectiō / Sonus",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Sonus cantantis puellae",
              "punc": ".\""
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "",
          "tokens": [
            {
              "f": "Mārcus",
              "l": "Mārcus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Fīlius prīmus, puer improbus",
              "punc": ":"
            },
            {
              "f": "Ssst",
              "l": "ssst",
              "p": "Interiectiō",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Vōx silentium poscentis",
              "lead": "\"",
              "punc": "!\""
            },
            {
              "f": "Mārcus",
              "l": "Mārcus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Fīlius prīmus, puer improbus"
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
              "d": "Persōna III sing. praesentis",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "V",
          "marginalia": "",
          "tokens": [
            {
              "f": "Iūlia",
              "l": "Iūlia, -ae",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Fīlia Iūliī et Aemiliae, puella proba"
            },
            {
              "f": "cantat",
              "l": "cantāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Vōce sonōs musicōs ēdit (-at)",
              "punc": ":"
            },
            {
              "f": "Lalla",
              "l": "lalla",
              "p": "Interiectiō / Sonus",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Sonus cantantis puellae",
              "lead": "\"",
              "punc": ","
            },
            {
              "f": "lalla",
              "l": "lalla",
              "p": "Interiectiō / Sonus",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Sonus cantantis puellae",
              "punc": ","
            },
            {
              "f": "lalla",
              "l": "lalla",
              "p": "Interiectiō / Sonus",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Sonus cantantis puellae",
              "punc": ".\""
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "Mārcus Iūliam pulsat",
          "tokens": [
            {
              "f": "Mārcus",
              "l": "Mārcus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Fīlius prīmus, puer improbus"
            },
            {
              "f": "Iūliam",
              "l": "Iūlia, -ae",
              "p": "Nōmen proprium",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Accūsātīvus: Mārcus Iūliam pulsat"
            },
            {
              "f": "pulsat",
              "l": "pulsāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Manū percutit (-at)",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "Iūlia plōrat",
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
              "f": "Iūlia",
              "l": "Iūlia, -ae",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Fīlia Iūliī et Aemiliae, puella proba"
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
              "f": "cantat",
              "l": "cantāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Vōce sonōs musicōs ēdit (-at)",
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
              "f": "plōrat",
              "l": "plōrāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Lacrimat et clāmat (-at)",
              "punc": ":"
            },
            {
              "f": "Uhuhū",
              "l": "uhuhū",
              "p": "Interiectiō / Sonus",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Sonus plōrantis puellae vel puerī",
              "lead": "\"",
              "punc": "!\""
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "Mārcus rīdet",
          "tokens": [
            {
              "f": "Mārcus",
              "l": "Mārcus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Fīlius prīmus, puer improbus"
            },
            {
              "f": "rīdet",
              "l": "rīdēre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Ōre laetitiam dēmōnstrat (-et)",
              "punc": ":"
            },
            {
              "f": "Hahahae",
              "l": "hahahae",
              "p": "Interiectiō / Sonus",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Sonus rīdēntis puerī",
              "lead": "\"",
              "punc": "!\""
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "Quīntus Mārcum videt",
          "tokens": [
            {
              "f": "Quīntus",
              "l": "Quīntus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Fīlius secundus, puer probus"
            },
            {
              "f": "Mārcum",
              "l": "Mārcus, -ī",
              "p": "Nōmen proprium",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Accūsātīvus: persōna quem verberat"
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
              "f": "Mārcus",
              "l": "Mārcus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Fīlius prīmus, puer improbus"
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
              "d": "Oculīs percipit (-et)"
            },
            {
              "f": "Quīntum",
              "l": "Quīntus, -ī",
              "p": "Nōmen proprium",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Accūsātīvus: persōna quem videt",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "X",
          "marginalia": "Mārcus Quīntum nōn videt",
          "tokens": [
            {
              "f": "Quīntus",
              "l": "Quīntus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Fīlius secundus, puer probus",
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
              "f": "Mārcus",
              "l": "Mārcus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Fīlius prīmus, puer improbus"
            },
            {
              "f": "puellam",
              "l": "puella, -ae",
              "p": "Nōmen substantīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Accūsātīvus singulāris in -am"
            },
            {
              "f": "pulsat",
              "l": "pulsāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Manū percutit (-at)"
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
              "f": "et",
              "l": "et",
              "p": "Coniūnctiō",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Coniunctio copulātīva"
            },
            {
              "f": "rīdet",
              "l": "rīdēre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Ōre laetitiam dēmōnstrat (-et)",
              "punc": "!\""
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "Quīntus Mārcum pulsat",
          "tokens": [
            {
              "f": "Quīntus",
              "l": "Quīntus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Fīlius secundus, puer probus"
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
              "f": "et",
              "l": "et",
              "p": "Coniūnctiō",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Coniunctio copulātīva"
            },
            {
              "f": "Mārcum",
              "l": "Mārcus, -ī",
              "p": "Nōmen proprium",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Accūsātīvus: persōna quem verberat"
            },
            {
              "f": "pulsat",
              "l": "pulsāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Manū percutit (-at)",
              "punc": "!"
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
              "d": "Ōre laetitiam dēmōnstrat (-et)"
            },
            {
              "f": "Mārcus",
              "l": "Mārcus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Fīlius prīmus, puer improbus",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "Mārcus Quīntum pulsat",
          "tokens": [
            {
              "f": "Mārcus",
              "l": "Mārcus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Fīlius prīmus, puer improbus"
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
              "f": "pulsat",
              "l": "pulsāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Manū percutit (-at)"
            },
            {
              "f": "Quīntum",
              "l": "Quīntus, -ī",
              "p": "Nōmen proprium",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Accūsātīvus: persōna quem videt",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "",
          "tokens": [
            {
              "f": "Iūlia",
              "l": "Iūlia, -ae",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Fīlia Iūliī et Aemiliae, puella proba",
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
              "f": "māter",
              "l": "māter, mātris",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Vocātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Fēmina quae līberōs genuit (dēclīnātiō III)",
              "punc": "?\""
            },
            {
              "f": "Iūlia",
              "l": "Iūlia, -ae",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Fīlia Iūliī et Aemiliae, puella proba"
            },
            {
              "f": "Aemiliam",
              "l": "Aemilia, -ae",
              "p": "Nōmen proprium",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Accūsātīvus: persōna quam vocat"
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
          "marginalia": "mamma = māter",
          "tokens": [
            {
              "f": "Iūlia",
              "l": "Iūlia, -ae",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Fīlia Iūliī et Aemiliae, puella proba"
            },
            {
              "f": "Aemiliam",
              "l": "Aemilia, -ae",
              "p": "Nōmen proprium",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Accūsātīvus: persōna quam vocat"
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
              "f": "Māter",
              "l": "māter, mātris",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Vocātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Fēmina quae līberōs genuit (dēclīnātiō III)",
              "lead": "\"",
              "punc": "!"
            },
            {
              "f": "Mārcus",
              "l": "Mārcus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Fīlius prīmus, puer improbus"
            },
            {
              "f": "Quīntum",
              "l": "Quīntus, -ī",
              "p": "Nōmen proprium",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Accūsātīvus: persōna quem videt"
            },
            {
              "f": "pulsat",
              "l": "pulsāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Manū percutit (-at)",
              "punc": "!\""
            }
          ]
        },
        {
          "numerus": "XV",
          "marginalia": "Iūlia Aemiliam vocat",
          "tokens": [
            {
              "f": "Mārcus",
              "l": "Mārcus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Fīlius prīmus, puer improbus"
            },
            {
              "f": "īrātus",
              "l": "īrātus, -a, -um",
              "p": "Nōmen adiectīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Īrā commōtus, furēns",
              "lead": "(",
              "punc": "):"
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
              "punc": "!\""
            },
            {
              "f": "Mārcus",
              "l": "Mārcus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Fīlius prīmus, puer improbus"
            },
            {
              "f": "Iūliam",
              "l": "Iūlia, -ae",
              "p": "Nōmen proprium",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Accūsātīvus: Mārcus Iūliam pulsat"
            },
            {
              "f": "pulsat",
              "l": "pulsāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Manū percutit (-at)",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "",
          "tokens": [
            {
              "f": "Iūlia",
              "l": "Iūlia, -ae",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Fīlia Iūliī et Aemiliae, puella proba"
            },
            {
              "f": "plōrat",
              "l": "plōrāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Lacrimat et clāmat (-at)"
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
              "f": "Aemiliam",
              "l": "Aemilia, -ae",
              "p": "Nōmen proprium",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Accūsātīvus: persōna quam vocat"
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
              "f": "Mamma",
              "l": "mamma, -ae",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Vocātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "= māter (vōx familiāris līberōrum)",
              "lead": "\"",
              "punc": "!"
            },
            {
              "f": "Mam-ma",
              "l": "mamma, -ae",
              "p": "Nōmen substantīvum",
              "c": "Vocātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Clāmor plōrantis puellae",
              "punc": "!"
            },
            {
              "f": "Mārcus",
              "l": "Mārcus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Fīlius prīmus, puer improbus"
            },
            {
              "f": "mē",
              "l": "ego",
              "p": "Prōnōmen persōnāle",
              "c": "Accūsātīvus / Ablātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Persōna I: Mārcus mē pulsat"
            },
            {
              "f": "pulsat",
              "l": "pulsāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Manū percutit (-at)",
              "punc": "!\""
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "Aemilia venit",
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
              "f": "Aemilia",
              "l": "Aemilia, -ae",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Fēmina Rōmāna, māter"
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
              "f": "Quis",
              "l": "quis, quid",
              "p": "Prōnōmen interrogātīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Quis mē vocat?",
              "lead": "\""
            },
            {
              "f": "mē",
              "l": "ego",
              "p": "Prōnōmen persōnāle",
              "c": "Accūsātīvus / Ablātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Persōna I: Mārcus mē pulsat"
            },
            {
              "f": "vocat",
              "l": "vocāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Nōmine compellat (-at)",
              "punc": "?\""
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "interrogat ↔ respondet",
          "tokens": [
            {
              "f": "Quīntus",
              "l": "Quīntus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Fīlius secundus, puer probus"
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
              "f": "Iūlia",
              "l": "Iūlia, -ae",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Fīlia Iūliī et Aemiliae, puella proba",
              "lead": "\""
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
              "f": "vocat",
              "l": "vocāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Nōmine compellat (-at)",
              "punc": ".\""
            }
          ]
        },
        {
          "numerus": "XX",
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
              "f": "Quīntum",
              "l": "Quīntus, -ī",
              "p": "Nōmen proprium",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Accūsātīvus: persōna quem videt"
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
              "f": "Iūlia",
              "l": "Iūlia, -ae",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Fīlia Iūliī et Aemiliae, puella proba"
            },
            {
              "f": "plōrat",
              "l": "plōrāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Lacrimat et clāmat (-at)",
              "punc": "?\""
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "cūr...? ...quia...",
          "tokens": [
            {
              "f": "Quīntus",
              "l": "Quīntus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Fīlius secundus, puer probus"
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
              "f": "Iūlia",
              "l": "Iūlia, -ae",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Fīlia Iūliī et Aemiliae, puella proba",
              "lead": "\""
            },
            {
              "f": "plōrat",
              "l": "plōrāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Lacrimat et clāmat (-at)",
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
              "f": "Mārcus",
              "l": "Mārcus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Fīlius prīmus, puer improbus"
            },
            {
              "f": "eam",
              "l": "is, ea, id",
              "p": "Prōnōmen dēmōnstrātīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Accūsātīvus: Mārcus eam pulsat"
            },
            {
              "f": "pulsat",
              "l": "pulsāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Manū percutit (-at)",
              "punc": ".\""
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
              "f": "Puer",
              "l": "puer, puerī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Vocātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Infāns masculus (dēclīnātiō II in -er)"
            },
            {
              "f": "parvam",
              "l": "parvus, -a, -um",
              "p": "Nōmen adiectīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Accūsātīvus: parvam puellam"
            },
            {
              "f": "puellam",
              "l": "puella, -ae",
              "p": "Nōmen substantīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Accūsātīvus singulāris in -am"
            },
            {
              "f": "pulsat",
              "l": "pulsāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Manū percutit (-at)",
              "punc": "?"
            },
            {
              "f": "Fū",
              "l": "fū",
              "p": "Interiectiō",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Vōx indignantis vel obiūrgantis",
              "punc": "!"
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
              "f": "Mārcus",
              "l": "Mārcus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Fīlius prīmus, puer improbus"
            },
            {
              "f": "Iūliam",
              "l": "Iūlia, -ae",
              "p": "Nōmen proprium",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Accūsātīvus: Mārcus Iūliam pulsat"
            },
            {
              "f": "pulsat",
              "l": "pulsāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Manū percutit (-at)",
              "punc": "?\""
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
              "d": "Fīlius secundus, puer probus",
              "punc": ":"
            },
            {
              "f": "Quia",
              "l": "quia",
              "p": "Coniūnctiō causālis",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Indicat causam",
              "lead": "\""
            },
            {
              "f": "Iūlia",
              "l": "Iūlia, -ae",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Fīlia Iūliī et Aemiliae, puella proba"
            },
            {
              "f": "cantat",
              "l": "cantāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Vōce sonōs musicōs ēdit (-at)",
              "punc": ".\""
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "eam: Iūliam",
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
              "f": "Ō",
              "l": "ō",
              "p": "Interiectiō",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Vōx admīrantis vel invocantis",
              "lead": "\""
            },
            {
              "f": "Iūlia",
              "l": "Iūlia, -ae",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Fīlia Iūliī et Aemiliae, puella proba",
              "punc": ","
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
              "f": "parva",
              "l": "parvus, -a, -um",
              "p": "Nōmen adiectīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "parva fīlia"
            },
            {
              "f": "fīlia",
              "l": "fīlia, -ae",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Vocātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Puella respectū parentum",
              "punc": "!"
            },
            {
              "f": "Mārcus",
              "l": "Mārcus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Fīlius prīmus, puer improbus"
            },
            {
              "f": "puer",
              "l": "puer, puerī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Vocātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Infāns masculus (dēclīnātiō II in -er)"
            },
            {
              "f": "probus",
              "l": "probus, -a, -um",
              "p": "Nōmen adiectīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "↔ improbus; bonus, rēctus"
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
              "punc": ";"
            },
            {
              "f": "Mārcus",
              "l": "Mārcus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Fīlius prīmus, puer improbus"
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
              "f": "puer",
              "l": "puer, puerī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Vocātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Infāns masculus (dēclīnātiō II in -er)"
            },
            {
              "f": "improbus",
              "l": "improbus, -a, -um",
              "p": "Nōmen adiectīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "↔ probus; malus, iniūstus",
              "punc": "!\""
            }
          ]
        },
        {
          "numerus": "XXV",
          "marginalia": "im-probus ↔ probus",
          "tokens": [
            {
              "f": "Quīntus",
              "l": "Quīntus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Fīlius secundus, puer probus",
              "punc": ":"
            },
            {
              "f": "Iūlia",
              "l": "Iūlia, -ae",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Fīlia Iūliī et Aemiliae, puella proba",
              "lead": "\""
            },
            {
              "f": "puella",
              "l": "puella, -ae",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Vocātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Infāns fēmina"
            },
            {
              "f": "proba",
              "l": "probus, -a, -um",
              "p": "Nōmen adiectīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Fēminīnum: puella proba"
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
          "marginalia": "cūr Iūlius nōn venit?",
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
              "f": "Quīntum",
              "l": "Quīntus, -ī",
              "p": "Nōmen proprium",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Accūsātīvus: persōna quem videt"
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
              "f": "Iūlius",
              "l": "Iūlius, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Vir Rōmānus, pater familiae",
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
              "f": "venit",
              "l": "venīre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Accēdit, advenit (-it)",
              "punc": "?\""
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
              "f": "Iūlium",
              "l": "Iūlius, -ī",
              "p": "Nōmen proprium",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Accūsātīvus: persōna quem vocat/videt"
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
          "marginalia": "",
          "tokens": [
            {
              "f": "Respondet",
              "l": "respondēre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Ad interrogātum dīcit (-et)"
            },
            {
              "f": "Mārcus",
              "l": "Mārcus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Fīlius prīmus, puer improbus",
              "punc": ":"
            },
            {
              "f": "Pater",
              "l": "pater, patris",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Vocātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Vir quī līberōs genuit (dēclīnātiō III)",
              "lead": "\""
            },
            {
              "f": "dormit",
              "l": "dormīre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Quiēscit oculīs clausīs (-it)",
              "punc": ".\""
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
              "d": "Fīlius secundus, puer probus",
              "punc": ":"
            },
            {
              "f": "Māter",
              "l": "māter, mātris",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Vocātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Fēmina quae līberōs genuit (dēclīnātiō III)",
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
              "f": "tē",
              "l": "tū",
              "p": "Prōnōmen persōnāle",
              "c": "Accūsātīvus / Ablātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Persōna II: Iūlia tē vocat",
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
              "f": "mē",
              "l": "ego",
              "p": "Prōnōmen persōnāle",
              "c": "Accūsātīvus / Ablātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Persōna I: Mārcus mē pulsat"
            },
            {
              "f": "interrogat",
              "l": "interrogāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Quaestionem pōnit (-at)",
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
              "d": "Fēmina Rōmāna, māter",
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
              "punc": ","
            },
            {
              "f": "puerī",
              "l": "puer, puerī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Vocātīvus",
              "n": "Plūrālis",
              "g": "Masculīnum",
              "d": "Plūrāle: puer -> puerī",
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
              "f": "pater",
              "l": "pater, patris",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Vocātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Vir quī līberōs genuit (dēclīnātiō III)",
              "punc": "?\""
            }
          ]
        },
        {
          "numerus": "XXX",
          "marginalia": "Quīntus Iūlium vocat",
          "tokens": [
            {
              "f": "Quīntus",
              "l": "Quīntus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Fīlius secundus, puer probus",
              "punc": ":"
            },
            {
              "f": "Pater",
              "l": "pater, patris",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Vocātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Vir quī līberōs genuit (dēclīnātiō III)",
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
              "f": "Mārcus",
              "l": "Mārcus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Fīlius prīmus, puer improbus"
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
          "marginalia": "Iūlius dormit",
          "tokens": [
            {
              "f": "Quīntus",
              "l": "Quīntus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Fīlius secundus, puer probus"
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
              "f": "Pater",
              "l": "pater, patris",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Vocātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Vir quī līberōs genuit (dēclīnātiō III)",
              "lead": "\"",
              "punc": "!"
            },
            {
              "f": "Pa-ter",
              "l": "pater, patris",
              "p": "Nōmen substantīvum",
              "c": "Vocātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Clāmor vocantis puerī",
              "punc": "!\""
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "ne-que = et nōn",
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
              "f": "Quīntum",
              "l": "Quīntus, -ī",
              "p": "Nōmen proprium",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Accūsātīvus: persōna quem videt"
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
          "marginalia": "eum: Quīntum",
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
              "f": "Iūlius",
              "l": "Iūlius, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Vir Rōmānus, pater familiae"
            },
            {
              "f": "Quīntum",
              "l": "Quīntus, -ī",
              "p": "Nōmen proprium",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Accūsātīvus: persōna quem videt"
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
              "d": "Auribus percipit (-it)",
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
              "d": "Auribus percipit (-it)",
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
              "f": "dormit",
              "l": "dormīre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Quiēscit oculīs clausīs (-it)",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "",
          "tokens": [
            {
              "f": "Mārcus",
              "l": "Mārcus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Fīlius prīmus, puer improbus",
              "punc": ":"
            },
            {
              "f": "Hahae",
              "l": "hahae",
              "p": "Interiectiō / Sonus",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Sonus rīdēntis puerī",
              "lead": "\"",
              "punc": "!"
            },
            {
              "f": "Pater",
              "l": "pater, patris",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Vocātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Vir quī līberōs genuit (dēclīnātiō III)"
            },
            {
              "f": "dormit",
              "l": "dormīre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Quiēscit oculīs clausīs (-it)"
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
              "f": "tē",
              "l": "tū",
              "p": "Prōnōmen persōnāle",
              "c": "Accūsātīvus / Ablātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Persōna II: Iūlia tē vocat"
            },
            {
              "f": "audit",
              "l": "audīre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Auribus percipit (-it)",
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
              "f": "Fū",
              "l": "fū",
              "p": "Interiectiō",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Vōx indignantis vel obiūrgantis",
              "lead": "\"",
              "punc": ","
            },
            {
              "f": "puer",
              "l": "puer, puerī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Vocātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Infāns masculus (dēclīnātiō II in -er)",
              "punc": "!\""
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
              "f": "īrāta",
              "l": "īrātus, -a, -um",
              "p": "Nōmen adiectīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Fēminīnum: Aemilia īrāta est"
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
          "marginalia": "verberat = pulsat et pulsat",
          "tokens": [
            {
              "f": "Māter",
              "l": "māter, mātris",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Vocātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Fēmina quae līberōs genuit (dēclīnātiō III)"
            },
            {
              "f": "fīlium",
              "l": "fīlius, -ī",
              "p": "Nōmen substantīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Accūsātīvus in -um: fīlium verberat"
            },
            {
              "f": "verberat",
              "l": "verberāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Pulsat et pulsat ('tuxtax')",
              "punc": ":"
            },
            {
              "f": "tuxtax",
              "l": "tuxtax",
              "p": "Interiectiō / Onomatopoeia",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Sonus verberantis manūs vel baculī",
              "punc": ","
            },
            {
              "f": "tuxtax",
              "l": "tuxtax",
              "p": "Interiectiō / Onomatopoeia",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Sonus verberantis manūs vel baculī",
              "punc": "..."
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "eum: Mārcum",
          "tokens": [
            {
              "f": "Mārcus",
              "l": "Mārcus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Fīlius prīmus, puer improbus"
            },
            {
              "f": "plōrat",
              "l": "plōrāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Lacrimat et clāmat (-at)",
              "punc": ":"
            },
            {
              "f": "Uhuhū",
              "l": "uhuhū",
              "p": "Interiectiō / Sonus",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Sonus plōrantis puellae vel puerī",
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
              "f": "Iūlius",
              "l": "Iūlius, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Vir Rōmānus, pater familiae"
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
              "f": "audit",
              "l": "audīre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Auribus percipit (-it)",
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
              "f": "nōn",
              "l": "nōn",
              "p": "Adverbium",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Negat sententiam"
            },
            {
              "f": "dormit",
              "l": "dormīre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Quiēscit oculīs clausīs (-it)"
            },
            {
              "f": "pater",
              "l": "pater, patris",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Vocātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Vir quī līberōs genuit (dēclīnātiō III)",
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
              "d": "Fīlius secundus, puer probus",
              "punc": ":"
            },
            {
              "f": "Pater",
              "l": "pater, patris",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Vocātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Vir quī līberōs genuit (dēclīnātiō III)",
              "lead": "\""
            },
            {
              "f": "venit",
              "l": "venīre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Accēdit, advenit (-it)",
              "punc": ".\""
            }
          ]
        },
        {
          "numerus": "XL",
          "marginalia": "eum-que = et eum",
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
              "f": "Quīntum",
              "l": "Quīntus, -ī",
              "p": "Nōmen proprium",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Accūsātīvus: persōna quem videt"
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
              "d": "Auribus percipit (-it)",
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
              "f": "Mārcus",
              "l": "Mārcus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Fīlius prīmus, puer improbus"
            },
            {
              "f": "plōrat",
              "l": "plōrāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Lacrimat et clāmat (-at)",
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
              "f": "Quīntum",
              "l": "Quīntus, -ī",
              "p": "Nōmen proprium",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Accūsātīvus: persōna quem videt"
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
              "f": "eumque",
              "l": "is, ea, id + -que",
              "p": "Prōnōmen + Coniūnctiō",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "= et eum"
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
              "f": "Mārcus",
              "l": "Mārcus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Fīlius prīmus, puer improbus"
            },
            {
              "f": "plōrat",
              "l": "plōrāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Lacrimat et clāmat (-at)",
              "punc": "?\""
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "eum: Mārcum",
          "tokens": [
            {
              "f": "Quīntus",
              "l": "Quīntus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Fīlius secundus, puer probus"
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
              "f": "Mārcus",
              "l": "Mārcus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Fīlius prīmus, puer improbus",
              "lead": "\""
            },
            {
              "f": "plōrat",
              "l": "plōrāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Lacrimat et clāmat (-at)",
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
              "f": "māter",
              "l": "māter, mātris",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Vocātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Fēmina quae līberōs genuit (dēclīnātiō III)"
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
              "f": "verberat",
              "l": "verberāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Pulsat et pulsat ('tuxtax')",
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
              "f": "Sed",
              "l": "sed",
              "p": "Coniūnctiō",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Coniunctio adversātīva",
              "lead": "\""
            },
            {
              "f": "cūr",
              "l": "cūr",
              "p": "Adverbium interrogātīvum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Quaerit causam (Cūr...? Quia...)"
            },
            {
              "f": "māter",
              "l": "māter, mātris",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Vocātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Fēmina quae līberōs genuit (dēclīnātiō III)"
            },
            {
              "f": "Mārcum",
              "l": "Mārcus, -ī",
              "p": "Nōmen proprium",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Accūsātīvus: persōna quem verberat"
            },
            {
              "f": "verberat",
              "l": "verberāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Pulsat et pulsat ('tuxtax')",
              "punc": "?\""
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
              "d": "Fīlius secundus, puer probus",
              "punc": ":"
            },
            {
              "f": "Mārcum",
              "l": "Mārcus, -ī",
              "p": "Nōmen proprium",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Accūsātīvus: persōna quem verberat",
              "lead": "\""
            },
            {
              "f": "verberat",
              "l": "verberāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Pulsat et pulsat ('tuxtax')",
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
              "f": "puer",
              "l": "puer, puerī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Vocātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Infāns masculus (dēclīnātiō II in -er)"
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
              "punc": "."
            },
            {
              "f": "Mārcus",
              "l": "Mārcus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Fīlius prīmus, puer improbus"
            },
            {
              "f": "parvam",
              "l": "parvus, -a, -um",
              "p": "Nōmen adiectīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Accūsātīvus: parvam puellam"
            },
            {
              "f": "puellam",
              "l": "puella, -ae",
              "p": "Nōmen substantīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Accūsātīvus singulāris in -am"
            },
            {
              "f": "pulsat",
              "l": "pulsāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Manū percutit (-at)",
              "punc": "!\""
            }
          ]
        },
        {
          "numerus": "XLV",
          "marginalia": "",
          "tokens": [
            {
              "f": "Iūlia",
              "l": "Iūlia, -ae",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Fīlia Iūliī et Aemiliae, puella proba",
              "punc": ":"
            },
            {
              "f": "Mamma",
              "l": "mamma, -ae",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Vocātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "= māter (vōx familiāris līberōrum)",
              "lead": "\"",
              "punc": "!"
            },
            {
              "f": "Pater",
              "l": "pater, patris",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Vocātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Vir quī līberōs genuit (dēclīnātiō III)"
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
              "f": "Tuus",
              "l": "tuus, -a, -um",
              "p": "Prōnōmen possessīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "nummus tuus",
              "lead": "\""
            },
            {
              "f": "Mārcus",
              "l": "Mārcus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Fīlius prīmus, puer improbus"
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
              "f": "Fū",
              "l": "fū",
              "p": "Interiectiō",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Vōx indignantis vel obiūrgantis",
              "lead": "\"",
              "punc": ","
            },
            {
              "f": "puer",
              "l": "puer, puerī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Vocātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Infāns masculus (dēclīnātiō II in -er)",
              "punc": "!"
            },
            {
              "f": "Puer",
              "l": "puer, puerī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Vocātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Infāns masculus (dēclīnātiō II in -er)"
            },
            {
              "f": "probus",
              "l": "probus, -a, -um",
              "p": "Nōmen adiectīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "↔ improbus; bonus, rēctus"
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
              "f": "pulsat",
              "l": "pulsāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Manū percutit (-at)"
            },
            {
              "f": "puellam",
              "l": "puella, -ae",
              "p": "Nōmen substantīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Accūsātīvus singulāris in -am",
              "punc": "."
            },
            {
              "f": "Puer",
              "l": "puer, puerī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Vocātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Infāns masculus (dēclīnātiō II in -er)"
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
              "f": "parvam",
              "l": "parvus, -a, -um",
              "p": "Nōmen adiectīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Accūsātīvus: parvam puellam"
            },
            {
              "f": "puellam",
              "l": "puella, -ae",
              "p": "Nōmen substantīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Accūsātīvus singulāris in -am"
            },
            {
              "f": "pulsat",
              "l": "pulsāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Manū percutit (-at)"
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
              "f": "īrātus",
              "l": "īrātus, -a, -um",
              "p": "Nōmen adiectīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Īrā commōtus, furēns"
            },
            {
              "f": "puerum",
              "l": "puer, puerī",
              "p": "Nōmen substantīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Accūsātīvus singulāris in -um"
            },
            {
              "f": "improbum",
              "l": "improbus, -a, -um",
              "p": "Nōmen adiectīvum",
              "c": "Accūsātīvus / Neut.",
              "n": "Singulāris",
              "g": "Masculīnum / Neut.",
              "d": "Accūsātīvus: puerum improbum"
            },
            {
              "f": "verberat",
              "l": "verberāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Pulsat et pulsat ('tuxtax')",
              "punc": ":"
            },
            {
              "f": "tuxtax",
              "l": "tuxtax",
              "p": "Interiectiō / Onomatopoeia",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Sonus verberantis manūs vel baculī",
              "punc": ","
            },
            {
              "f": "tuxtax",
              "l": "tuxtax",
              "p": "Interiectiō / Onomatopoeia",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Sonus verberantis manūs vel baculī",
              "punc": ","
            },
            {
              "f": "tuxtax",
              "l": "tuxtax",
              "p": "Interiectiō / Onomatopoeia",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Sonus verberantis manūs vel baculī",
              "punc": "..."
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "Iūlia nōn laeta est",
          "tokens": [
            {
              "f": "Mārcus",
              "l": "Mārcus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Fīlius prīmus, puer improbus"
            },
            {
              "f": "plōrat",
              "l": "plōrāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Lacrimat et clāmat (-at)",
              "punc": "."
            },
            {
              "f": "Quīntus",
              "l": "Quīntus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Fīlius secundus, puer probus"
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
              "d": "Persōna III sing. praesentis"
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
              "f": "rīdet",
              "l": "rīdēre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Ōre laetitiam dēmōnstrat (-et)",
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
          "numerus": "L",
          "marginalia": "",
          "tokens": [
            {
              "f": "Iūlia",
              "l": "Iūlia, -ae",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Fīlia Iūliī et Aemiliae, puella proba"
            },
            {
              "f": "laeta",
              "l": "laetus, -a, -um",
              "p": "Nōmen adiectīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Fēminīnum: Iūlia laeta est"
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
              "f": "neque",
              "l": "neque",
              "p": "Coniūnctiō",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "= et nōn"
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
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "",
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
              "f": "nōn",
              "l": "nōn",
              "p": "Adverbium",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Negat sententiam"
            },
            {
              "f": "laeta",
              "l": "laetus, -a, -um",
              "p": "Nōmen adiectīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Fēminīnum: Iūlia laeta est"
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
              "f": "Iūlia",
              "l": "Iūlia, -ae",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Fīlia Iūliī et Aemiliae, puella proba",
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
              "f": "laeta",
              "l": "laetus, -a, -um",
              "p": "Nōmen adiectīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Fēminīnum: Iūlia laeta est"
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
              "f": "quia",
              "l": "quia",
              "p": "Coniūnctiō causālis",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Indicat causam (respondet ad 'cūr')"
            },
            {
              "f": "Mārcus",
              "l": "Mārcus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Fīlius prīmus, puer improbus"
            },
            {
              "f": "plōrat",
              "l": "plōrāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Lacrimat et clāmat (-at)",
              "punc": "."
            },
            {
              "f": "Iūlia",
              "l": "Iūlia, -ae",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Fīlia Iūliī et Aemiliae, puella proba"
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
              "f": "puella",
              "l": "puella, -ae",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Vocātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Infāns fēmina"
            },
            {
              "f": "proba",
              "l": "probus, -a, -um",
              "p": "Nōmen adiectīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Fēminīnum: puella proba",
              "punc": "!"
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "quī / quae",
          "tokens": [
            {
              "f": "Puer",
              "l": "puer, puerī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Vocātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Infāns masculus (dēclīnātiō II in -er)"
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
              "f": "Puella",
              "l": "puella, -ae",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Vocātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Infāns fēmina"
            },
            {
              "f": "plōrat",
              "l": "plōrāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Lacrimat et clāmat (-at)",
              "punc": "."
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
              "f": "est",
              "l": "esse",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Persōna III sing. praesentis"
            },
            {
              "f": "puer",
              "l": "puer, puerī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Vocātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Infāns masculus (dēclīnātiō II in -er)"
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
              "f": "rīdet",
              "l": "rīdēre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Ōre laetitiam dēmōnstrat (-et)",
              "punc": "?"
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "puer quī rīdet",
          "tokens": [
            {
              "f": "Puer",
              "l": "puer, puerī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Vocātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Infāns masculus (dēclīnātiō II in -er)"
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
              "f": "rīdet",
              "l": "rīdēre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Ōre laetitiam dēmōnstrat (-et)"
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
              "f": "Mārcus",
              "l": "Mārcus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Fīlius prīmus, puer improbus",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "puella quae plōrat",
          "tokens": [
            {
              "f": "Quae",
              "l": "quī, quae, quod",
              "p": "Prōnōmen relātīvum / Interrog.",
              "c": "Nōminātīvus",
              "n": "Singulāris / Plūr.",
              "g": "Fēminīnum / Neut.",
              "d": "Puella quae plōrat"
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
              "f": "puella",
              "l": "puella, -ae",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Vocātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Infāns fēmina"
            },
            {
              "f": "quae",
              "l": "quī, quae, quod",
              "p": "Prōnōmen relātīvum / Interrog.",
              "c": "Nōminātīvus",
              "n": "Singulāris / Plūr.",
              "g": "Fēminīnum / Neut.",
              "d": "Puella quae plōrat"
            },
            {
              "f": "plōrat",
              "l": "plōrāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Lacrimat et clāmat (-at)",
              "punc": "?"
            },
            {
              "f": "Puella",
              "l": "puella, -ae",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Vocātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Infāns fēmina"
            },
            {
              "f": "quae",
              "l": "quī, quae, quod",
              "p": "Prōnōmen relātīvum / Interrog.",
              "c": "Nōminātīvus",
              "n": "Singulāris / Plūr.",
              "g": "Fēminīnum / Neut.",
              "d": "Puella quae plōrat"
            },
            {
              "f": "plōrat",
              "l": "plōrāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Lacrimat et clāmat (-at)"
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
              "f": "Iūlia",
              "l": "Iūlia, -ae",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Fīlia Iūliī et Aemiliae, puella proba",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "LV",
          "marginalia": "",
          "tokens": [
            {
              "f": "Mārcus",
              "l": "Mārcus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Fīlius prīmus, puer improbus",
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
              "f": "puellam",
              "l": "puella, -ae",
              "p": "Nōmen substantīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Accūsātīvus singulāris in -am"
            },
            {
              "f": "pulsat",
              "l": "pulsāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Manū percutit (-at)",
              "punc": ","
            },
            {
              "f": "puer",
              "l": "puer, puerī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Vocātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Infāns masculus (dēclīnātiō II in -er)"
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
              "punc": "."
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "quem / quam",
          "tokens": [
            {
              "f": "Puella",
              "l": "puella, -ae",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Vocātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Infāns fēmina"
            },
            {
              "f": "quam",
              "l": "quī, quae, quod",
              "p": "Prōnōmen relātīvum / Interrog.",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Puella quam Mārcus pulsat"
            },
            {
              "f": "Mārcus",
              "l": "Mārcus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Fīlius prīmus, puer improbus"
            },
            {
              "f": "pulsat",
              "l": "pulsāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Manū percutit (-at)"
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
              "f": "Iūlia",
              "l": "Iūlia, -ae",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Fīlia Iūliī et Aemiliae, puella proba",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "puella quam Mārcus pulsat",
          "tokens": [
            {
              "f": "Iūlia",
              "l": "Iūlia, -ae",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Fīlia Iūliī et Aemiliae, puella proba"
            },
            {
              "f": "Aemiliam",
              "l": "Aemilia, -ae",
              "p": "Nōmen proprium",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Accūsātīvus: persōna quam vocat"
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
              "punc": ","
            },
            {
              "f": "quam",
              "l": "quī, quae, quod",
              "p": "Prōnōmen relātīvum / Interrog.",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Puella quam Mārcus pulsat"
            },
            {
              "f": "Iūlia",
              "l": "Iūlia, -ae",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Fīlia Iūliī et Aemiliae, puella proba"
            },
            {
              "f": "vocat",
              "l": "vocāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Nōmine compellat (-at)",
              "punc": ","
            },
            {
              "f": "māter",
              "l": "māter, mātris",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Vocātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Fēmina quae līberōs genuit (dēclīnātiō III)"
            },
            {
              "f": "līberōrum",
              "l": "līberī, -ōrum",
              "p": "Nōmen substantīvum",
              "c": "Genetīvus",
              "n": "Plūrālis",
              "g": "Masculīnum",
              "d": "Fīliī et fīliae familiae"
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
          "marginalia": "puer quem Aemilia verberat",
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
              "f": "puerum",
              "l": "puer, puerī",
              "p": "Nōmen substantīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Accūsātīvus singulāris in -um"
            },
            {
              "f": "verberat",
              "l": "verberāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Pulsat et pulsat ('tuxtax')",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "LX",
          "marginalia": "",
          "tokens": [
            {
              "f": "Puer",
              "l": "puer, puerī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Vocātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Infāns masculus (dēclīnātiō II in -er)"
            },
            {
              "f": "quem",
              "l": "quī, quae, quod",
              "p": "Prōnōmen relātīvum / Interrog.",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Puer quem Aemilia verberat / Quem vocat?"
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
              "f": "verberat",
              "l": "verberāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Pulsat et pulsat ('tuxtax')"
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
              "f": "Mārcus",
              "l": "Mārcus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Fīlius prīmus, puer improbus",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "quem? Iūlium",
          "tokens": [
            {
              "f": "Quem",
              "l": "quī, quae, quod",
              "p": "Prōnōmen relātīvum / Interrog.",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Puer quem Aemilia verberat / Quem vocat?"
            },
            {
              "f": "vocat",
              "l": "vocāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Nōmine compellat (-at)"
            },
            {
              "f": "Quīntus",
              "l": "Quīntus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Fīlius secundus, puer probus",
              "punc": "?"
            },
            {
              "f": "Quīntus",
              "l": "Quīntus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Fīlius secundus, puer probus"
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
              "punc": ","
            },
            {
              "f": "quem",
              "l": "quī, quae, quod",
              "p": "Prōnōmen relātīvum / Interrog.",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Puer quem Aemilia verberat / Quem vocat?"
            },
            {
              "f": "Quīntus",
              "l": "Quīntus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Fīlius secundus, puer probus"
            },
            {
              "f": "vocat",
              "l": "vocāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Nōmine compellat (-at)",
              "punc": ","
            },
            {
              "f": "pater",
              "l": "pater, patris",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Vocātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Vir quī līberōs genuit (dēclīnātiō III)"
            },
            {
              "f": "līberōrum",
              "l": "līberī, -ōrum",
              "p": "Nōmen substantīvum",
              "c": "Genetīvus",
              "n": "Plūrālis",
              "g": "Masculīnum",
              "d": "Fīliī et fīliae familiae"
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
              "f": "Iūlius",
              "l": "Iūlius, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Vir Rōmānus, pater familiae"
            },
            {
              "f": "Quīntum",
              "l": "Quīntus, -ī",
              "p": "Nōmen proprium",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Accūsātīvus: persōna quem videt"
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
              "d": "Auribus percipit (-it)",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "quem audit Iūlius?",
          "tokens": [
            {
              "f": "Quem",
              "l": "quī, quae, quod",
              "p": "Prōnōmen relātīvum / Interrog.",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Puer quem Aemilia verberat / Quem vocat?"
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
              "f": "Iūlius",
              "l": "Iūlius, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Vir Rōmānus, pater familiae",
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
              "f": "Mārcum",
              "l": "Mārcus, -ī",
              "p": "Nōmen proprium",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Accūsātīvus: persōna quem verberat"
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
          "numerus": "LXV",
          "marginalia": "",
          "tokens": [
            {
              "f": "Puer",
              "l": "puer, puerī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Vocātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Infāns masculus (dēclīnātiō II in -er)"
            },
            {
              "f": "quem",
              "l": "quī, quae, quod",
              "p": "Prōnōmen relātīvum / Interrog.",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Puer quem Aemilia verberat / Quem vocat?"
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
              "f": "audit",
              "l": "audīre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Auribus percipit (-it)"
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
              "f": "Mārcus",
              "l": "Mārcus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Fīlius prīmus, puer improbus",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "",
          "tokens": [
            {
              "f": "Puella",
              "l": "puella, -ae",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Vocātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Infāns fēmina"
            },
            {
              "f": "quae",
              "l": "quī, quae, quod",
              "p": "Prōnōmen relātīvum / Interrog.",
              "c": "Nōminātīvus",
              "n": "Singulāris / Plūr.",
              "g": "Fēminīnum / Neut.",
              "d": "Puella quae plōrat"
            },
            {
              "f": "cantat",
              "l": "cantāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Vōce sonōs musicōs ēdit (-at)"
            },
            {
              "f": "laeta",
              "l": "laetus, -a, -um",
              "p": "Nōmen adiectīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Fēminīnum: Iūlia laeta est"
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
              "f": "Puella",
              "l": "puella, -ae",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Vocātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Infāns fēmina"
            },
            {
              "f": "quae",
              "l": "quī, quae, quod",
              "p": "Prōnōmen relātīvum / Interrog.",
              "c": "Nōminātīvus",
              "n": "Singulāris / Plūr.",
              "g": "Fēminīnum / Neut.",
              "d": "Puella quae plōrat"
            },
            {
              "f": "plōrat",
              "l": "plōrāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Lacrimat et clāmat (-at)"
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
              "f": "laeta",
              "l": "laetus, -a, -um",
              "p": "Nōmen adiectīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Fēminīnum: Iūlia laeta est",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "",
          "tokens": [
            {
              "f": "Puer",
              "l": "puer, puerī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Vocātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Infāns masculus (dēclīnātiō II in -er)"
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
              "f": "puellam",
              "l": "puella, -ae",
              "p": "Nōmen substantīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Accūsātīvus singulāris in -am"
            },
            {
              "f": "pulsat",
              "l": "pulsāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Manū percutit (-at)"
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
              "punc": "!"
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "nōminātīvus: -us / accūsātīvus: -um",
          "tokens": [
            {
              "f": "Mārcus",
              "l": "Mārcus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Fīlius prīmus, puer improbus"
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
              "f": "Quīntus",
              "l": "Quīntus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Fīlius secundus, puer probus"
            },
            {
              "f": "Mārcum",
              "l": "Mārcus, -ī",
              "p": "Nōmen proprium",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Accūsātīvus: persōna quem verberat"
            },
            {
              "f": "pulsat",
              "l": "pulsāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Manū percutit (-at)",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "",
          "tokens": [
            {
              "f": "Mārcus",
              "l": "Mārcus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Fīlius prīmus, puer improbus"
            },
            {
              "f": "Quīntum",
              "l": "Quīntus, -ī",
              "p": "Nōmen proprium",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Accūsātīvus: persōna quem videt"
            },
            {
              "f": "pulsat",
              "l": "pulsāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Manū percutit (-at)",
              "punc": "."
            },
            {
              "f": "Quīntus",
              "l": "Quīntus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Fīlius secundus, puer probus"
            },
            {
              "f": "plōrat",
              "l": "plōrāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Lacrimat et clāmat (-at)",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "LXX",
          "marginalia": "",
          "tokens": [
            {
              "f": "Mārcus",
              "l": "Mārcus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Fīlius prīmus, puer improbus",
              "lead": "'",
              "punc": "'"
            },
            {
              "f": "nōminātīvus",
              "l": "nōminātīvus, -ī",
              "p": "Nōmen grammaticum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Casus subiectī"
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
              "f": "Mārcum",
              "l": "Mārcus, -ī",
              "p": "Nōmen proprium",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Accūsātīvus: persōna quem verberat",
              "lead": "'",
              "punc": "'"
            },
            {
              "f": "accūsātīvus",
              "l": "accūsātīvus, -ī",
              "p": "Nōmen grammaticum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Casus obiectī directī"
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
              "f": "Quīntum",
              "l": "Quīntus, -ī",
              "p": "Nōmen proprium",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Accūsātīvus: persōna quem videt",
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
              "f": "accūsātīvus",
              "l": "accūsātīvus, -ī",
              "p": "Nōmen grammaticum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Casus obiectī directī",
              "punc": ","
            },
            {
              "f": "Quīntus",
              "l": "Quīntus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Fīlius secundus, puer probus",
              "lead": "'",
              "punc": "'"
            },
            {
              "f": "nōminātīvus",
              "l": "nōminātīvus, -ī",
              "p": "Nōmen grammaticum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Casus subiectī",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "",
          "tokens": [
            {
              "f": "Nōminātīvus",
              "l": "nōminātīvus, -ī",
              "p": "Nōmen grammaticum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Casus subiectī",
              "punc": ":"
            },
            {
              "f": "-us",
              "l": "-us",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "-us"
            },
            {
              "f": "-r",
              "l": "-r",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "-r",
              "lead": "(",
              "punc": ")."
            },
            {
              "f": "Accūsātīvus",
              "l": "accūsātīvus, -ī",
              "p": "Nōmen grammaticum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Casus obiectī directī",
              "punc": ":"
            },
            {
              "f": "-um",
              "l": "-um",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "-um",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "",
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
              "f": "Iūlium",
              "l": "Iūlius, -ī",
              "p": "Nōmen proprium",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Accūsātīvus: persōna quem vocat/videt",
              "punc": ";"
            },
            {
              "f": "fīlius",
              "l": "fīlius, -ī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Puer respectū parentum",
              "punc": ","
            },
            {
              "f": "fīlium",
              "l": "fīlius, -ī",
              "p": "Nōmen substantīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Accūsātīvus in -um: fīlium verberat",
              "punc": ";"
            },
            {
              "f": "puer",
              "l": "puer, puerī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Vocātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Infāns masculus (dēclīnātiō II in -er)",
              "punc": ","
            },
            {
              "f": "puerum",
              "l": "puer, puerī",
              "p": "Nōmen substantīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Accūsātīvus singulāris in -um",
              "punc": ";"
            },
            {
              "f": "eum",
              "l": "is, ea, id",
              "p": "Prōnōmen dēmōnstrātīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Accūsātīvus: Iūlius eum audit",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "nōminātīvus: -a / accūsātīvus: -am",
          "tokens": [
            {
              "f": "Iūlia",
              "l": "Iūlia, -ae",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Fīlia Iūliī et Aemiliae, puella proba"
            },
            {
              "f": "cantat",
              "l": "cantāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Vōce sonōs musicōs ēdit (-at)",
              "punc": "."
            },
            {
              "f": "Mārcus",
              "l": "Mārcus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Fīlius prīmus, puer improbus"
            },
            {
              "f": "Iūliam",
              "l": "Iūlia, -ae",
              "p": "Nōmen proprium",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Accūsātīvus: Mārcus Iūliam pulsat"
            },
            {
              "f": "pulsat",
              "l": "pulsāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Manū percutit (-at)",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "LXXV",
          "marginalia": "",
          "tokens": [
            {
              "f": "Iūlia",
              "l": "Iūlia, -ae",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Fīlia Iūliī et Aemiliae, puella proba"
            },
            {
              "f": "Aemiliam",
              "l": "Aemilia, -ae",
              "p": "Nōmen proprium",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Accūsātīvus: persōna quam vocat"
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
              "f": "Iūlia",
              "l": "Iūlia, -ae",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Fīlia Iūliī et Aemiliae, puella proba",
              "lead": "'",
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
              "punc": "'"
            },
            {
              "f": "nōminātīvus",
              "l": "nōminātīvus, -ī",
              "p": "Nōmen grammaticum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Casus subiectī"
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
              "f": "Iūliam",
              "l": "Iūlia, -ae",
              "p": "Nōmen proprium",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Accūsātīvus: Mārcus Iūliam pulsat",
              "lead": "'",
              "punc": ","
            },
            {
              "f": "Aemiliam",
              "l": "Aemilia, -ae",
              "p": "Nōmen proprium",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Accūsātīvus: persōna quam vocat",
              "punc": "'"
            },
            {
              "f": "accūsātīvus",
              "l": "accūsātīvus, -ī",
              "p": "Nōmen grammaticum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Casus obiectī directī"
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
              "f": "Nōminātīvus",
              "l": "nōminātīvus, -ī",
              "p": "Nōmen grammaticum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Casus subiectī",
              "punc": ":"
            },
            {
              "f": "-a",
              "l": "-a",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "-a",
              "punc": "."
            },
            {
              "f": "Accūsātīvus",
              "l": "accūsātīvus, -ī",
              "p": "Nōmen grammaticum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Casus obiectī directī",
              "punc": ":"
            },
            {
              "f": "-am",
              "l": "-am",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "-am",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "",
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
              "f": "puella",
              "l": "puella, -ae",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Vocātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Infāns fēmina",
              "punc": ","
            },
            {
              "f": "puellam",
              "l": "puella, -ae",
              "p": "Nōmen substantīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Accūsātīvus singulāris in -am",
              "punc": ";"
            },
            {
              "f": "parva",
              "l": "parvus, -a, -um",
              "p": "Nōmen adiectīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "parva fīlia",
              "punc": ","
            },
            {
              "f": "parvam",
              "l": "parvus, -a, -um",
              "p": "Nōmen adiectīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Accūsātīvus: parvam puellam",
              "punc": ";"
            },
            {
              "f": "eam",
              "l": "is, ea, id",
              "p": "Prōnōmen dēmōnstrātīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Accūsātīvus: Mārcus eam pulsat",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "verbum: -at, -et, -it",
          "tokens": [
            {
              "f": "Iūlia",
              "l": "Iūlia, -ae",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Fīlia Iūliī et Aemiliae, puella proba"
            },
            {
              "f": "cantat",
              "l": "cantāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Vōce sonōs musicōs ēdit (-at)",
              "punc": "."
            },
            {
              "f": "Mārcus",
              "l": "Mārcus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Fīlius prīmus, puer improbus"
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
              "f": "dormit",
              "l": "dormīre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Quiēscit oculīs clausīs (-it)",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "LXXX",
          "marginalia": "",
          "tokens": [
            {
              "f": "Cantat",
              "l": "cantāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Vōce sonōs musicōs ēdit (-at)",
              "lead": "'",
              "punc": "'"
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
              "f": "Cantat",
              "l": "cantāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Vōce sonōs musicōs ēdit (-at)",
              "lead": "'",
              "punc": "',"
            },
            {
              "f": "rīdet",
              "l": "rīdēre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Ōre laetitiam dēmōnstrat (-et)",
              "lead": "'",
              "punc": "',"
            },
            {
              "f": "dormit",
              "l": "dormīre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Quiēscit oculīs clausīs (-it)",
              "lead": "'",
              "punc": "'"
            },
            {
              "f": "tria",
              "l": "tria",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "tria"
            },
            {
              "f": "verba",
              "l": "verba",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "verba"
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
              "f": "cantat",
              "l": "cantāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Vōce sonōs musicōs ēdit (-at)",
              "punc": ","
            },
            {
              "f": "pulsat",
              "l": "pulsāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Manū percutit (-at)",
              "punc": ","
            },
            {
              "f": "plōrat",
              "l": "plōrāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Lacrimat et clāmat (-at)",
              "punc": ","
            },
            {
              "f": "vocat",
              "l": "vocāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Nōmine compellat (-at)",
              "punc": ","
            },
            {
              "f": "interrogat",
              "l": "interrogāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Quaestionem pōnit (-at)",
              "punc": ","
            },
            {
              "f": "verberat",
              "l": "verberāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Pulsat et pulsat ('tuxtax')"
            },
            {
              "f": "-at",
              "l": "-at",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "-at",
              "lead": "(",
              "punc": ");"
            },
            {
              "f": "rīdet",
              "l": "rīdēre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Ōre laetitiam dēmōnstrat (-et)",
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
              "punc": ","
            },
            {
              "f": "respondet",
              "l": "respondēre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Ad interrogātum dīcit (-et)"
            },
            {
              "f": "-et",
              "l": "-et",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "-et",
              "lead": "(",
              "punc": ");"
            },
            {
              "f": "dormit",
              "l": "dormīre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Quiēscit oculīs clausīs (-it)",
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
              "punc": ","
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
              "f": "-it",
              "l": "-it",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "-it",
              "lead": "(",
              "punc": ")."
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "",
          "tokens": [
            {
              "f": "Puer",
              "l": "puer, puerī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Vocātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Infāns masculus (dēclīnātiō II in -er)"
            },
            {
              "f": "probus",
              "l": "probus, -a, -um",
              "p": "Nōmen adiectīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "↔ improbus; bonus, rēctus"
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
              "f": "pulsat",
              "l": "pulsāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Manū percutit (-at)"
            },
            {
              "f": "puellam",
              "l": "puella, -ae",
              "p": "Nōmen substantīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Accūsātīvus singulāris in -am",
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
              "f": "puerum",
              "l": "puer, puerī",
              "p": "Nōmen substantīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Accūsātīvus singulāris in -um"
            },
            {
              "f": "improbum",
              "l": "improbus, -a, -um",
              "p": "Nōmen adiectīvum",
              "c": "Accūsātīvus / Neut.",
              "n": "Singulāris",
              "g": "Masculīnum / Neut.",
              "d": "Accūsātīvus: puerum improbum"
            },
            {
              "f": "verberat",
              "l": "verberāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Pulsat et pulsat ('tuxtax')",
              "punc": "."
            }
          ]
        }
      ]
    }
  ],
  "grammaticaLatina": {
    "titulus": "GRAMMATICA LATINA",
    "subtitulus": "Nōminātīvus et accūsātīvus & Verbum (-at, -et, -it)",
    "partes": [
      {
        "sectio": "I. Nōminātīvus et accūsātīvus",
        "subsectio": "[A] Masculīnum (-us / -um)",
        "exemplaSententiarum": [
          {
            "sg": "Mārcus rīdet. (subiectum: nōminātīvus)",
            "pl": "Quīntus Mārcum pulsat. (obiectum: accūsātīvus)"
          }
        ],
        "regula": "'Mārcus' nōminātīvus est (-us). 'Mārcum' accūsātīvus est (-um). Puer subiectum est in nōminātīvō; obiectum pulsātum in accūsātīvō.",
        "exemplaVocabulorum": "Iūlius -> Iūlium; fīlius -> fīlium; puer -> puerum; servus -> servum; is -> eum; quī -> quem.",
        "sententiae": [
          "Quīntus Mārcum pulsat. Mārcus Quīntum pulsat.",
          "Quem vocat Quīntus? Iūlium vocat. Puer quem Aemilia verberat est Mārcus."
        ]
      },
      {
        "sectio": "",
        "subsectio": "[B] Fēminīnum (-a / -am)",
        "exemplaSententiarum": [
          {
            "sg": "Iūlia cantat. (subiectum: nōminātīvus)",
            "pl": "Mārcus Iūliam pulsat. (obiectum: accūsātīvus)"
          }
        ],
        "regula": "'Iūlia, Aemilia' nōminātīvus est (-a). 'Iūliam, Aemiliam' accūsātīvus est (-am).",
        "exemplaVocabulorum": "puella -> puellam; parva -> parvam; fīlia -> fīliam; ea -> eam; quae -> quam.",
        "sententiae": [
          "Iūlia Aemiliam vocat. Aemilia venit.",
          "Puella quam Mārcus pulsat est Iūlia."
        ]
      },
      {
        "sectio": "II. Verbum: Persōna III Praesentis",
        "subsectio": "Terminātiōnēs verbālēs: -at, -et, -it",
        "exemplaSententiarum": [
          {
            "sg": "Iūlia cantat. Mārcus rīdet. Iūlius dormit.",
            "pl": "-at / -et / -it"
          }
        ],
        "regula": "'Cantat', 'rīdet', 'dormit' tria verba sunt. Coniugātiō I habet -at, coniugātiō II habet -et, coniugātiō III/IV habet -it.",
        "exemplaVocabulorum": "Coniugātiō I (-at): cantat, pulsat, plōrat, vocat, interrogat, verberat.\nConiugātiō II (-et): rīdet, videt, respondet, habet, tacet.\nConiugātiō III & IV (-it): dormit, venit, audit, pōnit, sūmit, discēdit.",
        "sententiae": [
          "Iūlia plōrat, quia Mārcus eam pulsat.",
          "Pater dormit neque Quīntum audit."
        ]
      }
    ]
  },
  "pensa": {
    "pensumA": {
      "titulus": "PĒNSVM A (Capitulum III)",
      "descriptio": "Fōrmae grammaticae: Implē lacūnās terminātiōnibus idōneīs (-us, -um, -a, -am, -at, -et, -it, mē, tē, eum, quī, quae, quem)!",
      "quaestiones": [
        {
          "id": "p3a_1",
          "praefix": "Cūr Mārc",
          "lacuna": "us",
          "inter": " Iūliam pulsat? Mārcus Iūli",
          "lacuna2": "am",
          "suffix": " pulsat, quia Iūlia cantat.",
          "explicatio": "Subiectum masculīnum in -us (Mārcus); obiectum fēminīnum in -am (Iūliam)."
        },
        {
          "id": "p3a_2",
          "praefix": "Iūlia plōr",
          "lacuna": "at",
          "inter": ", quia Mārcus e",
          "lacuna2": "am",
          "suffix": " pulsat.",
          "explicatio": "Verbum coniugātiōnis I (-at: plōrat); prōnōmen accūsātīvum fēminīnum (eam)."
        },
        {
          "id": "p3a_3",
          "praefix": "Iūlia: \"Mamma! Mārcus ",
          "lacuna": "mē",
          "suffix": " pulsat.\"",
          "explicatio": "Prōnōmen persōnae I in accūsātīvō (mē)."
        },
        {
          "id": "p3a_4",
          "praefix": "Aemilia puell",
          "lacuna": "am",
          "inter": " aud",
          "lacuna2": "it",
          "suffix": " et venit.",
          "explicatio": "Accūsātīvus fēminīnus in -am (puellam); verbum coniugātiōnis IV in -it (audit)."
        },
        {
          "id": "p3a_5",
          "praefix": "Māter Quīnt",
          "lacuna": "um",
          "inter": " videt et e",
          "lacuna2": "um",
          "suffix": " interrogat.",
          "explicatio": "Accūsātīvus masculīnus in -um (Quīntum, eum)."
        },
        {
          "id": "p3a_6",
          "praefix": "\"Quis mē voc",
          "lacuna": "at",
          "inter": "?\" Quīnt",
          "lacuna2": "us",
          "suffix": " respondet: \"Iūlia tē vocat.\"",
          "explicatio": "Verbum coniugātiōnis I in -at (vocat); subiectum masculīnum in -us (Quīntus)."
        },
        {
          "id": "p3a_7",
          "praefix": "Iūlius dorm",
          "lacuna": "it",
          "inter": ". Quīntus Iūli",
          "lacuna2": "um",
          "suffix": " vocat: \"Pater!\"",
          "explicatio": "Verbum coniugātiōnis IV in -it (dormit); accūsātīvus masculīnus in -um (Iūlium)."
        },
        {
          "id": "p3a_8",
          "praefix": "Mārcus rīd",
          "lacuna": "et",
          "inter": ", quia Iūli",
          "lacuna2": "us",
          "suffix": " nōn venit.",
          "explicatio": "Verbum coniugātiōnis II in -et (rīdet); subiectum masculīnum in -us (Iūlius)."
        },
        {
          "id": "p3a_9",
          "praefix": "Aemilia Mārc",
          "lacuna": "um",
          "inter": " verber",
          "lacuna2": "at",
          "suffix": ".",
          "explicatio": "Accūsātīvus in -um (Mārcum); verbum in -at (verberat)."
        },
        {
          "id": "p3a_10",
          "praefix": "Iūlius: \"Puer quī parv",
          "lacuna": "am",
          "inter": " puell",
          "lacuna2": "am",
          "suffix": " pulsat improbus est.\"",
          "explicatio": "Accūsātīvus fēminīnus in -am (parvam puellam)."
        },
        {
          "id": "p3a_11",
          "praefix": "Iūlius puer",
          "lacuna": "um",
          "inter": " improb",
          "lacuna2": "um",
          "suffix": " verberat.",
          "explicatio": "Accūsātīvus masculīnus in -um (puerum improbum)."
        },
        {
          "id": "p3a_12",
          "praefix": "Puer qu",
          "lacuna": "em",
          "inter": " Iūlius verberat est Mārcus. Puer qu",
          "lacuna2": "ī",
          "suffix": " plōrat laetus nōn est.",
          "explicatio": "Prōnōmen relātīvum accūsātīvum (quem); nōminātīvum masculīnum (quī)."
        }
      ]
    },
    "pensumB": {
      "titulus": "PĒNSVM B (Capitulum III)",
      "descriptio": "Vocābula nova: Implē lacūnās vocābulīs capitulī!",
      "quaestiones": [
        {
          "id": "p3b_1",
          "praefix": "Puella ",
          "lacuna": "cantat",
          "suffix": ": \"Lalla.\" Puella quae cantat est Iūlia.",
          "explicatio": "Verbum: cantat (vōce sonōs ēdit)."
        },
        {
          "id": "p3b_2",
          "praefix": "Iūlia ",
          "lacuna": "laeta",
          "suffix": " est. Puer improbus puellam pulsat.",
          "explicatio": "Adiectīvum fēminīnum: laeta (hilaris)."
        },
        {
          "id": "p3b_3",
          "praefix": "Puella plōrat: \"Uhuhū!\" Puer ",
          "lacuna": "rīdet",
          "suffix": ": \"Hahahae!\"",
          "explicatio": "Verbum: rīdet (laetitiam dēmōnstrat)."
        },
        {
          "id": "p3b_4",
          "praefix": "Puer quī rīdet est Mārcus. Iūlia Aemiliam ",
          "lacuna": "vocat",
          "suffix": ": \"Mamma!\"",
          "explicatio": "Verbum: vocat (nōmine compellat)."
        },
        {
          "id": "p3b_5",
          "praefix": "Aemilia venit, et Quīntum ",
          "lacuna": "interrogat",
          "suffix": ": \"Cūr Iūlia plōrat?\"",
          "explicatio": "Verbum: interrogat (quaestionem pōnit)."
        },
        {
          "id": "p3b_6",
          "praefix": "Quīntus ",
          "lacuna": "respondet",
          "suffix": ": \"Iūlia plōrat, quia Mārcus eam pulsat.\"",
          "explicatio": "Verbum: respondet (ad interrogātum dīcit)."
        },
        {
          "id": "p3b_7",
          "praefix": "Aemilia: \"Mārcus puer probus nōn est, puer ",
          "lacuna": "improbus",
          "suffix": " est!\"",
          "explicatio": "Adiectīvum: improbus (↔ probus; malus)."
        },
        {
          "id": "p3b_8",
          "praefix": "Aemilia Iūlium nōn ",
          "lacuna": "videt",
          "suffix": ". Quīntus: \"Pater nōn hīc est.\"",
          "explicatio": "Verbum: videt (oculīs cernit)."
        },
        {
          "id": "p3b_9",
          "praefix": "Cūr Iūlius Quīntum nōn audit? Iūlius eum nōn audit, quia ",
          "lacuna": "dormit",
          "suffix": ".",
          "explicatio": "Verbum: dormit (quiēscit oculīs clausīs)."
        },
        {
          "id": "p3b_10",
          "praefix": "Mārcus plōrat, quia Aemilia eum ",
          "lacuna": "verberat",
          "suffix": ".",
          "explicatio": "Verbum: verberat (pulsat et pulsat, tuxtax)."
        },
        {
          "id": "p3b_11",
          "praefix": "Iūlia laeta nōn est ",
          "lacuna": "neque",
          "suffix": " rīdet.",
          "explicatio": "Coniūnctiō copulātīva negātīva: neque (= et nōn)."
        }
      ]
    },
    "pensumC": {
      "titulus": "PĒNSVM C (Capitulum III)",
      "descriptio": "Interrogātiōnēs: Scrībe respōnsum Latīnē, deinde aperī exemplum!",
      "quaestiones": [
        {
          "id": "p3c_1",
          "interrogatio": "Quis Iūliam pulsat?",
          "exemplum": "Mārcus Iūliam pulsat."
        },
        {
          "id": "p3c_2",
          "interrogatio": "Cūr Iūlia plōrat?",
          "exemplum": "Iūlia plōrat, quia Mārcus eam pulsat."
        },
        {
          "id": "p3c_3",
          "interrogatio": "Quīntusne quoque Iūliam pulsat?",
          "exemplum": "Quīntus nōn pulsat Iūliam; Quīntus puer probus est."
        },
        {
          "id": "p3c_4",
          "interrogatio": "Quem Quīntus pulsat?",
          "exemplum": "Quīntus Mārcum pulsat."
        },
        {
          "id": "p3c_5",
          "interrogatio": "Cūr Aemilia venit?",
          "exemplum": "Aemilia venit, quia Iūlia eam vocat."
        },
        {
          "id": "p3c_6",
          "interrogatio": "Quis Iūlium vocat?",
          "exemplum": "Quīntus Iūlium vocat."
        },
        {
          "id": "p3c_7",
          "interrogatio": "Cūr Iūlius Quīntum nōn audit?",
          "exemplum": "Iūlius Quīntum nōn audit, quia dormit."
        },
        {
          "id": "p3c_8",
          "interrogatio": "Quem audit Iūlius?",
          "exemplum": "Iūlius Mārcum audit (quia Mārcus plōrat)."
        },
        {
          "id": "p3c_9",
          "interrogatio": "Cūr Mārcus plōrat?",
          "exemplum": "Mārcus plōrat, quia Aemilia (et Iūlius) eum verberat."
        },
        {
          "id": "p3c_10",
          "interrogatio": "Rīdetne Iūlia?",
          "exemplum": "Iūlia nōn rīdet, quia Mārcus plōrat."
        },
        {
          "id": "p3c_11",
          "interrogatio": "Num 'Mārcus' accūsātīvus est?",
          "exemplum": "Nōn accūsātīvus, sed nōminātīvus est 'Mārcus' ('Mārcum' est accūsātīvus)."
        },
        {
          "id": "p3c_12",
          "interrogatio": "Num 'Iūliam' nōminātīvus est?",
          "exemplum": "Nōn nōminātīvus, sed accūsātīvus est 'Iūliam' ('Iūlia' est nōminātīvus)."
        },
        {
          "id": "p3c_13",
          "interrogatio": "Quid est 'dormit'?",
          "exemplum": "'Dormit' verbum est (coniugātiōnis quartae)."
        }
      ]
    }
  }
};
