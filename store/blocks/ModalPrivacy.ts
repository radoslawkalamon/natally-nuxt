import type { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  shallOpenModalPrivacy: false
})

enum cookieNames {
  Core = 'privacy-settings-core',
  Soundcloud = 'privacy-settings-soundcloud'
}

enum cookieDefault {
  Core = '1',
  Soundcloud = '0'
}

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  getCookieCore: () => Number(window.localStorage.getItem(cookieNames.Core) || cookieDefault.Core),
  getCookieSoundcloud: () => Number(window.localStorage.getItem(cookieNames.Soundcloud) || cookieDefault.Soundcloud),
  shallOpenModalPrivacy: state => state.shallOpenModalPrivacy
}

export const mutations: MutationTree<RootState> = {
  TOGGLE_MODAL_PRIVACY: (state) => {
    state.shallOpenModalPrivacy = !state.shallOpenModalPrivacy
  }
}

export const actions: ActionTree<RootState, RootState> = {
  applyCookieSettings ({ dispatch }) {
    dispatch('toggleModalPrivacy')
    window.location.reload()
  },
  toggleModalPrivacy ({ commit }) {
    commit('TOGGLE_MODAL_PRIVACY')
  },
  updateCookieSoundcloud (_ctx, value: boolean) {
    window.localStorage.setItem(cookieNames.Soundcloud, Number(value).toString())
  }
}
