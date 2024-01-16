<script setup lang="ts">
import type { Show } from "@/types/Show";

const route = useRoute();

const show = ref<Show>();

// Retrieve show data based on given show id from url
const { data } = await useFetch<Show>(
  `https://api.tvmaze.com/shows/${route.params.id}`
);

if (data.value) {
  show.value = data.value;
}
</script>

<template>
  <div>
    <ShowDetailsImage
      :imageUrl="show.image?.original"
      :name="show.name"
      v-if="show?.image?.original"
    />
    <div class="px-2">
      <ShowDetailsList :show="show" />
    </div>
  </div>
</template>
