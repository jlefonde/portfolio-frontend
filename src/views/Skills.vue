<script setup lang="ts">
import Gauge from "../components/Gauge.vue";
import Title from "../components/Title.vue";
import VerticalBarChart from "../components/VerticalBarChart.vue";
import { routes } from "../router";
import { skills } from "../data/skills";
import { useRoute } from "vue-router";
import { getColorHex } from "../composables/color";
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip } from "chart.js";
import { Radar } from "vue-chartjs";
import type { Bar } from "../types";

const route = useRoute();
const navRoute = routes.find((r) => r.path == route.path);

let skillBarChart: Bar[] = [];
const categories = new Map<string, { sum: number; count: number }>();

skills.forEach((skill) => {
  skill.stack.categories
    .filter((item, pos) => {
      return skill.stack.categories.indexOf(item) == pos;
    })
    .forEach((category) => {
      const mapCategory = categories.get(category.name);
      if (mapCategory == null) {
        categories.set(category.name, { sum: skill.percentage, count: 1 });
      } else {
        mapCategory.sum += skill.percentage;
        mapCategory.count += 1;
      }
    });

  skillBarChart.push({ label: skill.stack.name, percentage: skill.percentage });
});

let categoriesMean: number[] = [];
categories.forEach((value, _) => {
  categoriesMean.push(Math.round(value.sum / value.count));
});

const radarColor = getColorHex(navRoute?.primaryColor ?? "");
const radarChart = {
  data: {
    labels: Array.from(categories.keys()),
    datasets: [
      {
        backgroundColor: radarColor + "64",
        borderColor: radarColor,
        pointBackgroundColor: radarColor,
        pointBorderColor: radarColor,
        pointHoverBackgroundColor: radarColor,
        pointHoverBorderColor: radarColor,
        data: categoriesMean,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 1.5,
    scales: {
      r: {
        max: 100,
        grid: {
          color: getColorHex("base-100"),
        },
        angleLines: {
          color: getColorHex("base-100"),
        },
        ticks: {
          color: getColorHex("base-100"),
          showLabelBackdrop: false,
          callback: (value: any) => {
            return value % 20 === 0 ? `${value}        ` : "";
          },
        },
        pointLabels: {
          color: getColorHex("base-100"),
        },
      },
    },
  },
};

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip);
</script>

<template>
  <div class="grid grid-cols-5 grid-rows-8 gap-5">
    <div class="card col-span-2 row-span-4">
      <Title :title="navRoute?.name?.toString() ?? ''" :icon="navRoute?.icon" :icon-color="navRoute?.primaryColor" />
      <div class="flex h-full w-full items-center justify-center px-8 py-4">
        <div class="w-full max-w-lg">
          <Radar :data="radarChart.data" :options="radarChart.options" />
        </div>
      </div>
    </div>
    <Gauge class="row-span-2 min-h-56 min-w-72" v-for="category in categories" :name="category[0]" :value="Math.round(category[1].sum / category[1].count)" />
    <div class="card col-span-full row-span-4 row-start-5">
      <VerticalBarChart :bars="skillBarChart" />
    </div>
  </div>
</template>
