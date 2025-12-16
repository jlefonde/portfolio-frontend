<script setup lang="ts">
import type { Bar } from '../types'
import VerticalBar from './VerticalBar.vue'

defineProps<{
  bars: Bar[]
}>()
</script>

<template>
  <div class="flex h-full justify-around">
    <VerticalBar v-for="bar in bars" v-bind="bar" />
  </div>
</template>
