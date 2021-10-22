import Vue from 'vue'

export default Vue.extend({
  name: 'BlocksSocialMedia',
  computed: {
    profiles (): Record<string, string> {
      return {
        facebook: 'https://www.facebook.com/169cmpl',
        instagram: 'https://instagram.com/radoslawkalamon',
        twitter: 'https://twitter.com/radoslawkalamon',
        soundcloud: 'https://soundcloud.com/169cmpl'
      }
    },
    labels (): Record<string, string> {
      return {
        facebook: 'Odwiedź mnie na Facebooku',
        instagram: 'Odwiedź mnie na Instagramie',
        twitter: 'Odwiedź mnie na Twitterze',
        soundcloud: 'Odwiedź mnie na Soundcloudzie'
      }
    }
  },
  methods: {
    linkAttrs (serviceName: string) {
      return {
        'aria-label': this.labels[serviceName],
        class: 'social-media__link',
        href: this.profiles[serviceName],
        rel: 'noopener noreferrer',
        target: '_blank',
        title: this.labels[serviceName]
      }
    }
  }
})
