<template>
  <footer class="bg-gray-900 text-white py-14">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid md:grid-cols-4 gap-8 mb-12">
        <div>
          <div class="text-xl font-black tracking-widest mb-4">CORSAIR</div>
          <p class="text-sm text-gray-400 leading-relaxed">High-performance gaming gear and PC components trusted by millions worldwide.</p>
        </div>
        <div v-for="col in columns" :key="col.title">
          <p class="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-4">{{ col.title }}</p>
          <ul class="space-y-2 text-sm text-gray-400">
            <li v-for="link in col.links" :key="link">
              <a href="#" class="hover:text-white">{{ link }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="border-t border-white/10 pt-6 text-sm text-gray-600">© 2026 Corsair Clone. All rights reserved.</div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const columns = [
  { title: 'Products', links: ['PC Cases', 'Keyboards', 'Memory', 'Monitors'] },
  { title: 'Support',  links: ['Contact Us', 'Warranty', 'Returns', 'FAQ'] },
  { title: 'Company',  links: ['About', 'Careers', 'Press', 'Blog'] },
]
</script>
