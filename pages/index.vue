<style>
  #app {
    height: 100%;
    user-select: none;
  }
</style>
<template>
<div>
  <creation />
  <skills />
  <levelling />
  <ability-scores />
</div>
</template>
<script>
  import abilityScores from '~/components/ability-scores';
  import levelling from '~/components/levelling'
  import creation from '~/components/creation'
  import skills from '~/components/skills'
  import { mapState, mapGetters } from 'vuex'
  export default {
    data: () => ({ }),
    methods: { },
    computed: { },
    components: {
      abilityScores,
      levelling,
      creation,
      skills
    }
  };
</script>