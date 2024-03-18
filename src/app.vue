<template>
  <NuxtLayout :class="[
    'font-light','min-h-screen',
    'bg-white text-black',
    'dark:bg-black dark:text-white',
  ]">
    <NuxtPage />
  </NuxtLayout>
</template>
<style lang="postcss" scoped></style>
<script setup lang="ts">
const {
  public: { appName },
} = useRuntimeConfig();
// console.log(config);
// const isDark = ref(false);
//页头
useHead({
  titleTemplate(title) {
    return title ? `${title} - ${appName}` : appName;
  },
  link:[
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico',
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon-16x16.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon-32x32.png',
    },
    {
      rel:'apple-touch-icon',
      href:'/apple-touch-icon.png',
      type:'image/png',
      sizes:'180x180'
    },
    {
      rel:'manifest',
      href:'/site.webmanifest'
    }
  ]
});
</script>
