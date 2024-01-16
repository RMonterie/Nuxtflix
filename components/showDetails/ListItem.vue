<script setup lang="ts">
const props = defineProps<{
  label: String;
  value?: String;
}>();

const { label, value } = props;
</script>

<template>
  <li class="pt-2 pb-4 border-b border-white">
    <b>{{ label }}:</b> {{ value }}
  </li>
</template>
