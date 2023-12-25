<script setup lang="ts">
import {useLocationStore} from "~/stores/locations";

const store = useLocationStore()
const route = useRoute()
const {locationCharacters} = storeToRefs(store)

store.GET_CHARACTER_LOCATIONS(route.params.id);
</script>

<template>
  <character :characters="locationCharacters"/>
</template>

<style scoped>

</style>