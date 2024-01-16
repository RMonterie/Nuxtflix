<script setup lang="ts">
import { useShowStore } from "@/stores/ShowStore";
import type { Episode } from "@/types/Episode";

const $store = useShowStore();

const episodesGroupedByGenre = ref<{ [key: string | number]: Episode[] }>();

onBeforeMount(() => {
  $store.retrieveShows();
  episodesGroupedByGenre.value = $store.getEpisodesGroupedByGenre();
});

onMounted(() => {
  $store.retrieveShows();
  const groupedEpisodes = $store.getEpisodesGroupedByGenre();
  episodesGroupedByGenre.value = groupedEpisodes;
});
</script>

<template>
  <div class="container">
    <div v-for="(episodes, genre) in episodesGroupedByGenre">
      <HomeShowCarousel :genre="genre" :episodes="episodes" />
    </div>
  </div>
</template>
