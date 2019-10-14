<style>
  #app {
    height: 100%;
    user-select: none;
  }
</style>
<template>
<div>
  <select v-model="race">
    <option v-for="race in races" :value="race.name">{{race.name}}</option>
  </select>
  <select v-model="heritage">
    <option v-for="heritage in heritages" :value="heritage.name">{{heritage.name}}</option>
  </select>
  <select v-model="clas">
    <option v-for="c in classes" :value="c.name">{{c.name}}</option>
  </select>
  <select v-model="attrBoost1">
    <option>STR</option>
    <option>DEX</option>
    <option>CON</option>
    <option>INT</option>
    <option>WIS</option>
    <option>CHA</option>
  </select>
  <select v-if="currentRace.name == 'Human'" v-model="attrBoost2">
    <option>STR</option>
    <option>DEX</option>
    <option>CON</option>
    <option>INT</option>
    <option>WIS</option>
    <option>CHA</option>
  </select>
  <div>Str: {{str}} ({{calcModifier(str)}})</div>
  <div>Dex: {{dex}} ({{calcModifier(dex)}})</div>
  <div>Con: {{con}} ({{calcModifier(con)}})</div>
  <div>Int: {{int}} ({{calcModifier(int)}})</div>
  <div>Wis: {{wis}} ({{calcModifier(wis)}})</div>
  <div>Cha: {{cha}} ({{calcModifier(cha)}})</div>
  <div>Perception: {{perception}}</div>
  <div>HP: {{hp}}</div>
  <div>AC: {{ac}}</div>
  <div>Fortitude Save: {{saveFort}}{{saveFortSummaries.length > 0 ? "*" : "" }} {{saveFortSummaries}}</div>
  <div>Reflex Save: {{saveReflex}}{{saveReflexSummaries.length > 0 ? "*" : "" }} {{saveReflexSummaries}}</div>
  <div>Will Save: {{saveWill}}{{saveWillSummaries.length > 0 ? "*" : "" }} {{saveWillSummaries}}</div>
  <abilities></abilities>
</div>
</template>
<script>
  import ancestrories from 'assets/ancestories.js';
  import classes from 'assets/classes.js';
  import abilities from '~/components/abilities';
  import { mapState } from 'vuex'
  export default {
    data: () => ({
      level: 1,
      heroPoints: 1,
      race: "Dwarf",
      heritage: "Rock Dwarf",
      clas: "Alchemist",
      races: ancestrories,
      classes: classes,
      attrBoost1: "STR",
      attrBoost2: "STR"
    }),
    methods: {
      calcMod (type) {
        let value = 0
        const filtered = this.allMods.filter(m => m.type == type)
        value += filtered.filter(m => m.value != undefined).map(m => m.value).reduce(((a, b) => a + b), 0)
        return value
      },
      calcModifier (val) {
        return Math.floor((val - 10) / 2)
      }
    },
    watch: {
      currentRace () {
        this.heritage = this.currentRace.heritages[0].name
      }
    },
    computed: {
      allMods () {
        const mods = []
        mods.push({ type: this.attrBoost1.toLowerCase(), value: 2 })
        if (this.currentRace.name == "Human") {
          mods.push({ type: this.attrBoost2.toLowerCase(), value: 2 })
        }
        if (this.currentRace.mods != null)
          mods.push(...this.currentRace.mods)
        if (this.currentHeritage.mods != null)
          mods.push(...this.currentHeritage.mods)
        if (this.currentClass.mods != null)
          mods.push(...this.currentClass.mods)
        return mods;
      },
      heritages () {
        return this.currentRace.heritages
      },
      currentRace () {
        return ancestrories.find(a => a.name == this.race)
      },
      currentHeritage () {
        return this.currentRace.heritages.find(h => h.name == this.heritage);
      },
      currentClass () {
        return classes.find(c => c.name == this.clas);
      },
      str () {
        return 10 + this.calcMod("str")
      },
      dex () {
        return 10 + this.calcMod("dex")
      },
      con () {
        return 10 + this.calcMod("con")
      },
      int () {
        return 10 + this.calcMod("int")
      },
      wis () {
        return 10 + this.calcMod("wis")
      },
      cha () {
        return 10 + this.calcMod("cha")
      },
      ac () {
        return 10 + this.calcModifier(this.dex)
      },
      hp () {
        let points = 0;
        points += this.currentRace.hp
        points += this.currentClass.hp
        points += this.calcModifier(this.con)
        return points;
      },
      perception () {
        return this.level + this.calcModifier(this.wis) + this.calcMod("perception")
      },
      saveFort () {
        return this.calcModifier(this.con) + this.calcMod("saveFort")
      },
      saveFortSummaries () {
        return this.allMods.filter(m => m.type == "saveFort").map(m => m.summary).filter(s => s)
      },
      saveReflex () {
        return this.calcModifier(this.wis) + this.calcMod("saveReflex")
      },
      saveReflexSummaries () {
        return this.allMods.filter(m => m.type == "saveReflex").map(m => m.summary).filter(s => s)
      },
      saveWill () {
        return this.calcModifier(this.wis) + this.calcMod("saveWill")
      },
      saveWillSummaries () {
        return this.allMods.filter(m => m.type == "saveWill").map(m => m.summary).filter(s => s)
      },
    },
    components: {
      abilities
    }
  };
</script>