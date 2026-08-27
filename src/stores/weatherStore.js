import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

const TARGET_CITIES = [
  { name: '서울', lat: 37.5665, lon: 126.978 },
  { name: '부산', lat: 35.1796, lon: 129.0756 },
  { name: '인천', lat: 37.4563, lon: 126.7052 },
  { name: '대구', lat: 35.8714, lon: 128.6014 },
  { name: '대전', lat: 36.3504, lon: 127.3845 },
  { name: '광주', lat: 35.1595, lon: 126.8526 },
  { name: '울산', lat: 35.5384, lon: 129.3114 },
  { name: '성남', lat: 37.4201, lon: 127.1265 },
  { name: '전주', lat: 35.8242, lon: 127.148 },
  { name: '포항', lat: 36.019, lon: 129.3435 },
  { name: '제주', lat: 33.4996, lon: 126.5312 },
  { name: '춘천', lat: 37.8813, lon: 127.7298 },
  // 추움 대비용 해외 도시
  { name: '모스크바', lat: 55.7558, lon: 37.6173 },
  { name: '헬싱키', lat: 60.1699, lon: 24.9384 },
  { name: '오슬로', lat: 59.9139, lon: 10.7522 },
  { name: '레이캬비크', lat: 64.1466, lon: -21.9426 },
  { name: '앵커리지', lat: 61.2181, lon: -149.9003 },
  { name: '맥머도기지', lat: -77.85, lon: 166.6754 }, // 남극, 지금 남반구 겨울이라 확실히 춥게 나옴
]

export const useWeatherStore = defineStore('weather', () => {
  const cities = ref([])
  const loadProgress = ref(0)
  const isLoading = ref(false)

  const fetchOne = async (cityMeta) => {
    const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY
    const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
      params: { lat: cityMeta.lat, lon: cityMeta.lon, appid: apiKey, units: 'metric', lang: 'kr' },
    })
    return {
      id: String(data.id ?? `${cityMeta.lat}-${cityMeta.lon}`),
      name: cityMeta.name,
      temp: Math.round(data.main.temp),
      status: data.weather[0].description,
      humidity: data.main.humidity,
      wind: `${data.wind.speed}m/s`,
    }
  }

  const loadAllCities = async () => {
    if (cities.value.length > 0) return // 세션 중 재방문 시 중복 로딩 방지
    isLoading.value = true
    loadProgress.value = 0
    const results = new Array(TARGET_CITIES.length)
    let completed = 0

    await Promise.all(
      TARGET_CITIES.map(async (cityMeta, index) => {
        try {
          results[index] = await fetchOne(cityMeta)
        } catch (e) {
          console.error(`${cityMeta.name} 날씨 조회 실패`, e)
        } finally {
          completed += 1
          loadProgress.value = Math.round((completed / TARGET_CITIES.length) * 100)
        }
      }),
    )

    cities.value = results.filter(Boolean)
    isLoading.value = false
  }

  return { cities, loadProgress, isLoading, loadAllCities }
})
