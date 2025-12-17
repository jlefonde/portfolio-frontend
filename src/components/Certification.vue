<script setup lang="ts">
import type { Certification } from '../types'
import InfoItem from './InfoItem.vue'
import Tag from './Tag.vue'
import ILucideCalendarCheck2 from '~icons/lucide/calendar-check-2'
import ILucideCalendarX2 from '~icons/lucide/calendar-x-2'
import ILucideSquareArrowOutUpRight from '~icons/lucide/square-arrow-out-up-right'

defineProps<Certification>()
</script>

<template>
  <div class="bg-base-300 flex w-full flex-col gap-4 rounded-xl p-3">
    <div class="flex gap-1">
      <img class="size-24 shrink-0 object-contain" :src="logo.path" :alt="logo.alt" />
      <div class="flex flex-col gap-1">
        <div class="text-base-50 font-bold">{{ name }}</div>
        <div class="text-blue-light text-sm font-bold">{{ issuer }}</div>
      </div>
    </div>
    <div class="flex flex-col gap-3">
      <InfoItem
        label="Issued"
        :value="issued"
        :icon="ILucideCalendarCheck2"
        text-color="base-100"
        icon-color="base-100"
      />
      <InfoItem
        label="Expires"
        :value="expires"
        :icon="ILucideCalendarX2"
        text-color="base-100"
        icon-color="base-100"
      />
    </div>
    <div v-if="tags" class="flex flex-wrap gap-2">
      <Tag v-for="tag in tags" :key="tag.name" v-bind="tag" />
    </div>
    <a
      v-if="verifyLink"
      class="bg-green-dark flex cursor-pointer items-center justify-center gap-2 rounded-md p-3 transition-colors hover:opacity-75"
      :href="verifyLink"
      target="_blank"
    >
      <component :is="ILucideSquareArrowOutUpRight" class="text-green-light size-5" />
      <span class="text-green-light text-sm font-bold">Verify Credential</span>
    </a>
  </div>
</template>
