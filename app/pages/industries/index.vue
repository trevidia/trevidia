<script setup lang="ts">
import { useAsyncData } from '#imports'

const { data: industries } = await useAsyncData('industries-list', () => {
  return queryCollection('industries').all()
})

useSeoMeta({
  title: 'Industries We Serve - Business Sectors | Trevidia',
  description: "Explore Trevidia's software development and consulting services specifically optimized for healthcare, finance, logistics, and retail."
})
</script>

<template>
  <div class="bg-gray-50 min-h-screen">
    <!-- Hero Section -->
    <section class="bg-[#1a1a1a] text-white py-24 px-4 relative overflow-hidden">
      <div class="max-w-7xl mx-auto relative text-center">
        <span class="text-[#FFC162] uppercase tracking-widest text-xs font-bold mb-4 block">Tailored for your sector</span>
        <h1 class="text-4xl md:text-6xl font-bold mb-6">
          Industries We <span class="text-[#FFC162]">Explore</span>
        </h1>
        <p class="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Specialized technological solutions built to solve the compliance, scale, and performance needs of your specific vertical.
        </p>
      </div>
      <div class="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
    </section>

    <!-- Industries Grid -->
    <section class="py-24 px-4 max-w-7xl mx-auto">
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8" v-if="industries && industries.length > 0">
        <NuxtLink
          v-for="industry in industries"
          :key="industry.id"
          :to="`/${industry.stem}`"
          class="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full"
        >
          <div class="w-14 h-14 bg-[#FFF9F1] rounded-2xl flex items-center justify-center text-[#FFC162] mb-6 group-hover:scale-110 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
            </svg>
          </div>
          <h2 class="text-2xl font-bold text-[#1a1a1a] mb-4 group-hover:text-[#FFC162] transition-colors">
            {{ industry.title }}
          </h2>
          <p class="text-gray-600 leading-relaxed mb-8 flex-grow">
            {{ industry.description }}
          </p>
          <div class="mt-auto pt-6 border-t border-gray-50 flex items-center text-sm font-bold text-[#EA580C] uppercase tracking-wide group-hover:text-[#FFC162] transition-colors">
            View details &rarr;
          </div>
        </NuxtLink>
      </div>
      <div v-else class="text-center py-20 text-gray-500">
        Loading industries...
      </div>
    </section>
  </div>
</template>