<template>
  <div class="bg-white min-h-screen">
    <section class="py-24 bg-[#1a1a1a] text-white px-4 relative overflow-hidden">
      <div class="max-w-5xl mx-auto relative text-center">
        <span class="text-[#FFC162] uppercase tracking-widest text-xs font-bold mb-4 block">The Trevidia Story</span>
        <h1 class="text-4xl md:text-7xl font-bold mb-8 leading-tight">
          Where Engineering Logic Meets <span class="text-[#FFC162]">Business Intuition.</span>
        </h1>
        <p class="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
          Trevidia was founded on a simple realization: the UK tech landscape is full of advisors who don't build, and builders who don't understand business. We bridged that gap.
        </p>
      </div>
      <div class="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
    </section>

    <section class="py-24 px-4 max-w-7xl mx-auto">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 class="text-3xl font-bold mb-6 text-[#1a1a1a]">Born from a Product, Not a Pitch Deck.</h2>
          <div class="space-y-6 text-gray-600 leading-relaxed">
            <p>
              Unlike most consulting firms, Trevidia didn’t start in a boardroom. It started in a development environment. Our journey began with the creation of <strong>Trevidia.com</strong>, a global invoicing and billing platform designed to solve the friction of modern business finance.
            </p>
            <p>
              By building, launching, and scaling our own SaaS product, our founders—<strong>Uchenna Nwaorgu</strong> and <strong>Jeremiah</strong>—gained insights that traditional consultancies simply cannot offer. We faced the same security audits, the same API bottlenecks, and the same user-retention challenges that you face.
            </p>
            <p>
              When we saw how much value our "Product-First" mindset brought to the industry, we launched <strong>Trevidia.co.uk</strong>. Today, we take those battle-tested frameworks and apply them to UK enterprises, transforming legacy operations into high-velocity digital assets.
            </p>
          </div>
        </div>
        <div class="bg-[#FFF9F1] p-10 rounded-[40px] border border-[#FFC162]/20">
          <h3 class="text-2xl font-bold mb-4">"The Builder's Credential"</h3>
          <p class="italic text-gray-700 mb-6">
            "We believe that a consultant who hasn't shipped their own product is like a navigator who has never been to sea. We lead with code, not just PowerPoints."
          </p>
          <div class="flex items-center gap-4">
            <div class="h-1 w-12 bg-[#FFC162]"></div>
            <span class="font-bold text-sm uppercase tracking-widest">Uchenna Nwaorgu, CEO</span>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-gray-50 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold mb-4">The Trevidia Standard</h2>
          <p class="text-gray-500">How we maintain excellence across every consulting engagement.</p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="pillar in pillars" :key="pillar.title" class="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <div class="size-12 bg-[#FFF9F1] rounded-xl flex items-center justify-center mb-6 text-[#FFC162]" v-html="pillar.icon">
            </div>
            <h4 class="font-bold text-xl mb-4 text-[#1a1a1a]">{{ pillar.title }}</h4>
            <p class="text-sm text-gray-600 leading-loose">{{ pillar.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 px-4 max-w-7xl mx-auto">
      <div class="bg-[#1a1a1a] rounded-[3rem] p-8 md:p-20 text-white relative overflow-hidden">
        <div class="grid lg:grid-cols-2 gap-12 relative">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold mb-8 text-[#FFC162]">Why Design is Our Second Language.</h2>
            <p class="text-gray-400 mb-6 leading-relaxed">
              Engineering logic provides the structure, but design provides the soul. Under the leadership of <strong>Denis Emokhare</strong> and <strong>Okulaja Adetomiwa</strong>, our design studio operates as a core part of our consulting DNA.
            </p>
            <p class="text-gray-400 leading-relaxed">
              We don't "skin" software after it's built. We use <strong>George Okochar's</strong> precision and Denis's product strategy to map user journeys before a single line of code is written. This ensures that the technical systems Uchenna and Jeremiah build are actually used and loved by your customers.
            </p>
          </div>
          <div class="flex items-center justify-center">
            <div class="grid grid-cols-2 gap-4">
              <div class="p-6 bg-white/5 rounded-2xl border border-white/10 text-center">
                <span class="text-3xl font-bold text-[#FFC162]">100%</span>
                <p class="text-[10px] uppercase tracking-widest mt-2">UK Compliant</p>
              </div>
              <div class="p-6 bg-white/5 rounded-2xl border border-white/10 text-center">
                <span class="text-3xl font-bold text-[#FFC162]">Zero</span>
                <p class="text-[10px] uppercase tracking-widest mt-2">Outsourced Code</p>
              </div>
              <div class="p-6 bg-white/5 rounded-2xl border border-white/10 text-center col-span-2">
                <span class="text-3xl font-bold text-[#FFC162]">Founder</span>
                <p class="text-[10px] uppercase tracking-widest mt-2">Direct Collaboration</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 text-center px-4">
      <h2 class="text-3xl md:text-4xl font-bold mb-6">Experience the Trevidia Advantage</h2>
      <p class="text-gray-600 mb-10 max-w-2xl mx-auto">
        Whether you are a scaling startup or an established enterprise, our team is ready to audit your current trajectory and provide a roadmap for digital maturity.
      </p>
      <NuxtLink to="https://calendly.com/your-link" class="inline-block px-12 py-4 bg-[#FFC162] text-[#1a1a1a] font-bold rounded-xl shadow-lg hover:bg-black hover:text-white transition-all">
        Book a Strategy Session
      </NuxtLink>
    </section>
  </div>
</template>

<script setup>
const pillars = [
  {
    title: "Technical Integrity",
    // SVG path for a code bracket
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" /></svg>`,
    desc: "We prioritize clean, maintainable, and scalable architecture. We don't build for today; we build for where your company will be in five years."
  },
  {
    title: "Operational Speed",
    // SVG path for a bolt
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" /></svg>`,
    desc: "In the UK market, speed is a competitive advantage. Our agile methodology ensures we ship high-quality updates in weeks, not months."
  },
  {
    title: "User-Centric Design",
    // SVG path for a user check
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>`,
    desc: "If the user can't find the value, the tech has failed. Every feature we develop is tested for cognitive load and intuitive flow."
  },
  {
    title: "Strategic Authority",
    // SVG path for a shield
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15L15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" /></svg>`,
    desc: "As SaaS founders ourselves, we provide advice rooted in the reality of managing a global product. We have skin in the game."
  }
]
</script>