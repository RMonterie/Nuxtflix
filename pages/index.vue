<script setup lang="ts">
import { useShowStore } from "@/stores/ShowStore";
import type { Episode } from "@/types/Episode";

const $store = useShowStore();

const episodesGroupedByGenre = ref<{ [key: string | number]: Episode[] }>();

const loadShows = () => {
  $store.retrieveShows();
  episodesGroupedByGenre.value = $store.getEpisodesGroupedByGenre();
};

onBeforeMount(() => {
  loadShows();
});

onBeforeRouteUpdate(() => {
  loadShows();
});
</script>

<template>
  <div class="container">
    <div
      v-if="episodesGroupedByGenre"
      v-for="(episodes, genre) in episodesGroupedByGenre"
    >
      <HomeShowCarousel :genre="genre" :episodes="episodes" />
    </div>
    <SharedLoading v-else />
  </div>
</template>
