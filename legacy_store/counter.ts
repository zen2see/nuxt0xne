import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({ counter: 0 }),
  actions: {
    inc() { this.counter++ },
    dec() { this.counter-- }
  }
})
