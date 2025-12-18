<script setup lang="ts">
import ILucideCircleAlert from '~icons/lucide/circle-alert'
import ILucideSquareArrowRight from '~icons/lucide/arrow-right'

</script>

<template>
  <div class="card m-auto w-fit">
    <div class="flex flex-col items-center gap-3 px-32 py-6">
      <ILucideCircleAlert class="text-blue-light size-16" />
      <div class="text-blue-light text-5xl font-extrabold">404</div>
      <div class="text-base-100 text-xl font-semibold">Page Not Found</div>
      <div class="text-base-50 max-w-xs text-center">
        Sorry, the page you are looking for does not exist or has been moved.
      </div>
      <RouterLink
        to="/about"
        class="bg-blue-dark text-blue-light rounded-sm px-4 py-2 font-bold hover:opacity-75 flex gap-2 items-center"
      >
      Go to About
      <ILucideSquareArrowRight />
      </RouterLink>
    </div>
  </div>
</template>
