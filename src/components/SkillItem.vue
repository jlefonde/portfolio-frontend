<script setup lang="ts">
import Tag from "../components/Tag.vue";
import HorizontalBar from "../components/HorizontalBar.vue";
import type { Skill } from "../types";
import { Icon } from "@iconify/vue";

withDefaults(defineProps<Skill & {
    showProficiency?: boolean
}>(), {
    showProficiency: false
});
</script>

<template>
  <div class="bg-base-300 col-span-1 flex flex-col gap-3 rounded-xl p-3">
    <div class="flex gap-3">
      <Icon :icon="stack.iconList ?? ''" class="size-16" />
      <div class="flex flex-col justify-around">
        <div class="text-base-50 font-bold">{{ stack.name }}</div>
        <div class="flex flex-wrap gap-x-1 gap-y-2">
          <Tag v-for="category in stack.categories" v-bind="category" />
        </div>
      </div>
    </div>
    <HorizontalBar v-if="showProficiency" label="Proficiency" :percentage="percentage" :top-label="true" />
  </div>
</template>
