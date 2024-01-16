<script setup lang="ts">
import { Input } from "@/components/ui/input";
const router = useRouter();

const searchQuery = ref("");

const search = () => {
  router.push(`/search/${searchQuery.value}`);
};
</script>

<template>
  <div>
    <Input v-model="searchQuery" @keyup.enter="search" placeholder="Search" />
  </div>
</template>
