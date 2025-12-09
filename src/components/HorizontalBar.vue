<script setup lang="ts">
import type { Bar } from "../types";
import { useBarChart } from "../composables/useBarChart";

const props = defineProps<Bar>();

const { getBarColor } = useBarChart(props);
const barColor = getBarColor();
</script>

<template>
  <div class="flex h-16 items-center gap-5">
    <div class="font-sm text-base-50 w-16">{{ label }}</div>
    <div class="bg-base-150 flex h-full flex-1 items-center gap-5 rounded-sm">
      <div
        class="h-full rounded-sm border-r-3"
        :class="`bg-${barColor}-dark border-r-${barColor}-light`"
        :style="`width: ${percentage}%`"
      ></div>
    </div>
    <div class="font-sm w-12 text-right" :class="`text-${barColor}-light`">{{ percentage }}%</div>
  </div>
</template>
