import { factoryHeadPageNotfound } from '@/utils/factory.head.page.notfound'

describe('Utils / Factory / Head / Page / 404', () => {
  test('shall match snapshot', () => {
    expect(factoryHeadPageNotfound()).toMatchSnapshot()
  })
})
