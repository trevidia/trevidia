<script setup lang="ts">
const {$gtag} = useNuxtApp()
if ($gtag) {
  console.log($gtag)
  $gtag({'event': 'signup'})
}
</script>

<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>

<style scoped>

</style>