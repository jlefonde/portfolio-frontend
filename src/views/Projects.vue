<script setup lang="ts">
import Title from "../components/Title.vue";
import Tag from "../components/Tag.vue";
import { projects } from "../data/projects";
import { routes } from "../router";
import { useRoute } from "vue-router";
import { ref } from "vue"
import { Icon } from "@iconify/vue"
import InfoTooltip from "../components/InfoTooltip.vue";

const route = useRoute();
const navRoute = routes.find((r) => r.path == route.path);

const expandedRows = ref<number[]>([parseInt(route.query.id as string) ?? 0])

function toggleRow(rowIndex: number) {
  const index = expandedRows.value.indexOf(rowIndex);

  if (index > -1) {
    expandedRows.value.splice(index, 1);
  } else {
    expandedRows.value.push(rowIndex);
  }
}

function toggleAllRows() {
  if (expandedRows.value.length > 0) {
    expandedRows.value.splice(0,  expandedRows.value.length);
  } else {
    expandedRows.value.splice(0,  expandedRows.value.length);
    for (let i = 0; i < projects.length; i++) {
      expandedRows.value.push(i);
    }
  }
}
</script>

<template>
  <div class="grid grid-cols-5 gap-5">
    <div class="card col-span-full">
      <Title :title="navRoute?.name?.toString() ?? ''" :icon="navRoute?.icon" :icon-color="navRoute?.primaryColor" />
      <div class="rounded-lg border border-base-150 overflow-x-auto">
        <table class="w-full text-left text-sm text-base-50">
          <thead class="text-base-50 uppercase font-bold">
            <tr>
              <th class="px-4 py-3 cursor-pointer bg-base-200 rounded-tl-lg" @click="toggleAllRows">
                <Icon icon="lucide:list-chevrons-down-up" v-if="expandedRows.length > 0" class="text-base-50 hover:text-base-100 size-6"/>
                <Icon icon="lucide:list-chevrons-up-down" v-else class="text-base-50 hover:text-base-100 size-6"/>
              </th>
              <th class="px-4 py-3 bg-base-200">Project</th>
              <th class="px-4 py-3 bg-base-200">Highlight</th>
              <th class="px-4 py-3 bg-base-200">Stack</th>
              <th class="px-4 py-3 bg-base-200 rounded-tr-lg">
                <InfoTooltip position="left" class="normal-case font-normal">
                  <span>Indicates whether this project is featured or not</span>
                </InfoTooltip>
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-base-150 text-base-50 [&>tr:last-child>td:first-child]:rounded-bl-lg [&>tr:last-child>td:last-child]:rounded-br-lg">
            <template v-for="(project, index) in projects" :key="project.name">
              <tr class="bg-base-350 hover:bg-base-300/50 cursor-pointer" @click="toggleRow(index)">
                <td class="px-4 py-3">
                  <Icon icon="lucide:chevron-up" v-if="expandedRows.includes(index)" class="text-base-50 size-6"/>
                  <Icon icon="lucide:chevron-down" v-else class="text-base-50 size-6"/>
                </td>
                <td class="px-4 py-3 font-bold">{{ project.name }}</td>
                <td class="px-4 py-3 text-base-100">{{ project.highlight }}</td>
                <td class="px-4 py-3">
                  <div class="flex flex-wrap gap-1">
                    <Tag v-for="tag in project.tags" :key="tag.name" v-bind="tag" />
                  </div>
                </td>
                <td class="px-4 py-3">
                  <Icon icon="lucide:star" class="size-6" :class="project.featured ? `text-${navRoute?.primaryColor}`: `text-base-100`"/>
                </td>
              </tr>
              <tr v-if="expandedRows.includes(index)" class="bg-base-350">
                <td class="px-4 py-3" colspan="6">
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
