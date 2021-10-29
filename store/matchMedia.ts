import type { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  desktop: false
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  isDesktop: state => state.desktop
}

export const mutations: MutationTree<RootState> = {
  SET_IS_DESKTOP: (state, booly: boolean) => {
    state.desktop = booly
  }
}

export const actions: ActionTree<RootState, RootState> = {
  init ({ dispatch }) {
    dispatch('registerMatchMedia', { name: 'desktop', mediaQuery: '(min-width: 1024px)' })
  },
  registerMatchMedia ({ commit }, { mediaQuery, name }: Record<string, string>) {
    const commitName = `SET_IS_${name.toUpperCase()}`
    const matchMedia = window.matchMedia(`screen and ${mediaQuery}`)
    matchMedia.addEventListener('change', (e: MediaQueryListEvent) => commit(commitName, e.matches))
    commit(commitName, matchMedia.matches)
  }
}
