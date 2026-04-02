<template>
  <section class="py-16">
    <div class="max-w-7xl mx-auto px-6">
      <p class="text-center text-xs font-semibold tracking-[0.3em] uppercase text-blue-600 mb-2">Benefits</p>
      <h2 class="text-center text-3xl font-bold mb-10">Why Buy From Us</h2>

      <div class="grid md:grid-cols-4 gap-6">
        <div
          v-for="item in benefits"
          :key="item.title"
          class="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md"
        >
          <img :src="item.img" :alt="item.title" class="w-full h-36 object-cover" />
          <div class="p-5 text-center">
            <p class="font-bold mb-1">{{ item.title }}</p>
            <p class="text-sm text-gray-500">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const benefits = [
  { title: 'Exclusive Products', desc: "Products you won't find anywhere else",  img: '/img/photo-1587829741301.jpg' },
  { title: 'Fast Shipping',      desc: 'Free delivery on orders over $50',        img: '/img/photo-1591488320449.jpg' },
  { title: 'Live Support',       desc: '24/7 expert support via chat',            img: '/img/photo-1527443224154.jpg' },
  { title: 'Easy Returns',       desc: '30-day hassle-free returns',              img: '/img/photo-1562976540.jpg' },
]
</script>
