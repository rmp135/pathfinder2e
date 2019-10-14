export default [
  {
    name: "Alchemist",
    keyAbility: "int",
    hp: 8,
    mods: [
      {
        type: "perception",
        value: 2
      },
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
    skills: ["craft"],
    additionalSkills: 3,
    attacks: ["simple", "alchemical", "unarmed"],
    defenses: ["light", "unarmored"]
  },
  {
    name: "Barbarian",
    keyAbility: "str",
    hp: 12,
    mods: [
      {
        type: "perception",
        value: 4
      },
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
    skills: ["craft"],
    additionalSkills: 3,
    attacks: ["simple", "martial", "unarmed"],
    defenses: ["light", "medium", "unarmored"]
  },
  {
    name: "Bard",
    keyAbility: "cha",
    hp: 8,
    mods: [
      {
        type: "perception",
        value: 4
      },
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
    skills: ["occultism", "performance"],
    additionalSkills: 4,
    attacks: ["simple", "longsword", "rapier", "sap", "shortbow", "shortsword", "whip", "unarmed"],
    defenses: ["light", "unarmored"]
  },
  {
    name: "Champion",
    keyAbility: null,
    hp: 10,
    mods: [
      {
        type: "perception",
        value: 4
      },
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
  },]