import { factoryHead } from '@/utils/factory.head'

describe('Utils / Factory / Head / Schema / Website', () => {
  test('shall match snapshot', () => {
    expect(factoryHead()).toMatchSnapshot()
  })
})
