import { factoryHeadSchemaBreadcrumbs } from '@/utils/factory.head.schema.breadcrumbs'

describe('Utils / Factory / Head / Schema / Breadcrumbs', () => {
  test('shall match snapshot', () => {
    const args = {
      breadcrumbs: [
        {
          name: 'Test',
          path: '/test/'
        },
        {
          name: 'Path',
          path: '/test/path/'
        }
      ],
      path: '/test/path/'
    }
    expect(factoryHeadSchemaBreadcrumbs(args)).toMatchSnapshot()
  })
})
