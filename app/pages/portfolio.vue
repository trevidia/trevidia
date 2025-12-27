<script setup lang="ts">
import { ref, computed } from 'vue';

// Import project images
import trevidiaImg from '~/assets/img/projects/trevidia.png';
import macbookAirImg from '~/assets/img/projects/MacBookAir.png';
import invoicingImg from '~/assets/img/projects/Invoicing.png';

useSeoMeta({
  title: "Our Work | Trevidia Strategic Consulting",
  description: "Explore how Trevidia delivers digital transformation. From Fintech scaling to our own flagship SaaS architecture.",
});

definePageMeta({
  title: "Trevidia Portfolio"
});

const activeFilter = ref('all');

const projects = [
  {
    id: 1,
    title: 'Trevidia Invoicing Architecture',
    description: 'Our flagship internal product. A globally scalable SaaS platform built to demonstrate secure payment handling, automated tax compliance, and zero-downtime deployment strategies.',
    impact: '99.9% Uptime Achieved',
    category: 'saas',
    image: trevidiaImg,
    badgeColor: 'bg-yellow-100 text-yellow-700',
    categoryLabel: 'Flagship SaaS',
    link: 'https://trevidia.com',
    rel: 'noopener'
  },
  {
    id: 2,
    title: 'Fintech Payment Gateway Scaling',
    description: 'Re-engineered a distributed microservices architecture for a high-volume payment processor, resolving transaction latency issues during peak UK trading hours.',
    impact: '-400ms Transaction Latency',
    category: 'fintech',
    image: macbookAirImg,
    badgeColor: 'bg-blue-100 text-blue-600',
    categoryLabel: 'Fintech Engineering'
  },
  {
    id: 4,
    title: 'Phcworkhub Tax Platform',
    description: 'A streamlined compliance platform for generating tax forms and paystubs. Focused on secure data handling and automated PDF generation for contractors.',
    impact: 'Automated Compliance',
    category: 'saas',
    image: invoicingImg,
    badgeColor: 'bg-green-100 text-green-600',
    categoryLabel: 'SaaS Development'
  }
];

const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') {
    return projects;
  }
  return projects.filter(project => project.category === activeFilter.value);
});

const setFilter = (filter: string) => {
  activeFilter.value = filter;
};
</script>

<template>
  <div>
    <section class="min-h-[50vh] flex flex-col items-center justify-center text-center px-4 py-20 bg-[#1a1a1a] relative overflow-hidden">
      <div class="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

      <span class="relative text-[#F7B94A] uppercase tracking-widest text-xs font-bold mb-4">Proven Results</span>
      <h1 class="relative text-4xl md:text-6xl font-bold text-white mb-6">
        We Don't Just Write Code.<br/> We <span class="text-[#F7B94A]">Build Assets.</span>
      </h1>

      <p class="relative mt-2 max-w-2xl text-lg text-gray-400 leading-relaxed">
        From our own proprietary SaaS platforms to enterprise-grade integrations,
        explore how Trevidia engineering drives tangible business growth.
      </p>
    </section>

    <section class="py-12 bg-white border-b border-gray-100 sticky top-0 z-20 shadow-sm">
      <div class="max-w-6xl mx-auto px-6">
        <div class="flex flex-wrap justify-center gap-3">
          <button
              v-for="filter in ['all', 'saas', 'fintech', 'consulting']"
              :key="filter"
              @click="setFilter(filter)"
              :class="activeFilter === filter ? 'bg-[#1a1a1a] text-[#F7B94A]' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'"
              class="px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide transition-all"
          >
            {{ filter === 'saas' ? 'SaaS & Web' : filter }}
          </button>
        </div>
      </div>
    </section>

    <section class="py-20 px-6 md:px-12 lg:px-20 bg-[#FAFAFA]">
      <div class="max-w-7xl mx-auto">

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-12">
          <article
              v-for="project in filteredProjects"
              :key="project.id"
              class="group bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
          >
            <div class="relative h-64 overflow-hidden bg-gray-100 border-b border-gray-100">
              <img
                  :src="project.image"
                  :alt="project.title"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div class="absolute top-4 left-4">
                <span :class="`px-3 py-1 ${project.badgeColor} text-[10px] font-bold uppercase tracking-widest rounded-full shadow-sm`">
                  {{ project.categoryLabel }}
                </span>
              </div>
            </div>

            <div class="p-8 flex flex-col flex-grow">
              <h3 class="text-2xl font-bold text-[#1A1A1A] mb-3 group-hover:text-[#e5a739] transition-colors">
                {{ project.title }}
              </h3>

              <p class="text-sm text-gray-600 mb-6 leading-relaxed flex-grow">
                {{ project.description }}
              </p>

              <div class="pt-6 border-t border-gray-50 mt-auto">
                <div class="flex justify-between items-end">
                  <div>
                    <p class="text-[10px] uppercase text-gray-400 font-bold tracking-wider mb-1">Key Impact</p>
                    <p class="text-[#1a1a1a] font-bold text-lg">{{ project.impact }}</p>
                  </div>

                  <a v-if="project.link" :href='project.link' target="_blank" :rel="project.rel" class="size-10 rounded-full bg-[#FFF9F1] text-[#e5a739] flex items-center justify-center hover:bg-[#e5a739] hover:text-white transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>

        <div v-if="filteredProjects.length === 0" class="text-center py-20">
          <div class="inline-block p-6 rounded-full bg-gray-50 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 3h18v18H3z"/>
              <path d="M9 9h6v6H9z"/>
            </svg>
          </div>
          <h3 class="text-lg font-bold text-[#1A1A1A] mb-2">No projects found</h3>
          <p class="text-gray-500 text-sm">We are actively building in this space. Check back soon.</p>
        </div>
      </div>
    </section>

    <section class="bg-[#FFF9F1] py-24 px-6">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
          Have a similar challenge?
        </h2>

        <p class="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          Whether you need to scale a payment system or automate a logistics workflow,
          we bring the engineering rigor to make it happen.
        </p>

        <a href="/contact" class="inline-block px-10 py-4 bg-[#1a1a1a] text-white font-bold rounded-xl shadow-lg hover:bg-[#F7B94A] hover:text-[#1a1a1a] hover:-translate-y-1 transition-all duration-300">
          Discuss Your Strategy
        </a>
      </div>
    </section>
  </div>
</template>