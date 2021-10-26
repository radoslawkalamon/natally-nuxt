import Vue from 'vue'

type NavigationListItem = {
  label: string;
  target?: string;
  to: string;
  rel?: string;
}

export default Vue.extend({
  name: 'BlocksNavigationDrawer',
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
          to: '/o-mnie',
          rel: 'noopener noreferrer'
        },
        {
          label: 'Poezja 3.14',
          to: '/poezja-314'
        },
        {
          label: 'Audiobooki',
          to: '/audiobooki'
        },
        {
          label: 'Kontakt',
          target: '_blank',
          to: '/kontakt',
          rel: 'noopener noreferrer'
        }
      ]
    }
  }
})
