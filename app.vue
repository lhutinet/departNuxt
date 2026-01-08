<template>
  <div>
    <NuxtRouteAnnouncer />
    <Header />
    <NuxtPage />

  </div>
</template>

<script setup lang="ts">
const { initTheme } = useTheme()

onMounted(() => {
  initTheme()
})
</script>
