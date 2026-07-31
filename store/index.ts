// STATE
export const state = () => ({
    counter: 5
})

// GETTERS
export const getters = {
    getCounterSquare(state: { counter: number }) {
        return (state.counter * state.counter)
    }
}

// MUTATIONS
export const mutations = {
    incMut(state: { counter: number }) {
        state.counter++
    },
    decMut(state: { counter: number }) {
        state.counter--
    }
}