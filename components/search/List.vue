<script setup lang="ts">
import type { ShowFromSearch } from "@/types/Show";

const props = defineProps<{ shows?: ShowFromSearch[] | null }>();

const { shows } = props;
</script>

<template>
  <div>
    <div v-for="showItem in shows">
      <SearchListCard :show="showItem.show" />
    </div>
  </div>
</template>
