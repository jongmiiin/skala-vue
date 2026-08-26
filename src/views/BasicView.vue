<script setup>
import SampleOne from '@/components/practices/basic/SampleOne.vue'
import SampleTwo from '@/components/practices/basic/SampleTwo.vue'

import VueBind from '@/components/practices/basic/VueBind.vue'
import VueBindClass from '@/components/practices/basic/VueBindClass.vue'
import VueBindStyle from '@/components/practices/basic/VueBindStyle.vue'
import VueBindShorthand from '@/components/practices/basic/VueBindShorthand.vue'

import VueIf from '@/components/practices/basic/VueIf.vue'
import VueShow from '@/components/practices/basic/VueShow.vue'
import VueFor from '@/components/practices/basic/VueFor.vue'

import EventBasic from '@/components/practices/basic/EventBasic.vue'
import EventObject from '@/components/practices/basic/EventObject.vue'
import EventModifier from '@/components/practices/basic/EventModifier.vue'

import ModelBasic from '@/components/practices/basic/ModelBasic.vue'
import ModelForm from '@/components/practices/basic/ModelForm.vue'
import ModelModifier from '@/components/practices/basic/ModelModifier.vue'

import StyleScoped from '@/components/practices/basic/StyleScoped.vue'
</script>

<template>
  <div>
    <SampleOne />
    <SampleTwo />

    <VueBind />
    <VueBindClass />
    <VueBindStyle />
    <VueBindShorthand />

    <VueIf />
    <VueShow />
    <VueFor />

    <EventBasic />
    <EventObject />
    <EventModifier />

    <ModelBasic />
    <ModelForm />
    <ModelModifier />

    <StyleScoped />
  </div>
</template>

<style>
@import '@/assets/practice.css';
</style>
