<script setup lang="ts">
import { useRoute, useAsyncData } from '#imports'

const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('blog').path(route.path).first()
})

useSeoMeta({
  title: () => `${page.value?.title || 'Blog Post'} | Trevidia`,
  description: () => page.value?.description || 'Read the latest insights from Trevidia.',
  ogImage: () => page.value?.image || '/images/blog/custom-software.jpg'
})
</script>

<template>
  <div class="bg-gray-50 min-h-screen pb-24">
    <div v-if="page">
      <!-- Article Hero -->
      <section class="bg-[#1a1a1a] text-white pt-24 pb-32 px-4 relative overflow-hidden">
        <div class="max-w-4xl mx-auto relative">
          <NuxtLink to="/blog" class="inline-flex items-center gap-2 text-[#FFC162] hover:text-white transition-colors text-sm font-bold uppercase tracking-wider mb-8">
            &larr; Back to Blog
          </NuxtLink>
          
          <div class="flex items-center gap-4 text-sm text-gray-400 font-medium mb-6">
            <span class="uppercase tracking-wide text-[#FFC162]">{{ page.category }}</span>
            <span class="w-1 h-1 rounded-full bg-gray-500"/>
            <span>{{ new Date(page.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) }}</span>
            <span class="w-1 h-1 rounded-full bg-gray-500"/>
            <span>{{ page.readTime }}</span>
          </div>

          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            {{ page.title }}
          </h1>

          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[#FFC162] font-bold text-lg uppercase">
              {{ page.author ? page.author.charAt(0) : 'T' }}
            </div>
            <div>
              <div class="font-bold text-lg">{{ page.author || 'Trevidia Team' }}</div>
              <div class="text-sm text-gray-400">Software & Strategy Consultant</div>
            </div>
          </div>
        </div>
        <div class="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"/>
      </section>

      <!-- Main Content -->
      <section class="px-4 -mt-16 relative max-w-4xl mx-auto">
        <div class="bg-white rounded-3xl shadow-xl p-8 md:p-16 mb-12 border border-gray-100">
          
          <div class="rounded-2xl overflow-hidden mb-12 shadow-md">
            <img :src="page.image" :alt="page.title" class="w-full h-auto object-cover max-h-[500px]" >
          </div>

          <div class="custom-prose max-w-none">
            <ContentRenderer :value="page" />
          </div>
        </div>
        
        <!-- Tags & Share -->
        <div class="flex flex-col md:flex-row md:items-center justify-between border-t border-gray-200 pt-8 gap-6">
          <div class="flex flex-wrap gap-3">
            <span class="text-sm font-bold text-gray-500 mt-2 mr-2">Tags:</span>
            <span v-for="tag in page.tags" :key="tag" class="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-[#FFC162] hover:text-[#1a1a1a] transition-colors cursor-pointer">
              {{ tag }}
            </span>
          </div>
        </div>
      </section>
    </div>
    
    <!-- Not Found -->
    <div v-else class="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h2 class="text-4xl font-bold text-[#1a1a1a] mb-4">Article Not Found</h2>
      <p class="text-gray-500 mb-8 max-w-lg mx-auto">The article you're looking for doesn't exist or has been moved. Explore our latest insights on the blog.</p>
      <NuxtLink to="/blog" class="px-8 py-4 bg-[#FFC162] text-[#1a1a1a] font-bold rounded-xl shadow-lg hover:bg-black hover:text-white transition-all">
        Back to Blog
      </NuxtLink>
    </div>
  </div>
</template>

<style>
@reference "../../assets/css/main.css";
/* Custom Prose Styles for Nuxt Content without Typography Plugin */
.custom-prose h1 {
  @apply text-3xl md:text-4xl font-bold text-[#1a1a1a] mt-12 mb-6 leading-tight;
}
.custom-prose h2 {
  @apply text-2xl md:text-3xl font-bold text-[#1a1a1a] mt-10 mb-5 leading-snug;
}
.custom-prose h3 {
  @apply text-xl md:text-2xl font-bold text-[#1a1a1a] mt-8 mb-4 leading-snug;
}
.custom-prose p {
  @apply text-lg text-gray-700 mb-6 leading-relaxed;
}
.custom-prose ul {
  @apply list-none mb-8 space-y-3 pl-2;
}
.custom-prose ul li {
  @apply relative pl-6 text-lg text-gray-700 leading-relaxed;
}
.custom-prose ul li::before {
  content: "•";
  @apply absolute left-0 text-[#FFC162] text-xl font-bold rounded-full w-2 h-2 top-0.5;
}
.custom-prose strong {
  @apply font-bold text-gray-900;
}
.custom-prose a {
  @apply text-[#EA580C] font-semibold hover:text-[#FFC162] underline decoration-2 underline-offset-4 transition-colors;
}
.custom-prose blockquote {
  @apply border-l-4 border-[#FFC162] pl-6 italic text-gray-700 my-8 py-2 bg-[#FFF9F1] rounded-r-xl p-4;
}
.custom-prose table {
  @apply w-full text-left border-collapse my-8 rounded-xl overflow-hidden shadow-sm;
}
.custom-prose th {
  @apply bg-gray-100 text-[#1a1a1a] font-bold py-3 px-4 border-b border-gray-200;
}
.custom-prose td {
  @apply py-3 px-4 border-b border-gray-100 text-gray-700;
}
.custom-prose tbody tr:last-child td {
  @apply border-b-0;
}
.custom-prose code {
  @apply bg-gray-100 text-[#ea580c] px-2 py-1 rounded text-sm font-mono border border-gray-200;
}
.custom-prose hr {
  @apply my-10 border-gray-200;
}
.custom-prose em {
  @apply italic text-gray-700;
}
</style>