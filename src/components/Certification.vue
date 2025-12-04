<script setup lang="ts">
import { CalendarCheck2Icon, CalendarX2Icon, SquareArrowOutUpRight } from "lucide-vue-next";
import Tag from "../components/Tag.vue";
import type { Certification } from "../types";

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
      <div class="flex items-center gap-3">
        <CalendarCheck2Icon class="stroke-base-100 size-4" />
        <span class="text-base-100 text-sm">Issued: {{ issued }}</span>
      </div>
      <div class="flex items-center gap-3">
        <CalendarX2Icon class="stroke-base-100 size-4" />
        <span class="text-base-100 text-sm">Expires: {{ expires }}</span>
      </div>
    </div>
    <div v-if="tags" class="flex flex-wrap gap-2">
      <Tag v-for="tag in tags" :key="tag.name" v-bind="tag" />
    </div>
    <a
      v-if="verifyLink"
      class="bg-green-dark hover:bg-green-dark/80 flex cursor-pointer items-center justify-center gap-2 rounded-md p-3 transition-colors hover:opacity-80"
      :href="verifyLink"
      target="_blank"
    >
      <SquareArrowOutUpRight class="stroke-green-light size-5" />
      <span class="text-green-light text-sm font-bold"> Verify Credential</span>
    </a>
  </div>
</template>
