export const state = () => ({ counter: 0 })
export const mutations = {
  increment(state: { counter: number }) { state.counter++ },
  setCounter(state: { counter: any }, n: any) { state.counter = n }
}
export const actions = {
  inc({ commit }: any, n: any) { commit('increment') },
  set({ commit }: any, n: any) { commit('setCounter', n) }
}
export const getters = {
  double(state: { counter: number }) { return state.counter * 2 }
}