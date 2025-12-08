<script setup lang="ts">
import type { Tag } from "../types";

withDefaults(defineProps<Tag>(), {
  textColor: "base-50",
  bgColor: "base-200",
});
</script>

<template>
  <span class="rounded-full px-3 py-1 text-xs font-bold" :class="`bg-${bgColor} text-${textColor}`">{{ name }}</span>
</template>
