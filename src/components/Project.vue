<script setup lang="ts">
import type { Project } from '../types'
import Tag from '../components/Tag.vue'
import ILucideStar from '~icons/lucide/star'
import IOcticonMarkGithub24 from '~icons/octicon/mark-github-24'
import ILucideGlobe from '~icons/lucide/globe'
import ILucideArrowUpRight from '~icons/lucide/arrow-up-right'
import ILucideChevronDown from '~icons/lucide/chevron-down'

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
</script>

<template>
  <div class="card hover:scale-101">
    <div class="flex flex-1 flex-col gap-3">
      <img :src="cover.path" :alt="cover.alt" class="h-72 w-full border-base-150 border rounded-md object-contain" />
      <div class="flex justify-between">
        <h1 class="text-base-50 font-bold">{{ name }}</h1>
        <component :is="ILucideStar" class="size-6" :class="featured ? `text-${featuredColor}` : `text-base-100`" />
      </div>
      <div class="text-base-100 text-sm">{{ highlight }}</div>
      <div class="flex flex-col gap-3">
        <div
          v-if="githubLink"
          class="text-base-100 group flex cursor-pointer items-center justify-between hover:opacity-75"
        >
          <a :href="githubLink" target="_blank" title="GitHub" class="flex gap-2 text-sm">
            <component :is="IOcticonMarkGithub24" class="size-5" />
            <div class="m-auto">View source</div>
          </a>
          <component :is="ILucideArrowUpRight" class="size-5 opacity-0 group-hover:opacity-75" />
        </div>
        <div
          v-if="liveLink"
          class="text-base-100 group flex cursor-pointer items-center justify-between hover:opacity-75"
        >
          <a :href="liveLink" target="_blank" title="Website" class="flex gap-2 text-sm">
            <component :is="ILucideGlobe" class="size-5" />
            <div class="m-auto">Live Website</div>
          </a>
          <component :is="ILucideArrowUpRight" class="size-5 opacity-0 group-hover:opacity-75" />
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-3">
      <div class="flex flex-wrap gap-x-1 gap-y-2">
        <Tag v-for="stack in stacks" :key="stack.name" v-bind="stack" />
      </div>
      <button
        class="text-base-100 border-t-base-150 flex cursor-pointer flex-col items-center border-t pt-3 text-sm hover:opacity-75"
      >
        <div class="m-auto">Click for details</div>
        <component :is="ILucideChevronDown" class="size-5" />
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
