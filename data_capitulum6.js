// data_capitulum6.js
// Dāta Capituli Sextī: Textus Authenticus Integer (Ørberg), Analysis Grammatica, Pēnsa, Tabula, Vocābulārium.

export const capitulumSextum = {
  "numerus": 6,
  "titulus": "CAPITVLVM SEXTVM",
  "subtitulus": "VIA LATINA",
  "tabulaDeclinationum": {
    "titulus": "TABVLA DĒCLĪNĀTIŌNVM (Capitulum VI)",
    "descriptio": "Praepositiōnēs cum Accūsātīvō et Ablātīvō, Vōx Passīva (-tur / -ntur), et Casus Locātīvus (Rōmae, Tusculī).",
    "declinationes": [
      {
        "nomen": "Praepositiōnēs: Accūsātīvus vs Ablātīvus",
        "genus": "Praepositiōnēs",
        "paradigma": "ad, ante, post, inter, prope, circum, apud, per (+ acc.) vs ab/ā, cum, ex, in, sine (+ abl.)",
        "casus": [
          {
            "casus": "Cum Accūsātīvō (+ acc.)",
            "sg": "ad vīllam, ante dominum, post lectīcam, prope Rōmam",
            "pl": "inter servōs, circum oppida, apud amīcōs, per portās"
          },
          {
            "casus": "Cum Ablātīvō (+ abl.)",
            "sg": "ab oppidō, cum dominō, ex hortō, in viā, sine equō",
            "pl": "ā servīs, cum saccīs, ex vīllīs, in umerīs, sine rosīs"
          }
        ]
      },
      {
        "nomen": "Vōx Passīva: Persōna III (-tur / -ntur)",
        "genus": "Verbum (Āctīvum ↔ Passīvum)",
        "paradigma": "portat -> portātur / portant -> portantur",
        "casus": [
          {
            "casus": "Singulāris (-tur)",
            "sg": "Servus dominum portat = Dominus ā servō portātur",
            "pl": "Equus Cornēlium vehit = Cornēlius equō vehitur"
          },
          {
            "casus": "Plūrālis (-ntur)",
            "sg": "Servī saccōs portant = Saccī ā servīs portantur",
            "pl": "Verba ā Lydiā audiuntur"
          }
        ]
      },
      {
        "nomen": "Mōtus et Locus: Oppida (Locātīvus, Acc., Abl.)",
        "genus": "Nōmina Propria Oppidōrum",
        "paradigma": "Rōmae / Tusculī (ubi?) — Rōmam / Tusculum (quō?) — Rōmā / Tusculō (unde?)",
        "casus": [
          {
            "casus": "Ubi? (Locātīvus: in oppidō)",
            "sg": "Rōmae (in urbe Rōmā) / Tusculī (in oppidō Tusculō)",
            "pl": "Brundisiī / Capuae"
          },
          {
            "casus": "Quō? (Accūsātīvus: ad oppidum)",
            "sg": "Rōmam (ad urbem Rōmam) / Tusculum it",
            "pl": "Capuam / Brundisium"
          },
          {
            "casus": "Unde? (Ablātīvus: ab oppidō)",
            "sg": "Rōmā (ab urbe Rōmā) / Tusculō venit",
            "pl": "Capuā / Brundisiō"
          }
        ]
      }
    ]
  },
  "vocabularium": [
    {
      "lemma": "ad",
      "pars": "Praepositiō",
      "genus": "cum Accūsātīvō",
      "notatio": "Mōtus ad locum: Iūlius ad vīllam suam it."
    },
    {
      "lemma": "ambulat, ambulāre",
      "pars": "Verbum",
      "genus": "Coniugātiō I",
      "notatio": "Pedibus graditur: Syrus et Lēander ambulant; ↔ vehitur."
    },
    {
      "lemma": "amīca, -ae",
      "pars": "Nōmen substantīvum",
      "genus": "Fēminīnum",
      "notatio": "Fēmina cāra: Lydia est amīca Mēdī."
    },
    {
      "lemma": "amīcus, -ī",
      "pars": "Nōmen substantīvum",
      "genus": "Masculīnum",
      "notatio": "Socius, homo cārus; ↔ inimīcus: Cornēlius est amīcus Iūliī."
    },
    {
      "lemma": "ante",
      "pars": "Praepositiō",
      "genus": "cum Accūsātīvō",
      "notatio": "In parte anteriōre: Ursus est ante Iūlium; ↔ post."
    },
    {
      "lemma": "apud",
      "pars": "Praepositiō",
      "genus": "cum Accūsātīvō",
      "notatio": "Prope, cum: Quattuor servī apud eum sunt. Mēdus est apud Lydiam."
    },
    {
      "lemma": "autem",
      "pars": "Coniūnctiō",
      "genus": "Adversātīva",
      "notatio": "= sed (post prīmum verbum): Dāvus autem bonus servus est."
    },
    {
      "lemma": "circum",
      "pars": "Praepositiō",
      "genus": "cum Accūsātīvō",
      "notatio": "In gyrum: Circum oppida mūrī sunt."
    },
    {
      "lemma": "duodecim",
      "pars": "Nōmen numerāle indecl.",
      "genus": "—",
      "notatio": "Numerus XII (12): In mūrō sunt duodecim portae."
    },
    {
      "lemma": "equus, -ī",
      "pars": "Nōmen substantīvum",
      "genus": "Masculīnum",
      "notatio": "Animālis vector: Cornēlius in equō est."
    },
    {
      "lemma": "fessus, -a, -um",
      "pars": "Nōmen adiectīvum",
      "genus": "Masculīnum",
      "notatio": "Lassus: Servī quī lectīcam portant fessī sunt."
    },
    {
      "lemma": "inimīcus, -ī",
      "pars": "Nōmen substantīvum",
      "genus": "Masculīnum",
      "notatio": "↔ amīcus: Mēdus est inimīcus Dāvī."
    },
    {
      "lemma": "inter",
      "pars": "Praepositiō",
      "genus": "cum Accūsātīvō",
      "notatio": "In mediō duōrum: Via Appia est inter Rōmam et Brundisium."
    },
    {
      "lemma": "intrat, intrāre",
      "pars": "Verbum",
      "genus": "Coniugātiō I",
      "notatio": "Ingreditur: Mēdus per portam Capēnam Rōmam intrat."
    },
    {
      "lemma": "itaque",
      "pars": "Coniūnctiō",
      "genus": "Illātīva",
      "notatio": "= ergō, ob eam rem: Itaque servī dominum timent."
    },
    {
      "lemma": "it, eunt, īre",
      "pars": "Verbum irregulāre",
      "genus": "—",
      "notatio": "Graditur: Iūlius it; servī eunt."
    },
    {
      "lemma": "lectīca, -ae",
      "pars": "Nōmen substantīvum",
      "genus": "Fēminīnum",
      "notatio": "Vehiculum gestābile: Iūlius in lectīcā vehitur."
    },
    {
      "lemma": "longus, -a, -um",
      "pars": "Nōmen adiectīvum",
      "genus": "Masculīnum",
      "notatio": "Magnae longitūdinis: Via Appia longa est."
    },
    {
      "lemma": "malus, -a, -um",
      "pars": "Nōmen adiectīvum",
      "genus": "Masculīnum",
      "notatio": "= improbus; ↔ bonus: Mēdus est malus servus."
    },
    {
      "lemma": "mūrus, -ī",
      "pars": "Nōmen substantīvum",
      "genus": "Masculīnum",
      "notatio": "Moenia urbis: Circum Rōmam est mūrus antīquus."
    },
    {
      "lemma": "nam",
      "pars": "Coniūnctiō",
      "genus": "Causālis",
      "notatio": "Causam explicat (= etenim): ...nam is dominum timet."
    },
    {
      "lemma": "per",
      "pars": "Praepositiō",
      "genus": "cum Accūsātīvō",
      "notatio": "Trans: Mēdus per ōstium intrat."
    },
    {
      "lemma": "porta, -ae",
      "pars": "Nōmen substantīvum",
      "genus": "Fēminīnum",
      "notatio": "Magnum ōstium urbis: Porta Capēna."
    },
    {
      "lemma": "portat, portāre",
      "pars": "Verbum",
      "genus": "Coniugātiō I",
      "notatio": "Fert manibus/umerīs: Syrus saccum portat."
    },
    {
      "lemma": "post",
      "pars": "Praepositiō",
      "genus": "cum Accūsātīvō",
      "notatio": "A tergō: Dāvus post lectīcam ambulat; ↔ ante."
    },
    {
      "lemma": "procul ab",
      "pars": "Locūtiō praepositiōnālis",
      "genus": "cum Ablātīvō",
      "notatio": "Longē ab: Brundisium procul ab Rōmā est; ↔ prope."
    },
    {
      "lemma": "prope",
      "pars": "Praepositiō",
      "genus": "cum Accūsātīvō",
      "notatio": "Haud procul: Ōstia est prope Rōmam."
    },
    {
      "lemma": "quam",
      "pars": "Adverbium",
      "genus": "Comparātīvum",
      "notatio": "In comparātiōne: nōn tam longa quam..."
    },
    {
      "lemma": "quō",
      "pars": "Adverbium",
      "genus": "Interrogātīvum",
      "notatio": "Ad quem locum? Quō it Mēdus? Rōmam it."
    },
    {
      "lemma": "saccus, -ī",
      "pars": "Nōmen substantīvum",
      "genus": "Masculīnum",
      "notatio": "Pera magna: Syrus saccum in umerō portat."
    },
    {
      "lemma": "tam",
      "pars": "Adverbium",
      "genus": "Comparātīvum",
      "notatio": "tam... quam..."
    },
    {
      "lemma": "timet, timēre",
      "pars": "Verbum",
      "genus": "Coniugātiō II",
      "notatio": "Metuit: Mēdus dominum īrātum timet."
    },
    {
      "lemma": "umerus, -ī",
      "pars": "Nōmen substantīvum",
      "genus": "Masculīnum",
      "notatio": "Pars corporis inter collum et bracchium: saccōs in umerīs portant."
    },
    {
      "lemma": "unde",
      "pars": "Adverbium",
      "genus": "Interrogātīvum",
      "notatio": "A quō locō? Unde venit Iūlius? Ab oppidō venit."
    },
    {
      "lemma": "vehit, vehere",
      "pars": "Verbum",
      "genus": "Coniugātiō III",
      "notatio": "Portat vehiculō: Equus Cornēlium vehit / Cornēlius vehitur."
    },
    {
      "lemma": "via, -ae",
      "pars": "Nōmen substantīvum",
      "genus": "Fēminīnum",
      "notatio": "Iter stratum: Via Appia, via Latīna."
    }
  ],
  "sectiones": [
    {
      "titulusSectio": "LĒCTIŌ PRĪMA: VIA APPIA ET VIA LATĪNA",
      "versus": [
        {
          "numerus": "I",
          "marginalia": "via Appia, via Latīna",
          "tokens": [
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
              "f": "Italiā",
              "l": "Italiā",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Italiā"
            },
            {
              "f": "multae",
              "l": "multae",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "multae"
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
              "f": "magnae",
              "l": "magnae",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "magnae"
            },
            {
              "f": "viae",
              "l": "via, -ae",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Genetīvus",
              "n": "Plūrālis / Sing.",
              "g": "Fēminīnum",
              "d": "multae viae"
            },
            {
              "f": "sunt",
              "l": "esse",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Plūrālis",
              "g": "—",
              "d": "Persōna III plūr. praesentis",
              "punc": ":"
            },
            {
              "f": "via",
              "l": "via, -ae",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Ablātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Iter stratum inter oppida"
            },
            {
              "f": "Appia",
              "l": "Appius, -a, -um",
              "p": "Nōmen adiectīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "via Appia",
              "punc": ","
            },
            {
              "f": "via",
              "l": "via, -ae",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Ablātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Iter stratum inter oppida"
            },
            {
              "f": "Latīna",
              "l": "Latīna",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Latīna",
              "punc": ","
            },
            {
              "f": "via",
              "l": "via, -ae",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Ablātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Iter stratum inter oppida"
            },
            {
              "f": "Flāminia",
              "l": "Flāminius, -a, -um",
              "p": "Nōmen adiectīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "via Flāminia",
              "punc": ","
            },
            {
              "f": "via",
              "l": "via, -ae",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Ablātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Iter stratum inter oppida"
            },
            {
              "f": "Aurēlia",
              "l": "Aurēlius, -a, -um",
              "p": "Nōmen adiectīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "via Aurēlia",
              "punc": ","
            },
            {
              "f": "via",
              "l": "via, -ae",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Ablātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Iter stratum inter oppida"
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
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "inter Rōmam et Brundisium",
          "tokens": [
            {
              "f": "Via",
              "l": "via, -ae",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Ablātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Iter stratum inter oppida"
            },
            {
              "f": "Appia",
              "l": "Appius, -a, -um",
              "p": "Nōmen adiectīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "via Appia"
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
              "f": "inter",
              "l": "inter",
              "p": "Praepositiō",
              "c": "cum Accūsātīvō",
              "n": "—",
              "g": "—",
              "d": "In mediō duōrum: inter Rōmam et Brundisium"
            },
            {
              "f": "Rōmam",
              "l": "Rōmam",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Rōmam"
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
              "l": "Brundisium",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Brundisium",
              "punc": ";"
            },
            {
              "f": "via",
              "l": "via, -ae",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Ablātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Iter stratum inter oppida"
            },
            {
              "f": "Latīna",
              "l": "Latīna",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Latīna"
            },
            {
              "f": "inter",
              "l": "inter",
              "p": "Praepositiō",
              "c": "cum Accūsātīvō",
              "n": "—",
              "g": "—",
              "d": "In mediō duōrum: inter Rōmam et Brundisium"
            },
            {
              "f": "Rōmam",
              "l": "Rōmam",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Rōmam"
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
              "f": "Capuam",
              "l": "Capua, -ae",
              "p": "Nōmen proprium",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "inter Rōmam et Capuam",
              "punc": ";"
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "",
          "tokens": [
            {
              "f": "via",
              "l": "via, -ae",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Ablātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Iter stratum inter oppida"
            },
            {
              "f": "Flāminia",
              "l": "Flāminius, -a, -um",
              "p": "Nōmen adiectīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "via Flāminia"
            },
            {
              "f": "inter",
              "l": "inter",
              "p": "Praepositiō",
              "c": "cum Accūsātīvō",
              "n": "—",
              "g": "—",
              "d": "In mediō duōrum: inter Rōmam et Brundisium"
            },
            {
              "f": "Rōmam",
              "l": "Rōmam",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Rōmam"
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
              "f": "Arīminum",
              "l": "Arīminum, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus / Acc.",
              "n": "Singulāris",
              "g": "Neutrum",
              "d": "Oppidum ad mare Hadriaticum",
              "punc": ";"
            },
            {
              "f": "via",
              "l": "via, -ae",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Ablātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Iter stratum inter oppida"
            },
            {
              "f": "Aurēlia",
              "l": "Aurēlius, -a, -um",
              "p": "Nōmen adiectīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "via Aurēlia"
            },
            {
              "f": "inter",
              "l": "inter",
              "p": "Praepositiō",
              "c": "cum Accūsātīvō",
              "n": "—",
              "g": "—",
              "d": "In mediō duōrum: inter Rōmam et Brundisium"
            },
            {
              "f": "Rōmam",
              "l": "Rōmam",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Rōmam"
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
              "f": "Genuam",
              "l": "Genua, -ae",
              "p": "Nōmen proprium",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "inter Rōmam et Genuam",
              "punc": ";"
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "",
          "tokens": [
            {
              "f": "via",
              "l": "via, -ae",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Ablātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Iter stratum inter oppida"
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
              "f": "inter",
              "l": "inter",
              "p": "Praepositiō",
              "c": "cum Accūsātīvō",
              "n": "—",
              "g": "—",
              "d": "In mediō duōrum: inter Rōmam et Brundisium"
            },
            {
              "f": "Arīminum",
              "l": "Arīminum, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus / Acc.",
              "n": "Singulāris",
              "g": "Neutrum",
              "d": "Oppidum ad mare Hadriaticum"
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
              "f": "Placentiam",
              "l": "Placentia, -ae",
              "p": "Nōmen proprium",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "inter Arīminum et Placentiam",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "V",
          "marginalia": "",
          "tokens": [
            {
              "f": "Brundisium",
              "l": "Brundisium",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Brundisium",
              "punc": ","
            },
            {
              "f": "Capua",
              "l": "Capua, -ae",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Oppidum in Campāniā",
              "punc": ","
            },
            {
              "f": "Arīminum",
              "l": "Arīminum, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus / Acc.",
              "n": "Singulāris",
              "g": "Neutrum",
              "d": "Oppidum ad mare Hadriaticum",
              "punc": ","
            },
            {
              "f": "Genua",
              "l": "Genua, -ae",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Oppidum Liguriae",
              "punc": ","
            },
            {
              "f": "Placentia",
              "l": "Placentia, -ae",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Oppidum ad Padum",
              "punc": ","
            },
            {
              "f": "Ōstia",
              "l": "Ōstia, -ae",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Portus Rōmae ad ōstium Tiberis"
            },
            {
              "f": "magna",
              "l": "magna",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "magna"
            },
            {
              "f": "oppida",
              "l": "oppida",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "oppida"
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
          "marginalia": "prope Rōmam",
          "tokens": [
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
              "f": "Ōstia",
              "l": "Ōstia, -ae",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Portus Rōmae ad ōstium Tiberis",
              "punc": "?"
            },
            {
              "f": "Ōstia",
              "l": "Ōstia, -ae",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Portus Rōmae ad ōstium Tiberis"
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
              "f": "prope",
              "l": "prope",
              "p": "Praepositiō",
              "c": "cum Accūsātīvō",
              "n": "—",
              "g": "—",
              "d": "Haud procul: prope Rōmam; ↔ procul ab"
            },
            {
              "f": "Rōmam",
              "l": "Rōmam",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Rōmam",
              "punc": "."
            },
            {
              "f": "Tusculum",
              "l": "Tusculum",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Tusculum"
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
              "f": "prope",
              "l": "prope",
              "p": "Praepositiō",
              "c": "cum Accūsātīvō",
              "n": "—",
              "g": "—",
              "d": "Haud procul: prope Rōmam; ↔ procul ab"
            },
            {
              "f": "Rōmam",
              "l": "Rōmam",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Rōmam"
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
          "marginalia": "procul ab Rōmā",
          "tokens": [
            {
              "f": "Brundisium",
              "l": "Brundisium",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Brundisium"
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
              "f": "prope",
              "l": "prope",
              "p": "Praepositiō",
              "c": "cum Accūsātīvō",
              "n": "—",
              "g": "—",
              "d": "Haud procul: prope Rōmam; ↔ procul ab"
            },
            {
              "f": "Rōmam",
              "l": "Rōmam",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Rōmam",
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
              "f": "procul",
              "l": "procul",
              "p": "Adverbium",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Longē: procul ab Rōmā; ↔ prope"
            },
            {
              "f": "ab",
              "l": "ab / ā",
              "p": "Praepositiō",
              "c": "cum Ablātīvō",
              "n": "—",
              "g": "—",
              "d": "Mōtus ā locō vel agentis: ab oppidō / ā Lydiā"
            },
            {
              "f": "Rōmā",
              "l": "Rōmā",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Rōmā",
              "punc": ":"
            },
            {
              "f": "via",
              "l": "via, -ae",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Ablātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Iter stratum inter oppida"
            },
            {
              "f": "Appia",
              "l": "Appius, -a, -um",
              "p": "Nōmen adiectīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "via Appia"
            },
            {
              "f": "longa",
              "l": "longus, -a, -um",
              "p": "Nōmen adiectīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "via longa"
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
          "marginalia": "longus -a -um",
          "tokens": [
            {
              "f": "Via",
              "l": "via, -ae",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Ablātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Iter stratum inter oppida"
            },
            {
              "f": "Latīna",
              "l": "Latīna",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Latīna"
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
              "f": "tam",
              "l": "tam",
              "p": "Adverbium comparātīvum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Aequē: tam... quam..."
            },
            {
              "f": "longa",
              "l": "longus, -a, -um",
              "p": "Nōmen adiectīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "via longa"
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
              "f": "quam",
              "l": "quam",
              "p": "Adverbium comparātīvum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "tam longa quam..."
            },
            {
              "f": "via",
              "l": "via, -ae",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Ablātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Iter stratum inter oppida"
            },
            {
              "f": "Appia",
              "l": "Appius, -a, -um",
              "p": "Nōmen adiectīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "via Appia",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "tam... quam...",
          "tokens": [
            {
              "f": "Quam",
              "l": "quam",
              "p": "Adverbium comparātīvum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "tam longa quam..."
            },
            {
              "f": "longa",
              "l": "longus, -a, -um",
              "p": "Nōmen adiectīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "via longa"
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
              "f": "via",
              "l": "via, -ae",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Ablātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Iter stratum inter oppida"
            },
            {
              "f": "Flāminia",
              "l": "Flāminius, -a, -um",
              "p": "Nōmen adiectīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "via Flāminia",
              "punc": "?"
            },
            {
              "f": "Neque",
              "l": "neque",
              "p": "Coniūnctiō",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "= et nōn"
            },
            {
              "f": "ea",
              "l": "is, ea, id",
              "p": "Prōnōmen dēmōnstrātīvum",
              "c": "Nōminātīvus / Acc.",
              "n": "Sing. fēm. / Plūr. neut.",
              "g": "Fēm. / Neut.",
              "d": "ea pulchra est / ea cubicula"
            },
            {
              "f": "tam",
              "l": "tam",
              "p": "Adverbium comparātīvum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Aequē: tam... quam..."
            },
            {
              "f": "longa",
              "l": "longus, -a, -um",
              "p": "Nōmen adiectīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "via longa"
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
              "f": "quam",
              "l": "quam",
              "p": "Adverbium comparātīvum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "tam longa quam..."
            },
            {
              "f": "via",
              "l": "via, -ae",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Ablātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Iter stratum inter oppida"
            },
            {
              "f": "Appia",
              "l": "Appius, -a, -um",
              "p": "Nōmen adiectīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "via Appia",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "X",
          "marginalia": "",
          "tokens": [
            {
              "f": "Tiberis",
              "l": "Tiberis",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Tiberis"
            },
            {
              "f": "fluvius",
              "l": "fluvius",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "fluvius"
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
              "f": "tam",
              "l": "tam",
              "p": "Adverbium comparātīvum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Aequē: tam... quam..."
            },
            {
              "f": "longus",
              "l": "longus, -a, -um",
              "p": "Nōmen adiectīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Magnae longitūdinis; ↔ brevis"
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
              "f": "quam",
              "l": "quam",
              "p": "Adverbium comparātīvum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "tam longa quam..."
            },
            {
              "f": "fluvius",
              "l": "fluvius",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "fluvius"
            },
            {
              "f": "Padus",
              "l": "Padus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Fluvius maximus Italiae",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "circum oppida (acc.)",
          "tokens": [
            {
              "f": "Circum",
              "l": "circum",
              "p": "Praepositiō",
              "c": "cum Accūsātīvō",
              "n": "—",
              "g": "—",
              "d": "In circuitū: circum oppidum mūrus est"
            },
            {
              "f": "oppida",
              "l": "oppida",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "oppida"
            },
            {
              "f": "mūrī",
              "l": "mūrus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Genetīvus",
              "n": "Plūrālis / Sing.",
              "g": "Masculīnum",
              "d": "Circum oppida mūrī sunt"
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
            },
            {
              "f": "Circum",
              "l": "circum",
              "p": "Praepositiō",
              "c": "cum Accūsātīvō",
              "n": "—",
              "g": "—",
              "d": "In circuitū: circum oppidum mūrus est"
            },
            {
              "f": "Rōmam",
              "l": "Rōmam",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Rōmam"
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
              "f": "mūrus",
              "l": "mūrus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Vallum lapideum circum oppidum"
            },
            {
              "f": "antīquus",
              "l": "antīquus",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "antīquus",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "duodecim portae",
          "tokens": [
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
              "f": "mūrō",
              "l": "mūrus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Ablātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "In mūrō Rōmānō"
            },
            {
              "f": "Rōmānō",
              "l": "Rōmānō",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Rōmānō"
            },
            {
              "f": "duodecim",
              "l": "duodecim",
              "p": "Nōmen numerāle indecl.",
              "c": "—",
              "n": "Plūrālis",
              "g": "—",
              "d": "Numerus XII (12)"
            },
            {
              "f": "portae",
              "l": "porta, -ae",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Genetīvus",
              "n": "Plūrālis / Sing.",
              "g": "Fēminīnum",
              "d": "duodecim portae"
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
            },
            {
              "f": "Porta",
              "l": "porta, -ae",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Ablātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Magnum ōstium in mūrō urbis"
            },
            {
              "f": "prīma",
              "l": "prīmus, -a, -um",
              "p": "Nōmen ōrdināle",
              "c": "Nōminātīvus / Ablātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Scaena prīma / in scaenā prīmā"
            },
            {
              "f": "Rōmāna",
              "l": "Rōmāna",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Rōmāna"
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
              "f": "porta",
              "l": "porta, -ae",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Ablātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Magnum ōstium in mūrō urbis"
            },
            {
              "f": "Capēna",
              "l": "Capēnus, -a, -um",
              "p": "Nōmen adiectīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "porta Capēna",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "",
          "tokens": [
            {
              "f": "Circum",
              "l": "circum",
              "p": "Praepositiō",
              "c": "cum Accūsātīvō",
              "n": "—",
              "g": "—",
              "d": "In circuitū: circum oppidum mūrus est"
            },
            {
              "f": "oppidum",
              "l": "oppidum",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "oppidum"
            },
            {
              "f": "Tusculum",
              "l": "Tusculum",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Tusculum"
            },
            {
              "f": "mūrus",
              "l": "mūrus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Vallum lapideum circum oppidum"
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
              "f": "tam",
              "l": "tam",
              "p": "Adverbium comparātīvum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Aequē: tam... quam..."
            },
            {
              "f": "longus",
              "l": "longus, -a, -um",
              "p": "Nōmen adiectīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Magnae longitūdinis; ↔ brevis"
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
              "f": "quam",
              "l": "quam",
              "p": "Adverbium comparātīvum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "tam longa quam..."
            },
            {
              "f": "circum",
              "l": "circum",
              "p": "Praepositiō",
              "c": "cum Accūsātīvō",
              "n": "—",
              "g": "—",
              "d": "In circuitū: circum oppidum mūrus est"
            },
            {
              "f": "Rōmam",
              "l": "Rōmam",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Rōmam",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "ab oppidō ad vīllam",
          "tokens": [
            {
              "f": "Vīlla",
              "l": "vīlla, -ae",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Ablātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Domus rūstica cum agrīs et hortō"
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
              "d": "Persōna III sing. praesentis"
            },
            {
              "f": "prope",
              "l": "prope",
              "p": "Praepositiō",
              "c": "cum Accūsātīvō",
              "n": "—",
              "g": "—",
              "d": "Haud procul: prope Rōmam; ↔ procul ab"
            },
            {
              "f": "Tusculum",
              "l": "Tusculum",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Tusculum",
              "punc": "."
            },
            {
              "f": "Ab",
              "l": "ab / ā",
              "p": "Praepositiō",
              "c": "cum Ablātīvō",
              "n": "—",
              "g": "—",
              "d": "Mōtus ā locō vel agentis: ab oppidō / ā Lydiā"
            },
            {
              "f": "oppidō",
              "l": "oppidō",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "oppidō"
            },
            {
              "f": "Tusculō",
              "l": "Tusculō",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Tusculō"
            },
            {
              "f": "ad",
              "l": "ad",
              "p": "Praepositiō",
              "c": "cum Accūsātīvō",
              "n": "—",
              "g": "—",
              "d": "Mōtus ad locum: ad vīllam / ad oppidum"
            },
            {
              "f": "vīllam",
              "l": "vīlla, -ae",
              "p": "Nōmen substantīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "ad vīllam"
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
              "f": "longa",
              "l": "longus, -a, -um",
              "p": "Nōmen adiectīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "via longa"
            },
            {
              "f": "via",
              "l": "via, -ae",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Ablātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Iter stratum inter oppida"
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
          "numerus": "XV",
          "marginalia": "it / eunt",
          "tokens": [
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
              "f": "quattuor",
              "l": "quattuor",
              "p": "Nōmen numerāle indecl.",
              "c": "—",
              "n": "Plūrālis",
              "g": "—",
              "d": "Numerus IV (4)"
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
              "f": "in",
              "l": "in",
              "p": "Praepositiō",
              "c": "cum Ablātīvō",
              "n": "—",
              "g": "—",
              "d": "Indicat locum ubi aliquid inest"
            },
            {
              "f": "viā",
              "l": "via, -ae",
              "p": "Nōmen substantīvum",
              "c": "Ablātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "in viā / viā Latīnā",
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
              "f": "ab",
              "l": "ab / ā",
              "p": "Praepositiō",
              "c": "cum Ablātīvō",
              "n": "—",
              "g": "—",
              "d": "Mōtus ā locō vel agentis: ab oppidō / ā Lydiā"
            },
            {
              "f": "oppidō",
              "l": "oppidō",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "oppidō"
            },
            {
              "f": "ad",
              "l": "ad",
              "p": "Praepositiō",
              "c": "cum Accūsātīvō",
              "n": "—",
              "g": "—",
              "d": "Mōtus ad locum: ad vīllam / ad oppidum"
            },
            {
              "f": "vīllam",
              "l": "vīlla, -ae",
              "p": "Nōmen substantīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "ad vīllam"
            },
            {
              "f": "suam",
              "l": "suam",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "suam"
            },
            {
              "f": "it",
              "l": "īre",
              "p": "Verbum irregulāre",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Graditur, vadit: Iūlius ad vīllam it",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "",
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
              "f": "et",
              "l": "et",
              "p": "Coniūnctiō",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Coniunctio copulātīva"
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
              "f": "ab",
              "l": "ab / ā",
              "p": "Praepositiō",
              "c": "cum Ablātīvō",
              "n": "—",
              "g": "—",
              "d": "Mōtus ā locō vel agentis: ab oppidō / ā Lydiā"
            },
            {
              "f": "oppidō",
              "l": "oppidō",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "oppidō"
            },
            {
              "f": "ad",
              "l": "ad",
              "p": "Praepositiō",
              "c": "cum Accūsātīvō",
              "n": "—",
              "g": "—",
              "d": "Mōtus ad locum: ad vīllam / ad oppidum"
            },
            {
              "f": "vīllam",
              "l": "vīlla, -ae",
              "p": "Nōmen substantīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "ad vīllam"
            },
            {
              "f": "eunt",
              "l": "īre",
              "p": "Verbum irregulāre",
              "c": "Indicātīvus",
              "n": "Plūrālis",
              "g": "—",
              "d": "Dominus et servī eunt",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "lectīca",
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
              "f": "in",
              "l": "in",
              "p": "Praepositiō",
              "c": "cum Ablātīvō",
              "n": "—",
              "g": "—",
              "d": "Indicat locum ubi aliquid inest"
            },
            {
              "f": "lectīcā",
              "l": "lectīca, -ae",
              "p": "Nōmen substantīvum",
              "c": "Ablātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "in lectīcā / lectīcā vehitur"
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
              "f": "Duo",
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
              "f": "lectīcam",
              "l": "lectīca, -ae",
              "p": "Nōmen substantīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "lectīcam portant"
            },
            {
              "f": "cum",
              "l": "cum",
              "p": "Praepositiō",
              "c": "cum Ablātīvō",
              "n": "—",
              "g": "—",
              "d": "Ūnā cum: cum familiā / cum līberīs; ↔ sine"
            },
            {
              "f": "dominō",
              "l": "dominō",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "dominō"
            },
            {
              "f": "portant",
              "l": "portāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Plūrālis",
              "g": "—",
              "d": "Servī quī lectīcam portant",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "portant",
          "tokens": [
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
              "f": "quī",
              "l": "quī, quae, quod",
              "p": "Prōnōmen relātīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris / Plūr.",
              "g": "Masculīnum",
              "d": "Puer quī cantat / rīdet"
            },
            {
              "f": "lectīcam",
              "l": "lectīca, -ae",
              "p": "Nōmen substantīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "lectīcam portant"
            },
            {
              "f": "portant",
              "l": "portāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Plūrālis",
              "g": "—",
              "d": "Servī quī lectīcam portant"
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
              "f": "Ursus",
              "l": "Ursus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Servus Iūliī quī lectīcam portat"
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
              "d": "Servus Iūliī bonus",
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
              "d": "Indicat locum ubi aliquid inest"
            },
            {
              "f": "viā",
              "l": "via, -ae",
              "p": "Nōmen substantīvum",
              "c": "Ablātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "in viā / viā Latīnā"
            },
            {
              "f": "ambulat",
              "l": "ambulāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Pedibus graditur; ↔ vehitur",
              "punc": ","
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
              "f": "eum",
              "l": "is, ea, id",
              "p": "Prōnōmen dēmōnstrātīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Accūsātīvus: Iūlius eum audit"
            },
            {
              "f": "portant",
              "l": "portāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Plūrālis",
              "g": "—",
              "d": "Servī quī lectīcam portant",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "XX",
          "marginalia": "umerus",
          "tokens": [
            {
              "f": "Syrus",
              "l": "Syrus",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Syrus"
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
              "f": "Lēander",
              "l": "Lēander, Lēandrī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Servus Iūliī"
            },
            {
              "f": "ambulant",
              "l": "ambulāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Plūrālis",
              "g": "—",
              "d": "Syrus et Lēander ambulant",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "saccus",
          "tokens": [
            {
              "f": "Syrus",
              "l": "Syrus",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Syrus"
            },
            {
              "f": "saccum",
              "l": "saccus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "saccum portat"
            },
            {
              "f": "portat",
              "l": "portāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Fert manibus vel umerīs: Saccus quem Syrus portat"
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
              "f": "Lēander",
              "l": "Lēander, Lēandrī",
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
              "f": "saccum",
              "l": "saccus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "saccum portat"
            },
            {
              "f": "portat",
              "l": "portāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Fert manibus vel umerīs: Saccus quem Syrus portat",
              "punc": ":"
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "duōs saccōs in umerīs",
          "tokens": [
            {
              "f": "Syrus",
              "l": "Syrus",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Syrus"
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
              "f": "Lēander",
              "l": "Lēander, Lēandrī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Servus Iūliī"
            },
            {
              "f": "duōs",
              "l": "duōs",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "duōs"
            },
            {
              "f": "saccōs",
              "l": "saccus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Accūsātīvus",
              "n": "Plūrālis",
              "g": "Masculīnum",
              "d": "duōs saccōs portant"
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
              "f": "umerīs",
              "l": "umerus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Ablātīvus",
              "n": "Plūrālis",
              "g": "Masculīnum",
              "d": "in umerīs / umerīs portant"
            },
            {
              "f": "portant",
              "l": "portāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Plūrālis",
              "g": "—",
              "d": "Servī quī lectīcam portant",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "saccī quōs portant",
          "tokens": [
            {
              "f": "Saccī",
              "l": "saccus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Genetīvus",
              "n": "Plūrālis / Sing.",
              "g": "Masculīnum",
              "d": "Saccī magnī sunt"
            },
            {
              "f": "quōs",
              "l": "quōs",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "quōs"
            },
            {
              "f": "Syrus",
              "l": "Syrus",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Syrus"
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
              "f": "Lēander",
              "l": "Lēander, Lēandrī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Servus Iūliī"
            },
            {
              "f": "portant",
              "l": "portāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Plūrālis",
              "g": "—",
              "d": "Servī quī lectīcam portant"
            },
            {
              "f": "magnī",
              "l": "magnī",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "magnī"
            },
            {
              "f": "sunt",
              "l": "esse",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Plūrālis",
              "g": "—",
              "d": "Persōna III plūr. praesentis",
              "punc": ","
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
              "f": "saccus",
              "l": "saccus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Pera magna fune clausa"
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
              "f": "Syrus",
              "l": "Syrus",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Syrus"
            },
            {
              "f": "portat",
              "l": "portāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Fert manibus vel umerīs: Saccus quem Syrus portat"
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
              "f": "tam",
              "l": "tam",
              "p": "Adverbium comparātīvum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Aequē: tam... quam..."
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
              "d": "Persōna III sing. praesentis"
            },
            {
              "f": "quam",
              "l": "quam",
              "p": "Adverbium comparātīvum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "tam longa quam..."
            },
            {
              "f": "saccus",
              "l": "saccus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Pera magna fune clausa"
            },
            {
              "f": "Lēandrī",
              "l": "Lēander, Lēandrī",
              "p": "Nōmen proprium",
              "c": "Genetīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "saccus Lēandrī",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "XXV",
          "marginalia": "vehunt = portant",
          "tokens": [
            {
              "f": "Quattuor",
              "l": "quattuor",
              "p": "Nōmen numerāle indecl.",
              "c": "—",
              "n": "Plūrālis",
              "g": "—",
              "d": "Numerus IV (4)"
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
              "f": "dominum",
              "l": "dominus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Accūsātīvus: salūtā dominum"
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
              "f": "duōs",
              "l": "duōs",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "duōs"
            },
            {
              "f": "saccōs",
              "l": "saccus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Accūsātīvus",
              "n": "Plūrālis",
              "g": "Masculīnum",
              "d": "duōs saccōs portant"
            },
            {
              "f": "ab",
              "l": "ab / ā",
              "p": "Praepositiō",
              "c": "cum Ablātīvō",
              "n": "—",
              "g": "—",
              "d": "Mōtus ā locō vel agentis: ab oppidō / ā Lydiā"
            },
            {
              "f": "oppidō",
              "l": "oppidō",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "oppidō"
            },
            {
              "f": "ad",
              "l": "ad",
              "p": "Praepositiō",
              "c": "cum Accūsātīvō",
              "n": "—",
              "g": "—",
              "d": "Mōtus ad locum: ad vīllam / ad oppidum"
            },
            {
              "f": "vīllam",
              "l": "vīlla, -ae",
              "p": "Nōmen substantīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "ad vīllam"
            },
            {
              "f": "vehunt",
              "l": "vehere",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Plūrālis",
              "g": "—",
              "d": "Quattuor servī dominum vehunt",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "inter Ursum et Dāvum",
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
              "f": "in",
              "l": "in",
              "p": "Praepositiō",
              "c": "cum Ablātīvō",
              "n": "—",
              "g": "—",
              "d": "Indicat locum ubi aliquid inest"
            },
            {
              "f": "lectīcā",
              "l": "lectīca, -ae",
              "p": "Nōmen substantīvum",
              "c": "Ablātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "in lectīcā / lectīcā vehitur"
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
              "f": "inter",
              "l": "inter",
              "p": "Praepositiō",
              "c": "cum Accūsātīvō",
              "n": "—",
              "g": "—",
              "d": "In mediō duōrum: inter Rōmam et Brundisium"
            },
            {
              "f": "Ursum",
              "l": "Ursus, -ī",
              "p": "Nōmen proprium",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "inter Ursum et Dāvum"
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
              "f": "Dāvum",
              "l": "Dāvus, -ī",
              "p": "Nōmen proprium",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Accūsātīvus: Mēdus Dāvum vocat",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "ante ↔ post",
          "tokens": [
            {
              "f": "Ursus",
              "l": "Ursus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Servus Iūliī quī lectīcam portat"
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
              "f": "ante",
              "l": "ante",
              "p": "Praepositiō",
              "c": "cum Accūsātīvō",
              "n": "—",
              "g": "—",
              "d": "In parte anteriōre: ante Iūlium; ↔ post"
            },
            {
              "f": "Iūlium",
              "l": "Iūlius, -ī",
              "p": "Nōmen proprium",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Accūsātīvus: persōna quem vocat/videt",
              "punc": ","
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
              "f": "post",
              "l": "post",
              "p": "Praepositiō",
              "c": "cum Accūsātīvō",
              "n": "—",
              "g": "—",
              "d": "A tergō: post lectīcam; ↔ ante"
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
              "f": "Syrus",
              "l": "Syrus",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Syrus"
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
              "f": "Lēander",
              "l": "Lēander, Lēandrī",
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
              "f": "ante",
              "l": "ante",
              "p": "Praepositiō",
              "c": "cum Accūsātīvō",
              "n": "—",
              "g": "—",
              "d": "In parte anteriōre: ante Iūlium; ↔ post"
            },
            {
              "f": "lectīcam",
              "l": "lectīca, -ae",
              "p": "Nōmen substantīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "lectīcam portant",
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
              "f": "post",
              "l": "post",
              "p": "Praepositiō",
              "c": "cum Accūsātīvō",
              "n": "—",
              "g": "—",
              "d": "A tergō: post lectīcam; ↔ ante"
            },
            {
              "f": "lectīcam",
              "l": "lectīca, -ae",
              "p": "Nōmen substantīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "lectīcam portant"
            },
            {
              "f": "ambulant",
              "l": "ambulāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Plūrālis",
              "g": "—",
              "d": "Syrus et Lēander ambulant",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "ā = ab",
          "tokens": [
            {
              "f": "Venitne",
              "l": "Venitne",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Venitne"
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
              "f": "ā",
              "l": "ab / ā",
              "p": "Praepositiō",
              "c": "cum Ablātīvō",
              "n": "—",
              "g": "—",
              "d": "Forma ante cōnsonantēs: ā vīllā / ā servō"
            },
            {
              "f": "vīllā",
              "l": "vīlla, -ae",
              "p": "Nōmen substantīvum",
              "c": "Ablātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "in vīllā / ab vīllā",
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
              "f": "ā",
              "l": "ab / ā",
              "p": "Praepositiō",
              "c": "cum Ablātīvō",
              "n": "—",
              "g": "—",
              "d": "Forma ante cōnsonantēs: ā vīllā / ā servō"
            },
            {
              "f": "vīllā",
              "l": "vīlla, -ae",
              "p": "Nōmen substantīvum",
              "c": "Ablātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "in vīllā / ab vīllā"
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
          "numerus": "XXX",
          "marginalia": "unde? ↔ quō?",
          "tokens": [
            {
              "f": "Unde",
              "l": "unde",
              "p": "Adverbium interrogātīvum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "A quō locō? Unde venit?"
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
              "f": "Ab",
              "l": "ab / ā",
              "p": "Praepositiō",
              "c": "cum Ablātīvō",
              "n": "—",
              "g": "—",
              "d": "Mōtus ā locō vel agentis: ab oppidō / ā Lydiā"
            },
            {
              "f": "oppidō",
              "l": "oppidō",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "oppidō"
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
              "f": "Quō",
              "l": "quō",
              "p": "Adverbium interrogātīvum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Ad quem locum? Quō it?"
            },
            {
              "f": "it",
              "l": "īre",
              "p": "Verbum irregulāre",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Graditur, vadit: Iūlius ad vīllam it"
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
              "f": "Ad",
              "l": "ad",
              "p": "Praepositiō",
              "c": "cum Accūsātīvō",
              "n": "—",
              "g": "—",
              "d": "Mōtus ad locum: ad vīllam / ad oppidum"
            },
            {
              "f": "vīllam",
              "l": "vīlla, -ae",
              "p": "Nōmen substantīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "ad vīllam"
            },
            {
              "f": "it",
              "l": "īre",
              "p": "Verbum irregulāre",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Graditur, vadit: Iūlius ad vīllam it",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "",
          "tokens": [
            {
              "f": "Post",
              "l": "post",
              "p": "Praepositiō",
              "c": "cum Accūsātīvō",
              "n": "—",
              "g": "—",
              "d": "A tergō: post lectīcam; ↔ ante"
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
              "f": "Tusculum",
              "l": "Tusculum",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Tusculum"
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
              "f": "ante",
              "l": "ante",
              "p": "Praepositiō",
              "c": "cum Accūsātīvō",
              "n": "—",
              "g": "—",
              "d": "In parte anteriōre: ante Iūlium; ↔ post"
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
              "f": "est",
              "l": "esse",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Persōna III sing. praesentis"
            },
            {
              "f": "vīlla",
              "l": "vīlla, -ae",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Ablātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Domus rūstica cum agrīs et hortō",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "apud eum",
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
              "f": "sōlus",
              "l": "sōlus, -a, -um",
              "p": "Nōmen adiectīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Sine aliīs: Iūlius nōn sōlus est"
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
              "punc": ","
            },
            {
              "f": "nam",
              "l": "nam",
              "p": "Coniūnctiō causālis",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Explicat causam (= etenim)"
            },
            {
              "f": "quattuor",
              "l": "quattuor",
              "p": "Nōmen numerāle indecl.",
              "c": "—",
              "n": "Plūrālis",
              "g": "—",
              "d": "Numerus IV (4)"
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
              "f": "apud",
              "l": "apud",
              "p": "Praepositiō",
              "c": "cum Accūsātīvō",
              "n": "—",
              "g": "—",
              "d": "Prope, ad latus, in domō alicuius: apud Lydiam"
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
          "marginalia": "timet",
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
              "f": "est",
              "l": "esse",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Persōna III sing. praesentis"
            },
            {
              "f": "apud",
              "l": "apud",
              "p": "Praepositiō",
              "c": "cum Accūsātīvō",
              "n": "—",
              "g": "—",
              "d": "Prope, ad latus, in domō alicuius: apud Lydiam"
            },
            {
              "f": "dominum",
              "l": "dominus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Accūsātīvus: salūtā dominum",
              "punc": ","
            },
            {
              "f": "nam",
              "l": "nam",
              "p": "Coniūnctiō causālis",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Explicat causam (= etenim)"
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
              "f": "dominum",
              "l": "dominus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Accūsātīvus: salūtā dominum"
            },
            {
              "f": "īrātum",
              "l": "īrātum",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "īrātum"
            },
            {
              "f": "timet",
              "l": "timēre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Metuit, formīdat: Mēdus dominum timet",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "malus ↔ bonus",
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
              "f": "est",
              "l": "esse",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Persōna III sing. praesentis"
            },
            {
              "f": "malus",
              "l": "malus, -a, -um",
              "p": "Nōmen adiectīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "↔ bonus; improbus"
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
              "f": "quī",
              "l": "quī, quae, quod",
              "p": "Prōnōmen relātīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris / Plūr.",
              "g": "Masculīnum",
              "d": "Puer quī cantat / rīdet"
            },
            {
              "f": "nummōs",
              "l": "nummōs",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "nummōs"
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
              "punc": "."
            }
          ]
        },
        {
          "numerus": "XXXV",
          "marginalia": "baculō verberat",
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
              "f": "servōs",
              "l": "servus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Accūsātīvus",
              "n": "Plūrālis",
              "g": "Masculīnum",
              "d": "multōs servōs habet"
            },
            {
              "f": "malōs",
              "l": "malus, -a, -um",
              "p": "Nōmen adiectīvum",
              "c": "Accūsātīvus",
              "n": "Plūrālis",
              "g": "Masculīnum",
              "d": "servōs malōs"
            },
            {
              "f": "baculō",
              "l": "baculō",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "baculō"
            },
            {
              "f": "verberat",
              "l": "verberāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Pulsat et pulsat ('tuxtax')",
              "punc": ";"
            },
            {
              "f": "itaque",
              "l": "itaque",
              "p": "Coniūnctiō illātīva",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Ergō, ob eam rem"
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
              "f": "malī",
              "l": "malus, -a, -um",
              "p": "Nōmen adiectīvum",
              "c": "Nōminātīvus / Genetīvus",
              "n": "Plūrālis / Sing.",
              "g": "Masculīnum",
              "d": "servī malī"
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
              "f": "et",
              "l": "et",
              "p": "Coniūnctiō",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Coniunctio copulātīva"
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
              "f": "eius",
              "l": "is, ea, id",
              "p": "Prōnōmen dēmōnstrātīvum",
              "c": "Genetīvus",
              "n": "Singulāris",
              "g": "Omnia genera",
              "d": "Genetīvus possessīvus: in sacculō eius"
            },
            {
              "f": "timent",
              "l": "timēre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Plūrālis",
              "g": "—",
              "d": "Servī malī baculum timent",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "Dāvus autem...",
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
              "f": "autem",
              "l": "autem",
              "p": "Coniūnctiō adversātīva",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Sed, vērō (post prīmum verbum sententiae)"
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
              "f": "is",
              "l": "is, ea, id",
              "p": "Prōnōmen dēmōnstrātīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Subiectum masculīnum: is habet"
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
              "f": "amat",
              "l": "amāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Amōre dīligit: Iūlius Aemiliam amat",
              "punc": "."
            }
          ]
        }
      ]
    },
    {
      "titulusSectio": "LĒCTIŌ SECUNDA: DOMINĪ ET SERVĪ IN VIĀ",
      "versus": [
        {
          "numerus": "",
          "marginalia": "inimīcus ↔ amīcus",
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
              "f": "amīcus",
              "l": "amīcus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Homo cārus, socius; ↔ inimīcus"
            },
            {
              "f": "Mēdī",
              "l": "Mēdus, -ī",
              "p": "Nōmen proprium",
              "c": "Genetīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Genetīvus: sacculus Mēdī"
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
              "punc": ","
            },
            {
              "f": "nam",
              "l": "nam",
              "p": "Coniūnctiō causālis",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Explicat causam (= etenim)"
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
              "f": "bonus",
              "l": "bonus, -a, -um",
              "p": "Nōmen adiectīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "= probus; ↔ malus"
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
              "f": "servus",
              "l": "servus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Homo dominō serviēns"
            },
            {
              "f": "malus",
              "l": "malus, -a, -um",
              "p": "Nōmen adiectīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "↔ bonus; improbus"
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
              "f": "amīcī",
              "l": "amīcus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Genetīvus / Nōm. plūr.",
              "n": "Singulāris / Plūr.",
              "g": "Masculīnum",
              "d": "amīcī sunt",
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
              "f": "inimīcī",
              "l": "inimīcus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Genetīvus / Nōm. plūr.",
              "n": "Singulāris / Plūr.",
              "g": "Masculīnum",
              "d": "nōn amīcī, sed inimīcī"
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
              "f": "Mēdus",
              "l": "Mēdus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Servus Iūliī improbus qui pecūniam habet"
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
              "f": "inimīcus",
              "l": "inimīcus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "↔ amīcus; adversārius"
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
            },
            {
              "f": "Ursus",
              "l": "Ursus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Servus Iūliī quī lectīcam portat"
            },
            {
              "f": "autem",
              "l": "autem",
              "p": "Coniūnctiō adversātīva",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Sed, vērō (post prīmum verbum sententiae)"
            },
            {
              "f": "amīcus",
              "l": "amīcus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Homo cārus, socius; ↔ inimīcus"
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
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "Tusculī = in oppidō",
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
              "f": "abest",
              "l": "abesse",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "↔ adest; nōn hīc est"
            },
            {
              "f": "ā",
              "l": "ab / ā",
              "p": "Praepositiō",
              "c": "cum Ablātīvō",
              "n": "—",
              "g": "—",
              "d": "Forma ante cōnsonantēs: ā vīllā / ā servō"
            },
            {
              "f": "dominō",
              "l": "dominō",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "dominō"
            },
            {
              "f": "suō",
              "l": "suus, -a, -um",
              "p": "Prōnōmen possessīvum reflexīvum",
              "c": "Ablātīvus",
              "n": "Singulāris",
              "g": "Masculīnum / Neut.",
              "d": "Ablātīvus: in sacculō suō",
              "punc": "."
            },
            {
              "f": "Estne",
              "l": "esse + -ne",
              "p": "Verbum + Particula",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Est + particula interrogātīva"
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
              "f": "oppidō",
              "l": "oppidō",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "oppidō"
            },
            {
              "f": "Tusculō",
              "l": "Tusculō",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Tusculō",
              "punc": "?"
            }
          ]
        },
        {
          "numerus": "XL",
          "marginalia": "Rōmae = in urbe",
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
              "f": "Tusculī",
              "l": "Tusculī",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Tusculī"
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
              "f": "neque",
              "l": "neque",
              "p": "Coniūnctiō",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "= et nōn"
            },
            {
              "f": "Rōmae",
              "l": "Rōmae",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Rōmae"
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
              "d": "Indicat locum ubi aliquid inest"
            },
            {
              "f": "viā",
              "l": "via, -ae",
              "p": "Nōmen substantīvum",
              "c": "Ablātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "in viā / viā Latīnā"
            },
            {
              "f": "Latīnā",
              "l": "Latīnā",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Latīnā"
            },
            {
              "f": "inter",
              "l": "inter",
              "p": "Praepositiō",
              "c": "cum Accūsātīvō",
              "n": "—",
              "g": "—",
              "d": "In mediō duōrum: inter Rōmam et Brundisium"
            },
            {
              "f": "Rōmam",
              "l": "Rōmam",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Rōmam"
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
              "l": "Tusculum",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Tusculum",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "Tusculō = ab oppidō",
          "tokens": [
            {
              "f": "Unde",
              "l": "unde",
              "p": "Adverbium interrogātīvum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "A quō locō? Unde venit?"
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
              "punc": "?"
            },
            {
              "f": "Tusculō",
              "l": "Tusculō",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Tusculō"
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
              "f": "neque",
              "l": "neque",
              "p": "Coniūnctiō",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "= et nōn"
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
              "f": "ad",
              "l": "ad",
              "p": "Praepositiō",
              "c": "cum Accūsātīvō",
              "n": "—",
              "g": "—",
              "d": "Mōtus ad locum: ad vīllam / ad oppidum"
            },
            {
              "f": "vīllam",
              "l": "vīlla, -ae",
              "p": "Nōmen substantīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "ad vīllam"
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
              "f": "it",
              "l": "īre",
              "p": "Verbum irregulāre",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Graditur, vadit: Iūlius ad vīllam it",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "Rōmam = ad urbem",
          "tokens": [
            {
              "f": "Quō",
              "l": "quō",
              "p": "Adverbium interrogātīvum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Ad quem locum? Quō it?"
            },
            {
              "f": "it",
              "l": "īre",
              "p": "Verbum irregulāre",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Graditur, vadit: Iūlius ad vīllam it"
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
              "f": "Rōmam",
              "l": "Rōmam",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Rōmam"
            },
            {
              "f": "it",
              "l": "īre",
              "p": "Verbum irregulāre",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Graditur, vadit: Iūlius ad vīllam it",
              "punc": "."
            },
            {
              "f": "Tusculum",
              "l": "Tusculum",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Tusculum"
            },
            {
              "f": "post",
              "l": "post",
              "p": "Praepositiō",
              "c": "cum Accūsātīvō",
              "n": "—",
              "g": "—",
              "d": "A tergō: post lectīcam; ↔ ante"
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
              "f": "ante",
              "l": "ante",
              "p": "Praepositiō",
              "c": "cum Accūsātīvō",
              "n": "—",
              "g": "—",
              "d": "In parte anteriōre: ante Iūlium; ↔ post"
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
              "f": "est",
              "l": "esse",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Persōna III sing. praesentis"
            },
            {
              "f": "Rōma",
              "l": "Rōma, -ae",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Oppidum et caput imperiī in Italiā",
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
              "f": "viā",
              "l": "via, -ae",
              "p": "Nōmen substantīvum",
              "c": "Ablātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "in viā / viā Latīnā"
            },
            {
              "f": "Latīnā",
              "l": "Latīnā",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Latīnā"
            },
            {
              "f": "Tusculō",
              "l": "Tusculō",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Tusculō"
            },
            {
              "f": "Rōmam",
              "l": "Rōmam",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Rōmam"
            },
            {
              "f": "ambulat",
              "l": "ambulāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Pedibus graditur; ↔ vehitur",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "",
          "tokens": [
            {
              "f": "Etiam",
              "l": "etiam",
              "p": "Coniūnctiō / Adverbium",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "= quoque: Etiam peristylum magnum est"
            },
            {
              "f": "Cornēlius",
              "l": "Cornēlius, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Vir Rōmānus, amīcus Iūliī",
              "punc": ","
            },
            {
              "f": "amīcus",
              "l": "amīcus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Homo cārus, socius; ↔ inimīcus"
            },
            {
              "f": "Iūliī",
              "l": "Iūlius, -ī",
              "p": "Nōmen proprium",
              "c": "Genetīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Genetīvus: fīlius Iūliī",
              "punc": ","
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
              "f": "viā",
              "l": "via, -ae",
              "p": "Nōmen substantīvum",
              "c": "Ablātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "in viā / viā Latīnā"
            },
            {
              "f": "Latīnā",
              "l": "Latīnā",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Latīnā"
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
              "f": "inter",
              "l": "inter",
              "p": "Praepositiō",
              "c": "cum Accūsātīvō",
              "n": "—",
              "g": "—",
              "d": "In mediō duōrum: inter Rōmam et Brundisium"
            },
            {
              "f": "Rōmam",
              "l": "Rōmam",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Rōmam"
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
              "l": "Tusculum",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Tusculum",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "XLV",
          "marginalia": "",
          "tokens": [
            {
              "f": "Unde",
              "l": "unde",
              "p": "Adverbium interrogātīvum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "A quō locō? Unde venit?"
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
              "f": "Cornēlius",
              "l": "Cornēlius, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Vir Rōmānus, amīcus Iūliī",
              "punc": "?"
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
              "f": "Tusculō",
              "l": "Tusculō",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Tusculō",
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
              "f": "Rōmā",
              "l": "Rōmā",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Rōmā"
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
              "f": "Quō",
              "l": "quō",
              "p": "Adverbium interrogātīvum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Ad quem locum? Quō it?"
            },
            {
              "f": "it",
              "l": "īre",
              "p": "Verbum irregulāre",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Graditur, vadit: Iūlius ad vīllam it",
              "punc": "?"
            },
            {
              "f": "Cornēlius",
              "l": "Cornēlius, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Vir Rōmānus, amīcus Iūliī"
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
              "f": "Rōmam",
              "l": "Rōmam",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Rōmam",
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
              "f": "Tusculum",
              "l": "Tusculum",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Tusculum"
            },
            {
              "f": "it",
              "l": "īre",
              "p": "Verbum irregulāre",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Graditur, vadit: Iūlius ad vīllam it",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "in equō / equus",
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
              "f": "post",
              "l": "post",
              "p": "Praepositiō",
              "c": "cum Accūsātīvō",
              "n": "—",
              "g": "—",
              "d": "A tergō: post lectīcam; ↔ ante"
            },
            {
              "f": "eum",
              "l": "is, ea, id",
              "p": "Prōnōmen dēmōnstrātīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Accūsātīvus: Iūlius eum audit",
              "punc": ","
            },
            {
              "f": "ante",
              "l": "ante",
              "p": "Praepositiō",
              "c": "cum Accūsātīvō",
              "n": "—",
              "g": "—",
              "d": "In parte anteriōre: ante Iūlium; ↔ post"
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
              "f": "Tusculum",
              "l": "Tusculum",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Tusculum"
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
              "f": "Cornēlius",
              "l": "Cornēlius, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Vir Rōmānus, amīcus Iūliī"
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
              "f": "equō",
              "l": "equus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Ablātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "in equō / equō vehitur"
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
          "marginalia": "equus quī vehit",
          "tokens": [
            {
              "f": "Equus",
              "l": "equus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Animālis quō vehimur"
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
              "f": "Cornēlium",
              "l": "Cornēlius, -ī",
              "p": "Nōmen proprium",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Equus Cornēlium vehit"
            },
            {
              "f": "vehit",
              "l": "vehere",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Portat equō vel currū: Equus Cornēlium vehit"
            },
            {
              "f": "pulcher",
              "l": "pulcher, pulchra, pulchrum",
              "p": "Nōmen adiectīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Formōsus, venustus; ↔ foedus"
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
              "d": "Vir Rōmānus, amīcus Iūliī"
            },
            {
              "f": "ad",
              "l": "ad",
              "p": "Praepositiō",
              "c": "cum Accūsātīvō",
              "n": "—",
              "g": "—",
              "d": "Mōtus ad locum: ad vīllam / ad oppidum"
            },
            {
              "f": "vīllās",
              "l": "vīlla, -ae",
              "p": "Nōmen substantīvum",
              "c": "Accūsātīvus",
              "n": "Plūrālis",
              "g": "Fēminīnum",
              "d": "ad vīllās suās"
            },
            {
              "f": "suās",
              "l": "suās",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "suās"
            },
            {
              "f": "eunt",
              "l": "īre",
              "p": "Verbum irregulāre",
              "c": "Indicātīvus",
              "n": "Plūrālis",
              "g": "—",
              "d": "Dominus et servī eunt",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "",
          "tokens": [
            {
              "f": "Vīlla",
              "l": "vīlla, -ae",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Ablātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Domus rūstica cum agrīs et hortō"
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
              "f": "Iūlius",
              "l": "Iūlius, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Vir Rōmānus, pater familiae"
            },
            {
              "f": "habitat",
              "l": "habitāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Vīvit in locō: Iūlius in vīllā habitat"
            },
            {
              "f": "prope",
              "l": "prope",
              "p": "Praepositiō",
              "c": "cum Accūsātīvō",
              "n": "—",
              "g": "—",
              "d": "Haud procul: prope Rōmam; ↔ procul ab"
            },
            {
              "f": "Tusculum",
              "l": "Tusculum",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Tusculum"
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
              "f": "Ubi",
              "l": "ubi",
              "p": "Adverbium interrogātīvum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Quaerit locum"
            },
            {
              "f": "habitat",
              "l": "habitāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Vīvit in locō: Iūlius in vīllā habitat"
            },
            {
              "f": "Cornēlius",
              "l": "Cornēlius, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Vir Rōmānus, amīcus Iūliī",
              "punc": "?"
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
              "f": "Tusculī",
              "l": "Tusculī",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Tusculī"
            },
            {
              "f": "habitat",
              "l": "habitāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Vīvit in locō: Iūlius in vīllā habitat",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "L",
          "marginalia": "fessus -a -um",
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
              "f": "Iūlius",
              "l": "Iūlius, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Vir Rōmānus, pater familiae"
            },
            {
              "f": "prope",
              "l": "prope",
              "p": "Praepositiō",
              "c": "cum Accūsātīvō",
              "n": "—",
              "g": "—",
              "d": "Haud procul: prope Rōmam; ↔ procul ab"
            },
            {
              "f": "vīllam",
              "l": "vīlla, -ae",
              "p": "Nōmen substantīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "ad vīllam"
            },
            {
              "f": "suam",
              "l": "suam",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "suam"
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
              "f": "Servī",
              "l": "servus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Genetīvus / Nōm. plūr.",
              "n": "Singulāris / Plūr.",
              "g": "Masculīnum",
              "d": "Plūrāle: servī"
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
              "f": "lectīcam",
              "l": "lectīca, -ae",
              "p": "Nōmen substantīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "lectīcam portant"
            },
            {
              "f": "portant",
              "l": "portāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Plūrālis",
              "g": "—",
              "d": "Servī quī lectīcam portant"
            },
            {
              "f": "fessī",
              "l": "fessus, -a, -um",
              "p": "Nōmen adiectīvum",
              "c": "Nōminātīvus",
              "n": "Plūrālis",
              "g": "Masculīnum",
              "d": "Servī fessī sunt"
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
          "marginalia": "portātur (pass.)",
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
              "f": "autem",
              "l": "autem",
              "p": "Coniūnctiō adversātīva",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Sed, vērō (post prīmum verbum sententiae)"
            },
            {
              "f": "fessus",
              "l": "fessus, -a, -um",
              "p": "Nōmen adiectīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Labōre dēfessus, lassus"
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
              "punc": ","
            },
            {
              "f": "nam",
              "l": "nam",
              "p": "Coniūnctiō causālis",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Explicat causam (= etenim)"
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
              "f": "ambulat",
              "l": "ambulāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Pedibus graditur; ↔ vehitur",
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
              "f": "ab",
              "l": "ab / ā",
              "p": "Praepositiō",
              "c": "cum Ablātīvō",
              "n": "—",
              "g": "—",
              "d": "Mōtus ā locō vel agentis: ab oppidō / ā Lydiā"
            },
            {
              "f": "Ursō",
              "l": "Ursus, -ī",
              "p": "Nōmen proprium",
              "c": "Ablātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "ab Ursō"
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
              "f": "Dāvō",
              "l": "Dāvō",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Dāvō"
            },
            {
              "f": "portātur",
              "l": "portāre",
              "p": "Verbum",
              "c": "Passīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Iūlius ab Ursō et Dāvō portātur",
              "punc": ","
            },
            {
              "f": "itaque",
              "l": "itaque",
              "p": "Coniūnctiō illātīva",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Ergō, ob eam rem"
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
              "f": "fessus",
              "l": "fessus, -a, -um",
              "p": "Nōmen adiectīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Labōre dēfessus, lassus"
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
              "f": "Fessī",
              "l": "fessus, -a, -um",
              "p": "Nōmen adiectīvum",
              "c": "Nōminātīvus",
              "n": "Plūrālis",
              "g": "Masculīnum",
              "d": "Servī fessī sunt"
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
              "f": "Syrus",
              "l": "Syrus",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Syrus"
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
              "f": "Lēander",
              "l": "Lēander, Lēandrī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Servus Iūliī",
              "punc": ","
            },
            {
              "f": "nam",
              "l": "nam",
              "p": "Coniūnctiō causālis",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Explicat causam (= etenim)"
            },
            {
              "f": "iī",
              "l": "is, ea, id",
              "p": "Prōnōmen dēmōnstrātīvum",
              "c": "Nōminātīvus",
              "n": "Plūrālis",
              "g": "Masculīnum",
              "d": "Plūrāle masculīnum (= eī): iī dormiunt"
            },
            {
              "f": "duōs",
              "l": "duōs",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "duōs"
            },
            {
              "f": "magnōs",
              "l": "magnōs",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "magnōs"
            },
            {
              "f": "saccōs",
              "l": "saccus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Accūsātīvus",
              "n": "Plūrālis",
              "g": "Masculīnum",
              "d": "duōs saccōs portant"
            },
            {
              "f": "umerīs",
              "l": "umerus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Ablātīvus",
              "n": "Plūrālis",
              "g": "Masculīnum",
              "d": "in umerīs / umerīs portant"
            },
            {
              "f": "portant",
              "l": "portāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Plūrālis",
              "g": "—",
              "d": "Servī quī lectīcam portant",
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
              "f": "vacuī",
              "l": "vacuī",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "vacuī"
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
              "f": "saccī",
              "l": "saccus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Genetīvus",
              "n": "Plūrālis / Sing.",
              "g": "Masculīnum",
              "d": "Saccī magnī sunt",
              "punc": "!"
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "portantur (pass. plūr.)",
          "tokens": [
            {
              "f": "Saccī",
              "l": "saccus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Genetīvus",
              "n": "Plūrālis / Sing.",
              "g": "Masculīnum",
              "d": "Saccī magnī sunt"
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
              "f": "ā",
              "l": "ab / ā",
              "p": "Praepositiō",
              "c": "cum Ablātīvō",
              "n": "—",
              "g": "—",
              "d": "Forma ante cōnsonantēs: ā vīllā / ā servō"
            },
            {
              "f": "Syrō",
              "l": "Syrō",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Syrō"
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
              "f": "Lēandrō",
              "l": "Lēander, Lēandrī",
              "p": "Nōmen proprium",
              "c": "Ablātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "ā Lēandrō"
            },
            {
              "f": "portantur",
              "l": "portāre",
              "p": "Verbum",
              "c": "Passīvus",
              "n": "Plūrālis",
              "g": "—",
              "d": "Saccī quī ā servīs portantur"
            },
            {
              "f": "magnī",
              "l": "magnī",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "magnī"
            },
            {
              "f": "sunt",
              "l": "esse",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Plūrālis",
              "g": "—",
              "d": "Persōna III plūr. praesentis",
              "punc": ","
            }
          ]
        },
        {
          "numerus": "LV",
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
              "f": "saccus",
              "l": "saccus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Pera magna fune clausa"
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
              "f": "Syrus",
              "l": "Syrus",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Syrus"
            },
            {
              "f": "portat",
              "l": "portāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Fert manibus vel umerīs: Saccus quem Syrus portat"
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
              "f": "tam",
              "l": "tam",
              "p": "Adverbium comparātīvum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Aequē: tam... quam..."
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
              "d": "Persōna III sing. praesentis"
            },
            {
              "f": "quam",
              "l": "quam",
              "p": "Adverbium comparātīvum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "tam longa quam..."
            },
            {
              "f": "saccus",
              "l": "saccus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Pera magna fune clausa"
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
              "f": "ā",
              "l": "ab / ā",
              "p": "Praepositiō",
              "c": "cum Ablātīvō",
              "n": "—",
              "g": "—",
              "d": "Forma ante cōnsonantēs: ā vīllā / ā servō"
            },
            {
              "f": "Lēandrō",
              "l": "Lēander, Lēandrī",
              "p": "Nōmen proprium",
              "c": "Ablātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "ā Lēandrō"
            },
            {
              "f": "portātur",
              "l": "portāre",
              "p": "Verbum",
              "c": "Passīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Iūlius ab Ursō et Dāvō portātur",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "",
          "tokens": [
            {
              "f": "Itaque",
              "l": "itaque",
              "p": "Coniūnctiō illātīva",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Ergō, ob eam rem"
            },
            {
              "f": "Syrus",
              "l": "Syrus",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Syrus"
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
              "f": "tam",
              "l": "tam",
              "p": "Adverbium comparātīvum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Aequē: tam... quam..."
            },
            {
              "f": "fessus",
              "l": "fessus, -a, -um",
              "p": "Nōmen adiectīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Labōre dēfessus, lassus"
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
              "f": "quam",
              "l": "quam",
              "p": "Adverbium comparātīvum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "tam longa quam..."
            },
            {
              "f": "Lēander",
              "l": "Lēander, Lēandrī",
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
          "marginalia": "equō vehitur",
          "tokens": [
            {
              "f": "Cornēlius",
              "l": "Cornēlius, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Vir Rōmānus, amīcus Iūliī"
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
              "f": "fessus",
              "l": "fessus, -a, -um",
              "p": "Nōmen adiectīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Labōre dēfessus, lassus",
              "punc": ","
            },
            {
              "f": "nam",
              "l": "nam",
              "p": "Coniūnctiō causālis",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Explicat causam (= etenim)"
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
              "f": "equō",
              "l": "equus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Ablātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "in equō / equō vehitur"
            },
            {
              "f": "vehitur",
              "l": "vehere",
              "p": "Verbum",
              "c": "Passīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Iūlius lectīcā vehitur; Cornēlius equō vehitur",
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
              "f": "lectīcā",
              "l": "lectīca, -ae",
              "p": "Nōmen substantīvum",
              "c": "Ablātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "in lectīcā / lectīcā vehitur"
            },
            {
              "f": "vehitur",
              "l": "vehere",
              "p": "Verbum",
              "c": "Passīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Iūlius lectīcā vehitur; Cornēlius equō vehitur",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "vehuntur",
          "tokens": [
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
              "f": "ambulant",
              "l": "ambulāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Plūrālis",
              "g": "—",
              "d": "Syrus et Lēander ambulant",
              "punc": "."
            },
            {
              "f": "Dominī",
              "l": "dominus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Genetīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Genetīvus: baculum dominī"
            },
            {
              "f": "vehuntur",
              "l": "vehere",
              "p": "Verbum",
              "c": "Passīvus",
              "n": "Plūrālis",
              "g": "—",
              "d": "Dominī vehuntur",
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
              "f": "ambulat",
              "l": "ambulāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Pedibus graditur; ↔ vehitur",
              "punc": ","
            },
            {
              "f": "nam",
              "l": "nam",
              "p": "Coniūnctiō causālis",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Explicat causam (= etenim)"
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
              "f": "equum",
              "l": "equus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "equum habet"
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
              "d": "Vir Rōmānus, pater familiae"
            },
            {
              "f": "prope",
              "l": "prope",
              "p": "Praepositiō",
              "c": "cum Accūsātīvō",
              "n": "—",
              "g": "—",
              "d": "Haud procul: prope Rōmam; ↔ procul ab"
            },
            {
              "f": "vīllam",
              "l": "vīlla, -ae",
              "p": "Nōmen substantīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "ad vīllam"
            },
            {
              "f": "suam",
              "l": "suam",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "suam"
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
              "f": "Mēdus",
              "l": "Mēdus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Servus Iūliī improbus qui pecūniam habet"
            },
            {
              "f": "autem",
              "l": "autem",
              "p": "Coniūnctiō adversātīva",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Sed, vērō (post prīmum verbum sententiae)",
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
              "f": "īrātum",
              "l": "īrātum",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "īrātum"
            },
            {
              "f": "timet",
              "l": "timēre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Metuit, formīdat: Mēdus dominum timet",
              "punc": ","
            },
            {
              "f": "procul",
              "l": "procul",
              "p": "Adverbium",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Longē: procul ab Rōmā; ↔ prope"
            },
            {
              "f": "ā",
              "l": "ab / ā",
              "p": "Praepositiō",
              "c": "cum Ablātīvō",
              "n": "—",
              "g": "—",
              "d": "Forma ante cōnsonantēs: ā vīllā / ā servō"
            },
            {
              "f": "vīllā",
              "l": "vīlla, -ae",
              "p": "Nōmen substantīvum",
              "c": "Ablātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "in vīllā / ab vīllā"
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
          "numerus": "",
          "marginalia": "timētur",
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
              "f": "ā",
              "l": "ab / ā",
              "p": "Praepositiō",
              "c": "cum Ablātīvō",
              "n": "—",
              "g": "—",
              "d": "Forma ante cōnsonantēs: ā vīllā / ā servō"
            },
            {
              "f": "servō",
              "l": "servō",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "servō"
            },
            {
              "f": "malō",
              "l": "malus, -a, -um",
              "p": "Nōmen adiectīvum",
              "c": "Ablātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "ā servō malō"
            },
            {
              "f": "timētur",
              "l": "timēre",
              "p": "Verbum",
              "c": "Passīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Dominus ā servō malō timētur",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "videntur",
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
              "f": "prope",
              "l": "prope",
              "p": "Praepositiō",
              "c": "cum Accūsātīvō",
              "n": "—",
              "g": "—",
              "d": "Haud procul: prope Rōmam; ↔ procul ab"
            },
            {
              "f": "Rōmam",
              "l": "Rōmam",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Rōmam"
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
              "f": "iam",
              "l": "iam",
              "p": "Adverbium",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Hoc ipsō tempore, nōndum -> iam"
            },
            {
              "f": "mūrī",
              "l": "mūrus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Genetīvus",
              "n": "Plūrālis / Sing.",
              "g": "Masculīnum",
              "d": "Circum oppida mūrī sunt"
            },
            {
              "f": "Rōmānī",
              "l": "Rōmānī",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Rōmānī"
            },
            {
              "f": "ab",
              "l": "ab / ā",
              "p": "Praepositiō",
              "c": "cum Ablātīvō",
              "n": "—",
              "g": "—",
              "d": "Mōtus ā locō vel agentis: ab oppidō / ā Lydiā"
            },
            {
              "f": "eō",
              "l": "is, ea, id",
              "p": "Prōnōmen dēmōnstrātīvum",
              "c": "Ablātīvus",
              "n": "Singulāris",
              "g": "Masculīnum / Neut.",
              "d": "in eō est / cum eō / ab eō"
            },
            {
              "f": "videntur",
              "l": "vidēre",
              "p": "Verbum",
              "c": "Passīvus",
              "n": "Plūrālis",
              "g": "—",
              "d": "Passīvum plūrāle: Mūrī ab eō videntur"
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
              "f": "porta",
              "l": "porta, -ae",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Ablātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Magnum ōstium in mūrō urbis"
            },
            {
              "f": "Capēna",
              "l": "Capēnus, -a, -um",
              "p": "Nōmen adiectīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "porta Capēna",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "per portam intrat",
          "tokens": [
            {
              "f": "Is",
              "l": "is, ea, id",
              "p": "Prōnōmen dēmōnstrātīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Subiectum masculīnum: is habet",
              "lead": "("
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
              "f": "viā",
              "l": "via, -ae",
              "p": "Nōmen substantīvum",
              "c": "Ablātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "in viā / viā Latīnā"
            },
            {
              "f": "Latīnā",
              "l": "Latīnā",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Latīnā"
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
              "f": "per",
              "l": "per",
              "p": "Praepositiō",
              "c": "cum Accūsātīvō",
              "n": "—",
              "g": "—",
              "d": "Trans, ab ūnā parte ad alteram: per portam"
            },
            {
              "f": "portam",
              "l": "porta, -ae",
              "p": "Nōmen substantīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "per portam Capēnam"
            },
            {
              "f": "Capēnam",
              "l": "Capēnus, -a, -um",
              "p": "Nōmen adiectīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "per portam Capēnam"
            },
            {
              "f": "Rōmam",
              "l": "Rōmam",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Rōmam"
            },
            {
              "f": "intrat",
              "l": "intrāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Ingreditur per ōstium: Mēdus Rōmam intrat",
              "punc": ".)"
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "amīca eius",
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
              "f": "Rōmam",
              "l": "Rōmam",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Rōmam"
            },
            {
              "f": "it",
              "l": "īre",
              "p": "Verbum irregulāre",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Graditur, vadit: Iūlius ad vīllam it"
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
              "f": "Rōmam",
              "l": "Rōmam",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Rōmam"
            },
            {
              "f": "it",
              "l": "īre",
              "p": "Verbum irregulāre",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Graditur, vadit: Iūlius ad vīllam it",
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
              "f": "Lydia",
              "l": "Lydia, -ae",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Fēmina Rōmae habitāns, amīca Mēdī"
            },
            {
              "f": "Rōmae",
              "l": "Rōmae",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Rōmae"
            },
            {
              "f": "habitat",
              "l": "habitāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Vīvit in locō: Iūlius in vīllā habitat",
              "punc": ","
            },
            {
              "f": "nam",
              "l": "nam",
              "p": "Coniūnctiō causālis",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Explicat causam (= etenim)"
            },
            {
              "f": "Lydia",
              "l": "Lydia, -ae",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Fēmina Rōmae habitāns, amīca Mēdī"
            },
            {
              "f": "amīca",
              "l": "amīca, -ae",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Ablātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Fēmina cāra: Lydia est amīca Mēdī"
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
              "d": "Persōna III sing. praesentis",
              "punc": ":"
            }
          ]
        },
        {
          "numerus": "LXV",
          "marginalia": "amātur",
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
              "f": "Lydiam",
              "l": "Lydia, -ae",
              "p": "Nōmen proprium",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Lydiam amat"
            },
            {
              "f": "amat",
              "l": "amāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Amōre dīligit: Iūlius Aemiliam amat"
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
              "f": "ab",
              "l": "ab / ā",
              "p": "Praepositiō",
              "c": "cum Ablātīvō",
              "n": "—",
              "g": "—",
              "d": "Mōtus ā locō vel agentis: ab oppidō / ā Lydiā"
            },
            {
              "f": "eā",
              "l": "is, ea, id",
              "p": "Prōnōmen dēmōnstrātīvum",
              "c": "Ablātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "cum eā / ab eā"
            },
            {
              "f": "amātur",
              "l": "amāre",
              "p": "Verbum",
              "c": "Passīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Forma passīva: Mēdus ab eā amātur",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "vocātur",
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
              "f": "Rōmam",
              "l": "Rōmam",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Rōmam"
            },
            {
              "f": "vocātur",
              "l": "vocāre",
              "p": "Verbum",
              "c": "Passīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Passīvum: Mēdus Rōmam vocātur"
            },
            {
              "f": "ab",
              "l": "ab / ā",
              "p": "Praepositiō",
              "c": "cum Ablātīvō",
              "n": "—",
              "g": "—",
              "d": "Mōtus ā locō vel agentis: ab oppidō / ā Lydiā"
            },
            {
              "f": "amīcā",
              "l": "amīca, -ae",
              "p": "Nōmen substantīvum",
              "c": "Ablātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "ab amīcā suā"
            },
            {
              "f": "suā",
              "l": "suā",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "suā",
              "punc": ","
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
              "f": "fēmina",
              "l": "fēmina, -ae",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Mulier adulta"
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
              "f": "pulchra",
              "l": "pulcher, pulchra, pulchrum",
              "p": "Nōmen adiectīvum",
              "c": "Nōminātīvus / Ablātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Fēmina pulchra"
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
              "f": "proba",
              "l": "probus, -a, -um",
              "p": "Nōmen adiectīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Fēminīnum: puella proba",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "cantat",
          "tokens": [
            {
              "f": "Itaque",
              "l": "itaque",
              "p": "Coniūnctiō illātīva",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Ergō, ob eam rem"
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
              "f": "fessus",
              "l": "fessus, -a, -um",
              "p": "Nōmen adiectīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Labōre dēfessus, lassus"
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
              "f": "et",
              "l": "et",
              "p": "Coniūnctiō",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Coniunctio copulātīva"
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
              "f": "cantat",
              "l": "cantāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Vōce sonōs musicōs ēdit (-at)",
              "punc": ":"
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
              "lead": "\""
            },
            {
              "f": "via",
              "l": "via, -ae",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Ablātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Iter stratum inter oppida"
            },
            {
              "f": "longa",
              "l": "longus, -a, -um",
              "p": "Nōmen adiectīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "via longa"
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
              "f": "Rōmam",
              "l": "Rōmam",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Rōmam",
              "punc": ","
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
              "f": "amīca",
              "l": "amīca, -ae",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Ablātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Fēmina cāra: Lydia est amīca Mēdī"
            },
            {
              "f": "habitat",
              "l": "habitāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Vīvit in locō: Iūlius in vīllā habitat"
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
              "f": "pulchra",
              "l": "pulcher, pulchra, pulchrum",
              "p": "Nōmen adiectīvum",
              "c": "Nōminātīvus / Ablātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Fēmina pulchra",
              "punc": ".\""
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "audītur",
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
              "f": "id",
              "l": "is, ea, id",
              "p": "Prōnōmen dēmōnstrātīvum",
              "c": "Nōminātīvus / Acc.",
              "n": "Singulāris",
              "g": "Neutrum",
              "d": "Neutrum: id"
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
              "f": "Mēdus",
              "l": "Mēdus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Servus Iūliī improbus qui pecūniam habet"
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
              "f": "ā",
              "l": "ab / ā",
              "p": "Praepositiō",
              "c": "cum Ablātīvō",
              "n": "—",
              "g": "—",
              "d": "Forma ante cōnsonantēs: ā vīllā / ā servō"
            },
            {
              "f": "Lydiā",
              "l": "Lydia, -ae",
              "p": "Nōmen proprium",
              "c": "Ablātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "ā Lydiā"
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
              "f": "audītur",
              "l": "audīre",
              "p": "Verbum",
              "c": "Passīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Passīvum: Id ā Lydiā nōn audītur",
              "punc": "!"
            }
          ]
        }
      ]
    },
    {
      "titulusSectio": "LĒCTIŌ TERTIA: RŌMAE APVD LYDIAM",
      "versus": [
        {
          "numerus": "LXX",
          "marginalia": "salūtātur",
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
              "f": "Iūlius",
              "l": "Iūlius, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Vir Rōmānus, pater familiae"
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
              "f": "vīllā",
              "l": "vīlla, -ae",
              "p": "Nōmen substantīvum",
              "c": "Ablātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "in vīllā / ab vīllā"
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
              "f": "ab",
              "l": "ab / ā",
              "p": "Praepositiō",
              "c": "cum Ablātīvō",
              "n": "—",
              "g": "—",
              "d": "Mōtus ā locō vel agentis: ab oppidō / ā Lydiā"
            },
            {
              "f": "Aemiliā",
              "l": "Aemiliā",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Aemiliā"
            },
            {
              "f": "līberīsque",
              "l": "līberī, -ōrum + -que",
              "p": "Nōmen + Coniūnctiō",
              "c": "Ablātīvus",
              "n": "Plūrālis",
              "g": "Masculīnum",
              "d": "= et līberīs"
            },
            {
              "f": "laetīs",
              "l": "laetīs",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "laetīs"
            },
            {
              "f": "salūtātur",
              "l": "salūtāre",
              "p": "Verbum",
              "c": "Passīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Iūlius ab Aemiliā salūtātur",
              "punc": "."
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
              "d": "Vir Rōmānus, amīcus Iūliī"
            },
            {
              "f": "Tusculī",
              "l": "Tusculī",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Tusculī"
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
              "f": "Mēdus",
              "l": "Mēdus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Servus Iūliī improbus qui pecūniam habet"
            },
            {
              "f": "autem",
              "l": "autem",
              "p": "Coniūnctiō adversātīva",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Sed, vērō (post prīmum verbum sententiae)"
            },
            {
              "f": "Rōmae",
              "l": "Rōmae",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Rōmae"
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
              "f": "ante",
              "l": "ante",
              "p": "Praepositiō",
              "c": "cum Accūsātīvō",
              "n": "—",
              "g": "—",
              "d": "In parte anteriōre: ante Iūlium; ↔ post"
            },
            {
              "f": "ōstium",
              "l": "ōstium, -ī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Acc.",
              "n": "Singulāris",
              "g": "Neutrum",
              "d": "Iānua, introitus domūs"
            },
            {
              "f": "Lydiae",
              "l": "Lydia, -ae",
              "p": "Nōmen proprium",
              "c": "Genetīvus / Datīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "ōstium Lydiae",
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
              "f": "ōstium",
              "l": "ōstium, -ī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Acc.",
              "n": "Singulāris",
              "g": "Neutrum",
              "d": "Iānua, introitus domūs"
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
          "marginalia": "Intrā! (imp.)",
          "tokens": [
            {
              "f": "Lydia",
              "l": "Lydia, -ae",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Fēmina Rōmae habitāns, amīca Mēdī"
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
              "f": "Intrā",
              "l": "intrāre",
              "p": "Verbum",
              "c": "Imperātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Imperātīvus: 'Intrā!'",
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
              "f": "Mēdus",
              "l": "Mēdus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Servus Iūliī improbus qui pecūniam habet"
            },
            {
              "f": "per",
              "l": "per",
              "p": "Praepositiō",
              "c": "cum Accūsātīvō",
              "n": "—",
              "g": "—",
              "d": "Trans, ab ūnā parte ad alteram: per portam"
            },
            {
              "f": "ōstium",
              "l": "ōstium, -ī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Acc.",
              "n": "Singulāris",
              "g": "Neutrum",
              "d": "Iānua, introitus domūs"
            },
            {
              "f": "intrat",
              "l": "intrāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Ingreditur per ōstium: Mēdus Rōmam intrat"
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
              "f": "amīcam",
              "l": "amīca, -ae",
              "p": "Nōmen substantīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "apud amīcam suam"
            },
            {
              "f": "suam",
              "l": "suam",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "suam"
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
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "",
          "tokens": [
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
              "f": "mea",
              "l": "meus, -a, -um",
              "p": "Prōnōmen possessīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "pecūnia mea"
            },
            {
              "f": "Lydia",
              "l": "Lydia, -ae",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Fēmina Rōmae habitāns, amīca Mēdī",
              "punc": "!"
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
              "f": "amīcus",
              "l": "amīcus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Homo cārus, socius; ↔ inimīcus"
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
              "f": "quī",
              "l": "quī, quae, quod",
              "p": "Prōnōmen relātīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris / Plūr.",
              "g": "Masculīnum",
              "d": "Puer quī cantat / rīdet"
            },
            {
              "f": "sōlus",
              "l": "sōlus, -a, -um",
              "p": "Nōmen adiectīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Sine aliīs: Iūlius nōn sōlus est"
            },
            {
              "f": "Rōmam",
              "l": "Rōmam",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Rōmam"
            },
            {
              "f": "ad",
              "l": "ad",
              "p": "Praepositiō",
              "c": "cum Accūsātīvō",
              "n": "—",
              "g": "—",
              "d": "Mōtus ad locum: ad vīllam / ad oppidum"
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
          "numerus": "LXXV",
          "marginalia": "dēlectātur",
          "tokens": [
            {
              "f": "Lydia",
              "l": "Lydia, -ae",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Fēmina Rōmae habitāns, amīca Mēdī"
            },
            {
              "f": "verbīs",
              "l": "verbum, -ī",
              "p": "Nōmen substantīvum",
              "c": "Ablātīvus",
              "n": "Plūrālis",
              "g": "Neutrum",
              "d": "verbīs Mēdī dēlectātur"
            },
            {
              "f": "Mēdī",
              "l": "Mēdus, -ī",
              "p": "Nōmen proprium",
              "c": "Genetīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Genetīvus: sacculus Mēdī"
            },
            {
              "f": "dēlectātur",
              "l": "dēlectāre",
              "p": "Verbum",
              "c": "Passīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Passīvum: Lydia verbīs Mēdī dēlectātur"
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
              "f": "amīce",
              "l": "amīcus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Vocātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Vocātīvus: 'Ō amīce, salvē!'",
              "punc": ","
            },
            {
              "f": "salvē",
              "l": "salvēre",
              "p": "Verbum / Interiectiō",
              "c": "Imperātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Salūtātiō Rōmāna: 'Salvē, domine!'",
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
              "f": "dominus",
              "l": "dominus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Qui servōs et familiam possidet"
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
              "f": "Iūlius",
              "l": "Iūlius, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Vir Rōmānus, pater familiae",
              "lead": "\""
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
              "f": "vīllā",
              "l": "vīlla, -ae",
              "p": "Nōmen substantīvum",
              "c": "Ablātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "in vīllā / ab vīllā"
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
              "f": "apud",
              "l": "apud",
              "p": "Praepositiō",
              "c": "cum Accūsātīvō",
              "n": "—",
              "g": "—",
              "d": "Prope, ad latus, in domō alicuius: apud Lydiam"
            },
            {
              "f": "servōs",
              "l": "servus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Accūsātīvus",
              "n": "Plūrālis",
              "g": "Masculīnum",
              "d": "multōs servōs habet"
            },
            {
              "f": "suōs",
              "l": "suōs",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "suōs"
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
              "f": "neque",
              "l": "neque",
              "p": "Coniūnctiō",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "= et nōn"
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
              "f": "iam",
              "l": "iam",
              "p": "Adverbium",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Hoc ipsō tempore, nōndum -> iam"
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
              "f": "dominus",
              "l": "dominus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Qui servōs et familiam possidet"
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
          "marginalia": "audiuntur",
          "tokens": [
            {
              "f": "Verba",
              "l": "verbum, -ī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Acc.",
              "n": "Plūrālis",
              "g": "Neutrum",
              "d": "Verba Aemiliae"
            },
            {
              "f": "Mēdī",
              "l": "Mēdus, -ī",
              "p": "Nōmen proprium",
              "c": "Genetīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Genetīvus: sacculus Mēdī"
            },
            {
              "f": "ā",
              "l": "ab / ā",
              "p": "Praepositiō",
              "c": "cum Ablātīvō",
              "n": "—",
              "g": "—",
              "d": "Forma ante cōnsonantēs: ā vīllā / ā servō"
            },
            {
              "f": "Lydiā",
              "l": "Lydia, -ae",
              "p": "Nōmen proprium",
              "c": "Ablātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "ā Lydiā"
            },
            {
              "f": "laetā",
              "l": "laetā",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "laetā"
            },
            {
              "f": "audiuntur",
              "l": "audīre",
              "p": "Verbum",
              "c": "Passīvus",
              "n": "Plūrālis",
              "g": "—",
              "d": "Passīvum plūrāle: Verba audiuntur",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "praepositiōnēs cum acc.",
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
              "f": "ad",
              "l": "ad",
              "p": "Praepositiō",
              "c": "cum Accūsātīvō",
              "n": "—",
              "g": "—",
              "d": "Mōtus ad locum: ad vīllam / ad oppidum"
            },
            {
              "f": "vīllam",
              "l": "vīlla, -ae",
              "p": "Nōmen substantīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "ad vīllam"
            },
            {
              "f": "it",
              "l": "īre",
              "p": "Verbum irregulāre",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Graditur, vadit: Iūlius ad vīllam it",
              "punc": ";"
            },
            {
              "f": "ad",
              "l": "ad",
              "p": "Praepositiō",
              "c": "cum Accūsātīvō",
              "n": "—",
              "g": "—",
              "d": "Mōtus ad locum: ad vīllam / ad oppidum"
            },
            {
              "f": "oppidum",
              "l": "oppidum",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "oppidum",
              "punc": ";"
            },
            {
              "f": "ad",
              "l": "ad",
              "p": "Praepositiō",
              "c": "cum Accūsātīvō",
              "n": "—",
              "g": "—",
              "d": "Mōtus ad locum: ad vīllam / ad oppidum"
            },
            {
              "f": "ancillās",
              "l": "ancilla, -ae",
              "p": "Nōmen substantīvum",
              "c": "Accūsātīvus",
              "n": "Plūrālis",
              "g": "Fēminīnum",
              "d": "multās ancillās",
              "punc": "."
            },
            {
              "f": "Ursus",
              "l": "Ursus, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Servus Iūliī quī lectīcam portat"
            },
            {
              "f": "ante",
              "l": "ante",
              "p": "Praepositiō",
              "c": "cum Accūsātīvō",
              "n": "—",
              "g": "—",
              "d": "In parte anteriōre: ante Iūlium; ↔ post"
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
              "f": "ante",
              "l": "ante",
              "p": "Praepositiō",
              "c": "cum Accūsātīvō",
              "n": "—",
              "g": "—",
              "d": "In parte anteriōre: ante Iūlium; ↔ post"
            },
            {
              "f": "eum",
              "l": "is, ea, id",
              "p": "Prōnōmen dēmōnstrātīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Accūsātīvus: Iūlius eum audit",
              "punc": ";"
            },
            {
              "f": "ante",
              "l": "ante",
              "p": "Praepositiō",
              "c": "cum Accūsātīvō",
              "n": "—",
              "g": "—",
              "d": "In parte anteriōre: ante Iūlium; ↔ post"
            },
            {
              "f": "vīllam",
              "l": "vīlla, -ae",
              "p": "Nōmen substantīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "ad vīllam",
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
              "f": "post",
              "l": "post",
              "p": "Praepositiō",
              "c": "cum Accūsātīvō",
              "n": "—",
              "g": "—",
              "d": "A tergō: post lectīcam; ↔ ante"
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
              "f": "post",
              "l": "post",
              "p": "Praepositiō",
              "c": "cum Accūsātīvō",
              "n": "—",
              "g": "—",
              "d": "A tergō: post lectīcam; ↔ ante"
            },
            {
              "f": "eum",
              "l": "is, ea, id",
              "p": "Prōnōmen dēmōnstrātīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Accūsātīvus: Iūlius eum audit",
              "punc": ";"
            },
            {
              "f": "post",
              "l": "post",
              "p": "Praepositiō",
              "c": "cum Accūsātīvō",
              "n": "—",
              "g": "—",
              "d": "A tergō: post lectīcam; ↔ ante"
            },
            {
              "f": "vīllam",
              "l": "vīlla, -ae",
              "p": "Nōmen substantīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "ad vīllam",
              "punc": "."
            },
            {
              "f": "Via",
              "l": "via, -ae",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Ablātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Iter stratum inter oppida"
            },
            {
              "f": "inter",
              "l": "inter",
              "p": "Praepositiō",
              "c": "cum Accūsātīvō",
              "n": "—",
              "g": "—",
              "d": "In mediō duōrum: inter Rōmam et Brundisium"
            },
            {
              "f": "Rōmam",
              "l": "Rōmam",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Rōmam"
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
              "f": "Capuam",
              "l": "Capua, -ae",
              "p": "Nōmen proprium",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "inter Rōmam et Capuam",
              "punc": ";"
            },
            {
              "f": "inter",
              "l": "inter",
              "p": "Praepositiō",
              "c": "cum Accūsātīvō",
              "n": "—",
              "g": "—",
              "d": "In mediō duōrum: inter Rōmam et Brundisium"
            },
            {
              "f": "servōs",
              "l": "servus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Accūsātīvus",
              "n": "Plūrālis",
              "g": "Masculīnum",
              "d": "multōs servōs habet",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "LXXX",
          "marginalia": "",
          "tokens": [
            {
              "f": "Ōstia",
              "l": "Ōstia, -ae",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Portus Rōmae ad ōstium Tiberis"
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
              "f": "prope",
              "l": "prope",
              "p": "Praepositiō",
              "c": "cum Accūsātīvō",
              "n": "—",
              "g": "—",
              "d": "Haud procul: prope Rōmam; ↔ procul ab"
            },
            {
              "f": "Rōmam",
              "l": "Rōmam",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Rōmam",
              "punc": ";"
            },
            {
              "f": "prope",
              "l": "prope",
              "p": "Praepositiō",
              "c": "cum Accūsātīvō",
              "n": "—",
              "g": "—",
              "d": "Haud procul: prope Rōmam; ↔ procul ab"
            },
            {
              "f": "vīllam",
              "l": "vīlla, -ae",
              "p": "Nōmen substantīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "ad vīllam",
              "punc": ";"
            },
            {
              "f": "prope",
              "l": "prope",
              "p": "Praepositiō",
              "c": "cum Accūsātīvō",
              "n": "—",
              "g": "—",
              "d": "Haud procul: prope Rōmam; ↔ procul ab"
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
            },
            {
              "f": "Circum",
              "l": "circum",
              "p": "Praepositiō",
              "c": "cum Accūsātīvō",
              "n": "—",
              "g": "—",
              "d": "In circuitū: circum oppidum mūrus est"
            },
            {
              "f": "oppidum",
              "l": "oppidum",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "oppidum"
            },
            {
              "f": "mūrus",
              "l": "mūrus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Vallum lapideum circum oppidum"
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
              "f": "circum",
              "l": "circum",
              "p": "Praepositiō",
              "c": "cum Accūsātīvō",
              "n": "—",
              "g": "—",
              "d": "In circuitū: circum oppidum mūrus est"
            },
            {
              "f": "mēnsam",
              "l": "mēnsam",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "mēnsam",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "apud / per",
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
              "f": "est",
              "l": "esse",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Persōna III sing. praesentis"
            },
            {
              "f": "apud",
              "l": "apud",
              "p": "Praepositiō",
              "c": "cum Accūsātīvō",
              "n": "—",
              "g": "—",
              "d": "Prope, ad latus, in domō alicuius: apud Lydiam"
            },
            {
              "f": "amīcam",
              "l": "amīca, -ae",
              "p": "Nōmen substantīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "apud amīcam suam"
            },
            {
              "f": "suam",
              "l": "suam",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "suam",
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
              "f": "apud",
              "l": "apud",
              "p": "Praepositiō",
              "c": "cum Accūsātīvō",
              "n": "—",
              "g": "—",
              "d": "Prope, ad latus, in domō alicuius: apud Lydiam"
            },
            {
              "f": "dominum",
              "l": "dominus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Accūsātīvus: salūtā dominum",
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
              "f": "per",
              "l": "per",
              "p": "Praepositiō",
              "c": "cum Accūsātīvō",
              "n": "—",
              "g": "—",
              "d": "Trans, ab ūnā parte ad alteram: per portam"
            },
            {
              "f": "portam",
              "l": "porta, -ae",
              "p": "Nōmen substantīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "per portam Capēnam"
            },
            {
              "f": "Capēnam",
              "l": "Capēnus, -a, -um",
              "p": "Nōmen adiectīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "per portam Capēnam"
            },
            {
              "f": "Rōmam",
              "l": "Rōmam",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Rōmam"
            },
            {
              "f": "intrat",
              "l": "intrāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Ingreditur per ōstium: Mēdus Rōmam intrat",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "",
          "tokens": [
            {
              "f": "Praepositiōnēs",
              "l": "Praepositiōnēs",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Praepositiōnēs"
            },
            {
              "f": "cum",
              "l": "cum",
              "p": "Praepositiō",
              "c": "cum Ablātīvō",
              "n": "—",
              "g": "—",
              "d": "Ūnā cum: cum familiā / cum līberīs; ↔ sine"
            },
            {
              "f": "accūsātīvō",
              "l": "accūsātīvō",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "accūsātīvō",
              "punc": ":"
            },
            {
              "f": "ad",
              "l": "ad",
              "p": "Praepositiō",
              "c": "cum Accūsātīvō",
              "n": "—",
              "g": "—",
              "d": "Mōtus ad locum: ad vīllam / ad oppidum",
              "punc": ","
            },
            {
              "f": "ante",
              "l": "ante",
              "p": "Praepositiō",
              "c": "cum Accūsātīvō",
              "n": "—",
              "g": "—",
              "d": "In parte anteriōre: ante Iūlium; ↔ post",
              "punc": ","
            },
            {
              "f": "post",
              "l": "post",
              "p": "Praepositiō",
              "c": "cum Accūsātīvō",
              "n": "—",
              "g": "—",
              "d": "A tergō: post lectīcam; ↔ ante",
              "punc": ","
            },
            {
              "f": "inter",
              "l": "inter",
              "p": "Praepositiō",
              "c": "cum Accūsātīvō",
              "n": "—",
              "g": "—",
              "d": "In mediō duōrum: inter Rōmam et Brundisium",
              "punc": ","
            },
            {
              "f": "prope",
              "l": "prope",
              "p": "Praepositiō",
              "c": "cum Accūsātīvō",
              "n": "—",
              "g": "—",
              "d": "Haud procul: prope Rōmam; ↔ procul ab",
              "punc": ","
            },
            {
              "f": "circum",
              "l": "circum",
              "p": "Praepositiō",
              "c": "cum Accūsātīvō",
              "n": "—",
              "g": "—",
              "d": "In circuitū: circum oppidum mūrus est",
              "punc": ","
            },
            {
              "f": "apud",
              "l": "apud",
              "p": "Praepositiō",
              "c": "cum Accūsātīvō",
              "n": "—",
              "g": "—",
              "d": "Prope, ad latus, in domō alicuius: apud Lydiam",
              "punc": ","
            },
            {
              "f": "per",
              "l": "per",
              "p": "Praepositiō",
              "c": "cum Accūsātīvō",
              "n": "—",
              "g": "—",
              "d": "Trans, ab ūnā parte ad alteram: per portam",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "praepositiōnēs cum abl.",
          "tokens": [
            {
              "f": "Praepositiōnēs",
              "l": "Praepositiōnēs",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Praepositiōnēs"
            },
            {
              "f": "cum",
              "l": "cum",
              "p": "Praepositiō",
              "c": "cum Ablātīvō",
              "n": "—",
              "g": "—",
              "d": "Ūnā cum: cum familiā / cum līberīs; ↔ sine"
            },
            {
              "f": "ablātīvō",
              "l": "ablātīvō",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "ablātīvō",
              "punc": ":"
            },
            {
              "f": "ab",
              "l": "ab / ā",
              "p": "Praepositiō",
              "c": "cum Ablātīvō",
              "n": "—",
              "g": "—",
              "d": "Mōtus ā locō vel agentis: ab oppidō / ā Lydiā"
            },
            {
              "f": "/",
              "l": "/",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "/"
            },
            {
              "f": "ā",
              "l": "ab / ā",
              "p": "Praepositiō",
              "c": "cum Ablātīvō",
              "n": "—",
              "g": "—",
              "d": "Forma ante cōnsonantēs: ā vīllā / ā servō",
              "punc": ","
            },
            {
              "f": "cum",
              "l": "cum",
              "p": "Praepositiō",
              "c": "cum Ablātīvō",
              "n": "—",
              "g": "—",
              "d": "Ūnā cum: cum familiā / cum līberīs; ↔ sine",
              "punc": ","
            },
            {
              "f": "ex",
              "l": "ex / ē",
              "p": "Praepositiō",
              "c": "cum Ablātīvō",
              "n": "—",
              "g": "—",
              "d": "Ē mediō locō: ex hortō / ex ātriō",
              "punc": ","
            },
            {
              "f": "in",
              "l": "in",
              "p": "Praepositiō",
              "c": "cum Ablātīvō",
              "n": "—",
              "g": "—",
              "d": "Indicat locum ubi aliquid inest",
              "punc": ","
            },
            {
              "f": "sine",
              "l": "sine",
              "p": "Praepositiō",
              "c": "cum Ablātīvō",
              "n": "—",
              "g": "—",
              "d": "↔ cum; absque: sine virō / sine rosīs",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "locātīvus",
          "tokens": [
            {
              "f": "Quō",
              "l": "quō",
              "p": "Adverbium interrogātīvum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Ad quem locum? Quō it?"
            },
            {
              "f": "it",
              "l": "īre",
              "p": "Verbum irregulāre",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Graditur, vadit: Iūlius ad vīllam it"
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
              "f": "Rōmam",
              "l": "Rōmam",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Rōmam"
            },
            {
              "f": "it",
              "l": "īre",
              "p": "Verbum irregulāre",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Graditur, vadit: Iūlius ad vīllam it",
              "punc": "."
            },
            {
              "f": "Quō",
              "l": "quō",
              "p": "Adverbium interrogātīvum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Ad quem locum? Quō it?"
            },
            {
              "f": "it",
              "l": "īre",
              "p": "Verbum irregulāre",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Graditur, vadit: Iūlius ad vīllam it"
            },
            {
              "f": "Cornēlius",
              "l": "Cornēlius, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Vir Rōmānus, amīcus Iūliī",
              "punc": "?"
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
              "f": "Tusculum",
              "l": "Tusculum",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Tusculum"
            },
            {
              "f": "it",
              "l": "īre",
              "p": "Verbum irregulāre",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Graditur, vadit: Iūlius ad vīllam it",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "LXXXV",
          "marginalia": "",
          "tokens": [
            {
              "f": "Unde",
              "l": "unde",
              "p": "Adverbium interrogātīvum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "A quō locō? Unde venit?"
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
              "f": "Cornēlius",
              "l": "Cornēlius, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Vir Rōmānus, amīcus Iūliī",
              "punc": "?"
            },
            {
              "f": "Cornēlius",
              "l": "Cornēlius, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Vir Rōmānus, amīcus Iūliī"
            },
            {
              "f": "Rōmā",
              "l": "Rōmā",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Rōmā"
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
              "f": "Unde",
              "l": "unde",
              "p": "Adverbium interrogātīvum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "A quō locō? Unde venit?"
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
              "punc": "?"
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
              "f": "Tusculō",
              "l": "Tusculō",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Tusculō"
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
              "f": "Ubi",
              "l": "ubi",
              "p": "Adverbium interrogātīvum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Quaerit locum"
            },
            {
              "f": "habitat",
              "l": "habitāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Vīvit in locō: Iūlius in vīllā habitat"
            },
            {
              "f": "Lydia",
              "l": "Lydia, -ae",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Fēmina Rōmae habitāns, amīca Mēdī",
              "punc": "?"
            },
            {
              "f": "Lydia",
              "l": "Lydia, -ae",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "Fēmina Rōmae habitāns, amīca Mēdī"
            },
            {
              "f": "Rōmae",
              "l": "Rōmae",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Rōmae"
            },
            {
              "f": "habitat",
              "l": "habitāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Vīvit in locō: Iūlius in vīllā habitat",
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
              "f": "habitat",
              "l": "habitāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Vīvit in locō: Iūlius in vīllā habitat"
            },
            {
              "f": "Cornēlius",
              "l": "Cornēlius, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Vir Rōmānus, amīcus Iūliī",
              "punc": "?"
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
              "f": "Tusculī",
              "l": "Tusculī",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Tusculī"
            },
            {
              "f": "habitat",
              "l": "habitāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Vīvit in locō: Iūlius in vīllā habitat",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "",
          "tokens": [
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
              "f": "Rōmam",
              "l": "Rōmam",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Rōmam",
              "punc": ","
            },
            {
              "f": "Tusculum",
              "l": "Tusculum",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Tusculum",
              "punc": ","
            },
            {
              "f": "Capuam",
              "l": "Capua, -ae",
              "p": "Nōmen proprium",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "inter Rōmam et Capuam"
            },
            {
              "f": "=",
              "l": "=",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "="
            },
            {
              "f": "ad",
              "l": "ad",
              "p": "Praepositiō",
              "c": "cum Accūsātīvō",
              "n": "—",
              "g": "—",
              "d": "Mōtus ad locum: ad vīllam / ad oppidum"
            },
            {
              "f": "oppidum",
              "l": "oppidum",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "oppidum",
              "punc": "."
            },
            {
              "f": "Ablātīvus",
              "l": "Ablātīvus",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Ablātīvus",
              "punc": ":"
            },
            {
              "f": "Rōmā",
              "l": "Rōmā",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Rōmā",
              "punc": ","
            },
            {
              "f": "Tusculō",
              "l": "Tusculō",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Tusculō"
            },
            {
              "f": "=",
              "l": "=",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "="
            },
            {
              "f": "ab",
              "l": "ab / ā",
              "p": "Praepositiō",
              "c": "cum Ablātīvō",
              "n": "—",
              "g": "—",
              "d": "Mōtus ā locō vel agentis: ab oppidō / ā Lydiā"
            },
            {
              "f": "oppidō",
              "l": "oppidō",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "oppidō",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "",
          "tokens": [
            {
              "f": "Locātīvus",
              "l": "Locātīvus",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Locātīvus",
              "punc": ":"
            },
            {
              "f": "Rōmae",
              "l": "Rōmae",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Rōmae",
              "punc": ","
            },
            {
              "f": "Tusculī",
              "l": "Tusculī",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Tusculī",
              "punc": ","
            },
            {
              "f": "Brundisiī",
              "l": "Brundisiī",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Brundisiī"
            },
            {
              "f": "=",
              "l": "=",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "="
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
              "f": "oppidō",
              "l": "oppidō",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "oppidō",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "āctīvum ↔ passīvum",
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
              "f": "saccum",
              "l": "saccus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Accūsātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "saccum portat"
            },
            {
              "f": "portat",
              "l": "portāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Fert manibus vel umerīs: Saccus quem Syrus portat"
            },
            {
              "f": "=",
              "l": "=",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "="
            },
            {
              "f": "Saccus",
              "l": "saccus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Pera magna fune clausa"
            },
            {
              "f": "portātur",
              "l": "portāre",
              "p": "Verbum",
              "c": "Passīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Iūlius ab Ursō et Dāvō portātur"
            },
            {
              "f": "ā",
              "l": "ab / ā",
              "p": "Praepositiō",
              "c": "cum Ablātīvō",
              "n": "—",
              "g": "—",
              "d": "Forma ante cōnsonantēs: ā vīllā / ā servō"
            },
            {
              "f": "servō",
              "l": "servō",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "servō",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "XC",
          "marginalia": "",
          "tokens": [
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
              "f": "saccōs",
              "l": "saccus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Accūsātīvus",
              "n": "Plūrālis",
              "g": "Masculīnum",
              "d": "duōs saccōs portant"
            },
            {
              "f": "portant",
              "l": "portāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Plūrālis",
              "g": "—",
              "d": "Servī quī lectīcam portant"
            },
            {
              "f": "=",
              "l": "=",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "="
            },
            {
              "f": "Saccī",
              "l": "saccus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Genetīvus",
              "n": "Plūrālis / Sing.",
              "g": "Masculīnum",
              "d": "Saccī magnī sunt"
            },
            {
              "f": "portantur",
              "l": "portāre",
              "p": "Verbum",
              "c": "Passīvus",
              "n": "Plūrālis",
              "g": "—",
              "d": "Saccī quī ā servīs portantur"
            },
            {
              "f": "ā",
              "l": "ab / ā",
              "p": "Praepositiō",
              "c": "cum Ablātīvō",
              "n": "—",
              "g": "—",
              "d": "Forma ante cōnsonantēs: ā vīllā / ā servō"
            },
            {
              "f": "servīs",
              "l": "servus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Ablātīvus",
              "n": "Plūrālis",
              "g": "Masculīnum",
              "d": "cum servīs",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "",
          "tokens": [
            {
              "f": "Portat",
              "l": "portāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Fert manibus vel umerīs: Saccus quem Syrus portat",
              "lead": "'",
              "punc": ","
            },
            {
              "f": "portant",
              "l": "portāre",
              "p": "Verbum",
              "c": "Indicātīvus",
              "n": "Plūrālis",
              "g": "—",
              "d": "Servī quī lectīcam portant",
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
              "f": "āctīvum",
              "l": "āctīvum",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "āctīvum"
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
              "f": "Portātur",
              "l": "portāre",
              "p": "Verbum",
              "c": "Passīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Iūlius ab Ursō et Dāvō portātur",
              "lead": "'",
              "punc": ","
            },
            {
              "f": "portantur",
              "l": "portāre",
              "p": "Verbum",
              "c": "Passīvus",
              "n": "Plūrālis",
              "g": "—",
              "d": "Saccī quī ā servīs portantur",
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
              "f": "verbum",
              "l": "verbum, -ī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Acc.",
              "n": "Singulāris",
              "g": "Neutrum",
              "d": "Vocābulum / pars ōrātiōnis"
            },
            {
              "f": "passīvum",
              "l": "passīvum",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "passīvum",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "",
          "marginalia": "",
          "tokens": [
            {
              "f": "Āctīvum",
              "l": "Āctīvum",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Āctīvum",
              "punc": ":"
            },
            {
              "f": "-t",
              "l": "-t",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "-t",
              "punc": ","
            },
            {
              "f": "-nt",
              "l": "-nt",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "-nt",
              "punc": "."
            },
            {
              "f": "Passīvum",
              "l": "Passīvum",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "Passīvum",
              "punc": ":"
            },
            {
              "f": "-tur",
              "l": "-tur",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "-tur",
              "punc": ","
            },
            {
              "f": "-ntur",
              "l": "-ntur",
              "p": "Vocābulum",
              "c": "—",
              "n": "—",
              "g": "—",
              "d": "-ntur",
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
              "f": "amātur",
              "l": "amāre",
              "p": "Verbum",
              "c": "Passīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Forma passīva: Mēdus ab eā amātur",
              "punc": ","
            },
            {
              "f": "amantur",
              "l": "amāre",
              "p": "Verbum",
              "c": "Passīvus",
              "n": "Plūrālis",
              "g": "—",
              "d": "Līberī ā parentibus amantur",
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
              "f": "vidētur",
              "l": "vidēre",
              "p": "Verbum",
              "c": "Passīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Passīvum: Neque ab iīs vidētur",
              "punc": ","
            },
            {
              "f": "videntur",
              "l": "vidēre",
              "p": "Verbum",
              "c": "Passīvus",
              "n": "Plūrālis",
              "g": "—",
              "d": "Passīvum plūrāle: Mūrī ab eō videntur",
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
              "f": "pōnitur",
              "l": "pōnere",
              "p": "Verbum",
              "c": "Passīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Sacculus in mēnsā pōnitur",
              "punc": ","
            },
            {
              "f": "pōnuntur",
              "l": "pōnere",
              "p": "Verbum",
              "c": "Passīvus",
              "n": "Plūrālis",
              "g": "—",
              "d": "Passīvum plūrāle: Rosae pōnuntur",
              "punc": ";"
            },
            {
              "f": "vehitur",
              "l": "vehere",
              "p": "Verbum",
              "c": "Passīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Iūlius lectīcā vehitur; Cornēlius equō vehitur",
              "punc": ","
            },
            {
              "f": "vehuntur",
              "l": "vehere",
              "p": "Verbum",
              "c": "Passīvus",
              "n": "Plūrālis",
              "g": "—",
              "d": "Dominī vehuntur",
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
              "f": "audītur",
              "l": "audīre",
              "p": "Verbum",
              "c": "Passīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Passīvum: Id ā Lydiā nōn audītur",
              "punc": ","
            },
            {
              "f": "audiuntur",
              "l": "audīre",
              "p": "Verbum",
              "c": "Passīvus",
              "n": "Plūrālis",
              "g": "—",
              "d": "Passīvum plūrāle: Verba audiuntur",
              "punc": "."
            }
          ]
        },
        {
          "numerus": "XCV",
          "marginalia": "",
          "tokens": [
            {
              "f": "Cornēlius",
              "l": "Cornēlius, -ī",
              "p": "Nōmen proprium",
              "c": "Nōminātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Vir Rōmānus, amīcus Iūliī"
            },
            {
              "f": "equō",
              "l": "equus, -ī",
              "p": "Nōmen substantīvum",
              "c": "Ablātīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "in equō / equō vehitur"
            },
            {
              "f": "vehitur",
              "l": "vehere",
              "p": "Verbum",
              "c": "Passīvus",
              "n": "Singulāris",
              "g": "—",
              "d": "Iūlius lectīcā vehitur; Cornēlius equō vehitur",
              "punc": "."
            },
            {
              "f": "Verba",
              "l": "verbum, -ī",
              "p": "Nōmen substantīvum",
              "c": "Nōminātīvus / Acc.",
              "n": "Plūrālis",
              "g": "Neutrum",
              "d": "Verba Aemiliae"
            },
            {
              "f": "Mēdī",
              "l": "Mēdus, -ī",
              "p": "Nōmen proprium",
              "c": "Genetīvus",
              "n": "Singulāris",
              "g": "Masculīnum",
              "d": "Genetīvus: sacculus Mēdī"
            },
            {
              "f": "ā",
              "l": "ab / ā",
              "p": "Praepositiō",
              "c": "cum Ablātīvō",
              "n": "—",
              "g": "—",
              "d": "Forma ante cōnsonantēs: ā vīllā / ā servō"
            },
            {
              "f": "Lydiā",
              "l": "Lydia, -ae",
              "p": "Nōmen proprium",
              "c": "Ablātīvus",
              "n": "Singulāris",
              "g": "Fēminīnum",
              "d": "ā Lydiā"
            },
            {
              "f": "audiuntur",
              "l": "audīre",
              "p": "Verbum",
              "c": "Passīvus",
              "n": "Plūrālis",
              "g": "—",
              "d": "Passīvum plūrāle: Verba audiuntur",
              "punc": "."
            }
          ]
        }
      ]
    }
  ],
  "grammaticaLatina": {
    "titulus": "GRAMMATICA LATINA",
    "subtitulus": "Praepositiōnēs, Vōx Passīva & Casus Locātīvus",
    "partes": [
      {
        "sectio": "I. Praepositiōnēs cum Accūsātīvō et Ablātīvō",
        "subsectio": "+ Accūsātīvus vs + Ablātīvus",
        "exemplaSententiarum": [
          {
            "sg": "ad vīllam / ante Iūlium / post lectīcam (+ acc.)",
            "pl": "inter servōs / prope Rōmam / circum oppidum / per portam (+ acc.)"
          },
          {
            "sg": "ab oppidō / cum dominō / ex hortō (+ abl.)",
            "pl": "in viā / sine equō (+ abl.)"
          }
        ],
        "regula": "Praepositiōnēs cum accūsātīvō: ad, ante, post, inter, prope, circum, apud, per. Praepositiōnēs cum ablātīvō: ab/ā, cum, ex/ē, in, sine.",
        "exemplaVocabulorum": "ad (+ acc.): ad vīllam, ad oppidum.\nab (+ abl.): ab oppidō, ā vīllā, ā Lydiā.\napud (+ acc.): apud dominum, apud amīcam.\ncum (+ abl.): cum servīs, cum dominō.",
        "sententiae": [
          "Iūlius ab oppidō ad vīllam suam it.",
          "Ursus est ante lectīcam, Dāvus post lectīcam ambulat."
        ]
      },
      {
        "sectio": "II. Verbum āctīvum et passīvum (-tur / -ntur)",
        "subsectio": "Vōx Passīva: Persōna III singulāris et plūrālis",
        "exemplaSententiarum": [
          {
            "sg": "Servus saccum portat = Saccus portātur ā servō.",
            "pl": "Servī saccōs portant = Saccī portantur ā servīs."
          },
          {
            "sg": "Equus Cornēlium vehit = Cornēlius equō vehitur.",
            "pl": "Verba Mēdī ā Lydiā audiuntur."
          }
        ],
        "regula": "Āctīvum exit in -t (sg.) et -nt (pl.). Passīvum exit in -tur (sg.) et -ntur (pl.). Agēns persōna pōnitur in ablātīvō cum praepositiōne ab/ā (ā servō, ab Ursō, ā Lydiā); instrumentum sine praepositiōne (equō vehitur, lectīcā vehitur, baculō verberat).",
        "exemplaVocabulorum": "[1] portat -> portātur; portant -> portantur; amat -> amātur; amant -> amantur.\n[2] videt -> vidētur; vident -> videntur; timet -> timētur.\n[3] vehit -> vehitur; vehunt -> vehuntur; pōnit -> pōnitur; pōnunt -> pōnuntur.\n[4] audit -> audītur; audiunt -> audiuntur.",
        "sententiae": [
          "Iūlius in lectīcā ab Ursō et Dāvō portātur.",
          "Dominus īrātus ā servō malō timētur."
        ]
      },
      {
        "sectio": "III. Casus Locātīvus et Nōmina Oppidōrum",
        "subsectio": "Ubi? Quō? Unde?",
        "exemplaSententiarum": [
          {
            "sg": "Ubi? Locātīvus: Rōmae, Tusculī, Brundisiī (in oppidō)",
            "pl": "Quō? Accūsātīvus: Rōmam, Tusculum, Capuam (ad oppidum)"
          },
          {
            "sg": "Unde? Ablātīvus: Rōmā, Tusculō, Capuā (ab oppidō)",
            "pl": "Mēdus Tusculō Rōmam ambulat."
          }
        ],
        "regula": "Cum nōminibus oppidōrum praepositiōnēs nōn pōnuntur! Ubi? -> Locātīvus in -ae (dēcl. I: Rōmae) vel -ī (dēcl. II: Tusculī, Brundisiī). Quō? -> Accūsātīvus sine praepositiōne (Rōmam, Tusculum). Unde? -> Ablātīvus sine praepositiōne (Rōmā, Tusculō).",
        "exemplaVocabulorum": "Rōma: Rōmae (ubi?), Rōmam (quō?), Rōmā (unde?).\nTusculum: Tusculī (ubi?), Tusculum (quō?), Tusculō (unde?).",
        "sententiae": [
          "Cornēlius nōn Tusculō Rōmam, sed Rōmā Tusculum it.",
          "Lydia Rōmae habitat; Mēdus Rōmam ad amīcam suam it."
        ]
      }
    ]
  },
  "pensa": {
    "pensumA": {
      "titulus": "PĒNSVM A (Capitulum VI)",
      "descriptio": "Fōrmae grammaticae: Implē lacūnās terminātiōnibus passīvī (-tur, -ntur), praepositiōnum, et cāsuum!",
      "quaestiones": [
        {
          "id": "p6a_1",
          "praefix": "Iūlius ab oppid",
          "lacuna": "ō",
          "inter": " Tusculō ad vīll",
          "lacuna2": "am",
          "suffix": " suam it.",
          "explicatio": "Ablātīvus post 'ab' (oppidō); accūsātīvus post 'ad' (vīllam)."
        },
        {
          "id": "p6a_2",
          "praefix": "Iūlius in lectīcā est inter Urs",
          "lacuna": "um",
          "inter": " et Dāv",
          "lacuna2": "um",
          "suffix": ".",
          "explicatio": "Accūsātīvus post praepositiōnem 'inter': Ursum, Dāvum."
        },
        {
          "id": "p6a_3",
          "praefix": "Dominus ā servīs port",
          "lacuna": "ātur",
          "suffix": ".",
          "explicatio": "Passīvus singulāris coniugātiōnis I: portātur."
        },
        {
          "id": "p6a_4",
          "praefix": "Saccī ā Syrō et Lēandrō port",
          "lacuna": "antur",
          "suffix": ".",
          "explicatio": "Passīvus plūrālis coniugātiōnis I: portantur."
        },
        {
          "id": "p6a_5",
          "praefix": "Dominus ā serv",
          "lacuna": "ō",
          "inter": " mal",
          "lacuna2": "ō",
          "suffix": " timētur.",
          "explicatio": "Ablātīvus agentis post 'ā': servō malō."
        },
        {
          "id": "p6a_6",
          "praefix": "Servus malus ā domin",
          "lacuna": "ō",
          "inter": " voc",
          "lacuna2": "ātur",
          "suffix": ".",
          "explicatio": "Ablātīvus agentis (dominō); passīvus (vocātur)."
        },
        {
          "id": "p6a_7",
          "praefix": "Quō it Mēdus? Rōm",
          "lacuna": "am",
          "suffix": " it.",
          "explicatio": "Accūsātīvus mōtūs ad oppidum sine praepositiōne: Rōmam."
        },
        {
          "id": "p6a_8",
          "praefix": "Unde venit Mēdus? Tuscul",
          "lacuna": "ō",
          "suffix": " venit.",
          "explicatio": "Ablātīvus mōtūs ab oppidō sine praepositiōne: Tusculō."
        },
        {
          "id": "p6a_9",
          "praefix": "Cornēlius nōn ambulat, sed equ",
          "lacuna": "ō",
          "inter": " veh",
          "lacuna2": "itur",
          "suffix": ".",
          "explicatio": "Ablātīvus instrumentī (equō); passīvus singulāris (vehitur)."
        },
        {
          "id": "p6a_10",
          "praefix": "Lydia, amīca Mēdī, Rōm",
          "lacuna": "ae",
          "suffix": " habitat.",
          "explicatio": "Locātīvus oppidī primae dēclīnātiōnis: Rōmae."
        },
        {
          "id": "p6a_11",
          "praefix": "Mēdus apud Lydi",
          "lacuna": "am",
          "suffix": " est.",
          "explicatio": "Accūsātīvus post praepositiōnem 'apud': Lydiam."
        },
        {
          "id": "p6a_12",
          "praefix": "Lydia Mēd",
          "lacuna": "um",
          "inter": " amat et ab e",
          "lacuna2": "ō",
          "suffix": " amātur.",
          "explicatio": "Accūsātīvus obiectī (Mēdum); ablātīvus agentis post 'ab' (eō)."
        }
      ]
    },
    "pensumB": {
      "titulus": "PĒNSVM B (Capitulum VI)",
      "descriptio": "Vocābula nova: Implē lacūnās vocābulīs capitulī!",
      "quaestiones": [
        {
          "id": "p6b_1",
          "praefix": "Ōstia nōn procul ā Rōmā, sed ",
          "lacuna": "prope",
          "suffix": " Rōmam est.",
          "explicatio": "Praepositiō cum accūsātīvō: prope (↔ procul ab)."
        },
        {
          "id": "p6b_2",
          "praefix": "",
          "lacuna": "Unde",
          "suffix": " venit Iūlius? Tusculō venit.",
          "explicatio": "Adverbium interrogātīvum mōtūs: Unde (a quō locō?)."
        },
        {
          "id": "p6b_3",
          "praefix": "Iūlius ad vīllam it; duo servī eum in ",
          "lacuna": "lectīcā",
          "suffix": " portant.",
          "explicatio": "Nōmen ablātīvī: lectīcā (vehiculum gestābile)."
        },
        {
          "id": "p6b_4",
          "praefix": "Syrus et Lēander duōs ",
          "lacuna": "saccōs",
          "suffix": " in umerīs portant.",
          "explicatio": "Nōmen accūsātīvī plūrālis: saccōs."
        },
        {
          "id": "p6b_5",
          "praefix": "Servī quī lectīcam portant ",
          "lacuna": "fessī",
          "suffix": " sunt.",
          "explicatio": "Adiectīvum plūrāle: fessī (lassī)."
        },
        {
          "id": "p6b_6",
          "praefix": "Mēdus dominum īrātum ",
          "lacuna": "timet",
          "suffix": "; itaque abest.",
          "explicatio": "Verbum: timet (formīdat)."
        },
        {
          "id": "p6b_7",
          "praefix": "Mēdus et Dāvus nōn amīcī, sed ",
          "lacuna": "inimīcī",
          "suffix": " sunt.",
          "explicatio": "Nōmen plūrāle: inimīcī (↔ amīcī)."
        },
        {
          "id": "p6b_8",
          "praefix": "Cornēlius equō ",
          "lacuna": "vehitur",
          "suffix": ", is nōn ambulat.",
          "explicatio": "Verbum passīvum: vehitur (equus eum vehit)."
        },
        {
          "id": "p6b_9",
          "praefix": "Mēdus per ",
          "lacuna": "portam",
          "suffix": " Capēnam Rōmam intrat.",
          "explicatio": "Nōmen accūsātīvī post 'per': portam."
        },
        {
          "id": "p6b_10",
          "praefix": "Lydia est ",
          "lacuna": "amīca",
          "suffix": " Mēdī quae Rōmae habitat.",
          "explicatio": "Nōmen fēminīnum: amīca (fēmina cāra)."
        }
      ]
    },
    "pensumC": {
      "titulus": "PĒNSVM C (Capitulum VI)",
      "descriptio": "Interrogātiōnēs: Scrībe respōnsum Latīnē, deinde aperī exemplum!",
      "quaestiones": [
        {
          "id": "p6c_1",
          "interrogatio": "Ambulatne Iūlius in viā?",
          "exemplum": "Iūlius nōn ambulat, nam in lectīcā vehitur (portātur ā servīs)."
        },
        {
          "id": "p6c_2",
          "interrogatio": "Quī servī Iūlium portant?",
          "exemplum": "Ursus et Dāvus Iūlium in lectīcā portant."
        },
        {
          "id": "p6c_3",
          "interrogatio": "Quid portant Syrus et Lēander?",
          "exemplum": "Syrus et Lēander duōs magnōs saccōs in umerīs portant."
        },
        {
          "id": "p6c_4",
          "interrogatio": "Unde venit Iūlius et quō it?",
          "exemplum": "Iūlius ab oppidō Tusculō venit et ad vīllam suam it."
        },
        {
          "id": "p6c_5",
          "interrogatio": "Quō it Mēdus?",
          "exemplum": "Mēdus Rōmam it (ad amīcam suam Lydiam)."
        },
        {
          "id": "p6c_6",
          "interrogatio": "Etiamne Cornēlius Tusculō Rōmam it?",
          "exemplum": "Cornēlius nōn Rōmam, sed Tusculum it (Rōmā venit)."
        },
        {
          "id": "p6c_7",
          "interrogatio": "Ubi habitat Cornēlius?",
          "exemplum": "Cornēlius Tusculī habitat."
        },
        {
          "id": "p6c_8",
          "interrogatio": "Cūr Mēdus laetus est et cantat?",
          "exemplum": "Mēdus laetus est, quia ad amīcam suam pulchram Rōmam it."
        },
        {
          "id": "p6c_9",
          "interrogatio": "Quae est Lydia?",
          "exemplum": "Lydia est fēmina pulchra et proba, amīca Mēdī, quae Rōmae habitat."
        },
        {
          "id": "p6c_10",
          "interrogatio": "Num 'portat' verbum passīvum est?",
          "exemplum": "Nōn passīvum, sed verbum āctīvum est 'portat' ('portātur' est passīvum)."
        }
      ]
    }
  }
};
