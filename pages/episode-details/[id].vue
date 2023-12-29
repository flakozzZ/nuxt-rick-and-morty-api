<script setup lang="ts">
import {useEpisodeStore} from "~/stores/episodes";
import {storeToRefs} from "pinia";

const store = useEpisodeStore()
const route = useRoute()

const {characters} = storeToRefs(store)


store.GET_CHARACTER_EPISODES(route.params.id);
</script>
<template>
<!--  <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 max-w-screen mx-auto">-->
<!--    <div v-for="character in characters" :key="character.id" class="character-container">-->
<!--      <div class="flex">-->
<!--        <img :src="character.image" :alt="character.name" class="img object-cover rounded-none">-->
<!--        <div class="text-white p-4 flex flex-col justify-center">-->
<!--          <div class="font-semibold text-lg">{{ character.name }}</div>-->
<!--          <div class="text-gray-300 flex items-center gap-2">-->
<!--            <div class="status-indicator" :class="{ 'status-dead': character.status === 'Dead', 'status-alive': character.status === 'Alive' }"></div>-->
<!--            {{ character.status }} - {{ character.species }}</div>-->
<!--          <div class="mt-2">-->
<!--            <p class="text-gray-500">Last known location:</p>-->
<!--            <div class="text-gray-300">{{ character.origin.name }}</div>-->
<!--          </div>-->
<!--          <div class="mt-2">-->
<!--            <p class="text-gray-500">Character location:</p>-->
<!--            <div class="text-gray-300">{{ character.location.name }}</div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
  <character :characters="characters" />
</template>

<style scoped>
.grid {
  margin-top: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); /* Добавлено для 3 колонок по умолчанию */
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
  }
}

.character-container {
  width: 600px;
  height: 220px;
  border-radius: 8px;
  overflow: hidden;
  background-color: #2c3e50;
}

.rounded-none {
  border-radius: 0;
}

.img {
  width: 229px;
  height: 220px;
}

.status-indicator {
  width: 9px;
  height: 9px;
  border-radius: 50%;
}
.status-dead {

  background: red;
}

.status-alive {

  background: green;
}
</style>






