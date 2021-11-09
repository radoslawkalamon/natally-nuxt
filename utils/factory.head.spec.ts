import { factoryHead } from '@/utils/factory.head'

describe('Utils / Factory / Head', () => {
  test('shall match snapshot', () => {
    expect(factoryHead()).toMatchSnapshot()
  })
})
