<template>
  <div class="absolute left-0 right-0 top-full bg-[#1c1c1c] border-t-2 border-yellow-400 shadow-2xl z-50">
    <div class="max-w-7xl mx-auto px-6 py-8 grid gap-8" :style="`grid-template-columns: repeat(${columns.length}, minmax(0, 1fr))`">
      <div v-for="col in columns" :key="col.title">
        <!-- заголовок: ссылка если есть href, иначе просто текст -->
        <NuxtLink
          v-if="col.href"
          :to="col.href"
          class="text-white font-bold text-xs uppercase tracking-widest mb-4 hover:text-yellow-400 block"
        >
          {{ col.title }}
        </NuxtLink>
        <p v-else class="text-white font-bold text-xs uppercase tracking-widest mb-4">
          {{ col.title }}
        </p>

        <!-- обычный список ссылок -->
        <ul v-if="col.items" class="space-y-2">
          <li v-for="item in col.items" :key="item.label">
            <NuxtLink
              :to="item.href"
              class="text-gray-400 text-sm hover:text-white flex items-center gap-2"
            >
              {{ item.label }}
              <span
                v-if="item.badge"
                class="bg-yellow-400 text-black text-[10px] font-bold px-1.5 py-0.5 rounded"
              >
                {{ item.badge }}
              </span>
            </NuxtLink>
          </li>
        </ul>

        <!-- описание + CTA -->
        <template v-if="col.description">
          <p class="text-gray-400 text-sm leading-relaxed mb-4">{{ col.description }}</p>
          <NuxtLink
            v-if="col.cta"
            :to="col.cta.href"
            class="text-yellow-400 text-xs font-bold uppercase tracking-widest hover:text-yellow-300 flex items-center gap-1"
          >
            {{ col.cta.label }} &rsaquo;
          </NuxtLink>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { MenuColumn } from '~/data/menu/product_menu_data'

defineProps<{
  columns: MenuColumn[]
}>()
</script>
