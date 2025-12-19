<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { routes } from '../router'
import ILucidePanelLeft from '~icons/lucide/panel-left'
import ILucideMenu from '~icons/lucide/menu'
import ILucideX from '~icons/lucide/x'

const route = useRoute()

const sidebarCollapsed = ref(false)

const closeSidebar = () => {
  if (window.innerWidth < 1024) {
    sidebarCollapsed.value = true
  }
}

let mediaQuery: MediaQueryList
const handleResize = (e: { matches: boolean }) => {
  sidebarCollapsed.value = !e.matches
}

onMounted(() => {
  mediaQuery = window.matchMedia('(min-width: 1024px)')
  handleResize(mediaQuery)
  mediaQuery.addEventListener('change', handleResize)
})

onUnmounted(() => mediaQuery?.removeEventListener('change', handleResize))
</script>

<template>
  <aside
    class="bg-base-300 border-base-150 flex flex-col border-r fixed lg:sticky top-0 z-20"
    :class="sidebarCollapsed ? 'size-14 lg:h-screen' : 'w-80 h-full lg:h-screen'"
    v-click-outside="closeSidebar"
  >
    <header class="border-base-150 flex h-14 items-center justify-between border-b p-3">
      <div class="items-center gap-3 flex" v-if="!sidebarCollapsed">
        <div class="bg-base-150 size-9"></div>
        <div class="flex flex-col">
          <div class="text-base-50">Joris LEFONDEUR</div>
          <div class="text-base-100 text-sm">Devops Engineer</div>
        </div>
      </div>
      <div
        class="text-base-100 hover:text-base-50 hover:bg-base-150 hidden lg:flex size-8 cursor-pointer items-center hover:rounded-sm"
        @click="sidebarCollapsed = !sidebarCollapsed"
        :class="sidebarCollapsed ? 'm-auto' : ''"
        title="Toggle sidebar"
      >
        <component :is="ILucidePanelLeft" class="m-auto size-6" />
      </div>
      <div
        class="text-base-100 hover:text-base-50 hover:bg-base-150 flex lg:hidden size-8 cursor-pointer items-center hover:rounded-sm"
        @click.stop="sidebarCollapsed = !sidebarCollapsed"
        :class="sidebarCollapsed ? 'm-auto' : ''"
        title="Toggle sidebar"
      >
        <component :is="sidebarCollapsed ? ILucideMenu : ILucideX" class="m-auto size-6" />
      </div>
    </header>
    <nav class="flex lg:flex flex-1 flex-col gap-3 py-5" :class="sidebarCollapsed ? 'hidden' : 'px-5'">
      <RouterLink
        v-for="navRoute in routes.filter((r) => r.addToNav === true)"
        :key="navRoute.path"
        class="group hover:bg-base-200 hover:text-base-50 border-base-300 flex h-10 w-full items-center gap-3 border-l-4 p-3"
        :class="
          [route.path === navRoute.path
            ? `border-${navRoute.primaryColor} text-base-50 bg-base-200`
            : 'text-base-100 hover:border-base-200',
            sidebarCollapsed ? 'rounded-l-md' : 'rounded-md'
          ]
        "
        :to="navRoute.path"
      >
        <component
          :is="navRoute.icon"
          class="size-6"
          :class="
            route.path === navRoute.path ? `text-${navRoute.primaryColor}` : 'text-base-100 group-hover:text-base-50'
          "
        />
        <div v-if="!sidebarCollapsed">{{ navRoute.name }}</div>
      </RouterLink>
    </nav>
  </aside>
</template>
