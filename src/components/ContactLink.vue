<script setup lang="ts">
import Title from "../components/Title.vue";
import type { Contact } from "../constants/contacts"

defineProps<Contact>();
</script>

<template>
  <div class="bg-base-350 flex flex-col gap-2 rounded-md p-3">
    <Title :title="title" titleSize="sm" :icon="icon" :iconColor="color" iconSize="5" />
    <a :href="href" class="text-sm underline underline-offset-3" :class="`text-${color}`">{{ linkText }}</a>
  </div>
</template>
