import Vue from 'vue'

type NavigationListItem = {
  label: string;
  target?: string;
  to: string;
  rel?: string;
}

export default Vue.extend({
  name: 'ComponentsNavigationDrawer',
  components: {
    ComponentsLink: () => import(/* webpackChunkName: "components" */'@/components/components/Link/Link.vue'),
    WrappersNavigation: () => import(/* webpackChunkName: "wrappers-navigation" */'@/components/wrappers/Navigation/Navigation.vue')
  },
  computed: {
    list (): NavigationListItem[] {
      return [
        {
          label: 'Strona główna',
          to: '/'
        },
        {
          label: 'O mnie',
          target: '_blank',
          to: '/o-mnie/',
          rel: 'noopener noreferrer'
        },
        {
          label: 'Poezja 3.14',
          to: '/poezja-314/'
        },
        {
          label: 'Audiobooki',
          to: '/audiobooki/'
        },
        {
          label: 'Kontakt',
          target: '_blank',
          to: '/kontakt/',
          rel: 'noopener noreferrer'
        }
      ]
    }
  },
  methods: {
    onNavigationItemClick (): void {
      this.$emit('navigationItemClick')
    }
  }
})
