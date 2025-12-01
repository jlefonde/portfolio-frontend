<script setup lang="ts">
import { Sun, Download } from "lucide-vue-next";
</script>

<template>
  <header class="bg-base-300 border-base-150 flex h-14 w-full items-center justify-end gap-3 border-b p-3">
    <div class="bg-green-dark flex items-center gap-2 rounded-md p-1">
      <div class="ml-2">
        <span class="relative flex size-4">
          <span class="bg-green-light absolute size-full animate-ping rounded-full opacity-75"></span>
          <span class="bg-green-light relative size-4 rounded-full"></span>
        </span>
      </div>
      <div class="text-green-light mr-2">AVAILABLE FOR HIRE</div>
    </div>
    <div class="bg-base-150 h-8 w-px"></div>
    <Download class="stroke-base-100 hover:stroke-base-50" />
    <div class="bg-base-150 h-8 w-px"></div>
    <Sun class="stroke-base-100 hover:stroke-base-50" />
  </header>
</template>

<style scoped></style>
