<script setup lang="ts">
import { Icon } from "@iconify/vue";
import type { Feature } from "../types";

withDefaults(defineProps<Feature>(), {
  iconColor: "base-50",
});
</script>

<template>
  <div class="flex gap-2">
    <Icon :icon="icon" class="size-5" :class="`text-${iconColor}`" />
    <div class="flex flex-col gap-2">
      <div class="text-base-50 text-sm">{{ name }}</div>
      <div class="text-base-100 text-xs">{{ description }}</div>
    </div>
  </div>
</template>
