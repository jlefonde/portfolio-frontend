<script setup lang="ts">
import { User, Code } from "lucide-vue-next";
</script>

<template>
  <aside class="bg-base-300 border-base-150 flex h-screen w-96 flex-col border-r">
    <header class="border-base-150 h-14 border-b"></header>
    <nav class="flex flex-1 flex-col gap-1 p-5">
      <div
        class="border-red-light text-base-50 bg-base-200 flex h-10 w-80 items-center gap-3 rounded-md border-l-4 p-2"
      >
        <User class="stroke-base-50" />
        About
      </div>
      <div
        class="hover:text-base-50 group hover:bg-base-200 text-base-100 flex h-10 w-80 items-center gap-3 rounded-md p-2"
      >
        <Code class="group-hover:stroke-base-50 stroke-base-100" />
        Skills
      </div>
    </nav>
  </aside>
</template>

<style scoped></style>
