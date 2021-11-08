import { factoryHeadSchemaArticle } from '@/utils/factory.head.schema.article'

describe('Utils / Factory / Head / Schema / Article', () => {
  test('shall match snapshot | { category, createdAt, path, title, updatedAt }', () => {
    const args = {
      category: 'Test category',
      createdAt: '2021-11-01T00:00:00+00:00',
      path: '/path/test/',
      title: 'Title test',
      updatedAt: '2021-11-04T00:00:00+00:00'
    }
    expect(factoryHeadSchemaArticle(args)).toMatchSnapshot()
  })

  test('shall match snapshot | { category, createdAt, imageOpenGraph, path, title, updatedAt }', () => {
    const args = {
      category: 'Test category',
      createdAt: '2021-11-06T00:00:00+00:00',
      imageOpenGraph: '/images/test.path.opengraph.png',
      path: '/path/test/',
      title: 'Title test',
      updatedAt: '2021-11-02T00:00:00+00:00'
    }
    expect(factoryHeadSchemaArticle(args)).toMatchSnapshot()
  })
})
