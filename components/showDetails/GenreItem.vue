<script setup lang="ts">
const props = defineProps<{ genres?: string[] }>();

const { genres } = props;
</script>

<template>
  <li class="pt-2 pb-4 border-b border-white">
    <b>Genres: </b>
    <span v-if="genres?.length">{{
      genres?.filter((genre: String) => genre.trim() !== "").join(", ")
    }}</span>
    <span v-else> N/A </span>
  </li>
</template>
