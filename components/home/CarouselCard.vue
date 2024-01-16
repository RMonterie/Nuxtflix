<script setup lang="ts">
import { Star } from "lucide-vue-next";
import { Card, CardFooter } from "@/components/ui/card";
import { truncateString } from "@/util/truncateString";
import type { Episode } from "@/types/Episode";

const props = defineProps<{ cardItem: Episode }>();

const { cardItem } = props;
</script>

<template>
  <NuxtLink :to="`/shows/${cardItem.show.id}`">
    <Card class="mx-4 w-[210px] hover:scale-105 transition">
      <img
        :src="cardItem.show.image?.medium"
        alt="show image"
        class="rounded-t-lg"
      />
      <CardFooter class="py-1 flex justify-center items-center flex-col">
        <span class="font-extrabold text-sm">{{
          truncateString(cardItem.show.name)
        }}</span>
        <p
          v-if="cardItem.show.rating?.average"
          class="flex items-center space-x-2"
        >
          <Star class="text-white h-4 w-4 mr-1" />
          {{ cardItem.show.rating.average }}/10
        </p>
        <p v-else class="flex items-center">
          <Star class="text-white h-4 w-4 mr-1" />?/10
        </p>
      </CardFooter>
    </Card>
  </NuxtLink>
</template>
