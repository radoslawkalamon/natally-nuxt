import { factoryHeadSchemaPrimaryimage } from '@/utils/factory.head.schema.primaryimage'

describe('Utils / Factory / Head / Schema / Primary image', () => {
  test('shall match snapshot | { path }', () => {
    const args = {
      path: '/test/path/'
    }
    expect(factoryHeadSchemaPrimaryimage(args)).toMatchSnapshot()
  })

  test('shall match snapshot | { path, imageOpenGraph }', () => {
    const args = {
      path: '/test/path/',
      imageOpenGraph: '/images/test.path.opengraph.png'
    }
    expect(factoryHeadSchemaPrimaryimage(args)).toMatchSnapshot()
  })
})
