<script setup lang="ts">
import { ArrowRight } from "lucide-vue-next";
import InfoTooltip from "./InfoTooltip.vue";
import { useSlots } from 'vue'

defineProps<{
  name: string;
  value: string;
  color: string;
  redirect?: string;
}>();

const slots = useSlots()
</script>

<template>
  <div class="bg-base-300 flex w-full flex-col items-center rounded-xl p-3">
    <div class="flex w-full gap-3">
      <div class="flex-1">
        <InfoTooltip v-if="slots.default" position="left">
          <slot></slot>
        </InfoTooltip>
      </div>
      <div class="text-base-50 font-bold">{{ name }}</div>
      <div class="flex-1 text-right">
        <RouterLink v-if="redirect" :to="redirect">
          <ArrowRight class="text-base-100 hover:rounded-sm hover:text-base-50 hover:bg-base-150 inline-block" />
        </RouterLink>
      </div>
    </div>
    <div class="m-auto text-6xl font-bold" :class="`text-${color}`">{{ value }}</div>
  </div>
</template>
