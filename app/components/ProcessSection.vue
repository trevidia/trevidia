<script setup lang="ts">
const steps = [
  {
    id: 1,
    title: "Deep-Dive Discovery",
    body: "We begin every partnership with an exhaustive audit of your current business ecosystem. This isn't just a surface-level talk; we analyze your data, interview key stakeholders, and map out your existing technical architecture to find the 'hidden' friction points."
  },
  {
    id: 2,
    title: "Strategic Roadmap",
    body: "Success is never accidental. We develop a comprehensive multi-phase roadmap that outlines every milestone, technical requirement, and ROI projection. This transparency ensures that your investment is always aligned with your long-term KPIs."
  },
  {
    id: 3,
    title: "Agile Execution",
    body: "We utilize an iterative, Agile-based development and implementation process. This means you see progress every two weeks, allowing for real-time feedback and adjustments that save time and budget compared to traditional waterfall methods."
  },
  {
    id: 4,
    title: "Continuous Evolution",
    body: "The launch is just the beginning. Trevidia provides ongoing optimization, security monitoring, and performance tuning. As the market shifts and new technologies emerge, we ensure your business remains at the cutting edge."
  },
]
</script>

<template>
  <section class="py-24 bg-[#FFF9F1]" id="process">
    <div class="container mx-auto px-4">
      <div class="max-w-[800px] mx-auto text-center mb-16">
        <h2 class="font-bold text-[40px] mb-4">The Trevidia Framework</h2>
        <p class="text-lg text-[#444444]">
          We believe in a "measure twice, cut once" philosophy. Our process is designed to eliminate risk and ensure that the solutions we build deliver immediate value to your bottom line.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div v-for="step in steps" :key="step.id" class="relative">
          <div class="flex flex-col items-center md:items-start text-center md:text-left">
            <div class="rounded-2xl flex items-center justify-center size-14 text-white bg-[#FFC162] text-2xl font-bold mb-6 shadow-lg shadow-[#FFC162]/30">
              {{step.id}}
            </div>
            <h3 class="text-xl font-bold mb-4 text-[#1a1a1a]">{{step.title}}</h3>
            <p class="text-[#555555] text-md leading-relaxed">
              {{step.body}}
            </p>
          </div>
        </div>
      </div>

      <div class="mt-20 p-8 md:p-12 bg-white rounded-[2.5rem] shadow-sm border border-gray-100 relative overflow-hidden">
        <div class="absolute top-0 right-0 w-32 h-32 bg-[#FFF9F1] rounded-bl-full -z-0"></div>

        <div class="relative">
          <h3 class="text-2xl md:text-3xl font-bold mb-8 text-[#1a1a1a] tracking-tight">
            Engineering Growth for the <span class="text-[#FFC162]">UK Digital Economy</span>
          </h3>

          <div class="grid md:grid-cols-2 gap-12 text-gray-600 leading-relaxed">
            <div class="space-y-4">
              <p>
                The UK tech landscape requires more than just code; it demands <strong>Strategic Planning</strong> that respects local regulations like UK-GDPR while competing in the global market. At Trevidia, we provide locally grounded expertise for firms operating within the London tech corridor and beyond.
              </p>
              <p>
                Whether you are seeking <strong>Enterprise Scaling Solutions</strong> or bespoke <strong>UK Property Management Software</strong>, our methodology remains the same: we combine rigorous engineering with market-specific intuition to ensure your infrastructure is a liability-free asset.
              </p>
            </div>

            <div class="space-y-4">
              <p>
                Our commitment to technical excellence drives your <strong>Digital Visibility</strong>. By focusing on lightweight, accessible code, we ensure your platform is optimized for both search engines and human users. We don't just "add" SEO; we build it into the DOM.
              </p>
              <p>
                Through <strong>Custom API Development</strong> and <strong>Business Automation</strong>, we eliminate manual friction. By integrating real-time analytics and heatmapping, we give you a "founder’s-eye view" of your customer journey, turning raw data into actionable brand loyalty.
              </p>
            </div>
          </div>

          <div class="mt-10 pt-8 border-t border-gray-50 flex flex-wrap gap-y-4 gap-x-8">
            <div v-for="tag in ['Custom APIs', 'Enterprise Scaling', 'Strategic Planning', 'Automation']" :key="tag" class="flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-[#FFC162]"></span>
              <span class="text-xs font-bold uppercase tracking-widest text-[#1a1a1a]">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>