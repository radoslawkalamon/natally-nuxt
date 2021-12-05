import Vue from 'vue'

type AudiobookService = {
  icon: String,
  name: String,
  url: String,
}

export default Vue.extend({
  name: 'BlocksListAudiobookServices',
  components: {
    ComponentsCardAudiobookService: () => import(/* webpackChunkName: "components" */'@/components/components/CardAudiobookService/CardAudiobookService.vue')
  },
  computed: {
    audiobookServices (): AudiobookService[] {
      return [
        {
          icon: require('./images/apple-podcasts.svg'),
          name: 'Apple Podcasts',
          url: '/audiobooki/itunes/'
        },
        {
          icon: require('./images/castbox.svg'),
          name: 'Castbox',
          url: '/audiobooki/castbox/'
        },
        {
          icon: require('./images/google-podcasts.svg'),
          name: 'Google Podcasts',
          url: '/audiobooki/google-podcasts/'
        },
        {
          icon: require('./images/pocket-casts.svg'),
          name: 'Pocket Casts',
          url: '/audiobooki/pocket-casts/'
        },
        {
          icon: require('./images/soundcloud.svg'),
          name: 'Soundcloud',
          url: '/audiobooki/soundcloud/'
        },
        {
          icon: require('./images/spotify.svg'),
          name: 'Spotify',
          url: '/audiobooki/spotify/'
        },
        {
          icon: require('./images/youtube.svg'),
          name: 'YouTube',
          url: '/audiobooki/youtube/'
        }
      ]
    }
  }
})
