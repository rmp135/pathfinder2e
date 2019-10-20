import classes from 'assets/classes.js';
import ancestories from 'assets/ancestories.js';
import backgrounds from 'assets/backgrounds.js';
import Vue from 'vue'

export const state = () => ({
  level: 1,
  heroPoints: 1,
  race: "Dwarf",
  heritage: "Rock Dwarf",
  clas: "Alchemist",
  classBoost: null, // Some classes allow choosing the ability boost.
  rogueRacket: null, // A rogue picks a racket.
  background: "Acolyte",
  backgroundSkill: null, // Some backgrounds allow choosing the trained skill.
  raceBoost: "str",
  humanBoost: "str",
  classSkill: null, // Some classes allow choosing the trained skill.
  classSkillOverride: [], // For when a class skill clashes with background skill.
  backgroundBoosts: ["int", "str"],
  loreProfs: [
    { type: "", level: 0 },
    { type: "", level: 0 }
  ],
  skillIncreases: [
    []
  ],
  levelBoosts: [
    ["str", "str", "str", "str"], // 1
    ["str", "str", "str", "str"], // 5
    ["str", "str", "str", "str"], // 10
    ["str", "str", "str", "str"], // 15
    ["str", "str", "str", "str"]  // 20
  ],
})

export const mutations = {
  SET_LEVEL (state, value) {
    state.level = value
  },
  SET_RACE (state, value) {
    state.race = value
    state.heritage = ancestories.find(a => a.name == value).heritages[0].name
  },
  SET_HERITAGE (state, value) {
    state.heritage = value
  },
  SET_CLASS (state, value) {
    state.clas = value
  },
  SET_LEVEL_BOOST (state, { index, level, value }) {
    Vue.set(state.levelBoosts[level], index, value)
  },
  SET_HUMAN_BOOST (state, val) {
    state.humanBoost = val
  },
  SET_RACE_BOOST (state, val) {
    state.raceBoost = val
  },
  SET_CLASS_BOOST (state, val) {
    state.classBoost = val
  },
  SET_BACKGROUND (state, val) {
    state.background = val
  },
  SET_BACKGROUND_BOOST (state, { index, value }) {
    Vue.set(state.backgroundBoosts, index, value)
  },
  SET_RACKET (state, val) {
    state.rogueRacket = val
  },
  SET_CLASS_SKILL (state, val) {
    state.classSkill = val
  },
  SET_CLASS_SKILL_OVERRIDE (state, { index, val }) {
    if (index != null) {
      Vue.set(state.classSkillOverride, index, val)
    } else {
      state.classSkillOverride = val
    }
  },
  SET_INITIAL_SKILLS(state, { skill, level, number }) {
    Vue.set(state.skillIncreases, level, [])
    for (let i = 0; i < number; i++) {
      state.skillIncreases.push(skill)
    }
  }
}

export const actions = {
}

export const getters = {
  skillRank: (state, getters) => (skill) => {
    let rank = 0
    if (getters.currentBackground.skills.includes(skill)) {
      rank = 1
    }
    if (getters.currentClass.skills.includes(skill)) {
      rank = 1
    }
    if (skill == state.classSkill) {
      rank = 1
    }
    if (state.classSkillOverride.includes(skill)) {
      rank = 1
    }
    if (state.clas == "Rogue") {
      if (state.rogueRacket == "Ruffian" && skill == "intimidation")  {
        rank = 1
      }
      if (state.rogueRacket == "Scoundrel" && ["deception", "diplomacy"].includes(skill)) {
        rank = 1
      }
      if (state.rogueRacket == "Thief" && skill == "thievery") {
        rank = 1
      }
    }
    return rank
  },
  allMods (state, getters) {
    const mods = []
    mods.push({ type: state.raceBoost.toLowerCase(), value: 2 })
    mods.push(...state.backgroundBoosts.map(a => ({ type: a.toLowerCase(), value: 2 })))
    mods.push(...getters.currentRace.boosts.map(a => ({ type: a.toLowerCase(), value: 2 })))
    mods.push({ type: getters.currentRace.flaw.toLowerCase(), value: -2 })
    mods.push(...state.levelBoosts[0].map(a => ({ type: a.toLowerCase(), value: 2 })))
    if (state.classBoost != null) {
      mods.push({ type: state.classBoost, value: 2 })
    }
    if (getters.currentRace.name == "Human") {
      mods.push({ type: state.humanBoost.toLowerCase(), value: 2 })
    }
    if (getters.currentHeritage.mods != null)
      mods.push(...getters.currentHeritage.mods)
    if (getters.currentClass.mods != null)
      mods.push(...getters.currentClass.mods)
    return mods;
  },
  currentClass (state) {
    return classes.find(c => c.name == state.clas);
  },
  currentRace (state) {
    return ancestories.find(a => a.name == state.race);
  },
  currentHeritage (state, getters) {
    return getters.currentRace.heritages.find(h => h.name == state.heritage);
  },
  currentBackground (state, getters) {
    return backgrounds.find(b => b.name == state.background);
  },
  sumMods: (state, getters) => (type) => {
    let value = 0
    const filtered = getters.allMods.filter(m => m.type == type)
    value += filtered.filter(m => m.value != undefined).map(m => m.value).reduce(((a, b) => a + b), 0)
    return value
  },
  str (state, getters) {
    return 10 + getters.sumMods("str")
  },
  dex (state, getters) {
    return 10 + getters.sumMods("dex")
  },
  con (state, getters) {
    return 10 + getters.sumMods("con")
  },
  int (state, getters) {
    return 10 + getters.sumMods("int")
  },
  wis (state, getters) {
    return 10 + getters.sumMods("wis")
  },
  cha (state, getters) {
    return 10 + getters.sumMods("cha")
  },
  ac (state, getters) {
    return 10 + Math.floor((getters.dex - 10) / 2)
  },
}