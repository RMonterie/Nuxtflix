<script setup lang="ts">
import { Search } from "lucide-vue-next";
const searchBarVisible = ref(false);

const openSearchBar = () => (searchBarVisible.value = true);
</script>

<template>
  <div class="flex items-center justify-between container py-2">
    <NuxtLink to="/">
      <h1
        class="font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-t from-red-600 to-white-600"
      >
        Nuxtflix
      </h1>
    </NuxtLink>
    <div class="flex items-center mt-1">
      <div v-if="searchBarVisible">
        <HeaderSearchBar
          placeholder="E.g. Breaking Bad"
          class="text-white mr-1"
        />
      </div>
      <Search
        v-if="!searchBarVisible"
        class="text-white hover:scale-105 transition hover:cursor-pointer"
        @click="openSearchBar"
      />
    </div>
  </div>
</template>
