import { getTitle, getURL } from './factory.head.utils'

type factoryHeadSchemaBreadcrumbsArgs = {
  breadcrumbs: Array<{
    name: string
    path: string
  }>
  path: string
}

const filterBreadcrumbs = ({ path }: factoryHeadSchemaBreadcrumbsArgs['breadcrumbs'][0]) => {
  return getURL({ path }) !== getURL()
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
      name: getTitle(),
      item: getURL()
    },
    ...breadcrumbs
      .filter(filterBreadcrumbs)
      .map(mapBreadcrumb)
  ]
})
