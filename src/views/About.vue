<script setup lang="ts">
import Stat from "../components/Stat.vue";
import Title from "../components/Title.vue";
import Tag from "../components/Tag.vue";
import Log from "../components/Log.vue";
import { routes } from "../router";
import { about } from "../data/about";
import { logs } from "../data/logs";
import { projects } from "../data/projects";
import { skills } from "../data/skills";
import { certifications } from "../data/certifications";
import { useRoute } from "vue-router";
import InfoItem from "../components/InfoItem.vue";
import { Icon } from "@iconify/vue";
import { CONTACTS } from "../data/contacts";

const route = useRoute();
const navRoute = routes.find((r) => r.path == route.path);
</script>

<template>
  <div class="grid grid-cols-5 grid-rows-8 gap-5">
    <div class="card col-span-3 row-span-4">
      <div class="flex h-full w-full gap-5">
        <div class="flex flex-col gap-5 flex-1">
          <div class="flex justify-between gap-5">
            <div class="flex flex-col gap-3">
              <div class="text-2xl font-bold">
                <div class="text-base-50">Hi, I'm <span :class="`text-${navRoute?.primaryColor}`">Joris</span></div>
                <div :class="`text-${navRoute?.primaryColor}`">Lefondeur</div>
              </div>
              <InfoItem
                label="Location"
                :value="about.location"
                icon="lucide:map-pin"
                :icon-color="navRoute?.primaryColor"
              />
              <InfoItem
                label="Status"
                :value="about.status"
                icon="lucide:activity"
                :icon-color="navRoute?.primaryColor"
              />
              <InfoItem
                label="Looking For"
                :value="about.lookingFor"
                icon="lucide:search-code"
                :icon-color="navRoute?.primaryColor"
              />
              <InfoItem
                label="Currently"
                :value="about.currently"
                icon="lucide:contact"
                :icon-color="navRoute?.primaryColor"
              />
            </div>
          </div>
          <div class="text-base-50 grow text-sm">
            {{ about.description }}
          </div>
          <div class="flex gap-3">
            <a download href="resume.pdf" class="bg-base-350 hover:bg-base-200 flex size-12 rounded-md">
              <Icon icon="lucide:file-down" class="text-base-50 m-auto size-6" />
            </a>
            <a
              v-for="contact in CONTACTS"
              :href="contact.href"
              class="bg-base-350 hover:bg-base-200 flex size-12 rounded-sm"
            >
              <Icon :icon="contact.icon" class="text-base-50 m-auto size-6" />
            </a>
          </div>
        </div>
        <div class="flex flex-col gap-1 w-1/3">
            <div class="flex">
              <Title title="Key Skills" header-size="h2" />
              <div class="flex-1 text-right">
                <RouterLink to="/skills">
                  <Icon icon="lucide:arrow-right" class="text-base-100 hover:rounded-sm hover:text-base-50 hover:bg-base-150 inline-block size-6" />
                </RouterLink>
              </div>
            </div>
            <div class="flex flex-wrap gap-x-1 gap-y-2">
              <Tag
                v-for="skill in skills.filter((s) => s.featured == true)"
                v-bind:icon="skill.stack.icon"
                v-bind:name="skill.stack.name"
              />
            </div>
          </div>
      </div>
    </div>
    <Stat class="col-start-4 row-span-2 min-h-56 min-w-56" name="Visitors Count" value="50" color="orange-light" />
    <Stat class="col-start-5 row-span-2 min-h-56 min-w-56" name="Month Cost-to-Date" value="$0.95" color="red-light">
      <div class="text-base-50 flex items-center gap-2">
        <span
          >AWS costs for hosting since month start. This portfolio runs serverless with Lambda, S3, and CloudFront with
          pay-per-use pricing</span
        >
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
      <Title title="Activity Logs" icon="lucide:terminal" />
      <div class="bg-base-350 h-full rounded-md p-3">
        <Log v-for="log in logs" v-bind="log" />
      </div>
    </div>
    <div class="card text-base-50 col-span-2 col-start-4 row-span-4 row-start-5">
      <Title title="Featured Projects" icon="lucide:star" />
      <div class="flex grow flex-col gap-3 overflow-x-hidden overflow-y-auto">
        <RouterLink
          v-for="project in projects.filter((p) => p.featured)"
          :key="project.name"
          class="bg-base-350 hover:bg-base-350/80 flex w-full cursor-pointer flex-col gap-2 rounded-sm p-3 transition-transform duration-200 hover:scale-101"
          :to="{ path: '/projects', query: { id: projects.indexOf(project) } }"
        >
          <Title :title="project.name" header-size="h2" title-size="sm" />
          <div class="text-base-100 text-sm">{{ project.highlight }}</div>
          <div class="flex flex-wrap gap-x-1 gap-y-2">
            <Tag v-for="tag in project.tags" :key="tag.name" v-bind="tag" />
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
