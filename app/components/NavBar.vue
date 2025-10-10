<script setup lang="ts">
import NavLinks from "./NavLinks.vue";

const links = [
  {
    path: '/#service',
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
const isNavHidden = ref(true)
const toggleNav = () => {
  isNavHidden.value = !isNavHidden.value
}
</script>

<template>
  <nav :class="['sticky top-0 z-10 w-full text-sm']">
    <div class="h-16 bg-white flex items-center px-6 md:px-10 lg:px-16 justify-between border-b border-b-athens-gray ">
      <NuxtLink to="/">
        <img
            src="~/assets/img/logo-horizontal-transparent.png" alt="trevidia's logo"
            class="h-12 w-[110px] object-contain"/>
      </NuxtLink>
      <NavLinks :links="links" list-class="hidden md:flex items-center gap-x-8 h-full" cta-class="hidden md:block"/>
      <div class="md:hidden text-black cursor-pointer " @click="toggleNav">
        <svg v-if="isNavHidden" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
             stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
        </svg>
        <svg v-if="!isNavHidden" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
             stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"/>
        </svg>
      </div>
    </div>
    <transition name="nav-links">
      <div v-if="!isNavHidden" class="md:hidden fixed inset-x-0 top-16 z-20 bottom-0 bg-black/50">
        <div class="p-4 bg-white no-doc-scroll">
          <NavLinks :links="links" list-class="md:hidden flex flex-col gap-x-8 gap-y-3 h-full mb-4"
                    cta-class="md:hidden w-full text-center  md:w-auto md:mt-0"/>
        </div>
      </div>
    </transition>
  </nav>
</template>

<style scoped>
.nav-links-enter-from, .nav-links-leave-to {
  opacity: 0;
}

.nav-links-enter-to, .nav-links-leave-from {
  opacity: 1;
}

.nav-links-enter-active, .nav-links-leave-active {
  transition: all 150ms ease-in-out;
}
</style>