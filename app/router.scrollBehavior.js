/**
 * So, this is hacky one as hell, but without "await nuxt.$nextTick()" position from resolved was ignored ¯\_(ツ)_/¯
 * Yep, this Promise / async-await mix looks "interesting", but it works like a charm ;)
 */
export default function (_to, _from, savedPosition) {
  const nuxt = window['<%= globals.nuxt %>']
  const position = savedPosition || { x: 0, y: 0 }

  return new Promise((resolve) => {
    nuxt.$root.$once('triggerScroll', async () => {
      await nuxt.$nextTick()
      resolve(position)
    })
  })
}
