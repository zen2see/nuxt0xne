import type { Store } from 'vuex'
import { getCurrentInstance, ref } from 'vue'
import { useNuxtApp } from '#app'

export interface VuexState {
  counter: number
}

export type VuexStore = Store<VuexState>

export function useVuexStore(): VuexStore {
  const nuxtApp = useNuxtApp() as any

  // Try nuxtApp provided store first
  const provided = nuxtApp.$vuex ?? nuxtApp._context?.provides?.vuex
  if (provided) return provided as VuexStore

  // Try current component instance (useful during HMR/reload timing)
  const inst = getCurrentInstance()
  const instProvided = inst?.appContext?.provides?.vuex
  if (instProvided) return instProvided as VuexStore

  // Fallback stub/proxy to avoid runtime errors when Vuex isn't attached yet (HMR/SSR timing).
  // The proxy forwards to the real store once it becomes available, and exposes a safe default initially.
  // eslint-disable-next-line no-console
  console.warn('[useVuexStore] Vuex store not found; returning forwarding proxy store')

  const resolved = ref<VuexStore | undefined>(provided ?? instProvided ?? undefined)

  const resolveReal = (): VuexStore | undefined => {
    if (resolved.value) return resolved.value
    const a = (nuxtApp.$vuex ?? nuxtApp._context?.provides?.vuex ?? inst?.appContext?.provides?.vuex) as VuexStore | undefined
    if (a) resolved.value = a
    return resolved.value
  }

  const stubState = { counter: 0 }
  const stubGetters = { getCounterSquare: 0 }

  const proxy = new Proxy(
    {},
    {
      get(_, prop: string) {
        const real = resolveReal()
        if (real) {
          // @ts-ignore
          return (real as any)[prop]
        }

        if (prop === 'state') return stubState
        if (prop === 'getters') return stubGetters
        if (prop === 'commit') return (type: string, payload?: any) => {
          // eslint-disable-next-line no-console
          console.warn('[useVuexStore] commit called before Vuex store ready:', type)
        }
        if (prop === 'dispatch') return async (type: string, payload?: any) => {
          // eslint-disable-next-line no-console
          console.warn('[useVuexStore] dispatch called before Vuex store ready:', type)
          return undefined
        }
        return undefined
      },
    }
  ) as VuexStore

  return proxy
}
