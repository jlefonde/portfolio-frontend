<script setup lang="ts">
import Tag from "./Tag.vue";
import InfoItem from "./InfoItem.vue";
import { computed } from "vue";
import type { Timeline } from "../types";

const props = defineProps<{
  timeline: Timeline;
  highlightColor: string;
  highlightRingColor: string;
  isLatest: boolean;
}>();

const primaryColor = computed(() => {
  return props.isLatest ? props.highlightColor : "base-100";
});

const secondaryColor = computed(() => {
  return props.isLatest ? props.highlightRingColor : "base-150";
});
</script>

<template>
  <div class="flex gap-3">
    <div class="flex flex-col items-center">
      <div class="size-6 rounded-full ring-3" :class="`bg-${primaryColor} ring-${secondaryColor}`"></div>
      <div class="w-1 grow" :class="`bg-${primaryColor}`"></div>
    </div>
    <div class="flex w-full flex-col gap-3">
      <div class="flex gap-2">
        <img
          class="bg-base-50 size-12 shrink-0 rounded-sm object-contain p-2"
          :src="timeline.logoSrc"
          alt="cert-logo"
        />
        <div class="flex flex-col gap-1">
          <div class="font-bold" :class="`text-${primaryColor}`">{{ timeline.name }}</div>
          <div class="text-base-50 font-bold">{{ timeline.organization }}</div>
        </div>
      </div>
      <div class="flex gap-24">
        <InfoItem
          :value="`${timeline.from} — ${timeline.to}`"
          icon="lucide:calendar"
          text-color="base-100"
          icon-color="base-100"
        />
        <InfoItem :value="timeline.location" icon="lucide:map-pin" text-color="base-100" icon-color="base-100" />
      </div>
      <p v-if="timeline.description" class="text-base-50 text-sm leading-relaxed" v-html="timeline.description"></p>
      <ul v-if="timeline.highlights" class="text-base-50 list-inside list-disc text-sm">
        <li
          v-for="(highlight, index) in timeline.highlights"
          :key="index"
          :class="{ 'mt-2': index > 0 }"
          v-html="highlight"
        ></li>
      </ul>
      <div v-if="timeline.tags" class="flex flex-wrap gap-x-1 gap-y-2">
        <Tag v-for="tag in timeline.tags" :key="tag.name" v-bind="tag" />
      </div>
    </div>
  </div>
</template>
