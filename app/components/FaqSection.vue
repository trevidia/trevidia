<script setup lang="ts">
const faqs = [
  {
    q: "Why choose a product-led consultancy like Trevidia?",
    a: "Unlike traditional agencies that only build for clients, we maintain our own flagship software (Trevidia.com). This means our advice is battle-tested in the real world. We face the same challenges you do—security, scaling, and user experience—giving us a unique 'founder's perspective' on your project."
  },
  {
    q: "Do you specialize in specific industries?",
    a: "Our core expertise lies in UK-based SaaS, Fintech, and Operational Automation. We focus on businesses that need to move from manual processes to scalable digital systems, ensuring full compliance with UK data regulations like GDPR."
  },
  {
    q: "How does the 'Strategy Audit' work?",
    a: "The audit is a 30-minute deep dive into your current technical bottlenecks. We review your existing stack or your new concept and provide a high-level roadmap of how we would approach the build to ensure it is simple, secure, and scalable."
  },
  {
    q: "What is the typical timeline for a consulting engagement?",
    a: "Because we are an agile, founder-led team, we move faster than large agencies. A discovery and roadmap phase usually takes 1-2 weeks, while a full MVP build typically ranges from 8 to 12 weeks, depending on complexity."
  },
  {
    q: "How do you handle post-launch support?",
    a: "We don't believe in 'build and disappear.' We offer ongoing maintenance and growth partnerships. As your technical partner, we ensure your system stays updated, secure, and ready to scale as your user base grows."
  }
]
</script>

<template>
  <section id="faq" class="py-24 bg-[#FFF9F1] px-4">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4">Frequently Asked Questions</h2>
        <p class="text-gray-600">Transparent answers about our process, technology, and philosophy.</p>
      </div>

      <div class="space-y-4">
        <div v-for="faq in faqs" :key="faq.q" class="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm">
          <h3 class="text-lg font-bold text-[#1a1a1a] mb-3">{{ faq.q }}</h3>
          <p class="text-gray-600 leading-relaxed text-sm md:text-base">
            {{ faq.a }}
          </p>
        </div>
      </div>

      <div class="mt-16 p-8 bg-white/50 rounded-3xl border border-dashed border-gray-200 text-center">
        <p class="text-xs text-gray-400 leading-loose uppercase tracking-widest">
          Trevidia Strategic Consulting • London, UK • Product-Led Digital Transformation
        </p>
      </div>
    </div>
  </section>
</template>