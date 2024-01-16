<script setup lang="ts">
import type { Show } from "@/types/Show";
import { removeHtmlTags } from "@/util/removeHtmlTags";

const props = defineProps<{ show?: Show }>();

const { show } = props;
</script>

<template>
  <ul class="text-white">
    <ShowDetailsListItem
      :label="`Rating`"
      :value="show?.rating?.average ? `${show.rating.average}/10` : `N/A`"
    />
    <ShowDetailsListItem
      :label="`Summary`"
      :value="
        show?.summary ? removeHtmlTags(show.summary) || '' : `No description`
      "
    />
    <ShowDetailsGenreItem :genres="show?.genres" />
    <ShowDetailsListItem
      :label="`Average Run Time`"
      :value="
        show?.averageRuntime
          ? `${show.averageRuntime.toString()} minutes`
          : `N/A`
      "
    />
    <ShowDetailsListItem
      :label="`language`"
      :value="show?.language ? show.language : `N/A`"
    />
    <ShowDetailsListItem
      :label="`Status`"
      :value="show?.status ? show.status : `N/A`"
    />
  </ul>
</template>
