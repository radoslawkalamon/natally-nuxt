import { nuxtHooksContentFileBeforeParseTextAlignment } from '@/utils/nuxt.hooks.content.file.beforeParse.textAlignment'

const alignTextBeforeFactory = (mark: string) => `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget bibendum quam.
${mark} Text align test
Quisque consectetur, augue id placerat scelerisque, lorem libero varius ligula, at sagittis odio risus eget mi. Sed mi eros, tincidunt et viverra eu, sagittis ut nisi.`

const alignTextAfterFactory = (cls: string) => `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget bibendum quam.
<p class="${cls}">Text align test</p>
Quisque consectetur, augue id placerat scelerisque, lorem libero varius ligula, at sagittis odio risus eget mi. Sed mi eros, tincidunt et viverra eu, sagittis ut nisi.`

const documentBefore = `---
createdAt: 2021-06-20T14:59:25+00:00
description: Lekki powiew chłodu z przyszłości.
imageCover: poezja-314.mieta.webp
imageOpenGraph: poezja-314.mieta.opengraph.png
title: Mięta
updatedAt: 2021-06-20T15:13:03+00:00
---

-|- Najpierw była

&nbsp;

|-- między

-|- mięta

--| nami

&nbsp;

--| A teraz jestem

--| pomięta.
`

const documentAfter = `---
createdAt: 2021-06-20T14:59:25+00:00
description: Lekki powiew chłodu z przyszłości.
imageCover: poezja-314.mieta.webp
imageOpenGraph: poezja-314.mieta.opengraph.png
title: Mięta
updatedAt: 2021-06-20T15:13:03+00:00
---

<p class="text-alignment-center">Najpierw była</p>

&nbsp;

<p class="text-alignment-left">między</p>

<p class="text-alignment-center">mięta</p>

<p class="text-alignment-right">nami</p>

&nbsp;

<p class="text-alignment-right">A teraz jestem</p>

<p class="text-alignment-right">pomięta.</p>
`

describe('Utils / Nuxt / Hooks / Content / File / beforeParse / Text Aligment', () => {
  describe('Functionality', () => {
    test('shall leave file other than Markdown', () => {
      const file = {
        path: '/test-path/',
        extension: '.csv',
        data: '-|- Center align test'
      }
      nuxtHooksContentFileBeforeParseTextAlignment(file)
      expect(file.data).toBe('-|- Center align test')
    })

    test('shall align text to left', () => {
      const file = {
        path: '/test-path/',
        extension: '.md',
        data: alignTextBeforeFactory('|--')
      }
      nuxtHooksContentFileBeforeParseTextAlignment(file)
      expect(file.data).toBe(alignTextAfterFactory('text-alignment-left'))
    })

    test('shall align text to center', () => {
      const file = {
        path: '/test-path/',
        extension: '.md',
        data: alignTextBeforeFactory('-|-')
      }
      nuxtHooksContentFileBeforeParseTextAlignment(file)
      expect(file.data).toBe(alignTextAfterFactory('text-alignment-center'))
    })

    test('shall align text to right', () => {
      const file = {
        path: '/test-path/',
        extension: '.md',
        data: alignTextBeforeFactory('--|')
      }
      nuxtHooksContentFileBeforeParseTextAlignment(file)
      expect(file.data).toBe(alignTextAfterFactory('text-alignment-right'))
    })
  })

  describe('Document test', () => {
    test('shall parse document', () => {
      const file = {
        path: '/test-path/',
        extension: '.md',
        data: documentBefore
      }
      nuxtHooksContentFileBeforeParseTextAlignment(file)
      expect(file.data).toBe(documentAfter)
    })
  })
})
