<script setup>
const navLinks = [
  { name: 'home', label: '홈' },
  { name: 'basic', label: 'Basic' },
  { name: 'composition', label: 'Composition' },
  { name: 'component', label: 'Component' },
  { name: 'library', label: 'Library' },
  { name: 'weather-task1', label: 'Weather 1' },
  { name: 'weather-task2', label: 'Weather 2' },
  { name: 'weather-task3', label: 'Weather 3' },
  // { name: 'weather-task4', label: 'Weather 4' },
  // { name: 'weather-task5', label: 'Weather 5' },
]
</script>

<template>
  <nav style="display: flex; flex-wrap: wrap; gap: 12px; padding: 12px 20px; background: #f5f5f5">
    <RouterLink
      v-for="link in navLinks"
      :key="link.name"
      :to="{ name: link.name }"
      active-class="nav-active"
    >
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
