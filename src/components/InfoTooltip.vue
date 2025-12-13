<script setup lang="ts">
import { Icon } from "@iconify/vue";

const props = withDefaults(defineProps<{
  position?: "top" | "bottom" | "left" | "right";
}>(), {
  position: "top",
});

const positionClass = new Map<string, string>([
  ["top", "bottom-full"],
  ["bottom", "top-full"],
  ["left", "right-full"],
  ["right", "left-full"],
]);
</script>

<template>
  <div class="relative group flex items-center">
    <Icon icon="lucide:info" class="cursor-help transition-colors text-base-50 hover:text-base-100 size-6" />
    <div :class="positionClass.get(props.position)" class="absolute z-50 m-2 flex w-max origin-right flex-col gap-3 rounded-lg border border-base-150 bg-base-350/95 p-3 text-sm shadow-xl backdrop-blur-sm transition-all duration-200 ease-out scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100">
      <slot></slot>
    </div>
  </div>
</template>