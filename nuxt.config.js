import { factoryHead } from './utils/factory.head'
import { nuxtHooksContentFileBeforeParseTextAlignment } from './utils/nuxt.hooks.content.file.beforeParse.textAlignment'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  head: factoryHead(),
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/styles/variables.css',
    '@/assets/styles/schemas.css',
    '@/assets/styles/body.css'
  ],
  router: {
    trailingSlash: true
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    { path: '@/components', extensions: ['vue'] }
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
  hooks: {
    'content:file:beforeParse': nuxtHooksContentFileBeforeParseTextAlignment
  },
  build: {
    extractCSS: true,
    loaders: {
      imgUrl: {
        limit: -1
      }
    }
  },
  generate: {
    fallback: '404.html'
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
