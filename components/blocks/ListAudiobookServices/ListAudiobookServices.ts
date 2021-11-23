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
          url: 'https://169cm.pl/audiobooki/itunes'
        },
        {
          icon: require('./images/castbox.svg'),
          name: 'Castbox',
          url: 'https://169cm.pl/audiobooki/castbox'
        },
        {
          icon: require('./images/google-podcasts.svg'),
          name: 'Google Podcasts',
          url: 'https://169cm.pl/audiobooki/google-podcasts'
        },
        {
          icon: require('./images/pocket-casts.svg'),
          name: 'Pocket Casts',
          url: 'https://169cm.pl/audiobooki/pocket-casts'
        },
        {
          icon: require('./images/soundcloud.svg'),
          name: 'Soundcloud',
          url: 'https://169cm.pl/audiobooki/soundcloud'
        },
        {
          icon: require('./images/spotify.svg'),
          name: 'Spotify',
          url: 'https://169cm.pl/audiobooki/spotify'
        },
        {
          icon: require('./images/youtube.svg'),
          name: 'YouTube',
          url: 'https://169cm.pl/audiobooki/youtube'
        }
      ]
    }
  }
})
