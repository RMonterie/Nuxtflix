<script setup lang="ts">
import type { ShowFromSearch } from "@/types/Show";

const route = useRoute();

const showData = ref<ShowFromSearch[]>();

// Retrieve list of shows based on search query
const { data, pending } = await useFetch<ShowFromSearch[]>(
  `https://api.tvmaze.com/search/shows?q=${route.params.query}`
);

showData.value = data.value || [];
</script>

<template>
  <div v-if="!pending">
    <h1 class="text-white text-xl font-extrabold">
      Search results for: {{ route.params.query }}
    </h1>
    <SearchList :shows="showData" v-if="showData?.length" />
    <div v-else class="container flex items-center justify-center h-[50vh]">
      <h1 class="text-white text-2xl font-extrabold">No results found 😥</h1>
    </div>
  </div>
  <SharedLoading v-else />
</template>
