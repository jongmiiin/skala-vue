<script setup>
// 3. Component Lifecycle
import LifecycleParent from '@/components/practices/component/LifecycleParent.vue'

// 4. Props & Emits
import PropsEmitsParent from '@/components/practices/component/PropsEmitsParent.vue'

// 5. Component Slot
import SlotDefaultParent from '@/components/practices/component/SlotDefaultParent.vue'
import SlotNamedParent from '@/components/practices/component/SlotNamedParent.vue'
import SlotScopedParent from '@/components/practices/component/SlotScopedParent.vue'
</script>

<template>
  <div class="practice-container">
    <h1>3. Component Lifecycle</h1>
    <hr />
    <LifecycleParent />
    <h1>4. Props & Emits</h1>
    <hr />
    <PropsEmitsParent />
    <h1>5. Component Slot</h1>
    <hr />
    <SlotDefaultParent />
    <SlotNamedParent />
    <SlotScopedParent />
  </div>
</template>

<style>
/* ⚠️ 외부 스타일 파일(예: 버튼 디자인 뭉치)을 이 방 안으로 쏙 가리켜 가져옵니다 */
@import '@/assets/practice.css';
</style>
