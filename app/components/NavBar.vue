<script setup lang="ts">
const links = [
  {
    path: '/#',
    label: "Services"
  },
  {
    path: '/about-us',
    label: "About"
  },
  {
    path: '/portfolio',
    label: "Portfolio"
  },
  {
    path: '/team',
    label: "Team"
  },
  {
    path: '/blog',
    label: "Blog"
  },
]
</script>

<template>
  <nav class="h-16 bg-white sticky top-0 z-10 flex items-center px-16 justify-between text-sm">
    <NuxtLink to="/">
      <img
          src="~/assets/img/logo-horizontal-transparent.png" alt="trevidia's logo" class="h-12 w-[110px] object-contain"/>
    </NuxtLink>
    <ul class="flex items-center gap-x-8 h-full">
      <li v-for="link in links" :key="link.label">
        <NuxtLink :to="link.path">
          {{link.label}}
        </NuxtLink>
      </li>
    </ul>
    <NuxtLink to="/contact">
      <div class="rounded-[6px] py-2 px-4 text-white bg-black text-xs">
        Get Started
      </div>
    </NuxtLink>
  </nav>
</template>

<style scoped>

</style>