<script setup lang="ts">
import { routes } from "../router";
import { useRoute } from "vue-router";
import { PanelLeftIcon } from "lucide-vue-next";

const route = useRoute();
</script>

<template>
  <aside class="bg-base-300 border-base-150 flex h-screen w-80 flex-col border-r">
    <header class="border-base-150 flex h-14 items-center justify-between border-b p-5">
      <div class="flex items-center gap-3">
        <div class="bg-base-150 size-9"></div>
        <div class="flex flex-col">
          <div class="text-base-50">Joris LEFONDEUR</div>
          <div class="text-base-100 text-sm">Devops Engineer</div>
        </div>
      </div>
      <PanelLeftIcon class="hover:stroke-base-50 stroke-base-100 cursor-pointer" />
    </header>
    <nav class="flex flex-1 flex-col gap-3 p-5">
      <RouterLink
        v-for="navRoute in routes.filter((r) => r.addToNav === true)"
        :key="navRoute.path"
        class="group hover:bg-base-200 hover:text-base-50 flex h-10 w-full items-center gap-3 rounded-md p-2"
        :class="
          route.path === navRoute.path
            ? `border-${navRoute.primaryColor} text-base-50 bg-base-200 border-l-4`
            : 'text-base-100'
        "
        :to="navRoute.path"
      >
        <component
          :is="navRoute.icon"
          :class="
            route.path === navRoute.path
              ? `stroke-${navRoute.primaryColor}`
              : 'stroke-base-100 group-hover:stroke-base-50'
          "
        />
        {{ navRoute.name }}
      </RouterLink>
    </nav>
  </aside>
</template>
