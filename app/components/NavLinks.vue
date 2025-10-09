<script setup lang="ts">
const {links, listClass, ctaClass} = defineProps<{
  links: {
    label: string,
    path: string,
  }[],
  listClass: string,
  ctaClass: string
}>()
</script>
<template>
  <ul :class="listClass">
    <li v-for="link in links" :key="link.label">
      <NuxtLink :to="link.path">
        {{link.label}}
      </NuxtLink>
    </li>
  </ul>
  <NuxtLink to="/contact" :class="ctaClass">
    <div class="rounded-[6px] py-2 px-4 text-white bg-black text-xs">
      Get Started
    </div>
  </NuxtLink>
</template>

<style scoped>

</style>