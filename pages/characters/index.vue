<script setup lang="ts">
import {useCharacterStore} from "~/stores/characters";
import {storeToRefs} from "pinia";

const store = useCharacterStore();
const {allCharacters} = storeToRefs(store)

store.GET_ALL_CHARACTERS();
</script>

<template>
  <character :characters="allCharacters"/>
</template>

<style scoped>

</style>