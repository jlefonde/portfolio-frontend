<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { CONTACTS } from "../data/contacts";
</script>

<template>
  <header class="bg-base-300 border-base-150 flex h-14 w-full items-center justify-end gap-3 border-b px-4 py-3">
    <div class="bg-green-dark flex items-center gap-2 rounded-md p-1">
      <div class="ml-2">
        <span class="relative flex size-4">
          <span class="bg-green-light absolute size-full animate-ping rounded-full opacity-75"></span>
          <span class="bg-green-light relative size-4 rounded-full"></span>
        </span>
      </div>
      <div class="text-green-light mr-2">AVAILABLE FOR HIRE</div>
    </div>
    <div class="bg-base-150 h-8 w-px"></div>
    <a download href="resume.pdf" class="flex item-center size-8 text-base-100 hover:rounded-sm hover:text-base-50 hover:bg-base-150 cursor-pointer" >
      <Icon icon="lucide:file-down" class="m-auto size-6"/>
    </a>
    <template v-for="contact in CONTACTS">
    <div class="bg-base-150 h-8 w-px"></div>
    <a :href="contact.href" target="_blank" class="flex item-center size-8 text-base-100 hover:rounded-sm hover:text-base-50 hover:bg-base-150 cursor-pointer" >
      <Icon :icon="contact.icon" class="m-auto size-6"/>
    </a>
    </template>
  </header>
</template>
