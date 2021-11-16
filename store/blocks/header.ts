import type { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  isScrollBeyondThreshold: true,
  isScrollUp: false,
  previousScrollPosition: 0
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  shallShowHeader: (state, _getters, _rootState, rootGetters) => {
    return [
      rootGetters['blocks/drawer/shallOpenDrawer'],
      state.isScrollBeyondThreshold,
      state.isScrollUp,
      rootGetters['matchMedia/isDesktop']
    ].some(e => e)
  }
}

export const mutations: MutationTree<RootState> = {
  UPDATE_IS_SCROLL_BEYOND_THRESHOLD: (state, scrollYPosition: number) => {
    const scrollThreshold = 80
    state.isScrollBeyondThreshold = scrollYPosition < scrollThreshold
  },
  UPDATE_IS_SCROLL_UP: (state, scrollYPosition: number) => {
    state.isScrollUp = state.previousScrollPosition > scrollYPosition
  },
  UPDATE_PREVIOUS_SCROLL_POSITION: (state, scrollYPosition: number) => {
    state.previousScrollPosition = scrollYPosition
  }
}

export const actions: ActionTree<RootState, RootState> = {
  updateScrollYPosition ({ commit }) {
    const scrollYPosition = window.scrollY
    commit('UPDATE_IS_SCROLL_BEYOND_THRESHOLD', scrollYPosition)
    commit('UPDATE_IS_SCROLL_UP', scrollYPosition)
    commit('UPDATE_PREVIOUS_SCROLL_POSITION', scrollYPosition)
  }
}
