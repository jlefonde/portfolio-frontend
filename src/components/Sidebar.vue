<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { routes } from '../router'
import { CONTACTS } from '../data/contacts'
import ILucidePanelLeft from '~icons/lucide/panel-left'
import ILucideMenu from '~icons/lucide/menu'
import ILucideX from '~icons/lucide/x'
import ILucideFileDown from '~icons/lucide/file-down'

const route = useRoute()

const sidebarCollapsed = ref(false)

const closeSidebar = () => {
  if (window.innerWidth < 1024) {
    sidebarCollapsed.value = true
  }
}

let mediaQuery: MediaQueryList
onMounted(() => {
  mediaQuery = window.matchMedia('(min-width: 1024px)')
  mediaQuery.onchange = (e) => {
      sidebarCollapsed.value = !e.matches
  }
})
</script>

<template>
  <aside
    class="bg-base-300 border-base-150 flex flex-col border-r fixed lg:sticky top-0 z-20"
    :class="sidebarCollapsed ? 'size-14 lg:h-screen' : 'w-80 h-full lg:h-screen'"
    v-click-outside="closeSidebar"
  >
    <header class="border-base-150 flex h-14 items-center justify-between border-b p-3">
      <div class="items-center gap-3 flex" v-if="!sidebarCollapsed">
        <div class="bg-blue-dark text-blue-light size-9 flex items-center justify-center text-base-50 text-2xl">⅃L</div>
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
        :aria-label="`Go to ${String(navRoute.name)}`"
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
    <div class="flex gap-3 p-3" :class="sidebarCollapsed ? 'hidden' : ''">
      <a
        download
        href="/Joris-LEFONDEUR-resume.pdf"
        class="bg-base-350 hover:bg-base-200 flex rounded-md h-12 items-center p-3"
        title="Download resume"
        aria-label="Download resume"
      >
        <component :is="ILucideFileDown" class="text-base-50 m-auto size-6" />
      </a>
      <a
        v-for="contact in CONTACTS"
        :href="contact.href"
        class="bg-base-350 hover:bg-base-200 flex size-12 rounded-sm"
        :title="contact.name"
        :aria-label="contact.name"
      >
        <component :is="contact.icon" class="text-base-50 m-auto size-6" />
      </a>
    </div>
  </aside>
</template>
