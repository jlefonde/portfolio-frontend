<script setup lang="ts">
import ILucideInfo from '~icons/lucide/info'

const props = withDefaults(
  defineProps<{
    position?: 'top' | 'bottom' | 'left' | 'right'
  }>(),
  {
    position: 'top',
  }
)

const positionClass = new Map<string, string>([
  ['top', 'bottom-full'],
  ['bottom', 'top-full'],
  ['left', 'right-full'],
  ['right', 'left-full'],
])
</script>

<template>
  <div class="group relative flex items-center">
    <component :is="ILucideInfo" class="text-base-50 hover:text-base-100 size-6 cursor-help transition-colors" />
    <div
      :class="positionClass.get(props.position)"
      class="border-base-150 bg-base-350/95 absolute z-50 m-2 flex w-max origin-right scale-0 flex-col gap-3 rounded-lg border p-3 text-sm opacity-0 shadow-xl backdrop-blur-sm transition-all duration-200 ease-out group-hover:scale-100 group-hover:opacity-100"
    >
      <slot></slot>
    </div>
  </div>
</template>
