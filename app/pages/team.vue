<script setup lang="ts">
import { useSeoMeta } from "nuxt/app";

useSeoMeta({
  title: "Trevidia Team"
});
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="min-h-[50vh] flex flex-col items-center justify-center text-center px-4 py-20 bg-[#F7B94A]">
      <h1 class="text-4xl md:text-5xl font-semibold text-white">
        Meet Our Expert Team
      </h1>

      <p class="mt-6 max-w-3xl text-lg text-white/90 leading-relaxed">
        Our diverse team of consultants and developers brings decades of combined
        experience to help transform your business through innovative technology solutions.
      </p>
    </section>

    <!-- Stats Section -->
    <section class="py-16 bg-white">
      <div class="max-w-6xl mx-auto px-6">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p class="text-4xl font-bold text-[#F7B94A]">20+</p>
            <p class="mt-2 text-[#666666]">Team Members</p>
          </div>
          <div>
            <p class="text-4xl font-bold text-[#F7B94A]">7+</p>
            <p class="mt-2 text-[#666666]">Years of Experience</p>
          </div>
          <div>
            <p class="text-4xl font-bold text-[#F7B94A]">50+</p>
            <p class="mt-2 text-[#666666]">Projects Completed</p>
          </div>
          <div>
            <p class="text-4xl font-bold text-[#F7B94A]">98%</p>
            <p class="mt-2 text-[#666666]">Clients Satisfaction</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Leadership Team Section -->
    <section class="py-20 bg-[#FFF9F1]">
      <div class="max-w-6xl mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-semibold text-[#1A1A1A]">
            Leadership Team
          </h2>
          <p class="mt-4 text-[#666666]">
            Meet the visionaries who guide our company's strategic direction and innovation.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <!-- Leader 1 -->
          <div class="bg-white rounded-2xl p-8 text-center">
            <div class="w-32 h-32 mx-auto mb-6 rounded-full bg-gray-200 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop" 
                alt="Uchenna Nwaorgu"
                class="w-full h-full object-cover"
              />
            </div>
            <h3 class="text-xl font-semibold text-[#1A1A1A]">Uchenna Nwaorgu</h3>
            <p class="text-[#F7B94A] font-medium mt-2">CEO & Lead Developer</p>
            <p class="mt-4 text-sm text-[#666666]">
              Full-stack developer with 8+ years experience in enterprise solutions.
            </p>
            <div class="flex justify-center gap-4 mt-6">
              <a href="#" class="text-[#0A66C2] hover:text-[#004182]" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" class="text-[#000000] hover:text-[#333333]" aria-label="X (Twitter)">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Leader 2 -->
          <div class="bg-white rounded-2xl p-8 text-center">
            <div class="w-32 h-32 mx-auto mb-6 rounded-full bg-gray-200 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop" 
                alt="Jeremiah Ajisafe"
                class="w-full h-full object-cover"
              />
            </div>
            <h3 class="text-xl font-semibold text-[#1A1A1A]">Jeremiah Ajisafe</h3>
            <p class="text-[#F7B94A] font-medium mt-2">CEO & Lead Developer</p>
            <p class="mt-4 text-sm text-[#666666]">
              Full-stack developer with 8+ years experience in enterprise solutions.
            </p>
            <div class="flex justify-center gap-4 mt-6">
              <a href="#" class="text-[#0A66C2] hover:text-[#004182]" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" class="text-[#000000] hover:text-[#333333]" aria-label="X (Twitter)">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Development Team Section -->
    <section class="py-20 bg-white">
      <div class="max-w-6xl mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-semibold text-[#1A1A1A]">
            Development Team
          </h2>
          <p class="mt-4 text-[#666666]">
            Our skilled developers and engineers who bring your ideas to life.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Dev Member 1 -->
          <div class="bg-[#FFF9F1] rounded-2xl p-8 text-center">
            <div class="w-32 h-32 mx-auto mb-6 rounded-full bg-gray-200 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop" 
                alt="Uchenna Nwaorgu"
                class="w-full h-full object-cover"
              />
            </div>
            <h3 class="text-xl font-semibold text-[#1A1A1A]">Uchenna Nwaorgu</h3>
            <p class="text-[#F7B94A] font-medium mt-2">CEO & Lead Developer</p>
            <p class="mt-4 text-sm text-[#666666]">
              Full-stack developer with 8+ years experience in enterprise solutions.
            </p>
          </div>

          <!-- Dev Member 2 -->
          <div class="bg-[#FFF9F1] rounded-2xl p-8 text-center">
            <div class="w-32 h-32 mx-auto mb-6 rounded-full bg-gray-200 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop" 
                alt="Jeremiah Ajisafe"
                class="w-full h-full object-cover"
              />
            </div>
            <h3 class="text-xl font-semibold text-[#1A1A1A]">Jeremiah Ajisafe</h3>
            <p class="text-[#F7B94A] font-medium mt-2">CEO & Lead Developer</p>
            <p class="mt-4 text-sm text-[#666666]">
              Full-stack developer with 8+ years experience in enterprise solutions.
            </p>
          </div>

          <!-- Dev Member 3 -->
          <div class="bg-[#FFF9F1] rounded-2xl p-8 text-center">
            <div class="w-32 h-32 mx-auto mb-6 rounded-full bg-gray-200 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop" 
                alt="Okochar George"
                class="w-full h-full object-cover"
              />
            </div>
            <h3 class="text-xl font-semibold text-[#1A1A1A]">Okochar George</h3>
            <p class="text-[#F7B94A] font-medium mt-2">CEO & Lead Developer</p>
            <p class="mt-4 text-sm text-[#666666]">
              Full-stack developer with 8+ years experience in enterprise solutions.
            </p>
          </div>

          <!-- Dev Member 4 -->
          <div class="bg-[#FFF9F1] rounded-2xl p-8 text-center">
            <div class="w-32 h-32 mx-auto mb-6 rounded-full bg-gray-200 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=200&h=200&fit=crop" 
                alt="Okulaja Adetomiwa"
                class="w-full h-full object-cover"
              />
            </div>
            <h3 class="text-xl font-semibold text-[#1A1A1A]">Okulaja Adetomiwa</h3>
            <p class="text-[#F7B94A] font-medium mt-2">Product Designer</p>
            <p class="mt-4 text-sm text-[#666666]">
              Product designer with 2+ years experience in developmental solutions.
            </p>
          </div>

          <!-- Dev Member 5 -->
          <div class="bg-[#FFF9F1] rounded-2xl p-8 text-center">
            <div class="w-32 h-32 mx-auto mb-6 rounded-full bg-gray-200 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&h=200&fit=crop" 
                alt="Emokhare. O. Denis"
                class="w-full h-full object-cover"
              />
            </div>
            <h3 class="text-xl font-semibold text-[#1A1A1A]">Emokhare. O. Denis</h3>
            <p class="text-[#F7B94A] font-medium mt-2">CEO & Lead Developer</p>
            <p class="mt-4 text-sm text-[#666666]">
              Full-stack developer with 8+ years experience in enterprise solutions.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="py-20 bg-[#F7B94A]">
      <div class="max-w-6xl mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-semibold text-[#1A1A1A]">
            Our Values
          </h2>
          <p class="mt-4 text-[#1A1A1A]/80">
            The principles that guide our team and drive our success.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Value 1 -->
          <div class="text-center">
            <div class="w-20 h-20 mx-auto mb-6 bg-white rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-[#F7B94A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M9 18h6" />
                <path d="M10 22h4" />
                <path d="M12 2a6 6 0 0 0-3 11.197V15a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1.803A6 6 0 0 0 12 2z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-[#1A1A1A]">Innovation</h3>
            <p class="mt-3 text-sm text-[#1A1A1A]/80">
              Constantly pushing boundaries and exploring new technologies
            </p>
          </div>

          <!-- Value 2 -->
          <div class="text-center">
            <div class="w-20 h-20 mx-auto mb-6 bg-white rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-[#F7B94A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M9 21v-2a4 4 0 0 1 3-3.87" />
                <path d="M12 7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                <path d="M5 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                <path d="M19 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-[#1A1A1A]">Collaboration</h3>
            <p class="mt-3 text-sm text-[#1A1A1A]/80">
              Working together to achieve exceptional results
            </p>
          </div>

          <!-- Value 3 -->
          <div class="text-center">
            <div class="w-20 h-20 mx-auto mb-6 bg-white rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-[#F7B94A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2l2.09 4.24L18.5 7l-3.25 2.86L15.18 14 12 11.8 8.82 14l-.07-4.14L5.5 7 9.91 6.24 12 2z"/>
                <path d="M12 22v-6" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-[#1A1A1A]">Excellence</h3>
            <p class="mt-3 text-sm text-[#1A1A1A]/80">
              Delivering the highest quality in everything we do
            </p>
          </div>

          <!-- Value 4 -->
          <div class="text-center">
            <div class="w-20 h-20 mx-auto mb-6 bg-white rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-[#F7B94A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-[#1A1A1A]">Integrity</h3>
            <p class="mt-3 text-sm text-[#1A1A1A]/80">
              Building trust through transparency and honesty
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Join Team CTA -->
    <section class="py-20 bg-[#FFF9F1]">
      <div class="max-w-4xl mx-auto text-center px-6">
        <h2 class="text-3xl md:text-4xl font-semibold text-[#1A1A1A]">
          Join Our Team
        </h2>
        
        <p class="mt-4 text-lg text-[#666666]">
          We're always looking for talented individuals to join our growing team
        </p>
        
        <div class="mt-8 flex flex-wrap justify-center gap-4">
          <a href="#" class="px-8 py-3 bg-[#F7B94A] text-white font-medium rounded-full hover:bg-[#e5a739] transition-colors">
            View Open Position
          </a>
          <a href="#" class="px-8 py-3 border-2 border-[#F7B94A] text-[#F7B94A] font-medium rounded-full hover:bg-[#F7B94A] hover:text-white transition-colors">
            Submit Resume
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
</style>