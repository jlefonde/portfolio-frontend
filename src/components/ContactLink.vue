<script setup lang="ts">
import Title from "./Title.vue";
import type { Contact } from "../types";

defineProps<Contact>();
</script>

<template>
  <div class="bg-base-350 flex flex-col gap-2 rounded-md p-3">
    <Title :title="title" title-size="sm" :icon="icon" :icon-color="color" icon-size="5" header-size="h2" />
    <a :href="href" class="text-sm underline underline-offset-3" :class="`text-${color}`">{{ linkText }}</a>
  </div>
</template>
