<script setup lang="ts">
import { certifications } from '../data/certifications'
import Certification from '../components/Certification.vue'
import Stat from '../components/Stat.vue'
</script>

<template>
  <div class="mb-5 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
    <Stat class="min-h-56" name="Certifications Earned" :value="certifications.length.toString()" color="blue-light" />
  </div>
  <div class="grid sm:grid-cols md:grid-cols-2 2xl:grid-cols-3 gap-5">
    <Certification class="min-h-72" v-for="cert in certifications" :key="cert.name" v-bind="cert" />
  </div>
</template>
