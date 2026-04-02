<template>
  <div class="min-h-screen bg-white text-gray-900">

    <!-- BREADCRUMB -->
    <div class="border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-6 py-3 flex items-center gap-2 text-xs text-gray-400">
        <NuxtLink to="/" class="hover:text-gray-900">Home</NuxtLink>
        <span>/</span>
        <a href="#" class="hover:text-gray-900">Products</a>
        <span>/</span>
        <span class="text-gray-900 font-medium">PC Components</span>
      </div>
    </div>

    <!-- HERO -->
    <section class="relative overflow-hidden h-[280px]">
      <img
        src="/img/photo-1555680202.jpg"
        alt="PC Components"
        class="absolute inset-0 w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-transparent"></div>
      <div class="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
        <p class="text-blue-600 text-xs font-bold tracking-[0.3em] uppercase mb-3">Browse</p>
        <h1 class="text-5xl font-black uppercase tracking-tight text-gray-900 mb-2">PC Components</h1>
        <p class="text-gray-500 text-sm">{{ pcProducts.length }} products</p>
      </div>
    </section>

    <!-- CATEGORY FILTERS -->
    <section class="border-b border-gray-200 bg-gray-50">
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex gap-1 overflow-x-auto py-1">
          <button
            class="shrink-0 px-4 py-3 text-xs font-bold uppercase tracking-widest border-b-2"
            :class="activeCategory === 'all' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-400 hover:text-gray-900'"
            @click="activeCategory = 'all'"
          >
            All
          </button>
          <button
            v-for="cat in pcCategories"
            :key="cat.slug"
            class="shrink-0 px-4 py-3 text-xs font-bold uppercase tracking-widest border-b-2"
            :class="activeCategory === cat.slug ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-400 hover:text-gray-900'"
            @click="activeCategory = cat.slug"
          >
            {{ cat.label }}
          </button>
        </div>
      </div>
    </section>

    <!-- CATEGORY CARDS -->
    <section class="max-w-7xl mx-auto px-6 py-12">
      <h2 class="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-6">Shop by Category</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <a
          v-for="cat in pcCategories"
          :key="cat.slug"
          href="#"
          class="group rounded-xl overflow-hidden border border-gray-200 hover:border-blue-500 hover:shadow-md bg-white"
        >
          <img :src="cat.img" :alt="cat.label" class="w-full h-32 object-cover" />
          <div class="p-4">
            <p class="text-sm font-bold text-gray-900">{{ cat.label }}</p>
            <p class="text-xs text-gray-400 mt-0.5">{{ cat.count }} products</p>
          </div>
        </a>
      </div>
    </section>

    <!-- DIVIDER -->
    <div class="max-w-7xl mx-auto px-6">
      <div class="border-t border-gray-200"></div>
    </div>

    <!-- PRODUCTS GRID -->
    <section class="max-w-7xl mx-auto px-6 py-12">
      <div class="flex justify-between items-center mb-8">
        <h2 class="text-xs font-bold uppercase tracking-[0.3em] text-gray-400">
          Featured Products
        </h2>
        <select class="bg-white border border-gray-200 text-gray-600 text-xs px-3 py-2 rounded focus:outline-none focus:border-blue-500">
          <option>Sort: Best Sellers</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Newest</option>
        </select>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div
          v-for="product in filteredProducts"
          :key="product.id"
          class="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md cursor-pointer group"
        >
          <div class="relative overflow-hidden">
            <img
              :src="product.img"
              :alt="product.name"
              class="w-full h-48 object-cover"
            />
            <span
              v-if="product.badge"
              class="absolute top-3 left-3 text-[10px] font-bold uppercase px-2 py-1 rounded"
              :class="{
                'bg-gray-900 text-white': product.badge === 'Best Seller' || product.badge === 'New',
                'bg-red-500 text-white': product.badge === 'Sale',
              }"
            >
              {{ product.badge }}
            </span>
          </div>

          <div class="p-4">
            <p class="text-[10px] text-gray-400 uppercase tracking-widest mb-1">{{ product.category }}</p>
            <p class="text-sm font-semibold text-gray-900 leading-tight mb-3">{{ product.name }}</p>

            <!-- Stars -->
            <div class="flex items-center gap-1 mb-3">
              <div class="flex gap-0.5">
                <span
                  v-for="i in 5"
                  :key="i"
                  class="text-xs"
                  :class="i <= product.rating ? 'text-yellow-400' : 'text-gray-300'"
                >★</span>
              </div>
              <span class="text-[10px] text-gray-400">({{ product.reviews.toLocaleString() }})</span>
            </div>

            <div class="flex items-center justify-between">
              <p class="text-gray-900 font-bold">${{ product.price.toFixed(2) }}</p>
              <button class="text-[10px] font-bold uppercase tracking-widest text-white bg-gray-900 hover:bg-blue-600 px-3 py-1.5 rounded">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- BOTTOM BANNER -->
    <section class="max-w-7xl mx-auto px-6 pb-16">
      <div class="relative overflow-hidden rounded-2xl">
        <img src="/img/photo-1542751371.jpg" alt="iCUE LINK" class="w-full h-[220px] object-cover" />
        <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent flex items-center px-10">
          <div>
            <p class="text-blue-400 text-xs font-bold tracking-[0.3em] uppercase mb-2">Ecosystem</p>
            <h3 class="text-3xl font-black uppercase text-white mb-4">iCUE LINK</h3>
            <button class="bg-white text-gray-900 font-bold px-6 py-2.5 text-xs tracking-widest uppercase hover:bg-blue-600 hover:text-white">
              Explore Now
            </button>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { pcCategories, pcProducts } from '~/data/products/pc_components_data'

useHead({ title: 'PC Components — CORSAIR' })

const activeCategory = ref('all')

const filteredProducts = computed(() => {
  if (activeCategory.value === 'all') return pcProducts
  const cat = pcCategories.find(c => c.slug === activeCategory.value)
  if (!cat) return pcProducts
  return pcProducts.filter(p => p.category === cat.label)
})
</script>
