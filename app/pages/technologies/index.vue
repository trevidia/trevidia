<script setup lang="ts">
import { useAsyncData } from '#imports'

const { data: technologies } = await useAsyncData('technologies-list', () => {
  return queryCollection('technologies').all()
})

useSeoMeta({
  title: 'Our Tech Stack - Technologies & Frameworks | Trevidia',
  description: 'Explore the modern technology stacks Trevidia uses to build scalable, secure, and fast digital products.'
})
</script>

<template>
  <div class="bg-gray-50 min-h-screen">
    <!-- Hero Section -->
    <section class="bg-[#1a1a1a] text-white py-24 px-4 relative overflow-hidden">
      <div class="max-w-7xl mx-auto relative text-center">
        <span class="text-[#FFC162] uppercase tracking-widest text-xs font-bold mb-4 block">Built for performance</span>
        <h1 class="text-4xl md:text-6xl font-bold mb-6">
          <span class="text-[#FFC162]">Technologies</span> We Use
        </h1>
        <p class="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          We leverage enterprise-grade frameworks, robust languages, and modern cloud infrastructure to build systems that scale.
        </p>
      </div>
      <div class="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"/>
    </section>

    <!-- Tech Grid -->
    <section class="py-24 px-4 max-w-7xl mx-auto">
      <div v-if="technologies && technologies.length > 0" class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <NuxtLink
          v-for="tech in technologies"
          :key="tech.id"
          :to="`/${tech.stem}`"
          class="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full"
        >
          <div class="w-14 h-14 bg-[#FFF9F1] rounded-2xl flex items-center justify-center text-[#FFC162] mb-6 group-hover:scale-110 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
            </svg>
          </div>
          <h2 class="text-2xl font-bold text-[#1a1a1a] mb-4 group-hover:text-[#FFC162] transition-colors">
            {{ tech.title }}
          </h2>
          <p class="text-gray-600 leading-relaxed mb-8 flex-grow">
            {{ tech.description }}
          </p>
          <div class="mt-auto pt-6 border-t border-gray-50 flex items-center text-sm font-bold text-[#EA580C] uppercase tracking-wide group-hover:text-[#FFC162] transition-colors">
            Learn more &rarr;
          </div>
        </NuxtLink>
      </div>
      <div v-else class="text-center py-20 text-gray-500">
        Loading technologies...
      </div>
    </section>
  </div>
</template>