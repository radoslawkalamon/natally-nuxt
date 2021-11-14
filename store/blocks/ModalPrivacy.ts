import type { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  shallOpenModalPrivacy: false
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  shallOpenModalPrivacy: state => state.shallOpenModalPrivacy
}

export const mutations: MutationTree<RootState> = {
  TOGGLE_MODAL_PRIVACY: (state) => {
    state.shallOpenModalPrivacy = !state.shallOpenModalPrivacy
  }
}

export const actions: ActionTree<RootState, RootState> = {
  toggleModalPrivacy ({ commit }) {
    commit('TOGGLE_MODAL_PRIVACY')
  }
}
