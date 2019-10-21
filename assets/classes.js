export default [
  {
    name: "Alchemist",
    keyAbility: "int",
    hp: 8,
    perception: "t",
    mods: [
      {
        type: "saveFort",
        value: 4
      },
      {
        type: "saveReflex",
        value: 4
      },
      {
        type: "saveWill",
        value: 2
      },
    ],
    skills: ["crafting"], // Chosen
    additionalSkills: 3,
    attacks: ["simple", "alchemical", "unarmed"],
    defenses: ["light", "unarmored"]
  },
  {
    name: "Barbarian",
    keyAbility: "str",
    hp: 12,
    perception: "e",
    mods: [
      {
        type: "saveFort",
        value: 4
      },
      {
        type: "saveReflex",
        value: 2
      },
      {
        type: "saveWill",
        value: 4
      },
    ],
    skills: ["athletics"], // Chosen
    additionalSkills: 3,
    attacks: ["simple", "martial", "unarmed"],
    defenses: ["light", "medium", "unarmored"]
  },
  {
    name: "Bard",
    keyAbility: "cha",
    hp: 8,
    perception: "e",
    mods: [
      {
        type: "saveFort",
        value: 2
      },
      {
        type: "saveReflex",
        value: 2
      },
      {
        type: "saveWill",
        value: 4
      },
    ],
    skills: ["occultism", "performance"], // Chosen
    additionalSkills: 4,
    attacks: ["simple", "longsword", "rapier", "sap", "shortbow", "whip", "unarmed"],
    defenses: ["light", "unarmored"]
  },
  {
    name: "Champion",
    keyAbility: ["str", "dex"],
    hp: 10,
    perception: "e",
    mods: [
      {
        type: "saveFort",
        value: 4
      },
      {
        type: "saveReflex",
        value: 2
      },
      {
        type: "saveWill",
        value: 4
      },
    ],
    skills: ["occultism", "performance"],
    additionalSkills: 4,
    attacks: ["simple", "longsword", "rapier", "sap", "shortbow", "shortsword", "whip", "unarmed"],
    defenses: ["light", "unarmored"]
  },
  {
    name: "Cleric",
    keyAbility: "wis",
    hp: 8,
    perception: "t",
    mods: [
      {
        type: "saveFort",
        value: 4
      },
      {
        type: "saveReflex",
        value: 2
      },
      {
        type: "saveWill",
        value: 4
      },
    ],
    skills: ["religion"],
    additionalSkills: 2,
    attacks: ["simple", "unarmed"],
    defenses: ["light", "unarmored"]
  },
  {
    name: "Druid",
    keyAbility: "wis",
    hp: 8,
    perception: "t",
    mods: [
      {
        type: "saveFort",
        value: 4
      },
      {
        type: "saveReflex",
        value: 2
      },
      {
        type: "saveWill",
        value: 4
      },
    ],
    skills: ["nature"],
    additionalSkills: 2,
    attacks: ["simple", "unarmed"],
    defenses: ["light", "medium", "unarmored"]
  },
  {
    name: "Fighter",
    keyAbility: ["str", "dex"],
    hp: 10,
    perception: "e",
    mods: [
      {
        type: "saveFort",
        value: 4
      },
      {
        type: "saveReflex",
        value: 2
      },
      {
        type: "saveWill",
        value: 4
      },
    ],
    skills: [], // User selected.
    additionalSkills: 3,
    attacks: ["advanced"],
    expertAttacks: ["simple", "martial", "unarmed"],
    defenses: ["all", "unarmored"]
  },
  {
    name: "Monk",
    keyAbility: ["str", "dex"],
    hp: 10,
    perception: "t",
    mods: [
      {
        type: "saveFort",
        value: 4
      },
      {
        type: "saveReflex",
        value: 2
      },
      {
        type: "saveWill",
        value: 4
      },
    ],
    skills: [],
    additionalSkills: 4,
    attacks: ["simple", "unarmed"],
    defenses: [],
    expertDefenses: ["unarmored"]
  },
  {
    name: "Ranger",
    keyAbility: ["str", "dex"],
    hp: 10,
    perception: "e",
    mods: [
      {
        type: "saveFort",
        value: 4
      },
      {
        type: "saveReflex",
        value: 2
      },
      {
        type: "saveWill",
        value: 4
      },
    ],
    skills: ["nature", "survival"],
    additionalSkills: 4,
    attacks: ["simple", "martial", "unarmed"],
    defenses: ["light", "medium", "unarmored"]
  },
  {
    name: "Rogue",
    keyAbility: "dex",
    hp: 10,
    perception: "e",
    racket: [
      { name: "Ruffian", ability: "str" },
      { name: "Scoundrel", ability: "cha", trained: ["deception", "diplomacy"] },
      { name: "Thief", trained: ["thievery"] }
    ],
    mods: [
      {
        type: "saveFort",
        value: 4
      },
      {
        type: "saveReflex",
        value: 2
      },
      {
        type: "saveWill",
        value: 4
      },
    ],
    skills: ["stealth"],
    additionalSkills: 7,
    attacks: ["simple", "rapier", "sap", "shortbow","shortsword", "unarmed"],
    defenses: ["light", "unarmored"]
  },
  {
    name: "Sorcerer",
    keyAbility: "cha",
    hp: 6,
    perception: "t",
    mods: [
      {
        type: "saveFort",
        value: 4
      },
      {
        type: "saveReflex",
        value: 2
      },
      {
        type: "saveWill",
        value: 4
      },
    ],
    skills: [],
    additionalSkills: 2,
    attacks: ["simple", "unarmed"],
    defenses: ["unarmored"]
  },
  {
    name: "Wizard",
    keyAbility: "int",
    hp: 6,
    perception: "t",
    mods: [
      {
        type: "saveFort",
        value: 4
      },
      {
        type: "saveReflex",
        value: 2
      },
      {
        type: "saveWill",
        value: 4
      },
    ],
    skills: ["arcana"],
    additionalSkills: 2,
    attacks: ["club", "crossbow", "dagger", "heavy crossbow", "staff"],
    defenses: ["unarmored"]
  },
]