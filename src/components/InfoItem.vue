<script setup lang="ts">

import { Icon } from "@iconify/vue";

withDefaults(
  defineProps<{
    label?: string;
    value: string;
    icon?: string;
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
    <Icon v-if="icon" :icon="icon" class="size-5" :class="`text-${iconColor}`" />
    <b v-if="label">{{ label }}:</b>
    {{ value }}
  </div>
</template>
