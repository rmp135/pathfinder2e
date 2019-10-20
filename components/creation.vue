<template>
<div>
  <h2>Initial Character</h2>
  <div>
    <div>Heritage</div>
    <select @change="onChangeRace($event.target.value)">
      <option v-for="r in races" :value="r.name">{{r.name}}</option>
    </select>
    <select @change="setHeritage($event.target.value)">
      <option v-for="h in heritages" :value="h.name" :selected="h.name == heritage">{{h.name}}</option>
    </select>
    <div>Boosts: {{raceBoosts}}</div>
    <div>Flaw: {{currentRace.flaw.toUpperCase()}}</div>
    <div>
      <div>Heritage Attribute Boost</div>
      <select @change="setRaceBoost($event.target.value)":class="{warning: isHeritageBoostInvalid}">
        <option v-for="boost in allStats" :value="boost">{{boost.toUpperCase()}}</option>
      </select>
      <select v-if="race == 'Human'" @change="setHumanBoost($event.target.value)":class="{warning: isHumanBoostInvalid }">
        <option v-for="boost in allStats" :value="boost">{{boost.toUpperCase()}}</option>
      </select>
    </div>
  </div>
  <div>
    <div>
      <div>Background</div>
      <select :value="background" @change="onChangeBackground($event.target.value)">
        <option v-for="background in backgrounds" :value="background.name">{{background.name}}</option>
      </select>
      <select v-model="bgBoost1">
        <option v-for="(boost, index) in currentBackground.boosts" :value="boost">{{boost.toUpperCase()}}</option>
      </select>
      <select v-model="bgBoost2" :class="{warning:isSecondBGBoostInvalid}">
        <option v-for="boost in allStats" :value="boost">{{boost.toUpperCase()}}</option>
      </select>
    </div>
  </div>
  <div>
    <div>Class</div>
    <select :value="clas" @change="onChangeClass($event.target.value)">
      <option v-for="c in classes" :value="c.name">{{c.name}}</option>
    </select>
    <select v-if="currentClass.name == 'Fighter'" :value="classSkill" @change="onChangeClassSkill($event.target.value)">
      <option v-for="c in ['acrobatics', 'athletics']" :value="c">{{c}}</option>
    </select>
    <select v-if="currentClass.name == 'Rogue'" :value="rogueRacket" @change="setRacket($event.target.value)">
      <option v-for="c in currentClass.racket" :value="c.name">{{c.name}}</option>
    </select>
    <select v-if="showKeyAbility" :value="classBoost" @change="setClassBoost($event.target.value)">
      <option v-for="c in abilityChoices" :value="c">{{c.toUpperCase()}}</option>
    </select>
    <a v-else>{{currentClass.keyAbility.toUpperCase()}}</a>
  </div>
  <div v-if="clashingSkills.length > 0">
    <div>There are clashing skills ({{clashingSkills[0]}}). Select a new class skill.</div>
    <select @change="onChangeClassSkillOverride(0, $event.target.value)">
      <option v-for="s in clashingSkillChoices" :value="s">{{s}}</option>
    </select>
  </div>
