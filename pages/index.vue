<template>
  <section class="container">
    <h1>Pinia square: {{ square }}</h1>

    <p class="counter-row">
      <span class="count">Pinia Count: <span class="count-value">{{ count }}</span></span>
      <span class="double">Pinia Double: <span class="double-value">{{ double }}</span></span>
    </p>

    <div class="actions">
      <button @click="inc">Add</button>
      <button @click="dec">Sub</button>
      <button @click="vuexInc">AddMutation</button>
      <button @click="vuexDec">SubMutation</button>
    </div>

    <div class="vuex-row">
      <p>Vuex Count: {{ vuexCount }}</p>
      <p>Vuex Square: {{ vuexSquare }}</p>
    </div>
  </section>

  <div>
    <p>Try again with mutex</p>
    <p>{{ count }}</p>
    <p>{{ double }}</p>
    <button @click="inc">+1</button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useCounterStore } from '~/stores/counter'
import { useVuexStore } from '~/store/vuex'

const store = useCounterStore()
const vuexStore = useVuexStore()

const count = computed(() => store.counter)
const double = computed(() => store.doubleCount)
const square = computed(() => store.getCounterSquare)
const vuexCount = computed(() => vuexStore.state.counter)
const vuexSquare = computed(() => vuexStore.getters.getCounterSquare)

const inc = () => store.inc()
const dec = () => store.dec()
const vuexInc = () => vuexStore.commit('incMut')
const vuexDec = () => vuexStore.commit('decMut')
</script>

<style scoped>
.container { max-width: 1100px; margin: 24px auto; padding: 0 16px }
.counter-row { display: flex; flex-direction: column; align-items: flex-start; gap: 6px; margin: 0 0 12px }
.count-value { font-size: 1.25rem; font-weight: 600 }
.double { margin-left: 0 }
.double-value { font-size: 0.75rem; font-weight: 700 }
.actions button { margin-right: 8px }
</style>
