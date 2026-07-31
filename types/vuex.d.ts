declare module 'vuex' {
  export interface Store<S> {
    state: S
    getters: Record<string, any>
    commit(type: string, payload?: any): void
  }

  export interface StoreOptions<S> {
    state?: S | (() => S)
    getters?: Record<string, any>
    mutations?: Record<string, any>
  }

  export function createStore<S>(options: StoreOptions<S>): Store<S>
}

declare module 'vuex/dist/vuex.esm-bundler.js' {
  export * from 'vuex'
}
