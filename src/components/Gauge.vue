<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    name: string
    value: number
    mediumThreshold?: number
    highThreshold?: number
  }>(),
  {
    mediumThreshold: 33,
    highThreshold: 66,
  }
)

const cssProps = computed(() => {
  let gaugeColor = 'var(--color-red-light)'
  if (props.value > props.highThreshold) gaugeColor = 'var(--color-green-light)'
  else if (props.value > props.mediumThreshold) gaugeColor = 'var(--color-orange-light)'

  return {
    '--medium-threshold': props.mediumThreshold / 100,
    '--high-threshold': props.highThreshold / 100,
    '--value': props.value / 100,
    '--gauge-color': gaugeColor,
  }
})
</script>

<template>
  <div class="bg-base-300 flex w-full flex-col items-center rounded-xl p-3">
    <div id="gauge-outside" class="size-64 rounded-full" :style="cssProps">
      <div id="gauge" class="m-2 flex size-60 items-end justify-center rounded-full" :style="cssProps">
        <div class="flex flex-col items-center">
          <div id="gauge-value" class="text-6xl font-bold" :style="cssProps">{{ value }}%</div>
          <div class="text-base-50 bottom-0 mb-0 pb-0 font-bold">{{ name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#gauge-outside {
  background:
    radial-gradient(var(--color-base-300) 68%, transparent 69%),
    conic-gradient(
      from -110deg,
      var(--color-red-light) calc(220deg * var(--medium-threshold)),
      var(--color-orange-light) calc(220deg * var(--medium-threshold)) calc(220deg * var(--high-threshold)),
      var(--color-green-light) calc(220deg * var(--high-threshold)) 220deg,
      transparent 220deg 100%
    );
}

#gauge {
  background:
    radial-gradient(var(--color-base-300) 49%, transparent 50%),
    conic-gradient(
      from -110deg,
      var(--gauge-color) calc(220deg * var(--value)),
      var(--color-base-150) calc(220deg * var(--value)) 220deg,
      transparent 220deg 100%
    );
}

#gauge-value {
  color: var(--gauge-color);
}
</style>
