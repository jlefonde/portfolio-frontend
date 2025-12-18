<script setup lang="ts">
import ILucideArrowUpRight from '~icons/lucide/arrow-up-right'
import type { Link } from '../types'

defineProps<Link>()
</script>

<template>
  <div class="text-base-100 group flex cursor-pointer items-center justify-between hover:opacity-75">
    <a :href="href" target="_blank" :title="name" class="flex gap-2 text-sm">
      <component v-if="icon" :is="icon" class="size-5" />
      <div class="m-auto">{{ name }}</div>
    </a>
    <component :is="ILucideArrowUpRight" class="size-5 opacity-0 group-hover:opacity-75" />
  </div>
</template>
