export default [
  {
    name: "Dwarf",
    hp: 10,
    size: "medium",
    speed: 20,
    boosts: ["con", "wis"],
    flaw: "cha",
    heritages: [
      {
        name: "Ancient-Blooded Dwarf",
        actions: {
          type: "reaction",
          trigger: "You attempt a saving throw againts a magival effect, but you haven't rolled yet.",
          description: "Your ancestor's innate resistance to magic surges, before slowly ebbing down. You gain +1 circumstance bonus to the triggering saving throw and until the end of this turn."
        },
      },
      {
        name: "Death Warden Dwarf",
        description: "Your ancstors have been tomb guardians for generations, and the power they cultivated to ward off necromancy has passed ont oyou. If you roll a success on a saving throw againts a necromancy effect, you get a critical success instead."
      },
      {
        name: "Forge Dwarf",
        description: "You have remarkable adaption to hot environment sfrom ancestors who inhabited balzing dserts or volcanic chambers beneath the earth. THis grants you fire resistance equal to half you level (minimum 1), and you treat environmental heat effects as if they wre one step less extreme (incredible heat becomes extreme, extreme heat becomes severe, and so on).",
        mods: [
          {
            type: "resFire",
            value: "lvl/2"
          }
        ]
      },
      {
        name: "Rock Dwarf",
        mods: [
          {
            type: "saveReflex",
            summary: "+2 against Shove or Trip"
          },
          {
            type: "saveFort",
            summary: "+2 against Shove or Trip"
          }
        ]
      },
      {
        name: "Strong-Blooded Dwarf",
        mods: [
          {
            type: "resPois",
            value: "lvl/2"
          }
        ]
      }
    ],
    feats: [
      {
        name: "Dwarven Lore",
        skillMods: {
          trained: ["crafting", "religion", "dwarven lore"],
        }
      },
      {
        name: "Dwarven Weapon Familiarty",
        weaponSkills: {
          trained:  ["battle axe", "pick", "warhammer"],
          access: ["dwarven weapons"]
        }
      },
      {
        name: "Rock Runner"
      },
      {
        name: "Stonecunning",
        mods: 
        {
          type: "perc",
          summary: "+2 to unnusual stonework"
        }
      }
    ]
  },
  {
    name: "Elf",
    hp: 10,
    size: "medium",
    speed: 20,
    boosts: ["dex", "int"],
    flaw: "con",
    heritages: [
      {
        name: "Arctic Elf",
        description: "You dwell deep in the frozen north and have gained incredible resilience against cold environments, granting you cold resistance equal to half your level (minimum 1). You reat environmental cold effects as if they were one step less extreme (incredible cold becomes extreme, extreme cold becomes severe, and so on).",
        mods: [
          {
            type: "resCold",
            value: "lvl/2"
          }
        ]
      },
      {
        name: "Cavern Elf",
        description: "You were born or spent many years in underground tunnels or caverns where light is scarce. You gain darkvision.",
        abilities:[
          {
              name: "darkvision"
          }
        ]
      },
      {
        name: "Seer Elf",
        description: "You have remarkable adaption to hot environment sfrom ancestors who inhabited balzing dserts or volcanic chambers beneath the earth. THis grants you fire resistance equal to half you level (minimum 1), and you treat environmental heat effects as if they wre one step less extreme (incredible heat becomes extreme, extreme heat becomes severe, and so on).",
        mods: [
          {
            type: "identify magic",
            summary: "+1 magical nature"
          },
          {
            type: "decipher writing",
            summary: "+1 magical nature"
          }
        ]
      },
      {
        name: "Whisper Elf",
        description: "Your ears are finely tuned, able to detect even the slightest whispers of sound. As long as you can hear normally, you can use the Seek action to sense undetected creatures in a 60-foot cone instead of a 30-foot cone. You also gain a +2 circumstance bonus to locate undetected creatures that you could hear within 30 feet with a Seek action.",
        mods: [
          {
            type: "seek",
            value: 60,
            description: "+2 locate undetected creatures within 30ft"
          }
        ]
      },
      {
        name: "Woodland Elf",
        description: "You’re adapted to life in the forest or the deep jungle, and you know how to climb trees and use foliage to your advantage. When Climbing trees, vines, and other foliage, you move at half your Speed on a success and at full Speed on a critical success (and you move at full Speed on a success if you have Quick Climb). This doesn’t affect you if you’re using a climb Speed. You can always use the Take Cover action when you are within forest terrain to gain cover, even if you’re not next to an obstacle you can Take Cover behind."
      }
    ],
    feats: [
      {
        name: "Dwarven Lore",
        skillMods: {
          trained: ["crafting", "religion", "dwarven lore"],
        }
      },
      {
        name: "Dwarven Weapon Familiarty",
        weaponSkills: {
          trained:  ["battle axe", "pick", "warhammer"],
          access: ["dwarven weapons"]
        }
      },
      {
        name: "Rock Runner"
      },
      {
        name: "Stonecunning",
        mods: 
        {
          type: "perc",
          summary: "+2 to unnusual stonework"
        }
      }
    ]
  },
  {
    name: "Gnome",
    hp: 10,
    size: "medium",
    speed: 20,
    freeBoosts: 1,
    boosts: ["con", "cha"],
    flaw: "str",
    heritages: [
      {
        name: "Chameleon Gnome",
        description: "Dwarven heroes of old could shrug off their enemies' magic, and some of that resistance manigest in you. You gan hte Call on Ancient Blood reaction.",
        actions: {
          type: "single",
          description: "+2 stealth until surrounding shifts"
        },
      },
      {
        name: "Fey-Touched Gnome",
        description: "Your ancstors have been tomb guardians for generations, and the power they cultivated to ward off necromancy has passed ont oyou. If you roll a success on a saving throw againts a necromancy effect, you get a critical success instead."
      },
      {
        name: "Sensate Gnome",
        description: "You have remarkable adaption to hot environment sfrom ancestors who inhabited balzing dserts or volcanic chambers beneath the earth. THis grants you fire resistance equal to half you level (minimum 1), and you treat environmental heat effects as if they wre one step less extreme (incredible heat becomes extreme, extreme heat becomes severe, and so on).",
        mods: [
          {
            type: "resFire",
            value: "lvl/2"
          }
        ]
      },
      {
        name: "Umbral Gnome",
        mods: [
          {
            type: "saveReflex",
            summary: "+2 against Shove or Trip"
          },
          {
            type: "saveFort",
            summary: "+2 against Shove or Trip"
          }
        ]
      },
      {
        name: "Wellspring Gnome",
        mods: [
          {
            type: "resPois",
            value: "lvl/2"
          }
        ]
      }
    ],
    feats: [
      {
        name: "Dwarven Lore",
        skillMods: {
          trained: ["crafting", "religion", "dwarven lore"],
        }
      },
      {
        name: "Dwarven Weapon Familiarty",
        weaponSkills: {
          trained:  ["battle axe", "pick", "warhammer"],
          access: ["dwarven weapons"]
        }
      },
      {
        name: "Rock Runner"
      },
      {
        name: "Stonecunning",
        mods: 
        {
          type: "perc",
          summary: "+2 to unusual stonework"
        }
      }
    ]
  },
  {
    name: "Goblin",
    hp: 10,
    size: "medium",
    speed: 20,
    boosts: ["dex", "cha"],
    flaw: "wis",
    heritages: [
      {
        name: "Ancient-Blooded Dwarf",
        description: "Dwarven heroes of old could shrug off their enemies' magic, and some of that resistance manigest in you. You gan hte Call on Ancient Blood reaction.",
        actions: {
          type: "reaction",
          trigger: "You attempt a saving throw againts a magival effect, but you haven't rolled yet.",
          description: "Your ancestor's innate resistance to magic surges, before slowly ebbing down. You gain +1 circumstance bonus to the triggering saving throw and until the end of this turn."
        },
      },
      {
        name: "Death Warden Dwarf",
        description: "Your ancstors have been tomb guardians for generations, and the power they cultivated to ward off necromancy has passed ont oyou. If you roll a success on a saving throw againts a necromancy effect, you get a critical success instead."
      },
      {
        name: "Forge Dwarf",
        description: "You have remarkable adaption to hot environment sfrom ancestors who inhabited balzing dserts or volcanic chambers beneath the earth. THis grants you fire resistance equal to half you level (minimum 1), and you treat environmental heat effects as if they wre one step less extreme (incredible heat becomes extreme, extreme heat becomes severe, and so on).",
        mods: [
          {
            type: "resFire",
            value: "lvl/2"
          }
        ]
      },
      {
        name: "Rock Dwarf",
        mods: [
          {
            type: "saveReflex",
            summary: "+2 against Shove or Trip"
          },
          {
            type: "saveFort",
            summary: "+2 against Shove or Trip"
          }
        ]
      },
      {
        name: "Strong-Blooded Dwarf",
        mods: [
          {
            type: "resPois",
            value: "lvl/2"
          }
        ]
      }
    ],
    feats: [
      {
        name: "Dwarven Lore",
        skillMods: {
          trained: ["crafting", "religion", "dwarven lore"],
        }
      },
      {
        name: "Dwarven Weapon Familiarty",
        weaponSkills: {
          trained:  ["battle axe", "pick", "warhammer"],
          access: ["dwarven weapons"]
        }
      },
      {
        name: "Rock Runner"
      },
      {
        name: "Stonecunning",
        mods: 
        {
          type: "perc",
          summary: "+2 to unnusual stonework"
        }
      }
    ]
  },
  {
    name: "Halfling",
    hp: 10,
    size: "medium",
    speed: 20,
    boosts: ["dex", "wis"],
    flaw: "str",
    heritages: [
      {
        name: "Ancient-Blooded Dwarf",
        description: "Dwarven heroes of old could shrug off their enemies' magic, and some of that resistance manigest in you. You gan hte Call on Ancient Blood reaction.",
        actions: {
          type: "reaction",
          trigger: "You attempt a saving throw againts a magival effect, but you haven't rolled yet.",
          description: "Your ancestor's innate resistance to magic surges, before slowly ebbing down. You gain +1 circumstance bonus to the triggering saving throw and until the end of this turn."
        },
      },
      {
        name: "Death Warden Dwarf",
        description: "Your ancstors have been tomb guardians for generations, and the power they cultivated to ward off necromancy has passed ont oyou. If you roll a success on a saving throw againts a necromancy effect, you get a critical success instead."
      },
      {
        name: "Forge Dwarf",
        description: "You have remarkable adaption to hot environment sfrom ancestors who inhabited balzing dserts or volcanic chambers beneath the earth. THis grants you fire resistance equal to half you level (minimum 1), and you treat environmental heat effects as if they wre one step less extreme (incredible heat becomes extreme, extreme heat becomes severe, and so on).",
        mods: [
          {
            type: "resFire",
            value: "lvl/2"
          }
        ]
      },
      {
        name: "Rock Dwarf",
        mods: [
          {
            type: "saveReflex",
            summary: "+2 against Shove or Trip"
          },
          {
            type: "saveFort",
            summary: "+2 against Shove or Trip"
          }
        ]
      },
      {
        name: "Strong-Blooded Dwarf",
        mods: [
          {
            type: "resPois",
            value: "lvl/2"
          }
        ]
      }
    ],
    feats: [
      {
        name: "Dwarven Lore",
        skillMods: {
          trained: ["crafting", "religion", "dwarven lore"],
        }
      },
      {
        name: "Dwarven Weapon Familiarty",
        weaponSkills: {
          trained:  ["battle axe", "pick", "warhammer"],
          access: ["dwarven weapons"]
        }
      },
      {
        name: "Rock Runner"
      },
      {
        name: "Stonecunning",
        mods: 
        {
          type: "perc",
          summary: "+2 to unnusual stonework"
        }
      }
    ]
  },
  {
    name: "Human",
    hp: 10,
    size: "medium",
    speed: 20,
    boosts: [],
    flaw: "",
    heritages: [
      {
        name: "Ancient-Blooded Dwarf",
        description: "Dwarven heroes of old could shrug off their enemies' magic, and some of that resistance manigest in you. You gan hte Call on Ancient Blood reaction.",
        actions: {
          type: "reaction",
          trigger: "You attempt a saving throw againts a magival effect, but you haven't rolled yet.",
          description: "Your ancestor's innate resistance to magic surges, before slowly ebbing down. You gain +1 circumstance bonus to the triggering saving throw and until the end of this turn."
        },
      },
      {
        name: "Death Warden Dwarf",
        description: "Your ancstors have been tomb guardians for generations, and the power they cultivated to ward off necromancy has passed ont oyou. If you roll a success on a saving throw againts a necromancy effect, you get a critical success instead."
      },
      {
        name: "Forge Dwarf",
        description: "You have remarkable adaption to hot environment sfrom ancestors who inhabited balzing dserts or volcanic chambers beneath the earth. THis grants you fire resistance equal to half you level (minimum 1), and you treat environmental heat effects as if they wre one step less extreme (incredible heat becomes extreme, extreme heat becomes severe, and so on).",
        mods: [
          {
            type: "resFire",
            value: "lvl/2"
          }
        ]
      },
      {
        name: "Rock Dwarf",
        mods: [
          {
            type: "saveReflex",
            summary: "+2 against Shove or Trip"
          },
          {
            type: "saveFort",
            summary: "+2 against Shove or Trip"
          }
        ]
      },
      {
        name: "Strong-Blooded Dwarf",
        mods: [
          {
            type: "resPois",
            value: "lvl/2"
          }
        ]
      }
    ],
    feats: [
      {
        name: "Dwarven Lore",
        skillMods: {
          trained: ["crafting", "religion", "dwarven lore"],
        }
      },
      {
        name: "Dwarven Weapon Familiarty",
        weaponSkills: {
          trained:  ["battle axe", "pick", "warhammer"],
          access: ["dwarven weapons"]
        }
      },
      {
        name: "Rock Runner"
      },
      {
        name: "Stonecunning",
        mods: 
        {
          type: "perc",
          summary: "+2 to unnusual stonework"
        }
      }
    ]
  }
];