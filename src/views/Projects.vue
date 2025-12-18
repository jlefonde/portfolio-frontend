<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'

import { routes } from '../router'
import { projects } from '../data/projects'
import Project from '../components/Project.vue'

const route = useRoute()
const navRoute = routes.find((r) => r.path == route.path)

const projectRefs = ref<Record<string, any>>({})

function setProjectRef(el: any, name: string) {
  if (el) {
    projectRefs.value[name] = el
  }
}

function scrollToProject(projectName: string) {
  const view = projectRefs.value[projectName]
  view?.rootElement?.scrollIntoView({ behavior: 'smooth', block: 'center' })
}

function showModal(projectName: string): boolean {
  const queryProject = route.query.project

  return (queryProject != null && queryProject.toString() === projectName) 
}

onMounted(async () => {
  const queryProject = route.query.project
  if (queryProject != null) {
    scrollToProject(queryProject.toString())
  }
})
</script>

<template>
  <div class="grid grid-cols-3 gap-5">
    <Project
      v-for="project in projects"
      :key="project.name"
      v-bind="project"
      :featured-color="navRoute?.primaryColor"
      :show-modal="showModal(project.name)"
      :ref="(el) => setProjectRef(el, project.name)"
    />
  </div>
</template>
