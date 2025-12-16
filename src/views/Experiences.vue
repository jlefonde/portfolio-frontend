<script setup lang="ts">
import { useRoute } from 'vue-router'

import { routes } from '../router'
import { experiences } from '../data/experiences'
import TimelineItem from '../components/TimelineItem.vue'
import Title from '../components/Title.vue'

const route = useRoute()
const navRoute = routes.find((r) => r.path == route.path)
</script>

<template>
  <div class="grid grid-cols-2 gap-5">
    <div class="card bg-base-300 h-fit">
      <div class="flex flex-col gap-5">
        <Title title="Work Experience" icon="lucide:briefcase" :icon-color="navRoute?.primaryColor" />
        <TimelineItem
          v-for="(experience, index) in experiences.work"
          :timeline="experience"
          :highlight-color="navRoute?.primaryColor ?? ''"
          :highlight-ring-color="navRoute?.secondaryColor ?? ''"
          :is-latest="index == 0"
        />
      </div>
    </div>
    <div class="card bg-base-300">
      <div class="flex flex-col gap-5">
        <Title title="Education" icon="lucide:graduation-cap" icon-color="cyan-light" />
        <TimelineItem
          v-for="(degree, index) in experiences.education"
          :timeline="degree"
          highlight-color="cyan-light"
          highlight-ring-color="cyan-dark"
          :is-latest="index == 0"
        />
      </div>
    </div>
  </div>
</template>
