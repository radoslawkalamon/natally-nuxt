import { factoryHeadSchemaPerson } from '@/utils/factory.head.schema.person'

describe('Utils / Factory / Head / Schema / Person', () => {
  test('shall match snapshot', () => {
    expect(factoryHeadSchemaPerson()).toMatchSnapshot()
  })
})
