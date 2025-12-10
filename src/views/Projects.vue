<script setup lang="ts">
import Title from "../components/Title.vue";
import InfoItem from "../components/InfoItem.vue";
import Tag from "../components/Tag.vue";
import { routes } from "../router/routes";
import { useRoute } from "vue-router";
import { UserIcon, UsersIcon, ExternalLinkIcon } from "lucide-vue-next"
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const route = useRoute();
const navRoute = routes.find((r) => r.path == route.path);
</script>

<template>
  <div class="grid grid-cols-5 grid-rows-8 gap-5">
    <div class="card col-span-full row-span-4">
      <Title :title="navRoute?.name?.toString() ?? ''" :icon="navRoute?.icon" :icon-color="navRoute?.primaryColor" />
      <div class="overflow-hidden rounded-lg border border-base-150">
        <table class="w-full text-left text-sm text-base-50">
          <thead class="bg-base-200 text-base-50 uppercase font-bold">
            <tr>
              <th class="px-4 py-3">Project</th>
              <th class="px-4 py-3">Highlights</th>
              <th class="px-4 py-3 min-w-30">Team Size</th>
              <th class="px-4 py-3">Stack</th>
              <th class="px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-base-150 bg-base-350 text-base-50">
            <tr class="hover:bg-base-300/50 transition-colors">
              <td class="px-4 py-3 font-bold">ft_transcendence</td>
              <td class="px-4 py-3">Multiplayer Pong webapp with Docker, ELK log management, and Prometheus/Grafana monitoring</td>
              <td class="px-4 py-3"><InfoItem value="4" :icon="UsersIcon" /></td>
              <td class="px-4 py-3">
                <div class="flex flex-wrap gap-1">
                  <Tag name="ELK"/>
                  <Tag name="Grafana"/>
                  <Tag name="Prometheus"/>
                  <Tag name="Django"/>
                  <Tag name="Python"/>
                  <Tag name="Nginx"/>
                  <Tag name="Postgres"/>
                  <Tag name="Docker"/>
                  <Tag name="HTML"/>
                  <Tag name="CSS"/>
                  <Tag name="JS"/>
                </div>
              </td>
              <td class="px-4 py-3">
                <div class="flex gap-1 items-center">
                  <FontAwesomeIcon :icon="faGithub" size="xl" :class="`text-purple-light`" />
                  <ExternalLinkIcon class="stroke-blue-light"/>
                </div>
              </td>
            </tr>
            <tr class="hover:bg-base-300/50 transition-colors text-base-50">
              <td class="px-4 py-3 font-bold">ft_transcendence</td>
              <td class="px-4 py-3">Multiplayer Pong webapp with Docker, ELK log management, and Prometheus/Grafana monitoring</td>
              <td class="px-4 py-3"><InfoItem value="4" :icon="UsersIcon" /></td>
              <td class="px-4 py-3">
                <div class="flex flex-wrap gap-1">
                  <Tag name="ELK"/>
                  <Tag name="Grafana"/>
                  <Tag name="Prometheus"/>
                  <Tag name="Django"/>
                  <Tag name="Python"/>
                  <Tag name="Nginx"/>
                  <Tag name="Postgres"/>
                  <Tag name="Docker"/>
                  <Tag name="HTML"/>
                  <Tag name="CSS"/>
                  <Tag name="JS"/>
                </div>
              </td>
              <td class="px-4 py-3">
                <div class="flex gap-1 items-center">
                  <FontAwesomeIcon :icon="faGithub" size="xl" :class="`text-purple-light`" />
                  <ExternalLinkIcon class="stroke-blue-light"/>
                </div>
              </td>
            </tr>
            <tr class="hover:bg-base-300/50 transition-colors text-base-50">
              <td class="px-4 py-3 font-bold">ft_transcendence</td>
              <td class="px-4 py-3">Multiplayer Pong webapp with Docker, ELK log management, and Prometheus/Grafana monitoring</td>
              <td class="px-4 py-3"><InfoItem value="4" :icon="UsersIcon" /></td>
              <td class="px-4 py-3">
                <div class="flex flex-wrap gap-1">
                  <Tag name="ELK"/>
                  <Tag name="Grafana"/>
                  <Tag name="Prometheus"/>
                  <Tag name="Django"/>
                  <Tag name="Python"/>
                  <Tag name="Nginx"/>
                  <Tag name="Postgres"/>
                  <Tag name="Docker"/>
                  <Tag name="HTML"/>
                  <Tag name="CSS"/>
                  <Tag name="JS"/>
                </div>
              </td>
              <td class="px-4 py-3">
                <div class="flex gap-1 items-center">
                  <FontAwesomeIcon :icon="faGithub" size="xl" :class="`text-purple-light`" />
                  <ExternalLinkIcon class="stroke-blue-light"/>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
