<script setup lang="ts">
import AButton from "~/components/a-button/index.vue";

interface IEpisode {
  id: number,
  name: string,
  air_date: string,
}

interface Props {
  episodes: IEpisode[]
}

withDefaults(defineProps<Props>(), {})


</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-6 ">
    <div v-for="episode in episodes" :key="episode.id" class="p-4 bg-color-2 text-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
      <div class="block h-full">
        <div class="h-full flex flex-col justify-between">
          <div>
            <h2 class="text-xl font-semibold mb-2">{{episode.id}}. {{ episode.name }}</h2>
            <p>{{ episode.air_date }}</p>
          </div>
          <div class="mt-4">
            <NuxtLink :to="`/episode-details/${episode.id}`">
<!--              <button class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"><slot>Details</slot></button>-->
              <a-button>Details</a-button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>