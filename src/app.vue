<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<style lang="postcss" scoped></style>
<script setup lang="ts">
const config = useRuntimeConfig();
console.log(config);
const isDark = ref(false);
</script>
