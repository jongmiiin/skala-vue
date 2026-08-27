<script setup></script>

<template>
  <div class="app-container">
    <h1>⛅ 과제 4: 라우터적용</h1>
    <hr />
    <div class="dashboard-wrapper">
      <nav class="navigation-bar">
        <RouterLink :to="{ name: 'weather-task4-home' }" class="nav-item"
          >🌦️ 날씨 대시보드</RouterLink
        >
        <span class="divider">|</span>
        <RouterLink :to="{ name: 'weather-task4-about' }" class="nav-item"
          >ℹ️ 서비스 소개</RouterLink
        >
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
