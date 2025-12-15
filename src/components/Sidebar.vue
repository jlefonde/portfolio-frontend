<script setup lang="ts">
import { routes } from "../router";
import { useRoute } from "vue-router";
import { Icon } from "@iconify/vue";
import { ref, watch } from "vue";

const route = useRoute();

const sidebarCollapsed = ref(false);
watch(sidebarCollapsed, (val) => {
  console.log('Sidebar collapsed:', val);
});
</script>

<template>
  <aside class="bg-base-300 border-base-150 flex flex-col border-r" :class="sidebarCollapsed ? 'w-24' : 'w-80'">
    <header class="border-base-150 flex h-14 items-center justify-between border-b p-3">
        <div class="flex items-center gap-3" v-if="!sidebarCollapsed">
          <div class="bg-base-150 size-9"></div>
          <div class="flex flex-col">
            <div class="text-base-50">Joris LEFONDEUR</div>
            <div class="text-base-100 text-sm">Devops Engineer</div>
          </div>
        </div>
      <div class="flex items-center size-8 text-base-100 hover:rounded-sm hover:text-base-50 hover:bg-base-150 cursor-pointer"  @click="sidebarCollapsed = !sidebarCollapsed" :class="sidebarCollapsed ? 'm-auto' : ''" >
        <Icon icon="lucide:panel-left" class="m-auto size-6"/>
      </div>
    </header>
    <nav class="flex flex-1 flex-col gap-3 p-5">
      <RouterLink
        v-for="navRoute in routes.filter((r) => r.addToNav === true)"
        :key="navRoute.path"
        class="group hover:bg-base-200 hover:text-base-50 flex h-10 w-full items-center gap-3 rounded-md p-3 border-l-4 border-base-300"
        :class="
          route.path === navRoute.path
            ? `border-${navRoute.primaryColor} text-base-50 bg-base-200`
            : 'text-base-100 hover:border-base-200'
        "
        :to="navRoute.path"
      >
        <Icon
          :icon="navRoute.icon ?? ''"
          class="size-6"
          :class="
            route.path === navRoute.path
              ? `text-${navRoute.primaryColor}`
              : 'text-base-100 group-hover:text-base-50'
          "
        />
        <div v-if="!sidebarCollapsed">{{ navRoute.name }}</div>
      </RouterLink>
    </nav>
  </aside>
</template>
