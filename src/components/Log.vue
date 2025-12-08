<script setup lang="ts">
import type { Log, LogLevel } from "../types";
import { logLevels } from "../data/logs";

const props = defineProps<Log>();
const level = props.logLevel || logLevels.INFO;
</script>

<template>
  <div class="flex gap-5">
    <div class="text-base-100 text-sm whitespace-nowrap">{{ timestamp }}</div>
    <div class="w-20 text-sm font-bold" :class="`text-${level?.color}`">{{ level?.name }}</div>
    <div class="text-base-50 text-sm leading-relaxed">{{ message }}</div>
  </div>
</template>
