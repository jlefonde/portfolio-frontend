<script setup lang="ts">
import Gauge from "../components/Gauge.vue";
import Title from "../components/Title.vue";
import Tag from "../components/Tag.vue";
import VerticalBarChart from "../components/VerticalBarChart.vue";
import { routes } from "../router";
import { skills } from "../data/skills";
import { useRoute } from "vue-router";
import { getColorHex } from "../composables/color";
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip } from "chart.js";
import { Radar } from "vue-chartjs";
import type { Bar } from "../types";
import { Icon } from "@iconify/vue";
import HorizontalBar from "../components/HorizontalBar.vue";

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

const overviewSelected = false;
</script>

<template>
  <div class="mb-5 flex flex-col items-center">
    <div class="bg-base-300 flex gap-2 rounded-xl p-2">
      <button
        class="text-orange-light bg-orange-dark flex cursor-pointer items-center gap-2 rounded-sm px-5 py-3 hover:opacity-80"
      >
        <Icon icon="lucide:chart-column" class="size-5" />
        Overview
      </button>
      <button
        class="text-base-50 bg-base-150 flex cursor-pointer items-center gap-2 rounded-sm px-5 py-3 hover:opacity-80"
      >
        <Icon icon="lucide:list" class="size-5" />
        List Skills
      </button>
    </div>
  </div>
  <div v-if="overviewSelected" class="grid grid-cols-5 grid-rows-8 gap-5">
    <div class="card col-span-2 row-span-4">
      <Title :title="navRoute?.name?.toString() ?? ''" :icon="navRoute?.icon" :icon-color="navRoute?.primaryColor" />
      <div class="flex h-full w-full items-center justify-center px-8 py-4">
        <div class="w-full max-w-lg">
          <Radar :data="radarChart.data" :options="radarChart.options" />
        </div>
      </div>
    </div>
    <Gauge
      class="row-span-2 min-h-56 min-w-72"
      v-for="category in categories"
      :name="category[0]"
      :value="Math.round(category[1].sum / category[1].count)"
    />
    <div class="card col-span-full row-span-4 row-start-5">
      <VerticalBarChart :bars="skillBarChart" />
    </div>
  </div>
  <div v-else class="mb-5 flex flex-col items-center gap-5">
    <div class="relative h-14 w-1/2 rounded-xl">
      <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <Icon icon="lucide:search" class="text-base-100 size-5" />
      </div>
      <input
        placeholder="Search"
        class="text-base-50 bg-base-300 block h-full w-full rounded-xl p-3 pl-10 text-sm"
        type="text"
        maxlength="64"
      />
    </div>
    <div class="grid w-full grid-cols-4">
      <div class="bg-base-300 col-span-1 flex flex-col gap-3 rounded-xl p-3">
        <div class="flex gap-3">
          <Icon icon="skill-icons:docker" class="size-16" />
          <div class="flex flex-col justify-around">
            <div class="text-base-50 font-bold">Docker</div>
            <div class="flex flex-wrap gap-x-1 gap-y-2">
              <Tag name="test" />
              <Tag name="test" />
              <Tag name="test" />
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-1">
          <div class="text-base-100 text-sm">Proficiency</div>
          <HorizontalBar :percentage="80"/>
        </div>
      </div>
    </div>
  </div>
</template>
