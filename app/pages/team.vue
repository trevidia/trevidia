<script setup lang="ts">
const team = [
  {
    name: "Uchenna Nwaorgu",
    role: "CEO & Full-Stack Engineer",
    profile_url: "/img/profiles/nwaorgu uchenna.jpg",
    bio: "Uchenna leads the strategic vision of Trevidia. As a veteran programmer, he ensures that every high-level business strategy is backed by robust, scalable architecture. He specializes in bridging the gap between complex enterprise requirements and technical execution.",
  },
  {
    name: "Jeremiah Ajisafe",
    role: "COO & Senior Developer",
    profile_url: "/img/profiles/jeremiah ajisafe.jpg",
    bio: "Jeremiah oversees the operational heartbeat of Trevidia. Combining operational excellence with deep programming expertise, he ensures that our internal processes are as efficient as the software we build for our clients.",
  },
  {
    name: "Denis Emokhare",
    role: "Lead Product Manager & UI/UX Designer",
    profile_url: "/img/profiles/denis emokhare.jpg",
    bio: "Denis is the guardian of user experience. He translates business goals into intuitive product roadmaps, ensuring that every solution we deploy is as functional as it is beautiful.",
  },
  {
    name: "Okulaja Adetomiwa",
    role: "Senior Product Designer",
    profile_url: "/img/profiles/okulaja adetomiwa.jpg",
    bio: "Okulaja specializes in creating cohesive design systems and user-centric interfaces. His focus is on high-fidelity prototyping and ensuring that complex technical features remain accessible and engaging for the end-user.",
  },
  {
    name: "George Okochar",
    profile_url: "/img/profiles/okochar george.jpg",
    role: "Junior UI/UX Designer",
    bio: "George focuses on the fine details of digital interaction. Supporting the design team with fresh perspectives, he helps bring Trevidia's visual identities and user interfaces to life.",
  }
]
useSeoMeta({
  title: 'Our Team | Trevidia Strategic Consulting',
  ogTitle: 'Meet the Builders Behind Trevidia',
  description: 'Led by CEO Uchenna Nwaorgu and COO Jeremiah, Trevidia is a UK-based consultancy of engineers and designers. We bridge the gap between technical architecture and user-centric design.',
  ogDescription: 'From full-stack engineering to senior product design, meet the team transforming UK businesses through high-fidelity software and strategic insight.',
  // ogImage: '/img/og-team.jpg', // A photo of your team or logo
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div class="bg-white min-h-screen">
    <section class="py-24 bg-[#1a1a1a] text-center text-white px-4">
      <div class="max-w-4xl mx-auto">
        <span class="text-[#FFC162] uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Our Technical Leadership</span>
        <h1 class="text-4xl md:text-6xl font-bold mb-6 text-balance">Built by Engineers. <br/> Designed for Impact.</h1>
        <p class="text-gray-400 text-lg leading-relaxed">
          At Trevidia, we eliminate the gap between 'The Idea' and 'The Implementation.'
          Our team is a tight-knit group of builders, designers, and strategists dedicated to UK business growth.
        </p>
      </div>
    </section>

    <section class="py-24 max-w-7xl mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <div v-for="member in team" :key="member.name" class="flex flex-col">
          <div class="aspect-square bg-gray-50 rounded-3xl mb-6 overflow-hidden border border-gray-100 flex items-center justify-center text-gray-300">
            <img :src="member.profile_url" :alt="`${member.name} picture`" class="w-full h-auto object-contain"/>
          </div>

          <h3 class="text-xl font-bold text-[#1a1a1a]">{{ member.name }}</h3>
          <p class="text-[#FFC162] font-bold text-xs uppercase tracking-widest mb-4">{{ member.role }}</p>
          <p class="text-sm text-gray-600 leading-relaxed flex-grow">
            {{ member.bio }}
          </p>
        </div>
      </div>
    </section>

    <section class="bg-[#FFF9F1] py-20 px-6">
      <div class="max-w-5xl mx-auto">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold mb-6">A Multi-Disciplinary Digital Force</h2>
            <p class="text-gray-700 leading-relaxed mb-4">
              Our strength lies in our balanced leadership. With <strong>Uchenna Nwaorgu</strong> and <strong>Jeremiah</strong> providing deep technical oversight, we ensure that every line of code is optimized for performance and security.
            </p>
            <p class="text-gray-700 leading-relaxed">
              This technical foundation is perfectly complemented by our design studio. Led by <strong>Denis Emokhare</strong> and <strong>Okulaja Adetomiwa</strong>, our design team ensures that user experience is never an afterthought, while <strong>George Okochar</strong> ensures every pixel aligns with the brand vision.
            </p>
          </div>
          <div class="bg-[#1a1a1a] p-8 rounded-3xl text-white">
            <h4 class="text-[#FFC162] font-bold mb-4">The Trevidia Advantage</h4>
            <ul class="space-y-4 text-sm">
              <li class="flex gap-3">
                <span class="text-[#FFC162]">✔</span>
                <span><strong>Founder-Level Engineering:</strong> Direct access to technical architects.</span>
              </li>
              <li class="flex gap-3">
                <span class="text-[#FFC162]">✔</span>
                <span><strong>Design Systems:</strong> Scalable UI/UX frameworks built for long-term growth.</span>
              </li>
              <li class="flex gap-3">
                <span class="text-[#FFC162]">✔</span>
                <span><strong>Agile UK Delivery:</strong> Rapid prototyping and high-velocity deployment.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>