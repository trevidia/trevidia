<template>
  <section class="relative py-20 lg:py-32 bg-[#1a1a1a] text-white overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 text-center">

      <span class="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#FFC162] text-xs font-bold tracking-widest uppercase mb-6">
        UK-Based Tech Strategy & Engineering
      </span>

      <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
        Turning Complex Tech into <br />
        <span class="text-[#FFC162]">Simple Business Growth.</span>
      </h1>

      <p class="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
        We are a product-led consultancy. By applying the same rigorous engineering
        used to build our own platforms, we help UK startups and businesses
        launch scalable software and automate manual operations.
      </p>

      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <NuxtLink
            to="https://calendly.com/uchenna-trevidia/30min"
            class="w-full sm:w-auto px-10 py-4 bg-[#FFC162] text-[#1a1a1a] font-bold rounded-xl hover:scale-105 transition-transform"
        >
          Book Your Strategy Audit
        </NuxtLink>

        <NuxtLink
            to="#process"
            class="w-full sm:w-auto px-10 py-4 bg-transparent border border-white/20 text-white font-bold rounded-xl hover:bg-white/5 transition-colors"
        >
          See Our Approach
        </NuxtLink>
      </div>

      <div class="mt-20 pt-10 border-t border-white/5">
        <p class="text-xs uppercase tracking-widest text-gray-500 mb-6 font-semibold">Our Proof is in our Products</p>
        <div class="flex justify-center opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all cursor-default">
          <div class="flex items-center gap-2">
            <span class="text-2xl font-bold tracking-tighter">TREVIDIA<span class="text-[#FFC162]">.COM</span></span>
            <span class="text-[10px] bg-white/10 px-2 py-1 rounded">FLAGSHIP SAAS</span>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>