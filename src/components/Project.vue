<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { FwbModal } from 'flowbite-vue'
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

import type { Project } from '../types'
import { routes } from '../router'
import Tag from '../components/Tag.vue'
import Title from '../components/Title.vue'
import Link from '../components/Link.vue'
import Feature from '../components/Feature.vue'
import ILucideStar from '~icons/lucide/star'
import ILucideLayers from '~icons/lucide/layers'
import ILucideLink from '~icons/lucide/link'
import ILucideZap from '~icons/lucide/zap'
import ILucideGlobe from '~icons/lucide/globe'
import ILucideChevronDown from '~icons/lucide/chevron-down'
import IOcticonMarkGithub24 from '~icons/octicon/mark-github-24'

const props = withDefaults(defineProps<Project & { featuredColor?: string, showModal: boolean }>(), { featuredColor: 'base-50', showModal: false })

const route = useRoute()
const navRoute = routes.find((r) => r.path == route.path)

const isShowModal = ref(props.showModal)

function closeModal() {
  isShowModal.value = false
}
function showModal() {
  isShowModal.value = true
}

watch(isShowModal, (newValue) => {
  if (newValue) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})

const carouselConfig = {
  itemsToShow: 1,
  wrapAround: true,
}

const rootElement = ref<HTMLElement>()

defineExpose({
  rootElement,
})
</script>

<template>
  <div ref="rootElement" class="card hover:scale-101">
    <div class="flex flex-1 flex-col gap-3">
      <img :src="cover.path" :alt="cover.alt" class="border-base-150 h-72 w-full rounded-md border object-contain" />
      <Title :title="name" :icon="ILucideStar" :icon-color="featured ? `${navRoute?.primaryColor}` : `base-100`" />
      <div class="text-base-100 text-sm">{{ highlight }}</div>
      <div class="flex flex-col gap-3">
        <Link v-if="githubLink" name="View Source" :icon="IOcticonMarkGithub24" :href="githubLink ?? ''" />
        <Link v-if="liveLink" name="Live Website" :icon="ILucideGlobe" :href="liveLink ?? ''" />
      </div>
    </div>
    <div class="flex flex-col gap-3">
      <div class="flex flex-wrap gap-x-1 gap-y-2">
        <Tag v-for="stack in stacks" :key="stack.name" v-bind="stack" />
      </div>
      <button
        class="text-base-100 border-t-base-150 flex cursor-pointer flex-col items-center border-t pt-3 text-sm hover:opacity-75"
        @click="showModal"
      >
        <div class="m-auto">Click for details</div>
        <component :is="ILucideChevronDown" class="size-5" />
      </button>
    </div>
  </div>
  <Teleport to="body">
    <FwbModal v-if="isShowModal" @close="closeModal" size="7xl">
    <template #header>
      <div class="flex flex-col gap-2">
        <Title :title="name" :icon="ILucideStar" :icon-color="featured ? `${navRoute?.primaryColor}` : `base-100`" />
        <div class="text-base-100 text-sm">{{ highlight }}</div>
      </div>
    </template>
    <template #body>
      <div class="flex flex-col gap-5 max-h-[calc(100vh-150px)] overflow-y-auto scrollbar scrollbar-thumb">
        <div class="flex flex-col gap-5 lg:flex-row">
          <Carousel v-bind="carouselConfig" class="w-full touch-pan-y lg:w-2/3">
            <Slide v-for="image in screenshots" :key="image.path">
              <div class="flex h-full items-center justify-center">
                <img :src="image.path" :alt="image.alt" class="w-full object-cover" />
              </div>
            </Slide>
            <template #addons>
              <Navigation />
              <Pagination />
            </template>
          </Carousel>
          <div class="flex w-full flex-col justify-between gap-5 lg:w-1/3">
            <div class="flex flex-col gap-3">
              <Title title="Stack" :icon="ILucideLayers" header-size="h2" />
              <div class="flex flex-wrap gap-x-1 gap-y-2">
                <Tag v-for="stack in stacks" v-bind="stack" />
              </div>
            </div>
            <div class="flex flex-col gap-3">
              <Title v-if="githubLink || liveLink" title="Links" :icon="ILucideLink" header-size="h2" />
              <Link v-if="githubLink" name="View Source" :icon="IOcticonMarkGithub24" :href="githubLink ?? ''" />
              <Link v-if="liveLink" name="Live Website" :icon="ILucideGlobe" :href="liveLink ?? ''" />
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-3">
          <Title title="Key Features" :icon="ILucideZap" header-size="h2" />
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <Feature v-for="feature in features" v-bind="feature" :icon-color="navRoute?.primaryColor" />
          </div>
        </div>
      </div>
    </template>
    </FwbModal>
  </Teleport>
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

:deep(.bg-white.dark\:bg-gray-700) {
  background-color: var(--color-base-300);
}

:deep(.border-gray-200.dark\:border-gray-600) {
  border-color: var(--color-base-150);
}

:deep(.text-gray-400) {
  color: var(--color-base-100);
}

:deep(.hover\:bg-gray-200:hover) {
  background-color: var(--color-base-200);
}

:deep(.fixed.inset-0.z-40) {
  background-color: var(--color-base-350);
  opacity: 0.75;
}

</style>
