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
            communication and strategic thinking.a
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
  </div>
</template>

<style scoped>
</style>
