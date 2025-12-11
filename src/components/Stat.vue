<script setup lang="ts">
import { ArrowRight } from "lucide-vue-next";

defineProps<{
  name: string;
  value: string;
  color: string;
  redirect?: string;
}>();
</script>

<template>
  <div class="bg-base-300 flex w-full flex-col items-center rounded-xl p-3">
    <div class="relative flex w-full items-center justify-center">
      <div class="text-base-50 font-bold">{{ name }}</div>
      <RouterLink v-if="redirect" :to="redirect" class="absolute right-0">
        <ArrowRight class="text-base-100 hover:rounded-sm hover:text-base-50 hover:bg-base-150" />
      </RouterLink>
    </div>
    <div class="m-auto text-6xl font-bold" :class="`text-${color}`">{{ value }}</div>
  </div>
</template>
