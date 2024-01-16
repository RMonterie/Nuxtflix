<script setup lang="ts">
import type { Show } from "@/types/Show";
import { truncateString } from "@/util/truncateString";
import { removeHtmlTags } from "@/util/removeHtmlTags";

const props = defineProps<{ show: Show }>();

const { show } = props;
</script>

<template>
  <NuxtLink :to="`/shows/${show.id}`">
    <div
      class="bg-gray-800 flex mb-1 text-white max-h-80 hover:contrast-75 transition"
    >
      <div class="w-30 h-40 md:w-100 md:h-200 overflow-hidden flex-shrink-0">
        <img
          v-if="show.image?.medium"
          :src="show.image?.medium"
          alt="show image"
          class="w-full h-full object-cover"
        />
        <img
          v-else
          :src="'/no-show-medium-image.png'"
          alt="show image"
          class="w-full h-full object-cover"
        />
      </div>
      <div class="ml-4">
        <div>
          <h1 class="text-white font-extrabold text-xl md:text-2xl">
            {{ show.name }}
          </h1>
        </div>
        <p v-if="show.summary" class="hidden md:block">
          {{ removeHtmlTags(truncateString(show.summary, 220)) }}
        </p>
        <p v-else class="hidden md:block">No Description</p>
      </div>
    </div>
  </NuxtLink>
</template>
