<script setup lang="ts">
import type { Bar } from "../types";
import { useBarChart } from "../composables/useBarChart";

const props = defineProps<Bar>();

const { getBarColor } = useBarChart(props);
const barColor = getBarColor();
</script>

<template>
  <div class="flex h-full w-full flex-col items-center gap-5">
    <div class="font-sm" :class="`text-${barColor}-light`">{{ percentage }}%</div>
    <div class="bg-base-150 flex h-full w-16 flex-1 items-end gap-5 rounded-sm">
      <div
        class="w-full rounded-sm border-t-3"
        :class="`bg-${barColor}-dark border-t-${barColor}-light`"
        :style="`height: ${percentage}%`"
      ></div>
    </div>
    <div class="font-sm text-base-50">{{ label }}</div>
  </div>
</template>
