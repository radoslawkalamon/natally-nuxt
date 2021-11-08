import { headDefault, getURL } from './factory.head.utils'

type factoryHeadSchemaBreadcrumbsArgs = {
  breadcrumbs: Array<{
    name: string
    path: string
  }>
  path: string
}

const mapBreadcrumb = ({ name, path }: factoryHeadSchemaBreadcrumbsArgs['breadcrumbs'][0], index: number) => ({
  '@type': 'ListItem',
  position: index + 2,
  name,
  item: getURL({ path })
})

export const factoryHeadSchemaBreadcrumbs = ({
  breadcrumbs,
  path
}: factoryHeadSchemaBreadcrumbsArgs) => ({
  '@type': 'BreadcrumbList',
  '@id': getURL({ path, anchor: '#breadcrumb' }),
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: headDefault.title,
      item: getURL()
    },
    ...breadcrumbs.map(mapBreadcrumb)
  ]
})
