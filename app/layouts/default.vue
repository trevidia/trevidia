<script setup lang="ts">
import NavBar from "../components/NavBar.vue";
const isProd = !import.meta.dev
</script>

<template>
  <Body>
  <noscript v-if="isProd">
    <iframe
        src="https://www.googletagmanager.com/ns.html?id=${config.public.gtmId}"
        height="0" width="0"
        style="display:none;visibility:hidden"></iframe>
  </noscript>
  <NavBar/>
  <main>
    <slot/>
  </main>
  </Body>
</template>