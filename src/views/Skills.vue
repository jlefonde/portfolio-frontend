<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { Chart as ChartJS, Filler, LineElement, PointElement, RadialLinearScale, Tooltip } from 'chart.js'
import { Radar } from 'vue-chartjs'
import type { Bar } from '../types'
import { getColorHex } from '../composables/color'
import { routes } from '../router'
import { skills } from '../data/skills'
import Gauge from '../components/Gauge.vue'
import SkillItem from '../components/SkillItem.vue'
import Tag from '../components/Tag.vue'
import Title from '../components/Title.vue'
import VerticalBarChart from '../components/VerticalBarChart.vue'
import ILucideChartColumn from '~icons/lucide/chart-column'
import ILucideList from '~icons/lucide/list'
import ILucideSearch from '~icons/lucide/search'
import ILucideGauge from '~icons/lucide/gauge'

const route = useRoute()
const navRoute = routes.find((r) => r.path == route.path)

let skillBarChart: Bar[] = []
const categories = new Map<string, { sum: number; count: number }>()

const skillCategories = Array.from(
  new Set(skills.flatMap((skill) => skill.stack.categories.map((cat) => cat.name)))
).map((name) => {
  return skills.flatMap((skill) => skill.stack.categories).find((cat) => cat.name === name)!
})

skills
  .filter((s) => s.featured)
  .forEach((skill) => {
    skill.stack.categories.forEach((category) => {
      const mapCategory = categories.get(category.name)
      if (mapCategory == null) {
        categories.set(category.name, { sum: skill.percentage, count: 1 })
      } else {
        mapCategory.sum += skill.percentage
        mapCategory.count += 1
      }
    })

    skillBarChart.push({ label: skill.stack.name, percentage: skill.percentage })
  })

let categoriesMean: number[] = []
categories.forEach((value, _) => {
  categoriesMean.push(Math.round(value.sum / value.count))
})

const radarColor = getColorHex(navRoute?.primaryColor ?? '')
const radarChart = {
  data: {
    labels: Array.from(categories.keys()),
    datasets: [
      {
        backgroundColor: radarColor + '64',
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
          color: getColorHex('base-100'),
        },
        angleLines: {
          color: getColorHex('base-100'),
        },
        ticks: {
          color: getColorHex('base-100'),
          showLabelBackdrop: false,
          callback: (value: any) => {
            return value % 20 === 0 ? `${value}        ` : ''
          },
        },
        pointLabels: {
          color: getColorHex('base-100'),
        },
      },
    },
  },
}

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip)

function setActiveCategoryFilter(index: number) {
  activeCategoryFilter.value = index
}

const overviewSelected = ref(false)
const showProficiency = ref(false)
const activeCategoryFilter = ref(-1)
const skillSearch = ref('')

const filteredSkills = computed(() => {
  const selectedCategory = skillCategories[activeCategoryFilter.value]
  const filteredSkills = skills.filter((s) => s.stack.name.toLowerCase().startsWith(skillSearch.value.toLowerCase()))

  return filteredSkills.filter((skill) => {
    if (activeCategoryFilter.value == -1) {
      return true
    }

    if (!selectedCategory) {
      return false
    }

    return skill.stack.categories.some((cat) => cat.name === selectedCategory.name)
  })
})
</script>

<template>
  <div class="mb-5 flex flex-col items-center">
    <div class="flex gap-2 rounded-xl p-2">
      <button
        class="bg-base-300 flex cursor-pointer items-center gap-2 rounded-sm px-5 py-3 hover:opacity-75"
        :class="overviewSelected ? `text-${navRoute?.primaryColor}` : `text-base-50`"
        @click="overviewSelected = true"
        title="Show overview charts"
      >
        <component :is="ILucideChartColumn" class="size-5" />
        Overview
      </button>
      <button
        class="bg-base-300 flex cursor-pointer items-center gap-2 rounded-sm px-5 py-3 hover:opacity-75"
        :class="!overviewSelected ? `text-${navRoute?.primaryColor}` : `text-base-50`"
        @click="overviewSelected = false"
        title="Show detailed skills list"
      >
        <component :is="ILucideList" class="size-5" />
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
      :key="category[0]"
      :name="category[0]"
      :value="Math.round(category[1].sum / category[1].count)"
    />
    <div class="card col-span-full row-span-4 row-start-5">
      <VerticalBarChart :bars="skillBarChart" />
    </div>
  </div>
  <div v-else class="mb-5 flex flex-col items-center gap-5">
    <div class="flex w-1/2 gap-3">
      <div class="relative h-14 flex-1 rounded-xl">
        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <component :is="ILucideSearch" class="text-base-50 size-5" />
        </div>
        <input
          placeholder="Search"
          class="text-base-50 bg-base-300 block h-full w-full rounded-xl p-3 pl-10 text-sm"
          type="text"
          maxlength="64"
          v-model="skillSearch"
        />
      </div>
      <button
        class="bg-base-300 flex size-14 cursor-pointer items-center gap-2 rounded-xl p-3 hover:opacity-75"
        :class="showProficiency ? `text-${navRoute?.primaryColor}` : 'text-base-50'"
        @click="showProficiency = !showProficiency"
        title="Toggle proficiency display"
      >
        <component :is="ILucideGauge" class="m-auto size-5" />
      </button>
    </div>
    <div class="flex w-1/2 flex-wrap gap-x-2 gap-y-3">
      <Tag
        name="All"
        as="button"
        :text-color="activeCategoryFilter == -1 ? `${navRoute?.primaryColor}` : `base-50`"
        @click="setActiveCategoryFilter(-1)"
      />
      <Tag
        v-for="(category, index) in skillCategories"
        :key="category.name"
        v-bind="category"
        as="button"
        :text-color="activeCategoryFilter == index ? `${navRoute?.primaryColor}` : `base-50`"
        @click="setActiveCategoryFilter(index)"
      />
    </div>
    <div class="grid w-full grid-cols-4 gap-3">
      <SkillItem v-for="skill in filteredSkills" :key="skill.stack.name" v-bind="skill" :show-proficiency="showProficiency" />
    </div>
  </div>
</template>
