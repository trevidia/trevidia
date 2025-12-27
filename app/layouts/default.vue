<script setup lang="ts">
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
const isProd = !import.meta.dev
const route = useRoute()

useHead({
  meta: [{property: 'og:title', content: `${route.meta.title} - Trevidia`}]
})

</script>

<template>
  <Body class="has-[.no-doc-scroll]:overflow-y-hidden md:has-[.no-doc-scroll]:overflow-y-auto">
  <noscript v-if="isProd">
    <iframe
        src="https://www.googletagmanager.com/ns.html?id=${config.public.gtmId}"
        height="0" width="0"
        style="display:none;visibility:hidden"></iframe>
  </noscript>
  <NavBar/>
  <main class="min-h-screen">
    <slot/>
  </main>
  <Footer/>
  </Body>
</template>