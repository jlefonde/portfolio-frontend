<script setup lang="ts">
import type { Bar } from '../types'
import { useBarChart } from '../composables/useBarChart'

const props = withDefaults(defineProps<Bar & { topLabel?: boolean }>(), {
  topLabel: false,
})

const { getBarColor } = useBarChart(props)
const barColor = getBarColor()
</script>

<template>
  <div class="flex flex-col gap-1">
    <div v-if="label && topLabel" class="text-base-100 text-sm">Proficiency</div>
    <div class="flex items-center h-10 gap-3">
      <div v-if="label && !topLabel" class="text-sm text-base-50 w-32 shrink-0">{{ label }}</div>
      <div class="bg-base-150 flex h-full flex-1 items-center gap-5 rounded-sm">
        <div
          class="h-full rounded-sm border-r-3"
          :class="`bg-${barColor}-dark border-r-${barColor}-light`"
          :style="`width: ${percentage}%`"
        ></div>
      </div>
      <div class="text-sm text-right w-12 shrink-0" :class="`text-${barColor}-light`">{{ percentage }}%</div>
    </div>
  </div>
</template>
