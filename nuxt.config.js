import { $content } from '@nuxt/content'
import { DTOMetaPage } from './utils/dto.meta.page'
import { factoryHead } from './utils/factory.head'
import { getURL } from './utils/factory.head.utils'
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
  loading: '@/components/blocks/LoadingBar/LoadingBar.vue',
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module'
  ],
  modules: [
    '@nuxt/content',
    '@nuxtjs/sitemap'
  ],
  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},
  // Build Configuration: https://go.nuxtjs.dev/config-build
  hooks: {
    'content:file:beforeParse': nuxtHooksContentFileBeforeParseTextAlignment
  },
  build: {
    babel: {
      presets ({ isClient }, preset) {
        if (isClient) {
          preset[1].targets = {
            chrome: '95'
          }
        }
        return [preset]
      }
    },
    extractCSS: true,
    loaders: {
      imgUrl: {
        limit: -1
      },
      vue: {
        compilerOptions: {
          modules: [{
            preTransformNode (astEl) {
              if (process.env.NODE_ENV === 'production') {
                const { attrsMap, attrsList } = astEl
                const tagAttributesForTesting = ['data-test', ':data-test', 'v-bind:data-test']
                tagAttributesForTesting.forEach((attribute) => {
                  if (attrsMap[attribute]) {
                    delete attrsMap[attribute]
                    const index = attrsList.findIndex(x => x.name === attribute)
                    attrsList.splice(index, 1)
                  }
                })
              }
              return astEl
            }
          }]
        }
      }
    },
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    }
  },
  generate: {
    crawler: false,
    fallback: '404.html',
    async routes () {
      const pages = await $content('/', { deep: true }).fetch()
      return pages.map(page => (new DTOMetaPage(page)).path.replace('index', ''))
    }
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
  },
  sitemap: {
    hostname: getURL(),
    async routes () {
      const pages = await $content('/', { deep: true }).fetch()
      return pages.map((page) => {
        const PageDTO = new DTOMetaPage(page)
        return {
          url: PageDTO.path.replace('index', ''),
          img: [{
            url: PageDTO.imageOpenGraph
          }],
          lastmod: PageDTO.updatedAt
        }
      })
    },
    trailingSlash: true
  }
}
