<script setup>
const assignments = [
  { name: 'basic', title: 'Vue 기초 실습', desc: 'bind, if, for, event, model 등 기본 문법 연습' },
  {
    name: 'composition',
    title: 'Composition 실습',
    desc: 'reactive/ref, computed, watch/watchEffect 등 연습',
  },
  { name: 'component', title: 'Component 실습', desc: '생명주기, props/emit, 슬롯 등 연습' },
  { name: 'library', title: 'Library 실습', desc: 'Pinia 스토어, Axios 통신, Element Plus, 최신 JS 문법 등 연습' },
  {
    name: 'weather-task1',
    title: 'Weather 실습1',
    desc: 'v-for/:key, :value+@input, v-if/v-else 조건부, click/click.stop 실습',
  },
  {
    name: 'weather-task2',
    title: 'Weather 실습2',
    desc: 'computed로 검색 필터링, watch/watchEffect로 상태 변화 추적 로직 실습',
  },
  {
    name: 'weather-task3',
    title: 'Weather 실습3',
    desc: 'SearchBar/WeatherCard 등 컴포넌트 분리, props + emit 실습',
  },
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
        style="
          display: block;
          width: 220px;
          padding: 16px;
          border: 1px solid #ddd;
          border-radius: 8px;
          text-decoration: none;
          color: inherit;
        "
      >
        <h3 style="margin: 0 0 8px">{{ item.title }}</h3>
        <p style="margin: 0; color: #666; font-size: 0.9rem">{{ item.desc }}</p>
      </RouterLink>
    </div>
  </div>
</template>
