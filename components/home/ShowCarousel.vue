<script setup lang="ts">
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import type { Episode } from "@/types/Episode";
const props = defineProps<{ genre: string | number; episodes: Episode[] }>();

const { genre, episodes } = props;
</script>

<template>
  <h1 class="text-white font-extrabold">{{ genre }}</h1>
  <Carousel class="w-full">
    <CarouselContent class="py-5">
      <CarouselItem v-for="cardItem in episodes" :key="cardItem.id">
        <HomeCarouselCard :cardItem="cardItem" />
      </CarouselItem>
    </CarouselContent>
    <CarouselPrevious class="hidden lg:inline pl-2" />
    <CarouselNext class="hidden lg:inline pl-2" />
  </Carousel>
</template>
