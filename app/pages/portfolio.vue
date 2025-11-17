<script setup lang="ts">
import { ref } from 'vue';
import { useSeoMeta } from "nuxt/app";

// Import project images
import trevidiaImg from '~/assets/img/projects/trevidia.png';
import macbookAirImg from '~/assets/img/projects/MacBookAir.png';
import macbook13Img from '~/assets/img/projects/MacBook13.png';
import invoicingImg from '~/assets/img/projects/Invoicing.png';

useSeoMeta({
  title: "Trevidia Portfolio"
});

const activeFilter = ref('all');

const projects = [
  {
    id: 1,
    title: 'Financial Analytics Platform',
    description: 'A comprehensive analytics dashboard for real-time financial data visualization and reporting for enterprise clients.',
    category: 'web',
    image: trevidiaImg,
    badgeColor: 'bg-blue-100 text-blue-600',
    categoryLabel: 'Web Development'
  },
  {
    id: 2,
    title: 'Healthcare Booking App',
    description: 'Mobile application connecting patients with healthcare providers, featuring appointment scheduling and telemedicine capabilities.',
    category: 'mobile',
    image: macbookAirImg,
    badgeColor: 'bg-purple-100 text-purple-600',
    categoryLabel: 'Mobile Apps'
  },
  {
    id: 3,
    title: 'Sustainable Fashion Marketplace',
    description: 'An eco-friendly e-commerce platform with integrated payment processing, inventory management, and customer analytics.',
    category: 'ecommerce',
    image: macbook13Img,
    badgeColor: 'bg-green-100 text-green-600',
    categoryLabel: 'E-commerce'
  },
  {
    id: 4,
    title: 'Digital Transformation Strategy',
    description: 'Comprehensive digital strategy consulting for a Fortune 500 company, resulting in 40% efficiency improvement.',
    category: 'consulting',
    image: trevidiaImg,
    badgeColor: 'bg-orange-100 text-orange-600',
    categoryLabel: 'Consulting'
  },
  {
    id: 5,
    title: 'Real Estate CRM System',
    description: 'Custom CRM solution for property management with automated workflows, client tracking, and document management.',
    category: 'web',
    image: invoicingImg,
    badgeColor: 'bg-red-100 text-red-600',
    categoryLabel: 'Web Development'
  },
  {
    id: 6,
    title: 'Fitness Tracking Platform',
    description: 'Cross-platform mobile app with AI-powered workout recommendations, progress tracking, and social features.',
    category: 'mobile',
    image: invoicingImg,
    badgeColor: 'bg-teal-100 text-teal-600',
    categoryLabel: 'Mobile Apps'
  },
  {
    id: 7,
    title: 'Online Learning Platform',
    description: 'Educational platform with live streaming, course management, and student progress tracking features.',
    category: 'web',
    image: trevidiaImg,
    badgeColor: 'bg-indigo-100 text-indigo-600',
    categoryLabel: 'Web Development'
  },
  {
    id: 8,
    title: 'Restaurant Ordering System',
    description: 'Complete e-commerce solution for restaurants with online ordering, table reservations, and delivery management.',
    category: 'ecommerce',
    image: macbook13Img,
    badgeColor: 'bg-yellow-100 text-yellow-600',
    categoryLabel: 'E-commerce'
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
    <!-- Hero Section -->
    <section class="min-h-[50vh] flex flex-col items-center justify-center text-center px-4 py-20 bg-[#F7B94A]">
      <h1 class="text-4xl md:text-5xl font-semibold text-white">
        Our Portfolio
      </h1>

      <p class="mt-6 max-w-3xl text-lg text-white/90 leading-relaxed">
        Discover our successful projects and innovative solutions that have transformed
        businesses across various industries
      </p>
    </section>

    <!-- Filter Tabs -->
    <section class="py-12 bg-white border-b">
      <div class="max-w-6xl mx-auto px-6">
        <div class="flex flex-wrap justify-center gap-4">
          <button 
            @click="setFilter('all')"
            :class="activeFilter === 'all' ? 'bg-[#F7B94A] text-white' : 'bg-gray-100 text-[#333333]'"
            class="px-6 py-2 rounded-full font-medium hover:bg-[#e5a739] hover:text-white transition-colors"
          >
            All Projects
          </button>
          <button 
            @click="setFilter('web')"
            :class="activeFilter === 'web' ? 'bg-[#F7B94A] text-white' : 'bg-gray-100 text-[#333333]'"
            class="px-6 py-2 rounded-full font-medium hover:bg-[#e5a739] hover:text-white transition-colors"
          >
            Web Development
          </button>
          <button 
            @click="setFilter('mobile')"
            :class="activeFilter === 'mobile' ? 'bg-[#F7B94A] text-white' : 'bg-gray-100 text-[#333333]'"
            class="px-6 py-2 rounded-full font-medium hover:bg-[#e5a739] hover:text-white transition-colors"
          >
            Mobile Apps
          </button>
          <button 
            @click="setFilter('ecommerce')"
            :class="activeFilter === 'ecommerce' ? 'bg-[#F7B94A] text-white' : 'bg-gray-100 text-[#333333]'"
            class="px-6 py-2 rounded-full font-medium hover:bg-[#e5a739] hover:text-white transition-colors"
          >
            E-commerce
          </button>
          <button 
            @click="setFilter('consulting')"
            :class="activeFilter === 'consulting' ? 'bg-[#F7B94A] text-white' : 'bg-gray-100 text-[#333333]'"
            class="px-6 py-2 rounded-full font-medium hover:bg-[#e5a739] hover:text-white transition-colors"
          >
            Consulting
          </button>
        </div>
      </div>
    </section>

    <!-- Projects Grid -->
    <section class="py-20 px-6 md:px-12 lg:px-20">
      <div class="max-w-7xl mx-auto">
        <!-- Results Count -->
        <div class="mb-8 text-center">
          <p class="text-[#666666]">
            Showing <span class="font-semibold text-[#1A1A1A]">{{ filteredProjects.length }}</span> 
            {{ filteredProjects.length === 1 ? 'project' : 'projects' }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Project Cards -->
          <article 
            v-for="project in filteredProjects" 
            :key="project.id"
            class="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
          >
            <div class="relative h-64 overflow-hidden bg-gray-200">
              <img 
                :src="project.image" 
                :alt="project.title"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div class="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
            </div>
            
            <div class="p-6">
              <div class="flex items-center gap-2 mb-3">
                <span :class="`px-3 py-1 ${project.badgeColor} text-xs font-medium rounded-full`">
                  {{ project.categoryLabel }}
                </span>
              </div>
              
              <h3 class="text-xl font-semibold text-[#1A1A1A] mb-2">
                {{ project.title }}
              </h3>
              
              <p class="text-sm text-[#666666] mb-4 line-clamp-3">
                {{ project.description }}
              </p>
              
              <a href="#" class="inline-flex items-center text-[#F7B94A] font-medium hover:text-[#e5a739] transition-colors">
                View Project
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </article>
        </div>

        <!-- Empty State -->
        <div v-if="filteredProjects.length === 0" class="text-center py-20">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16 mx-auto text-gray-300 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 3h18v18H3z"/>
            <path d="M9 9h6v6H9z"/>
          </svg>
          <h3 class="text-xl font-semibold text-[#1A1A1A] mb-2">No projects found</h3>
          <p class="text-[#666666]">Try selecting a different category</p>
        </div>

        <!-- Load More Button -->
        <div v-if="filteredProjects.length > 0" class="flex justify-center mt-12">
          <button class="px-8 py-3 bg-[#F7B94A] text-white font-medium rounded-full hover:bg-[#e5a739] transition-colors">
            Load More Projects
          </button>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-[#FFF9F1] py-20">
      <div class="max-w-4xl mx-auto text-center px-6">
        <h2 class="text-3xl md:text-4xl font-semibold text-[#1A1A1A]">
          Ready to Start Your Project?
        </h2>
        
        <p class="mt-4 text-lg text-[#666666]">
          Let's discuss how we can help transform your vision into reality
        </p>
        
        <div class="mt-8">
          <a href="/contact" class="inline-block px-8 py-3 bg-[#F7B94A] text-white font-medium rounded-full hover:bg-[#e5a739] transition-colors">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
</style>