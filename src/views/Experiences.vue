<script setup lang="ts">
import { routes } from "../router";
import { experiences } from "../data/experiences";
import { useRoute } from "vue-router";
import Title from "../components/Title.vue";
import TimelineItem from "../components/TimelineItem.vue";

const route = useRoute();
const navRoute = routes.find((r) => r.path == route.path);
const highlightColor = navRoute?.primaryColor ?? "";
const highlightRingColor = navRoute?.secondaryColor ?? "";
</script>

<template>
  <div class="card bg-base-300 w-full">
    <Title :title="navRoute?.name?.toString() ?? ''" :icon="navRoute?.icon" :icon-color="highlightColor" />
    <div class="flex w-full flex-col gap-5">
      <TimelineItem
        v-for="(experience, index) in experiences"
        :timeline="experience"
        :highlight-color="highlightColor"
        :highlight-ring-color="highlightRingColor"
        :is-latest="index == 0"
      />
    </div>
  </div>
</template>
