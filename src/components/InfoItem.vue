<script setup lang="ts">
import type { LucideIcon } from "lucide-vue-next";

withDefaults(
  defineProps<{
    label?: string;
    value: string;
    icon: LucideIcon;
    iconColor?: string;
    textColor?: string;
  }>(),
  {
    iconColor: "base-50",
    textColor: "base-50",
  },
);
</script>

<template>
  <div class="flex gap-2 text-sm" :class="`text-${textColor}`">
    <component :is="icon" class="size-5" :class="`stroke-${iconColor}`" />
    <b v-if="label">{{ label }}:</b>
    {{ value }}
  </div>
</template>
