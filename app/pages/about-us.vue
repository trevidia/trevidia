<script setup lang="ts">
import { useSeoMeta } from "nuxt/app";

useSeoMeta({
  title: "About Trevidia"
});
</script>

<template>
  <div>
    <section class="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 py-20 bg-[#FFF9F1]">
      <h1 class="text-4xl md:text-5xl font-semibold text-[#1A1A1A]">
        About Trevidia
      </h1>

      <p class="mt-6 max-w-3xl text-lg text-[#333333] leading-relaxed">
        We're a team of passionate developers and consultants dedicated to
        transforming your digital vision into reality through innovative
        solutions and expert guidance.
      </p>

      <div class="mt-10">
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&q=80&auto=format&fit=crop&w=800"
          alt="Trevidia team"
          class="w-40 h-40 rounded-full object-cover"
        />
      </div>
    </section>

    <section class="px-6 md:px-12 lg:px-20 py-24">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Left text -->
        <div>
          <h2 class="text-4xl md:text-5xl font-semibold text-[#1A1A1A]">
            Our Story
          </h2>

          <p class="mt-6 text-lg text-[#333333] leading-relaxed">
            Founded in 2025, Trevidia emerged from a simple belief: every
            business deserves access to world-class development and
            consultation services. What started as a small team of five
            developers has grown into a comprehensive consultancy serving
            clients across the globe.
          </p>

          <p class="mt-4 text-lg text-[#333333] leading-relaxed">
            Our journey began when we recognized the gap between complex
            technical solutions and practical business needs. We set out to
            bridge that gap by combining deep technical expertise with clear
            communication and strategic thinking.a boy test
          </p>
        </div>

        <!-- Right image -->
        <div>
          <img
            src="~/assets/img/window.png"
            alt="Business skyline"
            class="rounded-xl w-full object-cover"
          />
        </div>
      </div>

      <!-- Stats -->
      <div class="grid grid-cols-3 gap-6 mt-16 text-center">
        <div>
          <p class="text-xl font-semibold">500+</p>
          <p class="text-sm text-[#555]">Projects Completed</p>
        </div>

        <div>
          <p class="text-xl font-semibold">98%</p>
          <p class="text-sm text-[#555]">Client Satisfaction</p>
        </div>

        <div>
          <p class="text-xl font-semibold">24/7</p>
          <p class="text-sm text-[#555]">Support Available</p>
        </div>
      </div>
    </section>
    <section class="bg-[#FFF9F1] py-20">
      <div class="max-w-6xl mx-auto px-6">
        <!-- Header -->
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-semibold text-[#111827]">
            Our Mission &amp; Values
          </h2>
          <p class="mt-4 max-w-2xl mx-auto text-[#4B5563]">
            We're driven by core values that shape every project we undertake and every
            relationship we build.
          </p>
        </div>

        <!-- Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Card 1 -->
          <article class="bg-white rounded-2xl p-8 shadow-sm">
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 bg-[#F7B94A] rounded-md p-3">
                <!-- lightbulb icon (innovation) -->
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M9 18h6" />
                  <path d="M10 22h4" />
                  <path d="M12 2a6 6 0 0 0-3 11.197V15a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1.803A6 6 0 0 0 12 2z" />
                </svg>
              </div>

              <div>
                <h3 class="text-xl font-semibold text-[#111827]">Innovation</h3>
                <p class="mt-3 text-sm text-[#6B7280] leading-relaxed">
                  We stay at the forefront of technology, constantly exploring new
                  solutions and methodologies to deliver cutting-edge results for our clients.
                </p>
              </div>
            </div>
          </article>

          <!-- Card 2 -->
          <article class="bg-white rounded-2xl p-8 shadow-sm">
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 bg-[#F7B94A] rounded-md p-3">
                <!-- badge/quality icon -->
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M12 2l2.09 4.24L18.5 7l-3.25 2.86L15.18 14 12 11.8 8.82 14l-.07-4.14L5.5 7 9.91 6.24 12 2z"/>
                  <path d="M12 22v-6" />
                </svg>
              </div>

              <div>
                <h3 class="text-xl font-semibold text-[#111827]">Quality</h3>
                <p class="mt-3 text-sm text-[#6B7280] leading-relaxed">
                  Every line of code, every design decision, and every strategic recommendation
                  is crafted with meticulous attention to detail and excellence.
                </p>
              </div>
            </div>
          </article>

          <!-- Card 3 -->
          <article class="bg-white rounded-2xl p-8 shadow-sm">
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 bg-[#F7B94A] rounded-md p-3">
                <!-- collaboration/team icon -->
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M17 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M9 21v-2a4 4 0 0 1 3-3.87" />
                  <path d="M12 7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  <path d="M5 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  <path d="M19 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>
              </div>

              <div>
                <h3 class="text-xl font-semibold text-[#111827]">Collaboration</h3>
                <p class="mt-3 text-sm text-[#6B7280] leading-relaxed">
                  We believe in true partnership with our clients, working together to understand
                  challenges and create solutions that drive real business value.
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
    <section class="py-20">
      <div class="max-w-6xl mx-auto px-6">
        <!-- Header -->
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-semibold text-[#111827]">
            Meet Our Team
          </h2>
          <p class="mt-4 max-w-2xl mx-auto text-[#4B5563]">
            Our diverse team of experts brings together years of experience in development,
            design, and strategic consulting.
          </p>
        </div>

        <!-- Team Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-20">
          <!-- Team Member 1 -->
          <div class="text-center">
            <div class="w-32 h-32 mx-auto mb-4 bg-gray-300 rounded-full"></div>
            <h3 class="text-lg font-semibold text-[#111827]">Uchenna Nwaorgu</h3>
            <p class="text-sm text-[#F7B94A] font-medium mb-2">CEO & Lead Developer</p>
            <p class="text-xs text-[#6B7280] mb-4">
              Full-stack developer with 8+ years experience in enterprise solutions.
            </p>
            <div class="flex justify-center gap-3">
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

          <!-- Team Member 2 -->
          <div class="text-center">
            <div class="w-32 h-32 mx-auto mb-4 bg-gray-300 rounded-full"></div>
            <h3 class="text-lg font-semibold text-[#111827]">Ajisafe Jeremiah</h3>
            <p class="text-sm text-[#F7B94A] font-medium mb-2">CEO & Lead Developer</p>
            <p class="text-xs text-[#6B7280] mb-4">
              Full-stack developer with 8+ years experience in enterprise solutions.
            </p>
            <div class="flex justify-center gap-3">
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

          <!-- Team Member 3 -->
          <div class="text-center">
            <div class="w-32 h-32 mx-auto mb-4 bg-gray-300 rounded-full"></div>
            <h3 class="text-lg font-semibold text-[#111827]">Uchenna Nwaorgu</h3>
            <p class="text-sm text-[#F7B94A] font-medium mb-2">CEO & Lead Developer</p>
            <p class="text-xs text-[#6B7280] mb-4">
              Full-stack developer with 8+ years experience in enterprise solutions.
            </p>
            <div class="flex justify-center gap-3">
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

          <!-- Team Member 4 -->
          <div class="text-center">
            <div class="w-32 h-32 mx-auto mb-4 bg-gray-300 rounded-full"></div>
            <h3 class="text-lg font-semibold text-[#111827]">Uchenna Nwaorgu</h3>
            <p class="text-sm text-[#F7B94A] font-medium mb-2">CEO & Lead Developer</p>
            <p class="text-xs text-[#6B7280] mb-4">
              Full-stack developer with 8+ years experience in enterprise solutions.
            </p>
            <div class="flex justify-center gap-3">
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

          <!-- Team Member 5 -->
          <div class="text-center">
            <div class="w-32 h-32 mx-auto mb-4 bg-gray-300 rounded-full"></div>
            <h3 class="text-lg font-semibold text-[#111827]">Uchenna Nwaorgu</h3>
            <p class="text-sm text-[#F7B94A] font-medium mb-2">CEO & Lead Developer</p>
            <p class="text-xs text-[#6B7280] mb-4">
              Full-stack developer with 8+ years experience in enterprise solutions.
            </p>
            <div class="flex justify-center gap-3">
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
  </div>
</template>

<style scoped>
</style>
