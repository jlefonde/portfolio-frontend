<script setup lang="ts">
import type { Component } from 'vue'

withDefaults(
  defineProps<{
    label?: string
    value: string
    icon?: Component
    iconColor?: string
    textColor?: string
  }>(),
  {
    iconColor: 'base-50',
    textColor: 'base-50',
  }
)
</script>

<template>
  <div class="flex gap-2 text-sm" :class="`text-${textColor}`">
    <component v-if="icon" :is="icon" class="size-5" :class="`text-${iconColor}`" />
    <b v-if="label">{{ label }}:</b>
    {{ value }}
  </div>
</template>
