<script setup lang="ts">
// import Title from '../components/Title.vue'
// import Tag from '../components/Tag.vue'
// import Feature from '../components/Feature.vue'
// import InfoItem from '../components/InfoItem.vue'
// import { projects } from '../data/projects'
// import { routes } from '../router'
// import { useRoute } from 'vue-router'
// import { ref } from 'vue'
// import { Icon } from '@iconify/vue'
// import InfoTooltip from '../components/InfoTooltip.vue'
// import 'vue3-carousel/carousel.css'
// import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

// const route = useRoute()
// const navRoute = routes.find((r) => r.path == route.path)
</script>

<template>
  <div class="grid grid-cols-3 gap-5">
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
  </div>
</template>

<style scoped>
.carousel {
  --vc-nav-color: var(--color-base-50);
  --vc-nav-color-hover: var(--color-base-100);
  --vc-nav-width: 32px;
  --vc-nav-height: 32px;
  --vc-pgn-background-color: var(--color-base-150);
  --vc-pgn-active-color: var(--color-base-50);
  --vc-pgn-border-radius: 4px;
  --vc-pgn-height: 8px;
  --vc-pgn-width: 24px;
}
</style>
