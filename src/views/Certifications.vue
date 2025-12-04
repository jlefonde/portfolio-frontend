<script setup lang="ts">
import Stat from "../components/Stat.vue";
import Certification from "../components/Certification.vue";
import { certifications } from "../data/certifications";
</script>

<template>
  <div class="mb-5 grid grid-cols-5 gap-5">
    <Stat class="min-h-56" name="Certifications Earned" value="1" color="blue-light" />
  </div>
  <div class="grid grid-cols-3 gap-5">
    <Certification class="min-h-72" v-for="cert in certifications" :key="cert.name" v-bind="cert" />
  </div>
</template>
