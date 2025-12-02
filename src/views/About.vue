<script setup lang="ts">
import Stat from "../components/Stat.vue";
import Title from "../components/Title.vue";
import ContactLink from "../components/ContactLink.vue";
import { routes } from "../router.ts";
import { CONTACTS } from "../contacts.ts";
import { useRoute } from "vue-router";
import { AtSignIcon, DownloadIcon } from "lucide-vue-next";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const route = useRoute();
const navRoute = routes.find((r) => r.path == route.path);
</script>

<template>
  <div class="grid grid-cols-5 grid-rows-8 gap-5">
    <div class="bg-base-300 col-span-3 row-span-4 flex flex-col gap-3 rounded-xl p-3">
      <Title :title="navRoute?.name?.toString() ?? ''" :icon="navRoute?.icon" :iconColor="navRoute?.color" />
      <ContactLink v-bind="CONTACTS.email"/>
      <ContactLink v-bind="CONTACTS.github"/>
      <div class="flex justify-between gap-3">
        <ContactLink v-bind="CONTACTS.linkedin" class="w-1/2"/>
      </div>
    </div>
    <Stat class="col-start-4 row-span-2 h-48" name="Visitor Count" value="50" color="orange-light" />
    <Stat class="col-start-5 row-span-2 h-48" name="Month-to-Date Cost" value="$0.95" color="red-light" />
    <Stat class="col-start-4 row-span-2 row-start-3 h-48" name="Response Time" value="<24h" color="green-light" />
    <Stat
      class="col-start-5 row-span-2 row-start-3 h-48"
      name="Certifications Earned"
      value="1"
      color="blue-light"
      redirect="/certifications"
    />
    <div class="col-span-3 row-span-3 row-start-5 bg-base-30 w-full h-full">6</div>
    <div class="col-span-2 col-start-4 row-span-4 row-start-5 bg-base-30">7</div>
  </div>
</template>
