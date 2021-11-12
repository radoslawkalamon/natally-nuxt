import Vue from 'vue'

export default Vue.extend({
  name: 'PoemsSmutek20',
  head () {
    return {
      script: [
        {
          hid: 'script:twitter:widgets',
          async: true,
          charset: 'utf-8',
          src: 'https://platform.twitter.com/widgets.js',
          defer: true
        }
      ]
    }
  }
})
