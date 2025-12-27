<script setup lang="ts">

import HeroSection from "../components/HeroSection.vue";
import ServiceSection from "../components/ServiceSection.vue";
import ProcessSection from "../components/ProcessSection.vue";
import TrustBar from "../components/TrustBar.vue";
import IndustryExpertise from "../components/IndustryExpertise.vue";
import FaqSection from "../components/FaqSection.vue";
import CaseStudies from "../components/CaseStudies.vue";
definePageMeta(({
  title: "Consulting & Web Development Company"
}))
</script>

<template>
  <HeroSection/>
  <TrustBar/>
  <ServiceSection/>
  <CaseStudies/>
  <IndustryExpertise/>
  <ProcessSection/>
  <FaqSection/>
</template>

<style scoped>

</style>