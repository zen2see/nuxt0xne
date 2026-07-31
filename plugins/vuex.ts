import { createStore } from 'vuex/dist/vuex.esm-bundler.js'
import { defineNuxtPlugin } from '#app'
import * as vuexStore from '~/store/index'

export default defineNuxtPlugin((nuxtApp) => {
  // Avoid re-defining the global property during HMR or multiple plugin runs
  const gp = nuxtApp.vueApp.config.globalProperties as Record<string, any>
  const contextProvides = (nuxtApp.vueApp as any)?._context?.provides as Record<string, any> | undefined
  const alreadyHasProvide = Boolean(contextProvides && Object.prototype.hasOwnProperty.call(contextProvides, 'vuex'))

  if (!gp.$vuex && !alreadyHasProvide) {
    const store = createStore({
      state: vuexStore.state(),
      getters: vuexStore.getters,
      mutations: vuexStore.mutations,
    })

    // Assign to globalProperties if possible
    try {
      gp.$vuex = store
    } catch (err) {
      // eslint-disable-next-line no-console
      console.warn('[vuex plugin] Failed to set $vuex on globalProperties:', err)
    }

    // IMPORTANT: avoid calling nuxtApp.provide which uses defineGetter and may throw
    // instead assign directly into the internal provides object to avoid re-definition
    try {
      if (contextProvides) {
        if (!Object.prototype.hasOwnProperty.call(contextProvides, 'vuex')) {
          contextProvides.vuex = store
        }
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.warn('[vuex plugin] Failed to assign directly to internal provides:', err)
    }

    // Do not return a 'provide' object to avoid Nuxt calling defineGetter again
    return
  }

  // If already present, ensure we do not attempt to redefine anything
  return
})
