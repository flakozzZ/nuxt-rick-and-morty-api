<script setup lang="ts">
import {useLocationStore} from "~/stores/locations";
import AButton from "~/components/a-button/index.vue";

const store = useLocationStore();
const {locations} = storeToRefs(store)

store.GET_ALL_LOCATIONS();
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-6">
    <div v-for="location in locations" class=" bg-color-2 p-4 rounded-md text-white">
      <div class="text-lg font-bold mb-2">{{ location.id }}. {{ location.name }}</div>
      <div class="mb-2">
        <p >Type: <span class="font-semibold">{{ location.type }}</span></p>
      </div>
      <NuxtLink :to="`locations/details/${location.id}`">
<!--        <button class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">Details</button>-->
        <a-button>Details</a-button>
      </NuxtLink>
    </div>
  </div>

</template>

<style scoped>

</style>