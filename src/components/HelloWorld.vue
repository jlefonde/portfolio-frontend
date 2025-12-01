<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string }>();
</script>

<template>
  <h1 class="text-blue-light">{{ msg }}</h1>
</template>

<style scoped></style>
