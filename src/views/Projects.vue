<script setup lang="ts">
import Title from "../components/Title.vue";
import Tag from "../components/Tag.vue";
import Feature from "../components/Feature.vue";
import InfoItem from "../components/InfoItem.vue";
import { projects } from "../data/projects";
import { routes } from "../router";
import { useRoute } from "vue-router";
import { ref } from "vue";
import { Icon } from "@iconify/vue";
import InfoTooltip from "../components/InfoTooltip.vue";
import "vue3-carousel/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

const route = useRoute();
const navRoute = routes.find((r) => r.path == route.path);

const expandedRows = ref<number[]>([]);
const projectId = parseInt(route.query.id as string);
if (!isNaN(projectId)) {
  expandedRows.value.push(projectId);
} else {
  expandedRows.value.push(0);
}

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
    expandedRows.value.splice(0, expandedRows.value.length);
  } else {
    expandedRows.value.splice(0, expandedRows.value.length);
    for (let i = 0; i < projects.length; i++) {
      expandedRows.value.push(i);
    }
  }
}

const carouselConfig = {
  itemsToShow: 1,
};
</script>

<template>
  <div class="grid grid-cols-5 gap-5">
    <div class="card col-span-full">
      <Title :title="navRoute?.name?.toString() ?? ''" :icon="navRoute?.icon" :icon-color="navRoute?.primaryColor" />
      <div class="border-base-150 overflow-x-auto rounded-lg border">
        <table class="text-base-50 w-full text-left text-sm">
          <thead class="text-base-50 font-bold uppercase">
            <tr>
              <th
                class="bg-base-200 cursor-pointer rounded-tl-lg px-4 py-3"
                @click="toggleAllRows"
                title="Toggle all rows"
              >
                <Icon
                  icon="lucide:list-chevrons-down-up"
                  v-if="expandedRows.length > 0"
                  class="text-base-50 hover:text-base-100 size-6"
                />
                <Icon icon="lucide:list-chevrons-up-down" v-else class="text-base-50 hover:text-base-100 size-6" />
              </th>
              <th class="bg-base-200 px-4 py-3">Project</th>
              <th class="bg-base-200 px-4 py-3">Highlight</th>
              <th class="bg-base-200 px-4 py-3">Stack</th>
              <th class="bg-base-200 rounded-tr-lg px-4 py-3">
                <InfoTooltip position="left" class="font-normal normal-case">
                  <span>Indicates whether this project is featured or not</span>
                </InfoTooltip>
              </th>
            </tr>
          </thead>
          <tbody
            class="divide-base-150 text-base-50 divide-y [&>tr:last-child>td:first-child]:rounded-bl-lg [&>tr:last-child>td:last-child]:rounded-br-lg"
          >
            <template v-for="(project, index) in projects" :key="project.name">
              <tr
                class="bg-base-350 hover:bg-base-400 group cursor-pointer"
                @click="toggleRow(index)"
                title="Toggle project details"
              >
                <td class="px-4 py-3">
                  <Icon icon="lucide:chevron-up" v-if="expandedRows.includes(index)" class="text-base-50 size-6" />
                  <Icon icon="lucide:chevron-down" v-else class="text-base-50 size-6" />
                </td>
                <td class="px-4 py-3 font-bold">{{ project.name }}</td>
                <td class="text-base-100 px-4 py-3">{{ project.highlight }}</td>
                <td class="px-4 py-3">
                  <div class="flex flex-wrap gap-x-1 gap-y-2">
                    <Tag v-for="tag in project.tags" :key="tag.name" v-bind="tag" />
                  </div>
                </td>
                <td class="px-4 py-3">
                  <Icon
                    icon="lucide:star"
                    class="size-6"
                    :class="project.featured ? `text-${navRoute?.primaryColor}` : `text-base-100`"
                  />
                </td>
              </tr>
              <tr v-if="expandedRows.includes(index)" class="bg-base-350">
                <td class="px-4 py-3" colspan="6">
                  <div class="flex w-full flex-col gap-3">
                    <div class="flex gap-5">
                      <div class="w-2/3">
                        <Carousel v-bind="carouselConfig">
                          <Slide v-for="image in project.screenshots" :key="image.path">
                            <div class="flex h-full items-center justify-center">
                              <img :src="image.path" :alt="image.alt" class="w-full object-cover" />
                            </div>
                          </Slide>
                          <template #addons>
                            <Navigation />
                            <Pagination />
                          </template>
                        </Carousel>
                      </div>
                      <div class="flex w-1/3 flex-col gap-3">
                        <Title
                          title="Links"
                          icon="lucide:link"
                          header-size="h2"
                          title-size="sm"
                          title-color="base-100"
                          icon-color="base-100"
                          icon-size="5"
                        />
                        <div class="flex gap-2">
                          <Icon icon="octicon:mark-github-24" class="text-base-50 size-5" />
                          <a :href="project.githubLink"
                            title="GitHub"
                            target="_blank"
                          >View Source</a>
                        </div>
                      </div>
                    </div>
                    <div class="flex w-full flex-col gap-3">
                      <Title
                        title="Key Features"
                        icon="lucide:zap"
                        header-size="h2"
                        title-size="sm"
                        title-color="base-100"
                        icon-color="base-100"
                        icon-size="5"
                      />
                      <div class="grid grid-cols-3 gap-3">
                        <Feature
                          v-for="feature in project.features"
                          v-bind="feature"
                          :icon-color="navRoute?.primaryColor"
                        />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped>
.carousel {
  --vc-nav-color: var(--color-base-50);
  --vc-nav-color-hover: var(--color-base-100);
  --vc-nav-width: 32px;
  --vc-nav-height: 32px;
  --vc-pgn-background-color: var(--color-base-150);
  --vc-pgn-active-color: var(--color-base-50);
  --vc-pgn-border-radius: 4px;
  --vc-pgn-height: 8px;
  --vc-pgn-width: 24px;
}
</style>
