<script setup lang="ts">
import { useRoute, useAsyncData } from '#imports'

const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  const stem = route.path.replace(/^\/+|\/+$/g, '')
  return queryCollection('technologies').where('stem', '=', stem).first()
})

useSeoMeta({
  title: () => `${page.value?.title || 'Technology'} Stack | Trevidia`,
  description: () => page.value?.description || 'Learn how Trevidia leverages powerful technologies for business growth.'
})
</script>

<template>
  <div class="bg-gray-50 min-h-screen">
    <div v-if="page">
      <section class="bg-[#1a1a1a] text-white pt-24 pb-32 px-4 relative overflow-hidden">
        <div class="max-w-4xl mx-auto relative text-center">
          <NuxtLink to="/technologies" class="inline-flex items-center gap-2 text-[#FFC162] hover:text-white transition-colors text-sm font-bold uppercase tracking-wider mb-8">
            &larr; All Technologies
          </NuxtLink>

          <h1 class="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 leading-tight">
            {{ page.title }}
          </h1>

          <p class="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {{ page.description }}
          </p>
        </div>
        <div class="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"/>
      </section>

      <section class="max-w-5xl mx-auto px-4 -mt-16 relative pb-24">
        <div class="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-xl border border-gray-100">
          <div class="grid md:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 class="text-3xl font-bold text-[#1a1a1a] mb-6">Why we use {{ page.title }}</h2>
              <ul class="space-y-4">
                <li v-for="benefit in page.benefits" :key="benefit" class="flex items-start gap-4">
                  <div class="w-6 h-6 rounded-full bg-[#FFF9F1] flex items-center justify-center flex-shrink-0 mt-1">
                    <svg class="w-4 h-4 text-[#FFC162]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span class="text-gray-700 leading-relaxed">{{ benefit }}</span>
                </li>
              </ul>
            </div>
            <div class="bg-gray-50 p-8 rounded-3xl border border-gray-100">
              <h3 class="text-xl font-bold mb-4">Leverage this stack</h3>
              <p class="text-gray-600 text-sm mb-6">Our engineers are experts in {{ page.title.toLowerCase() }}. Let's discuss your next project.</p>
              <NuxtLink to="/contact" class="flex w-full justify-center items-center py-4 bg-[#FFC162] text-[#1a1a1a] font-bold rounded-xl shadow-[0_4px_14px_0_rgba(255,193,98,0.39)] hover:shadow-[0_6px_20px_rgba(255,193,98,0.23)] hover:bg-[#ea580c] hover:text-white transition-all">
                Talk to an Expert
              </NuxtLink>
            </div>
          </div>

          <hr class="border-gray-100 mb-16" >

          <div>
            <h2 class="text-3xl font-bold text-[#1a1a1a] mb-10 text-center">Technical Strengths</h2>
            <div class="grid md:grid-cols-3 gap-8">
              <div v-for="feature in page.features" :key="feature.title" class="p-6 border border-gray-100 rounded-3xl hover:border-[#FFC162] transition-colors bg-white hover:shadow-md">
                <div class="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center mb-5 text-[#EA580C]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                  </svg>
                </div>
                <h3 class="font-bold text-lg mb-3">{{ feature.title }}</h3>
                <p class="text-gray-500 text-sm leading-relaxed">{{ feature.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    
    <div v-else class="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h2 class="text-4xl font-bold text-[#1a1a1a] mb-4">Technology Not Found</h2>
      <NuxtLink to="/technologies" class="px-8 py-4 bg-[#FFC162] text-[#1a1a1a] font-bold rounded-xl shadow-lg mt-6">
        Back to Technologies
      </NuxtLink>
    </div>
  </div>
</template>
