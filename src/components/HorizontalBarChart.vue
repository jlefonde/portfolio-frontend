<script setup lang="ts">
import type { Bar } from "../types";
import HorizontalBar from "./HorizontalBar.vue";

defineProps<{
  bars: Bar[];
}>();
</script>

<template>
  <div class="flex h-full flex-col justify-around">
    <HorizontalBar v-for="bar in bars" v-bind="bar" />
  </div>
</template>
