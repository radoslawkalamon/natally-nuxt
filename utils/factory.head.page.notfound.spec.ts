import { factoryHeadPageNotfound } from '@/utils/factory.head.page.notfound'

describe('Utils / Factory / Head / Schema / Website', () => {
  test('shall match snapshot', () => {
    expect(factoryHeadPageNotfound()).toMatchSnapshot()
  })
})
