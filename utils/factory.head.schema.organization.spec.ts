import { factoryHeadSchemaOrganization } from '@/utils/factory.head.schema.organization'

describe('Utils / Factory / Head / Schema / Organization', () => {
  test('shall match snapshot', () => {
    expect(factoryHeadSchemaOrganization()).toMatchSnapshot()
  })
})
