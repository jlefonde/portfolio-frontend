<script setup lang="ts">
import type { LucideIcon } from "lucide-vue-next";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    title: string;
    titleSize?: string;
    titleColor?: string;
    icon?: LucideIcon | IconDefinition;
    iconColor?: string;
    iconSize?: string;
    headerSize?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  }>(),
  {
    titleColor: "base-50",
    iconSize: "6",
    iconColor: "base-50",
    headerSize: "h1",
  },
);

const isFontAwesome = computed(() => {
  return props.icon && typeof props.icon === "object" && "icon" in props.icon;
});

type FontAwesomeSize =
  | "2xs"
  | "xs"
  | "sm"
  | "lg"
  | "xl"
  | "2xl"
  | "1x"
  | "2x"
  | "3x"
  | "4x"
  | "5x"
  | "6x"
  | "7x"
  | "8x"
  | "9x"
  | "10x";

const fontAwesomeSize = computed((): FontAwesomeSize => {
  const sizeMap: Record<string, FontAwesomeSize> = {
    "3": "xs",
    "4": "sm",
    "5": "lg",
    "6": "xl",
    "7": "2x",
    "8": "2x",
  };
  return sizeMap[props.iconSize] || "lg";
});
</script>

<template>
  <component :is="headerSize" class="flex items-center gap-2">
    <FontAwesomeIcon v-if="icon && isFontAwesome" :icon="icon" :size="fontAwesomeSize" :class="`text-${iconColor}`" />
    <component v-else-if="icon" :is="icon" :class="`text-${iconColor} size-${iconSize}`" />
    <div class="font-bold" :class="`text-${titleSize} text-${titleColor}`">{{ title }}</div>
  </component>
</template>
