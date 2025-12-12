<script setup lang="ts">
import Title from "../components/Title.vue";
import InfoItem from "../components/InfoItem.vue";
import Tag from "../components/Tag.vue";
import { projects } from "../data/projects";
import { routes } from "../router";
import { useRoute } from "vue-router";
import { ref } from "vue"
import {
  UserIcon,
  UsersIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  ListChevronsUpDownIcon,
  ListChevronsDownUpIcon,
  StarIcon,
} from "lucide-vue-next"
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
                <ListChevronsDownUpIcon v-if="expandedRows.length > 0" class="text-base-50 hover:text-base-100"/>
                <ListChevronsUpDownIcon v-else class="text-base-50 hover:text-base-100"/>
              </th>
              <th class="px-4 py-3 bg-base-200">Project</th>
              <th class="px-4 py-3 bg-base-200">Highlight</th>
              <th class="px-4 py-3 min-w-30 bg-base-200">Team Size</th>
              <th class="px-4 py-3 bg-base-200">Stack</th>
              <th class="px-4 py-3 bg-base-200 rounded-tr-lg">
                <InfoTooltip position="left" class="normal-case font-normal">
                  <div class="flex items-center gap-2 text-base-50">
                    <StarIcon class="size-4" :class="`text-${navRoute?.primaryColor}`"/>
                    <span>Featured Project</span>
                  </div>
                  <div class="flex items-center gap-2 text-base-50">
                    <StarIcon class="size-4 text-base-100"/>
                    <span>Other Project</span>
                  </div>
                </InfoTooltip>
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-base-150 text-base-50 [&>tr:last-child>td:first-child]:rounded-bl-lg [&>tr:last-child>td:last-child]:rounded-br-lg">
            <template v-for="(project, index) in projects" :key="project.name">
              <tr class="bg-base-350 hover:bg-base-300/50" @click="toggleRow(index)">
                <td class="px-4 py-3">
                  <ChevronUpIcon v-if="expandedRows.includes(index)" class="text-base-50"/>
                  <ChevronDownIcon v-else class="text-base-50"/>
                </td>
                <td class="px-4 py-3 font-bold">{{ project.name }}</td>
                <td class="px-4 py-3">{{ project.highlight }}</td>
                <td class="px-4 py-3">
                  <InfoItem :value="project.teamSize.toString()" :icon="project.teamSize > 1 ? UsersIcon : UserIcon" />
                </td>
                <td class="px-4 py-3">
                  <div class="flex flex-wrap gap-1">
                    <Tag v-for="tag in project.tags" :key="tag.name" v-bind="tag" />
                  </div>
                </td>
                <td class="px-4 py-3">
                  <StarIcon :class="project.featured ? `text-${navRoute?.primaryColor}`: `text-base-100`"/>
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
