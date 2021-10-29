import type { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  shallOpenDrawer: false
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  shallOpenDrawer: (state, _getters, _rootState, rootGetters) => {
    return [
      state.shallOpenDrawer,
      rootGetters['matchMedia/isDesktop']
    ].some(e => e)
  }
}

export const mutations: MutationTree<RootState> = {
  TOGGLE_DRAWER: (state) => {
    state.shallOpenDrawer = !state.shallOpenDrawer
  }
}

export const actions: ActionTree<RootState, RootState> = {
  toggleDrawer ({ commit }) {
    commit('TOGGLE_DRAWER')
  }
}
