<script setup lang="ts">
import { useAsyncData } from '#imports'

const { data: posts } = await useAsyncData('blog-list', () => {
  return queryCollection('blog').order('date', 'DESC').all()
})

useSeoMeta({
  title: 'Blog - Insights on Software Development & Business | Trevidia',
  description: 'Read the latest insights from Trevidia on custom software development, technical debt, and scaling businesses in the UK.'
})
</script>

<template>
  <div class="bg-white min-h-screen">
    <!-- Hero Section -->
    <section class="bg-[#1a1a1a] text-white py-24 px-4 relative overflow-hidden">
      <div class="max-w-7xl mx-auto relative text-center">
        <span class="text-[#FFC162] uppercase tracking-widest text-xs font-bold mb-4 block">The Trevidia Blog</span>
        <h1 class="text-4xl md:text-6xl font-bold mb-6">
          Insights & <span class="text-[#FFC162]">Perspectives</span>
        </h1>
        <p class="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Expert analysis on custom software, digital transformation, and technical strategy for growing UK businesses.
        </p>
      </div>
      <div class="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
    </section>

    <!-- Blog List -->
    <section class="py-24 px-4 max-w-7xl mx-auto">
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8" v-if="posts && posts.length > 0">
        <NuxtLink
          v-for="post in posts"
          :key="post.path"
          :to="post.path"
          class="group flex flex-col bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        >
          <!-- Image Container -->
          <div class="relative h-64 overflow-hidden bg-gray-100">
            <img 
              :src="post.image || '/images/blog/custom-software.jpg'" 
              :alt="post.title"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div class="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#1a1a1a] uppercase tracking-wide">
              {{ post.category }}
            </div>
          </div>
          
          <!-- Content Container -->
          <div class="p-8 flex flex-col flex-grow">
            <div class="flex items-center gap-4 text-sm text-gray-400 font-medium mb-4">
              <span>{{ new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) }}</span>
              <span class="w-1 h-1 rounded-full bg-gray-300"></span>
              <span>{{ post.readTime }}</span>
            </div>
            
            <h2 class="text-2xl font-bold text-[#1a1a1a] mb-4 group-hover:text-[#FFC162] transition-colors line-clamp-2">
              {{ post.title }}
            </h2>
            
            <p class="text-gray-600 mb-6 line-clamp-3 leading-relaxed flex-grow">
              {{ post.description }}
            </p>
            
            <div class="flex items-center justify-between mt-auto pt-6 border-t border-gray-100">
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-full bg-[#FFF9F1] border border-[#FFC162]/30 flex items-center justify-center text-[#FFC162] font-bold text-xs uppercase">
                  {{ post.author ? post.author.charAt(0) : 'T' }}
                </div>
                <span class="text-sm font-semibold text-gray-800">{{ post.author || 'Trevidia Team' }}</span>
              </div>
              <span class="text-[#FFC162] font-bold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Read Article &rarr;
              </span>
            </div>
          </div>
        </NuxtLink>
      </div>
      <div v-else class="text-center py-20 text-gray-500 text-lg border-2 border-dashed border-gray-200 rounded-3xl">
        No articles published yet. Check back soon!
      </div>
    </section>
  </div>
</template>