<script setup>
const navLinks = [
  { name: 'home', label: '홈' },
  { name: 'basics', label: 'Vue 기초' },
  { name: 'weather', label: 'Weather' },
]
</script>

<template>
  <nav style="display: flex; gap: 12px; padding: 12px 20px; background: #f5f5f5">
    <RouterLink v-for="link in navLinks" :key="link.name" :to="{ name: link.name }" active-class="nav-active">
      {{ link.label }}
    </RouterLink>
  </nav>
</template>

<style scoped>
.nav-active {
  font-weight: bold;
  color: #4b6584;
}
</style>
