<script setup lang="ts">
import { useRoute } from 'vue-router'
import { routes } from '../router'
import { about } from '../data/about'
import { certifications } from '../data/certifications'
import { CONTACTS } from '../data/contacts'
import { logs } from '../data/logs'
import { projects } from '../data/projects'
import { skills } from '../data/skills'
import InfoItem from '../components/InfoItem.vue'
import Log from '../components/Log.vue'
import Stat from '../components/Stat.vue'
import Tag from '../components/Tag.vue'
import Title from '../components/Title.vue'
import ILucideMapPin from '~icons/lucide/map-pin'
import ILucideActivity from '~icons/lucide/activity'
import ILucideSearchCode from '~icons/lucide/search-code'
import ILucideContact from '~icons/lucide/contact'
import ILucideFileDown from '~icons/lucide/file-down'
import ILucideArrowRight from '~icons/lucide/arrow-right'
import ILucideTerminal from '~icons/lucide/terminal'
import ILucideStar from '~icons/lucide/star'

const route = useRoute()
const navRoute = routes.find((r) => r.path == route.path)
</script>

<template>
  <div class="grid md:grid-cols-2 4xl:grid-cols-5 gap-5">
    <div class="card row-span-4 md:col-span-full 4xl:col-span-3">
      <div class="flex h-full w-full gap-5">
        <div class="flex flex-1 flex-col gap-5">
          <div class="flex justify-between gap-5">
            <div class="flex flex-col gap-3">
              <div class="text-2xl font-bold">
                <div class="text-base-50">Hi, I'm <span :class="`text-${navRoute?.primaryColor}`">Joris</span></div>
                <div :class="`text-${navRoute?.primaryColor}`">Lefondeur</div>
              </div>
              <InfoItem
                label="Location"
                :value="about.location"
                :icon="ILucideMapPin"
                :icon-color="navRoute?.primaryColor"
              />
              <InfoItem
                label="Status"
                :value="about.status"
                :icon="ILucideActivity"
                :icon-color="navRoute?.primaryColor"
              />
              <InfoItem
                label="Looking For"
                :value="about.lookingFor"
                :icon="ILucideSearchCode"
                :icon-color="navRoute?.primaryColor"
              />
              <InfoItem
                label="Currently"
                :value="about.currently"
                :icon="ILucideContact"
                :icon-color="navRoute?.primaryColor"
              />
            </div>
          </div>
          <div class="text-base-50 grow text-sm">
            {{ about.description }}
          </div>
          <div class="flex gap-3">
            <a
              download
              href="resume.pdf"
              class="bg-base-350 hover:bg-base-200 flex rounded-md h-12 items-center p-3"
              title="Download resume"
            >
              <component :is="ILucideFileDown" class="text-base-50 m-auto size-6" />
              <div class="ml-1 text-base-50 text-sm font-bold">Resume</div>
            </a>
            <a
              v-for="contact in CONTACTS"
              :href="contact.href"
              class="bg-base-350 hover:bg-base-200 flex size-12 rounded-sm"
              :title="contact.name"
            >
              <component :is="contact.icon" class="text-base-50 m-auto size-6" />
            </a>
          </div>
        </div>
        <div class="flex w-1/3 flex-col gap-1">
          <div class="flex">
            <Title title="Key Skills" header-size="h2" />
            <div class="flex-1 text-right">
              <RouterLink to="/skills">
                <component
                  :is="ILucideArrowRight"
                  class="text-base-100 hover:text-base-50 hover:bg-base-150 inline-block size-6 hover:rounded-sm"
                />
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
    <Stat class="row-span-2 4xl:col-start-4 min-h-56" name="Visitors Count" value="50" color="orange-light" />
    <Stat class="row-span-2 4xl:col-start-5 min-h-56" name="Month Cost-to-Date" value="$0.95" color="red-light">
      <div class="text-base-50 flex items-center gap-2">
        <span
          >AWS costs for hosting since month start. This portfolio runs serverless with Lambda, S3, and CloudFront with
          pay-per-use pricing
        </span>
      </div>
    </Stat>
    <Stat
      class="row-span-2 4xl:row-start-3 4xl:col-start-4 min-h-56"
      name="Projects Completed"
      :value="`${projects.length.toString()}+`"
      color="green-light"
      redirect="/projects"
    />
    <Stat
      class="row-span-2 4xl:row-start-3 4xl:col-start-5 min-h-56"
      name="Certifications Earned"
      :value="certifications.length.toString()"
      color="blue-light"
      redirect="/certifications"
    />
    <div class="card md:col-span-full 2xl:col-span-1 4xl:col-span-3 row-span-4 4xl:row-start-5 min-h-75 order-last 2xl:order-0">
      <Title title="Activity Logs" :icon="ILucideTerminal" />
      <div class="bg-base-350 h-full rounded-md p-3">
        <Log v-for="log in logs" v-bind="log" />
      </div>
    </div>
    <div class="card text-base-50 md:col-span-full 2xl:col-span-1 4xl:col-span-2 4xl:col-start-4 row-span-4 4xl:row-start-5 min-h-150">
      <Title title="Featured Projects" :icon="ILucideStar" />
      <div class="flex grow flex-col gap-3 overflow-x-hidden overflow-y-auto h-0">
        <RouterLink
          v-for="project in projects.filter((p) => p.featured)"
          :key="project.name"
          class="bg-base-350 hover:bg-base-400 flex w-full cursor-pointer flex-col gap-2 rounded-sm p-3 transition-transform duration-200 hover:scale-101"
          :to="{ path: '/projects', query: { project: project.name } }"
        >
          <Title :title="project.name" header-size="h2" title-size="sm" />
          <div class="text-base-100 text-sm">{{ project.highlight }}</div>
          <div class="flex flex-wrap gap-x-1 gap-y-2">
            <Tag v-for="stack in project.stacks" :key="stack.name" v-bind="stack" />
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
