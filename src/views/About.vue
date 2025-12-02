<script setup lang="ts">
import Stat from "../components/Stat.vue";
import { routes } from "../router.ts";
import { useRoute } from "vue-router";

const route = useRoute();
const navRoute = routes.find((r) => r.path == route.path);
console.log(navRoute);
</script>

<template>
  <div class="grid grid-cols-5 grid-rows-8 gap-5">
    <div class="bg-base-300 col-span-3 row-span-4 flex gap-2 rounded-xl p-3">
      <component :is="navRoute?.icon" :class="`stroke-${navRoute?.color}`"></component>
      <div class="text-base-50">{{ route.name }}</div>
    </div>
    <Stat class="col-start-4 row-span-2" name="Visitor Count" value="50" colorClass="text-orange-light" />
    <Stat class="col-start-5 row-span-2" name="Month-to-Date Cost" value="$0.95" colorClass="text-red-light" />
    <Stat class="col-start-4 row-span-2 row-start-3" name="Response Time" value="<24h" colorClass="text-green-light" />
    <Stat
      class="col-start-5 row-span-2 row-start-3"
      name="Certifications Earned"
      value="1"
      colorClass="text-blue-light"
      redirect="/certifications"
    />
    <div class="col-span-3 row-span-3 row-start-5">6</div>
    <div class="col-span-2 col-start-4 row-span-4 row-start-5">7</div>
  </div>
</template>
