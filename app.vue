<template>
  <div>
    <NuxtRouteAnnouncer />
    <Header />
    <NuxtPage />

  </div>
</template>

<script setup lang="ts">
const { theme, setTheme } = useTheme()

onMounted(() => {
  setTheme(theme.value)
})
</script>