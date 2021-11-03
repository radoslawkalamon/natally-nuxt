export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  head: {
    htmlAttrs: {
      lang: 'pl'
    },
    link: [
      { rel: 'shortcut icon', type: 'image/png', href: '/images/icon-192x192.png' },
      { rel: 'shortcut icon', sizes: '192x192', href: '/images/icon-192x192.png' },
      { rel: 'apple-touch-icon', href: '/images/icon-192x192-white.png' }
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    title: '169cm.pl'
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/styles/variables.css',
    '@/assets/styles/schemas.css',
    '@/assets/styles/body.css'
  ],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    { path: '~/components', extensions: ['vue'] }
  ],
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module'
  ],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content'
  ],
  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true
  },
  storybook: {
    parameters: {
      controls: {
        hideNoControlsWarning: true
      },
      options: {
        storySort: {
          method: 'alphabetical'
        }
      },
      previewTabs: {
        'storybook/docs/panel': {
          hidden: true
        }
      }
    }
  }
}
