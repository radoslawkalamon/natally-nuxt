import nodeFs from 'fs'
import nodePath from 'path'
import { $content } from '@nuxt/content'
import { DTOMetaPage } from './utils/dto.meta.page'
import { factoryHead } from './utils/factory.head'
import { getTitle, getURL, headDefault } from './utils/factory.head.utils'
import { nuxtHooksContentFileBeforeParseTextAlignment } from './utils/nuxt.hooks.content.file.beforeParse.textAlignment'

export default {
  target: 'static',
  build: {
    babel: {
      presets ({ isClient }, preset) {
        if (isClient) {
          preset[1].targets = {
            chrome: '98'
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
    '@nuxt/typescript-build'
  ],
  css: [
    '@/assets/styles/variables.css',
    '@/assets/styles/schemas.css',
    '@/assets/styles/body.css'
  ],
  feed () {
    return [{
      path: '/feed.xml',
      create: async (feed) => {
        const pagesToFilter = [
          '/',
          '/audiobooki/',
          '/poezja-314/',
          '/polityka-prywatnosci/'
        ]

        const pages = await $content('/', { deep: true }).fetch()
        const articlesMeta = pages
          .map(page => new DTOMetaPage(page))
          .filter(page => !pagesToFilter.includes(page.path))
          .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())

        articlesMeta.forEach((articleMeta) => {
          const { createdAt, description, imageOpenGraph, path, title } = articleMeta
          const URL = getURL({ path })
          feed.addItem({
            content: `<p>${description}</p><p>Czytaj dalej na <a href="${URL}">${URL}</a></p>`,
            date: createdAt,
            description,
            id: URL,
            image: {
              length: nodeFs.statSync(nodePath.resolve(__dirname, `static${imageOpenGraph}`)).size,
              url: getURL({ path: imageOpenGraph })
            },
            link: URL,
            title
          })
        })

        feed.options = {
          copyright: `169cm.pl © ${(new Date()).getFullYear()}`,
          description: headDefault.description,
          image: getURL({ path: '/images/common.icon.192x192.white.png' }),
          language: 'pl-PL',
          link: getURL(),
          id: 'rss2',
          title: getTitle()
        }
      },
      cacheTime: 1000 * 60 * 60 * 24,
      type: 'rss2'
    }]
  },
  generate: {
    crawler: false,
    fallback: '404.html',
    async routes () {
      const pages = await $content('/', { deep: true }).fetch()
      return pages.map((page) => {
        const pageMeta = new DTOMetaPage(page)
        return pageMeta.path
      })
    }
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
    filter ({ routes }) {
      const pagesToFilter = []
      return routes.filter(route => !pagesToFilter.includes(route.path))
    },
    hostname: getURL(),
    async routes () {
      const pages = await $content('/', { deep: true }).fetch()
      return pages.map((page) => {
        const pageMeta = new DTOMetaPage(page)
        return {
          url: pageMeta.path,
          img: [{
            url: pageMeta.imageOpenGraph
          }],
          lastmod: pageMeta.updatedAt
        }
      })
    },
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
