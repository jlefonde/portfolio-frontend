<script setup lang="ts">
defineProps<{
  value: number;
}>();
</script>

<template>
  <div class="bg-base-300 flex w-full flex-col items-center rounded-xl p-3">
    <div class="gauge-outside size-64 rounded-full">
      <div class="gauge size-60 m-2 flex items-end justify-center rounded-full" style="--value: 0.8">
        <div class="flex flex-col">
          <div class="font-bold text-green-light text-6xl">80%</div>
          <div class="font-bold text-base-50 text-center pt-5">Cloud</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.gauge-outside {
  background:
    radial-gradient(var(--color-base-300) 68%, transparent 69%),
    conic-gradient(
      from -112deg,
      var(--color-red-light) calc(224deg / 3),
      var(--color-orange-light) calc(224deg / 3) calc(224deg * 2 / 3),
      var(--color-green-light) calc(224deg * 2 / 3) 224deg,
      transparent 224deg 100%
    );
}

.gauge {
  background:
    radial-gradient(var(--color-base-300) 49%, transparent 50%),
    conic-gradient(
      from -112deg,
      var(--color-green-light) calc(224deg * var(--value)),
      var(--color-base-150) calc(224deg * var(--value)) 224deg,
      transparent 224deg 100%
    );
}
</style>
