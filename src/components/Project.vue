<script setup lang="ts">
import { Icon } from '@iconify/vue'

import type { Project } from '../types'
import Tag from '../components/Tag.vue'
import { projects } from '../data/projects'
// import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
// import 'vue3-carousel/carousel.css'

withDefaults(
  defineProps<
    Project & {
      featuredColor?: string
    }
  >(),
  {
    featuredColor: 'base-50',
  }
)

// const carouselConfig = {
//   itemsToShow: 1,
// }
</script>

<template>
  <div class="card hover:scale-101">
    <div class="flex flex-col gap-3 flex-1">
      <div class="flex justify-between">
        <h1 class="text-base-50 font-bold">{{ name }}</h1>
        <Icon icon="lucide:star" class="size-6" :class="featured ? `text-${featuredColor}` : `text-base-100`" />
      </div>
      <div class="text-base-100 text-sm">{{ highlight }}</div>
      <div class="flex flex-col gap-3">
        <div v-if="githubLink" class="text-base-100 group flex cursor-pointer items-center justify-between hover:opacity-75">
          <a :href="githubLink" target="_blank" title="GitHub" class="flex gap-2 text-sm">
            <Icon icon="octicon:mark-github-24" class="size-5" />
            <div class="m-auto">View source</div>
          </a>
          <Icon icon="lucide:arrow-up-right" class="size-5 opacity-0 group-hover:opacity-75" />
        </div>
        <div v-if="liveLink" class="text-base-100 group flex cursor-pointer items-center justify-between hover:opacity-75">
          <a :href="liveLink" target="_blank" title="Website" class="flex gap-2 text-sm">
            <Icon icon="lucide:globe" class="size-5" />
            <div class="m-auto">Live Website</div>
          </a>
          <Icon icon="lucide:arrow-up-right" class="size-5 opacity-0 group-hover:opacity-75" />
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-3">
      <div class="flex flex-wrap gap-x-1 gap-y-2">
        <Tag v-for="stack in stacks" :key="stack.name" v-bind="stack" />
      </div>
      <button class="text-base-100 flex cursor-pointer flex-col items-center text-sm hover:opacity-75 border-t border-t-base-150 pt-3">
        <div class="m-auto">Click for details</div>
        <Icon icon="lucide:chevron-down" class="size-5" />
      </button>
    </div>
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
