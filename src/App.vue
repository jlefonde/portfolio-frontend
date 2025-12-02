<script setup lang="ts">
import Header from "./components/Header.vue";
import Sidebar from "./components/Sidebar.vue";
</script>

<template>
  <div class="flex h-screen">
    <Sidebar />
    <div class="flex flex-1 flex-col">
      <Header />
      <main class="bg-base-350 flex-1">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<style scoped></style>
