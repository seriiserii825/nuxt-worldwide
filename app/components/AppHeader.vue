<template>
  <header
    class="relative sticky top-0 z-50 bg-white border-b border-gray-200"
    @mouseleave="activeMenu = null">
    <div class="flex items-center justify-between px-6 py-4 mx-auto max-w-7xl">
      <NuxtLink to="/" class="text-2xl font-black tracking-widest text-gray-900">CORSAIR</NuxtLink>

      <nav class="hidden text-sm text-gray-500 md:flex">
        <div
          v-for="item in navItems"
          :key="item.key"
          class="relative px-4 py-1"
          @mouseenter="activeMenu = item.key">
          <a
            href="#"
            class="font-medium hover:text-gray-900"
            :class="activeMenu === item.key ? 'text-gray-900' : ''">
            {{ item.label }}
          </a>
        </div>
      </nav>

      <div class="flex text-gray-400 gap-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5 cursor-pointer hover:text-gray-900"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5 cursor-pointer hover:text-gray-900"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.6 8H19M7 13H5.4M10 21a1 1 0 1 0 2 0 1 1 0 0 0-2 0zm7 0a1 1 0 1 0 2 0 1 1 0 0 0-2 0z" />
        </svg>
      </div>
    </div>

    <DropdownMenu v-if="activeMenu === 'products'" :columns="productMenuData" />
    <DropdownMenu v-if="activeMenu === 'guides'" :columns="guidesMenuData" />
    <DropdownMenu v-if="activeMenu === 'business'" :columns="businessMenuData" />
    <DropdownMenu v-if="activeMenu === 'software'" :columns="softwareMenuData" />
  </header>
</template>

<script setup lang="ts">
import { productMenuData } from "~/data/menu/product_menu_data";
import { guidesMenuData } from "~/data/menu/guides_menu_data";
import { businessMenuData } from "~/data/menu/business_menu_data";
import { softwareMenuData } from "~/data/menu/software_menu_data";

const activeMenu = ref<string | null>(null);

const navItems = [
  { key: "products", label: "Products" },
  { key: "guides", label: "Guides" },
  { key: "business", label: "Business" },
  { key: "software", label: "Software" },
];
</script>
