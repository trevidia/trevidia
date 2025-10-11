<script setup lang="ts">
const steps = [
  {
    id: 1,
    title: "Discovery",
    body: "We analyze your business needs goals, and current challenges to create a comprehensive understanding."
  },
  {
    id: 2,
    title: "Strategy",
    body: "Develop a customized strategy and roadmap that aligns with your business objectives and timeline."
  },
  {
    id: 3,
    title: "Implementation",
    body: "Execute the plan with regular checkins, transparent communication, and agile methodologies."
  },
  {
    id: 4,
    title: "Optimization",
    body: "Monitor performance, gather feedback, and continuously improve to ensure long-term success."
  },
]
</script>

<template>
<section class="section bg-[#FFF9F1]">
  <div class="max-w-[747px] mx-auto text-center mb-13">
    <h2 class="font-bold text-[36px] leading-[119%] tracking-[0%] mb-2">Our Proven Process</h2>
    <p class="text-[20px] font-medium text-[#444444] leading-[148%] tracking-[0%]">A systematic approach that ensures successful project delivery every time</p>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    <div v-for="step in steps" :key="step.id" class="text-center leading-[148%] tracking-[0%] flex flex-col items-center">
      <div class="rounded-full flex items-center justify-center size-16 text-white bg-[#FFC162] text-[32px] font-medium">
        {{step.id}}
      </div>
      <h3 class="mt-6 mb-2 text-[24px] font-medium">{{step.title}}</h3>
      <p class="text-[#444444] text-[16px] leading-[165%]">
        {{step.body}}
      </p>
    </div>
  </div>
</section>
</template>

<style scoped>

</style>