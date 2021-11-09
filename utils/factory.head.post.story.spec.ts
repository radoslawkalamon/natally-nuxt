import { factoryHeadPostStory } from '@/utils/factory.head.post.story'

describe('Utils / Factory / Head / Post / Poem', () => {
  test('shall match snapshot', () => {
    const dto = {
      audiobookId: '0',
      createdAt: new Date('2019-04-06T17:50:57+00:00'),
      description: 'Rano dwie rzeczy potrafiły ją obudzić – kubek wypełniony czarnym płynem z kofeiną lub jego palce delikatnie muskające jej ciało.',
      imageCover: '/images/opowiadania/opowiadania.proste-rzeczy.1x.webp',
      imageCover2x: '/images/opowiadania/opowiadania.proste-rzeczy.2x.webp',
      imagePath: '/images/opowiadania/',
      imageOpenGraph: '/images/opowiadania/opowiadania.proste-rzeczy.opengraph.jpg',
      timeReading: 31,
      path: '/opowiadania/proste-rzeczy/',
      title: 'Proste rzeczy',
      updatedAt: new Date('2021-02-14T12:31:27+00:00')
    }
    expect(factoryHeadPostStory(dto)).toMatchSnapshot()
  })
})
