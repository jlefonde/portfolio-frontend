<script setup lang="ts">
import Stat from "../components/Stat.vue";
import { routes } from "../router.ts";
import { useRoute } from "vue-router";
import { AtSignIcon } from "lucide-vue-next";

const route = useRoute();
const navRoute = routes.find((r) => r.path == route.path);
console.log(navRoute);
</script>

<template>
  <div class="grid grid-cols-5 grid-rows-8 gap-5">
    <div class="bg-base-300 col-span-3 row-span-4 flex flex-col gap-2 rounded-xl p-3">
      <div class="flex gap-2">
        <component :is="navRoute?.icon" :class="`stroke-${navRoute?.color}`"></component>
        <div class="text-base-50 font-bold">{{ route.name }}</div>
      </div>
      <div class="bg-base-350 flex flex-col rounded-md p-3">
        <div class="flex items-center gap-2">
          <AtSignIcon class="stroke-orange-light" />
          <div class="text-base-50 text-sm font-bold">Email</div>
        </div>
      </div>
    </div>
    <Stat class="col-start-4 row-span-2 h-48" name="Visitor Count" value="50" colorClass="text-orange-light" />
    <Stat class="col-start-5 row-span-2 h-48" name="Month-to-Date Cost" value="$0.95" colorClass="text-red-light" />
    <Stat
      class="col-start-4 row-span-2 row-start-3 h-48"
      name="Response Time"
      value="<24h"
      colorClass="text-green-light"
    />
    <Stat
      class="col-start-5 row-span-2 row-start-3 h-48"
      name="Certifications Earned"
      value="1"
      colorClass="text-blue-light"
      redirect="/certifications"
    />
    <div class="col-span-3 row-span-3 row-start-5">6</div>
    <div class="col-span-2 col-start-4 row-span-4 row-start-5">7</div>
  </div>
</template>
