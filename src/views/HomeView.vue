<script setup>
const assignments = [
  { name: 'basics', title: 'Vue 기초 실습', desc: 'bind, if, for, event, model 등 기본 문법 연습' },
  { name: 'weather', title: 'Weather 실습', desc: 'props/emits, composition, 상태 관리 연습' },
]
</script>

<template>
  <div>
    <h2>실습 과제 목록</h2>
    <div style="display: flex; gap: 16px; flex-wrap: wrap">
      <RouterLink
        v-for="item in assignments"
        :key="item.name"
        :to="{ name: item.name }"
        style="display: block; width: 220px; padding: 16px; border: 1px solid #ddd; border-radius: 8px; text-decoration: none; color: inherit"
      >
        <h3 style="margin: 0 0 8px">{{ item.title }}</h3>
        <p style="margin: 0; color: #666; font-size: 0.9rem">{{ item.desc }}</p>
      </RouterLink>
    </div>
  </div>
</template>
