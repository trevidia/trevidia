<script setup lang="ts">
import { useAsyncData } from '#imports'

const { data: services } = await useAsyncData('services-list', () => {
  return queryCollection('services').all()
})

useSeoMeta({
  title: 'Our Services - Software Development & Consulting | Trevidia',
  description: "Explore Trevidia's comprehensive software development, design, and technical consulting services tailored for scaling UK businesses."
})
</script>

<template>
  <div class="bg-gray-50 min-h-screen">
    <!-- Hero Section -->
    <section class="bg-[#1a1a1a] text-white py-24 px-4 relative overflow-hidden">
      <div class="max-w-7xl mx-auto relative text-center">
        <span class="text-[#FFC162] uppercase tracking-widest text-xs font-bold mb-4 block">Expertise you can trust</span>
        <h1 class="text-4xl md:text-6xl font-bold mb-6">
          Our <span class="text-[#FFC162]">Services</span>
        </h1>
        <p class="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          From full-scale software architecture to specialized integrations. We don't just write code, we deliver business value.
        </p>
      </div>
      <div class="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
    </section>

    <!-- Services Grid -->
    <section class="py-24 px-4 max-w-7xl mx-auto">
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8" v-if="services && services.length > 0">
        <NuxtLink
          v-for="service in services"
          :key="service.id"
          :to="`/${service.stem}`"
          class="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full"
        >
          <div class="w-14 h-14 bg-[#FFF9F1] rounded-2xl flex items-center justify-center text-[#FFC162] mb-6 group-hover:scale-110 transition-transform">
            <!-- Icon Placeholder -->
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
          </div>
          <h2 class="text-2xl font-bold text-[#1a1a1a] mb-4 group-hover:text-[#FFC162] transition-colors">
            {{ service.title }}
          </h2>
          <p class="text-gray-600 leading-relaxed mb-8 flex-grow">
            {{ service.description }}
          </p>
          <div class="mt-auto pt-6 border-t border-gray-50 flex items-center text-sm font-bold text-[#EA580C] uppercase tracking-wide group-hover:text-[#FFC162] transition-colors">
            Learn more &rarr;
          </div>
        </NuxtLink>
      </div>
      <div v-else class="text-center py-20 text-gray-500">
        Loading services...
      </div>
    </section>
  </div>
</template>