<script setup lang="ts">
const services = [
  {
    title: "Strategic Business Growth",
    body: "We don't just give advice; we build blueprints for expansion. Our market analysts and strategy consultants work alongside your leadership to identify untapped revenue streams and optimize your market position within the UK and global landscapes.",
    values: [
      "In-depth Competitive Benchmarking",
      "Revenue Stream Diversification",
      "Scalable Business Model Design",
      "Investor Readiness & Pitch Deck Strategy",
      "Market Entry & Expansion Logistics"
    ]
  },
  {
    title: "Custom Software & SaaS",
    body: "Generic tools often hinder more than they help. Trevidia develops bespoke software solutions—ranging from proprietary CRM systems to complex SaaS platforms—designed specifically to integrate with your existing business logic and enhance user experience.",
    values: [
      "Full-Stack Web Application Development",
      "High-Performance Mobile Solutions",
      "Legacy System Modernization",
      "Secure API & Third-Party Integrations",
      "UI/UX Design for Conversion"
    ]
  },
  {
    title: "Enterprise Transformation",
    body: "The digital shift is more than just moving to the cloud. It’s about cultural and operational change. We assist organizations in migrating from manual, error-prone processes to automated, high-visibility digital workflows that reduce overhead and increase speed-to-market.",
    values: [
      "Cloud Infrastructure & AWS/Azure Migration",
      "AI-Driven Process Automation (RPA)",
      "Big Data Analytics & Business Intelligence",
      "Cybersecurity Framework Implementation",
      "Continuous Dev Ops & Agile Training"
    ]
  }
]
</script>

<template>
  <section id="service" class="py-24 px-4 md:px-10">
    <div class="max-w-[900px] mx-auto text-center mb-16">
      <h2 class="font-bold text-[42px] leading-tight mb-6">Expert Solutions for Modern Challenges</h2>
      <p class="text-[20px] text-[#444444] mb-8">
        Trevidia provides a holistic suite of services designed to address the most pressing obstacles facing businesses today. From the initial spark of an idea to the complex realities of large-scale digital deployment, we are your technical and strategic partners.
      </p>
      <div class="text-left bg-gray-50 p-8 rounded-2xl border-l-4 border-[#FFC162]">
        <p class="text-sm italic text-[#666666]">
          <strong>SEO Note:</strong> Our approach to property and business management incorporates the latest in <strong>UK Building Safety Compliance</strong>, <strong>Enterprise Resource Planning (ERP)</strong>, and <strong>PropTech innovation</strong>. We ensure your assets are not just maintained, but optimized for maximum yield.
        </p>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
      <div v-for="service in services" :key="service.title" class="rounded-2xl bg-[#FFF9F1] p-8 shadow-sm hover:shadow-md transition-shadow">
        <h3 class="mb-5 text-[26px] font-bold text-[#1a1a1a]">{{service.title}}</h3>
        <p class="mb-6 text-[#444444] leading-relaxed">{{service.body}}</p>
        <hr class="border-[#FFC162]/30 mb-6" />
        <ul class="space-y-4">
          <li v-for="value in service.values" :key="value" class="flex gap-x-3 items-start text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-5 text-[#05B414] shrink-0">
              <path fill-rule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd" />
            </svg>
            <span class="font-medium text-[#222222]">{{value}}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>