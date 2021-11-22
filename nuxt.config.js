import { factoryHead } from './utils/factory.head'
import { getURL } from './utils/factory.head.utils'
import { nuxtFeed } from './utils/nuxt.feed'
import { nuxtGenerateRoutes } from './utils/nuxt.generate.routes'
import { nuxtHooksContentFileBeforeParseTextAlignment } from './utils/nuxt.hooks.content.file.beforeParse.textAlignment'
import { nuxtSitemapRoutes } from './utils/nuxt.sitemap.routes'

export default {
  target: 'static',
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
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/stylelint-module'
  ],
  css: [
    '@/assets/styles/variables.css',
    '@/assets/styles/schemas.css',
    '@/assets/styles/body.css'
  ],
  feed: nuxtFeed,
  generate: {
    crawler: false,
    fallback: '404.html',
    routes: nuxtGenerateRoutes
  },
  head: factoryHead(),
  hooks: {
    'content:file:beforeParse': nuxtHooksContentFileBeforeParseTextAlignment
  },
  loading: '@/components/blocks/LoadingBar/LoadingBar.vue',
  modules: [
    '@nuxt/content',
    '@nuxtjs/sitemap',
    '@nuxtjs/feed'
  ],
  router: {
    trailingSlash: true
  },
  sitemap: {
    hostname: getURL(),
    routes: nuxtSitemapRoutes,
    trailingSlash: true
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