</div>
</template>
<script>
  import ancestories from 'assets/ancestories.js';
  import classes from 'assets/classes.js';
  import backgrounds from 'assets/backgrounds.js';
  import skills from 'assets/skills.js';
  import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
  export default {
    data: () => ({
      races: ancestories,
      classes,
      backgrounds,
      allStats: ["str", "dex", "con", "int", "wis", "cha"]
    }),
    methods: {
      calcModifier (val) {
        return Math.floor((val - 10) / 2)
      }
    },
    computed: {
      clashingSkills () {
        // When a class has the same skill as the background, the player can choose another.
        const bgSkills = this.currentBackground.skills
        const classSkills = this.currentClass.skills.concat(this.classSkill)
        return classSkills.filter(s => bgSkills.includes(s))
      },
      clashingSkillChoices () {
        return skills.map(s => s.name).filter(s => !this.clashingSkills.includes(s.toLowerCase()))
      },
      abilityChoices () {
        if (this.currentClass.name == "Rogue" && this.rogueRacket != "Thief") {
          return ["dex", this.currentRacket.ability]
        }
        return this.currentClass.keyAbility
      },
      currentRacket () {
        return this.currentClass.racket.find(r => r.name == this.rogueRacket)
      },
      showKeyAbility () {
        return this.abilityChoices.length == 2
      },
      isHeritageBoostInvalid () {
        return this.currentRace.boosts.includes(this.raceBoost.toLowerCase())
      },
      isSecondBGBoostInvalid () {
        return this.backgroundBoosts[0].toLowerCase() == this.backgroundBoosts[1].toLowerCase()
      },
      isHumanBoostInvalid () {
        return this.humanBoost.toLowerCase() == this.raceBoost.toLowerCase()
      },
      raceBoosts () {
        return this.currentRace.boosts.map(s => s.toUpperCase()).join(", ")
      },
      heritages () {
        return this.currentRace.heritages
      },
      hp () {
        let points = 0;
        points += this.currentRace.hp
        points += this.currentClass.hp
        points += this.calcModifier(this.con)
        return points;
      },
      perception () {
        return this.level + this.calcModifier(this.wis) + this.sumMods("perception")
      },
      bgBoost1: {
        get () {
          return this.backgroundBoosts[0]
        },
        set (value) {
          this.$store.commit("SET_BACKGROUND_BOOST", { index: 0, value })
        }
      },
      bgBoost2: {
        get () {
          return this.backgroundBoosts[1]
        },
        set (value) {
          this.$store.commit("SET_BACKGROUND_BOOST", { index: 1, value })
        }
      },
      ...mapState([
        "backgroundBoosts", 
        "classBoost", 
        "classSkill",
        "clas",
        "race",
        "background",
        "heritage",
        "humanBoost",
        "rogueRacket",
        "raceBoost",
        "classSkillOverride"
      ]),
      ...mapGetters([
        "allMods", 
        "sumMods", 
        "currentBackground", 
        "currentRace", 
        "currentClass"
      ])
    },
    methods: {
      onChangeClassSkillOverride (index, val) {
          this.setClassSkillOverride({ index, val })
      },
      resetSkillOverrides () {
        if (this.clashingSkills.length > 0) {
          let s = []
          for (let i = 0; i < this.clashingSkills.length; i++) {
            s.push(this.clashingSkillChoices[0])
          }
          s.length = this.clashingSkills.length
          this.setClassSkillOverride({ val: s })
        } else if (this.classSkillOverride.length != 0) {
          this.setClassSkillOverride({ val: [] })
        }
      },
      onChangeRace (race) {
        this.setRace(race)
      },
      onChangeBackground (background) {
        this.setBackground(background)
        this.setBackgroundBoost( { index: 0, value: this.currentBackground.boosts[0] })
        this.resetSkillOverrides()
      },
      onChangeClassSkill (skill) {
        this.setClassSkill(skill)
        this.resetSkillOverrides()
      },
      onChangeClass (clas) {
        this.setClass(clas)
        if (clas == "Rogue") {
          this.setRacket("Ruffian")
          this.setClassBoost("dex")
        } else if (["Champion", "Fighter", "Monk", "Ranger"].includes(clas)) {
          this.setClassBoost("str")
        }
        if (clas == "Fighter") {
          this.setClassSkill("acrobatics")
        } else {
          this.setClassSkill(null)
        }
        this.resetSkillOverrides()
      },
      ...mapMutations({
        setBackgroundBoost: "SET_BACKGROUND_BOOST",
        setClassBoost: "SET_CLASS_BOOST",
        setClassSkill: "SET_CLASS_SKILL",
        setRace: "SET_RACE",
        setHeritage: "SET_HERITAGE",
        setHumanBoost: "SET_HUMAN_BOOST",
        setRacket: "SET_RACKET",
        setRaceBoost: "SET_RACE_BOOST",
        setBackground: "SET_BACKGROUND",
        setClass: "SET_CLASS",
        setClassSkillOverride: "SET_CLASS_SKILL_OVERRIDE",
        setInitialSkills: "SET_INITIAL_SKILLS"
      }),
      ...mapActions([])
    },
    components: {
    }
  };
</script>