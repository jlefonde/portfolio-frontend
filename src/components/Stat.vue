<script setup lang="ts">
import { ArrowRight } from "lucide-vue-next";
import { useRouter } from "vue-router";

const props = defineProps<{
  name: string;
  value: string;
  color: string;
  redirect?: string;
}>();

const router = useRouter();
function redirectTo() {
  if (props.redirect) {
    router.push(`${props.redirect}`);
  }
}
</script>

<template>
  <div class="bg-base-300 flex w-full flex-col items-center rounded-xl p-3">
    <div class="relative flex w-full items-center justify-center">
      <div class="text-base-50 font-bold">{{ name }}</div>
      <ArrowRight
        v-if="redirect"
        @click="redirectTo"
        class="hover:stroke-base-50 stroke-base-100 absolute right-0 cursor-pointer"
      />
    </div>
    <div class="m-auto text-6xl font-bold" :class="`text-${color}`">{{ value }}</div>
  </div>
</template>
