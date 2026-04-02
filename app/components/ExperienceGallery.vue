<template>
  <section class="bg-gray-50 py-16">
    <div class="max-w-7xl mx-auto px-6">
      <p class="text-center text-xs font-semibold tracking-[0.3em] uppercase text-blue-600 mb-2">Gallery</p>
      <h2 class="text-center text-3xl font-bold mb-10">The Experience</h2>

      <div class="grid md:grid-cols-2 gap-4">
        <img
          v-for="(img, i) in images"
          :key="i"
          :src="img"
          :alt="`Experience ${i + 1}`"
          class="w-full h-[240px] object-cover rounded-xl"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const images = [
  '/img/photo-1542751371.jpg',
  '/img/photo-1587829741301.jpg',
  '/img/photo-1591488320449.jpg',
  '/img/photo-1562976540.jpg',
]
</script>
