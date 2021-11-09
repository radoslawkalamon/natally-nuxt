import { factoryHeadSchemaWebsite } from '@/utils/factory.head.schema.website'

describe('Utils / Factory / Head / Schema / Website', () => {
  test('shall match snapshot', () => {
    expect(factoryHeadSchemaWebsite()).toMatchSnapshot()
  })
})
