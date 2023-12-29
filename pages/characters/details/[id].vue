<script setup lang="ts">
const route = useRoute()


const store = useCharacterStore();
const {episodeCharacters} = storeToRefs(store)

store.GET_CHARACTER_EPISODES(route.params.id)

</script>

<template>
  <episode :episodes="episodeCharacters"/>

</template>

<style scoped>

</style>