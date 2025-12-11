<script setup lang="ts">
import Stat from "../components/Stat.vue";
import Title from "../components/Title.vue";
import ContactLink from "../components/ContactLink.vue";
import Log from "../components/Log.vue";
import { routes } from "../router";
import { logs } from "../data/logs";
import { projects } from "../data/projects";
import { certifications } from "../data/certifications";
import { CONTACTS } from "../data/contacts";
import { useRoute } from "vue-router";
import { DownloadIcon, TerminalIcon, StarIcon } from "lucide-vue-next";

const route = useRoute();
const navRoute = routes.find((r) => r.path == route.path);
</script>

<template>
  <div class="grid grid-cols-5 grid-rows-8 gap-5">
    <div class="card col-span-3 row-span-4">
      <Title :title="navRoute?.name?.toString() ?? ''" :icon="navRoute?.icon" :icon-color="navRoute?.primaryColor" />
      <p class="text-base-50 text-justify text-sm leading-relaxed grow">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer consequat lacus posuere metus blandit, ac
        dignissim neque mollis. Nulla tincidunt rutrum blandit. Donec auctor non ante nec feugiat. Pellentesque porta
        auctor tellus, sit amet fermentum nisi ornare a. Fusce elementum ac mauris a consequat. Mauris aliquet dolor
        imperdiet sem imperdiet, ut feugiat velit tincidunt. Vestibulum blandit purus et velit finibus dapibus. In nec
        odio non dolor tellus et nisi finibus dapibus at nec elit. Nulla dapibus lacus non odio tempor mattis. In
        commodo leo id dolor venenatis, id eleifend mi elementum. Vestibulum vulputate maximus purus, eu fermentum
        pretium ornare et. Proin vitae leo lorem. Nunc lorem libero, odio mattis tincidunt quam eu, laoreet scelerisque
        lectus.
      </p>
      <ContactLink v-bind="CONTACTS.email" />
      <ContactLink v-bind="CONTACTS.github" />
      <div class="flex justify-between gap-3">
        <ContactLink v-bind="CONTACTS.linkedin" class="w-1/2" />
        <a
          href="/resume/resume.pdf"
          download
          class="bg-green-dark hover:bg-green-dark/80 flex h-full w-1/2 items-center justify-center gap-2 rounded-md p-3 transition-colors hover:opacity-80"
        >
          <DownloadIcon class="text-green-light size-5" />
          <span class="text-green-light text-sm font-bold">Download Resume</span>
        </a>
      </div>
    </div>
    <Stat class="col-start-4 row-span-2 min-h-56 min-w-56" name="Visitors Count" value="50" color="orange-light" />
    <Stat class="col-start-5 row-span-2 min-h-56 min-w-56" name="Month Cost-to-Date" value="$0.95" color="red-light" />
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
      <Title title="Logs" :icon="TerminalIcon" />
      <div class="bg-base-350 h-full rounded-md p-3">
        <Log v-for="log in logs" v-bind="log" />
      </div>
    </div>
    <div class="card col-span-2 col-start-4 row-span-4 row-start-5">
      <Title title="Featured Projects" :icon="StarIcon" />
    </div>
  </div>
</template>
