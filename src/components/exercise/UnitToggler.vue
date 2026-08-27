<script setup>
import { useConfigStore } from '@/stores/configStore'
import { ElMessage } from 'element-plus'
import { computed } from 'vue'

const configStore = useConfigStore()

const isFahrenheit = computed({
  get: () => configStore.unit === 'fahrenheit',
  set: () => {
    configStore.toggleUnit()
    ElMessage.success(
      configStore.unit === 'fahrenheit' ? '🌡️ 화씨(℉)로 전환했어요' : '🌡️ 섭씨(℃)로 전환했어요',
    )
  },
})
</script>

<template>
  <div
    style="
      text-align: center;
      margin-left: auto;
      display: inline-flex;
      align-items: center;
      gap: 8px;
    "
  >
    <span
      >날씨단위: <strong>{{ configStore.unit === 'celsius' ? '섭씨(℃)' : '화씨(℉)' }}</strong></span
    >
    <el-switch v-model="isFahrenheit" active-text="℉" inactive-text="℃" />
  </div>
</template>

<style scoped>
.toggle-btn {
  padding: 6px 10px;
  background-color: #4b6584;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}
</style>
