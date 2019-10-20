<template>
  <div>
    <h2>Ability Scores</h2>
    <div>Str: {{str}} ({{calcModifier(str)}})</div>
    <div>Dex: {{dex}} ({{calcModifier(dex)}})</div>
    <div>Con: {{con}} ({{calcModifier(con)}})</div>
    <div>Int: {{int}} ({{calcModifier(int)}})</div>
    <div>Wis: {{wis}} ({{calcModifier(wis)}})</div>
    <div>Cha: {{cha}} ({{calcModifier(cha)}})</div>
    <h2>Class DC</h2>
    <div>{{classDC}}</div>
  </div>
</template>
<script>
  import { mapState, mapGetters } from "vuex"
  export default {
    computed: {
      classDC () {
        const mod = this.calcModifier(this[this.currentClass.keyAbility])
        return 10 + mod + this.level + 2
      },
      ...mapState(["level"]),
      ...mapGetters(["str", "dex", "con", "int", "wis", "cha", "ac", "currentClass"])
    },
    methods: {
      calcModifier (val) {
        return Math.floor((val - 10) / 2)
      }
    }
  }
</script>