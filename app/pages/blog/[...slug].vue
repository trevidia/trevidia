<script setup lang="ts">
const route = useRoute()
const {data: page} = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})
console.log(route.path)
</script>

<template>
  <div>
    <ContentRenderer v-if="page" :value="page"/>
    <div v-else>Not found</div>
  </div>
</template>

<style scoped>

</style>