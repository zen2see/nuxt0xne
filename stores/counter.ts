import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  const counter = ref(0)
  function inc() { counter.value++ }
  function dec() { counter.value-- }
  return { counter, inc, dec }
})
