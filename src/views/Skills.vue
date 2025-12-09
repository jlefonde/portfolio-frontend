<script setup lang="ts">
import Stat from "../components/Stat.vue";
import Title from "../components/Title.vue";
import VerticalBarChart from "../components/VerticalBarChart.vue";
import { routes } from "../router/routes";
import { certifications } from "../data/certifications";
import { skills } from "../data/skills";
import { useRoute } from "vue-router";

const route = useRoute();
const navRoute = routes.find((r) => r.path == route.path);

import {
  Chart as ChartJS,
  Title as ChartTitle,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "vue-chartjs";

ChartJS.register(CategoryScale, LinearScale, BarElement, ChartTitle, Tooltip, Legend);

const data = {
  labels: ["January", "February", "March"],
  datasets: [{ data: [40, 20, 12] }],
};
</script>

<template>
  <div class="grid grid-cols-5 grid-rows-8 gap-5">
    <div class="card col-span-3 row-span-4">
      <Title :title="navRoute?.name?.toString() ?? ''" :icon="navRoute?.icon" :icon-color="navRoute?.primaryColor" />
      <Bar
        :data="data"
        :options="{
          responsive: true,
        }"
      />
    </div>
    <Stat class="col-start-4 row-span-2 min-h-56" name="Visitors Count" value="50" color="orange-light" />
    <Stat class="col-start-5 row-span-2 min-h-56" name="Month Cost-to-Date" value="$0.95" color="red-light" />
    <Stat class="col-start-4 row-span-2 row-start-3 min-h-56" name="Response Time" value="<24h" color="green-light" />
    <Stat
      class="col-start-5 row-span-2 row-start-3 min-h-56"
      name="Certifications Earned"
      :value="certifications.length.toString()"
      color="blue-light"
      redirect="/certifications"
    />
    <div class="card col-span-full row-span-4 row-start-5">
      <VerticalBarChart :bars="skills" />
    </div>
  </div>
</template>
