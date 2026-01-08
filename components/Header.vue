<template>
    <nav>
        <NuxtLink to="/">Accueil</NuxtLink>
        <NuxtLink to="/Contact">Contact</NuxtLink>
        <button @click="toggleTheme">
            {{ theme === 'light' ? '🌙' : '☀️' }}
        </button>
    </nav>
</template>

<script setup lang="ts">
const { theme, setTheme } = useTheme()

const toggleTheme = () => {
    setTheme(theme.value === 'light' ? 'dark' : 'light')
}
</script>
