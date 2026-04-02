<template>
  <section class="py-16">
    <div class="max-w-7xl mx-auto px-6">
      <p class="text-center text-xs font-semibold tracking-[0.3em] uppercase text-blue-600 mb-2">Learn</p>
      <h2 class="text-center text-3xl font-bold mb-10">Guides & Tips</h2>

      <div class="grid md:grid-cols-3 gap-6">
        <div
          v-for="guide in guides"
          :key="guide.title"
          class="bg-white border border-gray-200 rounded-xl overflow-hidden cursor-pointer hover:shadow-md"
        >
          <img :src="guide.img" :alt="guide.title" class="w-full h-44 object-cover" />
          <div class="p-5">
            <p class="text-xs text-blue-600 font-semibold uppercase tracking-widest mb-2">{{ guide.tag }}</p>
            <p class="font-semibold">{{ guide.title }}</p>
            <p class="text-sm text-gray-500 mt-1">{{ guide.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const guides = [
  {
    tag: 'Tutorial',
    title: 'How to build a PC from scratch',
    desc: 'Step-by-step guide for beginners',
    img: '/img/photo-1518770660439.jpg',
  },
  {
    tag: 'Guide',
    title: 'Best gaming setup in 2026',
    desc: 'Top picks for every budget',
    img: '/img/photo-1542751371.jpg',
  },
  {
    tag: 'Tips',
    title: 'When and how to upgrade RAM',
    desc: 'Boost performance without rebuilding',
    img: '/img/photo-1562976540.jpg',
  },
]
</script>
