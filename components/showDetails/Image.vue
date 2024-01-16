<script setup lang="ts">
import { ArrowLeft } from "lucide-vue-next";
const props = defineProps<{ imageUrl: string; name: string }>();

const { imageUrl, name } = props;
</script>

<template>
  <div class="w-full h-[60vh] overflow-hidden relative">
    <img
      v-if="imageUrl"
      :src="imageUrl"
      alt="Show image"
      class="w-full h-full object-cover"
    />
    <img
      v-else
      src="/no-show-original-image.png"
      alt="Show image"
      class="w-full h-full object-cover"
    />
    <div
      class="absolute top-1 left-1 p-2 flex items-center justify-start text-white bg-black/50"
    >
      <ArrowLeft
        class="box-shadow hover:cursor-pointer"
        @click="$router.go(-1)"
      />
    </div>
    <div
      class="absolute bottom-0 left-0 p-2 flex items-center justify-start bg-black/50 w-full"
    >
      <h2 class="text-white text-4xl font-extrabold">
        {{ name }}
      </h2>
    </div>
  </div>
</template>
