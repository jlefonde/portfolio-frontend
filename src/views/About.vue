<script setup lang="ts">
import Stat from "../components/Stat.vue";
import Title from "../components/Title.vue";
import Tag from "../components/Tag.vue";
import Log from "../components/Log.vue";
import { routes } from "../router";
import { logs } from "../data/logs";
import { projects } from "../data/projects";
import { certifications } from "../data/certifications";
import { useRoute } from "vue-router";
import { TerminalIcon, StarIcon } from "lucide-vue-next";

const route = useRoute();
const navRoute = routes.find((r) => r.path == route.path);
</script>

<template>
  <div class="grid grid-cols-5 grid-rows-8 gap-5 h-full">
    <div class="card col-span-3 row-span-4">
      <Title :title="navRoute?.name?.toString() ?? ''" :icon="navRoute?.icon" :icon-color="navRoute?.primaryColor" />
    </div>
    <Stat class="col-start-4 row-span-2 min-h-56 min-w-56" name="Visitors Count" value="50" color="orange-light" />
    <Stat class="col-start-5 row-span-2 min-h-56 min-w-56" name="Month Cost-to-Date" value="$0.95" color="red-light">
      <div class="flex items-center gap-2 text-base-50">
        <span>AWS costs for hosting since month start. This portfolio runs serverless with Lambda, S3, and CloudFront with pay-per-use pricing</span>
      </div>
    </Stat>
    <Stat
      class="col-start-4 row-span-2 row-start-3 min-h-56 min-w-56"
      name="Projects Completed"
      :value="`${projects.length.toString()}+`"
      color="green-light"
      redirect="/projects"
    />
    <Stat
      class="col-start-5 row-span-2 row-start-3 min-h-56 min-w-56"
      name="Certifications Earned"
      :value="certifications.length.toString()"
      color="blue-light"
      redirect="/certifications"
    />
    <div class="card col-span-3 row-span-4 row-start-5">
      <Title title="Activity Logs" :icon="TerminalIcon" />
      <div class="bg-base-350 h-full rounded-md p-3">
        <Log v-for="log in logs" v-bind="log" />
      </div>
    </div>
    <div class="card col-span-2 col-start-4 row-span-4 row-start-5 text-base-50">
      <Title title="Featured Projects" :icon="StarIcon" />
      <div class="grow flex flex-col gap-3 overflow-y-auto overflow-x-hidden">
        <RouterLink
          v-for="project in projects.filter((p) => p.featured)"
          :key="project.name"
          class="flex flex-col bg-base-350 rounded-sm p-3 w-full gap-2 cursor-pointer hover:bg-base-350/80 transition-transform duration-200 hover:scale-101"
          :to="{ path: '/projects', query: { id: projects.indexOf(project) }}"
        >
          <Title :title="project.name" header-size="h2" title-size="sm" />
          <div class="text-sm">{{ project.highlight }}</div>
          <div class="flex flex-wrap gap-1">
            <Tag v-for="tag in project.tags" :key="tag.name" v-bind="tag" />
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
