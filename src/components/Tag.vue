<script setup lang="ts">
import type { Tag } from "../types";
import { Icon } from "@iconify/vue"

withDefaults(defineProps<Tag>(), {
  textColor: "base-50",
  bgColor: "base-200",
});
</script>

<template>
  <div class="flex rounded-full px-3 py-1 text-xs font-bold" :class="`bg-${bgColor} text-${textColor}`">
    <Icon v-if="icon" :icon="icon" class="size-4 mr-2"/>
    {{ name }}
  </div>
</template>
