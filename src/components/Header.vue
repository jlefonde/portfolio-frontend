<script setup lang="ts">
import { CONTACTS } from '../data/contacts'
import ILucideFileDown from '~icons/lucide/file-down'
</script>

<template>
  <header class="bg-base-300 border-base-150 flex h-14 w-full items-center justify-end gap-3 border-b px-4 py-3">
    <div class="bg-green-dark flex items-center gap-2 rounded-md p-1 text-nowrap ml-14 lg:ml-0">
      <div class="ml-2">
        <span class="relative flex size-4">
          <span class="bg-green-light absolute size-full animate-ping rounded-full opacity-75"></span>
          <span class="bg-green-light relative size-4 rounded-full"></span>
        </span>
      </div>
      <div class="text-green-light mr-2">
        <span>AVAILABLE FOR HIRE</span>
      </div>
    </div>
    <div class="bg-base-150 h-8 w-px hidden sm:block"></div>
    <a
      download
      href="resume.pdf"
      class="item-center text-base-100 hover:text-base-50 hover:bg-base-150 hidden sm:flex size-8 cursor-pointer hover:rounded-sm"
      title="Download resume"
    >
      <component :is="ILucideFileDown" class="m-auto size-6" />
    </a>
    <template v-for="contact in CONTACTS">
      <div class="bg-base-150 h-8 w-px hidden sm:block"></div>
      <a
        :href="contact.href"
        target="_blank"
        class="item-center text-base-100 hover:text-base-50 hover:bg-base-150 hidden sm:flex size-8 cursor-pointer hover:rounded-sm"
        :title="contact.name"
      >
        <component :is="contact.icon" class="m-auto size-6" />
      </a>
    </template>
  </header>
</template>
