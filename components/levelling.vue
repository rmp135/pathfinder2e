<template>
  <div>
    <div>Current Level: {{level}}</div>
    <div>
      <a>Level 1</a>
      <div>Attribute Boosts</div>
      <select :value="levelBoosts[0][0]" :class="{warning: isInvalid(0,0)}" @change="setLevelBoost({ index: 0, level: 0, value: $event.target.value })">
        <option v-for="boost in allStats" :value="boost">{{boost.toUpperCase()}}</option>
      </select>
      <select :value="levelBoosts[0][1]" :class="{warning: isInvalid(0,1)}" @change="setLevelBoost({ index: 1, level: 0, value: $event.target.value })">
        <option v-for="boost in allStats" :value="boost">{{boost.toUpperCase()}}</option>
      </select>
      <select :value="levelBoosts[0][2]" :class="{warning: isInvalid(0,2)}" @change="setLevelBoost({ index: 2, level: 0, value: $event.target.value })">
        <option v-for="boost in allStats" :value="boost">{{boost.toUpperCase()}}</option>
      </select>
      <select :value="levelBoosts[0][3]" :class="{warning: isInvalid(0,3)}" @change="setLevelBoost({ index: 3, level: 0, value: $event.target.value })">
        <option v-for="boost in allStats" :value="boost">{{boost.toUpperCase()}}</option>
      </select>
    </div>
    <div v-if="level >= 5">
      <a>Level 5</a>
      <div>Attribute Boosts</div>
      <select :value="levelBoosts[1][0]" :class="{warning: isInvalid(1,0)}" @change="setLevelBoost({ index: 0, level: 1, value: $event.target.value })">
        <option v-for="boost in allStats" :value="boost">{{boost.toUpperCase()}}</option>
      </select>
      <select :value="levelBoosts[1][1]" :class="{warning: isInvalid(1,1)}" @change="setLevelBoost({ index: 1, level: 1, value: $event.target.value })">
        <option v-for="boost in allStats" :value="boost">{{boost.toUpperCase()}}</option>
      </select>
      <select :value="levelBoosts[2][2]" :class="{warning: isInvalid(1,2)}" @change="setLevelBoost({ index: 2, level: 1, value: $event.target.value })">
        <option v-for="boost in allStats" :value="boost">{{boost.toUpperCase()}}</option>
      </select>
      <select :value="levelBoosts[3][3]" :class="{warning: isInvalid(1,3)}" @change="setLevelBoost({ index: 3, level: 1, value: $event.target.value })">
        <option v-for="boost in allStats" :value="boost">{{boost.toUpperCase()}}</option>
      </select>
    </div>
  </div>
</template>
<script>
  import { mapState, mapGetters, mapMutations } from "vuex"
  export default {
    data: () => {
      return {
        allStats: ["str", "dex", "con", "int", "wis", "cha"]
      }
    },
    computed: {
      ...mapState(["level", "levelBoosts", "race", "humanBoost", "raceBoost"]),
      ...mapGetters(["str", "dex", "currentRace"])
    },
    methods: {
      isInvalid (level, index, value) {
        return this.levelBoosts[level].some((l, i) => l == this.levelBoosts[level][index] && i != index)
      },
      ...mapMutations({
        setLevelBoost: "SET_LEVEL_BOOST",
        setHumanBoost: "SET_HUMAN_BOOST",
        setRaceBoost: "SET_RACE_BOOST"
      })
    }
  }
</script>