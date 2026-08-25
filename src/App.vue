<script setup>
import AppHeader from '@/components/layout/AppHeader.vue'
import AppNavBar from '@/components/layout/AppNavBar.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
</script>

<template>
  <AppHeader />
  <AppNavBar />
  <main style="padding: 20px">
    <RouterView />
  </main>
  <AppFooter />
</template>
