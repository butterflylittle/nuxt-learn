<template>
  <div>鲲浪kunlang</div>
  <header class="flex justify-between py-3 px-4">
    <div class="flex gap-4">
        <button @click="colorMode.preference='light'">light</button>
        <button @click="colorMode.preference='dark'">dark</button>
        <button @click="colorMode.preference='system'">system</button>

    </div>
  </header>
</template>
<script setup lang="ts">
const colorMode = useColorMode();
console.log(colorMode);
</script>
