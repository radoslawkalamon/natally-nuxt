import { headDefault, getURL, getTitle } from './factory.head.utils'

export const factoryHead = () => ({
  htmlAttrs: {
    lang: 'pl'
  },
  title: getTitle(),
  link: [
    // Icons
    { rel: 'shortcut icon', type: 'image/png', href: '/images/common.icon.192x192.png' },
    { rel: 'shortcut icon', sizes: '192x192', href: '/images/common.icon.192x192.png' },
    { rel: 'apple-touch-icon', href: '/images/common.icon.192x192.white.png' },
    // Posts Feed
    // @feed-module
    // Audiobook Feed
    { rel: 'alternate', type: 'application/rss+xml', title: getTitle({ title: 'Audiobooki' }), href: 'http://feeds.soundcloud.com/users/soundcloud:users:618891150/sounds.rss' },
    // Canonical URL
    { rel: 'canonical', href: getURL(), hid: 'link:canonical' }
  ],
  meta: [
    // General
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'format-detection', content: 'telephone=no' },
    // Style
    { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
    // Robots
    { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
    { name: 'description', content: headDefault.description, hid: 'meta:description' },
    // OpenGraph
    { property: 'og:locale', content: 'pl_PL' },
    { property: 'og:type', content: 'website', hid: 'meta:og:type' },
    { property: 'og:title', content: getTitle(), hid: 'meta:og:title' },
    { property: 'og:description', content: headDefault.description, hid: 'meta:og:description' },
    { property: 'og:url', content: getURL(), hid: 'meta:og:url' },
    { property: 'og:site_name', content: getTitle() },
    { property: 'og:image', content: getURL({ path: headDefault.imageOpenGraph }), hid: 'meta:og:image' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:image', template: getURL({ path: headDefault.imageOpenGraph }), hid: 'meta:twitter:image' }
  ]
})
