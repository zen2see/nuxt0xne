<template>
  <h1>{{ store.counter }}</h1>
  <button @click="store.inc">Add</button>
  <button @click="store.dec">Sub</button>
</template>

<script setup>
import { useCounterStore } from '~/stores/counter'
const store = useCounterStore()
</script>