<script setup lang="ts">
import type { Tag } from '../types'

withDefaults(
  defineProps<
    Tag & {
      as?: 'div' | 'button'
    }
  >(),
  {
    as: 'div',
    textColor: 'base-50',
    bgColor: 'base-200',
  }
)
</script>

<template>
  <component
    :is="as"
    class="flex cursor-pointer rounded-full px-3 py-1 text-xs font-bold hover:scale-105"
    :class="`bg-${bgColor} text-${textColor}`"
  >
    <component v-if="icon" :is="icon" class="mr-2 size-4" />
    <span class="m-auto text-center">{{ name }}</span>
  </component>
</template>
