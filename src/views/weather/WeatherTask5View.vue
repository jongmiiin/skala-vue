<script setup>
import UnitToggler from '@/components/exercise/UnitToggler.vue'
</script>

<template>
  <div class="app-container">
    <h1>⛅ 과제 5: 스토어적용 / 최종</h1>
    <hr />
    <div class="dashboard-wrapper">
      <nav class="navigation-bar">
        <RouterLink :to="{ name: 'weather-task5-home' }" class="nav-item"
          >🌦️ 날씨 대시보드</RouterLink
        >
        <span class="divider">|</span>
        <RouterLink :to="{ name: 'weather-task5-about' }" class="nav-item"
          >ℹ️ 서비스 소개</RouterLink
        >
        <UnitToggler />
      </nav>
      <main>
        <RouterView />
      </main>
    </div>
  </div>
</template>

<style>
@import '@/assets/exercise.css';
</style>
