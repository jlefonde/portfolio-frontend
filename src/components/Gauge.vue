<script setup lang="ts">
defineProps<{
  value: number;
}>();
</script>

<template>
  <div class="gauge" style="--value: 0.5"></div>
  <!-- <div class="size-64 border-[calc]" style="--value: 0.5"></div> -->
</template>

<style scoped>
.gauge {
  --size: 200px;
  width: var(--size);
  height: var(--size);
  border-radius: 100%;
  background:
    radial-gradient(var(--color-base-350) 49%, transparent 50%),
    conic-gradient(
      from -135deg,
      red calc(270deg * var(--value)),
      grey calc(270deg * var(--value)) 270deg,
      transparent 270deg 100%
    );
  text-align: center;
  line-height: var(--size);
}
</style>
