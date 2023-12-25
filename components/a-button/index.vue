<script lang="ts">
export default {
  name: 'a-button'
}
</script>

<template>
  <button class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>