import Vue from 'vue'

type mixinMatchMediaData = {
  'common/matchMedia/desktop/matches': boolean;
  'common/matchMedia/desktop/mediaQueryList': null | MediaQueryList
}

export default Vue.extend({
  data (): mixinMatchMediaData {
    return {
      'common/matchMedia/desktop/matches': false,
      'common/matchMedia/desktop/mediaQueryList': null
    }
  },
  mounted (): void {
    this['common/matchMedia/desktop/mediaQueryList'] = window.matchMedia('screen and (min-width: 1024px)')
    this['common/matchMedia/desktop/mediaQueryList'].addEventListener('change', this['common/matchMedia/desktop/onChange'])
    this['common/matchMedia/desktop/matches'] = this['common/matchMedia/desktop/mediaQueryList'].matches
  },
  destroyed (): void {
    if (this['common/matchMedia/desktop/mediaQueryList']) {
      this['common/matchMedia/desktop/mediaQueryList'].removeEventListener('change', this['common/matchMedia/desktop/onChange'])
    }
  },
  methods: {
    'common/matchMedia/desktop/onChange' (e: MediaQueryListEvent): void {
      this['common/matchMedia/desktop/matches'] = e.matches
    }
  }
})
