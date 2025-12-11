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
  ExternalLinkIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  ListChevronsUpDownIcon,
  ListChevronsDownUpIcon,
} from "lucide-vue-next"
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const route = useRoute();
const navRoute = routes.find((r) => r.path == route.path);

const expandedRows = ref<number[]>([0])

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
  <div class="grid grid-cols-5 grid-rows-8 gap-5">
    <div class="card col-span-full row-span-4">
      <Title :title="navRoute?.name?.toString() ?? ''" :icon="navRoute?.icon" :icon-color="navRoute?.primaryColor" />
      <div class="overflow-hidden rounded-lg border border-base-150">
        <table class="w-full text-left text-sm text-base-50">
          <thead class="bg-base-200 text-base-50 uppercase font-bold">
            <tr>
              <th class="px-4 py-3 cursor-pointer" @click="toggleAllRows">
                <ListChevronsDownUpIcon v-if="expandedRows.length > 0" class="stroke-base-50 hover:stroke-base-100"/>
                <ListChevronsUpDownIcon v-else class="stroke-base-50 hover:stroke-base-100"/>
              </th>
              <th class="px-4 py-3">Project</th>
              <th class="px-4 py-3">Highlight</th>
              <th class="px-4 py-3 min-w-30">Team Size</th>
              <th class="px-4 py-3">Stack</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-base-150 bg-base-350 text-base-50">
            <template v-for="(project, index) in projects" :key="project.name">
              <tr class="hover:bg-base-300/50" @click="toggleRow(index)">
                <td class="px-4 py-3">
                  <ChevronUpIcon v-if="expandedRows.includes(index)" class="stroke-base-50"/>
                  <ChevronDownIcon v-else class="stroke-base-50"/>
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
              </tr>
              <tr v-if="expandedRows.includes(index)">
                <td class="px-4 py-3" colspan="5">test</td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
