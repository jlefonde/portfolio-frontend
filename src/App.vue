<script setup lang="ts">
import Header from './components/Header.vue'
import Sidebar from './components/Sidebar.vue'
</script>

<template>
  <Sidebar />
  <div class="flex flex-1 flex-col">
    <Header class="sticky top-0 z-10" />
    <main class="bg-base-350 flex-1 h-full p-10">
      <RouterView />
    </main>
  </div>
</template>
