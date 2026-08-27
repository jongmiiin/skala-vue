<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const handleGoHome = () => {
  router.push({ name: 'weather-task5-home' })
}
</script>

<template>
  <div>
    <h3>ℹ️ 서비스 소개</h3>
    <hr />

    <div class="description-box">
      <p>
        <strong>SKALA Frontend 실습</strong>으로 만든 실시간 날씨 대시보드입니다. Vue 3, Vue Router,
        Pinia로 화면을 구성하고, OpenWeather API로 실제 도시들의 날씨를 가져와 보여줍니다.
      </p>
      <ul>
        <li>실시간 기온·습도·풍속을 OpenWeather API로 바로 조회</li>
        <li>도시 목록을 검색하고, 섭씨/화씨 단위도 한 번에 전환</li>
        <li>새로고침 없이 화면을 오가며 도시별 상세 정보 확인</li>
      </ul>
    </div>

    <button @click="handleGoHome" class="home-btn">대시보드 홈으로 이동</button>
  </div>
</template>

<style scoped>
.description-box {
  background-color: #f8f9fa;
  padding: 12px;
  border-radius: 6px;
  line-height: 1.5;
  font-size: 14px;
}

ul {
  padding-left: 20px;
  margin: 8px 0 0 0;
}

li {
  margin-bottom: 6px;
  color: #555;
}

code {
  background-color: #ffeaa7;
  padding: 2px 4px;
  border-radius: 4px;
  color: #d63031;
}

.home-btn {
  width: 100%;
  margin-top: 15px;
  padding: 10px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
}
</style>
