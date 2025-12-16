<script setup lang="ts">
import { useRoute } from 'vue-router'

import { routes } from '../router'
import { projects } from '../data/projects'
import Project from '../components/Project.vue'

const route = useRoute()
const navRoute = routes.find((r) => r.path == route.path)
</script>

<template>
  <div class="grid grid-cols-3 gap-5">
    <Project v-for="project in projects" :key="project.name" v-bind="project" :featured-color="navRoute?.primaryColor"/>
  </div>
</template>
