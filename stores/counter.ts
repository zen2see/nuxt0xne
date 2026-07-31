import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  const _counter = ref(0)

  //   const counter = computed({
  //     get: () => _counter.value,
  //     set: (value: number) => {
  //       _counter.value = value
  //     }
  //   })
  const counter = computed(() => _counter.value)
  const getCounterSquare = computed(() => _counter.value * _counter.value)
  const doubleCount = computed(() => _counter.value * 2)
  const tripleCount = computed(() => _counter.value * 3)

  function inc() { _counter.value++ }
  function dec() { _counter.value--}
  function setCounter(value: number) { _counter.value = value}
  
  return { counter, getCounterSquare, doubleCount, tripleCount, inc, dec, setCounter,    }
})
