import { headDefault, getURL } from './factory.head.utils'

type FactoryHeadSchemaPrimaryimageArgs = {
  path: string
  imageOpenGraph?: string
}

export const factoryHeadSchemaPrimaryimage = ({
  path,
  imageOpenGraph = headDefault.imageOpenGraph
}: FactoryHeadSchemaPrimaryimageArgs) => ({
  hid: 'schema:ImageObject',
  '@type': 'ImageObject',
  '@id': getURL({ path, anchor: '#primaryimage' }),
  inLanguage: 'pl-PL',
  url: getURL({ path: imageOpenGraph }),
  contentUrl: getURL({ path: imageOpenGraph }),
  width: 1200,
  height: 630
})
