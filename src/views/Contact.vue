<script setup lang="ts">
import Stat from "../components/Stat.vue";
import ContactLink from "../components/ContactLink.vue";
import Title from "../components/Title.vue";
import InfoItem from "../components/InfoItem.vue";
import { CONTACTS, availability } from "../data/contacts";
import { routes } from "../router";
import {
  DownloadIcon,
  CalendarSearchIcon,
  UserIcon,
  AtSignIcon,
  SendIcon,
  InboxIcon,
  MapPinIcon,
  ActivityIcon,
  TargetIcon,
  MapPinHouseIcon,
  CalendarCheck2Icon,
} from "lucide-vue-next";
import { useRoute } from "vue-router";

const route = useRoute();
const navRoute = routes.find((r) => r.path == route.path);
</script>

<template>
  <div class="grid-row-2 grid grid-cols-5 gap-5">
    <div class="card col-span-2">
      <Title :title="navRoute?.name?.toString() ?? ''" :icon="navRoute?.icon" :icon-color="navRoute?.primaryColor" />
      <ContactLink v-for="contact in CONTACTS" v-bind="contact" />
    </div>
    <div class="flex flex-col gap-5">
      <Stat class="min-h-56" name="Response Time" value="<24h" color="green-light" />
      <a
        href="/resume/resume.pdf"
        download
        class="bg-green-dark hover:bg-green-dark/80 flex h-full items-center justify-center gap-2 rounded-md p-3 transition-colors hover:opacity-80"
      >
        <DownloadIcon class="stroke-green-light size-5" />
        <span class="text-green-light text-sm font-bold">Download Resume</span>
      </a>
    </div>
    <div class="card col-span-2 gap-5">
      <Title title="Availability" :icon="CalendarSearchIcon" />
      <div class="flex flex-1 flex-col justify-around">
        <InfoItem label="Location" :value="availability.location" :icon="MapPinIcon" />
        <InfoItem label="Currently" :value="availability.currently" :icon="ActivityIcon" />
        <InfoItem label="Looking For" :value="availability.lookingFor" :icon="TargetIcon" />
        <InfoItem label="Open To" :value="availability.openTo" :icon="MapPinHouseIcon" />
        <InfoItem label="Available" :value="availability.available" :icon="CalendarCheck2Icon" />
      </div>
    </div>
    <form class="card col-span-3 row-start-2 flex flex-col" @submit.prevent="">
      <Title title="Contact Form" :icon="InboxIcon" />
      <div class="relative h-14 w-full rounded-md">
        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <UserIcon class="stroke-base-100 size-5" />
        </div>
        <input
          placeholder="Name"
          class="text-base-50 bg-base-350 block h-full w-full rounded-md p-3 pl-10 text-sm"
          type="text"
        />
      </div>
      <div class="relative h-14 w-full rounded-md">
        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <AtSignIcon class="stroke-base-100 size-5" />
        </div>
        <input
          placeholder="Email"
          class="text-base-50 bg-base-350 block h-full w-full rounded-md p-3 pl-10 text-sm"
          type="email"
        />
      </div>
      <textarea class="bg-base-350 text-base-50 min-h-48 rounded-md p-3 text-sm" placeholder="Message"></textarea>
      <button
        type="submit"
        class="bg-green-dark hover:bg-green-dark/80 flex h-14 items-center justify-center gap-2 rounded-md p-3 transition-colors hover:opacity-80"
      >
        <SendIcon class="stroke-green-light size-5" />
        <span class="text-green-light text-sm font-bold">Send Message</span>
      </button>
    </form>
  </div>
</template>
