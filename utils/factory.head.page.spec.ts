import { factoryHeadPage } from '@/utils/factory.head.page'
import { FactoryHeadSchemaWebpageType } from '@/utils/factory.head.schema.webpage'

describe('Utils / Factory / Head / Page', () => {
  test('shall match snapshot | * | WebPage', () => {
    const dto = {
      createdAt: new Date('2021-08-07T16:08:02+00:00'),
      description: 'Rzeczywistość uwypuklona. Staram się spojrzeć z zupełnie innej perspektywy na rzeczy, zjawiska, a nawet słowa.',
      imageOpenGraph: '/images/common.opengraph.png',
      title: 'Poezja 3.14',
      path: '/poezja-314/',
      updatedAt: new Date('2016-12-28T21:23:23+00:00')
    }
    const webpageType = FactoryHeadSchemaWebpageType.WebPage
    expect(factoryHeadPage(dto, webpageType)).toMatchSnapshot()
  })

  test('shall match snapshot | * | CollectionPage', () => {
    const dto = {
      createdAt: new Date('2021-08-07T16:08:02+00:00'),
      description: 'Posłuchaj audiobooków na podstawie moich opowiadań, na swoich ulubionych platformach podcasterskich.',
      imageOpenGraph: '/images/common.opengraph.png',
      title: 'Strona główna',
      path: '/',
      updatedAt: new Date('2016-12-28T21:23:23+00:00')
    }
    const webpageType = FactoryHeadSchemaWebpageType.CollectionPage
    expect(factoryHeadPage(dto, webpageType)).toMatchSnapshot()
  })
})
