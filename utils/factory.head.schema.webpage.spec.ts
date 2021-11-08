import { factoryHeadSchemaWebpage, FactoryHeadSchemaWebpageType } from '@/utils/factory.head.schema.webpage'

describe('Utils / Factory / Head / Schema / Webpage', () => {
  test('shall match snapshot | { path, title, webpageType = WebPage }', () => {
    const args = {
      path: '/test/path/',
      title: 'Test title',
      webpageType: FactoryHeadSchemaWebpageType.WebPage
    }
    expect(factoryHeadSchemaWebpage(args)).toMatchSnapshot()
  })

  test('shall match snapshot | { category, path, title, webpageType = CollectionPage }', () => {
    const args = {
      category: 'Test category',
      path: '/path/test/',
      title: 'Title test',
      webpageType: FactoryHeadSchemaWebpageType.CollectionPage
    }
    expect(factoryHeadSchemaWebpage(args)).toMatchSnapshot()
  })

  test('shall match snapshot | { category, createdAt, path, title, webpageType = WebPage }', () => {
    const args = {
      category: 'Test category',
      createdAt: '2021-11-01T00:00:00+00:00',
      path: '/path/test/',
      title: 'Title test',
      webpageType: FactoryHeadSchemaWebpageType.WebPage
    }
    expect(factoryHeadSchemaWebpage(args)).toMatchSnapshot()
  })

  test('shall match snapshot | { category, path, title, updatedAt, webpageType = CollectionPage }', () => {
    const args = {
      category: 'Test category',
      path: '/path/test/',
      title: 'Title test',
      updatedAt: '2021-11-03T00:00:00+00:00',
      webpageType: FactoryHeadSchemaWebpageType.CollectionPage
    }
    expect(factoryHeadSchemaWebpage(args)).toMatchSnapshot()
  })

  test('shall match snapshot | { category, createdAt, path, title, updatedAt, webpageType = WebPage }', () => {
    const args = {
      createdAt: '2021-11-05T00:00:00+00:00',
      path: '/path/test/',
      title: 'Title test',
      updatedAt: '2021-11-06T00:00:00+00:00',
      webpageType: FactoryHeadSchemaWebpageType.WebPage
    }
    expect(factoryHeadSchemaWebpage(args)).toMatchSnapshot()
  })
})
