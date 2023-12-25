<script setup lang="ts">
interface ICharacter {
  id: number,
  name: string,
  image: string,
  status: string,
  species: string,
  origin: {
    name: string,
  }
  location: {
    name: string
  }

}

interface Props {
  characters: ICharacter[],
}

withDefaults(defineProps<Props>(), {})
</script>

<template>
    <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 max-w-screen mx-6">
      <div v-for="character in characters" :key="character.id" class="character-container">
        <div class="flex">
          <img :src="character.image" :alt="character.name" class="img object-cover rounded-none">
          <div class="text-white p-4 flex flex-col justify-center">
            <div class="font-semibold text-lg">{{ character.name }}</div>
            <div class="text-gray-300 flex items-center gap-2">
              <div class="status-indicator" :class="{ 'status-dead': character.status === 'Dead', 'status-alive': character.status === 'Alive' }"></div>
              {{ character.status }} - {{ character.species }}</div>
            <div class="mt-2">
              <p class="text-gray-500">Last known location:</p>
              <div class="text-gray-300">{{ character.origin.name }}</div>
            </div>
            <div class="mt-2">
              <p class="text-gray-500">Character location:</p>
              <div class="text-gray-300">{{ character.location.name }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<style scoped>
.character-container {
  width: 100%;
  max-width: 600px;
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