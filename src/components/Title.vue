<script setup lang="ts">
import type { Component } from 'vue'

withDefaults(
  defineProps<{
    title: string
    titleSize?: string
    titleColor?: string
    icon?: Component
    iconColor?: string
    iconSize?: string
    headerSize?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  }>(),
  {
    titleColor: 'base-50',
    iconSize: '6',
    iconColor: 'base-50',
    headerSize: 'h1',
  }
)
</script>

<template>
  <component :is="headerSize" class="flex items-center gap-2">
    <component v-if="icon" :is="icon" :class="`text-${iconColor} size-${iconSize}`" />
    <div class="font-bold" :class="`text-${titleSize} text-${titleColor}`">{{ title }}</div>
  </component>
</template>
