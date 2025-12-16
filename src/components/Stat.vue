<script setup lang="ts">
import { useSlots } from 'vue'
import { Icon } from '@iconify/vue'

import InfoTooltip from './InfoTooltip.vue'

defineProps<{
  name: string
  value: string
  color: string
  redirect?: string
}>()

const slots = useSlots()
</script>

<template>
  <div class="bg-base-300 flex w-full flex-col items-center rounded-xl p-3">
    <div class="flex w-full gap-3">
      <div class="flex-1">
        <InfoTooltip v-if="slots.default" position="left">
          <slot></slot>
        </InfoTooltip>
      </div>
      <div class="text-base-50 font-bold">{{ name }}</div>
      <div class="flex-1 text-right">
        <RouterLink v-if="redirect" :to="redirect">
          <Icon
            icon="lucide:arrow-right"
            class="text-base-100 hover:text-base-50 hover:bg-base-150 inline-block size-6 hover:rounded-sm"
          />
        </RouterLink>
      </div>
    </div>
    <div class="m-auto text-6xl font-bold" :class="`text-${color}`">{{ value }}</div>
  </div>
</template>
