<style>
  th {
    text-align: center;
  }
  .skillblock {
    width: 18px;
    height: 18px;
    border: 1px solid grey;
  }
  .skillblock.filled {
    background-color: grey;
  }
</style>
<template>
<div>
  <h2>Skills</h2>
  <table>
    <thead>
      <tr>
        <th>Skill</th>
        <th>Bonus</th>
        <th>Rank</th>
        <th>T</th>
        <th>E</th>
        <th>M</th>
        <th>L</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="skill in skills">
        <td>{{skill.name}}</td>
        <td>{{getSkillBonus(skill)}}</td>
        <td>{{skillRank(skill.name)}}</td>
        <td class="skillblock" :class="{filled: isFilled(skill, 1)}"></td>
        <td class="skillblock"></td>
        <td class="skillblock"></td>
        <td class="skillblock"></td>
      </tr>
    </tbody>
  </table>
  <div v-for="skill in loreProfs">
    <a>Lore - </a>
    <!-- <a>{{getSkillBonus({ name: "Lore", level: skill.level })}}</a> -->
    <input />
    <select>
      <option>Untrained</option>
      <option>Trained</option>
      <option>Expert</option>
      <option>Master</option>
      <option>Legendary</option>
    </select>
  </div>
</div>
</template>
<script>
  import skills from 'assets/skills.js';
  import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
  export default {
    data: () => ({
      allStats: ["str", "dex", "con", "int", "wis", "cha"],
      skills
    }),
    computed: {
      ...mapState([
        "loreProfs",
        "level"
      ]),
      ...mapGetters([
        "allMods",
        "sumMods",
        "skillRank"
      ])
    },
    methods: {
      isFilled (skill, level) {
        const bonus = this.skillRank(skill.name)
        return  bonus > 0 && bonus <= level
      },
      getSkillBonus (skill) {
        const skillMod = skills.find(s => s.name === skill.name)
        let modifier = Math.floor((this.sumMods(skillMod.skill)) / 2) 
        modifier += this.level + this.skillRank(skill.name) * 2
        return modifier
      },
      ...mapMutations({
        setSkill: "SET_SKILL"
      })
    },
    components: {
    }
  };
</script>