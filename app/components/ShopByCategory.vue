<template>
  <section class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-6">
      <p class="text-center text-xs font-semibold tracking-[0.3em] uppercase text-blue-600 mb-2">Browse</p>
      <h2 class="text-center text-3xl font-bold mb-10">Shop by Category</h2>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div
          v-for="cat in categories"
          :key="cat.label"
          class="bg-white rounded-xl overflow-hidden cursor-pointer border border-gray-200 hover:border-blue-500 hover:shadow-md"
        >
          <img :src="cat.img" :alt="cat.label" class="w-full h-36 object-cover" />
          <div class="p-4 text-center">
            <p class="text-sm font-semibold">{{ cat.label }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const categories = [
  { label: 'PC Cases',    img: '/img/photo-1591488320449.jpg' },
  { label: 'Gaming PCs',  img: '/img/photo-1587202372634.jpg' },
  { label: 'Memory',      img: '/img/photo-1562976540.jpg' },
  { label: 'Keyboards',   img: '/img/photo-1587829741301.jpg' },
]
</script>
