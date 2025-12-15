<script setup lang="ts">
import Tag from "./Tag.vue";
import InfoItem from "./InfoItem.vue";
import type { Certification } from "../types";
import { Icon } from "@iconify/vue"

defineProps<Certification>();
</script>

<template>
  <div class="bg-base-300 flex w-full flex-col gap-4 rounded-xl p-3">
    <div class="flex gap-1">
      <img class="size-24 shrink-0 object-contain" :src="logoSrc" alt="cert-logo" />
      <div class="flex flex-col gap-1">
        <div class="text-base-50 font-bold">{{ name }}</div>
        <div class="text-blue-light text-sm font-bold">{{ issuer }}</div>
      </div>
    </div>
    <div class="flex flex-col gap-3">
      <InfoItem label="Issued" :value="issued" icon="lucide:calendar-check-2" text-color="base-100" icon-color="base-100" />
      <InfoItem label="Expires" :value="expires" icon="lucide:calendar-x-2" text-color="base-100" icon-color="base-100" />
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
      <Icon icon="lucide:square-arrow-out-up-right" class="text-green-light size-5" />
      <span class="text-green-light text-sm font-bold">Verify Credential</span>
    </a>
  </div>
</template>
