<script lang="ts">
export default {
  name: 'app-header'
}
</script>
<template>
  <div class="w-full bg-color-1 p-4">
    <nav>
      <ul class="flex gap-4 justify-center text-2xl text-white font-bold">
        <li>
          <NuxtLink to="/"
                    class="hover:bg-white hover:bg-opacity-30 hover:border-white transition duration-300 ease-in-out border-transparent p-4">
            Home
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
              class="hover:bg-white hover:bg-opacity-30 hover:border-white transition duration-300 ease-in-out border-transparent p-4">
            Characters

          </NuxtLink>
        </li>
        <li>
          <NuxtLink
              class="hover:bg-white hover:bg-opacity-30 hover:border-white transition duration-300 ease-in-out border-transparent p-4">
            Locations

          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">

</script>


<style scoped>

</style>